import { Routes } from '@angular/router';
import { homeGuard } from "./core/guards/home.guard";
import { authGuard } from "./core/guards/auth.guard"; 

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    canActivate: [homeGuard]
  },
  {
    path: 'todos',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/todos/todos.page').then(m => m.TodosPage)
      },
      {
        path: 'create',
        loadComponent: () => import('./pages/todos/create-todo/create-todo.page').then(m => m.CreateTodoPage)
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/todos/view-todo/view-todo.page').then(m => m.ViewTodoPage)
          },
          {
            path: 'edit',
            loadComponent: () => import('./pages/todos/edit-todo/edit-todo.page').then(m => m.EditTodoPage)
          },
        ]
      }
    ]
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
  }
];
