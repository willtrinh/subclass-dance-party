// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {
    top: top,
    left: left
  };
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.$node.css(this.styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.$node.toggleClass('lineUp');
};

Dancer.prototype.spinMe = function() {
  this.$node.toggleClass('rotating');
};

Dancer.prototype.eject = function() {
  this.$node.addClass('lineRight');
  this.$node.fadeOut(5000, function() {
    $(this).remove();
  });
};

Dancer.prototype.reset = function() {
  if (this.$node.hasClass('lineUp')) {
    this.$node.removeClass('lineUp');
  }
  if (this.$node.hasClass('rotating')) {
    this.$node.removeClass('rotating');
  }
};