var intro = (function() {
  var step_one      = document.querySelector(".step.one"),
      step_two      = document.querySelector(".step.two"),
      step_three    = document.querySelectorAll(".step.three"),
      step_four     = document.querySelector(".step.four"),
      animation_end = utilities.whichAnimationEvent();

  var ret = {
    init: function() {
      if (step_one !== null) {
        step_one.classList.add("go");
      }
    }
  };

  if (animation_end && step_one !== null) {
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

  return ret;
})();
