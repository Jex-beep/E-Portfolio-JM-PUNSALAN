/** Display order for filters; the type derives from it so every category gets a chip. */
export const PROJECT_CATEGORIES = ['internship', 'freelance', 'academic'] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  internship: 'Internship',
  freelance: 'Client Work',
  academic: 'Academic',
}

export const CATEGORY_DESCRIPTIONS: Record<ProjectCategory, string> = {
  internship: 'Internship project',
  freelance: 'Freelance client project',
  academic: 'Academic project',
}

/** Real-world work done for an outside organization, counted in the Home stats. */
export const CATEGORY_IS_INDUSTRY: Record<ProjectCategory, boolean> = {
  internship: true,
  freelance: true,
  academic: false,
}

export interface Project {
  slug: string
  name: string
  tagline: string
  category: ProjectCategory
  /** Organization the work was done for, when not academic */
  organization?: string
  role: string
  goal: string
  features: readonly string[]
  tech: readonly string[]
  logo: string
  images: readonly string[]
  /** Order on the Home page featured list; undefined = not featured */
  featuredOrder?: number
}

export const projects: readonly Project[] = [
  {
    slug: 'risk-management-system',
    name: 'Risk Management System',
    tagline: 'A corporation-wide risk register and analytics platform for Clark International Airport.',
    category: 'internship',
    organization: 'Clark International Airport Corporation',
    role: 'Full-Stack Developer (IT Internship)',
    goal: 'A web-based risk management platform for Clark International Airport Corporation that centralizes how every department identifies, assesses and tracks organizational risk. Departments file risk reports scored by Risk Priority Number (RPN), an IQAC reviewer validates each one through a review queue, and management gets a live picture of risk across the whole corporation — by classification, by department, and on a severity heat map.',
    features: [
      'Risk register with RFN codes plus self-assessed and IQAC-validated RPN scores',
      'Review workflow — Pending Review, Owned, or Returned for Revision',
      'Analytics dashboard with risk classification, per-department breakdown and severity heat map',
      'Role-based access for Department Users, IQAC Reviewers and System Admins',
      'User management with an enforced password policy and first-login password change',
      'Account activity log, plus search and filters by department, status and tier',
    ],
    tech: ['React', 'Node.js', 'MySQL'],
    logo: '/projects/ciac-logo-transparent.png',
    images: [
      '/projects/RiskManagementSystem2.png',
      '/projects/RiskManagementSystem1.png',
      '/projects/RiskManagementSystem3.png',
      '/projects/RiskManagementSystem4.png',
    ],
    featuredOrder: 1,
  },
  {
    slug: 'misd-document-tracking',
    name: 'MISD Document Tracking System',
    tagline: 'Every incoming and outgoing document at CIAC’s MIS Division, tracked end to end.',
    category: 'internship',
    organization: 'Clark International Airport Corporation',
    role: 'Full-Stack Developer (IT Internship)',
    goal: 'An internal tracking log for the Management Information Systems Division (MISD) of Clark International Airport Corporation that replaces paper routing logs. Each incoming or outgoing document gets an MISD reference number, and every hand-off between departments is recorded as a routing round — who received it, when, what action was taken and its status — so staff can see at a glance where any document is and what still needs attention.',
    features: [
      'Auto-numbered MISD reference codes for every document',
      'Incoming and outgoing routing rounds with receiver, timestamps and actions',
      'Pending, In Process and Complete statuses with live dashboard counters',
      'Search by MISD no., subject, type or department, with filters and sorting',
      'Covers CIAC document types — purchase requests, leave and overtime forms, memos, vouchers and more',
      'Completed-documents archive and data export',
    ],
    tech: ['React', 'Node.js', 'MySQL'],
    logo: '/projects/ciac-logo-transparent.png',
    images: [
      '/projects/DocumentTrackingLog1.png',
      '/projects/DocumentTrackingLog2.png',
      '/projects/DocumentTrackingLog3.png',
      '/projects/DocumentTrackingLog4.png',
    ],
  },
  {
    slug: 'gt-garage',
    name: 'GT Garage',
    tagline: 'Bookings, services and content for a real auto repair shop.',
    category: 'freelance',
    role: 'Full-Stack Developer (Client Project)',
    goal: 'A client website for an auto repair shop that showcases its services and packages, backed by a real-time booking system. The admin sees bookings live and can accept or deny them, while customers track their booking status by entering a reference number on the tracking page.',
    features: [
      'Real-time booking system with admin approval flow',
      'Booking tracking via reference number',
      'Service and package showcase',
      'Admin-authored blog for stronger SEO',
    ],
    tech: ['Angular', 'Supabase', 'Node.js'],
    logo: '/projects/gt-garage-logo.png',
    images: [
      '/projects/gtgarage1.png',
      '/projects/gtgarage2.png',
      '/projects/gtgarage3.png',
      '/projects/gtgarage4.png',
    ],
    featuredOrder: 2,
  },
  {
    slug: 'grabmeyaya',
    name: 'GrabMeYaya',
    tagline: 'A verified marketplace connecting families with trusted caregivers.',
    category: 'academic',
    role: 'Full-Stack Developer',
    goal: 'A high-performance, dual-access platform that streamlines domestic service recruitment — a secure, verified environment where service providers showcase their professional history and employers hire through an optimized, filter-driven experience.',
    features: [
      'Dual-role registration system',
      'User profile management system',
      'Advanced hiring interface with filters',
      'Simple dashboard layout',
      'Clean and intuitive user flow',
    ],
    tech: ['Angular', 'Node.js', 'PostgreSQL'],
    logo: '/projects/grab-me-yaya-logo.png',
    images: [
      '/projects/grabmeyaya1.png',
      '/projects/grabmeyaya2.png',
      '/projects/grabmeyaya3.png',
      '/projects/grabmeyaya4.png',
    ],
    featuredOrder: 3,
  },
  {
    slug: 'campass',
    name: 'CAMPASS',
    tagline: 'Real-time queue management for Holy Angel University.',
    category: 'academic',
    role: 'Full-Stack Developer',
    goal: 'A centralized, real-time queue management ecosystem for student services at Holy Angel University — a synchronized digital waiting room that eliminates physical congestion while giving administrators data-driven insights to optimize campus service efficiency.',
    features: [
      'Real-time queue tracking system',
      'Digital service appointment scheduling',
      'Student notification system',
      'Admin analytics dashboard',
      'Mobile-optimized interface',
    ],
    tech: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'PostgreSQL'],
    logo: '/projects/campass-logo.png',
    images: ['/projects/campass1.png', '/projects/campass2.png'],
  },
  {
    slug: 'mj-quality-cars',
    name: 'MJ Quality Cars',
    tagline: 'A showroom-grade marketplace for quality used cars.',
    category: 'academic',
    role: 'Full-Stack Developer',
    goal: 'A premium, visually-driven automotive marketplace that replicates the prestige of a physical showroom — a high-speed inventory system handling high-resolution media on a performance-first interface, from vehicle discovery to final inquiry.',
    features: [
      'Car listing grid with advanced filtering',
      'Detailed vehicle information pages',
      'Organized category navigation system',
      'Interactive image gallery for vehicles',
    ],
    tech: ['Angular', 'Node.js', 'MongoDB', 'TailwindCSS'],
    logo: '/projects/mjqualitycars-logo.png',
    images: [
      '/projects/mjqualitycars1.png',
      '/projects/mjqualitycars2.png',
      '/projects/mjqualitycars3.png',
    ],
  },
  {
    slug: 'iponly',
    name: 'IPONLY',
    tagline: 'Budget tracking made simple for students.',
    category: 'academic',
    role: 'Frontend Developer & Designer',
    goal: 'An intuitive financial management tool optimized for students — simplifying expense tracking into digestible visual insights through a minimalist yet powerful analytical dashboard that supports informed financial decisions.',
    features: [
      'Expense logging and categorization',
      'Real-time savings tracking system',
      'Interactive dashboard overview',
      'Clean financial summary UI',
      'Fully responsive layout design',
    ],
    tech: ['Vue.js', 'Express.js', 'MySQL'],
    logo: '/projects/iponly-logo.png',
    images: ['/projects/iponly1.png', '/projects/iponly2.png', '/projects/iponly3.png'],
  },
  {
    slug: 'lofu',
    name: 'LOFU',
    tagline: 'Lost and found, reunited around Angeles City.',
    category: 'academic',
    role: 'Full-Stack Developer',
    goal: 'A lost-and-found web application where people post lost or found items around Angeles City, Pampanga — with real-time chat and a poster-driven verification flow that confirms a claimer is the true owner before an item changes hands.',
    features: [
      'Post lost and found items with photos',
      'Real-time chatbox between poster and claimer',
      'Poster-verified claim confirmation flow',
      'Item category filtering and search',
    ],
    tech: ['Angular', 'MongoDB', 'Node.js'],
    logo: '/projects/lofu-logo.png',
    images: ['/projects/lofu1.png', '/projects/lofu2.png', '/projects/lofu3.png', '/projects/lofu4.png'],
  },
]

export const featuredProjects: readonly Project[] = projects
  .filter((p): p is Project & { featuredOrder: number } => p.featuredOrder !== undefined)
  .sort((a, b) => a.featuredOrder - b.featuredOrder)
