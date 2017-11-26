import { Directive, Input, AfterViewInit, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngCss]'
})
export class CssDirectiveDirective implements AfterViewInit, OnChanges {

  @Input() ngCss: {
    css: any
  };

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.applyCss();
  }

  ngOnChanges(changes) { }

  applyCss() {
    const native = this._elementRef.nativeElement;
    if (native instanceof HTMLElement) {
      const css = this.ngCss.css;
      if (css) {
        for (let prop in css) {
          if (css.hasOwnProperty(prop)) {
            native.style[prop] = css[prop];
          }
        }
      }
    }
  }

}
