import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

// ngrx
import { Store, select } from '@ngrx/store';
import { AppState } from '../../core/+store/app.state';
import { getProductsData } from '../../core/+store/products';
import * as RouterActions from '../../core/+store/router/router.actions';

// rxjs
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { ProductsServicesModule } from '../products-services.module';
import { checkStore } from './check-store.function';
import { AppSettingsGuard } from 'src/app/core/guards/app-settings.guard';

@Injectable({
  providedIn: ProductsServicesModule
})
export class ProductExistGuard implements CanActivate {
  constructor(private store: Store<AppState>, private appSettingsGuard: AppSettingsGuard) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.appSettingsGuard.canActivate().pipe(
      switchMap(() => checkStore(this.store).pipe(
      switchMap(() => {
        const id = +route.paramMap.get('id');
        return this.hasProduct(id);
      })
    )));
  }

  private hasProduct(id: number): Observable<boolean> {
    return this.store.pipe(
      select(getProductsData),

      // check if product with id exists
      map(products => !!products.find(product => product.id === id)),

      // make a side effect
      tap(result => {
        if (!result) {
          this.store.dispatch(new RouterActions.Go({ path: ['/home'] }));
        }
      }),

      // automatically unsubscribe
      take(1)
    );
  }
}
