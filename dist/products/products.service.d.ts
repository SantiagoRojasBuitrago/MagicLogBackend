import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(data: any): Promise<Product>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Product> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findAllByVendor(vendedorID: string): Promise<(import("mongoose").Document<unknown, {}, Product> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findById(id: string): Promise<Product>;
    update(id: string, data: any): Promise<Product>;
    delete(id: string): Promise<void>;
}
