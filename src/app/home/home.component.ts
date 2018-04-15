import { Component, OnInit } from '@angular/core';


//Importo il servizio dedicato ai servizi generali
import {GlobalApp} from '../helpers/global';
import {Router} from '@angular/router';

//Importo la classe personalizzata Article e un insieme di articoli
import {Article} from '../model/article';
import {ARTICLES} from '../mock/mock-article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//Definisco un array di Articoli
  articles:Article[];
  constructor(public app:GlobalApp, private router:Router) {
    this.articles = ARTICLES;
   }

  ngOnInit() {
  }

}
