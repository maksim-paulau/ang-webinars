import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService, GeneratorService, GeneratorFactory, ConstantsService } from './services';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: {App: 'Shop', Version: '0.31'} },
    { provide: GeneratorService, useFactory: GeneratorFactory(5) }
  ]
})
export class CoreModule { }
