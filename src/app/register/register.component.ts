//In realtà questo Componente si occupa del Login
//Per questioni di tempo il nome è rimasto Register

import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//Importo i servizi necessari necessari per la gestione dei forms in Angular
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule} from "@angular/forms"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Serve per esportare fuori dalla classe il Form
  form: FormGroup;
  constructor
  (
    private formBuilder: FormBuilder, private router:Router
  ) {
    this.createForm();
   }

  createForm()
  {
//Il campo Username deve essere lungo minimo 5 caratteri e massimo 10
    this.form = this.formBuilder.group({
      username: ["", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
    ])
  ],
      password: ["", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
    ])
  ],
      confirm: ["", Validators.required]
    })
  }

  onRegisterSubmit()
  {
    console.log("Form Inviato");
    if(this.form.value.username === "Miccel" && this.form.value.password === "Antani")
    {
      localStorage.setItem("logged","true");
    }
    this.router.navigateByUrl("/");
  }

  ngOnInit() {
  }

}
