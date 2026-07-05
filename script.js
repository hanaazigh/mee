// ============================
// TRANSLATIONS
// ============================
const i18n = {
  en: {
    'nav.home':'Home','nav.about':'About','nav.portfolio':'Portfolio',
    'nav.services':'Services','nav.quote':'Get Quote','nav.testimonials':'Reviews','nav.contact':'Contact',
    'hero.badge':'Available for Projects','hero.title':'Software Developer & Information Systems Engineer',
    'hero.desc':'Building elegant digital solutions — from intelligent web platforms to mobile apps and AI-powered systems that drive real business impact.',
    'hero.btn1':'View Projects','hero.btn2':'Request a Service',
    'stat.projects':'Projects','stat.years':'Years Exp.','stat.skills':'Technologies',
    'about.eyebrow':'Who I Am','about.title':'About Me',
    'about.role':'Software Developer & IT Engineer',
    'about.bio':"Hi! I'm Zigh Hanaa, a passionate Software Developer and Information Systems Engineer based in Algeria. I hold a Master 2 in CYSIA (2026) and completed training in Design Thinking and Business Model design. I specialize in crafting full-stack digital solutions — from dynamic web platforms and responsive mobile applications to sophisticated AI integrations and database architectures. Find me on Instagram: @inova_dart.",
    'about.skills':'Technical Skills',
    'portfolio.eyebrow':'My Work','portfolio.title':'Featured Projects',
    'portfolio.sub':'A selection of projects I\'ve built — from health platforms to AI-powered systems.',
    'proj1.name':'Sihaty DZ — Digital Health Platform 🏆',
    'proj1.desc':'A comprehensive digital health platform enabling Algerian patients to book appointments, access medical records, and connect with healthcare professionals online. Awarded an official Label for its impact and quality.',
    'proj7.name':'MyRein — Dialysis Patient Companion App',
    'proj7.desc':'A mobile application dedicated to patients with kidney disease undergoing dialysis, allowing them to record and track essential medical information — dialysis sessions, medications, lab results, diet and appointment reminders.',
    'proj2.name':'Attendance System — Facial Recognition',
    'proj2.desc':'University attendance management using real-time facial recognition technology, reducing manual work and increasing accuracy.',
    'proj3.name':'Restaurant Management Application',
    'proj3.desc':'Full-featured desktop application for restaurant operations — orders, inventory, billing, staff and analytics.',
    'proj4.name':'Chat App — Messenger-Style Messaging',
    'proj4.desc':'Real-time multi-user chat application inspired by Messenger, supporting private conversations, group rooms, and file sharing.',
    'proj5.name':'E-Commerce Websites',
    'proj5.desc':'Custom e-commerce solutions with product management, shopping cart, payment gateways, and admin dashboards.',
    'proj6.name':'Custom Mobile Applications','proj6.desc':'Cross-platform mobile apps built with Flutter, delivering smooth native-like experiences for iOS and Android.',
    'btn.details':'Details','btn.demo':'Live Demo','btn.code':'View Code',
    'services.eyebrow':'What I Offer','services.title':'My Services',
    'services.sub':'Professional development services tailored to your business goals and budget.',
    'svc1.name':'Landing Page','svc1.desc':'High-converting landing pages designed to capture leads and showcase your brand.','svc1.price':'From 26,000 DA',
    'svc2.name':'Business Website','svc2.desc':'Multi-page professional websites for companies and service-based businesses.','svc2.price':'From 26,000 DA',
    'svc3.name':'E-Commerce Website','svc3.desc':'Full-featured online stores with payment integration and admin panel.','svc3.price':'From 39,000 DA',
    'svc4.name':'Mobile Application','svc4.desc':'Cross-platform iOS & Android apps built with Flutter.','svc4.price':'From 65,000 DA',
    'svc5.name':'Desktop Application','svc5.desc':'Powerful desktop software for Windows/Linux.','svc5.price':'From 39,000 DA',
    'svc6.name':'Database Design','svc6.desc':'Optimized relational and NoSQL database architecture.','svc6.price':'From 13,000 DA',
    'svc7.name':'AI Integration','svc7.desc':'Integrate ML models, chatbots, computer vision into your systems.','svc7.price':'From 26,000 DA',
    'svc8.name':'Maintenance & Support','svc8.desc':'Ongoing support, bug fixes, and performance optimization.','svc8.price':'From 6,500 DA/mo',
    'quote.eyebrow':'Instant Estimate','quote.title':'Get a Free Quote',
    'quote.sub':'Fill in your project details and get an instant price estimate with timeline.',
    'quote.formtitle':'Project Details','quote.empty':'Fill in the form and click Calculate to see your instant quote.',
    'quote.summary':'Your Quotation Summary','quote.estimated':'Estimated Budget',
    'quote.timeline':'Dev Timeline','quote.complexity':'Complexity',
    'form.name':'Full Name *','form.email':'Email *','form.phone':'Phone','form.company':'Company Name',
    'form.service':'Service Type *','form.select':'-- Select a service --',
    'opt.landing':'Landing Page','opt.business':'Business Website','opt.ecommerce':'E-Commerce Website',
    'opt.mobile':'Mobile Application','opt.desktop':'Desktop Application','opt.ai':'AI Integration',
    'form.desc':'Project Description *','form.pages':'Number of Pages / Screens','form.features':'Required Features',
    'feat.mobile':'📱 Mobile App Version','feat.db':'🗄️ Database','feat.auth':'🔐 User Authentication',
    'feat.payment':'💳 Payment System','feat.ai':'🤖 AI Features','feat.admin':'⚙️ Admin Dashboard',
    'form.deadline':'Project Deadline','btn.calculate':'Calculate My Quote','btn.send':'Send Request',
    'btn.pdf':'Export PDF',
    'test.eyebrow':'Client Reviews','test.title':'What Clients Say',
    'rev1.text':'"Hanaa delivered our health platform beyond expectations. Professional, communicative, and technically excellent."',
    'rev1.role':'Medical Director, Sihaty DZ',
    'rev2.text':'"The facial recognition attendance system transformed how we manage our university. Incredibly accurate and intuitive."',
    'rev2.role':'University Department Head',
    'rev3.text':'"Our restaurant app is a game changer. Efficiency improved by 40%. Highly recommend Hanaa!"',
    'rev3.role':'Restaurant Owner, Ain Temouchent',
    'rev4.text':'"Fantastic mobile app! She understood our vision and delivered on time and within budget."',
    'rev4.role':'Startup Founder, Algiers',
    'contact.eyebrow':'Get In Touch','contact.title':'Let\'s Work Together',
    'contact.sub':'Have a project in mind? Let\'s talk about how I can help.',
    'contact.h3':'Connect with me',
    'contact.p':"I'm always open to new opportunities and interesting projects. My inbox is always open!",
    'contact.location':'📍 Location','contact.avail':'⏱ Availability',
    'contact.availval':'Available for remote & local projects',
    'contact.formtitle':'Send a Message',
    'form.subject':'Subject *','form.message':'Message *','btn.sendmsg':'Send Message',
    'footer.tagline':'Building elegant digital solutions that drive real business results.',
    'footer.nav':'Navigation','footer.services':'Services','footer.contact':'Contact',
    'footer.rights':'All rights reserved.','footer.admin':'Admin Panel',
    'admin.title':'Admin Dashboard','admin.close':'Close',
    'admin.total':'Total Requests','admin.avg':'Avg. Quote','admin.high':'High Complexity','admin.top':'Top Service',
    'admin.requests':'Service Requests','admin.empty':'No requests yet.',
    'th.name':'Name','th.email':'Email','th.service':'Service','th.quote':'Quote',
    'th.complexity':'Complexity','th.date':'Date','th.actions':'Actions',
  },
  fr: {
    'nav.home':'Accueil','nav.about':'À propos','nav.portfolio':'Portfolio',
    'nav.services':'Services','nav.quote':'Devis','nav.testimonials':'Avis','nav.contact':'Contact',
    'hero.badge':'Disponible pour des projets','hero.title':'Développeuse Logiciel & Ingénieure en Systèmes d\'Information',
    'hero.desc':'Création de solutions numériques élégantes — des plateformes web intelligentes aux applications mobiles et systèmes IA.',
    'hero.btn1':'Voir les projets','hero.btn2':'Demander un service',
    'stat.projects':'Projets','stat.years':'Ans d\'exp.','stat.skills':'Technologies',
    'about.eyebrow':'Qui suis-je','about.title':'À propos de Moi',
    'about.role':'Développeuse Logiciel & Ingénieure IT',
    'about.bio':"Bonjour ! Je suis Zigh Hanaa, développeuse logiciel passionnée et ingénieure en systèmes d'information basée en Algérie. Je suis titulaire d'un Master 2 en CYSIA (2026) et j'ai suivi des formations en Design Thinking et en Business Model. Je me spécialise dans la création de solutions numériques complètes. Retrouvez-moi sur Instagram : @inova_dart.",
    'about.skills':'Compétences Techniques',
    'portfolio.eyebrow':'Mon Travail','portfolio.title':'Projets en vedette',
    'portfolio.sub':'Une sélection de projets que j\'ai réalisés.',
    'proj1.name':'Sihaty DZ — Plateforme de Santé Numérique 🏆',
    'proj1.desc':'Une plateforme de santé numérique complète permettant aux patients algériens de prendre des rendez-vous et accéder à leurs dossiers médicaux. Récompensée par un Label officiel pour son impact et sa qualité.',
    'proj7.name':'MyRein — Application Compagnon pour Patients Dialysés',
    'proj7.desc':'Une application mobile dédiée aux patients atteints de maladie rénale sous dialyse, leur permettant d\'enregistrer et suivre les informations médicales essentielles — séances de dialyse, médicaments, résultats d\'analyses, régime alimentaire et rappels de rendez-vous.',
    'proj2.name':'Système de présence — Reconnaissance faciale',
    'proj2.desc':'Gestion de la présence universitaire par reconnaissance faciale en temps réel.',
    'proj3.name':'Application de Gestion de Restaurant',
    'proj3.desc':'Application de bureau complète pour les opérations de restaurant.',
    'proj4.name':'Application de Chat — Style Messenger',
    'proj4.desc':'Application de chat multi-utilisateurs en temps réel inspirée de Messenger, avec messagerie privée, salons de groupe et partage de fichiers.',
    'proj5.name':'Sites E-Commerce','proj5.desc':'Solutions e-commerce personnalisées avec gestion des paiements.',
    'proj6.name':'Applications Mobiles Personnalisées','proj6.desc':'Applications mobiles multiplateformes Flutter pour iOS et Android.',
    'btn.details':'Détails','btn.demo':'Démo live','btn.code':'Voir le code',
    'services.eyebrow':'Ce que j\'offre','services.title':'Mes Services',
    'services.sub':'Services de développement professionnel adaptés à vos objectifs.',
    'svc1.name':'Page d\'atterrissage','svc1.desc':'Pages à fort taux de conversion pour capter des prospects.','svc1.price':'À partir de 26 000 DA',
    'svc2.name':'Site Web Professionnel','svc2.desc':'Sites multi-pages pour entreprises et professionnels.','svc2.price':'À partir de 26 000 DA',
    'svc3.name':'Site E-Commerce','svc3.desc':'Boutiques en ligne complètes avec paiement intégré.','svc3.price':'À partir de 39 000 DA',
    'svc4.name':'Application Mobile','svc4.desc':'Apps iOS & Android multiplateformes avec Flutter.','svc4.price':'À partir de 65 000 DA',
    'svc5.name':'Application Desktop','svc5.desc':'Logiciels de bureau puissants.','svc5.price':'À partir de 39 000 DA',
    'svc6.name':'Conception de Base de données','svc6.desc':'Architecture de base de données optimisée.','svc6.price':'À partir de 13 000 DA',
    'svc7.name':'Intégration IA','svc7.desc':'Intégrez des modèles ML, chatbots, vision par ordinateur.','svc7.price':'À partir de 26 000 DA',
    'svc8.name':'Maintenance & Support','svc8.desc':'Support continu, corrections de bugs et optimisation.','svc8.price':'À partir de 6 500 DA/mois',
    'quote.eyebrow':'Estimation instantanée','quote.title':'Obtenez un Devis Gratuit',
    'quote.sub':'Remplissez les détails de votre projet et obtenez une estimation instantanée.',
    'quote.formtitle':'Détails du Projet','quote.empty':'Remplissez le formulaire et cliquez sur Calculer.',
    'quote.summary':'Résumé de votre Devis','quote.estimated':'Budget Estimé',
    'quote.timeline':'Délai de développement','quote.complexity':'Complexité',
    'form.name':'Nom complet *','form.email':'E-mail *','form.phone':'Téléphone','form.company':'Nom de l\'entreprise',
    'form.service':'Type de service *','form.select':'-- Sélectionnez un service --',
    'opt.landing':'Page d\'atterrissage','opt.business':'Site Web Professionnel','opt.ecommerce':'Site E-Commerce',
    'opt.mobile':'Application Mobile','opt.desktop':'Application Desktop','opt.ai':'Intégration IA',
    'form.desc':'Description du projet *','form.pages':'Nombre de pages / écrans','form.features':'Fonctionnalités requises',
    'feat.mobile':'📱 Version Mobile','feat.db':'🗄️ Base de données','feat.auth':'🔐 Authentification',
    'feat.payment':'💳 Paiement','feat.ai':'🤖 Fonctionnalités IA','feat.admin':'⚙️ Tableau de bord Admin',
    'form.deadline':'Date limite','btn.calculate':'Calculer mon devis','btn.send':'Envoyer la demande','btn.pdf':'Exporter PDF',
    'test.eyebrow':'Avis clients','test.title':'Ce que disent les clients',
    'rev1.text':'"Hanaa a livré notre plateforme de santé au-delà des attentes. Professionnelle et techniquement excellente."',
    'rev1.role':'Directeur médical, Sihaty DZ',
    'rev2.text':'"Le système de présence par reconnaissance faciale a transformé notre université. Précis et intuitif."',
    'rev2.role':'Chef de département universitaire',
    'rev3.text':'"Notre application restaurant est révolutionnaire. L\'efficacité a augmenté de 40%. Hautement recommandée !"',
    'rev3.role':'Propriétaire de restaurant, Ain Temouchent',
    'rev4.text':'"Application mobile fantastique ! Elle a compris notre vision et livré dans les délais et le budget."',
    'rev4.role':'Fondatrice de startup, Alger',
    'contact.eyebrow':'Entrez en contact','contact.title':'Travaillons Ensemble',
    'contact.sub':'Vous avez un projet ? Discutons de comment je peux vous aider.',
    'contact.h3':'Connectez-vous avec moi','contact.p':"Je suis toujours ouverte à de nouvelles opportunités. Ma boîte mail est toujours ouverte !",
    'contact.location':'📍 Localisation','contact.avail':'⏱ Disponibilité',
    'contact.availval':'Disponible pour projets à distance et locaux',
    'contact.formtitle':'Envoyer un message',
    'form.subject':'Sujet *','form.message':'Message *','btn.sendmsg':'Envoyer',
    'footer.tagline':'Création de solutions numériques élégantes pour des résultats concrets.',
    'footer.nav':'Navigation','footer.services':'Services','footer.contact':'Contact',
    'footer.rights':'Tous droits réservés.','footer.admin':'Panneau Admin',
    'admin.title':'Tableau de bord Admin','admin.close':'Fermer',
    'admin.total':'Total demandes','admin.avg':'Devis moyen','admin.high':'Haute complexité','admin.top':'Service principal',
    'admin.requests':'Demandes de service','admin.empty':'Aucune demande pour l\'instant.',
    'th.name':'Nom','th.email':'E-mail','th.service':'Service','th.quote':'Devis',
    'th.complexity':'Complexité','th.date':'Date','th.actions':'Actions',
  },
  ar: {
    'nav.home':'الرئيسية','nav.about':'عني','nav.portfolio':'أعمالي',
    'nav.services':'الخدمات','nav.quote':'طلب عرض','nav.testimonials':'التقييمات','nav.contact':'تواصل',
    'hero.badge':'متاحة للمشاريع','hero.title':'مطورة برمجيات ومهندسة أنظمة معلومات',
    'hero.desc':'بناء حلول رقمية أنيقة — من منصات الويب الذكية إلى تطبيقات الهاتف وأنظمة الذكاء الاصطناعي.',
    'hero.btn1':'عرض المشاريع','hero.btn2':'طلب خدمة',
    'stat.projects':'مشاريع','stat.years':'سنوات خبرة','stat.skills':'تقنيات',
    'about.eyebrow':'من أنا','about.title':'عنّي',
    'about.role':'مطورة برمجيات ومهندسة تقنية معلومات',
    'about.bio':'مرحباً! أنا زيغ هناء، مطورة برمجيات شغوفة ومهندسة أنظمة معلومات من الجزائر. حاصلة على ماستر 2 في CYSIA (2026) وأتممت تكوينات في التفكير التصميمي (Design Thinking) ونموذج الأعمال (Business Model). أتخصص في بناء حلول رقمية متكاملة. تابعوني على إنستغرام: @inova_dart.',
    'about.skills':'المهارات التقنية',
    'portfolio.eyebrow':'أعمالي','portfolio.title':'المشاريع المميزة',
    'portfolio.sub':'مجموعة مختارة من مشاريعي.',
    'proj1.name':'صحتي DZ — منصة الصحة الرقمية 🏆','proj1.desc':'منصة صحة رقمية شاملة تتيح للمرضى الجزائريين حجز المواعيد والوصول إلى السجلات الطبية. حازت على Label رسمي لجودتها وتأثيرها.',
    'proj7.name':'MyRein — تطبيق مرافق لمرضى الغسيل الكلوي',
    'proj7.desc':'تطبيق موبايل مخصص لمرضى الفشل الكلوي الخاضعين للغسيل الكلوي، يتيح لهم تسجيل ومتابعة المعلومات الطبية الضرورية — جلسات الغسيل، الأدوية، نتائج التحاليل، النظام الغذائي وتذكير المواعيد.',
    'proj2.name':'نظام الحضور — التعرف على الوجه','proj2.desc':'إدارة حضور الجامعة باستخدام تقنية التعرف على الوجه في الوقت الفعلي.',
    'proj3.name':'تطبيق إدارة المطعم','proj3.desc':'تطبيق سطح مكتب متكامل لعمليات المطعم.',
    'proj4.name':'تطبيق دردشة — على غرار Messenger','proj4.desc':'تطبيق دردشة متعدد المستخدمين في الوقت الفعلي مستوحى من Messenger، يدعم المراسلة الخاصة وغرف المجموعات ومشاركة الملفات.',
    'proj5.name':'مواقع التجارة الإلكترونية','proj5.desc':'حلول تجارة إلكترونية مخصصة مع بوابات دفع.',
    'proj6.name':'تطبيقات الهاتف المخصصة','proj6.desc':'تطبيقات متعددة المنصات مبنية بـ Flutter.',
    'btn.details':'التفاصيل','btn.demo':'عرض حي','btn.code':'الكود',
    'services.eyebrow':'ما أقدمه','services.title':'خدماتي',
    'services.sub':'خدمات تطوير احترافية مصممة لأهدافك.',
    'svc1.name':'صفحة هبوط','svc1.desc':'صفحات هبوط عالية التحويل لعرض علامتك التجارية.','svc1.price':'من 26,000 دج',
    'svc2.name':'موقع أعمال','svc2.desc':'مواقع متعددة الصفحات للشركات والمهنيين.','svc2.price':'من 26,000 دج',
    'svc3.name':'موقع تجارة إلكترونية','svc3.desc':'متاجر إلكترونية كاملة مع بوابة دفع.','svc3.price':'من 39,000 دج',
    'svc4.name':'تطبيق موبايل','svc4.desc':'تطبيقات iOS وAndroid بـ Flutter.','svc4.price':'من 65,000 دج',
    'svc5.name':'تطبيق سطح مكتب','svc5.desc':'برامج قوية لـ Windows/Linux.','svc5.price':'من 39,000 دج',
    'svc6.name':'تصميم قواعد البيانات','svc6.desc':'بنية قواعد بيانات محسّنة.','svc6.price':'من 13,000 دج',
    'svc7.name':'تكامل الذكاء الاصطناعي','svc7.desc':'دمج نماذج الذكاء الاصطناعي في أنظمتك.','svc7.price':'من 26,000 دج',
    'svc8.name':'صيانة ودعم','svc8.desc':'دعم مستمر وإصلاح الأخطاء.','svc8.price':'من 6,500 دج/شهر',
    'quote.eyebrow':'تقدير فوري','quote.title':'احصل على عرض مجاني',
    'quote.sub':'أدخل تفاصيل مشروعك واحصل على تقدير فوري.',
    'quote.formtitle':'تفاصيل المشروع','quote.empty':'أكمل النموذج واضغط احسب للحصول على عرض أسعار.',
    'quote.summary':'ملخص عرض الأسعار','quote.estimated':'الميزانية التقديرية',
    'quote.timeline':'مدة التطوير','quote.complexity':'التعقيد',
    'form.name':'الاسم الكامل *','form.email':'البريد الإلكتروني *','form.phone':'الهاتف','form.company':'اسم الشركة',
    'form.service':'نوع الخدمة *','form.select':'-- اختر خدمة --',
    'opt.landing':'صفحة هبوط','opt.business':'موقع أعمال','opt.ecommerce':'موقع تجارة إلكترونية',
    'opt.mobile':'تطبيق موبايل','opt.desktop':'تطبيق سطح مكتب','opt.ai':'تكامل AI',
    'form.desc':'وصف المشروع *','form.pages':'عدد الصفحات / الشاشات','form.features':'الميزات المطلوبة',
    'feat.mobile':'📱 نسخة موبايل','feat.db':'🗄️ قاعدة بيانات','feat.auth':'🔐 تسجيل دخول',
    'feat.payment':'💳 نظام دفع','feat.ai':'🤖 ميزات AI','feat.admin':'⚙️ لوحة تحكم',
    'form.deadline':'الموعد النهائي','btn.calculate':'احسب عرض الأسعار','btn.send':'أرسل الطلب','btn.pdf':'تصدير PDF',
    'test.eyebrow':'تقييمات العملاء','test.title':'ماذا يقول العملاء',
    'rev1.text':'"هناء سلّمت منصة الصحة فوق التوقعات. محترفة ومتميزة تقنياً."','rev1.role':'المدير الطبي، صحتي DZ',
    'rev2.text':'"نظام الحضور بالتعرف على الوجه حوّل طريقة إدارة جامعتنا. دقيق وسهل الاستخدام."','rev2.role':'رئيس قسم جامعي',
    'rev3.text':'"تطبيق المطعم غيّر طريقة عملنا. تحسّنت الكفاءة بنسبة 40%. أوصي به بشدة!"','rev3.role':'صاحب مطعم، وهران',
    'rev4.text':'"تطبيق موبايل رائع! فهمت رؤيتنا وسلّمت في الوقت وضمن الميزانية."','rev4.role':'مؤسسة شركة ناشئة، الجزائر',
    'contact.eyebrow':'تواصل معي','contact.title':'لنعمل معاً',
    'contact.sub':'لديك مشروع؟ دعنا نتحدث عن كيف يمكنني المساعدة.',
    'contact.h3':'تواصل معي','contact.p':'أنا دائماً منفتحة على فرص جديدة. بريدي الإلكتروني مفتوح دائماً!',
    'contact.location':'📍 الموقع','contact.avail':'⏱ التوافر',
    'contact.availval':'متاحة للمشاريع عن بُعد والمحلية',
    'contact.formtitle':'أرسل رسالة',
    'form.subject':'الموضوع *','form.message':'الرسالة *','btn.sendmsg':'إرسال',
    'footer.tagline':'بناء حلول رقمية أنيقة تحقق نتائج أعمال حقيقية.',
    'footer.nav':'التنقل','footer.services':'الخدمات','footer.contact':'تواصل',
    'footer.rights':'جميع الحقوق محفوظة.','footer.admin':'لوحة الإدارة',
    'admin.title':'لوحة الإدارة','admin.close':'إغلاق',
    'admin.total':'إجمالي الطلبات','admin.avg':'متوسط العروض','admin.high':'تعقيد عالٍ','admin.top':'الخدمة الأكثر طلباً',
    'admin.requests':'طلبات الخدمة','admin.empty':'لا توجد طلبات بعد.',
    'th.name':'الاسم','th.email':'البريد','th.service':'الخدمة','th.quote':'العرض',
    'th.complexity':'التعقيد','th.date':'التاريخ','th.actions':'إجراءات',
  }
};

