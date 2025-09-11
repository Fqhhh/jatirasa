import React from "react";
import FooterBg from "../assets/bgfooter.jpg";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Testimonials",
    link: "/#testimonial",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Jati Rasa Gula Aren
            </a>
            <p className="pt-4">
              Savor the rich sweetness of our brews, infused with the natural
              essence of pure gula aren
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=-6.123637,106.1262548
"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full text-white hover:bg-[#2a1a11] transition-colors"
            >
              <FaMapMarkerAlt className="text-lg" />
              Visit Our Location
            </a>{" "}
          </div>
          {/* social media links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3 capitalize">
                our social media{" "}
              </h1>
              <div className="grid grid-cols-2 items-center ml-3 mb-2">
                <div className=" grid gap-4 ml-5">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-amber-900 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-amber-900 duration-300" />
                  </a>
                </div>
                <div className=" grid gap-4 -ml-5">
                  <a href="#">
                    <FaTiktok className="text-3xl hover:text-amber-900 duration-300" />
                  </a>
                  <a href="#">
                    <FaWhatsapp className="text-3xl hover:text-amber-900 duration-300" />
                  </a>
                </div>
              </div>
            </div>
            {/* second links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">
                  Jl. Panggungjati, Kec. Taktakan, Kota Serang, Banten 42162
                </p>
                <p>+62</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
