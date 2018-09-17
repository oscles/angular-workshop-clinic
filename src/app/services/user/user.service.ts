import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config.ts/config';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = URL_SERVICES;
  private user: User;
  private token: string;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    this.loadLocalStorage();
  }

  logIn() {
    return this.token.length > 1;
  }

  logout () {
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  loadLocalStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }

  saveLocalStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.token = token;
    this.user = user;
    this.router.navigate(['/login']);
  }

  authenticate(user: User, remember: boolean) {
    if (remember) {
      localStorage.setItem('email', user.email.toString());
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post(`${this.url}/login`, user)
      .pipe(map((resp: any) => {
        this.saveLocalStorage(resp.id, resp.token, resp.user);
        return true;
      }));
  }

  authenticateGoogle(token: string) {
    const url = `${this.url}/login/google`;
    return this.http.post(url, { token })
      .pipe(map((resp: any) => {
        this.saveLocalStorage(resp.id, resp.token, resp.user);
        return true;
      }));
  }

  createUser(user: User) {
    return this.http.post(`${this.url}/user`, user)
      .pipe(map((resp: any) => {
        Swal('Success...', `Usuario ${user.name} registrado con exito!`, 'success');
        return resp.user;
      }));
  }
}


