import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { TodoApiResponseInterface } from "../../models/todo.api.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private httpClient = inject(HttpClient);

  public getTodos(): Observable<TodoApiResponseInterface[]> {
    return this.httpClient.get<TodoApiResponseInterface[]>(`${environment.baseURL}todos/`);
  }
}
