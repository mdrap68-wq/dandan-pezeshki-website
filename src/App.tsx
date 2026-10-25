import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Treatments from './components/Treatments';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileDock from './components/MobileDock';

export default function App() {
  useEffect(() => {
    document.title = 'کلینیک دندان‌پزشکی آرتامیس | طراحی لبخند، ایمپلنت و لمینیت در تهران';
  }, []);

  return (
    <div dir="rtl" lang="fa" className="min-h-screen bg-page font-sans text-ink antialiased pb-[4.75rem] lg:pb-0">
      <a
        href="#booking"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-xl focus:bg-plum focus:text-white focus:px-5 focus:py-3 focus:font-bold"
      >
        رفتن به رزرو نوبت
      </a>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Treatments />
        <Gallery />
        <Testimonials />
        <Faq />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}
