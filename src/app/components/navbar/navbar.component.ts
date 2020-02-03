import { VariablesGlobales } from './../../variableGlobales';
import { Navlink } from './../../shared/class/link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    // tslint:disable: max-line-length
  public navLinks: Navlink[] = [
    { name: 'Accueil', link: '../homepage' },
    { name: 'Shows', link: '../shows', background: 'https://www.zoorigin.com/media/thumbnail/article_cover/media/images/xle-cirque-et-les-animaux-une-question-qui-fait-debat-3.jpg.pagespeed.ic.8Tr2rGI_kr.jpg' },
    { name: 'Profil', link: '../profil', background: 'https://i.pinimg.com/564x/48/a2/6c/48a26c030180a205cd11318a9f8c7142.jpg' },
    { name: 'Le Cirque', link: '../le-cirque', background: 'https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/0_dr-ag37_0.jpg?itok=2JxTbVVv&sc=8d469251f6ff096ca7bd6786dea9f6a3' }
  ];
  constructor(public varGlo: VariablesGlobales) { }

  ngOnInit() {
  }

}
