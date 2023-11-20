import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deposit } from './deposit';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  private baseURL = "http://localhost:8884/deposits";
  constructor(private httpClient:HttpClient) { }

  getAllDeposits():Observable<Deposit[]>{
    return this.httpClient.get<Deposit[]>(`${this.baseURL}`);
  }
 
  addDeposit(deposit:Deposit):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,deposit);
  }

  getDeposits(accno:string):Observable<Deposit[]>{
    return this.httpClient.get<Deposit[]>(`${this.baseURL}/${accno}`);
  }
}
