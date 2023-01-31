import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import { OfferType } from '../../types/offer-type.enum.js';
import { PlacePhoto } from '../../types/placePhoto.type.js';
import { UserEntity } from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    required: true,
  })
  public nomination!: string;

  @prop({
    required: true,
    minLength: 20,
    maxLength: 1024,
  })
  public description!: string;

  @prop({
    required: true,
  })
  public date!: Date;

  @prop({
    required: true,
  })
  public city!: string;

  @prop({
    required: true,
  })
  public imagePreview!: string;

  @prop({
    required: true,
  })
  public placePhotos!: PlacePhoto[];

  @prop({
    required: true,
    type: () => String,
    enum: OfferType
  })
  public type!: OfferType;

  @prop({
    required: true,
    min: 1,
    max: 5,
  })
  public raiting!: number;

  @prop({
    required: true,
  })
  public typePlace!: string;

  @prop({
    required: true,
    min: 1,
    max: 8,
  })
  public room!: number;

  @prop({
    required: true,
    min: 1,
    max: 10,
  })
  public guest!: number;

  @prop({
    required: true,
    min: 100,
    max: 100000,
  })
  public price!: number;

  @prop({
    required: true,
  })
  public comfort!: string;

  @prop({
    required: true,
    ref: UserEntity,
  })
  public author!: Ref<UserEntity>;

  @prop({
    required: true,
  })
  public location!: string;

  @prop({
    default: 0,
  })
  public commentCount!: number;
}

export const OfferModel = getModelForClass(OfferEntity);
