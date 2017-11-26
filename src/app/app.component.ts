import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  inp: {
    css: any
  } = {
    css: {
      'color': 'red',
      'font-size': '50px',
      'a': 'a'
    }
  };

  handleClick() {
    this.inp.css.color = 'blue';
  }
}
