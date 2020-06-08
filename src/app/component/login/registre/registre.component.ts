import { Component, OnInit } from '@angular/core';
import {RegistreService} from "../../../service/registre/registre.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {StatusService} from "../../../service/groupe/status.service";
import {GroupeService} from "../../../service/groupe/groupe.service";
import {Groupe} from "../../../model/groupe";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  erroMessage = '';
  listgroupe: Groupe [] = [];
  image: string;

  constructor(private registreService: RegistreService,
              private router: Router,
              private groupeService: GroupeService,) { }

  ngOnInit(): void {
    this.groupeService.lsitGroupe().subscribe(
      (groupes) => {
        // let id = groupes.id;
        console.log('id grp',  groupes[0].id);
        // console.log(grou);
        // console.log(groupes);
        this.listgroupe = groupes;
      },
      (error) => {
        alert(error.error.error);
      }
    );
  }
  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }
  registre(registreForm: NgForm) {
    this.registreService.regitre(registreForm.value, this.image).subscribe(
      () => {
        this.erroMessage = '';
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error.error.error);
        this.erroMessage = error.error.error;
      }
    );
  }
}
