import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component';
import {CreateArticleComponent} from "./create-article/create-article.component";
import {ViewArticleComponent} from "./view-article/view-article.component";
import {UpdateArticleComponent} from "./update-article/update-article.component";

//Le route dell'Applicazione
const appRoutes:Routes =
[
    {path:'', component: HomeComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'login', component: RegisterComponent},
    {path:'new', component: CreateArticleComponent},
    {path: 'posts/:id', component: ViewArticleComponent},
    {path: 'posts/:id/edit', component: UpdateArticleComponent}
];

@NgModule({
    declarations: [
   
    ],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports:[RouterModule]
  })

  export class AppRoutingModule {}
  