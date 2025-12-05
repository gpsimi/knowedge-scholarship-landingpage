import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/flyer.jpeg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Applications Open: December 5, 2025 - December 26, 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Transform Your Data Career in{" "}
              <span className="text-primary">10 Weeks</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto lg:mx-0"
            >
              Join KnowEdge Tech Hub's Pilot Cohort and gain practical data skills, critical
              thinking, and real-world project experience. Our 10-week program is designed to
              bridge the gap between theory and practice in data education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#scholarship")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Apply Now!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#program")}
                className="text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                100% Virtual
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                Weekend Classes
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                100% Scholarship Available
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="KnowEdge Tech Hub - Data Education Platform"
              className="h-full object-cover rounded-2xl w-[500px]"
            />
            <div className="absolute -bottom-6 right-3 rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-xl hidden sm:block">
              <div className="text-3xl font-bold">50</div>
              <div className="text-sm">Scholarship Slots</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
