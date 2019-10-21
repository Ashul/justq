import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreateTicketComponent } from './tickets/create-ticket/create-ticket.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketListDetailsComponent } from './tickets/ticket-list-details/ticket-list-details.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path:'', redirectTo:'/signin',pathMatch: 'full'},
  { path:'signin', component:HomeComponent, },
  { path:'signup', component:SignupComponent},

  { path:'create-ticket', component:CreateTicketComponent,canActivate:[AuthGuard]},
  { path:'ticket-list', component:TicketListComponent, canActivate:[AuthGuard]},
  { path:'ticket-list/:id', component:TicketListDetailsComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
