import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private baseURL = "http://localhost:8883/checkBalance";
  constructor(private httpClient:HttpClient) { }

  getBalance(accno:string):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${accno}`);
  }
}
