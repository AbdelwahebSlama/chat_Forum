import {Component, Input, OnInit} from '@angular/core';
import {Discuter1Service} from "../../../publication/discuter1.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-zone-text-sous-comment',
  templateUrl: './zone-text-sous-comment.component.html',
  styleUrls: ['./zone-text-sous-comment.component.scss']
})
export class ZoneTextSousCommentComponent implements OnInit {
  messageText: string;
  @Input() index: number;
  @Input() idMessage = '';

  constructor(private sousCommentaireServic: Discuter1Service,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  sendMessage() {
    const auth = localStorage.getItem('token');
    this.sousCommentaireServic.sendSousMessage({message: this.messageText, room: this.idMessage,  token: auth, index: this.index});
    this.messageText = '';
    // this.sousCommentaireServic.sendMessage({user: this.user, room: this.room, message: this.messageText});
  }

}
