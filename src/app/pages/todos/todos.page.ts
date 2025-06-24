<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
=======
import { Component, inject } from '@angular/core';
import { TodoApiResponseInterface } from '../../core/models/todo.api.interface';
import { TodoService } from '../../core/services/todo/todo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { trash, create, add, warning, personCircleOutline, logOutOutline } from 'ionicons/icons';
import {CommonModule} from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonLabel, IonTitle, IonToolbar, IonIcon, IonFab, IonFabButton, IonModal, IonButton, IonButtons} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from "../../core/services/authentication/authentication.service";
>>>>>>> Stashed changes

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
  standalone: true,
<<<<<<< Updated upstream
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TodosPage implements OnInit {

  constructor() { }

  ngOnInit() {
=======
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonLabel,
    IonIcon,
    IonFab,
    IonFabButton,
    IonModal,
    IonButton,
    IonButtons
  ]
})
export class TodosPage {
  protected todos: TodoApiResponseInterface[] = [];
  protected isModalOpen = false;
  protected selectedTodoIdToDelete: number | null = null;

  private readonly todoService = inject(TodoService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthenticationService);

  constructor() {
    addIcons({ trash, create, add, warning, personCircleOutline, logOutOutline });
  }

  ionViewWillEnter() {
    this.loadTodos();
  }

  protected logout(): void {
    this.authService.logout(); 
  }

  private loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (todos: TodoApiResponseInterface[]) => {
        this.todos = todos;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération des tâches:', error);
      }
    });
>>>>>>> Stashed changes
  }

  protected createTodo(): void {
    this.router.navigate(['/todos/create']);
  }

  protected onUpdateTodo(id: number): void {
    this.router.navigate(['/todos', id, 'edit']);
  }

  protected goToDetail(id: number): void {
    this.router.navigate(['/todos', id]);
  }

  protected openDeleteModal(id: number): void {
    this.selectedTodoIdToDelete = id;
    this.isModalOpen = true;
  }

  protected closeModal(): void {
    this.isModalOpen = false;
    this.selectedTodoIdToDelete = null;
  }

  protected confirmDelete(): void {
    if (this.selectedTodoIdToDelete === null) return;

    const id = this.selectedTodoIdToDelete;
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.closeModal();
      },
      error: (err) => {
        console.error('Erreur lors de la suppression de la tâche:', err);
        this.closeModal();
      }
    });
  }
}
