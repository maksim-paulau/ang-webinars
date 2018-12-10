import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
    console.log('set item call');
    console.log('current localStorage length: ' + localStorage.length);
  }

  getItem(key: string): string {
    const value = localStorage.getItem(key);
    console.log('get item call');
    console.log('current localStorage length: ' + localStorage.length);
    return value;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
    console.log('remove item call');
    console.log('current localStorage length: ' + localStorage.length);
  }
}
