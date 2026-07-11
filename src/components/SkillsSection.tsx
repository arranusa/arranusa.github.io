import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Zap,
  Layers,
  MessageSquare,
  GitMerge,
  Database,
  Server,
  Cloud,
  Package,
  Lock,
  Eye,
  Activity,
  TrendingUp,
  Sliders,
  Sparkles,
  Info
} from 'lucide-react';
import { skillsData } from '../data';
import { useLanguage } from '../LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="w-4 h-4 text-blue-400" />,
  cpu: <Cpu className="w-4 h-4 text-blue-400" />,
  zap: <Zap className="w-4 h-4 text-blue-400" />,
  layers: <Layers className="w-4 h-4 text-blue-400" />,
  'message-square': <MessageSquare className="w-4 h-4 text-blue-400" />,
  'git-merge': <GitMerge className="w-4 h-4 text-blue-400" />,
  database: <Database className="w-4 h-4 text-blue-400" />,
  server: <Server className="w-4 h-4 text-blue-400" />,
  cloud: <Cloud className="w-4 h-4 text-blue-400" />,
  package: <Package className="w-4 h-4 text-blue-400" />,
  lock: <Lock className="w-4 h-4 text-blue-400" />,
  eye: <Eye className="w-4 h-4 text-blue-400" />,
  activity: <Activity className="w-4 h-4 text-blue-400" />,
  'trending-up': <TrendingUp className="w-4 h-4 text-blue-400" />
};

