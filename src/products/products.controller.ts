import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards, Request, Query, UnauthorizedException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  // 🔒 SOLO USUARIOS AUTENTICADOS PUEDEN CREAR UN PRODUCTO
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createProductDto: any) {
    console.log('Datos recibidos en el controlador:', createProductDto); // 🔍 Verifica si vendedorID está presente

    return this.productsService.create(createProductDto);
  }


  @Get()
  async findAll(@Request() req, @Query('vendedorID') vendedorID?: string) {
    if (vendedorID) {
      
  
      return this.productsService.findAllByVendor(vendedorID);
    }
  
    // Si no hay vendedorID, cualquiera puede obtener los productos sin autenticación
    return this.productsService.findAll();

    
  }
  

  
  // ✅ CUALQUIERA PUEDE VER UN PRODUCTO ESPECÍFICO
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  // 🔒 SOLO USUARIOS AUTENTICADOS PUEDEN ACTUALIZAR UN PRODUCTO
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() body, @Request() req) {
    const product = await this.productsService.findById(id);

    // Verificar si el usuario es el dueño del producto
    if (product.vendedorID !== req.user.userId) {
      throw new Error('No tienes permiso para modificar este producto');
    }

    return this.productsService.update(id, body);
  }

  // 🔒 SOLO USUARIOS AUTENTICADOS PUEDEN ELIMINAR UN PRODUCTO
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    const product = await this.productsService.findById(id);

    // Verificar si el usuario es el dueño del producto
    if (product.vendedorID !== req.user.sub) {
      throw new Error('No tienes permiso para eliminar este producto');
    }

    return this.productsService.delete(id);
  }
}
