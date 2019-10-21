import { NgModule } from "@angular/core";
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { FormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketListDetailsComponent } from './ticket-list-details/ticket-list-details.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        CreateTicketComponent,
        TicketListComponent,
        TicketListDetailsComponent
    ],
    exports:[],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule
    ]
})

export class TicketModule{

}