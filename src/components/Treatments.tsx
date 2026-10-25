import { useState } from 'react';
import { Sparkles, SmilePlus, Anchor, Braces, Stethoscope, Droplets, Check, ArrowLeft } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Treatment {
  id: string;
  icon: typeof Sparkles;
  title: string;
  short: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
}

const TREATMENTS: Treatment[] = [
  {
    id: 'smile-design',
    icon: Sparkles,
    title: 'طراحی لبخند دیجیتال',
    short: 'شبیه‌سازی سه‌بعدی لبخند نهایی پیش از شروع درمان؛ تا نتیجه را قبل از هزینه ببینید.',
    price: 'از ۴٬۵۰۰٬۰۰۰ تومان',
    duration: '۲ تا ۳ جلسه',
    featured: true,
    features: ['شبیه‌سازی سه‌بعدی پیش از درمان', 'هماهنگی با فرم صورت و رنگ پوست', 'ضمانت ۱۲ ماههٔ نتیجه'],
  },
  {
    id: 'veneer',
    icon: SmilePlus,
    title: 'لمینیت و ونیر سرامیکی',
    short: 'ونیرهای سرامیکی ساخته‌شده در لابراتوار اختصاصی آرتامیس با ظاهری کاملاً طبیعی.',
    price: 'از ۹٬۰۰۰٬۰۰۰ تومان',
    duration: '۲ جلسه',
    features: ['سرامیک ای.مکس آلمان', 'حداقل تراش دندان', 'تست موقت پیش از نصب نهایی'],
  },
  {
    id: 'implant',
    icon: Anchor,
    title: 'ایمپلنت دیجیتال',
    short: 'کاشت ایمپلنت با گاید جراحی دیجیتال؛ دقیق، کم‌تهاجمی و بدون بخیه در بیشتر موارد.',
    price: 'از ۱۸٬۰۰۰٬۰۰۰ تومان',
    duration: '۱ جلسهٔ جراحی',
    features: ['برندهای اوستم کره و اشترومن سوئیس', 'گاید جراحی چاپ سه‌بعدی', 'ضمانت ۵ سالهٔ فیکسچر'],
  },
  {
    id: 'ortho',
    icon: Braces,
    title: 'ارتودنسی نامرئی',
    short: 'الاینرهای شفاف اختصاصی برای اصلاح ترتیب دندان‌ها، بدون سیم و براکت.',
    price: 'از ۶۵٬۰۰۰٬۰۰۰ تومان',
    duration: '۶ تا ۱۸ ماه',
    features: ['اسکن سه‌بعدی و برنامه‌ریزی دیجیتال', 'پیگیری ماهانهٔ پیشرفت', 'مناسب بزرگسالان و نوجوانان'],
  },
  {
    id: 'whitening',
    icon: Droplets,
    title: 'بلیچینگ و جرم‌گیری',
    short: 'سفیدکردن حرفه‌ای با لیزر و جرم‌گیری اولتراسونیک در یک جلسهٔ یک‌ساعته.',
    price: 'از ۲٬۵۰۰٬۰۰۰ تومان',
    duration: '۱ جلسه — ۶۰ دقیقه',
    features: ['بلیچینگ مطب با ژل و لیزر', 'کیت هوم اختصاصی', 'جرم‌گیری و فلورایددرمانی رایگان'],
  },
  {
    id: 'general',
    icon: Stethoscope,
    title: 'دندان‌پزشکی عمومی و ترمیم',
    short: 'ترمیم، عصب‌کشی، پروتز و چکاپ دوره‌ای با تمرکز بر پیشگیری و درمان ریشه‌ای.',
    price: 'طبق تعرفهٔ مصوب',
    duration: 'همان روز',
    features: ['ترمیم کامپوزیتی همرنگ دندان', 'عصب‌کشی با میکروسکوپ', 'چکاپ کامل و رادیوگرافی دیجیتال'],
  },
];

