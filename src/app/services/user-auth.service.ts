import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, mapTo, tap, catchError  } from "rxjs/operators";
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  dataToken:any
  constructor(
    private http: HttpClient
  ) {

   }

  login(email: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'post'
    });
    return this.http.post<any>(`${environment.API_URL}/users/login`, {
      'username': email,
      'password': password
    }).pipe(
      map((data) => {
        console.log(data);
        this.storeJwtToken(data.data.access_Token);
        this.dataToken = data.data.access_Token;
        return data;
      })
    );
  }

  getUserAccessInfo(){
    return this.http.get<any>(`${environment.API_URL}/users/user_info`, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": this.dataToken
        }
      }).pipe(tap((data) => {
        console.log('getUserAccessInfo', data);
        if(data.statusCode == 200){
          localStorage.setItem("roleUserInfo", JSON.stringify(data.data));
        }
      })
    );
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem("authenticatedUser",jwt);
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logout() {
    localStorage.removeItem('authenticatedUser');
    localStorage.removeItem('roleUserInfo');
  }


}

