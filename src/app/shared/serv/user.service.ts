import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/';

  userPage: boolean;

  constructor(private http: HttpClient) { }

  public inscription(name: string, email: string, password: string) {
    return this.http.post(UserService.URL + 'auth/signup', {name, email, password});
  }
}
