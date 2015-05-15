var main = (function() {
  "use strict";

  var ret = {
    init: function() {
      bindings();
    }
  };

  function bindings() {
    var nav_links   = document.querySelectorAll('.nav-link'),
        click_touch = utilities.isTouchDevice() ? 'touchend' : 'click';

    function removeActiveNav() {
      [].forEach.call(nav_links, function (el) {
        el.classList.remove('active-nav');
        el.classList.add('inactive-nav');
      });
    }

    [].forEach.call(nav_links, function (el) {
      el.addEventListener(click_touch, function(e) {
        var href = this.href;
        e.preventDefault();
        removeActiveNav();
        el.classList.remove('inactive-nav');
        el.classList.add('active-nav');
        location.href = href;
      }, false);
    });

    document.addEventListener('touchstart', function(){}, true);
  }

  return ret;
})();
