import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) {
   }

  IsValid(){
    if((this.router.url !='/')&&(this.router.url != '/signin')&&(this.router.url != '/signup')){
      return true
    }
    return false;
  }
  logOut(){
      localStorage.clear()
      this.router.navigate(['/signin'])
  }

  ngOnInit() {}


  }

