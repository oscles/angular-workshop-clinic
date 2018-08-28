import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// permite cargar funciones desde fuera de angular
declare function initPlugin();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    initPlugin();
  }

  login() {
    this.router.navigate(['/dashboard']);
  }
}
