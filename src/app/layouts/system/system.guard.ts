import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {UsersService} from "../../Shared/Services/user.service";

@Injectable({providedIn: 'root'})
export class SystemGuard implements CanActivate{
  constructor(private sysService: UsersService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any  {
    return this.sysService.isAuthenticated().then(isAuth => {
      if (isAuth) {
        this.router.navigate(['Site'], {queryParams: {auth: false}})
      } else {
        return true
      }
      return false
    })
  }
}
