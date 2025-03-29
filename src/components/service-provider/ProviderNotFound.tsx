
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProviderNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Service Provider Not Found</h1>
          <p className="text-gray-600 mb-8">
            The service provider you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/providers">
            <Button className="bg-primary hover:bg-primary/90">
              Browse All Providers
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProviderNotFound;
