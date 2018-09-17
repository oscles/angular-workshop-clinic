import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function initPlugin();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  formulary: FormGroup;

  constructor(
    private userServices: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    initPlugin();

    this.formulary = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
      passwordConfirm: new FormControl(null, Validators.required),
      condition: new FormControl(false),
    }, { validators: this.areEquals('password', 'passwordConfirm') });
  }

  registerUser() {
    if (this.formulary.invalid){
      //Swal('Error...', 'Error al procesar la acción!', 'error');
      return;
    }

    let user = new User(
      this.formulary.value.name,
      this.formulary.value.email,
      this.formulary.value.password,
    );

    this.userServices.createUser(user)
      .subscribe(res => this.router.navigate(['/login']));
  }

  areEquals(field: string, field2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[field].value;
      let pass2 = group.controls[field2].value;

      if (pass1 === pass2) return null;
      // en caso de que las contraseñas no coincidan 
      return {
        areNotEquals: true
      }
    }
  }

}
