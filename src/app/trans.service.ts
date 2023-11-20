import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  constructor(private httpClient:HttpClient) { }

  depositAmount(
    accountNumer: string,
    amount: number |undefined
  ): Observable<Object> {
    return this.httpClient.get(
      `http://localhost:8883/deposit/${accountNumer}/${amount}`
    );
  }

  withdrawAmount(
    accountNumer: string,
    amount: number|undefined
  ): Observable<Object> {
    return this.httpClient.get(
      `http://localhost:8883/withdraw/${accountNumer}/${amount}`
    );
  }

  paymentAmount(
    accountNumer: string,
    amount: number |undefined
  ): Observable<Object> {
    return this.httpClient.get(
      `http://localhost:8883/payment/${accountNumer}/${amount}`
    );
  }
}
