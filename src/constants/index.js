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
  
  export const navLists = [['EVENTS',"/events"],['MEMBERS', "/members"],["REGISTRATIONS","/registrations"],["FIXTURES", "/fixtures"]];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Code Chronicles",
        "Compete against the brightest minds in the ultimate coding battle.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Mazemerize", "Build a line-following robot with precision and speed."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Robo Soccer",
        "Design and program a robot to Strategize, compete, and score goals in an electrifying robotic match!"
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["TechXibition", "Showcase your innovative projects and groundbreaking ideas."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];