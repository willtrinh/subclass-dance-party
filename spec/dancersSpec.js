describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });



  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('shakerDancer', function() {

  var timeBetweenSteps = 100;
  var shakerDancer;

  beforeEach(function() {
    shakerDancer = new ShakerDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shakerDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a shake function', function() {
    sinon.spy(shakerDancer.$node, 'toggleClass');
    shakerDancer.shake();
    expect(shakerDancer.$node.toggleClass.called).to.be.true;
  });
});

describe('dancer', function() {

  var timeBetweenSteps = 100;
  var dancer;

  beforeEach(function() {
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineUp function', function() {
    sinon.spy(dancer.$node, 'toggleClass');
    dancer.lineUp();
    expect(dancer.$node.toggleClass.called).to.be.true;
  });
  it('should have a spinMe function', function() {
    sinon.spy(dancer.$node, 'toggleClass');
    dancer.spinMe();
    expect(dancer.$node.toggleClass.called).to.be.true;
  });
  it('should have a eject function', function() {
    sinon.spy(dancer.$node, 'fadeOut');
    dancer.eject();
    expect(dancer.$node.fadeOut.called).to.be.true;
  });
  it('should have a reset function', function() {
    sinon.spy(dancer.$node, 'hasClass');
    dancer.reset();
    expect(dancer.$node.hasClass.called).to.be.true;
  });


});

