import { Component } from '@angular/core';

import { NgCssModel } from './modules/interfaces/ngCss.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngCss: NgCssModel = {
    css: {
      'color': 'red',
      'font-size': '50px',
      'a': 'a'
    }
  };

  handleClick() {
    this.ngCss.css.color = 'blue';
  }
}
