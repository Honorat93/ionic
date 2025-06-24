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
  private readonly baseUrl = `${environment.baseURL}todos/`;

  public getTodos(): Observable<TodoApiResponseInterface[]> {
    return this.httpClient.get<TodoApiResponseInterface[]>(this.baseUrl);
  }

  public getTodoById(id: number): Observable<TodoApiResponseInterface> {
    return this.httpClient.get<TodoApiResponseInterface>(`${this.baseUrl}${id}/`);
  }

  public createTodo(payload: Partial<TodoApiResponseInterface>): Observable<TodoApiResponseInterface> {
    return this.httpClient.post<TodoApiResponseInterface>(this.baseUrl, payload);
  }

  public updateTodo(id: number, payload: Partial<TodoApiResponseInterface>): Observable<TodoApiResponseInterface> {
    return this.httpClient.put<TodoApiResponseInterface>(`${this.baseUrl}${id}/`, payload);
  }

  public deleteTodo(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}${id}/`);
  }
}