import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { openGoogleCalendarBooking } from "@/utils/googleCalendar";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  
  const navItems = [{
    label: t('nav.whyPortugal'),
    href: "#portugal"
  }, {
    label: t('nav.myExpertise'),
    href: "#expertise"
  }, {
    label: t('nav.imtSimulator'),
    href: "#imt"
  }, {
    label: t('nav.mortgageSimulator'),
    href: "#mortgage"
  }, {
    label: t('nav.contact'),
    href: "#contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src="/benjainvest-logo.svg" 
              alt="Benjainvest" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-base text-foreground/80 hover:text-foreground transition-colors duration-300">
                {item.label}
              </a>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <Button variant="premium" size="sm" className="group" onClick={openGoogleCalendarBooking}>
              <Calendar className="mr-2 h-4 w-4" />
              {t('nav.scheduleCall')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <a key={item.label} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-2" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>)}
              <div className="flex justify-center pt-2">
                <LanguageToggle />
              </div>
              <Button variant="premium" size="sm" className="mt-4 w-full" onClick={openGoogleCalendarBooking}>
                <Calendar className="mr-2 h-4 w-4" />
                {t('nav.scheduleCall')}
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;