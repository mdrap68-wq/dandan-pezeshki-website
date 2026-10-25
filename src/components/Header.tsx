import { useEffect, useState } from 'react';
import { CalendarCheck, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import { CLINIC } from '../lib/format';

const NAV = [
  { label: 'خانه', href: '#top' },
  { label: 'خدمات', href: '#treatments' },
  { label: 'پرسش‌های رایج', href: '#faq' },
  { label: 'تماس', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b pt-[env(safe-area-inset-top)] ${
          scrolled || open
            ? 'bg-page/95 backdrop-blur-xl border-border shadow-[0_8px_30px_-18px_rgba(58,28,113,0.4)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[76px] items-center justify-between gap-3">
            <Logo />

            <nav className="hidden lg:flex items-center gap-8" aria-label="ناوبری اصلی">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-ink/80 hover:text-plum transition-colors relative after:absolute after:-bottom-1.5 after:right-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-rose after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <a
                href={CLINIC.phoneHref}
                className="hidden lg:flex items-center gap-2 text-sm font-bold text-press hover:text-plum transition-colors px-3 py-2"
                aria-label={`تماس تلفنی: ${CLINIC.phoneDisplay}`}
              >
                <Phone size={16} strokeWidth={2.2} />
                <span dir="ltr">{CLINIC.phoneDisplay}</span>
              </a>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-plum text-white text-sm font-bold px-5 py-2.5 shadow-card hover:bg-press transition-colors min-h-[44px]"
              >
                <CalendarCheck size={17} strokeWidth={2.2} />
                رزرو نوبت
              </a>
            </div>

            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-plum text-white text-xs font-bold px-3.5 py-2.5 min-h-[44px] shadow-card"
              >
                <CalendarCheck size={16} strokeWidth={2.2} aria-hidden="true" />
                رزرو
              </a>
              <button
                type="button"
                className="relative z-[70] inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl border border-border bg-surface text-press"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'بستن منو' : 'باز کردن منو'}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Outside header so backdrop-filter doesn't break fixed positioning */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-[calc(76px+env(safe-area-inset-top))] bottom-0 z-[60] bg-page border-t border-border overflow-y-auto pb-[5.5rem]"
          role="dialog"
          aria-modal="true"
          aria-label="منوی موبایل"
        >
          <nav className="px-6 py-8 flex flex-col gap-1" aria-label="منوی موبایل">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-bold text-press hover:bg-tint border border-transparent hover:border-border transition-colors min-h-[56px]"
              >
                {item.label}
                <span className="text-rose text-xl leading-none">‹</span>
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-plum text-white text-lg font-bold px-6 py-4 min-h-[56px] shadow-card"
            >
              <CalendarCheck size={20} />
              رزرو نوبت آنلاین
            </a>
            <a
              href={CLINIC.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface text-press text-base font-bold px-6 py-4 min-h-[56px]"
              dir="ltr"
            >
              <Phone size={18} />
              {CLINIC.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
