import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppSettingsService } from '../services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsGuard implements CanActivate {

  constructor(private appSettings: AppSettingsService) {}

  canActivate(): Observable<boolean> {
    return this.appSettings.loadAppSettings();
  }
}
