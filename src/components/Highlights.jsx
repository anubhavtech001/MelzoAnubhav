import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll({
  allowNestedScroll: true,
  lockAxis: false,
  momentum: (self) => Math.min(1.5, self.velocityY / 800),
  type: "touch,wheel,pointer",
});

window.addEventListener("orientationchange", () => {
  ScrollTrigger.refresh();
});

// return () => {
//   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// };

import { rightImg, watchImg } from "../utils";

import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between xl:mt-56 ">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <a href="https://www.youtube.com/watch?v=uUts3cRhrg0">
              <p className="link">
                Watch the Interview
                <img src={watchImg} alt="watch" className="ml-2" />
              </p>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1ay6AHuu7fCQVGlIlZGPdkRPHj64A-NZj"
              download
            >
              <p className="link">
                Download the Brochure
                <img src={rightImg} alt="right" className="ml-2" />
              </p>
            </a>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
