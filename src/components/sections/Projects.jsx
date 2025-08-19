import { RevealOnScroll } from "../RevealOnScroll";

const projectsData = [
  {
    title: "Learn Programming With Me App",
    description: "Learn coding for beginners",
    tech: ["React", "API", "Vite", "Tailwind", "Vercel"],
    demo: "https://study-programming-with-me-app.vercel.app",
    code: "https://github.com/MargoTech/study-programming-with-me-app",
  },

  {
    title: "Mood Tracker",
    description: "Track your moods",
    tech: ["React", "Vite", "Tailwind", "Vercel"],
    demo: "https://mood-tracker-app-kohl.vercel.app",
    code: "https://github.com/MargoTech/mood-tracker-app",
  },

  {
    title: "Chat App",
    description: "Chat with the bot",
    tech: ["React", "Vite", "Tailwind", "Vercel"],
    demo: "https://app-chat-liard.vercel.app",
    code: "https://github.com/MargoTech/app-chat",
  },

  {
    title: "Weather App",
    description: "Fetches live weather data & adapts UI by conditions",
    tech: ["React", "API", "Vite", "Tailwind", "Netlify"],
    demo: "https://6875043a17175878b5ab9ead--forecast-tracker.netlify.app/",
    code: "https://github.com/MargoTech/forecast-js-project",
  },

  {
    title: "Expense Tracker",
    description: "Track your expenses",
    tech: ["React", "Vite", "Tailwind"],
    demo: "https://6875056c6f686197f3125742--expencse-tracker.netlify.app/",
    code: "https://github.com/MargoTech/expense-tracker-react-project",
  },

  {
    title: "Habit Tracker",
    description: "Track your habits",
    tech: ["React", "Vite", "Tailwind"],
    demo: "https://68a46afceb747d1556d785d8--habit-tracker-app-margo.netlify.app/",
    code: "https://github.com/MargoTech/habit-tracker-app",
  },

  {
    title: "My Portfolio",
    description: "My portfolio",
    tech: ["React", "Vite", "Tailwind"],
    demo: "https://68975764d151db1d0c3e6efd--portfolio-margo.netlify.app/",
    code: "https://github.com/MargoTech/my-portfolio-project",
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
            {projectsData.map((project) => (
              <div
                key={project.title}
                className="p-6 rounded-xl border border-white/10
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all flex flex-col items-center text-center"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
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

                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold py-2 px-5 rounded-full shadow-lg hover:scale-105 transition-transform duration-3000"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-500 text-blue-400 font-semibold py-2 px-5 rounded-full hover:bg-blue-500/10 transition"
                  >
                    View Code
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
