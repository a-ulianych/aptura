import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function HeadlineSection() {
  return (
    <section className="relative min-h-screen flex items-center py-12 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5JTIwc3RhcnR1cCUyMHRlYW18ZW58MXx8fHwxNzU3MTQ2ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern tech workspace background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Optional: Uncomment this section for video background instead */}
        {/* 
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          <source src="/path-to-your-video.webm" type="video/webm" />
        </video>
        */}
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ y: 15, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 bg-card/90 backdrop-blur-sm">
              Web Development Studio
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
              Custom Web Development for Growing Businesses
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              We build websites, web apps, and IT systems that actually work. 
              No generic templates. No endless revisions. Just solid code that grows your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group shadow-lg animate-attention hover:animate-none" asChild>
                <a href="#cta">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group bg-card/80 backdrop-blur-sm shadow-lg animate-shake-delayed hover:animate-none" asChild>
                <a href="#solutions">
                  <Play className="mr-2 h-4 w-4" />
                  See Our Work
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-8 justify-center lg:justify-start text-sm text-muted-foreground">
              {[
                "6 months support", 
                "Fixed pricing"
              ].map((text, index) => (
                <div 
                  key={text}
                  className="flex items-center gap-2 bg-card/70 backdrop-blur-sm px-3 py-2 rounded-full"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Enhanced stats showcase */}
          <motion.div 
            className="relative"
            initial={{ y: 15, scale: 0.98, opacity: 0.8 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="relative grid grid-cols-2 gap-6">
              {/* Stats cards with glass morphism effect */}
              <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-3xl mb-2 text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Projects delivered</div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform mt-12">
                <div className="text-3xl mb-2 text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Client satisfaction</div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform -mt-6">
                <div className="text-3xl mb-2 text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Response time</div>
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
