import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { CalendarCheck, CheckCircle2, Loader2, AlertCircle, Info, PhoneCall, ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CLINIC, normalizeMobile, toFa } from '../lib/format';

const TREATMENT_OPTIONS = [
  'طراحی لبخند دیجیتال',
  'لمینیت و ونیر سرامیکی',
  'ایمپلنت دیجیتال',
  'ارتودنسی نامرئی',
  'بلیچینگ و جرم‌گیری',
  'دندان‌پزشکی عمومی و ترمیم',
  'مشاورهٔ رایگان و معاینه',
];

const TIME_SLOTS = ['صبح (۹ تا ۱۲)', 'ظهر (۱۲ تا ۱۵)', 'عصر (۱۵ تا ۱۸)', 'شب (۱۸ تا ۲۰)'];

const ERROR_STYLE = 'border-danger focus:border-danger focus:ring-danger/20';
const IDLE_STYLE = 'border-border focus:border-plum focus:ring-plum/25';

interface FieldErrors {
  name?: string;
  phone?: string;
  treatment?: string;
  time?: string;
}

const jalaaliFormatter = new Intl.DateTimeFormat('fa-IR', { weekday: 'long', day: 'numeric', month: 'long' });

function getUpcomingDays() {
  const days: { key: string; label: string }[] = [];
  const now = new Date();
  for (let i = 1; days.length < 14 && i <= 30; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    if (d.getDay() === 5) continue; // جمعه تعطیل
    days.push({ key: d.toISOString().slice(0, 10), label: jalaaliFormatter.format(d) });
  }
  return days;
}

