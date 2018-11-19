import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { CustomizeOnClickDirective } from './customize-on-click.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    CustomizeOnClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    CustomizeOnClickDirective
  ]
})
export class SharedModule { }
