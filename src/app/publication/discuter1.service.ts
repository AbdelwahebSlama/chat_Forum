import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable, Subject} from 'rxjs';
import {Commentaire} from '../models/commentaire';
import {Souscommentaire} from '../models/souscommentaire';
import {Message} from "../model/message";
import {MessageFils} from "../model/message-fils";
import {User} from "../model/user";
@Injectable({
  providedIn: 'root'
})
export class Discuter1Service {
  private socket = io('http://localhost:3000', { transport : ['websocket'] });
  tabComments: Commentaire[] = [];
  tabSousComments: Souscommentaire[] = [];
  sousComments: Souscommentaire[] = [];
  commentSubjectClick = new Subject<Commentaire>();

  constructor() {
  }

  joinRoom(data) {
    this.socket.emit('join', data);
  }

  newUserJoined() {
    const observable = new Observable<{user: User, message: string}>((observer ) => {
      this.socket.on('new user joined', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); } ;
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
  sousMessageReceived() {
    const observable = new Observable<{indx: number, newMsg: MessageFils }>((observer) => {
      this.socket.on('new Sousmessage', (data) => {
        observer.next(data);
        console.log('je suis les ous message', data);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }
  sendSousMessage(data) {
    this.socket.emit('sousMessage', data);
  }
  errorMessageReceived() {
    const observable = new Observable<{erreur: string}>((observer) => {
      this.socket.on('erreur_message', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }

  newMessageReceived() {
    const observable = new Observable<Message>((observer) => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }
  sendMessage(data) {
    this.socket.emit('message', data);
  }
  send(data) {
    this.socket.emit('post', data);
  }

  newPost() {
    const observable = new Observable<{user: string, message: string, comment: Souscommentaire}>((observer) => {
      this.socket.on('new post', (data) => {
        observer.next(data);
        const comm: Souscommentaire = new Souscommentaire(data.message, data.comment);
        this.tabSousComments.push(comm);
      });
      return () => {this.socket.disconnect(); } ;
    });

    return observable;
  }
  AddComment(comment: Commentaire) {
    this.tabComments.push(comment);
  }
  getComment(): Commentaire[] {
    return  this.tabComments;
  }
  AddSousComment(sousComment: Souscommentaire): void  {
    this.tabSousComments.push(sousComment);
  }
  getSousComment(comment: Commentaire): Souscommentaire[] {
    // tslint:disable-next-line:prefer-for-of
    for (let  i = 0; i < this.tabSousComments.length; i++) {
      if (this.tabSousComments[i].comment === comment ) {
       let trouve = false;
        // tslint:disable-next-line:prefer-for-of
       for (let j = 0 ; j < this.sousComments.length; j++) {
          if (this.sousComments[j] === this.tabSousComments[i]) {
            trouve = true;
          }
        }
       if (!trouve) {
          this.sousComments.push(this.tabSousComments[i]);
        }
      }
    }
    return this.sousComments;
  }

  CommentSelected(comment: Commentaire) {
    console.log('je vais despatchr un commentaire' , comment);
    this.commentSubjectClick.next(comment);
  }

}
