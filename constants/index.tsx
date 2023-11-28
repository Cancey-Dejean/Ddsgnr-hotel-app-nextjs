import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export const menuList = [
  { label: "Home", url: "/", icon: null },
  { label: "About", url: "/about", icon: null },
  { label: "Services", url: "/services", icon: null },
  { label: "Gallery", url: "/gallery", icon: null },
]

export const socialList = [
  { label: "Facebook", url: "/#facebook", icon: <FaFacebookF size={20} /> },
  { label: "Instagram", url: "/#instagram", icon: <FaInstagram size={20} /> },
  { label: "Twitter", url: "/#twitter", icon: <FaTwitter size={20} /> },
  { label: "LinkedIn", url: "/#linkedIn", icon: <FaLinkedin size={20} /> },
]

export const legalLinks = [
  { url: "#", label: "Privacy Policy" },
  { url: "#", label: "Terms of Service" },
  { url: "#", label: "Cookies Settings" },
]

export const roomsData = ["Standard", "Deluxe", "Executive", "Suite"]

export const reviewsData = [
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "Gordan Kelly",
    stars: 5,
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "Gordan Kelly",
    stars: 4,
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "Gordan Kelly",
    stars: 3,
  },
]

export const roomOptions = [
  {
    imgSrc: "/images/card-image-2.jpg",
    title: "Double deluxe",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: true,
  },
  {
    imgSrc: "/images/card-image-3.jpg",
    title: "Superior king bed",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: true,
  },
  {
    imgSrc: "/images/card-image-4.jpg",
    title: "Double deluxe king bed",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: true,
  },
  {
    imgSrc: "/images/card-image-5.jpg",
    title: "Double queen beds",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: true,
  },
]
