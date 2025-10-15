import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import MortgageFormInputs from './mortgage/MortgageFormInputs';
import MortgageResults from './mortgage/MortgageResults';
import { MortgageInput, MortgageOutput, calcularHipoteca } from '@/utils/mortgageCalculator';

const MortgageSimulator: React.FC = () => {
  const { t } = useTranslation();

  const [input, setInput] = useState<MortgageInput>({
    valorImovel: 250000,
    valorAvaliacao: 250000,
    entrada: 50000,
    prazoAnos: 30,
    modalidade: 'variable',
    indexacao: 'Euribor12m',
    spread: 1.2,
    comissaoAbertura: 0.5,
    segurosAnuais: 500,
    idadeProponente: 30,
    primeiraHabitacao: true,
  });

  const [result, setResult] = useState<MortgageOutput>({
    capitalFinanciado: 0,
    taxaNominalAnual: 0,
    prestacaoMensal: 0,
    custoTotalJuros: 0,
    MTIC: 0,
    TAEG: 0,
    cronogramaAmortizacao: [],
    validacao: {
      prazoValido: true,
      financiamentoMaximoValido: true,
      garantiaEstatalAplicavel: false,
    },
    explicacao: '',
  });

  useEffect(() => {
    const calculatedResult = calcularHipoteca(input);
    setResult(calculatedResult);
  }, [input]);

  const handleInputChange = (field: keyof MortgageInput, value: any) => {
    setInput(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="mortgage" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center shadow-elegant">
              <Calculator className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('mortgage.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('mortgage.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="calculator" className="text-lg py-3">{t('mortgage.calculator')}</TabsTrigger>
              <TabsTrigger value="results" className="text-lg py-3">{t('mortgage.results')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calculator">
              <Card className="shadow-elegant border-border">
                <CardContent className="p-6">
                  <MortgageFormInputs input={input} onInputChange={handleInputChange} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="results">
              <Card className="shadow-elegant border-border">
                <CardContent className="p-6">
                  <MortgageResults result={result} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Información adicional */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-soft border-border">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">{t('mortgage.whatIsMTIC')}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">{t('mortgage.mticDescription')}</p>
            </CardContent>
            </Card>

            <Card className="shadow-soft border-border">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">{t('mortgage.whatIsTAEG')}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">{t('mortgage.taegDescription')}</p>
            </CardContent>
            </Card>

            <Card className="shadow-soft border-border">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">{t('mortgage.stateGuarantee')}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">{t('mortgage.stateGuaranteeDescription')}</p>
            </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageSimulator;

