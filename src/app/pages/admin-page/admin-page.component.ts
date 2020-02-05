import { UserService } from './../../shared/serv/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public categories = ['user', 'shows'];
  public selectedCategorie = '';
  public listOfUsers = [];
  public listOfShows = [];
  public onModify = false; // Toggle les boutons de mofication de profil + déverouille les input si true

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.listOfUsers = data);
  }

  public selectCate(categorie: string) {
    this.selectedCategorie = categorie;
  }

  public startOnModify() {
    this.onModify = true;
  }
  public endOnModify() {
    this.onModify = false;
  }
}
