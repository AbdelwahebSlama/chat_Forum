import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "../service/login/auth.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {StatusComponent} from "../component/publication/status/status.component";
import {CanComponentDeactivate} from "./CanComponentDeactivate";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login', localStorage.getItem('groupId')]);
      return false;
    }
  }
  canDeactivate(component: CanComponentDeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {

    let url: string = state.url;
    console.log('Url: '+ url);

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
