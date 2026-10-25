import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';

const FAQS = [
  {
    q: 'آیا مشاورهٔ اولیه واقعاً رایگان است؟',
    a: 'بله. در اولین مراجعه، معاینه، رادیوگرافی دیجیتال و بررسی طرح درمان کاملاً رایگان است و هیچ هزینه‌ای بابت آن دریافت نمی‌شود — حتی اگر تصمیم به درمان نگیرید.',
  },
  {
    q: 'شرایط پرداخت اقساطی چگونه است؟',
    a: 'برای طرح‌های طراحی لبخند، ایمپلنت و ارتودنسی، امکان پرداخت در ۳ تا ۱۲ قسط ماهانه با چک یا کسر از حقوق وجود دارد. جزئیات دقیق در جلسهٔ مشاوره و بر اساس طرح درمان شما ارائه می‌شود.',
  },
  {
    q: 'آیا با بیمه‌های تکمیلی طرف قرارداد هستید؟',
    a: 'بله؛ با بیمه‌های ایران، البرز، آسیا، دانا، SOS و تعدادی از بیمه‌های تکمیلی طرف قرارداد هستیم. لطفاً کارت بیمهٔ خود را در جلسهٔ اول همراه داشته باشید تا سهم بیمه همان‌جا محاسبه شود.',
  },
  {
    q: 'چقدر طول می‌کشد تا لبخند جدیدم آماده شود؟',
    a: 'برای لمینیت و طراحی لبخند معمولاً دو جلسه در فاصله‌ای حدود دو هفته کافی است. ایمپلنت یک جلسهٔ جراحی و ۳ تا ۴ ماه زمان ادغام با استخوان نیاز دارد و ارتودنسی نامرئی بین ۶ تا ۱۸ ماه طول می‌کشد.',
  },
  {
    q: 'آیا امکان پرداخت با بیمهٔ پایه (تأمین اجتماعی) وجود دارد؟',
    a: 'بله؛ برای خدمات دندان‌پزشکی عمومی و ترمیمی، کد رهگیری تأمین اجتماعی پذیرفته می‌شود و سهم بیمهٔ پایه در مطب محاسبه و اعمال می‌گردد.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-page py-16 lg:py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            align="start"
            eyebrow="پرسش‌های رایج"
            title={<span id="faq-title">پیش از مراجعه،<br /><span className="text-plum">پاسخ‌ها را بدانید</span></span>}
            description="پاسخ به سؤال‌هایی که بیماران پیش از اولین مراجعه می‌پرسند. سؤال دیگری دارید؟ با پذیرش تماس بگیرید."
          />
        </div>
        <div className="lg:col-span-8 flex flex-col divide-y divide-border border border-border rounded-3xl bg-surface shadow-card overflow-hidden self-start">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  className="w-full flex items-center justify-between gap-4 text-right px-5 sm:px-7 py-5 sm:py-6 min-h-[64px] hover:bg-tint/40 transition-colors"
                >
                  <span className="font-bold text-press leading-8">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-plum transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!isOpen}
                  className="px-5 sm:px-7 pb-6 -mt-1"
                >
                  <p className="text-sm sm:text-[0.95rem] leading-8 text-muted border-r-2 border-rose/50 pr-4">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