let currentLang = 'en';
const langCycle = ['en', 'fr', 'ar'];
const langLabels = {en:'EN', fr:'FR', ar:'AR'};

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.getElementById('langBtn').textContent = langLabels[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
}

document.getElementById('langBtn').addEventListener('click', () => {
  const idx = langCycle.indexOf(currentLang);
  applyLang(langCycle[(idx+1) % langCycle.length]);
});

// ============================
// THEME
// ============================
let isDark = true;
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeBtn.innerHTML = isDark ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
});

// ============================
// HAMBURGER
// ============================
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ============================
// SCROLL BEHAVIORS
// ============================
window.addEventListener('scroll', () => {
  const sp = document.getElementById('scrollProgress');
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  sp.style.width = pct + '%';
  const bt = document.getElementById('backTop');
  if (window.scrollY > 400) bt.classList.add('show'); else bt.classList.remove('show');
  const sections = ['home','about','portfolio','services','quote','testimonials','contact'];
  let current = '';
  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (sec && window.scrollY >= sec.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#'+current);
  });
});

// ============================
// FADE UP OBSERVER
// ============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ============================
// PRELOADER
// ============================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('fade');
    setTimeout(() => document.getElementById('preloader').style.display='none', 600);
  }, 800);
});

// ============================
// QUOTATION CALCULATOR (prices in DA - Algerian Dinar)
// ============================
const PRICING = {
  base: { landing:26000, business:26000, ecommerce:39000, mobile:65000, desktop:39000, ai:26000 },
  pageRate: 2500,
  features: { fMobile:65000, fDatabase:13000, fAuth:6500, fPayment:19500, fAI:39000, fAdmin:10500 }
};
const TIMELINE = {
  landing:'1-2 weeks', business:'2-4 weeks', ecommerce:'4-8 weeks',
  mobile:'6-12 weeks', desktop:'4-8 weeks', ai:'4-10 weeks'
};

