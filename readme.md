# H1
Css composition

## H2
What does it do?

I wrote this for the problem of css animations. Once you have a nice animation made with css and you will change the delay of one of the first elements, all delays of the elements have to be adjusted because the css delay property is not reletive to the previos element. This plugin checks the previous element and give them a inline element style of the previous duration + delay. So the new element will start animating after the previous is finished.

### H3
Hoe does it works:

Load the plugin in the dom.
Give each element in the same animation a data-composition wich have to be the same.
Give each element a class of animation.
You can add some relative delay with the data-attribute 'data-rel_delay'. You can use positive numbers and negative numbers. So with a data-rel_del='-0.5' the element will start 0.5s before the previous element is finished. 


