import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop({ required: true })
  precio: number;

  @Prop({ required: true })
  stock: number;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true }) // ✅ Debe ser ObjectId
  vendedorID: Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
