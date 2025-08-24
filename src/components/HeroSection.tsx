import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Building, TrendingUp } from "lucide-react";
import lisbonSkyline from "@/assets/lisbon-skyline.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${lisbonSkyline})`
    }}></div>
      
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
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
          
          <div className="relative">
            <div className="relative z-10">
              <img src="/lovable-uploads/ea3f0f29-7c82-4629-9d31-bae94e10f0e9.png" alt="Benjamín Valdivia - Consultor Inmobiliario" className="w-full max-w-md mx-auto rounded-2xl shadow-elegant" />
            </div>
            
            <div className="absolute -top-8 -right-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
              <div className="flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Propiedades Premium</div>
                  <div className="text-xs text-muted-foreground">Ubicaciones Prime</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-accent" />
                <div>
                  <div className="text-sm font-semibold text-foreground">45% Crecimiento</div>
                  <div className="text-xs text-muted-foreground">Últimos 5 Años</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;