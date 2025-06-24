<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
=======
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonToggle, IonInput, IonLabel, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../core/services/todo/todo.service';
import { TodoApiResponseInterface } from '../../../core/models/todo.api.interface';
import { ActivatedRoute } from "@angular/router";
>>>>>>> Stashed changes

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonLabel,
    IonToggle,
    IonButton,
    IonButtons,
    IonBackButton,
  ]
})
export class EditTodoPage implements OnInit {

<<<<<<< Updated upstream
  constructor() { }

  ngOnInit() {
  }
=======
  protected todoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl(''),
    completed: new FormControl(false)
  });

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly todoService = inject(TodoService);
  private todoId!: number;
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.todoId = +this.route.snapshot.params['id'];

    this.todoService.getTodoById(this.todoId).subscribe({
      next: (todo: TodoApiResponseInterface) => {
        this.todoForm.setValue({
          title: todo.title || '',
          description: todo.description || '',
          completed: todo.completed ?? false
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la tâche:', err);
        this.router.navigate(['/todos']);
      }
    });
  }

  protected onUpdateTodo(): void {
    if (this.todoForm.invalid) return;

    const { title, description, completed } = this.todoForm.value;

    const updatedPayload: Partial<TodoApiResponseInterface> = {
      title: title ?? '',
      description: description ?? '',
      completed: completed ?? false
    };

    this.todoService.updateTodo(this.todoId, updatedPayload).subscribe({
      next: (updatedTodo: TodoApiResponseInterface) => {
        console.log('Tâche mise à jour :', updatedTodo);
        console.log('Redirection vers /todos');
        this.router.navigate(['/todos']);
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour de la tâche:', err);
      }
    });
  }
}
