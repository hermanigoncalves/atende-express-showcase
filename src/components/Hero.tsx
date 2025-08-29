import { Button } from "@/components/ui/button";
const logoPath = "/lovable-uploads/2bd72f59-b932-40b3-88ff-0cfa4a17b070.png";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logoPath} 
            alt="Atende Express" 
            className="h-32 md:h-48 object-contain drop-shadow-2xl"
          />
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-warning bg-clip-text text-transparent leading-tight">
          Agência especialista em<br />
          <span className="text-neon">Web Design</span> e <span className="text-primary">Agentes de Atendimento com IA</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Criamos experiências digitais modernas e humanizadas que transformam seu atendimento
        </p>
        
        {/* CTA Button */}
        <Button 
          variant="neon" 
          size="lg"
          onClick={scrollToServices}
          className="text-lg animate-pulse"
        >
          Conheça nossos serviços
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-16 w-1 h-1 bg-warning rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-accent rounded-full animate-ping delay-300"></div>
    </section>
  );
};

export default Hero;