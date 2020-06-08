import {Component, Input, OnInit} from '@angular/core';
import {Groupe} from "../../model/groupe";
import {GroupeService} from "../../service/groupe/groupe.service";
import {SocketService} from "../../service/groupe/socket.service";
import {ActivatedRoute} from "@angular/router";
import {Discuter1Service} from "../../publication/discuter1.service";
import {StatusService} from "../../service/groupe/status.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  page = 1;
  totalRec: number;
  @Input() listgroupe: Groupe [] = [];
  constructor(private groupeService: GroupeService,
              private statusService: StatusService,
              private socketService: Discuter1Service,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.groupeService.lsitGroupe().subscribe(
      (groupes) => {
        console.log('id grp',  groupes[0].id);
        this.listgroupe = groupes;
      },
      (error) => {
        alert(error.error.error);
      }
    );
  }

  join( idgroup) {
    this.socketService.joinRoom({user: 'slama', room: idgroup});
    console.log('click sur join of grouge comonent ', idgroup);
  }
  selectedGroupe(membre: User[]): void {
    this.statusService.getGroupeObject(membre);
  }
}
