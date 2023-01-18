// import { Comment } from './comment.type.js';
import { User } from './user.type.js';
import { OfferType } from './offer-type.enum.js';
import { PlacePhoto } from './placePhoto.type.js';

export type Offer = {
  nomination: string;
  description: string;
  date: Date;
  city: string;
  imagePreview: string;
  placePhotos: PlacePhoto[];
  type: OfferType;
  raiting: number;
  typePlace: string;
  room: number;
  guest: number;
  price: number;
  comfort: string;
  author: User;
  location: string;
}
