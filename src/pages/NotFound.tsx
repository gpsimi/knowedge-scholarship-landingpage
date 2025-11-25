import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl w-full bg-card rounded-2xl shadow-lg p-8 sm:p-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive mb-6 mx-auto"
          variants={itemVariants}
        >
          <AlertCircle className="w-10 h-10" />
        </motion.div>
        
        <motion.h1 
          className="text-8xl font-extrabold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4"
          variants={itemVariants}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-3xl font-bold text-foreground mb-3"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground mb-8 max-w-md mx-auto"
          variants={itemVariants}
        >
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button 
            onClick={() => navigate(-1)}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button 
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
