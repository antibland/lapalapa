var utilities = (function() {
  "use strict";

  var ret = {
    loadMap: function(id, lat, lng, title) {
      var mapDiv = document.getElementById(id),
          latlng = new google.maps.LatLng(lat, lng),
          mapOptions = {
            zoom: 16,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          },
          marker;

      var map = new google.maps.Map(mapDiv, mapOptions);

      marker = new google.maps.Marker({
          position: latlng,
          map: map,
          title: title
      });
    },

    supportsLocalStorage: function() {
      try {
        return 'localStorage' in window && window.localStorage !== null;
      } catch (e) {
        return false;
      }
    },

    whichAnimationEvent: function() {
      var t,
          el         = document.createElement("fakeelement"),
          animations = {
            "animation"      : "animationend",
            "OAnimation"     : "oAnimationEnd",
            "MozAnimation"   : "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
          };

      for (t in animations){
        if (el.style[t] !== undefined){
          return animations[t];
        }
      }
    },

    whichTransitionEvent: function() {
      var t,
          el          = document.createElement("fakeelement"),
          transitions = {
            "transition"      : "transitionend",
            "OTransition"     : "oTransitionEnd",
            "MozTransition"   : "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
          };

      for (t in transitions){
        if (el.style[t] !== undefined){
          return transitions[t];
        }
      }
    },

    getScrollHeight: function() {
      return ("scrollY" in window) ? window.scrollY : document.documentElement.scrollTop;
    },

    isTouchDevice: function() {
      return document.querySelector("html").classList.contains('touch');
    },

    loadTemplate: function(template, destination) {
      var t     = document.querySelector(template),
          clone = document.importNode(t.content, true);

      destination.setAttribute("aria-busy", "true");
      destination.appendChild(clone);
      destination.setAttribute("aria-busy", "false");
    },

    chainAnimations: function(data) {
      // TODO
    },

    preventDefault: function(e) {
      if (e.preventDefault()) {
        e.preventDefault();
      } else {
        return false;
      }
    }
  };

  return ret;
})();
