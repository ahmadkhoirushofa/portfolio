import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

// Asumsi Interface Project Anda (Pastikan ini sesuai dengan definisi di file '../types')
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  stats: string;
  link: string; 
}


const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Data Analysis' | 'Machine Learning'>('All');

  // **DATA PROYEK DENGAN PENAMBAHAN PROPERTI 'link'**
  const projects: Project[] = [
    {
      id: 1,
      title: "GS Dashboard E-Commerce Analysis",
      category: "Data Visualization",
      description: "An interactive dashboard to visualize 7,500 transaction data points. Analyze daily sales trends and market dominance (Shopee 44%, Tokopedia 39%).",
      image: "GS-dashboard.jpg",
      tech: ["Looker Studio", "Google Spreadsheet", "Data Cleaning"],
      stats: "7.5K+ Records",
      link: "https://lookerstudio.google.com/reporting/9bc25f55-5375-47ce-bcb3-f55fdd08d333" 
    },
    {
      id: 2,
      title: "Web-Based Waste Detection",
      category: "Computer Vision & Web App",
      description: "A Flask-based web application integrating the Xception-CBAM model for garbage classification with a peak validation accuracy of 93.37%.",
      image: "waste-detections.png",
      tech: ["Python", "Flask", "TensorFlow", "Deep Learning"],
      stats: "93.37% Accuracy",
      link: "https://github.com/ahmadkhoirushofa/web-based-waste-detection"
    },
    {
      id: 3,
      title: "Loan Activity Fraud Detection",
      category: "Machine Learning",
      description: "Deep analysis of financial transaction dataset (2 million rows). Using Random Forest and XGBoost to detect fraud in imbalanced data.",
      image: "loan.jpg",
      tech: ["Python", "XGBoost", "Scikit-Learn", "Big Data"],
      stats: "Rank 39/316",
      link: "https://www.kaggle.com/competitions/ristek-datathon-2024/leaderboard"
    },
    {
      id: 4,
      title: "Cyberbullying Detection",
      category: "NLP (Natural Language Processing)",
      description: "A cyberbullying detection system for Twitter content using the LSTM algorithm. Trained with 46,000+ tweets with an accuracy of 91%.",
      image: "cyberbullying.png",
      tech: ["Python", "LSTM", "NLP", "Kaggle"],
      stats: "91% Accuracy",
      link: "https://github.com/ahmadkhoirushofa/Cyberbullying-Detections"
    },
    {
      id: 5,
      title: "Sales Performance Analysis",
      category: "Data Analysis",
      description: "Comprehensive analysis of sales performance. Identifying top-selling products, purchasing patterns, customer distribution, and strategic recommendations for revenue growth.",
      image: "sales.png",
      tech: ["Looker Studio", "BigQuery", "SQL"],
      stats: "3.3k+ Record",
      link: "https://github.com/ahmadkhoirushofa/Final-Project-Rakamin-Dashboard-Penjulan"
    },
    {
      id: 6,
      title: "Netflix Dashboard",
      category: "Data Visualization",
      description: "Creation of an interactive dashboard that visualizes historical Netflix data, including content trends, film countries of origin, and top film directors.",
      image: "netflix.png",
      tech: ["Tableau", "Kaggle", "Ms. Excel"],
      stats: "31% AS Movie",
      link: "https://public.tableau.com/app/profile/ahmad.khoiru.shofa/viz/dashboardnetflix_16980913448090/Dashboard1"
    }
  ];

  // Filtering Logic (Tidak ada perubahan di sini)
  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    
    // Map project categories to filter names
    if (filter === 'Data Analysis') {
        return project.category.includes('Data Visualization') || project.category.includes('Data Analysis');
    }
    if (filter === 'Machine Learning') {
        return project.category.includes('Machine Learning') || project.category.includes('NLP') || project.category.includes('Computer Vision');
    }
    return true;
  });

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern bg-grid opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div className="max-w-2xl">
            <p className="text-brand-blue font-semibold tracking-wider uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Works & Case Studies</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
            Here are some of the featured projects where I applied data analysis and machine learning.
            </p>
          </div>
          <a href="https://github.com/ahmadkhoirushofa" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:underline mt-4 md:mt-0">
            Github <ArrowRight size={20} />
          </a>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
            {['All', 'Data Analysis', 'Machine Learning'].map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                        filter === f 
                        ? 'bg-brand-blue text-white shadow-md' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                >
                    {f}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
                <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 backdrop-blur-sm flex flex-col"
                >
                {/* Image Container */}
                <div className="h-48 overflow-hidden relative shrink-0">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all z-10" />
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {project.stats && (
                    <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {project.stats}
                    </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <span className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors line-clamp-1">
                    {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] uppercase font-bold rounded-md">
                        {t}
                        </span>
                    ))}
                    </div>

                    {/* **PERUBAHAN DARI <button> MENJADI <a> (LINK) DI SINI** */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-white hover:text-brand-blue transition-colors"
                        >
                            View Detail <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="https://github.com/ahmadkhoirushofa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:underline">
                 Lihat Github <ArrowRight size={20} />
             </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;