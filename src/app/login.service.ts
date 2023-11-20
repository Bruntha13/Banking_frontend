import { Injectable } from '@angular/core';
import { UserCredentials } from './user-credentials';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = "http://localhost:8883/user/login";
  constructor(private httpClient:HttpClient) { }

  loginUser(usercred:UserCredentials):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,usercred);
  }
}
