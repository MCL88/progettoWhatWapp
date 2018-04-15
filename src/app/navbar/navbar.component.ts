import { Component, OnInit } from '@angular/core';
import {GlobalApp} from '../helpers/global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public app:GlobalApp) { }

  ngOnInit() {
  }

}
