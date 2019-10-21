import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { TicketService } from './tickets/ticket.service';
import { TicketModule } from './tickets/ticket.module';
import { AuthGuard } from './auth-guard.service';
import { TokenInterceptorService } from './auth/token-interceptor.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    TicketModule, ],
  providers: [
    AuthService,
    TicketService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
