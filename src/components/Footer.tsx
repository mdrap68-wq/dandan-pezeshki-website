import { Instagram, Send, MessageCircle, HeartPulse } from 'lucide-react';
import Logo from './Logo';
import { CLINIC } from '../lib/format';

const LINKS = [
  { label: 'خدمات درمانی', href: '#treatments' },
  { label: 'گالری', href: '#gallery' },
  { label: 'پرسش‌های رایج', href: '#faq' },
  { label: 'رزرو نوبت', href: '#booking' },
];

export default function Footer() {
  return (
    <footer className="bg-press text-[#C9BED8]" aria-labelledby="footer-title">
      <span id="footer-title" className="sr-only">پاورقی سایت کلینیک آرتامیس</span>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 flex flex-col gap-4">
            <Logo dark />
            <p className="text-sm leading-8 max-w-xs">
              کلینیک دندان‌پزشکی آرتامیس؛ ترکیب تجربهٔ دانشگاهی، تجهیزات روز دنیا و برخورد انسانی — از سال ۱۳۸۶ در تهران.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/artemis.clinic" target="_blank" rel="noreferrer" aria-label="اینستاگرام آرتامیس" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 hover:bg-white/10 hover:text-white transition-colors">
                <Instagram size={19} aria-hidden="true" />
              </a>
              <a href="https://t.me/artemisclinic" target="_blank" rel="noreferrer" aria-label="کانال تلگرام آرتامیس" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 hover:bg-white/10 hover:text-white transition-colors">
                <Send size={19} aria-hidden="true" />
              </a>
              <a href={CLINIC.whatsappHref} target="_blank" rel="noreferrer" aria-label="گفتگو در واتساپ" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 hover:bg-white/10 hover:text-white transition-colors">
                <MessageCircle size={19} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="md:col-span-2" aria-label="دسترسی سریع">
            <h3 className="text-xs font-extrabold text-white tracking-wide">دسترسی سریع</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="text-xs font-extrabold text-white tracking-wide">تماس</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-7">
              <li><a href={CLINIC.phoneHref} className="hover:text-white" dir="ltr">{CLINIC.phoneDisplay}</a></li>
              <li>{CLINIC.address}</li>
              <li>شنبه تا چهارشنبه ۹ تا ۲۰ · پنجشنبه ۹ تا ۱۴</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-extrabold text-white tracking-wide">اعتماد و مجوزها</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-7">
              <li>پروانهٔ تأسیس وزارت بهداشت: ۲۴/۵۷۸۲۱</li>
              <li>نظام پزشکی: د-۹۸۷۶۵</li>
              <li>پذیرش بیماران بیمه‌های تکمیلی و تأمین اجتماعی</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem]">
          <p>© ۱۴۰۵ کلینیک دندان‌پزشکی آرتامیس — تمام حقوق محفوظ است.</p>
          <p className="flex items-center gap-1.5">
            طراحی و اجرا با
            <HeartPulse size={13} className="text-rose" aria-hidden="true" />
            برای لبخندهای تهران · محتوای این سایت نمونهٔ نمایشی است
          </p>
        </div>
      </div>
    </footer>
  );
}
