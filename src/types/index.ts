export interface Seva {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  timings: string;
  category: "daily" | "special" | "festival" | "annadanam";
  benefits: string[];
  available: boolean;
}

export interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  sevaId: string;
  sevaName: string;
  sevaPrice: number;
  preferredDate: string;
  nakshatra: string;
  gotra: string;
  specialRequests: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  paymentStatus: "pending" | "paid" | "refunded";
  bookingReference: string;
  createdAt: string;
}

export interface Festival {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  category: "monthly" | "annual" | "special";
  highlights: string[];
  imageUrl?: string;
  featured: boolean;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  sevaId: string;
  preferredDate: string;
  nakshatra: string;
  gotra: string;
  specialRequests: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
