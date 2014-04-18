digicode
========

A little `Zepto/jQuery` plugin to create an iPad or Smartphone digicode in a Webview.

## Features

- iPad passcode design

- Displays a progress as keys are pressed
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
        api: 'yourapiendpoint',
        resetDelay: 10,
        eventType: 'click tap',
        inputDisplay: '#digicode .password li' // If you want the password to display
    });
});
```