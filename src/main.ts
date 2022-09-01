import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  await app.listen(process.env.PORT || 8000);
  logger.log(`System running on port ${process.env.PORT || 8000}`);
}
bootstrap();
