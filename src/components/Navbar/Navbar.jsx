import React, { useState, useMemo, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/profile2.png";

function useScroll(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return isScrolled;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isScrolled = useScroll(50);

  const menuItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "work", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const sections = menuItems.map(item => document.getElementById(item.id));
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.6 }
    );
    sections.forEach(sec => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, [menuItems]);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 transition-all duration-300 px-2 rounded-full ${
        isScrolled ? "bg-white bg-opacity-20 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center text-white">
        <img src={logo} alt="Logo" className="size-20" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="hidden md:flex space-x-4 mr-4">
          <a aria-label="GitHub" href="https://github.com/404manveer" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/manveer-shah-341282246/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <div className="flex space-x-4">
            <a aria-label="GitHub" href="https://github.com/404manveer" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/manveer-shah-341282246/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
