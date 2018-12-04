import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductFeedbackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ProductsRoutingModule
  ],
  exports: [

  ],
  providers: []
})
export class ProductsModule { }
