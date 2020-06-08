import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import APIS from 'src/app/Globals';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // link = 'http://localhost:3005/posts/users/login/';

  constructor(
    private http: HttpClient
  ) { }
  login(credentials, groupId): Observable<any> {
    return this.http.post<any>(APIS.api_Login + groupId, credentials);
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('groupId');
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

}
