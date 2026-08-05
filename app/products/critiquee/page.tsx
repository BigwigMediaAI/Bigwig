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
import FAQ, { FaqItem } from "@/app/components/FAQ";

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

const faqs: FaqItem[] = [
  {
    question: "What is Critiquee?",
    answer:
      "Critiquee is an all-in-one Online Reputation Management (ORM) platform that helps businesses collect, monitor, manage, and respond to customer reviews across multiple online platforms from a single dashboard.",
  },
  {
    question: "Who can use Critiquee?",
    answer:
      "Critiquee is designed for businesses of all sizes, including restaurants, hotels, healthcare providers, retailers, educational institutions, agencies, franchises, and multi-location enterprises.",
  },
  {
    question: "How does Critiquee help improve online reputation?",
    answer:
      "Critiquee helps businesses generate more positive reviews, respond to customer feedback quickly, monitor brand reputation, and gain actionable insights to improve customer satisfaction.",
  },
  {
    question: "Which review platforms does Critiquee support?",
    answer:
      "Critiquee supports major review platforms such as Google Business Profile, Facebook, Yelp, TripAdvisor, Zomato, and other supported review sources depending on your subscription.",
  },
  {
    question: "Can I manage reviews from multiple platforms in one place?",
    answer:
      "Yes. Critiquee centralizes reviews from multiple platforms into a single dashboard, making reputation management easier and more efficient.",
  },
  {
    question: "Does Critiquee support multiple business locations?",
    answer:
      "Yes. You can manage reviews, ratings, and customer feedback for multiple branches or locations from one account.",
  },
  {
    question: "Can I respond to reviews directly from Critiquee?",
    answer:
      "Yes. Depending on the connected platform, you can respond to customer reviews directly without leaving the Critiquee dashboard.",
  },
  {
    question: "Does Critiquee notify me when I receive a new review?",
    answer:
      "Yes. You receive real-time notifications whenever new reviews are published on your connected platforms.",
  },
  {
    question: "Can I monitor negative reviews?",
    answer:
      "Yes. Critiquee helps identify negative reviews quickly so your team can respond promptly and resolve customer concerns.",
  },
  {
    question: "Does Critiquee provide review analytics?",
    answer:
      "Yes. The platform offers analytics including review trends, average ratings, sentiment analysis, response rates, and performance insights.",
  },
  {
    question: "Can I generate review request links?",
    answer:
      "Yes. Critiquee allows you to create and share custom review links to encourage satisfied customers to leave feedback.",
  },
  {
    question: "Does Critiquee support QR codes for review collection?",
    answer:
      "Yes. Businesses can generate QR codes that direct customers to leave reviews quickly using their smartphones.",
  },
  {
    question: "Can I customize review request messages?",
    answer:
      "Yes. You can personalize SMS, email, and WhatsApp review request messages to match your brand voice.",
  },
  {
    question: "Does Critiquee support automated review requests?",
    answer:
      "Yes. Automated review requests can be triggered after customer interactions to improve review collection rates.",
  },
  {
    question: "Can I track customer satisfaction?",
    answer:
      "Yes. Critiquee provides detailed insights into customer feedback, helping you identify strengths and improvement areas.",
  },
  {
    question: "Does Critiquee offer sentiment analysis?",
    answer:
      "Yes. The platform analyzes customer reviews to identify positive, neutral, and negative sentiment trends.",
  },
  {
    question: "Can I assign reviews to my team?",
    answer:
      "Yes. Reviews can be assigned to team members or departments for faster response and issue resolution.",
  },
  {
    question: "Does Critiquee provide reporting?",
    answer:
      "Yes. Generate detailed reports on review performance, ratings, response times, customer sentiment, and reputation trends.",
  },
  {
    question: "Can I export my reports?",
    answer:
      "Yes. Reports can be exported for internal analysis, client presentations, or management reporting.",
  },
  {
    question: "Can agencies use Critiquee?",
    answer:
      "Yes. Digital marketing agencies can manage reputation for multiple clients using separate business profiles.",
  },
  {
    question: "Does Critiquee support role-based access?",
    answer:
      "Yes. You can assign different access levels and permissions to team members based on their responsibilities.",
  },
  {
    question: "Can multiple users access the same account?",
    answer:
      "Yes. Team members can collaborate using role-based permissions and centralized review management.",
  },
  {
    question: "Does Critiquee integrate with Google Business Profile?",
    answer:
      "Yes. Critiquee integrates with Google Business Profile to help manage reviews, ratings, and business insights efficiently.",
  },
  {
    question: "Can I monitor my competitors?",
    answer:
      "Depending on your subscription, Critiquee provides competitor benchmarking to compare ratings and review performance.",
  },
  {
    question: "Does Critiquee support social media management?",
    answer:
      "Yes. Selected plans include tools for publishing content and managing engagement across connected social platforms.",
  },
  {
    question: "Can I schedule social media posts?",
    answer:
      "Yes. Critiquee allows you to schedule and publish content across supported social media channels.",
  },
  {
    question: "How secure is my business data?",
    answer:
      "Critiquee follows industry-standard security practices to protect customer information and connected business accounts.",
  },
  {
    question: "Can I customize my dashboard?",
    answer:
      "Yes. Dashboard widgets and reports can be customized to highlight the metrics most important to your business.",
  },
  {
    question: "Does Critiquee work on mobile devices?",
    answer:
      "Yes. Critiquee is accessible through modern mobile browsers, allowing you to manage reviews on the go.",
  },
  {
    question: "Can I connect multiple brands?",
    answer:
      "Yes. Businesses managing multiple brands can organize and monitor each brand separately within the platform.",
  },
  {
    question: "Does Critiquee help increase Google reviews?",
    answer:
      "Yes. Review request campaigns, QR codes, and direct review links make it easier to encourage customers to leave Google reviews.",
  },
  {
    question: "Can I filter reviews by rating?",
    answer:
      "Yes. Reviews can be filtered by star rating, platform, location, sentiment, and date.",
  },
  {
    question: "Does Critiquee support customer feedback collection?",
    answer:
      "Yes. Businesses can collect both public reviews and private customer feedback to improve service quality.",
  },
  {
    question: "Can I track response times?",
    answer:
      "Yes. Critiquee measures review response times and helps teams improve customer engagement performance.",
  },
  {
    question: "How quickly are new reviews synced?",
    answer:
      "Review synchronization depends on the connected platform, but supported integrations are updated regularly to keep your dashboard current.",
  },
  {
    question: "Is training provided for new users?",
    answer:
      "Yes. We provide onboarding assistance and training resources to help your team get started quickly.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes. Our support team is available to assist with onboarding, integrations, technical questions, and platform usage.",
  },
  {
    question: "Can I request a product demo?",
    answer:
      "Absolutely. You can schedule a personalized demo to explore Critiquee's features and understand how it fits your business needs.",
  },
  {
    question: "How much does Critiquee cost?",
    answer:
      "Pricing varies based on the number of business locations, users, and required features. Contact our team for a customized quote.",
  },
  {
    question: "Why choose Critiquee over other ORM platforms?",
    answer:
      "Critiquee combines review management, customer feedback, analytics, multi-location support, social media tools, reporting, and automation into one easy-to-use platform, helping businesses strengthen their online reputation and build customer trust.",
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
