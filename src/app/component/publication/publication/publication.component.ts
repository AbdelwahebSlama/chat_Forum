import {Component, OnInit} from '@angular/core';
import {SocketService} from "../../../service/groupe/socket.service";
import {ActivatedRoute} from "@angular/router";
import {Discuter1Service} from "../../../publication/discuter1.service";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  idgroup = '';
  alertMessage = '';
  alertMessageQuite = '';

  arrayAlert: Array<{ message: string, user: string }>

  constructor(private socketService: Discuter1Service,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(' publication console ');
    this.activatedRoute.params.subscribe(
      (parametre) => {
        this.idgroup = parametre.id;
      },
      (error) => {
        console.log(error);
      }
    );
    this.socketService.newUserJoined().subscribe(
      (data) => {
        console.log(' user jointed ');
        console.log(' user jointed  PUBLICATION', data.user);
        this.alertMessage = data.user.name + ' ' + data.message;
        // this.arrayAlert.push(data);
      },
      (error) => {
        console.log(error.error.error);
      }
    );
    this.socketService.userLeftRoom().subscribe(
      (data) => {
        this.alertMessageQuite = data.user + ' ' + data.message;
        console.log('quitte', data);
      },
      (error) => {
        console.log(error.error.error);
      }
    );
  }

  join() {
    this.socketService.joinRoom({user: 'slama', room: this.idgroup});
    console.log('click sur join');
    this.socketService.newUserJoined().subscribe(
      (data) => {
        // console.log(' user jointed ', data);
      });
  }

  leave() {
    this.socketService.leaveRoom({user: '', room: this.idgroup});
  }

  send() {
    const auth = localStorage.getItem('token');
    this.socketService.joinRoom({message: 'aaaaaaaaaaa', groupId: this.idgroup});
  }
}