export default function SkillsSection() {
  const [selectedTech, setSelectedTech] = useState<string>('Java');
  const { language, t } = useLanguage();

  const techDetails: Record<string, { desc: string; usage: string; experience: string }> = {
    'Java': {
      desc: language === 'en'
        ? 'Primary programming language since the beginning of my professional career in 2014.'
        : 'Bahasa pemrograman utama sejak awal karir profesional pada tahun 2014.',
      usage: language === 'en'
        ? 'Used to build enterprise core banking, insurance modules, and high-load microservices systems.'
        : 'Digunakan untuk membangun enterprise core banking, modul asuransi, hingga sistem microservice dengan load tinggi.',
      experience: language === 'en'
        ? '12+ years, implemented at PT PLN, Simas Mobile, AIA Financial, and IFG Life.'
        : '12+ tahun, diimplementasikan di PT PLN, Simas Mobile, AIA Financial, dan IFG Life.'
    },
    'Spring Framework / Spring Boot': {
      desc: language === 'en'
        ? 'Preferred Java framework for building structured, reliable enterprise backend architectures.'
        : 'Framework Java andalan untuk menyusun arsitektur enterprise backend yang terstruktur.',
      usage: language === 'en'
        ? 'Constructing API Gateways, Spring Security, Spring Cloud, as well as relational and non-relational database integrations.'
        : 'Penyusunan API Gateway, Spring Security, Spring Cloud, serta integrasi database relasional dan non-relasional.',
      experience: language === 'en'
        ? 'Implemented across almost all companies (IFG Life, AIA, Innovez One, Cerdas Digital, etc.).'
        : 'Digunakan di hampir seluruh perusahaan (IFG Life, AIA, Innovez One, Cerdas Digital, dll).'
    },
    'Quarkus': {
      desc: language === 'en'
        ? 'Modern Java framework "Supersonic Subatomic" tailored specifically for Kubernetes and cloud-native runtimes.'
        : 'Framework Java modern "Supersonic Subatomic" yang dirancang untuk Kubernetes dan cloud-native runtime.',
      usage: language === 'en'
        ? 'Used to suppress container memory footprints and optimize critical claim service startup durations.'
        : 'Digunakan untuk menekan konsumsi memori container dan mengoptimalkan waktu boot service klaim kritis.',
      experience: language === 'en'
        ? 'Specifically adopted in the latest microservices architecture at PT Asuransi Jiwa IFG.'
        : 'Diadopsi secara khusus dalam arsitektur microservices terbaru di PT Asuransi Jiwa IFG.'
    },
    'Microservices Architecture': {
      desc: language === 'en'
        ? 'Distributed systems design pattern ensuring resilient fault-isolation and independent scalability.'
        : 'Pola desain sistem terdistribusi untuk menjamin ketahanan (resilience) dan skalabilitas independen.',
      usage: language === 'en'
        ? 'Monolith to microservices migrations, database segregation, circuit breakers, and container-based load balancing.'
        : 'Migrasi arsitektur monolith ke microservices, pemisahan database, sirkuit breaker, dan load balancing.',
      experience: language === 'en'
        ? 'Successfully designed and managed 8+ high-performance microservices at IFG Life and PT Cerdas Digital.'
        : 'Berhasil mengelola 8+ microservices berkinerja tinggi di IFG Life dan PT Cerdas Digital.'
    },
    'Apache Kafka': {
      desc: language === 'en'
        ? 'Highly performant distributed event streaming platform and real-time message broker.'
        : 'Message broker dan platform event streaming terdistribusi berkinerja sangat tinggi.',
      usage: language === 'en'
        ? 'Enables non-blocking asynchronous communication among microservices to resolve synchronous transactional bottlenecks.'
        : 'Memungkinkan komunikasi asinkron (event-driven) antar microservices untuk mencegah bottle-neck transaksi sinkron.',
      experience: language === 'en'
        ? 'Decoupled monolithic REST integrations into a real-time event-driven bus at PT Cerdas Digital.'
        : 'Mengubah komunikasi REST API menjadi event-driven di PT Cerdas Digital Nusantara.'
    },
    'RESTful & SOAP APIs': {
      desc: language === 'en'
        ? 'Industry-standard protocol suites for integrating frontend-backend applications and legacy systems.'
        : 'Protokol standar industri untuk integrasi sistem frontend-backend serta sistem warisan (legacy).',
      usage: language === 'en'
        ? 'Building robust communication bridges using modern REST JSON or enterprise XML SOAP for legacy banking hosts.'
        : 'Membangun jembatan komunikasi data menggunakan REST JSON modern maupun SOAP XML untuk perbankan lama.',
      experience: language === 'en'
        ? 'Cross-system service orchestration at PT Innovez One (8 services) and SOAP integrations at ICON+.'
        : 'Integrasi sistem di PT Innovez One (8 services) dan SOAP integration di ICON+.'
    },
    'PostgreSQL / SQL Server': {
      desc: language === 'en'
        ? 'Enterprise relational databases emphasizing strict transactional integrity (ACID boundaries).'
        : 'Penyimpanan data relasional yang andal dengan integritas transaksional yang ketat (ACID).',
      usage: language === 'en'
        ? 'Complex query tuning, monolith database decoupling, partitioning strategies, and database-level synchronization.'
        : 'Optimasi query kompleks, pemisahan database monolith, skema partisi, dan penanganan ribuan transaksi per detik.',
      experience: language === 'en'
        ? 'Managed 4 databases at AIA Financial and decoupled multi-database environments at Cerdas Digital.'
        : 'Berpengalaman mengelola 4 database di AIA Financial dan multi-database di Cerdas Digital.'
    },
    'Multi-Database Segregation': {
      desc: language === 'en'
        ? 'Database-per-service microservice pattern ensuring system isolation and reducing lock congestion.'
        : 'Strategi database-per-service dalam desain microservices untuk mencegah database berkapasitas berlebih.',
      usage: language === 'en'
        ? 'De-coupling database clusters into separate schemas, ensuring zero inter-service cross-joining.'
        : 'Melakukan de-coupling database tunggal monolith menjadi skema terpisah, menghindari locking table transaksional.',
      experience: language === 'en'
        ? 'Executed database decoupling at PT Cerdas Digital Nusantara.'
        : 'Dipraktikkan di PT Cerdas Digital Nusantara (pemisahan database tunggal ke multi-database).'
    },
    'Microsoft Azure Cloud': {
      desc: language === 'en'
        ? 'Enterprise cloud infrastructure for running scalable services.'
        : 'Platform komputasi awan enterprise untuk deployment dan pengelolaan infrastruktur.',
      usage: language === 'en'
        ? 'Leveraging virtual machines, azure container registries, managed databases (Azure SQL), and serverless tasks.'
        : 'Pemanfaatan virtual machines, integrasi container registry, Azure SQL, dan infrastruktur serverless.',
      experience: language === 'en'
        ? 'Azure cloud research and live deployment structures at PT AIA Financial.'
        : 'Riset dan deployment berbasis Azure saat bekerja di PT AIA Financial.'
    },
    'Docker / Containerization': {
      desc: language === 'en'
        ? 'Container technology standardizing application runtimes across development and production servers.'
        : 'Teknologi container untuk standardisasi runtime aplikasi agar konsisten di environment dev maupun prod.',
      usage: language === 'en'
        ? 'Packaging Spring Boot and Quarkus projects into lightweight Docker images ready for cloud deployment.'
        : 'Packaging aplikasi Spring Boot dan Quarkus ke dalam Docker image yang siap dideploy di Kubernetes.',
      experience: language === 'en'
        ? 'Used as the core deployment standard for modern microservices at IFG Life.'
        : 'Digunakan sebagai standar deployment modern di IFG Life.'
    },
    'Keycloak & JWT Auth': {
      desc: language === 'en'
        ? 'Enterprise-grade identity access management and single sign-on (SSO) solution.'
        : 'Solusi manajemen identitas dan otentikasi single sign-on (SSO) berskala enterprise.',
      usage: language === 'en'
        ? 'JWT-based token validation, client credentials flows, and role-based access control structures.'
        : 'Otorisasi berbasis token JWT, integrasi client credentials flow, pemisahan role/access control.',
      experience: language === 'en'
        ? 'Centralized authentication implementation at PT Cerdas Digital Nusantara.'
        : 'Implementasi otentikasi aman terpusat di PT Cerdas Digital Nusantara.'
    },
    'Datadog APM': {
      desc: language === 'en'
        ? 'Modern cloud-scale monitoring and observability suite.'
        : 'Platform observabilitas dan pemantauan sistem cloud-scale modern.',
      usage: language === 'en'
        ? 'Distributed tracing, tracking response latencies, log correlations, and proactively catching production anomalies.'
        : 'Distributed tracing antar microservices, pemantauan waktu respon API, logging, dan deteksi dini anomali di prod.',
      experience: language === 'en'
        ? 'Proactively debugging and monitoring active issues in production for 8 microservices at IFG Life.'
        : 'Monitoring production issue di 8 microservices PT Asuransi Jiwa IFG.'
    },
    'Azure Application Insights': {
      desc: language === 'en'
        ? 'Intelligent Application Performance Management (APM) in the Microsoft Azure cloud.'
        : 'Layanan Application Performance Management (APM) cerdas di dalam ekosistem Azure.',
      usage: language === 'en'
        ? 'Tracking client request telemetries, database latency profiling, and logging critical exceptions in real-time.'
        : 'Tracing request client, profiling latency database, monitoring Exception log di production secara real-time.',
      experience: language === 'en'
        ? 'Configured and tracked telemetries for 3 core services at PT AIA Financial.'
        : 'Digunakan untuk memonitor 3 services utama di PT AIA Financial.'
    },
    'Performance Optimization': {
      desc: language === 'en'
        ? 'In-depth profiling and systematic improvement of response speeds and system efficiency.'
        : 'Proses analisa mendalam dan peningkatan efisiensi respon sistem serta penggunaan resource.',
      usage: language === 'en'
        ? 'Resolving latency bottlenecks, fine-tuning database connection pools, configuring garbage collection and JVM parameters.'
        : 'Menghilangkan bottlenecks, optimalisasi pool koneksi database, JVM tuning, dan efisiensi memori program.',
      experience: language === 'en'
        ? 'Proven records of significantly increasing API response speeds for Simas Mobile App.'
        : 'Terbukti meningkatkan kinerja aplikasi secara signifikan di Simas Mobile App.'
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {language === 'en' ? (
              <>Skills & <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Tech Specialization</span></>
            ) : (
              <>Keahlian & <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Spesialisasi Teknologi</span></>
            )}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto my-4 rounded" />
          <p className="text-slate-300 text-sm sm:text-base">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Main Grid: Left is Categories, Right is Interactive Tech Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Skill Cards List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {skillsData.map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl glass-card transition-all shadow-xl"
                >
                  <h3 className="font-display font-semibold text-white text-base mb-4 flex items-center space-x-2">
                    <Sliders className="w-4 h-4 text-blue-400" />
                    <span>{t(`skills.cat.${category.title.toLowerCase().replace(/[^a-z0-9]/g, '')}`) || category.title}</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => {
                      const isSelected = selectedTech === skill.name;
                      return (
                        <div 
                          key={sIdx} 
                          className={`space-y-1.5 p-2 rounded-2xl transition-colors cursor-pointer group ${
                            isSelected ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5'
                          }`}
                          onClick={() => setSelectedTech(skill.name)}
                        >
                          <div className="flex justify-between items-center text-xs sm:text-sm">
                            <div className="flex items-center space-x-2.5">
                              <span className="p-1 rounded bg-slate-950/40 border border-white/10 group-hover:border-blue-400/40 transition-colors">
                                {iconMap[skill.icon] || <Code2 className="w-3.5 h-3.5 text-blue-400" />}
                              </span>
                              <span className={`font-medium transition-colors ${isSelected ? 'text-blue-400 font-semibold' : 'text-slate-200 group-hover:text-white'}`}>
                                {skill.name}
                              </span>
                            </div>
                            <span className="font-mono text-xs text-emerald-400">{skill.rating}%</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-1.5 w-full bg-slate-950/40 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.rating}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: sIdx * 0.05 }}
                              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Technical Inspector (Interactive Panel) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-3xl glass-accent-card shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center space-x-2 text-xs font-mono text-blue-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('skills.inspector_title')}</span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xl text-white tracking-tight mb-1">
                    {selectedTech}
                  </h4>
                  <div className="h-0.5 w-12 bg-blue-500 rounded" />
                </div>

                {techDetails[selectedTech] ? (
                  <div className="space-y-5 text-xs sm:text-sm">
                    <div className="space-y-1.5">
                      <p className="text-slate-400 font-mono uppercase tracking-wider text-[10px]">{t('skills.inspector.desc')}</p>
                      <p className="text-slate-200 leading-relaxed font-light">
                        {techDetails[selectedTech].desc}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-slate-400 font-mono uppercase tracking-wider text-[10px]">{t('skills.usage')}</p>
                      <p className="text-slate-200 leading-relaxed font-light">
                        {techDetails[selectedTech].usage}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-300 space-y-1">
                      <p className="text-blue-400 font-mono uppercase tracking-widest text-[9px] flex items-center gap-1.5">
                        <Info className="w-3 h-3" /> {t('skills.track')}
                      </p>
                      <p className="text-xs italic leading-normal">
                        {techDetails[selectedTech].experience}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <Info className="w-8 h-8 mx-auto mb-2 opacity-40 text-blue-400" />
                    <p className="text-xs">{t('skills.select_placeholder')}</p>
                  </div>
                )}
              </div>

              {/* Extra Info: Languages */}
              <div className="p-5 rounded-3xl glass-card flex justify-between items-center">
                <div>
                  <p className="text-slate-400 font-mono text-[10px] uppercase tracking-wider">{t('skills.lang')}</p>
                  <div className="flex gap-4 mt-1.5">
                    <div>
                      <span className="text-xs font-semibold text-white">Bahasa Indonesia</span>
                      <span className="text-[10px] text-emerald-400 block font-mono">Native / Professional</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white">English</span>
                      <span className="text-[10px] text-blue-400 block font-mono">Professional Working</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

