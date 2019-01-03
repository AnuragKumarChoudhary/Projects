import { Component, OnInit } from '@angular/core';
import { SignUpData } from '../services/signup.service';
import { SignUpInput } from '../models/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpInput:SignUpInput;
  
  constructor(private signUpServices: SignUpData) { }

  ngOnInit() {
    this.signUpInput=this.signUpServices.getSignUpData();
  }

  signup(){
   // console.log(this.signUpInput);

    this.signUpServices.signupServiceMethod(this.signUpInput.id)
      .subscribe(data => {
        console.log("response is ", JSON.stringify(data));

      });
    
  }

}
