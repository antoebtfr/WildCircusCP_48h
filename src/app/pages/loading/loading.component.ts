import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public count = 3;

  constructor() { }

  ngOnInit() {
    this.countFunc();
    this.mouseMove();
  }

  public countFunc() {
    const countHTML = document.getElementById('count');

    const timer = setInterval(() => {
      if (this.count <= 0) { // Vérifie si le compte n'est pas à 0
        clearInterval(timer); // Si oui, arrete l'interval
        countHTML.style.opacity = '0';
        setTimeout(() => { // Display le triangle après 1s
          document.getElementById('triangle-code').style.opacity = '1';
        }, 1000);
      } else {
        this.count--; // Réduit le compteur de 1
      }
    }, 1000);
  }

  public mouseMove() {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    });
  }

  public click() {
    document.getElementById('triangle-code').style.animation = 'leave linear 1.5s forwards';
  }
}
