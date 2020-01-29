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

    flashCSS.zIndex = '10';
    flashCSS.opacity = '1';
    flashCSS.transform = 'scale(4)';

    setTimeout(() => {
      flashCSS.animation = 'fadeOut linear 5s 2s forwards';
    });
  }
}
