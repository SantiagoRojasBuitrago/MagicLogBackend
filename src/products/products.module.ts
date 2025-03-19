import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { AuthModule } from '../auth/auth.module'; 
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    AuthModule, 
  ],
  controllers: [ProductsController],
  providers: [ProductsService, JwtAuthGuard], 
})
export class ProductsModule {}
