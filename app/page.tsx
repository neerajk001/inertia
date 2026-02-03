import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import HowWeWork from "@/components/HowWeWork";
import WhyInertia from "@/components/WhyInertia";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <SelectedWork />
      <HowWeWork />
      <WhyInertia />
      <Footer />
    </main>
  );
}
