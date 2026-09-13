import React, { useEffect, useState } from 'react';

import logo from '../../../assets/images/logo.png'
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faAddressCard,
  faCamera,
  faHandshakeAngle,
  faAddressBook,
  IconDefinition,
  faXmark,
  faChevronDown,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Navbar() {

  const CustomNavLink = (to: string, title: string) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <li className="flex items-center" itemProp="name">
        <NavLink
          itemProp="url"
          className={
            'relative whitespace-nowrap text-[11px] lg:text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300 cursor-pointer overflow-hidden '
            + (match ? 'text-black bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] shadow-[0_0_20px_rgba(255,223,115,0.4)]' : 'text-gray-400 hover:text-white hover:bg-white/10')
          }
          onClick={() => window.scrollTo(0, 0)}
          to={to}
          title={title}>
          {title}
        </NavLink>
      </li>
    )
  }

  const CustomNavLinkMobile = (to: string, title: string, icon: IconDefinition) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <li className="w-full" itemProp="name">
        <NavLink
          itemProp="url"
          className={
            'flex items-center text-sm font-bold tracking-widest uppercase px-6 py-4 mb-2 rounded-2xl transition-all duration-300 cursor-pointer '
            + (match ? 'text-black bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] shadow-[0_10px_20px_rgba(255,223,115,0.2)]' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10')
          }
          onClick={() => { window.scrollTo(0, 0); closeMenu(); }}
          to={to}
          title={title}>
          <FontAwesomeIcon className='mr-4 w-5' icon={icon} aria-hidden="true" />
          <span className='m-0 whitespace-nowrap'>{title}</span>
        </NavLink>
      </li>
    )
  }

  const CustomDropdownLink = () => {
    let resolved = useResolvedPath('/usluge/');
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <li className="relative group flex items-center" itemProp="name">
        <NavLink
          itemProp="url"
          className={
            'relative whitespace-nowrap text-[11px] lg:text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-2 '
            + (match ? 'text-black bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] shadow-[0_0_20px_rgba(255,223,115,0.4)]' : 'text-gray-400 hover:text-white hover:bg-white/10')
          }
          onClick={() => window.scrollTo(0, 0)}
          to='/usluge/'
          title='Usluge'>
          Usluge
          <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
        </NavLink>
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <div className="bg-[#1e1e1e]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-1 min-w-[160px]">
            <Link to="/dj-za-vjencanja/" className="text-gray-400 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors text-[11px] lg:text-xs font-bold tracking-widest uppercase text-center" onClick={() => window.scrollTo(0, 0)}>Vjenčanja</Link>
            <Link to="/dj-za-proslave/" className="text-gray-400 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors text-[11px] lg:text-xs font-bold tracking-widest uppercase text-center" onClick={() => window.scrollTo(0, 0)}>Proslave</Link>
            <Link to="/dj-za-korporativni-dogadaj/" className="text-gray-400 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors text-[11px] lg:text-xs font-bold tracking-widest uppercase text-center" onClick={() => window.scrollTo(0, 0)}>Eventi</Link>
          </div>
        </div>
      </li>
    );
  }

  const CustomDropdownMobile = () => {
    let resolved = useResolvedPath('/usluge/');
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <li className="w-full flex flex-col" itemProp="name">
        <div className="flex items-center gap-2 mb-2">
          <NavLink
            itemProp="url"
            className={
              'flex-1 flex items-center text-sm font-bold tracking-widest uppercase px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer '
              + (match ? 'text-black bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73] shadow-[0_10px_20px_rgba(255,223,115,0.2)]' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10')
            }
            onClick={() => { window.scrollTo(0, 0); closeMenu(); }}
            to='/usluge/'
            title='Usluge'>
            <FontAwesomeIcon className='mr-4 w-5' icon={faHandshakeAngle} aria-hidden="true" />
            <span className='m-0 whitespace-nowrap'>Usluge</span>
          </NavLink>
          <button
            onClick={(e) => { e.preventDefault(); setIsServicesOpen(!isServicesOpen); }}
            className="w-12 h-[52px] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl border border-transparent hover:border-white/10 transition-all cursor-pointer"
            aria-label="Toggle Usluge dropdown"
          >
            <FontAwesomeIcon icon={faChevronDown} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[300px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-1 pl-12 pr-2">
            <NavLink
              to="/dj-za-vjencanja/"
              onClick={() => { window.scrollTo(0, 0); closeMenu(); }}
              className={({ isActive }) => `px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${isActive ? 'text-[color:var(--color-accent-gold)] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
            >
              Vjenčanja
            </NavLink>
            <NavLink
              to="/dj-za-proslave/"
              onClick={() => { window.scrollTo(0, 0); closeMenu(); }}
              className={({ isActive }) => `px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${isActive ? 'text-[color:var(--color-accent-gold)] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
            >
              Proslave
            </NavLink>
            <NavLink
              to="/dj-za-korporativni-dogadaj/"
              onClick={() => { window.scrollTo(0, 0); closeMenu(); }}
              className={({ isActive }) => `px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${isActive ? 'text-[color:var(--color-accent-gold)] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
            >
              Eventi
            </NavLink>
          </div>
        </div>
      </li>
    );
  }

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

  function openMenu() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
    setTimeout(() => setIsServicesOpen(false), 300);
  }

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
      y: -20,
      transitionEnd: {
        display: 'none',
      },
      transition: {
        ease: 'easeIn',
        duration: 0.2,
      },
    },
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isAtTop ? 'pt-4 md:pt-6' : 'pt-2 md:pt-4'}`}>
      <div className={`w-full max-w-[1400px] px-4 md:px-6 transition-all duration-500`}>
        <div className={`bg-[#050508]/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500`}>
          {/* Desktop Navbar */}
          <nav
            aria-label="Glavna navigacija"
            itemScope itemType="http://schema.org/SiteNavigationElement"
            className={`hidden xl:flex h-[70px] justify-between items-center transition-all duration-500`}
          >
            <Link className='flex items-center cursor-pointer mr-8' to='/' aria-label="Početna stranica">
              <img src={logo} alt='DJ Proslave Logo' className="h-[30px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300" />
            </Link>
            <ul className='flex items-center gap-2 m-0 p-0 list-none'>
              {CustomNavLink('/', 'Početna')}
              {CustomNavLink('/o-nama/', 'O Nama')}
              {CustomDropdownLink()}
              {CustomNavLink('/galerija/', 'Galerija')}
              {CustomNavLink('/blog/', 'Blog')}
              {CustomNavLink('/kontakt/', 'Kontakt')}
            </ul>
          </nav>

          {/* Mobile Navbar */}
          <nav aria-label="Mobilna navigacija" itemScope itemType="http://schema.org/SiteNavigationElement" className='flex xl:hidden h-[60px] justify-between items-center relative'>
            <Link className='flex items-center cursor-pointer ml-2 mr-4' to='/' aria-label="Početna stranica">
              <img src={logo} alt='DJ Proslave Logo' className="h-[26px] object-contain" />
            </Link>

            <button
              className='cursor-pointer w-10 h-10 mr-2 flex justify-center items-center text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors p-0 outline-none'
              onClick={!isMenuOpened ? openMenu : closeMenu}
              aria-expanded={isMenuOpened}
              aria-label={!isMenuOpened ? "Otvori izbornik" : "Zatvori izbornik"}
              aria-controls="mobile-menu"
            >
              <FontAwesomeIcon className='text-xl' icon={!isMenuOpened ? faBars : faXmark} />
            </button>

            <motion.div
              id="mobile-menu"
              variants={variants}
              initial={'hide'}
              animate={!isMenuOpened ? 'hide' : 'show'}
              className="absolute top-[75px] right-0 left-0 p-4 bg-[#1e1e1e]/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-3xl border border-white/10 origin-top"
            >
              <ul className='flex flex-col m-0 p-0 list-none'>
                {CustomNavLinkMobile('/', 'Početna', faHome)}
                {CustomNavLinkMobile('/o-nama/', 'O Nama', faAddressCard)}
                {CustomDropdownMobile()}
                {CustomNavLinkMobile('/galerija/', 'Galerija', faCamera)}
                {CustomNavLinkMobile('/blog/', 'Blog', faNewspaper)}
                {CustomNavLinkMobile('/kontakt/', 'Kontakt', faAddressBook)}
              </ul>
            </motion.div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
