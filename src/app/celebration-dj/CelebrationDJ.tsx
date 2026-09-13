import React, { useEffect, useRef } from 'react';
import './CelebrationDJ.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroCelebrationImg from '../../assets/images/hero-celebration-dj.jpg';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faGlassCheers,
  faMusic,
  faBolt,
  faVolumeHigh,
  faStar,
  faPhone,
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { getSeoMeta } from '../utils/seo';
import {
  FloatingEdgeVinyl,
  VinylEdgePeeker,
  FloatingHeadphones,
  FloatingMusicNote,
  EdgeSparkle,
  StageLaserBeams,
  AudioFrequencyWaveform,
  CelebrationPartySparkles
} from '../general/ambient-background/AmbientBackground';

export function meta() {
  return getSeoMeta(
    "dj-za-proslave",
    "DJ za Proslave | Rođendani i Privatni Party | DJ Proslave",
    "Osigurajte najbolju zabavu za vaš rođendan, godišnjicu ili privatni party. Iskusni DJ, vrhunska glazba i odlična atmosfera za sve generacije.",
    "dj za rođendan, dj za proslave, glazba za party, privatni dj"
  );
}

function CelebrationDJ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://djproslave.com/dj-za-proslave/#service`,
    "name": "DJ za Proslave",
    "provider": {
      "@type": "LocalBusiness",
      "@id": `https://djproslave.com/#business`,
      "name": "DJ Proslave",
      "image": "https://djproslave.com/logo.png"
    },
    "description": "Osigurajte najbolju zabavu za vaš rođendan, godišnjicu ili privatni party.",
    "areaServed": "Hrvatska",
    "url": "https://djproslave.com/dj-za-proslave/",
    "category": "Event Entertainment"
  };

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-[#050508]/40 backdrop-blur-sm min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* 1. HERO BANNER - PROSLAVE */}
      <section ref={heroRef} className='relative pt-36 pb-16 md:pt-48 md:pb-24 flex flex-col items-center justify-center overflow-hidden border-b border-white/10'>
        {/* Pozadinska slika s gradijentom */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-[center_30%]"
            style={{ backgroundImage: `url(${heroCelebrationImg})` }}
          />
          {/* Subtle multi-stop dark gradient overlay for optimal text contrast and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/85 via-[#050508]/75 to-[#050508]" />
          <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[color:var(--color-accent-gold)] opacity-[0.09] blur-[160px] rounded-full pointer-events-none' />
        </motion.div>

        {/* In-section floating edge DJ elements */}
        <div className='hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 flex-col items-start animate-edge-float-1 pointer-events-none'>
          <VinylEdgePeeker side="left" />
          <FloatingMusicNote type="single" className="ml-4 mt-2" />
        </div>
        <div className='hidden xl:flex absolute right-4 2xl:right-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-2 pointer-events-none'>
          <FloatingHeadphones />
          <FloatingEdgeVinyl size={50} />
          <EdgeSparkle size={18} />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

            {/* Top Performance Social Proof Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md mb-6 shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
            >
              <div className="flex text-[color:var(--color-accent-gold)] text-xs gap-0.5">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <span className="text-gray-200 text-xs sm:text-sm font-medium">
                400+ odrađenih proslava
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl mb-6 leading-[1.1]'
            >
              DJ za Proslave i Rođendane <br />
              <span className='italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] via-[#fff1b8] to-[color:var(--color-accent-gold)]'>
                Hrvatska & Zagreb
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Profesionalni DJ za rođendane, godišnjice, punoljetnosti i privatne zabave s više od 15 godina iskustva i 400+ proslava diljem Hrvatske — kreiramo nezaboravnu atmosferu i klupski party ritam.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto"
            >
              <Link
                to='/kontakt/'
                onClick={() => window.scrollTo(0, 0)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[color:var(--color-accent-gold)] via-[#f7e096] to-[color:var(--color-accent-gold)] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(194,167,90,0.35)]"
              >
                Zatražite ponudu
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
              <a
                href="tel:+3850989582676"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black/40 hover:bg-white/10 border border-white/20 hover:border-[color:var(--color-accent-gold)]/50 text-white font-bold uppercase tracking-wider text-xs sm:text-sm backdrop-blur-md transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="text-[color:var(--color-accent-gold)]" />
                Nazovite nas
              </a>
            </motion.div>

            {/* Quick Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-300 mb-12"
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-[color:var(--color-accent-gold)]" />
                <span>Cijela Hrvatska</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-[color:var(--color-accent-gold)]" />
                <span>400+ proslava</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-[color:var(--color-accent-gold)]" />
                <span>15+ godina iskustva</span>
              </div>
            </motion.div>

            {/* Bottom Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10"
            >
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-1">
                  400+
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium text-center">
                  Proslava i tuluma
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-1">
                  15+
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium text-center">
                  Godina iskustva
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[color:var(--color-accent-gold)] tracking-tight mb-1">
                  5.0
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium text-center">
                  Prosječna ocjena
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-1">
                  100%
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium text-center">
                  Rasplesanih gostiju
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - Ključne Prednosti */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Dynamic Digital Audio Frequency Waveform */}
        <AudioFrequencyWaveform className="opacity-45" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Kartica 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-[color:var(--color-accent-gold)]/30 transition-colors duration-500 group shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faMusic} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Savršen Odabir Glazbe</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-0 mt-auto">
                Svaki detalj dogovaramo s vama – od glazbenih žanrova do specifičnih pjesama. Spajamo Vaš glazbeni ukus s potrebama Vaših gostiju za idealan podij.
              </p>
            </motion.div>

            {/* Kartica 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-[color:var(--color-accent-gold)]/30 transition-colors duration-500 group shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faBolt} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Nevjerojatna Energija</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-0 mt-auto">
                Neovisno o tome želite li elegantnu i opuštenu pozadinsku glazbu ili dinamičan, lud plesni podij do zore – mi donosimo i diktiramo željenu energiju.
              </p>
            </motion.div>

            {/* Kartica 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#161616] to-[#0a0a0a] p-10 rounded-3xl border border-[color:var(--color-accent-gold)]/20 hover:border-[color:var(--color-accent-gold)]/50 transition-colors duration-500 group shadow-2xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-accent-gold)]/10 blur-2xl rounded-full"></div>
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <FontAwesomeIcon icon={faVolumeHigh} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Premium Oprema</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-0 mt-auto relative z-10">
                Naš tim koristi isključivo profesionalnu audio i rasvjetnu opremu, osiguravajući da svaki trenutak vaše proslave bude popraćen vrhunskim, kristalnim zvukom.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. VRSTE PROSLAVA - Velika tipografska traka */}
      <section className="py-24 bg-[#0a0b10]/40 backdrop-blur-sm border-y border-white/5 relative overflow-hidden">
        {/* Dynamic Concert Stage Laser Beams */}
        <StageLaserBeams />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

            <div className="w-full md:w-1/3 text-center md:text-left">
              <FontAwesomeIcon icon={faGlassCheers} className="text-[color:var(--color-accent-gold)] text-4xl mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Što sve <br /><span className="font-semibold text-[color:var(--color-accent-gold)]">slavimo?</span></h2>
              <p className="text-gray-400 font-light">
                Od najmanjih privatnih proslava do ogromnih zabava za stotine uzvanika – tu smo za Vas.
              </p>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                <span className="text-2xl font-bold text-white/20">01</span>
                <h4 className="text-xl text-white font-medium tracking-wide">Rođendani</h4>
              </div>
              <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                <span className="text-2xl font-bold text-white/20">02</span>
                <h4 className="text-xl text-white font-medium tracking-wide">Godišnjice</h4>
              </div>
              <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                <span className="text-2xl font-bold text-white/20">03</span>
                <h4 className="text-xl text-white font-medium tracking-wide">Privatni partyji</h4>
              </div>
              <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                <span className="text-2xl font-bold text-white/20">04</span>
                <h4 className="text-xl text-white font-medium tracking-wide">Krstitke i obitelj</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SNAŽAN CTA (Call to Action) */}
      <section className="py-32 relative overflow-hidden text-center">
        {/* Climax Celebration Energy Aura & Pyro Sparkles */}
        <CelebrationPartySparkles />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[color:var(--color-accent-gold)] opacity-[0.08] blur-[120px] rounded-full z-0 pointer-events-none'></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container relative z-10"
        >
          <div className="max-w-4xl mx-auto border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Spremni za <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]">zabavu?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light">
              Dopustite nam da vašu proslavu podignemo na novu razinu. Zatražite termin već danas i prepustite brigu o atmosferi nama.
            </p>
            <Link to='/kontakt/' onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black font-extrabold uppercase tracking-[0.15em] text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(194,167,90,0.3)] rounded-full">
              Rezervirajte Svoj Termin
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default CelebrationDJ;