function calculateQuote() {
  const name = document.getElementById('qName').value.trim();
  const email = document.getElementById('qEmail').value.trim();
  const service = document.getElementById('qService').value;
  const desc = document.getElementById('qDesc').value.trim();
  if (!name || !email || !service || !desc) {
    showToast('error', 'Please fill in all required fields.');
    return;
  }
  const pages = parseInt(document.getElementById('qPages').value) || 1;
  let total = PRICING.base[service] || 26000;
  const breakdown = [{ label: 'Base price (' + service + ')', price: total }];
  const extraPages = Math.max(0, pages - 1);
  if (extraPages > 0) {
    const pageCost = extraPages * PRICING.pageRate;
    total += pageCost;
    breakdown.push({ label: `Additional pages (${extraPages} × ${PRICING.pageRate.toLocaleString()} DA)`, price: pageCost });
  }
  const featureLabels = { fMobile:'Mobile App Version', fDatabase:'Database', fAuth:'User Authentication', fPayment:'Payment System', fAI:'AI Features', fAdmin:'Admin Dashboard' };
  Object.entries(PRICING.features).forEach(([id, cost]) => {
    if (document.getElementById(id).checked) {
      total += cost;
      breakdown.push({ label: featureLabels[id], price: cost });
    }
  });
  const complexity = total < 80000 ? 'Low' : total < 160000 ? 'Medium' : 'High';
  const timeline = TIMELINE[service] || '4-8 weeks';

  document.getElementById('quotePlaceholder').style.display = 'none';
  const resultEl = document.getElementById('quoteResult');
  resultEl.classList.add('show');
  document.getElementById('qTotal').textContent = total.toLocaleString() + ' DA';
  document.getElementById('qTotalNote').textContent = 'Excluding taxes. Final price may vary.';
  document.getElementById('qTimeline').textContent = timeline;
  const cx = document.getElementById('qComplexity');
  cx.innerHTML = `<span class="complexity-badge complexity-${complexity.toLowerCase()}">${complexity}</span>`;
  let bHTML = breakdown.map((b,i) => `<div class="breakdown-item"><span class="breakdown-label">${b.label}</span><span class="breakdown-price">+${b.price.toLocaleString()} DA</span></div>`).join('');
  bHTML += `<div class="breakdown-item"><span>Total Estimate</span><span>${total.toLocaleString()} DA</span></div>`;
  document.getElementById('qBreakdown').innerHTML = bHTML;
  window._lastQuote = {
    name, email, service, desc, total, complexity, timeline,
    date: new Date().toLocaleDateString()
  };
  showToast('success', 'Quote calculated successfully!');
}

