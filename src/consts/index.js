import { MdOutlineEmail } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
// i have put all the text here because when transilate to arabic the text goes nuts so at the end we are gona change all the text to arabic
export const Gallerypics = [
  {
    id: 1,
    img: "/gallery/1.jpg",
    title: "Workout",
  },
  {
    id: 2,
    img: "/gallery/55.jpg",
    title: "Workout",
  },
  {
    id: 3,
    img: "/gallery/44.jpg",
    title: "Workout",
  },
  {
    id: 4,
    img: "/gallery/99.JPG",
    title: "Workout",
  },
  {
    id: 5,
    img: "/gallery/33.jpg",
    title: "Workout",
  },
  {
    id: 6,
    img: "/gallery/88.JPG",
    title: "Workout",
  },
];
const msg = "يلا بينا نتمرن";
export const HEADLINE = `Transform Your Body.
Unlock Your Potential.`;

export const SUBTITLE = `Experience personalised training programmes that empower you to build
strength, shed pounds, and maintain motivation. Let's embark on this
fitness journey together!`;

export const CTA_TEXT = "Start Training Today";
// === Text Variables ===
export const TITLE = "Meet Your Trainer";
export const DESCRIPTION =
  "I'm Ahmed, a certified personal trainer with over seven years of experience. My mission is to empower you with effective workouts, nutritional guidance, and unwavering motivation.";
export const BUTTON_TEXT = "See Our Workouts";
export const IMAGE_SRC = "/assets/ahmed.jpg"; // replace with actual trainer image
export const IMAGE_ALT = "Ahmed, Personal Trainer";
export const HEADING = "WORKOUT GALLERY";
export const SUBHEADING = "Explore the dedication and results of our clients.";
export const CLOSE_BUTTON = "✕";
export const ALT_TEXT = "Workout image";
export const MODAL_ALT_TEXT = "Selected workout";
export const CONTACT_METHODS = [
  {
    key: "email",
    title: "EMAIL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: "mailto:Momoahmed722003@gmail.com",
    linkText: "Momoahmed722003@gmail.com",
    Icon: MdOutlineEmail,
    aria: "Send email",
  },
  {
    key: "chat",
    title: "LIVE CHAT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: `https://wa.me/${+201550043269}?text=${msg}`,
    linkText: "Start new chat",
    Icon: BsChatDots,
    aria: "Start live chat",
  },
  {
    key: "phone",
    title: "PHONE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: "tel:+201550043269",
    linkText: "+20 1550043269",
    Icon: FiPhone,
    aria: "Call phone number",
  },
];
export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dr_ahmed_gad_coaching?igsh=MWxjbXp4YTd2enlrcQ%3D%3D&utm_source=qr",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@dr.ahmedgad.coaching?_t=ZS-8zhq3XGLf5s&_r=1",
    Icon: FaTiktok,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ahmedgad118",
    Icon: FaYoutube,
  },
];
export const links = [
  {
    href: "https://mohamedwael.vercel.app/",
    text: "© 2025 Mohamed Wael.",
  },
  {
    href: "https://hema-cyan.vercel.app/",
    text: "© 2025 HEMA.",
  },
];
export const PROGRAMS_SECTION = {
  heading: "PROGRAMS TAILORED FOR YOU",
  items: [
    {
      icon: "⚡",
      title: "DISCOVER THE PERFECT TRAINING PLAN THAT FITS YOUR LIFESTYLE.",
      description:
        "Our diverse programs cater to all fitness levels and goals.",
    },
    {
      icon: "🏃",
      title:
        "WEIGHT LOSS COACHING – BURN FAT AND BOOST ENERGY WITH CUSTOM PLANS.",
      description:
        "Achieve your weight loss goals with tailored workouts and nutrition advice.",
    },
    {
      icon: "🧩",
      title: "MUSCLE BUILDING – STRUCTURED STRENGTH TRAINING FOR LEAN MUSCLE.",
      description:
        "Build strength and size with our expert-led muscle building programmes.",
    },
  ],
};

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      "I NEVER THOUGHT I COULD ACHIEVE MY FITNESS GOALS UNTIL I STARTED TRAINING WITH AHMED. HIS PERSONALISED APPROACH AND CONSTANT MOTIVATION MADE ALL THE DIFFERENCE IN MY JOURNEY.",
    author: "Hema Hemdan",
    role: "Client, Fitness Enthusiast",
    initial: "H",
  },
  {
    id: 2,
    quote:
      "AHMED'S EXPERTISE AND DEDICATION HELPED ME TRANSFORM MY BODY COMPLETELY. THE RESULTS SPEAK FOR THEMSELVES - I'VE NEVER FELT STRONGER OR MORE CONFIDENT.",
    author: "Sarah Johnson",
    role: "Client, Weight Loss Success",
    initial: "S",
  },
  {
    id: 3,
    quote:
      "TRAINING WITH AHMED WAS A GAME-CHANGER. HIS PERSONALIZED PROGRAMS AND UNWAVERING SUPPORT MADE MY FITNESS JOURNEY NOT JUST SUCCESSFUL, BUT ENJOYABLE.",
    author: "Mike Chen",
    role: "Client, Muscle Building",
    initial: "M",
  },
];

