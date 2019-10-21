import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketService {

    constructor(private http: HttpClient) {}

// Create ticket

createTickets(ticket) {
    console.log(ticket);
    return this.http.post('/api/ticket/create', ticket)
    .subscribe(data => console.log(data));

}

// view All Ticket
viewTicket() {
    return this.http.get('/api/ticket/');
}

// View ticket by id
viewTicketById(ticketId) {
    return this.http.get('/api/ticket/' + ticketId);
}

// view Ticket by user
viewTicketByUser(userEmail) {
    return this.http.post('/api/ticket/data', userEmail);
}
// update ticket
updatTicketById(ticketId, ticketData) {
    return this.http.put('/api/ticket/' + ticketId + '/update', ticketData);
}

// delete ticket

DeleteTicket(ticketId) {
return this.http.delete('/api/ticket/', ticketId);
}


// Submit Answer
submitAnswer(ticketId, data) {
    console.log(ticketId);
    return this.http.put('/api/ticket/' + ticketId, data);
}
}
