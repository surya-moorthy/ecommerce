
import { Schema, model, Types, Document } from 'mongoose';

export interface IOrderItem extends Document {
  order: Types.ObjectId;
  product: Types.ObjectId;
  quantity: number;
  price: number;
}

const OrderItemSchema = new Schema<IOrderItem>({
  order: { type: Schema.Types.ObjectId, ref: 'Order' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  price: Number
});

export const OrderItem = model<IOrderItem>('OrderItem', OrderItemSchema);
