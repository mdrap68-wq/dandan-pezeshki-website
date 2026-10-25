import { CheckCircle2, PhoneCall } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CLINIC } from '../lib/format';

export default function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-press py-16 lg:py-24" aria-labelledby="booking-title">
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(215,109,119,0.16), transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(245,242,248,0.07), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl flex flex-col gap-6 text-page">
          <SectionHeading
            dark
            align="start"
            eyebrow="رزرو نوبت"
            title={
              <span id="booking-title">
                نوبت خود را
                <br />
                <span className="text-rose">تلفنی بگیرید</span>
              </span>
            }
          />
          <p className="text-sm sm:text-base leading-8 text-[#C9BED8]">
            با پذیرش آرتامیس تماس بگیرید؛ همکاران ما در ساعات کاری نوبت شما را هماهنگ می‌کنند و حداکثر تا{' '}
            <strong className="text-white">۳۰ دقیقه</strong> پاسخگو هستند.
          </p>
          <ul className="flex flex-col gap-3 text-sm text-[#C9BED8]">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-rose shrink-0 mt-0.5" aria-hidden="true" />
              مشاورهٔ اولیه و طرح درمان رایگان است
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-rose shrink-0 mt-0.5" aria-hidden="true" />
              پرداخت اقساطی تا ۱۲ ماه برای طرح‌های درمانی
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-rose shrink-0 mt-0.5" aria-hidden="true" />
              همکاری با بیمه‌های تکمیلی و تأمین اجتماعی
            </li>
          </ul>
          <a
            href={CLINIC.phoneHref}
            className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors w-fit min-h-[56px]"
          >
            <PhoneCall size={22} className="text-rose shrink-0" aria-hidden="true" />
            <span>
              <span className="block text-[0.7rem] text-[#9A90AB]">برای رزرو نوبت تماس بگیرید</span>
              <span className="block font-extrabold text-white mt-0.5 text-lg" dir="ltr">
                {CLINIC.phoneDisplay}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
