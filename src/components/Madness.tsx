import Navbar from "./nav";
import headphone from "../assets/headphone.jpg";
import weprobe from "../assets/10350183.png";
import webreakthourhg from "../assets/cloud-svgrepo-com.svg";
import wepresent from "../assets/we-present.png";
import choose from "../assets/10350183.png";
import execute from "../assets/we-execute.png";
import analyze from "../assets/we-analyze.webp";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "We Attend",
    content:
      "In order to have a deal, both parties have their own concerns. We on the other have concerns with techniques to kick-start your business, if not done already, or to find ways to have party on occasions of success.",
    image: headphone,
    bg: "bg-white",
    text: "text-red-600",
  },
  {
    title: "We Probe",
    content:
      "Our work begins and ends on your Ideology. If well suited with your plan, we further bling it up according to our capacity.",
    image: weprobe,
    bg: "bg-blue-900",
    text: "text-white",
  },
  {
    title: "We Breakthrough",
    content:
      "We believe in setting an example. That example could be dealing with and for your business, we’re up for it. BigWig has its own team of diverse and equally talented professionals who inhales your motive behind the business and exhales success.",
    image: webreakthourhg,
    bg: "bg-[#EE3D49]",
    text: "text-white",
  },
  {
    title: "We Present Our Solutions",
    content:
      "Do you know that one idea leads to another? We like to prepare you with the best.\nWe conquer. Rest is history.",
    image: wepresent,
    bg: "bg-white",
    text: "text-red-600",
  },
  {
    title: "You choose the solution that enthuses you",
    content:
      "Let's talk about how it all works. The Ideas are generated, of course from your side, and we work upon giving wings to that ideas. Cheesy enough?! But for real, the starter pack involves your basic knowledge/thoughts towards your business to which we further incorporate our ideas, fulfilling prophecies that never were written.",
    image: choose,
    bg: "bg-blue-900",
    text: "text-white",
  },
  {
    title: "We Execute",
    content:
      "Once you have selected the best solution that inspires you, our team of specialists goes into execution mode. Whether it's a digital advertising campaign, web-design project, mobile application, web application, creative campaign, media and events - your project will be accomplished in a swift way and with our team's complete devotion.",
    image: execute,
    bg: "bg-[#EE3D49]",
    text: "text-white",
  },
  {
    title: "We Analyze and Optimize",
    content:
      "Things are done. Not locked yet. If it works according to the plan, it is a success. If not, a king takes time to build his territory. Don’t Worry, backup plan A-Z are already in store",
    image: analyze,
    bg: "bg-white",
    text: "text-red-600",
  },
];

const Method = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative">
      <Navbar />
      <div className=" mx-auto text-center py-10 bg-[#EE3D49] md:hidden block">
        <h1
          className="text-5xl text-white font-thin"
          style={{ fontFamily: "inherit" }}
        >
          Our Method To Madness
        </h1>
      </div>
      {steps.map((step, idx) => {
        const isImageRight = idx % 2 === 0;

        return (
          <div key={idx} className={`${step.bg} py-16 px-6`}>
            <div
              className={`w-5/6 mx-auto grid md:grid-cols-2 gap-12 items-center ${
                isImageRight ? "" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`space-y-4 ${step.text} ${
                  isImageRight ? "order-1" : "order-2"
                }`}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h3 className="text-3xl md:text-4xl font-bold ">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {step.content}
                </p>
              </div>
              <div
                className={`flex justify-center items-center ${
                  isImageRight ? "order-2" : "order-1"
                }`}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-64 h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
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
    </section>
  );
};

export default Method;
