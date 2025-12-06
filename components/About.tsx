import React from 'react';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[100px]"></div>
       <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <p className="text-brand-blue font-semibold tracking-wider uppercase mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Analytical Thinking Meets<br /> Business Intelligence
            </h2>
            <div className="prose prose-slate dark:prose-invert text-slate-600 dark:text-slate-300">
              <p className="mb-4">
              A fresh graduate in Information Systems from State University of Surabaya, with expertise in Data Analytics and Machine Learning, leveraged through an internship as a Data Analyst and complemented by a dedicated focus on Marketing Analytics. 
              </p>
              <p className="mb-6">
              I am focused on how these technologies can transform raw data into actionable insights, driving smarter decision-making, and optimizing marketing strategies. My goal is to become a skilled data practitioner who creates impactful, real-world solutions by leveraging the full potential of data. 
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Data Cleaning & Processing",
                "Statistical Analysis",
                "Machine Learning Models",
                "Dashboard Visualization"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-green w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Experience Card */}
            <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-slate-700 text-brand-blue rounded-lg">
                        <Briefcase size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
                </div>
                
                <div className="space-y-8 relative border-l-2 border-slate-100 dark:border-slate-600 ml-3 pl-8">
                    {/* Experience 1 */}
                    <div className="relative">
                        <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-800 bg-brand-blue"></div>
                        <h4 className="font-bold text-slate-800 dark:text-white">Market Analyst</h4>
                        <p className="text-sm text-brand-blue font-medium mb-1">PT Nuclear Coating Fabric • Nov 2025 - Present</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Analyzing market needs and competitive intelligence within the sublimation industry to formulate strategic business recommendations.</p>
                    </div>
                    {/* Experience 2 */}
                    <div className="relative">
                        <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-500"></div>
                        <h4 className="font-bold text-slate-800 dark:text-white">PBI- Business Intelligence Analyst</h4>
                        <p className="text-sm text-brand-blue font-medium mb-1">Bank Muamalat Indonesia X Rakamin Academy • Nov 2025</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Developed effective dashboards and reports utilizing Advanced Excel and SQL.</p>
                    </div>
                    {/* Experience 3 - NEW */}
                    <div className="relative">
                        <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-500"></div>
                        <h4 className="font-bold text-slate-800 dark:text-white">Data Analyst</h4>
                        <p className="text-sm text-brand-blue font-medium mb-1">PT Cemerlang Statistika Indonesia • Sep - Des 2024</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Assisted projects, conducted statistical analysis using Python, and created dashboards.</p>
                    </div>
                </div>
            </div>

            {/* Education Card */}
            <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-green-100 dark:bg-slate-700 text-brand-green rounded-lg">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                </div>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">State University of Surabaya</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Bachelor of Information System (GPA 3.81/4.00)</p>
                        <p className="text-xs text-slate-400 mt-1">Aug 2021 - Aug 2025</p>
                    </div>
                    <hr className="border-slate-100 dark:border-slate-700"/>
                    <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">Hacktivate Teknologi Indonesia</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Study Independent - Data Science & Generative AI</p>
                        <p className="text-xs text-slate-400 mt-1">Feb - Jul 2024</p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;