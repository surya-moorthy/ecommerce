import { Schema, model, Types, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  category: Types.ObjectId;
  reviews: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  imageUrl: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Product = model<IProduct>('Product', ProductSchema);
