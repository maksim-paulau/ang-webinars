import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterStateSerializerProvider, routerReducers, RouterEffects } from './router';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([RouterEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    RouterStateSerializerProvider,
  ],
  declarations: []
})
export class CoreStoreModule { }
