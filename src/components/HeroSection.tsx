import { Button } from "./ui/button";
import { ArrowRight, Code, Rocket, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Solid IT Solutions for 
                <span className="text-primary"> Modern Businesses</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                We transform your ideas into powerful digital solutions. From startups to enterprises, 
                we deliver cutting-edge technology that drives growth and innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-sm">Custom Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Secure & Reliable</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Team working on IT solutions"
                className="rounded-lg shadow-2xl"
                width={600}
                height={400}
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}