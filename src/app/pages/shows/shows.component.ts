import { ShowService } from './../../shared/serv/show.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  public freeShows = [];
  public premiumShows = [];
  constructor(private service: ShowService) { }

  ngOnInit() {
    this.service.getFreeShows().subscribe( data => this.freeShows = data);
    this.service.getPremiumShows().subscribe( data => this.premiumShows = data);
  }

}
