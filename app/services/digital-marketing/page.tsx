"use client";

import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  FileText,
  Film,
  LineChart,
  Mail,
  Megaphone,
  MessageCircle,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FAQ, { FaqItem } from "../../components/FAQ";
import { FaFacebook } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, fast, responsive websites and landing pages built to generate leads and drive business growth.",
    icon: Code2,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Technical SEO, on-page optimization, local SEO, content strategy, and link building to improve search rankings.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description:
      "Complete social media management including strategy, content creation, posting, and audience engagement.",
    icon: Megaphone,
  },
  {
    title: "Performance Marketing",
    description:
      "ROI-focused paid campaigns across Google, Meta, LinkedIn, YouTube, and other advertising platforms.",
    icon: BarChart3,
  },
  {
    title: "Google Ads Management",
    description:
      "Search, Display, Shopping, Performance Max, and YouTube Ads optimized for maximum conversions.",
    icon: Target,
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Lead generation, eCommerce sales, remarketing, and brand awareness campaigns on Meta platforms.",
    icon: FaFacebook,
  },
  {
    title: "Content Marketing",
    description:
      "SEO-friendly blogs, website copy, marketing content, and storytelling that builds authority and trust.",
    icon: FileText,
  },
  {
    title: "Graphic Designing",
    description:
      "Creative social media posts, branding materials, advertisements, banners, brochures, and marketing assets.",
    icon: Palette,
  },
  {
    title: "Video Production & Editing",
    description:
      "Professional reels, YouTube videos, ad creatives, promotional videos, and motion graphics.",
    icon: Film,
  },
  {
    title: "Online Reputation Management",
    description:
      "Monitor, manage, and improve your online reviews and brand reputation across digital platforms.",
    icon: ShieldCheck,
  },
  {
    title: "Email Marketing",
    description:
      "Automated email campaigns, newsletters, lead nurturing, and customer retention strategies.",
    icon: Mail,
  },
  {
    title: "WhatsApp Marketing",
    description:
      "Bulk messaging, customer engagement, automation, and WhatsApp Business API campaign management.",
    icon: MessageCircle,
  },
  {
    title: "Marketing Automation",
    description:
      "Automate lead nurturing, CRM workflows, customer journeys, and sales processes.",
    icon: Bot,
  },
  {
    title: "Brand Strategy & Identity",
    description:
      "Brand positioning, messaging, visual identity, logo design, and complete branding solutions.",
    icon: Sparkles,
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Improve website performance and increase conversions through testing, analytics, and UX improvements.",
    icon: TrendingUp,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Google Analytics, Looker Studio dashboards, campaign tracking, and actionable marketing insights.",
    icon: LineChart,
  },
];

