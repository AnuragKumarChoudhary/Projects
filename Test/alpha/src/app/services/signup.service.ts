import { SignUpInput } from '../models/signup.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/Operators';

const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable()
export class SignUpData {
    constructor(private http: HttpClient) { }

    signupUrl = environment.url + '/loginInfo';

    signupServiceMethod(id: number):
        Observable<any> {
        
        return this.http.get<any>(this.signupUrl).pipe(
            tap(data => console.log("Detail is" + JSON.stringify(data)))
        )
    }

    getSignUpData() {
        var getSignUpObject: SignUpInput = {

        } as any;
        return getSignUpObject;
    }
}