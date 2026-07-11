import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  Cpu, 
  Layers, 
  Binary, 
  Network, 
  Eye, 
  TrendingUp,
  Server,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Github,
  ExternalLink,
  Code2,
  CheckCircle2,
  Zap,
  Activity,
  Info
} from 'lucide-react';
import { projectsData } from '../data';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';
import { Project } from '../types';

const categoryIcons: Record<string, React.ReactNode> = {
  core: <Cpu className="w-5 h-5 text-blue-400" />,
  microservice: <Layers className="w-5 h-5 text-emerald-400" />,
  monolith: <Layers className="w-5 h-5 text-emerald-400" />,
  library: <Binary className="w-5 h-5 text-amber-400" />,
  integration: <Network className="w-5 h-5 text-purple-400" />,
  observability: <Eye className="w-5 h-5 text-rose-400" />
};

export default function ProjectsSection() {
  const [activeImages, setActiveImages] = useState<Record<string, string>>({});
  const [lightboxImage, setLightboxImage] = useState<{ images: string[]; currentIndex: number } | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [shuffledProjects, setShuffledProjects] = useState<Project[]>([]);
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  // Shuffle projects and their secondary images once when the component mounts (website opened/reloaded)
  React.useEffect(() => {
    // 1. Shuffle projects
    const shuffledProjs = [...projectsData];
    for (let i = shuffledProjs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProjs[i], shuffledProjs[j]] = [shuffledProjs[j], shuffledProjs[i]];
    }

    // 2. Shuffle each project's images array, keeping the main imageUrl as the first item
    const finalProjects = shuffledProjs.map((project) => {
      if (!project.images || project.images.length <= 1) {
        return project;
      }
      
      const mainImg = project.imageUrl;
      // Filter out the main image so we can shuffle only the secondary screenshots
      const otherImages = project.images.filter((img) => img !== mainImg);
      
      // Shuffle the secondary images
      for (let i = otherImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherImages[i], otherImages[j]] = [otherImages[j], otherImages[i]];
      }
      
      // Keep the main image at the front (index 0)
      const combinedImages = mainImg ? [mainImg, ...otherImages] : otherImages;
      
      return {
        ...project,
        images: combinedImages
      };
    });

    setShuffledProjects(finalProjects);
  }, []);

  // Prevent background scrolling when a modal is open to resolve overlay cluttering
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Close modal when close-project-modal event is fired (e.g. from navbar clicks)
  React.useEffect(() => {
    const handleClose = () => {
      setSelectedProject(null);
    };
    window.addEventListener('close-project-modal', handleClose);
    return () => {
      window.removeEventListener('close-project-modal', handleClose);
    };
  }, []);

  const modalLabels = {
    en: {
      close: 'Close',
      viewRepo: 'View Repository',
      caseStudy: 'Technical Case Study',
      overview: 'Technical Overview',
      architecture: 'System Architecture',
      features: 'Key Capabilities & Modules',
      challenges: 'Optimization & Challenges Solved',
      metrics: 'Performance & Architecture Metrics',
      techStack: 'Engine Tech Stack',
      screenshot: 'Screenshot',
      zoom: 'Zoom Image'
    },
    id: {
      close: 'Tutup',
      viewRepo: 'Lihat Repositori',
      caseStudy: 'Studi Kasus Teknis',
      overview: 'Ikhtisar Teknis',
      architecture: 'Arsitektur Sistem',
      features: 'Fitur & Kemampuan Utama',
      challenges: 'Optimasi & Kendala yang Diatasi',
      metrics: 'Metrik Performa & Arsitektur',
      techStack: 'Teknologi Utama',
      screenshot: 'Tangkapan Layar',
      zoom: 'Perbesar Gambar'
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'core': return language === 'en' ? 'Core Infrastructure' : 'Infrastruktur Inti';
      case 'microservice': return language === 'en' ? 'Microservices' : 'Mikroservis';
      case 'monolith': return language === 'en' ? 'Enterprise Application' : 'Aplikasi Enterprise';
      case 'integration': return language === 'en' ? 'Integration Parser' : 'Parser Integrasi';
      default: return cat;
    }
  };

  const isModalOpen = selectedProject !== null || lightboxImage !== null;

  return (
    <section 
      id="projects" 
      className={`py-16 md:py-24 border-b border-white/5 relative overflow-hidden ${
        isModalOpen ? 'z-[100]' : 'z-10'
      }`}
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-3 backdrop-blur-md">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'PORTFOLIO' : 'PORTOFOLIO'}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {language === 'en' ? 'Portfolio' : 'Portofolio'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto mt-4 rounded" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {(shuffledProjects.length > 0 ? shuffledProjects : projectsData).map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  setSelectedProject(project);
                  setModalImageIndex(0);
                }}
                className="glass-card rounded-3xl p-6 shadow-xl flex flex-col justify-between border border-white/10 hover:border-white/25 hover:bg-white/[0.02] active:scale-[0.99] transition-all duration-300 group cursor-pointer hover:shadow-2xl hover:shadow-blue-500/5 relative overflow-hidden"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white/10 transition-colors">
                      {categoryIcons[project.category] || <FolderGit2 className="w-5 h-5 text-blue-400" />}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full uppercase border border-white/5">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>

                  {/* Project Image Preview */}
                  {project.imageUrl && (
                    <div className="space-y-3 mb-5">
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/5 bg-slate-950 transition-all duration-500 group/img shadow-md">
                        <img
                          src={activeImages[project.id] || project.imageUrl}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover scale-100 group-hover/img:scale-[1.03] transition-transform duration-500 opacity-80 group-hover/img:opacity-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent pointer-events-none" />
                        
                        {/* Interactive Click Helper Overlay */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
                          style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
                        >
                          <div 
                            className="py-1.5 px-3.5 rounded-full border backdrop-blur-md scale-95 group-hover/img:scale-100 transition-all duration-300 shadow-xl flex items-center space-x-2 text-xs font-mono"
                            style={{ 
                              backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                              color: '#ffffff', 
                              borderColor: 'rgba(255, 255, 255, 0.2)' 
                            }}
                          >
                            <Info className="w-3.5 h-3.5" style={{ color: '#38bdf8' }} />
                            <span style={{ color: '#ffffff' }}>{language === 'en' ? 'View Details' : 'Lihat Detail'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Micro-thumbnails for multi-image project */}
                      {project.images && project.images.length > 0 && (
                        <div className="grid grid-cols-4 gap-2">
                          {project.images.map((img, imgIdx) => {
                            const isActive = (activeImages[project.id] || project.imageUrl) === img;

                            return (
                              <button
                                key={imgIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImages({ ...activeImages, [project.id]: img });
                                }}
                                className={`relative h-11 rounded-xl overflow-hidden border transition-all cursor-pointer z-10 ${
                                  isActive 
                                    ? 'border-emerald-400 ring-1 ring-emerald-400/20 scale-[1.03]' 
                                    : 'border-white/10 hover:border-white/30 hover:scale-[1.02]'
                                }`}
                              >
                                <img
                                  src={img}
                                  referrerPolicy="no-referrer"
                                  className={`w-full h-full object-cover transition-opacity duration-200 ${
                                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                                  }`}
                                />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description[language]}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono font-medium text-slate-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Deep Dive / Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (() => {
            const isDark = theme === 'dark';
            const projectImages = selectedProject.images || (selectedProject.imageUrl ? [selectedProject.imageUrl] : []);
            const currentImg = projectImages[modalImageIndex] || selectedProject.imageUrl || '';
            const labels = modalLabels[language];

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-xl"
              >
                {/* Backdrop Click Close */}
                <div 
                  className="absolute inset-0 cursor-zoom-out" 
                  onClick={() => setSelectedProject(null)} 
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                  className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden text-white z-10 theme-light:bg-white theme-light:border-slate-200 theme-light:text-slate-900"
                >
                  {/* Modal Header */}
                  <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 theme-light:border-slate-200 bg-slate-950/50 theme-light:bg-slate-50 relative z-20">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 theme-light:border-slate-200 theme-light:bg-slate-100">
                        {categoryIcons[selectedProject.category] || <FolderGit2 className="w-5 h-5 text-blue-400" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                          {labels.caseStudy}
                        </span>
                        <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight leading-none text-white theme-light:text-slate-900 mt-0.5">
                          {selectedProject.title}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full hover:bg-white/10 theme-light:hover:bg-slate-200 border border-transparent hover:border-white/10 theme-light:hover:border-slate-300 text-slate-400 hover:text-white theme-light:hover:text-slate-900 transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Modal Scrollable Core Content */}
                  <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 custom-scrollbar">
                    
                    {/* LEFT COLUMN: VISUAL GALLERY (5 Cols on large screen) */}
                    <div className="lg:col-span-5 flex flex-col space-y-4">
                      {projectImages.length > 0 ? (
                        <>
                          {/* Image Canvas with Controls */}
                          <div 
                            onClick={() => {
                              setLightboxImage({
                                images: projectImages,
                                currentIndex: modalImageIndex
                              });
                            }}
                            className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 theme-light:border-slate-200 bg-zinc-950 flex items-center justify-center group shadow-lg cursor-zoom-in group/canvas"
                          >
                            <motion.img
                              key={modalImageIndex}
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              transition={{ duration: 0.3 }}
                              src={currentImg}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                            {/* Left/Right controls */}
                            {projectImages.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setModalImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
                                  }}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-50 border border-zinc-700/50 hover:border-zinc-600 transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md z-10"
                                >
                                  <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setModalImageIndex((prev) => (prev + 1) % projectImages.length);
                                  }}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-50 border border-zinc-700/50 hover:border-zinc-600 transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md z-10"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </>
                            )}

                            {/* Zoom trigger overlay button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setLightboxImage({
                                  images: projectImages,
                                  currentIndex: modalImageIndex
                                });
                              }}
                              className="absolute top-3 right-3 p-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-50 border border-zinc-700/50 hover:border-zinc-600 transition-all cursor-pointer backdrop-blur-sm opacity-0 group-hover:opacity-100 shadow-md flex items-center space-x-1.5 text-xs font-mono font-medium z-10"
                            >
                              <Maximize2 className="w-3.5 h-3.5 text-zinc-50" />
                              <span className="text-zinc-50">{labels.zoom}</span>
                            </button>
                          </div>

                          {/* Thumbnails list */}
                          {projectImages.length > 1 && (
                            <div className={`grid gap-2 ${projectImages.length === 6 ? 'grid-cols-6' : projectImages.length === 5 ? 'grid-cols-5' : 'grid-cols-4'}`}>
                              {projectImages.map((img, index) => {
                                const isActive = modalImageIndex === index;

                                return (
                                  <button
                                    key={index}
                                    onClick={() => setModalImageIndex(index)}
                                    className={`relative h-14 rounded-xl overflow-hidden border transition-all cursor-pointer shadow-md ${
                                      isActive 
                                        ? 'border-emerald-400 ring-2 ring-emerald-400/20 scale-[1.03]' 
                                        : 'border-white/10 hover:border-white/30 theme-light:border-slate-200 theme-light:hover:border-slate-400 hover:scale-[1.02]'
                                    }`}
                                  >
                                    <img
                                      src={img}
                                      referrerPolicy="no-referrer"
                                      className={`w-full h-full object-cover transition-opacity duration-200 ${
                                        isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                                      }`}
                                    />
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="w-full aspect-[4/3] rounded-2xl border border-white/5 bg-slate-950/50 flex flex-col items-center justify-center text-slate-500">
                          <FolderGit2 className="w-12 h-12 stroke-[1.2] mb-2" />
                          <span className="text-xs font-mono">No Image Assets Provided</span>
                        </div>
                      )}
                      
                      {/* Left Column: Repository Quick Action */}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-5 rounded-2xl bg-slate-950 hover:bg-slate-950/80 text-white theme-light:bg-slate-100 theme-light:hover:bg-slate-200 theme-light:text-slate-900 border border-white/5 theme-light:border-slate-200 font-semibold font-mono text-xs sm:text-sm transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer shadow-lg mt-2 group/btn"
                        >
                          <Github className="w-4 h-4" />
                          <span>{labels.viewRepo}</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>

                    {/* RIGHT COLUMN: DETAILED CASE STUDY narrative (7 Cols on large screen) */}
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                      
                      {/* Overview section */}
                      <div className="space-y-2.5">
                        <div className="flex items-center space-x-2 text-blue-400">
                          <Info className="w-4.5 h-4.5" />
                          <h4 className="font-display font-semibold text-sm sm:text-base uppercase tracking-wider">
                            {labels.overview}
                          </h4>
                        </div>
                        <p className="text-slate-300 theme-light:text-slate-700 text-sm leading-relaxed font-sans text-justify">
                          {selectedProject.longDescription?.[language] || selectedProject.description[language]}
                        </p>
                      </div>

                      {/* Key Capabilities / Features */}
                      {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                        <div className="space-y-3.5">
                          <div className="flex items-center space-x-2 text-emerald-400">
                            <CheckCircle2 className="w-4.5 h-4.5" />
                            <h4 className="font-display font-semibold text-sm sm:text-base uppercase tracking-wider">
                              {labels.features}
                            </h4>
                          </div>
                          <div className="grid grid-cols-1 gap-3">
                            {selectedProject.keyFeatures.map((feat, fIdx) => (
                              <div 
                                key={fIdx}
                                className="flex gap-3 bg-white/5 border border-white/5 theme-light:bg-slate-50 theme-light:border-slate-200 p-3.5 rounded-2xl shadow-sm hover:border-white/10 transition-colors"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                                <div className="space-y-0.5">
                                  <p className="text-xs sm:text-sm font-semibold text-white theme-light:text-slate-900">
                                    {feat.title[language]}
                                  </p>
                                  <p className="text-xs text-slate-300 theme-light:text-slate-600 leading-relaxed font-sans">
                                    {feat.description[language]}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* System Architecture */}
                      {selectedProject.architectureNotes && (
                        <div className="space-y-2.5">
                          <div className="flex items-center space-x-2 text-purple-400">
                            <Code2 className="w-4.5 h-4.5" />
                            <h4 className="font-display font-semibold text-sm sm:text-base uppercase tracking-wider">
                              {labels.architecture}
                            </h4>
                          </div>
                          <div className="bg-white/5 border border-white/5 theme-light:bg-slate-50 theme-light:border-slate-200 p-4 rounded-2xl font-sans text-xs sm:text-sm text-slate-300 theme-light:text-slate-700 leading-relaxed shadow-sm">
                            {selectedProject.architectureNotes[language]}
                          </div>
                        </div>
                      )}

                      {/* Optimization / Challenges solved */}
                      {selectedProject.challengesSolved && (
                        <div className="space-y-2.5">
                          <div className="flex items-center space-x-2 text-amber-400">
                            <Zap className="w-4.5 h-4.5" />
                            <h4 className="font-display font-semibold text-sm sm:text-base uppercase tracking-wider">
                              {labels.challenges}
                            </h4>
                          </div>
                          <div className="bg-amber-400/5 border border-amber-400/20 p-4 rounded-2xl font-sans text-xs sm:text-sm text-slate-300 theme-light:text-slate-700 leading-relaxed shadow-sm flex gap-3">
                            <Zap className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5 animate-pulse" />
                            <p>{selectedProject.challengesSolved[language]}</p>
                          </div>
                        </div>
                      )}

                      {/* Engine Tech Stack */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-slate-400">
                          <Layers className="w-4.5 h-4.5" />
                          <h4 className="font-display font-semibold text-sm sm:text-base uppercase tracking-wider">
                            {labels.techStack}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-xs font-mono font-medium text-slate-300 bg-white/5 border border-white/10 theme-light:border-slate-200 theme-light:bg-slate-100 theme-light:text-slate-700 px-3 py-1 rounded-lg shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                    
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* Lightbox Modal for Full Image View */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-8"
            >
              {/* Close trigger area */}
              <div 
                className="absolute inset-0 cursor-zoom-out" 
                onClick={() => setLightboxImage(null)} 
              />

              <div className="relative max-w-5xl w-full flex flex-col justify-center items-center z-10">
                {/* Close button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute -top-12 right-2 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Main Expanded Image */}
                <div className="relative w-full h-[65vh] flex items-center justify-center">
                  <motion.img
                    key={lightboxImage.currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={lightboxImage.images[lightboxImage.currentIndex]}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain rounded-2xl border border-white/10 shadow-2xl"
                  />

                  {/* Left/Right Navigation */}
                  {lightboxImage.images.length > 1 && (
                    <>
                      <button
                        onClick={() => {
                          const newIdx = (lightboxImage.currentIndex - 1 + lightboxImage.images.length) % lightboxImage.images.length;
                          setLightboxImage({ ...lightboxImage, currentIndex: newIdx });
                        }}
                        className="absolute -left-2 sm:left-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-white hover:border-white/20 transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => {
                          const newIdx = (lightboxImage.currentIndex + 1) % lightboxImage.images.length;
                          setLightboxImage({ ...lightboxImage, currentIndex: newIdx });
                        }}
                        className="absolute -right-2 sm:right-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-white hover:border-white/20 transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Counter & Label */}
                <div className="mt-6 text-center space-y-1">
                  <p className="text-xs font-mono text-emerald-400">
                    {language === 'en' ? 'Screenshot' : 'Tangkapan Layar'} {lightboxImage.currentIndex + 1} / {lightboxImage.images.length}
                  </p>
                  <p className="text-base sm:text-lg font-sans text-white font-medium">
                    {(() => {
                      const labelsEn = ['Financial Dashboard (Main)', 'Checkout & Transaction Screen', 'Product & Stock Inventory', 'SOC-2 Secure System Audit Log'];
                      const labelsId = ['Dasbor Keuangan (Utama)', 'Layar Transaksi & Kasir', 'Stok & Inventaris Produk', 'Log Audit Sistem Kepatuhan SOC-2'];
                      return language === 'en' ? labelsEn[lightboxImage.currentIndex] : labelsId[lightboxImage.currentIndex];
                    })()}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
