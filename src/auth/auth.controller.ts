// auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: any) {
    // Aquí puedes implementar la lógica para verificar las credenciales del usuario

    const user = await this.authService.validateUser(
      credentials.username,
      credentials.password,
    );

    if (user) {
      // Las credenciales son válidas, genera y retorna el token JWT
      const token = await this.authService.generateToken(user);
      return { token };
    } else {
      // Las credenciales no son válidas, retorna un error
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
