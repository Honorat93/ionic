import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonToggle, IonInput, IonLabel, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from '../../../core/services/todo/todo.service';
import { TodoApiResponseInterface } from '../../../core/models/todo.api.interface';
import { inject } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonToggle,
    IonButton,
    IonButtons,
    IonBackButton,
    FormsModule,
    IonLabel,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class CreateTodoPage  {

  protected todoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl(''),
    completed: new FormControl(false)
  });

  private readonly router = inject(Router);
  private readonly todoService = inject(TodoService);

  protected onCreateTodo(): void {
    if(this.todoForm.invalid) return;

    const { title, description, completed } = this.todoForm.value;

    let taskPayload: Partial<TodoApiResponseInterface> | undefined;

    if (title && description !== null && completed !== null) {
      taskPayload = {
        title,
        description,
        completed
      };
    }

    if (taskPayload) {
      this.todoService.createTodo(taskPayload).subscribe({
        next: (createdTodo: TodoApiResponseInterface) => {
          console.log('Tache crée:', createdTodo);
          this.router.navigate(['/todos']);
        },
        error: (err) => {
          console.error('Erreur lors de la creation de la tache:', err);
        }
      });
    }
  }
}

