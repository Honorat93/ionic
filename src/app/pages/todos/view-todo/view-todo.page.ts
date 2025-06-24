import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonContent,IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonLabel, IonButton, IonIcon, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons'
import { TodoService } from '../../../core/services/todo/todo.service';
import { TodoApiResponseInterface } from '../../../core/models/todo.api.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.page.html',
  styleUrls: ['./view-todo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonLabel,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
  ]
})
export class ViewTodoPage implements OnInit {

  protected todo: TodoApiResponseInterface | null = null;

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly todoService = inject(TodoService);

  constructor() {
    addIcons({ create });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.todoService.getTodoById(id).subscribe({
      next: (todo: TodoApiResponseInterface) => {
        this.todo = todo;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération de la tâche :', err);
        this.router.navigate(['/todos']);
      }
    });
  }

  protected goToEdit(): void {
    if (this.todo?.id) {
      this.router.navigate(['/todos', this.todo.id, 'edit']);
    }
  }
}
