import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, MessageSquare, Code, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const steps = [
  {
    step: "1",
    title: "Discovery call",
    description: "We understand your business goals and technical requirements.",
    icon: MessageSquare
  },
  {
    step: "2", 
    title: "Custom development",
    description: "We build your solution using modern technologies and best practices.",
    icon: Code
  },
  {
    step: "3",
    title: "Launch & support",
    description: "Go live with confidence. We provide ongoing maintenance and updates.",
    icon: Rocket
  }
];

export function ProductSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 15, scale: 0.98, opacity: 0.8 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl mb-4 animate-settle">
            Here's how we work
          </h2>
          <p className="text-muted-foreground text-lg animate-settle-delay-1">
            Transparent process. Clear communication. Delivered on time and on budget.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ y: 15, scale: 0.98, opacity: 0.85 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut" 
              }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl mx-auto mb-4 animate-settle">
                {step.step}
              </div>
              <step.icon className="h-8 w-8 text-primary mx-auto mb-3 animate-settle-delay-1" />
              <h3 className="text-lg mb-2 animate-settle-delay-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm animate-settle-delay-3">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Demo Screenshot */}
        <motion.div
          initial={{ y: 15, scale: 0.98, opacity: 0.85 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="hover:scale-105 transition-transform">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop"
                  alt="Modern web application dashboard showing analytics and user interface"
                  className="w-full h-auto"
                  width={1200}
                  height={700}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { value: "24 / 7", label: "Support" },
            { value: "99.9%", label: "Uptime guarantee" },
            { value: "6 months", label: "Free maintenance included" }
          ].map((result, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow animate-settle"
            >
              <div className="text-3xl text-primary mb-2 animate-settle-delay-1">
                {result.value}
              </div>
              <div className="text-sm text-muted-foreground animate-settle-delay-2">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}