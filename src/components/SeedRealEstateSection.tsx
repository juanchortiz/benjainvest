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


        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                El Respaldo de Seed Real Estate
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Representar a Seed Real Estate me otorga acceso privilegiado a una red establecida, 
                recursos exclusivos y el respaldo de una marca reconocida en el mercado portugués. 
                Esta asociación estratégica me permite ofrecer a mis clientes un nivel de servicio 
                y oportunidades que van más allá de lo que un consultor independiente puede proporcionar.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Card className="shadow-elegant border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4 text-center">
                  Ventajas del Respaldo
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Acceso a propiedades exclusivas no públicas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Red establecida de contactos profesionales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Herramientas y tecnología de vanguardia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Credibilidad y confianza del mercado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>;
};
export default SeedRealEstateSection;