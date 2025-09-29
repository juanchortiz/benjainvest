import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, Users2, Zap, Shield, Target } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
const SeedRealEstateSection = () => {
  const advantages = [
    {
      icon: Database,
      title: "Acceso Exclusivo",
      description: "Propiedades no públicas y oportunidades únicas en el mercado portugués."
    },
    {
      icon: Users2,
      title: "Red Establecida",
      description: "Contactos directos con desarrolladores, inversionistas y profesionales clave."
    },
    {
      icon: Shield,
      title: "Credibilidad",
      description: "Respaldo de una marca reconocida que garantiza confianza en cada transacción."
    },
    {
      icon: Zap,
      title: "Recursos Avanzados",
      description: "Herramientas tecnológicas y análisis de mercado de vanguardia."
    }
  ];
  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Respaldado por <span className="bg-gradient-premium bg-clip-text text-transparent">Seed Real Estate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como representante oficial de Seed Real Estate, la consultoría inmobiliaria líder de Portugal, 
            ofrezco a mis clientes acceso privilegiado y recursos exclusivos en el mercado portugués.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="/src/assets/lisbon-luxury-building.jpg" 
                alt="Edificios de lujo en Lisboa" 
                className="w-full h-80 object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Propiedades Premium en Lisboa
                </h3>
                <p className="text-muted-foreground">
                  Acceso exclusivo al portfolio de inmuebles de alta gama
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Ventajas Competitivas
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Esta asociación estratégica me permite brindar un nivel de servicio y acceso 
                que va mucho más allá de lo que un consultor independiente puede ofrecer.
              </p>
            </div>

            <div className="grid gap-4">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card key={index} className="p-4 border-border hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-premium rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {advantage.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SeedRealEstateSection;