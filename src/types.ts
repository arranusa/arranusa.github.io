export interface BilingualText {
  en: string;
  id: string;
}

export interface BilingualTextList {
  en: string[];
  id: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: {
    en: string[];
    id: string[];
  };
  techStack: string[];
  metrics?: {
    services?: number;
    cronjobs?: number;
    databases?: number;
    microservices?: number;
  };
}

export interface SkillCategory {
  title: string;
  skills: { name: string; rating: number; icon: string }[];
}

export interface ArchitectureScenario {
  id: string;
  title: string;
  description: BilingualText;
  problem: BilingualText;
  architectureQuote: BilingualText;
  nodes: {
    id: string;
    label: string;
    type: 'client' | 'gateway' | 'auth' | 'service' | 'broker' | 'database' | 'observability';
    description: BilingualText;
    details?: BilingualText | string;
  }[];
  connections: {
    from: string;
    to: string;
    label: BilingualText | string;
    protocol: 'HTTPS' | 'gRPC' | 'TCP' | 'AMQP' | 'Kafka Topic' | 'JDBC';
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'core' | 'microservice' | 'library' | 'integration' | 'observability' | 'monolith';
  description: BilingualText;
  techStack: string[];
  githubUrl?: string;
  imageUrl?: string;
  images?: string[];
  metrics?: {
    label: BilingualText;
    value: string;
  }[];
  longDescription?: BilingualText;
  keyFeatures?: {
    title: BilingualText;
    description: BilingualText;
  }[];
  architectureNotes?: BilingualText;
  challengesSolved?: BilingualText;
}

