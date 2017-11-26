import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssDirectiveDirective } from './css-directive.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CssDirectiveDirective],
  exports: [CssDirectiveDirective]
})
export class CssDirectiveModule { }
