import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/login/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Discuter1Service} from "../../publication/discuter1.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  groupId: string;
  username: string;

  constructor(public authService: AuthService,
              private  activatedRoute: ActivatedRoute,
              private router: Router,
              private chatService: Discuter1Service) { }

  ngOnInit(): void {
  }
  logOut() {
    this.username = localStorage.getItem('username');
    this.groupId = localStorage.getItem('groupId');
    this.chatService.leaveRoom({user: this.username , room: this.groupId})
    this.authService.logOut();
    this.router.navigate(['']);
  }

}
