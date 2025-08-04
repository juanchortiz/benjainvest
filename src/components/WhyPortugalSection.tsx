import { Card, CardContent } from "@/components/ui/card";
import { Sun, Shield, Heart, TrendingUp, Globe, MapPin } from "lucide-react";

const WhyPortugalSection = () => {
  const benefits = [
    {
      icon: Sun,
      title: "Perfect Climate",
      description: "300+ days of sunshine annually with mild winters and warm summers. The ideal climate for year-round living.",
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Ranked as one of the world's safest countries with low crime rates and political stability.",
    },
    {
      icon: Heart,
      title: "Quality of Life",
      description: "Rich culture, excellent healthcare, world-class cuisine, and a welcoming international community.",
    },
    {
      icon: TrendingUp,
      title: "Market Growth",
      description: "Property values in Lisbon have grown 45% in the last 5 years, with continued strong demand.",
    },
    {
      icon: Globe,
      title: "EU Access",
      description: "Gateway to Europe with excellent connectivity and residency options for international investors.",
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Bridge between Europe, Africa, and the Americas with Lisbon as a growing tech and business hub.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Portugal & Lisbon?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portugal offers the perfect combination of lifestyle, investment potential, and European access. 
            Discover why international investors are choosing Portugal as their preferred destination.
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
        
        <div className="mt-16 bg-gradient-subtle rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Lisbon: Europe's Rising Star
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Named UNESCO World Heritage site with stunning architecture</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Growing tech hub attracting international companies</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Excellent public transportation and infrastructure</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Vibrant cultural scene and nightlife</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">45%</div>
                <div className="text-sm text-muted-foreground">Property Value Growth (5 years)</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">€4.2B</div>
                <div className="text-sm text-muted-foreground">Foreign Investment (2023)</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">International Buyer Interest</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">12%</div>
                <div className="text-sm text-muted-foreground">Average Annual Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPortugalSection;