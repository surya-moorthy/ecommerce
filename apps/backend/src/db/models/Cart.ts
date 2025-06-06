import { Schema, model, Types, Document } from 'mongoose';

export interface ICart extends Document {
  user: Types.ObjectId;
  items: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const CartSchema = new Schema<ICart>({
  user: { type: Schema.Types.ObjectId, ref: 'User', unique: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'CartItem' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Cart = model<ICart>('Cart', CartSchema);
