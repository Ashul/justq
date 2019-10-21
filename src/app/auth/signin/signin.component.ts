import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }
SignIn(form:NgForm){
  let userData = form.value
  this.authService.signInUser(userData)
  .subscribe((data:any)=>{

    localStorage.setItem('token', data.token)
    localStorage.setItem('name', data.name)
    localStorage.setItem('email', data.email)
    localStorage.setItem('id', data.id)
    localStorage.setItem('isAdmin', data.isAdmin)


    this.router.navigate(['/ticket-list'])
    
   
  })

}
}
