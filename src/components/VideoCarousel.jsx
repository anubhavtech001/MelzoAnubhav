import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const textListRef = useRef([]);
  const [video, setVideo] = useState({
    videoId: 0,
    isVideoVisible: false,
  });

  const { videoId, isVideoVisible } = video;

  useEffect(() => {
    hightlightsSlides.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: `#video-${index}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          handleVideoRestart(index);
          animateText(index);
          animateTextList(index);
          setVideo((prev) => ({ ...prev, videoId: index, isVideoVisible: true }));
        },
        onEnterBack: () => {
          handleVideoRestart(index);
          animateText(index);
          animateTextList(index);
          setVideo((prev) => ({ ...prev, videoId: index, isVideoVisible: true }));
        },
        onLeave: () => {
          setVideo((prev) => ({ ...prev, isVideoVisible: false }));
        },
        onLeaveBack: () => {
          setVideo((prev) => ({ ...prev, isVideoVisible: false }));
        },
      });
    });
  }, []);

  const handleVideoRestart = (index) => {
    const videoElement = videoRef.current[index];
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play();
    }
  };

  const animateText = (index) => {
    gsap.fromTo(
      `#text-${index}`,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  };

  const animateTextList = (index) => {
    gsap.fromTo(
      textListRef.current[index],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
  };

  return (
    <div className="relative min-h-screen text-white">
      <section className="hero-section relative w-full bg-zinc">
        {hightlightsSlides.map((slide, index) => (
          <div
            key={slide.id}
            id={`video-${index}`}
            className={`relative ${index === hightlightsSlides.length - 1 ? 'h-[80vh]' : 'h-screen'} w-full mb-8`}
          >
            <div className="absolute top-4 left-4 z-20 flex flex-col items-start">
              {slide.textLists && slide.textLists.map((text, idx) => (
                <p
                  key={idx}
                  ref={(el) => (textListRef.current[index] = el)}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-left"
                >
                  {text}
                </p>
              ))}
            </div>

            <video
              ref={(el) => (videoRef.current[index] = el)}
              className="w-full h-full object-cover opacity-80"
              src={slide.video}
              muted
              playsInline
            ></video>

            <div
              id={`text-${index}`}
              className="absolute inset-0 flex items-center justify-start p-4"
            >
              <h1 className="hero-text text-2xl sm:text-4xl md:text-6xl font-bold text-white text-left">
                {slide.text}
              </h1>
            </div>
          </div>
        ))}

        {isVideoVisible && (
          <div className="scroll-indicator fixed right-4 top-1/2 transform -translate-y-1/2 bg-white w-8 h-20 rounded-full shadow-md flex flex-col items-center justify-center z-50">
            {hightlightsSlides.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 my-1 rounded-full ${
                  idx === videoId ? "bg-[#ed9254]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default VideoCarousel;
