const About = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            <span className="text-accent">|</span> Sobre nós:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Transformamos atendimento digital em experiências <span className="text-neon font-semibold">rápidas, inteligentes e encantadoras</span>. 
                Nossa missão é unir design, tecnologia e inteligência artificial para gerar resultados reais.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Com expertise em desenvolvimento web e automação inteligente, 
                criamos soluções que conectam marcas aos seus clientes de forma única e eficiente.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gradient-primary p-8 rounded-2xl text-center shadow-primary">
                <div className="text-5xl font-bold text-white mb-2">+10</div>
                <div className="text-xl text-white/90">anos de experiência</div>
                <div className="text-sm text-white/70 mt-2">em transformação digital</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;