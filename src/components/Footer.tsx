import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  // const handleBlogClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   navigate('/');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <footer className="bg-navy-950 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <Link to="/" className="flex items-center space-x-4">
                <motion.div 
                  className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-xl p-2"
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ 
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.img 
                    src="/img/HUMOTION.AI1-removebg-preview.png" 
                    alt="Humotion.AI Logo" 
                    className="w-full h-full object-contain"
                    animate={{ 
                      filter: [
                        "brightness(1)",
                        "brightness(1.2)",
                        "brightness(1)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <motion.span 
                  className="text-2xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  HumotionAI
                </motion.span>
              </Link>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Where emotion meets intelligence. Transforming businesses through AI-powered solutions 
              that understand both technology and human nature.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/ai-consulting" className="hover:text-white transition-colors duration-200">AI Consulting</Link></li>
              <li><Link to="/services/custom-development" className="hover:text-white transition-colors duration-200">Custom Development</Link></li>
              <li><Link to="/services/process-automation" className="hover:text-white transition-colors duration-200">Process Automation</Link></li>
              <li><Link to="/services/ai-security" className="hover:text-white transition-colors duration-200">AI Security</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              {/* <li><a href="/" onClick={handleBlogClick} className="hover:text-white transition-colors duration-200">Blog</a></li> */}
              <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 HumotionAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
