
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, CalendarDays, Utensils, Palette, Music, Award, Truck, Gift } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  providers: number;
  href: string;
}

const ServiceCategoryCard = ({ icon, title, description, providers, href }: ServiceCategoryProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:border-primary/50">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{providers} providers</span>
              <Button asChild variant="outline" size="sm">
                <Link to={href}>Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ServiceCategories = () => {
  const categories = [
    {
      icon: <Camera size={24} />,
      title: "Photography",
      description: "Professional photographers for weddings, events, portraits, and commercial photography.",
      providers: 24,
      href: "/services/photography",
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Event Planning",
      description: "Complete event organization and management for corporate events, weddings, and private parties.",
      providers: 18,
      href: "/services/event-planning",
    },
    {
      icon: <Utensils size={24} />,
      title: "Catering",
      description: "Delicious food and beverage services for events of all sizes and preferences.",
      providers: 31,
      href: "/services/catering",
    },
    {
      icon: <Palette size={24} />,
      title: "Decoration",
      description: "Creative decoration services to transform spaces for weddings, events, and special occasions.",
      providers: 16,
      href: "/services/decoration",
    },
    {
      icon: <Music size={24} />,
      title: "Music & DJ",
      description: "Professional DJs and music services to create the perfect atmosphere for your event.",
      providers: 12,
      href: "/services/music",
    },
    {
      icon: <Award size={24} />,
      title: "Wedding Services",
      description: "Comprehensive wedding planning, coordination, and all services for your perfect wedding day.",
      providers: 22,
      href: "/services/wedding",
    },
    {
      icon: <Truck size={24} />,
      title: "Transportation",
      description: "Reliable transportation services for events, weddings, and special occasions in Peshawar.",
      providers: 9,
      href: "/services/transportation",
    },
    {
      icon: <Gift size={24} />,
      title: "Gifts & Favors",
      description: "Unique gifts, favors, and keepsakes for all types of events and celebrations.",
      providers: 14,
      href: "/services/gifts",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-primary/10 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Categories</h1>
          <p className="text-gray-600">
            Browse through our wide range of professional services available in Peshawar
          </p>
        </div>
      </div>
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <ServiceCategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCategories;
