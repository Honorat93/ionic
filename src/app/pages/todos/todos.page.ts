import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { TodoApiResponseInterface } from "../../core/models/todo.api.interface";
import { TodoService } from "../../core/services/todo/todo.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonLabel
  ]
})
export class TodosPage implements OnInit {

  protected todos: TodoApiResponseInterface[] = [];

  private todoService = inject(TodoService);

  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: (todos: TodoApiResponseInterface[]) => {
        this.todos = todos;
      },

      error: (error: HttpErrorResponse) => {
      }
    });
  }

}
