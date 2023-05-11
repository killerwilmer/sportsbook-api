// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key', // Reemplaza con tu propia clave secreta
    });
  }

  async validate(payload: any) {
    // Aquí puedes realizar la validación adicional del usuario
    // Puedes buscar y retornar el usuario desde la base de datos si es necesario
    return { userId: payload.sub, username: payload.username };
  }
}
