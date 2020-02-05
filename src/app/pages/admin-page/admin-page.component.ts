import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public categories = ['user', 'shows'];
  public selectedCategorie = '';
  public listOfUsers = ['Salut', 'user'];
  public listOfShows = ['Salut je suis', 'le show'];
  public onModify = false; // Toggle les boutons de mofication de profil + déverouille les input si true

  constructor() { }

  ngOnInit() {
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
