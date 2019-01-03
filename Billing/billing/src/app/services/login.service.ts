import { LoginInput } from '../model/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    loginUrl = environment.url + '/login';

    loginServiceMethod(loginInput: LoginInput) {
        return this.http.post<any>(this.loginUrl, loginInput, httpOptions).pipe(
            tap(_ => console.log('Login'))
        )
    }


    getLoginInputObject() {
        var getLoginObject: LoginInput = {
            email: '',
            password: ''
        } as any;
        return getLoginObject;
    }
}