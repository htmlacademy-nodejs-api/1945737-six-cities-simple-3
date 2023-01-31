import { OfferType } from '../../../types/offer-type.enum.js';
import { PlacePhoto } from '../../../types/placePhoto.type.js';

export default class CreateOfferDto {
  public nomination!: string;
  public description!: string;
  public date!: Date;
  public city!: string;
  public imagePreview!: string;
  public placePhotos!: PlacePhoto[];
  public type!: OfferType;
  public raiting!: number;
  public typePlace!: string;
  public room!: number;
  public guest!: number;
  public price!: number;
  public comfort!: string;
  public author!: string;
  public location!: string;
}
