import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/bigwig-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("");
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleSubMenu = (name: string) => {
    setExpandedMenus((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: "AGENCY", href: "/Agency" },
    {
      name: "SERVICES",
      submenu: [
        {
          name: "Digital Marketing",
          href: "https://www.bigwigdigital.in/",
          external: true,
        },
        {
          name: "Events",
          href: "https://bigwig-events-planning.vercel.app/",
          external: true,
        },
      ],
    },
    {
      name: "AI PRODUCTS",
      submenu: [
        {
          name: "Free AI Tools",
          href: "https://bigwigmedia.ai/",
          external: true,
        },
        {
          name: "Social Media Management",
          href: "https://bigwig-smm-mu.vercel.app/",
          external: true,
        },
        {
          name: "Review Mangement",
          href: "https://bigwig-orm-ten.vercel.app/",
          external: true,
        },
        {
          name: "LMS For Education",
          href: "https://unify-orpin.vercel.app/",
          external: true,
        },
        {
          name: "LMS For Real Estate",
          href: "https://bigwig-lms.vercel.app/",
          external: true,
        },
      ],
    },
    { name: "CLIENTS", href: "/clients" },
    { name: "STRATEGY", href: "/strategy" },
    { name: "Y BIGWIG", href: "/Y-Bigwig" },
    { name: "THINGS WE DO", href: "/things-we-do" },
    { name: "METHOD TO MADNESS", href: "/method" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center space-x-1 text-3xl font-bold">
          <img
            src={logo}
            alt="Bigwig Logo"
            className="h-10 w-auto"
            draggable="false"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link, i) => {
            const isActive = activePath === link.href;
            return (
              <li
                key={i}
                className={`${
                  isActive
                    ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                    : "text-blue-900 transition"
                } relative group`}
              >
                {link.submenu ? (
                  <>
                    <span className="cursor-pointer flex items-center gap-1">
                      {link.name} <ChevronDown size={14} />
                    </span>
                    <ul className="absolute top-4 left-0 bg-white shadow-md rounded-md hidden group-hover:block z-50 mt-2 py-2 min-w-[200px]">
                      {link.submenu.map((sub, j) => (
                        <li key={j}>
                          <a
                            href={sub.href}
                            target={sub.external ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={link.href}>{link.name}</Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="border border-rose-500 text-blue-900 font-medium px-4 py-2 rounded-md hover:bg-rose-50 transition">
              CONTACT
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <X size={28} color="#EE3D49" />
          ) : (
            <Menu size={28} color="#EE3D49" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white z-40 px-6 py-6 space-y-6">
          <ul className="flex flex-col text-lg font-medium space-y-4">
            {navLinks.map((link, i) => {
              const isExpanded = expandedMenus.includes(link.name);
              const isActive = activePath === link.href;

              return (
                <li key={i}>
                  {link.submenu ? (
                    <>
                      <div
                        className="flex items-center justify-between text-blue-900 cursor-pointer"
                        onClick={() => toggleSubMenu(link.name)}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {isExpanded && (
                        <ul className="mt-2 ml-2 space-y-2">
                          {link.submenu.map((sub, j) => (
                            <li key={j}>
                              {sub.external ? (
                                <a
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 text-sm hover:text-rose-500"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {sub.name}
                                </a>
                              ) : (
                                <Link
                                  to={sub.href}
                                  className="text-blue-700 text-sm hover:text-rose-500"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`${
                        isActive
                          ? "text-rose-500 border-b-2 border-rose-500 pb-1"
                          : "text-blue-900 hover:text-rose-500 transition"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="border border-rose-500 text-blue-900 font-medium px-6 py-2 rounded-md hover:bg-rose-50 transition">
              CONTACT
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
