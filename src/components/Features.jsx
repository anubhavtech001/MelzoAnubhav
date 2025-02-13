import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    // ✅ Create ScrollTrigger instance
    const videoTrigger = gsap.to("#exploreVideo", {
      scrollTrigger: {
        pinType: "transform",
        invalidateOnRefresh: true,

        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
        onEnter: () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        },
        onLeaveBack: () => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        },
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 0.8, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 2,
    });

    // ✅ Cleanup with null check
    return () => {
      if (videoTrigger && videoTrigger.scrollTrigger) {
        videoTrigger.scrollTrigger.kill(); // ✅ Kill only if it exists
      }
    };
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden light-section">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          {/* <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Anubhav 5D Lab.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div> */}

          <div className="flex-center flex-col sm:px-10">
            {/* <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div> */}

            <div className="flex flex-col  w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1  ">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow w-full h-full object-cover object-center"
                  />
                </div>
                <div className="overflow-hidden flex-1 ">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Experiential learning is impossible without{" "}
                    <span className="text-white">5D technology</span>. Melzo
                    Anubhav is{" "}
                    <span className="text-white">
                      1<sup>st</sup>{" "}
                    </span>
                    of its kind to bring this technology into classroom that
                    allows student to perform experiments in a{" "}
                    <span className="text-white">new and safe</span> way.{" "}
                    {/* , using the same alloy that spacecrafts use for missions to */}
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Make learning come alive with{" "}
                    <span className="text-white">sensory simulations</span>.
                    Imagine experiencing underwater scuba diving or embarking on
                    a mission to the moon.{" "}
                    <span className="text-white">
                      {/* lightest Pro models ever. */}
                    </span>
                    {/* You'll notice the difference the moment you pick one up. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
