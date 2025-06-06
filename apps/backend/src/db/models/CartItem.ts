import { Schema, model, Types, Document } from 'mongoose';

// ---------- CartItem ----------
export interface ICartItem extends Document {
  cart: Types.ObjectId;
  product: Types.ObjectId;
  quantity: number;
}

const CartItemSchema = new Schema<ICartItem>({
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number
});

export const CartItem = model<ICartItem>('CartItem', CartItemSchema);
