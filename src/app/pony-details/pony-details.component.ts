import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {USERS} from '../mock-users';

@Component({
  selector: 'app-pony-details',
  templateUrl: './pony-details.component.html',
  styleUrls: ['./pony-details.component.css','../app.component.css']
})
export class PonyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ponies = USERS;
}
