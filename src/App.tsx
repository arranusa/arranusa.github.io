import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { RotatingQuote } from './components/RotatingQuote';
import { personalInfo, experienceData, skillsData } from './data';
import { Mail, Phone, MapPin, Linkedin, Github, Award, BookOpen } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="min-h-screen bg-navy-dark text-slate-100 flex flex-col selection:bg-gold-accent selection:text-navy-dark">

        {/* 1. SCREEN DISPLAY PORTFOLIO */}
        <div className="print:hidden flex-1 flex flex-col">
          {/* Navigation Bar */}
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

          {/* Sections */}
          <main className="flex-1">
            <AboutSection />
            <SkillsSection />
            <ExperienceTimeline />
            <ProjectsSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <footer className="bg-navy-card py-12 border-t border-navy-light/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <p className="font-display font-bold text-lg text-white tracking-wide">
                Arif Rahman Bintoro
              </p>
              <div className="flex justify-center">
                <RotatingQuote variant="compact" />
              </div>
              <div className="w-12 h-0.5 bg-gold-accent/40 mx-auto" />
              <p className="text-[11px] text-slate-500 font-mono">
                &copy; {new Date().getFullYear()} arranusa.github.io. {language === 'en' ? 'Recreated with React, Tailwind, and Motion.' : 'Dibuat ulang dengan React, Tailwind, dan Motion.'}
              </p>
            </div>
          </footer>
        </div>

        {/* 2. PRINT-ONLY CLASSIC RESUME (A4 FORMATTED) */}
        <div className="hidden print:block bg-white text-slate-900 min-h-screen p-10 max-w-[800px] mx-auto font-sans text-xs leading-relaxed space-y-6">

          {/* Header section (Two Columns layout like his original CV) */}
          <div className="border-b-2 border-slate-900 pb-5 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold tracking-wider text-slate-700 uppercase font-mono mt-1">
                {personalInfo.title}
              </p>
            </div>

            <div className="text-right text-[10px] space-y-1 font-mono text-slate-600">
              <p className="flex items-center justify-end gap-1">
                <MapPin className="w-3.5 h-3.5" /> {personalInfo.location}
              </p>
              <p className="flex items-center justify-end gap-1">
                <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
              </p>
              <p className="flex items-center justify-end gap-1">
                <Phone className="w-3.5 h-3.5" /> {personalInfo.phone}
              </p>
              <p className="flex items-center justify-end gap-1">
                <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/arranusa
              </p>
            </div>
          </div>

          {/* About Me block */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
              {language === 'en' ? 'About Me' : 'Tentang Saya'}
            </h2>
            <p className="text-justify text-slate-700">
              {personalInfo.aboutMe[language].replace('\n\n', ' ')}
            </p>
          </div>

          {/* Skills block */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
              {language === 'en' ? 'Technical Skills & Tools' : 'Keahlian Teknis & Alat'}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {skillsData.map((category, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-semibold text-slate-800 text-[11px]">
                      {language === 'en' ? (
                          category.title === 'Core Technologies' ? 'Core Technologies' :
                              category.title === 'Database & Cloud' ? 'Database & Cloud' :
                                  'Frameworks & Integrations'
                      ) : (
                          category.title === 'Core Technologies' ? 'Teknologi Utama' :
                              category.title === 'Database & Cloud' ? 'Basis Data & Awan' :
                                  'Kerangka Kerja & Integrasi'
                      )}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {category.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="bg-slate-100 border border-slate-200 text-slate-800 px-1.5 py-0.5 rounded text-[9px] font-mono">
                      {skill.name} ({skill.rating}%)
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
              {language === 'en' ? 'Work Experience' : 'Riwayat Pekerjaan'}
            </h2>

            <div className="space-y-4">
              {experienceData.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{exp.company}</h3>
                        <p className="text-slate-700 font-medium italic text-xs">{exp.role[language]}</p>
                      </div>
                      <div className="text-right text-[10px] font-mono text-slate-500">
                        <p className="font-semibold">{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <ul className="list-disc list-inside text-slate-700 text-[11px] space-y-1 pl-1">
                      {exp.description[language].map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {bullet}
                          </li>
                      ))}
                    </ul>

                    <p className="text-[10px] text-slate-500 font-mono mt-1">
                      <strong>Tech Stack:</strong> {exp.techStack.join(', ')}
                    </p>
                  </div>
              ))}
            </div>
          </div>

          {/* Education & Personal Details */}
          <div className="grid grid-cols-2 gap-8 border-t border-slate-300 pt-3">
            <div className="space-y-1.5">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
                {language === 'en' ? 'Education' : 'Pendidikan'}
              </h2>
              <div>
                <p className="font-bold text-slate-800">{personalInfo.education.degree[language]}</p>
                <p className="text-slate-600 text-xs">{personalInfo.education.institution} &bull; {personalInfo.education.location}</p>
                <p className="text-[10px] text-slate-500 font-mono">{language === 'en' ? 'Graduated' : 'Lulus'}: {personalInfo.education.year}</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-0.5">
                {language === 'en' ? 'Personal Details' : 'Detail Pribadi'}
              </h2>
              <div className="grid grid-cols-2 text-slate-700 text-[10px] font-mono gap-y-0.5">
                <span className="text-slate-500">{language === 'en' ? 'Date of Birth' : 'Tanggal Lahir'}:</span>
                <span>03 Apr 1989</span>
                <span className="text-slate-500">{language === 'en' ? 'Nationality' : 'Kewarganegaraan'}:</span>
                <span>{language === 'en' ? 'Indonesian' : 'Indonesia'}</span>
                <span className="text-slate-500">{language === 'en' ? 'Marital Status' : 'Status Pernikahan'}:</span>
                <span>{language === 'en' ? 'Married' : 'Menikah'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
  );
}

