import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Withdraw } from './withdraw';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  private baseURL = "http://localhost:8885/withdrawal";
  constructor(private httpClient:HttpClient) { }

  getAllWithdrawal():Observable<Withdraw[]>{
    return this.httpClient.get<Withdraw[]>(`${this.baseURL}`);
  }
 
  addWithdrawal(withdraw:Withdraw):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,withdraw);
  }

  getWithdrawal(accno:string):Observable<Withdraw[]>{
    return this.httpClient.get<Withdraw[]>(`${this.baseURL}/${accno}`);
  }
}
