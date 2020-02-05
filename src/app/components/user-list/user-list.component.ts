import { VariablesGlobales } from './../../variableGlobales';
import { UserService } from './../../shared/serv/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, public conf: VariablesGlobales) { }

  public listOfUsers = [];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.listOfUsers = data);
  }

  public deleteUser(userId) {
    console.log(userId);
  }

  public OpenModal() {
     this.conf.openUserDetails();
  }

}
