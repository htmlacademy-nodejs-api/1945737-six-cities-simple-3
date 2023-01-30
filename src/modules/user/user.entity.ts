import { User } from '../../types/user.type.js';
import typegoose, {getModelForClass, defaultClasses} from '@typegoose/typegoose';
import { createSHA256 } from '../../utils/common.js';

const {prop, modelOptions} = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor(data: User) {
    super();

    this.name = data.name;
    this.email = data.email;
    this.avatar = data.avatar;
    this.userType = data.userType;
  }

  @prop({
    default: '',
    required: true,
    minLength: [1, 'Min length for name is 1'],
    maxLength: [15, 'Max length for name is 15'],
  })
  public name!: string;

  @prop({
    unique: true,
    required: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
  })
  public email!: string;

  @prop()
  public avatar!: string;

  @prop({
    default: '',
    type: String,
    minLength: [6, 'Min length for password is 6'],
    maxLength: [12, 'Max length for password is 12'],
    required: true,
  })
  private password!: string;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

  @prop({required: true})
  public userType!: string;
}

export const UserModel = getModelForClass(UserEntity);
