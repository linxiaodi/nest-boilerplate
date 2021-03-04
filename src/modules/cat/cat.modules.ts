import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { LogMiddleware } from './log.middleware';

@Module({
  providers: [CatService],
  controllers: [CatController],
  exports: [CatService]
})
export class CatModules implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    return consumer.apply(LogMiddleware).forRoutes('cat/say')
  }
}
