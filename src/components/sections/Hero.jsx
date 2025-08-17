import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <RevealOnScroll>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Margarita</span>
        </h1>
        <h2 className="text-lg md:text-2xl text-gray-300 mb-6">
          Frontend Developer | React, TypeScript, TailwindCSS
        </h2>
        <p className="max-w-2xl text-gray-400 mb-8">
          I love building responsive, modern web apps with clean UI/UX.
          Currently focusing on React ecosystem, performance optimization, and
          API integration.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href=""
            download
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition"
          >
            Download CV
          </a>
          <a
            href=""
            className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 font-medium hover:bg-blue-500/10 transition"
          >
            Contact Me
          </a>

          {/* Social links */}
          <div>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
