import { useEffect, useRef, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownLeft, CalendarCheck, PhoneCall, ShieldCheck, Sparkles, Star, Stethoscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function HeroPortrait({
  wrapRef,
  ratingRef,
  chipRef,
  showFloats = false,
}: {
  wrapRef?: RefObject<HTMLDivElement | null>;
  ratingRef?: RefObject<HTMLDivElement | null>;
  chipRef?: RefObject<HTMLDivElement | null>;
  showFloats?: boolean;
}) {
  return (
    <div ref={wrapRef} className="relative will-change-transform origin-bottom w-[min(100%,19rem)] sm:w-auto shrink-0">
      <div
        aria-hidden="true"
        className="absolute -top-6 -left-8 sm:-left-14 h-36 w-36 sm:h-52 sm:w-52 rounded-full border-2 border-dotted border-plum/25"
      />
      <div aria-hidden="true" className="absolute -bottom-8 -right-6 sm:-right-12 h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-rose/35" />

      <figure className="relative arch overflow-hidden border-[5px] sm:border-[6px] border-surface shadow-lift w-[min(100%,19rem)] sm:w-80 lg:w-[24.5rem] xl:w-[27rem] mx-auto aspect-[3/4.55] bg-tint">
        <img
          src="/images/hero-main.jpg"
          alt="بیمار راضی با لبخندی درخشان پس از پایان درمان در کلینیک آرتامیس"
          className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
          width={1200}
          height={1800}
          fetchPriority="high"
          decoding="async"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-press/45 via-transparent to-transparent" />
        <figcaption className="absolute bottom-5 right-5 left-5">
          <span className="block text-[0.72rem] font-medium text-white/80">نتیجهٔ درمان طراحی لبخند</span>
          <span className="block text-sm font-bold text-white">رضایت بیمار — کلینیک آرتامیس</span>
        </figcaption>
      </figure>

      {showFloats && (
        <>
          <div
            ref={ratingRef}
            className="absolute top-16 -right-2 sm:-right-10 lg:-right-16 rounded-2xl border border-border bg-surface/95 backdrop-blur px-4 py-3 shadow-lift animate-float-soft"
          >
            <div className="flex items-center gap-2" dir="ltr" aria-label="میانگین امتیاز ۴٫۹ از ۵">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={15} className="fill-[#E9B44C] stroke-[#E9B44C]" strokeWidth={1.5} aria-hidden="true" />
              ))}
            </div>
            <p className="mt-1.5 text-sm font-extrabold text-press leading-5">۴٫۹ از ۵</p>
            <p className="text-[0.7rem] text-muted leading-4">بر اساس ۱٬۲۳۰ نظر بیماران</p>
          </div>

          <div
            ref={chipRef}
            className="absolute bottom-24 -left-2 sm:-left-12 lg:-left-20 rounded-2xl border border-border bg-surface/95 backdrop-blur pl-4 pr-3 py-3 shadow-lift flex items-center gap-3"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-plum shrink-0">
              <Stethoscope size={22} strokeWidth={2} />
            </span>
            <span>
              <span className="block text-[0.72rem] text-muted">لمینیت سرامیکی</span>
              <span className="block text-sm font-extrabold text-press">تحویل در دو جلسه</span>
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const panelRatingRef = useRef<HTMLDivElement>(null);
  const panelChipRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLSpanElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 1024px)', () => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=72%',
          scrub: 0.7,
        },
      });
      tl.to(backdropRef.current, { xPercent: -7, opacity: 0.05, duration: 1 }, 0)
        .to(copyRef.current, { opacity: 0.55, y: -48, duration: 0.85 }, 0.08)
        .to(imageDesktopRef.current, { scale: 1.075, y: -56, duration: 1 }, 0)
        .to(glowRef.current, { opacity: 0.85, scale: 1.18, duration: 1 }, 0)
        .to(panelRatingRef.current, { y: -118, x: -26, opacity: 0, duration: 0.7 }, 0.12)
        .to(panelChipRef.current, { y: -168, x: 30, opacity: 0, duration: 0.7 }, 0.18)
        .to(scrollHintRef.current, { opacity: 0, y: 12, duration: 0.18 }, 0);
    });

    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 1023px)', () => {
      gsap.to(imageMobileRef.current, {
        y: -16,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = window.setTimeout(refresh, 900);

    return () => {
      mm.revert();
      window.removeEventListener('load', refresh);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden bg-page pt-[76px]"
      aria-label="معرفی کلینیک آرتامیس"
    >
      <span
        ref={backdropRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-24 -left-4 sm:left-6 text-[clamp(5rem,17vw,12rem)] font-black leading-none text-outline whitespace-nowrap opacity-100"
      >
        آرتامیس
      </span>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-40 h-[34rem] w-[34rem] rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(215,109,119,0.20) 0%, rgba(215,109,119,0) 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-[-8rem] h-[36rem] w-[36rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(58,28,113,0.14) 0%, rgba(58,28,113,0) 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-6 items-center lg:min-h-[calc(100svh-76px)] py-6 sm:py-14 lg:py-8">
          <div ref={copyRef} className="lg:col-span-6 flex flex-col items-start gap-5 sm:gap-7 will-change-transform">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface py-1.5 pl-3 sm:pl-4 pr-1.5 shadow-sm max-w-full">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint text-plum">
                <Sparkles size={15} strokeWidth={2.2} />
              </span>
              <span className="text-[0.72rem] sm:text-[0.82rem] font-semibold text-press leading-5">
                کلینیک تخصصی طراحی لبخند در سعادت‌آباد تهران
              </span>
            </span>

            <h1 className="text-[1.95rem] leading-[1.35] sm:text-5xl sm:leading-[1.28] xl:text-[3.4rem] font-black tracking-tight text-press">
              لبخندی که همیشه
              <br />
              آرزویش را{' '}
              <span className="relative inline-block text-plum">
                داشتید
                <svg className="absolute -bottom-2 right-0 w-full" height="12" viewBox="0 0 220 12" fill="none" aria-hidden="true">
                  <path d="M3 9c60 4 150 4 214-3" stroke="#D76D77" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
                </svg>
              </span>
            </h1>

            {/* Mobile: portrait sits under the headline so it’s visible without long scrolling */}
            <div className="lg:hidden w-full flex justify-center py-2 self-stretch">
              <HeroPortrait wrapRef={imageMobileRef} />
            </div>

            <p className="max-w-xl text-[0.95rem] sm:text-lg leading-8 sm:leading-9 text-muted">
              از ایمپلنت دیجیتال و لمینیت سرامیکی تا ارتودنسی نامرئی؛ تیمی از متخصصان مجرب با تجهیزات روز دنیا،
              در محیطی آرام و کم‌تنش — جایی که هر درمان با طراحی لبخند شما آغاز می‌شود.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-plum text-white text-base font-bold px-7 py-4 min-h-[54px] shadow-lift hover:bg-press transition-colors"
              >
                <CalendarCheck size={20} strokeWidth={2.2} />
                رزرو نوبت آنلاین
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-plum/25 bg-surface text-press text-base font-bold px-7 py-4 min-h-[54px] hover:border-plum hover:text-plum transition-colors"
              >
                مشاهدهٔ خدمات
                <ArrowDownLeft size={19} strokeWidth={2.2} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2.5 pt-1 text-[0.8rem] sm:text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={18} className="text-success shrink-0" /> ضمانت کتبی درمان
              </span>
              <span className="inline-flex items-center gap-2">
                <Stethoscope size={18} className="text-plum shrink-0" /> مشاورهٔ اولیه رایگان
              </span>
              <span className="inline-flex items-center gap-2">
                <PhoneCall size={18} className="text-rose shrink-0" /> پاسخگویی در ساعات کاری
              </span>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-6 relative justify-end lg:pl-10">
            <HeroPortrait
              wrapRef={imageDesktopRef}
              ratingRef={panelRatingRef}
              chipRef={panelChipRef}
              showFloats
            />
          </div>
        </div>

        <div
          ref={scrollHintRef}
          className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted"
          aria-hidden="true"
        >
          <span className="text-[0.72rem] font-semibold tracking-wide">برای آشنایی بیشتر اسکرول کنید</span>
          <span className="relative h-9 w-[22px] rounded-full border-2 border-soft/60">
            <span className="absolute top-1.5 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-plum animate-scroll-wheel" />
          </span>
        </div>
      </div>
    </section>
  );
}
