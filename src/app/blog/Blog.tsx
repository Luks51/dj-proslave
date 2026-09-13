import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { getSeoMeta } from '../utils/seo';

export function meta() {
  return getSeoMeta(
    "blog",
    "Blog | Savjeti i Novosti | DJ Proslave",
    "Pročitajte korisne savjete za organizaciju vjenčanja i evenata. Otkrijte kako odabrati glazbu i stvoriti savršenu atmosferu.",
    "dj blog, savjeti za vjenčanje, organizacija evenata, glazba za proslave"
  );
}

const blogPosts = [
  {
    id: 'kako-odabrati-dj-a-za-vjencanje',
    title: 'Kako odabrati savršenog DJ-a za vaše vjenčanje?',
    excerpt: 'Planiranje vjenčanja je stresno, no glazba ne bi trebala biti. Saznajte zašto je DJ odličan izbor i na što paziti pri odabiru.',
    date: '15. Listopada 2024.',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'najbolja-glazba-za-evente',
    title: 'Glazba koja spaja: Kako podići korporativni event na višu razinu',
    excerpt: 'Razbijte led i stvorite ugodnu atmosferu na poslovnom okupljanju uz pravilan odabir žanrova i dobrog DJ-a.',
    date: '3. Studenog 2024.',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=600&auto=format&fit=crop'
  }
];

function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `https://djproslave.com/blog/#blog`,
    "name": "DJ Proslave Blog",
    "description": "Korisni savjeti za organizaciju vjenčanja i evenata.",
    "url": "https://djproslave.com/blog/",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://djproslave.com/blog/${post.id}/`,
      "datePublished": post.date,
      "image": post.image
    }))
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-[100px] md:pt-[150px] pb-20">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
      />
      <div className="container mx-auto px-4 md:px-8">

        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            DJ Proslave <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--color-accent-gold)] to-[#ffdf73]">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Savjeti, trendovi i inspiracija iz svijeta organizacije evenata i vjenčanja.
            Otkrijte kako glazba stvara nezaboravne uspomene.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-[#1e1e1e]/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(255,223,115,0.1)] flex flex-col h-full"
            >
              <Link to={`/blog/${post.id}/`} className="block relative overflow-hidden h-[250px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/90 to-transparent"></div>
              </Link>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative -mt-10 bg-[#1e1e1e]/80 backdrop-blur-md rounded-t-3xl border-t border-white/10 transition-colors duration-500 group-hover:bg-[#1a1a1a]">
                <div className="flex items-center gap-2 text-[color:var(--color-accent-gold)] text-xs font-bold tracking-widest uppercase mb-4">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{post.date}</span>
                  <span className="mx-2 text-gray-600">•</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-[color:var(--color-accent-gold)] transition-colors">
                  <Link to={`/blog/${post.id}/`}>{post.title}</Link>
                </h2>

                <p className="text-gray-400 mb-8 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.id}/`}
                  className="inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase text-xs hover:text-[color:var(--color-accent-gold)] transition-colors mt-auto w-fit"
                >
                  <span>Pročitaj više</span>
                  <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default Blog;
