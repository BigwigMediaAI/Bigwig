"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  primaryNavLinks,
  serviceNavLinks,
  type ServiceNavLink,
} from "./site-navigation";

type HeaderNavLink =
  | { name: string; href: string; submenu?: never }
  | { name: string; href?: never; submenu: ServiceNavLink[] };

const navLinks: HeaderNavLink[] = [
  primaryNavLinks[0],
  { name: "PRODUCTS & SERVICES", submenu: serviceNavLinks },
  ...primaryNavLinks.slice(1),
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const activePath = usePathname();

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setExpandedMenu(null);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((previouslyOpen) => !previouslyOpen);
    setExpandedMenu(null);
  };

  const toggleSubMenu = (name: string) => {
    setExpandedMenu((currentMenu) =>
      currentMenu === name ? null : name,
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#25258E]/10 bg-white/95 shadow-[0_8px_30px_rgba(37,37,142,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center rounded-lg outline-none transition focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-offset-4"
          aria-label="Bigwig home"
        >
          <Image
            src="/bigwig-logo.png"
            alt="Bigwig"
            width={150}
            height={50}
            draggable="false"
            className="h-auto w-[128px] sm:w-[150px]"
          />
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const isActive =
              activePath === link.href ||
              link.submenu?.some((sub) => sub.href === activePath);
            const isDesktopMenuOpen = openDesktopMenu === link.name;

            return (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.submenu && setOpenDesktopMenu(link.name)
                }
                onMouseLeave={() =>
                  link.submenu && setOpenDesktopMenu(null)
                }
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setOpenDesktopMenu(null);
                    event.currentTarget
                      .querySelector<HTMLButtonElement>("button")
                      ?.focus();
                  }
                }}
              >
                {link.submenu ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isDesktopMenuOpen}
                      aria-controls="desktop-products-services"
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenDesktopMenu((currentMenu) =>
                          currentMenu === link.name ? null : link.name,
                        )
                      }
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-bold tracking-[0.05em] outline-none transition focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-offset-2 ${
                        isActive || isDesktopMenuOpen
                          ? "bg-[#25258E]/[0.08] text-[#25258E]"
                          : "text-[#25258E] hover:bg-[#25258E]/[0.06]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          isDesktopMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      id="desktop-products-services"
                      className={`absolute left-0 top-full z-50 w-[440px] origin-top-left pt-3 transition duration-200 motion-reduce:transition-none ${
                        isDesktopMenuOpen
                          ? "visible translate-y-0 scale-100 opacity-100"
                          : "pointer-events-none invisible -translate-y-1 scale-[0.98] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-[#25258E]/10 bg-white p-2 shadow-[0_24px_70px_rgba(37,37,142,0.18)]">
                        <div className="rounded-xl bg-gradient-to-r from-[#25258E] to-[#3c3ca7] px-5 py-4 text-white">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                            Explore Bigwig
                          </p>
                          <p className="mt-1 text-lg font-bold">
                            Products &amp; Services
                          </p>
                        </div>

                        <ul className="grid gap-1 p-1 sm:grid-cols-2">
                          {link.submenu.map((sub) => {
                            const isSubActive = activePath === sub.href;

                            return (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  aria-current={
                                    isSubActive ? "page" : undefined
                                  }
                                  className={`group flex min-h-[92px] items-start gap-3 rounded-xl p-3 outline-none transition focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-inset ${
                                    isSubActive
                                      ? "bg-[#25258E] text-white"
                                      : "text-[#25258E] hover:bg-[#25258E]/[0.06]"
                                  }`}
                                >
                                  <span
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-black tracking-wide ${
                                      isSubActive
                                        ? "bg-white/15 text-white"
                                        : "bg-[#EE3D49]/10 text-[#EE3D49]"
                                    }`}
                                  >
                                    {sub.badge}
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="flex items-start justify-between gap-2 text-sm font-bold leading-5">
                                      {sub.name}
                                      <ArrowUpRight
                                        size={15}
                                        className="mt-0.5 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                      />
                                    </span>
                                    <span
                                      className={`mt-1 block text-xs leading-4 ${
                                        isSubActive
                                          ? "text-white/75"
                                          : "text-slate-500"
                                      }`}
                                    >
                                      {sub.description}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex items-center rounded-full px-3 py-2 text-[11px] font-bold tracking-[0.05em] outline-none transition focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-[#25258E]/[0.08] text-[#25258E]"
                        : "text-[#25258E] hover:bg-[#25258E]/[0.06]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-[#EE3D49] px-5 py-2.5 text-xs font-bold tracking-[0.08em] text-white shadow-sm outline-none transition hover:-translate-y-0.5 hover:bg-[#d9323e] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-offset-2 xl:inline-flex"
        >
          CONTACT
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#25258E]/10 bg-white text-[#25258E] shadow-sm outline-none transition hover:border-[#EE3D49]/30 hover:bg-[#EE3D49]/5 focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-offset-2 xl:hidden"
          onClick={toggleMobileMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-site-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-[76px] z-40 bg-[#25258E]/20 backdrop-blur-[1px] xl:hidden"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
          />
          <div
            id="mobile-site-navigation"
            className="absolute inset-x-0 top-full z-50 border-t border-[#25258E]/10 bg-white/95 px-4 py-4 shadow-[0_22px_48px_rgba(37,37,142,0.18)] backdrop-blur-xl xl:hidden"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                closeMobileMenu();
              }
            }}
          >
            <div className="mx-auto max-h-[calc(100dvh-76px)] max-w-2xl overflow-y-auto pr-1">
              <div className="mb-4 flex items-center justify-between px-1">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EE3D49]">
                    Navigation
                  </p>
                  <p className="mt-1 text-lg font-black text-[#25258E]">
                    Explore Bigwig
                  </p>
                </div>
                <span className="rounded-full bg-[#25258E]/[0.07] px-3 py-1 text-xs font-semibold text-[#25258E]">
                  Menu
                </span>
              </div>

              <ul className="space-y-2 pb-1">
                {navLinks.map((link) => {
                  const isActive =
                    activePath === link.href ||
                    link.submenu?.some((sub) => sub.href === activePath);
                  const isExpanded = expandedMenu === link.name;

                  return (
                    <li key={link.name}>
                      {link.submenu ? (
                        <div className="overflow-hidden rounded-2xl border border-[#25258E]/10 bg-[#25258E]/[0.03]">
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            aria-controls="mobile-products-services"
                            onClick={() => toggleSubMenu(link.name)}
                            className={`flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-inset ${
                              isActive || isExpanded
                                ? "text-[#25258E]"
                                : "text-slate-700"
                            }`}
                          >
                            <span>
                              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#EE3D49]">
                                Discover
                              </span>
                              <span className="mt-0.5 block text-sm font-black tracking-[0.02em]">
                                {link.name}
                              </span>
                            </span>
                            <ChevronDown
                              size={19}
                              className={`shrink-0 transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div
                              id="mobile-products-services"
                              className="border-t border-[#25258E]/10 bg-white p-2"
                            >
                              <ul className="space-y-1">
                                {link.submenu.map((sub) => {
                                  const isSubActive = activePath === sub.href;

                                  return (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        aria-current={
                                          isSubActive ? "page" : undefined
                                        }
                                        onClick={closeMobileMenu}
                                        className={`flex min-h-14 items-center gap-3 rounded-xl border px-3 py-2.5 outline-none transition focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-inset ${
                                          isSubActive
                                            ? "border-[#25258E] bg-[#25258E] text-white"
                                            : "border-transparent text-[#25258E] hover:border-[#25258E]/10 hover:bg-[#25258E]/[0.05]"
                                        }`}
                                      >
                                        <span
                                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-black tracking-wide ${
                                            isSubActive
                                              ? "bg-white/15 text-white"
                                              : "bg-[#EE3D49]/10 text-[#EE3D49]"
                                          }`}
                                        >
                                          {sub.badge}
                                        </span>
                                        <span className="min-w-0 flex-1">
                                          <span className="block text-sm font-bold">
                                            {sub.name}
                                          </span>
                                          <span
                                            className={`mt-0.5 block text-xs leading-4 ${
                                              isSubActive
                                                ? "text-white/75"
                                                : "text-slate-500"
                                            }`}
                                          >
                                            {sub.description}
                                          </span>
                                        </span>
                                        <ArrowUpRight
                                          size={17}
                                          className="shrink-0"
                                        />
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          aria-current={isActive ? "page" : undefined}
                          onClick={closeMobileMenu}
                          className={`flex min-h-14 items-center justify-between rounded-2xl border px-4 py-3 text-sm font-bold tracking-[0.04em] outline-none transition focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-inset ${
                            isActive
                              ? "border-[#25258E] bg-[#25258E] text-white"
                              : "border-[#25258E]/10 bg-white text-[#25258E] hover:border-[#EE3D49]/30 hover:bg-[#EE3D49]/[0.04]"
                          }`}
                        >
                          {link.name}
                          <ArrowUpRight size={17} />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-4 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#EE3D49] px-5 py-3 text-sm font-black tracking-[0.08em] text-white shadow-sm outline-none transition hover:bg-[#d9323e] focus-visible:ring-2 focus-visible:ring-[#EE3D49] focus-visible:ring-offset-2"
              >
                CONTACT US
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
