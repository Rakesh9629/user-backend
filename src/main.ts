import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('User management API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
