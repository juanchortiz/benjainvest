import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Shield, Heart, TrendingUp, Globe, MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const WhyPortugalSection = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [paused, setPaused] = React.useState(false);
  const lisbonImages = [{
    src: "/lovable-uploads/8ebf12d9-ebfb-4fa8-9fe5-67bae50ea031.png",
    alt: "Coloridos edificios de Lisboa con terrazas para comer al aire libre"
  }, {
    src: "/lovable-uploads/b4642e83-c8d5-4fc5-8084-baf16da05e1f.png",
    alt: "Puente de Lisboa con bandera portuguesa en primer plano"
  }, {
    src: "/lovable-uploads/2de1b045-14e5-40b0-92a5-f3c43e96e035.png",
    alt: "Ciclistas junto al río con el puente de Lisboa al fondo"
  }, {
    src: "/lovable-uploads/70708b46-c426-4025-afc9-6e6ada93ca11.png",
    alt: "Arquitectura tradicional portuguesa con edificios coloridos"
  }];
  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (!paused) {
        api.scrollNext();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [api, paused]);
  const benefits = [{
    icon: Sun,
    title: "Clima Perfecto",
    description: "300+ días de sol al año con inviernos suaves. Vida ideal todo el año."
  }, {
    icon: Shield,
    title: "Seguridad",
    description: "Uno de los países más seguros con baja criminalidad y estabilidad política."
  }, {
    icon: TrendingUp,
    title: "Crecimiento del Mercado",
    description: "Propiedades crecieron 45% en 5 años con demanda fuerte continua."
  }, {
    icon: Globe,
    title: "Acceso UE",
    description: "Puerta a Europa con excelente conectividad y opciones de residencia."
  }];
  return <section className="py-20 bg-card relative overflow-hidden">      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            ¿Por qué Portugal y Lisboa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portugal ofrece la combinación perfecta de estilo de vida, potencial de inversión y acceso europeo. 
            Descubre por qué inversionistas internacionales eligen Portugal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl shadow-elegant overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {lisbonImages.map((image, index) => <CarouselItem key={index}>
                    <AspectRatio ratio={16 / 9}>
                      <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover" />
                    </AspectRatio>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
            <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none"></div>
          </div>
          
          <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 shadow-elegant">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Lisboa: Estrella Emergente de Europa
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Patrimonio UNESCO con arquitectura impresionante</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Hub tecnológico creciente atrayendo empresas globales</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Excelente infraestructura y conectividad</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Escena cultural vibrante y estilo de vida</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">45%</div>
                <div className="text-xs text-muted-foreground">Crecimiento (5 años)</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">€4.2B</div>
                <div className="text-xs text-muted-foreground">Inversión (2023)</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">85%</div>
                <div className="text-xs text-muted-foreground">Interés Int'l</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">12%</div>
                <div className="text-xs text-muted-foreground">Retornos Anuales</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chilean Investment Section */}
        <div className="mt-20 bg-card rounded-3xl p-8 lg:p-12 shadow-elegant border border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">🇨🇱 Chilenos Invirtiendo en Europa</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              En los últimos años, más chilenos buscan diversificar en Europa, 
              especialmente en Portugal por su estabilidad y potencial de crecimiento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Aumento inversión chilena</div>
              <div className="text-xs text-muted-foreground mt-1">2019-2024</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">€150M</div>
              <div className="text-sm text-muted-foreground">Inversión chilena total</div>
              <div className="text-xs text-muted-foreground mt-1">Portugal 2023</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Golden Visa</div>
              <div className="text-sm text-muted-foreground">Programa más popular</div>
              <div className="text-xs text-muted-foreground mt-1">Entre chilenos</div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-subtle rounded-2xl">
            <p className="text-center text-muted-foreground">
              <strong>¿Por qué eligen Portugal?</strong> Chile y Portugal comparten valores: 
              estabilidad, democracia fuerte, y oportunidades de crecimiento sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyPortugalSection;