
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Local <span className="text-primary">Service Providers</span> in Peshawar
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Connect with professional photographers, event planners, caterers and more for your next occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/register">Join as Provider</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg"></div>
            <div className="relative shadow-2xl rounded-lg overflow-hidden h-full">
              <div className="aspect-video bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center">
                <span className="text-white text-xl font-medium">Local Service Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
