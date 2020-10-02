import { Schema, Document, model } from "mongoose";

export interface VisitSchemaType {
  name: string;
  phoneNumber: string;
  arrivedAt: Date;
  leftAt: Date | null;
}

export const VisitSchema = new Schema<VisitSchemaType>({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  arrivedAt: { type: Date, required: true },
  leftAt: Date,
});

export interface VisitModelType extends Document {
  name: string;
  phoneNumber: string;
  arrivedAt: Date;
  leftAt: Date;
}

export const VisitModel = model<VisitModelType>("visit", VisitSchema);
