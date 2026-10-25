import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'start';
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }: Props) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-right';
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <span className="inline-flex items-center gap-2.5">
        <span className="h-px w-7 bg-rose" aria-hidden="true" />
        <span className={`text-[0.8rem] font-bold tracking-wide ${dark ? 'text-[#E3B7BE]' : 'text-rose'}`}>{eyebrow}</span>
        <span className="h-px w-7 bg-rose" aria-hidden="true" />
      </span>
      <h2 className={`text-[1.65rem] sm:text-4xl lg:text-[2.75rem] leading-[1.4] sm:leading-[1.35] font-extrabold tracking-tight ${dark ? 'text-page' : 'text-press'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base sm:text-lg leading-8 ${dark ? 'text-[#C9BED8]' : 'text-muted'}`}>{description}</p>
      )}
    </div>
  );
}
