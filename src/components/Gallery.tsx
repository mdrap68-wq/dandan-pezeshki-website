import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import SectionHeading from './SectionHeading';

const PHOTOS = [
  { src: '/images/gallery-lobby.jpg', alt: 'لابی و پذیرش کلینیک آرتامیس با نورپردازی گرم', caption: 'لابی و پذیرش', span: 'lg:col-span-7 lg:row-span-2 aspect-[4/3] lg:aspect-auto' },
  { src: '/images/gallery-treatment.jpg', alt: 'اتاق درمان شمارهٔ یک با یونیت دندان‌پزشکی پیشرفته', caption: 'اتاق درمان اختصاصی', span: 'lg:col-span-5 aspect-[4/3]' },
  { src: '/images/gallery-interior.jpg', alt: 'فضای داخلی کلینیک و تجهیزات استریل', caption: 'تجهیزات و استریلیزاسیون', span: 'lg:col-span-5 aspect-[4/3]' },
  { src: '/images/about-care.jpg', alt: 'لحظهٔ معاینه و مشاورهٔ بیمار با دندان‌پزشک', caption: 'مشاورهٔ تخصصی', span: 'lg:col-span-6 aspect-[4/3]' },
  { src: '/images/gallery-patient.jpg', alt: 'انجام درمان روی صندلی دندان‌پزشکی در آرتامیس', caption: 'درمان با آرامش', span: 'lg:col-span-6 aspect-[4/3]' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => setLightbox(null);
  const step = (dir: 1 | -1) =>
    setLightbox((cur) => (cur === null ? cur : (cur + dir + PHOTOS.length) % PHOTOS.length));

  useEffect(() => {
    if (lightbox === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(1);
      if (e.key === 'ArrowRight') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="bg-page py-16 lg:py-24" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="start"
            eyebrow="گالری"
            title={<span id="gallery-title">فضای کلینیک</span>}
          />
          <p className="text-sm text-muted max-w-xs leading-7">برای دیدن تصویر در اندازهٔ کامل، روی آن بزنید.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-auto lg:auto-rows-[15rem] gap-4 lg:gap-5">
          {PHOTOS.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-3xl border border-border shadow-card text-right focus-visible:outline-2 ${photo.span}`}
              aria-label={`بزرگ‌نمایی تصویر: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={940}
                height={628}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-press/75 via-press/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 right-5 flex items-center gap-2 text-white font-bold text-sm">
                <Expand size={16} aria-hidden="true" />
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="نمایش تصویر کلینیک"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-press/90 backdrop-blur-sm p-4"
          onClick={close}
        >
          <button
            ref={closeRef}
            onClick={close}
            aria-label="بستن"
            className="absolute top-5 right-5 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="تصویر بعدی"
            className="absolute left-2 sm:left-6 inline-flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="تصویر قبلی"
            className="absolute right-2 sm:right-6 inline-flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={PHOTOS[lightbox].src}
              alt={PHOTOS[lightbox].alt}
              className="w-full max-h-[78vh] object-contain rounded-2xl"
            />
            <figcaption className="mt-3 text-center text-sm text-[#C9BED8]">{PHOTOS[lightbox].caption} — {lightbox + 1} از {PHOTOS.length}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
