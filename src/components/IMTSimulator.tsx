import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";
import { useTranslation } from "react-i18next";
import IMTFormInputs from "./imt/IMTFormInputs";
import IMTResults from "./imt/IMTResults";
import { calcularIMT, type IMTInput, type IMTOutput } from "@/utils/imtCalculator";

const IMTSimulator = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<IMTInput>({
    valorAquisicao: 0,
    valorPatrimonial: 0,
    finalidade: 'habitacaoPropriaPermanente',
    regiao: 'continente',
    idadeComprador: 0,
    primeiraHabitacao: false,
  });

  const [result, setResult] = useState<IMTOutput>({
    baseTributavel: 0,
    regime: 'N/A',
    imtBruto: 0,
    parcelaAbater: 0,
    imtFinal: 0,
    impostoSelo: 0,
    total: 0,
    mensagem: t('imt.enterValues'),
  });

  const handleInputChange = (field: keyof IMTInput, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Recalculate on any form change
  useEffect(() => {
    try {
      const calculatedResult = calcularIMT(formData);
      setResult(calculatedResult);
    } catch (error) {
      console.error('Error calculating IMT:', error);
    }
  }, [formData]);

  return (
    <section id="imt-simulator" className="py-20 bg-gradient-modern relative overflow-hidden">
      {/* Decorative geometric accents for visual interest */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Removed top-left circular gradient */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-3xl border border-accent/30 rotate-12"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center shadow-elegant">
              <Calculator className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
            {t('imt.title')}
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-center">
            {t('imt.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-2 rounded-2xl">
              <TabsTrigger 
                value="calculator" 
                className="text-xl py-4 rounded-xl font-recoleta data-[state=active]:bg-gradient-premium data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
              >
                {t('imt.calculator')}
              </TabsTrigger>
              <TabsTrigger 
                value="results" 
                className="text-xl py-4 rounded-xl font-recoleta data-[state=active]:bg-gradient-premium data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
              >
                {t('imt.results')}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="calculator">
              <Card className="shadow-elegant border-border">
                <CardContent className="p-6">
                  <IMTFormInputs formData={formData} onChange={handleInputChange} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="results">
              <Card className="shadow-elegant border-border">
                <CardContent className="p-6">
                  <IMTResults result={result} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Information Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-soft">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                {t('imt.whatIsIMT')}
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground text-center">
                <p>{t('imt.imtDescription')}</p>
                <div className="pt-3 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">{t('imt.youngRegime')}</h4>
                  <p>{t('imt.youngRegimeDescription')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IMTSimulator;

