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
    id: "3",
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop functionality.",
    longDescription:
      "The Task Management App is a collaborative project management tool designed to help teams organize their work efficiently. With an intuitive kanban-style interface, teams can visualize their workflow and track progress on projects and tasks.\n\nThe application features drag-and-drop functionality for easy task management, real-time updates for team collaboration, file attachments, comments, and deadline tracking. Built with Vue.js and Firebase, it offers a responsive and real-time experience across devices.",
    features: [
      "Kanban-style board with customizable columns",
      "Drag-and-drop task management",
      "Real-time updates and collaboration",
      "Task assignments and deadlines",
      "File attachments and comments",
      "Task filtering and search",
      "Project templates and task checklists",
    ],
    challenges:
      "Implementing a smooth drag-and-drop experience that worked well across devices was particularly challenging. We utilized the DnD Kit library and implemented custom optimizations to ensure responsive performance on both desktop and mobile. Another challenge was managing real-time updates efficiently without overwhelming the database with requests.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800",
    ],
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "DnD Kit"],
    github: "https://github.com",
    slug: "task-management",
  },
];
