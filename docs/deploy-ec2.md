# EC2 (Self-hosted) 배포 가이드

> AWS EC2 기준으로 작성되었으나 DigitalOcean Droplet, Hetzner, GCP Compute Engine 등 일반 Linux 서버에도 동일하게 적용됩니다.

## 권장 서버 스펙

| 항목 | 최소 | 권장 |
|------|------|------|
| OS | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |
| CPU | 1 vCPU | 2 vCPU |
| RAM | 1 GB | 2 GB |
| 스토리지 | 20 GB | 30 GB |
| 포트 개방 | 22, 80, 443 | 22, 80, 443 |

---

## 사전 준비

### 1. 로컬 환경
- [ ] GitHub 레포지토리에 코드 푸시 완료
- [ ] `.env.local` 내용 별도 메모 (서버에 직접 입력할 값)

### 2. 서버 초기 설정

```bash
# 패키지 업데이트
sudo apt update && sudo apt upgrade -y

# 필수 도구 설치
sudo apt install -y git curl nginx certbot python3-certbot-nginx
```

### 3. Node.js 설치 (nvm 권장)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc

nvm install 20
nvm use 20
nvm alias default 20

# 확인
node -v   # v20.x.x
npm -v
```

### 4. PM2 설치 (프로세스 관리자)

```bash
npm install -g pm2
```

---

## 배포 절차

### Step 1. 소스 코드 배포

```bash
# 서버에서 레포지토리 클론
cd /var/www
sudo git clone https://github.com/YOUR_ORG/YOUR_REPO.git random-decision
sudo chown -R $USER:$USER /var/www/random-decision
cd /var/www/random-decision
```

### Step 2. 환경변수 설정

```bash
# .env.local 생성 (서버에서 직접 작성)
cat > /var/www/random-decision/.env.local << 'EOF'
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_BASE_URL=https://utilverse.info
EOF

# 권한 제한
chmod 600 /var/www/random-decision/.env.local
```

### Step 3. 의존성 설치 및 빌드

```bash
cd /var/www/random-decision

npm install
npm run build
```

> 빌드 완료 후 `.next/` 디렉터리 생성 확인

### Step 4. PM2로 앱 실행

```bash
# ecosystem 파일 생성
cat > /var/www/random-decision/ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'random-decision',
    script: 'node_modules/.bin/next',
    args: 'start -p 3000',
    cwd: '/var/www/random-decision',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# 앱 시작
pm2 start ecosystem.config.js

# 서버 재시작 시 자동 실행 등록
pm2 save
pm2 startup
# 출력된 sudo 명령어 실행

# 상태 확인
pm2 status
pm2 logs random-decision --lines 30
```

### Step 5. Nginx 리버스 프록시 설정

```bash
sudo nano /etc/nginx/sites-available/utilverse
```

```nginx
# /etc/nginx/sites-available/utilverse

server {
    listen 80;
    server_name utilverse.info www.utilverse.info;

    # /random-decision 경로를 Next.js로 프록시
    location /random-decision {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # 정적 에셋 캐시 (Next.js _next/static)
    location /random-decision/_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, immutable, max-age=31536000";
    }

    # 루트 → 필요시 다른 서비스 또는 리다이렉트
    location / {
        return 301 /random-decision/en;
    }
}
```

```bash
# 설정 활성화
sudo ln -s /etc/nginx/sites-available/utilverse /etc/nginx/sites-enabled/
sudo nginx -t          # 문법 검사
sudo systemctl reload nginx
```

### Step 6. SSL 인증서 발급 (Let's Encrypt)

```bash
sudo certbot --nginx -d utilverse.info -d www.utilverse.info

# 자동 갱신 확인
sudo certbot renew --dry-run
```

Certbot이 Nginx 설정을 자동으로 HTTPS로 업데이트합니다.

---

## 업데이트 배포 (무중단)

```bash
cd /var/www/random-decision

# 최신 코드 pull
git pull origin main

# 의존성 업데이트 (package.json 변경 시)
npm install

# 재빌드
npm run build

# PM2 재시작 (무중단)
pm2 reload random-decision

