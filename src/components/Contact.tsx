import { MapPin, Phone, Printer, Smartphone, Clock, Navigation } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CLINIC } from '../lib/format';

export default function Contact() {
  return (
    <section id="contact" className="bg-page py-16 lg:py-24" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="start"
          eyebrow="موقعیت و تماس"
          title={<span id="contact-title">آرتامیس را <span className="text-plum">از نزدیک ببینید</span></span>}
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Map placeholder */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-border shadow-card min-h-[22rem] sm:min-h-[28rem] bg-[#E9E4EF]" role="img" aria-label="نقشهٔ موقعیت کلینیک آرتامیس در سعادت‌آباد تهران — نشانگر روی بلوار سعادت‌آباد، ساختمان پزشکان آریا">
            {/* Stylized faux map */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="800" height="520" fill="#ECE7F0" />
              {/* parks */}
              <rect x="60" y="60" width="150" height="110" rx="18" fill="#DDE8DC" />
              <rect x="600" y="360" width="140" height="100" rx="18" fill="#DDE8DC" />
              {/* main avenues */}
              <path d="M0 260 H800" stroke="#FFFFFF" strokeWidth="34" />
              <path d="M0 260 H800" stroke="#D8CFE0" strokeWidth="2" strokeDasharray="14 10" />
              <path d="M400 0 V520" stroke="#FFFFFF" strokeWidth="26" />
              <path d="M120 0 L520 520" stroke="#FFFFFF" strokeWidth="16" />
              <path d="M700 0 L300 520" stroke="#FFFFFF" strokeWidth="12" />
              {/* side streets */}
              <path d="M0 120 H800" stroke="#F7F5F9" strokeWidth="10" />
              <path d="M0 400 H800" stroke="#F7F5F9" strokeWidth="10" />
              <path d="M220 0 V520" stroke="#F7F5F9" strokeWidth="10" />
              <path d="M580 0 V520" stroke="#F7F5F9" strokeWidth="10" />
              {/* labels */}
              <text x="330" y="252" fontSize="17" fill="#8D829E" fontWeight="700" fontFamily="Vazir, Tahoma, sans-serif">بلوار سعادت‌آباد</text>
              <text x="120" y="112" fontSize="12" fill="#9DB29B" fontWeight="700" fontFamily="Vazir, Tahoma, sans-serif">پارک پرواز</text>
              <text x="410" y="60" fontSize="12" fill="#8D829E" fontFamily="Vazir, Tahoma, sans-serif">بلوار دریا</text>
            </svg>
            {/* Pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[90%] flex flex-col items-center">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-plum text-white shadow-lift ring-4 ring-white/80">
                <MapPin size={24} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <span className="mt-2 rounded-xl bg-press/95 backdrop-blur px-4 py-1.5 text-[0.72rem] font-bold text-white whitespace-nowrap shadow-lift">کلینیک آرتامیس</span>
            </div>
            <a
              className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-2 rounded-full bg-surface border border-border shadow-card px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold text-press hover:text-plum transition-colors min-h-[48px]"
              href={CLINIC.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation size={17} aria-hidden="true" />
              <span className="sm:hidden">مسیریابی</span>
              <span className="hidden sm:inline">مسیریابی در نقشهٔ گوگل</span>
            </a>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-3xl border border-border bg-surface shadow-card p-6 sm:p-7 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tint text-plum"><MapPin size={22} aria-hidden="true" /></span>
                <span>
                  <h3 className="font-extrabold text-press">نشانی کلینیک</h3>
                  <p className="mt-1 text-sm leading-8 text-muted">{CLINIC.address}</p>
                  <p className="mt-1 text-[0.72rem] text-soft">یادداشت: ساختمان آریا، ورودی از خیابان دوم — پارکینگ اختصاصی رایگان</p>
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 border-t border-border pt-5">
                <a href={CLINIC.phoneHref} className="group rounded-2xl border border-border p-4 hover:border-plum/40 hover:shadow-card transition-all">
                  <Phone size={20} className="text-rose" aria-hidden="true" />
                  <p className="mt-2 text-[0.7rem] text-muted">تلفن پذیرش</p>
                  <p className="font-extrabold text-press group-hover:text-plum transition-colors" dir="ltr">{CLINIC.phoneDisplay}</p>
                </a>
                <a href={CLINIC.whatsappHref} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border p-4 hover:border-plum/40 hover:shadow-card transition-all">
                  <Smartphone size={20} className="text-rose" aria-hidden="true" />
                  <p className="mt-2 text-[0.7rem] text-muted">موبایل و واتساپ</p>
                  <p className="font-extrabold text-press group-hover:text-plum transition-colors" dir="ltr">{CLINIC.mobileDisplay}</p>
                </a>
              </div>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.72rem] text-soft">
                <span className="inline-flex items-center gap-2"><Printer size={14} aria-hidden="true" />نمابر: <span dir="ltr">{CLINIC.faxDisplay}</span></span>
                <span aria-hidden="true">—</span>
                <a href={`mailto:${CLINIC.email}`} className="hover:text-plum transition-colors">{CLINIC.email}</a>
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-surface shadow-card p-6 sm:p-7">
              <h3 className="flex items-center gap-2 font-extrabold text-press"><Clock size={19} className="text-plum" aria-hidden="true" />ساعات کاری</h3>
              <dl className="mt-4 divide-y divide-border">
                {CLINIC.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-sm font-semibold text-ink">{h.day}</dt>
                    <dd className={`text-sm font-bold ${h.time.includes('تعطیل') ? 'text-danger' : 'text-press'}`}>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 rounded-xl bg-tint px-4 py-2.5 text-[0.72rem] leading-6 text-press">در موارد اورژانسی خارج از ساعات کاری با شمارهٔ موبایل تماس بگیرید تا شیفت اضطراری هماهنگ شود.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
