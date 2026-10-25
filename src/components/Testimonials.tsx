import { Star, BadgeCheck, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const TESTIMONIALS = [
  {
    name: 'سارا محمدی',
    treatment: 'طراحی لبخند + لمینیت',
    text: 'قبل از مراجعه دو سال از لبخندم فرار می‌کردم. دکتر افشاری قبل از شروع، نتیجهٔ نهایی را روی مانیتور نشانم داد. وقتی لمینیت‌ها را گذاشتند، خودم را نشناختم — به بهترین شکل ممکن.',
    rating: 5,
  },
  {
    name: 'آقای رضایی',
    treatment: 'ایمپلنت دیجیتال',
    text: 'ترس از دندان‌پزشکی داشتم. از اولین تماس تا جراحی، همه‌چیز سر وقت و با آرامش پیش رفت. بیهوشی کامل بود و من واقعاً چیزی حس نکردم. سه ماه بعد روکش گذاشتند.',
    rating: 5,
  },
  {
    name: 'نیلوفر احمدی',
    treatment: 'ارتودنسی نامرئی',
    text: 'در ۳۲ سالگی ارتودنسی کردم و هیچ‌کس متوجه نشد. اسکنر داخل دهانی اصلاً اذیت‌کننده نبود. ماهانه پیگیری می‌کنند و پیشرفت را با عکس نشان می‌دهند.',
    rating: 5,
  },
  {
    name: 'خانوادهٔ کریمی',
    treatment: 'دندان‌پزشکی کودک و عمومی',
    text: 'دو فرزندم حالا آرتامیس را دوست دارند. با طراحی اتاق کودک و برخورد مربیان، جلسات درمان به یک بازی تبدیل شده است. برای کل خانواده اینجا را پیشنهاد می‌کنم.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-tint/60 border-y border-border py-16 lg:py-24" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="start"
            eyebrow="تجربهٔ بیماران"
            title={<span id="testimonials-title">حرف ما نیست؛ <span className="text-plum">حرف آن‌هاست</span></span>}
          />
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-3 shadow-card">
            <div className="flex -space-x-2" aria-hidden="true">
              {['س', 'آ', 'ن'].map((c, i) => (
                <span key={i} className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface bg-plum text-[0.72rem] font-bold text-white">
                  {c}
                </span>
              ))}
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-sm font-extrabold text-press">
                ۴٫۹ <Star size={14} className="fill-[#E9B44C] stroke-[#E9B44C]" aria-hidden="true" />
              </p>
              <p className="text-[0.7rem] text-muted">بیش از ۱٬۲۳۰ نظر ثبت‌شده</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 sm:p-7 shadow-card"
            >
              <Quote size={34} className="text-tint fill-tint absolute top-6 left-6" aria-hidden="true" />
              <div className="flex items-center gap-1" dir="ltr" role="img" aria-label="امتیاز ۵ از ۵">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#E9B44C] stroke-[#E9B44C]" strokeWidth={1.5} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-[0.95rem] sm:text-base leading-8 text-ink">«{t.text}»</blockquote>
              <figcaption className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
                <span>
                  <span className="block font-extrabold text-press">{t.name}</span>
                  <span className="block text-[0.72rem] text-muted mt-0.5">{t.treatment}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success-bg text-success text-[0.68rem] font-bold px-3 py-1.5">
                  <BadgeCheck size={13} strokeWidth={2.4} aria-hidden="true" />
                  نمونهٔ محتوا
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-[0.72rem] text-soft">نظرهای این بخش محتوای نمونهٔ نمایشی هستند و تجربیات واقعی بیماران آرتامیس را بازتاب می‌دهند.</p>
      </div>
    </section>
  );
}
