// i18n.js - Multi-language Translation System
// Add this file to your assets/js/ folder

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "Gallery",
    nav_portfolio: "Blog",
    nav_services: "Project",
    nav_blog: "Blog",
    nav_contact: "About Me",
    nav_lets_talk: "Connect",

    // Common
    years_experience: "Years of Experience",
    contact_info: "Contact Info",
    location: "Antalya, Turkey",

    // Home Page - Banner
    home_im: "I'm",
    home_name: "Bahattin",
    home_welcome: "welcome to my website",
    home_role: "Web Designer & Developer",
    home_contact_btn: "Contact Me Now",

    // Home Page - Counter
    home_projects: "Successfully Project",
    home_clients: "Satisfied Clients",
    home_projects_desc:
      "I have had the chance to work on various projects that helped me develop and demonstrate my skills.",
    home_clients_desc:
      "I have turned my clients' dream projects into reality in the most appropriate way for them.",

    // Home Page - About
    home_about_subtitle: "About Me",
    home_about_title: "My Soft Skills",
    home_about_desc:
      "Hey, I'm Bahattin a creative developer and designer passionate about blending technology with design. I ran PixyCody, where we build modern websites, mobile apps, and custom software for brands that want to stand out. With experience in UI/UX design, web development, branding, and interactive experiences, I focus on creating digital products that are both functional and visually engaging.",

    // Skills
    skill_figma: "Figma",
    skill_figma_desc:
      "I've designed and prototyped modern, user-centered interfaces that turn ideas into clean visuals.",
    skill_wordpress: "WordPress",
    skill_wordpress_desc:
      "I create fast, responsive, and custom WordPress websites that combine design and performance.",
    skill_react: "React",
    skill_react_desc:
      "I build dynamic, interactive, and efficient web applications with modern React architecture.",
    skill_html: "HTML",
    skill_html_desc:
      "I craft clean, semantic, and pixel-perfect code as the foundation of every great website.",

    // Services
    services_subtitle: "MY SERVICES",
    services_title: "I'm Specialized In",
    service_web_title: "Web Development",
    service_web_desc:
      "I build fast, modern, and responsive websites tailored to every need.",
    service_marketing_title: "Digital Marketing",
    service_marketing_desc:
      "I help brands grow through smart and creative online strategies.",
    service_brand_title: "Brand Strategy",
    service_brand_desc:
      "I craft visual identities that connect brands with their audiences.",
    service_app_title: "App Development",
    service_app_desc:
      "I develop smooth, user-focused mobile apps with seamless experiences.",
    services_view_all: "View All Services",

    // Experience
    experience_subtitle: "RESUME",
    experience_title: "My Work Experience",
    experience_freelancer: "Freelancer Web Developer",
    experience_freelancer_period: "2021 - 2023",
    experience_freelancer_place: "Freelancer At Bionluk/Fiverr",
    experience_freelancer_desc:
      "I build website ideas into real fast, modern, and responsive websites for different clients as a freelancer.",
    experience_ceo: "Founder&CEO Of PixyCody",
    experience_ceo_period: "2023-2025",
    experience_ceo_place: "PixyCody",
    experience_ceo_desc:
      "At PixyCody, we develop websites that convert a practical guide to building user-focused, high-converting sites.",

    // Testimonials
    testimonial_subtitle: "TESTIMONIAL",
    testimonial_title: "What My Clients Say",
    testimonial_1_title: "Great Advice",
    testimonial_1_text:
      "The advice on our site structure and SEO strategy was invaluable. It wasn't just a beautiful website; it was built with a clear roadmap for traffic and conversions from day one. Truly expert level consultation.",
    testimonial_1_name: "Scott Baker",
    testimonial_1_role: "CEO",
    testimonial_2_title: "Design Quality",
    testimonial_2_text:
      "The new site is a masterpiece of design. It's clean, modern, and perfectly reflects our brand identity. The user experience (UX) is intuitive, leading to higher engagement from our customers.",
    testimonial_2_name: "Megan Clark",
    testimonial_2_role: "Entrepreneur",
    testimonial_3_title: "Great Solution",
    testimonial_3_text:
      "They turned our outdated, slow website into a high-speed lead generation machine. It's not just a website it's a great business solution that addressed all our previous technical roadblocks.",
    testimonial_3_name: "Furkan Öztürk",
    testimonial_3_role: "CEO",

    // CTA
    cta_hello: "Hello",
    cta_title: "If you have any project in mind?",
    cta_subtitle: "DM now!",

    // Blog
    blog_subtitle: "UPDATE",
    blog_title: "Latest News & Blogs",
    blog_view_all: "View All Post",
    blog_by: "By",
    blog_continue: "Continue Reading",

    // Blog Posts
    blog_post_1_category: "Web Development",
    blog_post_1_title: "Why Good UI/UX Design Can Make or Break Your Website",
    blog_post_1_date: "November 11, 2025",
    blog_post_1_excerpt:
      "In today's digital world, your website is often the first impression people get of your brand. A beautiful design may catch attention, but it's the user experience (UX) that keeps visitors engaged and encourages them to take action. I believe UI and UX are not just design terms they are what determine whether a website succeeds or fails.",
    blog_post_1_content_1:
      "In today's digital world, your website is often the first impression people get of your brand. A beautiful design may catch attention, but it's the user experience (UX) that keeps visitors engaged and encourages them to take action. I believe UI and UX are not just design terms they are what determine whether a website succeeds or fails.",
    blog_post_1_content_2:
      "A well-crafted UI (User Interface) ensures that every visual element – buttons, typography, icons, and layouts – works harmoniously to guide the user. Meanwhile, UX (User Experience) focuses on how the visitor feels during that journey. Is the navigation simple? Is the information easy to find? Does the site feel trustworthy and enjoyable?",
    blog_post_1_content_3:
      "Good UX design means anticipating your user's needs before they even realize them. It's about clarity, flow, and purpose. When a visitor lands on your page, they should instinctively know what to do next – whether that's reading an article, signing up for a newsletter, or making a purchase.",
    blog_post_1_content_4:
      "Studies show that 75% of users judge a company's credibility based on its website design, and even a few seconds of confusion can cost you potential customers. That's why i focus on design that's both aesthetically appealing and functionally intuitive.",
    blog_post_1_content_5:
      "If you're investing in your online presence, invest in design that works for your users – not against them. Because in the end, a great UI/UX doesn't just make a website look good; it makes it successful.",

    blog_post_2_category: "Web Development",
    blog_post_2_title:
      "From Idea to Launch: The Process Behind a Successful Web Project",
    blog_post_2_date: "November 11, 2025",
    blog_post_2_excerpt:
      "Every great website starts with an idea but what transforms that idea into a fully functional digital experience? I follow a clear, creative, and collaborative process that ensures every project we deliver is both beautiful and effective.",
    blog_post_2_intro:
      "Every great website starts with an idea – but what transforms that idea into a fully functional digital experience? I follow a clear, creative, and collaborative process that ensures every project we deliver is both beautiful and effective.",
    blog_post_2_step1_title: "1. Discovery & Research",
    blog_post_2_step1_desc:
      "We begin by understanding your goals, your audience, and your brand. This stage helps us identify what makes your business unique and how we can translate that into a digital experience.",
    blog_post_2_step2_title: "2. Planning & Strategy",
    blog_post_2_step2_desc:
      "Next, we define the structure – site maps, user flows, and wireframes. Here, we decide how users will interact with your content and what actions we want them to take.",
    blog_post_2_step3_title: "3. Design & Prototyping",
    blog_post_2_step3_desc:
      "This is where creativity meets functionality. Using Figma and other modern tools, our designers craft user interfaces that reflect your brand's personality while staying user-friendly and responsive.",
    blog_post_2_step4_title: "4. Development",
    blog_post_2_step4_desc:
      "Our developers bring designs to life with clean, scalable, and high-performance code. Whether it's a React-powered web app or a WordPress business site, we make sure every line of code adds value.",
    blog_post_2_step5_title: "5. Testing & Launch",
    blog_post_2_step5_desc:
      "Before going live, we test everything – responsiveness, speed, usability, and security. Only after a project meets our high standards do we hit the launch button.",
    blog_post_2_step6_title: "6. Support & Growth",
    blog_post_2_step6_desc:
      "A website is never \"finished.\" We continue to monitor, optimize, and evolve your site as your business grows. Building a website isn't just a technical process – it's a creative journey. And i walk that journey with you from start to finish.",

    blog_post_3_category: "Business",
    blog_post_3_title:
      "How Branding Shapes the Digital Identity of Your Business",
    blog_post_3_date: "November 11, 2025",
    blog_post_3_excerpt:
      "Your brand is more than just a logo or color palette it's the emotional connection people have with your business. In a world where users make snap judgments in seconds, your brand's digital identity can determine whether someone trusts you or scrolls past.",
    blog_post_3_content_1:
      "Your brand is more than just a logo or color palette – it's the emotional connection people have with your business. In a world where users make snap judgments in seconds, your brand's digital identity can determine whether someone trusts you or scrolls past.",
    blog_post_3_content_2:
      "A strong brand tells a story. It communicates who you are, what you value, and why people should care. Every visual element – from the font on your homepage to the tone of your social media – plays a role in shaping that story.",
    blog_post_3_content_3:
      "I see branding as the foundation of every successful digital product. Before writing a single line of code, we work with our clients to define their brand's voice, personality, and purpose. That clarity influences everything that follows – the design, the colors, the typography, and even the animations.",
    blog_post_3_content_4:
      "Consistency is key. When your website, app, and marketing materials all share the same look and feel, you build trust and recognition. Users begin to associate certain visuals or phrases with your business – and that's where real brand power comes from.",
    blog_post_3_content_5:
      "Good branding doesn't shout; it connects. It creates familiarity, loyalty, and emotion. In the digital space, your brand isn't just your identity it's your advantage.",

    // Contact
    contact_subtitle: "STAY CONNECTED",
    contact_title: "Let's Work Together!",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_address: "Address",
    contact_name: "Full Name",
    contact_email_placeholder: "Email Address",
    contact_phone_placeholder: "Phone Number",
    contact_service: "Choose Service",
    contact_message: "Write Your Message",
    contact_send: "Send Message",

    // Footer
    footer_copyright: "Designed by Bahattin Conkara",

    // About Page
    about_breadcrumb: "About",
    about_title: "About",
    about_subtitle: "About Me",
    about_my_name: "My Name is",
    about_name_highlight: "Bahattin",
    about_role: "Web Designer & Developer",
    about_desc_main:
      "Hey, I'm Bahattin Conkara, a creative developer and designer passionate about turning ideas into meaningful digital experiences. I'm the founder of PixyCody, where we design and build modern websites, mobile apps, and custom software solutions for brands that want to stand out in the digital world.",
    about_desc_secondary:
      "With a background in UI/UX design, web development, and branding, I focus on creating products that are not only visually engaging but also functional and user-centered. I believe every project is a chance to tell a story through design, innovation, and technology working together.",
    about_age: "Age",
    about_age_value: "18 Years",
    about_born: "Born In",
    about_born_value: "Manisa, Turkey",
    about_phone: "Phone",
    about_email: "Email",
    about_qualification: "Qualification",
    about_work_experience: "Work Experience",

    // Services Page
    services_breadcrumb: "Services",
    faq_subtitle: "Faq",
    faq_title: "Let's Talk Any Question",
    faq_q1: "What services do I offer?",
    faq_a1:
      "I provide modern web design, mobile app development, custom software solutions, and digital branding services for businesses of all sizes.",
    faq_q2: "How does the web development process work?",
    faq_a2:
      "I start by understanding your goals, then move through design, development, testing, and final delivery keeping you involved and informed every step of the way.",
    faq_q3: "Do you offer support after project delivery?",
    faq_a3:
      "Yes! After your project is completed, we provide ongoing technical support and maintenance. Long-term service plans are also available upon request.",
    faq_q4: "Are your websites SEO-friendly?",
    faq_a4:
      "Absolutely. Every website built by me is optimized for speed, performance, and SEO best practices to ensure maximum online visibility.",
    faq_q5: "How is pricing determined?",
    faq_a5:
      "Each project is priced based on its scope and complexity. After a quick consultation, I'll provide a detailed and transparent quote tailored to your needs.",

    // Blog Page
    blog_breadcrumb: "Blog",
    blog_search: "Searching...",
    blog_recent: "Recent Posts",
    blog_social: "Social",
    blog_by_author: "By",

    // Portfolio Page
    portfolio_breadcrumb: "Portfolio",
    portfolio_project_1: "Document Manager Application",
    portfolio_project_2: "Digital Marketing",
    portfolio_project_3: "Creative Portfolio",
    portfolio_project_4: "Mobile App Development",

    // Contact Page
    contact_breadcrumb: "Contact",

    // Blog Details
    blog_details_breadcrumb: "Blog Details",
    comment_title: "Leave a Comment",
    comment_note:
      "Your email address will not be published. Required fields are marked *",
    comment_name: "Name",
    comment_email: "Email",
    comment_message: "Type Comment here",
    comment_submit: "Post Comment",
  },

  tr: {
    // Navigasyon
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımda",
    nav_portfolio: "Portföy",
    nav_services: "Hizmetler",
    nav_blog: "Blog",
    nav_contact: "İletişim",
    nav_lets_talk: "Hadi Konuşalım",

    // Ortak
    years_experience: "Yıllık Deneyim",
    contact_info: "İletişim Bilgileri",
    location: "Antalya, Türkiye",

    // Ana Sayfa - Banner
    home_im: "Ben",
    home_name: "Bahattin",
    home_welcome: "web siteme hoş geldiniz",
    home_role: "Web Tasarımcı & Geliştirici",
    home_contact_btn: "Şimdi Benimle İletişime Geç",

    // Ana Sayfa - Sayaç
    home_projects: "Başarılı Proje",
    home_clients: "Memnun Müşteri",
    home_projects_desc:
      "Becerilerimi geliştirmeme ve göstermeme yardımcı olan çeşitli projeler üzerinde çalışma fırsatım oldu.",
    home_clients_desc:
      "Müşterilerim için onların hayalindeki projeleri onlara en uygun şekilde gerçeğe dönüştürdüm.",

    // Ana Sayfa - Hakkımda
    home_about_subtitle: "Hakkımda",
    home_about_title: "Yetkinliklerim",
    home_about_desc:
      "Merhaba, ben Bahattin, teknoloji ile tasarımı harmanlama konusunda tutkulu yaratıcı bir geliştirici ve tasarımcıyım. Dijital dünyada öne çıkmak isteyen markalar için modern web siteleri, mobil uygulamalar ve özel yazılım çözümleri geliştirdiğimiz PixyCody'yi yönetiyordum. UI/UX tasarımı, web geliştirme, markalama ve etkileşimli deneyimler konusundaki deneyimimle, hem işlevsel hem de görsel olarak çekici dijital ürünler yaratmaya odaklanıyorum.",

    // Yetenekler
    skill_figma: "Figma",
    skill_figma_desc:
      "Fikirleri temiz görsellere dönüştüren modern, kullanıcı odaklı arayüzler tasarladım ve prototip oluşturdum.",
    skill_wordpress: "WordPress",
    skill_wordpress_desc:
      "Tasarım ve performansı birleştiren hızlı, duyarlı ve özel WordPress web siteleri oluşturuyorum.",
    skill_react: "React",
    skill_react_desc:
      "Modern React mimarisi ile dinamik, etkileşimli ve verimli web uygulamaları geliştiriyorum.",
    skill_html: "HTML",
    skill_html_desc:
      "Her harika web sitesinin temeli olarak temiz, semantik ve piksel mükemmel kod hazırlıyorum.",

    // Hizmetler
    services_subtitle: "HİZMETLERİM",
    services_title: "Uzmanlaştığım Alanlar",
    service_web_title: "Web Geliştirme",
    service_web_desc:
      "Her ihtiyaca göre uyarlanmış hızlı, modern ve duyarlı web siteleri oluşturuyorum.",
    service_marketing_title: "Dijital Pazarlama",
    service_marketing_desc:
      "Akıllı ve yaratıcı çevrimiçi stratejilerle markaların büyümesine yardımcı oluyorum.",
    service_brand_title: "Marka Stratejisi",
    service_brand_desc:
      "Markaları hedef kitleleriyle bağlayan görsel kimlikler oluşturuyorum.",
    service_app_title: "Uygulama Geliştirme",
    service_app_desc:
      "Kesintisiz deneyimlerle sorunsuz, kullanıcı odaklı mobil uygulamalar geliştiriyorum.",
    services_view_all: "Tüm Hizmetleri Gör",

    // Deneyim
    experience_subtitle: "ÖZGEÇMİŞ",
    experience_title: "İş Deneyimim",
    experience_freelancer: "Serbest Web Geliştirici",
    experience_freelancer_period: "2021 - 2023",
    experience_freelancer_place: "Bionluk/Fiverr'da Serbest Çalışan",
    experience_freelancer_desc:
      "Serbest çalışan olarak farklı müşteriler için web sitesi fikirlerini gerçek, hızlı, modern ve duyarlı web sitelerine dönüştürüyorum.",
    experience_ceo: "PixyCody Kurucusu & CEO'su",
    experience_ceo_period: "2023-2025",
    experience_ceo_place: "PixyCody",
    experience_ceo_desc:
      "PixyCody'de, kullanıcı odaklı, yüksek dönüşümlü siteler oluşturmak için pratik bir rehber olan dönüştürücü web siteleri geliştiriyoruz.",

    // Referanslar
    testimonial_subtitle: "REFERANSLAR",
    testimonial_title: "Müşterilerim Ne Diyor",
    testimonial_1_title: "Harika Tavsiye",
    testimonial_1_text:
      "Site yapımız ve SEO stratejimiz hakkındaki tavsiyeler paha biçilmezdi. Sadece güzel bir web sitesi değildi; ilk günden itibaren trafik ve dönüşümler için net bir yol haritası ile inşa edildi. Gerçekten uzman seviyesi danışmanlık.",
    testimonial_1_name: "Scott Baker",
    testimonial_1_role: "CEO",
    testimonial_2_title: "Tasarım Kalitesi",
    testimonial_2_text:
      "Yeni site bir tasarım şaheseri. Temiz, modern ve marka kimliğimizi mükemmel şekilde yansıtıyor. Kullanıcı deneyimi (UX) sezgisel ve müşterilerimizden daha yüksek etkileşim sağlıyor.",
    testimonial_2_name: "Megan Clark",
    testimonial_2_role: "Girişimci",
    testimonial_3_title: "Harika Çözüm",
    testimonial_3_text:
      "Eski, yavaş web sitemizi yüksek hızlı bir müşteri adayı üretim makinesine dönüştürdüler. Sadece bir web sitesi değil, önceki tüm teknik engellerimizi ele alan harika bir iş çözümü.",
    testimonial_3_name: "Furkan Öztürk",
    testimonial_3_role: "CEO",

    // CTA
    cta_hello: "Merhaba",
    cta_title: "Aklınızda bir proje mi var?",
    cta_subtitle: "Şimdi mesaj at!",

    // Blog
    blog_subtitle: "GÜNCEL",
    blog_title: "Son Haberler & Blog",
    blog_view_all: "Tüm Gönderileri Gör",
    blog_by: "Yazar",
    blog_continue: "Okumaya Devam Et",

    // Blog Gönderileri
    blog_post_1_category: "Web Geliştirme",
    blog_post_1_title:
      "İyi UI/UX Tasarımı Web Sitenizi Nasıl Başarıya Götürür veya Batırır",
    blog_post_1_date: "11 Kasım 2025",
    blog_post_1_excerpt:
      "Günümüz dijital dünyasında, web siteniz genellikle insanların markanız hakkında aldıkları ilk izlenimdir. Güzel bir tasarım dikkati çekebilir, ancak ziyaretçileri meşgul tutan ve harekete geçmeye teşvik eden kullanıcı deneyimidir (UX). UI ve UX'in sadece tasarım terimleri olmadığına inanıyorum - bunlar bir web sitesinin başarılı olup olmayacağını belirleyen şeylerdir.",
    blog_post_1_content_1:
      "Günümüz dijital dünyasında, web siteniz genellikle insanların markanız hakkında aldıkları ilk izlenimdir. Güzel bir tasarım dikkati çekebilir, ancak ziyaretçileri meşgul tutan ve harekete geçmeye teşvik eden kullanıcı deneyimidir (UX). UI ve UX'in sadece tasarım terimleri olmadığına inanıyorum - bunlar bir web sitesinin başarılı olup olmayacağını belirleyen şeylerdir.",
    blog_post_1_content_2:
      "İyi hazırlanmış bir UI (Kullanıcı Arayüzü), her görsel öğenin - düğmeler, tipografi, simgeler ve düzenler - kullanıcıyı yönlendirmek için uyumlu bir şekilde çalışmasını sağlar. Bu arada, UX (Kullanıcı Deneyimi) ziyaretçinin bu yolculuk sırasında nasıl hissettiğine odaklanır. Navigasyon basit mi? Bilgiyi bulmak kolay mı? Site güvenilir ve keyifli hissettiriyor mu?",
    blog_post_1_content_3:
      "İyi UX tasarımı, kullanıcınızın ihtiyaçlarını fark etmeden önce tahmin etmek anlamına gelir. Bu, netlik, akış ve amaçla ilgilidir. Bir ziyaretçi sayfanıza geldiğinde, sezgisel olarak ne yapması gerektiğini bilmelidir - bir makale okumak, bültene kaydolmak veya satın alma yapmak.",
    blog_post_1_content_4:
      "Araştırmalar, kullanıcıların %75'inin bir şirketin güvenilirliğini web sitesi tasarımına göre değerlendirdiğini ve birkaç saniyelik karışıklığın bile potansiyel müşterilere mal olabileceğini gösteriyor. Bu yüzden hem estetik açıdan çekici hem de işlevsel olarak sezgisel tasarıma odaklanıyorum.",
    blog_post_1_content_5:
      "Çevrimiçi varlığınıza yatırım yapıyorsanız, kullanıcılarınız için çalışan tasarıma yatırım yapın - onlara karşı değil. Çünkü sonunda, harika bir UI/UX sadece bir web sitesini iyi göstermez; onu başarılı yapar.",

    blog_post_2_category: "Web Geliştirme",
    blog_post_2_title:
      "Fikirden Lansmana: Başarılı Bir Web Projesinin Arkasındaki Süreç",
    blog_post_2_date: "11 Kasım 2025",
    blog_post_2_excerpt:
      "Her harika web sitesi bir fikirle başlar, ancak bu fikri tamamen işlevsel bir dijital deneyime dönüştüren nedir? Teslim ettiğimiz her projenin hem güzel hem de etkili olmasını sağlayan net, yaratıcı ve işbirlikçi bir süreci takip ediyorum.",
    blog_post_2_intro:
      "Her harika web sitesi bir fikirle başlar – ancak bu fikri tamamen işlevsel bir dijital deneyime dönüştüren nedir? Teslim ettiğimiz her projenin hem güzel hem de etkili olmasını sağlayan net, yaratıcı ve işbirlikçi bir süreci takip ediyorum.",
    blog_post_2_step1_title: "1. Keşif & Araştırma",
    blog_post_2_step1_desc:
      "Hedeflerinizi, hedef kitlenizi ve markanızı anlayarak başlıyoruz. Bu aşama, işletmenizi benzersiz kılan şeyi ve bunu dijital bir deneyime nasıl çevirebileceğimizi belirlememize yardımcı olur.",
    blog_post_2_step2_title: "2. Planlama & Strateji",
    blog_post_2_step2_desc:
      "Sonra, yapıyı tanımlıyoruz - site haritaları, kullanıcı akışları ve tel çerçeveler. Burada, kullanıcıların içeriğinizle nasıl etkileşime gireceğine ve hangi eylemleri yapmalarını istediğimize karar veriyoruz.",
    blog_post_2_step3_title: "3. Tasarım & Prototipleme",
    blog_post_2_step3_desc:
      "Yaratıcılığın işlevsellikle buluştuğu yer burasıdır. Figma ve diğer modern araçları kullanarak, tasarımcılarımız markanızın kişiliğini yansıtan, kullanıcı dostu ve duyarlı kullanıcı arayüzleri oluşturur.",
    blog_post_2_step4_title: "4. Geliştirme",
    blog_post_2_step4_desc:
      "Geliştiricilerimiz tasarımları temiz, ölçeklenebilir ve yüksek performanslı kodla hayata geçirir. İster React destekli bir web uygulaması ister WordPress iş sitesi olsun, her kod satırının değer kattığından emin oluruz.",
    blog_post_2_step5_title: "5. Test & Lansman",
    blog_post_2_step5_desc:
      "Yayına geçmeden önce her şeyi test ediyoruz - duyarlılık, hız, kullanılabilirlik ve güvenlik. Bir proje yüksek standartlarımızı karşıladıktan sonra lansman düğmesine basıyoruz.",
    blog_post_2_step6_title: "6. Destek & Büyüme",
    blog_post_2_step6_desc:
      "Bir web sitesi asla 'bitmez'. İşletmeniz büyüdükçe sitenizi izlemeye, optimize etmeye ve geliştirmeye devam ediyoruz. Bir web sitesi oluşturmak sadece teknik bir süreç değildir - yaratıcı bir yolculuktur. Ve bu yolculuğu baştan sona sizinle birlikte yürüyorum.",

    blog_post_3_category: "İşletme",
    blog_post_3_title:
      "Markalaşma İşletmenizin Dijital Kimliğini Nasıl Şekillendirir",
    blog_post_3_date: "11 Kasım 2025",
    blog_post_3_excerpt:
      "Markanız sadece bir logo veya renk paletinden daha fazlasıdır - insanların işletmenizle kurduğu duygusal bağdır. Kullanıcıların saniyeler içinde ani kararlar verdiği bir dünyada, markanızın dijital kimliği birinin size güvenip güvenmeyeceğini veya geçip gideceğini belirleyebilir.",
    blog_post_3_content_1:
      "Markanız sadece bir logo veya renk paletinden daha fazlasıdır – insanların işletmenizle kurduğu duygusal bağdır. Kullanıcıların saniyeler içinde ani kararlar verdiği bir dünyada, markanızın dijital kimliği birinin size güvenip güvenmeyeceğini veya geçip gideceğini belirleyebilir.",
    blog_post_3_content_2:
      "Güçlü bir marka bir hikaye anlatır. Kim olduğunuzu, neye değer verdiğinizi ve insanların neden umursaması gerektiğini iletir. Her görsel öğe – ana sayfanızdaki yazı tipinden sosyal medya tonunuza kadar – bu hikayeyi şekillendirmede rol oynar.",
    blog_post_3_content_3:
      "Markalaşmayı her başarılı dijital ürünün temeli olarak görüyorum. Tek bir kod satırı yazmadan önce, müşterilerimizle markanın sesini, kişiliğini ve amacını tanımlamak için çalışıyoruz. Bu netlik, takip eden her şeyi etkiler – tasarım, renkler, tipografi ve hatta animasyonlar.",
    blog_post_3_content_4:
      "Tutarlılık anahtardır. Web siteniz, uygulamanız ve pazarlama materyalleriniz aynı görünüm ve hissi paylaştığında, güven ve tanınma oluşturursunuz. Kullanıcılar belirli görselleri veya ifadeleri işletmenizle ilişkilendirmeye başlar – ve gerçek marka gücü buradan gelir.",
    blog_post_3_content_5:
      "İyi markalaşma bağırmaz; bağlar. Aşinalık, sadakat ve duygu yaratır. Dijital alanda, markanız sadece kimliğiniz değil, avantajınızdır.",

    // İletişim
    contact_subtitle: "BAĞLANTI HALİNDE KALIN",
    contact_title: "Birlikte Çalışalım!",
    contact_phone: "Telefon",
    contact_email: "E-posta",
    contact_address: "Adres",
    contact_name: "Ad Soyad",
    contact_email_placeholder: "E-posta Adresi",
    contact_phone_placeholder: "Telefon Numarası",
    contact_service: "Hizmet Seçin",
    contact_message: "Mesajınızı Yazın",
    contact_send: "Mesaj Gönder",

    // Footer
    footer_copyright: "Bahattin Conkara Tarafından Tasarlandı",

    // Hakkımda Sayfası
    about_breadcrumb: "Hakkımda",
    about_title: "Hakkımda",
    about_subtitle: "Hakkımda",
    about_my_name: "Benim Adım",
    about_name_highlight: "Bahattin",
    about_role: "Web Tasarımcı & Geliştirici",
    about_desc_main:
      "Merhaba, ben Bahattin Conkara, fikirleri anlamlı dijital deneyimlere dönüştürme konusunda tutkulu yaratıcı bir geliştirici ve tasarımcıyım. Dijital dünyada öne çıkmak isteyen markalar için modern web siteleri, mobil uygulamalar ve özel yazılım çözümleri tasarlayıp geliştirdiğimiz PixyCody'nin kurucusuyum.",
    about_desc_secondary:
      "UI/UX tasarımı, web geliştirme ve markalama geçmişimle, sadece görsel olarak çekici değil, aynı zamanda işlevsel ve kullanıcı merkezli ürünler yaratmaya odaklanıyorum. Her projenin tasarım, inovasyon ve teknolojinin birlikte çalışmasıyla bir hikaye anlatma şansı olduğuna inanıyorum.",
    about_age: "Yaş",
    about_age_value: "18 Yaşında",
    about_born: "Doğum Yeri",
    about_born_value: "Manisa, Türkiye",
    about_phone: "Telefon",
    about_email: "E-posta",
    about_qualification: "Yeterlilik",
    about_work_experience: "İş Deneyimi",

    // Hizmetler Sayfası
    services_breadcrumb: "Hizmetler",
    faq_subtitle: "SSS",
    faq_title: "Her Sorunuzu Konuşalım",
    faq_q1: "Hangi hizmetleri sunuyorum?",
    faq_a1:
      "Her büyüklükteki işletme için modern web tasarımı, mobil uygulama geliştirme, özel yazılım çözümleri ve dijital markalama hizmetleri sunuyorum.",
    faq_q2: "Web geliştirme süreci nasıl işler?",
    faq_a2:
      "Hedeflerinizi anlayarak başlıyorum, ardından tasarım, geliştirme, test ve son teslim aşamalarından geçiyorum - her adımda sizi dahil ediyor ve bilgilendiriyorum.",
    faq_q3: "Proje tesliminden sonra destek sunuyor musunuz?",
    faq_a3:
      "Evet! Projeniz tamamlandıktan sonra sürekli teknik destek ve bakım sağlıyoruz. Talep üzerine uzun vadeli hizmet planları da mevcuttur.",
    faq_q4: "Web siteleriniz SEO uyumlu mu?",
    faq_a4:
      "Kesinlikle. Tarafımdan oluşturulan her web sitesi, maksimum çevrimiçi görünürlük sağlamak için hız, performans ve SEO en iyi uygulamaları için optimize edilmiştir.",
    faq_q5: "Fiyatlandırma nasıl belirlenir?",
    faq_a5:
      "Her proje kapsamına ve karmaşıklığına göre fiyatlandırılır. Hızlı bir görüşmeden sonra, ihtiyaçlarınıza göre uyarlanmış ayrıntılı ve şeffaf bir teklif sunacağım.",

    // Blog Sayfası
    blog_breadcrumb: "Blog",
    blog_search: "Arama...",
    blog_recent: "Son Gönderiler",
    blog_social: "Sosyal",
    blog_by_author: "Yazar",

    // Portföy Sayfası
    portfolio_breadcrumb: "Portföy",
    portfolio_project_1: "Doküman Yönetim Uygulaması",
    portfolio_project_2: "Dijital Pazarlama",
    portfolio_project_3: "Yaratıcı Portföy",
    portfolio_project_4: "Mobil Uygulama Geliştirme",

    // İletişim Sayfası
    contact_breadcrumb: "İletişim",

    // Blog Detayları
    blog_details_breadcrumb: "Blog Detayları",
    comment_title: "Yorum Bırak",
    comment_note:
      "E-posta adresiniz yayınlanmayacaktır. Gerekli alanlar * ile işaretlenmiştir",
    comment_name: "Ad",
    comment_email: "E-posta",
    comment_message: "Yorumunuzu buraya yazın",
    comment_submit: "Yorumu Gönder",
  },
};

