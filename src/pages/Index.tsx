import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyPortugalSection from "@/components/WhyPortugalSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesRoadmap from "@/components/ServicesRoadmap";
import GoldenVisaSection from "@/components/GoldenVisaSection";
import SeedRealEstateSection from "@/components/SeedRealEstateSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
        <section id="roadmap">
          <ServicesRoadmap />
        </section>
        <section id="golden-visa">
          <GoldenVisaSection />
        </section>
        <section id="seed">
          <SeedRealEstateSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="imt">
          <IMTSimulator />
        </section>
        <section id="mortgage">
          <MortgageSimulator />
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
                <p className="pt-2">
                  <a href="https://www.linkedin.com/in/benjamin-valdivia-barros-02b38b139/?originalSubdomain=pt" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="hover:text-primary transition-colors inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </p>
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