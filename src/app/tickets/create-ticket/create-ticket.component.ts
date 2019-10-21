import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  constructor(private router: Router, private ticketService: TicketService, private authService: AuthService) { }

  createTicket(form: NgForm) {
    const ticketData = {
      title: form.value.title,
      detail: form.value.detail,
      name: this.authService.getUser().name,
      email: this.authService.getUser().email,

    };
     this.ticketService.createTickets(ticketData);
    //  window.location.reload();
     this.router.navigate(['/ticket-list']);

  }


  ngOnInit() {

  }

}