const ARABIC_NAV_LINKS = [
  { label: "الرئيسية", href: "#" },
  { label: "حول المدرب", href: "#trainer" },
  { label: "البرامج", href: "#programs" },
  { label: "الشهادات", href: "#testimonials" },
  { label: "الاسعار", href: "#pricing" },
  { label: "التمارين", href: "#workouts" },
  { label: "حساب السعرات", href: "#calorie-calculator" },
  { label: "اتصل بنا", href: "#contact" },
];
export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#trainer" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Workouts", href: "#workouts" },
  { label: "claorie Calculator", href: "#calorie-calculator" },
  { label: "Contact", href: "#contact" },
];

const ARABIC_HEADLINE = `حول جسدك.
أطلق إمكاناتك.`;

const ARABIC_SUBTITLE = `اختبر برامج التدريب الشخصية التي تمكنك من بناء
القوة، وفقدان الوزن، والحفاظ على الدافعية. دعنا نبدأ هذه
رحلة اللياقة البدنية معاً!`;

const ARABIC_CTA_TEXT = "ابدأ التدريب اليوم";
const ARABIC_TITLE = "تعرف على مدربك";
const ARABIC_DESCRIPTION =
  "أنا أحمد، مدرب شخصي معتمد مع أكثر من سبع سنوات من الخبرة. مهمتي هي تمكينك من خلال التمارين الفعالة والإرشاد الغذائي والدافعية الثابتة.";
const ARABIC_BUTTON_TEXT = "شاهد تماريننا";
const ARABIC_IMAGE_ALT = "أحمد، مدرب شخصي";
const ARABIC_HEADING = "معرض التمارين";
const ARABIC_SUBHEADING = "استكشف التفاني والنتائج لعملائنا.";
const ARABIC_ALT_TEXT = "صورة تمرين";
const ARABIC_MODAL_ALT_TEXT = "التمرين المحدد";

const ARABIC_CONTACT_METHODS = [
  {
    key: "email",
    title: "البريد الإلكتروني",
    description: "تواصل معنا عبر البريد الإلكتروني للحصول على استشارة مجانية.",
    href: "mailto:Momoahmed722003@gmail.com",
    linkText: "Momoahmed722003@gmail.com",
    Icon: MdOutlineEmail,
    aria: "إرسال بريد إلكتروني",
  },
  {
    key: "chat",
    title: "الدردشة المباشرة",
    description: "ابدأ محادثة مباشرة معنا للحصول على إجابات فورية لأسئلتك.",
    href: `https://wa.me/${+201550043269}?text=${msg}`,
    linkText: "ابدأ محادثة جديدة",
    Icon: BsChatDots,
    aria: "بدء دردشة مباشرة",
  },
  {
    key: "phone",
    title: "الهاتف",
    description: "اتصل بنا مباشرة للحصول على استشارة شخصية مجانية.",
    href: "tel:+201550043269",
    linkText: "+20 1550043269",
    Icon: FiPhone,
    aria: "اتصال برقم الهاتف",
  },
];
const ARABIC_PROGRAMS_SECTION = {
  heading: "برامج مصممة خصيصاً لك",
  items: [
    {
      icon: "⚡",
      title: "اكتشف خطة التدريب المثالية التي تناسب نمط حياتك.",
      description:
        "برامجنا المتنوعة تلبي جميع مستويات اللياقة البدنية والأهداف.",
    },
    {
      icon: "🏃",
      title: "تدريب فقدان الوزن – احرق الدهون وعزز الطاقة بخطط مخصصة.",
      description:
        "احقق أهداف فقدان الوزن مع التمارين المخصصة والنصائح الغذائية.",
    },
    {
      icon: "🧩",
      title: "بناء العضلات – تدريب قوة منظم للعضلات النحيفة.",
      description: "ابن القوة والحجم مع برامج بناء العضلات بقيادة خبراء.",
    },
  ],
};

const ARABIC_TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      "لم أكن أعتقد أنني أستطيع تحقيق أهدافي في اللياقة البدنية حتى بدأت التدريب مع أحمد. نهجه الشخصي ودافعيته المستمرة أحدثا فرقاً كبيراً في رحلتي.",
    author: "هيما حمدان",
    role: "عميل، محب للرياضة",
    initial: "ه",
  },
  {
    id: 2,
    quote:
      "خبرة أحمد وتفانيه ساعداني على تحويل جسدي بالكامل. النتائج تتحدث عن نفسها - لم أشعر قط بقوة وثقة أكبر.",
    author: "سارة جونسون",
    role: "عميل، نجح في فقدان الوزن",
    initial: "س",
  },
  {
    id: 3,
    quote:
      "التدريب مع أحمد كان نقطة تحول. برامجه الشخصية ودعمه الثابت جعلا رحلتي في اللياقة البدنية ناجحة وممتعة.",
    author: "مايك تشين",
    role: "عميل، بناء العضلات",
    initial: "م",
  },
];

