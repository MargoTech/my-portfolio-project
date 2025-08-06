export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center
        bg-black/60 backdrop-blur-md transition-all duration-300
        ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {links.map(({ href, label }, i) => (
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold text-white my-3 transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }
            delay-[${i * 75}ms]
          `}
        >
          {label}
        </a>
      ))}
    </div>
  );
};
