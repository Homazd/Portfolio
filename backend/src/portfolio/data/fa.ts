import type { Portfolio } from '../portfolio.types.js';

/**
 * Persian content — keep it in sync with en.ts.
 * Slugs, URLs and technology names stay the same in both languages.
 */
export const fa: Portfolio = {
  profile: {
    name: 'هما زهدی',
    title: 'توسعه‌دهنده فول‌استک',
    tagline: 'وب‌اپلیکیشن کامل، از پایگاه داده تا مرورگر.',
    summary:
      'وب‌اپلیکیشن‌ها را از ابتدا تا انتها می‌سازم؛ از فرانت‌اند با React و Next.js تا بک‌اند با Node.js و NestJS، از جمله پلتفرم‌هایی که ده‌ها هزار نفر از آن‌ها استفاده می‌کنند.',
    location: 'تهران، ایران',
    email: 'hzhzohdi531@gmail.com',
    phone: '+98 910 160 3927',
    availability: 'آماده‌ی همکاری‌های جدید',
    resumeUrl: '/resume.pdf',
    socials: [
      { label: 'گیت‌هاب', url: 'https://github.com/Homazd', icon: 'github' },
      { label: 'لینکدین', url: 'https://linkedin.com/in/homa-zohdi', icon: 'linkedin' },
      { label: 'ایمیل', url: 'mailto:hzhzohdi531@gmail.com', icon: 'mail' },
    ],
    about: [
      'بیش از ۴ سال است که وب‌اپلیکیشن‌های کامل می‌سازم و دوست دارم مسئولیت کل مسیر تحویل را به عهده بگیرم: طراحی پایگاه داده و API با NestJS، Prisma و PostgreSQL، فرانت‌اندهای سریع با رندر سمت سرور در Next.js و استقرار مبتنی بر Docker.',
      'در کار روزانه در تیم‌های چابک (Agile) کنار طراحی، بک‌اند و محصول کار می‌کنم و به‌جای تحویل لایه‌های جداگانه، قابلیت‌های کامل تحویل می‌دهم. برایم معماری رابط کاربری قابل‌استفاده‌ی مجدد، دسترس‌پذیری (WCAG 2.1) و کارایی قابل‌اندازه‌گیری در Core Web Vitals اهمیت دارد.',
      'یک پروژه را هم کاملاً به‌تنهایی برای یک کارفرمای خصوصی انجام داده‌ام؛ از جمع‌آوری نیازمندی‌ها و انتخاب معماری تا طراحی، توسعه و استقرار. پیش از نرم‌افزار، مهندسی برق خوانده‌ام و این پیش‌زمینه هنوز روی نگاهم به سیستم‌ها اثر می‌گذارد.',
    ],
    highlights: [
      { label: 'سال تجربه در ساخت وب‌اپلیکیشن', value: '۴+' },
      { label: 'بارگذاری سریع‌تر در پلتفرم ویدیو', value: '۴۰٪' },
      { label: 'کاربر هم‌زمان پشتیبانی‌شده', value: '۵۰ هزار' },
      { label: 'پرونده‌ی بیمار مدیریت‌شده', value: '۱۰ هزار' },
    ],
  },

  experience: [
    {
      company: 'WebCasting',
      role: 'مهندس نرم‌افزار',
      location: 'تهران، حضوری',
      start: 'مارس ۲۰۲۴',
      end: 'اکنون',
      summary: 'کار فول‌استک روی falaktv.live، یک پلتفرم ویدیو بر اساس تقاضا (VOD).',
      achievements: [
        'فرانت‌اند را با Next.js 15 و TypeScript و رندر SSR/ISR ساختم و APIهای REST سرویس‌های بک‌اند Node.js/NestJS را یکپارچه کردم؛ نتیجه، تجربه‌ای مقیاس‌پذیر و سازگار با سئو بود.',
        'یک کتابخانه‌ی کامپوننت قابل‌استفاده‌ی مجدد طراحی و نگهداری کردم و با بهینه‌سازی استراتژی‌های رندر SSR/ISR، شاخص LCP را ۴۰٪ کاهش دادم.',
        'کد هم‌تیمی‌ها را بازبینی کردم و به شکل‌گیری روش‌های درست و الگوهای یکدست در کل کدبیس کمک کردم.',
        'همراه تیم‌های طراحی، بک‌اند و محصول، قابلیت‌های واکنش‌گرا و دسترس‌پذیر (WCAG 2.1) را از ابتدا تا انتها تحویل دادم.',
      ],
      stack: ['Next.js 15', 'TypeScript', 'NestJS', 'Node.js', 'SSR / ISR'],
    },
    {
      company: 'Elegant Hoopoe',
      role: 'توسعه‌دهنده فرانت‌اند',
      location: 'دبی، دورکاری',
      start: 'مارس ۲۰۲۳',
      end: 'فوریه ۲۰۲۴',
      summary: 'یک وب‌اپلیکیشن سلامت و پنل مدیریت مشتریان (CRM) پشت آن.',
      achievements: [
        'یک وب‌اپلیکیشن سلامت با برنامه‌های سلامت شخصی‌سازی‌شده و رزرو آنی مشاوره ساختم که ماندگاری کاربران را ۲۵٪ افزایش داد.',
        'یک پنل مدیریت CRM ساختم که اپراتورها با آن بیش از ۱۰ هزار پرونده‌ی بیمار را به‌راحتی مدیریت می‌کنند.',
        'در جلسه‌های اسکرام و بازبینی کد شرکت داشتم و به انتشارهای پایدار و بدون باگ بحرانی کمک کردم.',
      ],
      stack: ['Next.js', 'React Query', 'Tailwind CSS', 'Material UI', 'Storybook', 'Orval'],
    },
    {
      company: 'Siz-Tel',
      role: 'توسعه‌دهنده فرانت‌اند',
      location: 'تهران، حضوری',
      start: 'ژوئن ۲۰۲۲',
      end: 'فوریه ۲۰۲۳',
      summary: 'بازطراحی وب‌سایت مشتریان و یک پنل ادمین برای بار سنگین.',
      achievements: [
        'وب‌سایت مشتریان را بازطراحی کردم؛ حضور برند قوی‌تر شد و ترافیک ارگانیک دو برابر شد.',
        'یک پنل ادمین با توان پردازشی بالا ساختم و مشکلات پایداری آن را زیر بار سنگین (بیش از ۵۰ هزار کاربر هم‌زمان) برطرف کردم.',
      ],
      stack: ['React', 'Mantine', 'Ant Design', 'Tailwind CSS', 'RTK Query', 'Axios'],
    },
    {
      company: 'Hasin Group',
      role: 'توسعه‌دهنده فرانت‌اند',
      location: 'تهران، حضوری',
      start: 'ژانویه ۲۰۲۲',
      end: 'مه ۲۰۲۲',
      summary: 'ابزارهای وام برای مشتریان و اپراتورها.',
      achievements: [
        'یک داشبورد وام برای مشتریان ساختم با پیگیری آنی درخواست، جدول اقساط و بارگذاری مدارک.',
        'یک پنل مدیریت CRM ساختم که روند کار اپراتورها را ساده‌تر کرد.',
      ],
      stack: ['React', 'Redux Saga', 'Axios', 'Styled Components'],
    },
  ],

  projects: [
    {
      slug: 'falaktv',
      title: 'فلک‌تی‌وی',
      category: 'ویدیو بر اساس تقاضا',
      year: '۲۰۲۴',
      summary: 'پلتفرم ویدیو بر اساس تقاضا با فرانت‌اند سریع و سازگار با سئو که در سرور رندر می‌شود.',
      description: [
        'فلک‌تی‌وی یک پلتفرم ویدیو بر اساس تقاضاست که در WebCasting ساخته شد. فرانت‌اند آن را با Next.js 15 و TypeScript ساختم و از SSR و ISR استفاده کردم تا صفحه‌ها سریع بارگذاری شوند و موتورهای جست‌وجو راحت آن‌ها را ایندکس کنند.',
        'APIهای REST سرویس‌های بک‌اند Node.js/NestJS را یکپارچه کردم و یک کتابخانه‌ی کامپوننت قابل‌استفاده‌ی مجدد طراحی کردم تا با رشد محصول، رابط کاربری یکدست بماند.',
      ],
      role: 'مهندس نرم‌افزار در WebCasting: معماری فرانت‌اند، کتابخانه‌ی کامپوننت و یکپارچه‌سازی API.',
      outcomes: [
        'با بازطراحی استراتژی‌های رندر SSR/ISR، شاخص Largest Contentful Paint (LCP) را ۴۰٪ کاهش دادم.',
        'قابلیت‌های واکنش‌گرا و دسترس‌پذیر (WCAG 2.1) را همراه تیم‌های طراحی، بک‌اند و محصول از ابتدا تا انتها تحویل دادم.',
      ],
      stack: ['Next.js 15', 'TypeScript', 'NestJS', 'Node.js', 'SSR / ISR'],
      featured: true,
      links: { live: 'https://falaktv.live' },
    },
    {
      slug: 'vakilzohdi',
      title: 'وب‌سایت خدمات حقوقی',
      category: 'پروژه‌ی آزاد، فول‌استک',
      year: '۲۰۲۶',
      summary: 'وب‌سایت و پنل مدیریت داکرایزشده برای یک دفتر حقوقی مستقل که آن را به‌تنهایی از ابتدا تا انتها ساختم.',
      description: [
        'یک وکیل مستقل به وب‌سایتی نیاز داشت که مراجعان در آن مقاله بخوانند و زمان‌های آزاد مشاوره را ببینند. مسئولیت کل پروژه با من بود: نیازمندی‌ها، معماری، تصمیم‌های طراحی رابط و تجربه‌ی کاربری، توسعه و استقرار، در ارتباط مستقیم با کارفرمایی که پیش‌زمینه‌ی فنی نداشت.',
        'فرانت‌اند با Next.js و TypeScript ساخته شده، بک‌اند از NestJS، Prisma و PostgreSQL استفاده می‌کند و همه‌چیز داخل Docker اجرا می‌شود.',
      ],
      role: 'تنها توسعه‌دهنده‌ی فول‌استک، از نیازمندی‌ها تا استقرار.',
      outcomes: [
        'کارفرما مقاله‌ها را منتشر می‌کند و ساعت‌های آزاد مشاوره را به‌صورت آنی در پنل مدیریت تنظیم می‌کند، بدون نیاز به برنامه‌نویس.',
        'به‌طور مستقل و جدا از شغل اصلی‌ام تحویل داده شد.',
      ],
      stack: ['Next.js', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
      featured: true,
      links: { live: 'https://vakilzohdi.ir' },
    },
    {
      slug: 'healthcare-platform',
      title: 'اپلیکیشن سلامت و CRM',
      category: 'سلامت',
      year: '۲۰۲۳',
      summary: 'برنامه‌های سلامت شخصی‌سازی‌شده و رزرو آنی مشاوره، همراه با پنل CRM برای تیم عملیات.',
      description: [
        'در Elegant Hoopoe یک وب‌اپلیکیشن سلامت ساختم که در آن بیماران برنامه‌های سلامت شخصی‌سازی‌شده را دنبال می‌کنند و به‌صورت آنی وقت مشاوره رزرو می‌کنند.',
        'پشت آن، یک پنل مدیریت CRM با Next.js، React Query، Tailwind CSS و Material UI ساختم؛ کامپوننت‌ها در Storybook مستند شدند و کلاینت‌های API با Orval تولید شدند.',
      ],
      role: 'توسعه‌دهنده فرانت‌اند در Elegant Hoopoe.',
      outcomes: [
        'ماندگاری کاربران ۲۵٪ افزایش یافت.',
        'اپراتورها بیش از ۱۰ هزار پرونده‌ی بیمار را به‌راحتی در پنل CRM مدیریت می‌کنند.',
      ],
      stack: ['Next.js', 'React Query', 'Tailwind CSS', 'Material UI', 'Storybook', 'Orval'],
      featured: true,
      links: {},
    },
    {
      slug: 'siz-tel',
      title: 'وب‌سایت و پنل ادمین Siz-Tel',
      category: 'مخابرات',
      year: '۲۰۲۲',
      summary: 'بازطراحی وب‌سایت مشتریان و یک پنل ادمین که زیر بار سنگین پایدار می‌ماند.',
      description: [
        'وب‌سایت مشتریان Siz-Tel را با React، Mantine و Ant Design بازطراحی کردم و یک پنل ادمین با توان پردازشی بالا با Tailwind CSS، RTK Query و Axios ساختم.',
      ],
      role: 'توسعه‌دهنده فرانت‌اند در Siz-Tel.',
      outcomes: [
        'ترافیک ارگانیک وب‌سایت مشتریان دو برابر شد.',
        'مشکلات پایداری زیر بار سنگین (بیش از ۵۰ هزار کاربر هم‌زمان) برطرف شد.',
      ],
      stack: ['React', 'Mantine', 'Ant Design', 'Tailwind CSS', 'RTK Query'],
      featured: false,
      links: {},
    },
    {
      slug: 'loan-dashboard',
      title: 'داشبورد وام مشتریان',
      category: 'فین‌تک',
      year: '۲۰۲۲',
      summary: 'پیگیری آنی درخواست وام، جدول اقساط و بارگذاری مدارک برای مشتریان.',
      description: [
        'در Hasin Group یک داشبورد وام برای مشتریان ساختم با پیگیری آنی درخواست، جدول اقساط و بارگذاری مدارک، و یک پنل مدیریت CRM با React، Axios، Redux Saga و Styled Components.',
      ],
      role: 'توسعه‌دهنده فرانت‌اند در Hasin Group.',
      outcomes: ['روند کار اپراتورها با یک پنل CRM اختصاصی ساده‌تر شد.'],
      stack: ['React', 'Redux Saga', 'Axios', 'Styled Components'],
      featured: false,
      links: {},
    },
  ],

  skills: [
    {
      name: 'فرانت‌اند',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Next.js 15 (App Router)', 'Redux', 'Zustand', 'React Query', 'RTK Query', 'Axios', 'Orval'],
    },
    {
      name: 'بک‌اند و دواپس',
      skills: ['Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'طراحی REST API', 'Docker', 'Git و GitHub'],
    },
    {
      name: 'رابط کاربری و دیزاین سیستم',
      skills: ['کتابخانه‌ی کامپوننت', 'Storybook', 'Tailwind CSS', 'Material UI', 'Sass / SCSS', 'Styled Components', 'Ant Design', 'Mantine', 'shadcn/ui'],
    },
    {
      name: 'کارایی و کیفیت',
      skills: ['Core Web Vitals', 'SSR / ISR', 'Code splitting', 'Lazy loading', 'WCAG 2.1', 'بازبینی کد', 'Agile / Scrum', 'Jira'],
    },
    {
      name: 'زبان‌ها',
      skills: ['فارسی (زبان مادری)', 'انگلیسی (سطح حرفه‌ای)'],
    },
  ],

  education: [
    {
      institution: 'دانشگاه صنعتی امیرکبیر',
      degree: 'کارشناسی ارشد مهندسی برق',
      start: '۲۰۱۷',
      end: '۲۰۲۰',
    },
    {
      institution: 'دانشگاه شاهد',
      degree: 'کارشناسی مهندسی برق',
      start: '۲۰۱۱',
      end: '۲۰۱۵',
    },
  ],

  certifications: [],
};
