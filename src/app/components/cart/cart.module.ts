import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductsModule } from '../products/products.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
