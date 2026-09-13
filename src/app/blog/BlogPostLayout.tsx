import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  readTime: string;
  coverImage: string;
  children: React.ReactNode;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ title, date, readTime, coverImage, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#050505] text-white pt-[100px] md:pt-[120px] pb-20"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/blog/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[color:var(--color-accent-gold)] transition-colors mb-8 group"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold tracking-widest uppercase text-xs">Natrag na Blog</span>
        </Link>

        {/* Header section */}
        <header className="mb-12">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-6 text-gray-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendar} className="text-[color:var(--color-accent-gold)]" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-[color:var(--color-accent-gold)]" />
              <span>{readTime} čitanja</span>
            </div>
          </motion.div>
        </header>

        {/* Cover Image */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
        >
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Content */}
        <motion.article 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="prose prose-invert prose-lg md:prose-xl max-w-none 
            prose-headings:text-white prose-headings:font-bold 
            prose-a:text-[color:var(--color-accent-gold)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-bold
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-li:text-gray-300 prose-ul:list-disc prose-ul:pl-5
            prose-blockquote:border-l-[color:var(--color-accent-gold)] prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
        >
          {children}
        </motion.article>

        {/* Footer/Share section (optional, can be expanded) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-medium">Svidio vam se članak?</p>
          <Link 
            to="/kontakt/" 
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-bold tracking-widest uppercase text-xs"
          >
            Kontaktirajte Nas
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostLayout;
