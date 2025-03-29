
export interface Provider {
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
