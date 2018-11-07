import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './services/products.service';
import { CartService } from '../cart/cart.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ],
  providers: [
    ProductsService,
    CartService
  ]
})
export class ProductsModule { }
