var intro = (function() {
  var step_one      = document.querySelector(".step.one"),
      step_two      = document.querySelector(".step.two"),
      step_three    = document.querySelectorAll(".step.three"),
      step_four     = document.querySelector(".step.four"),
      animation_end = utilities.whichAnimationEvent();

  function matchPosition() {
    var target  = document.querySelector(".step.three.middle"),
        target_x = target.offsetLeft - target.scrollLeft + target.clientLeft,
        target_y = target.offsetTop - target.scrollTop + target.clientTop,
        offset   = 50;

    step_four.style.left = (target_x - offset) + "px";
    step_four.style.top = target_y + "px";
  }

  function init() {
    step_one.classList.add("go");
    matchPosition();
  }

  if (animation_end) {
    step_one.addEventListener(animation_end, function() {
      step_two.classList.add("go");
    }, false);

    step_two.addEventListener(animation_end, function() {
      [].forEach.call(step_three, function(step) {
        step.classList.add("go");
      });
    }, false);

    step_three[0].addEventListener(animation_end, function() {
      step_four.classList.add("go");
    }, false);
  }

  document.addEventListener("DOMContentLoaded", init);
  window.addEventListener("resize", matchPosition);
})();
