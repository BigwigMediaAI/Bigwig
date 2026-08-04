"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const capabilities = [
  {
    title: "Product Strategy",
    description:
      "Turn an initial idea into a clear, practical software plan that fits your users and business goals.",
    icon: Sparkles,
  },
  {
    title: "Custom Software",
    description:
      "Build purpose-made systems that streamline work, solve specific problems, and support the way your team operates.",
    icon: Code2,
  },
  {
    title: "Web Applications",
    description:
      "Create secure, responsive web platforms that make complex workflows simple for customers and internal teams.",
    icon: LayoutDashboard,
  },
  {
    title: "User-focused Experiences",
    description:
      "Design intuitive digital experiences that help people complete important tasks with confidence.",
    icon: UsersRound,
  },
  {
    title: "Business Systems",
    description:
      "Connect data, teams, and processes through reliable software built around your day-to-day operations.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Reliable Growth",
    description:
      "Keep your product ready to evolve with thoughtful foundations, security-minded development, and ongoing support.",
    icon: ShieldCheck,
  },
];

const principles = [
  {
    title: "Built around your workflow",
    description:
      "Software should make work easier, so every solution starts by understanding the people and process behind it.",
  },
  {
    title: "From idea to launch",
    description:
      "We bring planning, design, development, and delivery together in one focused product journey.",
  },
  {
    title: "Ready to grow with you",
    description:
      "A strong technical foundation gives your business room to improve, expand, and adapt over time.",
  },
];

export default function BigwigTechnologyPage() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#25258E] text-white">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#EE3D49] md:block" />
          <div className="relative mx-auto grid min-h-[540px] w-full max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-rose-100">
                Bigwig Technology
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Software that turns ambitious ideas into useful products
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                We create tailored software, web applications, and digital
                platforms that help businesses work smarter, serve people
                better, and grow with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://bigwig-tech.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-rose-50"
                >
                  Explore Bigwig Technology
                  <ArrowUpRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Start a software project
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                  <Code2 size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-100">
                    Software creation
                  </p>
                  <p className="text-xl font-bold">
                    One team for your product journey
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Shape an idea into a clear product roadmap",
                  "Design and build software around real workflows",
                  "Launch a scalable platform with confidence",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/15 bg-white/10 p-4"
                  >
                    <p className="text-sm font-medium text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-md border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-black text-[#25258E]">
                  {principle.title}
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#EE3D49]">
              What we create
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#25258E] md:text-4xl">
              Technology made for meaningful business progress
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Bigwig Technology combines product thinking and hands-on
              development to create dependable digital tools for the next stage
              of your business.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-rose-50 text-[#EE3D49]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#25258E]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {capability.description}
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
                Ready to explore Bigwig Technology?
              </h2>
              <p className="mt-2 max-w-2xl text-white/85">
                Visit our dedicated technology website to learn more about our
                software creation work.
              </p>
            </div>
            <a
              href="https://bigwig-tech.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-blue-50"
            >
              Open Technology Website
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
