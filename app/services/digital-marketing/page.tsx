"use client";

import {
  ArrowUpRight,
  Code2,
  Film,
  Megaphone,
  Palette,
  Search,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  {
    title: "Website Development",
    description:
      "Fast, responsive websites built to represent your brand and convert visitors.",
    icon: Code2,
  },
  {
    title: "SEO",
    description:
      "Search visibility, technical improvements, and content direction for organic growth.",
    icon: Search,
  },
  {
    title: "SMM",
    description:
      "Social media planning, creatives, campaigns, and consistent brand communication.",
    icon: Megaphone,
  },
  {
    title: "ORM",
    description:
      "Online reputation management to monitor, improve, and protect brand trust.",
    icon: ShieldCheck,
  },
  {
    title: "Graphic Designing",
    description:
      "Brand creatives, social posts, campaign assets, and marketing collaterals.",
    icon: Palette,
  },
  {
    title: "Video Editing",
    description:
      "Sharp, platform-ready videos for ads, reels, brand stories, and campaigns.",
    icon: Film,
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#25258E] text-white">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[#EE3D49] opacity-90" />
          <div className="relative mx-auto grid min-h-[520px] w-full max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-rose-100">
                Bigwig Services
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Digital Marketing That Builds Your Online Base
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                From website development to SEO, social media, ORM, graphics,
                and video editing, we help brands create a stronger digital
                presence from one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.bigwigdigital.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-rose-50"
                >
                  Visit Digital Website
                  <ArrowUpRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-3 rounded-md bg-white/10 p-4 backdrop-blur-sm sm:grid-cols-2">
                {services.slice(0, 4).map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="rounded-md border border-white/20 bg-white p-5 text-blue-950 shadow-lg"
                    >
                      <Icon className="mb-4 text-[#EE3D49]" size={28} />
                      <h2 className="text-lg font-bold">{service.title}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#EE3D49]">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#25258E] md:text-4xl">
              Everything your brand needs to show up better online.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-rose-50 text-[#EE3D49]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#25258E]">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-[#EE3D49] px-5 py-14 text-white md:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-black">
                Want the full digital team?
              </h2>
              <p className="mt-2 max-w-2xl text-white/85">
                Explore our dedicated digital marketing website for more
                details.
              </p>
            </div>
            <a
              href="https://www.bigwigdigital.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-blue-50"
            >
              Open Bigwig Digital
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
