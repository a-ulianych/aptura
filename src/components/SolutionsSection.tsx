import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Globe, Smartphone, ShoppingCart, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const solutions = [
  {
    icon: Globe,
    badge: "Most Popular",
    title: "Custom Web Applications",
    description: "Modern, fast, and scalable web apps that grow with your business. From simple websites to complex enterprise systems.",
    features: ["React/Next.js", "Real-time updates", "API integrations", "Admin dashboards"],
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYwMDQ5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    timeframe: "2-4 weeks"
  },
  {
    icon: Smartphone,
    badge: "Mobile First",
    title: "Mobile App Development",
    description: "Native iOS and Android apps, or progressive web apps that work offline and feel like native mobile experiences.",
    features: ["Cross-platform", "Offline functionality", "Push notifications", "App store ready"],
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU1OTY0MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    timeframe: "3-6 weeks"
  },
  {
    icon: ShoppingCart,
    badge: "Revenue Focused",
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing, inventory management, and analytics that actually increase sales.",
    features: ["Payment integration", "Inventory tracking", "Analytics dashboard", "SEO optimized"],
    image: "https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzU1OTM4NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    timeframe: "4-8 weeks"
  },
  {
    icon: Zap,
    badge: "Efficiency Boost",
    title: "Business Automation",
    description: "Custom tools that eliminate repetitive tasks, integrate your systems, and save hours of manual work every day.",
    features: ["Workflow automation", "System integration", "Data migration", "Custom APIs"],
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NTYwMDA3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    timeframe: "1-3 weeks"
  }
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 15, scale: 0.98, opacity: 0.8 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl mb-4 animate-settle">
            Here's how we solve those problems
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-settle-delay-1">
            No cookie-cutter solutions. Every project is custom-built for your specific goals and requirements.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ y: 15, scale: 0.98, opacity: 0.85 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut" 
              }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <ImageWithFallback
                    src={solution.image}
                    alt={`${solution.title} example interface`}
                    className="w-full h-48 object-cover"
                    width={600}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm animate-settle-delay-1">
                      {solution.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center animate-settle-delay-2">
                      <solution.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3 animate-settle">
                    <h3 className="text-xl">{solution.title}</h3>
                    <span className="text-sm text-muted-foreground">{solution.timeframe}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 animate-settle-delay-1">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4 animate-settle-delay-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform cursor-pointer animate-settle-delay-3">
                    <span className="text-sm">See examples</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see exactly what you need? We build custom solutions for unique requirements.
          </p>
          <a 
            href="" 
            className="inline-flex items-center text-primary hover:underline hover:translate-x-1 transition-transform"
          >
            Tell us about your project
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}