import { Component, inject } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonTitle, IonToolbar, IonButtons, IonBackButton} from '@ionic/angular/standalone';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { addIcons } from "ionicons";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { Router, RouterModule } from "@angular/router";
import { AuthenticationService } from "../../core/services/authentication/authentication.service";
import { RegisterApiInterface, RegisterApiResponseInterface } from "../../core/models/register.api.interface";
import { StorageService } from "../../core/services/storage/storage.service";
import { StorageKeyEnum } from "../../core/enums/storage-key.enum";

export type Registration = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule,
    IonIcon,
    ReactiveFormsModule,
    RouterModule,
    IonButtons,
    IonBackButton,
  ]
})
export class RegisterPage {
  protected registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
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

  public onRegister(): void {
    const registrationValue: Registration = this.registerForm.value as Registration;
    this.authenticationService.register(registrationValue as RegisterApiInterface).subscribe({
      next: (registrationResponse: RegisterApiResponseInterface) => {
        this.storageService.setItem(StorageKeyEnum.ACCESS_TOKEN, registrationResponse.access_token);

        this.storageService.setItem(StorageKeyEnum.USER_FIRSTNAME, registrationValue.firstname);
        this.storageService.setItem(StorageKeyEnum.USER_LASTNAME, registrationValue.lastname);

        this.router.navigate(['/todos']);
      },
      error: () => {},
    });
  }

}
