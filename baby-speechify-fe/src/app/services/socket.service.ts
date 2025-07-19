import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { io, Socket } from "socket.io-client";

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket!: Socket;

  // Replace with your server URL (e.g. http://localhost:3000)
  private readonly SERVER_URL = 'https://https://baby-speachify-app.onrender.com:8080';

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = io(this.SERVER_URL);

    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server with id:', this.socket.id);
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });
  }

  // Send data to server
  send(eventName: string, data: string) {
    this.socket.emit(eventName, data);
  }

  onCommandReceived(callback: (command: string) => void) {
    this.socket.on('command', callback);
  }

  // Listen to data from server
  on<T>(eventName: string): Observable<T> {
    return new Observable<T>((subscriber) => {
      this.socket.on(eventName, (data: T) => {
        subscriber.next(data);
      });

      // Cleanup on unsubscribe
      return () => {
        this.socket.off(eventName);
      };
    });
  }
}