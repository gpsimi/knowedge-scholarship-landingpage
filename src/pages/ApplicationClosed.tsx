import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ApplicationClosedImage from "@/assets/application-2.png"; // Import the image

const ApplicationClosed = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center h-[95vh]  px-4 py-10 md:space-x-24">
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <img
            src={ApplicationClosedImage}
            alt="Applications Closed"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md h-auto"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Application has Closed
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Thank you for your interest. The application window for our scholarship program is currently closed. Please check back later for future opportunities.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
              Go to Home Page
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ApplicationClosed;
