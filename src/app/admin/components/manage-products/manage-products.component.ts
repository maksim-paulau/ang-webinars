import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/+store/app.state';
import { getProductsData } from 'src/app/core/+store/products';
import { Observable } from 'rxjs';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products: Observable<ProductModel[]>;

  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.products = this.store.pipe(select(getProductsData));
  }

  onDelete(id: number): void {
    this.store.dispatch(new ProductsActions.DeleteProduct(id));
  }

  onUpdate(product: ProductModel): void {
    this.store.dispatch(new ProductsActions.UpdateProduct(product));
  }
}
