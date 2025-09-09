import { TrendingDown, Clock, DollarSign, Users } from "lucide-react";
import { motion } from "motion/react";

const startupStruggles = [
  {
    icon: TrendingDown,
    title: "No online presence = invisible to customers",
    description: "Sarah's bakery has amazing products, but potential customers can't find her online. Her competitors with modern websites are getting all the orders.",
    impact: "Lost revenue"
  },
  {
    icon: Clock,
    title: "Manual processes eating up valuable time",
    description: "Mike's consulting firm spends 10 hours weekly on scheduling, invoicing, and client communications that could be automated.",
    impact: "Wasted hours"
  },
  {
    icon: DollarSign,
    title: "Can't scale without proper systems",
    description: "Lisa's online store hit a ceiling at $50k/month because manual inventory and order processing became unmanageable.",
    impact: "Growth blocked"
  },
  {
    icon: Users,
    title: "Losing customers to tech-savvy competitors",
    description: "David's local service business lost 40% of customers to a competitor with online booking and automated follow-ups.",
    impact: "Market share lost"
  }
];

export function PainPointsSection() {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        {/* Startup struggles */}
        <div className="space-y-8 mb-16">
          {startupStruggles.map((struggle, index) => (
            <motion.div 
              key={index} 
              className="flex gap-6 p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
              initial={{ x: -15, scale: 0.98, opacity: 0.8 }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut" 
              }}
            >
              <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <struggle.icon className="h-7 w-7 text-destructive" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl">
                    {struggle.title}
                  </h3>
                  <span className="text-sm text-destructive bg-destructive/10 px-3 py-1 rounded-full">
                    {struggle.impact}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {struggle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sound familiar transition */}
        <motion.div 
          className="text-center py-12 bg-muted/50 rounded-2xl border-2 border-dashed border-muted-foreground/20"
          initial={{ y: 15, scale: 0.98, opacity: 0.8 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't just random examples – they're real businesses that started exactly where you are now.
            <br /><span className="text-foreground">Here's how we help businesses like yours break through these barriers.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}