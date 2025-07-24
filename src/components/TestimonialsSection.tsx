
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    position: "CTO, TechForward Inc.",
    content: "HumotionAI transformed our data processing capabilities. Their AI solutions don't just work—they understand our business context and adapt beautifully.",
    rating: 5,
    company: "TechForward"
  },
  {
    name: "Marcus Rodriguez",
    position: "VP Operations, GlobalLogistics",
    content: "The emotional intelligence built into their automation systems is remarkable. It's like having AI that actually cares about user experience.",
    rating: 5,
    company: "GlobalLogistics"
  },
  {
    name: "Dr. Emily Watson",
    position: "Director of Innovation, MedTech Solutions",
    content: "Their approach to AI implementation is refreshingly human-centered. The technology serves people, not the other way around.",
    rating: 5,
    company: "MedTech Solutions"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real businesses that have transformed their operations with our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-subtle"
            >
              <CardContent className="p-8">
                {/* Star Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
