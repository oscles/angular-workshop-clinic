
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

// permite cargar funciones desde fuera de angular
declare function initPlugin();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public remember = false;
  auth2: any;

  constructor(
    private router: Router,
    private userServices: UserService
  ) { }

  ngOnInit() {
    initPlugin();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email) { this.remember = true; }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1017405540216-o8snqcuoj8m0idjg48qlocjjn4s2g9dt.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSingnin(document.getElementById('btn-google'));
    });
  }

  attachSingnin(elementHTML) {
    this.auth2.attachClickHandler(elementHTML, {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      this.userServices.authenticateGoogle(token)
        .subscribe(resp => window.location.href = '/dashboard');
      console.log(token);
    });
  }

  login(form: NgForm) {
    const remember: boolean = form.value.remember;
    if (form.invalid) { return; }
    const user = new User(null, form.value.email, form.value.password);
    this.userServices.authenticate(user, remember)
      .subscribe(resp => this.router.navigate(['/dashboard']));
  }
}
