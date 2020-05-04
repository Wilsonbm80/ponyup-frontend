import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {USERS} from '../mock-users';

@Component({
  selector: 'app-my-ponies',
  templateUrl: './my-ponies.component.html',
  styleUrls: ['./my-ponies.component.css','../app.component.css']
})
export class MyPoniesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ponies = USERS;
}
