import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart2, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ['/profile_1.jpg', '/profile_2.jpg', '/profile_3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern bg-grid opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* TEXT */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-slate-800 text-brand-blue font-semibold text-sm mb-6 border border-slate-200 dark:border-slate-700">
                Data Analyst & Machine Learning Enthusiast
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                  Ahmad Khoiru Shofa
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 italic">
                "Without data, you're just another person with an opinion."
                <br />
                <span className="font-semibold not-italic text-sm block text-brand-blue">
                  ~ W. Edwards Deming
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium flex items-center gap-2"
                >
                  Let's Connect <ArrowRight size={18} />
                </a>

                <a
                  href="#portfolio"
                  onClick={(e) => handleScroll(e, 'portfolio')}
                  className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-brand-blue hover:text-brand-blue transition-all"
                >
                  Portfolio
                </a>
              </div>
            </motion.div>
          </div>

          {/* IMAGE AREA */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-md h-[420px]"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-green rounded-[2rem] rotate-6 opacity-20 blur-sm"></div>

              {/* Main Card */}
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white dark:border-slate-700 flex items-center justify-center group z-10">

                {/* Color overlay */}
                <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay z-[15] pointer-events-none"></div>

                {/* Image wrapper */}
                <div className="w-full h-full relative transition-transform duration-700 group-hover:scale-105">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt="Ahmad Khoiru Shofa"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 w-full h-full object-cover object-top z-[20]"
                    />
                  </AnimatePresence>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 z-[25]"></div>

                {/* Text inside image */}
                <div className="absolute bottom-6 left-6 text-white z-[30]">
                  <p className="text-sm opacity-90 drop-shadow-md">Based in</p>
                  <p className="text-xl font-bold drop-shadow-md">Pati, Indonesia</p>
                </div>
              </div>

              {/* FLOATING CARDS */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border dark:border-slate-700 flex items-center gap-3 z-50"
              >
                <div className="p-2 bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-lg">
                  <BarChart2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Focus on</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white"> Data Analyst & Machine Learning</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-10 -right-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border dark:border-slate-700 flex items-center gap-3 z-50"
              >
                <div className="p-2 bg-green-100 dark:bg-slate-700 text-green-600 dark:text-green-400 rounded-lg">
                  <Database size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Interest in</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Technology, Education & Marketing</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
