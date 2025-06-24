import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { RegisterApiInterface, RegisterApiResponseInterface } from '../../models/register.api.interface';
import { Observable } from "rxjs";
import { LoginApiInterface, LoginApiResponseInterface } from "../../models/login.api.interface";
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private httpClient = inject(HttpClient);
  private readonly router = inject(Router); 

  public register(registrationPayload: RegisterApiInterface): Observable<RegisterApiResponseInterface> {
    return this.httpClient.post<RegisterApiResponseInterface>(`${environment.baseURL}register`, registrationPayload)
  }

  public login(loginPayload: LoginApiInterface): Observable<LoginApiResponseInterface> {
    return this.httpClient.post<LoginApiResponseInterface>(`${environment.baseURL}login`, loginPayload)
  }


  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/login']); 
  }

  
}
