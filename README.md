# NgxDynamicCss

> Angular 5 directive used to apply styles to html element using javascript object dynamically.

[![npm](https://img.shields.io/npm/v/ngx-dynamic-css.svg?style=flat-square)](https://www.npmjs.com/package/ngx-dynamic-css)

## Download:
**NPM**: https://www.npmjs.com/package/ngx-dynamic-css
**Github**: https://github.com/kgrvr/ngx-dynamic-css

## Usage:

HTML Template:

    <h2 [ngCss]='ngCss'>This is h2 tag</h2>

Typescript: 

    ngCss: NgCssModel = {
	    apply: true,
	    css: {
	      'color': 'red',
	      'font-size': '50px'
	    }
    };


----------


Or you can pass an array to it too:
Typescript:

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

HTML template:

    <h1 [ngCss]='ngCssSingle'>
	    Welcome to NgxDynamicCss!
    </h1>
    <h2 [ngCss]='ngCss'>This is h2 tag</h2>


## Properties:

 - `apply` =  Whether to apply CSS properties or not
	 - Type: `Boolean`
 - `css` = Actual CSS properties in Key Value format
	 - Type: `{ 'key': 'value' }`

## Build:
Run "npm run packager" to package directive to dist folder.

## ToDo:

 - Change detection to detect changes in key value pair.
 - Change the way it apply styles to setAttribute.
 - Update docs.

## Follow me on Github:
**Kush Grover**: https://github.com/kgrvr

Feel free to request for Pull Request. Collaborate and build! :)