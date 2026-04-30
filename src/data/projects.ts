export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  improvements: string;
}

export const projectsData: Project[] = [
  {
    id: "vein-blood-donation",
    title: "Vein – Full Stack Blood Donation Platform",
    shortDescription: "A real-time healthcare platform connecting blood donors with recipients through intelligent matching, secure request management and verified donor networks.",
    fullDescription: "Vein is a comprehensive MERN-stack platform built to bridge the gap between urgent blood requirements and willing donors. The system includes real-time notifications, a secure user dashboard, admin controls for verified organizations, and a geographically-aware donor matching system.",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    techStack: ["TanStack Query", "Express", "JavaScript", "Firebase", "Tailwind"],
    liveLink: "https://github.com/RizbiAhmmad",
    githubLink: "https://github.com/RizbiAhmmad",
    challenges: "The most significant challenge was optimizing the real-time geographic search to find the nearest compatible blood donors without overloading the database. Additionally, securing user health data and ensuring real-time Firebase syncing across multiple active clients required complex state management.",
    improvements: "In the future, I plan to integrate Google Maps API for live tracking of blood deliveries, implement AI-based predictions for blood bank shortages, and introduce a mobile application version."
  },
  {
    id: "e-commerce-dashboard",
    title: "Aura – Premium E-Commerce Dashboard",
    shortDescription: "A complete admin dashboard for e-commerce platforms featuring sales analytics, inventory management, and seamless order tracking.",
    fullDescription: "Aura provides business owners with a powerful, fast, and beautiful interface to manage their online stores. It features rich interactive charts for revenue tracking, an intuitive inventory management table with bulk-edit capabilities, and a fully functional order processing pipeline.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "ShadcnUI"],
    liveLink: "https://github.com/RizbiAhmmad",
    githubLink: "https://github.com/RizbiAhmmad",
    challenges: "Handling complex relational data between Products, Orders, Users, and Categories using Prisma while maintaining strict TypeScript typing was challenging. I also had to optimize the server-side rendering to ensure the analytics charts loaded instantly.",
    improvements: "I aim to add multi-vendor support, allowing different sellers to register and manage their own inventory on the platform. Integrating Stripe for automated payout processing is also on the roadmap."
  },
  {
    id: "task-flow",
    title: "TaskFlow – Agile Project Management",
    shortDescription: "A collaborative Kanban-style project management tool designed for agile software development teams.",
    fullDescription: "TaskFlow is a highly interactive application that allows teams to create, assign, and track tasks seamlessly. It supports drag-and-drop Kanban boards, team workspaces, deadline notifications, and progress analytics.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    liveLink: "https://github.com/RizbiAhmmad",
    githubLink: "https://github.com/RizbiAhmmad",
    challenges: "Implementing a smooth, bug-free drag-and-drop interface that instantly synced with the backend database without causing UI lag was a major hurdle. Managing complex global state with Redux Toolkit for multiple concurrent users also required careful architecture.",
    improvements: "Future updates will include real-time WebSocket chat within task cards, automated email reminders for approaching deadlines, and native GitHub integration to link commits directly to tasks."
  }
];
