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
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full min-h-screen bg-black relative flex flex-col justify-center items-center">
      {/* Hero Container */}
      <div className="w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] flex justify-center items-center">
        <div className="w-full max-w-screen-xl h-full flex justify-center items-center">
          <video
            className="pointer-events-none w-full h-auto max-h-[90vh] object-cover rounded-xl"
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Call to Action */}
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 mt-6">
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
