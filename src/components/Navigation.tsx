import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Por qué Portugal", href: "#portugal" },
    { label: "Mi Experiencia", href: "#expertise" },
    { label: "Seed Real Estate", href: "#seed" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-premium rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BV</span>
            </div>
            <div>
              <div className="font-bold text-foreground">Benjamín Valdivia</div>
              <div className="text-xs text-muted-foreground">Consultor Inmobiliario</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="premium" size="sm" className="group">
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Llamada
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="premium" size="sm" className="mt-4 w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Llamada
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;