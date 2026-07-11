import { Experience, SkillCategory, ArchitectureScenario, Project } from './types';

export const personalInfo = {
  name: 'Arif Rahman Bintoro',
  title: 'Lead Backend Developer & Java Specialist',
  alias: 'A|B',
  email: 'arranusa@gmail.com',
  phone: '085701001654',
  location: 'Yogyakarta / Jakarta, Indonesia',
  githubUrl: 'https://github.com/arranusa',
  githubIoUrl: 'https://arranusa.github.io',
  linkedinUrl: 'https://linkedin.com/in/arranusa',
  instagramUrl: 'https://instagram.com/arranusa',
  aboutMe: {
    id: `Backend Developer berpengalaman dan Code Expert dengan spesialisasi arsitektur sistem yang andal. Di luar dunia coding, saya adalah seorang kepala keluarga yang aktif menjaga keseimbangan hidup melalui olahraga biliar, renang, dan fitness.`,
    en: `Experienced Backend Developer and Code Expert specializing in building scalable systems. A dedicated family man who applies the same focus and discipline from coding to a healthy lifestyle as a gym, billiards, and swimming enthusiast.`
  },
  education: {
    degree: {
      id: 'Sarjana Teknologi Informasi',
      en: 'Bachelor of Information Technology'
    },
    institution: 'Indonesian Digital Technology University',
    location: 'Yogyakarta',
    year: '2014'
  }
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Core Technologies',
    skills: [
      { name: 'Java', rating: 95, icon: 'code' },
      { name: 'Spring Framework / Spring Boot', rating: 95, icon: 'cpu' },
      { name: 'Quarkus', rating: 85, icon: 'zap' },
      { name: 'Microservices Architecture', rating: 90, icon: 'layers' },
      { name: 'Apache Kafka', rating: 85, icon: 'message-square' },
      { name: 'RESTful & SOAP APIs', rating: 90, icon: 'git-merge' }
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'PostgreSQL / SQL Server', rating: 85, icon: 'database' },
      { name: 'Multi-Database Segregation', rating: 80, icon: 'server' },
      { name: 'Microsoft Azure Cloud', rating: 80, icon: 'cloud' },
      { name: 'Docker / Containerization', rating: 85, icon: 'package' }
    ]
  },
  {
    title: 'Security & Observability',
    skills: [
      { name: 'Keycloak & JWT Auth', rating: 85, icon: 'lock' },
      { name: 'Datadog APM', rating: 85, icon: 'eye' },
      { name: 'Azure Application Insights', rating: 80, icon: 'activity' },
      { name: 'Performance Optimization', rating: 90, icon: 'trending-up' }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'ifg-life',
    company: 'PT Asuransi Jiwa IFG (IFG Life)',
    role: 'Lead Backend Developer',
    period: 'Oct 2022 - Present',
    location: 'Jakarta (Full-time)',
    description: {
      id: [
        'Menyusun perencanaan proyek (project planning) dan koordinasi teknis tim developer.',
        'Melakukan alokasi tugas kepada anggota tim berdasarkan keahlian dan keahlian spesifik masing-masing.',
        'Menghadiri pertemuan berkala dengan klien atau stakeholder untuk memberikan wawasan teknis yang komprehensif.',
        'Mengidentifikasi potensi risiko teknis dalam proyek dan mengambil langkah-langkah mitigasi proaktif.',
        'Menulis dokumentasi teknis API yang jelas dan terstruktur.',
        'Mempersiapkan, memeriksa, dan memperbaiki masalah keamanan (security issues) terkait deployment ke production.',
        'Melakukan monitoring isu production secara berkala menggunakan software Datadog.',
        'Memelihara performa dan skalabilitas sistem: 8 micro-services, 3 cronjobs, dan 2 schema database.'
      ],
      en: [
        'Formulating project planning and leading technical coordination for the developer team.',
        'Allocating tasks to team members based on their specific skills and individual expertise.',
        'Attending periodic meetings with clients and stakeholders to provide comprehensive technical insights.',
        'Identifying potential technical risks in projects and executing proactive mitigation steps.',
        'Writing clear, structured, and comprehensive API technical documentation.',
        'Preparing, reviewing, and addressing security vulnerabilities related to production deployment.',
        'Regularly monitoring production performance and active issues using Datadog APM.',
        'Maintaining system performance and scalability across 8 microservices, 3 cronjobs, and 2 database schemas.'
      ]
    },
    techStack: ['Java', 'Spring Boot', 'Quarkus', 'Microservices', 'Datadog', 'Cronjobs', 'PostgreSQL', 'Docker'],
    metrics: {
      microservices: 8,
      cronjobs: 3,
      databases: 2
    }
  },
  {
    id: 'aia-financial',
    company: 'PT AIA Financial',
    role: 'Backend Developer',
    period: 'Feb 2021 - Aug 2022',
    location: 'Jakarta (Full-time)',
    description: {
      id: [
        'Melakukan troubleshooting dan menyediakan bantuan teknis (technical assistance) yang mendalam.',
        'Memberikan bimbingan, petunjuk arah, dan saling berbagi pengetahuan (knowledge sharing) sesama developer.',
        'Membuat laporan pengembangan secara berkala kepada lead developer maupun jajaran pimpinan senior perusahaan.',
        'Melakukan code review secara teliti untuk menjamin kualitas kode, kepatuhan standar tim, dan kebersihan arsitektur.',
        'Mempersiapkan seluruh dokumen teknis yang diperlukan untuk keperluan deployment ke server production.',
        'Melakukan riset teknologi mendalam terkait implementasi berbasis cloud (Azure Cloud ecosystem).',
        'Memantau performa aplikasi di production dengan alat monitoring terintegrasi (Application Insights).',
        'Memelihara stabilitas ekosistem aplikasi: 3 services utama dan 4 database.'
      ],
      en: [
        'Troubleshooting and providing in-depth, hands-on technical assistance.',
        'Providing mentoring, technical guidance, and knowledge-sharing sessions with fellow developers.',
        'Generating regular development reports for the lead developer and senior corporate leaders.',
        'Conducting meticulous code reviews to guarantee high-quality code, team standards compliance, and clean architecture.',
        'Preparing all required technical documents and checklists for secure production deployments.',
        'Conducting in-depth technology research on cloud implementations (Azure Cloud ecosystem).',
        'Monitoring live application performance in production using integrated APM tools (Azure Application Insights).',
        'Maintaining the stability of the core application ecosystem comprising 3 key services and 4 databases.'
      ]
    },
    techStack: ['Java', 'Spring Boot', 'Azure Cloud', 'Application Insights', 'SQL Server', 'Code Review'],
    metrics: {
      services: 3,
      databases: 4
    }
  },
  {
    id: 'innovez-one',
    company: 'PT Innovez One Indonesia',
    role: 'Java Backend Developer',
    period: 'Dec 2019 - Jan 2021',
    location: 'Jakarta (Full-time)',
    description: {
      id: [
        'Mengembangkan RESTful API berkinerja tinggi yang menghubungkan aplikasi client dengan layanan backend secara mulus.',
        'Mengembangkan RESTful API khusus untuk mengintegrasikan sistem baru dengan legacy applications (aplikasi lawas).',
        'Memelihara stabilitas dan fungsionalitas sistem yang terdiri dari 8 Services utama dan 1 Database relasional.'
      ],
      en: [
        'Developing high-performance RESTful APIs that seamlessly connect client applications with core backend services.',
        'Developing specialized RESTful APIs to integrate modern systems with existing legacy applications.',
        'Maintaining the stability and functionality of backend systems comprising 8 primary services and 1 relational database.'
      ]
    },
    techStack: ['Java', 'Spring Framework', 'RESTful API', 'PostgreSQL', 'Legacy Integration'],
    metrics: {
      services: 8,
      databases: 1
    }
  },
  {
    id: 'cerdas-digital',
    company: 'PT Cerdas Digital Nusantara',
    role: 'Java Developer',
    period: 'Aug 2018 - Nov 2019',
    location: 'Yogyakarta (Full-time)',
    description: {
      id: [
        'Melakukan migrasi API legacy berbasis PHP ke Java API modern demi performa dan type-safety yang lebih baik.',
        'Merombak arsitektur sistem dari Monolithic service menjadi Microservices yang modular dan terdistribusi.',
        'Memisahkan Single Database yang padat menjadi Multi-Database yang tersegregasi per-service.',
        'Mengubah pola komunikasi sinkron antar service (REST API) menjadi asynchronous event-driven menggunakan Message Broker (Apache Kafka).',
        'Melakukan aktivitas Code Review rutin untuk menjaga konsistensi codebase.',
        'Mengimplementasikan sistem keamanan otentikasi terpusat menggunakan Keycloak dan JWT.'
      ],
      en: [
        'Migrating legacy PHP-based APIs into modern Java APIs for superior performance, reliability, and type-safety.',
        'Refactoring system architecture from monolithic systems to modular, decoupled distributed microservices.',
        'De-coupling and segregating congested single database setups into separate databases per microservice.',
        'Transitioning synchronous service communication (REST API) to asynchronous event-driven messaging using Apache Kafka.',
        'Conducting structured code reviews to ensure consistency and clean codebase habits.',
        'Implementing secure centralized authentication and single sign-on (SSO) systems using Keycloak and JWT.'
      ]
    },
    techStack: ['Java', 'Spring Boot', 'PHP Migration', 'Microservices', 'Apache Kafka', 'Keycloak', 'JWT', 'PostgreSQL']
  },
  {
    id: 'sarana-yukti',
    company: 'PT Sarana Yukti Bandhana',
    role: 'Java Developer',
    period: 'Jan 2018 - Jul 2018',
    location: 'Jakarta (Full-time)',
    description: {
      id: [
        'Mengembangkan beberapa micro-service mandiri menggunakan Java Spring Framework.',
        'Membangun modul integrasi thermal printer handal berbasis protokol perbankan ISO 8583.'
      ],
      en: [
        'Developing multiple independent and isolated microservices using the Java Spring Framework.',
        'Building a reliable thermal printer integration module based on banking protocol standards ISO 8583.'
      ]
    },
    techStack: ['Java', 'Spring Framework', 'ISO 8583', 'Thermal Printer Integration', 'Device APIs']
  },
  {
    id: 'bank-sinarmas',
    company: 'PT Bank Sinarmas Tbk',
    role: 'Java Developer',
    period: 'Nov 2016 - Dec 2017',
    location: 'Yogyakarta (Full-time)',
    description: {
      id: [
        'Memelihara dan mengoptimalkan performa API backend untuk aplikasi mobile utama (Simas Mobile App).',
        'Mengidentifikasi dan menyelesaikan hambatan performa (bottlenecks), memperbaiki bug kritis, dan meningkatkan waktu respons aplikasi secara signifikan.'
      ],
      en: [
        'Maintaining and optimizing core backend API performance for the primary mobile banking application (Simas Mobile App).',
        'Identifying and resolving performance bottlenecks, troubleshooting critical bugs, and significantly decreasing API response times.'
      ]
    },
    techStack: ['Java', 'Mobile APIs', 'SQL Server', 'Performance Tuning', 'Bug Fixing']
  },
  {
    id: 'icon-plus',
    company: 'PT Indonesia Comnets Plus (ICON+)',
    role: 'Java Developer',
    period: 'Apr 2014 - Sep 2016',
    location: 'Jakarta (Full-time)',
    description: {
      id: [
        'Membuat komponen Repository, Service, dan ViewModel terstruktur untuk mendukung aplikasi web internal perusahaan.',
        'Mengembangkan layanan web berskala besar menggunakan teknologi Java dan Spring Framework.',
        'Mengintegrasikan komunikasi data berbasis SOAP Web Services.',
        'Membuat modul pelaporan (reporting system) dinamis menggunakan Jasper Reports yang diintegrasikan langsung lewat program Java.',
        'Melakukan migrasi layanan internal PT PLN dari basis bahasa PHP ke Java demi keandalan modul pelaporan.'
      ],
      en: [
        'Building structured Repository, Service, and ViewModel components to support high-performance internal web apps.',
        'Developing robust, large-scale web services utilizing Java and Spring Framework technologies.',
        'Integrating data flows and communication using SOAP Web Services protocols.',
        'Developing dynamic reporting systems using Jasper Reports, integrated natively inside Java codebases.',
        'Migrating internal PT PLN utilities from PHP to Java to improve enterprise reporting stability and database reliability.'
      ]
    },
    techStack: ['Java', 'Spring Framework', 'SOAP', 'Jasper Reports', 'PHP Migration', 'Enterprise Reporting']
  }
];

