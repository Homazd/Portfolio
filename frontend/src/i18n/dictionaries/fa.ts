import type { Dictionary } from "./en";

const faDigits = (value: number) => value.toLocaleString("fa-IR", { useGrouping: false });

export const fa: Dictionary = {
  nav: {
    about: "درباره من",
    experience: "سوابق کاری",
    projects: "پروژه‌ها",
    skills: "مهارت‌ها",
    contact: "تماس با من",
    openMenu: "باز کردن منو",
    closeMenu: "بستن منو",
    toggleTheme: "تغییر بین حالت روشن و تیره",
    switchLanguage: "Read this page in English",
  },
  hero: {
    seeProjects: "دیدن پروژه‌ها",
    downloadResume: "دانلود رزومه",
  },
  about: {
    title: "درباره من",
    education: "تحصیلات",
    certifications: "گواهی‌نامه‌ها",
  },
  experience: {
    title: "سوابق کاری",
    intro: "جاهایی که کار کرده‌ام و کارهایی که آن‌جا تحویل داده‌ام.",
    technologies: "فناوری‌ها",
  },
  projects: {
    title: "پروژه‌های منتخب",
    intro: "محصولات و سیستم‌هایی که طراحی کرده‌ام، ساخته‌ام و تحویل داده‌ام.",
    readCaseStudy: "خواندن جزئیات پروژه",
    more: "پروژه‌های دیگر",
    all: "همه‌ی پروژه‌ها",
    visitLive: "دیدن سایت",
    viewSource: "دیدن کد منبع",
    results: "نتایج",
    myRole: "نقش من",
    builtWith: "ساخته‌شده با",
    next: "پروژه‌ی بعدی",
    notFoundTitle: "پروژه پیدا نشد",
  },
  skills: {
    title: "مهارت‌ها",
    intro: "ابزارها و روش‌هایی که هر هفته با آن‌ها کار می‌کنم.",
  },
  contact: {
    title: "تماس با من",
    intro: "درباره‌ی پروژه‌تان یا موقعیت شغلی‌ای که برایش نیرو می‌خواهید بنویسید؛ از طریق ایمیل جواب می‌دهم.",
    email: "ایمیل",
    phone: "تلفن",
    basedIn: "محل زندگی",
  },
  form: {
    name: "نام شما",
    email: "ایمیل شما",
    subject: "موضوع",
    message: "پیام",
    optional: "(اختیاری)",
    namePlaceholder: "سارا محمدی",
    emailPlaceholder: "sara@company.com",
    subjectPlaceholder: "وب‌سایت جدید برای کلینیک ما",
    messagePlaceholder: "روی چه چیزی کار می‌کنید و چطور می‌توانم کمک کنم؟",
    send: "ارسال پیام",
    sending: "در حال ارسال…",
    sent: "پیام ارسال شد. به‌زودی به ایمیل‌تان جواب می‌دهم.",
    checkForm: "پیش از ارسال، این موارد را اصلاح کنید:",
    tooMany: "تعداد پیام‌ها از این اتصال زیاد است. یک دقیقه صبر کنید و دوباره بفرستید.",
    unavailable: "الان امکان ارسال پیام نیست. لطفاً مستقیم ایمیل بزنید.",
    errors: {
      name: "نامی بین ۲ تا ۱۰۰ حرف وارد کنید.",
      email: "یک آدرس ایمیل معتبر وارد کنید.",
      subject: "موضوع باید کمتر از ۱۵۰ حرف باشد.",
      message: "پیامی بین ۱۰ تا ۵٬۰۰۰ حرف بنویسید.",
    },
  },
  footer: {
    rights: (year: number, name: string) => `© ${faDigits(year)} ${name}. همه‌ی حقوق محفوظ است.`,
    backToTop: "بازگشت به بالا",
  },
  notFound: {
    title: "صفحه‌ای با این آدرس وجود ندارد",
    body: "ممکن است آدرس اشتباه تایپ شده باشد یا صفحه جابه‌جا شده باشد.",
    home: "رفتن به صفحه‌ی اصلی",
  },
  error: {
    title: "این صفحه بارگذاری نشد",
    body: "محتوا همین حالا بارگذاری نشد. کمی بعد دوباره امتحان کنید یا مستقیم ایمیل بزنید.",
    retry: "تلاش دوباره",
  },
  common: {
    listSeparator: "، ",
  },
};
