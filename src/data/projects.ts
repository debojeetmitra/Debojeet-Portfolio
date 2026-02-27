export interface Project {
    title: string;
    description: string;
    tags: string[];
    liveLink: string;
    githubLink: string;
    image?: string;
}

export const projects: Project[] = [
    {
        title: "AI HireSync",
        description: "AI-powered remote interview platform combining real-time video, AI question generation (Llama 3.3), and collaborative coding.",
        tags: ["Next.js", "Convex", "Clerk", "Stream.io", "Groq"],
        liveLink: "https://ai-hire-sync-by-debojeet.vercel.app",
        githubLink: "https://github.com/debojeetmitra/AI-HireSync-ByDebojeet",
        image: "/assets/HireSync.png"
    },
    {
        title: "CHATTY",
        description: "Real-time chat application with instant messaging, group chats, and secure authentication.",
        tags: ["Node.js", "Express", "WebSocket", "MongoDB"],
        liveLink: "https://chat-app-uiqr.onrender.com",
        githubLink: "https://github.com/debojeetmitra/CHAT%20APP",
        image: "/assets/Chatty.png"
    },
    {
        title: "BuyBuddy",
        description: "React-based e-commerce cart with global state management, search, and filtering.",
        tags: ["React.js", "Context API", "CSS"],
        liveLink: "https://debojeet-buybuddy.netlify.app",
        githubLink: "https://github.com/debojeetmitra/buy-buddy",
        image: "/assets/Buy-Buddy.png"
    },
    {
        title: "Repoverse App",
        description: "MERN stack app to fetch GitHub user profiles and repos with passport.js authentication.",
        tags: ["MERN", "TailwindCSS", "GitHub API", "Passport.js"],
        liveLink: "https://repoverse-app.onrender.com",
        githubLink: "https://github.com/debojeetmitra/mern-github-app",
        image: "/assets/Repoverse.png"
    },
    {
        title: "POSTGREMART",
        description: "PERN stack e-commerce app with rate limiting, bot detection, and Zustand state management.",
        tags: ["PERN", "Zustand", "TailwindCSS", "Daisy UI"],
        liveLink: "https://postgremart.onrender.com",
        githubLink: "https://github.com/debojeetmitra/POSTGREMART",
        image: "/assets/Postgremart.png"
    },
    {
        title: "AI Code Review",
        description: "AI-powered tool that analyzes, reviews, and suggests improvements for code snippets.",
        tags: ["MERN", "Gemini AI", "TailwindCSS"],
        liveLink: "https://ai-code-review-adn4.onrender.com",
        githubLink: "https://github.com/debojeetmitra/Code_Review",
        image: "/assets/Ai_CodeReviewer.png"
    },
    {
        title: "Zaika Quest",
        description: "Recipe explorer app with real-time search, Spoonacular API integration, and YouTube video support.",
        tags: ["React.js", "Tailwind CSS", "Spoonacular API"],
        liveLink: "https://zaika-quest.netlify.app/",
        githubLink: "https://github.com/debojeetmitra/Recipe_App",
        image: "/assets/Zaika_Quest.png"
    }
];
