var RunningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<img class=\'runner\' src=\'https://media.giphy.com/media/5BzBF7WFFyy7uKMfj5/giphy.gif\'>');
  this.$node.addClass('runner');
};
RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;


