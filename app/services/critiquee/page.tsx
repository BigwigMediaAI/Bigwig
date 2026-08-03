"use client";

import {
  ArrowUpRight,
  BarChart3,
  Building2,
  FileSearch,
  MessageSquareQuote,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const critiqueeModules = [
  {
    title: "Online Reputation Management",
    description:
      "Monitor what people say about your brand online and shape a stronger digital presence with consistent engagement.",
    icon: Search,
  },
  {
    title: "Brand Sentiment Insights",
    description:
      "Understand public perception through reviews, mentions, and feedback so your strategy stays proactive and informed.",
    icon: BarChart3,
  },
  {
    title: "Review & Response Workflow",
    description:
      "Manage responses, follow-ups, and customer conversations from one structured platform.",
    icon: MessageSquareQuote,
  },
  {
    title: "Business Visibility Growth",
    description:
      "Improve trust and discoverability by turning reviews and online mentions into lasting brand value.",
    icon: TrendingUp,
  },
  {
    title: "Multi-location Brand Control",
    description:
      "Keep your reputation strategy aligned across branches, teams, and markets with centralized oversight.",
    icon: Building2,
  },
  {
    title: "Reputation Audit & Reporting",
    description:
      "Track performance with reports that spotlight strengths, issues, and opportunities for growth.",
    icon: FileSearch,
  },
];

const highlights = [
  {
    title: "Strengthen Trust",
    description:
      "Create a credible online presence that people trust and remember.",
  },
  {
    title: "Improve Visibility",
    description:
      "Turn reviews and mentions into a stronger discovery and engagement engine.",
  },
  {
    title: "Stay Ahead",
    description:
      "React faster to feedback and keep your brand reputation resilient.",
  },
];

export default function CritiqueePage() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#25258E] text-white">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#EE3D49] md:block" />
          <div className="relative mx-auto grid min-h-[540px] w-full max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-rose-100">
                Critiquee by Bigwig
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                ORM solutions for stronger brand reputation
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                Critiquee helps businesses manage online reviews, customer
                perception, and digital reputation with a smart and structured
                approach.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://handleey.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-rose-50"
                >
                  Explore Critiquee
                  <ArrowUpRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                  <Sparkles size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-100">
                    ORM Focus
                  </p>
                  <p className="text-xl font-bold">
                    Reputation management that works
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Monitor online reviews and brand mentions",
                  "Respond faster with structured workflows",
                  "Build trust across digital channels",
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
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xl font-black text-[#25258E]">
                  {item.title}
                </p>
                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#EE3D49]">
              Platform capabilities
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#25258E] md:text-4xl">
              Build a stronger online reputation with clarity and control
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Critiquee brings ORM into one manageable system so brands can
              monitor feedback, respond efficiently, and improve trust online.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {critiqueeModules.map((module) => {
              const Icon = module.icon;

              return (
                <article
                  key={module.title}
                  className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-rose-50 text-[#EE3D49]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#25258E]">
                    {module.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {module.description}
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
                Ready to grow your online reputation?
              </h2>
              <p className="mt-2 max-w-2xl text-white/85">
                Let’s create a stronger digital presence with smarter ORM
                workflows.
              </p>
            </div>
            <a
              href="https://handleey.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-rose-50"
            >
              Open Critiquee
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
