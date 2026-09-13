import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './About.scss';
import aboutImg from '../../assets/images/dj-playing-music-mixer.webp'
import aboutHeroImg from '../../assets/images/closeup-dj-working-blue-light.webp'
import performerImg from '../../assets/images/performer01.webp'
import { motion, MotionValue, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeadphones, faSliders, faArrowRight, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { getSeoMeta } from '../utils/seo';
import {
  FloatingEdgeVinyl,
  EdgeVuMeter,
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
    "o-nama",
    "O nama | DJ Proslave",
    "Višegodišnje iskustvo u pružanju vrhunske glazbene zabave. Upoznajte naš tim profesionalnih DJ-eva za vaše vjenčanje ili event.",
    "o nama, dj proslave, iskustvo dj, profesionalni dj"
  );
}

const performersData = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: `Izvođač ${i + 1}`,
  shortDesc: "Energičan pristup i nevjerojatan osjećaj za ritam koji drži publiku na nogama.",
  fullDesc: "S godinama profesionalnog iskustva, ovaj izvođač specijalizirao se za stvaranje savršenog miksa modernih hitova i vječnih klasika. Njegov jedinstveni stil garantira nezaboravnu zabavu, a pristup svakom eventu je maksimalno personaliziran prema vašim željama. Od intimnih proslava do velikih svadbi, uvijek pronalazi savršenu glazbenu formulu."
}));

