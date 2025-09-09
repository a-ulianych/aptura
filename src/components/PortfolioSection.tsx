import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Development"
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management system with appointment scheduling and telemedicine features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    technologies: ["Vue.js", "Express", "MongoDB", "WebRTC"],
    category: "Healthcare"
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Real-time financial data visualization platform with advanced charting and reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    technologies: ["React", "D3.js", "Python", "AWS"],
    category: "Analytics"
  },
  {
    title: "Supply Chain Mobile App",
    description: "Cross-platform mobile application for supply chain tracking with IoT device integration.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
    technologies: ["React Native", "Firebase", "IoT", "GPS"],
    category: "Mobile Development"
  },
  {
    title: "AI-Powered CRM",
    description: "Customer relationship management system with AI-driven insights and automated workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    category: "AI/ML"
  },
  {
    title: "Cloud Infrastructure Migration",
    description: "Complete cloud migration project with containerization and CI/CD pipeline implementation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    technologies: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    category: "Cloud Solutions"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Our Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={200}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}