import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}



  async create(data: any): Promise<Product> {
    console.log('Datos recibidos:', data); 
  
    if (!data.vendedorID) {
      throw new Error('vendedorID es undefined antes de guardar.');
    }
  
    return await new this.productModel(data).save();
  }
  
  async findAll() {
    return this.productModel.find().populate('vendedorID'); ;

  }
  
  async findAllByVendor(vendedorID: string) {
    return this.productModel.find({ vendedorID }); 
  }
  

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }
    return product;
  }

  async update(id: string, data: any): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(id, data, { new: true });
    if (!updatedProduct) {
      throw new NotFoundException('Producto no encontrado');
    }
    return updatedProduct;
  }

  async delete(id: string): Promise<void> {
    const result = await this.productModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Producto no encontrado');
    }
  }
}
