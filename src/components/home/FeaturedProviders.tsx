
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface ProviderCardProps {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
}

const ProviderCard = ({ id, name, category, rating, reviews, location, image }: ProviderCardProps) => {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md hover:border-primary/50">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <div className="h-full w-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
          <span className="text-white font-medium">{name}</span>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500 ml-1">({reviews})</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link to={`/providers/${id}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const FeaturedProviders = () => {
  const providers = [
    {
      id: 1,
      name: "Ahmad Photography Studio",
      category: "Photography",
      rating: 4.8,
      reviews: 152,
      location: "University Town, Peshawar",
      image: "/images/provider1.jpg",
    },
    {
      id: 2,
      name: "Elite Events",
      category: "Event Planning",
      rating: 4.7,
      reviews: 98,
      location: "Hayatabad, Peshawar",
      image: "/images/provider2.jpg",
    },
    {
      id: 3,
      name: "Royal Catering",
      category: "Catering",
      rating: 4.9,
      reviews: 215,
      location: "Saddar, Peshawar",
      image: "/images/provider3.jpg",
    },
    {
      id: 4,
      name: "Creative Decor",
      category: "Decoration",
      rating: 4.6,
      reviews: 87,
      location: "Cantt Area, Peshawar",
      image: "/images/provider4.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Service Providers</h2>
            <p className="text-gray-600">Top-rated professionals in Peshawar</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/providers">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} {...provider} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
