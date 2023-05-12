import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login user' })
  @Post('login')
  async login(@Body() credentials: any) {
    const user = await this.authService.validateUser(
      credentials.username,
      credentials.password,
    );

    if (user) {
      const token = await this.authService.generateToken(user);
      return { token };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
