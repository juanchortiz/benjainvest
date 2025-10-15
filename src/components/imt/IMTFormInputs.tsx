import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "react-i18next";
import type { IMTInput } from "@/utils/imtCalculator";

interface IMTFormInputsProps {
  formData: IMTInput;
  onChange: (field: keyof IMTInput, value: any) => void;
}

const IMTFormInputs = ({ formData, onChange }: IMTFormInputsProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">{t('imt.propertyData')}</h3>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="valorAquisicao">{t('imt.purchaseValue')}</Label>
            <Input
              id="valorAquisicao"
              type="number"
              min="0"
              step="1000"
              placeholder="300000"
              value={formData.valorAquisicao || ''}
              onChange={(e) => onChange('valorAquisicao', parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="valorPatrimonial">{t('imt.taxValue')}</Label>
            <Input
              id="valorPatrimonial"
              type="number"
              min="0"
              step="1000"
              placeholder="280000"
              value={formData.valorPatrimonial || ''}
              onChange={(e) => onChange('valorPatrimonial', parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="finalidade">{t('imt.purpose')}</Label>
          <Select
            value={formData.finalidade}
            onValueChange={(value) => onChange('finalidade', value)}
          >
            <SelectTrigger id="finalidade">
              <SelectValue placeholder={t('imt.selectPurpose')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="habitacaoPropriaPermanente">
                {t('imt.primaryResidence')}
              </SelectItem>
              <SelectItem value="habitacaoSecundaria">
                {t('imt.secondaryResidence')}
              </SelectItem>
              <SelectItem value="outros">
                {t('imt.other')}
              </SelectItem>
              <SelectItem value="predioRustico">
                {t('imt.rusticProperty')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="regiao">{t('imt.region')}</Label>
          <Select
            value={formData.regiao}
            onValueChange={(value) => onChange('regiao', value)}
          >
            <SelectTrigger id="regiao">
              <SelectValue placeholder={t('imt.selectRegion')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="continente">{t('imt.continent')}</SelectItem>
              <SelectItem value="madeira">{t('imt.madeira')}</SelectItem>
              <SelectItem value="acores">{t('imt.azores')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground">{t('imt.buyerData')}</h3>
        
        <div className="space-y-2">
          <Label htmlFor="idadeComprador">{t('imt.buyerAge')}</Label>
          <Input
            id="idadeComprador"
            type="number"
            min="18"
            max="100"
            placeholder="30"
            value={formData.idadeComprador || ''}
            onChange={(e) => onChange('idadeComprador', parseInt(e.target.value) || 0)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="primeiraHabitacao"
            checked={formData.primeiraHabitacao}
            onCheckedChange={(checked) => onChange('primeiraHabitacao', checked)}
          />
          <Label
            htmlFor="primeiraHabitacao"
            className="text-sm font-normal cursor-pointer"
          >
            {t('imt.firstHome')}
          </Label>
        </div>

        {formData.idadeComprador <= 35 && formData.primeiraHabitacao && (
          <div className="p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              ℹ️ {t('imt.youngRegimeNotice')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IMTFormInputs;

