import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001', 'https://www.google.com'],
  });

  app.use((req, res, next) => {
    res.set('Access-Control-Expose-Headers', 'Content-Range');
    res.set('Content-Range', 'bytes : 0-20/20');
    next();
  });

  const config = new DocumentBuilder()
    .setTitle('Creece Api')
    .setDescription('Sistema de gestion empresarial')
    .setVersion('1.0')
    .addTag('Creece')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
