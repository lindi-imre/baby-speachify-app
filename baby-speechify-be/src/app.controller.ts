import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return 'API is running';
  }

  // ✅ Catch-all route for Angular frontend

}
