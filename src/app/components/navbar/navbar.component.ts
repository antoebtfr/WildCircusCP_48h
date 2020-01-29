import { Link } from './../../shared/class/link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navLinks: Link[] = [
    {name: 'Accueil', link: '.'},
    {name: 'Shows', link: '.'},
    {name: 'Profil', link: '.'},
    {name: 'Le Cirque', link: '.'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
