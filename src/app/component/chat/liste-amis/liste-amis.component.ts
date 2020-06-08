import {Component, Input, OnInit} from '@angular/core';
import {Groupe} from "../../../model/groupe";
import {StatusService} from "../../../service/groupe/status.service";
import {User} from "../../../model/user";
import {consoleTestResultsHandler} from "tslint/lib/test";
import {ActivatedRoute, Router} from "@angular/router";
import {Discuter1Service} from "../../../publication/discuter1.service";

@Component({
  selector: 'app-liste-amis',
  templateUrl: './liste-amis.component.html',
  styleUrls: ['./liste-amis.component.css']
})
export class ListeAmisComponent implements OnInit {
  group: Groupe;
  i: number;
  j: number;
  index: number;
  groupId: string;
  users: User[] = [];
  connectedUsers: User[] = [];
  disconnectedUsers: User[] = [];

  constructor(private statusService: StatusService,
              private  activatedRoute: ActivatedRoute,
              private discuter1Service: Discuter1Service) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (paramter) => {
        this.groupId = paramter.id;
        this.statusService.getGroupe(this.groupId).subscribe(
          (group) => {
            this.group = group;
            this.users = this.group.membre;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
    this.discuter1Service.newUserJoined().subscribe(
      (data) => {
        //  console.log('new user joined ', data.user);
        this.i = this.users.indexOf(data.user);
        for (this.j = 0; this.j < this.users.length; this.j++) {
          if (this.users[this.j].id === data.user.id) {
            this.index = this.j;
          }
        }
        this.users.slice(this.index, 1);
        this.users.push(data.user);
      }
    );
    this.discuter1Service.userLeftRoom().subscribe(
      () => {
        //tab disconnect
      }
    );
  }
}
