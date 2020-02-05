import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public categories = ['user', 'shows'];
  public selectedCategory = '';
  public onModify = false; // Toggle les boutons de mofication de profil + déverouille les input si true
  public userDetailsOpen = true;

  constructor() { }

  ngOnInit() {

  }

  public selectCate(categorie: string) {
    this.selectedCategory = categorie;
  }

  public startOnModify() {
    this.onModify = true;
  }
  public endOnModify() {
    this.onModify = false;
  }

}
