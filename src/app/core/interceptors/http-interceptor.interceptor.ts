import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { StorageService } from "../services/storage/storage.service";
import { StorageKeyEnum } from "../enums/storage-key.enum";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const storageService = inject(StorageService);
  const token = storageService.getItem<string>(StorageKeyEnum.ACCESS_TOKEN);

  if(req.url.includes('login') || req.url.includes('register'))
    return next(req);

  req = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(req);
};
