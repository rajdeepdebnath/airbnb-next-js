import Categories from "@/components/Categories";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <MobileNavbar />
      <Navbar />
      <main className="mt-[80px] p-5">
        <Categories />
      </main>
    </>
  );
}
