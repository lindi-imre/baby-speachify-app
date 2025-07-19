import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameSocketService } from './game-socket/game-socket.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // path to Angular dist
      exclude: ['/api*'], // optional: exclude API routes from static handling
    }),],
  controllers: [AppController],
  providers: [AppService, GameSocketService],
})
export class AppModule {}