// Language Manager
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "en";
    this.init();
  }

  init() {
    this.updateLanguage(this.currentLang);
    this.setupLanguageSwitcher();
    this.updateLangButton();
  }

  setupLanguageSwitcher() {
    // Find all language switcher links
    const langLinks = document.querySelectorAll('a[href="#"]');

    langLinks.forEach((link) => {
      const text = link.textContent.trim();
      if (text === "TR" || text === "EN") {
        link.id = "langSwitch";
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const newLang = this.currentLang === "en" ? "tr" : "en";
          this.switchLanguage(newLang);
        });
      }
    });
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem("language", lang);
    this.updateLanguage(lang);
    this.updateLangButton();
  }

  updateLangButton() {
    const langButtons = document.querySelectorAll('#langSwitch, a[href="#"]');
    langButtons.forEach((btn) => {
      const text = btn.textContent.trim();
      if (text === "TR" || text === "EN") {
        btn.textContent = this.currentLang === "en" ? "TR" : "EN";
      }
    });
  }

  updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = translations[lang][key];

      if (translation) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translation;
        } else if (element.tagName === "OPTION") {
          element.textContent = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update year in footer
    const yearElements = document.querySelectorAll("#year");
    yearElements.forEach((el) => {
      el.textContent = new Date().getFullYear();
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  translate(key) {
    return translations[this.currentLang][key] || key;
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.langManager = new LanguageManager();
});

// Also initialize if script is loaded after DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (!window.langManager) {
      window.langManager = new LanguageManager();
    }
  });
} else {
  if (!window.langManager) {
    window.langManager = new LanguageManager();
  }
}
