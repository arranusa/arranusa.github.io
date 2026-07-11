import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin, Mail, Phone, Code2, ShieldCheck, Terminal, Award, BookOpen, Cpu, Zap, Layers, Trophy, Activity, Heart, Smile,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../LanguageContext';

export default function AboutSection() {
  const { language, t } = useLanguage();

  const infoItems = [
    { icon: <MapPin className="w-5 h-5 text-blue-400" />, label: t('about.location'), value: personalInfo.location },
    { icon: <Mail className="w-5 h-5 text-blue-400" />, label: t('about.email'), value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: <Phone className="w-5 h-5 text-blue-400" />, label: t('about.phone'), value: personalInfo.phone, link: `tel:${personalInfo.phone}` }
  ];

  const pillars = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: language === 'en' ? 'Scalable Microservices' : 'Microservices Skalabel',
      desc: language === 'en'
        ? 'Expertise in decoupling monolithic structures into reliable, distributed systems communicating via Kafka event streaming.'
        : 'Keahlian memisahkan struktur monolith menjadi sistem terdistribusi andal yang berkomunikasi via streaming event Kafka.'
    },
    {
      icon: <Terminal className="w-6 h-6 text-purple-400" />,
      title: language === 'en' ? 'Robust Core Java' : 'Core Java Tangguh',
      desc: language === 'en'
        ? 'Extensive use of Spring Framework & high-performance Quarkus to write fast, memory-optimized, thread-safe services.'
        : 'Penggunaan luas Spring Framework & Quarkus berkinerja tinggi untuk menulis service cepat, hemat memori, dan thread-safe.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: language === 'en' ? 'Enterprise Security' : 'Keamanan Enterprise',
      desc: language === 'en'
        ? 'Implementing secure, centralized API Gateways, OAuth2 authentication, Keycloak integration, and secure JWT handling.'
        : 'Mengimplementasikan API Gateway terpusat yang aman, otentikasi OAuth2, integrasi Keycloak, dan penanganan JWT yang aman.'
    }
  ];

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background radial glows from Frosted Glass template */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] -top-20 -left-20 pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -bottom-20 -right-20 pointer-events-none"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] top-1/2 left-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Info Columns */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-mono tracking-wider uppercase backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>{t('about.subtitle')}</span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
                Arif Rahman <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Bintoro
                </span>
              </h1>

              <h2 className="font-display font-medium text-lg sm:text-xl text-slate-200 tracking-wide font-mono">
                {personalInfo.title}
              </h2>
            </motion.div>

            {/* Core Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative p-6 rounded-3xl glass-card border-l-4 border-l-blue-500 shadow-2xl group hover:border-l-emerald-400 transition-all"
            >
              <div className="absolute top-3 right-4 text-blue-400/10 group-hover:text-blue-400/20 transition-colors font-serif text-6xl select-none leading-none pointer-events-none">
                &ldquo;
              </div>
              <p className="font-display font-semibold italic text-base sm:text-lg text-white mb-2 tracking-wide leading-relaxed">
                "{t('about.principle')}"
              </p>
              <p className="text-xs text-blue-300/80 font-mono uppercase tracking-wider">
                {t('about.principle_label')}
              </p>
            </motion.div>

            {/* Paragraph Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4"
            >
              {personalInfo.aboutMe[language].split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Quick Contact & Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group backdrop-blur-md">
                  <div className="flex-shrink-0 p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-400/40 transition-colors">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-xs sm:text-sm text-white hover:text-blue-400 transition-colors block truncate font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm text-white font-medium truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Dedicated Education Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 p-5 rounded-3xl bg-gradient-to-r from-blue-500/10 to-emerald-500/5 border border-blue-500/20 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl hover:border-emerald-400/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex-shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-semibold mb-0.5">
                    {language === 'en' ? 'ACADEMIC DEGREE' : 'PENDIDIKAN AKADEMIK'}
                  </p>
                  <h4 className="text-base sm:text-lg font-display font-bold text-white leading-tight">
                    {personalInfo.education.degree[language]}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    {personalInfo.education.institution} &bull; {personalInfo.education.location}
                  </p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl text-center self-stretch sm:self-auto flex sm:flex-col justify-between sm:justify-center items-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block sm:mb-0.5">
                  {language === 'en' ? 'Graduation' : 'Lulus'}
                </span>
                <span className="text-sm font-semibold font-mono text-emerald-400">
                  {personalInfo.education.year}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Tech Avatar Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[340px] aspect-square rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 shadow-2xl overflow-hidden group"
            >
              {/* Inner frame containing developer persona illustration */}
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl rounded-3xl flex flex-col justify-between p-6 overflow-hidden">
                {/* Simulated Server Console Grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Header info */}
                <div className="flex justify-between items-start z-10">
                  <div className="font-mono text-[10px] text-blue-400 uppercase tracking-widest bg-white/5 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                    Daily Activity
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Central Visual: Dev Avatar Graphic */}
                <div className="relative flex flex-col items-center justify-center py-8 z-10 w-full min-h-[180px]">
                  {/* Dynamic Glowing Halo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 blur-xl pointer-events-none"
                  />

                  {/* Decorative orbital rings */}
                  <div className="absolute w-48 h-48 rounded-full border border-dashed border-white/10 animate-[spin_50s_linear_infinite]" />
                  <div className="absolute w-36 h-36 rounded-full border border-double border-white/10 animate-[spin_30s_linear_infinite_reverse]" />

                  {/* Central Profile Photo Container */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-400 shadow-2xl z-20 overflow-hidden group/avatar"
                  >
                    <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative">
                      <img
                        src="/assets/profile/avatar.jpg"
                        alt="Arif Rahman Bintoro"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[15%] group-hover/avatar:grayscale-0 transition-all duration-500 scale-100 group-hover/avatar:scale-110"
                      />
                      {/* Interactive scanned overlay line */}
                      <motion.div
                        animate={{
                          y: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute left-0 right-0 h-0.5 bg-blue-400/40 blur-[1px] pointer-events-none"
                      />
                    </div>
                  </motion.div>

                  {/* Floating Lifestyle Orbit Nodes */}
                  {/* Node 1: Billiards (Top Left) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1 left-2 sm:left-4 z-30 bg-slate-950/90 border border-blue-500/30 px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-lg backdrop-blur-md"
                  >
                    <Trophy className="w-3 h-3 text-blue-400" />
                    <span className="font-mono text-[8px] text-slate-200 font-semibold">
                      Billiards
                    </span>
                  </motion.div>

                  {/* Node 2: Swimming (Top Right) */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute top-2 right-2 sm:right-4 z-30 bg-slate-950/90 border border-emerald-500/30 px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-lg backdrop-blur-md"
                  >
                    <Heart className="w-3 h-3 text-emerald-400" />
                    <span className="font-mono text-[8px] text-slate-200 font-semibold">
                      {language === 'en' ? 'Swimming' : 'Swimming'}
                    </span>
                  </motion.div>

                  {/* Node 3: Fitness / Gym (Bottom Left) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute bottom-2 left-2 sm:left-4 z-30 bg-slate-950/90 border border-purple-500/30 px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-lg backdrop-blur-md"
                  >
                    <Activity className="w-3 h-3 text-purple-400" />
                    <span className="font-mono text-[8px] text-slate-200 font-semibold">
                      Gym
                    </span>
                  </motion.div>

                  {/* Node 4: Family (Bottom Right) */}
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                    className="absolute bottom-3 right-2 sm:right-4 z-30 bg-slate-950/90 border border-amber-500/30 px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-lg backdrop-blur-md"
                  >
                    <Briefcase className="w-3 h-3 text-amber-400" />
                    <span className="font-mono text-[8px] text-slate-200 font-semibold">
                      Working
                    </span>
                  </motion.div>
                </div>

                {/* Footer specs */}
                <div className="space-y-2 z-10 bg-slate-950/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 font-mono text-[11px] text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t('about.env')}:</span>
                    <span className="text-blue-400 font-semibold">
                      {language === 'en' ? 'Lead Backend Developer' : 'Lead Backend Developer'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t('about.presets')}:</span>
                    <span className="text-purple-300">
                      {language === 'en' ? 'Billiards, Swimming, Gym' : 'Biliar, Renang, Fitness'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t('about.observability')}:</span>
                    <span className="text-emerald-400">
                      {language === 'en' ? 'Work-life Balance' : 'Work-life Balance'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Pillars / Competence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass-card hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 flex items-center justify-center mb-4 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-blue-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

