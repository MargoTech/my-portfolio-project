import { RevealOnScroll } from "../RevealOnScroll";

const projectsData = [
  {
    title: "Learn Programming With Me App",
    description: "Learn coding for beginners",
    tech: ["React", "API"],
    link: "#",
  },

  {
    title: "Mood Tracker",
    description: "Track your moods",
    tech: ["React", "API"],
    link: "#",
  },

  {
    title: "Chat App",
    description: "Chat with the bot",
    tech: ["React", "API"],
    link: "#",
  },

  {
    title: "Weather App",
    description: "Fetches live weather data & adapts UI by conditions",
    tech: ["React", "API"],
    link: "#",
  },

  {
    title: "",
    description: "",
    tech: ["React", "API"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <div>
                key={index}
                className="p-6 rounded-xl border border-white/10
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
