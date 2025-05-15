import { Link } from "react-router-dom";

import CallToActionSection from "./Footer";
import Navbar from "./nav";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Strategy() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Section 1: Title on Left */}
      <section className="w-full" data-aos="fade-up" data-aos-duration="2000">
        <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="w-full flex flex-col justify-center md:py-32 px-4 py-10">
            <div className="relative w-fit group">
              <h2 className="text-3xl md:text-4xl text-[#F22E37] font-bold border-4 border-[#F22E37] px-4 py-2 bg-white relative z-10">
                Discovery Process
              </h2>
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#F22E37] z-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0"></div>
            </div>

            <p className="text-base leading-relaxed mt-8 text-justify md:text-left">
              Firstly, we enquire your mindset. It is important for us to know
              what you think so that we work our magic accordingly. Then comes a
              list of questions that are 'oh-so-important', which is as follows:
            </p>
            <p className="text-base leading-relaxed whitespace-pre-line mt-4 text-justify md:text-left">
              You have to meet us in order to know these questions (Got you)
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Title on Right */}
      <section
        className="w-full bg-[#EE3D49]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row-reverse">
          {/* Text Section */}
          <div className="w-full flex flex-col justify-center md:py-32 px-4 py-10">
            <h2 className="text-3xl md:text-4xl text-white font-bold pr-4 text-center md:text-right">
              Stakeholder Requirements
            </h2>
            <p className="text-base leading-relaxed mt-8 text-white text-justify md:text-left">
              The process of <strong>Business Development</strong>, in any form,
              works according to the criteria you have set for us. Believe it or
              not, your Ideas are base for the procedure to happen and you,
              yourself are numero uno for us. We will determine the decision
              making and escalation process required to keep the project plan
              on-course whilst ensuring that best practices are applied at each
              stage throughout its execution.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="w-full bg-[#25258E]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row-reverse">
          {/* Text Section */}
          <div className="w-full flex flex-col justify-center md:py-32 px-4 py-10">
            <h2 className="text-3xl md:text-4xl text-white font-bold  pr-4 text-center md:text-left">
              Audience & Business Objectives
            </h2>
            <p className="text-base leading-relaxed mt-8 text-white text-justify md:text-left">
              The plot of the story is that work will be conducted according to
              what you’ve planned. Now comes the twist, every action has some
              sort of consequences, and we as your would be external source, it
              is our duty to inform you about those consequences. During
              discovery we will partner with you to conduct top-level
              quantitative analyses of your business goals and audience
              requirements that will enable us to define solutions which will
              result in specific, relevant and measurable outcomes for your
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Title on Right */}
      <section
        className="w-full bg-[#EE3D49]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row-reverse">
          {/* Text Section */}
          <div className="w-full flex flex-col justify-center md:py-32 px-4 py-10">
            <h2 className="text-3xl md:text-4xl text-white font-bold pr-4 text-center md:text-right">
              Body of Work
            </h2>
            <p className="text-base leading-relaxed mt-8 text-white text-justify md:text-left">
              The parameters of the project will determine the outputs but
              generally at this stage we will be developing key elements such as
              low fidelity prototypes, design concepts and content hierarchy
              that will help to visualise frontend architecture through to
              listing out the core areas of the project that need to be defined
              in more detail.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full" data-aos="fade-up" data-aos-duration="2000">
        <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="w-full flex flex-col justify-center md:py-32 px-4 py-10">
            <div className="relative w-fit group">
              <h2 className="text-3xl md:text-4xl text-[#F22E37] font-bold border-4 border-[#F22E37] px-4 py-2 bg-white relative z-10">
                Discovery Presentation
              </h2>
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#F22E37] z-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0"></div>
            </div>
            <p className="text-base leading-relaxed mt-8 text-justify md:text-left">
              At the end of the discovery phase we will document all the
              findings, visuals, budgets and key recommendations for the
              implementation of the full end to end solution for you to review
              ahead of a presentation to your team.
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-[#25258E]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row-reverse">
          {/* Text Section */}
          <div className="w-full flex flex-col justify-center md:py-32 px-4 py-10">
            <h2 className="text-3xl md:text-4xl text-white font-bold  pr-4 text-center md:text-right">
              Other Discovery Sessions
            </h2>
            <p className="text-base leading-relaxed mt-8 text-white text-justify md:text-left">
              Other Discovery Sessions Our discovery sessions are not just
              limited to the start of the campaign. We keep helping you discover
              plan & implement anything we would feel which will add value to
              the success.
            </p>
          </div>
        </div>
      </section>
      <CallToActionSection />
      <div className=" md:hidden fixed bottom-0 left-0 w-full flex z-50">
        <a
          href="tel:+918368573451"
          className="w-1/2 py-3 bg-[#EE3D49] text-white text-center border-r border-white"
        >
          Call Me
        </a>
        <Link
          to="/contact"
          className="w-1/2 py-3 bg-blue-900 text-white text-center"
        >
          I'm Interested
        </Link>
      </div>
    </div>
  );
}

export default Strategy;
