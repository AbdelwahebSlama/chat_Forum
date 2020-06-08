import { Component, OnInit } from '@angular/core';
import {GroupeService} from "../../../service/groupe/groupe.service";
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajoutgroupe',
  templateUrl: './ajoutgroupe.component.html',
  styleUrls: ['./ajoutgroupe.component.css']
})
export class AjoutgroupeComponent implements OnInit {
  errorMessage = '';
  constructor(private groupeService: GroupeService,
              private router: Router) { }

  ngOnInit(): void {
  }
  ajouterGroupe(ajoutGroupForm: NgForm): void {
    this.groupeService.ajoutgroupe(ajoutGroupForm.value).subscribe(
      (respons) => {
        this.errorMessage = '';
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error.error.error);
        this.errorMessage = error.error.error;
      }
    );
  }
}
