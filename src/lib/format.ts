const FA_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

/** Latin/Arabic digits → Persian digits */
export function toFa(input: string | number): string {
  return String(input).replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]);
}

/** Any localized digits → Latin digits */
export function toEn(input: string): string {
  return input
    .replace(/[۰-۹]/g, (d) => String(FA_DIGITS.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
}

/** Normalize an Iranian mobile number; returns Latin 09xxxxxxxxx or null */
export function normalizeMobile(raw: string): string | null {
  let v = toEn(raw).replace(/[\s-]/g, '');
  if (v.startsWith('+98')) v = '0' + v.slice(3);
  else if (v.startsWith('0098')) v = '0' + v.slice(4);
  else if (v.startsWith('98')) v = '0' + v.slice(2);
  if (/^09\d{9}$/.test(v)) return v;
  return null;
}

/** Persian grouping for big numbers: 12000 → ۱۲٬۰۰۰ */
export function faNumber(n: number): string {
  return toFa(n.toLocaleString('en-US').replace(/,/g, '٬'));
}

export const CLINIC = {
  name: 'آرتامیس',
  fullName: 'کلینیک دندان‌پزشکی آرتامیس',
  phoneDisplay: '۰۲۱-۲۶۶۵۴۴۲۱',
  phoneHref: 'tel:+982126654421',
  mobileDisplay: '۰۹۱۲-۰۶۶۵۴۴۲۱',
  mobileHref: 'tel:+9891206654421',
  whatsappHref: 'https://wa.me/9891206654421',
  email: 'info@artemisclinic.ir',
  faxDisplay: '۰۲۱-۲۶۶۵۴۴۲۲',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('تهران، سعادت‌آباد، بلوار سعادت‌آباد، ساختمان پزشکان آریا'),
  address: 'تهران، سعادت‌آباد، بلوار سعادت‌آباد، ساختمان پزشکان آریا، طبقهٔ چهارم، واحد ۱۲',
  hours: [
    { day: 'شنبه تا چهارشنبه', time: '۹:۰۰ تا ۲۰:۰۰' },
    { day: 'پنجشنبه', time: '۹:۰۰ تا ۱۴:۰۰' },
    { day: 'جمعه', time: 'تعطیل — شیفت اضطراری' },
  ],
} as const;
