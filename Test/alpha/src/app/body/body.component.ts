import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInput } from '../models/login.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  email;
  password;

  loginInput: LoginInput;

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginInput = this.loginService.getLoginInputObject();
  }

  login() {

    var loginInputData = {
      email: '',
      password: ''
    }

    this.loginInput.email = this.email;
    this.loginInput.password = this.password;
    console.log("login input is", JSON.stringify(this.loginInput));

    loginInputData.email = this.email;
    loginInputData.password = this.password;
    console.log("login input is", JSON.stringify(loginInputData));

    //this.route.navigate(['home', { value: "anurag" }]);
  }

}
