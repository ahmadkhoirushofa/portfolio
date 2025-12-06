import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { Database, BarChart2, Brain, Cpu, MessageSquare, Terminal, Layout, Users, BookOpen } from 'lucide-react';

const Skills: React.FC = () => {
  // Updated order and content as requested
  const skills: Skill[] = [
    { name: 'Analytical Thinking', level: 95, category: 'Soft Skill' },
    { name: 'Data Visualization', level: 88, category: 'Hard Skill' },
    { name: 'Machine Learning', level: 80, category: 'Hard Skill' },
    { name: 'Data Storytelling', level: 85, category: 'Soft Skill' },
    { name: 'Statistical Analysis', level: 85, category: 'Hard Skill' },
    { name: 'Teamwork', level: 90, category: 'Soft Skill' },
  ];

  // Added SQL to tools
  const tools = [
    'Microsoft Excel', 'SQL', 'Python', 'Tableau', 'Looker Studio', 'VS Code', 'SPSS', 'Google Sheets'
  ];

  const getIcon = (name: string) => {
    if (name === 'Analytical Thinking') return <Brain size={24} className="text-purple-500" />;
    if (name === 'Data Visualization') return <BarChart2 size={24} className="text-blue-500" />;
    if (name === 'Machine Learning') return <Cpu size={24} className="text-brand-blue" />;
    if (name === 'Data Storytelling') return <BookOpen size={24} className="text-orange-500" />;
    if (name === 'Statistical Analysis') return <Database size={24} className="text-red-500" />;
    if (name === 'Teamwork') return <Users size={24} className="text-brand-green" />;
    return <Terminal size={24} className="text-slate-500" />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-blue font-semibold tracking-wider uppercase mb-2">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">I Develop Skills Regularly</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A combination of deep technical understanding and strong soft skills to deliver impactful data solutions.
          </p>
        </div>

        {/* Core Skills Grid - Card Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-brand-blue dark:hover:border-brand-blue hover:shadow-md transition-all group flex flex-col items-center text-center"
            >
              <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-full mb-4 group-hover:bg-blue-50 dark:group-hover:bg-slate-600 transition-colors">
                {getIcon(skill.name)}
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white text-lg mb-1">{skill.name}</h4>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">{skill.category}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Tools Section */}
        <div className="text-center">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8">My Data Solutions Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                    <motion.div 
                        key={tool} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-6 py-4 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-semibold hover:border-brand-blue dark:hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-blue transition-all cursor-default flex items-center gap-2"
                    >
                        <Layout size={18} className="text-slate-400" />
                        {tool}
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;