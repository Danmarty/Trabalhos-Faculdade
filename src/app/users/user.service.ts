import { ResponseUsers } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url);

  }
}
