import { Routes } from '@angular/router';
<<<<<<< Updated upstream
=======
import { homeGuard } from "./core/guards/home.guard";
import { authGuard } from "./core/guards/auth.guard"; 
>>>>>>> Stashed changes

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'login',
<<<<<<< Updated upstream
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'todos',
    loadComponent: () => import('./pages/todos/todos.page').then( m => m.TodosPage)
  },
  {
    path: 'create-todo',
    loadComponent: () => import('./pages/todos/create-todo/create-todo.page').then( m => m.CreateTodoPage)
  },
  {
    path: 'edit-todo',
    loadComponent: () => import('./pages/todos/edit-todo/edit-todo.page').then( m => m.EditTodoPage)
=======
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    canActivate: [homeGuard]
  },
  {
    path: 'todos',
    canActivate: [authGuard], // ✅ protection ici
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
>>>>>>> Stashed changes
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
  }
];
