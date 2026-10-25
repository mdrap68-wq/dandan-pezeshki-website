import { CalendarCheck, Phone } from 'lucide-react';
import { CLINIC } from '../lib/format';

/** Persistent call + booking bar for phones (hidden on desktop). */
export default function MobileDock() {
  return (
    <div
      className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-page/95 backdrop-blur-xl"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 pt-2.5">
        <a
          href={CLINIC.phoneHref}
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-2xl border border-border bg-surface text-press"
          aria-label={`تماس: ${CLINIC.phoneDisplay}`}
        >
          <Phone size={20} strokeWidth={2.2} aria-hidden="true" />
        </a>
        <a
          href="#booking"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-plum text-white text-[0.95rem] font-extrabold px-4 min-h-[48px] shadow-card"
        >
          <CalendarCheck size={19} strokeWidth={2.2} aria-hidden="true" />
          رزرو نوبت آنلاین
        </a>
      </div>
    </div>
  );
}
