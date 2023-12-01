import { CgGym } from "react-icons/cg"
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { LiaSwimmerSolid } from "react-icons/lia"
import { MdOutlineFoodBank } from "react-icons/md"
import { TbMassage } from "react-icons/tb"

export const menuListData = [
  { label: "Home", url: "/" },
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
    reviewer: "Gordan Kelly",
    stars: 4,
  },
  {
    imgSrc: "/images/lobby.jpg",
    imgAlt: "Lobby",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "Gordan Kelly",
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
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    smallCard: false,
  },
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

export const buttonGroupDataFake = [
  {
    label: "Button",
    variant: "btn-primary",
    url: "/",
    icon: false,
    className: "",
  },
  {
    label: "Button",
    variant: "btn-border-dark",
    url: "/",
    icon: false,
    className: "",
  },
]

export const featuresData = [
  {
    title: "Private pool",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: <LiaSwimmerSolid />,
  },
  {
    title: "Spa & Massage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: <TbMassage />,
  },
  {
    title: "Gym",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: <CgGym />,
  },
  {
    title: "Restaurant",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: <MdOutlineFoodBank />,
  },
]
