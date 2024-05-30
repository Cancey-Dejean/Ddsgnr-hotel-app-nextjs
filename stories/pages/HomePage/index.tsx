import Rooms from "../../../components/Rooms"
import BookingForm from "../../../components/BookingForm"
import Hero from "../../../components/Hero"
import PageWrapper from "../../../components/PageWrapper"
import StartVacation from "../../../components/StartVacation"
import VacationSection from "../../../components/Services"
import GallerySection from "../../../components/GallerySection"
import Reviews from "../../../components/Reviews"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import {
  featuresData,
  headerButtons,
  heroButtons,
  menuListData,
  perksButtons,
  reviewsData,
  roomOptions,
  vacationButtons,
} from "../../../constants"

const HomePage = () => {
  return (
    <>
      <Header menuListHeader={menuListData} btnData={headerButtons} />
      <PageWrapper>
        <Hero
          title="Enjoy Luxury Hotel Experience"
          bgImage="/images/hero.jpg"
          btnData={heroButtons}
        />
        <BookingForm />

        <StartVacation
          title="Start Your Vacation In Dream Hostel"
          videoImg="/images/lobby.jpg"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat."
          btnData={vacationButtons}
        />

        <Rooms data={roomOptions} />

        <VacationSection
          mainImg="/images/videoImg2.jpg"
          featuresDataVacation={featuresData}
          btnData={perksButtons}
        />
        <GallerySection
          imageOne="/images/gallery1.jpg"
          imageTwo="/images/gallery2.jpg"
          imageThree="/images/gallery3.jpg"
          imageFour="/images/gallery4.jpg"
          btnLabel="View More"
        />
        <Reviews data={reviewsData} />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default HomePage
