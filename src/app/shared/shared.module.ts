import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { CustomizeOnClickDirective } from './customize-on-click.directive';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    CustomizeOnClickDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HighlightDirective,
    CustomizeOnClickDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
