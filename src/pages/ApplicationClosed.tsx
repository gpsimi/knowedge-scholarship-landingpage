import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ApplicationClosed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
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
  );
};

export default ApplicationClosed;
