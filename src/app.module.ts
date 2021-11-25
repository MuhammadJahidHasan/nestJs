import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot(), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
