import { Card, CardContent } from "@/components/ui/card";
import { Check, Info, Building } from "lucide-react";
import lisbonLuxuryBuilding from "@/assets/lisbon-luxury-building.jpg";
import { useTranslation } from "react-i18next";

const GoldenVisaSection = () => {
  const { t } = useTranslation();
  return <section id="golden-visa" className="py-20 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
      backgroundImage: `url(${lisbonLuxuryBuilding})`
    }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center shadow-elegant">
                <Building className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('goldenVisa.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('goldenVisa.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Info */}
            <div className="space-y-8">
              <Card className="shadow-elegant border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Info className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">
                      {t('goldenVisa.importantChanges')}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {t('goldenVisa.mainText')} <strong className="text-foreground">{t('goldenVisa.realEstateNotValid')}</strong>{t('goldenVisa.realEstateNotValidEnd')}
                  </p>
                  
                  <div className="bg-gradient-subtle rounded-2xl p-6">
                    <p className="text-foreground font-semibold text-center">
                      {t('goldenVisa.alreadyApplied')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {t('goldenVisa.strategicGateway')}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('goldenVisa.strategicText')}
                    <strong className="text-primary"> {t('goldenVisa.newInvestmentMap')}</strong> {t('goldenVisa.diversifiedOpportunities')}
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* Right Column - Available Routes */}
            <div className="space-y-6">
              <Card className="shadow-elegant border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                    {t('goldenVisa.availableRoutes')}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t('goldenVisa.investmentFunds')}</h4>
                        <p className="text-sm text-muted-foreground">{t('goldenVisa.investmentFundsAmount')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t('goldenVisa.innovation')}</h4>
                        <p className="text-sm text-muted-foreground">{t('goldenVisa.innovationDesc')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t('goldenVisa.culture')}</h4>
                        <p className="text-sm text-muted-foreground">{t('goldenVisa.cultureAmount')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-xl hover:shadow-soft transition-all duration-300">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t('goldenVisa.jobCreation')}</h4>
                        <p className="text-sm text-muted-foreground">{t('goldenVisa.jobCreationAmount')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* CTA Card */}
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GoldenVisaSection;