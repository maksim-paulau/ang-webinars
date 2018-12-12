import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    const value = localStorage.getItem(key);
    return value;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
