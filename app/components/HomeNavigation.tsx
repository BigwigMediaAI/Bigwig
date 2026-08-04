"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { primaryNavLinks, serviceNavLinks } from "./site-navigation";

type HomeNavigationProps = {
  variant: "desktop" | "mobile";
};

export default function HomeNavigation({ variant }: HomeNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isMobile = variant === "mobile";
  const menuId = `home-${variant}-navigation`;
  const servicesId = `home-${variant}-services`;

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((previouslyOpen) => !previouslyOpen);
    setIsServicesOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className={`absolute z-40 inline-flex h-12 items-center justify-center gap-2 border border-white/25 bg-white/95 text-[#25258E] shadow-[0_12px_30px_rgba(0,0,0,0.18)] outline-none transition hover:-translate-y-0.5 hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25258E] ${
          isMobile
            ? "left-4 top-6 w-12 rounded-2xl lg:hidden"
            : "left-16 top-8 rounded-full px-4 max-lg:hidden"
        }`}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
        {!isMobile && (
          <span className="text-xs font-black tracking-[0.14em]">MENU</span>
        )}
      </button>

      {isOpen && (
        <nav
          id={menuId}
          aria-label="Home page navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeMenu();
            }
          }}
          className={`absolute z-30 overflow-y-auto border border-white/20 bg-[#25258E]/95 p-3 text-white shadow-[0_24px_70px_rgba(13,13,60,0.45)] backdrop-blur-xl ${
            isMobile
              ? "inset-x-4 bottom-16 top-[5.5rem] rounded-[1.75rem] lg:hidden"
              : "left-16 top-[5.75rem] max-h-[calc(100dvh-7rem)] w-[360px] rounded-[1.5rem] max-lg:hidden"
          }`}
        >
          <div className="mb-3 flex items-start justify-between rounded-2xl bg-white/10 px-4 py-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Navigation
              </p>
              <p className="mt-1 text-lg font-black">Explore Bigwig</p>
            </div>
            <span className="rounded-full bg-[#EE3D49] px-2.5 py-1 text-[10px] font-black tracking-[0.12em] text-white">
              MENU
            </span>
          </div>

          <ul className="space-y-1.5">
            {primaryNavLinks.slice(0, 1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-bold tracking-[0.04em] outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
                >
                  {link.name}
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </li>
            ))}

            <li className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07]">
              <button
                type="button"
                aria-expanded={isServicesOpen}
                aria-controls={servicesId}
                onClick={() => setIsServicesOpen((current) => !current)}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left outline-none transition hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
              >
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff9fa6]">
                    Discover
                  </span>
                  <span className="mt-0.5 block text-sm font-black tracking-[0.04em]">
                    PRODUCTS &amp; SERVICES
                  </span>
                </span>
                <ChevronDown
                  size={19}
                  className={`shrink-0 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div id={servicesId} className="border-t border-white/15 bg-white/[0.06] p-2">
                  <ul className="space-y-1">
                    {serviceNavLinks.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          onClick={closeMenu}
                          className="group flex min-h-14 items-center gap-3 rounded-xl px-3 py-2.5 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EE3D49] text-[10px] font-black tracking-wide text-white">
                            {service.badge}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold">
                              {service.name}
                            </span>
                            <span className="mt-0.5 block text-xs leading-4 text-white/65">
                              {service.description}
                            </span>
                          </span>
                          <ArrowUpRight
                            size={17}
                            className="shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {primaryNavLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-bold tracking-[0.04em] outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
                >
                  {link.name}
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {isMobile && (
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#EE3D49] px-4 py-3 text-sm font-black tracking-[0.08em] outline-none transition hover:bg-[#d9323e] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25258E]"
            >
              CONTACT US
              <ArrowUpRight size={18} />
            </Link>
          )}
        </nav>
      )}
    </>
  );
}
