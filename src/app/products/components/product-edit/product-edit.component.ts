import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductModel } from '../../models/product';
import { Subscription } from 'rxjs';
import { AppState } from './../../../core/+store/app.state';
import { getSelectedProductByUrl } from './../../../core/+store/products';
import { Store, select } from '@ngrx/store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  product: ProductModel = new ProductModel();

  private sub: Subscription;

  constructor(
    private store: Store<AppState>) {}

  ngOnInit() {
    this.sub = this.store.pipe(select(getSelectedProductByUrl))
      .subscribe(product => this.product = {...product as ProductModel});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.store.dispatch(new ProductsActions.UpdateProduct(product));
    } else {
      this.store.dispatch(new ProductsActions.CreateProduct(product));
    }
  }

  onGoBack(): void {
    this.store.dispatch(new RouterActions.Back());
  }
}
