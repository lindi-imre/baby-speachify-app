import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return 'API is running';
  }

  @Get('test')
  root2() {
    return 'API is running';
  }
}
