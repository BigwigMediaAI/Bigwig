"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Gem,
  MapPin,
  Megaphone,
  MonitorPlay,
  Plane,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const eventServices = [
  {
    title: "Corporate Events",
    description: "Strategic, professional gatherings built for brand impact.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Conferences & Seminars",
    description:
      "Business experiences planned with clarity and flawless execution.",
    icon: UsersRound,
  },
  {
    title: "Weddings",
    description: "Elegant celebrations shaped with detail, emotion, and style.",
    icon: Gem,
  },
  {
    title: "Social Celebrations",
    description:
      "Memorable personal moments designed to feel warm and premium.",
    icon: Sparkles,
  },
  {
    title: "Travel & Destinations",
    description:
      "Destination experiences and travel planning for special occasions.",
    icon: Plane,
  },
  {
    title: "Digital Events",
    description:
      "Innovative virtual and hybrid event experiences with live streaming, audience engagement, and seamless digital execution.",
    icon: MonitorPlay,
  },
];

const highlights = [
  { value: "15+", label: "Years of Experience", icon: CalendarDays },
  { value: "500+", label: "Events Delivered", icon: Star },
  { value: "50+", label: "Cities & Destinations", icon: MapPin },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#25258E] text-white">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#EE3D49] md:block" />
          <div className="relative mx-auto grid min-h-[540px] w-full max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-rose-100">
                Bigwig Events
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Events That Build Brands and Lasting Memories
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                We plan corporate events, conferences, weddings, social
                celebrations, and destination experiences with creativity,
                precision, and dependable execution.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://bigwig-events.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-rose-50"
                >
                  Visit Events Website
                  <ArrowUpRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Plan an Event
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4">
                {[
                  {
                    title: "Corporate Events",
                    description:
                      "Professional conferences, seminars, product launches, and business gatherings.",
                  },
                  {
                    title: "Social & Wedding Events",
                    description:
                      "Elegant weddings, celebrations, and unforgettable personal experiences.",
                  },
                  {
                    title: "Digital & Hybrid Events",
                    description:
                      "Virtual conferences, live streaming, webinars, and hybrid event solutions.",
                  },
                  {
                    title: "Travel & Destination",
                    description:
                      "End-to-end destination planning, travel management, and guest experiences.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15"
                  >
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.label}
                  className="rounded-md border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <Icon className="mb-4 text-[#EE3D49]" size={30} />
                  <p className="text-4xl font-black text-[#25258E]">
                    {highlight.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                    {highlight.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#EE3D49]">
              What We Plan
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#25258E] md:text-4xl">
              Passion. Precision. Perfection.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              From business gatherings to destination celebrations, Bigwig
              Events creates experiences that reflect the client vision and
              leave a strong impression.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {eventServices.map((service) => {
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
                Ready to explore Bigwig Events?
              </h2>
              <p className="mt-2 max-w-2xl text-white/85">
                Visit the dedicated events website for portfolio, event types,
                and detailed planning information.
              </p>
            </div>
            <a
              href="https://bigwig-events.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-blue-50"
            >
              Open Events Website
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
