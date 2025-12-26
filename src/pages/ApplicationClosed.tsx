import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ApplicationClosedImage from "@/assets/application-2.png";


const ApplicationClosed = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center h-[95vh]  px-4 py-10 md:space-x-24">
        <motion.div
          className="flex-shrink-0 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={ApplicationClosedImage}
            alt="Applications Closed"
            className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md h-auto"
          />
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Applications Closed!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Thank you for your interest. The application window for our scholarship program is currently closed. Please check back later for future opportunities.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
              Go to Home Page
            </Button>
          </Link>
      </motion.div>
    </div >
    </>
  );
};

export default ApplicationClosed;
