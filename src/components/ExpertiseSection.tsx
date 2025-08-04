import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, TrendingUp, Users, Award, Building2, Globe2 } from "lucide-react";

const ExpertiseSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "MBA from ISEG Lisbon",
      description: "Advanced business education from Europe's top business schools"
    },
    {
      icon: TrendingUp,
      title: "Banking & Investment",
      description: "Extensive experience in South American banking and European markets"
    },
    {
      icon: Users,
      title: "International Focus",
      description: "Specialized expertise serving high-net-worth international investors"
    },
    {
      icon: Award,
      title: "Strategic Advisory",
      description: "Your strategic partner for long-term wealth building"
    }
  ];

  const differentiators = [
    "Financial acumen from banking background",
    "Deep market intelligence and data analysis", 
    "Multilingual communication (Spanish, Portuguese, English)",
    "Comprehensive investment strategy development",
    "End-to-end transaction management",
    "Post-purchase support and portfolio optimization"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-accent/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-primary/10 rounded-full animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">Your Strategic Advisor</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Not Just Another Agent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I combine financial expertise, market intelligence, and personal guidance to deliver 
            results beyond traditional real estate services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              My Credentials & Experience
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
                <h3 className="text-2xl font-bold text-foreground">What Sets Me Apart</h3>
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
              <h4 className="text-xl font-semibold text-foreground">Global Perspective</h4>
              <p className="text-muted-foreground">
                Understanding international markets and cross-border investment strategies
              </p>
            </div>
            <div className="space-y-4">
              <TrendingUp className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-xl font-semibold text-foreground">Data-Driven Decisions</h4>
              <p className="text-muted-foreground">
                Leveraging financial analysis and market intelligence for optimal outcomes
              </p>
            </div>
            <div className="space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-xl font-semibold text-foreground">Personal Touch</h4>
              <p className="text-muted-foreground">
                Dedicated support throughout your entire investment journey and beyond
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;