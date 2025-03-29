
import { Phone, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProviderContactProps {
  provider: {
    contactPhone?: string;
    contactEmail?: string;
    website?: string;
  };
  onContactClick: () => void;
}

const ProviderContact = ({ provider, onContactClick }: ProviderContactProps) => {
  return (
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
        
        <Button className="w-full bg-primary hover:bg-primary/90 mb-4" onClick={onContactClick}>
          Send Message
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProviderContact;
