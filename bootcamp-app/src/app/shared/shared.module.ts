import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPipe } from './pipes';
import { HighlightDirective } from './directives';



@NgModule({
  declarations: [MapPipe, HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [MapPipe, HighlightDirective]
})
export class SharedModule { }
