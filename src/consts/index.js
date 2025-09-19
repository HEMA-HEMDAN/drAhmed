import { MdOutlineEmail } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
// i have put all the text here because when transilate to arabic the text goes nuts so at the end we are gona change all the text to arabic
export const Gallerypics = [
  {
    id: 2,
    img: "/gallery/2.jpg",
    title: "Workout",
  },
  {
    id: 1,
    img: "/gallery/1.jpg",
    title: "Workout",
  },
  {
    id: 3,
    img: "/gallery/3.jpg",
    title: "Workout",
  },
  // {
  //   id: 4,
  //   img: "/gallery/99.JPG",
  //   title: "Workout",
  // },
  // {
  //   id: 5,
  //   img: "/gallery/33.jpg",
  //   title: "Workout",
  // },
  // {
  //   id: 6,
  //   img: "/gallery/88.JPG",
  //   title: "Workout",
  // },
];
const msg = "يلا بينا نتمرن";
export const HEADLINE = `Transform Your Body.
Unlock Your Potential.`;

export const SUBTITLE = `Experience personalised training programmes that empower you to build
strength, shed pounds, and maintain motivation. Let's embark on this
fitness journey together!`;

export const CTA_TEXT = "Start  Now";
// === Text Variables ===
export const TITLE = "Who is Dr. Ahmed gad?";
export const DESCRIPTION =
  "As a Clinical Pharmacist specialized in sports nutrition, biomechanics and Anatomy. Dr. Ahmed Gad combines scientific knowledge with practical experience to design effective programs. Over the years, he has guided 1000+ clients toward sustainable transformations, better health, and peak performance.";
export const BUTTON_TEXT = "See some transformations";
export const IMAGE_SRC = "/assets/ahmed.jpg"; // replace with actual trainer image
export const IMAGE_ALT = "Ahmed, Personal Trainer";
export const HEADING = "Client Transformations";
export const SUBHEADING = "";
export const CLOSE_BUTTON = "✕";
export const ALT_TEXT = "Workout image";
export const MODAL_ALT_TEXT = "Selected workout";
export const CONTACT_METHODS = [
  {
    key: "email",
    title: "EMAIL",
    description: "Contact us on via email for a free consultation.",
    href: "mailto:Momoahmed722003@gmail.com",
    linkText: "Momoahmed722003@gmail.com",
    Icon: MdOutlineEmail,
    aria: "Send email",
  },
  {
    key: "chat",
    title: "LIVE CHAT",
    description:
      "Start a live chat with us to get instant answers to your questions.",
    href: `https://wa.me/${+201550043269}?text=${msg}`,
    linkText: "Start new chat",
    Icon: BsChatDots,
    aria: "Start live chat",
  },
  {
    key: "phone",
    title: "PHONE",
    description: "Contact us directly for a free personal consultation.",
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
    href: "https://mo-wael.com",
    text: "© 2025 Mohamed Wael.",
  },
  {
    href: "https://ibrahim-hemdan.com",
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
      description: "Build strength , size and muscle building programmes.",
    },
  ],
};

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      "ana 3ayza ashkor Dr Ahmed Gad 3ala el motaba3a w 3ala el natiga el wslthala. deyman b fail eni akhss, bs howa deyman kan ma3aya b tashgee3o w wa2fto ma3aya 2drt awsl ll ana 3awza w lsa mkamla ma3ah. shokran ya Dr Ahmed  ❤❤",
    author: "Nada from Egypt",
    role: "Client",
    initial: "N",
  },
  {
    id: 2,
    quote:
      "والله ودي أشكر الدكتور أحمد على متابعتـه ووقفته معي بصراحة ما قصر دايم يشجعني ويعطيني دافع ومعاه قدرت أوصل لنتايج ما كنت أحلم فيها أنصح أي واحد وده يغير جسمه ويهتم بصحته يتابع معاه راح يلقى فرق كبير.",
    author: "Ziad from Saudi Arabia ",
    role: "Client",
    initial: "Z",
  },
  {
    id: 3,
    quote:
      "والله ي دكتور يرتني عرفتك من زمان  كنت أسكني فات ومكنتش متخيل إني أقدر أخس دهون وأزيدعضلات في نفس الوقت، بس الحمد لله ومع المتابعة معاك والتشجيع ديما وتسمعني ديما لل مشاكل ال بتواجهني تعبتك معايا اوي 😂بس الحمدلله قدرت أوصل للي أنا فيه دلوقتي. كمان الدكتور كان دايمًا بيراعي إنشغالي ووقتي، وده خلاني أقدر ألتزم وأتابع معاه باستمرار وال خلاني استمر انو كان ببعاملني ك صحبي مش مدربي بس . بجد مش مصدق النتيجة، شكرًا يا دوك والله ❤",
    author: "Yusef from Egypt",
    role: "Client",
    initial: "Y",
  },
];

