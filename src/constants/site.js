// Site configuration & navigation metadata
import { profileData } from "../data/portfolioData";

export const profile = profileData;
export const socialLinks = profileData.socialLinks;
export const heroStack = profileData.heroStack;

export const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const features = {
  showTestimonials: false,
};
