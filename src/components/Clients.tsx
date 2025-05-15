import { useEffect } from "react";
import "../Pages/Clients.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./nav";
import CallToActionSection from "./Footer";
import { Link } from "react-router-dom";

const images = [
  "https://cdn.freebiesupply.com/logos/large/2x/jw-marriott-hotel-resorts-logo-svg-vector.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Choice_Hotels_logo.svg/2560px-Choice_Hotels_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Park_Plaza_logo.svg/2420px-Park_Plaza_logo.svg.png",
  "https://www.shoutlo.com/assets/images/merchant_images/merchant-133212-5c65208474154.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Park_Inn_by_Radisson_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Radisson_Blu_logo.svg/1280px-Radisson_Blu_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8ZV5K7FxPkLchCy1bSLTfp6aqptcTl8vGg&s",
  "https://cdn.freebiesupply.com/logos/large/2x/peerless-logo-png-transparent.png",
  "https://searchlogovector.com/wp-content/uploads/2018/11/park-plaza-logo-vector.png",
  "https://companieslogo.com/img/orig/BIDU_BIG-fd4001c8.png?t=1720244491",
  "https://pngimg.com/d/skoda_PNG12322.png",
  "https://static.vecteezy.com/system/resources/previews/019/766/250/non_2x/bajaj-logo-bajaj-icon-transparent-free-png.png",
  "https://freelogopng.com/images/all_img/1680513237airtel-logo-png.png",
  "https://companieslogo.com/img/orig/DABUR.NS-f750fc64.png?t=1720244491",
  "https://cdn.freebiesupply.com/logos/thumbs/2x/cnn-international-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
  "https://brandlogos.net/wp-content/uploads/2014/11/barclays-logo_brandlogos.net_2xdee-512x512.png",
  "https://images.seeklogo.com/logo-png/30/1/itz-cash-logo-png_seeklogo-305185.png",
  "https://www.cablewirefair.com/wp-content/uploads/2024/08/99-electrical-world.png",
  "https://pngimg.com/d/bitcoin_PNG36.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/CARE_Logo_Orange.png/384px-CARE_Logo_Orange.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Castrol_logo_2023.svg/2560px-Castrol_logo_2023.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/CARTOON_NETWORK_logo.png",
  "https://static.cdnlogo.com/logos/d/22/dulux-paints.png",
  "https://companieslogo.com/img/orig/DLF.NS_BIG-9ecd4c66.png?t=1720244491",
  "https://upload.wikimedia.org/wikipedia/commons/9/97/Doordarshan_Logo_%281%29.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/ed/GMR_Group_%28logo%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/GAIL.svg/2560px-GAIL.svg.png",
  "https://i.pinimg.com/474x/28/95/2e/28952ecc561a5a5ccb26d3ce0b3d0201.jpg",
  "https://mahakumbhascent.com/wp-content/uploads/2024/12/goibibo-01.png.webp",
  "https://brandeps.com/logo-download/H/Hakuhodo-logo-01.png",
  "https://download.logo.wine/logo/Hero_MotoCorp/Hero_MotoCorp-Logo.wine.png",
  "https://www.pngplay.com/wp-content/uploads/9/HP-Logo-Background-PNG-Image.png",
  "https://www.pngplay.com/wp-content/uploads/13/Hyundai-Logo-Free-Picture-PNG.png",
  "https://images.seeklogo.com/logo-png/44/2/india-today-logo-png_seeklogo-440312.png",
  "https://s3-eu-west-1.amazonaws.com/tpd/logos/605b376b18c6cc0001b4241d/0x0.png",
  "https://play-lh.googleusercontent.com/tAs6vdG7EgeEULSWtwobrzLNPr4-bD7AAB8G4AwN6RFI7T_bSwxE0oxb4chgSEhz47U=w600-h300-pc0xffffff-pd",
  "https://static.vecteezy.com/system/resources/previews/019/909/488/non_2x/maruti-transparent-maruti-free-free-png.png",
  "https://images.seeklogo.com/logo-png/48/2/mcvities-logo-png_seeklogo-481057.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Ministry_of_Culture_India.svg",
  "https://static.vecteezy.com/system/resources/thumbnails/019/909/566/small/microsoft-transparent-microsoft-free-free-png.png",
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Ministry_of_Power_India.svg",
  "https://cdn.freebiesupply.com/logos/large/2x/national-geographic-logo-png-transparent.png",
  "https://mir-s3-cdn-cf.behance.net/projects/404/9e176d11607501.5556135512011.jpg",
  "https://cdn.freebiesupply.com/logos/large/2x/trade-new-zealand-logo-svg-vector.svg",
  "https://getvectorlogo.com/wp-content/uploads/2018/12/nexa-vector-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/NIIT_logo.svg/1200px-NIIT_logo.svg.png",
  "https://cdn.freebiesupply.com/logos/large/2x/nynas-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/oral-b-logo-png-transparent.png",
  "https://upload.wikimedia.org/wikipedia/commons/8/89/POGO-logo.png",
  "https://dmjj51nse7bpp.cloudfront.net/global/imagerTransforms/articlethumbnails/109332/New-Procam-Logo_60e269c7d766a67bf16f86f76f7f3c1e.jpg",
  "https://seeklogo.com/images/S/sahara-india-pariwar-logo-01669F184E-seeklogo.com.png",
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/Seagram_logo.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLqCWEJ-DcNM5z_iGBsvLHhHvTaCb2hoRxQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuTYjhxvWmi7uNMzcaQ22uZd52B8V5dmMGQ&s",
  "https://logowik.com/content/uploads/images/telstra7263.logowik.com.webp",
  "https://admin.indiantelevision.com/sites/default/files/styles/medium_3/public/images/internet-images/2014/11/21/iworld%20enews%20press%20release.jpg?itok=QC1QrFjh",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvEoYCPH2auahByJvwz13vyz6gAufIM093Rw&s",
  "https://www.unclechipps.com/wp-content/uploads/2020/08/cropped-uncle-chipps-logo-slogan-1.png",
  "https://1000logos.net/wp-content/uploads/2020/07/Western-Union-Logo.png",
  "https://sodel.jnujaipur.ac.in/img/jnu-logo-final.jpg",
  "https://images.seeklogo.com/logo-png/38/2/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.png",
  "https://www.vedicascholars.com/ywli/images/Logo.svg",
  "https://www.gisbindia.com/wp-content/uploads/2024/07/GISB-Logo-Horizontal-Black.png",
  "https://ciicpl.com/wp-content/uploads/2022/12/jklu-logo-2.png",
  "https://upload.wikimedia.org/wikipedia/en/3/39/International_Management_Institute_Kolkata_Logo.svg",
  "https://static.aurouniversity.edu.in/2022/10/cropped-Logo-Png.png",
  "https://www.reviewadda.com/assets/uploads/college/logo/CSMU_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/8/8f/Mgm-u-logo.png",
  "https://www.iipm.edu/public/iipm_logo.png",
  "https://innovation.opju.ac.in/opjulogo.png",
  "https://shooliniuniversity.com/apply/assets/img/logo.png",
  "https://images.seeklogo.com/logo-png/58/2/sarovar-hotels-and-resorts-logo-png_seeklogo-583448.png",
  "https://upload.wikimedia.org/wikipedia/en/c/c7/Anant_National_University_logo.png",
  "https://i.pinimg.com/736x/17/c5/8c/17c58c3199144e786931b81fd5ddfe1c.jpg",
];

