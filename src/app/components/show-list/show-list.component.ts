import { ShowService } from './../../shared/serv/show.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  public allShows = [];

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.showService.getShows().subscribe(data => this.allShows = data);
  }

}
