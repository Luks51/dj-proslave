import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Services.scss';
import { motion, AnimatePresence } from 'framer-motion';
import eventsVideo from '../../assets/videos/events.mp4';
import privatePartiesVideo from '../../assets/videos/private-parties.mp4';
import weddingsVideo from '../../assets/videos/weddings.mp4';
import violinistImg from '../../assets/images/violinist-performer.jpg';
import saxImg from '../../assets/images/sax-performer.jpg';
import drumImg from '../../assets/images/drum-performer.jpg';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle, faPlay, faChevronDown, faXmark, faMusic } from '@fortawesome/free-solid-svg-icons';
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

interface AdditionalService {
  id: string;
  badge: string;
  category: string;
  name: string;
  subtitle: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  features: string[];
  contactQuery: string;
}

const additionalServicesData: AdditionalService[] = [
  {
    id: "violinist-marino",
    badge: "Live Violina",
    category: "Glazbeni Performans",
    name: "Violinist Ivan Vraneša",
    subtitle: "Električna & Akustična Violina uz DJ-a",
    image: violinistImg,
    shortDesc: "Diplomirao u klasi profesorice Susanne Zinkel na Muzičkoj akademiji u Zagrebu. Donosi fuziju klasične virtuoznosti i modernih party ritmova s električnom violinom uz DJ set.",
    fullDesc: "Ivan Vraneša diplomirao je na prestižnoj Muzičkoj akademiji u Zagrebu i posjeduje dugogodišnje iskustvo u klasičnoj i modernoj glazbi te nastupima u Hrvatskoj i inozemstvu. Njegov live performans u kombinaciji s DJ-em spaja najbolje od oba svijeta: profinjenu eleganciju tijekom prijema uzvanika i prvog plesa, te eksplozivnu energiju s električnom violinom na plesnom podiju. Uz bežični audio sustav, Marino se nesmetano kreće među gostima, stvarajući interaktivno i nezaboravno glazbeno iskustvo.",
    highlights: [
      "Live improvizacije uz DJ set",
      "Električna i akustična violina",
      "Različiti glazbeni žanrovi (pop, house, klasika)",
      "Vjenčanja, korporativni eventi i privatne zabave"
    ],
    features: [
      "Moderne obrade svjetskih pop, house i filmskih uspješnica",
      "Bežični audio prijenos za kretanje kroz cijelu dvoranu i plesni podij",
      "Mogućnost akustičnog nastupa za ceremoniju vjenčanja i prijem",
      "Potpuna koordinacija i dinamičko usklađivanje s DJ repertoarom"
    ],
    contactQuery: "Violinist Ivan Vraneša"
  },
  {
    id: "saksofon-dragutin",
    badge: "Live Saksofon",
    category: "Glazbeni Performans",
    name: "Saksofon by Ivan Vraneša",
    subtitle: "Live Saxophone & Party Improvizacije",
    image: saxImg,
    shortDesc: "Moj svaki nastup ostavlja snažan dojam zahvaljujući prepoznatljivom live izvođenju i velikoj energiji koju unosim u svaki prostor. Diplomirao sam na Muzičkoj akademiji u Zagrebu i redovito nastupam...",
    fullDesc: "Ivan Vraneša donosi topli, moćni zvuk saksofona koji se besprijekorno stapa s plesnim ritmovima DJ-a. Njegove spontane live improvizacije na deep house, funk, pop i soul klasike unose dozu svjetskih ljetnih klupskih destinacija poput Ibize i Mykonosa. Spuštanjem na plesni podij i neposrednom interakcijom s publikom, Dragutin podiže atmosferu cijelog prostora i stvara vrhunski scenski doživljaj.",
    highlights: [
      "Live improvizacije uz DJ-a",
      "All round music (deep house, pop, funk)",
      "Interaktivni silazak među goste",
      "Diplomirani glazbenik Muzičke akademije"
    ],
    features: [
      "Repertoar od laganog lounge/jazz ugođaja do udarnih house & pop hitova",
      "Vrhunski bežični mikrofon za slobodno kretanje po cijelom prostoru",
      "Bogato iskustvo na gala večerama, luksuznim vjenčanjima i festivalima",
      "Prilagodba stila i energije svakoj pojedinoj fazi vašeg događaja"
    ],
    contactQuery: "Saksofon by Ivan Vraneša"
  },
  {
    id: "drum-noa",
    badge: "Ritam Spektakl",
    category: "Percussion & Beat Show",
    name: "Drum Performer — Ivan Vraneša",
    subtitle: "Live Percussion & Akustično-Elektronski Bubnjevi",
    image: drumImg,
    shortDesc: "Ivan Vraneša je hrvatski drum performer koji već godinama aktivno nastupa na eventima, festivalima, klubovima i privatnim događanjima diljem regije. Specijalizirao se za live percussion performanse uz DJ set.",
    fullDesc: "Ivan Vraneša spaja sirovu akustičnu snagu konge i bonga s modernim elektronskim drum padovima. Njegov nastup tempiran je za vrhunac večeri – trenutak kada plesni podij treba dodatni impuls energije i adrenalina. Sinkroniziran s najmoćnijim dropovima i ritmovima DJ-a, vizualno i zvučno dominira pozornicom, pružajući publici autentičan koncertni spektakl.",
    highlights: [
      "Live percussion uz DJ set",
      "7+ godina profesionalnog iskustva",
      "Festivali, elitni klubovi i vjenčanja",
      "Moćan vizualni i scenski dojam"
    ],
    features: [
      "Kombinacija akustičnih udaraljki i digitalnih elektronskih padova",
      "Spektakularan scenski nastup s impresivnim vizualnim i zvučnim efektom",
      "Idealno za 'peak-time' tuluma i podizanje raspoloženja do usijanja",
      "Precizna sinkronizacija s DJ miksom i profesionalnim ozvučenjem"
    ],
    contactQuery: "Drum Performer Noa Livić"
  }
];

