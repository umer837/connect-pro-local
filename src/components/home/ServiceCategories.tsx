
import { Card, CardContent } from "@/components/ui/card";
import { Camera, CalendarDays, Utensils, Palette, Music, Award, Truck, Gift } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceCategory = ({ icon, title, description, href }: ServiceCategoryProps) => {
  return (
    <Link to={href}>
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const ServiceCategories = () => {
  const categories = [
    {
      icon: <Camera size={24} />,
      title: "Photography",
      description: "Professional photographers for all occasions",
      href: "/services/photography",
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Event Planning",
      description: "Complete event organization and management",
      href: "/services/event-planning",
    },
    {
      icon: <Utensils size={24} />,
      title: "Catering",
      description: "Delicious food and beverage services",
      href: "/services/catering",
    },
    {
      icon: <Palette size={24} />,
      title: "Decoration",
      description: "Creative decoration for all events",
      href: "/services/decoration",
    },
    {
      icon: <Music size={24} />,
      title: "Music & DJ",
      description: "Entertainment for your special occasions",
      href: "/services/music",
    },
    {
      icon: <Award size={24} />,
      title: "Wedding Services",
      description: "All services for your perfect wedding day",
      href: "/services/wedding",
    },
    {
      icon: <Truck size={24} />,
      title: "Transportation",
      description: "Reliable transportation for events and occasions",
      href: "/services/transportation",
    },
    {
      icon: <Gift size={24} />,
      title: "Gifts & Favors",
      description: "Unique gifts and event favors",
      href: "/services/gifts",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Service Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a wide range of professional services available in Peshawar for your events and special occasions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <ServiceCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
