import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  say() {
    return 'miao miao';
  }
}
