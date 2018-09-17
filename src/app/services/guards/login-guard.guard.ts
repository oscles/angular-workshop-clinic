import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    private userServices: UserService,
    private router: Router
    ) {}

  canActivate(): boolean {
    console.log('Iniando el login guard');
    if (this.userServices.logIn()) {
      console.log('Paso el guard');
    } else {
      console.log('bloqueado por el guard');
      this.router.navigate(['/login']);
    }
    return true;
  }
}
