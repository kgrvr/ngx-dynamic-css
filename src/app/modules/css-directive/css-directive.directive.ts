import { Directive, Input, AfterViewInit, OnChanges, ElementRef, SimpleChanges } from '@angular/core';

// Models
import { NgCssModel } from '../interfaces/ngCss.model';

@Directive({
    selector: '[ngCss]'
})
export class CssDirectiveDirective implements AfterViewInit, OnChanges {

    @Input() ngCss: NgCssModel | NgCssModel[];

    private _nativeElement: HTMLElement;

    constructor(private _elementRef: ElementRef) {
        this._nativeElement = _elementRef.nativeElement;
    }

    ngAfterViewInit() {
        if (this.ngCss instanceof Array) {
            this.ngCss.forEach(ngCssElement => {
                if (ngCssElement.apply) {
                    this.applyStyles(ngCssElement.css);
                }
            });
        } else {
            if (this.ngCss.apply) {
                this.applyStyles(this.ngCss.css);
            }
        }
    }

    ngOnChanges(changes: SimpleChanges) { }

    private applyStyles(css: any) {
        if (css) {
            for (const key in css) {
                if (css.hasOwnProperty(key)) {
                    this._nativeElement.style[key] = css[key];
                }
            }
        }
    }

}
