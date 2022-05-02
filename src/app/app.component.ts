import { Component, OnInit } from '@angular/core';
//import { bootstrap } from '@angular/platform-browser-dynamic';
//import { debug } from 'console';
//import * as lan from './src/app/lan.json';
import data from '../assets/json/lan.json';

interface lanetaker {
  id: Number;
  lanetakere: String[];
  lanebelop: Number;
  notat: String;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Project_LoanInterface';

  name = 'Angular';

  lanetakere: lanetaker[] = data.lan;
}