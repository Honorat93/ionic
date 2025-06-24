import { Routes } from '@angular/router';
import { homeGuard } from "./core/guards/home.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage),
    canActivate: [homeGuard]
  },
  {
    path: 'todos',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/todos/todos.page').then( m => m.TodosPage)
      },
      {
        path: 'create',
        loadComponent: () => import('./pages/todos/create-todo/create-todo.page').then( m => m.CreateTodoPage)
      },
      {
        path: ':id/edit',
        loadComponent: () => import('./pages/todos/edit-todo/edit-todo.page').then( m => m.EditTodoPage)
      }
    ]
  },
];
