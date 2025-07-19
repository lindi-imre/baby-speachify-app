import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return 'API is running';
  }

  // ✅ Catch-all route for Angular frontend

  @Get('*')
renderFrontend(@Res() res: Response) {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'));
}
}
