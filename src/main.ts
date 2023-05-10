import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserRole } from './roles/roles.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    // Simulación de autenticación
    const user = {
      id: 1,
      role: UserRole.User, // Cambia esto a UserRole.Admin para simular un usuario administrador
    };
    req.user = user;
    next();
  });
  await app.listen(3000);
}
bootstrap();
