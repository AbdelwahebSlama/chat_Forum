import {Component, OnInit} from '@angular/core';
import {SocketService} from '../../../service/groupe/socket.service';
import {ActivatedRoute} from "@angular/router";
import {Message} from "../../../model/message";
import {Discuter1Service} from "../../../publication/discuter1.service";

@Component({
  selector: 'app-zone-text',
  templateUrl: './zone-text.component.html',
  styleUrls: ['./zone-text.component.css']
})
export class ZoneTextComponent implements OnInit {
  commentaire: string;
  idgroup: string;
  messgae: Message;
  user = 'bb';
  room = 'sport';
  messageText: string;
  title: string;
  player: YT.Player;
  id2 = 'https://www.youtube.com/watch?v=aHiyubvPF8w';
  // video_id = '';
  id = '5wtnKulcquA';
  messageArray: Array<{ user: string, message: string }> = [];

  constructor(private chatService: Discuter1Service,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parametre) => {
        this.idgroup = parametre.id;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  join() {
    this.chatService.joinRoom({user: this.user, room: this.room});
  }

  leave() {
    this.chatService.leaveRoom({user: this.user, room: this.room});
  }
  getIdVideo(Url): string {
    var video_id = Url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    } else {
      video_id = video_id.substring(0, this.id2.length);
    }
    return video_id;
  }
  sendMessage() {
    var titre  = '';
    if (this.title) {
      titre = this.getIdVideo(this.title);
    }
    const auth = localStorage.getItem('token');
    this.chatService.sendMessage({message: this.messageText, title: titre, room: this.idgroup, token: auth});
    this.messageText = '';
    this.title = '';
    // this.chatService.sendMessage({user: this.user, room: this.room, message: this.messageText});
  }
}
