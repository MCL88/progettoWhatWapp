//Importo la classe personalizzata Article e un insieme di articoli
import {Article} from '../model/article';

import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//Importo il servizio dedicato ai servizi generali
import {GlobalApp} from '../helpers/global';

//Importo i servizi necessari necessari per la gestione dei forms in Angular
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  //Serve per esportare fuori dalla classe il Form
  formArticle: FormGroup;
  textArea: string;
  constructor
  (
    private formBuilder: FormBuilder, private router:Router, public app:GlobalApp
  ) {
    this.createForm();
   }

  createForm()
  {
//Il campo Username deve essere lungo minimo 5 caratteri e massimo 10
    this.formArticle = this.formBuilder.group({
      title: ["", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
    ])
  ],
      author: ["", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
    ])
  ]
    ,
    Content: ["", Validators.compose([
      Validators.required,
      Validators.minLength(1),
  ])
]
  ,
      confirm: ["", Validators.required]
    })
  }

  onArticleSubmit()
  {

    let article :Article = new Article();
    article.id = ++this.app.id;
    article.title = this.formArticle.value.title;
    article.author = this.formArticle.value.author;
    article.date = new Date();
    article.content = this.textArea;
    this.app.articles.splice(this.app.articles.length,0,article);

    console.log(article);
    console.log("Articolo Inserito");
    this.router.navigateByUrl("/");

    
  }

  ngOnInit() {
  }

  getTextArea(value:string):string{
    return value;
  }

}
