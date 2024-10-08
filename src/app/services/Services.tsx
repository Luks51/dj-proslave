import React from 'react';
import './Services.scss';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import djProslaveImg from '../../assets/images/dj-proslave.webp'
import eventDjImg from '../../assets/images/event-dj.webp'
import djVjencanjaImg from '../../assets/images/dj-vjencanja.webp'

function Services() {

  const { scrollYProgress } = useScroll();

  function useParallax(value: MotionValue<number>) {
    return useTransform(value, [0, 1], ['0%', '100%']);
  }

  const y = useParallax(scrollYProgress);
  
  return (
    <>
      <section className='app-hero-section'>
        <motion.div
          className='app-hero'
          style={{ y }}
        >
          <div className='container'>
            <div className='app-hero-wrapper d-flex justify-content-center align-items-center'>
            </div>
          </div>
        </motion.div>
      </section>
      <section className='title-section'>
        <div className="container">
          <div className='app-title-text-wrapper'>
            <h1 className='app-title-text mb-4'>Usluge</h1>
          </div>
        </div>
      </section>
      <section className='services'>
        <div className="container">
          <div className='services-wrapper'>
            <div className='services-img-wrapper'>
              <img src={djProslaveImg}/>
            </div>
            <div className='services-text-wrapper'>
              <h3>DJ Za Proslave</h3>
              <p>
                Učinite svoju proslavu nezaboravnom uz naše
                talentirane DJ-eve. S bogatim glazbenim izborom i
                prilagođenim setovima, stvaramo energičnu atmosferu
                koja će oživjeti vašu proslavu. Prepustite nam glazbu
                i oslobodite se brige, dok mi stvaramo ritam koji će
                vaše goste držati na podiju cijelu noć.
              </p>
            </div>
          </div>
          <div className='services-wrapper'>
            <div className='services-text-wrapper'>
              <h3>Event DJ</h3>
              <p>
                Pred Vama je bitna ceremoija ili događaj? Sa širokim
                glazbenim spektrom i prilagodljivim setovima, stvaramo
                atmosferu koja će podići svaki događaj na novu razinu.
                Prepustite nam glazbene izbore i oslobodite se briga,
                dok mi osiguravamo ritam koji će vaše goste držati u
                pokretu cijelu noć! 
              </p>
            </div>
            <div className='services-img-wrapper'>
              <img src={eventDjImg}/>
            </div>
          </div>
          <div className='services-wrapper'>
            <div className='services-img-wrapper'>
              <img src={djVjencanjaImg}/>
            </div>
            <div className='services-text-wrapper'>
              <h3>DJ Za Svadbe</h3>
              <p>
                Dodajte dašak magije Vašem vjenčanju uz naše
                profesionalne DJ-eve. Sa širokim repertoarom glazbe
                i prilagođenim setovima, stvaramo atmosferu koja će
                Vas i vaše goste držati na plesnom podiju cijelu
                noć. Prepustite nam glazbenu kulisu i uživajte u
                svakom trenutku vašeg posebnog dana! 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
