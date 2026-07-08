"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const rippleRef = useRef<HTMLDivElement>(null);
  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let jquery: typeof import("jquery").default | null = null;
    const rippleElement = rippleRef.current;

    async function initRipples() {
      if (!rippleElement) return;

      try {
        const jqueryModule = await import("jquery");
        await import("jquery.ripples");

        if (!isMounted) return;

        const $ = jqueryModule.default;
        jquery = $;

        $(rippleElement).ripples({
          resolution: 256,
          perturbance: 0.01,
        });
      } catch (e) {
        console.error("Ripple effect failed to initialize:", e);
      }
    }

    initRipples();

    return () => {
      isMounted = false;
      try {
        if (rippleElement && jquery) {
          jquery(rippleElement).ripples("destroy");
        }
      } catch {
        // The plugin may not have finished loading before unmount.
      }
    };
  }, []);

  return (
    <>
      <div
        ref={rippleRef}
        className="hidden lg:flex w-full h-screen bg-cover bg-center full-landing-image"
        style={{
          backgroundImage: "url('/homepage.gif')",
        }}
      >
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[17px] font-thin tracking-widest z-10 text-center flex flex-wrap justify-center items-center gap-3">
          <div className="flex items-center">
            <span>INDIA |</span>
          </div>
          <div className="flex items-center ">
            <span>UAE |</span>
          </div>
          <div className="flex items-center ">
            <span>NEW ZEALAND |</span>
          </div>
          <div className="flex items-center ">
            <span>AUSTRALIA</span>
          </div>
        </div>

        {/* Left 5/6 Content */}
        <div className="relative w-5/6 h-full">
          {/* Hamburger and dropdown container */}
          <div className="absolute top-8 left-16 z-20">
            <Image
              src="/nav.png"
              alt="hamburger"
              width={48}
              height={48}
              className="w-12 h-12 bg-white rounded-full border cursor-pointer"
              onClick={() => setShowContent(!showContent)}
            />

            {/* Animated Toggleable Content */}
            <div
              className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${showContent ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"}
            `}
              style={{
                fontFamily: "inherit",
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              <div className="mt-4 space-y-3 font-thin cursor-pointer text-white z-50">
                <Link href="/agency" className="block">
                  Agency
                </Link>

                <div>
                  <div
                    onClick={() => setShowServices(!showServices)}
                    className="flex items-center cursor-pointer hover:text-gray-300 transition space-x-2"
                  >
                    <span className="font-thin text-white">Services</span>

                    <ChevronDown className="w-4 h-4 text-white transition-transform duration-200" />
                  </div>

                  {showServices && (
                    <div className="ml-4 mt-2 space-y-2 text-[16px]">
                      <a
                        href="https://www.bigwigdigital.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        Digital Marketing
                      </a>
                      <a
                        href="https://bigwig-events-planning.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        Events
                      </a>
                    </div>
                  )}
                </div>
                <div>
                  <div
                    onClick={() => setShowProducts(!showProducts)}
                    className="flex items-center cursor-pointer hover:text-gray-300 transition space-x-2"
                  >
                    <span className="font-thin text-white">AI Products</span>

                    <ChevronDown className="w-4 h-4 text-white transition-transform duration-200" />
                  </div>

                  {showProducts && (
                    <div className="ml-4 mt-2 space-y-2 text-[16px]">
                      <a
                        href="https://bigwigmedia.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        Free AI Tools
                      </a>
                      <a
                        href="https://bigwig-smm-mu.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        Social Media Management
                      </a>
                      <a
                        href="https://bigwig-orm-ten.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        Review Mangement
                      </a>
                      <a
                        href="https://unify-orpin.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        LMS For Education
                      </a>
                      <a
                        href="https://bigwig-lms.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        LMS For Real Estate
                      </a>
                    </div>
                  )}
                </div>

                <Link href="/clients" className="block">
                  Clients
                </Link>
                <Link href="/strategy" className="block">
                  Strategy
                </Link>
                <Link href="/Y-Bigwig" className="block">
                  Y Bigwig
                </Link>
                <Link href="/things-we-do" className="block">
                  Things We Do
                </Link>
                <Link href="/method" className="block">
                  Method to Madness
                </Link>
              </div>
            </div>
          </div>

          {/* Bulb GIF - top right */}
          <Image
            src="/home-icon-1.gif"
            alt="bulb"
            width={400}
            height={200}
            loading="eager"
            className="absolute top-0 right-0 w-1/3 h-48 z-0 -mt-6"
          />

          {/* Cube GIF - bottom left - fixed in place */}
          <Image
            src="/home_icon-2.gif"
            alt="bulb"
            width={400}
            height={200}
            className="absolute bottom-0 left-0 w-1/4 z-0 -ml-16"
          />
        </div>

        {/* Right 1/6 Hover Text Area */}
        <div className="w-1/6 flex flex-col justify-start mt-10 items-end space-y-4 text-white font-light text-3xl">
          <Link href="/agency">
            <HoverText
              defaultText="LET'S"
              hoverText="Let's Talk About Us"
              boldText="Talk About Us"
            />
          </Link>

          <Link href="/contact">
            <HoverText
              defaultText="MAKE"
              hoverText="Make a Project"
              boldText=" a Project"
            />
          </Link>

          <Link href="/things-we-do">
            <HoverText
              defaultText="THINGS"
              hoverText="Things We Do"
              boldText="We Do"
            />
          </Link>

          <Link href="/contact">
            <HoverText
              defaultText="INTERESTING"
              hoverText="Interested?"
              boldText="Interested?"
            />
          </Link>
        </div>
      </div>

      <div className="flex lg:hidden flex-col justify-between w-full h-screen bg-[#FF3D48] relative text-white overflow-hidden">
        {/* Top Bar */}
        <div className="flex justify-between w-full px-4 pt-6 absolute top-0 z-10">
          <Image
            src="/nav.png"
            alt="hamburger"
            width={48}
            height={48}
            className="w-10 h-10 cursor-pointer bg-white rounded-full"
            onClick={() => setShowContent(!showContent)}
          />
          <Image
            src="/home_icon-2.gif"
            alt="Bulb"
            width={200}
            height={100}
            className="w-1/2 -mt-4 -mr-10"
          />
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex items-center justify-center px-6 pt-16">
          <Image
            src="/homepage-mobile.gif"
            alt="Logo"
            width={200}
            height={100}
            className="w-full max-h-full object-contain"
          />
          {/* Centered Office Names */}
          <div className="w-full absolute bottom-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-thin text-white text-sm tracking-widest z-10 text-center flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center space-x-2">
              <span>INDIA |</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>DUBAI |</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>NEW ZEALAND |</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>AUSTRALIA</span>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        {showContent && (
          <div className="absolute top-20 left-4 right-4 text-white rounded p-4 z-20 bg-[#FF3D48]">
            <ul className="space-y-2 text-lg">
              <li>
                <Link href="/agency">Agency</Link>
              </li>
              <div>
                <div
                  onClick={() => setShowServices(!showServices)}
                  className="flex items-center cursor-pointer hover:text-gray-300 transition space-x-2"
                >
                  <span className="font-thin text-white">Services</span>

                  <ChevronDown className="w-4 h-4 text-white transition-transform duration-200" />
                </div>

                {showServices && (
                  <div className="ml-4 mt-2 space-y-2 text-[16px]">
                    <a
                      href="https://www.bigwigdigital.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      Digital Marketing
                    </a>
                    <a
                      href="https://bigwig-events-planning.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      Events
                    </a>
                  </div>
                )}
              </div>
              <div>
                <div
                  onClick={() => setShowProducts(!showProducts)}
                  className="flex items-center cursor-pointer hover:text-gray-300 transition space-x-2"
                >
                  <span className="font-thin text-white">AI Products</span>

                  <ChevronDown className="w-4 h-4 text-white transition-transform duration-200" />
                </div>

                {showProducts && (
                  <div className="ml-4 mt-2 space-y-2 text-[16px]">
                    <a
                      href="https://bigwigmedia.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      Free AI Tools
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      Social Media Management
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      Review Mangement
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      LMS For Education
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      LMS For Real Estate
                    </a>
                  </div>
                )}
              </div>
              <li>
                <Link href="/clients">Clients</Link>
              </li>
              <li>
                <Link href="/strategy">Strategy</Link>
              </li>
              <li>
                <Link href="/Y-Bigwig">Y Bigwig</Link>
              </li>
              <li>
                <Link href="/things-we-do">Things We Do</Link>
              </li>
              <li>
                <Link href="/method-to-madness">Method to Madness</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Bottom Buttons */}
        <div className="w-full absolute bottom-0 left-0 flex">
          <a
            href="tel:+918368573451"
            className="w-1/2 py-3 bg-black text-white text-center border-r"
          >
            Call Me
          </a>
          <Link
            href="/contact"
            className="w-1/2 py-3 bg-black text-white text-center"
          >
            I&apos;m Interested
          </Link>
        </div>
      </div>
    </>
  );
}

type HoverTextProps = {
  defaultText: string;
  hoverText: string;
  boldText: string; // Added boldText prop
};

function HoverText({ defaultText, hoverText, boldText }: HoverTextProps) {
  const highlightBold = (text: string) => {
    return text.split(boldText).map((part, index) => {
      if (index === 0) return <span key={index}>{part}</span>;
      return (
        <span key={index}>
          <span style={{ fontWeight: 400 }}>{boldText}</span>
          <span>{part}</span>
        </span>
      );
    });
  };

  if (defaultText === "INTERESTING") {
    return (
      <div className="relative h-10 w-full flex justify-end items-center group cursor-pointer overflow-hidden pr-2">
        {/* Base word: INTEREST */}
        <span className="text-white text-right">INTEREST</span>

        {/* Animate "ING" fade out and "ED?" fade in upward */}
        <div className="relative ml-1 w-[3.5rem] h-full flex items-center justify-start">
          {/* ING fades out on hover */}
          <span className="absolute transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2 text-white">
            ING
          </span>

          {/* ED? fades in and rises on hover */}
          <span className="absolute transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 text-white font-bold">
            ED?
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden h-10 w-full group cursor-pointer">
      <div className="flex transition-transform duration-700 group-hover:-translate-x-1/2 w-[200%]">
        <div className="w-1/2 text-right pr-2">{defaultText}</div>
        <div className="w-1/2 text-right pr-2">{highlightBold(hoverText)}</div>
      </div>
    </div>
  );
}
