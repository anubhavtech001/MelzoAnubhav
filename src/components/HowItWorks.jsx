import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll({
  allowNestedScroll: true,
  lockAxis: false,
  momentum: (self) => Math.min(2, self.velocityY / 1000),
  type: "touch,wheel,pointer",
});

window.addEventListener("orientationchange", () => {
  ScrollTrigger.refresh();
});

// return () => {
//   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// };

import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // gsap.from("#chip", {
    //   scrollTrigger: {
    //     pinType: "transform",
    //     invalidateOnRefresh: true,

    //     trigger: "#chip",
    //     start: "20% bottom",
    //   },
    //   opacity: 0,
    //   scale: 2,
    //   duration: 2,
    //   ease: "power2.inOut",
    // });

    // animateWithGsap(".g_fadeIn", {
    //   opacity: 1,
    //   y: 0,
    //   duration: 2,
    //   ease: "power2.inOut",
    // });

    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
        // end: "top top",
        scrub: true,
        pinType: "transform",  // ✅ Fixes sticky issues on iOS
        invalidateOnRefresh: true,  // ✅ Handles screen resize/orientation changes
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Anubhav Lab chip.
            <br /> A unique way to Learn.
          </h2>

          <p className="hiw-subtitle">
            The Anubhav Lab chip integrates embedded Bluetooth technology,
            ensuring seamless connectivity with Meta Quest device for an
            enhanced 5D experience.
            {/* It's here. The biggest redesign in the history of Anubhav Lab chip. */}
          </p>
        </div>

        <div className="mt-5 md:mt-10 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video" id="chip">
              <video
              id="chip"
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                loop
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            VR Tours of Anubhav
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              Anubhav Lab is a breakthrough in 5D technology, setting a{" "}
              <span className="text-white">
                new benchmark for performance and future digital innovation
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              Anubhav{" "}
              <span className="text-white">
                tours will look and feel so immersive
              </span>
              , with incredibly detailed environments and effects.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">5D Lab</p>
            <p className="hiw-text">with safety</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
