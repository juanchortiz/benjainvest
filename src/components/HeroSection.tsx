import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Building, TrendingUp } from "lucide-react";
import lisbonSkyline from "@/assets/lisbon-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${lisbonSkyline})` }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-accent/15 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-32 w-12 h-12 bg-primary/25 rounded-full animate-float-slow"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Your Strategic Partner for 
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"> Real Estate Investment</span> in Portugal
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                I'm Benjamin Valdivia, your dedicated consultant at Seed Real Estate. 
                With an MBA from ISEG Lisbon and banking expertise, I help international clients 
                secure high-potential opportunities in Portugal's thriving market.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" className="group shadow-floating">
                Schedule a Consultation
                <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
              <Button variant="elegant" size="xl" className="group bg-accent text-accent-foreground hover:bg-accent/90">
                Start Your Investment Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">€500M+</div>
                <div className="text-sm text-primary-foreground/80">Transactions</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">25+</div>
                <div className="text-sm text-primary-foreground/80">Countries</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-primary-foreground/80">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Photo with floating effect */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src="/lovable-uploads/ea3f0f29-7c82-4629-9d31-bae94e10f0e9.png"
                alt="Benjamin Valdivia - Real Estate Consultant"
                className="w-full max-w-md mx-auto rounded-2xl shadow-floating"
              />
            </div>
            
            {/* Property showcase floating cards */}
            <div className="absolute -top-8 -right-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-floating animate-float-slow">
              <div className="flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Luxury Properties</div>
                  <div className="text-xs text-muted-foreground">Prime Locations</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-floating animate-float">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-accent" />
                <div>
                  <div className="text-sm font-semibold text-foreground">45% Growth</div>
                  <div className="text-xs text-muted-foreground">Last 5 Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;