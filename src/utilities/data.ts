export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  challenges?: string;
  images?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "1",
    title: "Falcone Dashboard",
    description:
      "Modern Business Management Platform with Real-Time Analytics & Project Tracking.",
    longDescription:
      "Falcon Dashboard is a feature-rich management platform designed for software development companies and modern businesses. Built with Next.js 15, TypeScript, and shadcn/ui, it consolidates essential functions like project tracking, task management, team collaboration, calendar planning, and comprehensive reporting under one roof.\n\nThe platform features an intuitive interface with multiple view modes, real-time progress tracking, budget management, and advanced filtering capabilities. Its fully responsive design with built-in dark mode ensures seamless accessibility across all devices. The dashboard leverages FullCalendar for professional calendar management and includes dynamic component systems for maximum flexibility and customization.",
    features: [
      "Real-time project tracking with progress visualization",
      "Advanced calendar management with FullCalendar integration",
      "Comprehensive project details with timeline tracking",
      "Team collaboration with comments and file management",
      "Budget tracking and financial analytics",
      "Task management with status indicators",
      "Multiple view modes (Grid, List, Calendar)",
      "Dynamic filtering and search capabilities",
      "Event management with multiple types (Meeting, Call, Event, Reminder)",
      "Priority and status-based project organization",
      "Technology stack visualization for projects",
      "Dark mode support with modern UI components",
      "Fully responsive mobile-first design",
      "TypeScript for type-safe development",
    ],
    challenges:
      "One of the main challenges was integrating FullCalendar with Next.js App Router and ensuring proper server-side rendering compatibility. We solved this by implementing client-side components with dynamic imports and proper TypeScript type definitions. Another challenge was creating a flexible component architecture that could handle dynamic Lucide icons without requiring manual imports for each icon. We addressed this by implementing a dynamic icon mapping system that leverages TypeScript's type safety while allowing runtime icon selection. Additionally, we optimized the project detail page's performance by implementing efficient data fetching strategies and skeleton loading states to enhance user experience during data loads.",
    image: "/falcone/falcone1.png",
    images: [
      "/falcone/falcone1.png",
      "/falcone/falcone2.png",
      "/falcone/falcone3.png",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Lucide React",
      "date-fns",
      "React Hooks",
    ],
    github: "https://github.com/birkan-dogan/",
    live: "https://falcon-software-dashboard.vercel.app/",
    slug: "falcon-dashboard",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "Modern shopping experience with advanced filtering and payment processing.",
    longDescription:
      "This e-commerce platform provides a complete online shopping experience with a focus on user experience and performance. It features a robust product catalog, advanced filtering and search capabilities, secure checkout process, and comprehensive user accounts.\n\nBuilt with Next.js for optimal performance and SEO, the application uses server-side rendering for fast page loads and a seamless shopping experience. The platform integrates with Stripe for secure payment processing and MongoDB for flexible data storage.",
    features: [
      "Product catalog with categories and tagging",
      "Advanced filtering and search functionality",
      "User accounts and order history",
      "Secure checkout with Stripe integration",
      "Responsive design for all devices",
      "SEO optimization",
      "Inventory management",
    ],
    challenges:
      "The main challenge was building a performant application that could handle thousands of products while maintaining fast search and filtering capabilities. We implemented efficient database indexing and search algorithms to ensure quick response times. Another challenge was creating a seamless checkout flow that prioritized security while minimizing friction for users.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    ],
    tech: ["Next.js", "Stripe", "MongoDB", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    slug: "ecommerce-platform",
  },
  {
    id: "jwt-auth-manager",
    title: "JWT Auth Manager",
    description:
      "Production-ready TypeScript JWT authentication library with advanced security features and built-in rate limiting.",
    longDescription:
      "JWT Auth Manager is a comprehensive, functional TypeScript library designed for building secure authentication systems. It provides enterprise-grade JWT token management with advanced security features including token rotation, concurrent usage detection, device fingerprinting, and comprehensive rate limiting protection.\n\nThe library follows a functional programming approach with pure functions and immutable operations, making it highly testable and maintainable. It's designed to work with any database through a flexible storage interface and includes ready-to-use Express.js middleware for quick integration. With built-in brute force protection, IP whitelist/blacklist capabilities, and real-time security alerts, it provides production-ready authentication out of the box.",
    features: [
      "Secure JWT token generation and verification with automatic rotation",
      "Concurrent token usage detection and prevention",
      "Device fingerprinting and location tracking support",
      "Built-in rate limiting with IP-based request throttling",
      "Brute force protection with automatic account lockout",
      "IP whitelist/blacklist management",
      "Real-time security alerts via webhook and email",
      "Express.js middleware for easy integration",
      "Flexible storage interface (MongoDB, PostgreSQL, Redis examples included)",
      "Full TypeScript support with complete type safety",
      "Functional design with pure functions for easy testing",
      "Production-ready with comprehensive error handling",
    ],
    challenges:
      "The main challenge was designing a flexible architecture that could work with any database while maintaining type safety and security best practices. We implemented a functional programming approach with dependency injection, allowing developers to use their preferred storage solution. Another significant challenge was implementing concurrent token usage detection without impacting performance - this was solved by using an efficient token marking system that detects replay attacks while maintaining fast token refresh operations. Balancing security features like rate limiting and brute force protection with developer experience required careful API design to make the library both powerful and easy to use.",
    image: "/jwt-auth/auth1.jpeg",
    images: [
      "/jwt-auth/auth1.jpeg",
      "/jwt-auth/auth2.jpeg",
      "/jwt-auth/auth3.jpeg",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "JWT",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
    github: "https://github.com/birkan-dogan/jwt-auth-manager",
    live: "https://www.npmjs.com/package/jwt-auth-manager",
    slug: "jwt-auth-manager",
  },
];