export function meta() {
  return getSeoMeta(
    "usluge",
    "Usluge | DJ Proslave",
    "Nudimo profesionalne DJ usluge za vjenčanja, korporativne evente i privatne proslave. Prilagođeni glazbeni repertoar i vrhunska oprema.",
    "dj usluge, dj za vjenčanja, dj za evente, glazba za proslave"
  );
}

function Services() {
  const [selectedServiceModal, setSelectedServiceModal] = useState<AdditionalService | null>(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    if (!selectedServiceModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedServiceModal(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedServiceModal]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Profesionalne DJ Usluge",
    "serviceType": "Zabavne i glazbene usluge za razne događaje",
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://djproslave.com/#business",
      "name": "DJ Proslave",
      "url": "https://djproslave.com/"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Naše Usluge",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ za Vjenčanja",
            "description": "Profesionalni DJ i rasvjeta za vaš poseban dan.",
            "url": "https://djproslave.com/dj-za-vjencanja/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ za Proslave",
            "description": "Vrhunska atmosfera za rođendane i privatne tulume.",
            "url": "https://djproslave.com/dj-za-proslave/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ za Evente",
            "description": "Glazbena podloga i zabava za korporativne događaje.",
            "url": "https://djproslave.com/dj-za-korporativni-dogadaj/"
          }
        }
      ]
    }
  };

  return (
    <div className="bg-[#050508]/40 backdrop-blur-sm min-h-screen overflow-x-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1. Kompaktni, elegantni Hero Banner (optimizirana visina) */}
      <section className='relative pt-24 pb-8 md:pt-32 md:pb-10 flex flex-col items-center justify-center overflow-hidden border-b border-white/5'>
        {/* Dynamic Concert Stage Laser Beams & Glow */}
        <StageLaserBeams />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,rgba(255,223,115,0.05)_50%,transparent_75%)] blur-[100px] rounded-full pointer-events-none animate-ambient-pulse'></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container relative z-10 text-center px-4"
        >
          <div className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[color:var(--color-accent-gold)] text-xs font-semibold tracking-widest uppercase mb-4'>
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-gold)] animate-pulse"></span>
            Glazbeni paketi & usluge
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white drop-shadow-xl mb-4'>
            Naše <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>Usluge.</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Pronađite idealan glazbeni pristup za Vaš događaj. Vrhunski zvuk, prilagođeni repertoar i nezaboravna atmosfera.
          </p>
        </motion.div>
      </section>

      {/* 2. Novi Grid Raspored Usluga: 2 stupca u prvom redu + 1 široki stupac s videom u drugom redu */}
      <section className="container mt-6 md:mt-10 px-4 md:px-6 relative">
        {/* Dynamic section glow & Audio Waveform */}
        <AudioFrequencyWaveform className="opacity-40" />
        <div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(194,167,90,0.1)_0%,transparent_70%)] blur-[140px] pointer-events-none -z-10 animate-ambient-drift-1'></div>

        {/* In-section floating edge DJ elements */}
        <div className='hidden 2xl:flex absolute -left-20 top-1/3 flex-col items-center gap-4 animate-edge-float-1 pointer-events-none'>
          <EdgeVuMeter label="CH 1" channel={1} />
          <FloatingMusicNote type="clef" />
        </div>
        <div className='hidden 2xl:flex absolute -right-20 top-1/3 flex-col items-center gap-4 animate-edge-float-2 pointer-events-none'>
          <FloatingEdgeVinyl size={56} reverse />
          <EdgeSparkle size={18} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative z-10">

          {/* Usluga 01 (PRVO MJESTO) - DJ za Vjenčanja */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col bg-[#101014] rounded-3xl overflow-hidden border border-white/10 hover:border-[color:var(--color-accent-gold)]/40 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group transition-all duration-500"
          >
            {/* Video s efektom i badgeom */}
            <div className="relative overflow-hidden aspect-[16/10] bg-black">
              <video
                src={weddingsVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[color:var(--color-accent-gold)]/40 text-[color:var(--color-accent-gold)] text-xs font-bold tracking-wider uppercase">
                <span>01</span>
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-accent-gold)]"></span>
                <span>Najtraženije</span>
              </div>
            </div>

            {/* Tekst i detalji */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className='text-2xl md:text-3xl font-light text-white mb-3 tracking-wide'>
                DJ za <span className='font-semibold italic text-[color:var(--color-accent-gold)]'>Vjenčanja</span>
              </h3>

              <p className='text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light'>
                Dodajte dašak magije Vašem najvažnijem danu. Prilagođeni setovi za obred, večeru i tulum koji drži plesni podij ispunjenim do jutra.
              </p>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Glazba za ceremoniju, prijem i prvi ples</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Vrhunski razglas i ambijentalna rasvjeta</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Koordinacija s protokolom mladenaca</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <Link
                  to='/dj-za-vjencanja/'
                  onClick={() => window.scrollTo(0, 0)}
                  className='inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-white/5 hover:bg-[color:var(--color-accent-gold)] text-white hover:text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 group/btn border border-white/10 hover:border-transparent'
                >
                  <span>Detalji za vjenčanja</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[color:var(--color-accent-gold)] group-hover/btn:text-black transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Usluga 02 - DJ za Proslave */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col bg-[#101014] rounded-3xl overflow-hidden border border-white/10 hover:border-[color:var(--color-accent-gold)]/40 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group transition-all duration-500"
          >
            {/* Video s efektom i badgeom */}
            <div className="relative overflow-hidden aspect-[16/10] bg-black">
              <video
                src={privatePartiesVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-gray-200 text-xs font-bold tracking-wider uppercase">
                <span>02</span>
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-accent-gold)]"></span>
                <span>Privatne proslave</span>
              </div>
            </div>

            {/* Tekst i detalji */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className='text-2xl md:text-3xl font-light text-white mb-3 tracking-wide'>
                DJ za <span className='font-semibold text-white'>Proslave</span>
              </h3>

              <p className='text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light'>
                Učinite svoj rođendan, 18. rođendan ili privatni tulum događajem o kojem će se dugo pričati. Ritam i energija skrojeni prema vašem ukusu.
              </p>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Rođendani, punoljetnosti i privatni tulumi</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Miks najnovijih hitova i vječnih plesnih klasika</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Prilagodba glazbenih želja slavljenika i gostiju</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <Link
                  to='/dj-za-proslave/'
                  onClick={() => window.scrollTo(0, 0)}
                  className='inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-white/5 hover:bg-[color:var(--color-accent-gold)] text-white hover:text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 group/btn border border-white/10 hover:border-transparent'
                >
                  <span>Detalji za proslave</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[color:var(--color-accent-gold)] group-hover/btn:text-black transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Usluga 03 (DRUGI RED - ŠIROKI STUPAC KROZ DVA STUPCA S VIDEOM) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col lg:flex-row bg-[#111116] rounded-3xl overflow-hidden border border-white/15 hover:border-[color:var(--color-accent-gold)]/50 shadow-[0_25px_50px_rgba(0,0,0,0.7)] group transition-all duration-500 relative"
          >
            {/* Ambient backlight glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-accent-gold)]/20 via-transparent to-[color:var(--color-accent-gold)]/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>

            {/* VIDEO Sekcija umjesto slike */}
            <div className="w-full lg:w-7/12 relative aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[420px] bg-black overflow-hidden flex items-center justify-center">
              <video
                src={eventsVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />

              {/* Video Overlay sa statusom */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#111116]/90 z-10 pointer-events-none"></div>

              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[color:var(--color-accent-gold)]/30 text-white text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent-gold)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-accent-gold)]"></span>
                </span>
                <span>Video prezentacija</span>
              </div>
            </div>

            {/* Tekst i sadržaj za Evente */}
            <div className="w-full lg:w-5/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-20">
              <div className="flex items-center gap-3 text-[color:var(--color-accent-gold)] mb-4">
                <span className="font-bold text-sm tracking-widest uppercase">03</span>
                <span className="w-8 h-px bg-[color:var(--color-accent-gold)]"></span>
                <span className="text-xs font-semibold tracking-widest uppercase">Korporativni Eventi</span>
              </div>

              <h3 className='text-3xl md:text-4xl font-light text-white mb-4 tracking-wide'>
                DJ za <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>Evente & Domjenke</span>
              </h3>

              <p className='text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light'>
                Pred vama je važan poslovni događaj ili gala večera? Osiguravamo vrhunsku glazbenu kulisu i profesionalnu audio/light tehniku koja podiže vaš brend i ostavlja besprijekoran dojam na partnere i uzvanike.
              </p>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Korporativni domjenci, konferencije i kongresi</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Modne revije, promocije i lansiranja brendova</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0" />
                  <span>Kompletna tehnička podrška, mikrofoni i rasvjeta</span>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  to='/dj-za-korporativni-dogadaj/'
                  onClick={() => window.scrollTo(0, 0)}
                  className='inline-flex items-center gap-4 px-8 py-4 rounded-xl bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02]'
                >
                  <span>Detalji za evente</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Dodatne Usluge (Live Performeri & Glazbeni Dodaci) */}
      <section className="container mt-20 md:mt-28 px-4 md:px-6 relative">
        <AudioFrequencyWaveform className="opacity-30" />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10 animate-ambient-drift-2'></div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className='inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[color:var(--color-accent-gold)] text-xs font-semibold tracking-widest uppercase mb-4'>
            <FontAwesomeIcon icon={faMusic} className="text-[10px]" />
            <span>Live Entertainment Dodaci</span>
          </div>
          <h2 className='text-3xl md:text-5xl font-light text-white tracking-wide mb-4'>
            Dodatne <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]'>Usluge.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Upotpunite vaš event sa posebnim muzičkim i live entertainment dodacima koji savršeno prate ritam DJ-a i ostavljaju zadivljujući dojam na uzvanike.
          </p>
        </motion.div>

        {/* Grid 3 Kartice */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {additionalServicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col bg-[#101014] rounded-3xl overflow-hidden border border-white/10 hover:border-[color:var(--color-accent-gold)]/50 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group transition-all duration-500 relative"
            >
              {/* Ambient backlight glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-[color:var(--color-accent-gold)]/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

              {/* Slika s efektom i badgeom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/30 to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[color:var(--color-accent-gold)]/40 text-[color:var(--color-accent-gold)] text-xs font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-gold)] animate-pulse"></span>
                  <span>{service.badge}</span>
                </div>
              </div>

              {/* Sadržaj kartice */}
              <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                <p className="text-[color:var(--color-accent-gold)] text-xs uppercase tracking-widest font-semibold mb-1">
                  {service.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-[#ffdf73] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Bullet značajke */}
                <div className="space-y-2 mb-8 text-xs text-gray-300">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[color:var(--color-accent-gold)] text-sm shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Akcijski gumbi */}
                <div className="mt-auto pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  {/* Saznajte više / Expand modal */}
                  <button
                    type="button"
                    onClick={() => setSelectedServiceModal(service)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[color:var(--color-accent-gold)]/40 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group/btn"
                  >
                    <span>Više</span>
                    <FontAwesomeIcon icon={faChevronDown} className="text-[color:var(--color-accent-gold)] text-xs group-hover/btn:translate-y-0.5 transition-transform" />
                  </button>

                  {/* Kontaktirajte nas */}
                  <Link
                    to={`/kontakt/`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>Kontakt</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Full-width Solid Gold CTA Banner */}
      <section className='mt-20 md:mt-28 pt-16 md:pt-20 pb-16 md:pb-20 bg-[#050508]/40 backdrop-blur-sm relative overflow-hidden'>
        <CelebrationPartySparkles />
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center bg-[color:var(--color-accent-gold)] p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-[0_25px_50px_rgba(212,175,55,0.2)]'>
            <div className="absolute right-0 top-0 w-[60%] h-full bg-white opacity-20 skew-x-[30deg] translate-x-20 pointer-events-none hidden md:block"></div>

            <div className='relative z-10 mb-8 md:mb-0 text-center md:text-left'>
              <h2 className='text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight leading-tight'>
                Želite kombinaciju DJ-a <br className="hidden md:block" />i live izvođača?
              </h2>
              <p className='text-black/85 text-base md:text-xl font-medium max-w-lg'>
                Kreirajte prilagođeni glazbeni paket po vašoj želji i osigurajte vrhunsku atmosferu.
              </p>
            </div>

            <div className='relative z-10 flex gap-4 w-full md:w-auto flex-col sm:flex-row'>
              <Link
                to='/kontakt/'
                onClick={() => window.scrollTo(0, 0)}
                className='px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-4 group shadow-2xl rounded-xl'
              >
                <span>Zatražite ponudu</span>
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performer / Additional Service Modal (Rendered via Portal to document.body) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedServiceModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto'
              onClick={() => setSelectedServiceModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 25 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 25 }}
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                className='bg-[#0c0d12] border border-white/15 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative shadow-[0_30px_70px_rgba(0,0,0,0.85)] my-auto max-h-[90vh]'
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedServiceModal(null)}
                  className='absolute top-4 right-4 z-20 w-11 h-11 bg-black/60 hover:bg-[color:var(--color-accent-gold)] text-white hover:text-black rounded-full flex items-center justify-center transition-colors border border-white/10'
                  aria-label="Zatvori modal"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-base" />
                </button>

                {/* Modal Visual Left Column */}
                <div className='w-full md:w-5/12 h-64 md:h-auto min-h-[260px] relative shrink-0 bg-black'>
                  <img
                    src={selectedServiceModal.image}
                    alt={selectedServiceModal.name}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0c0d12]'></div>
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[color:var(--color-accent-gold)]/50 text-[color:var(--color-accent-gold)] text-xs font-bold tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-gold)] animate-ping"></span>
                    <span>{selectedServiceModal.badge}</span>
                  </div>
                </div>

                {/* Modal Content Right Column */}
                <div className='p-6 md:p-10 flex-1 flex flex-col justify-between overflow-y-auto'>
                  <div>
                    <div className='inline-flex items-center gap-2 text-[color:var(--color-accent-gold)] text-xs font-semibold uppercase tracking-widest mb-2'>
                      <FontAwesomeIcon icon={faMusic} className="text-[10px]" />
                      <span>{selectedServiceModal.category}</span>
                    </div>

                    <h3 className='text-2xl md:text-3xl font-bold text-white mb-2 leading-snug'>
                      {selectedServiceModal.name}
                    </h3>
                    <p className='text-[color:var(--color-accent-gold)] font-medium text-xs md:text-sm uppercase tracking-wider mb-5'>
                      {selectedServiceModal.subtitle}
                    </p>

                    <p className='text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light'>
                      {selectedServiceModal.fullDesc}
                    </p>

                    {/* Ključne Značajke */}
                    <div className='mb-8 bg-white/[0.03] border border-white/5 p-4 md:p-5 rounded-2xl'>
                      <h4 className='text-white text-xs font-bold uppercase tracking-wider mb-3 text-[color:var(--color-accent-gold)]'>
                        Što uključuje ovaj nastup:
                      </h4>
                      <div className='space-y-2.5'>
                        {selectedServiceModal.features.map((feat, fIdx) => (
                          <div key={fIdx} className='flex items-start gap-2.5 text-xs md:text-sm text-gray-300'>
                            <FontAwesomeIcon icon={faCheckCircle} className='text-[color:var(--color-accent-gold)] text-sm shrink-0 mt-0.5' />
                            <span className='leading-snug'>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div className='pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3'>
                    <Link
                      to={`/kontakt/`}
                      onClick={() => {
                        setSelectedServiceModal(null);
                        window.scrollTo(0, 0);
                      }}
                      className='flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] text-center'
                    >
                      <span>Zatražite ponudu za ovaj nastup</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedServiceModal(null)}
                      className='px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider transition-colors'
                    >
                      Zatvori
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}

export default Services;

