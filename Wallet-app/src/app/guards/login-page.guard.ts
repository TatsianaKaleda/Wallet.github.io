import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {Injectable} from '@angular/core';

@Injectable()
export class LoginPageGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private router: Router)
  {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.cookieService.get('email')) {
      return true;
    }

    this.router.navigate(['/signin'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
