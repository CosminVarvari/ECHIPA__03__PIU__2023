import { Injectable } from "@angular/core";
import { ActivatedRoute, CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoleResolver implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute) {}

  canActivate(): boolean {
    let role = sessionStorage.getItem('role');

    if (role === 'user'){
      this.router.navigate([`user`], {relativeTo: this.route});
      return true;
    }
    else if (role === 'admin'){
      this.router.navigate([`admin`], {relativeTo: this.route});
      return true;
    }
    else {
      return false;
    }
  }
}
