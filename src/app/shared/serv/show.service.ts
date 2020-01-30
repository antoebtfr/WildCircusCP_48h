import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../class/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  static GET_ALL_URL = '';
  static GET_FREE_URL = 'free/';
  static GET_PREMIUM_URL = 'premium/';

  private host = 'http://localhost:3000/shows/';

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.host + ShowService.GET_ALL_URL);
  }

  getFreeShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.host + ShowService.GET_FREE_URL);
  }

  getPremiumShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.host + ShowService.GET_PREMIUM_URL);
  }
}
