import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-ticket-list-details',
  templateUrl: './ticket-list-details.component.html',
  styleUrls: ['./ticket-list-details.component.css']
})
export class TicketListDetailsComponent implements OnInit {

  id;
  ticketDetail=[];

  constructor(
    private ticketService:TicketService,
    private authService:AuthService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    
        this.id = this.route.snapshot.params['id']
        this.ticketService.viewTicketById(this.id)
        .subscribe(
          data => {
            this.ticketDetail.push(data)

          },
          error => console.log(error)
        )

     }

     submitQuery(form:NgForm){
       
       let queryData = {
        answer:form.value.answer,
        name:this.authService.getUser().name,
        email:this.authService.getUser().email,
          }

       this.ticketService.submitAnswer(this.id, queryData)
       .subscribe(
        (data:any) => {
          console.log(data)},
        error => console.log(error)
      )   
      window.location.reload() 
     }

     
}
