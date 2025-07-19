import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameSocketService } from './game-socket/game-socket.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GameSocketService],
})
export class AppModule {}
