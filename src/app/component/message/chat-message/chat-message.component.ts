import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {StatusService} from "../../../service/groupe/status.service";
import {DiscuterService} from "../../../service/chat/discuter.service";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  isSlim = false;
  userChat: User;
  message: string;
  data1: string;
  erreur: string;
  user: string;
  user1: string;
  style = 'block';
  display = 'display';
  datauser: string;
  messageArray: Array<{ message: string, username: string }> = [];
  messageArray1: Array<{ message: string, username: string }> = [];

  constructor(private  statusService: StatusService,
              private discuterService: DiscuterService) {
  }

  ngOnInit(): void {
    this.statusService.itemClickSubject.subscribe(
      (use) => {
        this.userChat = use;
        const toke = localStorage.getItem('token');
        this.discuterService.sendRoom({token: toke, userIdReciver: this.userChat._id});
      }
    );
    this.discuterService.typing().subscribe(
      (data) => {
        this.datauser = data.username;
        setTimeout(() => {
          this.datauser = '';
        }, 1000);
      }
    );
    this.discuterService.newMessageReceived().subscribe(
      (data) => {
        this.messageArray.push(data);
        console.log(data);
        console.log('this user est ', this.user);
      });
    this.discuterService.erreurReceived().subscribe(
      (data) => {
        console.log(data);
      });
  }

  sendMessage() {
    this.discuterService.send({message: this.message, user: this.user});
    this.message = '';
  }

  send() {
    this.discuterService.senduser({user: this.user, room: this.user1});
  }

  keypress(event: any) {
    this.discuterService.key({user: this.user});
  }

  keyout() {
    // if (this.style === 'block') {
    //   this.style = 'none';
    // } else {
    //   this.style = 'block';
    // }
    this.userChat = null;
  }

  Onrduire() {
    this.isSlim = !this.isSlim;
    console.log(this.isSlim);
  }
}
