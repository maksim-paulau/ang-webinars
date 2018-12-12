import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { AppSettings } from '../app-settings';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private appSettingKey = 'appSettings';

  constructor(private localStorage: LocalStorageService, private http: HttpClient) { }

  getAppSettings(): Observable<AppSettings> {

    const appSettings = this.retrieveFromLocalStorage();

    if (appSettings !== null) {
      return of(appSettings);
    }

    return this.retrieveFromJson().pipe(
      map(data => {
        const appSettingsFromJson = data as AppSettings;
        this.localStorage.setItem(this.appSettingKey, JSON.stringify(appSettingsFromJson));
        return appSettingsFromJson;
      }),
      catchError(() => {
        const defaultAppSettings = new AppSettings();
        this.localStorage.setItem(this.appSettingKey, JSON.stringify(defaultAppSettings));
        return of(defaultAppSettings);
      })
    );
  }

  retrieveFromLocalStorage(): any {
    const appSettings = this.localStorage.getItem(this.appSettingKey);
    return JSON.parse(appSettings);
  }

  retrieveFromJson(): Observable<any> {
    return this.http.get('./assets/app-settings.json');
  }
}
