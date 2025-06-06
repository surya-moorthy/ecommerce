
import { Schema, model, Types, Document } from 'mongoose';

export interface IPayment extends Document {
  order: Types.ObjectId;
  provider: string;
  status: string;
  reference: string;
  amount: number;
  paidAt?: Date;
}

const PaymentSchema = new Schema<IPayment>({
  order: { type: Schema.Types.ObjectId, ref: 'Order', unique: true },
  provider: String,
  status: String,
  reference: String,
  amount: Number,
  paidAt: Date
});

export const Payment = model<IPayment>('Payment', PaymentSchema);
