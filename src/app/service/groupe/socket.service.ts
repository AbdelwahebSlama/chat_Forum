import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';
import {Message} from "../../model/message";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket = io('http://localhost:3000', { transport : ['websocket'] });
  constructor() { }

  joinRoom(data) {
    this.socket.emit('join', data);
  }

  newUserJoined() {
    // console.log(' this is service skocket user jointed ');
    const observable = new Observable<{user: string, message: string}>((observer ) => {
      this.socket.on('new_user_joined', (data) => {
        observer.next(data);
        console.log(' this is service skocket user jointed ', data.user);
      }
      );
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  leaveRoom(data) {
    this.socket.emit('leave', data);
  }

  userLeftRoom() {
    const observable = new Observable<{user: string, message: string}>((observer) => {
      this.socket.on('left room', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    const observable = new Observable<any>((observer) => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }
  //senpost
  send(data) {
    this.socket.emit('post', data);
  }

  newPost() {
    const observable = new Observable<{user: string, message: string}>((observer) => {
      this.socket.on('new post', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }
}
