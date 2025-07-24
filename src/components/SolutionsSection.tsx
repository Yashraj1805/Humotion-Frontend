
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Cloud, Cpu, Network } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    category: "AI Solutions",
    icon: Cpu,
    items: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Predictive Analytics"
    ],
    color: "from-purple-500 to-indigo-600"
  },
  {
    category: "IT Infrastructure",
    icon: Network,
    items: [
      "Cloud Architecture",
      "System Integration",
      "Network Security",
      "DevOps Solutions"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  {
    category: "Data Solutions",
    icon: Database,
    items: [
      "Data Engineering",
      "Business Intelligence",
      "Real-time Analytics",
      "Data Governance"
    ],
    color: "from-green-500 to-emerald-600"
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    items: [
      "Migration Strategy",
      "Scalable Architecture",
      "Performance Optimization",
      "Cost Management"
    ],
    color: "from-orange-500 to-red-600"
  }
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            <span className="gradient-text">AI + IT</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions that combine the power of artificial intelligence 
            with robust IT infrastructure to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${solution.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-6">{solution.category}</h3>
                <ul className="space-y-3">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gradient-brand rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-brand hover:shadow-2xl transition-all duration-300 text-white font-semibold px-8 py-4 text-lg"
          >
            <Link to="/solutions">Explore All Solutions</Link>
            
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
