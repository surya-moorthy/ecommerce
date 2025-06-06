
import { Schema, model, Types, Document } from 'mongoose';

export interface IAddress extends Document {
  user: Types.ObjectId;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

const AddressSchema = new Schema<IAddress>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  line1: String,
  line2: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  isDefault: { type: Boolean, default: false }
});

export const Address = model<IAddress>('Address', AddressSchema);
