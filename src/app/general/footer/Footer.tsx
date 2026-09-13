import React from 'react';

import logo from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden bg-[#050508] border-t border-white/5 mt-auto">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[color:var(--color-accent-gold)] to-transparent opacity-30"></div>

      <div className='container relative z-10'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-28 mb-16'>

          {/* Brand & Description */}
          <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left'>
            <img src={logo} alt='DJ Proslave Logo' className="h-[45px] object-contain mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500" />
            <p className='text-gray-400 text-sm leading-relaxed mb-8 max-w-sm'>
              Stvaramo nezaboravne glazbene trenutke i savršenu atmosferu za Vaše vjenčanje, proslavu ili event. Prepustite glazbu profesionalcima!
            </p>
            {/* Social Icons Row */}
            <div className='flex gap-4'>
              <a href='https://www.instagram.com/dj.proslave' target='_blank' rel="noreferrer" aria-label="Instagram" className='group relative w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:shadow-[0_0_20px_rgba(220,39,67,0.5)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faInstagram} className='text-gray-400 group-hover:text-white text-xl transition-colors' />
              </a>
              <a href='https://www.youtube.com/@dj.proslave' target='_blank' rel="noreferrer" aria-label="YouTube" className='group relative w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#FF0000] hover:border-transparent hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faYoutube} className='text-gray-400 group-hover:text-white text-xl transition-colors' />
              </a>
              <a href='https://www.tiktok.com/@dj.proslave' target='_blank' rel="noreferrer" aria-label="TikTok" className='group relative w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#000000] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faTiktok} className='text-gray-400 group-hover:text-white text-xl transition-colors' />
              </a>
              <a href='https://www.facebook.com/DJProslaveVjencanja/' target='_blank' rel="noreferrer" aria-label="Facebook" className='group relative w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:border-transparent hover:shadow-[0_0_20px_rgba(24,119,242,0.5)] hover:-translate-y-1'>
                <FontAwesomeIcon icon={faFacebook} className='text-gray-400 group-hover:text-white text-xl transition-colors' />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className='w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left'>
            <div className='flex flex-col items-center md:items-start'>
              <h5 className='text-white uppercase tracking-widest text-[11px] font-bold mb-6 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-gold)] shadow-[0_0_8px_rgba(255,223,115,0.8)]'></span>
                Istraži
              </h5>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 mb-3 text-sm' onClick={() => window.scrollTo(0, 0)} to='/'>Početna</Link>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 mb-3 text-sm' onClick={() => window.scrollTo(0, 0)} to='/o-nama/'>O nama</Link>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 mb-3 text-sm' onClick={() => window.scrollTo(0, 0)} to='/galerija/'>Galerija</Link>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 mb-3 text-sm' to='/galerija/#video'>Video</Link>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 text-sm' onClick={() => window.scrollTo(0, 0)} to='/blog/'>Blog</Link>
            </div>

            <div className='flex flex-col items-center md:items-start'>
              <h5 className='text-white uppercase tracking-widest text-[11px] font-bold mb-6 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-gold)] shadow-[0_0_8px_rgba(255,223,115,0.8)]'></span>
                Usluge
              </h5>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 mb-3 text-sm' onClick={() => window.scrollTo(0, 0)} to='/dj-za-korporativni-dogadaj/'>Eventi</Link>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 mb-3 text-sm' onClick={() => window.scrollTo(0, 0)} to='/dj-za-proslave/'>Proslave</Link>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 text-sm' onClick={() => window.scrollTo(0, 0)} to='/dj-za-vjencanja/'>Vjenčanja</Link>
            </div>

            <div className='flex flex-col items-center md:items-start'>
              <h5 className='text-white uppercase tracking-widest text-[11px] font-bold mb-6 flex items-center gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-gold)] shadow-[0_0_8px_rgba(255,223,115,0.8)]'></span>
                Više
              </h5>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 mb-3 text-sm' onClick={() => window.scrollTo(0, 0)} to='/kontakt/'>Kontakt</Link>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 mb-3 text-sm' onClick={() => window.scrollTo(0, 0)} to='/usluge/'>Sve Usluge</Link>
              <Link className='text-gray-400 hover:text-white transition-colors duration-300 text-sm' to='/kontakt/#cesta-pitanja'>Česta Pitanja (FAQ)</Link>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className='border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='m-0 text-gray-500 text-[11px] uppercase tracking-wider font-medium'>
            Copyright &copy; {currentYear}. Sva prava pridržana <span className='text-gray-400'>DJ Proslave</span>
          </p>
          <div className='flex gap-4 text-[11px] text-gray-600 uppercase tracking-widest font-medium'>
            <Link to="/uvjeti-koristenja/" onClick={() => window.scrollTo(0, 0)} className='cursor-pointer hover:text-gray-300 transition-colors'>Uvjeti korištenja</Link>
            <span className='hidden sm:inline text-gray-700'>|</span>
            <Link to="/politika-privatnosti/" onClick={() => window.scrollTo(0, 0)} className='cursor-pointer hover:text-gray-300 transition-colors'>Privatnost</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
