# NgxDynamicCss

> Angular 5 directive used to apply styles to html element using javascript object dynamically.

[![npm](https://img.shields.io/npm/v/ngx-dynamic-css.svg?style=flat-square)](https://www.npmjs.com/package/ngx-dynamic-css)

## Download:
NPM: https://www.npmjs.com/package/ngx-dynamic-css

## Usage:

HTML Template:

    <h2 [ngCss]='ngCss'>This is h2 tag</h2>

Typescript: 

    ngCss: NgCssModel = {
	    css: {
	      'color': 'red',
	      'font-size': '50px',
	      'a': 'a'
	    }
    };

## Build:
Run "npm run packager" to package directive to dist folder.