import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../core/+store/app.state';

// rxjs
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { ProductsServicesModule } from '../products-services.module';
import { checkStore } from './check-store.function';
import { AppSettingsGuard } from 'src/app/core/guards/app-settings.guard';

@Injectable({
  providedIn: ProductsServicesModule
})
export class ProductsStatePreloadingGuard implements CanActivate {
  constructor(private store: Store<AppState>, private appSettingsGuard: AppSettingsGuard) {}

  canActivate(): Observable<boolean> {
    return this.appSettingsGuard.canActivate().pipe(
      switchMap(() => checkStore(this.store).pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
    )));
  }
}
