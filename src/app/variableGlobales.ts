import { Injectable } from '@angular/core';

@Injectable()
export class VariablesGlobales {
  sidebarStatus = false;
  userDetailsModal = false;

  // function about sidebar

  public closeSide() {
    this.sidebarStatus = false;
  }

  public openSide() {
      this.sidebarStatus = true;
  }

  public getSidebarStatus() {
    return this.sidebarStatus;
  }

  // function about userDetailModal

  public openUserDetails(user?) {
    return this.userDetailsModal = true;
  }

  public closeUserDetails() {
    return this.userDetailsModal = false;
  }

  public getUserDetailsModalStatus() {
    return this.userDetailsModal;
  }
}


