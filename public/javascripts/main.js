var main = (function() {
  "use strict";

  var ret = {
    init: function() {
      bindings();
    }
  };

  function bindings() {
    var nav_links = document.querySelectorAll('.nav-link');

    function removeActiveNav() {
      [].forEach.call(nav_links, function (el) {
        el.classList.remove('active-nav');
        el.classList.add('inactive-nav');
      });
    }

    [].forEach.call(nav_links, function (el) {
      el.addEventListener('click', function(e) {
        removeActiveNav();
        el.classList.remove('inactive-nav');
        el.classList.add('active-nav');
      }, false);
    });

    document.addEventListener('touchstart', function(){}, true);
  }

  return ret;
})();
