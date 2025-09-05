import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, TrendingUp, Users, Award } from "lucide-react";
const ExpertiseSection = () => {
  const credentials = [{
    icon: GraduationCap,
    title: "MBA de ISEG Lisboa",
    description: "Educación empresarial avanzada de las mejores escuelas de Europa"
  }, {
    icon: TrendingUp,
    title: "Banca e Inversión",
    description: "Amplia experiencia en banca sudamericana y mercados europeos"
  }, {
    icon: Users,
    title: "Enfoque Internacional",
    description: "Especializado en servir inversionistas internacionales de alto patrimonio"
  }];
  
  return <section className="py-20 bg-background relative overflow-hidden">      
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

        <div className="flex justify-center">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Mi Expertiz</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {credentials.map((credential, index) => <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
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
                </Card>)}
            </div>
          </div>
        </div>

        
      </div>
    </section>;
};
export default ExpertiseSection;