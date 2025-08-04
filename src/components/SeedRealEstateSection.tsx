import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, Users2, Zap, Shield, Target } from "lucide-react";

const SeedRealEstateSection = () => {
  const advantages = [
    {
      icon: Database,
      title: "Cutting-Edge Technology",
      description: "Advanced CRM systems, market analytics, and proprietary tools for maximum efficiency and insights."
    },
    {
      icon: Users2,
      title: "Expert Team",
      description: "Collaborative network of specialists including legal, financial, and technical experts."
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Streamlined processes and established relationships for rapid transaction completion."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Comprehensive due diligence and risk assessment protocols for every investment."
    },
    {
      icon: Target,
      title: "Market Intelligence",
      description: "Deep local knowledge and real-time market data to identify the best opportunities."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Backed by <span className="bg-gradient-premium bg-clip-text text-transparent">Seed Real Estate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm proud to represent Seed Real Estate, Portugal's leading real estate consultancy. 
            Together, we provide unmatched expertise, technology, and market access.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Seed Real Estate?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Seed Real Estate combines decades of market experience with innovative technology 
                and a client-first approach. As your consultant within this powerhouse organization, 
                I have access to exclusive listings, market intelligence, and resources that 
                independent agents simply cannot match.
              </p>
              
              <Button variant="outline" size="lg" className="group">
                Visit Seed Real Estate
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {advantages.slice(0, 3).map((advantage, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {advantages.slice(3).map((advantage, index) => (
            <Card key={index + 3} className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center mb-6">
                  <advantage.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {advantage.title}
                </h4>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elegant border border-border text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            The Seed Advantage in Numbers
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">€2B+</div>
              <div className="text-muted-foreground">Total Transactions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Expert Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedRealEstateSection;