import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles, Database, Layers, RefreshCw, ListCheck } from 'lucide-react';
import { experienceData } from '../data';
import { useLanguage } from '../LanguageContext';

export default function ExperienceTimeline() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {language === 'en' ? (
                <>Work <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Experience</span></>
              ) : (
                <>Riwayat <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Pengalaman Kerja</span></>
              )}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 my-3 rounded" />
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              {t('experience.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Timeline Engine */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
          
          <AnimatePresence mode="popLayout">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline node node dot indicator */}
                <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 border-2 border-blue-400/80 group-hover:border-emerald-400 group-hover:scale-110 transition-all z-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                </span>

                {/* Main Card */}
                <div className="glass-card hover:bg-white/5 p-6 rounded-3xl transition-all shadow-md hover:shadow-2xl hover:shadow-blue-950/10">
                  
                  {/* Meta header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-mono text-blue-400 tracking-widest uppercase font-semibold">
                        {exp.role}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-blue-400 transition-colors mt-0.5">
                        {exp.company}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-slate-300 font-mono self-start sm:self-end">
                      <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-xl border border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-xl border border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
                      <ListCheck className="w-3.5 h-3.5 text-blue-400" /> {t('experience.responsibilities')}
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-inside leading-relaxed pl-1">
                      {exp.description[language].map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-slate-300">
                          <span className="text-blue-400 select-none mt-1.5">•</span>
                          <span className="flex-1">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Badges */}
                  {exp.metrics && (
                    <div className="flex flex-wrap gap-4 p-4 rounded-2xl bg-slate-950/40 border border-white/10 mb-5 text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Layers className="w-4 h-4 text-purple-400" />
                        <span>{t('experience.managed_systems')}:</span>
                      </div>
                      
                      {exp.metrics.microservices && (
                        <span className="text-white">
                          <strong className="text-blue-400 font-bold text-sm">{exp.metrics.microservices}</strong> Microservices
                        </span>
                      )}
                      {exp.metrics.services && (
                        <span className="text-white">
                          <strong className="text-blue-400 font-bold text-sm">{exp.metrics.services}</strong> Services
                        </span>
                      )}
                      {exp.metrics.cronjobs && (
                        <span className="text-white">
                          <strong className="text-purple-400 font-bold text-sm">{exp.metrics.cronjobs}</strong> Cronjobs
                        </span>
                      )}
                      {exp.metrics.databases && (
                        <span className="text-white">
                          <strong className="text-emerald-400 font-bold text-sm">{exp.metrics.databases}</strong> {language === 'en' ? 'Database Schemas' : 'Skema Database'}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 hover:border-blue-400/40 px-2.5 py-1 rounded-xl transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
