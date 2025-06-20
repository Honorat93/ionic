import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from "../services/storage/storage.service";
import { inject } from "@angular/core";
import { StorageKeyEnum } from "../enums/storage-key.enum";

export const homeGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const storageService = inject(StorageService);
  const token = storageService.getItem<string>(StorageKeyEnum.ACCESS_TOKEN);

  if(token) {
    return router.navigate(['/todos']);
  }

  return true;
};
