import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  createdAt: Date;
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const Category = model<ICategory>('Category', CategorySchema);
