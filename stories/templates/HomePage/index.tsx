import Rooms from "../../../components/Rooms"
import BookingForm from "../../../components/BookingForm"
import Hero from "../../../components/Hero"
import PageWrapper from "../../../components/PageWrapper"
import StartVacation from "../../../components/StartVacation"
import VacationSection from "../../../components/VacationSection"
import GallerySection from "../../../components/GallerySection"
import Reviews from "../../../components/Reviews"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import {
  featuresDataFake,
  headerButtonsFake,
  menuListFake,
  reviewsFakeData,
  roomOptionsFake,
} from "../../../constants/fakeData"

const HomePage = () => {
  return (
    <>
      <Header menuListHeader={menuListFake} btnData={headerButtonsFake} />
      <PageWrapper>
        <Hero />
        <BookingForm />
        <StartVacation />

        <Rooms data={roomOptionsFake} />

        <VacationSection featuresDataVacation={featuresDataFake} />
        <GallerySection />
        <Reviews data={reviewsFakeData} />
      </PageWrapper>
      <Footer />
    </>
  )
}

export default HomePage
