import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

//Importo i servizi necessari necessari per la gestione dei forms in Angular
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

import {GlobalApp} from './helpers/global';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    CreateArticleComponent,
    ViewArticleComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    GlobalApp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
