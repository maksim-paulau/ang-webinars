import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';
import { ProductsStatePreloadingGuard, ProductExistGuard } from './guards';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
    canActivate: [ProductsStatePreloadingGuard]
  },
  {
    path: 'product/create',
    component: ProductEditComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    canActivate: [ProductExistGuard],
    children: [
      {
        path: 'feedback',
        component: ProductFeedbackComponent,
        outlet: 'feedback'
      }
    ]
  },
  {
    path: 'product/:id/edit',
    component: ProductEditComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
