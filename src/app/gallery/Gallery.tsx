import React, { useEffect, useState, useCallback } from 'react';
import './Gallery.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
  faMaximize
} from '@fortawesome/free-solid-svg-icons';
import aboutHeroImg from '../../assets/images/closeup-dj-working-blue-light.webp'
import { getSeoMeta } from '../utils/seo';
import {
  FloatingEdgeVinyl,
  EdgeVuMeter,
  VinylEdgePeeker,
  FloatingHeadphones,
  FloatingMusicNote,
  EdgeSparkle,
  StageLaserBeams,
  AudioFrequencyWaveform
} from '../general/ambient-background/AmbientBackground';

export function meta() {
  return getSeoMeta(
    "galerija",
    "Galerija | DJ Proslave",
    "Pogledajte fotografije i video zapise s naših nastupa. Uhvaćeni trenuci vrhunske atmosfere s vjenčanja, korporativnih evenata i privatnih proslava.",
    "galerija, slike dj, video dj, nastupi, dj proslave"
  );
}

function Gallery() {
  const [listOfImages] = useState([
    { name: "gallery01", alt: 'Galerija 1' },
    { name: "gallery02", alt: 'Galerija 2' },
    { name: "gallery03", alt: 'Galerija 3' },
    { name: "gallery04", alt: 'Galerija 4' },
    { name: "gallery05", alt: 'Galerija 5' },
    { name: "gallery06", alt: 'Galerija 6' },
    { name: "gallery07", alt: 'Galerija 7' },
    { name: "gallery08", alt: 'Galerija 8' },
    { name: "gallery09", alt: 'Galerija 9' },
    { name: "gallery10", alt: 'Galerija 10' },
    { name: "gallery11", alt: 'Galerija 11' },
    { name: "gallery12", alt: 'Galerija 12' }
  ]);

  const [listOfVideos] = useState([
    { src: "https://www.youtube.com/embed/9lpM63Vg3U4" },
    { src: "https://www.youtube.com/embed/kAx9IMxXdbc" },
    { src: "https://www.youtube.com/embed/NwNC6rK1Lgs" }
  ]);

  const [hovered, setHovered] = useState('');
  
  // Lightbox State
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [activeZoomImg, setActiveZoomImg] = useState(0);

  const openLightbox = (index: number) => {
    setActiveZoomImg(index);
    setIsZoomActive(true);
  };

  const closeLightbox = () => {
    setIsZoomActive(false);
  };

  const nextLightboxImg = useCallback(() => {
    setActiveZoomImg((prev) => (prev + 1) % listOfImages.length);
  }, [listOfImages.length]);

  const prevLightboxImg = useCallback(() => {
    setActiveZoomImg((prev) => (prev - 1 + listOfImages.length) % listOfImages.length);
  }, [listOfImages.length]);

  // Lock scroll when lightbox is active
  useEffect(() => {
    if (isZoomActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isZoomActive]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isZoomActive) return;
      if (e.key === 'ArrowRight') nextLightboxImg();
      if (e.key === 'ArrowLeft') prevLightboxImg();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomActive, nextLightboxImg, prevLightboxImg]);

  return (
    <>
      <div className="bg-[#050508]/40 backdrop-blur-sm min-h-screen relative overflow-x-hidden">
        
        {/* 1. Hero Banner */}
        <section className='relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/5'>
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050508] z-10"></div>
            <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${aboutHeroImg})` }}></div>
          </div>

          {/* In-section floating edge DJ elements */}
          <div className='hidden xl:flex absolute left-4 2xl:left-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-1 pointer-events-none'>
            <FloatingEdgeVinyl size={50} />
            <FloatingMusicNote type="double" />
          </div>
          <div className='hidden xl:flex absolute right-4 2xl:right-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 animate-edge-float-2 pointer-events-none'>
            <FloatingHeadphones />
            <EdgeSparkle size={18} />
          </div>

          {/* Content */}
          <div className='container relative z-20 text-center pt-16'>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h4 className='text-[color:var(--color-accent-gold)] font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-4'>
                Naš Rad
              </h4>
              <h1 className='text-5xl md:text-7xl font-light tracking-wide text-white mb-6 drop-shadow-xl'>
                Uhvaćeni <span className='font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>Trenuci.</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* 2. Video Gallery (FIRST - High visual focus) */}
        <section id="video" className='py-20 md:py-28 relative bg-[#07080c]/40 backdrop-blur-sm overflow-hidden border-b border-white/5'>
          {/* Dynamic Concert Stage Laser Beams & Cinema Glow */}
          <StageLaserBeams />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(194,167,90,0.16)_0%,rgba(99,102,241,0.06)_50%,transparent_75%)] blur-[130px] pointer-events-none z-0 animate-ambient-pulse'></div>
          <div className='absolute -top-10 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,223,115,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none z-0 animate-ambient-drift-1'></div>

          <div className='container relative z-10'>
            <div className='mb-12 md:mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6'>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--color-accent-gold)]/10 border border-[color:var(--color-accent-gold)]/30 text-[color:var(--color-accent-gold)] text-[11px] font-bold tracking-widest uppercase mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent-gold)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-accent-gold)]"></span>
                  </span>
                  Uživo s nastupa
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
                  Video <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]">Galerija</span>
                </h2>
                <div className='w-20 md:w-24 h-1 bg-gradient-to-r from-[color:var(--color-accent-gold)] to-transparent rounded-full mx-auto md:mx-0'></div>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-light max-w-md text-center md:text-right">
                Doživite energiju, plesni podij i atmosferu na našim nastupima u kratkim video isječcima.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
              {listOfVideos.map((video, key) => (
                <motion.div 
                  key={key} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: key * 0.15 }}
                  className='w-full rounded-2xl overflow-hidden border border-white/15 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group relative hover:border-[color:var(--color-accent-gold)]/60 transition-all duration-500'
                >
                  {/* Cinema ambient backlight on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-accent-gold)]/30 via-transparent to-[color:var(--color-accent-gold)]/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center z-10">
                    <iframe
                      className="w-full h-full absolute inset-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      src={video.src}
                      title={`Video ${key + 1}`}
                    >
                    </iframe>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Photo Gallery (Masonry Grid - SECOND) */}
        <section className='py-20 md:py-32 relative overflow-hidden'>
          {/* Dynamic Digital Audio Frequency Waveform */}
          <AudioFrequencyWaveform className="opacity-40" />
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle,rgba(194,167,90,0.12)_0%,transparent_70%)] blur-[120px] rounded-full z-0 pointer-events-none animate-ambient-drift-2'></div>
          <div className='absolute bottom-0 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] blur-[110px] rounded-full z-0 pointer-events-none animate-ambient-drift-1'></div>
          <div className='absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0'></div>

          <div className='container relative z-10'>
            <div className='mb-12 md:mb-16 text-center md:text-left'>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
                Foto <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]">Galerija</span>
              </h2>
              <div className='w-20 md:w-24 h-1 bg-gradient-to-r from-[color:var(--color-accent-gold)] to-transparent rounded-full mx-auto md:mx-0'></div>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {listOfImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5"
                  onMouseEnter={() => setHovered(img.name)}
                  onMouseLeave={() => setHovered('')}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <img
                    src={new URL(`../../assets/images/gallery-optimized/${img.name}.webp`, import.meta.url).href} 
                    alt={img.alt}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center ${hovered === img.name ? 'opacity-100' : 'opacity-0'}`}>
                     <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center transform transition-transform duration-500 scale-50 group-hover:scale-100">
                       <FontAwesomeIcon icon={faMaximize} className='text-white text-lg' />
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 4. Modern Lightbox / Carousel (Framer Motion) */}
      <AnimatePresence>
        {isZoomActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-[110]"
              aria-label="Close lightbox"
            >
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            </button>

            {/* Prev Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevLightboxImg(); }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-[110]"
              aria-label="Previous image"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xl md:text-3xl" />
            </button>

            {/* Next Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); nextLightboxImg(); }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-[110]"
              aria-label="Next image"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xl md:text-3xl" />
            </button>

            {/* Image Container with AnimatePresence for smooth transitions */}
            <div className="relative w-full max-w-[90vw] h-[85vh] flex items-center justify-center" onClick={closeLightbox}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeZoomImg}
                  src={new URL(`../../assets/images/gallery/${listOfImages[activeZoomImg].name}.jpg`, import.meta.url).href}
                  alt={listOfImages[activeZoomImg].alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain rounded-md shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                />
              </AnimatePresence>
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-sm tracking-widest">
              {activeZoomImg + 1} / {listOfImages.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Gallery;
