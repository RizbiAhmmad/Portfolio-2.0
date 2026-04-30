import Banner from "@/components/Banner";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-transparent w-full">
      <Banner />
      <About />
    </div>
  );
}
