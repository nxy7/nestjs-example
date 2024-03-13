import { Injectable, MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NextFunction } from 'express';
import { Mysql } from './mysql/mysql';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Mysql],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
    // .forRoutes('')
  }
}

@Injectable()
class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req)
    next();
  }
}
