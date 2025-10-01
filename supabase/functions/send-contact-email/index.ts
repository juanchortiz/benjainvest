import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentGoal: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("=== Contact Email Function Called ===");
  console.log("Request method:", req.method);
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Parsing request body...");
    const formData: ContactFormData = await req.json();
    console.log("Form data received:", { ...formData, email: "***", phone: "***" });
    
    const { firstName, lastName, email, phone, investmentGoal, message } = formData;
    
    // Validate Resend API key
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }
    console.log("Resend API key found, length:", resendKey.length);

    // Email to the business owners
    console.log("Sending business notification email...");
    const businessEmail = await resend.emails.send({
      from: "Seed Real Estate <onboarding@resend.dev>",
      to: ["benjamin@seedrealestate.pt", "jaortiz.cancino@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Contact Information:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #666;">Name:</td>
                <td style="padding: 8px;">${firstName} ${lastName}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 8px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 8px;">${phone}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #666;">Investment Goal:</td>
                <td style="padding: 8px;">${investmentGoal}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 3px solid #D4AF37;">
              ${message}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
            This email was sent from your Seed Real Estate website contact form.
          </div>
        </div>
      `,
    });
    
    if (businessEmail.error) {
      console.error("Business email error:", businessEmail.error);
      throw new Error(`Failed to send business email: ${businessEmail.error.message}`);
    }
    console.log("Business email sent successfully:", businessEmail.data?.id);

    // Confirmation email to the client
    console.log("Sending client confirmation email...");
    const clientEmail = await resend.emails.send({
      from: "Benjamin Valdivia - Seed Real Estate <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message - Seed Real Estate",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            Thank you for contacting Seed Real Estate
          </h2>
          
          <p style="color: #333; line-height: 1.6; margin: 20px 0;">
            Dear ${firstName},
          </p>

          <p style="color: #333; line-height: 1.6; margin: 20px 0;">
            Thank you for your interest in Portuguese real estate investment. We have received your message 
            and will get back to you as soon as possible, typically within 24 hours.
          </p>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Investment Goal:</h3>
            <p style="color: #666; margin: 10px 0;">${investmentGoal}</p>
          </div>

          <p style="color: #333; line-height: 1.6; margin: 20px 0;">
            In the meantime, feel free to explore our website or use our AI assistant to get instant 
            answers to your questions about Portuguese real estate and the Golden Visa program.
          </p>

          <div style="margin: 30px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <p style="color: #666; margin: 5px 0;"><strong>Email:</strong> benjamin@seedrealestate.pt</p>
            <p style="color: #666; margin: 5px 0;"><strong>Phone:</strong> +351 912 345 678</p>
          </div>

          <p style="color: #333; line-height: 1.6; margin: 20px 0;">
            Best regards,<br>
            <strong>Benjamin Valdivia</strong><br>
            Founder, Seed Real Estate
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
            Seed Real Estate - Your trusted partner for Portuguese property investment
          </div>
        </div>
      `,
    });
    
    if (clientEmail.error) {
      console.error("Client email error:", clientEmail.error);
      throw new Error(`Failed to send client email: ${clientEmail.error.message}`);
    }
    console.log("Client email sent successfully:", clientEmail.data?.id);

    console.log("=== All emails sent successfully ===");

    return new Response(
      JSON.stringify({ 
        success: true, 
        businessEmailId: businessEmail.data?.id,
        clientEmailId: clientEmail.data?.id
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
