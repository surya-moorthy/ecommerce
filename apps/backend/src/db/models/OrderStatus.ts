
import { Schema, model, Types, Document } from 'mongoose';

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export interface IOrder extends Document {
  user: Types.ObjectId;
  items: Types.ObjectId[];
  total: number;
  status: OrderStatus;
  payment?: Types.ObjectId;
  address: Types.ObjectId;
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{ type: Schema.Types.ObjectId, ref: 'OrderItem' }],
  total: Number,
  status: { type: String, enum: Object.values(OrderStatus), default: OrderStatus.PENDING },
  payment: { type: Schema.Types.ObjectId, ref: 'Payment' },
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  createdAt: { type: Date, default: Date.now }
});

export const Order = model<IOrder>('Order', OrderSchema);