// Pricing Data
export const BILLING_OPTIONS = [
  { key: "1month", labelEn: "1 Month", labelAr: "شهر واحد" },
  { key: "3months", labelEn: "3 Months", labelAr: "3 أشهر" },
  { key: "6months", labelEn: "6 Months", labelAr: "6 أشهر" },
  { key: "1year", labelEn: "1 Year", labelAr: "سنة واحدة" },
];

export const PLAN_OPTIONS = [
  { key: "economy", labelEn: "Economy", labelAr: "اقتصادية" },
  { key: "premium", labelEn: "Premium", labelAr: "مميزة" },
  { key: "elite", labelEn: "Elite", labelAr: "نخبوية" },
];

export const PRICING_PLANS = {
  economy: {
    nameEn: "WEEKLY FOLLOW-UP",
    nameAr: "المتابعة الأسبوعية",
    subtitleEn: "Economy Plan - Inside Egypt Only",
    subtitleAr: "الخطة الاقتصادية - داخل مصر فقط",
    prices: {
      "1month": {
        price: "800",
        currency: "EGP",
        period: "/mo",
        originalPrice: "1600",
      },
      "3months": {
        price: "999",
        currency: "EGP",
        period: "/3mo",
        originalPrice: "2000",
        bonusEn: "1 month free",
        bonusAr: "+1 شهر مجاناً",
      },
      "6months": {
        price: "1999",
        currency: "EGP",
        period: "/6mo",
        originalPrice: "4000",
        bonusEn: "1 month free",
        bonusAr: "+1 شهر مجاناً",
      },
      "1year": {
        price: "3999",
        currency: "EGP",
        period: "/12mo",
        originalPrice: "8000",
        bonusEn: "Best package",
        bonusAr: "أفضل باقة",
      },
    },
    featuresEn: [
      "Custom nutrition plan for your goal",
      "Workout program with video explanations",
      "Diet changes every 10 days",
      "Weekly performance review",
      "Communication once per week",
    ],
    featuresAr: [
      "نظام غذائي مخصص لهدفك",
      "برنامج تدريبي مشروح صوت وصورة",
      "تغيير الدايت كل 10 أيام",
      "مراجعة أسبوعية للأداء",
      "التواصل والرد مرة أسبوعياً",
    ],
    buttonTextEn: "Get started",
    buttonTextAr: "ابدأ الآن",
  },
  premium: {
    nameEn: "DAILY FOLLOW-UP",
    nameAr: "المتابعة اليومية",
    subtitleEn: "Premium Plan - Inside & Outside Egypt",
    subtitleAr: "الخطة المميزة - داخل وخارج مصر",
    prices: {
      "1month": {
        price: "1000",
        currency: "EGP",
        period: "/mo",
        originalPrice: "2000",
      },
      "3months": {
        price: "1499",
        currency: "EGP",
        period: "/3mo",
        originalPrice: "3000",
        bonusEn: "1 month free",
        bonusAr: "+1 شهر مجاناً",
      },
      "6months": {
        price: "2499",
        currency: "EGP",
        period: "/6mo",
        originalPrice: "5000",
        bonusEn: "1 month free",
        bonusAr: "+1 شهر مجاناً",
      },
      "1year": {
        price: "3999",
        currency: "EGP",
        period: "/12mo",
        originalPrice: "8000",
        bonusEn: "Best package",
        bonusAr: "أفضل باقة",
      },
    },
    featuresEn: [
      "24/7 follow-up with 24-hour response",
      "Custom nutrition plan for all goals",
      "Mental health support & motivation",
      "Video workout program with explanations",
      "Personal training videos by Ahmed",
      "Video form check for all exercises",
      "Diet changes every 10 days",
      "Weekly video/audio calls",
    ],
    featuresAr: [
      "متابعة طول الوقت + الرد خلال 24 ساعة",
      "نظام غذائي مخصص لهدفك (خسارة دهون، زيادة عضلات، Recomp)",
      "متابعة الحالة النفسية والتشجيع المستمر",
      "برنامج تدريبي مشروح صوت وصورة",
      "أنا اللي بتمرن بنفسي في الفيديوهات",
      "متاح تصور نفسك لأي تمرين ومراجعة الأداء",
      "تغيير الدايت كل 10 أيام",
      "مكالمة فيديو أو صوتية أسبوعياً",
    ],
    buttonTextEn: "Get started",
    buttonTextAr: "ابدأ الآن",
  },
  elite: {
    nameEn: "ELITE PLAN",
    nameAr: "الخطة النخبوية",
    subtitleEn: "Elite Plan - Premium Features",
    subtitleAr: "الخطة النخبوية - مميزات إضافية",
    prices: {
      "1month": {
        price: "1500",
        currency: "EGP",
        period: "/mo",
        originalPrice: "3000",
      },
      "3months": {
        price: "1999",
        currency: "EGP",
        period: "/3mo",
        originalPrice: "4000",
        bonusEn: "1 month free",
        bonusAr: "+1 شهر مجاناً",
      },
      "6months": {
        price: "2999",
        currency: "EGP",
        period: "/6mo",
        originalPrice: "6000",
        bonusEn: "1 month free",
        bonusAr: "+1 شهر مجاناً",
      },
      "1year": {
        price: "4999",
        currency: "EGP",
        period: "/12mo",
        originalPrice: "10000",
        bonusEn: "Best package",
        bonusAr: "أفضل باقة",
      },
    },
    featuresEn: [
      "Everything in Premium plan",
      "1:1 personal coaching sessions",
      "Custom meal plans with recipes",
      "24/7 priority support",
      "Advanced progress analytics",
      "Equipment recommendations",
      "Nutritional supplements guidance",
      "Monthly body composition analysis",
    ],
    featuresAr: [
      "كل ما في الخطة المميزة",
      "جلسات تدريب فردية شخصية",
      "خطط وجبات مخصصة مع الوصفات",
      "دعم أولوية على مدار الساعة",
      "تحليلات متقدمة للتقدم",
      "توصيات المعدات الرياضية",
      "إرشاد المكملات الغذائية",
      "تحليل تكوين الجسم شهرياً",
    ],
    buttonTextEn: "Get started",
    buttonTextAr: "ابدأ الآن",
  },
};

