import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonContent,IonHeader,IonIcon, IonInput, IonItem, IonTitle, IonToolbar, IonText} from '@ionic/angular/standalone';
import { Router } from "@angular/router";
import { addIcons } from "ionicons";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { Registration } from "../register/register.page";
import { AuthenticationService } from "../../core/services/authentication/authentication.service";
import { LoginApiInterface, LoginApiResponseInterface } from "../../core/models/login.api.interface";
import { StorageService } from "../../core/services/storage/storage.service";
import { StorageKeyEnum } from "../../core/enums/storage-key.enum";

export type Login = {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonText, IonInput, IonItem, ReactiveFormsModule]
})
export class LoginPage {
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  protected typeOfPasswordInput = 'password';
  protected iconOfPasswordInput = 'eye-outline';

  private readonly router = inject(Router);
  private readonly authenticationService = inject(AuthenticationService);
  private readonly storageService = inject(StorageService);

  constructor() {
    addIcons({eyeOutline, eyeOffOutline});
  }

  public onTogglePasswordVisibility() {
    if (this.typeOfPasswordInput === 'password') {
      this.iconOfPasswordInput = 'eye-off-outline';
      this.typeOfPasswordInput = 'text';
    } else {
      this.iconOfPasswordInput = 'eye-outline';
      this.typeOfPasswordInput = 'password';
    }
  }

  public onLogin(): void {
    const loginValue: Login = this.loginForm.value as Login;

    this.authenticationService.login(loginValue as LoginApiInterface).subscribe({
      next: (loginResponse: LoginApiResponseInterface) => {
        this.storageService.setItem(StorageKeyEnum.ACCESS_TOKEN, loginResponse.access_token);
        this.router.navigate(['/todos']);
      },
      error: () => {},
    })
  }
  public onNavigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}
