import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.page.html',
  styleUrls: ['./delete-todo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DeleteTodoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
