import { Injectable } from '@angular/core';

@Injectable()
export class VariablesGlobales {
  sidebarStatus = false;

  public closeSide() {
    this.sidebarStatus = false;
  }

  public openSide() {
      this.sidebarStatus = true;
  }

  public getSidebarStatus() {
    return this.sidebarStatus;
  }
}