export default function Booking() {
  const days = useMemo(() => getUpcomingDays(), []);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (name.trim().length < 3) next.name = 'لطفاً نام و نام خانوادگی را کامل وارد کنید (حداقل ۳ حرف).';
    if (!normalizeMobile(phone)) next.phone = 'شمارهٔ موبایل معتبر نیست؛ مثال: ۰۹۱۲۱۲۳۴۵۶۷';
    if (!treatment) next.treatment = 'لطفاً نوع درمان موردنظر را انتخاب کنید.';
    if (!time) next.time = 'لطفاً بازهٔ زمانی دلخواه را انتخاب کنید.';
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus('idle');
      document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1200);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setTreatment('');
    setDate('');
    setTime('');
    setErrors({});
    setStatus('idle');
  };

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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-4 flex flex-col gap-6 text-page">
          <SectionHeading
            dark
            align="start"
            eyebrow="رزرو نوبت"
            title={
              <span id="booking-title">
                نوبت خود را
                <br />
                <span className="text-rose">آنلاین بگیرید</span>
              </span>
            }
          />
          <p className="text-sm sm:text-base leading-8 text-[#C9BED8] max-w-sm">
            فرم را تکمیل کنید؛ همکاران پذیرش آرتامیس حداکثر تا{' '}
            <strong className="text-white">۳۰ دقیقه در ساعات کاری</strong> با شما تماس می‌گیرند و نوبت شما را قطعی می‌کنند.
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
            className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors w-fit"
          >
            <PhoneCall size={22} className="text-rose shrink-0" aria-hidden="true" />
            <span>
              <span className="block text-[0.7rem] text-[#9A90AB]">ترجیح می‌دهید تلفنی رزرو کنید؟</span>
              <span className="block font-extrabold text-white mt-0.5" dir="ltr">
                {CLINIC.phoneDisplay}
              </span>
            </span>
          </a>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-surface text-ink shadow-lift p-6 sm:p-8 lg:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center gap-5 py-8" role="status">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success-bg">
                  <CheckCircle2 size={44} className="text-success" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-black text-press">درخواست شما ثبت شد</h3>
                <p className="max-w-md leading-8 text-muted">
                  {name.trim()} عزیز، درخواست نوبت شما برای «{treatment}» دریافت شد. همکاران پذیرش حداکثر تا ۳۰ دقیقه در
                  ساعات کاری با شمارهٔ <span dir="ltr">{toFa(normalizeMobile(phone) ?? phone)}</span> تماس می‌گیرند.
                </p>
                <div className="flex items-center gap-2 rounded-xl bg-warning-bg border border-warning/20 text-warning text-[0.78rem] font-semibold px-4 py-2.5">
                  <Info size={16} aria-hidden="true" />
                  این یک نمونهٔ نمایشی است؛ اطلاعات شما در سرور ذخیره نشد.
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border-[1.5px] border-plum/30 text-plum font-bold px-6 py-3.5 min-h-[48px] hover:bg-tint transition-colors"
                >
                  ثبت درخواست جدید
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
                  <h3 className="text-lg font-extrabold text-press flex items-center gap-2">
                    <CalendarCheck size={20} className="text-plum" aria-hidden="true" />
                    فرم رزرو نوبت
                  </h3>
                  <span className="text-[0.7rem] text-muted">فیلدهای ستاره‌دار الزامی‌اند</span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="bk-name" className="text-sm font-bold text-press">
                    نام و نام خانوادگی <span className="text-rose" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bk-name"
                    type="text"
                    autoComplete="name"
                    placeholder="مثال: سارا محمدی"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    className={`rounded-xl border bg-page px-4 py-3.5 min-h-[52px] text-[0.95rem] placeholder:text-soft outline-none transition focus:ring-4 ${errors.name ? ERROR_STYLE : IDLE_STYLE}`}
                  />
                  {errors.name && (
                    <p id="err-name" role="alert" className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-danger">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="bk-phone" className="text-sm font-bold text-press">
                    شمارهٔ موبایل <span className="text-rose" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bk-phone"
                    type="tel"
                    inputMode="tel"
                    dir="ltr"
                    autoComplete="tel"
                    placeholder="09121234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'err-phone' : undefined}
                    className={`rounded-xl border bg-page px-4 py-3.5 min-h-[52px] text-[0.95rem] text-left placeholder:text-soft outline-none transition focus:ring-4 ${errors.phone ? ERROR_STYLE : IDLE_STYLE}`}
                  />
                  {errors.phone && (
                    <p id="err-phone" role="alert" className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-danger">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="bk-treatment" className="text-sm font-bold text-press">
                    نوع درمان موردنظر <span className="text-rose" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="bk-treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      aria-invalid={!!errors.treatment}
                      aria-describedby={errors.treatment ? 'err-treatment' : undefined}
                      className={`w-full rounded-xl border bg-page px-4 pl-11 py-3.5 min-h-[52px] text-[0.95rem] outline-none transition focus:ring-4 appearance-none ${treatment ? 'text-ink' : 'text-soft'} ${errors.treatment ? ERROR_STYLE : IDLE_STYLE}`}
                    >
                      <option value="">انتخاب کنید…</option>
                      {TREATMENT_OPTIONS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
                  </div>
                  {errors.treatment && (
                    <p id="err-treatment" role="alert" className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-danger">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.treatment}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="bk-date" className="text-sm font-bold text-press">
                    روز مراجعه <span className="font-normal text-muted">(اختیاری)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="bk-date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`w-full rounded-xl border bg-page px-4 pl-11 py-3.5 min-h-[52px] text-[0.95rem] outline-none transition focus:ring-4 appearance-none ${date ? 'text-ink' : 'text-soft'} ${IDLE_STYLE}`}
                    >
                      <option value="">اولین نوبت آزاد</option>
                      {days.map((d) => (
                        <option key={d.key} value={d.key}>
                          {d.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
                  </div>
                </div>

                <fieldset className="flex flex-col gap-1.5">
                  <legend className="text-sm font-bold text-press">
                    بازهٔ زمانی دلخواه <span className="text-rose" aria-hidden="true">*</span>
                  </legend>
                  <div
                    className="grid grid-cols-2 gap-2"
                    role="radiogroup"
                    aria-invalid={!!errors.time}
                    aria-describedby={errors.time ? 'err-time' : undefined}
                  >
                    {TIME_SLOTS.map((slot) => {
                      const checked = time === slot;
                      return (
                        <label
                          key={slot}
                          className={`flex items-center justify-center rounded-xl border px-3 py-3 min-h-[52px] text-[0.8rem] font-bold cursor-pointer transition select-none ${
                            checked
                              ? 'border-plum bg-plum text-white shadow-card'
                              : 'border-border bg-page text-press hover:border-plum/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="time-slot"
                            value={slot}
                            checked={checked}
                            onChange={() => setTime(slot)}
                            className="sr-only"
                          />
                          {slot}
                        </label>
                      );
                    })}
                  </div>
                  {errors.time && (
                    <p id="err-time" role="alert" className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-danger">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.time}
                    </p>
                  )}
                </fieldset>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-plum text-white text-base font-extrabold px-8 py-4 min-h-[56px] shadow-lift hover:bg-press transition-all disabled:opacity-70 disabled:cursor-wait"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={21} className="animate-spin" aria-hidden="true" />
                      در حال ثبت درخواست…
                    </>
                  ) : (
                    <>
                      <CalendarCheck size={21} aria-hidden="true" />
                      ثبت درخواست نوبت
                    </>
                  )}
                </button>
                <p className="sm:col-span-2 text-center text-[0.7rem] leading-6 text-soft">
                  با ثبت درخواست، با هماهنگی نوبت از طریق تماس تلفنی موافقید.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
