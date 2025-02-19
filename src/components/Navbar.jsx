import { useState, useEffect } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const [navBg, setNavBg] = useState("bg-black"); // ✅ Default black background
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Mobile menu toggle state

  // ✅ Ensures page always starts at the top on reload
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0); // ✅ Forces the page to load at the top
    }, 10); // Small delay ensures proper execution
  }, []);

  // ✅ Handle navbar background based on section scroll
  useEffect(() => {
    const changeNavbarColor = () => {
      const sections = document.querySelectorAll("section");
      let newBg = "bg-black"; // Default black

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          newBg = "bg-black"; // Keeps background black
        }
      });

      setNavBg(newBg);
    };

    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  // ✅ Function to Scroll to Footer When "About Us" is Clicked
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" }); // ✅ Smooth scrolling to footer
    }
  };

  return (
    <header className={`w-full py-4 sm:px-10 px-5 flex justify-between items-center fixed top-0 left-0 ${navBg} shadow-lg z-50 transition-colors duration-300`}>
      <nav className="flex w-full screen-max-width justify-between items-center">
        {/* ✅ Logo */}
        <img src={appleImg} alt="Anubhav" width={20} height={24} />

        {/* ✅ Desktop Navigation */}
        <div className="hidden sm:flex flex-1 justify-center">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray-200 hover:text-white transition-all"
              onClick={() => {
                if (nav === "Home") {
                  window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scrolls to the top
                } else if (nav === "Contact Us") {
                  scrollToFooter(); 
                } else if (nav === "Book a Demo") {
                  window.open("https://forms.gle/m4hkPxqiBUnDwk5cA", "_blank");
                } else if (nav === "FAQ") {
                  const faqSection = document.getElementById("faq");
                  if (faqSection) {
                    faqSection.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              {nav}
            </div>
          ))}
        </div>

        {/* ✅ Mobile Menu Button - Aligned Right & Smaller */}
        <button
          id="menu-button"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen((prev) => !prev);
          }}
          className="sm:hidden text-white focus:outline-none relative w-6 h-6 flex flex-col justify-between"
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* ✅ Fixed Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        onClick={(e) => e.stopPropagation()} // ✅ Prevents menu from closing when clicking inside
        className={`absolute top-full right-0 w-56 bg-black shadow-lg transition-all duration-300 transform ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        } sm:hidden`}
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-white text-lg cursor-pointer hover:text-gray-300 transition-all"
              onClick={() => {
                if (nav === "Home") {
                  window.scrollTo({ top: 0, behavior: "smooth" }); 
                  setIsMenuOpen(false); // ✅ Close menu after scrolling
                } else if (nav === "Contact Us") {
                  scrollToFooter();
                  setIsMenuOpen(false);
                } else if (nav === "Book a Demo") {
                  window.open("https://forms.gle/m4hkPxqiBUnDwk5cA", "_blank");
                  setIsMenuOpen(false);
                } else if (nav === "FAQ") {
                  const faqSection = document.getElementById("faq");
                  if (faqSection) {
                    faqSection.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }
                }
              }}
            >
              {nav}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
