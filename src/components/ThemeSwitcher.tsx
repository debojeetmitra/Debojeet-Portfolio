"use client";
import React, { useEffect, useState } from "react";
import { Palette } from "lucide-react";

const themes = [
    "night",
    "coffee",
    "luxury",
    "autumn",
    "valentine",
    "cyberpunk",
    "synthwave",
    "retro",
    "aqua",
    "garden",
    "forest",
    "winter",
    "dracula",
    "nord",
    "sunset"
];

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState("night");

    useEffect(() => {
        const savedTheme = localStorage.getItem("portfolio-theme") || "night";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
        console.log("Initial theme:", savedTheme);
    }, []);

    const changeTheme = (newTheme: string) => {
        console.log("Setting theme to:", newTheme);
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="p-3 glass rounded-full hover:bg-white/10 transition-all text-white flex items-center justify-center">
                <Palette size={20} />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[60] menu p-2 shadow-2xl bg-base-300 rounded-box w-52 mt-4 max-h-96 overflow-y-auto border border-white/10 backdrop-blur-xl">
                <li className="menu-title text-gray-500 uppercase text-[10px] tracking-widest px-4 py-2">Select Theme</li>
                {themes.map((t) => (
                    <li key={t}>
                        <button
                            onClick={() => changeTheme(t)}
                            className={`flex items-center justify-between capitalize ${theme === t ? "bg-primary text-primary-content" : "hover:bg-white/5"}`}
                        >
                            {t}
                            {theme === t && <div className="w-2 h-2 rounded-full bg-current" />}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