// ============================
// CORRECTED API REQUEST FUNCTION
// ============================
async function apiRequest(url, options = {}) {
    try {
        const response = await fetch(url, options);
        
        // Read the response body ONCE as JSON
        let data = {};
        try {
            data = await response.json();
        } catch (e) {
            // If JSON parsing fails, try to get text for debugging
            const text = await response.text();
            console.error('Server returned non-JSON:', text.substring(0, 200));
            throw new Error('Server returned invalid response');
        }
        
        // Check if response was successful
        if (!response.ok) {
            throw new Error(data.error || `Request failed (${response.status})`);
        }
        
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// ============================
// SAVE QUOTE REQUEST TO DATABASE
// ============================
function saveQuoteRequest() {
    if (!window._lastQuote) {
        showToast('error', 'Please calculate your quote first.');
        return;
    }

    const q = window._lastQuote;

    const features = [];
    const featureMap = {
        'fMobile': 'Mobile App Version',
        'fDatabase': 'Database',
        'fAuth': 'User Authentication',
        'fPayment': 'Payment System',
        'fAI': 'AI Features',
        'fAdmin': 'Admin Dashboard'
    };

    Object.keys(featureMap).forEach(id => {
        if (document.getElementById(id).checked) {
            features.push(featureMap[id]);
        }
    });

    const requestData = {
        name: q.name,
        email: q.email,
        phone: document.getElementById('qPhone').value.trim(),
        company: document.getElementById('qCompany').value.trim(),
        service: q.service,
        description: q.desc,
        pages: parseInt(document.getElementById('qPages').value) || 1,
        features: features,
        deadline: document.getElementById('qDeadline').value || null,
        total: q.total,
        complexity: q.complexity,
        timeline: q.timeline
    };

    apiRequest('api.php?action=save_request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
    })
    .then(() => {
        showToast('success', 'Your request has been submitted! We\'ll be in touch soon.');
        ['qName','qEmail','qPhone','qCompany','qDesc'].forEach(id => document.getElementById(id).value='');
        document.getElementById('qService').value='';
        document.getElementById('qPages').value='5';
        ['fMobile','fDatabase','fAuth','fPayment','fAI','fAdmin'].forEach(id => document.getElementById(id).checked=false);
        document.getElementById('quoteResult').classList.remove('show');
        document.getElementById('quotePlaceholder').style.display='flex';
        window._lastQuote = null;
    })
    .catch(error => {
        console.error('Error:', error);
        showToast('error', error.message || 'Failed to submit request. Please try again.');
    });
}

// ============================
// EXPORT QUOTE PDF
// ============================
function exportQuotePDF() {
  if (!window._lastQuote) { showToast('error','Please calculate a quote first.'); return; }
  const q = window._lastQuote;
  const content = `HANAA DEV SOLUTIONS\nQuotation Summary\n${'='.repeat(40)}\n\nClient: ${q.name}\nEmail: ${q.email}\nService: ${q.service}\n\nProject Description:\n${q.desc}\n\n${'='.repeat(40)}\nESTIMATED BUDGET: ${q.total.toLocaleString()} DA\nTIMELINE: ${q.timeline}\nCOMPLEXITY: ${q.complexity}\n${'='.repeat(40)}\n\nDate: ${q.date}\n\nThank you for choosing Hanaa Dev Solutions!\nContact: hanaa@hanaadevsolutions.com`;
  const blob = new Blob([content], {type:'text/plain'});
  const a = document.createElement('a'); a.href=URL.createObjectURL(blob);
  a.download=`Quote_${q.name.replace(/\s/g,'_')}.txt`; a.click();
  showToast('success','Quote exported!');
}

// ============================
// CONTACT FORM
// ============================
function sendContact() {
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const subject = document.getElementById('cSubject').value.trim();
  const msg = document.getElementById('cMessage').value.trim();

  if (!name || !email || !subject || !msg) {
    showToast('error', 'Please fill in all fields.');
    return;
  }
  if (!email.includes('@')) {
    showToast('error', 'Please enter a valid email.');
    return;
  }

  apiRequest('api.php?action=save_contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message: msg })
  })
  .then(() => {
    showToast('success', 'Message sent! I\'ll reply within 24 hours.');
    ['cName','cEmail','cSubject','cMessage'].forEach(id => document.getElementById(id).value='');
  })
  .catch(error => {
    console.error('Error:', error);
    showToast('error', error.message || 'Failed to send message. Please try again.');
  });
}