const faqs: FaqItem[] = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "SEO and organic growth are steady processes that typically gain momentum over several weeks, while paid campaigns and website improvements can start generating engagement right away.",
  },
  {
    question: "Can you handle both my website and social media marketing?",
    answer:
      "Yes. Our team manages website development, SEO, social media marketing, reputation management, branding, content creation, and paid advertising under one strategy.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with startups, small businesses, enterprises, agencies, healthcare providers, real estate companies, eCommerce brands, educational institutions, and more.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We monitor website traffic, search rankings, lead quality, conversions, engagement, ROI, and customer acquisition to measure campaign performance.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. We provide on-page SEO, technical SEO, local SEO, keyword research, content optimization, link building, and performance monitoring.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We redesign websites to improve user experience, performance, branding, mobile responsiveness, and search engine visibility.",
  },
  {
    question: "Do you build custom websites?",
    answer:
      "Yes. We create custom websites tailored to your business goals using modern technologies and responsive design principles.",
  },
  {
    question: "Do you provide eCommerce website development?",
    answer:
      "Yes. We build scalable eCommerce websites with secure payment integration, product management, inventory support, and optimized shopping experiences.",
  },
  {
    question: "What social media platforms do you manage?",
    answer:
      "We manage Facebook, Instagram, LinkedIn, X (Twitter), YouTube, Pinterest, and other platforms based on your audience and business goals.",
  },
  {
    question: "How often do you post on social media?",
    answer:
      "Posting frequency depends on your marketing plan. We typically recommend 3–7 quality posts per week for consistent engagement.",
  },
  {
    question: "Do you create social media content?",
    answer:
      "Yes. Our creative team designs graphics, videos, reels, captions, and campaign creatives aligned with your brand identity.",
  },
  {
    question: "Can you run paid advertising campaigns?",
    answer:
      "Yes. We manage Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, and other paid campaigns focused on maximizing ROI.",
  },
  {
    question: "Do you provide Google Ads management?",
    answer:
      "Yes. We handle campaign setup, keyword research, bidding strategy, optimization, conversion tracking, and performance reporting.",
  },
  {
    question: "Can you help generate more leads?",
    answer:
      "Yes. We combine SEO, paid advertising, landing pages, CRO, and content marketing to generate qualified leads for your business.",
  },
  {
    question: "Do you offer branding services?",
    answer:
      "Yes. We create brand identities including logos, color systems, typography, messaging, and visual guidelines.",
  },
  {
    question: "Can you create marketing videos?",
    answer:
      "Yes. We produce promotional videos, motion graphics, product videos, testimonials, and social media reels.",
  },
  {
    question: "Do you offer content writing services?",
    answer:
      "Yes. We write SEO-friendly blogs, website copy, landing pages, product descriptions, and marketing content.",
  },
  {
    question: "How do you improve website conversions?",
    answer:
      "We optimize page speed, improve UX, strengthen CTAs, simplify navigation, and continuously test layouts for better conversion rates.",
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. Every month you receive transparent reports covering traffic, rankings, leads, campaign performance, and recommendations.",
  },
  {
    question: "Will I have a dedicated account manager?",
    answer:
      "Yes. Every client is assigned a dedicated point of contact for communication, strategy discussions, and project updates.",
  },
  {
    question: "Can you improve my local search rankings?",
    answer:
      "Yes. We optimize Google Business Profile, local citations, reviews, and location-specific SEO strategies.",
  },
  {
    question: "Do you manage online reputation?",
    answer:
      "Yes. We help businesses monitor reviews, improve ratings, respond professionally, and strengthen brand reputation online.",
  },
  {
    question: "Can you recover a website affected by Google updates?",
    answer:
      "Yes. We perform comprehensive SEO audits, identify issues, and implement recovery strategies based on Google's best practices.",
  },
  {
    question: "Do you optimize website speed?",
    answer:
      "Yes. We improve loading speed through image optimization, caching, code optimization, and performance best practices.",
  },
  {
    question: "Is my website mobile-friendly?",
    answer:
      "Every website we build is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Can you migrate my website without downtime?",
    answer:
      "Yes. We carefully plan website migrations to minimize downtime and preserve SEO performance.",
  },
  {
    question: "Do you integrate CRM systems?",
    answer:
      "Yes. We integrate CRM platforms, lead forms, marketing automation tools, and third-party business software.",
  },
  {
    question: "Can you track phone calls and form submissions?",
    answer:
      "Yes. We implement conversion tracking for calls, forms, purchases, and other business goals.",
  },
  {
    question: "Do you offer email marketing?",
    answer:
      "Yes. We design email campaigns, newsletters, automation workflows, and performance tracking.",
  },
  {
    question: "Can you help increase website traffic?",
    answer:
      "Yes. We combine SEO, content marketing, social media, and paid campaigns to drive qualified traffic.",
  },
  {
    question: "Do you create landing pages?",
    answer:
      "Yes. We build high-converting landing pages optimized for advertising campaigns and lead generation.",
  },
  {
    question: "Can you manage multiple business locations?",
    answer:
      "Yes. We develop location-specific marketing strategies and local SEO campaigns for multi-location businesses.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We provide digital marketing services for businesses across different countries and industries.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on your business goals, project scope, and selected services. We provide customized packages tailored to your needs.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "We offer flexible engagement models. Depending on the service, clients can choose monthly, quarterly, or long-term partnerships.",
  },
  {
    question: "How do we get started?",
    answer:
      "We begin with a consultation to understand your goals, analyze your current digital presence, and recommend the most effective strategy.",
  },
  {
    question: "Can you help with website maintenance?",
    answer:
      "Yes. We provide ongoing website maintenance, security updates, backups, bug fixes, and feature enhancements.",
  },
  {
    question: "Do you offer technical support after project completion?",
    answer:
      "Yes. We provide post-launch support to ensure your website and marketing campaigns continue to perform effectively.",
  },
  {
    question: "Can you improve my Google Business Profile?",
    answer:
      "Yes. We optimize your profile with accurate information, images, reviews, posts, and local SEO strategies to improve visibility.",
  },
  {
    question: "Why should I choose your digital marketing agency?",
    answer:
      "We combine strategy, creativity, technology, and data-driven marketing to deliver measurable business growth while providing transparent communication and dedicated support.",
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
                From website development and SEO to social media, brand
                marketing, paid ads, email campaigns, graphics, and video
                editing, we help brands create a stronger digital presence from
                one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://digital-three-xi.vercel.app/"
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
