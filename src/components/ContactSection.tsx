import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import apartmentInterior from "@/assets/lisbon-apartment-interior.jpg";
const ContactSection = () => {
  return <section className="py-20 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{
      backgroundImage: `url(${apartmentInterior})`
    }}></div>
      
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Hablemos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">¿Listo para explorar oportunidades de inversión en Portugal?
 Elige cómo te gustaría conectar y comencemos a construir tu estrategia.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                Envíame un Mensaje
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
          <div className="space-y-8">
            <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Agendar Consultoría</h3>
                    <p className="text-muted-foreground">Reserva una videollamada de 30 minutos</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Obtén consejos personalizados e insights del mercado en una sesión dedicada.
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  Reservar Llamada de Consultoría
                </Button>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    benjamin.valdivia@seedrealestate.pt
                  </p>
                  <Button variant="ghost" size="sm">Contactar</Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Teléfono</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    +351 XXX XXX XXX
                  </p>
                  <Button variant="ghost" size="sm">Llamar Ahora</Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-subtle rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Qué Esperar
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Análisis de mercado personalizado y recomendaciones</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Portafolio de propiedades adaptado a tus objetivos</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Soporte integral y guía completa</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Asociación continua para futuras oportunidades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;