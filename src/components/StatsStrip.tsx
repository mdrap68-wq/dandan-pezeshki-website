const STATS = [
  { value: '۱۸', unit: 'سال', label: 'تجربهٔ درمان تخصصی' },
  { value: '۱۲٬۰۰۰', unit: '+', label: 'درمان موفق ثبت‌شده' },
  { value: '۴', unit: 'متخصص', label: 'عضویت در هیئت علمی دانشگاه' },
  { value: '۴٫۹', unit: 'از ۵', label: 'میانگین رضایت بیماران' },
];

export default function StatsStrip() {
  return (
    <div className="relative z-10 -mt-2 lg:-mt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-border bg-press text-page shadow-lift overflow-hidden">
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-6 sm:py-7 text-center ${
                i % 2 === 1 ? 'border-r border-white/10' : ''
              } ${i > 1 ? 'border-t border-white/10 lg:border-t-0' : ''} ${i > 0 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              <div className="flex items-baseline gap-1.5" dir="rtl" aria-label={`${s.value} ${s.unit} — ${s.label}`}>
                <span className="text-2xl sm:text-3xl xl:text-4xl font-black text-white tracking-tight">{s.value}</span>
                <span className="text-xs sm:text-sm font-semibold text-rose">{s.unit}</span>
              </div>
              <p className="text-[0.68rem] sm:text-[0.75rem] text-[#C9BED8] leading-5">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
