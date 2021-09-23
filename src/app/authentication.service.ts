import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(email:any, password:any) {
    if (email==="ghaithguesmi83@gmail.com" && password === "000000") {
      sessionStorage.setItem('email', email)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
}

