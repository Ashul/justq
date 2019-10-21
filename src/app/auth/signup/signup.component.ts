import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }


    OnSignup(form:NgForm){
      const user = form.value;      
      this.authService.createUser(user)
      .subscribe(data=>{})

      this.router.navigate(['/signin'])

    }
    ngOnInit() {
    }

}
