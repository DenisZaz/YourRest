import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {UsersService} from "../../Shared/Services/user.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
  constructor(private authService: UsersService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any  {
    return this.authService.isAuthenticated().then(isAuth => {
      if (isAuth) {
        this.router.navigate(['Auth'], {queryParams: {auth: false}})
      } else {
        return true
      }
      return false
    })
  }
}
