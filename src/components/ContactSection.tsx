import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Mail, Phone, MessageSquare, ArrowRight, Loader2 } from "lucide-react";
import apartmentInterior from "@/assets/lisbon-apartment-interior.jpg";
import { openGoogleCalendarBooking } from "@/utils/googleCalendar";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { useTranslation } from "react-i18next";

const getContactFormSchema = (t: any) => z.object({
  firstName: z.string().trim().min(1, t('contact.firstNameRequired')).max(50, t('contact.firstNameTooLong')),
  lastName: z.string().trim().min(1, t('contact.lastNameRequired')).max(50, t('contact.lastNameTooLong')),
  email: z.string().trim().email(t('contact.invalidEmail')).max(255, t('contact.emailTooLong')),
  phone: z.string().trim().max(20, t('contact.phoneTooLong')),
  investmentGoal: z.string().trim().min(1, t('contact.investmentGoalRequired')).max(200, t('contact.investmentGoalTooLong')),
  message: z.string().trim().min(1, t('contact.messageRequired')).max(2000, t('contact.messageTooLong')),
});

type ContactFormData = z.infer<ReturnType<typeof getContactFormSchema>>;

const ContactSection = () => {
  const { t } = useTranslation();
  console.log("🔍 ContactSection component rendered");
  
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentGoal: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("🚀 handleSubmit called!");
    console.log("📋 Event:", e);
    e.preventDefault();
    
    console.log("📝 Current form data:", formData);
    console.log("🔍 Validating form data...");
    
    try {
      const contactFormSchema = getContactFormSchema(t);
      const validatedData = contactFormSchema.parse(formData);
      console.log("✅ Validation passed:", validatedData);
    } catch (error) {
      console.error("❌ Validation failed:", error);
      if (error instanceof z.ZodError) {
        console.error("Validation errors:", error.errors);
        toast({
          title: t('contact.validationError'),
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);
    console.log("========== FORM SUBMISSION START ==========");
    console.log("📋 Supabase config:");
    console.log("   - URL:", import.meta.env.VITE_SUPABASE_URL);
    console.log("   - Function endpoint:", `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`);
    console.log("📝 Sanitized form data:", { 
      ...formData, 
      email: formData.email.substring(0, 3) + "***",
      phone: formData.phone ? formData.phone.substring(0, 3) + "***" : "(empty)"
    });

    try {
      console.log('📤 Sending contact data to serverless API...');
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Non-2xx response');
      toast({ title: t('contact.messageSent'), description: t('contact.messageSuccess') });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', investmentGoal: '', message: '' });
    } catch (error: any) {
      console.error('Error sending via serverless API', error);
      toast({ title: t('contact.messageError'), description: t('contact.messageErrorDesc'), variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section className="py-12 md:py-20 bg-gradient-modern-left relative overflow-hidden">
      {/* Removed background image overlay to show full gradient color */}
      
      <div className="container mx-auto px-6 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">{t('contact.title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <Card className="shadow-elegant border-border overflow-hidden">
            <CardHeader className="p-6 md:p-6">
              <CardTitle className="text-lg md:text-2xl text-foreground flex items-center gap-2 md:gap-3">
                <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                {t('contact.sendMessage')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 p-6 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('contact.firstName')}</Label>
                    <Input 
                      id="firstName" 
                      placeholder={t('contact.firstNamePlaceholder')}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('contact.lastName')}</Label>
                    <Input 
                      id="lastName" 
                      placeholder={t('contact.lastNamePlaceholder')}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t('contact.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.phone')}</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder={t('contact.phonePlaceholder')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="investmentGoal">{t('contact.investmentGoal')}</Label>
                  <Input 
                    id="investmentGoal" 
                    placeholder={t('contact.investmentGoalPlaceholder')}
                    value={formData.investmentGoal}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.messagePlaceholder')} 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="premium" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    console.log("🖱️ Button clicked!");
                    console.log("Button event:", e);
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      {t('contact.sendInquiry')}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
                
                {/* Test serverless API */}
                <Button type="button" variant="outline" size="sm" className="w-full mt-4" onClick={async () => {
                  try {
                    const res = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ firstName: 'Test', lastName: 'User', email: 'test@example.com', phone: '+1234567890', investmentGoal: 'Test', message: 'Testing serverless email route' }) });
                    if (res.ok) toast({ title: t('contact.testEmailSent'), description: t('contact.testEmailSuccess') });
                    else throw new Error('Test failed');
                  } catch (err) {
                    toast({ title: t('contact.testFailed'), description: t('contact.testFailedDesc'), variant: 'destructive' });
                  }
                }}>
                  {t('contact.testEmailFunction')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 md:space-y-8">
            <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-premium rounded-2xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">{t('contact.scheduleFreeConsultation')}</h3>
                    <p className="text-muted-foreground">{t('contact.scheduleDesc')}</p>
                  </div>
                </div>
                <p className="hidden md:block text-sm md:text-base text-muted-foreground mb-6">
                  {t('contact.personalizedAdvice')}
                </p>
                <Button variant="outline" size="lg" className="w-full" onClick={openGoogleCalendarBooking}>
                  {t('contact.bookFreeCall')}
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('contact.emailTitle')}</h4>
                  <p className="text-sm text-muted-foreground mb-4 break-all">
                    {t('contact.emailAddress')}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <a href="mailto:benjamin@seedrealestate.pt">{t('contact.sendEmail')}</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('contact.phoneTitle')}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('contact.phoneNumber')}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <a href="tel:+351937958969">{t('contact.callNow')}</a>
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
