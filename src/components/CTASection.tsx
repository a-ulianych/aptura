import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Free project consultation",
  "Custom solution proposal", 
  "Fixed-price quote",
  // "30-day money-back guarantee",
  "6 months free maintenance"
];

export function CTASection() {

  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 
          className="text-3xl lg:text-4xl mb-4"
          initial={{ y: 15, scale: 0.98, opacity: 0.8 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          Let's discuss your project!
        </motion.h2>
        <p className="text-xl opacity-90 mb-8 animate-settle-delay-1">
          Message me directly on Telegram for instant communication. 
          No forms, no waiting - just direct conversation about your project.
        </p>

        <motion.div
          initial={{ y: 15, scale: 0.98, opacity: 0.85 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-foreground animate-settle">Start the conversation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <motion.div 
                  className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto"
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <MessageCircle className="h-8 w-8 text-white" />
                </motion.div>
                
                <Button 
                  size="lg" 
                  className="w-full group hover:scale-105 transition-transform bg-blue-500 hover:bg-blue-600 animate-attention hover:animate-none" 
                  asChild
                >
                  <a href="https://t.me/sandourss" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message on Telegram
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  @sandourss
                </p>
              </div>
              
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground animate-settle-delay-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <p className="text-sm opacity-70 mt-6 animate-settle-delay-3">
          Instant responses, direct communication, and honest project advice.
        </p>
      </div>
    </section>
  );
}