export const architectureScenarios: ArchitectureScenario[] = [
  {
    id: 'enterprise-insurance',
    title: 'Enterprise Insurance Microservices Core',
    description: {
      id: 'Solusi arsitektur backend untuk layanan asuransi jiwa dengan keamanan tingkat tinggi, audit trail, performa optimal, dan monitoring real-time.',
      en: 'Backend architecture solution for life insurance services with high-level security, audit trail, optimal performance, and real-time monitoring.'
    },
    problem: {
      id: 'Sistem harus menangani klaim & polis asuransi secara real-time dengan skalabilitas tinggi, keamanan berlapis, dan deteksi error cepat.',
      en: 'The system must handle claims & insurance policies in real-time with high scalability, layered security, and fast error detection.'
    },
    architectureQuote: {
      id: 'Bahasa pemrograman bisa berganti, namun desain arsitektur yang solid akan bertahan melampaui siklus teknologi.',
      en: 'Programming languages may change, but a solid architectural design will outlast technology cycles.'
    },
    nodes: [
      {
        id: 'client',
        label: 'Web/Mobile App',
        type: 'client',
        description: {
          id: 'Portal nasabah & agen asuransi mengakses data polis dan klaim secara aman.',
          en: 'Customer & agent portal accessing policy and claim data securely.'
        },
        details: { id: 'Aplikasi Client', en: 'Client Application' }
      },
      {
        id: 'gateway',
        label: 'Vite/Spring Cloud Gateway',
        type: 'gateway',
        description: {
          id: 'Centralized entry point dengan routing dinamis, load balancing, dan rate limiting.',
          en: 'Centralized entry point featuring dynamic routing, load balancing, and rate limiting.'
        },
        details: 'API Gateway'
      },
      {
        id: 'auth',
        label: 'Keycloak IAM (OAuth2/JWT)',
        type: 'auth',
        description: {
          id: 'Pusat otentikasi & otorisasi dengan token-based security JWT.',
          en: 'Centralized authentication & authorization with secure token-based JWT infrastructure.'
        },
        details: 'Identity Provider'
      },
      {
        id: 'service-policy',
        label: 'Polis Microservice (Spring Boot)',
        type: 'service',
        description: {
          id: 'Mengelola siklus polis asuransi nasabah secara transaksional.',
          en: 'Manages the complete lifecycle of customer insurance policies transactionally.'
        },
        details: 'Spring Boot Service'
      },
      {
        id: 'service-claim',
        label: 'Klaim Microservice (Quarkus)',
        type: 'service',
        description: {
          id: 'Service ultra-cepat berbasis Quarkus untuk pemrosesan klaim asuransi.',
          en: 'Ultra-fast Quarkus-based service engineered for high-frequency claim processing.'
        },
        details: 'Quarkus Service'
      },
      {
        id: 'db-policy',
        label: 'Polis DB (Schema A)',
        type: 'database',
        description: {
          id: 'Penyimpanan data polis asuransi dengan relasi data yang ketat.',
          en: 'Relational storage for policy details under strict ACID transaction boundaries.'
        },
        details: 'PostgreSQL'
      },
      {
        id: 'db-claim',
        label: 'Klaim DB (Schema B)',
        type: 'database',
        description: {
          id: 'Penyimpanan data klaim nasabah secara aman dan terisolasi.',
          en: 'Isolated datastore dedicated strictly to insurance claim documentation.'
        },
        details: 'PostgreSQL'
      },
      {
        id: 'obs',
        label: 'Datadog Monitoring & APM',
        type: 'observability',
        description: {
          id: 'Distributing tracing, monitoring health service, dan logging production.',
          en: 'Distributed tracing, service health analytics, and central production logging.'
        },
        details: 'Datadog Agent'
      }
    ],
    connections: [
      { from: 'client', to: 'gateway', label: { id: 'Kirim Request HTTPS', en: 'Send HTTPS Request' }, protocol: 'HTTPS' },
      { from: 'gateway', to: 'auth', label: { id: 'Validasi Token JWT', en: 'Validate JWT Token' }, protocol: 'HTTPS' },
      { from: 'gateway', to: 'service-policy', label: { id: 'Rute Polis API', en: 'Route Policy API' }, protocol: 'HTTPS' },
      { from: 'gateway', to: 'service-claim', label: { id: 'Rute Klaim API', en: 'Route Claim API' }, protocol: 'HTTPS' },
      { from: 'service-policy', to: 'db-policy', label: { id: 'Persistensi Polis', en: 'Persist Policy Data' }, protocol: 'JDBC' },
      { from: 'service-claim', to: 'db-claim', label: { id: 'Persistensi Klaim', en: 'Persist Claim Data' }, protocol: 'JDBC' },
      { from: 'service-policy', to: 'obs', label: 'Telemetry & Logs', protocol: 'TCP' },
      { from: 'service-claim', to: 'obs', label: 'Telemetry & Logs', protocol: 'TCP' }
    ]
  },
  {
    id: 'monolith-migration',
    title: 'Monolithic to Event-Driven Microservices',
    description: {
      id: 'Transformasi dari sistem PHP Monolith menjadi ekosistem Java microservices yang asinkron dan modular dengan Message Broker.',
      en: 'System transformation from a monolithic PHP setup to asynchronous, modular Java microservices using a Message Broker.'
    },
    problem: {
      id: 'Sistem lama lambat, database terkunci (locking) karena query massal, dan kegagalan satu modul merusak seluruh sistem.',
      en: 'The legacy system was sluggish, suffered database locking under mass queries, and single-module failures crashed the whole system.'
    },
    architectureQuote: {
      id: 'Memisahkan database tunggal ke database tersegregasi adalah kunci utama otonomi microservices.',
      en: 'De-coupling a single database into segregated datastores is the ultimate key to microservices autonomy.'
    },
    nodes: [
      {
        id: 'client',
        label: 'Web Application Portal',
        type: 'client',
        description: {
          id: 'Akses web client yang sebelumnya langsung mengarah ke server PHP monolith.',
          en: 'Web client gateway previously pointing directly to monolithic PHP endpoints.'
        },
        details: { id: 'Aplikasi Web', en: 'Web Client' }
      },
      {
        id: 'gateway',
        label: 'API Gateway',
        type: 'gateway',
        description: {
          id: 'Mengatur rute lalu lintas data ke layanan mikro yang tepat.',
          en: 'Intelligently routes client requests to targeted microservice instances.'
        },
        details: 'Spring Cloud Gateway'
      },
      {
        id: 'service-user',
        label: 'User Microservice',
        type: 'service',
        description: {
          id: 'Mengelola informasi user dan integrasi otentikasi Keycloak.',
          en: 'Manages user accounts, authorization rules, and Keycloak integrations.'
        },
        details: 'Spring Boot'
      },
      {
        id: 'service-transaction',
        label: 'Transaction Microservice',
        type: 'service',
        description: {
          id: 'Mengelola transaksi keuangan yang sensitif.',
          en: 'Coordinates highly sensitive financial transactional operations.'
        },
        details: 'Spring Boot'
      },
      {
        id: 'broker',
        label: 'Apache Kafka Event Bus',
        type: 'broker',
        description: {
          id: 'Broker pesan asinkron untuk mentransfer data perubahan status tanpa blocking.',
          en: 'Asynchronous event stream engine facilitating non-blocking state dissemination.'
        },
        details: 'Kafka Cluster'
      },
      {
        id: 'service-notify',
        label: 'Notification Microservice',
        type: 'service',
        description: {
          id: 'Mengirimkan notifikasi/email secara background berdasarkan event di Kafka.',
          en: 'Listens for Kafka events and triggers automated background emails/notifies.'
        },
        details: 'Spring Boot'
      },
      {
        id: 'db-user',
        label: 'User DB (PostgreSQL)',
        type: 'database',
        description: {
          id: 'Penyimpanan user terisolasi.',
          en: 'Completely isolated datastore dedicated strictly to user profiles.'
        },
        details: 'PostgreSQL'
      },
      {
        id: 'db-trans',
        label: 'Transaction DB (PostgreSQL)',
        type: 'database',
        description: {
          id: 'Penyimpanan transaksi keuangan terisolasi.',
          en: 'Highly secure SQL storage containing isolated financial Ledgers.'
        },
        details: 'PostgreSQL'
      }
    ],
    connections: [
      { from: 'client', to: 'gateway', label: { id: 'Kirim Request', en: 'Send HTTP Request' }, protocol: 'HTTPS' },
      { from: 'gateway', to: 'service-user', label: { id: 'Rute User API', en: 'Route User API' }, protocol: 'HTTPS' },
      { from: 'gateway', to: 'service-transaction', label: { id: 'Rute Transaksi API', en: 'Route Transaction API' }, protocol: 'HTTPS' },
      { from: 'service-user', to: 'db-user', label: { id: 'Query Data', en: 'Fetch User Profiles' }, protocol: 'JDBC' },
      { from: 'service-transaction', to: 'db-trans', label: { id: 'Query Data', en: 'Update Ledger Entries' }, protocol: 'JDBC' },
      { from: 'service-transaction', to: 'broker', label: { id: 'Publish Event "TransactionCreated"', en: 'Publish Event "TransactionCreated"' }, protocol: 'Kafka Topic' },
      { from: 'broker', to: 'service-notify', label: { id: 'Consume Event "TransactionCreated"', en: 'Consume Event "TransactionCreated"' }, protocol: 'Kafka Topic' }
    ]
  },
  {
    id: 'legacy-hardware',
    title: 'Legacy API & Bank ISO 8583 Integration',
    description: {
      id: 'Arsitektur jembatan penghubung antara API seluler modern dengan protokol legacy perbankan dan integrasi hardware.',
      en: 'Bridge architecture connecting modern mobile JSON APIs with legacy banking standards and hardware elements.'
    },
    problem: {
      id: 'Aplikasi seluler (Simas Mobile) harus bertransaksi cepat dengan core banking yang menggunakan ISO 8583, serta mencetak bukti fisik.',
      en: 'The mobile banking client must transact instantly with legacy core hosts utilizing ISO 8583 bitmaps while printing physical receipts.'
    },
    architectureQuote: {
      id: 'Arsitektur yang baik mampu merangkul protokol warisan (legacy) tanpa mengorbankan kesederhanaan sistem modern.',
      en: 'Superb architecture comfortably embraces legacy communication protocol constraints without compromising the simplicity of modern layers.'
    },
    nodes: [
      {
        id: 'mobile',
        label: 'Simas Mobile Application',
        type: 'client',
        description: {
          id: 'Aplikasi mobile nasabah untuk melakukan transaksi keuangan.',
          en: 'Mobile banking client application running on customer devices.'
        },
        details: { id: 'Aplikasi Android', en: 'Android Client' }
      },
      {
        id: 'api-service',
        label: 'Spring Boot Mobile API Gateway',
        type: 'service',
        description: {
          id: 'Menyediakan endpoint RESTful JSON untuk mobile client.',
          en: 'Exposes high-performance RESTful JSON endpoints for mobile clients.'
        },
        details: 'Spring Boot'
      },
      {
        id: 'iso-module',
        label: 'ISO 8583 Engine Module',
        type: 'service',
        description: {
          id: 'Mengubah REST JSON request menjadi bit-mapped message ISO 8583.',
          en: 'Packs and unpacks JSON REST data into structured bitmapped ISO 8583 payloads.'
        },
        details: 'Java Core JPos'
      },
      {
        id: 'printer-module',
        label: 'Thermal Printer Controller',
        type: 'service',
        description: {
          id: 'Modul pengontrol printer thermal untuk mencetak struk transaksi fisik.',
          en: 'Device driver layer managing physical receipt-printing signals.'
        },
        details: 'Java Driver API'
      },
      {
        id: 'core-banking',
        label: 'Core Banking Host (Legacy)',
        type: 'auth',
        description: {
          id: 'Sistem perbankan pusat yang memproses transaksi utama.',
          en: 'Centralized core transactional ledger running on high-capacity legacy mainframes.'
        },
        details: 'AS400 / Legacy Host'
      }
    ],
    connections: [
      { from: 'mobile', to: 'api-service', label: 'POST /transaction (JSON)', protocol: 'HTTPS' },
      { from: 'api-service', to: 'iso-module', label: { id: 'Panggilan RPC Internal', en: 'Internal gRPC Call' }, protocol: 'gRPC' },
      { from: 'iso-module', to: 'core-banking', label: { id: 'Kirim Bit-Mapped Message (TCP Socket)', en: 'Transmit Bit-Map (TCP Sockets)' }, protocol: 'TCP' },
      { from: 'api-service', to: 'printer-module', label: { id: 'Picu Perintah Cetak', en: 'Trigger Print Command' }, protocol: 'HTTPS' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'balai-yasa-planner',
    title: 'BYYK - Logistics Planner',
    category: 'monolith',
    description: {
      en: 'A web-based logistics planning and locomotive maintenance scheduling application engineered for Balai Yasa Yogyakarta. Built using a modern monolithic architecture with Java 21 Quarkus backend, React frontend integrated via Quarkus Quinoa, and PostgreSQL storage.',
      id: 'Aplikasi perencanaan logistik dan penjadwalan perawatan lokomotif berbasis web untuk Balai Yasa Yogyakarta. Dibangun menggunakan arsitektur monolitik modern dengan backend Java 21 Quarkus, integrasi frontend React via Quarkus Quinoa, serta penyimpanan PostgreSQL.'
    },
    techStack: ['Java 21', 'Quarkus', 'React', 'Quarkus Quinoa', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/arranusa/balai-yasa-logistics-planner',
    imageUrl: '/assets/planner/kai_locomotive_1782121105066.jpg',
    images: [
      '/assets/planner/kai_locomotive_1782121105066.jpg',
      '/assets/planner/0.png',
      '/assets/planner/1.png',
      '/assets/planner/2.png',
      '/assets/planner/3.png',
      '/assets/planner/4.png'
    ],
    longDescription: {
      en: 'BYYK - Logistics Planner is an integrated enterprise digital solution designed specifically to modernize spare parts logistics planning and locomotive maintenance scheduling at PT Kereta Api Indonesia\'s largest locomotive workshop - Balai Yasa Yogyakarta. Leveraging the performance of Java 21 and Quarkus, the application automates the allocation of mechanical resources, engine component availability, and maintenance queues for locomotive types like CC201, CC203, CC206, and more. The integration of Quarkus Quinoa delivers a lightning-fast React-based single-page application (SPA) experience, substantially reducing inter-departmental planning overhead between logistics and operations.',
      id: 'BYYK - Logistics Planner adalah solusi digital enterprise terintegrasi yang dirancang khusus untuk memodernisasi perencanaan logistik suku cadang serta penjadwalan pemeliharaan lokomotif di bengkel lokomotif terbesar PT Kereta Api Indonesia (Persero) - Balai Yasa Yogyakarta. Mengandalkan kapabilitas Java 21 dan Quarkus, aplikasi ini mengotomatiskan alokasi sumber daya mekanik, ketersediaan komponen mesin, dan antrean masuk lokomotif tipe CC201, CC203, CC206, dsb. Integrasi Quarkus Quinoa menyajikan aplikasi single-page (SPA) berbasis React dengan performa runtime yang sangat gesit, memangkas beban koordinasi antar-divisi logistik dan operasi secara signifikan.'
    },
    keyFeatures: [
      {
        title: { en: 'Automated Locomotive Maintenance Scheduler', id: 'Penjadwal Otomatis Pemeliharaan Lokomotif' },
        description: {
          en: 'An intelligent scheduling engine that prioritizes locomotive maintenance queues (Monthly, Semi-Annual, Annual Inspections) based on active runtime hours and operational urgency.',
          id: 'Mesin penjadwalan cerdas yang memprioritaskan antrean perawatan lokomotif (Pemeriksaan Bulanan, Semi-Tahunan, Tahunan) berdasarkan jam operasi aktual dan urgensi operasional.'
        }
      },
      {
        title: { en: 'Smart Logistics & Spare Parts Allocation', id: 'Alokasi Cerdas Logistik & Suku Cadang' },
        description: {
          en: 'A real-time locomotive spare parts inventory monitoring system that automatically matches engine component availability before scheduled maintenance sessions begin.',
          id: 'Sistem pemantauan stok suku cadang lokomotif real-time yang memetakan ketersediaan komponen mesin secara otomatis sebelum proses pemeliharaan lokomotif dimulai.'
        }
      },
      {
        title: { en: 'Integrated React SPA via Quarkus Quinoa', id: 'Integrasi SPA React melalui Quarkus Quinoa' },
        description: {
          en: 'A unified interface that marries the reliability of Quarkus backend with React\'s responsiveness in a modern monolithic package, enabling streamlined single-artifact deployment and buttery-smooth user interactions.',
          id: 'Antarmuka terpadu yang memadukan keandalan backend Quarkus dengan fleksibilitas React dalam satu kesatuan monolitik modern, memudahkan deployment cepat dan navigasi yang mulus.'
        }
      },
      {
        title: { en: 'Real-time Scheduling Board & Dashboard', id: 'Papan Jadwal & Dasbor Real-time' },
        description: {
          en: 'Interactive visual boards for monitoring locomotive service status in real-time across maintenance stalls, complete with live progression track charts.',
          id: 'Dasbor visual interaktif untuk memantau status pengerjaan lokomotif di tiap depo pemeliharaan (Stall) secara real-time, lengkap dengan diagram kemajuan pengerjaan.'
        }
      }
    ],
    architectureNotes: {
      en: 'This application uses a modern monolithic approach (Single Artifact) where the React 18 frontend is compiled directly into the Quarkus 3.x backend package using the Quarkus Quinoa extension. The backend leverages Java 21 Virtual Threads (Project Loom) to process heavy logistics and scheduling computations concurrently without blocking I/O threads. PostgreSQL serves as the robust persistence layer, managing relational states of locomotives, components, and mechanics under strict transactional safety.',
      id: 'Aplikasi ini menggunakan pendekatan arsitektur monolitik modern (Single Artifact) di mana frontend React 18 digabungkan langsung dengan backend Quarkus 3.x menggunakan ekstensi Quarkus Quinoa. Backend memanfaatkan Java 21 Virtual Threads (Project Loom) untuk menangani pemrosesan data logistik yang kompleks tanpa memblokir thread I/O utama. Database PostgreSQL digunakan untuk mencatat setiap relasi entitas lokomotif, suku cadang, dan jadwal mekanik secara transaksional dengan integritas data tinggi.'
    },
    challengesSolved: {
      en: 'Resolved communication gaps regarding heavy spare parts availability by implementing an automated inventory forecasting calculator based on historical maintenance trends. Furthermore, Quinoa integration eliminated the friction of separate development environments for React and Java by automating React asset compilation directly into the native Quarkus build artifact.',
      id: 'Menyelesaikan kendala miskomunikasi ketersediaan suku cadang berat lokomotif dengan menerapkan kalkulator estimasi kebutuhan otomatis berbasis data pemeliharaan historis. Selain itu, integrasi Quinoa memecahkan kompleksitas sinkronisasi lingkungan pengembangan terpisah antara frontend React dan backend Java dengan mengotomatiskan build React langsung ke dalam artifact build Quarkus.'
    }
  },
  {
    id: 'kids-talent-system',
    title: 'Kids Talent System - SD Plus Fatahillah',
    category: 'monolith',
    description: {
      en: 'A web-based expert system utilizing the Forward Chaining method to identify children\'s interests, talents, and multiple intelligences, designed with a Quarkus Java 21 backend, PostgreSQL database, and React frontend.',
      id: 'Sistem pakar berbasis web menggunakan metode Forward Chaining untuk mendeteksi minat, bakat, dan kecerdasan majemuk (multiple intelligences) anak, dibangun dengan backend Java 21 Quarkus, database PostgreSQL, dan frontend React.'
    },
    techStack: ['Java', 'Quarkus', 'PostgreSQL', 'React', 'Tailwind CSS', 'Forward Chaining'],
    githubUrl: 'https://github.com/arranusa/kids-talent-system',
    imageUrl: '/assets/kts/main.jpg',
    images: [
      '/assets/kts/main.jpg',
      '/assets/kts/3.png',
      '/assets/kts/1.png',
      '/assets/kts/0.png',
      '/assets/kts/2.png'
    ],
    longDescription: {
      en: 'Kids Talent System is an advanced expert system web application developed specifically for SD Plus Fatahillah to assist teachers and parents in mapping children\'s potential, talents, and multiple intelligences using Gardner\'s Multiple Intelligences theory. Utilizing the Forward Chaining inference method, the system dynamically processes 80 distinct behavioral and interest indicators across 8 core intelligence categories. Built with a modern, high-performance Java 21 Quarkus 3.x backend and React 18 frontend, it delivers sub-millisecond inference speeds and excellent responsive usability. All student diagnostics, rules, and categories are securely managed via a robust PostgreSQL database.',
      id: 'Kids Talent System adalah aplikasi sistem pakar berbasis web yang dikembangkan khusus untuk SD Plus Fatahillah untuk membantu guru dan orang tua mengidentifikasi potensi minat, bakat, dan kecerdasan majemuk anak menggunakan teori Multiple Intelligences Gardner. Dengan metode inferensi Forward Chaining, sistem memproses 80 indikator gejala perilaku dan minat secara dinamis ke dalam 8 kategori kecerdasan utama. Dibangun menggunakan backend reaktif Java 21 Quarkus 3.x berkinerja tinggi dan frontend React 18, aplikasi ini menjamin kecepatan inferensi di bawah 1 milidetik. Seluruh riwayat diagnosis siswa, aturan, dan kategori dikelola secara aman dalam basis data PostgreSQL.'
    },
    keyFeatures: [
      {
        title: { en: 'Forward Chaining Inference Engine', id: 'Mesin Inferensi Forward Chaining' },
        description: {
          en: 'A highly optimized inference engine that processes parent/teacher observation checklists against 24 expert rules to map children\'s dominant intelligences with zero latency.',
          id: 'Mesin inferensi otomatis yang memproses checklist observasi orang tua/guru secara dinamis berdasarkan 24 aturan pakar untuk memetakan kecerdasan dominan anak secara instan.'
        }
      },
      {
        title: { en: 'Multiple Intelligences Profiling & Reports', id: 'Profil & Laporan Kecerdasan Majemuk' },
        description: {
          en: 'Generates detailed, printable expert reports with a dynamic intelligence bar graph, identified dominant talents, and customized counseling advice.',
          id: 'Menghasilkan laporan hasil analisis pakar yang mendalam dan siap cetak, lengkap dengan grafik kecerdasan Gardner, bakat dominan teridentifikasi, serta saran bimbingan konseling.'
        }
      },
      {
        title: { en: 'Centralized Data Management Panel', id: 'Panel Pengelolaan Data Terpusat' },
        description: {
          en: 'Provides admin portals to manage system users (admin, students/guardians), 8 talent categories, 80 diagnostic indicators, and 24 expert rules.',
          id: 'Menyediakan portal administrator yang tangguh untuk mengelola pengguna sistem (admin, siswa/wali), 8 kategori bakat, 80 indikator gejala, serta 24 aturan pakar.'
        }
      },
      {
        title: { en: 'Reactive Java 21 Quarkus & Postgres Stack', id: 'Arsitektur Quarkus & Postgres Reaktif' },
        description: {
          en: 'Leverages Quarkus Reactive Streams and Agroal connection pooling for lightning-fast concurrent diagnosis requests and high-security standards.',
          id: 'Memanfaatkan Quarkus Reactive Streams dan Agroal connection pooling untuk menangani sesi diagnosis bersamaan dengan cepat, andal, dan berkeamanan tinggi.'
        }
      }
    ],
    architectureNotes: {
      en: 'The backend is built with Java 21 using the Quarkus framework for native compilation, fast cold-starts, and minimal memory footprints. It uses PostgreSQL for secure relational data persistence. The frontend is built on React 18 with Tailwind CSS, leveraging high-performance charting components (Recharts) to display the intelligence profiling bars elegantly.',
      id: 'Arsitektur backend dirancang menggunakan Java 21 dengan framework Quarkus untuk kompilasi native yang instan dan penggunaan memori yang efisien. Penyimpanan data relasional menggunakan PostgreSQL yang andal. Bagian frontend dibangun menggunakan React 18 dan Tailwind CSS, memanfaatkan Recharts untuk menampilkan grafik profil kecerdasan secara dinamis dan responsif.'
    },
    challengesSolved: {
      en: 'Solved rule evaluation overhead by implementing a compiled forward chaining engine that evaluates the tree of 80 indicators against 24 expert rules in micro-seconds. Addressed database query contention during concurrent classroom-wide testing by decoupling diagnostic state writes through asynchronous virtual thread pools.',
      id: 'Menyelesaikan hambatan evaluasi aturan dengan menerapkan mesin forward chaining terkompilasi yang mengevaluasi pohon 80 indikator terhadap 24 aturan pakar dalam hitungan mikrodetik. Mengatasi persaingan kueri basis data selama sesi ujian serentak satu sekolah dengan memisahkan penulisan riwayat diagnosis melalui thread virtual asinkron.'
    }
  },
  {
    id: 'devoic-pos',
    title: 'DEVOIC POS - Multi-Tenant SaaS Platform',
    category: 'monolith',
    description: {
      en: 'A high-performance enterprise SaaS Point of Sale (POS) system with real-time financial dashboards, FIFO inventory tracking, voucher controls, and an encrypted SOC-2 compliant audit log, engineered with a Quarkus Java backend and a React frontend.',
      id: 'Sistem Point of Sale (POS) SaaS enterprise berkinerja tinggi dengan dasbor keuangan real-time, pelacakan stok FIFO, kontrol voucher, dan log audit terenkripsi standar SOC-2, dirancang menggunakan backend Java Quarkus dan frontend React.'
    },
    techStack: ['Java', 'Quarkus', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/arranusa/devoic-pos-platform',
    imageUrl: '/assets/pos/main.jpg',
    images: [
      '/assets/pos/2.png',
      '/assets/pos/0.png',
      '/assets/pos/1.png',
      '/assets/pos/3.png'
    ],
    longDescription: {
      en: 'A state-of-the-art SaaS POS platform crafted for high-volume coffee shops, restaurants, and retail outlets. The system features a robust multi-tenant architecture with PostgreSQL schema-based tenant isolation to guarantee client data segregation. It includes a lightning-fast cashier checkout interface with barcode scanning emulation, real-time inventory tracking utilizing First-In-First-Out (FIFO) calculations, automatic retail discount/voucher engines, and an unalterable active audit trail logging transaction ledger engineered to satisfy strict SOC-2 security compliance standards.',
      id: 'Platform SaaS POS mutakhir yang dirancang untuk kedai kopi, restoran, dan gerai ritel dengan volume transaksi tinggi. Sistem ini memiliki arsitektur multi-tenant yang kuat dengan isolasi skema basis data PostgreSQL untuk menjamin pemisahan data pelanggan. Sistem ini menyertakan antarmuka kasir super cepat dengan simulasi pemindaian barcode, pelacakan inventaris real-time menggunakan perhitungan First-In-First-Out (FIFO), sistem diskon/voucher retail otomatis, serta log audit transaksional aktif standar keamanan SOC-2 yang tidak dapat dimanipulasi.'
    },
    keyFeatures: [
      {
        title: { en: 'Interactive Financial Analytics Dashboard', id: 'Dasbor Analisis Keuangan Interaktif' },
        description: {
          en: 'Real-time charts illustrating sales volumes, gross margins (HPP/COGS vs Revenue), and popular menu items with active filters and PDF/CSV report exports.',
          id: 'Grafik real-time yang menyajikan volume penjualan, margin kotor (HPP vs Omset), serta item menu terpopuler dengan filter aktif dan ekspor laporan PDF/CSV.'
        }
      },
      {
        title: { en: 'Automated FIFO Stock Management', id: 'Manajemen Stok FIFO Otomatis' },
        description: {
          en: 'Tracks batch buy-costs and sales-margins natively to prevent stock valuation anomalies, complete with real-time low-stock alert notifications.',
          id: 'Melacak biaya modal batch dan margin secara native untuk mencegah anomali penilaian stok, lengkap dengan sistem peringatan stok menipis secara real-time.'
        }
      },
      {
        title: { en: 'Integrated Checkout & Cashier Screen', id: 'Layar Kasir & Kasir Terintegrasi' },
        description: {
          en: 'An elegant cashier screen supporting physical scan emulation, multiple retail discount tiers, manual pricing, and multi-tenant billing calculations.',
          id: 'Layar kasir elegan yang mendukung simulasi pemindaian fisik, berbagai tingkat diskon ritel, harga manual, dan perhitungan tagihan multi-penyewa.'
        }
      },
      {
        title: { en: 'SOC-2 Standard Active Audit Logging', id: 'Log Audit Aktif Standar SOC-2' },
        description: {
          en: 'A tamper-proof ledger recording inventory shifts, security auth handshakes, database synchronizations, and system administration events in an encrypted format.',
          id: 'Buku besar anti-manipulasi yang mencatat pergerakan inventaris, autentikasi keamanan, sinkronisasi basis data, dan aktivitas admin sistem dalam format terenkripsi.'
        }
      }
    ],
    architectureNotes: {
      en: 'This system is built using Quarkus (Java 21) on the backend for quick cold-start speeds and low memory consumption, utilizing PostgreSQL with connection pools managed via Agroal. The backend provides high-performance reactive REST endpoints. The frontend is built on React 18 with Tailwind CSS, utilizing high-performance charting components (Recharts) and structured local state managers for fluid interactions.',
      id: 'Sistem ini dirancang menggunakan Quarkus (Java 21) pada backend untuk kecepatan cold-start yang instan dan penggunaan memori rendah, memanfaatkan PostgreSQL dengan connection pool Agroal. Backend menyediakan API REST reaktif berkinerja tinggi. Frontend dibangun di atas React 18 dengan Tailwind CSS, menggunakan Recharts untuk visualisasi keuangan interaktif yang mulus.'
    },
    challengesSolved: {
      en: 'Solved multi-tenant resource contention by establishing a dynamic Schema-per-Tenant router pool via Agroal / HikariCP, reducing query latency by 40% and ensuring strict isolation of customer databases. Designed an asynchronous, transactional audit log that runs on separate virtual threads, completely eliminating checkout latency.',
      id: 'Menyelesaikan kendala persaingan sumber daya multi-tenant dengan membangun router pool skema-per-penyewa dinamis via Agroal / HikariCP, mengurangi latensi query sebesar 40% dan memastikan isolasi data pelanggan yang ketat. Merancang log audit transaksional asinkron pada thread virtual terpisah, sepenuhnya menghilangkan hambatan kecepatan pada kasir.'
    }
  },
  {
    id: 'bmas-banking-platform',
    title: 'Core Banking & API Platform',
    category: 'integration',
    description: {
      en: 'Enterprise core banking services and high-throughput RESTful APIs with Kafka event streaming, Redis caching, and automated multi-server CI/CD pipelines.',
      id: 'Layanan perbankan inti enterprise dan API RESTful berkinerja tinggi dengan event streaming Kafka, Redis cache, dan pipeline CI/CD multi-server otomatis.'
    },
    techStack: ['Java 17', 'Spring Boot', 'Kafka MSK', 'PostgreSQL', 'Redis', 'CI/CD'],
    githubUrl: 'https://github.com/arranusa/bmas-banking-platform',
    imageUrl: '/assets/bmas/main.jpg',
    images: [
      '/assets/bmas/main.jpg',
      '/assets/bmas/1.jpeg',
      '/assets/bmas/0.jpeg',
      '/assets/bmas/3.jpeg'
    ],
    longDescription: {
      en: 'A highly secure, high-performance enterprise banking platform designed for scalable funds transfer, onboarding, and microservice orchestration. Built to meet stringent banking security and regulatory compliance standard practices.',
      id: 'Platform perbankan enterprise berkinerja tinggi dan sangat aman yang dirancang untuk transfer dana terukur, registrasi pengguna, dan orkestrasi mikroservis. Dibangun untuk memenuhi standar kepatuhan regulasi dan keamanan perbankan yang ketat.'
    },
    keyFeatures: [
      {
        title: { en: 'Secure RESTful APIs & Web Services', id: 'API RESTful & Layanan Web Aman' },
        description: {
          en: 'Designed and implemented robust, secure financial REST endpoints and microservices, engineered with optimal caching structures via Redis.',
          id: 'Merancang dan menerapkan endpoint REST finansial serta mikroservis yang aman dan kuat, dirancang dengan struktur cache optimal melalui Redis.'
        }
      },
      {
        title: { en: 'Performance Optimization & Scaling', id: 'Optimasi & Skalabilitas Kinerja' },
        description: {
          en: 'Optimized existing core banking codebases to enhance transactional throughput, scalability, and resource utilization under heavy loads.',
          id: 'Mengoptimalkan basis kode inti perbankan yang ada untuk meningkatkan throughput transaksi, skalabilitas, dan pemanfaatan sumber daya saat beban tinggi.'
        }
      },
      {
        title: { en: 'Production Security Hardening', id: 'Penguatan Keamanan Produksi' },
        description: {
          en: 'Prepared, audited, and resolved critical security vulnerabilities (OWASP Top 10) prior to production deployment, ensuring strict compliance with industry standards.',
          id: 'Mempersiapkan, mengaudit, dan menyelesaikan kerentanan keamanan kritis (OWASP Top 10) sebelum deployment ke produksi, memastikan kepatuhan ketat terhadap standar industri.'
        }
      },
      {
        title: { en: 'Multi-Environment CI/CD Deployments', id: 'Deployment CI/CD Multi-Lingkungan' },
        description: {
          en: 'Established automated build and deployment pipelines targeting Development, SIT, UAT, and Production bare-metal or cloud servers.',
          id: 'Membangun pipeline build dan deployment otomatis untuk server Development, SIT, UAT, dan Produksi baik di bare-metal maupun cloud.'
        }
      }
    ],
    architectureNotes: {
      en: 'Engineered with Java 17 and Spring Boot for solid backend services, with Redis for speed and AWS Kafka MSK for asynchronous transaction and audit ledger streaming. Utilizes PostgreSQL for persistent and highly available ledger databases.',
      id: 'Dirancang dengan Java 17 dan Spring Boot untuk layanan backend kokoh, Redis untuk kecepatan, dan AWS Kafka MSK untuk streaming transaksi dan log audit secara asinkron. Memanfaatkan PostgreSQL untuk database transaksi yang persisten dan highly available.'
    },
    challengesSolved: {
      en: 'Mitigated transaction deadlocks and race conditions under concurrent peak traffic by implementing pessimistic database locking in PostgreSQL and Distributed Locks via Redis. Accelerated deployment cycle by replacing manual setups with robust multi-stage CI/CD automation.',
      id: 'Memitigasi deadlock transaksi dan race condition di bawah beban puncak bersamaan dengan menerapkan locking database pesimistik pada PostgreSQL dan Distributed Lock via Redis. Mempercepat siklus deployment dengan mengganti setup manual dengan otomatisasi CI/CD multi-tahap.'
    }
  },
  {
    id: 'pln-eprocurement',
    title: 'PLN - eProcurement Platform',
    category: 'monolith',
    description: {
      en: 'A comprehensive, monolithic enterprise e-Procurement web application built with Java 8, Spring, and jQuery for PT PLN (Persero). It automates and digitizes the online procurement process of goods and services with secure transactional persistence via MySQL and Oracle databases.',
      id: 'Aplikasi web e-Procurement enterprise monolitik komprehensif yang dibangun dengan Java 8, Spring, dan jQuery untuk PT PLN (Persero). Mengotomatiskan dan mendigitalisasi proses pengadaan barang dan jasa secara online dengan penyimpanan transaksional aman menggunakan database MySQL dan Oracle.'
    },
    techStack: ['Java 8', 'Spring', 'HTML/CSS', 'JavaScript', 'jQuery', 'MySQL', 'Oracle'],
    githubUrl: 'https://github.com/arranusa/pln-eprocurement',
    imageUrl: '/assets/eproc/main.jpg',
    images: [
      '/assets/eproc/main.jpg',
      '/assets/eproc/0.png',
      '/assets/eproc/1.png',
      '/assets/eproc/2.png'
    ],
    longDescription: {
      en: 'PLN - eProcurement is a mission-critical web application developed to handle electronic bidding, vendor management, and contract sourcing workflows online. Designed to promote corporate transparency and operational efficiency, the monolithic architecture harnesses Java 8 and the robust Spring ecosystem, combined with interactive jQuery/HTML5 client-side views. The system integrates dual relational persistence with MySQL for rapid bidding data storage and Oracle Database for central enterprise asset records, ensuring maximum reliability and transactional safety.',
      id: 'PLN - eProcurement adalah aplikasi web mission-critical yang dikembangkan untuk menangani lelang elektronik, manajemen vendor, dan alur kerja kontrak pengadaan secara online. Dirancang untuk meningkatkan transparansi perusahaan dan efisiensi operasional, arsitektur monolitik ini memanfaatkan Java 8 dan ekosistem Spring yang kokoh, berkolaborasi dengan tampilan interaktif jQuery/HTML5. Sistem ini mengintegrasikan persistensi relasional ganda dengan MySQL untuk pencatatan data tender yang cepat dan Oracle Database untuk rekaman aset enterprise utama, memastikan keandalan maksimum dan keamanan transaksional.'
    },
    keyFeatures: [
      {
        title: { en: 'Automated Vendor Onboarding & Verification', id: 'Siklus Hidup Vendor & Verifikasi Otomatis' },
        description: {
          en: 'Allows suppliers and contractors to securely register, upload verification certificates, and participate in ongoing tenders electronically.',
          id: 'Memungkinkan pemasok dan kontraktor untuk melakukan registrasi secara aman, mengunggah sertifikat verifikasi, dan berpartisipasi dalam tender aktif secara elektronik.'
        }
      },
      {
        title: { en: 'Electronic Bidding & Auction Engine', id: 'Mesin Lelang & Penawaran Elektronik' },
        description: {
          en: 'A secure online portal where vendors can submit price bids and proposals for active projects, backed by encrypted database transaction controls.',
          id: 'Portal online aman di mana vendor dapat mengajukan penawaran harga dan proposal untuk proyek aktif, didukung oleh kontrol transaksi database yang terenkripsi.'
        }
      },
      {
        title: { en: 'Integrated Procurement Workflow', id: 'Alur Kerja Pengadaan Terintegrasi' },
        description: {
          en: 'End-to-end management from request-for-proposal (RFP) creation, bidding evaluations, and finalist selection to automatic contract template rendering.',
          id: 'Manajemen menyeluruh dari pembuatan Request-For-Proposal (RFP), evaluasi penawaran, pemilihan finalis, hingga pembuatan draf kontrak otomatis.'
        }
      },
      {
        title: { en: 'Enterprise Dual-Database Persistence', id: 'Persistensi Database Ganda Enterprise' },
        description: {
          en: 'Utilizes high-performance MySQL databases for real-time tender actions alongside enterprise-grade Oracle Database for compliance auditing and permanent transaction logging.',
          id: 'Memanfaatkan database MySQL berkinerja tinggi untuk operasional tender real-time dan Oracle Database skala enterprise untuk audit kepatuhan serta log transaksi permanen.'
        }
      }
    ],
    architectureNotes: {
      en: 'Developed as a stable monolithic application leveraging Java 8, Spring MVC, and Hibernate ORM. Dynamic frontend controls and real-time form validations are powered by classic jQuery, vanilla JavaScript, and customized CSS3. The data layer splits persistence between Oracle Database (enterprise assets and official auditing) and MySQL (high-performance auction and transactional records), optimized via HikariCP connection pooling.',
      id: 'Dikembangkan sebagai aplikasi monolitik stabil yang memanfaatkan Java 8, Spring MVC, dan Hibernate ORM. Kontrol frontend dinamis dan validasi formulir instan ditenagai oleh jQuery klasik, vanilla JavaScript, dan CSS3 kustom. Lapisan data membagi persistensi antara Oracle Database (untuk aset perusahaan dan audit resmi) dan MySQL (untuk data lelang berkecepatan tinggi), dioptimalkan melalui connection pooling HikariCP.'
    },
    challengesSolved: {
      en: 'Mitigated performance bottleneck during peak bidding hours by implementing optimized database transaction boundaries and indexing strategies across MySQL and Oracle. Handled complex legacy browser compatibility requirements for corporate networks by building highly backward-compatible HTML5/CSS and jQuery views with rigorous cross-browser testing.',
      id: 'Memitigasi kendala bottleneck performa selama jam sibuk pengajuan lelang dengan menerapkan batas transaksi database yang dioptimalkan serta strategi pengindeksan pada MySQL dan Oracle. Menangani persyaratan kompatibilitas browser legacy yang rumit di jaringan korporat dengan membangun tampilan HTML5/CSS dan jQuery yang sangat kompatibel ke belakang melalui pengujian lintas browser yang ketat.'
    }
  },
  {
    id: 'insurance-saas-platform',
    title: 'Insurance SaaS Platform',
    category: 'monolith',
    description: {
      en: 'A high-performance enterprise Insurance SaaS platform engineered with Java 21 and Quarkus. It automates policy creation, invoicing, journal report generation, and real-time ledger balance monitoring.',
      id: 'Platform SaaS Asuransi skala enterprise berkinerja tinggi yang dirancang dengan Java 21 dan Quarkus. Sistem ini mengotomatiskan pembuatan polis, data invoice, pelaporan jurnal keuangan, dan pemantauan saldo akun secara real-time.'
    },
    techStack: ['Java 21', 'Quarkus', 'PostgreSQL', 'Oracle', 'Redis', 'Valkey', 'Kafka', 'ArgoCD', 'Datadog', 'Jenkins', 'Jira', 'Swagger-UI', 'Confluence'],
    githubUrl: 'https://github.com/arranusa/insurance-saas-platform',
    imageUrl: '/assets/ifg/lycs-architecture-U2BI3GMnSSE-unsplash.jpg',
    images: [
      '/assets/ifg/lycs-architecture-U2BI3GMnSSE-unsplash.jpg',
      '/assets/ifg/0.png',
      '/assets/ifg/1.png',
      '/assets/ifg/2.png',
      '/assets/ifg/3.png',
      '/assets/ifg/4.png',
      '/assets/ifg/5.png'
    ],
    longDescription: {
      en: 'Insurance SaaS Platform is an integrated cloud-native enterprise system designed to handle high-throughput insurance operations. It enables multi-tenant policy management, dynamic invoicing cycles, automated financial journal compilation, and precise account balance ledger monitoring. Developed with modern Java 21 and Quarkus, the platform utilizes Kafka for event-driven transactional consistency, PostgreSQL and Oracle for redundant reliable data persistence, and a dual caching strategy using Redis and Valkey for sub-millisecond response times.',
      id: 'Insurance SaaS Platform adalah sistem enterprise cloud-native terintegrasi yang dirancang untuk menangani operasional asuransi dengan throughput tinggi. Platform ini memungkinkan manajemen polis multi-tenant, siklus pembuatan invoice dinamis, kompilasi laporan jurnal keuangan otomatis, serta pemantauan saldo buku besar akun yang presisi. Dikembangkan dengan Java 21 dan Quarkus modern, platform ini menggunakan Kafka untuk konsistensi transaksi berbasis event, PostgreSQL dan Oracle untuk persistensi data ganda yang andal, serta strategi caching ganda menggunakan Redis dan Valkey demi respons secepat sub-milidetik.'
    },
    keyFeatures: [
      {
        title: { en: 'Automated Policy & Invoice Lifecycle', id: 'Siklus Hidup Polis & Invoice Otomatis' },
        description: {
          en: 'Streamlined flow for creating and managing insurance policies, auto-generating compliant invoices, and tracking payment status.',
          id: 'Alur kerja otomatis untuk membuat dan mengelola polis asuransi, pembuatan invoice secara instan yang sesuai regulasi, dan pelacakan status pembayaran.'
        }
      },
      {
        title: { en: 'Automated Financial Journal Generation', id: 'Pembuatan Laporan Jurnal Otomatis' },
        description: {
          en: 'Real-time generation of accounting journal reports from policy premium transactions, ensuring compliance with international financial reporting standards.',
          id: 'Pembuatan laporan jurnal akuntansi secara real-time dari transaksi premi polis, memastikan kepatuhan terhadap standar pelaporan keuangan internasional.'
        }
      },
      {
        title: { en: 'Real-time Account Balance Monitoring', id: 'Pemantauan Saldo Akun Real-time' },
        description: {
          en: 'High-fidelity, event-driven monitoring of financial balances, cash flows, and account movements backed by event sourcing and state synchronization via Kafka.',
          id: 'Pemantauan saldo keuangan, arus kas, dan mutasi akun secara real-time berbasis event, didukung oleh event sourcing dan sinkronisasi status via Kafka.'
        }
      },
      {
        title: { en: 'Dual Engine Cache & High Availability DB', id: 'Dual Engine Cache & DB Ketersediaan Tinggi' },
        description: {
          en: 'Leverages hybrid PostgreSQL & Oracle databases with Valkey & Redis caching layers to ensure continuous availability, horizontal scaling, and ultra-low read latency.',
          id: 'Memanfaatkan database hibrida PostgreSQL & Oracle dengan lapisan caching Valkey & Redis untuk memastikan ketersediaan berkelanjutan, penskalaan horizontal, dan latensi baca sangat rendah.'
        }
      }
    ],
    architectureNotes: {
      en: 'The architecture is built on a high-throughput reactive core using Java 21 (Virtual Threads) and Quarkus, significantly reducing memory footprint while maximizing execution speed. A distributed event mesh via Apache Kafka coordinates transactions between policy, invoice, and ledger services. Relational consistency is divided between PostgreSQL for tenant management/invoicing and Oracle Database for core policy calculations. Double-layer caching with Redis and Valkey accelerates session management and frequent ledger read requests.',
      id: 'Arsitektur sistem ini dibangun di atas core reaktif bertransaksi tinggi menggunakan Java 21 (Virtual Threads) dan Quarkus, meminimalkan footprint memori sekaligus memaksimalkan kecepatan eksekusi. Distribusi event mesh melalui Apache Kafka mengoordinasikan transaksi antara layanan polis, invoice, dan buku besar. Konsistensi relasional dibagi antara PostgreSQL untuk manajemen tenant/invoicing dan Oracle Database untuk kalkulasi polis inti. Lapisan caching ganda menggunakan Redis dan Valkey mempercepat manajemen sesi dan permintaan baca buku besar yang berfrekuensi tinggi.'
    },
    challengesSolved: {
      en: 'Solved complex reconciliation delays between insurance invoicing and active bank ledger balances by introducing an event-driven ledger sync engine powered by Kafka. Designed unified database transaction routers that bridge transactional updates seamlessly across PostgreSQL and Oracle DBs without data drift. Streamlined development lifecycle and enhanced software quality through Jira integration, Swagger-UI API documentation, Confluence engineering specs, and full GitOps automation with Datadog monitoring and ArgoCD/Jenkins CI/CD.',
      id: 'Mengatasi keterlambatan rekonsiliasi yang kompleks antara penagihan asuransi dan saldo buku besar aktif bank dengan memperkenalkan mesin sinkronisasi buku besar berbasis event yang ditenagai oleh Kafka. Merancang router transaksi database terpadu yang menjembatani pembaruan transaksional secara mulus di seluruh PostgreSQL dan Oracle DB tanpa adanya drift data. Menyederhanakan siklus hidup pengembangan dan meningkatkan kualitas perangkat lunak melalui integrasi Jira, dokumentasi API Swagger-UI, spesifikasi teknis Confluence, serta otomatisasi penuh GitOps dengan pemantauan Datadog dan ArgoCD/Jenkins CI/CD.'
    }
  }
];

