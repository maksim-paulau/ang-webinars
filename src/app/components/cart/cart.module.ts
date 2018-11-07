import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductComponent } from '../products/product/product.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [
    CartListComponent,
  ],
  imports: [
    CommonModule,
    ProductsModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
