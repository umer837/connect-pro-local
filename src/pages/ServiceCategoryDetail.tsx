
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Search, Filter, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

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

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  providers: Provider[];
}

const ServiceCategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulated data that would come from an API
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock categories data
      const getProvidersByCategory = (categoryName: string): Provider[] => {
        return [
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
        ].filter(provider => provider.category.toLowerCase() === categoryName.toLowerCase());
      };

      const categoryMap: { [key: string]: Category } = {
        "photography": {
          id: "photography",
          title: "Photography",
          description: "Professional photographers for weddings, events, portraits, and commercial photography.",
          icon: "📸",
          providers: getProvidersByCategory("Photography")
        },
        "event-planning": {
          id: "event-planning",
          title: "Event Planning",
          description: "Complete event organization and management for corporate events, weddings, and private parties.",
          icon: "📅",
          providers: getProvidersByCategory("Event Planning")
        },
        "catering": {
          id: "catering",
          title: "Catering",
          description: "Delicious food and beverage services for events of all sizes and preferences.",
          icon: "🍽️",
          providers: getProvidersByCategory("Catering")
        },
        "decoration": {
          id: "decoration",
          title: "Decoration",
          description: "Creative decoration services to transform spaces for weddings, events, and special occasions.",
          icon: "🎨",
          providers: getProvidersByCategory("Decoration")
        },
        "music": {
          id: "music",
          title: "Music & DJ",
          description: "Professional DJs and music services to create the perfect atmosphere for your event.",
          icon: "🎵",
          providers: getProvidersByCategory("Music & DJ")
        },
        "wedding": {
          id: "wedding",
          title: "Wedding Services",
          description: "Comprehensive wedding planning, coordination, and all services for your perfect wedding day.",
          icon: "💍",
          providers: getProvidersByCategory("Wedding Services")
        },
        "transportation": {
          id: "transportation",
          title: "Transportation",
          description: "Reliable transportation services for events, weddings, and special occasions in Peshawar.",
          icon: "🚗",
          providers: []
        },
        "gifts": {
          id: "gifts",
          title: "Gifts & Favors",
          description: "Unique gifts, favors, and keepsakes for all types of events and celebrations.",
          icon: "🎁",
          providers: []
        }
      };

      if (categoryId && categoryMap[categoryId]) {
        setCategory(categoryMap[categoryId]);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [categoryId]);

  const filteredProviders = category?.providers.filter(provider => 
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    provider.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse h-6 w-40 bg-gray-200 rounded-md mx-auto mb-4"></div>
            <div className="animate-pulse h-4 w-60 bg-gray-200 rounded-md mx-auto"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="py-12 flex-grow">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Service Category Not Found</h1>
            <p className="text-gray-600 mb-8">
              The service category you're looking for doesn't exist or has been removed.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/services">Browse All Categories</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-primary/10 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.title} Services in Peshawar</h1>
          <p className="text-gray-600">
            {category.description}
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
                  <h4 className="font-medium mb-2">Location</h4>
                  <div className="space-y-2">
                    {["All Peshawar", "University Town", "Hayatabad", "Saddar", "Cantt Area", "Gulbahar"].map((location) => (
                      <div key={location} className="flex items-center">
                        <button
                          className={`w-full text-left px-2 py-1 rounded-md text-sm ${
                            location === "All Peshawar"
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {location}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <button className="w-full text-left px-2 py-1 rounded-md text-sm text-gray-700 hover:bg-gray-100">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                              />
                            ))}
                            <span className="ml-2">{rating}+ Stars</span>
                          </div>
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
                  placeholder={`Search ${category.title} providers...`}
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {filteredProviders.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No service providers found in this category{searchTerm ? " matching your search" : ""}.</p>
                  {searchTerm && (
                    <Button onClick={() => setSearchTerm("")}>
                      Clear Search
                    </Button>
                  )}
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

export default ServiceCategoryDetail;
