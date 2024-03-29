import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly config: ConfigService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/env")
  getEnv(): string {
   return  this.config.get("testenv") ?? "none"
  }
}
