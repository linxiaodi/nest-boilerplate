import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModules } from './modules/cat/cat.modules';
import { DogService } from './modules/dog/dog.service';

@Module({
  imports: [CatModules, DogService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
