import { VariablesGlobales } from './../../variableGlobales';
import { Navlink } from './../../shared/class/link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navLinks: Navlink[] = [
    {name: 'Accueil', link: '../homepage'},
    {name: 'Shows', link: '../shows', background: 'grey'},
    {name: 'Profil', link: '../profil', background: 'lightblue'},
    {name: 'Le Cirque', link: '../le-cirque', background: 'yellow'}
  ];
  constructor(public varGlo: VariablesGlobales) { }

  ngOnInit() {
  }

}
