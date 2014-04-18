iPadDigit = (function(selector, api, delay, eventType, inputDisplay) {
    this.selector = $(selector).not('.no-action');
    this.api      = api;
    this.event    = eventType;

    this.inputs   = [];

    this.timer    = null;
    this.delay    = delay;

    this.inputDisplay = inputDisplay
});

iPadDigit.prototype.handleInputs = function() {
    var self = this;

    this.selector.on(this.event, function() {
        var value = $(this).text();

        if (value === 'Cancel') {
            self.resetInput();
        } else {
            self.inputs.push(value);
            self.displayInputs();

            self.createTimer();

            if (self.inputs.length == 6) {
                self.sendData();
                setTimeout(function() {
                    self.resetInput();
                }, 500);
            }
        }
    });
};

iPadDigit.prototype.resetInput = function() {
    this.inputs = [];
    this.displayInputs();
    clearInterval(this.timer);
};

iPadDigit.prototype.displayInputs = function() {
    if (this.inputDisplay !== false) {
        var self     = this,
            displays = $(self.inputDisplay)

        displays.removeClass('filled');
/*        $.each(displays, function(_, e) {
            $(e).removeClass
        });*/

        $.each(this.inputs, function(i, e) {
            displays.eq(i).addClass('filled')
        });
    }
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
    var url = this.api + '/' + this.inputs.join('');
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
            inputDisplay = opts.inputDisplay || false;

            digi  = new iPadDigit(this, api, delay, event, inputDisplay);
            digi.handleInputs();
        }
    })
})($)
