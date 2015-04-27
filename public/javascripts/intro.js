var intro = (function() {
  var step_one         = document.querySelector(".step.one"),
      step_two         = document.querySelector(".step.two"),
      animation_end    = utilities.whichAnimationEvent();

  function init() {
    step_one.classList.add("go");
  }

  if (animation_end) {
    document.querySelector(".step").addEventListener(animation_end, function() {
      step_two.classList.add("go");
    }, false);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
