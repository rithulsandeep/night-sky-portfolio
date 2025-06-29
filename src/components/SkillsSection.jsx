import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // { name: "HTML/CSS", level: 95, category: "Frontend" },
    // { name: "JavaScript", level: 90, category: "Frontend" },
    // { name: "React", level: 85, category: "Frontend" },
    // { name: "Node.js", level: 80, category: "Backend" },
    // { name: "Express.js", level: 75, category: "Backend" },
    // { name: "MongoDB", level: 75, category: "Database" },
    // { name: "SQL", level: 70, category: "Database" },
    { name: "Python", level: 90, category: "Programming" },
    { name: "C/C++", level: 80, category: "Programming" },
    { name: "Java", level: 70, category: "Programming" },
    { name: "Machine Learning", level: 85, category: "AI/ML" },
    { name: "Computer Vision", level: 80, category: "AI/ML" },
    { name: "Data Analysis", level: 85, category: "AI/ML" },
    // { name: "Full Stack Development", level: 80, category: "Development" },
    { name: "MERN Stack", level: 75, category: "Web Development" },
    { name: "Web Scraping", level: 70, category: "Web Development" },
    // { name: "Project Deployment", level: 75, category: "DevOps" },
    // { name: "Git/GitHub", level: 85, category: "Tools" },
    // { name: "Google Colab", level: 90, category: "Tools" },
    // { name: "Django", level: 70, category: "Backend" }
];

const categories = ["All", "Programming", "AI/ML", "Web Development"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};