import { Injectable } from '@angular/core';
import { StorageKeyEnum } from "../../enums/storage-key.enum";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public setItem<T>(key: StorageKeyEnum | string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: StorageKeyEnum | string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  public removeItem(key: StorageKeyEnum | string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
