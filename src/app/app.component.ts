import { Component } from '@angular/core';

import { NgCssModel } from './modules/interfaces/ngCss.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    ngCssSingle: NgCssModel = {
        apply: true,
        css: {
            'text-align': 'left',
        }
    };

    ngCss: NgCssModel[] = [
        {
            apply: true,
            css: {
                'color': 'red',
            }
        },
        {
            apply: true,
            css: {
                'font-size': '50px',
            }
        }
    ];

    handleClick() {
        this.ngCssSingle.css.color = 'blue';
    }
}