const stylePairs = [
  { bg: "bg-red-100", border: "border-red-500" },
  { bg: "bg-green-100", border: "border-green-500" },
  { bg: "bg-blue-100", border: "border-blue-500" },
  { bg: "bg-yellow-100", border: "border-yellow-500" },
  { bg: "bg-purple-100", border: "border-purple-500" },
  { bg: "bg-pink-100", border: "border-pink-500" },
];

function Clients() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    AOS.refresh(); // Ensures animations re-initialize correctly
  }, []);

  return (
    <div>
      <div className="mb-10">
        <Navbar />
      </div>

      <div className="px-4 py-8 w-5/6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {images.map((img, index) => {
            const { bg, border } = stylePairs[index % stylePairs.length];
            return (
              <div
                key={index}
                className="flip-card aspect-square w-full"
                data-aos="zoom-in"
              >
                <div className="flip-inner w-full h-full">
                  <div
                    className={`flip-front ${bg} ${border} border-8 rounded-sm flex items-center justify-center w-full h-full`}
                  >
                    <img
                      src={img}
                      alt={`Client ${index + 1}`}
                      className="w-4/5 object-contain"
                    />
                  </div>
                  <div
                    className={`flip-back bg-white ${border} border-8 rounded-sm flex items-center justify-center w-full h-full`}
                  >
                    <img
                      src={img}
                      alt={`Client ${index + 1}`}
                      className="w-4/5 object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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

export default Clients;
