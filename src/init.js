$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // Event Listeners
  // Line Up
  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  // Mouse Events Handlers
  // $('body').on('mouseover', '.dancer', function(event) {
  //   $(this).addClass('resizer');
  // });
  // $('body').on('mouseleave', '.dancer', function(event) {
  //   $(this).removeClass('resizer');
  // });
  // Shaker Mouseover
  $('body').on('mouseover', '.shaker', function(event) {
    $(this).addClass('shaking');
  });
  $('body').on('mouseleave', '.shaker', function(event) {
    $(this).removeClass('shaking');
  });
  // Twerker Mouseover
  $('body').on('mouseover', '.wiggle', function(event) {
    $(this).addClass('rotating');
  });
  $('body').on('mouseleave', '.wiggle', function(event) {
    $(this).removeClass('rotating');
  });
  // Flosser Mouseover
  $('body').on('mouseover', '.floss', function(event) {
    $(this).addClass('resizer');
  });
  $('body').on('mouseleave', '.floss', function(event) {
    $(this).removeClass('resizer');
  });
  // Runner Mouseover
  $('body').on('mouseover', '.runner', function(event) {
    $(this).fadeOut();
  });
  $('body').on('mouseleave', '.runner', function(event) {
    $(this).fadeIn();
  });


  // Spin Me
  $('.spinMeButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].spinMe();
    }
  });
  // Execute Order 66
  $('.ejectButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].eject();
    }
  });
});

