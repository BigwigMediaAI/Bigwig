"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  CalendarDays,
  Code2,
  Handshake,
  Megaphone,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Service = {
  title: string;
  description: string;
  includedServices: string[];
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "HELP! I NEED A DIGITAL PARTNER",
    description:
      "Starting a business can be tedious. Promoting it is a necessity. If you think generating leads, lead management, generating sales etc can be done by a Specialist so you can spare time for your other important work, then consider us your Partners, as making lives easy is our full time job.",
    includedServices: [
      "Business Strategy",
      "Digital Consulting",
      "Lead Generation",
      "CRM Solutions",
      "Marketing Automation",
      "Analytics",
    ],
    icon: Handshake,
  },
  {
    title: "HELP! I NEED TO EXECUTE A DIGITAL CAMPAIGN",
    description:
      "Dealing with so many abilities, we pride ourselves on having the capacity to handle anything a customer tosses at us. We trust in being the unparalleled accomplice our customers could ever need; that is the reason notwithstanding our center services we likewise have secondary divisions like SEO, SMO, PPC, SEM, CPL, CPM and loads of other critical sounding 3 letter acronyms.",
    includedServices: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "PPC",
      "SEM",
      "CPL Campaigns",
      "Email Marketing",
    ],
    icon: Megaphone,
  },
  {
    title: "HELP! I NEED CREATIVE CAMPAIGN",
    description:
      "Hey, not so stranger. So, at this time you might have some knowledge of the work we provide. And if you thought that is enough of what we do, sorry but we have more in store for you. Creative campaign land to a destination fulfilling creative criteria such as banners: both online and offline, flyers, video editing, website layout, anything you can think of that will be needed in campaigning, we’ve got you covered.",
    includedServices: [
      "Branding",
      "Graphic Design",
      "Motion Graphics",
      "Video Editing",
      "UI Design",
      "Banner Design",
      "Flyers",
      "Creative Concepts",
    ],
    icon: Palette,
  },
  {
    title: "HELP! I NEED AN APP",
    description:
      "We have created everything from corporate apps to multiplayer games to virtual pets. We have found that the real challenge isn’t designing or building the functionalities but knowing which ones give actual value - and how to distribute the man hours. We have been through the process countless times and we will get you through too.",
    includedServices: [
      "Android Apps",
      "iOS Apps",
      "React Native",
      "Flutter",
      "Cross Platform Apps",
      "Enterprise Apps",
    ],
    icon: Smartphone,
  },
  {
    title: "HELP! I NEED E-COMMERCE WEB APPLICATION WEBSITE",
    description:
      "A well built DIGITAL PLATFROM should generate revenue, strengthen your brand and relieve pressure from your customer support. But the demands and complexity of modern web technology has risen enormously in the past few years, leaving many outdated and broken. Let’s try to fix that. Therefore we focus on creating your base glitch free and convenient so that it can 'rise above all'.",
    includedServices: [
      "Business Websites",
      "E-Commerce Stores",
      "Custom Web Applications",
      "CMS Development",
      "Landing Pages",
      "API Integration",
      "Performance Optimization",
      "Website Maintenance",
    ],
    icon: ShoppingBag,
  },
  {
    title: "HELP! I NEED TO ORGANIZE AN EVENT",
    description:
      "Eventful are the days when you have an event to run. Well, don't get me started, BigWig Events can help you with this too.BigWig is a one stop destination as we cover variety of portions, from corporate events, MICE, desitination weddings, catering to security, every detail is seen through magnifying glass.",
    includedServices: [
      "Corporate Events",
      "MICE",
      "Destination Weddings",
      "Product Launches",
      "Conferences",
      "Exhibition Management",
      "Catering",
      "Security Management",
    ],
    icon: CalendarDays,
  },
  {
    title: "Help! I Need Software Development",
    description:
      "We build secure, scalable, and high-performance software solutions tailored to your business needs. From custom enterprise applications to SaaS platforms, CRM systems, ERP solutions, APIs, and cloud-based software, our team delivers reliable products that help businesses automate processes, improve productivity, and scale efficiently.",
    includedServices: [
      "Custom Software",
      "CRM Development",
      "ERP Solutions",
      "SaaS Products",
      "REST APIs",
      "Microservices",
      "Cloud Applications",
      "AI Integrations",
      "Automation Tools",
      "Enterprise Software",
    ],
    icon: Code2,
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const [help, ...title] = service.title.split(" ");

  return (
    <article
      className="group flex h-full flex-col rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[0_18px_45px_rgba(37,37,142,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#EE3D49]/45 hover:shadow-[0_24px_60px_rgba(37,37,142,0.18)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
      data-aos="fade-up"
      data-aos-delay={String((index % 3) * 75)}
      data-aos-duration="650"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25258E]/10 text-[#25258E] transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#25258E] group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none">
          <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
        </div>
        <span className="rounded-full bg-[#EE3D49]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#c72f3a]">
          Service
        </span>
      </div>

      <h2 className="text-xl font-black leading-tight tracking-[-0.02em] text-[#25258E] sm:text-2xl">
        <span className="text-[#EE3D49]">{help}</span>{" "}
        <span>{title.join(" ")}</span>
      </h2>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {service.description}
      </p>

      <div className="mt-7 border-t border-[#25258E]/10 pt-5">
        <div className="flex items-center gap-2">
          <Sparkles
            aria-hidden="true"
            size={16}
            className="text-[#EE3D49]"
            strokeWidth={2}
          />
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#25258E]">
            Services included
          </h3>
        </div>

        <ul
          aria-label={"Services included with " + service.title}
          className="mt-4 flex flex-wrap gap-2"
        >
          {service.includedServices.map((includedService) => (
            <li key={includedService}>
              <span className="inline-flex rounded-full border border-[#25258E]/10 bg-[#25258E]/5 px-3 py-1.5 text-xs font-semibold text-[#25258E] transition duration-200 hover:-translate-y-0.5 hover:border-[#EE3D49]/35 hover:bg-[#EE3D49]/10 motion-reduce:transform-none motion-reduce:transition-none">
                {includedService}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="group/contact mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#25258E] px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-300 hover:bg-[#1c1c6b] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE3D49] motion-reduce:transition-none"
      >
        Contact us
        <ArrowRight
          aria-hidden="true"
          size={17}
          className="transition-transform duration-300 group-hover/contact:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </Link>
    </article>
  );
}

export default function HelpSection() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document
        .querySelectorAll<HTMLElement>("[data-aos]")
        .forEach((element) => {
          element.removeAttribute("data-aos-delay");
          element.classList.add("aos-animate");
        });
      return;
    }

    AOS.init({
      once: true,
      offset: 80,
      duration: 650,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="w-full">
      <Navbar />

      <main>
        <section
          aria-labelledby="things-we-do-heading"
          className="relative overflow-hidden bg-gradient-to-br from-[#f7f7ff] via-white to-rose-50 px-4 py-16 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -right-28 top-8 h-72 w-72 rounded-full bg-[#EE3D49]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#25258E]/10 blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-7xl">
            <header
              className="mx-auto max-w-3xl text-center"
              data-aos="fade-up"
              data-aos-duration="650"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EE3D49] sm:tracking-[0.25em]">
                <span className="text-rose-500">We </span>
                <span className="text-blue-700">plan </span>
                <span className="text-pink-500">design </span>
                <span className="text-yellow-600">build </span>
                <span className="text-green-600">execute </span>
                <span className="text-sky-600">deliver </span>
                <span className="text-purple-600">retain</span>
              </p>
              <h1
                id="things-we-do-heading"
                className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#25258E] sm:text-5xl md:text-6xl"
              >
                How can we help you?
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                From strategy through execution, choose the expertise that moves
                your next idea forward.
              </p>
            </header>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-full max-w-7xl p-6 font-sans md:px-8 md:py-14"
          data-aos="fade-up"
          data-aos-duration="650"
        >
          <div className="inline-block px-4 py-2 mb-8">
            <div className="relative w-fit group">
              <h2 className="relative z-10 border-4 border-[#F22E37] bg-white px-4 py-2 text-2xl font-bold text-[#F22E37] md:text-3xl">
                <span className="text-2xl font-bold text-blue-700">HELP!</span>{" "}
                <span className="text-2xl font-semibold text-red-600">
                  MY THING IS NONE OF THE ABOVE
                </span>
              </h2>
              <div className="absolute inset-0 z-0 translate-x-1.5 translate-y-1.5 bg-[#F22E37] transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0" />
            </div>
          </div>

          <div className="mb-8 flex flex-col sm:flex-row md:gap-6">
            <ul className="ml-6 list-disc space-y-2">
              <li>CMS, LMS & CRM Development</li>
              <li>Landing Page & Banner Ad&apos;s</li>
              <li>Marketing Automation</li>
              <li>Logo Designing</li>
              <li>2D & 3D Animation & Motion Graphics</li>
              <li>Email Marketing</li>
              <li>Offline Creatives</li>
            </ul>
            <ul className="mt-2 ml-6 list-disc space-y-2 sm:mt-0">
              <li>Content Writing</li>
              <li>Blogs, Articles & Press Release</li>
              <li>Video Shoot</li>
              <li>Drone Shoot</li>
              <li>Web & Marketing Analysis</li>
              <li>Brand Doc & Brochures</li>
              <li>ATL, BTL, TTL Services</li>
            </ul>
          </div>

          <p className="mb-2">
            Just{" "}
            <span className="inline-block border-4 border-red-500 px-3 py-1 font-semibold">
              Poke Us
            </span>{" "}
            for anything, even for watering your office plants, we probably
          </p>
          <p className="mb-4">
            will do even that awkward task with the utmost genius.
          </p>

          <Link
            href="/contact"
            className="inline-flex rounded border-2 border-blue-900 p-2 font-bold tracking-wider text-blue-900 transition hover:bg-blue-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE3D49]"
          >
            CONTACT US
          </Link>
        </section>
      </main>

      <Footer />
      <div className="fixed bottom-0 left-0 z-50 flex w-full md:hidden">
        <a
          href="tel:+918368573451"
          className="w-1/2 border-r border-white bg-[#EE3D49] py-3 text-center text-white"
        >
          Call Me
        </a>
        <Link
          href="/contact"
          className="w-1/2 bg-blue-900 py-3 text-center text-white"
        >
          I&apos;m Interested
        </Link>
      </div>
    </div>
  );
}
