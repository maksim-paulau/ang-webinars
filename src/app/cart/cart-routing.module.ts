import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'order',
        component: OrderFormComponent
      },
      {
        path: '',
        component: CartListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }

export const cartRouterComponents = [OrderFormComponent];
