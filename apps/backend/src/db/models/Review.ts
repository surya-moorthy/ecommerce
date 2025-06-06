
import { Schema, model, Types, Document } from 'mongoose';

export interface IReview extends Document {
  user: Types.ObjectId;
  product: Types.ObjectId;
  rating: number;
  comment?: string;
  createdAt: Date;
}

const ReviewSchema = new Schema<IReview>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

export const Review = model<IReview>('Review', ReviewSchema);
