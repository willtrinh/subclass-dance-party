var WiggleDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<img class=\'wiggle\' src=\'https://media.giphy.com/media/whToPiKaI1IUIL2PxP/giphy.gif\'>');
  this.$node.addClass('wiggle');
};
WiggleDancer.prototype = Object.create(Dancer.prototype);
WiggleDancer.prototype.constructor = WiggleDancer;

