import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Home","Book a Demo", "FAQ", "Contact Us"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Engage in learning with...",
      // "Study‑changing chip.",
      // "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 3,
  },
  {
    id: 2,
    textLists: [
      "Experience water mist & fragrance", 
      // "So strong. So light. So Pro."
    ],
    video: highlightSecondVideo,
    videoDuration: 3,
  },
  {
    id: 3,
    textLists: ["Experience the wind",
      //  "What will yours do?."
      ],
    video: highlightThirdVideo,
    videoDuration: 7,
  },
  {
    id: 4,
    textLists: [
      "Experience the vibration",
      // "longest feel of any Anubhav lab contain.",
      // "be sensible of Air, Mist, and Quiver",
    ],
    video: highlightFourthVideo,
    videoDuration: 5,
  },
];

export const models = [
  {
    id: 1,
    title: "Anubhav 5D Lab in Olive Green",
    color: ["#434531", "#000", "#000"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Anubhav 5D Lab in Golden Yellow",
    color: ["#977133", "#000", "#000"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Anubhav 5D Lab in Midnight Blue",
    color: ["#0D2C3E", "#fff", "#fff"],
    img: blueImg,
  },
  {
    id: 4,
    title: "Anubhav 5D Lab in Royal Purple",
    color: ["#5E4A67", "#fff", "#fff"],
    img: whiteImg,
  },
  {
    id: 5,
    title: "Anubhav 5D Lab in Soft Pink",
    color: ["#CB91A1", "#000", "#000"],
    img: whiteImg,
  },
  {
    id: 6,
    title: "Anubhav 5D Lab in Silver Grey",
    color: ["#ABA4A5", "#000", "#000"],
    img: yellowImg,
  },
  
  
    // {
  //   id: 4,
  //   title: "Anubhav 5D Lab in Copper Brown",
  //   color: ["#6C3826", "#000", "#000"],
  //   img: blackImg,
  // },
  
];

export const sizes = [
  // { label: '30"', value: "small" },
  // { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "FAQ",
  // "Sales Policy",
  // "Legal",
  // "Site Map",
];


export const faqData = [
  {
    question: "What is 5D technology?",
    answer: "5D technology combines virtual reality with sensory experiences like vibration, air, mist, and fragrance to engage all five senses. Unlike traditional education, which relies on textbooks or videos, 5D technology provides an immersive, interactive learning experience that feels real and helps students retain information for a lifetime.",
  },
  {
    question: "What experiences does the 5D lab offer?",
    answer: "The 5D lab offers educational and thrilling VR experiences in subjects like physics, chemistry, biology, mathematics, social sciences, and history. Examples include: \n• 360-degree simulations of historical events like Jallianwala Bagh or World War I.\n• Real-world physics and chemistry simulations showing atoms, molecules, and their behaviors.\n• Immersive biology lessons that break down complex systems like the human heart or DNA structures.",
  },
  {
    question: "What is the 5D chair?",
    answer: "The 5D chair is an advanced seat equipped with vibration, mist, air, and fragrance mechanisms. These sensory effects synchronize with VR content to make the experience highly immersive and realistic. For example, during a rain simulation, you'll feel mist; in a thrilling scene, you'll experience vibrations and wind.",
  },
  {
    question: "Is Oculus Quest 2 safe for children?",
    answer: "Yes, but Meta recommends it for ages 13 and above. The device has safety features like reduced blue light, IPD adjustment for eye comfort, and anti-flicker displays. However, students should take regular breaks, and screen time should be monitored by teachers or parents.",
  },
  {
    question: "Can schools add their own 360° content?",
    answer: "Schools can easily upload their 360-degree videos by contacting Melzo support team. They can also add 5D effects like mist, vibration, or fragrance to these videos using the provided tools.",
  },
  {
    question: "Can students experience motion sickness?",
    answer: "Some users might experience VR sickness, especially during fast-moving scenes. However, the 5D lab encourages regular breaks and provides a comfortable, well-lit environment to reduce this risk.",
  },
  {
    question: "What precautions should be taken during VR sessions?",
    answer: "• Take breaks every 20 minutes (20-20-20 rule: look 20 feet away for 20 seconds). \n• Adjust the headset’s IPD settings for comfort. \n• Use in a well-lit and spacious area to prevent physical injuries or disorientation. \n• Limit screen time to avoid fatigue.",
  },
  {
    question: "How does the offline feature work?",
    answer: "Once content is selected, it automatically downloads to the VR device for offline access. This ensures smooth playback even without an internet connection. Updates are handled like regular app updates on platforms like the Play Store.",
  },
  {
    question: "What makes the 5D lab unique?",
    answer: "The 5D lab is unique because it combines immersive VR visuals with sensory effects like mist, air, vibrations, and fragrances. It also offers a complete ecosystem with offline functionality and the ability to add custom content.",
  },
  {
    question: "Can the 5D lab content be updated?",
    answer: "Yes, the content library is updated regularly with new educational and experiential VR modules. Schools can also update their devices like any other app.",
  },
];
