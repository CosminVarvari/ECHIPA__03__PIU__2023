import { Injectable } from "@angular/core";
import { ActivatedRoute, CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute) {}

  canActivate(): boolean {
    let role = sessionStorage.getItem('role');
    if (role === 'admin') {
      return true;
    } else {
      this.router.navigate([`../user`], {relativeTo: this.route});
      return false;
    }
  }
}
