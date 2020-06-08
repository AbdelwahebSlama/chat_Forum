import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import APIS from 'src/app/Globals';
import {Observable} from "rxjs";
import {Groupe} from "../../model/groupe";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  groupeTab: Groupe [] = [];
  constructor(private http: HttpClient) { }

  ajoutgroupe(description): Observable<any> {
    const token = localStorage.getItem('token');
    const body = JSON.stringify(description);
    const headers = {'content-Type': 'application/json', Authorization: 'Bearer ' +  token}
    return this.http.post(APIS.api_ajoutgrp, body, { 'headers' : headers} );
  }
  lsitGroupe(): Observable<Groupe[]> {
   return this.http.get<Groupe[]>(APIS.api_getgrp);
  }
}
