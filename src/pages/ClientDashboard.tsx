
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, Heart, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  provider: string;
  location: string;
  image: string;
  rating: number;
  price: string;
}

const ServiceCard = ({ id, title, category, provider, location, image, rating, price }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
          <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          <div className="bg-primary/10 text-primary font-semibold px-2 py-1 rounded text-sm">
            {price}
          </div>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <svg 
                  key={i}
                  className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to={`/services/${id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const popularServices = [
  {
    id: "photo1",
    title: "Professional Photography",
    category: "Photography",
    provider: "ClickPerfect Studios",
    location: "University Town, Peshawar",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    price: "₨15,000",
  },
  {
    id: "event1",
    title: "Wedding Planning & Coordination",
    category: "Event Planning",
    provider: "Dream Events",
    location: "Hayatabad, Peshawar",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHBsYW5uaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    price: "₨50,000+",
  },
  {
    id: "cater1",
    title: "Premium Catering Service",
    category: "Catering",
    provider: "Royal Taste Caterers",
    location: "Saddar, Peshawar",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    price: "₨1,200/person",
  },
  {
    id: "deco1",
    title: "Event Decoration Services",
    category: "Decoration",
    provider: "Elegant Decor",
    location: "Gulbahar, Peshawar",
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    price: "₨25,000+",
  },
];

const recentlyViewedServices = [
  {
    id: "music1",
    title: "Professional DJ Services",
    category: "Music & DJ",
    provider: "BeatMasters",
    location: "Peshawar Cantt",
    image: "https://images.unsplash.com/photo-1571266838248-43f831c13e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    price: "₨18,000",
  },
  {
    id: "trans1",
    title: "Luxury Car Rental",
    category: "Transportation",
    provider: "Premier Rides",
    location: "Ring Road, Peshawar",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    price: "₨8,000/day",
  },
];

const ClientDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const upcomingAppointments = [
    {
      id: 1,
      service: "Wedding Photography",
      provider: "ClickPerfect Studios",
      date: "Oct 15, 2023",
      time: "10:00 AM",
    },
    {
      id: 2,
      service: "Venue Visit",
      provider: "Dream Events",
      date: "Oct 18, 2023",
      time: "2:30 PM",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Welcome to Your Dashboard</h1>
                <p className="text-gray-600">Find and manage services for your events</p>
              </div>
              
              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for services, providers, or locations..."
                  className="pl-10 py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Tabs defaultValue="explore" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="explore">Explore Services</TabsTrigger>
                  <TabsTrigger value="saved">Saved Services</TabsTrigger>
                  <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="explore">
                  <h2 className="text-xl font-semibold mb-4">Popular Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {popularServices.map((service) => (
                      <ServiceCard key={service.id} {...service} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="saved">
                  <div className="text-center py-8">
                    <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium">No saved services yet</h3>
                    <p className="text-gray-500 mt-2">
                      Browse services and save your favorites to find them easily later
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="recent">
                  <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {recentlyViewedServices.map((service) => (
                      <ServiceCard key={service.id} {...service} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Appointments
                  </CardTitle>
                  <CardDescription>Your scheduled meetings</CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="border-b pb-3 last:border-0">
                          <div className="font-medium">{appointment.service}</div>
                          <div className="text-sm text-muted-foreground">
                            {appointment.provider}
                          </div>
                          <div className="flex items-center mt-1 text-sm">
                            <Clock size={14} className="mr-1" />
                            {appointment.date} at {appointment.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-gray-500">No upcoming appointments</p>
                    </div>
                  )}
                  <Button variant="outline" className="w-full mt-4">
                    View All
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/services/photography">Photography</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/services/event-planning">Event Planning</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/services/catering">Catering</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/services/decoration">Decoration</Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/services">View All Categories</Link>
                    </Button>
                  </div>
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

export default ClientDashboard;
