import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class GameSocketService {
  @WebSocketServer()
  server: Server;

  private buzzList: any[] = [];

  @SubscribeMessage('command')
  handleDecadeSelect(client: any, payload: { command: string }) {
    console.log(payload);
    this.server.emit('command', payload);
    // }
  }

  
}