import {Component, Input, OnInit} from '@angular/core';
import {MessageFils} from "../../../model/message-fils";
import {Discuter1Service} from "../../../publication/discuter1.service";


@Component({
  selector: 'app-sous-commentaire',
  templateUrl: './sous-commentaire.component.html',
  styleUrls: ['./sous-commentaire.component.scss']
})
export class SousCommentaireComponent implements OnInit {
  @Input() sousComment: MessageFils;
  @Input() listSousComment: MessageFils[] = [];

  constructor(private sousCommentaireServic: Discuter1Service) { }

  ngOnInit(): void {
    this.sousCommentaireServic.sousMessageReceived().subscribe(
      (data) => {
        console.log('sous message', data);
        // this.listSousComment.push(data);
        console.log('liste of sous comment', this.listSousComment);
      }
    );
  }

}
