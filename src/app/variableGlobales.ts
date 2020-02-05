import { Injectable } from '@angular/core';

@Injectable()
export class VariablesGlobales {
  sidebarStatus = false;
  userDetailsModal = false;

  public closeSide() {
    this.sidebarStatus = false;
  }

  public openSide() {
      this.sidebarStatus = true;
  }

  public getSidebarStatus() {
    return this.sidebarStatus;
  }

  public openUserDetails(user?) {
    return this.userDetailsModal = true;
  }

  public closeUserDetails() {
    return this.userDetailsModal = false;
  }
}


