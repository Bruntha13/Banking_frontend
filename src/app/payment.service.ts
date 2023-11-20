import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from './payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL = "http://localhost:8886/payments";
  constructor(private httpClient:HttpClient) { }

  getPayment(sendersAccNum:string):Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(`${this.baseURL}/${sendersAccNum}`);
  }
 
  addPayment(payment:Payment):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,payment);
  }

  getPayments(accno:string):Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(`${this.baseURL}/${accno}`);
  }
}
