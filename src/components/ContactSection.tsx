import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import apartmentInterior from "@/assets/lisbon-apartment-interior.jpg";
import { openGoogleCalendarBooking } from "@/utils/googleCalendar";
const ContactSection = () => {
  return <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{
      backgroundImage: `url(${apartmentInterior})`
    }}></div>
      
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">Hablemos</h2>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-2xl text-foreground flex items-center gap-2 md:gap-3">
                <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                Envíame un Mensaje
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" placeholder="Tu apellido" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu.email@ejemplo.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono (Opcional)</Label>
                <Input id="phone" type="tel" placeholder="+56 9 1234 5678" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="investmentGoal">Objetivo de Inversión</Label>
                <Input id="investmentGoal" placeholder="ej. Residencia principal, Propiedad de inversión, Golden Visa" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Cuéntame sobre tus objetivos de inversión, plazos y preguntas específicas..." rows={4} />
              </div>
              
              <Button variant="premium" size="lg" className="w-full group">
                Enviar Mensaje
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          {/* Quick Contact Options */}
          <div className="space-y-6 md:space-y-8">
            <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-premium rounded-2xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">Agendar Consultoría Gratis</h3>
                    <p className="text-muted-foreground">Reserva una videollamada de 30 minutos</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  Obtén consejos personalizados e insights del mercado en una sesión dedicada.
                </p>
                <Button variant="outline" size="lg" className="w-full" onClick={openGoogleCalendarBooking}>
                  Reservar Llamada de Consultoría Gratis
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground mb-4 break-all">
                    benjamin@seedrealestate.pt
                  </p>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <a href="mailto:benjamin@seedrealestate.pt">Contactar</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Teléfono</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    +351 937 958 969
                  </p>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <a href="tel:+351937958969">Llamar Ahora</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;