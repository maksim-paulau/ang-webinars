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

  public currentSettings: AppSettings;

  private appSettingKey = 'appSettings';

  constructor(private localStorage: LocalStorageService, private http: HttpClient) { }

  loadAppSettings(): Observable<boolean> {

    const appSettings = this.retrieveFromLocalStorage();

    if (appSettings !== null) {
      this.currentSettings = appSettings;
      console.log('AppSettings loaded from LocalStorage');
      return of(true);
    }

    return this.retrieveFromJson().pipe(
      map(data => {
        const appSettingsFromJson = data as AppSettings;
        this.localStorage.setItem(this.appSettingKey, JSON.stringify(appSettingsFromJson));
        this.currentSettings = appSettingsFromJson;
        console.log('AppSettings loaded from JSON');
        return true;
      }),
      catchError(() => {
        const defaultAppSettings = new AppSettings();
        this.localStorage.setItem(this.appSettingKey, JSON.stringify(defaultAppSettings));
        this.currentSettings = defaultAppSettings;
        console.log('Fail to load appSettings, use default');
        return of(true);
      })
    );
  }

  private retrieveFromLocalStorage(): any {
    const appSettings = this.localStorage.getItem(this.appSettingKey);
    return JSON.parse(appSettings);
  }

  private retrieveFromJson(): Observable<any> {
    return this.http.get('./assets/app-settings.json');
  }
}
