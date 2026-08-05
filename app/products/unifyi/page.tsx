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
import FAQ, { FaqItem } from "@/app/components/FAQ";

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

const faqs: FaqItem[] = [
  {
    question: "What is Unifyi?",
    answer:
      "Unifyi is a cloud-based admission management platform that helps universities, colleges, schools, and education consultants streamline the entire student admission process from inquiry to enrollment.",
  },
  {
    question: "Who can use Unifyi?",
    answer:
      "Unifyi is designed for universities, colleges, schools, educational institutions, admission consultants, and students looking for a simplified admission experience.",
  },
  {
    question: "How does Unifyi simplify the admission process?",
    answer:
      "Unifyi automates application management, document verification, communication, status tracking, reporting, and student onboarding from a centralized dashboard.",
  },
  {
    question: "Can students apply online through Unifyi?",
    answer:
      "Yes. Students can complete applications, upload documents, track admission status, and receive updates through the platform.",
  },
  {
    question: "Can universities manage multiple programs?",
    answer:
      "Yes. Institutions can create and manage multiple courses, departments, campuses, and admission cycles from one platform.",
  },
  {
    question: "Does Unifyi support multiple campuses?",
    answer:
      "Yes. Multi-campus institutions can manage admissions, students, and reports for each campus independently.",
  },
  {
    question: "Can students track their application status?",
    answer:
      "Yes. Students can log in anytime to view real-time updates on their application progress.",
  },
  {
    question: "Does Unifyi support online document uploads?",
    answer:
      "Yes. Students can securely upload academic records, identification documents, certificates, and other required files.",
  },
  {
    question: "Can admission officers verify documents?",
    answer:
      "Yes. Authorized staff can review, verify, approve, or request corrections for submitted documents.",
  },
  {
    question: "Does Unifyi send admission notifications?",
    answer:
      "Yes. Automated notifications can be sent via email, SMS, or other supported communication channels.",
  },
  {
    question: "Can students receive application reminders?",
    answer:
      "Yes. Automated reminders help students complete pending applications or upload missing documents before deadlines.",
  },
  {
    question: "Does Unifyi support application fee payments?",
    answer:
      "Yes. The platform integrates with secure payment gateways for online application fee collection.",
  },
  {
    question: "Can universities customize admission forms?",
    answer:
      "Yes. Institutions can create custom admission forms based on programs, departments, or eligibility requirements.",
  },
  {
    question: "Does Unifyi support scholarship applications?",
    answer:
      "Yes. Scholarship application workflows can be integrated into the admission process.",
  },
  {
    question: "Can admission staff communicate with applicants?",
    answer:
      "Yes. Staff can send updates, announcements, reminders, and personalized messages directly through the platform.",
  },
  {
    question: "Does Unifyi include a student CRM?",
    answer:
      "Yes. The platform includes CRM features to manage student inquiries, follow-ups, counseling, and admissions.",
  },
  {
    question: "Can education consultants use Unifyi?",
    answer:
      "Yes. Consultants can manage multiple students, universities, applications, and admission progress from a centralized dashboard.",
  },
  {
    question: "Does Unifyi support lead management?",
    answer:
      "Yes. Institutions can capture, organize, and nurture prospective student inquiries efficiently.",
  },
  {
    question: "Can admission teams collaborate?",
    answer:
      "Yes. Multiple team members can work together using role-based permissions and workflow management.",
  },
  {
    question: "Does Unifyi provide role-based access control?",
    answer:
      "Yes. Different user roles can be assigned to administrators, counselors, admission officers, and faculty members.",
  },
  {
    question: "Can institutions generate admission reports?",
    answer:
      "Yes. The platform provides detailed reports on applications, enrollments, conversion rates, and admission performance.",
  },
  {
    question: "Does Unifyi offer analytics dashboards?",
    answer:
      "Yes. Interactive dashboards provide insights into application trends, student demographics, and admission performance.",
  },
  {
    question: "Can institutions export reports?",
    answer:
      "Yes. Reports can be exported for management reviews, audits, and strategic planning.",
  },
  {
    question:
      "Does Unifyi integrate with existing student information systems?",
    answer:
      "Yes. The platform supports integration with various SIS, ERP, CRM, and third-party educational systems.",
  },
  {
    question: "Can Unifyi integrate with payment gateways?",
    answer:
      "Yes. Secure payment gateway integrations allow institutions to collect admission and application fees online.",
  },
  {
    question: "Does Unifyi support email and SMS integration?",
    answer:
      "Yes. Automated communication can be sent through integrated email and SMS services.",
  },
  {
    question: "Can students schedule counseling sessions?",
    answer:
      "Yes. Institutions can enable appointment scheduling for counseling, interviews, or admission guidance.",
  },
  {
    question: "Does Unifyi support interview scheduling?",
    answer:
      "Yes. Admission teams can schedule interviews and notify applicants through the platform.",
  },
  {
    question: "Can institutions manage admission deadlines?",
    answer:
      "Yes. Important dates, deadlines, and application windows can be configured and managed easily.",
  },
  {
    question: "Does Unifyi support multiple academic sessions?",
    answer:
      "Yes. Institutions can manage admissions across multiple academic years and intake periods.",
  },
  {
    question: "Can universities create custom workflows?",
    answer:
      "Yes. Admission workflows can be configured to match each institution's approval and verification process.",
  },
  {
    question: "Is student data secure?",
    answer:
      "Yes. Unifyi follows industry-standard security practices including encryption, secure authentication, and role-based access controls.",
  },
  {
    question: "Can administrators manage multiple users?",
    answer:
      "Yes. Administrators can create user accounts, assign permissions, and monitor platform activity.",
  },
  {
    question: "Does Unifyi support cloud deployment?",
    answer:
      "Yes. Unifyi is cloud-based, allowing secure access from anywhere with an internet connection.",
  },
  {
    question: "Can students access the platform on mobile devices?",
    answer:
      "Yes. The platform is fully responsive and works across desktops, tablets, and smartphones.",
  },
  {
    question: "Does Unifyi provide technical support?",
    answer:
      "Yes. Our support team assists with onboarding, technical issues, training, and ongoing platform usage.",
  },
  {
    question: "Is training available for university staff?",
    answer:
      "Yes. We provide onboarding sessions, documentation, and training to help staff use the platform effectively.",
  },
  {
    question: "Can I request a demo?",
    answer:
      "Absolutely. You can schedule a personalized demo to explore Unifyi's features and see how it fits your institution's admission process.",
  },
  {
    question: "How much does Unifyi cost?",
    answer:
      "Pricing depends on the number of users, campuses, required modules, and customizations. Contact our team for a personalized quote.",
  },
  {
    question: "Why should institutions choose Unifyi?",
    answer:
      "Unifyi streamlines the entire admission lifecycle with automation, secure document management, student CRM, analytics, communication tools, and seamless collaboration, helping institutions improve efficiency and deliver a better admission experience.",
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
