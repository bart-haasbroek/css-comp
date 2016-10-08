# Css composition


Css composition enables you to create animations, named compositions, with simple data-atributes and manage them easily. This way you can update and change the duration and delay of an animation and this plugins will update all the other elements in the same composition for you.

- [Introduction](#Introduction)
- [Getting started](#getting-started)
- [Documentation](#documentation)


## Introduction

I wrote this plugin for the problem of css animations. Once you have a nice animation made with css and you will change the delay of one element, all delays of the elements have to be adjusted because the css delay property is not relative to the previous element. This plugin checks the previous element and give them a inline element style of the previous duration + delay. So the new element will start animating after the previous is finished.

### Getting started

### First include jquery to your project
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`

### Second, add the css_comp.js file to your project
`<script type="text/javascript" src="path/to/project/assets/css_composition.js"></script>`

### Now all preparations are done and you're ready to make some animations :)

## Documentation

Hoe does it works:

Load the plugin in the dom.
Give each element in the same animation a data-composition wich have to be the same.
Give each element a class of animation.
You can add some relative delay with the data-attribute 'data-rel_delay'. You can use positive numbers and negative numbers. So with a data-rel_del='-0.5' the element will start 0.5s before the previous element is finished. 


