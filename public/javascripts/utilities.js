var utilities = (function() {
  "use strict";

  var ret = {
    loadStyleSheet: function(src) {
      if (document.createStyleSheet) {
        document.createStyleSheet(src);
      } else {
        var stylesheet = document.createElement('link');
        stylesheet.href = src;
        stylesheet.rel = 'stylesheet';
        stylesheet.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(stylesheet);
      }
    },
    getParameterByName: function(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex   = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);

      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
    loadMap: function(id, lat, lng, title) {
      var mapDiv = document.getElementById(id),
          latlng = new google.maps.LatLng(lat, lng),
          mapOptions = {
            zoom: 16,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            disableDefaultUI: true
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
    },

    detectswipe: function(el,func) {
      var swipe_det = {
        sx: 0,
        sy: 0,
        eX: 0,
        eY: 0
      };
      var min_x = 30;  //min x swipe for horizontal swipe
      var max_x = 30;  //max x difference for vertical swipe
      var min_y = 50;  //min y swipe for vertical swipe
      var max_y = 60;  //max y difference for horizontal swipe
      var direc = "";
      var ele = document.getElementById(el);
      ele.addEventListener('touchstart',function(e){
        var t = e.touches[0];
        swipe_det.sX = t.screenX;
        swipe_det.sY = t.screenY;
      },false);
      ele.addEventListener('touchmove',function(e){
        var t = e.touches[0];
        swipe_det.eX = t.screenX;
        swipe_det.eY = t.screenY;
      },false);
      ele.addEventListener('touchend',function(e){
        //horizontal detection
        if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
          if(swipe_det.eX > swipe_det.sX) direc = "r";
          else direc = "l";
        }
       /* //vertical detection
        else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
          if(swipe_det.eY > swipe_det.sY) direc = "d";
          else direc = "u";
        }*/

        if (direc !== "") {
          if (typeof func == 'function') func(el,direc);
        }
        direc = "";
        swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
      },false);
    }
  };

  return ret;
})();
