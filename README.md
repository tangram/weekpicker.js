# weekpicker.js

![weekpicker](http://tangram.github.io/img/weekpicker.png)

Week picker widget jQuery plugin. Click to toggle week numbers. Simple stuff.

## Usage
Include jQuery, `weekpicker.js` and `weekpicker.css` in your markup.

`$('#container').weekpicker()` to set up the widget.

### Input and output
`$('#container').weekpicker(init)` to initialize with data, where `init` is an array of integers between 1 and 52 (or 53 for certain years).

`$('#container').val()` will get you an array of selected values.

### Input element interaction
`$('#input').weekpicker()` will visually replace `<input type="text">`, initialize with comma separated integers from the input, and output to the hidden input on change.
