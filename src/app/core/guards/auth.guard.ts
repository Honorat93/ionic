import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';
import { StorageKeyEnum } from '../enums/storage-key.enum';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageService = inject(StorageService);
  const token = storageService.getItem<string>(StorageKeyEnum.ACCESS_TOKEN);

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
