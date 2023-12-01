import Categories from "./components/Categories";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="space-y-10">
      <div className="sticky top-0 z-20 bg-white">
        <NavBar />
        <Categories />
      </div>
      <Hero />
    </main>
  );
}
