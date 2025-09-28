import { Card, CardContent } from "@/components/ui/card";
import { Check, Info, Building } from "lucide-react";
import lisbonLuxuryBuilding from "@/assets/lisbon-luxury-building.jpg";

const GoldenVisaSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: `url(${lisbonLuxuryBuilding})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center shadow-elegant">
                <Building className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Golden Visa Portugal 2025-2026
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lo que tienes que saber sobre los cambios más importantes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Info */}
            <div className="space-y-8">
              <Card className="shadow-elegant border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Info className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">
                      Cambios Importantes
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    La Golden Visa sigue siendo una de las vías más atractivas para acceder a Europa, 
                    pero ahora con cambios clave: <strong className="text-foreground">la inversión inmobiliaria ya no es válida</strong> para obtener la residencia.
                  </p>
                  
                  <div className="bg-gradient-subtle rounded-2xl p-6">
                    <p className="text-foreground font-semibold text-center">
                      💡 Si ya aplicaste con la vía inmobiliaria, mantienes todos tus derechos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    🎯 Tu Puerta Estratégica a Europa
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Portugal sigue siendo tu puerta estratégica a Europa, solo que ahora con un 
                    <strong className="text-primary"> nuevo mapa de inversión</strong> que ofrece 
                    oportunidades diversificadas y sostenibles.
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* Right Column - Available Routes */}
            <div className="space-y-6">
              <Card className="shadow-elegant border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                    🛣️ Rutas Disponibles Hoy
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Fondos de Inversión</h4>
                        <p className="text-sm text-muted-foreground">Inversión mínima €500,000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Innovación y Proyectos Científicos</h4>
                        <p className="text-sm text-muted-foreground">Apoyo a I+D y startups</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Cultura y Patrimonio</h4>
                        <p className="text-sm text-muted-foreground">Preservación cultural €250,000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Creación de Empleo</h4>
                        <p className="text-sm text-muted-foreground">Mínimo 10 empleos permanentes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* CTA Card */}
              <Card className="shadow-elegant border-primary/20 bg-gradient-premium/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    ¿Necesitas Orientación?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Te ayudo a navegar estas nuevas opciones y encontrar la mejor estrategia para tu situación.
                  </p>
                  <div className="text-sm text-primary font-semibold">
                    📞 Consultoría especializada disponible
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;