// ============================
// ADMIN PANEL
// ============================
function openAdmin() {
  document.getElementById('admin').classList.add('open');
  loadAdminData();
}

function closeAdmin() {
  document.getElementById('admin').classList.remove('open');
}

function loadAdminData() {
  // Load stats
  apiRequest('api.php?action=get_stats')
    .then(stats => {
      document.getElementById('statTotal').textContent = stats.total || 0;
      document.getElementById('statAvg').textContent = (stats.avg || 0).toLocaleString() + ' DA';
      document.getElementById('statHigh').textContent = stats.high || 0;
      document.getElementById('statServices').textContent = stats.top || '—';
    })
    .catch(error => console.error('Error loading stats:', error));

  // Load requests
  apiRequest('api.php?action=get_requests')
    .then(requests => {
      const tbody = document.getElementById('requestsTableBody');
      const noReq = document.getElementById('noRequests');

      if (!Array.isArray(requests) || requests.length === 0) {
        tbody.innerHTML = '';
        noReq.style.display = 'block';
        return;
      }

      noReq.style.display = 'none';
      tbody.innerHTML = requests.map((r, i) => `
        <tr>
          <td>${i+1}</td>
          <td><strong>${escapeHtml(r.client_name)}</strong></td>
          <td>${escapeHtml(r.client_email)}</td>
          <td>${escapeHtml(r.service_type)}</td>
          <td style="color:var(--blue-light);font-weight:700">${parseFloat(r.total_quote).toLocaleString()} DA</td>
          <td><span class="complexity-badge complexity-${(r.complexity || '').toLowerCase()}">${escapeHtml(r.complexity)}</span></td>
          <td>${r.created_at ? new Date(r.created_at.replace(' ', 'T')).toLocaleDateString() : ''}</td>
          <td>
            <button class="tbl-btn" onclick="viewRequest(${r.id})"><i class="fa fa-eye"></i></button>
            <button class="tbl-btn danger" onclick="deleteRequest(${r.id})"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      `).join('');
    })
    .catch(error => {
      console.error('Error loading requests:', error);
      showToast('error', 'Failed to load requests');
    });
}