function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://djproslave.com/o-nama/#person`,
    "name": "DJ Proslave Tim",
    "jobTitle": "Profesionalni DJ",
    "description": "Višegodišnje iskustvo u pružanju vrhunske glazbene zabave. Upoznajte naš tim profesionalnih DJ-eva za vaše vjenčanje ili event.",
    "url": "https://djproslave.com/o-nama/",
    "image": "https://djproslave.com/logo.png",
    "knowsAbout": ["DJ-iranje", "Zabava za vjenčanja", "Organizacija događaja", "Oblikovanje zvuka"],
    "sameAs": [
      "https://www.instagram.com/dj.proslave",
      "https://www.facebook.com/DJProslaveVjencanja/",
      "https://www.tiktok.com/@dj.proslave",
      "https://www.youtube.com/@dj.proslave"
    ]
  };

  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedPerformerModal, setSelectedPerformerModal] = useState<typeof performersData[0] | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    if (!selectedPerformerModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPerformerModal(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPerformerModal]);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth } = scrollContainerRef.current;
      if (scrollLeft <= 10) {
        scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: -344, behavior: 'smooth' });
      }
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: 344, behavior: 'smooth' });
      }
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleScrollRight();
    }, 4000);
    return () => clearInterval(interval);
  }, [scrollProgress]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      // Vrijednost od 0.0 do 1.0 koja predstavlja koliko smo skrolali
      const progress = scrollLeft / maxScroll;
      setScrollProgress(progress);
    }
  };

  const { scrollYProgress } = useScroll();

  function useParallax(value: MotionValue<number>) {
    return useTransform(value, [0, 1], ['0%', '100%']);
  }

  const y = useParallax(scrollYProgress);
  
  return (
    <div className="bg-[#050508]/40 backdrop-blur-sm w-full max-w-[100vw] overflow-x-hidden">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      {/* 1. Editorial Hero Section */}
      <section className='relative min-h-[60vh] flex items-center pt-24 pb-12 overflow-hidden border-b border-white/5'>
        <div className="absolute top-0 right-0 w-full md:w-[60%] h-full opacity-30 md:opacity-40">
           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-[#050508]/50 to-[#050508] z-10"></div>
           <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${aboutHeroImg})` }}></div>
        </div>
        
        <div className='container relative z-20 pt-12 md:pt-0'>
          <motion.div 
            initial={{ opacity: 1, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='max-w-3xl'
          >
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-16 h-px bg-[color:var(--color-accent-gold)]'></div>
              <span className='text-[color:var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs font-semibold'>Upoznajte naš tim</span>
            </div>
            
            <h1 className='text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-wide text-white leading-[1.1] mb-8'>
              Kreatori <br />
              <span className='font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>savršene</span> <br />
              atmosfere.
            </h1>
            
            <p className='text-gray-400 text-lg md:text-xl font-light max-w-xl leading-relaxed'>
              Mi ne puštamo samo glazbu. Mi gradimo emocije, stvaramo atmosferu i trenutke koji ostaju u sjećanju.
            </p>
          </motion.div>
        </div>

        {/* In-section floating edge DJ elements */}
        <div className='hidden xl:flex absolute left-4 2xl:left-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-1 pointer-events-none'>
          <FloatingEdgeVinyl size={50} />
          <FloatingMusicNote type="double" />
        </div>
        <div className='hidden xl:flex absolute right-4 2xl:right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-2 pointer-events-none'>
          <FloatingHeadphones />
          <EdgeSparkle size={18} />
        </div>
      </section>

      {/* 2. Asymmetric Story Section */}
      <section className='py-24 md:py-40 relative overflow-hidden bg-[#050508]/40 backdrop-blur-sm'>
        {/* Concert Stage Laser Beams */}
        <StageLaserBeams />

        <div className="container">
          <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-0'>
            
            {/* Image Side */}
            <div className='w-full lg:w-7/12 relative z-10'>
               <motion.div 
                  initial={{ opacity: 1, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm relative"
               >
                 <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-700 hover:opacity-0 pointer-events-none"></div>
                 <img src={aboutImg} alt='DJ na poslu' className='w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700' />
               </motion.div>
               {/* Decorative accent */}
               <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[color:var(--color-accent-gold)] z-0 hidden md:block"></div>
            </div>

            {/* Text Overlapping Block */}
            <motion.div 
              initial={{ opacity: 1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='w-full lg:w-6/12 relative z-20 lg:-ml-24'
            >
              <div className='bg-[#0f1016] p-8 md:p-16 rounded-sm border border-white/5 shadow-2xl relative overflow-hidden'>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--color-accent-gold)]/5 blur-3xl rounded-full pointer-events-none"></div>
                
                <h3 className='text-3xl md:text-4xl mb-8 font-light tracking-wide text-white'>
                  Naša Priča
                </h3>

                <div className="space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
                  <p>
                    Mi smo strastveni tim DJ-eva i glazbenika posvećen stvaranju nezaboravnih glazbenih iskustava. Svaki član našeg tima ima jedinstveni stil, bogato iskustvo i spremnost ispuniti svaku vašu glazbenu želju.
                  </p>
                  <p>
                    Bez obzira na vrstu događaja, surađujemo s vama kako bismo osigurali da glazba bude upravo onakva kakvu ste zamislili. Pružamo potpunu fleksibilnost u odabiru glazbenih stilova i ključnih trenutaka koji su vam najvažniji.
                  </p>
                  <p>
                    Naš cilj je jasan: želimo da vaša publika uživa, pleše do ranih jutarnjih sati i sa sobom ponese prekrasne uspomene!
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 border-t border-white/5 bg-[#0a0b10] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10'>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex flex-col items-center justify-center py-6 group'
            >
              <div className='text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#8a763d] mb-4 group-hover:scale-110 transition-transform duration-500'>5+</div>
              <div className='text-gray-400 font-medium uppercase tracking-[0.2em] text-xs md:text-sm'>godina iskustva</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex flex-col items-center justify-center py-6 group'
            >
              <div className='text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#8a763d] mb-4 group-hover:scale-110 transition-transform duration-500'>500+</div>
              <div className='text-gray-400 font-medium uppercase tracking-[0.2em] text-xs md:text-sm'>uspješnih nastupa</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='flex flex-col items-center justify-center py-6 group'
            >
              <div className='text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#8a763d] mb-4 group-hover:scale-110 transition-transform duration-500'>100%</div>
              <div className='text-gray-400 font-medium uppercase tracking-[0.2em] text-xs md:text-sm text-center'>Zadovoljnih Klijenata</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Minimalist Philosophy Section */}
      <section className='py-24 bg-[#0a0b10]/40 backdrop-blur-sm border-t border-b border-white/5 relative overflow-hidden'>
        {/* Dynamic Digital Audio Frequency Waveform */}
        <AudioFrequencyWaveform />

        <div className="container">
          <div className='mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left'>
            <h3 className='text-4xl md:text-5xl font-light tracking-wide text-white leading-tight'>
              Zašto odabrati <br /> <span className='font-semibold text-[color:var(--color-accent-gold)]'>nas?</span>
            </h3>
            <p className='text-gray-400 font-light max-w-md'>
              Vjerujemo da je glazba temelj svakog događaja. Naš pristup se temelji na tri jednostavna, ali ključna stupa.
            </p>
          </div>

          <div className='flex flex-col gap-8'>
            {/* Row 1 */}
            <motion.div 
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-8 bg-transparent hover:bg-white/5 border border-white/5 transition-colors duration-300 group'
            >
              <div className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#0a0b10] w-16'>
                01
              </div>
              <div className='flex-1'>
                <h4 className='text-2xl text-white font-medium mb-2 group-hover:text-[color:var(--color-accent-gold)] transition-colors'>Kvaliteta</h4>
                <p className='text-gray-400 font-light max-w-2xl'>Naš fokus je na beskompromisnoj kvaliteti, od vrhunske opreme do izbora glazbe. Svaki detalj zvuka i rasvjete pažljivo je odabran za savršen doživljaj.</p>
              </div>
              <FontAwesomeIcon icon={faStar} className='text-gray-600 text-3xl group-hover:text-[color:var(--color-accent-gold)] transition-colors hidden md:block' />
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-8 bg-transparent hover:bg-white/5 border border-white/5 transition-colors duration-300 group'
            >
              <div className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#0a0b10] w-16'>
                02
              </div>
              <div className='flex-1'>
                <h4 className='text-2xl text-white font-medium mb-2 group-hover:text-[color:var(--color-accent-gold)] transition-colors'>Profesionalnost</h4>
                <p className='text-gray-400 font-light max-w-2xl'>Poštujemo Vaše vrijeme i dogovore. Naš tim na svaku proslavu dolazi pripremljen, elegantan i spreman odgovoriti na sve tehničke i glazbene izazove.</p>
              </div>
              <FontAwesomeIcon icon={faHeadphones} className='text-gray-600 text-3xl group-hover:text-[color:var(--color-accent-gold)] transition-colors hidden md:block' />
            </motion.div>

            {/* Row 3 */}
            <motion.div 
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-8 bg-transparent hover:bg-white/5 border border-white/5 transition-colors duration-300 group'
            >
              <div className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[color:var(--color-accent-gold)] to-[#0a0b10] w-16'>
                03
              </div>
              <div className='flex-1'>
                <h4 className='text-2xl text-white font-medium mb-2 group-hover:text-[color:var(--color-accent-gold)] transition-colors'>Personalizacija</h4>
                <p className='text-gray-400 font-light max-w-2xl'>Ne postoji univerzalna playlista za svaki događaj. Glazbu prilagođavamo vašim željama, publici, prostoru i energiji večeri. Pratimo atmosferu i znamo kada je vrijeme za promjenu ritma, podizanje energije ili jednostavno pustiti da trenutak traje.</p>
              </div>
              <FontAwesomeIcon icon={faSliders} className='text-gray-600 text-3xl group-hover:text-[color:var(--color-accent-gold)] transition-colors hidden md:block' />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Marquee Section */}
      <section className='py-20 md:py-32 relative overflow-hidden bg-[#050508] border-t border-white/5'>
        {/* Subtle background glow */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[150px] bg-[color:var(--color-accent-gold)] opacity-[0.04] blur-[80px] rounded-full z-0 pointer-events-none'></div>

        <div className='container mb-12 md:mb-20 relative z-10'>
          <h3 className='text-2xl md:text-4xl font-light tracking-wide text-gray-400 m-0 text-center uppercase drop-shadow-md'>
            Glazba za svaki <span className='text-white font-medium'>ukus</span>
          </h3>
          <p className='text-center text-gray-400 mt-4 text-lg md:text-xl font-light'>
            Od domaćih hitova do svjetskih klasika.
          </p>
          <div className='w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[color:var(--color-accent-gold)] to-transparent mx-auto mt-6 rounded-full opacity-70'></div>
        </div>

        <div className='w-full max-w-[100vw] overflow-hidden flex relative z-10' style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)' }}>
          <motion.div
            className='flex whitespace-nowrap'
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className='flex items-center'>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '1.5px #d1d5db' }}>Narodno</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>Cro Trash</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '2px var(--color-accent-gold)' }}>Rock</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>Pop</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '1.5px #d1d5db' }}>Disco</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>R&amp;B</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Opposite direction scroll row */}
        <div className='w-full max-w-[100vw] overflow-hidden flex relative z-10 mt-6 md:mt-10' style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)' }}>
          <motion.div
            className='flex whitespace-nowrap'
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", repeat: Infinity, duration: 45 }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className='flex items-center'>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '1.5px #d1d5db' }}>EDM</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>Latino</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '2px var(--color-accent-gold)' }}>Balkatone</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'>Ex-yu</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
                <span className='text-5xl md:text-7xl font-black uppercase tracking-wider mx-6 md:mx-12 text-transparent' style={{ WebkitTextStroke: '1.5px #d1d5db' }}>Strani hitovi</span>
                <span className='text-[color:var(--color-accent-gold)] text-2xl md:text-3xl mx-4 md:mx-6 opacity-70'>✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Performers Section */}
      <section className='py-24 md:py-32 bg-[#0a0b10]/40 backdrop-blur-sm relative overflow-hidden border-t border-white/5'>
        {/* In-section floating edge DJ elements */}
        <div className='hidden xl:flex absolute left-4 2xl:left-8 top-1/3 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-2 pointer-events-none'>
          <FloatingHeadphones />
          <FloatingMusicNote type="beam" />
        </div>
        <div className='hidden xl:flex absolute right-4 2xl:right-8 top-1/3 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-1 pointer-events-none'>
          <FloatingEdgeVinyl size={48} />
          <EdgeSparkle size={18} />
        </div>

        <div className='container'>
          <div className='mb-12 md:mb-16 text-center'>
            <h3 className='text-3xl md:text-5xl font-light tracking-wide text-white mb-4'>
              Upoznajte ljude koji <br className="hidden md:block" />
              <span className='font-semibold text-[color:var(--color-accent-gold)]'>stvaraju atmosferu</span>
            </h3>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-[color:var(--color-accent-gold)] to-transparent mx-auto rounded-full opacity-70'></div>
          </div>

          {/* Horizontal scroll container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className='w-full overflow-x-auto overflow-y-hidden pb-8 pt-4 px-4 -mx-4 snap-x snap-mandatory flex gap-6 md:gap-8' 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Hiding native scrollbar via inline styles above, for webkit we use custom css or just leave it */}
            <style>{`
              .hide-scroll::-webkit-scrollbar { display: none; }
            `}</style>
            
            {performersData.map((p) => (
              <motion.div 
                key={p.id}
                className='min-w-[280px] md:min-w-[320px] max-w-[320px] snap-center bg-[#0d0f16] border border-white/5 rounded-2xl overflow-hidden flex flex-col group relative shrink-0 shadow-lg hover:shadow-2xl hover:border-white/10 transition-all duration-500'
              >
                <div className='h-72 overflow-hidden relative shrink-0'>
                  <img src={performerImg} alt={p.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0d0f16] via-[#0d0f16]/40 to-transparent opacity-90 pointer-events-none'></div>
                </div>
                
                <div className='p-6 flex-1 flex flex-col bg-[#0d0f16] relative z-10 -mt-16'>
                  <h4 className='text-2xl font-bold text-white mb-1 drop-shadow-md'>{p.name}</h4>
                  <p className='text-[color:var(--color-accent-gold)] text-xs uppercase tracking-widest mb-4'>DJ Izvođač</p>
                  
                  <div className='text-gray-400 text-sm mb-6 leading-relaxed'>
                    <p>{p.shortDesc}</p>
                  </div>
                  
                  <div className='mt-auto pt-4 border-t border-white/5'>
                    <button 
                      onClick={() => setSelectedPerformerModal(p)}
                      className='text-[color:var(--color-accent-gold)] text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2 group/btn'
                    >
                      Saznajte više
                      <FontAwesomeIcon icon={faArrowRight} className='text-xs group-hover/btn:translate-x-1 transition-transform' />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Custom Slider Navigation */}
          <div className='flex items-center justify-center gap-4 mt-8'>
            <button 
              onClick={handleScrollLeft}
              className='w-12 h-12 rounded-xl bg-[#0f1016] border border-white/10 flex items-center justify-center text-[color:var(--color-accent-gold)] hover:bg-[color:var(--color-accent-gold)] hover:text-black transition-all duration-300'
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            {/* Scroll Progress Bar */}
            <div className='relative w-48 md:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mx-2'>
              <motion.div 
                className='absolute top-0 bottom-0 bg-[color:var(--color-accent-gold)] rounded-full'
                animate={{ 
                  width: '25%', 
                  left: `${scrollProgress * 75}%` 
                }}
                transition={{ ease: "linear", duration: 0.1 }}
              ></motion.div>
            </div>

            <button 
              onClick={handleScrollRight}
              className='w-12 h-12 rounded-xl bg-[#0f1016] border border-white/10 flex items-center justify-center text-[color:var(--color-accent-gold)] hover:bg-[color:var(--color-accent-gold)] hover:text-black transition-all duration-300'
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

        </div>
      </section>

      {/* Performer Modal (Rendered via Portal to document.body to avoid parent backdrop-filter/transform containing block) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedPerformerModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md'
              onClick={() => setSelectedPerformerModal(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className='bg-[#0a0b10] border border-white/10 rounded-2xl overflow-hidden max-w-3xl w-full flex flex-col md:flex-row relative shadow-[0_30px_60px_rgba(0,0,0,0.5)]'
                onClick={e => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedPerformerModal(null)}
                  className='absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[color:var(--color-accent-gold)] text-white hover:text-black rounded-full flex items-center justify-center transition-colors'
                  aria-label="Zatvori"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                
                <div className='w-full md:w-2/5 h-64 md:h-auto relative'>
                  <img src={performerImg} alt={selectedPerformerModal.name} className='w-full h-full object-cover' />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent md:bg-gradient-to-r'></div>
                </div>
                
                <div className='p-8 md:p-12 flex-1 flex flex-col justify-center'>
                  <div className='w-12 h-1 bg-[color:var(--color-accent-gold)] mb-6 rounded-full'></div>
                  <h3 className='text-3xl font-bold text-white mb-1'>{selectedPerformerModal.name}</h3>
                  <p className='text-[color:var(--color-accent-gold)] font-medium uppercase tracking-widest text-xs mb-6'>DJ Izvođač</p>
                  <p className='text-gray-300 leading-relaxed'>
                    {selectedPerformerModal.fullDesc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* 6. Full-width Solid Gold CTA */}
      <section className='py-24 md:py-32 bg-[#050508]/40 backdrop-blur-sm relative overflow-hidden'>
        {/* Climax Celebration Party Sparkles & Energy Aura */}
        <CelebrationPartySparkles />

        <div className='container'>
          <div className='flex flex-col md:flex-row justify-between items-center bg-[color:var(--color-accent-gold)] p-12 md:p-16 rounded-sm relative overflow-hidden'>
            <div className="absolute right-0 top-0 w-[60%] h-full bg-white opacity-20 skew-x-[30deg] translate-x-20 pointer-events-none hidden md:block"></div>
            
            <div className='relative z-10 mb-10 md:mb-0 text-center md:text-left'>
              <h2 className='text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight leading-tight'>
                Spremni za <br className="hidden md:block" />savršenu zabavu?
              </h2>
              <p className='text-black/80 text-lg md:text-xl font-medium max-w-md'>
                Kontaktirajte nas danas i osigurajte vrhunskog DJ-a.
              </p>
            </div>
            
            <div className='relative z-10 flex gap-4 w-full md:w-auto flex-col sm:flex-row'>
              <Link 
                to='/kontakt/'
                onClick={() => window.scrollTo(0, 0)} 
                className='px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-4 group shadow-2xl'
              >
                Kontaktirajte nas <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
