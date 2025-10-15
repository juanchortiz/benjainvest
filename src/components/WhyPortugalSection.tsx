import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Shield, Heart, TrendingUp, Globe, MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useTranslation } from "react-i18next";
import { useCountUp } from "@/hooks/use-count-up";

const WhyPortugalSection = () => {
  const { t } = useTranslation();
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [paused, setPaused] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Rolling number animations for KPIs
  const priceIndex = useCountUp({ end: 17.2, duration: 2000, decimals: 1, suffix: '%' });
  const volumeTraded = useCountUp({ end: 30.4, duration: 2000, decimals: 1, prefix: '+', suffix: '%' });
  const totalVolume = useCountUp({ end: 33.5, duration: 2000, decimals: 1, prefix: '€', suffix: 'B' });
  
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
    src: "/lovable-uploads/benjamin-valdivia-latest.jpg",
    alt: "Vista panorámica de Lisboa al atardecer con arquitectura tradicional"
  }, {
    src: "/lovable-uploads/benjamin-valdivia-new.jpg",
    alt: "Vista aérea de Lisboa con el castillo de São Jorge y el río Tajo"
  }, {
    src: "/lovable-uploads/benjamin-valdivia-professional.jpg",
    alt: "Vista panorámica diurna de Lisboa con iglesia clásica y edificios coloridos"
  }];
  
  React.useEffect(() => {
    if (!api) return;
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
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
    title: t('whyPortugal.perfectClimate'),
    description: t('whyPortugal.perfectClimateDesc')
  }, {
    icon: Shield,
    title: t('whyPortugal.safety'),
    description: t('whyPortugal.safetyDesc')
  }, {
    icon: Globe,
    title: t('whyPortugal.euAccess'),
    description: t('whyPortugal.euAccessDesc')
  }];
  return <section className="py-20 bg-card relative overflow-hidden">      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('whyPortugal.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('whyPortugal.description')}
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
            <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {lisbonImages.map((image, index) => <CarouselItem key={index}>
                    <AspectRatio ratio={16 / 9}>
                      <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover" />
                    </AspectRatio>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white" />
              <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white" />
            </Carousel>
            
            {/* Indicadores de puntos */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === current 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Contador de imágenes */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
              {current + 1} / {count}
            </div>
            
            <div className="absolute inset-0 bg-gradient-hero opacity-20 pointer-events-none"></div>
          </div>
          
          <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 shadow-elegant">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              {t('whyPortugal.lisbonStar')}
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{t('whyPortugal.unescoHeritage')}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{t('whyPortugal.techHub')}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{t('whyPortugal.infrastructure')}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{t('whyPortugal.culturalScene')}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div ref={priceIndex.elementRef} className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">{priceIndex.displayValue}</div>
                <div className="text-xs text-muted-foreground">{t('whyPortugal.priceIndex')}</div>
              </div>
              <div ref={volumeTraded.elementRef} className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">{volumeTraded.displayValue}</div>
                <div className="text-xs text-muted-foreground">{t('whyPortugal.volumeTraded')}</div>
              </div>
              <div ref={totalVolume.elementRef} className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">{totalVolume.displayValue}</div>
                <div className="text-xs text-muted-foreground">{t('whyPortugal.totalVolume')}</div>
              </div>
            </div>
            <a 
              href="https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_destaques&DESTAQUESdest_boui=706274657&DESTAQUESmodo=2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors mt-4 inline-block"
            >
              {t('whyPortugal.source')}
            </a>
          </div>
        </div>

        {/* Chilean Investment Section */}
        
      </div>
    </section>;
};
export default WhyPortugalSection;