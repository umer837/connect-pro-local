
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProviderAboutProps {
  provider: {
    name: string;
    description: string;
    services: string[];
    gallery?: string[];
  };
}

const ProviderAbout = ({ provider }: ProviderAboutProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">About {provider.name}</h2>
        <p className="text-gray-700 mb-6">{provider.description}</p>
        
        <h3 className="text-lg font-semibold mb-3">Services Offered</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {provider.services.map((service, index) => (
            <div key={index} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span className="text-gray-700">{service}</span>
            </div>
          ))}
        </div>
        
        {provider.gallery && provider.gallery.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mb-3">Portfolio Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center overflow-hidden"
                >
                  <span className="text-gray-400 text-sm">Gallery Image {item}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProviderAbout;
