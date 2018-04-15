import {Article} from '../model/article';


import { Component, OnInit } from '@angular/core';

//Importo il servizio dedicato ai servizi generali
import {GlobalApp} from '../helpers/global';
//ActivatedRoute serve per prendere gli elementi dalla barra degli indirizzi
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
//Importo i servizi necessari necessari per la gestione dei forms in Angular
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  
  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router: Router, public app:GlobalApp) { }

  formUpgrade: FormGroup;
  article: Article;
  id:number

  textArea:string;
  

  ngOnInit() 
  {
    this.id = this.route.snapshot.params.id;
    this.article = this.app.articles[this.id];
    this.createForm();
  }

  createForm():void
  {
    this.formUpgrade = this.formBuilder.group({
      title: this.article.title,
      date: this.article.date,
      author: this.article.author
      });
  }

  onArticleSubmit()
  {

    let article :Article = new Article();
    article.id = this.id;
    article.title = this.formUpgrade.value.title;
    article.date = this.formUpgrade.value.date;
    article.author = this.formUpgrade.value.author;
    article.content = this.textArea;
    this.app.articles.splice(this.id,1,article);
    console.log(this.app.articles);

    this.router.navigateByUrl("/");

    
  }


  getTextArea(value:string):string{
    return value;
  }

}
