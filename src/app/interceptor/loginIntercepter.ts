import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class LoginIntercepter implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const colneReq = req.clone( {
        headers: new HttpHeaders().set('Authorization', token)
      });
      return next.handle(colneReq);
    }
    return next.handle(req);
  }
}
