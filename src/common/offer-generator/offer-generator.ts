import { MockData } from '../../types/mock-data.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import dayjs from 'dayjs';

const MIN_ROOM = 1;
const MAX_ROOM = 8;

const MIN_GUEST = 1;
const MAX_GUEST = 10;

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}
  public generate(): string {
    const nomination = getRandomItem<string>(this.mockData.nominations);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const date = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const imagePreview = getRandomItem<string>(this.mockData.imagePreviews);
    const placePhotos = getRandomItem<string>(this.mockData.placePhotos);
    const type = getRandomItem([OfferType.Premium, OfferType.None]);
    const raiting = getRandomItem<string>(this.mockData.raitings);
    const typePlace = getRandomItem<string>(this.mockData.typePlaces);
    const room = generateRandomValue(MIN_ROOM, MAX_ROOM).toString();
    const guest = generateRandomValue(MIN_GUEST, MAX_GUEST).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const comfort = getRandomItems<string>(this.mockData.comforts).join(';');
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomItem<string>(this.mockData.passwords);
    const userType = getRandomItem<string>(this.mockData.userTypes);
    const location = getRandomItem<string>(this.mockData.locations);

    return [
      nomination, description, city, date, imagePreview, placePhotos, type, raiting, typePlace, room, guest, price, comfort, name, email, avatar, password, userType, location,
    ].join('\t');
  }
}
