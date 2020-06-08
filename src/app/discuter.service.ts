import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DiscuterService {
  private socket = io('http://localhost:3007', { transport : ['websocket'] });
  constructor() { }
  send(data) {
    this.socket.emit('new_message', data);

  }
  newMessageReceived() {
    const observable = new Observable<{ message: string, username: string}>((observer) => {
      this.socket.on('new_message', (data) => {
        observer.next(data);
        console.log(data.username);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }
  senduser(data) {
    this.socket.emit('change_username', data);

  }
  key(data) {
    this.socket.emit('typing', data);
  }
  typing() {
    const observable = new Observable<{ username: string}>((observer) => {
      this.socket.on('typing', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }
}
