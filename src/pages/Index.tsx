import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyPortugalSection from "@/components/WhyPortugalSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SeedRealEstateSection from "@/components/SeedRealEstateSection";
import IMTSimulator from "@/components/IMTSimulator";
import MortgageSimulator from "@/components/MortgageSimulator";
import ContactSection from "@/components/ContactSection";
import StickyContactButton from "@/components/StickyContactButton";
import BVIcon from "@/components/BVIcon";
import { AIChatWidget } from "@/components/AIChatWidget";
const Index = () => {
  return <div className="min-h-screen">
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
        <section id="imt">
          <IMTSimulator />
        </section>
        <section id="mortgage">
          <MortgageSimulator />
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
              <div className="flex items-center justify-center md:justify-start mb-4 space-x-3">
                <BVIcon size={48} />
                <div className="flex flex-col">
                  <span className="font-recoleta text-xl font-semibold text-foreground">
                    Benjamin Valdivia
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Strategic Real Estate Agent
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Tu socio estratégico para inversión inmobiliaria en Portugal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><a href="mailto:benjamin@seedrealestate.pt" className="hover:text-primary transition-colors">benjamin@seedrealestate.pt</a></p>
                <p><a href="tel:+351937958969" className="hover:text-primary transition-colors">+351 937 958 969</a></p>
                <p>Lisboa, Portugal</p>
              </div>
            </div>
            
            
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Benjamín Valdivia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <StickyContactButton />
      {/* AIChatWidget removed per request; WhatsApp floater remains */}
    </div>;
};
export default Index;