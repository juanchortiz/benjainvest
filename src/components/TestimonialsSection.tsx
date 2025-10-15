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
      image: "/client-maria.jpg",
      quote: t('testimonials.mariaQuote'),
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      location: "Barcelona, España", 
      investment: "€680,000",
      property: "Casa en Cascais",
      image: "/client-carlos.jpg",
      quote: t('testimonials.carlosQuote'),
      rating: 5
    },
    {
      name: "Ana Silva",
      location: "São Paulo, Brasil",
      investment: "€320,000",
      property: "Apartamento en Príncipe Real, Lisboa",
      image: "/client-ana.jpg",
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
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Quote className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-8 text-center italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm font-medium text-primary">
                        {t('testimonials.investment')}: {testimonial.investment}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.property}
                      </p>
                    </div>
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
