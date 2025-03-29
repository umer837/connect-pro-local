
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Provider {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  description: string;
}

const ServiceProviders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const providers: Provider[] = [
    {
      id: 1,
      name: "Ahmad Photography Studio",
      category: "Photography",
      rating: 4.8,
      reviews: 152,
      location: "University Town, Peshawar",
      image: "/images/provider1.jpg",
      description: "Professional photography for weddings, events, and portraits with over 10 years of experience."
    },
    {
      id: 2,
      name: "Elite Events",
      category: "Event Planning",
      rating: 4.7,
      reviews: 98,
      location: "Hayatabad, Peshawar",
      image: "/images/provider2.jpg",
      description: "Full-service event planning and management for corporate events, weddings, and private parties."
    },
    {
      id: 3,
      name: "Royal Catering",
      category: "Catering",
      rating: 4.9,
      reviews: 215,
      location: "Saddar, Peshawar",
      image: "/images/provider3.jpg",
      description: "Exquisite catering services offering a variety of cuisines for events of all sizes."
    },
    {
      id: 4,
      name: "Creative Decor",
      category: "Decoration",
      rating: 4.6,
      reviews: 87,
      location: "Cantt Area, Peshawar",
      image: "/images/provider4.jpg",
      description: "Transforming spaces with creative decoration for weddings, corporate events, and special occasions."
    },
    {
      id: 5,
      name: "Peshawar DJs",
      category: "Music & DJ",
      rating: 4.5,
      reviews: 76,
      location: "Gulbahar, Peshawar",
      image: "/images/provider5.jpg",
      description: "Professional DJ services to make your event memorable with the perfect music selection."
    },
    {
      id: 6,
      name: "Perfect Weddings",
      category: "Wedding Services",
      rating: 4.8,
      reviews: 124,
      location: "University Road, Peshawar",
      image: "/images/provider6.jpg",
      description: "Complete wedding planning and coordination services for your perfect day."
    },
  ];

  const categories = ["All", "Photography", "Event Planning", "Catering", "Decoration", "Music & DJ", "Wedding Services"];

  const filteredProviders = providers.filter(provider => 
    (selectedCategory === "All" || provider.category === selectedCategory) &&
    (provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     provider.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
     provider.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-primary/10 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Providers in Peshawar</h1>
          <p className="text-gray-600">
            Find and connect with the best local professionals for your needs
          </p>
        </div>
      </div>
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4 space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" /> Filters
                </h3>
                <div>
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-2 py-1 rounded-md text-sm ${
                            selectedCategory === category
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {category}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/4 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search for service providers..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {filteredProviders.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No service providers found matching your criteria.</p>
                  <Button onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProviders.map((provider) => (
                    <Card key={provider.id} className="overflow-hidden transition-all hover:shadow-md hover:border-primary/50">
                      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                        <div className="h-full w-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                          <span className="text-white font-medium">{provider.name}</span>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{provider.name}</h3>
                            <p className="text-sm text-gray-500">{provider.category}</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-sm font-medium">{provider.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">({provider.reviews})</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{provider.location}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{provider.description}</p>
                        <Button asChild variant="outline" className="w-full">
                          <Link to={`/providers/${provider.id}`}>View Profile</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceProviders;
