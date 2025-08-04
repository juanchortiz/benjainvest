import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import apartmentInterior from "@/assets/lisbon-apartment-interior.jpg";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${apartmentInterior})` }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-40 right-10 w-16 h-16 bg-accent/15 rounded-full animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Let's Talk Real Estate in Portugal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore Portugal's investment opportunities? I'm here to guide you every step. 
            Choose how you'd like to connect and let's start building your strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="investmentGoal">Investment Goal</Label>
                <Input id="investmentGoal" placeholder="e.g., Primary residence, Investment property, Golden Visa" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your investment goals, timeline, and any specific questions you have..."
                  rows={4}
                />
              </div>
              
              <Button variant="premium" size="lg" className="w-full group">
                Send Message
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
                    <h3 className="text-xl font-semibold text-foreground">Schedule a Consultation</h3>
                    <p className="text-muted-foreground">Book a 30-minute video call</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Get personalized advice and market insights in a dedicated consultation session.
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  Book Consultation Call
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
                  <Button variant="ghost" size="sm">Contact</Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    +351 XXX XXX XXX
                  </p>
                  <Button variant="ghost" size="sm">Call Now</Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-subtle rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What to Expect
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Personalized market analysis and recommendations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Property portfolio tailored to your goals</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">End-to-end support and guidance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Ongoing partnership for future opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;