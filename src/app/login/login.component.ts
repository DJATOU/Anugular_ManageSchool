import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorLogin = false;



  constructor(
    public http: HttpClient,
    private router: Router

  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
      password : new FormControl('', [Validators.required, Validators.maxLength(15)]),
    });
  }


  login(authentification) {
    localStorage.setItem('id_token', authentification.token);
  }

  submit(form) {
    console.log(form.value);
  }



}
