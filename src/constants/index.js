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

export const navLists = ["Book a Demo", "Support", "About Us", "FAQ"];

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
      "Experience water mist & fragrance.", 
      // "So strong. So light. So Pro."
    ],
    video: highlightSecondVideo,
    videoDuration: 3,
  },
  {
    id: 3,
    textLists: ["Experience the wind.",
      //  "What will yours do?."
      ],
    video: highlightThirdVideo,
    videoDuration: 7,
  },
  {
    id: 4,
    textLists: [
      "Experience the vibration.",
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
    title: "Anubhav 5D Lab in Orange",
    color: ["#ed9254", "#ffe7b9", "#000"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Anubhav 5D Lab in Blue",
    color: ["#21849D", "#21849D", "#fff"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Anubhav 5D Lab in Green",
    color: ["#357a38", "#fff", "#fff"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Anubhav 5D Lab in Pink",
    color: ["#FFC0CB", "#B76E79", "#B76E79"],
    img: blackImg,
  },
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
