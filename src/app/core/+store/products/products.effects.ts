import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';
import * as RouterActions from './../router/router.actions';

// rxjs
import { Observable, of } from 'rxjs';
import { concatMap, pluck, switchMap, map } from 'rxjs/operators';
import { ProductModel } from '../../../products/models/product';
import { ProductsPromiseService } from './../../../products/services/products-promise.service';


@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
    private productPromiseService: ProductsPromiseService) {
    console.log('[PRODUCTS EFFECTS]');
  }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    // Instead of ofType<ProductsActions.GetProducts>(...) you can use ofType(...)
    // It's optional.
    // Specify the action type to allow type-safe mapping to other data on the action,
    // including payload
    ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
    switchMap((action: ProductsActions.GetProducts) =>
      this.productPromiseService
        .getProducts()
        .then(products => new ProductsActions.GetProductsSuccess(products))
        .catch(err => new ProductsActions.GetProductsError(err))
    )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.UPDATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: ProductModel) =>
      this.productPromiseService
        .updateProduct(payload)
        .then(product => new ProductsActions.UpdateProductSuccess(product))
        .catch(err => new ProductsActions.UpdateProductError(err))
    )
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct>(ProductsActions.ProductsActionTypes.CREATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: ProductModel) =>
      this.productPromiseService
        .createProduct(payload)
        .then(product => new ProductsActions.CreateProductSuccess(product))
        .catch(err => new ProductsActions.CreateProductError(err))
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.DeleteProduct>(ProductsActions.ProductsActionTypes.DELETE_PRODUCT),
    pluck('payload'),
    concatMap((payload: any) =>
      this.productPromiseService
        .deleteProduct(payload)
        .then(
          (/* method delete for this API returns nothing, so we will use payload */) => {
            return new ProductsActions.DeleteProductSuccess(payload);
          }
        )
        .catch(err => new ProductsActions.DeleteProductError(err))
    )
  );

  @Effect()
  createUpdateProductSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct | ProductsActions.UpdateProduct>(
      ProductsActions.ProductsActionTypes.CREATE_PRODUCT_SUCCESS,
      ProductsActions.ProductsActionTypes.UPDATE_PRODUCT_SUCCESS
    ),
    map(() =>
        new RouterActions.Go({
          path: ['/home']
        })
    )
  );
}


