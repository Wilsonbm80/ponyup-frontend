import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {USERS} from '../mock-users';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css','../app.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = USERS;
}
