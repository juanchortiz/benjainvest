import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Building, TrendingUp } from "lucide-react";
import lisbonSkyline from "@/assets/lisbon-skyline.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-gradient-modern flex items-center justify-center overflow-hidden">
      
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Content - 2/3 width */}
          <div className="w-full lg:w-2/3 lg:pr-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Tu Socio Estratégico para 
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"> Inversión Inmobiliaria</span> en Portugal
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Soy Benjamín Valdivia, tu consultor en Seed Real Estate. 
                Con MBA de ISEG Lisboa y experiencia bancaria, ayudo a clientes internacionales 
                a asegurar oportunidades de alto potencial en el mercado portugués.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" className="group shadow-elegant border border-white">
                Agendar Consultoría
                <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
              
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">€500M+</div>
                <div className="text-sm text-primary-foreground/80">Transacciones</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">25+</div>
                <div className="text-sm text-primary-foreground/80">Países</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-primary-foreground/80">Satisfacción</div>
              </div>
            </div>
          </div>
          
          {/* Image - 1/3 width */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="relative">
              <img src="/lovable-uploads/ea3f0f29-7c82-4629-9d31-bae94e10f0e9.png" alt="Benjamín Valdivia - Consultor Inmobiliario" className="w-full max-w-sm mx-auto lg:max-w-full rounded-2xl shadow-elegant bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;