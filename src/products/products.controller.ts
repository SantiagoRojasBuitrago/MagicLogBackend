import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards, Request, Query, UnauthorizedException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createProductDto: any) {
    console.log('Datos recibidos en el controlador:', createProductDto); 

    return this.productsService.create(createProductDto);
  }


  @Get()
  async findAll(@Request() req, @Query('vendedorID') vendedorID?: string) {
    if (vendedorID) {
      
  
      return this.productsService.findAllByVendor(vendedorID);
    }
  
    return this.productsService.findAll();

    
  }
  

  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() body, @Request() req) {
    const product = await this.productsService.findById(id);

    if (product.vendedorID !== req.user.userId) {
      throw new Error('No tienes permiso para modificar este producto');
    }

    return this.productsService.update(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    const product = await this.productsService.findById(id);

    if (product.vendedorID !== req.user.sub) {
      throw new Error('No tienes permiso para eliminar este producto');
    }

    return this.productsService.delete(id);
  }
}
