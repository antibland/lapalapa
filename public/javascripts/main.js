var main = (function() {
  "use strict";

  var ret = {
    init: function() {
      alert('yes');
      bindings();
    }
  };

  function bindings() {
    document.addEventListener("touchstart", function(){}, true);
  }

  return ret;

})();
