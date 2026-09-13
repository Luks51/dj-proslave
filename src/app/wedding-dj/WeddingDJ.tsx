import React, { useEffect, useRef } from 'react';
import './WeddingDJ.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroWeddingImg from '../../assets/images/hero-wedding-dj.jpg';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faHeart, 
  faMusic, 
  faStar, 
  faGlassCheers,
  faPhone,
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { getSeoMeta } from '../utils/seo';
import {
  FloatingEdgeVinyl,
  FloatingHeadphones,
  FloatingMusicNote,
  EdgeSparkle,
  StageLaserBeams,
  AudioFrequencyWaveform,
  CelebrationPartySparkles
} from '../general/ambient-background/AmbientBackground';

export function meta() {
  return getSeoMeta(
    "dj-za-vjencanja",
    "DJ za Vjenčanja | Vaš Savršen Dan uz Najbolju Glazbu",
    "Profesionalni DJ za vjenčanja pruža nezaboravnu atmosferu, prilagođen glazbeni repertoar i vrhunsku rasvjetu za vaš poseban dan.",
    "dj za vjenčanje, glazba za svadbu, dj vjenčanja, dj rasvjeta"
  );
}

function WeddingDJ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://djproslave.com/dj-za-vjencanja/#service`,
    "name": "DJ za Vjenčanja",
    "provider": {
      "@type": "LocalBusiness",
      "@id": `https://djproslave.com/#business`,
      "name": "DJ Proslave",
      "image": "https://djproslave.com/logo.png"
    },
    "description": "Profesionalni DJ za vjenčanja pruža nezaboravnu atmosferu i prilagođen glazbeni repertoar.",
    "areaServed": "Hrvatska",
    "url": "https://djproslave.com/dj-za-vjencanja/",
    "category": "Wedding Entertainment"
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
      {/* 1. HERO BANNER - VJENČANJA */}
      <section ref={heroRef} className='relative pt-36 pb-16 md:pt-48 md:pb-24 flex flex-col items-center justify-center overflow-hidden border-b border-white/10'>
        {/* Pozadinska slika s gradijentom */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center md:bg-[center_35%]" 
            style={{ backgroundImage: `url(${heroWeddingImg})` }}
          />
          {/* Subtle multi-stop dark gradient overlay for optimal text contrast and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/85 via-[#050508]/75 to-[#050508]" />
          {/* Warm romantic gold ambient glow */}
          <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[color:var(--color-accent-gold)] opacity-[0.09] blur-[160px] rounded-full pointer-events-none' />
        </motion.div>

        {/* In-section floating edge DJ elements */}
        <div className='hidden xl:flex absolute left-4 2xl:left-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-1 pointer-events-none'>
          <FloatingEdgeVinyl size={52} />
          <FloatingMusicNote type="double" />
        </div>
        <div className='hidden xl:flex absolute right-4 2xl:right-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-2 pointer-events-none'>
          <FloatingHeadphones />
          <EdgeSparkle size={18} />
          <FloatingMusicNote type="single" />
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
                500+ odrađenih vjenčanja
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl mb-6 leading-[1.1]'
            >
              DJ za Vjenčanja i Svadbe <br />
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
              Profesionalni DJ za svadbe i vjenčanja s više od 15 godina iskustva i 500+ svadbi diljem Hrvatske — Zagreb, Dalmacija, Istra i Slavonija.
            </motion.p>

            {/* Features / Service Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-8"
            >
              {[
                'Low fog za prvi ples',
                'Uplighting rasvjeta',
                'Violina uživo',
                'Saksofon',
                'Sparklers / prskalice',
                'Photobooth',
                'LED Dance Floor',
                'Bežični mikrofoni'
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 text-xs sm:text-sm font-medium backdrop-blur-sm hover:border-[color:var(--color-accent-gold)]/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

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
                <span>500+ vjenčanja</span>
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
                  500+
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium text-center">
                  Vjenčanja
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
                  Zadovoljnih mladenaca
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - Fokus na mladence */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Dynamic Concert Stage Laser Beams */}
        <StageLaserBeams />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Kartica 1: Potpuno osobni pristup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-[color:var(--color-accent-gold)]/30 transition-colors duration-500 group shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faHeart} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">1 na 1 Pristup</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-0 mt-auto">
                Slušamo Vašu viziju. Prije velikog dana sjedamo zajedno i dogovaramo svaki detalj kako bismo osigurali da playlista savršeno odražava Vaš karakter i glazbeni ukus.
              </p>
            </motion.div>

            {/* Kartica 2: Nezaboravni trenutci */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-[color:var(--color-accent-gold)]/30 transition-colors duration-500 group shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <FontAwesomeIcon icon={faStar} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Magični Trenuci</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-0 mt-auto">
                Ulazak u salu, rezanje torte, prvi ples... Svaki od ovih ključnih trenutaka zaslužuje epsku glazbenu pozadinu. Mi ćemo se pobrinuti za savršen "tajming".
              </p>
            </motion.div>

            {/* Kartica 3: Zabava za sve */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#161616] to-[#0a0a0a] p-10 rounded-3xl border border-[color:var(--color-accent-gold)]/20 hover:border-[color:var(--color-accent-gold)]/50 transition-colors duration-500 group shadow-2xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-accent-gold)]/10 blur-2xl rounded-full"></div>
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-gold)]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <FontAwesomeIcon icon={faMusic} className="text-[color:var(--color-accent-gold)] text-xl" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 relative z-10">Zabava za sve generacije</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-0 mt-auto relative z-10">
                Naš je cilj spojiti različite generacije na plesnom podiju. Bez obzira na godine Vaših uzvanika, kreiramo miks zbog kojeg nitko neće sjediti.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. TIMELINE VJENČANJA - Posebna pažnja svakom detalju */}
      <section className="py-24 bg-[#0a0b10]/40 backdrop-blur-sm border-y border-white/5 relative overflow-hidden">
        {/* Dynamic Digital Audio Frequency Waveform */}
        <AudioFrequencyWaveform className="opacity-45" />
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            <div className="w-full lg:w-5/12 relative">
              <div className="sticky top-32 text-center lg:text-left">
                <FontAwesomeIcon icon={faGlassCheers} className="text-[color:var(--color-accent-gold)] text-4xl mb-6 opacity-80" />
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-snug">Uz Vas od prvog <br /><span className="font-semibold italic text-[color:var(--color-accent-gold)]">do zadnjeg takta.</span></h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Vaš dan nije samo zabava – to je niz pažljivo isplaniranih trenutaka prepunih emocija. Naša uloga je osjetiti atmosferu u dvorani i isporučiti pravu pjesmu u pravom trenutku.
                </p>
                <p className="text-gray-400 font-light leading-relaxed">
                  Znamo da ste uložili mjesece u planiranje. Prepustite nama glazbenu direkciju i dopustite si da napokon odahnete, plešete i uživate u svom danu iz snova.
                </p>
              </div>
            </div>

            {/* Timeline lista (Koraci) */}
            <div className="w-full lg:w-7/12 flex flex-col gap-10">
              {/* Korak 1 */}
              <div className="flex gap-6 border border-white/10 p-8 rounded-3xl bg-white/[0.02]">
                <div className="text-3xl font-black text-white/10 pt-1">01</div>
                <div>
                  <h4 className="text-xl text-white font-medium mb-2">Elegantno Okupljanje</h4>
                  <p className="text-gray-400 font-light">
                    Kroz uvodni dio večeri stvaramo opuštenu i profinjenu atmosferu. Suptilna pozadinska glazba uz koju Vaši gosti mogu razgovarati, nazdravljati i uživati u hrani.
                  </p>
                </div>
              </div>

              {/* Korak 2 */}
              <div className="flex gap-6 border border-[color:var(--color-accent-gold)]/20 p-8 rounded-3xl bg-gradient-to-r from-[color:var(--color-accent-gold)]/10 to-transparent relative overflow-hidden">
                <div className="text-3xl font-black text-[color:var(--color-accent-gold)]/30 pt-1">02</div>
                <div className="relative z-10">
                  <h4 className="text-xl text-[color:var(--color-accent-gold)] font-medium mb-2">Vaš Spektakularni Ulazak</h4>
                  <p className="text-gray-300 font-light">
                    Trenutak kada ulazite u salu kao vjenčani par mora biti besprijekoran. Tu dižemo energiju na maksimum i stvaramo trenutak za pamćenje prije Prvog plesa.
                  </p>
                </div>
              </div>

              {/* Korak 3 */}
              <div className="flex gap-6 border border-white/10 p-8 rounded-3xl bg-white/[0.02]">
                <div className="text-3xl font-black text-white/10 pt-1">03</div>
                <div>
                  <h4 className="text-xl text-white font-medium mb-2">Ludilo na Podiju</h4>
                  <p className="text-gray-400 font-light">
                    Kada formalnosti završe, pretvaramo Vašu salu u najbolji klub u gradu. Neprekidan miks omiljenih hitova prilagođen isključivo Vašim uputama drži podij punim do jutra.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SNAŽAN CTA (Osobni kontakt) */}
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
              Vaš datum je <span className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]">poseban.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light">
              Datumi se brzo pune. Javite nam se na vrijeme, rezervirajte svoj dan i krenimo zajedno planirati glazbu za Vaše vjenčanje iz snova.
            </p>
            <Link to='/kontakt/' onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black font-extrabold uppercase tracking-[0.15em] text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(194,167,90,0.3)] rounded-full">
              Provjerite Dostupnost
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default WeddingDJ;
