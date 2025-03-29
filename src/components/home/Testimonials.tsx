
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonial = ({ name, role, content, rating }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              } mr-1`}
            />
          ))}
        </div>
        <blockquote className="flex-1 italic text-gray-700 mb-4">"{content}"</blockquote>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sana Ahmed",
      role: "Wedding Client",
      content:
        "I hired Elite Events for my wedding and they were amazing! Every detail was perfectly executed and they made my special day stress-free.",
      rating: 5,
    },
    {
      name: "Fahad Khan",
      role: "Business Owner",
      content:
        "Ahmad Photography captured our company event beautifully. The photos were professional and delivered quickly. Highly recommend!",
      rating: 5,
    },
    {
      name: "Ayesha Malik",
      role: "Birthday Party Host",
      content:
        "Royal Catering provided excellent food for my son's birthday party. The guests loved every dish, and the service was impeccable.",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from satisfied clients who found their perfect service providers through ConnectPro
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
