import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: any): Promise<import("./schemas/product.schema").Product>;
    findAll(req: any, vendedorID?: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product.schema").Product> & import("./schemas/product.schema").Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("./schemas/product.schema").Product>;
    update(id: string, body: any, req: any): Promise<import("./schemas/product.schema").Product>;
    remove(id: string, req: any): Promise<void>;
}
