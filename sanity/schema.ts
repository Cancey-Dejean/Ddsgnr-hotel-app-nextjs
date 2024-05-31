import { type SchemaTypeDefinition } from "sanity"
import homepage from "./schemas/singletons/homepage"
import page from "./schemas/documents/page"
import blog from "./schemas/documents/blog"

import category from "./schemas/singletons/category"
import author from "./schemas/singletons/author"
import { youtube } from "./schemas/objects/youtube"
import { customImage } from "./schemas/objects/customImage"
import { bodyText } from "./schemas/objects/bodyText"
import { excerpt } from "./schemas/objects/excerpt"
import siteSettings from "./schemas/singletons/siteSettings"
import header from "./schemas/singletons/header"
import navigation from "./schemas/singletons/navigation"
import { link } from "./schemas/objects/link"
import { navItem } from "./schemas/objects/navItem"
import { button } from "./schemas/objects/button"
import { buttonGroup } from "./schemas/objects/buttonGroup"
import { logo } from "./schemas/objects/logo"
import { hero } from "./schemas/sections/hero"
import { pageSections } from "./schemas/objects/pageSections"
import { bookingForm } from "./schemas/sections/bookingForm"
import { startVacation } from "./schemas/sections/startVacation"
import { cardRoom } from "./schemas/objects/cardRoom"
import { rooms } from "./schemas/sections/ourRooms"
import { hideSection } from "./schemas/objects/hideSection"
import room from "./schemas/documents/room"
import { services } from "./schemas/sections/services"
import { cardPerk } from "./schemas/objects/cardPerk"
import { gallery } from "./schemas/sections/gallery"
import { review } from "./schemas/objects/review"
import { reviews } from "./schemas/sections/reviews"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    blog,
    navigation,
    room,

    // Objects
    customImage,
    bodyText,
    excerpt,
    hideSection,
    link,
    navItem,
    buttonGroup,
    logo,
    review,
    cardRoom,
    cardPerk,
    pageSections,
    hero,
    bookingForm,
    startVacation,
    rooms,
    services,
    gallery,
    reviews,

    // Singletons
    homepage,
    category,
    author,
    siteSettings,
    header,
    youtube,
    button,
  ],
}
