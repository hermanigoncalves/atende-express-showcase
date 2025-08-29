import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import HowWeHelp from "@/components/HowWeHelp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Projects />
      <HowWeHelp />
    </div>
  );
};

export default Index;
