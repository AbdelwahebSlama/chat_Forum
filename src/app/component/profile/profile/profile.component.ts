import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {StatusService} from "../../../service/groupe/status.service";
import {Groupe} from "../../../model/groupe";
import {GroupeService} from "../../../service/groupe/groupe.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  Groupes: Groupe[] = [];
  adminGroup: Groupe[] = [];
  i: number;

  // userId: string;
  constructor(private statusService: StatusService,
              private groupeService: GroupeService) {
  }

  ngOnInit(): void {
    this.statusService.getProfile().subscribe(
      (user) => {
        this.user = user;
      }
    );
    this.groupeService.lsitGroupe().subscribe(
      (group) => {
        this.Groupes = group;
      },
      (error) => {
        console.log(error);
      }
    );
    this.listerGroupe();
    console.log('tab admin groupe ', this.adminGroup);
  }

  listerGroupe() {
    for (this.i = 0; this.i < this.Groupes.length; this.i++) {
      if (this.Groupes[this.i].UserId === this.user._id) {
        this.adminGroup.push(this.Groupes[this.i]);
      }
    }
  }
}
