import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSvelte } from "react-icons/si";

export const About = () => {
  const frontendSkills = [
    { name: "React", icon: FaReact },
    { name: "Vue", icon: FaVuejs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Svelte", icon: SiSvelte },
  ];

  const backendSkills = [{ name: "Node.js", icon: FaNodeJs }];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Beginner frontend developer, passionate about building modern and
              responsive web apps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {frontendSkills.map(({ name, icon: Icon }, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      <Icon className="text-lg" /> {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {backendSkills.map(({ name, icon: Icon }, key) => (
                    <span
                      key={key}
                      className="flex items-center gap-2 bg-green-500/10 text-green-400 py-2 px-4 rounded-full text-sm hover:bg-green-500/20 hover:shadow-lg transition"
                    >
                      <Icon className="text-lg" /> {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Udemy academy course -{" "}
                  <a
                    href="https://www.udemy.com/share/1013gG3@r10eLx2x3dGMCach2h9k-yUr8BgP_lZdxEVzVxUkghwaF64t2JgXT7L3J0KLsyrm5g==/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    "The Complete Full-Stack Web Development Bootcamp"{" "}
                  </a>
                </li>
                <li>
                  Udemy Academy —{" "}
                  <a
                    href="https://www.udemy.com/share/101CrS3@piYR5tXiy3jFywT_KIuBRBRj8IiheLoRQ37sYuvH3Q9rYNj9lphUHrJMTFw2fq59IQ==/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    The JavaScript Bible - JavaScript Bootcamp
                  </a>
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div>
                <div>
                  <h4 className="font-semibold"> </h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
