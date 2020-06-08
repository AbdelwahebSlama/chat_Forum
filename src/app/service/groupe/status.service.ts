import { Injectable } from '@angular/core';
import Apis from 'src/app/Globals';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Groupe} from "../../model/groupe";
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  groupeClickSubject = new  Subject<User[]>();
  itemClickSubject = new Subject<User>();

  constructor(private http: HttpClient) { }
  getStatus(idgroupe): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = {'content-Type': 'application/json', Authorization: 'Bearer ' +  token}
    return  this.http.get<any>(Apis.api_getStatu + idgroupe , { 'headers' : headers});
  }
  // getListFriend(groupId): Observable<any> {
  //
  // }
  getGroupeObject(users: User[]) {
    this.groupeClickSubject.next(users);
  }
  getGroupe(groupId): Observable<Groupe> {
    return  this.http.get<any>(Apis.api_getgrpById + groupId );
  }
  getUserSelected(user: User) {
    this.itemClickSubject.next(user);
  }
  getProfile(): Observable<User> {
    const token = localStorage.getItem('token');
    const headers = {'content-Type': 'application/json', Authorization: 'Bearer ' +  token}
    return  this.http.get<any>('http://localhost:3005/posts/users/me/', { 'headers' : headers} );
  }
}
