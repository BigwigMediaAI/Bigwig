import Navbar from "./nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import why from "../assets/why-us.png";
import value from "../assets/valueIcon.png";
import team from "../assets/team.png";
import TestimonialCarousel from "./Testimonial";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const YBigwigSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="w-full">
      <Navbar />

      {/* SECTION 1 */}
      <div className="w-full md:min-h-screen flex flex-col md:flex-row">
        {/* Image - hidden on mobile */}
        <div className="hidden md:flex w-full md:w-1/2 bg-[#25258E] justify-center items-center">
          <img
            src={why}
            alt="Why Bigwig Media?"
            className="w-full"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="w-full md:w-1/2 bg-[#25258E] md:bg-white flex flex-col justify-center p-10 text-white md:text-black"
        >
          <div className="relative w-fit group">
            <h2 className="text-3xl md:text-4xl text-[#F22E37] font-bold border-4 border-[#F22E37] px-4 py-2 bg-white relative z-10">
              Why Bigwig Media?
            </h2>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#F22E37] z-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0"></div>
          </div>
          <p className=" text-base leading-relaxed whitespace-pre-line mt-4">
            Good things take time to occur. We, on the other hand, make this
            procedure faster. Let us be your{" "}
            <strong className="text-[#F22E37]">3rd Eye & 6th Sense</strong> and
            wait for the end results to be nothing but spectacular.
          </p>
          <p className=" text-base leading-relaxed whitespace-pre-line mt-4">
            <strong>BigWig Media</strong> is equipped with latest technologies,
            creativity and experience that leads to higher success rate.
          </p>
          <p className=" text-base leading-relaxed whitespace-pre-line mt-4">
            {" "}
            Our team comprises of lunatics who love to utilize their skills,
            combine them with requirements and magically transforms it into
            <strong className="text-[#F22E37]">Narnia.</strong>
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="w-full md:min-h-screen flex flex-col md:flex-row">
        {/* Image - hidden on mobile */}
        <div className="hidden md:flex w-full md:w-1/2 bg-white justify-center items-center">
          <img
            src={value}
            alt="Our Values"
            className="w-2/3"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 bg-[#F22E37] text-white flex flex-col justify-center p-10"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="relative w-fit group">
            <h2 className="text-3xl md:text-4xl text-white font-bold border-4 border-white px-4 py-2 bg-[#F22E37] relative z-10">
              Our Values
            </h2>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-white z-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0"></div>
          </div>
          <p className="text-base leading-relaxed whitespace-pre-line mt-4">
            We believe that with a positive working environment, the results are
            excellent. Out of admiration for our customers, we invented a modern
            company that prioritizes self-realization, admiration and indulgence
            at work.
          </p>
          <p className="text-base leading-relaxed whitespace-pre-line mt-4">
            It's with a collective goal; surpassing objectives on each client
            mandate, that we combine our resources and skills to contribute in
            the growth of our{" "}
            <strong className="text-[#25258E]">Beloved Clienteles.</strong>
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="w-full md:min-h-screen flex flex-col md:flex-row">
        {/* Text Section */}
        <div
          className="w-full md:w-1/2 bg-[#25258E] text-white flex flex-col justify-center p-10"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="relative w-fit group">
            <h2 className="text-3xl md:text-4xl text-white font-bold border-4 border-white px-4 py-2 bg-[#25258E] relative z-10">
              Our Team
            </h2>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-white z-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0"></div>
          </div>
          <p className="text-base leading-relaxed whitespace-pre-line mt-4">
            Team is something that can make or break any foundation. Ours
            fortunately is the{" "}
            <strong className="text-[#F22E37]">BADASS</strong> one.
          </p>
          <p className="text-base leading-relaxed whitespace-pre-line mt-4">
            We find reasons to show our skills, hence are proudly known as
            <strong className="text-[#F22E37] text-2xl"> BigShowOffWig.</strong>
          </p>
        </div>

        {/* Image - hidden on mobile */}
        <div className="hidden md:flex w-full md:w-1/2 bg-white justify-center items-center">
          <img
            src={team}
            alt="Our Team"
            className="w-full"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
      </div>
      <div className="border-t-2 border-[#F22E37]">
        <TestimonialCarousel />
      </div>

      <Footer />

      {/* Bottom Mobile Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 w-full flex z-50">
        <a
          href="tel:+918368573451"
          className="w-1/2 py-3 bg-[#EE3D49] text-white text-center border-r border-white"
        >
          Call Me
        </a>
        <Link
          to="/contact"
          className="w-1/2 py-3 bg-[#25258E] text-white text-center"
        >
          I'm Interested
        </Link>
      </div>
    </section>
  );
};

export default YBigwigSection;
