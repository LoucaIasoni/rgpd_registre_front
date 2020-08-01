import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(
    private http: HttpClient
  ) { }

    //verification key
    getFormationDebutant() {
        return this.http.get<any>(`${environment.apiUrl}/formations/get_formation_debutant/`);
    }

    getFormationPro() {
        return this.http.get<any>(`${environment.apiUrl}/formations/get_formation_pro/`);
    }

    updateFormation(obj){
        return this.http.put<any>(`${environment.apiUrl}/formations/update_item/`,obj);
    }

}
