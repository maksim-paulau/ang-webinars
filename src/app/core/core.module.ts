import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService, ConstantsService, GeneratorService, GeneratorFactory } from './services';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: localStorage, useClass: LocalStorageService },
    { provide: ConstantsService, useValue: {App: 'Shop', Version: '0.31'} },
    { provide: GeneratorService, useFactory: GeneratorFactory(5) }
  ]
})
export class CoreModule { }
