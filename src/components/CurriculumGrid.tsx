import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Database,
  Code,
  BarChart3,
  PieChart,
  Brain,
  Lightbulb,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const CurriculumGrid = () => {
  const skills = [
    {
      icon: FileSpreadsheet,
      title: "Excel Mastery",
      description: "Advanced data cleaning, formulas, and pivot tables",
      color: "from-green-500/20 to-green-500/5",
    },
    {
      icon: Database,
      title: "SQL Fundamentals",
      description: "Query databases and manage data efficiently",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: Code,
      title: "Python Programming",
      description: "Data manipulation with pandas and numpy",
      color: "from-yellow-500/20 to-yellow-500/5",
    },
    {
      icon: BarChart3,
      title: "Power BI",
      description: "Create interactive dashboards and reports",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: PieChart,
      title: "Data Visualization",
      description: "Tell compelling stories through data",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: Brain,
      title: "Machine Learning Intro",
      description: "Understand ML models and applications",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Lightbulb,
      title: "Analytical Thinking",
      description: "Statistical thinking and problem-solving",
      color: "from-pink-500/20 to-pink-500/5",
    },
    {
      icon: Users,
      title: "Collaboration Skills",
      description: "Work effectively in data-driven teams",
      color: "from-indigo-500/20 to-indigo-500/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="curriculum" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            What You'll Learn
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master essential data skills through hands-on projects and real-world challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
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
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Our Learning Philosophy
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Project-Based Learning",
                description:
                  "You learn by doing — through hands-on exercises and real-world challenges.",
              },
              {
                title: "Mentorship & Peer Collaboration",
                description: "Grow in a supportive community of learners and professionals.",
              },
              {
                title: "Reinforcement Learning",
                description:
                  "Deepen understanding through structured reviews and iterative learning cycles.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Card className="p-6 bg-card border-border h-full">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumGrid;
