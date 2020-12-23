import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  public isAuthenticated(): boolean {

    return this.getToken() !== null;
  }

  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {

     return localStorage.getItem("token");
  }
  removeToken() {
     localStorage.removeItem("token");
  }

  StoreUserInfo(role: any) {

    localStorage.setItem('role', JSON.stringify(role));
  }

  getRole() {

    return JSON.parse(localStorage.getItem('role'));
  }
  removeRole() {
     localStorage.removeItem("role");
  }


}
