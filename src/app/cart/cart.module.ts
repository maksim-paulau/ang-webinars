import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule, cartRouterComponents } from './cart-routing.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    OrderFormComponent,
    CartComponent,
    cartRouterComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CartRoutingModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
