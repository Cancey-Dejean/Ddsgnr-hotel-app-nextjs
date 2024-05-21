import { CgGym } from "react-icons/cg"
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { LiaSwimmerSolid } from "react-icons/lia"
import { MdOutlineFoodBank } from "react-icons/md"
import { TbMassage } from "react-icons/tb"

export const menuListData = [
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Gallery", url: "/gallery" },
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
    imgSrc: "/images/lobby.jpg",
    imgAlt: "Lobby",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "Gordan Kelly",
    stars: 5,
  },
  {
    imgSrc: "/images/lobby.jpg",
    imgAlt: "Lobby",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "Kelly Gordan",
    stars: 4,
  },
  {
    imgSrc: "/images/lobby.jpg",
    imgAlt: "Lobby",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "Sr. Gordan Kelly",
    stars: 3,
  },
]

export const heroButtons = [
  {
    url: "/",
    variant: "btn-inverted",
    label: "Book Now",
  },
  {
    url: "/",
    variant: "btn-border-light",
    label: "Learn more",
  },
]

export const roomOptions = [
  {
    imgSrc: "/images/card-image.jpg",
    title: "Double exclusive 2 queen beds",
    desc: "Relish the comfort of two queen beds in our exclusive room, designed for unparalleled relaxation and elegance.",
    smallCard: false,
  },
  {
    imgSrc: "/images/card-image-2.jpg",
    title: "Double deluxe",
    desc: "Our double deluxe room offers cozy luxury, perfect for a restful stay.",
    smallCard: true,
  },
  {
    imgSrc: "/images/card-image-3.jpg",
    title: "Superior king bed",
    desc: "Superior comfort with spaciousness and modern luxury.",
    smallCard: true,
  },
  {
    imgSrc: "/images/card-image-4.jpg",
    title: "Double deluxe king bed",
    desc: "Refined comfort featuring a lavish king bed.",
    smallCard: true,
  },
  {
    imgSrc: "/images/card-image-5.jpg",
    title: "Double queen beds",
    desc: "Spacious elegance, ideal for comfort and convenience.",
    smallCard: true,
  },
]

export const headerButtons = [
  {
    url: "#",
    variant: "btn-border-dark",
    label: "Sign In",
    size: "btn-size-small",
    icon: null,
  },
  {
    url: "#",
    variant: "btn-primary",
    label: "Get Started",
    size: "btn-size-small",
    icon: null,
  },
]

export const perksButtons = [
  {
    url: "#",
    variant: "btn-border-dark",
    label: "Book Now",
  },
  {
    url: "#",
    variant: "btn-border-none",
    label: "Learn More",
    icon: true,
  },
]

export const vacationButtons = [
  {
    url: "/",
    variant: "btn-primary",
    label: "Book Now",
  },
  {
    url: "/",
    variant: "btn-border-dark",
    label: "Learn More",
  },
]

export const featuresData = [
  {
    title: "Private pool",
    desc: "Dive into serenity in our private pool, an oasis of calm designed for your ultimate relaxation and enjoyment",
    icon: <LiaSwimmerSolid />,
  },
  {
    title: "Spa & Massage",
    desc: "Indulge in our spa and massage services, a sanctuary of rejuvenation for your body and mind",
    icon: <TbMassage />,
  },
  {
    title: "Gym",
    desc: "Energize your stay with our state-of-the-art gym, equipped for all your fitness and wellness needs",
    icon: <CgGym />,
  },
  {
    title: "Restaurant",
    desc: "Savor exquisite dining experiences in our restaurant, where culinary art meets atmospheric elegance",
    icon: <MdOutlineFoodBank />,
  },
]
