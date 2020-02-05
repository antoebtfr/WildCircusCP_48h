import { UserService } from './../../shared/serv/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public listOfUsers = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.listOfUsers = data);
  }

  public deleteUser(userId) {
    console.log(userId);
  }
}
