import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(private socketService: SocketService) {};


sendNext() {  
  this.socketService.send('command','next');
}
sendPlay() {
this.socketService.send('command','play');
}

}
