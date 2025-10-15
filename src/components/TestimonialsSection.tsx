import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "María González",
      location: "Madrid, España",
      investment: "€450,000",
      property: "Apartamento en Chiado, Lisboa",
      image: "/maria.jpeg",
      quote: t('testimonials.mariaQuote'),
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      location: "Santiago de Chile, Chile", 
      investment: "€680,000",
      property: "Casa en Cascais",
      image: "/carlos.jpeg",
      quote: t('testimonials.carlosQuote'),
      rating: 5
    },
    {
      name: "Ana Silva",
      location: "São Paulo, Brasil",
      investment: "€320,000",
      property: "Apartamento en Príncipe Real, Lisboa",
      image: "/ana.jpeg",
      quote: t('testimonials.anaQuote'),
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* 1. Client Photo First */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* 2. Client Name and Location */}
                <div className="text-center mb-6">
                  <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  {/* Rating */}
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* 3. Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-8 text-center italic relative">
                  <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                  "{testimonial.quote}"
                </blockquote>

                {/* 4. Investment Details */}
                <div className="bg-gradient-subtle rounded-2xl p-6 text-center">
                  <h5 className="font-semibold text-foreground mb-3">
                    {t('testimonials.whatTheyBought')}
                  </h5>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-primary">
                      {testimonial.investment}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.property}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            {t('testimonials.cta')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-premium text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
          >
            {t('testimonials.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
