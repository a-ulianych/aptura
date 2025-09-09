import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  BarChart3,
  Zap,
  Settings
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and DevOps implementation for modern businesses."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Robust database architecture and optimization to ensure your data is secure, accessible, and performant."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits, implementation, and monitoring to protect your digital assets."
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Business intelligence solutions and data analytics platforms to drive informed decision-making."
  },
  {
    icon: Zap,
    title: "API Development",
    description: "RESTful and GraphQL APIs that power seamless integrations and third-party connections."
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Connect and optimize your existing systems for improved efficiency and data flow."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Our IT Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive technology services to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}