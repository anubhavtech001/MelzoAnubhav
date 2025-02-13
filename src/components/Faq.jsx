"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { faqData } from "../constants";
import { animateWithGsap } from "../utils/animations"; // ✅ Import GSAP Function

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    gsap.set("#features_title", { opacity: 1, y: 0 }); // ✅ Ensure H1 is Instantly Visible

    // ✅ Animate Title on Scroll
    animateWithGsap("#features_title", { y: -20, opacity: 1 }, { start: "top 85%" });
  }, []);

  const toggleFAQ = (index) => {
    const isOpen = openIndex === index ? null : index;
    setOpenIndex(isOpen);

    faqRefs.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          height: i === index && isOpen !== null ? "auto" : 0,
          opacity: i === index && isOpen !== null ? 1 : 0,
          padding: i === index && isOpen !== null ? "16px" : "0px",
          duration: 0.3, // ✅ Faster animation
          ease: "power2.out",
        });
      }
    });
  };

  return (
    <section className="w-full bg-zinc py-12 px-6 light-section" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* ✅ Fixed Title Visibility & Animation */}
        <div className="screen-max-width">
          <div className="mb-12 w-full">
            <h1 id="features_title" className="section-heading">
              Frequently Asked Questions.
            </h1>
          </div>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item border border-gray-700 rounded-lg overflow-hidden opacity-100">
              <button
                className="w-full text-left px-6 py-4 bg-gray-800 hover:bg-gray-700 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-white">{item.question}</span>
                <span className="text-white">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                ref={(el) => (faqRefs.current[index] = el)}
                className="faq-content px-6 bg-black text-white overflow-hidden"
                style={{ height: 0, opacity: 0, padding: "0px" }}
              >
                {item.answer.split("\n").map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
