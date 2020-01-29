import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public clickTitle() {
    const flashCSS = document.getElementById('flash-home').style;
    const welcomeCSS = document.getElementById('welcome-body').style;
    const homepageCSS = document.getElementById('homepage').style;

    const flashDelay = 5; // Delai du flash de la page Welcome

    flashCSS.zIndex = '10';
    flashCSS.opacity = '1';
    flashCSS.transform = 'scale(4)';
    flashCSS.animation = `fadeOut linear ${flashDelay}s 2s forwards`;

    setTimeout(() => {
      welcomeCSS.display = 'none';
      homepageCSS.display = 'block';
    }, 2000 );

    setTimeout(() => {
      flashCSS.display = 'none';
    }, flashDelay * 1000);
  }
}
