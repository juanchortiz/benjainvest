import { Card, CardContent } from "@/components/ui/card";
import { Check, Info } from "lucide-react";

const GoldenVisaSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-border">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-premium rounded-xl flex items-center justify-center">
                  <Info className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Golden Visa Portugal 2025-2026: lo que tienes que saber
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                La Golden Visa sigue siendo una de las vías más atractivas para acceder a Europa, 
                pero ahora con cambios clave: la inversión inmobiliaria ya no es válida para obtener la residencia.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Hoy las rutas disponibles son:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Fondos de inversión</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Innovación y proyectos científicos</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Cultura y preservación del patrimonio</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">Creación de empleo</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-subtle rounded-2xl p-6 mb-6">
                <p className="text-foreground">
                  <strong>Si ya aplicaste con la vía inmobiliaria, mantienes todos tus derechos.</strong>
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground text-center">
                Portugal sigue siendo tu puerta estratégica a Europa, solo que ahora con un nuevo mapa de inversión.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;