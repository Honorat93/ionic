import { Component, OnInit, inject } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user/user.service';
import { CommonModule } from '@angular/common';
import { StorageService } from "../../core/services/storage/storage.service";
import { StorageKeyEnum } from "../../core/enums/storage-key.enum";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButtons,
    IonBackButton,
    IonButton,
    ReactiveFormsModule
  ],
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  protected profileForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required])
  });

  protected isLoading = true;

  private readonly userService = inject(UserService);
  private readonly storageService = inject(StorageService);
  private readonly router = inject(Router); 

  ngOnInit(): void {
    const storedFirstname = this.storageService.getItem<string>(StorageKeyEnum.USER_FIRSTNAME) ?? '';
    const storedLastname = this.storageService.getItem<string>(StorageKeyEnum.USER_LASTNAME) ?? '';

    this.profileForm.patchValue({
      firstname: storedFirstname,
      lastname: storedLastname
    });

    this.isLoading = false;
  }

  public onSave(): void {
    const { firstname, lastname } = this.profileForm.value;

    if (!firstname || !lastname) {
      return;
    }

    this.storageService.setItem(StorageKeyEnum.USER_FIRSTNAME, firstname);
    this.storageService.setItem(StorageKeyEnum.USER_LASTNAME, lastname);

    this.router.navigate(['/todos']);
  }

}