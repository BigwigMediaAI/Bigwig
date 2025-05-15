import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "A team of young professionals who are committed to the success of their clients! I strongly recommend them!",
    author: "Arundhuti - Aarohmarketing",
  },
  {
    text: "The results surpass my expectations.",
    author: "Manish - Higher Study",
  },
  {
    text: "I’m impressed with the results. BigWigMedia not only helped me with my web strategy but also generated a lot of qualified prospects and I'm very grateful.",
    author: "Raghu - Ekidooz",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-20 px-6 sm:px-20 overflow-hidden">
      {/* Decorative quote icon */}
      <div className="hidden md:block absolute top-4 right-6 sm:right-16 text-red-500 text-[10rem] leading-none select-none pointer-events-none">
        &rdquo;
      </div>

      {/* Left-side indicator */}
      <div className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 flex-col gap-2">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-10 rounded-full transition-all duration-500 ${
              currentIndex === idx
                ? "bg-red-600 opacity-100"
                : "bg-red-300 opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Testimonial content */}
      <div className="max-w-4xl mx-auto text-center relative min-h-[150px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-xl sm:text-2xl text-red-500 font-semibold leading-relaxed mb-6">
              {testimonial.text}
            </p>
            <p className="text-red-500 text-sm sm:text-base font-medium">
              — {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
