import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import LogoLight from "@/assets/KE-logo-light.png";
import LogoDark from "@/assets/KE-logo-dark.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Program", href: "#program" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between py-8">
          <div className="flex items-center space-x-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <a href="#" className="flex items-center space-x-2">
                <img 
                  src={useTheme().theme === 'light' ? LogoLight : LogoDark} 
                  alt="KnowEdge Tech Hub Logo" 
                  className="w-[200px]" 
                />
              </a>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex md:items-center md:space-x-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                onClick={() => scrollToSection("#scholarship")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0, transition: { delay: 0.1 } }}
              className="fixed inset-0 z-40 bg-black md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ 
                type: 'spring',
                damping: 25,
                stiffness: 300,
                mass: 0.8
              }}
              className="fixed left-0 right-0 top-0 z-50 bg-background shadow-xl md:hidden"
              style={{
                background: 'hsl(var(--background))'
              }}
            >
              <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <span className="text-lg font-bold text-primary-foreground">K</span>
                  </div>
                  <span className="text-lg font-bold">KnowEdge Tech Hub</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <nav className="flex flex-col p-4 pt-0">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      scrollToSection(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-4 text-left text-foreground transition-colors hover:bg-accent/50 border-t border-border/30"
                  >
                    {link.name}
                  </button>
                ))}
                <Button 
                  onClick={() => {
                    scrollToSection("#scholarship");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-2 mx-4 mb-4 bg-primary py-5 text-lg font-medium text-primary-foreground hover:bg-primary/90 rounded-lg"
                >
                  Join Waitlist
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
