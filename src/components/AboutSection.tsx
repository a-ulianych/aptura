import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Users, Award, Clock, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "200+", label: "Projects Delivered" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" }
];

const technologies = [
  "React", "Node.js", "Python", "AWS", "Docker", "TypeScript", 
  "Next.js", "PostgreSQL", "MongoDB", "Kubernetes", "GraphQL", "Vue.js"
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Building the Future with 
                <span className="text-primary"> Technology</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We are a passionate team of developers, designers, and strategists who believe 
                in the power of technology to transform businesses. Our mission is to deliver 
                innovative solutions that not just meet your current needs, but scale with your growth.
              </p>
              <p className="text-lg text-muted-foreground">
                From startups looking to make their mark to established enterprises seeking digital 
                transformation, we bring the expertise and dedication needed to turn your vision into reality.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Technologies We Master</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Button size="lg">Learn More About Us</Button>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our team collaborating"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg border border-border">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}