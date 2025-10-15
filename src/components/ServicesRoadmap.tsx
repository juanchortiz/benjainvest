import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  FileText, 
  Home, 
  Eye, 
  Handshake, 
  FileCheck, 
  Settings, 
  TrendingUp, 
  Calculator,
  ArrowRight
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesRoadmap = () => {
  const { t } = useTranslation();

  const roadmapSteps = [
    {
      icon: Search,
      title: t('roadmap.step1.title'),
      description: t('roadmap.step1.description'),
      details: t('roadmap.step1.details')
    },
    {
      icon: FileText,
      title: t('roadmap.step2.title'),
      description: t('roadmap.step2.description'),
      details: t('roadmap.step2.details')
    },
    {
      icon: Home,
      title: t('roadmap.step3.title'),
      description: t('roadmap.step3.description'),
      details: t('roadmap.step3.details')
    },
    {
      icon: Eye,
      title: t('roadmap.step4.title'),
      description: t('roadmap.step4.description'),
      details: t('roadmap.step4.details')
    },
    {
      icon: Handshake,
      title: t('roadmap.step5.title'),
      description: t('roadmap.step5.description'),
      details: t('roadmap.step5.details')
    },
    {
      icon: FileCheck,
      title: t('roadmap.step6.title'),
      description: t('roadmap.step6.description'),
      details: t('roadmap.step6.details')
    },
    {
      icon: Settings,
      title: t('roadmap.step7.title'),
      description: t('roadmap.step7.description'),
      details: t('roadmap.step7.details')
    },
    {
      icon: TrendingUp,
      title: t('roadmap.step8.title'),
      description: t('roadmap.step8.description'),
      details: t('roadmap.step8.details')
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-modern-left relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Triangle - Top Right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rotate-45 rounded-2xl"></div>
        
        {/* Medium Circle - Bottom Left */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/8 rounded-full"></div>
        
        {/* Small Rectangle - Center Right */}
        <div className="absolute top-1/2 -right-16 w-32 h-32 bg-primary/6 rotate-12 rounded-xl"></div>
        
        {/* Hexagon - Top Center */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-primary/7 rotate-45 rounded-lg"></div>
        
        {/* Small Triangle - Bottom Right */}
        <div className="absolute bottom-16 right-20 w-20 h-20 bg-primary/5 rotate-45 rounded-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
            {t('roadmap.title')}
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t('roadmap.subtitle')}
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line - Removed the dark line */}
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {roadmapSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;
                const shouldShowNumberAbove = [0, 2, 4, 6].includes(index); // Steps 1, 3, 5, 7 (0-indexed)
                
                return (
                  <div key={index} className="relative">
                    {/* Timeline Node - Only for steps 2, 4, 6, 8 */}
                    {!shouldShowNumberAbove && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Step Content */}
                    <Card className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-white ${isEven ? 'mt-0' : 'mt-32'}`}>
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          {/* Number above card for steps 1, 3, 5, 7 */}
                          {shouldShowNumberAbove && (
                            <div className="flex justify-center mb-4">
                              <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                              </div>
                            </div>
                          )}
                          
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {step.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          
                          {/* Removed the details section */}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {roadmapSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Step Number and Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-premium rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="text-xs text-primary/80 bg-primary/10 rounded-lg p-3">
                        {step.details}
                      </div>
                    </div>
                    
                    {/* Arrow for mobile */}
                    {index < roadmapSteps.length - 1 && (
                      <div className="flex-shrink-0 pt-6">
                        <ArrowRight className="h-5 w-5 text-primary/50" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-primary-foreground/80 mb-6">
            {t('roadmap.cta')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-premium text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
          >
            {t('roadmap.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesRoadmap;
