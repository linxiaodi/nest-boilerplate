import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { CatService } from '../cat/cat.service';

@Module({
  providers: [DogService],
  controllers: [DogController],
  exports: [DogService]
})
export class DogModules {
}
