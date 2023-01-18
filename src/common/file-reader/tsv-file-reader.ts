import { readFileSync } from 'fs';
import { OfferType } from '../../types/offer-type.enum.js';
import { Offer } from '../../types/offer.type.js';
import { FileReaderInterface } from './file-reader.interface.js';
// import { UserType } from '../../types/user-type.enum.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([nomination, description, createdDate, city, imagePreview, placePhotos, type, raiting, typePlace, room, guest, price, comfort, name, email, avatar, password, userType, location]) => ({
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
      }));
  }
}
