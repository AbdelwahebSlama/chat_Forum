import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DiscuterService} from "../discuter.service";

@Component({
  selector: 'app-discuter',
  templateUrl: './discuter.component.html',
  styleUrls: ['./discuter.component.scss']
})
export class DiscuterComponent implements OnInit {
  message: string;
  data1: string;
  data2: string;
  user: string;
  user1: string;
  style = 'block';
  display = 'display';
  datauser: string;
  @ViewChild('chatroom', {read: ElementRef}) private chatroom: ElementRef;
  messageArray: Array<{message: string, username: string}> = [];
  messageArray1: Array<{message: string, username: string}> = [];

  constructor(private discuterService: DiscuterService,
              private render: Renderer2,
              private el: ElementRef) { }

  ngOnInit() {
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
         console.log(this.user);
      });
  }

  sendMessage() {
    this.discuterService.send({ message: this.message});
    this.message = '';
  }

  send() {
    this.discuterService.senduser({user: this.user, room: this.user1});
  }
  keypress(event: any) {
      this.discuterService.key({user: this.user});
  }

  keyout() {
if (this.style === 'block') {
  this.style = 'none';
} else {
  this.style = 'block';
}
  }
}
