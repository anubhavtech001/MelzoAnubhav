import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

// Normalize scrolling across devices
ScrollTrigger.normalizeScroll({
  allowNestedScroll: true,
  lockAxis: false,
  momentum: (self) => Math.min(1.5, self.velocityY / 800),
  type: "touch,wheel,pointer",
});

window.addEventListener("orientationchange", () => {
  ScrollTrigger.refresh();
});

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (typeof window !== "undefined") {
      setVideoSrc(window.innerWidth < 1024 ? smallHeroVideo : heroVideo);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      handleVideoSrcSet();
      setTimeout(() => {
        ScrollTrigger.refresh(); // ✅ Ensures video updates on rotation
      }, 300);
    };
  
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);
  

  useGSAP(() => {
    gsap.set("#hero", { opacity: 1 });
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-black relative flex flex-col justify-center items-center"
    >
      {/* Hero Container */}
      <div className="w-full flex justify-center items-center min-h-[70vh] lg:min-h-[85vh]">
      <div className="w-full max-w-screen-xl flex justify-center items-center">
          <video
            className="pointer-events-none w-full object-cover rounded-xl"
            autoPlay
            muted
            playsInline
            key={videoSrc}
            style={{
              width: "100%", // ✅ Ensures full width on rotation
              height: "auto", // ✅ Auto height to prevent cutting on `lg`
              maxHeight: "100vh", // ✅ Allows full height without being cut off
              minHeight: "70vh", // ✅ Increased min-height for better visibility
              aspectRatio: "16/9", // ✅ Maintains correct scaling
            }}
            
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Call to Action */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 mt-6"
      >
        <a
          href="https://forms.gle/m4hkPxqiBUnDwk5cA"
          className="btn px-6 py-3 bg-[#ed9254] text-white text-lg font-semibold rounded-lg hover:bg-[#c77430] transition duration-300"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
};

export default Hero;
