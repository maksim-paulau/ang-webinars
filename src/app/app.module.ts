import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './components/products/products.module';
import { CartModule } from './components/cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
