import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(
    private http: HttpClient
  ) { }

  postAmount(amount,email) {
    return this.http.post<any>(`${environment.apiUrl}/stripe/${email}`,amount);
  }

  abonnement(token, plan) {
    return this.http.post<any>(`${environment.apiUrl}/stripe/abonnement/${plan}`,token);
  }
}
