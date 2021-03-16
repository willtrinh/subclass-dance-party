var FlossDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<img class=\'floss\' src=\'https://media.giphy.com/media/poLgZEMJjr93yIlYoc/giphy.gif\'>');
  this.$node.addClass('floss');
};
FlossDancer.prototype = Object.create(Dancer.prototype);
FlossDancer.prototype.constructor = FlossDancer;


