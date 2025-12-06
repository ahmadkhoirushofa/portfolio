import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Alamat email tujuan Anda
    const recipientEmail = 'khoirushofa99@gmail.com'; 

    // Isi email
    const subject = `Pesan dari Portofolio: ${name}`;
    const body = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
    
    // KONSTRUKSI MAILTO LINK
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Membuka default email client/aplikasi
    window.location.href = mailtoLink;
    
    // Opsional: Memberikan feedback dan mereset form
    alert('Aplikasi email Anda akan terbuka. Silakan klik Kirim di sana.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-brand-dark dark:bg-black text-white pt-20 pb-10 transition-colors duration-300 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-[128px] opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* CTA Area */}
          <div className="md:w-1/2">
            <p className="text-brand-blue font-bold tracking-wider uppercase mb-2">You Can</p>
            <h2 className="text-2xl font-bold mb-6">Reach Me Anytime</h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
            I am always open to new opportunities and ready to contribute in a professional environment.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/10 rounded-full">
                   <MapPin className="text-brand-blue" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Address</h4>
                   <p className="text-slate-400">Pati, Central Java, Indonesia</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/10 rounded-full">
                   <Mail className="text-brand-blue" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Email</h4>
                   <a href="mailto:khoirushofa99@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                     khoirushofa99@gmail.com
                   </a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="p-3 bg-white/10 rounded-full">
                   <Instagram className="text-brand-blue" size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Instagram</h4>
                   <a href="https://instagram.com/chr_shaff" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                     @chr_shaff
                   </a>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Lengkap" 
                        required
                        className="w-full bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address" 
                        required
                        className="w-full bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                </div>
                <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Pesan Anda..." 
                    required
                    className="w-full bg-slate-800 dark:bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                ></textarea>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-green rounded-lg font-bold text-white hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                    Kirim Pesan <Send size={18} />
                </button>
            </form>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2025 Ahmad Khoiru Shofa. All Rights Reserved.</p>
            <div className="flex gap-4">
                <a 
                    href="https://www.linkedin.com/in/ahmad-khoiru-shofa/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-blue transition-colors"
                >
                    <Linkedin size={20} />
                </a>
                <a href="https://github.com/ahmadkhoirushofa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-blue transition-colors">
                    <Github size={20} />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;