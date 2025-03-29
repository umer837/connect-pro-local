
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProviderAvailabilityProps {
  provider: {
    availability: string[];
    priceRange: string;
    location: string;
  };
}

const ProviderAvailability = ({ provider }: ProviderAvailabilityProps) => {
  return (
    <>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Pricing & Availability</h3>
          
          <div className="flex items-start mb-4">
            <Calendar className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
            <div>
              <div className="font-medium">Working Days</div>
              <div className="text-gray-600">{provider.availability[0]}</div>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <Clock className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
            <div>
              <div className="font-medium">Working Hours</div>
              <div className="text-gray-600">{provider.availability[1]}</div>
            </div>
          </div>
          
          <div className="border-t pt-4 mt-4">
            <div className="font-medium mb-2">Price Range</div>
            <div className="bg-gray-50 p-3 rounded-md text-center">
              <span className="text-lg font-semibold text-primary">{provider.priceRange}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Prices may vary depending on specific requirements and services
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          
          <div className="aspect-[4/3] bg-gray-100 rounded-md flex items-center justify-center mb-3">
            <div className="text-center p-4">
              <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Map preview unavailable</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-2">
            <strong className="font-medium">Address:</strong> {provider.location}, Peshawar, Pakistan
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default ProviderAvailability;
