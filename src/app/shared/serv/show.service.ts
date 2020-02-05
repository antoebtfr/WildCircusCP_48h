import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../class/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  static GET_FREE_URL = '/free';
  static GET_PREMIUM_URL = '/premium';

  static HOST = 'http://localhost:3000/shows';

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(ShowService.HOST);
  }

  getFreeShows(): Observable<Show[]> {
    return this.http.get<Show[]>(ShowService.HOST + ShowService.GET_FREE_URL);
  }

  getPremiumShows(): Observable<Show[]> {
    return this.http.get<Show[]>(ShowService.HOST + ShowService.GET_PREMIUM_URL);
  }
}
