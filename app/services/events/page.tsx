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
import FAQ, { FaqItem } from "@/app/components/FAQ";

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
const faqs: FaqItem[] = [
  {
    question: "What types of events do you organize?",
    answer:
      "We organize weddings, corporate events, conferences, exhibitions, product launches, birthday parties, anniversaries, award ceremonies, concerts, and private celebrations.",
  },
  {
    question: "Do you provide complete event planning services?",
    answer:
      "Yes. We manage everything from concept development and venue selection to décor, entertainment, catering, logistics, and event execution.",
  },
  {
    question: "How far in advance should I book an event?",
    answer:
      "We recommend booking at least 2–6 months in advance, depending on the event size and venue availability.",
  },
  {
    question: "Can you organize destination events?",
    answer:
      "Yes. We specialize in destination weddings, corporate retreats, and special events across various domestic and international locations.",
  },
  {
    question: "Do you help with venue selection?",
    answer:
      "Absolutely. We recommend and coordinate with venues that match your budget, guest count, and event theme.",
  },
  {
    question: "Can you work within my budget?",
    answer:
      "Yes. We create customized event plans that maximize value while staying within your preferred budget.",
  },
  {
    question: "Do you provide event decoration services?",
    answer:
      "Yes. We offer customized décor including floral arrangements, stage design, lighting, themed decorations, and table settings.",
  },
  {
    question: "Can you arrange catering?",
    answer:
      "Yes. We partner with trusted caterers to provide menus for weddings, corporate events, and private celebrations.",
  },
  {
    question: "Do you provide photography and videography?",
    answer:
      "Yes. We offer professional photography, cinematic videography, drone coverage, and live streaming services.",
  },
  {
    question: "Can you arrange live entertainment?",
    answer:
      "Yes. We can book DJs, live bands, celebrity performers, dancers, anchors, comedians, and cultural performances.",
  },
  {
    question: "Do you organize corporate events?",
    answer:
      "Yes. We manage conferences, seminars, product launches, annual meetings, award nights, exhibitions, and team-building events.",
  },
  {
    question: "Can you organize weddings?",
    answer:
      "Yes. We provide complete wedding planning services including décor, guest management, hospitality, entertainment, and vendor coordination.",
  },
  {
    question: "Do you organize birthday parties?",
    answer:
      "Yes. We plan birthday celebrations for children and adults with customized themes, entertainment, and decorations.",
  },
  {
    question: "Do you offer event theme planning?",
    answer:
      "Yes. We create personalized themes based on your preferences, brand identity, or celebration style.",
  },
  {
    question: "Can you manage guest invitations?",
    answer:
      "Yes. We assist with digital invitations, RSVP management, guest lists, and event communication.",
  },
  {
    question: "Do you provide event staffing?",
    answer:
      "Yes. We provide coordinators, ushers, hosts, registration teams, security personnel, and hospitality staff.",
  },
  {
    question: "Can you arrange transportation?",
    answer:
      "Yes. We organize transportation for guests, VIPs, artists, and event staff when required.",
  },
  {
    question: "Do you handle event permits and permissions?",
    answer:
      "Yes. We assist with required permits and coordinate with local authorities whenever necessary.",
  },
  {
    question: "Can you manage exhibitions and trade shows?",
    answer:
      "Yes. We provide booth design, exhibitor management, registration, branding, and event logistics.",
  },
  {
    question: "Do you provide stage and sound setup?",
    answer:
      "Yes. We arrange professional stage design, sound systems, LED walls, lighting, and AV equipment.",
  },
  {
    question: "Can you organize virtual or hybrid events?",
    answer:
      "Yes. We manage online, hybrid, and live-streamed events using reliable digital event platforms.",
  },
  {
    question: "How do you ensure events run smoothly?",
    answer:
      "Our experienced event managers coordinate vendors, timelines, logistics, and on-site operations to ensure seamless execution.",
  },
  {
    question: "Do you provide customized event packages?",
    answer:
      "Yes. Every package is tailored to your event size, requirements, and budget.",
  },
  {
    question: "Can I hire individual event services?",
    answer:
      "Yes. You can hire individual services such as décor, photography, entertainment, catering, or venue management.",
  },
  {
    question: "Do you organize engagement ceremonies?",
    answer:
      "Yes. We plan elegant engagement ceremonies with customized décor, entertainment, and guest management.",
  },
  {
    question: "Can you manage anniversary celebrations?",
    answer:
      "Yes. We organize anniversary events ranging from intimate family gatherings to grand celebrations.",
  },
  {
    question: "Do you provide event branding?",
    answer:
      "Yes. We create banners, backdrops, standees, signage, welcome kits, and branded event materials.",
  },
  {
    question: "Can you arrange celebrity appearances?",
    answer:
      "Yes. Subject to availability and budget, we can coordinate celebrity appearances and performances.",
  },
  {
    question: "Do you offer event insurance assistance?",
    answer:
      "We can guide clients regarding event insurance options where applicable.",
  },
  {
    question: "How many guests can you manage?",
    answer:
      "We successfully manage events ranging from small private gatherings to large-scale events with thousands of attendees.",
  },
  {
    question: "Do you provide wedding guest hospitality?",
    answer:
      "Yes. We manage guest welcome, accommodation, transportation, and hospitality throughout the event.",
  },
  {
    question: "Can you help with event scheduling?",
    answer:
      "Yes. We prepare detailed event timelines and coordinate every activity for smooth execution.",
  },
  {
    question: "Do you provide post-event support?",
    answer:
      "Yes. We assist with event wrap-up, vendor settlements, media delivery, and feedback collection.",
  },
  {
    question: "Can you manage last-minute event changes?",
    answer:
      "Yes. Our experienced team is prepared to adapt quickly to schedule changes and unexpected situations.",
  },
  {
    question: "How do you select vendors?",
    answer:
      "We work with trusted and experienced vendors who meet our quality standards for every event.",
  },
  {
    question: "Do you offer eco-friendly event solutions?",
    answer:
      "Yes. We can recommend sustainable décor, reusable materials, digital invitations, and environmentally conscious event practices.",
  },
  {
    question: "How much do your event management services cost?",
    answer:
      "Pricing depends on the event type, guest count, venue, services required, and customization. We provide personalized quotations after consultation.",
  },
  {
    question: "Will I receive regular updates during planning?",
    answer:
      "Yes. We keep clients informed throughout the planning process with regular meetings, progress updates, and approvals.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us to discuss your event. We'll understand your requirements, suggest ideas, and provide a customized event plan and quotation.",
  },
  {
    question: "Why should I choose your event management company?",
    answer:
      "Our experienced team combines creativity, meticulous planning, trusted vendor partnerships, and flawless execution to deliver memorable events tailored to your vision.",
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
        <FAQ
          faqs={faqs}
          heading="Digital Marketing FAQs"
          subheading="Answers to the most common questions about our services, timelines, and approach."
          className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8"
        />

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
