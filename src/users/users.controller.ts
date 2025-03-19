import { Controller, Post, Body, BadRequestException, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(
    @Body('email') email: string, 
    @Body('password') password: string,
    @Body('role') role: string // Se agrega el rol
  ) {
    if (!email || !password || !role) {
      throw new BadRequestException('Email, contraseña y rol son requeridos');
    }

    // Asegúrate de validar que el rol sea válido (opcional)
    const validRoles = ['admin', 'user', 'vendedor']; // Añade más roles si es necesario
    if (!validRoles.includes(role)) {
      throw new BadRequestException('Rol inválido');
    }

    return this.usersService.register(email, password, role);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
