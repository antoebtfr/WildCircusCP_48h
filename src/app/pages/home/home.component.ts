import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
