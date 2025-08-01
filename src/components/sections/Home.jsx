import { RevealOnScroll } from "../RevealOnScroll";
import { FaArrowDown } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-3xl z-0"></div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Subheading */}
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            Frontend Developer
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm MargoTech
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Beginner frontend developer, passionate about learning every day and
            building modern responsive web applications.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-400 text-blue-400 py-3 px-6 rounded font-medium transition transform hover:bg-blue-500/10 hover:shadow-md hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-400">
        <FaArrowDown size={20} />
      </div>
    </section>
  );
};
