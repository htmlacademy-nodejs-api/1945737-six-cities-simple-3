import { OfferType } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [nomination, description, createdDate, city, imagePreview, placePhotos, type, raiting, typePlace, room, guest, price, comfort, name, email, avatar, password, userType, location] = tokens;
  return {
    nomination,
    description,
    date: new Date(createdDate),
    city,
    imagePreview,
    placePhotos: placePhotos.split(';').map((link) => ({link})),
    type: OfferType[type as 'Premium' | 'None'],
    raiting: Number.parseInt(raiting, 10),
    typePlace,
    room: Number.parseInt(room, 10),
    guest: Number.parseInt(guest, 10),
    price: Number.parseInt(price, 10),
    comfort,
    author: {name, email, avatar, password, userType},
    location
  } as Offer;
};


export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';
