import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyPortugalSection from "@/components/WhyPortugalSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SeedRealEstateSection from "@/components/SeedRealEstateSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="portugal">
          <WhyPortugalSection />
        </section>
        <section id="expertise">
          <ExpertiseSection />
        </section>
        <section id="seed">
          <SeedRealEstateSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-10 h-10 bg-gradient-premium rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">BV</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Benjamin Valdivia</div>
                  <div className="text-xs text-muted-foreground">Real Estate Consultant</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Your strategic partner for real estate investment in Portugal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>benjamin.valdivia@seedrealestate.pt</p>
                <p>+351 XXX XXX XXX</p>
                <p>Lisbon, Portugal</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Seed Real Estate</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Leading real estate consultancy</p>
                <p>seedrealestate.pt</p>
                <p>Serving international clients</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Benjamin Valdivia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
