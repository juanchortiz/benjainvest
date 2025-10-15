import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MortgageOutput } from '@/utils/mortgageCalculator';
import { Calculator, TrendingUp, AlertCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface MortgageResultsProps {
  result: MortgageOutput;
}

const MortgageResults: React.FC<MortgageResultsProps> = ({ result }) => {
  const { t } = useTranslation();
  const [showAmortization, setShowAmortization] = useState(false);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-PT', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('pt-PT', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value);
  };

  if (result.capitalFinanciado === 0) {
    return (
      <Card className="shadow-elegant border-border">
        <CardContent className="p-6 text-center text-muted-foreground">
          <Calculator className="h-12 w-12 mx-auto mb-4 text-primary" />
          <p>{t('mortgage.enterValues')}</p>
        </CardContent>
      </Card>
    );
  }

  // Verificar validación
  if (!result.validacao.valid) {
    return (
      <Card className="shadow-elegant border-border bg-red-50">
        <CardHeader className="p-6 pb-4">
          <CardTitle className="text-xl font-bold text-red-600 flex items-center gap-2">
            <AlertCircle className="h-6 w-6" />
            {t('mortgage.validationError')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p className="text-red-700">{result.validacao.mensajeError}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Resumen Principal */}
      <Card className="shadow-elegant border-border bg-gradient-subtle">
        <CardHeader className="p-6 pb-4">
          <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            {t('mortgage.monthlyPayment')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="text-center py-4 bg-primary/5 rounded-lg mb-6">
            <p className="text-4xl font-bold text-primary">{formatCurrency(result.prestacaoMensal)}</p>
            <p className="text-sm text-muted-foreground mt-2">{t('mortgage.perMonth')}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-card rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">{t('mortgage.financedCapital')}</p>
              <p className="text-xl font-semibold text-foreground">{formatCurrency(result.capitalFinanciado)}</p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">{t('mortgage.interestRate')}</p>
              <p className="text-xl font-semibold text-foreground">{formatNumber(result.taxaNominalAnual)}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Costes Totales */}
      <Card className="shadow-soft border-border">
        <CardHeader className="p-6 pb-4">
          <CardTitle className="text-xl font-semibold text-foreground">{t('mortgage.totalCosts')}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{t('mortgage.totalInterest')}:</span>
            <span className="font-medium text-foreground">{formatCurrency(result.custoTotalJuros)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">MTIC:</span>
            <span className="font-medium text-foreground">{formatCurrency(result.MTIC)}</span>
          </div>
          <div className="flex justify-between border-t border-border pt-3">
            <span className="font-semibold text-foreground">TAEG:</span>
            <span className="text-xl font-bold text-primary">{formatNumber(result.TAEG)}%</span>
          </div>
        </CardContent>
      </Card>

      {/* Validaciones y Garantías */}
      <Card className="shadow-soft border-border">
        <CardHeader className="p-6 pb-4">
          <CardTitle className="text-xl font-semibold text-foreground">{t('mortgage.validations')}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3">
          <div className="flex items-center gap-2">
            {result.validacao.prazoValido ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500" />
            )}
            <span className={result.validacao.prazoValido ? 'text-green-700' : 'text-red-700'}>
              {t('mortgage.termValid')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {result.validacao.financiamentoMaximoValido ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500" />
            )}
            <span className={result.validacao.financiamentoMaximoValido ? 'text-green-700' : 'text-red-700'}>
              {t('mortgage.financingValid')}
            </span>
          </div>
          {result.validacao.garantiaEstatalAplicavel && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700 font-medium">
                ✅ {t('mortgage.stateGuaranteeEligible')}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Explicación */}
      <Card className="shadow-soft border-border bg-blue-50/50">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">{result.explicacao}</p>
          <p className="text-xs text-red-500 mt-4">{t('mortgage.disclaimer')}</p>
        </CardContent>
      </Card>

      {/* Tabla de Amortización */}
      <Card className="shadow-soft border-border">
        <CardHeader className="p-6 pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold text-foreground">{t('mortgage.amortizationSchedule')}</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAmortization(!showAmortization)}
            >
              {showAmortization ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              {showAmortization ? t('mortgage.hide') : t('mortgage.show')}
            </Button>
          </div>
        </CardHeader>
        {showAmortization && (
          <CardContent className="p-6 pt-0">
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted sticky top-0">
                  <tr>
                    <th className="p-2 text-left">{t('mortgage.month')}</th>
                    <th className="p-2 text-right">{t('mortgage.payment')}</th>
                    <th className="p-2 text-right">{t('mortgage.interest')}</th>
                    <th className="p-2 text-right">{t('mortgage.principal')}</th>
                    <th className="p-2 text-right">{t('mortgage.balance')}</th>
                  </tr>
                </thead>
                <tbody>
                  {result.cronogramaAmortizacao.map((entry, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="p-2">{entry.mes}</td>
                      <td className="p-2 text-right">{formatCurrency(entry.cuota)}</td>
                      <td className="p-2 text-right">{formatCurrency(entry.juros)}</td>
                      <td className="p-2 text-right">{formatCurrency(entry.capitalAmortizado)}</td>
                      <td className="p-2 text-right">{formatCurrency(entry.saldo)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default MortgageResults;