# 확인
pm2 status
pm2 logs random-decision --lines 20
```

> 빌드 시간 동안 기존 프로세스가 트래픽을 처리하므로 다운타임 없음

---

## 배포 후 검증 체크리스트

### 필수
- [ ] `https://utilverse.info/random-decision/en` 접근 확인
- [ ] HTTPS 리다이렉트 작동 (HTTP → HTTPS)
- [ ] 정적 에셋 로드 확인 (`_next/static` 캐시 헤더 포함)
- [ ] `/random-decision/sitemap.xml` 응답 확인
- [ ] 6개 로케일 페이지 정상 렌더링
- [ ] RTL 로케일(`ar`) 레이아웃 확인

### 보안 헤더
```bash
# 응답 헤더 확인
curl -I https://utilverse.info/random-decision/en
```
- [ ] `Content-Security-Policy` 존재
- [ ] `X-Frame-Options: DENY`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] HTTPS 강제 (`Strict-Transport-Security`)

### 기능
- [ ] Coin Flip 3D 애니메이션
- [ ] Confetti 발사
- [ ] 다크/라이트 테마 전환
- [ ] 모바일 햄버거 메뉴

---

## Nginx 추가 보안 설정 (권장)

```nginx
# /etc/nginx/sites-available/utilverse의 server 블록 내 추가

# 불필요한 메서드 차단
if ($request_method !~ ^(GET|POST|HEAD)$) {
    return 405;
}

# 버전 숨김 (nginx.conf의 http 블록에 추가)
server_tokens off;

# HSTS (SSL 설정 후)
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

---

## 모니터링

### PM2 기본 모니터링

```bash
pm2 monit                    # 실시간 CPU/메모리 모니터링
pm2 logs random-decision     # 실시간 로그
pm2 logs random-decision --lines 100 --err  # 에러 로그만
```

### 로그 로테이션

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### 디스크/메모리 알람 (선택)

```bash
# 간단한 디스크 사용량 체크 크론탭
crontab -e
# 추가:
# 0 9 * * * df -h | awk '$5 > 80 {print}' | mail -s "Disk Alert" admin@example.com
```

---

## 트러블슈팅

| 증상 | 원인 | 해결 |
|------|------|------|
| 502 Bad Gateway | PM2 앱 다운 | `pm2 status` → `pm2 restart random-decision` |
| 정적 파일 404 | Nginx location 설정 오류 | `sudo nginx -t` 후 location 블록 확인 |
| basePath 404 | Next.js basePath 미반영 | `.next/` 삭제 후 `npm run build` 재실행 |
| SSL 인증서 만료 | 자동 갱신 실패 | `sudo certbot renew` 수동 실행, cron 확인 |
| 빌드 메모리 부족 | RAM 1GB 이하 | `NODE_OPTIONS=--max-old-space-size=512 npm run build` |
| CSP 에러 (AdSense) | allow-list 미포함 | `next.config.js` CSP 도메인 추가 후 재배포 |
| 환경변수 미적용 | `.env.local` 누락 | 파일 존재 여부 확인 후 PM2 재시작 |

---

## 배포 자동화 (선택 — GitHub Actions)

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to EC2

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            cd /var/www/random-decision
            git pull origin main
            npm install
            npm run build
            pm2 reload random-decision
```

GitHub Secrets 설정:
- `EC2_HOST`: 서버 IP 또는 도메인
- `EC2_USER`: `ubuntu` (Ubuntu AMI 기본값)
- `EC2_SSH_KEY`: EC2 private key 내용 (`~/.ssh/id_rsa` 전체)

---

## AdSense 활성화 후 추가 작업

```bash
# .env.local 업데이트
nano /var/www/random-decision/.env.local
# NEXT_PUBLIC_ADSENSE_CLIENT 실제 값으로 교체

# 재빌드 및 재시작
npm run build
pm2 reload random-decision

# ads.txt 추가 (public/ 폴더에 파일 생성 후 재빌드)
echo "google.com, pub-XXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0" \
  > /var/www/random-decision/public/ads.txt
npm run build
pm2 reload random-decision
```
