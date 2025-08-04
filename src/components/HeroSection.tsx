import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Strategic Partner for 
                <span className="bg-gradient-premium bg-clip-text text-transparent"> Real Estate Investment</span> in Portugal
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm Benjamin Valdivia, your dedicated real estate consultant at Seed Real Estate. 
                With an MBA from ISEG Lisbon and extensive experience in South American banking and European investment analysis, 
                I help international clients identify and secure high-potential opportunities in Portugal's thriving market.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" className="group">
                Schedule a Consultation
                <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
              <Button variant="elegant" size="xl" className="group">
                Start Your Investment Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500M+</div>
                <div className="text-sm text-muted-foreground">Euros in Transactions</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Photo */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/ea3f0f29-7c82-4629-9d31-bae94e10f0e9.png"
                alt="Benjamin Valdivia - Real Estate Consultant"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;