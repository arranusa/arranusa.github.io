import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Github, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../LanguageContext';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language, t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Reset Form
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {language === 'en' ? (
              <>Contact <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Me</span></>
            ) : (
              <>Hubungi <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Saya</span></>
            )}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto my-3 rounded" />
          <p className="text-slate-300 text-sm sm:text-base">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Contact Form (7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Form Box */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <h3 className="font-display font-bold text-lg text-white">
                {t('contact.form_title')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">{t('contact.form_name')} *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('contact.form_name_placeholder')}
                      className="w-full px-4 py-3 bg-slate-950/40 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">{t('contact.form_email')} *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === 'en' ? 'example@company.com' : 'contoh@perusahaan.com'}
                      className="w-full px-4 py-3 bg-slate-950/40 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">{t('contact.form_company')}</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={language === 'en' ? 'Success Corp (Optional)' : 'PT Perusahaan Sukses (Opsional)'}
                    className="w-full px-4 py-3 bg-slate-950/40 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">{t('contact.form_message')} *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('contact.form_message_placeholder')}
                    className="w-full px-4 py-3 bg-slate-950/40 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-400 hover:from-emerald-400 hover:to-blue-500 text-white font-bold text-sm uppercase tracking-widest py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-blue-500/15"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('contact.form_send')}</span>
                </button>
              </form>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center space-x-3 text-emerald-300">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm">
                    {t('contact.form_success_alert')}
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Panel: Social Links & Direct Contacts (5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Social Links Box */}
            <div className="p-6 rounded-3xl glass-accent-card shadow-xl space-y-4">
              <h4 className="font-display font-bold text-base text-white">
                {t('contact.social_title')}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {t('contact.social_subtitle')}
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors group cursor-pointer text-center"
                >
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors mb-1.5" />
                  <span className="text-[10px] font-mono text-slate-300 group-hover:text-white transition-colors">LINKEDIN</span>
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors group cursor-pointer text-center"
                >
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors mb-1.5" />
                  <span className="text-[10px] font-mono text-slate-300 group-hover:text-white transition-colors">GITHUB</span>
                </a>

                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors group cursor-pointer text-center"
                >
                  <Instagram className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors mb-1.5" />
                  <span className="text-[10px] font-mono text-slate-300 group-hover:text-white transition-colors">INSTAGRAM</span>
                </a>
              </div>
            </div>

            {/* Quick Contacts List */}
            <div className="p-6 rounded-3xl glass-card shadow-xl space-y-4">
              <h4 className="font-display font-bold text-base text-white">
                {language === 'en' ? 'Direct Contact' : 'Kontak Langsung'}
              </h4>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-3.5 animate-none">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-semibold">EMAIL</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs text-white hover:text-blue-400 block truncate font-medium">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-3.5 animate-none">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-semibold">{language === 'en' ? 'PHONE' : 'TELEPON'}</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs text-white hover:text-blue-400 block truncate font-medium">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-3.5 animate-none">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-semibold">{t('contact.domicile_title')}</p>
                    <p className="text-xs text-white truncate font-medium">
                      {t('contact.domicile_value')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
