
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProviderReviewsProps {
  provider: {
    rating: number;
    reviews: number;
    name: string;
  };
}

const ProviderReviews = ({ provider }: ProviderReviewsProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="flex items-center">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-semibold text-lg">{provider.rating}</span>
            <span className="text-gray-500 ml-1">({provider.reviews})</span>
          </div>
        </div>
        
        {/* Sample Reviews */}
        <div className="space-y-6">
          <div className="border-b pb-6">
            <div className="flex justify-between mb-2">
              <div className="font-medium">Faisal Ahmed</div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              I hired {provider.name} for my wedding and they did an amazing job! The team was professional,
              punctual, and delivered exactly what they promised. Highly recommended!
            </p>
            <div className="text-gray-400 text-xs">Posted 2 months ago</div>
          </div>
          
          <div className="border-b pb-6">
            <div className="flex justify-between mb-2">
              <div className="font-medium">Ayesha Khan</div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              Great service and reasonable prices. Everything was well-organized and they were very 
              responsive to my requests. Would work with them again.
            </p>
            <div className="text-gray-400 text-xs">Posted 3 weeks ago</div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <div className="font-medium">Umar Farooq</div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              Outstanding service! {provider.name} exceeded all my expectations. Their attention to detail
              and quality of work is exceptional. Will definitely use their services again.
            </p>
            <div className="text-gray-400 text-xs">Posted 1 week ago</div>
          </div>
        </div>
        
        <Button variant="outline" className="w-full mt-6">
          See All Reviews
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProviderReviews;
