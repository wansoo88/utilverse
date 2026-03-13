import type { BlogPost } from '../types'

export const gamePosts: BlogPost[] = [
  {
    slug: 'party-games-spinner-wheel',
    category: 'games',
    title: 'Bu Gece Çarkla Oynayabileceğiniz 10 Parti Oyunu',
    description: 'Bu on çark parti oyunuyla herhangi bir buluşmayı unutulmaz bir etkinliğe dönüştürün — hazırlık gerekmez.',
    publishedDate: '2026-01-14',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Bir çark, herhangi bir buluşmayı bir oyun şovuna dönüştürür. Bu on oyun herhangi bir çark aracıyla çalışır — fiziksel veya dijital — ve sıfır hazırlık gerektirir.",
    sections: [
      { heading: 'Çarklar Neden Daha İyi Parti Oyunları Yapar', body: ['En iyi parti oyunlarının üç özelliği vardır: net kurallar, anında eylem ve görünür adalet. Bir çark üçünü de sağlar.', 'Çarklar aynı zamanda doğal bir ritim yaratır. Her dönüş küçük bir etkinliktir.'] },
      { heading: 'Oyunlar 1-3: Buz Kırıcılar', body: ['Gerçek Çarkı: Her dilim bir soru içerir. Soruyu seçmek için döndürün, sonra soldaki kişi cevaplar.', 'İltifat Çarkı: Dilimler iltifat kategorileri içerir. Kategori seçmek için döndürün, sonra grup birini aday gösterir.', 'İki Gerçek Bir Yalan Çarkı: Dilimler konular içerir. Konu seçmek için döndürün, sonra döndüren iki gerçek ve bir yalan paylaşır.'] },
      { heading: 'Oyunlar 4-6: Meydan Okumalar', body: ['Cesaret Çarkı: Dilimler fiziksel meydan okumalar içerir. Meydan okumayı seçmek için döndürün, sonra kimin tamamlayacağını seçmek için tekrar döndürün.', 'Beceri Çarkı: Dilimler beceri gösterileri içerir. Döndüren meydan okumayı tamamlamalıdır.', 'Hızlı Tur Çarkı: Dilimler kategoriler içerir. Döndürenin 30 saniyesi var.'] },
      { heading: 'Oyunlar 7-10: Takım ve Karar Oyunları', body: ['Takım Meydan Okuma Çarkı: İki takıma bölünün. Meydan okuma seçmek için döndürün.', 'İşbirlikçi Hikaye Çarkı: Dilimler hikaye öğeleri içerir. İşbirlikçi bir hikayeye öğe eklemek için döndürün.', 'Tercih Çarkı: Dilimler "hangisini tercih edersiniz" senaryoları içerir.', 'Sonuç Çarkı: Akşamın başında herkes bir kağıda bir sonuç yazar.'] }
    ],
    faqs: [
      { question: 'Parti çarkının kaç dilimi olmalı?', answer: 'Parti oyunları için 6-10 dilim en iyi çalışır.' },
      { question: 'Biri cesaretini yapmayı reddederse ne olur?', answer: 'Çarka bir "pas" seçeneği ekleyin.' },
      { question: 'Bu oyunlar sanal partiler için işe yarar mı?', answer: 'Evet. Tüm katılımcıların görebilmesi için çark aracını ekran paylaşımı yapın.' },
      { question: 'Etkinlik boyunca enerjiyi nasıl yüksek tutarım?', answer: 'Oyun türlerini çeşitlendirin — buz kırıcılar, meydan okumalar ve takım oyunları arasında geçiş yapın.' },
      { question: 'Partiler için en iyi çark aracı hangisi?', answer: 'Kişisel partiler için TV veya büyük monitörde görüntülenen tarayıcı tabanlı bir çark aracı en iyi çalışır.' }
    ],
    relatedSlugs: ['would-you-rather-questions', 'icebreaker-games-remote-teams', 'spin-wheel-streamer-guide'],
    relatedToolHrefs: ['/spin-the-wheel', '/random-name-picker', '/yes-or-no'],
    tags: ['parti oyunları', 'çark', 'grup etkinlikleri', 'eğlence']
  },
  {
    slug: 'would-you-rather-questions',
    category: 'games',
    title: 'Arkadaşlar, Takımlar ve Sınıflar İçin 50 "Hangisini Tercih Edersiniz" Sorusu',
    description: 'Bağlama göre düzenlenmiş 50 özenle hazırlanmış soru — hafif buz kırıcılardan düşündürücü ikilemlere.',
    publishedDate: '2026-01-30',
    author: 'kimcomplete',
    readingTime: 8,
    intro: '"Hangisini tercih edersiniz" soruları işe yarar çünkü bir seçim yapmaya zorlar. "Her ikisi" veya "hiçbiri" diyemezsiniz — taahhüt etmeniz gerekir.',
    sections: [
      { heading: 'Harika Bir "Hangisini Tercih Edersiniz" Sorusunu Ne Yapar', body: ['En iyi sorular gerçekten zordur — her iki seçenek de çekici veya her ikisi de çekici olmayan ama farklı şekillerde olmalıdır.'] },
      { heading: 'Buz Kırıcı Sorular (Hafif ve Eğlenceli)', body: ['1. Konuşmak yerine her zaman şarkı söylemek mi, yoksa yürümek yerine her zaman dans etmek mi tercih ederdiniz? 2. Hayatınız için bir geri sarma düğmesi mi yoksa duraklat düğmesi mi tercih ederdiniz? 3. Uçabilmek mi yoksa görünmez olmak mı tercih ederdiniz?'] },
      { heading: 'Takım ve İş Yeri Soruları', body: ['16. Sonsuza kadar evden mi yoksa her zaman ofiste mi çalışmayı tercih ederdiniz? 17. Ortalama maaşla sevdiğiniz bir iş mi yoksa iki katı maaşla nefret ettiğiniz bir iş mi tercih ederdiniz?'] },
      { heading: 'Düşündürücü Sorular', body: ['26. Nasıl öleceğinizi mi yoksa ne zaman öleceğinizi mi bilmeyi tercih ederdiniz? 27. Geçmişinizden bir kararı değiştirebilmek mi yoksa geleceğiniz hakkında bir şey bilmek mi tercih ederdiniz?'] },
      { heading: 'Sınıf Soruları (Yaşa Uygun)', body: ['36. Sadece Salı günleri çalışan bir süper güç mü yoksa hiç süper güç yok mu tercih ederdiniz? 37. Hayvanlarla konuşabilmek mi yoksa her insan dilini konuşabilmek mi tercih ederdiniz?'] }
    ],
    faqs: [
      { question: 'Bir grupta "hangisini tercih edersiniz" sorularını nasıl kolaylaştırırsınız?', answer: 'Soruyu yüksek sesle okuyun, herkese 10 saniye düşünme süresi verin, sonra herkesin cevabını aynı anda açıklamasını sağlayın.' },
      { question: 'Bu sorular takım oluşturma için kullanılabilir mi?', answer: 'Evet. İş tercihlerini ve değerlerini ortaya koyan sorular özellikle takım oluşturma için etkilidir.' },
      { question: 'Bu sorular hangi yaş grubu için uygundur?', answer: 'Buz kırıcı ve sınıf soruları çocuklar dahil tüm yaşlar için uygundur.' },
      { question: 'Bir oturumda kaç soru kullanmalıyım?', answer: 'Çoğu oturum için 5-10 soru idealdir.' },
      { question: 'Bu soruları rastgele seçiciyle kullanabilir miyim?', answer: 'Evet. Soruları rastgele seçici veya çarka ekleyin ve seçmek için döndürün.' }
    ],
    relatedSlugs: ['party-games-spinner-wheel', 'icebreaker-games-remote-teams', 'classroom-random-activities'],
    relatedToolHrefs: ['/spin-the-wheel', '/yes-or-no', '/random-number-generator'],
    tags: ['hangisini tercih edersiniz', 'buz kırıcı', 'parti oyunları', 'takım oluşturma']
  },
  {
    slug: 'icebreaker-games-remote-teams',
    category: 'games',
    title: 'Uzak Takımlar İçin Gerçekten İşe Yarayan 8 Buz Kırıcı Oyun',
    description: 'Uzak buz kırıcılar zorla yapılmış gibi hissettirdiğinde başarısız olur. Bu sekiz oyun garip olmadan gerçek bağlantı kurar.',
    publishedDate: '2026-02-05',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Çoğu uzak buz kırıcı aynı nedenle başarısız olur: zorunlu eğlence gibi hissettirirler. En iyi uzak buz kırıcılar gerçek merak yaratır.",
    sections: [
      { heading: 'Uzak Buz Kırıcılar Neden Zordur', body: ['Yüz yüze buz kırıcılar fiziksel varlıktan yararlanır. Uzak buz kırıcılar bağlantı yaratmak için tamamen etkinlik tasarımına güvenir.'] },
      { heading: 'Oyun 1: İki Gerçek Bir Yalan (Asenkron Versiyon)', body: ['Toplantıdan önce, her katılımcıdan paylaşılan bir belge aracılığıyla iki gerçek ve bir yalan göndermesini isteyin.'] },
      { heading: 'Oyun 2: Rastgele Soru Çarkı', body: ['İlginç sorularla yüklenmiş bir çark kullanın. Soru seçmek için döndürün, sonra kimin cevap vereceğini seçmek için tekrar döndürün.'] },
      { heading: 'Oyunlar 3-8: Çeşitli Formatlar', body: ['Fotoğraf Paylaşımı: Katılımcılardan telefonlarından kendileri hakkında bir şeyi temsil eden bir fotoğraf paylaşmalarını isteyin.', 'Bu mu O mu: İki seçenek sunun ve herkesin sohbette aynı anda yanıt vermesini sağlayın.', 'Emoji Durumu: Herkesten mevcut ruh hallerini temsil eden bir emoji ile yanıt vermesini isteyin.', 'Sanal Arka Plan Meydan Okuması: Herkesten kendileri hakkında bir şeyi temsil eden sanal bir arka plan ayarlamasını isteyin.', 'Paylaşılan Çalma Listesi: Toplantıdan önce her katılımcıdan bir şarkı eklemesini isteyin.', 'Harita Pini: Dünya haritasını paylaşın ve her katılımcıdan kendisi için anlamlı bir yere pin koymasını isteyin.'] }
    ],
    faqs: [
      { question: 'Uzak bir buz kırıcı ne kadar sürmeli?', answer: 'Normal bir takım toplantısı için 5-10 dakika idealdir.' },
      { question: 'Bazı takım üyeleri katılmak istemiyorsa ne yapmalıyım?', answer: 'Aktif katılımın yanı sıra pasif katılıma izin veren formatlar kullanın.' },
      { question: 'Uzak takımlar ne sıklıkla buz kırıcı yapmalı?', answer: 'Yeni takımlar için, ilk ay haftalık buz kırıcılar bağlantıyı hızla kurmaya yardımcı olur.' },
      { question: 'Buz kırıcılar büyük uzak takımlar için işe yarar mı?', answer: 'Evet, ancak format değişmesi gerekir. Büyük gruplar için her birinde 4-6 kişilik ayrılma odaları kullanın.' },
      { question: 'İlk toplantı için en iyi buz kırıcı hangisi?', answer: 'İlk toplantı için Fotoğraf Paylaşımı veya İki Gerçek Bir Yalan en iyi çalışır.' }
    ],
    relatedSlugs: ['would-you-rather-questions', 'team-building-random-tools', 'team-generator-guide'],
    relatedToolHrefs: ['/spin-the-wheel', '/random-name-picker', '/yes-or-no'],
    tags: ['buz kırıcı', 'uzak takımlar', 'takım oluşturma', 'sanal toplantılar']
  },
  {
    slug: 'classroom-random-activities',
    category: 'games',
    title: 'Katılımı Artırmak İçin Rastgelelik Kullanan 7 Sınıf Etkinliği',
    description: 'Sınıfta rastgelelik adalet, sürpriz ve katılım yaratır. Bu yedi etkinlik öğrenmeyi daha dinamik hale getirmek için rastgele araçlar kullanır.',
    publishedDate: '2026-02-12',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Öngörülebilirlik katılımın düşmanıdır. Öğrenciler tam olarak ne geleceğini bildiklerinde ilgilerini kaybederler.",
    sections: [
      { heading: 'Rastgeleliğin Pedagojisi', body: ['Eğitimde rastgelelik iki amaca hizmet eder: eşitlik ve katılım.', 'Anahtar, rastgele süreci görünür ve adil kılmaktır.'] },
      { heading: 'Etkinlikler 1-4', body: ['Rastgele İnceleme Bayrak Yarışı: İnceleme sorularını kağıt parçalarına yazın ve bir kaba koyun. Öğrenci seçmek için rastgele isim seçici kullanın.', 'Rastgele Grup Projeleri: Her büyük proje başında proje gruplarını rastgele atamak için takım oluşturucu kullanın.', 'Konuyu Döndür: Yazma ödevleri için konu kategorileri içeren bir çark kullanın.', 'Rastgele Koltuk Günü: Ayda bir kez, gün için koltukları atamak için rastgele isim seçici kullanın.'] },
      { heading: 'Etkinlikler 5-7', body: ['Zar Tartışması: Zar atışı kullanarak tartışma pozisyonları atayın.', 'Rastgele Çıkış Kartı: Dersin sonunda, çıkış kartı sorularından 3-5 soru seçmek için rastgele sayı üreteci kullanın.', 'Akran İncelemesi Çekilişi: Yazılı çalışmalar için akran incelemesi ortakları atamak için rastgele isim seçici kullanın.'] }
    ],
    faqs: [
      { question: 'Rastgele etkinlikleri dirençli öğrencilere nasıl tanıtırım?', answer: 'Rastgeleliği adalet olarak çerçevelendirin: "Çark seçiyor, ben değil, bu yüzden herkesin eşit şansı var."' },
      { question: 'Rastgele bir etkinlik adil olmayan bir sonuç üretirse ne olur?', answer: 'Süreç adaleti ile sonuç adaleti arasında ayrım yapın.' },
      { question: 'Rastgele etkinlikler tüm dersler için işe yarar mı?', answer: 'Evet. Rastgele soru seçimi herhangi bir ders için çalışır.' },
      { question: 'Rastgele seçimin zaman yükünü nasıl yönetirim?', answer: 'Hızlı araçlar kullanın — bir çark dönüşü veya isim seçici 10 saniyeden az sürmeli.' },
      { question: 'Sınıf kullanımı için en iyi rastgele araç hangisi?', answer: 'Projektörde görüntülenebilen tarayıcı tabanlı bir araç en iyi çalışır.' }
    ],
    relatedSlugs: ['name-picker-classroom', 'team-generator-guide', 'would-you-rather-questions'],
    relatedToolHrefs: ['/random-name-picker', '/team-generator', '/spin-the-wheel'],
    tags: ['sınıf etkinlikleri', 'eğitim', 'katılım', 'rastgele araçlar']
  },
  {
    slug: 'team-building-random-tools',
    category: 'games',
    title: 'Zorla Yapılmış Hissettirmeden Takım Oluşturma İçin Rastgele Araçlar Nasıl Kullanılır',
    description: 'Rastgele araçlar takım oluşturmayı daha adil ve ilgi çekici yapabilir — ama yalnızca düşünceli kullanılırsa.',
    publishedDate: '2026-02-20',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Takım oluşturmanın bir itibar sorunu var. Çoğu insan garip, anlamsız veya her ikisi gibi hissettiren zorunlu bir etkinlikte oturmuştur.",
    sections: [
      { heading: 'Geleneksel Takım Oluşturmanın Sorunu', body: ['Geleneksel takım oluşturma çoğu zaman başarısız olur çünkü takımın ihtiyaçları değil, kolaylaştırıcının tercihleri etrafında tasarlanmıştır.', 'Rastgele araçlar, kolaylaştırıcıyı seçim sürecinden çıkararak bunu ele alır.'] },
      { heading: 'Etkinlik Seçimi İçin Rastgele Araçlar Kullanma', body: ['Grubunuz için uygun 6-8 takım oluşturma etkinliği içeren bir çark oluşturun.', 'Takımın çarka etkinlik eklemesine izin verin.'] },
      { heading: 'Takım Oluşturma İçin Rastgele Araçlar Kullanma', body: ['Takım oluşturma etkinlikleri için gruplar oluşturmak amacıyla rastgele takım oluşturucu kullanın.', 'Rastgele oluşturma, klik oluşumunu önler.'] }
    ],
    faqs: [
      { question: 'Takım oluşturmada rastgele araçlar kullanmak için yönetim onayını nasıl alırım?', answer: 'Bunu adalet ve verimlilik aracı olarak çerçevelendirin.' },
      { question: 'Rastgele araçlar insan kolaylaştırıcının yerini alabilir mi?', answer: 'Hayır. Rastgele araçlar seçimden önyargıyı kaldırır, ancak etkinlik tasarımında insan yargısının yerini alamaz.' },
      { question: 'Takım oluşturma için en iyi rastgele araç hangisi?', answer: 'Kullanım durumuna bağlıdır. Etkinlik seçimi için çark. Takım oluşturma için takım oluşturucu. Katılımcı seçimi için rastgele isim seçici.' },
      { question: 'Takım oluşturmada rastgele araçları ne sıklıkla kullanmalıyım?', answer: 'Belirli bir amaca hizmet ettiklerinde kullanın: önyargıyı kaldırma, adaleti sağlama veya sürpriz unsuru ekleme.' },
      { question: 'Rastgele araçlar sanal takım oluşturma için işe yarar mı?', answer: 'Evet. Yukarıda bahsedilen tüm araçlar tarayıcı tabanlıdır ve sanal ortamlarda iyi çalışır.' }
    ],
    relatedSlugs: ['icebreaker-games-remote-teams', 'team-generator-guide', 'classroom-random-activities'],
    relatedToolHrefs: ['/team-generator', '/spin-the-wheel', '/random-name-picker'],
    tags: ['takım oluşturma', 'rastgele araçlar', 'takım dinamikleri', 'iş yeri']
  }
]
