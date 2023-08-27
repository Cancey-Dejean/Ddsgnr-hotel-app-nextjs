import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const menuList = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Gallery", url: "/gallery" },
];

export const socialList = [
  { label: "Facebook", url: "/#facebook", icon: <FaFacebookF size={20} /> },
  { label: "Instagram", url: "/#instagram", icon: <FaInstagram size={20} /> },
  { label: "Twitter", url: "/#twitter", icon: <FaTwitter size={20} /> },
  { label: "LinkedIn", url: "/#linkedIn", icon: <FaLinkedin size={20} /> },
];
