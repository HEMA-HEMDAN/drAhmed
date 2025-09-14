import { MdOutlineEmail } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
// i have put all the text here because when transilate to arabic the text goes nuts so at the end we are gona change all the text to arabic
export const Gallerypics = [
  {
    id: 1,
    img: "/gallery/1.jpg",
    title: "Workout",
  },
  {
    id: 2,
    img: "/gallery/55.jpg",
    title: "Workout",
  },
  {
    id: 3,
    img: "/gallery/44.jpg",
    title: "Workout",
  },
  {
    id: 4,
    img: "/gallery/99.JPG",
    title: "Workout",
  },
  {
    id: 5,
    img: "/gallery/33.jpg",
    title: "Workout",
  },
  {
    id: 6,
    img: "/gallery/88.JPG",
    title: "Workout",
  },
];
export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#trainer" },
  { label: "Workouts", href: "#workouts" },
  { label: "Contact", href: "#contact" },
];
export const HEADLINE = `Transform Your Body.
Unlock Your Potential.`;

export const SUBTITLE = `Experience personalised training programmes that empower you to build
strength, shed pounds, and maintain motivation. Let's embark on this
fitness journey together!`;

export const CTA_TEXT = "Start Training Today";
// === Text Variables ===
export const TITLE = "Meet Your Trainer";
export const DESCRIPTION =
  "I'm Ahmed, a certified personal trainer with over seven years of experience. My mission is to empower you with effective workouts, nutritional guidance, and unwavering motivation.";
export const BUTTON_TEXT = "See Our Workouts";
export const IMAGE_SRC = "/assets/ahmed.jpg"; // replace with actual trainer image
export const IMAGE_ALT = "Ahmed, Personal Trainer";
export const HEADING = "WORKOUT GALLERY";
export const SUBHEADING = "Explore the dedication and results of our clients.";
export const CLOSE_BUTTON = "✕";
export const ALT_TEXT = "Workout image";
export const MODAL_ALT_TEXT = "Selected workout";
export const CONTACT_METHODS = [
  {
    key: "email",
    title: "EMAIL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: "mailto:trainer@fitwithahmed.com",
    linkText: "trainer@fitwithahmed.com",
    Icon: MdOutlineEmail,
    aria: "Send email",
  },
  {
    key: "chat",
    title: "LIVE CHAT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: "#start-chat",
    linkText: "Start new chat",
    Icon: BsChatDots,
    aria: "Start live chat",
  },
  {
    key: "phone",
    title: "PHONE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    href: "tel:+15550000000",
    linkText: "+1 (555) 000-0000",
    Icon: FiPhone,
    aria: "Call phone number",
  },
];
export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "X", href: "#", Icon: FaXTwitter },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];
export const links = [
  {
    href: "https://mohamedwael.vercel.app/",
    text: "© 2025 Mohamed Wael.",
  },
  {
    href: "https://hema-cyan.vercel.app/",
    text: "© 2025 HEMA.",
  },
];
export const PROGRAMS_SECTION = {
  heading: "PROGRAMS TAILORED FOR YOU",
  items: [
    {
      icon: "⚡",
      title: "DISCOVER THE PERFECT TRAINING PLAN THAT FITS YOUR LIFESTYLE.",
      description:
        "Our diverse programs cater to all fitness levels and goals.",
    },
    {
      icon: "🏃",
      title:
        "WEIGHT LOSS COACHING – BURN FAT AND BOOST ENERGY WITH CUSTOM PLANS.",
      description:
        "Achieve your weight loss goals with tailored workouts and nutrition advice.",
    },
    {
      icon: "🧩",
      title: "MUSCLE BUILDING – STRUCTURED STRENGTH TRAINING FOR LEAN MUSCLE.",
      description:
        "Build strength and size with our expert-led muscle building programmes.",
    },
  ],
};
