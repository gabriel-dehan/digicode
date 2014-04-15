digicode
========

A little `Zepto/jQuery` plugin to create an iPad or Smartphone digicode in a Webview.

## Features

- Displays a digicode
- Handles tap/click events on numbers
- When 6 digits are input it sends it's data to an API.
- When a delay has passed, the input is reset and you can re-enter your 6 digits all over again.

## Usage

- Get Zepto or jQuery.
- Get the `js/digicode.js` file.

```javascript
$(function() {
    $("#digicode li").digicode({
        api: 'http://www.google.com',
        resetDelay: 10,
        eventType: 'tap'
    });
});
```