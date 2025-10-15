import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Building, TrendingUp } from "lucide-react";
import lisbonSkyline from "@/assets/lisbon-skyline.jpg";
import { openGoogleCalendarBooking } from "@/utils/googleCalendar";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return <section className="relative min-h-screen bg-gradient-modern flex items-center justify-center overflow-hidden">
      
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Content - 2/3 width */}
          <div className="w-full lg:w-2/3 lg:pr-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                {t('hero.title')}
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>{t('hero.titleEnd')}
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" className="group shadow-elegant border border-white" onClick={openGoogleCalendarBooking}>
                {t('hero.scheduleFreeConsultation')}
                <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
              
            </div>
            
          </div>
          
          {/* Image - 1/3 width */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="relative">
              <img src="/lovable-uploads/benjamin-valdivia-latest.jpg" alt="Benjamín Valdivia - Agente Privado" className="w-full max-w-xs mx-auto lg:max-w-sm rounded-2xl shadow-elegant bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;