const ARABIC_NAV_LINKS = [
  { label: "الرئيسية", href: "#" },
  { label: "حول المدرب", href: "#trainer" },
  { label: "البرامج", href: "#programs" },
  { label: "أراء العملاء", href: "#testimonials" },
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
  { label: "Claorie Calculator", href: "#calorie-calculator" },
  { label: "Contact", href: "#contact" },
];

const ARABIC_HEADLINE = `ابدأ دلوقتي عشان توصل لأفضل نسخه من نفسك`;

const ARABIC_SUBTITLE = `اختبر برامج التدريب الشخصية التي تمكنك من بناء
العضلات, وفقدان الوزن، والحفاظ على لياقتك البدنيه. دعنا نبدأ هذه
رحلة اللياقة البدنية معاً`;

const ARABIC_CTA_TEXT = "ابدأ  الأن";
const ARABIC_TITLE = "من هو د/أحمد جاد ؟";
const ARABIC_DESCRIPTION =
  "دكتور احمد جاد هو دكتور صيدلي  متخصصًا في التغذية الرياضية والميكانيكا الحيوية و تشريح العضلات يجمع بين المعرفة العلمية والخبرة العملية لتصميم برامج فعالة. على مدار سبع السنين، ساعد أكثر من ألف عميل نحو تحولات مستمره, وصحة أفضل، وأداء رياضي متميز";
const ARABIC_BUTTON_TEXT = "شاهد بعض التحولات";
const ARABIC_IMAGE_ALT = "أحمد، مدرب شخصي";
const ARABIC_HEADING = "نتائج بعض العملاء";
const ARABIC_SUBHEADING = "";
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
      description: "ابن القوة والحجم مع برامج بناء العضلات  .",
    },
  ],
};

const ARABIC_TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      "ana 3ayza ashkor Dr Ahmed Gad 3ala el motaba3a w 3ala el natiga el wslthala. deyman b fail eni akhss, bs howa deyman kan ma3aya b tashgee3o w wa2fto ma3aya 2drt awsl ll ana 3awza w lsa mkamla ma3ah. shokran ya Dr Ahmed  ❤❤",
    author: "ندا من مصر",
    role: "عميله",
    initial: "N",
  },

  {
    id: 2,
    quote:
      "والله ودي أشكر الدكتور أحمد على متابعتـه ووقفته معي بصراحة ما قصر دايم يشجعني ويعطيني دافع ومعاه قدرت أوصل لنتايج ما كنت أحلم فيها أنصح أي واحد وده يغير جسمه ويهتم بصحته يتابع معاه راح يلقى فرق كبير.",
    author: "ذياد من السعوديه",
    role: "عميل ",
    initial: "Z",
  },
  {
    id: 3,
    quote:
      "والله ي دكتور يرتني عرفتك من زمان  كنت أسكني فات ومكنتش متخيل إني أقدر أخس دهون وأزيدعضلات في نفس الوقت، بس الحمد لله ومع المتابعة معاك والتشجيع ديما وتسمعني ديما لل مشاكل ال بتواجهني تعبتك معايا اوي 😂بس الحمدلله قدرت أوصل للي أنا فيه دلوقتي. كمان الدكتور كان دايمًا بيراعي إنشغالي ووقتي، وده خلاني أقدر ألتزم وأتابع معاه باستمرار وال خلاني استمر انو كان ببعاملني ك صحبي مش مدربي بس . بجد مش مصدق النتيجة، شكرًا يا دوك والله ❤",
    author: "يوسف من مصر",
    role: "عميل",
    initial: "Y",
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
  { key: "elite", labelEn: "Outside Egypt", labelAr: "خارج مصر" },
];

