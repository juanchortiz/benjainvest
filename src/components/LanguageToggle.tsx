import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
    >
      <span className="text-lg">
        {i18n.language === 'es' ? '🇺🇸' : '🇪🇸'}
      </span>
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </Button>
  );
};

export default LanguageToggle;

