import { motion } from "framer-motion";
import { Calendar, Monitor, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "10-Week Program",
      description: "February - April 2026",
      detail: "Intensive beginner-level training",
    },
    {
      icon: Monitor,
      title: "100% Virtual",
      description: "Learn from anywhere",
      detail: "Weekend classes (Sat & Sun)",
    },
    {
      icon: TrendingUp,
      title: "Two Tracks",
      description: "Data Analysis & Data Science",
      detail: "Choose your path to success",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Industry professionals",
      detail: "Real-world guidance & support",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="program" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Program Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our Pilot Cohort marks the beginning of a new learning model designed for impact and
            mastery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-1">{highlight.description}</p>
                  <p className="text-sm text-muted-foreground">{highlight.detail}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 sm:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Unique Value Proposition</h3>
            <p className="text-lg text-muted-foreground italic">
              "At KnowEdge Tech Hub, we don't just teach data — we mentor you into it. Through
              practical projects, expert guidance, and real-world exposure, our students gain the
              confidence and portfolio to thrive in data-driven roles."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
