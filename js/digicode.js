iPadDigit = (function(selector, api, delay, eventType) {
    this.selector = $(selector);
    this.api      = api;
    this.event    = eventType;

    this.inputs   = [];

    this.timer    = null;
    this.delay    = delay;
});

iPadDigit.prototype.handleInputs = function() {
    var self = this;

    this.selector.on(this.event, function() {
        var value = $(this).text();

        self.inputs.push(value);
        self.createTimer();

        if (self.inputs.length == 6) {
          self.sendData();
          self.resetInput();
        }
    });
};

iPadDigit.prototype.resetInput = function() {
    this.inputs = [];
    clearInterval(this.timer);
};

iPadDigit.prototype.createTimer = function(resetTimer) {
    var self = this;

    if (this.timer != null) {
        clearInterval(this.timer);
    }

    this.timer = setInterval(function() {
        self.resetInput();
    }, this.delay);
};

iPadDigit.prototype.sendData = function() {
    var url = this.api + '?' + 'digits=' + this.inputs.join();
    $.get(url, function(response) {
      console.log(response);
    });
};

;(function($){
    $.extend($.fn, {
        digicode: function(opts){
            api   = opts.api || '/';
            delay = opts.resetDelay * 1000 || 10000;
            event = opts.eventType || 'tap';

            digi  = new iPadDigit(this, api, delay, event);
            digi.handleInputs();
        }
    })
})($)
