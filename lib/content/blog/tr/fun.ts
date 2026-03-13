import type { BlogPost } from '../types'

export const funPosts: BlogPost[] = [
  {
    slug: 'random-facts-about-randomness',
    category: 'fun',
    title: 'Rastgelelik Hakkında Muhtemelen Bilmediğiniz 12 Şaşırtıcı Gerçek',
    description: 'Rastgelelik düşündüğünüzden daha tuhaf ve büyüleyicidir. İşte şansı görme şeklinizi değiştirecek on iki gerçek.',
    publishedDate: '2026-01-16',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Rastgeleliği anladığımızı düşünüyoruz. Yazı tura atıyoruz, zar atıyoruz, kart karıştırıyoruz — ve sonucun tahmin edilemez olduğunu varsayıyoruz. Ama rastgelelik sezgilerimizin önerdiğinden çok daha tuhaftır.",
    sections: [
      { heading: 'Gerçekler 1-4: Rastgeleliğin Sezgiye Aykırı Doğası', body: ['Gerçek 1: Gerçek rastgelelik son derece nadirdir. "Rastgele" dediğimiz şeylerin çoğu aslında yarı-rastgeledir.', 'Gerçek 2: İnsanlar rastgele sayı üretmekte kötüdür. Rastgele bir sayı dizisi yazmaları istendiğinde, insanlar bilinçsizce rakamları tekrarlamaktan kaçınır.', 'Gerçek 3: Karıştırılmış bir kart destesi neredeyse kesinlikle daha önce hiç var olmamıştır. Standart 52 kartlık bir deste 52! şekilde düzenlenebilir.', 'Gerçek 4: Doğum günü paradoksu. Sadece 23 kişilik bir grupta, iki kişinin aynı doğum gününü paylaşma olasılığı %50\'dir.'] },
      { heading: 'Gerçekler 5-8: Doğa ve Bilimde Rastgelelik', body: ['Gerçek 5: Kuantum mekaniği gerçekten rastgeledir. Atom altı düzeyde, radyoaktif bozunma gibi olaylar temelden rastgeledir.', 'Gerçek 6: Rastgele mutasyonlar evrimi yönlendirir. Doğal seçilimi yönlendiren genetik mutasyonlar rastgeledir.', 'Gerçek 7: Borsa rastgele değil, ama yakın. "Rastgele yürüyüş hipotezi" hisse senedi fiyat değişikliklerinin esasen rastgele olduğunu öne sürer.', 'Gerçek 8: Rastgele örnekleme büyük popülasyonlar için tam sayımdan daha doğrudur.'] },
      { heading: 'Gerçekler 9-12: İnsan Davranışında Rastgelelik', body: ['Gerçek 9: Rastgele verilerde desenler görürüz. İnsan beyni bir desen tanıma makinesidir.', 'Gerçek 10: Rastgele ödüller tahmin edilebilir olanlardan daha bağımlılık yapıcıdır. Değişken oran pekiştirmesi en güçlü ve kalıcı davranışı üretir.', 'Gerçek 11: Kumarbaz yanılgısı evrenseldir. Yazı turada uzun bir tura serisinden sonra, çoğu insan yazının "hak edildiğine" inanır.', 'Gerçek 12: Rastgele iyilik eylemlerinin mutluluk üzerinde ölçülebilir etkileri vardır.'] }
    ],
    faqs: [
      { question: 'Rastgele ve yarı-rastgele arasındaki fark nedir?', answer: 'Gerçek rastgele sayılar gerçekten tahmin edilemez fiziksel süreçlerden üretilir. Yarı-rastgele sayılar deterministik algoritmalar tarafından üretilir.' },
      { question: 'İnsanlar gerçekten rastgele sayılar üretebilir mi?', answer: 'Güvenilir bir şekilde değil. İnsan tarafından üretilen "rastgele" dizilerin tahmin edilebilir önyargıları vardır.' },
      { question: 'Evren temelden rastgele mi?', answer: 'Kuantum düzeyinde, evet — kuantum olayları gerçekten rastgeledir. Makro düzeyde, evren deterministik görünür.' },
      { question: 'Neden rastgele verilerde desenler görürüz?', answer: 'Desen tanıma bir hayatta kalma avantajıdır. Bu evrimsel baskı, desen bulmaya önyargılı beyinler yarattı.' },
      { question: 'Günlük hayatta en rastgele şey nedir?', answer: 'Kuantum olaylarının zamanlaması günlük hayatta en gerçek anlamda rastgele şeydir.' }
    ],
    relatedSlugs: ['famous-coin-flip-moments', 'lottery-number-myths', 'coin-flip-psychology'],
    relatedToolHrefs: ['/random-number-generator', '/coin-flip', '/dice-roller'],
    tags: ['rastgelelik', 'gerçekler', 'bilim', 'psikoloji']
  },
  {
    slug: 'famous-coin-flip-moments',
    category: 'fun',
    title: 'Yazı Tura ile Belirlenen Tarihin 7 Ünlü Anı',
    description: 'Şehir isimlerinden şampiyonluk maçlarına, bu yedi an tek bir yazı turanın tarihin seyrini nasıl değiştirdiğini gösteriyor.',
    publishedDate: '2026-01-24',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Yazı tura atmak bir saniyeden az sürer. Ama bazı atışların sonuçları yüzyıllarca sürdü. İşte bir yazı turanın bir şehir adını, bir şampiyonluğu, bir uçuşu ve daha fazlasını belirlediği yedi an.",
    sections: [
      { heading: 'Portland ve Boston: Şehir Adı Atışı (1845)', body: ['1845\'te, Oregon Bölgesi\'nde yeni bir şehir kuran iki yerleşimci vardı. Biri Boston adını istedi. Diğeri Portland adını istedi. Anlaşmazlığı yazı tura ile çözdüler.', 'Pettygrove kazandı. Şehir Portland, Oregon oldu — şimdi 650.000\'den fazla kişinin yaşadığı bir yer.', 'Atışta kullanılan para Oregon Tarih Derneği\'nde korunmaktadır.'] },
      { heading: 'Wright Kardeşler: Kim Önce Uçacak (1903)', body: ['14 Aralık 1903\'te, Orville ve Wilbur Wright Kitty Hawk\'ta ilk motorlu uçuşu denemek için hazırdı. Her iki kardeş de ilk uçan olmak istedi. Yazı tura ile çözdüler.', 'Wilbur atışı kazandı. 14 Aralık\'taki girişimi başarısız oldu. Üç gün sonra, 17 Aralık\'ta, Orville başarılı ilk uçuşu gerçekleştirdi.'] },
      { heading: '1968 Avrupa Şampiyonası: İtalya ve Sovyetler Birliği', body: ['1968 UEFA Avrupa Şampiyonası yarı finalinde, İtalya ve Sovyetler Birliği uzatmadan sonra 0-0 berabere kaldı. 1968\'de penaltı atışları yoktu — beraberlik yazı tura ile çözüldü.', 'İtalya atışı kazandı ve finale çıktı, burada şampiyonluğu kazandı.'] },
      { heading: 'Daha Fazla Ünlü Atış', body: ['2017 Virginia Temsilciler Meclisi: Bir Virginia Temsilciler Meclisi yarışı, Virginia Meclisi\'nin kontrolünü belirleyen rastgele çekimle çözüldü.', 'Super Bowl Yazı Tura Atışları: NFL Super Bowl yazı tura atışı, kazanan takım tarafından 57 kez 28 kez doğru tahmin edildi.', 'FIFA Dünya Kupası Beraberlik Bozucuları: Penaltı atışları tanıtılmadan önce, FIFA eleme turlarında takımları ilerletmek için yazı tura kullandı.'] },
      { heading: 'Bu Anlar Bize Ne Söylüyor', body: ['Bu ünlü yazı tura atışları ortak bir ipliği paylaşıyor: gerçek eşitlik anlarında gerçekleştiler.', 'Ayrıca tarihin doğası hakkında bir şey ortaya koyuyorlar: kaçınılmaz olarak ele aldığımız pek çok sonuç aslında şansa bağlıydı.'] }
    ],
    faqs: [
      { question: 'Yazı tura ile belirlenen başka büyük olaylar var mı?', answer: 'Evet. Pek çok yerel seçim, spor beraberlik bozucuları ve organizasyonel kararlar tarih boyunca yazı tura ile çözüldü.' },
      { question: 'Önemli olayları yazı tura ile belirlemek adil mi?', answer: 'İki seçenek gerçekten eşit olduğunda ve başka adil bir yöntem olmadığında, yazı tura tartışmasız en adil çözümdür.' },
      { question: 'Spor neden beraberlik bozucular için yazı tura kullanmayı bıraktı?', answer: 'Yazı tura, izleyicilerin tatmin edici bulmadığı için penaltı atışları ve diğer beceri tabanlı beraberlik bozucularla değiştirildi.' },
      { question: 'Tarihin en etkili yazı tura atışı hangisi?', answer: 'Portland adlandırma atışı (1845) kalıcı etki açısından tartışmasız en etkili olanıdır.' },
      { question: 'Bir yazı tura ABD başkanlık seçimini belirleyebilir mi?', answer: 'Teorik olarak, evet — bir eyaletin seçici oyları berabere kalırsa ve eyalet beraberlik bozucu olarak yazı tura kullanırsa.' }
    ],
    relatedSlugs: ['history-of-coin-flipping', 'random-facts-about-randomness', 'coin-flip-psychology'],
    relatedToolHrefs: ['/coin-flip', '/random-number-generator', '/yes-or-no'],
    tags: ['yazı tura', 'tarih', 'ünlü anlar', 'trivia']
  },
  {
    slug: 'what-to-eat-decision-guide',
    category: 'fun',
    title: 'Ne Yiyeceğinize Karar Veremiyor musunuz? İşte Gerçekten İşe Yarayan Bir Sistem',
    description: '"Bilmiyorum, sen ne istiyorsun?" döngüsü burada bitiyor. Ne yiyeceğinize karar vermek için pratik bir sistem — yalnız veya başkalarıyla.',
    publishedDate: '2026-02-07',
    author: 'kimcomplete',
    readingTime: 5,
    intro: '"Ne yemeliyiz?" konuşmasının 20 dakika tüketme ve kırgınlık yaratma konusunda benzersiz bir yeteneği var. İşte döngüyü bitiren bir sistem.',
    sections: [
      { heading: 'Yemek Kararları Neden Özellikle Zordur', body: ['Yemek kararları üç nedenden dolayı zordur: günde birkaç kez tekrarlanır, başkalarıyla alındığında sosyal dinamikler içerir ve anlık duyusal sonuçları vardır.', 'Rastgele seçim, herhangi bir seçeneğin kabul edilebilir olduğu yemek kararları için en verimli çözümdür.'] },
      { heading: 'İki Veto Sistemi', body: ['İki veto sistemi çiftler ve küçük gruplar için çalışır. Her kişi öğün başına iki veto alır.', 'Bu sistem herkese anlamlı bir katkı sağlarken sonsuz tartışmayı önler.'] },
      { heading: 'Yemek Çarkı Yöntemi', body: ['Normal yemek seçeneklerinizle bir çark oluşturun. "Ne yemeliyiz?" sorusu ortaya çıktığında, çarkı döndürün.', 'Çark işe yarar çünkü hızlı, görünür ve tarafsızdır.'] },
      { heading: 'Bireysel Kararlar İçin', body: ['Bireysel yemek kararları daha basittir ama yine de karar yorgunluğuna tabidir. En etkili bireysel sistem yemek planlamasıdır.', 'Gerçekten zevk aldığınız ve hızlıca hazırlayabileceğiniz 10-15 yemekten oluşan bir liste tutun.'] },
      { heading: 'Restoran Ruleti Yöntemi', body: ['Restoran kararları için coğrafi rastgele yöntem kullanın: bir harita açın, 1 ile 10 arasında rastgele bir sayı oluşturun ve konumunuzdan belirli bir yönde N. restorana gidin.'] }
    ],
    faqs: [
      { question: 'Rastgele seçim istemediğim bir şeyi seçerse ne olur?', answer: 'Bu faydalı bir bilgidir. Rastgele sonuçtan hayal kırıklığı hissediyorsanız, bu hayal kırıklığı kabul etmediğiniz bir tercihi ortaya koyar.' },
      { question: 'Bir grupta diyet kısıtlamalarını nasıl ele alırım?', answer: 'Rastgele seçimi uygulamadan önce seçenekleri filtreleyin. Yalnızca gruptaki herkes için işe yarayan seçenekleri içeren bir çark veya liste oluşturun.' },
      { question: 'Her öğün için rastgele seçim kullanmak uygun mu?', answer: 'Düşük riskli öğünler için rastgele seçim verimli ve etkilidir.' },
      { question: 'En iyi rastgele yemek seçici aracı hangisi?', answer: 'Normal yemek seçeneklerinizle basit bir çark iyi çalışır.' },
      { question: 'Partnerimi rastgele yemek seçimine ikna etmek için ne yapmalıyım?', answer: 'Bunu ortak bir sorunun çözümü olarak çerçevelendirin: "Her gece ne yiyeceğimize karar vermek için 20 dakika harcıyoruz. 10 saniyede karar vermek için bir çark kullansak nasıl olur?"' }
    ],
    relatedSlugs: ['random-facts-about-randomness', 'overthinking-decisions', 'daily-decision-routine'],
    relatedToolHrefs: ['/random-food-picker', '/spin-the-wheel', '/yes-or-no'],
    tags: ['yemek kararları', 'ne yenir', 'rastgele seçici', 'günlük yaşam']
  },
  {
    slug: 'lottery-number-myths',
    category: 'fun',
    title: 'Piyango Numarası Mitleri Çürütüldü: Rastgele Gerçekte Ne Anlama Gelir',
    description: 'Şanslı sayılar, sıcak sayılar, sayı desenleri — piyango mitleri her yerde. İşte matematiğin gerçekte ne söylediği.',
    publishedDate: '2026-02-22',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Piyango oyuncuları rastgelelik hakkındaki mitlere dayalı stratejilere milyarlarca dolar harcıyor. Şanslı sayılar, sıcak sayılar, sayı desenleri — bu stratejilerin hiçbiri şansınızı artırmaz.",
    sections: [
      { heading: 'Mit 1: Bazı Sayılar Daha Şanslıdır', body: ['Adil bir piyangoda, her sayının çekilme olasılığı tam olarak eşittir. 7 sayısı 13 sayısından daha şanslı değildir.', 'Bazı sayıların daha şanslı olduğu algısı doğrulama önyargısından gelir.'] },
      { heading: 'Mit 2: Sıcak ve Soğuk Sayılar', body: ['Bazı oyuncular "sıcak" sayıları (son zamanlarda sık çekilen) ve "soğuk" sayıları (son zamanlarda çekilmeyen) takip eder. Her iki teori de yanlıştır.', 'Piyango çekilişleri bağımsız olaylardır. Piyango makinesinin hafızası yoktur.'] },
      { heading: 'Mit 3: Sayı Desenleri Şansınızı Artırır', body: ['Bazı oyuncular desenlerde sayılar seçer. Bu desenler kazanma olasılığını etkilemez.', 'Ancak desenler bir şeyi etkiler: kazanırsanız ne kadar kazanacağınızı.'] },
      { heading: 'Matematiğin Gerçekte Söylediği', body: ['Bir piyango biletinin beklenen değeri neredeyse her zaman negatiftir.', 'Piyangolar eğlencedir, yatırım değil.'] }
    ],
    faqs: [
      { question: 'Piyango şansını gerçekten artıran bir strateji var mı?', answer: 'Hiçbir strateji kazanma olasılığınızı artırmaz. Matematiksel olarak geçerli tek yaklaşım, jackpot paylaşımını azaltmak için alışılmadık sayı kombinasyonları seçmektir.' },
      { question: 'Piyango çekilişleri gerçekten rastgele mi?', answer: 'Saygın piyangolar, adalet için düzenli olarak denetlenen sertifikalı rastgele sayı üreteçleri veya fiziksel top makineleri kullanır.' },
      { question: 'İnsanlar neden şanslı sayılara inanır?', answer: 'Şanslı sayılar büyüsel düşüncenin bir biçimidir — zihinsel durumların fiziksel olayları etkileyebileceği inancı.' },
      { question: 'Büyük bir piyango kazanma olasılığı nedir?', answer: 'Powerball (ABD) jackpot için yaklaşık 1\'de 292 milyon olasılığa sahiptir.' },
      { question: 'Piyango numaraları seçmek için rastgele sayı üreteci kullanmalı mıyım?', answer: 'Rastgele sayı üreteci, piyango numaraları seçmek için herhangi bir yöntem kadar iyidir — ve mitlere dayalı yöntemlerden daha iyidir.' }
    ],
    relatedSlugs: ['random-facts-about-randomness', 'famous-coin-flip-moments', 'coin-flip-psychology'],
    relatedToolHrefs: ['/lottery-number-generator', '/random-number-generator', '/dice-roller'],
    tags: ['piyango', 'rastgelelik', 'mitler', 'olasılık']
  }
]
