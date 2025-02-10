import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    // window.innerWidth < 760 ? smallHeroVideo : heroVideo
    window.innerWidth < 760 ? heroVideo : heroVideo
    
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      // setVideoSrc(smallHeroVideo);
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
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
    <section className="w-full nav-height bg-black relative ">
      <div className="h-5/6 w-full flex-center flex-col "> 
        {/* <p id="hero" className="hero-title">
        Anubhav 5D Lab
        </p> */}
        <div className="sm:w-full sm:h-full md:w-full w-9/12 xl:h-[75vh]  ">
          <video
            className="pointer-events-none "
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="https://forms.gle/m4hkPxqiBUnDwk5cA" className="btn">
          Book a Demo
        </a>
        {/* <p className="font-normal text-xl">From $199/month or $999</p> */}
      </div>
    </section>
  );
};

export default Hero;
