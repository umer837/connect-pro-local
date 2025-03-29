
import { Provider } from "@/types/provider";

export const mockProviders: Provider[] = [
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
