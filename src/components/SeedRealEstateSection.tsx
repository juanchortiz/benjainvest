import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, Users2, Zap, Target } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { useTranslation } from "react-i18next";

const SeedRealEstateSection = () => {
  const { t } = useTranslation();
  
  const advantages = [{
    icon: Database,
    title: t('seedRealEstate.exclusiveAccessTitle'),
    description: t('seedRealEstate.exclusiveAccessDesc')
  }, {
    icon: Users2,
    title: t('seedRealEstate.establishedNetwork'),
    description: t('seedRealEstate.establishedNetworkDesc')
  }, {
    icon: Zap,
    title: t('seedRealEstate.advancedResources'),
    description: t('seedRealEstate.advancedResourcesDesc')
  }];
  return <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('seedRealEstate.title')} <span className="bg-gradient-premium bg-clip-text text-transparent">{t('seedRealEstate.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('seedRealEstate.description')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="relative">
              <img src="/lisboncaste.jpg" alt="Castillo de São Jorge y vista de Lisboa" className="w-full h-80 object-cover rounded-2xl shadow-elegant" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                {t('seedRealEstate.competitiveAdvantages')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 hidden md:block">{t('seedRealEstate.advantagesDesc')}</p>
            </div>

            <div className="grid gap-4">
              {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return <Card key={index} className="p-4 border-border hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-premium rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {advantage.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SeedRealEstateSection;