export const PRICING_SECTION = {
  titleEn: "Pricing plans",
  titleAr: "خطط الأسعار",
  headingEn: "INTRODUCE PRICING PLANS",
  headingAr: "خطط الأسعار المقدمة",
  subtitleEn:
    "Simple, transparent pricing that grows with you. Try any plan free for 30 days.",
  subtitleAr: "أسعار بسيطة وشفافة تنمو معك. جرب أي خطة مجاناً لمدة 30 يوماً.",
  orTextEn: "or",
  orTextAr: "أو",
  yearlyTextEn: "yearly",
  yearlyTextAr: "سنوياً",
};

// Language Text Objects - References existing constants
export const TEXTS = {
  en: {
    galleryPics: Gallerypics,
    navLinks: NAV_LINKS,
    headline: HEADLINE,
    subtitle: SUBTITLE,
    ctaText: CTA_TEXT,
    title: TITLE,
    description: DESCRIPTION,
    buttonText: BUTTON_TEXT,
    imageAlt: IMAGE_ALT,
    heading: HEADING,
    subheading: SUBHEADING,
    closeButton: CLOSE_BUTTON,
    altText: ALT_TEXT,
    modalAltText: MODAL_ALT_TEXT,
    contactMethods: CONTACT_METHODS,
    socialLinks: SOCIAL_LINKS,
    links: links,
    programsSection: PROGRAMS_SECTION,
    testimonialsData: TESTIMONIALS_DATA,
    billingOptions: BILLING_OPTIONS,
    planOptions: PLAN_OPTIONS,
    pricingPlans: PRICING_PLANS,
    pricingSection: PRICING_SECTION,
  },
  ar: {
    galleryPics: Gallerypics,
    navLinks: ARABIC_NAV_LINKS,
    headline: ARABIC_HEADLINE,
    subtitle: ARABIC_SUBTITLE,
    ctaText: ARABIC_CTA_TEXT,
    title: ARABIC_TITLE,
    description: ARABIC_DESCRIPTION,
    buttonText: ARABIC_BUTTON_TEXT,
    imageAlt: ARABIC_IMAGE_ALT,
    heading: ARABIC_HEADING,
    subheading: ARABIC_SUBHEADING,
    closeButton: CLOSE_BUTTON,
    altText: ARABIC_ALT_TEXT,
    modalAltText: ARABIC_MODAL_ALT_TEXT,
    contactMethods: ARABIC_CONTACT_METHODS,
    socialLinks: SOCIAL_LINKS,
    links: links,
    programsSection: ARABIC_PROGRAMS_SECTION,
    testimonialsData: ARABIC_TESTIMONIALS_DATA,
    billingOptions: BILLING_OPTIONS,
    planOptions: PLAN_OPTIONS,
    pricingPlans: PRICING_PLANS,
    pricingSection: PRICING_SECTION,
  },
};
