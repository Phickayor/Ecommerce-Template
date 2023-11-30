import Categories from "./components/Categories";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0">
        <NavBar />
        <Categories />
      </div>
    </main>
  );
}