function viewRequest(id) {
  apiRequest(`api.php?action=get_request&id=${id}`)
    .then(r => {
      document.getElementById('modalTitle').textContent = `Request from ${r.client_name}`;
      document.getElementById('modalBody').innerHTML = `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
          <div><strong>Email:</strong><br>${escapeHtml(r.client_email)}</div>
          <div><strong>Service:</strong><br>${escapeHtml(r.service_type)}</div>
          <div><strong>Quote:</strong><br><span style="color:var(--blue-light);font-weight:700;font-size:1.2rem">${parseFloat(r.total_quote).toLocaleString()} DA</span></div>
          <div><strong>Complexity:</strong><br><span class="complexity-badge complexity-${(r.complexity || '').toLowerCase()}">${escapeHtml(r.complexity)}</span></div>
          <div><strong>Timeline:</strong><br>${escapeHtml(r.timeline)}</div>
          <div><strong>Date:</strong><br>${r.created_at ? new Date(r.created_at.replace(' ', 'T')).toLocaleDateString() : ''}</div>
        </div>
        <div><strong>Description:</strong><br><p style="color:var(--text-secondary);margin-top:0.5rem;line-height:1.6">${escapeHtml(r.project_description)}</p></div>
        ${r.features ? `<div><strong>Features:</strong><br><p style="color:var(--text-secondary);margin-top:0.5rem">${Array.isArray(r.features) ? r.features.map(escapeHtml).join(', ') : escapeHtml(r.features)}</p></div>` : ''}
      `;
      document.getElementById('projectModal').classList.add('open');
    })
    .catch(error => {
      console.error('Error:', error);
      showToast('error', error.message || 'Failed to load request details');
    });
}

