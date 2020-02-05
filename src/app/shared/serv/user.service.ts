import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000';
  static GET_ALL_USER = `${UserService.URL}/users`;

  userPage: boolean;

  constructor(private http: HttpClient) { }

  public inscription(name: string, email: string, password: string) {
    return this.http.post(UserService.URL + 'auth/signup', { name, email, password });
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(UserService.GET_ALL_USER);
  }
}
