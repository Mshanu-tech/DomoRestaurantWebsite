import Hero from "../components/sections/Hero";
import FeaturedDishes from "../components/sections/FeaturedDishes";
import Story from "../components/sections/Story";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Chef from "../components/sections/Chef";
import MenuCategories from "../components/sections/MenuCategories";
import Gallery from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";
import Reservation from "../components/sections/Reservation";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <Story />
      <WhyChooseUs />
      <Chef />
      <MenuCategories />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
    </>
  );
}
