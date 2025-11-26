import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Calendar, Clock, ExternalLink } from "lucide-react";
import scholarshipImage from "@/assets/scholarship.jpg";

const ScholarshipCard = () => {
  const benefits = [
    "Full tuition coverage for the 10-week program",
    "Access to live virtual classes and replays",
    "Mentorship sessions with experienced data professionals",
    "Real project exposure and portfolio-building opportunities",
    "Certificate of Completion",
  ];

  const timeline = [
    { event: "Applications Open", date: "December 5, 2025" },
    { event: "Application Deadline", date: "December 26, 2026" },
    { event: "Cohort Start Date", date: "February 2026" },
  ];

  const eligibility = [
    "Open to undergraduates, graduates, and early-career professionals",
    "Must be able to commit to weekend virtual sessions",
    "Basic computer literacy required (no prior data experience needed)",
  ];

  return (
    <section id="scholarship" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            100% Scholarship Available
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To celebrate our launch, we're offering 50 full scholarships to exceptional learners
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={scholarshipImage}
              alt="Scholarship Opportunity"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Scholarship Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      className="flex items-start"
                    >
                      <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Application Timeline
                </h3>
                <div className="space-y-3">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      className="flex justify-between items-center p-3 rounded-lg bg-background/50"
                    >
                      <span className="text-sm font-medium text-foreground">{item.event}</span>
                      <span className="text-sm text-primary font-semibold">{item.date}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-primary font-medium flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Early applications are strongly encouraged — limited slots available!
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Eligibility</h3>
                <ul className="space-y-2">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                asChild
              >
                <a
                  href="https://chat.whatsapp.com/KCWc5OmiCwH1qjgiVMvUuW?mode=hqrt2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Waitlist
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCard;
