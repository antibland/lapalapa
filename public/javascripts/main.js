var main = (function() {
  "use strict";

  var ret = {
    init: function() {
      bindings();
    }
  };

  function bindings() {
    var nav_links = document.querySelectorAll('.nav-link');

    [].forEach.call(nav_links, function (el) {
      el.addEventListener('click', function() {
        el.classList.add('active');
      }, false);
    });

    document.addEventListener('touchstart', function(){}, true);
  }

  return ret;
})();
