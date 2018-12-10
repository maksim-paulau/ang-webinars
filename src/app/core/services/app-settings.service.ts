import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { AppSettings } from '../app-settings';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

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

    return this.retrieveFromJson();
  }

  retrieveFromLocalStorage(): any {
    const appSettings = this.localStorage.getItem(this.appSettingKey);
    return JSON.parse(appSettings);
  }

  retrieveFromJson(): Observable<AppSettings> {
    return this.http.get('./assets/app-settings.json').pipe(
      catchError(() => of({})),
      map(data => {
        let appSettings = data as AppSettings;
        if (Object.keys(appSettings).length === 0) {
          appSettings = new AppSettings();
        }
        this.localStorage.setItem(this.appSettingKey, JSON.stringify(appSettings));
        return appSettings;
      })
    );
  }
}
