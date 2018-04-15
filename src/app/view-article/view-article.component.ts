import {Article} from '../model/article';


import { Component, OnInit } from '@angular/core';

//Importo il servizio dedicato ai servizi generali
import {GlobalApp} from '../helpers/global';
//ActivatedRoute serve per prendere gli elementi dalla barra degli indirizzi
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {


  article: Article;

  constructor(private location:Location, private route:  ActivatedRoute, private router: Router, public app:GlobalApp ) { }

  ngOnInit() {

    const id = this.route.snapshot.params.id;
    this.article = this.app.articles[id]; 
  }

  public deleteArticle(id:number):void{
    let query:number = id; 
    let article:Article;
    let index:number;
    article =this.app.articles.filter((article) => article.id == query )[0];
    index = this.app.articles.indexOf(article) ;
  
    this.app.articles = this.app.articles.slice(index,1);
    this.router.navigateByUrl("/");
}

  public goBack()
  {
    this.location.back();
  }

}