function deleteRequest(id) {
  if (!confirm('Delete this request?')) return;

  apiRequest(`api.php?action=delete_request&id=${id}`, { method: 'DELETE' })
    .then(() => {
      loadAdminData();
      showToast('success', 'Request deleted.');
    })
    .catch(error => {
      console.error('Error:', error);
      showToast('error', error.message || 'Failed to delete request');
    });
}

function clearAllRequests() {
  if (!confirm('Clear all requests? This cannot be undone.')) return;

  apiRequest('api.php?action=clear_requests', { method: 'DELETE' })
    .then(() => {
      loadAdminData();
      showToast('success', 'All requests cleared.');
    })
    .catch(error => {
      console.error('Error:', error);
      showToast('error', error.message || 'Failed to clear requests');
    });
}

function exportAllPDF() {
  apiRequest('api.php?action=get_requests')
    .then(requests => {
      if (!Array.isArray(requests) || requests.length === 0) {
        showToast('error', 'No requests to export.');
        return;
      }

      let content = 'HANAA DEV SOLUTIONS — ALL REQUESTS\n' + '='.repeat(50) + '\n\n';
      requests.forEach((r, i) => {
        content += `[${i+1}] ${r.client_name} | ${r.client_email} | ${r.service_type} | ${parseFloat(r.total_quote).toLocaleString()} DA | ${r.complexity} | ${r.created_at ? new Date(r.created_at.replace(' ', 'T')).toLocaleDateString() : ''}\n`;
      });

      const blob = new Blob([content], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'All_Requests.txt';
      a.click();
      showToast('success', 'Exported!');
    })
    .catch(error => {
      console.error('Error:', error);
      showToast('error', error.message || 'Failed to export requests');
    });
}

// ============================
// PROJECT MODALS
// ============================
const projectDetails = [
  { title:'Sihaty DZ — Digital Health Platform 🏆', emoji:'🏥', desc:'A comprehensive digital health ecosystem designed for the Algerian healthcare system. Patients can register, search for doctors, book appointments, view medical history, and receive prescription reminders. Healthcare providers get a full dashboard for patient management. This project received an official Label recognizing its quality and impact.', tech:['PHP','MySQL','JavaScript','Bootstrap','REST API'], features:['Online appointment booking','Patient medical records','Doctor search & profiles','SMS reminders','Admin dashboard','🏆 Official Label awarded'] },
  { title:'Attendance System — Facial Recognition', emoji:'👁️', desc:'An AI-powered university attendance system using real-time facial recognition. The system automatically detects and logs student attendance, generates reports for professors, and sends notifications to absent students.', tech:['Python','OpenCV','TensorFlow','SQLite','Tkinter'], features:['Real-time face detection','Auto attendance logging','Professor report dashboard','Student notification system','Export to Excel'] },
  { title:'Restaurant Management Application', emoji:'🍽️', desc:'A complete restaurant management desktop application covering the entire operation — from table management and order taking to kitchen display, inventory control, billing, and detailed analytics.', tech:['Java','JavaFX','MySQL','JasperReports'], features:['Order & table management','Kitchen display system','Inventory tracking','Staff scheduling','Financial reports'] },
  { title:'Chat App — Messenger-Style Messaging', emoji:'💬', desc:'A networked real-time chat application inspired by Messenger, supporting multiple concurrent users through multithreading. Includes private messaging, group chat rooms, and file sharing capabilities.', tech:['Java','Sockets','Multithreading','Swing GUI'], features:['Real-time messaging','Multiple chat rooms','Private messaging','File transfer','User authentication'] },
  { title:'E-Commerce Websites', emoji:'🛒', desc:'Multiple custom e-commerce solutions built for various clients. Each store features a product catalog, shopping cart, secure checkout with payment gateway integration, order tracking, and a full admin panel.', tech:['PHP','Laravel','Vue.js','MySQL','Stripe'], features:['Product catalog','Shopping cart','Payment integration','Order tracking','Admin panel'] },
  { title:'Custom Mobile Applications', emoji:'📱', desc:'Cross-platform mobile applications developed with Flutter for both iOS and Android. These include apps for retail, services, and productivity, all featuring clean UI, offline support, and backend integration.', tech:['Flutter','Dart','Firebase','REST API'], features:['Cross-platform (iOS & Android)','Push notifications','Offline mode','Firebase integration','Clean Material UI'] },
  { title:'MyRein — Dialysis Patient Companion App', emoji:'🩺', desc:'A dedicated mobile companion for patients with kidney disease undergoing dialysis. The app centralizes every piece of information patients need to manage their condition day to day — dialysis session tracking, medication schedules, lab results history, dietary guidance, and appointment reminders — so patients and their care teams stay on the same page.', tech:['Flutter','Dart','Firebase','REST API'], features:['Dialysis session tracking','Medication reminders','Lab results history','Diet & fluid intake tracking','Appointment reminders','Secure patient data storage'] }
];

function openProjectModal(idx) {
  const p = projectDetails[idx];
  document.getElementById('modalTitle').textContent = p.emoji + ' ' + p.title;
  document.getElementById('modalBody').innerHTML = `
    <p style="color:var(--text-secondary);line-height:1.7;margin-bottom:1.5rem">${p.desc}</p>
    <div style="margin-bottom:1.2rem">
      <strong style="font-size:0.85rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em">Technologies</strong>
      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.5rem">
        ${p.tech.map(t=>`<span class="tech-tag" style="font-size:0.8rem;padding:0.25rem 0.7rem">${t}</span>`).join('')}
      </div>
    </div>
    <div>
      <strong style="font-size:0.85rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em">Key Features</strong>
      <ul style="margin-top:0.5rem;list-style:none">
        ${p.features.map(f=>`<li style="padding:0.3rem 0;color:var(--text-secondary);font-size:0.9rem">✅ ${f}</li>`).join('')}
      </ul>
    </div>
  `;
  document.getElementById('projectModal').classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => { if(e.target===overlay) overlay.classList.remove('open'); });
});

// ============================
// TOAST
// ============================
let toastTimer;
function showToast(type, msg) {
  const t = document.getElementById('toast');
  t.className = 'toast ' + type;
  t.querySelector('i').className = type==='success' ? 'fa fa-check-circle' : 'fa fa-exclamation-circle';
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ============================
// HELPER FUNCTIONS
// ============================
function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================
// INITIALIZATION
// ============================
document.getElementById('qDeadline').min = new Date().toISOString().split('T')[0];

applyLang('en');

console.log('🚀 Hanaa Dev Solutions loaded successfully!');
console.log('💾 MySQL Database integration enabled');