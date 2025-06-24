import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserDataRegisterApiResponseInterface } from '../../models/register.api.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  public getProfile(): Observable<UserDataRegisterApiResponseInterface> {
    return this.http.get<UserDataRegisterApiResponseInterface>(`${environment.baseURL}auth`);
  }

}
