
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";

interface ProviderHeaderProps {
  provider: {
    name: string;
    category: string;
    rating: number;
    reviews: number;
    location: string;
  };
  onContactClick: () => void;
}

const ProviderHeader = ({ provider, onContactClick }: ProviderHeaderProps) => {
  return (
    <div className="bg-primary/10 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-medium text-xl">{provider.name.charAt(0)}</span>
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{provider.name}</h1>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {provider.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{provider.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({provider.reviews} reviews)</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{provider.location}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={onContactClick} className="bg-primary hover:bg-primary/90">
                  <MessageSquare className="mr-2 h-4 w-4" /> Contact Now
                </Button>
                <Button variant="outline">
                  <Phone className="mr-2 h-4 w-4" /> Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderHeader;
