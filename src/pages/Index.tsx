import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import HowWeHelp from "@/components/HowWeHelp";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Projects />
        <HowWeHelp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
