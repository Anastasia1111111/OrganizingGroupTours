export interface TourCard {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  description: string;
  reiting: number;
  numberReviews: number;
  organizer: string;
  time: Date;
  country: string;
  city: string;
}

export interface Tour {
  id: number;
  name: string;
  imageUrl: string[];
  price: number;
  shortDescription: string;
  description: string;
  reiting: number;
  organizer: string;
  numberReviews: number;
  numberVisitors: number;
  maxSizeGroup: number;
  transport: string;
  organizationMoments: string[];
  meetingPlace: string;
  time: Date;
  country: string;
  city: string;
}
