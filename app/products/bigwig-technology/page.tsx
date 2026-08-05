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
import FAQ, { FaqItem } from "@/app/components/FAQ";

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

const faqs: FaqItem[] = [
  {
    question: "What services does Bigwig Technology provide?",
    answer:
      "Bigwig Technology offers custom software development, web development, mobile app development, UI/UX design, cloud solutions, AI integration, CRM and ERP development, API integration, and ongoing maintenance services.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with startups, SMEs, enterprises, healthcare, finance, education, real estate, eCommerce, logistics, hospitality, and other industries requiring custom software solutions.",
  },
  {
    question: "Do you develop custom software?",
    answer:
      "Yes. Every solution is designed around your business goals, workflows, and scalability requirements rather than using one-size-fits-all templates.",
  },
  {
    question: "Can you build a website from scratch?",
    answer:
      "Absolutely. We design and develop responsive, high-performance websites tailored to your business needs.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We modernize outdated websites with improved UI, UX, performance, accessibility, and SEO best practices.",
  },
  {
    question: "Do you develop eCommerce websites?",
    answer:
      "Yes. We build secure and scalable online stores with payment gateway integration, inventory management, and order tracking.",
  },
  {
    question: "Do you build mobile applications?",
    answer:
      "Yes. We develop native and cross-platform mobile applications for Android and iOS.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Our team works with React, Next.js, Angular, Vue.js, Node.js, Express, NestJS, .NET, Python, Java, PHP, React Native, Flutter, MongoDB, PostgreSQL, MySQL, AWS, Azure, and more.",
  },
  {
    question: "Can you develop SaaS products?",
    answer:
      "Yes. We specialize in scalable SaaS platforms with secure authentication, subscription management, and cloud deployment.",
  },
  {
    question: "Do you create admin dashboards?",
    answer:
      "Yes. We develop secure admin panels with analytics, reporting, user management, and role-based access control.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We integrate payment gateways, CRMs, ERPs, social platforms, maps, messaging services, AI APIs, and other third-party systems.",
  },
  {
    question: "Do you provide UI/UX design services?",
    answer:
      "Yes. We create intuitive wireframes, prototypes, and user interfaces focused on usability and business objectives.",
  },
  {
    question: "Can you build CRM software?",
    answer:
      "Yes. We develop custom CRM systems for lead management, customer communication, sales pipelines, and reporting.",
  },
  {
    question: "Do you build ERP systems?",
    answer:
      "Yes. We develop ERP solutions that streamline operations, finance, HR, inventory, procurement, and reporting.",
  },
  {
    question: "Do you offer cloud application development?",
    answer:
      "Yes. We build and deploy cloud-native applications using modern cloud infrastructure and best practices.",
  },
  {
    question: "Can you migrate my existing application to the cloud?",
    answer:
      "Yes. We assist with secure cloud migration while minimizing downtime and preserving data integrity.",
  },
  {
    question: "Do you provide software maintenance?",
    answer:
      "Yes. We offer bug fixes, security updates, performance optimization, feature enhancements, and long-term support.",
  },
  {
    question: "Can you modernize legacy software?",
    answer:
      "Yes. We upgrade legacy applications with modern technologies while improving performance and maintainability.",
  },
  {
    question: "Do you provide API development services?",
    answer:
      "Yes. We design secure RESTful and GraphQL APIs that enable seamless communication between applications.",
  },
  {
    question: "How do you ensure software security?",
    answer:
      "We follow secure coding practices, encryption standards, authentication protocols, regular security testing, and compliance with industry best practices.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer:
      "Yes. We integrate secure payment gateways including Stripe, Razorpay, PayPal, and other leading providers.",
  },
  {
    question: "Do you provide database design and optimization?",
    answer:
      "Yes. We design scalable databases and optimize queries for high performance and reliability.",
  },
  {
    question: "Can you build enterprise software?",
    answer:
      "Yes. We develop enterprise-grade applications capable of supporting large teams, high traffic, and complex workflows.",
  },
  {
    question: "Do you provide DevOps services?",
    answer:
      "Yes. We automate deployments, implement CI/CD pipelines, monitor infrastructure, and optimize cloud environments.",
  },
  {
    question: "Can you integrate AI into my application?",
    answer:
      "Yes. We integrate AI features such as chatbots, automation, recommendation engines, OCR, NLP, and generative AI capabilities.",
  },
  {
    question: "Do you offer chatbot development?",
    answer:
      "Yes. We build AI-powered chatbots and virtual assistants for websites, mobile apps, and customer support.",
  },
  {
    question: "Can you develop booking systems?",
    answer:
      "Yes. We create appointment scheduling, reservation, ticketing, and booking management platforms.",
  },
  {
    question: "Do you provide custom business automation?",
    answer:
      "Yes. We automate repetitive business processes to improve productivity, reduce manual work, and increase operational efficiency.",
  },
  {
    question: "Can you build multi-vendor marketplaces?",
    answer:
      "Yes. We develop scalable marketplace platforms with vendor management, payments, inventory, and order processing.",
  },
  {
    question: "How long does software development take?",
    answer:
      "Project timelines depend on complexity, features, and scope. Small projects may take a few weeks, while enterprise solutions can take several months.",
  },
  {
    question: "Will I receive project updates?",
    answer:
      "Yes. We provide regular progress reports, milestone reviews, demos, and transparent communication throughout development.",
  },
  {
    question: "Can you work with our internal team?",
    answer:
      "Absolutely. We collaborate with your in-house developers, designers, and stakeholders throughout the project.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We are happy to sign Non-Disclosure Agreements to protect your confidential business information and intellectual property.",
  },
  {
    question: "Who owns the source code after project completion?",
    answer:
      "Once the project is completed and contractual obligations are fulfilled, the ownership of the source code is transferred to you.",
  },
  {
    question: "Do you provide quality assurance and testing?",
    answer:
      "Yes. Every project undergoes functional, performance, security, and usability testing before deployment.",
  },
  {
    question: "Can you help launch my application?",
    answer:
      "Yes. We assist with production deployment, cloud hosting, App Store and Play Store submissions, and post-launch monitoring.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer maintenance plans, technical support, updates, and continuous improvements after launch.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "Pricing depends on the project scope, required features, integrations, technology stack, and timeline. We provide customized quotations after understanding your requirements.",
  },
  {
    question: "How do I start a project with Bigwig Technology?",
    answer:
      "Simply contact our team to discuss your requirements. We'll analyze your goals, recommend the best solution, provide a project roadmap, and share a detailed proposal.",
  },
  {
    question: "Why choose Bigwig Technology for software development?",
    answer:
      "Bigwig Technology combines technical expertise, modern technologies, scalable architecture, transparent communication, and long-term support to deliver reliable software solutions that help businesses grow.",
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
