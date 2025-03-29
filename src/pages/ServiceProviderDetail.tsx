import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Calendar, Clock, Phone, Mail, Globe, MessageSquare, Check, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Provider {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  description: string;
  services: string[];
  priceRange: string;
  availability: string[];
  contactPhone?: string;
  contactEmail?: string;
  website?: string;
  gallery?: string[];
}

const ServiceProviderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      const mockProviders: Provider[] = [
        {
          id: 1,
          name: "Ahmad Photography Studio",
          category: "Photography",
          rating: 4.8,
          reviews: 152,
          location: "University Town, Peshawar",
          image: "/images/provider1.jpg",
          description: "Professional photography for weddings, events, and portraits with over 10 years of experience. We specialize in capturing special moments with creative and unique perspectives. Our team of experienced photographers ensures high-quality photos that you'll cherish forever.",
          services: [
            "Wedding Photography",
            "Portrait Sessions",
            "Event Coverage",
            "Corporate Photography",
            "Photo Editing",
            "Album Creation"
          ],
          priceRange: "₨5,000 - ₨50,000",
          availability: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
          contactPhone: "+92 345 1234567",
          contactEmail: "contact@ahmadphotography.pk",
          website: "www.ahmadphotography.pk",
          gallery: ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"]
        },
        {
          id: 2,
          name: "Elite Events",
          category: "Event Planning",
          rating: 4.7,
          reviews: 98,
          location: "Hayatabad, Peshawar",
          image: "/images/provider2.jpg",
          description: "Full-service event planning and management for corporate events, weddings, and private parties. Our team of experienced event planners work closely with you to create memorable and flawless events that exceed your expectations.",
          services: [
            "Wedding Planning",
            "Corporate Events",
            "Birthday Parties",
            "Engagement Ceremonies",
            "Venue Selection",
            "Vendor Coordination"
          ],
          priceRange: "₨20,000 - ₨200,000",
          availability: ["Monday - Sunday", "10:00 AM - 8:00 PM"],
          contactPhone: "+92 345 7654321",
          contactEmail: "info@eliteevents.pk",
          website: "www.eliteevents.pk"
        },
        {
          id: 3,
          name: "Royal Catering",
          category: "Catering",
          rating: 4.9,
          reviews: 215,
          location: "Saddar, Peshawar",
          image: "/images/provider3.jpg",
          description: "Exquisite catering services offering a variety of cuisines for events of all sizes. From intimate gatherings to grand celebrations, we provide delicious food and impeccable service that will delight your guests and make your event truly special.",
          services: [
            "Wedding Catering",
            "Corporate Lunches",
            "Buffet Services",
            "Traditional Pakistani Cuisine",
            "Continental Menu",
            "Dessert Stations"
          ],
          priceRange: "₨500 - ₨2,000 per person",
          availability: ["Monday - Sunday", "24-hour service"],
          contactPhone: "+92 345 9876543",
          contactEmail: "royal@catering.pk",
          website: "www.royalcatering.pk",
          gallery: ["food1.jpg", "food2.jpg", "food3.jpg", "food4.jpg", "food5.jpg"]
        },
        {
          id: 4,
          name: "Creative Decor",
          category: "Decoration",
          rating: 4.6,
          reviews: 87,
          location: "Cantt Area, Peshawar",
          image: "/images/provider4.jpg",
          description: "Transforming spaces with creative decoration for weddings, corporate events, and special occasions. Our team of designers brings your vision to life with stunning and unique decor elements that create the perfect ambiance for your event.",
          services: [
            "Wedding Decoration",
            "Stage Design",
            "Floral Arrangements",
            "Lighting Setup",
            "Theme-based Decor",
            "Entrance & Venue Styling"
          ],
          priceRange: "₨15,000 - ₨150,000",
          availability: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
          contactPhone: "+92 345 1122334",
          contactEmail: "info@creativedecor.pk"
        },
        {
          id: 5,
          name: "Peshawar DJs",
          category: "Music & DJ",
          rating: 4.5,
          reviews: 76,
          location: "Gulbahar, Peshawar",
          image: "/images/provider5.jpg",
          description: "Professional DJ services to make your event memorable with the perfect music selection. Our experienced DJs know how to read the crowd and create an incredible atmosphere that will keep your guests entertained and dancing all night long.",
          services: [
            "Wedding DJ Services",
            "Corporate Event Music",
            "Sound System Rental",
            "Lighting Effects",
            "Live Band Coordination",
            "MC Services"
          ],
          priceRange: "₨10,000 - ₨30,000",
          availability: ["Thursday - Sunday", "6:00 PM - 2:00 AM"],
          contactPhone: "+92 345 5566778",
          contactEmail: "book@peshawardjs.pk"
        },
        {
          id: 6,
          name: "Perfect Weddings",
          category: "Wedding Services",
          rating: 4.8,
          reviews: 124,
          location: "University Road, Peshawar",
          image: "/images/provider6.jpg",
          description: "Complete wedding planning and coordination services for your perfect day. From venue selection to day-of coordination, we handle all the details so you can relax and enjoy your special day without stress or worry.",
          services: [
            "Full Wedding Planning",
            "Day-of Coordination",
            "Venue Selection",
            "Vendor Management",
            "Budget Planning",
            "Guest Management"
          ],
          priceRange: "₨50,000 - ₨300,000",
          availability: ["Monday - Sunday", "10:00 AM - 8:00 PM"],
          contactPhone: "+92 345 9988776",
          contactEmail: "info@perfectweddings.pk",
          website: "www.perfectweddings.pk"
        }
      ];

      const foundProvider = mockProviders.find(p => p.id === parseInt(id || "0"));
      
      if (foundProvider) {
        setProvider(foundProvider);
      }
      
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleContactClick = () => {
    toast({
      title: "Contact request sent!",
      description: `${provider?.name} will get back to you soon.`,
    });
  };

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

  if (!provider) {
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
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Provider Header */}
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
                  <Button onClick={handleContactClick} className="bg-primary hover:bg-primary/90">
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

      {/* Main Content */}
      <main className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
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
              
              {/* Reviews Section */}
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
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact & Booking Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4 mb-6">
                    {provider.contactPhone && (
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium">Phone</div>
                          <div className="text-gray-600">{provider.contactPhone}</div>
                        </div>
                      </div>
                    )}
                    
                    {provider.contactEmail && (
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-gray-600">{provider.contactEmail}</div>
                        </div>
                      </div>
                    )}
                    
                    {provider.website && (
                      <div className="flex items-start">
                        <Globe className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium">Website</div>
                          <div className="text-gray-600">{provider.website}</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 mb-4" onClick={handleContactClick}>
                    Send Message
                  </Button>
                </CardContent>
              </Card>
              
              {/* Pricing & Availability Card */}
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
              
              {/* Location Card */}
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
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceProviderDetail;
