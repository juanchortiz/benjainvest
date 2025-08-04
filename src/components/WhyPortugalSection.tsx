import { Card, CardContent } from "@/components/ui/card";
import { Sun, Shield, Heart, TrendingUp, Globe, MapPin } from "lucide-react";
import lisbonBuilding from "@/assets/lisbon-luxury-building.jpg";

const WhyPortugalSection = () => {
  const benefits = [
    {
      icon: Sun,
      title: "Perfect Climate",
      description: "300+ days of sunshine annually with mild winters. Ideal year-round living.",
    },
    {
      icon: Shield,
      title: "Safety & Security", 
      description: "World's safest countries with low crime rates and political stability.",
    },
    {
      icon: Heart,
      title: "Quality of Life",
      description: "Rich culture, excellent healthcare, world-class cuisine, welcoming community.",
    },
    {
      icon: TrendingUp,
      title: "Market Growth",
      description: "Property values grew 45% in 5 years with continued strong demand.",
    },
    {
      icon: Globe,
      title: "EU Access",
      description: "Gateway to Europe with excellent connectivity and residency options.",
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Bridge between continents with Lisbon as a growing tech hub.",
    },
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Portugal & Lisbon?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portugal offers the perfect combination of lifestyle, investment potential, and European access. 
            Discover why international investors choose Portugal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border">
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
            </Card>
          ))}
        </div>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={lisbonBuilding}
              alt="Luxury buildings in Lisbon"
              className="w-full rounded-3xl shadow-floating animate-float-slow"
            />
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-30"></div>
          </div>
          
          <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 shadow-elegant">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Lisbon: Europe's Rising Star
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">UNESCO World Heritage with stunning architecture</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Growing tech hub attracting global companies</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Excellent infrastructure and connectivity</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Vibrant cultural scene and lifestyle</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">45%</div>
                <div className="text-xs text-muted-foreground">Growth (5 years)</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">€4.2B</div>
                <div className="text-xs text-muted-foreground">Investment (2023)</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">85%</div>
                <div className="text-xs text-muted-foreground">Int'l Interest</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">12%</div>
                <div className="text-xs text-muted-foreground">Annual Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPortugalSection;