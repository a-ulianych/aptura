import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    content: "WebStudio transformed our outdated system into a modern, scalable platform. Their expertise in cloud technologies saved us months of development time.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    content: "The team's attention to detail and technical proficiency is outstanding. They delivered our mobile app ahead of schedule and within budget.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, HealthConnect",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    content: "Working with WebStudio was a game-changer for our healthcare startup. Their secure, HIPAA-compliant solution exceeded all our expectations.",
    rating: 5
  },
  {
    name: "David Park",
    role: "VP Engineering, DataFlow",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    content: "Their AI-powered analytics dashboard revolutionized how we handle data. The insights we get now drive all our strategic decisions.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Operations Manager, LogiChain",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    content: "The supply chain management system they built for us improved our efficiency by 40%. Exceptional work and ongoing support.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Director, CloudFirst Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    content: "Our cloud migration was seamless thanks to WebStudio's expertise. They handled everything from planning to implementation flawlessly.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}