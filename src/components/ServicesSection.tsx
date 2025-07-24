import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic AI implementation roadmaps tailored to your business needs and goals.",
    gradient: "from-purple-500 to-pink-500",
    link: "/services/ai-consulting"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke software solutions that bridge the gap between innovation and practicality.",
    gradient: "from-blue-500 to-cyan-500",
    link: "/services/custom-development"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that adapts and learns.",
    gradient: "from-orange-500 to-red-500",
    link: "/services/process-automation"
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Protect your digital assets with AI-powered security solutions and monitoring.",
    gradient: "from-green-500 to-emerald-500",
    link: "/services/ai-security"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations 
            and drive sustainable growth in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-subtle"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
