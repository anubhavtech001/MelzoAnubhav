import React, { useState, useRef, useEffect } from "react";
import { footerLinks } from "../constants";
import { FaXTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [showMap, setShowMap] = useState(true);
  const mapRef = useRef(null);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  useEffect(() => {
    if (showMap && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showMap]);

  return (
    <footer className="py-5 sm:px-10 px-5 bg-black text-white relative z-20 " id="footer">

      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-white text-xs">
            More ways to shop: {" "}
            <span
              className="underline text-[#ed9254] cursor-pointer"
              onClick={toggleMap}
            >
              Find an Anubhav Store
            </span>{" "}
            near you.
          </p>
          
          <a href="tel:+919687488818" className="font-semibold text-white text-xs cursor-pointer hover:text-[#ed9254] transition duration-300">
  Or call (+91) 9687488818.
</a>

        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-white text-xs">
            Copyright © 2025 ShilpMIS Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://x.com/Melzo_E_Learn" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-xl hover:text-[#ed9254] transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/melzo-e-learning-platform-in-gujarati/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-[#ed9254] transition duration-300" />
            </a>
            <a href="https://www.facebook.com/melzo.Elearn" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-[#ed9254] transition duration-300" />
            </a>
            <a href="https://www.instagram.com/melzo_e_learn/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-[#ed9254] transition duration-300" />
            </a>
          </div>
        </div>

        {showMap && (
          <div className="my-5" ref={mapRef}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6999113167167!2d72.8124433!3d21.164337500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbf33426463%3A0xf0df9597decb3b26!2sMelzo!5e0!3m2!1sen!2sin!4v1739341667629!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