export default function Treatments() {
  const [selected, setSelected] = useState<string>('smile-design');
  const active = TREATMENTS.find((t) => t.id === selected) ?? TREATMENTS[0];

  return (
    <section id="treatments" className="bg-tint/60 border-y border-border py-16 lg:py-24" aria-labelledby="treatments-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="خدمات درمانی"
          title={<span id="treatments-title">هر آنچه لبخندتان نیاز دارد، <span className="text-plum">زیر یک سقف</span></span>}
          description="از مشاوره و طراحی تا اجرا و پیگیری؛ شش مسیر درمانی پرتقاضای آرتامیس را بشناسید."
        />

        <div className="mt-10 lg:mt-16 grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Mobile: horizontal chips */}
          <div
            className="lg:hidden col-span-full -mx-4 px-4 flex gap-2 overflow-x-auto overscroll-x-contain pb-1 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="انتخاب خدمت درمانی"
            aria-orientation="horizontal"
          >
            {TREATMENTS.map((t) => {
              const isActive = t.id === selected;
              return (
                <button
                  key={`m-${t.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="treatment-panel"
                  id={`tab-m-${t.id}`}
                  onClick={() => setSelected(t.id)}
                  className={`snap-start shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 min-h-[44px] text-sm font-bold transition-colors ${
                    isActive
                      ? 'border-plum bg-plum text-white shadow-card'
                      : 'border-border bg-surface text-press'
                  }`}
                >
                  <t.icon size={16} strokeWidth={2} aria-hidden="true" />
                  {t.title}
                </button>
              );
            })}
          </div>

          {/* Desktop: vertical selector list */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3" role="tablist" aria-label="انتخاب خدمت درمانی" aria-orientation="vertical">
            {TREATMENTS.map((t) => {
              const isActive = t.id === selected;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="treatment-panel"
                  id={`tab-${t.id}`}
                  onClick={() => setSelected(t.id)}
                  className={`group flex items-center gap-4 rounded-2xl border p-4 sm:p-5 text-right transition-all duration-200 min-h-[72px] ${
                    isActive
                      ? 'border-plum bg-surface shadow-lift'
                      : 'border-border bg-surface/60 hover:bg-surface hover:border-plum/40'
                  }`}
                >
                  <span
                    className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                      isActive ? 'bg-plum text-white' : 'bg-tint text-plum group-hover:bg-plum group-hover:text-white'
                    }`}
                  >
                    <t.icon size={24} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-extrabold text-press leading-7">
                      {t.title}
                      {t.featured && (
                        <span className="mr-2 align-middle inline-block rounded-full bg-rose/15 text-rose text-[0.65rem] font-bold px-2 py-0.5">محبوب‌ترین</span>
                      )}
                    </span>
                    <span className="block text-[0.72rem] sm:text-xs text-muted mt-0.5">{t.price}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            id="treatment-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="lg:col-span-7 relative rounded-3xl border border-border bg-surface shadow-card overflow-hidden flex flex-col"
          >
            <div className="relative h-36 sm:h-44 overflow-hidden">
              <img
                src="/images/gallery-patient.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
                loading="lazy"
                width={940}
                height={627}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-l from-press/90 via-press/55 to-press/5" />
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-7">
                <p className="text-[0.72rem] font-bold text-rose">آرتامیس | {active.duration}</p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-black text-white tracking-tight">{active.title}</h3>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6 sm:p-8 gap-6">
              <p className="text-base sm:text-lg leading-9 text-muted">{active.short}</p>
              <ul className="flex flex-col gap-3">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm sm:text-[0.95rem] leading-7 text-ink">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-bg text-success">
                      <Check size={13} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4 border-t border-border pt-6">
                <div>
                  <p className="text-[0.72rem] text-muted">هزینهٔ تقریبی</p>
                  <p className="text-lg font-extrabold text-press">{active.price}</p>
                </div>
                <a
                  href="#booking"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-press text-page text-sm font-bold px-6 py-3.5 min-h-[48px] hover:bg-plum transition-colors"
                >
                  رزرو نوبت برای این خدمت
                  <ArrowLeft size={17} strokeWidth={2.2} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
