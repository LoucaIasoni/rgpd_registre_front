import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

    checkUserByKey(key) {
        return this.http.get<any>(`${environment.apiUrl}/users/register/validation/${key}`);
    }

    updateUser(id, new_user) {
        return this.http.put<any>(`${environment.apiUrl}/users/update/${id}`,new_user);
    }

    login(email, mdp){
        return this.http.get<any>(`${environment.apiUrl}/users/${email}/${mdp}`);
    }

    getUsers(){
      return this.http.get<any>(`${environment.apiUrl}/user/`);
    }
}
