import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, TrendingUp, Users, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const ExpertiseSection = () => {
  const { t } = useTranslation();
  
  const credentials = [{
    icon: GraduationCap,
    title: t('expertise.mbaTitle'),
    description: t('expertise.mbaDesc')
  }, {
    icon: TrendingUp,
    title: t('expertise.bankingTitle'),
    description: t('expertise.bankingDesc')
  }, {
    icon: Users,
    title: t('expertise.internationalTitle'),
    description: t('expertise.internationalDesc')
  }];
  
  return <section className="py-20 bg-background relative overflow-hidden">      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">{t('expertise.badge')}</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('expertise.title')}
          </h2>
          <p className="hidden md:block text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('expertise.description')}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center hidden md:block">{t('expertise.myExpertise')}</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {credentials.map((credential, index) => <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <credential.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {credential.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {credential.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>

        
      </div>
    </section>;
};
export default ExpertiseSection;