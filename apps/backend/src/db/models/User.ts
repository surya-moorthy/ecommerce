import { Schema, model, Types, Document } from 'mongoose';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: Role;
  orders: Types.ObjectId[];
  cart?: Types.ObjectId;
  reviews: Types.ObjectId[];
  addresses: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  role: { type: String, enum: Object.values(Role), default: Role.USER },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }]
});

export const User = model<IUser>('User', UserSchema);
