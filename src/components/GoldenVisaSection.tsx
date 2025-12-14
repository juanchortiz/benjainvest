import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, 
  TrendingUp, 
  FileText, 
  CheckCircle2,
  Calendar,
  ArrowRight,
  Info
} from "lucide-react";
import { useTranslation } from "react-i18next";

const GoldenVisaSection = () => {
  const { t } = useTranslation();

  const newsItems = [
    {
      date: t('goldenVisa.news1.date'),
      title: t('goldenVisa.news1.title'),
      description: t('goldenVisa.news1.description')
    },
    {
      date: t('goldenVisa.news2.date'),
      title: t('goldenVisa.news2.title'),
      description: t('goldenVisa.news2.description')
    },
    {
      date: t('goldenVisa.news3.date'),
      title: t('goldenVisa.news3.title'),
      description: t('goldenVisa.news3.description')
    }
  ];

  const investmentOptions = [
    {
      icon: TrendingUp,
      title: t('goldenVisa.option1.title'),
      description: t('goldenVisa.option1.description'),
      amount: t('goldenVisa.option1.amount')
    },
    {
      icon: Building,
      title: t('goldenVisa.option2.title'),
      description: t('goldenVisa.option2.description'),
      amount: t('goldenVisa.option2.amount')
    },
    {
      icon: FileText,
      title: t('goldenVisa.option3.title'),
      description: t('goldenVisa.option3.description'),
      amount: t('goldenVisa.option3.amount')
    }
  ];

  return (
    <section id="golden-visa" className="py-20 bg-gradient-modern-left relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rotate-45 rounded-2xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/8 rounded-full"></div>
        <div className="absolute top-1/2 -right-16 w-32 h-32 bg-primary/6 rotate-12 rounded-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center shadow-elegant">
                <Building className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
              {t('goldenVisa.title')}
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              {t('goldenVisa.subtitle')}
            </p>
          </div>

          {/* Latest News Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
                {t('goldenVisa.latestNews')}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {newsItems.map((news, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-primary/70" />
                      <span className="text-sm text-muted-foreground font-medium">
                        {news.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {news.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {news.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Investment Options */}
          <div className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-8 text-center">
              {t('goldenVisa.investmentOptions')}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {investmentOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-premium rounded-xl flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground">
                            {option.title}
                          </h4>
                          <p className="text-sm font-semibold text-primary mt-1">
                            {option.amount}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {option.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Benjamin's Assistance Section */}
          <Card className="shadow-elegant border-border bg-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-premium rounded-xl flex items-center justify-center flex-shrink-0">
                  <Info className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t('goldenVisa.assistance.title')}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t('goldenVisa.assistance.description')}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {t('goldenVisa.assistance.point1')}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {t('goldenVisa.assistance.point2')}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {t('goldenVisa.assistance.point3')}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {t('goldenVisa.assistance.point4')}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-subtle rounded-2xl p-6">
                    <p className="text-foreground font-semibold text-center mb-4">
                      {t('goldenVisa.assistance.highlight')}
                    </p>
                    <div className="text-center">
                      <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 bg-gradient-premium text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                      >
                        {t('goldenVisa.assistance.cta')}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;
