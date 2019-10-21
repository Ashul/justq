import {NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent,
    ],
    imports:[
        AppRoutingModule,
        CommonModule,
        AuthModule,
        NgbModule.forRoot()
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent,
    ],
    providers:[]
})
export class CoreModule{}