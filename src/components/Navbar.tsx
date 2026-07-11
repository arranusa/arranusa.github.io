import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, Download, Globe, Sparkles, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    window.dispatchEvent(new Event('close-project-modal'));
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const LanguageSwitcher = () => (
    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 backdrop-blur-md">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-gradient-to-r from-blue-500 to-emerald-400 text-white shadow-md'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('id')}
        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
          language === 'id'
            ? 'bg-gradient-to-r from-blue-500 to-emerald-400 text-white shadow-md'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        ID
      </button>
    </div>
  );

  const ThemeToggler = () => (
    <button
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-center backdrop-blur-md relative group animate-none"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-blue-600 group-hover:-rotate-12 transition-transform duration-300" />
      )}
      
      {/* Visual tooltip */}
      <span className="absolute top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-[10px] font-mono text-white px-2.5 py-1 rounded-md whitespace-nowrap border border-white/10 shadow-xl pointer-events-none z-50">
        {theme === 'dark' 
          ? (language === 'en' ? '🌙 Dark Mode active (Click for Light)' : '🌙 Mode Gelap (Klik untuk Terang)') 
          : (language === 'en' ? '☀️ Light Mode active (Click for Dark)' : '☀️ Mode Terang (Klik untuk Gelap)')}
      </span>
    </button>
  );

  return (
    <nav
      id="navbar"
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 print:hidden px-4 sm:px-6 lg:px-8`}
    >
      <div className={`max-w-7xl mx-auto px-6 py-4 rounded-3xl transition-all duration-300 ${
        isScrolled
          ? 'glass-header shadow-2xl shadow-black/40'
          : 'bg-white/5 backdrop-blur-md border border-white/10'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('about')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-blue-950 flex items-center justify-center font-display font-black text-white text-sm transition-transform group-hover:scale-105 shadow-lg">
              AR
            </div>
            <div>
              <span className="font-display font-extrabold text-white tracking-wider block text-base uppercase">
                ARRANUSA
              </span>
              <span className="text-[9px] text-blue-400/95 font-mono tracking-widest uppercase block">
                Java & Backend Specialist
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-white/10 font-semibold border border-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-4 w-px bg-white/10 mx-2" />
            
            <LanguageSwitcher />

            <ThemeToggler />

            <button
              onClick={handlePrint}
              className="ml-3 flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-emerald-400 hover:from-emerald-400 hover:to-blue-500 text-white px-5 py-2 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4" />
              <span>{t('nav.print')}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggler />
            
            <LanguageSwitcher />
            
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1 bg-white/10 text-blue-400 border border-white/15 px-3 py-1.5 rounded-full font-semibold text-xs tracking-wider cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t('nav.print')}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-white/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

