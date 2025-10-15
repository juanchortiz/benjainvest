import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Modalidad, Indexacion, MortgageInput } from '@/utils/mortgageCalculator';
import { useTranslation } from 'react-i18next';
import mortgageRates from '@/data/mortgageRates.json';

interface MortgageFormInputsProps {
  input: MortgageInput;
  onInputChange: (field: keyof MortgageInput, value: any) => void;
}

const MortgageFormInputs: React.FC<MortgageFormInputsProps> = ({ input, onInputChange }) => {
  const { t } = useTranslation();
  
  // State for collapsible sections
  const [openSections, setOpenSections] = useState({
    propertyData: true,
    loanConditions: false,
    feesAndInsurance: false,
    buyerData: false
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNumberChange = (field: keyof MortgageInput, value: string) => {
    const numValue = parseFloat(value);
    onInputChange(field, isNaN(numValue) ? 0 : numValue);
  };

  return (
    <div className="space-y-6">
      {/* Datos del Inmueble */}
      <Collapsible open={openSections.propertyData} onOpenChange={() => toggleSection('propertyData')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-card rounded-lg border hover:bg-accent transition-colors">
          <h3 className="text-xl font-semibold text-foreground">{t('mortgage.propertyData')}</h3>
          {openSections.propertyData ? (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="valorImovel">{t('mortgage.propertyValue')}</Label>
              <Input
                id="valorImovel"
                type="number"
                value={input.valorImovel || ''}
                onChange={(e) => handleNumberChange('valorImovel', e.target.value)}
                placeholder="250000"
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="valorAvaliacao">{t('mortgage.appraisalValue')}</Label>
              <Input
                id="valorAvaliacao"
                type="number"
                value={input.valorAvaliacao || ''}
                onChange={(e) => handleNumberChange('valorAvaliacao', e.target.value)}
                placeholder={t('mortgage.optional')}
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="entrada">{t('mortgage.downPayment')}</Label>
              <Input
                id="entrada"
                type="number"
                value={input.entrada || ''}
                onChange={(e) => handleNumberChange('entrada', e.target.value)}
                placeholder="50000"
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prazoAnos">{t('mortgage.termYears')}</Label>
              <Input
                id="prazoAnos"
                type="number"
                value={input.prazoAnos || ''}
                onChange={(e) => handleNumberChange('prazoAnos', e.target.value)}
                placeholder="30"
                min="1"
                max="40"
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Condiciones del Crédito */}
      <Collapsible open={openSections.loanConditions} onOpenChange={() => toggleSection('loanConditions')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-card rounded-lg border hover:bg-accent transition-colors">
          <h3 className="text-xl font-semibold text-foreground">{t('mortgage.loanConditions')}</h3>
          {openSections.loanConditions ? (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="modalidade">{t('mortgage.rateType')}</Label>
              <Select
                value={input.modalidade}
                onValueChange={(value: Modalidad) => onInputChange('modalidade', value)}
              >
                <SelectTrigger id="modalidade">
                  <SelectValue placeholder={t('mortgage.selectRateType')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fija">{t('mortgage.fixed')}</SelectItem>
                  <SelectItem value="variable">{t('mortgage.variable')}</SelectItem>
                  <SelectItem value="mista">{t('mortgage.mixed')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {input.modalidade === 'fija' && (
              <div className="space-y-2">
                <Label htmlFor="taxaFija">{t('mortgage.fixedRate')}</Label>
                <Input
                  id="taxaFija"
                  type="number"
                  step="0.01"
                  value={input.taxaFija || ''}
                  onChange={(e) => handleNumberChange('taxaFija', e.target.value)}
                  placeholder="4.0"
                  min="0"
                />
              </div>
            )}

            {(input.modalidade === 'variable' || input.modalidade === 'mista') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="indexacao">{t('mortgage.indexation')}</Label>
                  <Select
                    value={input.indexacao || ''}
                    onValueChange={(value: Indexacion) => onInputChange('indexacao', value)}
                  >
                    <SelectTrigger id="indexacion">
                      <SelectValue placeholder={t('mortgage.selectIndexation')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Euribor3m">Euribor 3M ({mortgageRates.euribor['3m']}%)</SelectItem>
                      <SelectItem value="Euribor6m">Euribor 6M ({mortgageRates.euribor['6m']}%)</SelectItem>
                      <SelectItem value="Euribor12m">Euribor 12M ({mortgageRates.euribor['12m']}%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="spread">{t('mortgage.spread')}</Label>
                  <Input
                    id="spread"
                    type="number"
                    step="0.01"
                    value={input.spread || ''}
                    onChange={(e) => handleNumberChange('spread', e.target.value)}
                    placeholder="1.2"
                    min="0"
                  />
                </div>
              </>
            )}

            {input.modalidade === 'mista' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="taxaFija">{t('mortgage.initialFixedRate')}</Label>
                  <Input
                    id="taxaFija"
                    type="number"
                    step="0.01"
                    value={input.taxaFija || ''}
                    onChange={(e) => handleNumberChange('taxaFija', e.target.value)}
                    placeholder="3.5"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="anosFijos">{t('mortgage.fixedYears')}</Label>
                  <Input
                    id="anosFijos"
                    type="number"
                    value={input.anosFijos || ''}
                    onChange={(e) => handleNumberChange('anosFijos', e.target.value)}
                    placeholder="5"
                    min="1"
                    max={input.prazoAnos - 1}
                  />
                </div>
              </>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Comisiones y Seguros */}
      <Collapsible open={openSections.feesAndInsurance} onOpenChange={() => toggleSection('feesAndInsurance')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-card rounded-lg border hover:bg-accent transition-colors">
          <h3 className="text-xl font-semibold text-foreground">{t('mortgage.feesAndInsurance')}</h3>
          {openSections.feesAndInsurance ? (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="comissaoAbertura">{t('mortgage.openingCommission')}</Label>
              <Input
                id="comissaoAbertura"
                type="number"
                step="0.01"
                value={input.comissaoAbertura || ''}
                onChange={(e) => handleNumberChange('comissaoAbertura', e.target.value)}
                placeholder="0.5"
                min="0"
                max="2"
              />
              <p className="text-xs text-muted-foreground">{t('mortgage.percentageOfCapital')}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="segurosAnuais">{t('mortgage.annualInsurance')}</Label>
              <Input
                id="segurosAnuais"
                type="number"
                value={input.segurosAnuais || ''}
                onChange={(e) => handleNumberChange('segurosAnuais', e.target.value)}
                placeholder="500"
                min="0"
              />
              <p className="text-xs text-muted-foreground">{t('mortgage.lifeAndHome')}</p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Datos del Comprador */}
      <Collapsible open={openSections.buyerData} onOpenChange={() => toggleSection('buyerData')}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-card rounded-lg border hover:bg-accent transition-colors">
          <h3 className="text-xl font-semibold text-foreground">{t('mortgage.buyerData')}</h3>
          {openSections.buyerData ? (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="idadeProponente">{t('mortgage.buyerAge')}</Label>
              <Input
                id="idadeProponente"
                type="number"
                value={input.idadeProponente || ''}
                onChange={(e) => handleNumberChange('idadeProponente', e.target.value)}
                placeholder="30"
                min="18"
                max="75"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="primeiraHabitacao"
                checked={input.primeiraHabitacao}
                onCheckedChange={(checked) => onInputChange('primeiraHabitacao', checked)}
              />
              <Label htmlFor="primeiraHabitacao">{t('mortgage.firstHome')}</Label>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default MortgageFormInputs;

