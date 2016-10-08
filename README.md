# Css composition


Css composition enables you to create animations, named compositions, with simple data-atributes and manage them easily. This way you can update and change the duration and delay of an animation and this plugins will update all the other elements in the same composition for you.

- [Introduction](#Introduction)
- [Getting started](#getting-started)
- [Documentation](#documentation)


## Introduction

I wrote this plugin for the problem of css animations. Once you have a nice animation made with css and you will change the delay of one element, all delays of the elements have to be adjusted because the css delay property is not relative to the previous element. This plugin checks when the previous element is finished with the animation and make this element start animating on that moment, depending on what you're put in.

### Getting started

### First include jquery to your project
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`

### Then add the css_composition.js file to your project
`<script type="text/javascript" src="path/to/project/assets/css_composition.js"></script>`

### And last define an new composition in your javascript file
`$(document).ready(function($) {
	composition = new composition( 'composition' );
});`


Now all preparations are done and you're ready to make some animations :)

## Documentation

### Hoe does it works:
- Give all element you want to animate the class `animation`.

- Give all elements you want in the same composition the same `data-attribute` name of `data-composition`. So if you want an composition named 'introduction', give al elements the data-attribute `data-attribute="introdction"`.

- Animate you're elements with css.

- On default all elements will start animating right after the previous element is finished. We can control this with the `data-attribute` `data-rel_delay`. I.e. if an element had an `data-attribute` of `data-rel_delay='2'`, then it will start 2 seconds after the previous element is finished. You can also use decimal numbers like `data-rel_delay='0.5'`, and negative numbers like `data-rel_delay='-2'` for an better control over our animations.

### Happy animating ;)