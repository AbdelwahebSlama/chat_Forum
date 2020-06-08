import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Message} from "../../../model/message";
import {StatusService} from "../../../service/groupe/status.service";
import {HttpParams} from "@angular/common/http";
import {Commentaire} from "../../../models/commentaire";
import {Discuter1Service} from "../../../publication/discuter1.service";
import {AuthService} from "../../../service/login/auth.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, OnDestroy {
  @Input() idSouComment: string;
  player: YT.Player;
  listStatus: Message [] = [];
  page = 1;
  totalRec: number;
  bool: number;
  isvalide = false;
  style = 'none';
  display = 'display';
  groupId: string;
  username: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private statusService: StatusService,
              private socketService: Discuter1Service,
              private authService: AuthService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (parametre) => {
        this.statusService.getStatus(parametre.id).subscribe(
          (status) => {
            this.listStatus = status;
          },
          (error) => {
            console.log('idparamtre', parametre.id);
            this.router.navigate(['']);
          }
        );
      }
    );
    this.socketService.newMessageReceived().subscribe(
      (data) => {
        this.listStatus.push(data);
        // this.listStatus.reverse();
      }
    );
    this.socketService.sousMessageReceived().subscribe(
      (data) => {
        this.listStatus[data.indx].comments.push(data.newMsg);
      }
    );
    this.socketService.errorMessageReceived().subscribe(
      (error) => {
        console.log(error);
      }
    );
  }
  savePlayer(player) {
    this.player = player;
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }
  show(index, messgeId) {
    this.idSouComment = messgeId;
    this.socketService.joinRoom({user: 'mais je suis le user de sous message ', room: messgeId});
    console.log('click sur join of grouge comonent ', messgeId);
    console.log('message id', messgeId);
    if (this.style === 'none') {
      this.style = 'block';
    } else {
      this.style = 'none';
    }
    this.bool = index;
    this.isvalide = !this.isvalide;
    // this.chatService.CommentSelected(commentair);
    console.log(index);
  }

  ngOnDestroy(): void {
    this.username = localStorage.getItem('username');
    this.groupId = localStorage.getItem('groupId');
    this.socketService.leaveRoom({user: this.username, room: this.groupId});
  }

}
