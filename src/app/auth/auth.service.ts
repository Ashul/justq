import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService {

    constructor(private router: Router, private http: HttpClient) {
        }

// Create User
createUser(user) {
    console.log(user);
    return this.http.post('/api/users/signup', user);
}
// signIn User
signInUser(user) {
   return this.http.post('/api/users/signin', user);
   }

// get Token
getToken() {
    return localStorage.getItem('token');
}

// get user
getUser() {
    const userdata = {
        name: localStorage.getItem('name'),
        isAdmin: localStorage.getItem('isAdmin'),
        email: localStorage.getItem('email')
    };
    return userdata;
}


// Is LoggedIn
loggedIn() {
    return !! localStorage.getItem('token');
}

}
