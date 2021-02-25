import { Controller, Get } from '@nestjs/common';
import { DogService } from './dog.service';
import { CatService } from '../cat/cat.service';

@Controller('dog')
export class DogController {
  constructor(private catService: CatService) {

  }

  @Get('/say')
  say(): string {
    return this.catService.say();
  }
}
