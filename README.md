# weekpicker.js

![weekpicker](http://tangram.github.io/img/weekpicker.png)

Week picker widget jQuery plugin. Click to toggle week numbers. Simple stuff.

## Usage
Include jQuery, `weekpicker.js` and `weekpicker.css` in your markup.

`var weekpicker = $('somediv').weekpicker()` to set up the widget.

`var weekpicker = $('somediv').weekpicker(init)` to initialize with data, where `init` is an array of integers between 1 and 52 (or 53 for certain years).

`weekpicker.val()` will get you a list of selected values.
