
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Provider } from "@/types/provider";
import { mockProviders } from "@/data/mockProviders";

// Import components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProviderHeader from "@/components/service-provider/ProviderHeader";
import ProviderAbout from "@/components/service-provider/ProviderAbout";
import ProviderReviews from "@/components/service-provider/ProviderReviews";
import ProviderContact from "@/components/service-provider/ProviderContact";
import ProviderAvailability from "@/components/service-provider/ProviderAvailability";
import ProviderNotFound from "@/components/service-provider/ProviderNotFound";
import ProviderLoading from "@/components/service-provider/ProviderLoading";

const ServiceProviderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
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
    return <ProviderLoading />;
  }

  if (!provider) {
    return <ProviderNotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Provider Header */}
      <ProviderHeader provider={provider} onContactClick={handleContactClick} />

      {/* Main Content */}
      <main className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <ProviderAbout provider={provider} />
              
              {/* Reviews Section */}
              <ProviderReviews provider={provider} />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact & Booking Card */}
              <ProviderContact provider={provider} onContactClick={handleContactClick} />
              
              {/* Pricing, Availability & Location Cards */}
              <ProviderAvailability provider={provider} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceProviderDetail;
