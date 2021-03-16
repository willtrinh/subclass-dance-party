var ShakerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<img class=\'shaker\' src=\'https://media.giphy.com/media/Z8ZMTgpxb3ytFWy2j6/giphy.gif\'>');
  this.$node.addClass('shaker');
};
ShakerDancer.prototype = Object.create(Dancer.prototype);
ShakerDancer.prototype.constructor = ShakerDancer;

ShakerDancer.prototype.shake = function() {
  this.$node.toggleClass('shaking');
};