
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Users,
    title: "Human-Centered",
    description: "Technology should enhance human potential, not replace it."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable business outcomes."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pioneering solutions that set industry standards."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">HumotionAI</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Founded on the belief that artificial intelligence should amplify human creativity and emotional intelligence, 
              we're a team of passionate technologists, designers, and strategists committed to building AI solutions 
              that understand both code and culture.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our approach combines cutting-edge AI technologies with deep human insights, ensuring that every solution 
              we create not only performs exceptionally but also resonates with the people who use it.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-black hover:bg-white hover:text-navy-900 font-semibold px-8 py-4"
            >
              <Link to="/about"><span className="gradient-text">OUR</span> STORY</Link>
             
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="tech-card border-white/20 bg-white/10">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl p-3 flex-shrink-0">
                    <value.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
