import Rooms from "../../../components/Rooms"
import BookingForm from "../../../components/BookingForm"
import Hero from "../../../components/Hero"
import PageWrapper from "../../../components/PageWrapper"
import StartVacation from "../../../components/StartVacation"
import VacationSection from "../../../components/ServicesSection"
import GallerySection from "../../../components/GallerySection"
import Reviews from "../../../components/Reviews"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import {
  featuresDataFake,
  headerButtonsFake,
  heroButtonsFake,
  menuListFake,
  perksButtonsFake,
  reviewsFakeData,
  roomOptionsFake,
  vacationButtonsFake,
} from "../../../constants/fakeData"

const HomePage = () => {
  return (
    <>
      <Header menuListHeader={menuListFake} btnData={headerButtonsFake} />
      <PageWrapper>
        <Hero
          title="Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          bgImage="https://dummyimage.com/1440x960.png/dddddd/ffffff"
          btnData={heroButtonsFake}
        />
        <BookingForm />

        <StartVacation
          title="Section Title"
          videoImg="https://dummyimage.com/572x594.png/dddddd/ffffff"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          btnData={vacationButtonsFake}
        />

        <Rooms data={roomOptionsFake} />

        <VacationSection
          mainImg="https://dummyimage.com/572x594.png/dddddd/ffffff"
          featuresDataVacation={featuresDataFake}
          btnData={perksButtonsFake}
        />
        <GallerySection />
        <Reviews data={reviewsFakeData} />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default HomePage
