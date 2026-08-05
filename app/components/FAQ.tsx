"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FaqItem[];
  heading?: string;
  subheading?: string;
  className?: string;
  initialDisplayCount?: number;
  displayStep?: number;
}

export default function FAQ({
  faqs,
  heading = "Frequently Asked Questions",
  subheading,
  className = "",
  initialDisplayCount = 10,
  displayStep = 10,
}: FAQProps) {
  const [visibleCount, setVisibleCount] = useState(initialDisplayCount);
  const [shouldScroll, setShouldScroll] = useState(false);
  const visibleFaqs = faqs.slice(0, visibleCount);
  const hasMore = visibleCount < faqs.length;
  const canCollapse = visibleCount > initialDisplayCount;
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleShowMore = () => {
    setVisibleCount((current) => Math.min(current + displayStep, faqs.length));
  };

  const handleShowLess = () => {
    setVisibleCount(initialDisplayCount);
    setShouldScroll(true);
  };

  useEffect(() => {
    if (!shouldScroll || visibleCount !== initialDisplayCount) return;

    const timeoutId = window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        setShouldScroll(false);
      });
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [shouldScroll, visibleCount, initialDisplayCount]);

  return (
    <section className={className}>
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#EE3D49]">
          FAQs
        </p>
        <h2 className="mt-3 text-3xl font-black text-[#25258E] md:text-4xl">
          {heading}
        </h2>
        {subheading ? (
          <p className="mt-4 leading-7 text-gray-600">{subheading}</p>
        ) : null}
      </div>

      <div className="space-y-4">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="animate-fade-in overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out"
          >
            <details className="group p-5 transition hover:border-[#EE3D49]">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-[#25258E] transition">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-[#EE3D49] transition-transform duration-200 group-open:-rotate-180" />
              </summary>
              <p className="mt-4 leading-7 text-gray-600">{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>

      {(hasMore || canCollapse) && (
        <div ref={buttonRef} className="mt-8 flex flex-wrap items-center gap-3">
          {hasMore ? (
            <button
              type="button"
              onClick={handleShowMore}
              className="inline-flex items-center justify-center rounded-md bg-[#EE3D49] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d53643]"
            >
              See more
            </button>
          ) : null}

          {canCollapse ? (
            <button
              type="button"
              onClick={handleShowLess}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-[#25258E] transition hover:bg-gray-50"
            >
              See less
            </button>
          ) : null}
        </div>
      )}
    </section>
  );
}
