
import { Search, UserCheck, Calendar } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const Step = ({ icon, title, description, step }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-white">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How ConnectPro Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find and connect with the perfect service provider in Peshawar in just a few simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Step
            icon={<Search size={28} />}
            title="Find Services"
            description="Browse through our categories or search for specific services you need in Peshawar"
            step={1}
          />
          <Step
            icon={<UserCheck size={28} />}
            title="Choose a Provider"
            description="Compare profiles, reviews, and pricing to select the perfect service provider"
            step={2}
          />
          <Step
            icon={<Calendar size={28} />}
            title="Book & Connect"
            description="Contact the provider directly, schedule your service, and get everything done"
            step={3}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
