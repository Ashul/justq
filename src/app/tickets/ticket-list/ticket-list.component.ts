import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  myTickets;
  status:false
  userEmail = localStorage.getItem('email')
  isAdmin = localStorage.getItem('isAdmin')

  constructor(private ticketService:TicketService, private authService:AuthService) { }

  ngOnInit(){

    this.userEmail = this.authService.getUser().email
    this.isAdmin = this.authService.getUser().isAdmin
  
    //call get my ticket function
    this.GetMyTickets()
  }

//get all my tickets
  GetMyTickets(){
    let data ={
      email:this.userEmail
    }
    if(this.isAdmin === "true"){
      this.ticketService.viewTicket()
      .subscribe(
        data=> {console.log(data); this.myTickets = data},
        error=>console.log(error))
    
    }else{
    this.ticketService.viewTicketByUser(data)
    .subscribe(
      data=> {console.log(data); this.myTickets = data},
      error=>console.log(error))
  }
  }

  closeStatus(id, fdata){
    let data ={
      status:fdata
    }

    this.ticketService.updatTicketById(id, data)
    .subscribe(
      data=> {console.log(data)},
      error=>console.log(error))
  }
}
