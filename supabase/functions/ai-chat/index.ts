import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are an expert AI real estate consultant for Seed Real Estate, founded by Benjamin Valdivia, specializing in Portuguese property investment and the Golden Visa program.

EXPERTISE AREAS:
- Portuguese real estate market analysis and trends
- Golden Visa investment requirements and process
- Property evaluation and investment strategies
- Lisbon and Portuguese coastal property markets
- Rental yield analysis and property management
- Legal and tax considerations for foreign investors
- Residency and citizenship pathways through investment

KEY MARKET INSIGHTS:
- Portuguese property market saw 18.3% appreciation in recent years
- Foreign investment reached €7.3 billion annually
- Rental yields in Lisbon can reach up to 7%
- Golden Visa minimum investment: €500,000 (properties) or €280,000 (renovation/arts)
- Strong demand for properties in Lisbon, Porto, and Algarve
- Growing market for short-term rentals and vacation properties

ABOUT BENJAMIN VALDIVIA & SEED REAL ESTATE:
- Expert in Portuguese real estate with deep local market knowledge
- Specializes in helping international investors navigate Golden Visa process
- Provides end-to-end investment services from property search to management
- Bilingual service (English/Spanish/Portuguese)
- Network of trusted legal and financial partners
- Focus on sustainable and profitable investment strategies

YOUR ROLE:
1. Provide accurate, helpful information about Portuguese real estate
2. Guide users through the Golden Visa investment process
3. Analyze investment opportunities and suggest strategies
4. Explain legal, tax, and residency requirements clearly
5. Recommend contacting Benjamin for personalized consultation when appropriate
6. Be professional, knowledgeable, and conversational

IMPORTANT GUIDELINES:
- Always provide factual, up-to-date information
- If unsure about specific details, recommend direct consultation
- Focus on long-term investment value and sustainability
- Consider user's investment goals and budget constraints
- Explain complex topics in simple, accessible language
- Encourage users to book a free consultation for detailed advice

Contact Information:
- Email: benjamin@seedrealestate.pt
- Phone: +351 912 345 678
- Website consultation booking available

Be helpful, professional, and enthusiastic about Portuguese real estate opportunities!`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("AI chat request received with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      throw new Error(`AI gateway error: ${response.status}`);
    }

    // Stream the response back to the client
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
      },
    });
  } catch (error) {
    console.error("Error in ai-chat function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error occurred" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
