var main = (function() {
  "use strict";

  var ret = {
    init: function() {
      utilities.loadStyleSheet('/dist/main.min.css');
      bindings();
    },
    contact: function() {
      fillSelect();
    }
  };

  function fillSelect() {
    var subject = utilities.getParameterByName('subject');

    if (subject.length) {
      document.getElementById('subject').value = subject.charAt(0).toUpperCase() + subject.slice(1);
    }
  }

  function bindings() {
    var nav_links   = document.querySelectorAll('.nav-link'),
        click_touch = utilities.isTouchDevice() ? 'touchstart' : 'click';

    function removeActiveNav() {
      [].forEach.call(nav_links, function (el) {
        el.classList.remove('active-nav');
        el.classList.add('inactive-nav');
      });
    }

    [].forEach.call(nav_links, function (el) {
      el.addEventListener(click_touch, function() {
        removeActiveNav();
        el.classList.remove('inactive-nav');
        el.classList.add('active-nav');
      }, false);
    });

    document.addEventListener('touchstart', function(){}, true);
  }

  return ret;
})();
