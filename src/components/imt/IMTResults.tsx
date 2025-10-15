import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import type { IMTOutput } from "@/utils/imtCalculator";
import { CheckCircle2, Info } from "lucide-react";

interface IMTResultsProps {
  result: IMTOutput;
}

const IMTResults = ({ result }: IMTResultsProps) => {
  const { t } = useTranslation();

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

  const isExempt = result.total === 0;

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card className={`border-2 ${isExempt ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-primary'}`}>
        <CardContent className="p-6">
          <div className="text-center">
            {isExempt ? (
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {t('imt.exempt')}
                </h3>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-1">{t('imt.totalTax')}</p>
                <h3 className="text-4xl font-bold text-foreground">
                  {formatCurrency(result.total)}
                </h3>
              </>
            )}
            <p className="text-sm text-muted-foreground mt-2">{result.regime}</p>
          </div>
        </CardContent>
      </Card>

      {/* Breakdown */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-foreground">{t('imt.breakdown')}</h4>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
            <span className="text-sm text-muted-foreground">{t('imt.taxableBase')}</span>
            <span className="font-semibold text-foreground">{formatCurrency(result.baseTributavel)}</span>
          </div>

          {result.detalhes?.escalao && (
            <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">{t('imt.bracket')}</span>
              <span className="text-sm text-foreground">{result.detalhes.escalao}</span>
            </div>
          )}

          {result.detalhes?.taxa !== undefined && (
            <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">{t('imt.rate')}</span>
              <span className="font-semibold text-foreground">{formatNumber(result.detalhes.taxa)}%</span>
            </div>
          )}

          {result.imtBruto > 0 && (
            <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">{t('imt.grossIMT')}</span>
              <span className="font-semibold text-foreground">{formatCurrency(result.imtBruto)}</span>
            </div>
          )}

          {result.parcelaAbater > 0 && (
            <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">{t('imt.deduction')}</span>
              <span className="font-semibold text-red-600 dark:text-red-400">
                - {formatCurrency(result.parcelaAbater)}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
            <span className="text-sm font-semibold text-foreground">{t('imt.finalIMT')}</span>
            <span className="font-bold text-foreground">{formatCurrency(result.imtFinal)}</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
            <span className="text-sm text-muted-foreground">{t('imt.stampDuty')}</span>
            <span className="font-semibold text-foreground">{formatCurrency(result.impostoSelo)}</span>
          </div>
        </div>
      </div>

      {/* Message */}
      {result.mensagem && (
        <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex gap-3">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700 dark:text-blue-300">{result.mensagem}</p>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="p-3 bg-muted/50 rounded-lg">
        <p className="text-xs text-muted-foreground">
          {t('imt.disclaimer')}
        </p>
      </div>
    </div>
  );
};

export default IMTResults;

