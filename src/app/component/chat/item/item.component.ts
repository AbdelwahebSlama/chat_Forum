import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {StatusService} from "../../../service/groupe/status.service";
import {DiscuterService} from "../../../service/chat/discuter.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() user: User;
  users: User[] ;
  active = 'connecté';
  disactive = 'diconnecté';

  constructor(private statusService: StatusService,
              private chatprive: DiscuterService) {

  }

  ngOnInit(): void {
    // console.log(this.user);
  }
  getUserSelected(user: User) {
    // const toke = localStorage.getItem('token');
    // console.log('reciver id ', this.user.id);
    // this.chatprive.sendRoom({ token: toke, userIdReciver: this.user.id});
    this.statusService.getUserSelected(user);
  }
}
