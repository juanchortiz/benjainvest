import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, Users2, Zap, Shield, Target } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
const SeedRealEstateSection = () => {
  const [isVideoVisible, setIsVideoVisible] = React.useState(false);
  const videoRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [{
    icon: Database,
    title: "Tecnología de Vanguardia",
    description: "Sistemas CRM avanzados, análisis de mercado y herramientas propias para máxima eficiencia."
  }, {
    icon: Users2,
    title: "Equipo Experto",
    description: "Red colaborativa de especialistas incluyendo expertos legales, financieros y técnicos."
  }, {
    icon: Zap,
    title: "Ejecución Rápida",
    description: "Procesos optimizados y relaciones establecidas para completar transacciones rápidamente."
  }, {
    icon: Shield,
    title: "Mitigación de Riesgos",
    description: "Due diligence integral y protocolos de evaluación de riesgos para cada inversión."
  }, {
    icon: Target,
    title: "Inteligencia de Mercado",
    description: "Conocimiento local profundo y datos en tiempo real para identificar las mejores oportunidades."
  }];
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Respaldado por <span className="bg-gradient-premium bg-clip-text text-transparent">Seed Real Estate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Me enorgullece representar a Seed Real Estate, la consultoría inmobiliaria líder de Portugal. 
            Juntos brindamos experiencia, tecnología y acceso al mercado inigualables.
          </p>
        </div>

        {/* Video Section */}
        <div ref={videoRef} className="mb-16">
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16/9} className="rounded-2xl overflow-hidden shadow-elegant">
              {isVideoVisible && (
                <iframe
                  src="https://www.youtube.com/embed/J9L7ijKc2uo?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=1"
                  title="Seed Real Estate Presentation"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </AspectRatio>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                ¿Por qué Seed Real Estate?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Seed Real Estate combina décadas de experiencia con tecnología innovadora 
                y enfoque centrado en el cliente. Como tu consultor dentro de esta organización, 
                tengo acceso a listados exclusivos, inteligencia de mercado y recursos que 
                agentes independientes simplemente no pueden igualar.
              </p>
              
              <Button variant="outline" size="lg" className="group">
                Visitar Seed Real Estate
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {advantages.slice(3).map((advantage, index) => <Card key={index + 3} className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6">
                  <advantage.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {advantage.title}
                </h4>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elegant border border-border text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            La Ventaja de Seed en Números
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">€2B+</div>
              <div className="text-muted-foreground">Transacciones Totales</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Propiedades Vendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Miembros del Equipo</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SeedRealEstateSection;