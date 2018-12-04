import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { PathNotFoundComponent } from './layout/components/path-not-found/path-not-found.component';
import { LoginComponent } from './layout/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    PathNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
