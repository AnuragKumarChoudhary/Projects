import { LoginInput } from '../models/login.model';

export class LoginService{
    getLoginInputObject(){
       var getLoginObject: LoginInput = {
        email:'',
        password:''
       }as any;
       return getLoginObject;
      }
}