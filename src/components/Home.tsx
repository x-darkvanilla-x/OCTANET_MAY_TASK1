import { About } from "./About"
import { CarouselSlider } from "./CarouselSlider"
import { Faq } from "./Faq"
import { HeroSection } from "./HeroSection"
import { Listings } from "./Listings"
import { Meaning } from "./Meaning"
import { Services } from "./Services"
import { Testimonial } from "./Testimonial"

export const Home = () => {
  return (
    <>
        <HeroSection />
        <About />
        <CarouselSlider />
        <Listings />
        <Services />
        <Meaning />
        <Faq />
        <Testimonial />
    </>
  )
}
