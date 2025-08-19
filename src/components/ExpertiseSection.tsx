import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, TrendingUp, Users, Award, Building2, Globe2 } from "lucide-react";

const ExpertiseSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "MBA de ISEG Lisboa",
      description: "Educación empresarial avanzada de las mejores escuelas de Europa"
    },
    {
      icon: TrendingUp,
      title: "Banca e Inversión",
      description: "Amplia experiencia en banca sudamericana y mercados europeos"
    },
    {
      icon: Users,
      title: "Enfoque Internacional",
      description: "Especializado en servir inversionistas internacionales de alto patrimonio"
    },
    {
      icon: Award,
      title: "Asesoría Estratégica",
      description: "Tu socio estratégico para construcción de riqueza a largo plazo"
    }
  ];

  const differentiators = [
    "Experiencia financiera sólida desde la banca",
    "Inteligencia de mercado profunda y análisis de datos", 
    "Comunicación multilingüe (español, portugués, inglés)",
    "Desarrollo integral de estrategias de inversión",
    "Gestión completa de transacciones de extremo a extremo",
    "Soporte post-compra y optimización de portafolio"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">Tu Asesor Estratégico</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            No Solo Otro Agente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combino experiencia financiera, inteligencia de mercado y guía personal para entregar 
            resultados más allá de los servicios inmobiliarios tradicionales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Mis Credenciales y Experiencia
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <credential.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {credential.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {credential.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-subtle rounded-3xl p-8 shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Lo Que Me Diferencia</h3>
              </div>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft border border-border">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Globe2 className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-xl font-semibold text-foreground">Perspectiva Global</h4>
              <p className="text-muted-foreground">
                Entendimiento de mercados internacionales y estrategias transfronterizas
              </p>
            </div>
            <div className="space-y-4">
              <TrendingUp className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-xl font-semibold text-foreground">Decisiones Basadas en Datos</h4>
              <p className="text-muted-foreground">
                Aprovechando análisis financiero e inteligencia de mercado para resultados óptimos
              </p>
            </div>
            <div className="space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-xl font-semibold text-foreground">Toque Personal</h4>
              <p className="text-muted-foreground">
                Apoyo dedicado durante todo tu viaje de inversión y más allá
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;