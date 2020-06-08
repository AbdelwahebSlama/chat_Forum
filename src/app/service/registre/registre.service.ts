import { Injectable } from '@angular/core';
import APIS from 'src/app/Globals';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {

  constructor(private http: HttpClient) { }
  regitre(credentials, image): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(APIS.api_registre,{credentials, formData}  );
  }
}
