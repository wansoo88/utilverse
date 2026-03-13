import type { BlogPost } from '../types'

export const guidePosts: BlogPost[] = [
  {
    slug: 'how-to-make-decisions',
    category: 'guides',
    title: 'Karar Veremediğinizde Nasıl Karar Verirsiniz: 7 Pratik Yöntem',
    description: 'Belirsizlik altında daha iyi kişisel ve ekip kararları vermek için pratik bir çerçeve — aşırı düşünmeden.',
    publishedDate: '2026-01-10',
    author: 'kimcomplete',
    readingTime: 7,
    intro: "Bilgi eksikliğinden değil, çok fazla kabul edilebilir seçeneğiniz olduğu ve aralarında seçim yapmak için net bir kuralınız olmadığı için sıkışıp kaldınız. Bu yedi yöntem, stresi azaltan ve sizi harekete geçiren hafif bir süreç sunar.",
    sections: [
      { heading: '1. Önce Karar Türünü Belirleyin', body: ['Her seçim aynı düzeyde analiz gerektirmez. İlk adım, geri alınabilir kararları geri alınamaz olanlardan ayırmaktır.', 'Kendinize sorun: "Yanlış seçersem, bir hafta içinde düzeltebilir miyim?" Evet ise, iki dakika içinde karar verin.'] },
      { heading: '2. Basitleştirmek İçin Kısıtlamalar Kullanın', body: ['Güçlü kısıtlamalar karar hızlandırıcılardır. Seçenekleri değerlendirmeden önce bir zaman sınırı, bütçe tavanı ve iki ila dört zorunlu kriter belirleyin.', 'Nobel ödüllü Herbert Simon buna "tatmin etme" dedi.'] },
      { heading: '3. Önceden Bir Beraberlik Bozma Kuralı Belirleyin', body: ['İki seçenek gerçekten yakın olduğunda, karar zaten verilmiştir. Beraberlik bozma kuralı, döngüsel tartışmayı eyleme dönüştürür.', 'Etkili beraberlik bozma kuralları: yazı tura, rastgele sayı üreteci, çark.'] },
      { heading: '4. Bir Karar Son Tarihi Belirleyin', body: ['Parkinson Yasası kararlar için de geçerlidir: süreç mevcut zamanı doldurmak için genişler.', 'Günlük kararlar için 2 dakika kuralını kullanın.'] },
      { heading: '5. Duygusal Kararlar İçin 10/10/10 Testini Kullanın', body: ['Duygusal ağırlığı olan kararlar için üç soru sorun: Bu konuda 10 dakika sonra nasıl hissedeceğim? 10 ay sonra? 10 yıl sonra?'] },
      { heading: '6. Grup Kararlarında Görünür Bir Süreç Kullanın', body: ['Grup kararları, süreç görünür ve tarafsız olduğunda daha iyi çalışır. Herkesin görebileceği rastgele bir araç kullanın.'] },
      { heading: '7. Karar Sonrası Değerlendirme Yapın', body: ['Her büyük karardan sonra kısa bir değerlendirme yapın: Süreç işe yaradı mı? Hangi bilgiler eksikti?'] }
    ],
    faqs: [
      { question: 'Bir kararı verdikten sonra sorgulamayı nasıl bırakırım?', answer: 'Geri alınabilir kararlar için "gözden geçirmeme" kuralına bağlı kalın. Karar verdikten sonra, en az 48 saat boyunca kesin olarak ele alın.' },
      { question: 'Bu yöntemler iş kararları için işe yarar mı?', answer: 'Evet. Yöntemler 1, 2 ve 3 özellikle iş bağlamlarında etkilidir.' },
      { question: 'Tüm kararlar için rastgele seçim kullanabilir miyim?', answer: 'Hayır. Rastgele seçim, her iki seçeneğin de gerçekten kabul edilebilir olduğu kararlar için en iyi sonucu verir.' },
      { question: 'Karar verme sürecimi nasıl hızlandırabilirim?', answer: 'Kısıtlamaları önceden belirleyin, beraberlik bozma kurallarını önceden kabul edin ve son tarihler belirleyin.' },
      { question: 'Grup kararlarında anlaşmazlıkla nasıl başa çıkabilirim?', answer: 'Anlaşmazlık içeriğe değil, sürece odaklandığında daha kolay çözülür. Herkesin kabul ettiği bir süreç üzerinde anlaşın.' }
    ],
    relatedSlugs: ['decision-fatigue-explained', 'coin-flip-psychology', 'group-decision-making-tips'],
    relatedToolHrefs: ['/coin-flip', '/spin-the-wheel', '/yes-or-no'],
    tags: ['karar verme', 'verimlilik', 'psikoloji', 'aşırı düşünme']
  },
  {
    slug: 'decision-fatigue-explained',
    category: 'guides',
    title: 'Karar Yorgunluğu Nedir ve Her Gün Nasıl Üstesinden Gelirsiniz',
    description: 'Karar yorgunluğu öğleden önce iradenizi tüketir. Neye yol açtığı ve zihinsel enerjinizi korumak için altı pratik strateji.',
    publishedDate: '2026-01-15',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Saat 15:00'e geldiğinizde, zaten yüzlerce karar vermişsinizdir. Her biri zihinsel enerji harcar. Karar yorgunluğu, öğleden sonra iradenizin tükenmiş görünmesinin nedenidir.",
    sections: [
      { heading: 'Karar Yorgunluğu Gerçekte Nedir', body: ['Karar yorgunluğu, uzun bir karar verme seansından sonra karar kalitesinin düşmesidir.', 'Sonuç öngörülebilir: mevcut duruma başvurursunuz, aceleci seçimler yaparsınız veya karardan tamamen kaçınırsınız.'] },
      { heading: 'Strateji 1: Önemli Kararları Öne Alın', body: ['En önemli kararlarınızı gününüzün ilk iki saatine planlayın.'] },
      { heading: 'Strateji 2: Düşük Riskli Seçenekler İçin Rastgele Araçlar Kullanın', body: ['Herhangi bir seçeneğin kabul edilebilir olduğu kararlar için rastgelelik en verimli çözümdür.'] },
      { heading: 'Strateji 3-6: Ek Stratejiler', body: ['Rutin oluşturun: Tekrarlayan kararları otomatikleştirin.', 'Seçenekleri azaltın: Daha az seçenek daha az karar yorgunluğu anlamına gelir.', 'Karar gruplandırma: Benzer kararları birlikte verin.', 'Düzenli molalar: Zihinsel enerjiyi yenileyin.'] }
    ],
    faqs: [
      { question: 'Karar yorgunluğu tükenmişlikle aynı mı?', answer: 'Hayır. Karar yorgunluğu, dinlenme ve yemekle sıfırlanan günlük bir tükenmedir.' }
    ],
    relatedSlugs: ['how-to-make-decisions', 'overthinking-decisions', 'daily-decision-routine'],
    relatedToolHrefs: ['/random-food-picker', '/spin-the-wheel', '/yes-or-no'],
    tags: ['karar yorgunluğu', 'verimlilik', 'zihinsel enerji', 'psikoloji']
  },
  {
    slug: 'coin-flip-psychology',
    category: 'guides',
    title: 'Yazı Tura Atmak Neden Gerçekten Karar Vermenize Yardımcı Olur',
    description: 'Yazı tura atmanın arkasındaki psikoloji şaşırtıcı bir gerçeği ortaya koyuyor: sonuç, ona verdiğiniz tepkiden daha az önemlidir.',
    publishedDate: '2026-01-20',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Yazı tura atma hakkında sezgiye aykırı bir gerçek: yapabileceği en faydalı şey size rastgele bir cevap vermek değildir. Gerçekte ne istediğinizi ortaya çıkarmaktır.",
    sections: [
      { heading: 'Gizli Tercih Keşif Mekanizması', body: ['İki seçenek arasında gerçekten bölündüğünüzde, bilinçli zihniniz bir beraberliğe ulaşmıştır. Ama duygusal sisteminiz ulaşmamıştır.', 'Pratik uygulama: Yazı tura atın, sonra nasıl hissettiğinizi kontrol edin.'] },
      { heading: 'Yazı Tura En İyi Ne Zaman Çalışır', body: ['Yazı tura, her iki seçeneğin de gerçekten kabul edilebilir olduğu kararlar için en etkilidir.'] }
    ],
    faqs: [
      { question: 'Kararlar için yazı tura kullanmak mantıksız mı?', answer: 'Hayır. Her iki seçeneğin de kabul edilebilir olduğu kararlar için yazı tura aslında en rasyonel yaklaşımdır.' }
    ],
    relatedSlugs: ['how-to-make-decisions', 'history-of-coin-flipping', 'coin-flip-vs-dice-roll'],
    relatedToolHrefs: ['/coin-flip', '/yes-or-no', '/random-number-generator'],
    tags: ['yazı tura', 'psikoloji', 'karar verme', 'rastgelelik']
  },
  {
    slug: 'group-decision-making-tips',
    category: 'guides',
    title: 'Drama Olmadan Grup Kararları Almak İçin 5 Kanıtlanmış Yöntem',
    description: 'Grup kararları süreç belirsiz olduğunda başarısız olur. Bu beş yöntem ekibinize birlikte karar vermek için adil ve hızlı bir yol sunar.',
    publishedDate: '2026-01-25',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Grup kararları zor değil çünkü insanlar anlaşmazlık içinde — zor çünkü anlaşmazlığı çözmek için üzerinde anlaşılmış bir süreç yok.",
    sections: [
      { heading: 'Grup Kararları Neden Başarısız Olur', body: ['Grup kararları süreç belirsiz olduğunda başarısız olur. Çözüm daha iyi argümanlar değil — daha iyi bir süreçtir.'] },
      { heading: 'Yöntem 1: Nokta Oylaması', body: ['Her kişi sabit sayıda oy alır ve bunları seçeneklere dağıtır.'] },
      { heading: 'Yöntem 2: Rastgele Seçim', body: ['Seçenekler gerçekten eşit olduğunda, rastgele seçim en verimli ve adil beraberlik bozucudur.'] },
      { heading: 'Yöntemler 3-5', body: ['Onay tabanlı karar verme: Herkes kabul edebileceği seçenekleri işaretler.', 'Zaman sınırlı tartışma: Tartışmayı belirli bir süreyle sınırlayın.', 'Veto sistemi: Her kişi sınırlı sayıda veto hakkına sahiptir.'] }
    ],
    faqs: [
      { question: 'Uzak ekipler için en iyi yöntem hangisi?', answer: 'Uzak ekipler için nokta oylaması ve onay tabanlı karar verme en iyi çalışır.' }
    ],
    relatedSlugs: ['how-to-make-decisions', 'decision-fatigue-explained', 'overthinking-decisions'],
    relatedToolHrefs: ['/spin-the-wheel', '/coin-flip', '/team-generator'],
    tags: ['grup kararları', 'ekip çalışması', 'toplantı kolaylaştırma', 'verimlilik']
  },
  {
    slug: 'overthinking-decisions',
    category: 'guides',
    title: 'Küçük Kararları Aşırı Düşünmeyi Nasıl Bırakırsınız',
    description: 'Küçük kararları aşırı düşünmek bir kişilik özelliği değil, bir alışkanlıktır. Döngüyü kırmak için beş somut teknik.',
    publishedDate: '2026-02-01',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Aşırı düşünmek zeka işareti değil — karar verme sisteminizin bir döngüde sıkıştığının işaretidir.",
    sections: [
      { heading: 'Neden Aşırı Düşünürsünüz', body: ['Aşırı düşünme genellikle üç kaynaktan gelir: yanlış seçim yapma korkusu veya net kriterlerin eksikliği.'] },
      { heading: 'Teknik 1: 2 Dakika Kuralı', body: ['Bir karar iki dakika içinde verilebiliyorsa, şimdi verin.'] },
      { heading: 'Teknikler 2-5', body: ['Beraberlik bozma kuralı: Önceden bir kural belirleyin.', 'Bilgi sınırı: Belirli bir miktardan fazla bilgi toplamayın.', 'Geri dönüşümlülük testi: Kararın geri alınabilir olup olmadığını sorun.', 'Rastgele seçim: Her iki seçenek de kabul edilebilirse, rastgele seçin.'] }
    ],
    faqs: [
      { question: 'Aşırı düşünmek kaygının işareti mi?', answer: 'Belki. Düşük riskli kararlarda kronik aşırı düşünme kaygının bir belirtisi olabilir.' }
    ],
    relatedSlugs: ['how-to-make-decisions', 'decision-fatigue-explained', 'daily-decision-routine'],
    relatedToolHrefs: ['/yes-or-no', '/coin-flip', '/spin-the-wheel'],
    tags: ['aşırı düşünme', 'karar verme', 'kaygı', 'verimlilik']
  },
  {
    slug: 'random-vs-deliberate-choice',
    category: 'guides',
    title: 'Rastgele Seçim ve Kasıtlı Seçim: Her Biri Ne Zaman Kazanır',
    description: 'Her karar tartışmayı hak etmez. Şansa ne zaman güveneceğinizi ve ne zaman dikkatli düşüneceğinizi bilmek için bir çerçeve.',
    publishedDate: '2026-02-08',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Rastgele seçimin kötü bir itibarı var. Ama belirli bir karar kategorisi için rastgelelik en rasyonel seçimdir.",
    sections: [
      { heading: 'Rastgelelik Ne Zaman Kazanır', body: ['Rastgelelik şu durumlarda kazanır: her iki seçenek de gerçekten kabul edilebilir ve tartışmanın maliyeti iyileştirmenin değerini aşıyor.'] },
      { heading: 'Tartışma Ne Zaman Kazanır', body: ['Tartışma şu durumlarda kazanır: seçeneklerin önemli ölçüde farklı risk profilleri var veya karar özel uzmanlık gerektiriyor.'] }
    ],
    faqs: [
      { question: 'İki seçeneğin gerçekten eşit olup olmadığını nasıl anlarım?', answer: 'Kısıtlamalarınızı her iki seçeneğe uygulayın. Her ikisi de geçerliyse, amaçlarınız için eşittirler.' }
    ],
    relatedSlugs: ['how-to-make-decisions', 'coin-flip-psychology', 'decision-fatigue-explained'],
    relatedToolHrefs: ['/coin-flip', '/spin-the-wheel', '/yes-or-no'],
    tags: ['rastgele seçim', 'karar verme', 'çerçeve', 'verimlilik']
  },
  {
    slug: 'pros-cons-list-alternatives',
    category: 'guides',
    title: 'Artılar-Eksiler Listeleri Neden Başarısız Olur — Ve Bunun Yerine Ne Kullanmalısınız',
    description: 'Artılar-eksiler listeleri mantıklı görünür, ancak çoğu zaman daha kötü kararlar üretir. İşte üç daha iyi alternatif.',
    publishedDate: '2026-02-15',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Artılar-eksiler listesi dünyanın en çok öğretilen karar verme aracıdır. Ve aynı zamanda en az etkili olanlardan biridir.",
    sections: [
      { heading: 'Artılar-Eksiler Listeleri Neden Başarısız Olur', body: ['Artılar-eksiler listelerinin üç temel sorunu var: tüm faktörleri eşit önemde ele alır.'] },
      { heading: 'Alternatif 1: Ağırlıklı Analiz', body: ['Seçenekleri değerlendirmeden önce her kritere bir ağırlık (1-10) atayın.'] },
      { heading: 'Alternatifler 2-3', body: ['Pişmanlık minimizasyonu: Hangi seçeneği seçmemenin pişmanlığını daha az hissedeceğinizi sorun.', 'Kısıtlama tabanlı eleme: Önce kısıtlamaları uygulayın, sonra kalanlar arasından seçin.'] }
    ],
    faqs: [
      { question: 'Artılar-eksiler listeleri ne zaman faydalıdır?', answer: 'Artılar-eksiler listeleri, önemli bir faktörü atlamadığınızdan emin olmak için faydalıdır.' }
    ],
    relatedSlugs: ['how-to-make-decisions', 'coin-flip-psychology', 'overthinking-decisions'],
    relatedToolHrefs: ['/coin-flip', '/yes-or-no', '/spin-the-wheel'],
    tags: ['artılar eksiler', 'karar verme', 'araçlar', 'verimlilik']
  },
  {
    slug: 'daily-decision-routine',
    category: 'guides',
    title: 'Gerçekten Zaman Kazandıran Bir Günlük Karar Rutini Oluşturun',
    description: 'Yapılandırılmış bir karar rutini haftada saatler kazandırabilir ve seçimlerinizin kalitesini artırabilir.',
    publishedDate: '2026-02-22',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Çoğu insan kararları reaktif olarak verir. Yapılandırılmış bir karar rutini bunu tersine çevirir.",
    sections: [
      { heading: 'Karar Rutini Nedir', body: ['Karar rutini, gün boyunca farklı karar türleriyle nasıl başa çıkacağınızı belirleyen bir dizi alışkanlık ve kuraldır.'] },
      { heading: 'Sabah Rutini', body: ['E-posta veya mesajları kontrol etmeden önce, günün en önemli üç önceliğinizi gözden geçirin.'] }
    ],
    faqs: [
      { question: 'Bir karar rutini oluşturmak ne kadar sürer?', answer: 'Çoğu insan iki haftalık tutarlı pratikten sonra iyileşme görür.' }
    ],
    relatedSlugs: ['how-to-make-decisions', 'decision-fatigue-explained', 'overthinking-decisions'],
    relatedToolHrefs: ['/coin-flip', '/spin-the-wheel', '/yes-or-no'],
    tags: ['karar rutini', 'verimlilik', 'alışkanlıklar', 'zaman yönetimi']
  }
]
