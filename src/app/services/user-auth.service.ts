import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, mapTo, tap, catchError  } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  email: string;
  message: string;
  success: boolean;
  token: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private options = {};
  headers:any;
  constructor(
    private http: HttpClient
  ) {

   }
  
  login(email: string, password: string) {
    return this.http.post<any>(`${environment.API_URL}/login`, {'email':email, 'password':password})
    .pipe(tap((data) => {
      console.log('data', data);
      localStorage.setItem("authenticatedUser", JSON.stringify(data.token));
    }));
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logout() {
    localStorage.removeItem('authenticatedUser');
  }


}

