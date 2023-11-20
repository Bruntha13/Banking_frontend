import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = "http://localhost:8883/user/register";
  constructor(private httpClient:HttpClient) { }

  registerUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }
}
