import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  say() {
    return 'wang wang';
  }
}
