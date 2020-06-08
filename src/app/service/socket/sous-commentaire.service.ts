// import { Injectable } from '@angular/core';
// import {Commentaire} from "../../models/commentaire";
// import {Souscommentaire} from "../../models/souscommentaire";
// import {Observable, Subject} from "rxjs";
// import {Message} from '../../model/message';
// import * as io from 'socket.io-client';
// import {MessageFils} from "../../model/message-fils";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class SousCommentaireService {
//   private socket = io('http://localhost:3000', { transport : ['websocket'] });
//   sousComments: Souscommentaire[] = [];
//   commentSubjectClick = new Subject<Commentaire>();
//
//   constructor() {
//   }
//
//   joinRoom(data) {
//     this.socket.emit('join', data);
//   }
//
//   newUserJoined() {
//     const observable = new Observable<{user: string, message: string}>((observer ) => {
//       this.socket.on('new user joined', (data) => {
//         observer.next(data);
//       });
//       return () => {this.socket.disconnect(); } ;
//     });
//     return observable;
//   }
//
//   leaveRoom(data) {
//     this.socket.emit('leave', data);
//   }
//
//   userLeftRoom() {
//     const observable = new Observable<{user: string, message: string}>((observer) => {
//       this.socket.on('left room', (data) => {
//         observer.next(data);
//       });
//       return () => {this.socket.disconnect(); } ;
//     });
//
//     return observable;
//   }
//
//
//   errorMessageReceived() {
//     const observable = new Observable<{erreur: string}>((observer) => {
//       this.socket.on('erreur_message', (data) => {
//         observer.next(data);
//       });
//       return () => {this.socket.disconnect(); } ;
//     });
//
//     return observable;
//   }
//
//   sousMessageReceived() {
//     const observable = new Observable<MessageFils>((observer) => {
//       this.socket.on('new Sousmessage', (data) => {
//         observer.next(data);
//         console.log('je suis les ous message', data);
//       });
//       return () => {this.socket.disconnect(); } ;
//     });
//
//     return observable;
//   }
//   sendSousMessage(data) {
//     this.socket.emit('sousMessage', data);
//   }
//   //senpost
//   sendSous(data) {
//     this.socket.emit('post', data);
//   }
// }
