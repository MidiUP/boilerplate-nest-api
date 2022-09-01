import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OperationModule } from './modules/operation/operation.module';

@Module({
  imports: [ConfigModule.forRoot(), OperationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
