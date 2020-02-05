import { VariablesGlobales } from './../../variableGlobales';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private conf: VariablesGlobales) { }

  ngOnInit() {
  }

  public closeDetails() {
    this.conf.closeUserDetails();
  }

}
