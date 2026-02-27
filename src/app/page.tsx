"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    Code2,
    ExternalLink,
    Trophy,
    Database,
    Cpu,
    Globe,
    ChevronRight,
    GraduationCap,
    Briefcase
} from "lucide-react";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function HomePage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <main className="min-h-screen bg-transparent relative overflow-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(0,0,0,1)_100%)]" />
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-600/20 blur-[120px] rounded-full animate-pulse delay-700" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center glass px-6 py-3 rounded-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold font-outfit text-white"
                    >
                        DM<span className="text-indigo-500">.</span>
                    </motion.div>
                    <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
                        {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeSwitcher />
                        <motion.a
                            href="/assets/Debojeet-Final-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="btn btn-sm btn-primary rounded-full px-6"
                        >
                            Resume
                        </motion.a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                                Full-Stack AI/ML Developer
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold font-outfit mt-6 leading-tight">
                                Hi, I'm <br />
                                <span className="text-gradient">Debojeet Mitra</span>
                            </h1>
                            <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                                Building AI-powered applications and scalable web solutions with a focus on modern design and visual excellence.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                                <a href="#projects" className="btn btn-primary px-8 rounded-full">View Projects</a>
                                <div className="flex gap-4 items-center md:ml-4">
                                    {[
                                        { Icon: Github, href: "https://github.com/debojeetmitra" },
                                        { Icon: Linkedin, href: "https://www.linkedin.com/in/debojeet-mitra-159078289" },
                                        { Icon: Trophy, href: "https://leetcode.com/u/debojeetmitra04/" },
                                        { Icon: Mail, href: "mailto:debojeetmitra04@gmail.com" }
                                    ].map((item, i) => (
                                        <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-all text-white">
                                            <item.Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative w-80 h-96 md:w-[400px] md:h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl blur-[40px] opacity-10 animate-pulse" />
                            <div className="w-full h-full rounded-3xl glass border-white/10 overflow-hidden relative group shadow-2xl">
                                <Image
                                    src="/assets/Professional portrait of a young man.png"
                                    alt="Debojeet Mitra"
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">About Me</h2>
                        <div className="h-1.5 w-20 bg-indigo-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants} className="glass p-8 rounded-3xl">
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                I am a passionate Full Stack Developer with a strong focus on AI/ML integrations. Currently pursuing my Bachelor of Technology in Computer Science (AIML) at Pranveer Singh Institute of Technology.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                I love building software that solves real-world problems. Whether it's a real-time interview platform or a complex e-commerce system, I strive for excellence in both code quality and user experience.
                            </p>
                            <div className="mt-8 flex gap-8">
                                <div>
                                    <h4 className="text-3xl font-bold text-white">300+</h4>
                                    <p className="text-gray-500">LeetCode Solved</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-white">1517</h4>
                                    <p className="text-gray-500">Max Rating</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Quick Learner", icon: Cpu },
                                { label: "Problem Solver", icon: Trophy },
                                { label: "Team Player", icon: Globe },
                                { label: "Modern UI/UX", icon: Code2 }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-all"
                                >
                                    <item.icon size={32} className="text-indigo-400" />
                                    <span className="font-medium text-white">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-white/5">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Core Skills</h2>
                        <div className="h-1.5 w-20 bg-indigo-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {skillGroups.map((group, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="glass p-6 rounded-2xl border-white/5"
                            >
                                <h3 className="text-indigo-400 font-bold mb-4 uppercase text-sm tracking-widest">{group.category}</h3>
                                <ul className="space-y-2">
                                    {group.skills.map((skill, sIdx) => (
                                        <li key={sIdx} className="text-gray-300 text-sm flex items-center gap-2">
                                            <ChevronRight size={14} className="text-indigo-500" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Featured Projects</h2>
                        <div className="h-1.5 w-20 bg-indigo-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="glass rounded-3xl overflow-hidden flex flex-col group h-full"
                            >
                                <div className="h-52 relative overflow-hidden border-b border-white/5 bg-gray-900">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75 group-hover:brightness-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
                                            <Code2 size={48} className="text-indigo-500/50" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                                    <div className="absolute top-4 right-4 flex gap-2 z-20">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-white/10 text-white">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-white/10 text-white">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-2 py-1 text-[10px] bg-indigo-500/10 text-indigo-400 rounded-md border border-indigo-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Education & Achievements Section */}
            <section id="education" className="py-20 px-6 bg-white/5">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <GraduationCap className="text-indigo-500" size={32} />
                                <h2 className="text-3xl font-bold font-outfit">Education</h2>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { title: "Bachelor of Technology, CSE (AIML)", sub: "PSIT, Kanpur", date: "2022 - 2026" },
                                    { title: "Senior Secondary (Class XII)", sub: "City Model School, Kanpur", date: "2021 - 2022" },
                                    { title: "Secondary (Class X)", sub: "St. Thomas School, Kanpur", date: "2019 - 2020" }
                                ].map((edu, i) => (
                                    <motion.div key={i} variants={itemVariants} className="relative pl-8 border-l border-indigo-500/30 pb-2">
                                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500" />
                                        <h4 className="text-white font-bold">{edu.title}</h4>
                                        <p className="text-gray-400 text-sm">{edu.sub}</p>
                                        <span className="text-xs text-indigo-400 mt-2 block uppercase tracking-wider">{edu.date}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <Trophy className="text-indigo-500" size={32} />
                                <h2 className="text-3xl font-bold font-outfit">Achievements</h2>
                            </div>
                            <div className="grid gap-6">
                                <motion.div variants={itemVariants} className="glass p-6 rounded-2xl flex items-start gap-4">
                                    <div className="p-3 bg-amber-500/10 rounded-xl">
                                        <Trophy className="text-amber-500" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">LeetCode 300+ Problems</h4>
                                        <p className="text-gray-400 text-sm">Solved over 300 DSA problems with a max rating of 1517.</p>
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="glass p-6 rounded-2xl flex items-start gap-4">
                                    <div className="p-3 bg-indigo-500/10 rounded-xl">
                                        <Briefcase className="text-indigo-500" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Naukri Aptitude Test</h4>
                                        <p className="text-gray-400 text-sm">Demonstrated strong logical and quantitative skills in aptitude assessment.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Let's build something <br /> together!</h2>
                        <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
                            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="mailto:debojeetmitra04@gmail.com" className="btn btn-lg bg-white text-indigo-600 hover:bg-gray-100 border-none rounded-full px-10">
                                Contact Me
                            </a>
                            <div className="flex gap-4 items-center">
                                {[
                                    { Icon: Github, href: "https://github.com/debojeetmitra" },
                                    { Icon: Linkedin, href: "https://www.linkedin.com/in/debojeet-mitra-159078289" },
                                    { Icon: Trophy, href: "https://leetcode.com/u/debojeetmitra04/" }
                                ].map((item, i) => (
                                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/20 hover:bg-white/30 rounded-full transition-all text-white">
                                        <item.Icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <p>© 2026 Debojeet Mitra. Designed with ❤️ using Next.js & DaisyUI.</p>
                </div>
            </footer>
        </main>
    );
}
