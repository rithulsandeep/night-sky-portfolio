import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Forgery Detection",
        description: "A model for differentiating between real and fake signs",
        image: "/projects/project1.png",
        tags: ["cv2", "sklearn", "numpy"],
        githubUrl: "https://github.com/rithulsandeep/Signature-Forgery-Detection",
    },
    {
        id: 2,
        title: "Helmet Detection",
        description:
            "A real-time helmet detection tool built using YOLOv8 to identify whether individuals are wearing helmets in video streams or images.",
        image: "/projects/project2.png",
        tags: ["yolov8", "machine-learning"],
        githubUrl: "https://github.com/rithulsandeep/helmet-detection-yolov11",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description:
            "Resonsive website using React to display my portfolio",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS",],
        githubUrl: "https://github.com/rithulsandeep/night-sky-portfolio",
    },
    {
        id: 4,
        title: "Online Auction Website",
        description: "A platform for online bidding and auctions built with MERN stack.",
        image: "/projects/project4.png",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/rithulsandeep/auction-frontend",
    }
];


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. I love exploring concepts that I
                    haven't worked with before.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            {/* <ExternalLink size={20} /> */}
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/rithulsandeep"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};