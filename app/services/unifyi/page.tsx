"use client";

import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const unifyiModules = [
  {
    title: "Student Portal",
    description:
      "A simple digital experience for applicants to track progress, submit documents, and stay informed at every stage.",
    icon: GraduationCap,
  },
  {
    title: "University Portal",
    description:
      "A centralized view for universities to manage applications, review student progress, and collaborate smoothly.",
    icon: LayoutDashboard,
  },
  {
    title: "Counselling Manager",
    description:
      "Organize counselling interactions, follow-ups, and communication in one place for stronger admission support.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Counsellor Workspace",
    description:
      "Give counsellors a focused dashboard to guide students, assign actions, and keep every case moving forward.",
    icon: UsersRound,
  },
  {
    title: "Admin Control",
    description:
      "Keep operations structured with role-based oversight, process visibility, and dependable workflow management.",
    icon: ShieldCheck,
  },
  {
    title: "University Admin",
    description:
      "Equip university admins with the tools to monitor admissions, approve requests, and streamline approvals.",
    icon: BookOpen,
  },
];

const highlights = [
  {
    title: "Complete Admission Flow",
    description:
      "From enquiry to enrolment, every step is connected through one intelligent system.",
  },
  {
    title: "Unified Collaboration",
    description:
      "Students, counsellors, admins, and university teams work from a shared process.",
  },
  {
    title: "Smarter Decision Making",
    description:
      "Track progress, manage documents, and improve response time with real-time visibility.",
  },
];

export default function UnifyiPage() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#25258E] text-white">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#EE3D49] md:block" />
          <div className="relative mx-auto grid min-h-[540px] w-full max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-rose-100">
                Unifyi by Bigwig
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Complete admission management for modern institutions
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
                Unifyi is designed to manage the full admission journey with
                role-based portals for students, universities, counsellors, and
                administrators.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://unify-orpin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-rose-50"
                >
                  Explore Unifyi
                  <ArrowUpRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Want to know more?
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
                    Built for flow
                  </p>
                  <p className="text-xl font-bold">
                    One platform for every stakeholder
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Student portal for application tracking",
                  "University portal for operational oversight",
                  "Counselling manager for guided admissions",
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
              Core modules
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#25258E] md:text-4xl">
              Built to support every stage of admission management
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Unifyi brings students, counsellors, admins, and university teams
              together in one coordinated system to simplify the admission
              process.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {unifyiModules.map((module) => {
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
                Ready to simplify admissions?
              </h2>
              <p className="mt-2 max-w-2xl text-white/85">
                Let’s build a smoother, more transparent admission journey with
                Unifyi.
              </p>
            </div>
            <a
              href="https://unify-orpin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#25258E] transition hover:bg-rose-50"
            >
              Open Unifyi
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
