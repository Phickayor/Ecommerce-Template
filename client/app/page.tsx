import BlackFriday from "./components/BlackFriday";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import FurtherNav from "./components/FurtherNav";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SpecialOffers from "./components/SpecialOffers";
import TopDeals from "./components/TopDeals";

export default function Home() {
  return (
    <main className="lg:space-y-8 space-y-5 pt-5">
      <div className="sticky top-0 z-20 bg-white">
        <NavBar />
        <Categories />
        {/* <FurtherNav/> */}
      </div>
      <Hero />
      <TopDeals />
      <FeaturedProducts />
      <SpecialOffers/>
      <BlackFriday/>
      <Footer />
    </main>
  );
}
