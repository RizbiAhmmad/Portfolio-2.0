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
    id: "playtube-client",
    title: "PlayTube – Full Stack Video Streaming Platform",
    shortDescription:
      "A comprehensive Next.js-based video platform featuring user authentication, media management, dashboards, and admin controls for seamless content streaming and interaction.",
    fullDescription:
      "PlayTube is a modern MERN-stack inspired client application built with Next.js, designed to provide a YouTube-like experience for users. It includes robust authentication, media upload and viewing capabilities, user dashboards, admin analytics, payment integration, and features like comments, likes, watchlists, and reviews. The platform supports role-based access for users and admins, with secure API integrations and responsive UI components.",
    image: "/playtube.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Axios",
      "shadcn/ui",
      "Zod",
    ],
    liveLink: "https://playtube-client.vercel.app/",
    githubLink: "https://github.com/RizbiAhmmad/PlayTube-Client",
    challenges:
      "The primary challenge was implementing complex state management for real-time features like comments and likes across multiple components, while ensuring secure authentication and role-based access. Optimizing media loading and handling large video files without performance degradation also required careful API design and caching strategies.",
    improvements:
      "Future enhancements include integrating a video player with advanced controls, implementing real-time chat for media, adding AI-powered content recommendations, and developing a mobile app version for broader accessibility.",
  },
  {
    id: "e-commerce",
    title: "Leafo - E-Commerce Platform",
    shortDescription:
      "A responsive React/Vite storefront with Firebase auth, product browsing, cart checkout, admin dashboards, and seamless order management for a modern online shop.",
    fullDescription:
      "This e-commerce client is built with React and Vite, featuring a complete product catalog, category and subcategory browsing, shopping cart, checkout flow, user authentication, and admin dashboards. It integrates Firebase for authentication and secure user sessions, React Query for efficient data fetching, and Tailwind CSS for a polished responsive UI. The app supports customer order tracking, payment success/cancel handling, inventory and coupon management for admins, and enhanced UX with animated components, barcode generation, and live filtering.",
    image: "/e-commerce.png",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "React Router",
      "React Query",
      "Axios",
      "Framer Motion",
    ],
    liveLink: "https://organic.bangladeshiit.com",
    githubLink: "https://github.com/RizbiAhmmad/E-Commerce-Website",
    challenges:
      "The primary challenge was coordinating state across the cart, checkout flow, dashboard panels, and authenticated routes while maintaining a fast and responsive UI. Managing Firebase authentication with role-based admin/user access and optimizing data fetches for products and orders with React Query also required careful handling.",
    improvements:
      "Future enhancements include adding real payment gateway integration, smarter product recommendations, real-time admin notifications, expanded mobile responsiveness, and a dedicated mobile app version for wider accessibility.",
  },
  {
    id: "e-learning",
    title: "E-Learning Platform",
    shortDescription:
      "E-Learning is an interactive platform designed to help students and teachers connect through online courses, providing seamless authentication, course management, and secure payments.",
    fullDescription:
      "E-Learning is an advanced web platform built to facilitate online education with comprehensive features for both students and instructors. The system supports secure role-based access (Student, Teacher, and Admin), real-time course content delivery, and an integrated payment gateway for course enrollment.",
    image: "/E-learning.jpeg",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://e-learning-f11fe.web.app",
    githubLink: "https://github.com/RizbiAhmmad/E-Learning-Website-Client",
    challenges:
      "Implementing role-based authentication securely\nIntegrating Stripe for seamless payments\nManaging real-time data fetching with React Query\nOptimizing performance and reducing API response times",
    improvements:
      "Adding more interactive classroom features (live video, quizzes, etc.) \n Adding Native Mobile App (React Native) \n Expanding language support for a global audience",
  },
];