export const PRICING_PLANS = {
  economy: {
    nameEn: "WEEKLY FOLLOW-UP",
    nameAr: "المتابعة الأسبوعية",
    subtitleEn: "Economy Plan - Inside Egypt Only",
    subtitleAr: "الخطة الاقتصادية - داخل مصر فقط",
    paymentMethodEn: "Payment via InstaPay or Wallet Number",
    paymentMethodAr: "الدفع عبر إنستاباي اوعن طريق رقم المحفظه",
    paymentDetailsEn: "+201550043269",
    paymentDetailsAr: "+201550043269",
    prices: {
      "1month": {
        price: "799",
        currency: "EGP",
        period: "/mo",
        originalPrice: "1600",
      },
      "3months": {
        price: "999",
        currency: "EGP",
        period: "/3mo",
        originalPrice: "2000",
        bonusEn: "",
        bonusAr: "",
      },
      "6months": {
        price: "1999",
        currency: "EGP",
        period: "/6mo",
        originalPrice: "4000",
        bonusEn: "",
        bonusAr: "",
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
      "Customized nutrition plan for your goal",
      "Workout program with video explanations",
      "Diet changes every 10 days",
      "Review your performance in the workout",
      "Communication once per week",
    ],
    featuresAr: [
      "نظام غذائي مخصص لهدفك",
      "برنامج تدريبي مشروح صوت وصورة",
      "تغيير الدايت كل 10 أيام",
      "مراجعه آداءك في التمرين ",
      "التواصل والرد مرة أسبوعياً",
    ],
    buttonTextEn: "Get started",
    buttonTextAr: "ابدأ الآن",
  },
  premium: {
    nameEn: "DAILY FOLLOW-UP",
    nameAr: "المتابعة اليومية",
    subtitleEn: "Premium Plan - Inside Egypt Only",
    subtitleAr: "الخطة المميزة - داخل مصر فقط",
    paymentMethodEn: "Payment via InstaPay or Wallet Number",
    paymentMethodAr: "الدفع عبر إنستاباي اوعن طريق رقم المحفظه",
    paymentDetailsEn: "+201550043269",
    paymentDetailsAr: "+201550043269",
    prices: {
      "1month": {
        price: "999",
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
        price: "4499",
        currency: "EGP",
        period: "/12mo",
        originalPrice: "10000",
        bonusEn: "Best package",
        bonusAr: "أفضل باقة",
      },
    },
    featuresEn: [
      "Daily follow-up within 24 hours",
      "Customized nutrition plan for all goals",
      "Diet adjustments  every 10 days",
      "Customized training program tailored to your goal",
      "Video workout program with explanations",
      "Exercise form review & performance correction",
      "Tailored supplement plan",
      // "Mental health support & motivation",
      "Weekly video/audio calls",
    ],
    featuresAr: [
      "متابعة  يوميه علي مدار 24 ساعة",
      "  نظام غذائي مخصص لهدفك من الأكل اللي انت بتحبه  ",
      "تعديل النظام الغذائي   كل 10 أيام",
      "برنامج تدريبي مخصص حسب هدفك",
      "شرح لكل التمارين   صوت وصورة",
      " مراجعة آداءك في التمرين وتصحيح الأخطاء",
      "خطة مكملات غذائية مخصصة حسب احتياجك",
      // "متابعة الحالة النفسية والتشجيع المستمر",

      "مكالمة فيديو أو صوتية أسبوعياً",
    ],
    buttonTextEn: "Get started",
    buttonTextAr: "ابدأ الآن",
  },
  elite: {
    nameEn: "Outside Egypt Plan",
    nameAr: "خارج مصر",
    subtitleEn: "Elite Plan - Outside Egypt Only",
    subtitleAr: " خارج مصر -  متابعه مميزه وخاصه",
    paymentMethodEn: "Payment via PayPal",
    paymentMethodAr: "الدفع عبر باي بال",
    paymentDetailsEn: "momoahmed722003@gmail.com",
    paymentDetailsAr: "momoahmed722003@gmail.com",
    prices: {
      "1month": {
        price: "70",
        currency: "USD",
        period: "/mo",
        originalPrice: "150",
      },
      "3months": {
        price: "149",
        currency: "USD",
        period: "/3mo",
        originalPrice: "300",
        bonusEn: "1 month free",
        bonusAr: "+1 شهر مجاناً",
      },
      "6months": {
        price: "249",
        currency: "USD",
        period: "/6mo",
        originalPrice: "500",
        bonusEn: "1 month free",
        bonusAr: "+1 شهر مجاناً",
      },
      "1year": {
        price: "449",
        currency: "USD",
        period: "/12mo",
        originalPrice: "1000",
        bonusEn: "Best package",
        bonusAr: "أفضل باقة",
      },
    },
    featuresEn: [
      "Daily follow-up within 24 hours",
      "Customized nutrition plan for all goals",
      "Diet adjustments  every 10 days",
      "Customized training program tailored to your goal",
      "Video workout program with explanations",
      "Exercise form review & performance correction",
      "Tailored supplement plan",
      // "Mental health support & motivation",
      "Weekly video/audio calls",
    ],
    featuresAr: [
      "متابعة  يوميه علي مدار 24 ساعة",
      "  نظام غذائي مخصص لهدفك من الأكل اللي انت بتحبه  ",
      "تعديل النظام الغذائي   كل 10 أيام",
      "برنامج تدريبي مخصص حسب هدفك",
      "شرح لكل التمارين   صوت وصورة",
      " مراجعة آداءك في التمرين وتصحيح الأخطاء",
      "خطة مكملات غذائية مخصصة حسب احتياجك",
      // "متابعة الحالة النفسية والتشجيع المستمر",

      "مكالمة فيديو أو صوتية أسبوعياً",
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
export const CALCULATOR_TEXT = {
  en: {
    title: "Calorie Calculator",
    sex: "Sex",
    male: "Male",
    female: "Female",
    age: "Age (years)",
    weight: "Weight (kg)",
    height: "Height (cm)",
    activity: "Activity level",
    activityOptions: [
      { value: "sedentary", label: "Sedentary (little or no exercise)" },
      { value: "light", label: "Light (1-3 days/week)" },
      { value: "moderate", label: "Moderate (3-5 days/week)" },
      { value: "active", label: "Active (6-7 days/week)" },
      { value: "very_active", label: "Very active (physical job or 2x/day)" },
    ],
    goal: "Goal",
    goalOptions: [
      { value: "maintain", label: "Maintain weight" },
      { value: "lose", label: "Lose ~0.5 kg/week" },
      { value: "gain", label: "Gain ~0.5 kg/week" },
      { value: "extreme-lose", label: "Aggressive loss (~1 kg/week)" },
      { value: "extreme-gain", label: "Aggressive gain (~1 kg/week)" },
    ],
    result: "Your daily calorie needs are approximately",
    calories: "calories.",
    enterDetails: "Enter your details to see your daily calories.",
  },
  ar: {
    title: "حاسبة السعرات الحرارية",
    sex: "الجنس",
    male: "ذكر",
    female: "أنثى",
    age: "العمر (بالسنوات)",
    weight: "الوزن (كجم)",
    height: "الطول (سم)",
    activity: "مستوى النشاط",
    activityOptions: [
      { value: "sedentary", label: "خامل (بدون أو قليل من التمارين)" },
      { value: "light", label: "نشاط خفيف (1-3 أيام/أسبوع)" },
      { value: "moderate", label: "نشاط متوسط (3-5 أيام/أسبوع)" },
      { value: "active", label: "نشاط عالي (6-7 أيام/أسبوع)" },
      { value: "very_active", label: "نشاط عالي جداً (عمل بدني أو مرتين/يوم)" },
    ],
    goal: "الهدف",
    goalOptions: [
      { value: "maintain", label: "الحفاظ على الوزن" },
      { value: "lose", label: "خسارة ~0.5 كجم/أسبوع" },
      { value: "gain", label: "زيادة ~0.5 كجم/أسبوع" },
      { value: "extreme-lose", label: "خسارة سريعة (~1 كجم/أسبوع)" },
      { value: "extreme-gain", label: "زيادة سريعة (~1 كجم/أسبوع)" },
    ],
    result: "احتياجك اليومي من السعرات تقريباً",
    calories: "سعرة حرارية.",
    enterDetails: "أدخل بياناتك لمعرفة احتياجك اليومي من السعرات.",
  },
};

const COUNTER_ITEMS_EN = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Satisfied Clients" },
  // { value: 50, suffix: "+", label: "Completed Programs" },
  { value: 99, suffix: "%", label: "Client Satisfaction Rate" },
];

const COUNTER_ITEMS_AR = [
  { value: 7, suffix: "+", label: "سنوات الخبرة" },
  { value: 1000, suffix: "+", label: "عملاء" },
  // { value: 50, suffix: "+", label: "برامج مكتملة" },
  { value: 99, suffix: "%", label: "معدل تقيمات العملاء" },
];

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
    calculator: CALCULATOR_TEXT.en,
    counterItems: COUNTER_ITEMS_EN,
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
    calculator: CALCULATOR_TEXT.ar,
    counterItems: COUNTER_ITEMS_AR,
  },
};
