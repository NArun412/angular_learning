import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy_data';
const RandomId = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  SelectedUser = DUMMY_USERS[RandomId];
}
