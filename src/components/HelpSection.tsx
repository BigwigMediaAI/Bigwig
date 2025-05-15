import Navbar from "./nav";
import digital from "../assets/digital-partner.gif";
import campaign from "../assets/4_digital-campaign.gif";
import creativeCampaign from "../assets/creative-campaign.gif";
import app from "../assets/app.gif";
import newWeb from "../assets/new-website.gif";
import bird from "../assets/digital-instalation.gif";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "HELP! I NEED A DIGITAL PARTNER",
    description:
      "Starting a business can be tedious. Promoting it is a necessity. If you think generating leads, lead management, generating sales etc can be done by a Specialist so you can spare time for your other important work, then consider us your Partners, as making lives easy is our full time job.",
    img: digital,
    bg: "bg-[#25258E] text-white",
    helpColor: "text-red-500",
    restColor: "text-white",
  },
  {
    title: "HELP! I NEED TO EXECUTE A DIGITAL CAMPAIGN",
    description:
      "Dealing with so many abilities, we pride ourselves on having the capacity to handle anything a customer tosses at us. We trust in being the unparalleled accomplice our customers could ever need; that is the reason notwithstanding our center services we likewise have secondary divisions like SEO, SMO, PPC, SEM, CPL, CPM and loads of other critical sounding 3 letter acronyms.",
    img: campaign,
    bg: "bg-[#EE3D49] text-white",
    helpColor: "text-blue-900",
    restColor: "text-white",
  },
  {
    title: "HELP! I NEED CREATIVE CAMPAIGN",
    description:
      "Hey, not so stranger. So, at this time you might have some knowledge of the work we provide. And if you thought that is enough of what we do, sorry but we have more in store for you. Creative campaign land to a destination fulfilling creative criteria such as banners: both online and offline, flyers, video editing, website layout, anything you can think of that will be needed in campaigning, we’ve got you covered.",
    img: creativeCampaign,
    bg: "bg-white text-black",
    helpColor: "text-blue-900",
    restColor: "text-red-500",
  },
  {
    title: "HELP! I NEED AN APP",
    description:
      "We have created everything from corporate apps to multiplayer games to virtual pets. We have found that the real challenge isn’t designing or building the functionalities but knowing which ones give actual value - and how to distribute the man hours. We have been through the process countless times and we will get you through too.",
    img: app,
    bg: "bg-[#25258E] text-white",
    helpColor: "text-red-500",
    restColor: "text-white",
  },
  {
    title: "HELP! I NEED E-COMMERCE WEB APPLICATION WEBSITE",
    description:
      "A well built DIGITAL PLATFROM should generate revenue, strengthen your brand and relieve pressure from your customer support. But the demands and complexity of modern web technology has risen enormously in the past few years, leaving many outdated and broken. Let’s try to fix that. Therefore we focus on creating your base glitch free and convenient so that it can 'rise above all'.",
    img: newWeb,
    bg: "bg-[#EE3D49] text-white",
    helpColor: "text-blue-900",
    restColor: "text-white",
  },
  {
    title: "HELP! I NEED TO ORGANIZE AN EVENT",
    description:
      "Eventful are the days when you have an event to run. Well, don't get me started, BigWig Events can help you with this too.BigWig is a one stop destination as we cover variety of portions, from corporate events, MICE, desitination weddings, catering to security, every detail is seen through magnifying glass.",
    img: bird,
    bg: "bg-[#25258E] text-white",
    helpColor: "text-red-500",
    restColor: "text-white",
  },
];

const formatTitle = (title: string, helpColor: string, restColor: string) => {
  if (title.startsWith("HELP!")) {
    const parts = title.split("HELP!");
    return (
      <h3 className="text-3xl text-center md:text-left font-bold">
        <span className={`${helpColor} font-black`}>HELP!</span>
        <span className={`ml-2 ${restColor}`}>{parts[1]}</span>
      </h3>
    );
  }
  return <h3 className="text-3xl font-bold">{title}</h3>;
};

const HelpSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      {/* Title Section */}
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl font-semibold">
          <span className="text-rose-500">WE </span>
          <span className="text-blue-500">PLAN </span>
          <span className="text-pink-500">DESIGN </span>
          <span className="text-yellow-500">BUILD </span>
          <span className="text-green-500">EXECUTE </span>
          <span className="text-sky-500">DELIVER </span>
          <span className="text-purple-500">RETAIN</span>
        </h2>
        <p className="mt-2 text-xl text-gray-700">HOW CAN WE HELP YOU?</p>
      </div>

      {/* Services Section */}
      {services.map((service, index) => (
        <div key={index} className={`w-full ${service.bg}`}>
          <div
            className={`w-full md:w-5/6 mx-auto flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center justify-between py-20 min-h-[600px]`}
          >
            {/* Text Section */}
            <div
              className="md:w-1/2 space-y-6 px-6 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {formatTitle(service.title, service.helpColor, service.restColor)}

              <p className="text-lg text-justify md:text-left leading-relaxed">
                {service.description}
              </p>

              <a
                href="/contact"
                className={`text-xl mt-6 inline-block border-2 p-2 rounded border-${service.helpColor.replace(
                  "text-",
                  ""
                )}`}
              >
                CONTACT US
              </a>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <img
                src={service.img}
                alt={service.title}
                className="max-w-[250px] md:max-w-xs lg:max-w-md"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      ))}

      <section
        className="w-full md:w-5/6 mx-auto p-6 font-sans"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        {/* Header */}
        <div className=" inline-block px-4 py-2 mb-8">
          <div className="relative w-fit group">
            <h2 className="text-3xl md:text-4xl text-[#F22E37] font-bold border-4 border-[#F22E37] px-4 py-2 bg-white relative z-10">
              <span className="text-blue-700 font-bold text-2xl">HELP!</span>{" "}
              <span className="text-red-600 text-2xl font-semibold">
                MY THING IS NONE OF THE ABOVE
              </span>
            </h2>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#F22E37] z-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0"></div>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col sm:flex-row md:gap-6 mb-8">
          <ul className="list-disc ml-6 space-y-2">
            <li>CMS, LMS & CRM Development</li>
            <li>Landing Page & Banner Ad's</li>
            <li>Marketing Automation</li>
            <li>Logo Designing</li>
            <li>2D & 3D Animation & Motion Graphics</li>
            <li>Email Marketing</li>
            <li>Offline Creatives</li>
          </ul>
          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li>Content Writing</li>
            <li>Blogs, Articles & Press Release</li>
            <li>Video Shoot</li>
            <li>Drone Shoot</li>
            <li>Web & Marketing Analysis</li>
            <li>Brand Doc & Brochures</li>
            <li>ATL, BTL, TTL Services</li>
          </ul>
        </div>

        {/* Call to action */}
        <p className="mb-2">
          Just{" "}
          <span className="border-4 border-red-500 px-3 py-1 font-semibold inline-block">
            Poke Us
          </span>{" "}
          for anything, even for watering your office plants, we probably
        </p>
        <p className="mb-4">
          will do even that awkward task with the utmost genius.
        </p>

        {/* Contact Us */}
        <p className="text-blue-900 font-bold tracking-wider border-2 p-2 border-blue-900 w-fit rounded">
          <a href="/contact">CONTACT US</a>
        </p>
      </section>

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
    </div>
  );
};

export default HelpSection;
