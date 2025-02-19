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

import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";
   
const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "Anubhav 5D Lab in Golden Yellow",
    color: ["#977133", "#000", "#000"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
// Function to Handle Rotation Update and Restrict Z-axis
const handleRotationUpdate = (rotationSetter, rotation) => {
  rotationSetter({
    x: rotation.x, // Keep X-axis rotation
    y: rotation.y, // Keep Y-axis rotation
    z: 0, // Disable Z-axis rotation
  });
};
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>

        <div className="flex flex-col items-center mt-5">
        <div className="
            w-full 
            max-w-[60vw] sm:max-w-[50vw] md:max-w-[40vw] 
            lg:max-w-[30vw] xl:max-w-[25vw] 2xl:max-w-[20vw] 
            bg-black 
            h-[20vh] sm:h-[30vh] md:h-[40vh] 
            lg:h-[50vh] xl:h-[55vh] 2xl:h-[60vh] 
            overflow-hidden relative rounded-lg flex justify-center items-center">
          {/* <div className="
            w-full 
            max-w-[80vw] sm:max-w-[70vw] md:max-w-[60vw] 
            lg:max-w-[50vw] xl:max-w-[40vw] 2xl:max-w-[30vw] 
            bg-white 
            h-[30vh] sm:h-[40vh] md:h-[50vh] 
            lg:h-[60vh] xl:h-[65vh] 2xl:h-[70vh] 
            overflow-hidden relative rounded-lg flex justify-center items-center"> */}
            
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={(rotation) => handleRotationUpdate(setSmallRotation, rotation)}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={(rotation) => handleRotationUpdate(setSmallRotation, rotation)}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="w-full **px-5 sm:px-10 lg:px-20 xl:px-32** mt-5"> {/* ✅ Adjusted padding for large screens */}
            <p className="
            text-sm sm:text-base md:text-lg 
            **lg:text-xl xl:text-2xl** 
            font-light text-center mb-5"> {/* ✅ Increased font size for large screens */}
              {model.title}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* Color Selector */}
              <ul className="flex justify-center">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="
                    w-6 h-6 sm:w-8 sm:h-8 
                    **lg:w-10 lg:h-10** 
                    rounded-full mx-2 cursor-pointer border border-white" 
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              {/* <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
