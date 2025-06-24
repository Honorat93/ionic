import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { RegisterApiInterface, RegisterApiResponseInterface } from '../../models/register.api.interface';
import { Observable } from "rxjs";
import { LoginApiInterface, LoginApiResponseInterface } from "../../models/login.api.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private httpClient = inject(HttpClient);

  public register(registrationPayload: RegisterApiInterface): Observable<RegisterApiResponseInterface> {
    return this.httpClient.post<RegisterApiResponseInterface>(`${environment.baseURL}register`, registrationPayload)
  }

  public login(loginPayload: LoginApiInterface): Observable<LoginApiResponseInterface> {
    return this.httpClient.post<LoginApiResponseInterface>(`${environment.baseURL}login`, loginPayload)
  }
}
