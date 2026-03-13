import type { BlogPost } from '../types'

export const toolPosts: BlogPost[] = [
  {
    slug: 'history-of-coin-flipping',
    category: 'tools',
    title: 'Yazı Tura Atmanın Tarihi: Antik Roma\'dan Tarayıcınıza',
    description: 'Yazı tura atmanın antik ritüellerden modern dijital bir araca nasıl evrildiği.',
    publishedDate: '2026-01-12',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Yazı tura atmak insanlığın en eski karar verme araçlarından biridir. Olasılık teorisinden çok önce — insanlar anlaşmazlıkları çözmek için şansı bırakmak amacıyla işaretli nesneler kullanıyordu.",
    sections: [
      { heading: 'Antik Kökenler', body: ['Romalılar buna "navia aut caput" — gemiler veya kafalar diyordu. Roma paraları bir yüzünde bir tanrının başını, diğer yüzünde bir gemi taşıyordu.', 'Benzer uygulamalar tüm kültürlerde mevcuttu.'] },
      { heading: 'Spor ve Kurumsal Benimseme', body: ['Modern spor yazı tura atması 19. yüzyılda resmileştirildi.', 'Hukuk sistemleri de rastgele seçimi benimsedi.'] },
      { heading: 'Dijital Geçiş', body: ['İlk dijital yazı tura araçları 2000\'lerin başında ortaya çıktı.', 'Bugün, tarayıcı tabanlı araçlar kriptografik rastgelelik sağlıyor.'] }
    ],
    faqs: [
      { question: 'Yazı tura atmak gerçekten rastgele mi?', answer: 'Fiziksel yazı tura atmak tamamen rastgele değildir. Dijital yazı tura atmak istatistiksel olarak daha tutarlıdır.' }
    ],
    relatedSlugs: ['coin-flip-psychology', 'coin-flip-vs-dice-roll', 'famous-coin-flip-moments'],
    relatedToolHrefs: ['/coin-flip', '/random-number-generator', '/yes-or-no'],
    tags: ['yazı tura', 'tarih', 'rastgelelik', 'karar araçları']
  },
  {
    slug: 'coin-flip-vs-dice-roll',
    category: 'tools',
    title: 'Yazı Tura ve Zar Atma: Hangi Rastgele Aracı Kullanmalısınız?',
    description: 'Yazı tura ve zar atma arasında pratik bir karşılaştırma — her birini ne zaman kullanacağınız.',
    publishedDate: '2026-01-18',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Her iki araç da rastgele. Her ikisi de adil. Ama farklı karar biçimlerine hizmet ediyorlar.",
    sections: [
      { heading: 'Temel Fark: İkili ve Çoklu Sonuçlar', body: ['Yazı tura tam olarak iki sonuç üretir. Altı yüzlü zar altı sonuç üretir.'] },
      { heading: 'Yazı Tura Ne Zaman Kullanılır', body: ['Yazı tura ikili kararlar için idealdir: evet veya hayır, seçenek A veya seçenek B.'] },
      { heading: 'Zar Ne Zaman Kullanılır', body: ['Zar, üç ila altı seçeneğiniz olduğunda idealdir.'] }
    ],
    faqs: [
      { question: 'İkiden fazla seçenek için yazı tura kullanabilir miyim?', answer: 'Evet, ancak birden fazla atış gerektirir. Üç veya daha fazla seçenek için zar veya çark daha verimlidir.' }
    ],
    relatedSlugs: ['history-of-coin-flipping', 'coin-flip-psychology', 'dnd-dice-roller-guide'],
    relatedToolHrefs: ['/coin-flip', '/dice-roller', '/random-number-generator'],
    tags: ['yazı tura', 'zar atma', 'rastgele araçlar', 'karşılaştırma']
  },
  {
    slug: 'dnd-dice-roller-guide',
    category: 'tools',
    title: 'D&D için Zar Atıcı: Zindan Ustası için Pratik İş Akışı',
    description: 'Net bir zar atma iş akışıyla masadaki sürtüşmeyi azaltın ve anlatı momentumunu koruyun.',
    publishedDate: '2026-01-22',
    author: 'kimcomplete',
    readingTime: 7,
    intro: "Zindan Ustası her oturum için yüzlerce küçük karar verir. Her biri potansiyel bir anlatı kesintisidir.",
    sections: [
      { heading: 'D&D\'nin Temel Zarları', body: ['D&D yedi standart zar kullanır: d4, d6, d8, d10, d12, d20 ve d100.', 'd20 zarı D&D\'nin en önemli zarıdır.'] },
      { heading: 'Oturum Öncesi Kurulum', body: ['Her oturumdan önce, o oturum için en yaygın zar kombinasyonlarıyla zar atıcınızı hazırlayın.'] }
    ],
    faqs: [
      { question: 'Zindan Ustaları zarları gizli mi yoksa açık mı atmalı?', answer: 'Her iki yaklaşımın da avantajları var. Açık atış güven oluşturur ve dramatik anlar yaratır.' }
    ],
    relatedSlugs: ['coin-flip-vs-dice-roll', 'random-number-generator-uses', 'party-games-spinner-wheel'],
    relatedToolHrefs: ['/dice-roller', '/random-number-generator', '/spin-the-wheel'],
    tags: ['zar atıcı', 'D&D', 'masa üstü RPG', 'rastgele araçlar']
  },
  {
    slug: 'spin-wheel-streamer-guide',
    category: 'tools',
    title: 'Yayıncılar Daha İyi İzleyici Etkileşimi İçin Çarkları Nasıl Kullanır',
    description: 'Şeffaf ve ilgi çekici yayın anları oluşturmak için çark kullanımına yönelik pratik kurulum kılavuzu.',
    publishedDate: '2026-01-28',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Çark, yayıncılıkta en etkili izleyici etkileşim araçlarından biridir.",
    sections: [
      { heading: 'Çarklar Yayıncılıkta Neden İşe Yarar', body: ['Çarklar psikologların "beklenti heyecanı" dediği şeyi yaratır.'] },
      { heading: 'Maksimum Etki İçin Çarkınızı Kurun', body: ['En etkili yayın çarkları 6-12 dilim içerir.'] }
    ],
    faqs: [
      { question: 'Yayıncılık için en iyi çark aracı hangisi?', answer: 'OBS\'de tarayıcı kaynağı olarak yakalanabilen tarayıcı tabanlı çark araçları en iyi çalışır.' }
    ],
    relatedSlugs: ['party-games-spinner-wheel', 'wheel-spinner-complete-guide', 'random-number-generator-uses'],
    relatedToolHrefs: ['/spin-the-wheel', '/random-name-picker', '/yes-or-no'],
    tags: ['çark', 'yayıncılık', 'izleyici etkileşimi', 'Twitch']
  },
  {
    slug: 'random-number-generator-uses',
    category: 'tools',
    title: 'Rastgele Sayı Üretecinin 10 Şaşırtıcı Kullanımı',
    description: 'Rastgele sayı üreteçleri sadece sayı üretmekten çok daha fazlasını yapar.',
    publishedDate: '2026-02-03',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Çoğu insan rastgele sayı üretecini tek bir şey için kullanır: rastgele bir sayı üretmek. Ama araç bundan çok daha çok yönlüdür.",
    sections: [
      { heading: 'Kullanımlar 1-5', body: ['1. Yemek seçimi. 2. Görev önceliklendirme. 3. Egzersiz seçimi. 4. RPG karakter oluşturma. 5. Müzik seçimi.'] },
      { heading: 'Kullanımlar 6-10', body: ['6. Araştırma örnekleri seçme. 7. Görev atama. 8. Sunum sırası belirleme. 9. Şifre oluşturma. 10. Piyango numaraları.'] }
    ],
    faqs: [
      { question: 'Rastgele sayı üreteci gerçekten rastgele mi?', answer: 'Yazılım rastgele sayı üreteçleri teknik olarak yarı-rastgeledir.' }
    ],
    relatedSlugs: ['coin-flip-vs-dice-roll', 'lottery-number-myths', 'random-facts-about-randomness'],
    relatedToolHrefs: ['/random-number-generator', '/dice-roller', '/coin-flip'],
    tags: ['rastgele sayı üreteci', 'kullanımlar', 'araçlar', 'verimlilik']
  },
  {
    slug: 'name-picker-classroom',
    category: 'tools',
    title: 'Öğretmenler İçin Rastgele İsim Seçici: Sınıf Adaleti Kılavuzu',
    description: 'Sınıfta adil katılım oluşturmak için rastgele isim seçicinin nasıl kullanılacağı.',
    publishedDate: '2026-02-10',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Öğretmenler her ders için onlarca çağrı kararı verir. Yapılandırılmış bir süreç olmadan, aynı öğrencileri tekrar tekrar çağırma eğilimindedirler.",
    sections: [
      { heading: 'Önyargılı Çağrı Sorunu', body: ['Araştırmalar, öğretmenlerin sınıfın ön sıralarında oturan öğrencileri çağırma eğiliminde olduğunu gösteriyor.'] },
      { heading: 'Rastgele İsim Seçici Bu Sorunu Nasıl Çözer', body: ['Rastgele isim seçici, tüm öğrencilerin çağrılma olasılığının eşit olmasını sağlar.'] }
    ],
    faqs: [
      { question: 'Öğrenci cevabı bilmiyorsa ne yapmalıyım?', answer: 'Bilmemeyi normalleştirin: "Bilmemek sorun değil — birlikte keşfedelim."' }
    ],
    relatedSlugs: ['classroom-random-activities', 'team-generator-guide', 'random-number-generator-uses'],
    relatedToolHrefs: ['/random-name-picker', '/team-generator', '/spin-the-wheel'],
    tags: ['isim seçici', 'sınıf', 'eğitim', 'adalet']
  },
  {
    slug: 'team-generator-guide',
    category: 'tools',
    title: 'Rastgele Takım Oluşturucu: Grupları Bölmenin En Adil Yolu',
    description: 'Herhangi bir etkinlik için adil ve dengeli gruplar oluşturmak amacıyla rastgele takım oluşturucunun nasıl kullanılacağı.',
    publishedDate: '2026-02-17',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "İnsanları takımlara bölmek basit görünür, ama nadiren öyledir.",
    sections: [
      { heading: 'Rastgele Takım Bölme Neden İşe Yarar', body: ['Rastgele takım bölme, dışlayıcı olabilen "takım seçme" sosyal dinamiğini ortadan kaldırır.'] },
      { heading: 'Takım Oluşturucuyu Etkili Kullanma', body: ['Tüm katılımcıların isimlerini girin. Takım sayısını veya takım boyutunu belirleyin.'] }
    ],
    faqs: [
      { question: 'Rastgele takımlar dengesiz görünürse ne yapmalıyım?', answer: 'Gayri resmi etkinlikler için dengesizliği kabul edin — bu rastgeleliğin bir parçasıdır.' }
    ],
    relatedSlugs: ['name-picker-classroom', 'classroom-random-activities', 'icebreaker-games-remote-teams'],
    relatedToolHrefs: ['/team-generator', '/random-name-picker', '/spin-the-wheel'],
    tags: ['takım oluşturucu', 'grup bölme', 'adalet', 'etkinlikler']
  },
  {
    slug: 'wheel-spinner-complete-guide',
    category: 'tools',
    title: 'Çark Döndürme Tam Kılavuzu: Kurulum, İpuçları ve Kullanım Durumları',
    description: 'Çarkı etkili bir şekilde kullanmak için bilmeniz gereken her şey.',
    publishedDate: '2026-02-24',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Çark, mevcut en çok yönlü karar araçlarından biridir.",
    sections: [
      { heading: 'Temel Çark Kurulumu', body: ['Etkili bir çark kurmak için: dahil etmek istediğiniz tüm seçenekleri listeleyin.'] },
      { heading: 'Kullanım Durumları', body: ['Yemek seçimi: Favori yemek seçeneklerinizi ekleyin ve karar veremediğinizde döndürün.', 'Toplantı kolaylaştırma: Sıradaki konuşmacıyı seçmek için çark kullanın.'] }
    ],
    faqs: [
      { question: 'Dijital çark fiziksel olandan daha mı rastgele?', answer: 'Evet. Dijital çarklar kriptografik olarak güvenli rastgele sayı üreteçleri kullanır.' }
    ],
    relatedSlugs: ['spin-wheel-streamer-guide', 'party-games-spinner-wheel', 'coin-flip-vs-dice-roll'],
    relatedToolHrefs: ['/spin-the-wheel', '/random-name-picker', '/yes-or-no'],
    tags: ['çark', 'tam kılavuz', 'karar araçları', 'kurulum']
  }
]
