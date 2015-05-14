/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-csstransitions-inlinesvg-svg-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.cssanimations=function(){return G("animationName")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==q.svg};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
  "use strict";

  // For browsers that support matchMedium api such as IE 9 and webkit
  var styleMedia = (window.styleMedia || window.media);

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style       = document.createElement('style'),
      script      = document.getElementsByTagName('script')[0],
      info        = null;

    style.type  = 'text/css';
    style.id    = 'matchmediajs-test';

    script.parentNode.insertBefore(style, script);

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium: function(media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    };
  }

  return function(media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}());
/*! Picturefill - Responsive Images that work today.
*  Author: Scott Jehl, Filament Group, 2012 ( new proposal implemented by Shawn Jansepar )
*  License: MIT/GPLv2
*  Spec: http://picture.responsiveimages.org/
*/
(function( w, doc, image ) {
  // Enable strict mode
  "use strict";

  function expose(picturefill) {
    /* expose picturefill */
    if ( typeof module === "object" && typeof module.exports === "object" ) {
      // CommonJS, just export
      module.exports = picturefill;
    } else if ( typeof define === "function" && define.amd ) {
      // AMD support
      define( "picturefill", function() { return picturefill; } );
    }
    if ( typeof w === "object" ) {
      // If no AMD and we are in the browser, attach to window
      w.picturefill = picturefill;
    }
  }

  // If picture is supported, well, that's awesome. Let's get outta here...
  if ( w.HTMLPictureElement ) {
    expose(function() { });
    return;
  }

  // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
  doc.createElement( "picture" );

  // local object for method references and testing exposure
  var pf = w.picturefill || {};

  var regWDesc = /\s+\+?\d+(e\d+)?w/;

  // namespace
  pf.ns = "picturefill";

  // srcset support test
  (function() {
    pf.srcsetSupported = "srcset" in image;
    pf.sizesSupported = "sizes" in image;
    pf.curSrcSupported = "currentSrc" in image;
  })();

  // just a string trim workaround
  pf.trim = function( str ) {
    return str.trim ? str.trim() : str.replace( /^\s+|\s+$/g, "" );
  };

  /**
   * Gets a string and returns the absolute URL
   * @param src
   * @returns {String} absolute URL
   */
  pf.makeUrl = (function() {
    var anchor = doc.createElement( "a" );
    return function(src) {
      anchor.href = src;
      return anchor.href;
    };
  })();

  /**
   * Shortcut method for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
   */
  pf.restrictsMixedContent = function() {
    return w.location.protocol === "https:";
  };
  /**
   * Shortcut method for matchMedia ( for easy overriding in tests )
   */

  pf.matchesMedia = function( media ) {
    return w.matchMedia && w.matchMedia( media ).matches;
  };

  // Shortcut method for `devicePixelRatio` ( for easy overriding in tests )
  pf.getDpr = function() {
    return ( w.devicePixelRatio || 1 );
  };

  /**
   * Get width in css pixel value from a "length" value
   * http://dev.w3.org/csswg/css-values-3/#length-value
   */
  pf.getWidthFromLength = function( length ) {
    var cssValue;
    // If a length is specified and doesn’t contain a percentage, and it is greater than 0 or using `calc`, use it. Else, abort.
        if ( !(length && length.indexOf( "%" ) > -1 === false && ( parseFloat( length ) > 0 || length.indexOf( "calc(" ) > -1 )) ) {
            return false;
        }

    /**
     * If length is specified in  `vw` units, use `%` instead since the div we’re measuring
     * is injected at the top of the document.
     *
     * TODO: maybe we should put this behind a feature test for `vw`? The risk of doing this is possible browser inconsistancies with vw vs %
     */
    length = length.replace( "vw", "%" );

    // Create a cached element for getting length value widths
    if ( !pf.lengthEl ) {
      pf.lengthEl = doc.createElement( "div" );

      // Positioning styles help prevent padding/margin/width on `html` or `body` from throwing calculations off.
      pf.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden";

      // Add a class, so that everyone knows where this element comes from
      pf.lengthEl.className = "helper-from-picturefill-js";
    }

    pf.lengthEl.style.width = "0px";

        try {
        pf.lengthEl.style.width = length;
        } catch ( e ) {}

    doc.body.appendChild(pf.lengthEl);

    cssValue = pf.lengthEl.offsetWidth;

    if ( cssValue <= 0 ) {
      cssValue = false;
    }

    doc.body.removeChild( pf.lengthEl );

    return cssValue;
  };

    pf.detectTypeSupport = function( type, typeUri ) {
        // based on Modernizr's lossless img-webp test
        // note: asynchronous
        var image = new w.Image();
        image.onerror = function() {
            pf.types[ type ] = false;
            picturefill();
        };
        image.onload = function() {
            pf.types[ type ] = image.width === 1;
            picturefill();
        };
        image.src = typeUri;

        return "pending";
    };
  // container of supported mime types that one might need to qualify before using
  pf.types = pf.types || {};

  pf.initTypeDetects = function() {
        // Add support for standard mime types
        pf.types[ "image/jpeg" ] = true;
        pf.types[ "image/gif" ] = true;
        pf.types[ "image/png" ] = true;
        pf.types[ "image/svg+xml" ] = doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        pf.types[ "image/webp" ] = pf.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=");
    };

  pf.verifyTypeSupport = function( source ) {
    var type = source.getAttribute( "type" );
    // if type attribute exists, return test result, otherwise return true
    if ( type === null || type === "" ) {
      return true;
    } else {
        var pfType = pf.types[ type ];
      // if the type test is a function, run it and return "pending" status. The function will rerun picturefill on pending elements once finished.
      if ( typeof pfType === "string" && pfType !== "pending") {
        pf.types[ type ] = pf.detectTypeSupport( type, pfType );
        return "pending";
      } else if ( typeof pfType === "function" ) {
        pfType();
        return "pending";
      } else {
        return pfType;
      }
    }
  };

  // Parses an individual `size` and returns the length, and optional media query
  pf.parseSize = function( sourceSizeStr ) {
    var match = /(\([^)]+\))?\s*(.+)/g.exec( sourceSizeStr );
    return {
      media: match && match[1],
      length: match && match[2]
    };
  };

  // Takes a string of sizes and returns the width in pixels as a number
  pf.findWidthFromSourceSize = function( sourceSizeListStr ) {
    // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
    //                            or (min-width:30em) calc(30% - 15px)
    var sourceSizeList = pf.trim( sourceSizeListStr ).split( /\s*,\s*/ ),
      winningLength;

    for ( var i = 0, len = sourceSizeList.length; i < len; i++ ) {
      // Match <media-condition>? length, ie ( min-width: 50em ) 100%
      var sourceSize = sourceSizeList[ i ],
        // Split "( min-width: 50em ) 100%" into separate strings
        parsedSize = pf.parseSize( sourceSize ),
        length = parsedSize.length,
        media = parsedSize.media;

      if ( !length ) {
        continue;
      }
      // if there is no media query or it matches, choose this as our winning length
      if ( (!media || pf.matchesMedia( media )) &&
        // pass the length to a method that can properly determine length
        // in pixels based on these formats: http://dev.w3.org/csswg/css-values-3/#length-value
        (winningLength = pf.getWidthFromLength( length )) ) {
        break;
      }
    }

    //if we have no winningLength fallback to 100vw
    return winningLength || Math.max(w.innerWidth || 0, doc.documentElement.clientWidth);
  };

  pf.parseSrcset = function( srcset ) {
    /**
     * A lot of this was pulled from Boris Smus’ parser for the now-defunct WHATWG `srcset`
     * https://github.com/borismus/srcset-polyfill/blob/master/js/srcset-info.js
     *
     * 1. Let input (`srcset`) be the value passed to this algorithm.
     * 2. Let position be a pointer into input, initially pointing at the start of the string.
     * 3. Let raw candidates be an initially empty ordered list of URLs with associated
     *    unparsed descriptors. The order of entries in the list is the order in which entries
     *    are added to the list.
     */
    var candidates = [];

    while ( srcset !== "" ) {
      srcset = srcset.replace( /^\s+/g, "" );

      // 5. Collect a sequence of characters that are not space characters, and let that be url.
      var pos = srcset.search(/\s/g),
        url, descriptor = null;

      if ( pos !== -1 ) {
        url = srcset.slice( 0, pos );

        var last = url.slice(-1);

        // 6. If url ends with a U+002C COMMA character (,), remove that character from url
        // and let descriptors be the empty string. Otherwise, follow these substeps
        // 6.1. If url is empty, then jump to the step labeled descriptor parser.

        if ( last === "," || url === "" ) {
          url = url.replace( /,+$/, "" );
          descriptor = "";
        }
        srcset = srcset.slice( pos + 1 );

        // 6.2. Collect a sequence of characters that are not U+002C COMMA characters (,), and
        // let that be descriptors.
        if ( descriptor === null ) {
          var descpos = srcset.indexOf( "," );
          if ( descpos !== -1 ) {
            descriptor = srcset.slice( 0, descpos );
            srcset = srcset.slice( descpos + 1 );
          } else {
            descriptor = srcset;
            srcset = "";
          }
        }
      } else {
        url = srcset;
        srcset = "";
      }

      // 7. Add url to raw candidates, associated with descriptors.
      if ( url || descriptor ) {
        candidates.push({
          url: url,
          descriptor: descriptor
        });
      }
    }
    return candidates;
  };

  pf.parseDescriptor = function( descriptor, sizesattr ) {
    // 11. Descriptor parser: Let candidates be an initially empty source set. The order of entries in the list
    // is the order in which entries are added to the list.
    var sizes = sizesattr || "100vw",
      sizeDescriptor = descriptor && descriptor.replace( /(^\s+|\s+$)/g, "" ),
      widthInCssPixels = pf.findWidthFromSourceSize( sizes ),
      resCandidate;

      if ( sizeDescriptor ) {
        var splitDescriptor = sizeDescriptor.split(" ");

        for (var i = splitDescriptor.length - 1; i >= 0; i--) {
          var curr = splitDescriptor[ i ],
            lastchar = curr && curr.slice( curr.length - 1 );

          if ( ( lastchar === "h" || lastchar === "w" ) && !pf.sizesSupported ) {
            resCandidate = parseFloat( ( parseInt( curr, 10 ) / widthInCssPixels ) );
          } else if ( lastchar === "x" ) {
            var res = curr && parseFloat( curr, 10 );
            resCandidate = res && !isNaN( res ) ? res : 1;
          }
        }
      }
    return resCandidate || 1;
  };

  /**
   * Takes a srcset in the form of url/
   * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
   *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
   *     "images/pic-small.png"
   * Get an array of image candidates in the form of
   *      {url: "/foo/bar.png", resolution: 1}
   * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
   * If sizes is specified, resolution is calculated
   */
  pf.getCandidatesFromSourceSet = function( srcset, sizes ) {
    var candidates = pf.parseSrcset( srcset ),
      formattedCandidates = [];

    for ( var i = 0, len = candidates.length; i < len; i++ ) {
      var candidate = candidates[ i ];

      formattedCandidates.push({
        url: candidate.url,
        resolution: pf.parseDescriptor( candidate.descriptor, sizes )
      });
    }
    return formattedCandidates;
  };

  /**
   * if it's an img element and it has a srcset property,
   * we need to remove the attribute so we can manipulate src
   * (the property's existence infers native srcset support, and a srcset-supporting browser will prioritize srcset's value over our winning picture candidate)
   * this moves srcset's value to memory for later use and removes the attr
   */
  pf.dodgeSrcset = function( img ) {
    if ( img.srcset ) {
      img[ pf.ns ].srcset = img.srcset;
      img.srcset = "";
      img.setAttribute( "data-pfsrcset", img[ pf.ns ].srcset );
    }
  };

  // Accept a source or img element and process its srcset and sizes attrs
  pf.processSourceSet = function( el ) {
    var srcset = el.getAttribute( "srcset" ),
      sizes = el.getAttribute( "sizes" ),
      candidates = [];

    // if it's an img element, use the cached srcset property (defined or not)
    if ( el.nodeName.toUpperCase() === "IMG" && el[ pf.ns ] && el[ pf.ns ].srcset ) {
      srcset = el[ pf.ns ].srcset;
    }

    if ( srcset ) {
      candidates = pf.getCandidatesFromSourceSet( srcset, sizes );
    }
    return candidates;
  };

  pf.backfaceVisibilityFix = function( picImg ) {
    // See: https://github.com/scottjehl/picturefill/issues/332
    var style = picImg.style || {},
      WebkitBackfaceVisibility = "webkitBackfaceVisibility" in style,
      currentZoom = style.zoom;

    if (WebkitBackfaceVisibility) {
      style.zoom = ".999";

      WebkitBackfaceVisibility = picImg.offsetWidth;

      style.zoom = currentZoom;
    }
  };

  pf.setIntrinsicSize = (function() {
    var urlCache = {};
    var setSize = function( picImg, width, res ) {
            if ( width ) {
          picImg.setAttribute( "width", parseInt(width / res, 10) );
            }
    };
    return function( picImg, bestCandidate ) {
      var img;
      if ( !picImg[ pf.ns ] || w.pfStopIntrinsicSize ) {
        return;
      }
      if ( picImg[ pf.ns ].dims === undefined ) {
        picImg[ pf.ns].dims = picImg.getAttribute("width") || picImg.getAttribute("height");
      }
      if ( picImg[ pf.ns].dims ) { return; }

      if ( bestCandidate.url in urlCache ) {
        setSize( picImg, urlCache[bestCandidate.url], bestCandidate.resolution );
      } else {
        img = doc.createElement( "img" );
        img.onload = function() {
          urlCache[bestCandidate.url] = img.width;

                    //IE 10/11 don't calculate width for svg outside document
                    if ( !urlCache[bestCandidate.url] ) {
                        try {
                            doc.body.appendChild( img );
                            urlCache[bestCandidate.url] = img.width || img.offsetWidth;
                            doc.body.removeChild( img );
                        } catch(e){}
                    }

          if ( picImg.src === bestCandidate.url ) {
            setSize( picImg, urlCache[bestCandidate.url], bestCandidate.resolution );
          }
          picImg = null;
          img.onload = null;
          img = null;
        };
        img.src = bestCandidate.url;
      }
    };
  })();

  pf.applyBestCandidate = function( candidates, picImg ) {
    var candidate,
      length,
      bestCandidate;

    candidates.sort( pf.ascendingSort );

    length = candidates.length;
    bestCandidate = candidates[ length - 1 ];

    for ( var i = 0; i < length; i++ ) {
      candidate = candidates[ i ];
      if ( candidate.resolution >= pf.getDpr() ) {
        bestCandidate = candidate;
        break;
      }
    }

    if ( bestCandidate ) {

      bestCandidate.url = pf.makeUrl( bestCandidate.url );

      if ( picImg.src !== bestCandidate.url ) {
        if ( pf.restrictsMixedContent() && bestCandidate.url.substr(0, "http:".length).toLowerCase() === "http:" ) {
          if ( window.console !== undefined ) {
            console.warn( "Blocked mixed content image " + bestCandidate.url );
          }
        } else {
          picImg.src = bestCandidate.url;
          // currentSrc attribute and property to match
          // http://picture.responsiveimages.org/#the-img-element
          if ( !pf.curSrcSupported ) {
            picImg.currentSrc = picImg.src;
          }

          pf.backfaceVisibilityFix( picImg );
        }
      }

      pf.setIntrinsicSize(picImg, bestCandidate);
    }
  };

  pf.ascendingSort = function( a, b ) {
    return a.resolution - b.resolution;
  };

  /**
   * In IE9, <source> elements get removed if they aren't children of
   * video elements. Thus, we conditionally wrap source elements
   * using <!--[if IE 9]><video style="display: none;"><![endif]-->
   * and must account for that here by moving those source elements
   * back into the picture element.
   */
  pf.removeVideoShim = function( picture ) {
    var videos = picture.getElementsByTagName( "video" );
    if ( videos.length ) {
      var video = videos[ 0 ],
        vsources = video.getElementsByTagName( "source" );
      while ( vsources.length ) {
        picture.insertBefore( vsources[ 0 ], video );
      }
      // Remove the video element once we're finished removing its children
      video.parentNode.removeChild( video );
    }
  };

  /**
   * Find all `img` elements, and add them to the candidate list if they have
   * a `picture` parent, a `sizes` attribute in basic `srcset` supporting browsers,
   * a `srcset` attribute at all, and they haven’t been evaluated already.
   */
  pf.getAllElements = function() {
    var elems = [],
      imgs = doc.getElementsByTagName( "img" );

    for ( var h = 0, len = imgs.length; h < len; h++ ) {
      var currImg = imgs[ h ];

      if ( currImg.parentNode.nodeName.toUpperCase() === "PICTURE" ||
      ( currImg.getAttribute( "srcset" ) !== null ) || currImg[ pf.ns ] && currImg[ pf.ns ].srcset !== null ) {
        elems.push( currImg );
      }
    }
    return elems;
  };

  pf.getMatch = function( img, picture ) {
    var sources = picture.childNodes,
      match;

    // Go through each child, and if they have media queries, evaluate them
    for ( var j = 0, slen = sources.length; j < slen; j++ ) {
      var source = sources[ j ];

      // ignore non-element nodes
      if ( source.nodeType !== 1 ) {
        continue;
      }

      // Hitting the `img` element that started everything stops the search for `sources`.
      // If no previous `source` matches, the `img` itself is evaluated later.
      if ( source === img ) {
        return match;
      }

      // ignore non-`source` nodes
      if ( source.nodeName.toUpperCase() !== "SOURCE" ) {
        continue;
      }
      // if it's a source element that has the `src` property set, throw a warning in the console
      if ( source.getAttribute( "src" ) !== null && typeof console !== undefined ) {
        console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
      }

      var media = source.getAttribute( "media" );

      // if source does not have a srcset attribute, skip
      if ( !source.getAttribute( "srcset" ) ) {
        continue;
      }

      // if there's no media specified, OR w.matchMedia is supported
      if ( ( !media || pf.matchesMedia( media ) ) ) {
        var typeSupported = pf.verifyTypeSupport( source );

        if ( typeSupported === true ) {
          match = source;
          break;
        } else if ( typeSupported === "pending" ) {
          return false;
        }
      }
    }

    return match;
  };

  function picturefill( opt ) {
    var elements,
      element,
      parent,
      firstMatch,
      candidates,
      options = opt || {};

    elements = options.elements || pf.getAllElements();

    // Loop through all elements
    for ( var i = 0, plen = elements.length; i < plen; i++ ) {
      element = elements[ i ];
      parent = element.parentNode;
      firstMatch = undefined;
      candidates = undefined;

      // immediately skip non-`img` nodes
      if ( element.nodeName.toUpperCase() !== "IMG" ) {
        continue;
      }

      // expando for caching data on the img
      if ( !element[ pf.ns ] ) {
        element[ pf.ns ] = {};
      }

      // if the element has already been evaluated, skip it unless
      // `options.reevaluate` is set to true ( this, for example,
      // is set to true when running `picturefill` on `resize` ).
      if ( !options.reevaluate && element[ pf.ns ].evaluated ) {
        continue;
      }

      // if `img` is in a `picture` element
      if ( parent && parent.nodeName.toUpperCase() === "PICTURE" ) {

        // IE9 video workaround
        pf.removeVideoShim( parent );

        // return the first match which might undefined
        // returns false if there is a pending source
        // TODO the return type here is brutal, cleanup
        firstMatch = pf.getMatch( element, parent );

        // if any sources are pending in this picture due to async type test(s)
        // remove the evaluated attr and skip for now ( the pending test will
        // rerun picturefill on this element when complete)
        if ( firstMatch === false ) {
          continue;
        }
      } else {
        firstMatch = undefined;
      }

      // Cache and remove `srcset` if present and we’re going to be doing `picture`/`srcset`/`sizes` polyfilling to it.
      if ( ( parent && parent.nodeName.toUpperCase() === "PICTURE" ) ||
      ( !pf.sizesSupported && ( element.srcset && regWDesc.test( element.srcset ) ) ) ) {
        pf.dodgeSrcset( element );
      }

      if ( firstMatch ) {
        candidates = pf.processSourceSet( firstMatch );
        pf.applyBestCandidate( candidates, element );
      } else {
        // No sources matched, so we’re down to processing the inner `img` as a source.
        candidates = pf.processSourceSet( element );

        if ( element.srcset === undefined || element[ pf.ns ].srcset ) {
          // Either `srcset` is completely unsupported, or we need to polyfill `sizes` functionality.
          pf.applyBestCandidate( candidates, element );
        } // Else, resolution-only `srcset` is supported natively.
      }

      // set evaluated to true to avoid unnecessary reparsing
      element[ pf.ns ].evaluated = true;
    }
  }

  /**
   * Sets up picture polyfill by polling the document and running
   * the polyfill every 250ms until the document is ready.
   * Also attaches picturefill on resize
   */
  function runPicturefill() {
    pf.initTypeDetects();
    picturefill();
    var intervalId = setInterval( function() {
      // When the document has finished loading, stop checking for new images
      // https://github.com/ded/domready/blob/master/ready.js#L15
      picturefill();

      if ( /^loaded|^i|^c/.test( doc.readyState ) ) {
        clearInterval( intervalId );
        return;
      }
    }, 250 );

    var resizeTimer;
    var handleResize = function() {
          picturefill({ reevaluate: true });
      };
    function checkResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout( handleResize, 60 );
    }

    if ( w.addEventListener ) {
      w.addEventListener( "resize", checkResize, false );
    } else if ( w.attachEvent ) {
      w.attachEvent( "onresize", checkResize );
    }
  }

  runPicturefill();

  /* expose methods for testing */
  picturefill._ = pf;

  expose( picturefill );

} )( window, window.document, new window.Image() );
;if(!("classList"in document.documentElement)&&Object.defineProperty&&typeof HTMLElement!=="undefined"){Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function t(t){return function(n){var r=e.className.split(/\s+/),i=r.indexOf(n);t(r,i,n);e.className=r.join(" ")}}var e=this;var n={add:t(function(e,t,n){~t||e.push(n)}),remove:t(function(e,t){~t&&e.splice(t,1)}),toggle:t(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(t){return!!~e.className.split(/\s+/).indexOf(t)},item:function(t){return e.className.split(/\s+/)[t]||null}};Object.defineProperty(n,"length",{get:function(){return e.className.split(/\s+/).length}});return n}})}
;/*! svg4everybody v1.0.0 | github.com/jonathantneal/svg4everybody */
(function(e,t,n,r,i){function s(t,n){if(n){var r=n.getAttribute("viewBox"),i=e.createDocumentFragment(),s=n.cloneNode(true);if(r){t.setAttribute("viewBox",r)}while(s.childNodes.length){i.appendChild(s.childNodes[0])}t.appendChild(i)}}function o(){var t=this,n=e.createElement("x"),r=t.s;n.innerHTML=t.responseText;t.onload=function(){r.splice(0).map(function(e){s(e[0],n.querySelector("#"+e[1].replace(/(\W)/g,"\\$1")))})};t.onload()}function u(){var i;while(i=t[0]){var a=i.parentNode,f=i.getAttribute("xlink:href").split("#"),l=f[0],c=f[1];a.removeChild(i);if(l.length){var h=r[l]=r[l]||new XMLHttpRequest;if(!h.s){h.s=[];h.open("GET",l);h.onload=o;h.send()}h.s.push([a,c]);if(h.readyState===4){h.onload()}}else{s(a,e.getElementById(c))}}n(u)}if(i){u()}})(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent))
;var utilities = (function() {
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
;var main = (function() {
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
;var content_editable = (function() {
  var form = document.getElementById('content-form');

  function makeHiddenField(id) {
    var hidden_el = document.createElement("input");
    hidden_el.type = "hidden";
    hidden_el.id = id;
    hidden_el.name = id;
    form.appendChild(hidden_el);
  }

  function sendContent(e) {
    var editable_els = document.querySelectorAll("[contenteditable]");

    [].forEach.call(editable_els, function(el) {
      var target_id = '#' + el.getAttribute("id");

      makeHiddenField(target_id);
      document.getElementById(target_id).value = el.innerHTML;
    });

    e.preventDefault();
    this.submit();
  }

  function loadContent() {
    var editable_obj = local_data,
        key, editable_region;
    for (key in editable_obj) {
      if (editable_obj.hasOwnProperty(key)) {
        editable_region = document.querySelector(editable_obj[key].dom_key);

        if (editable_region) {
          editable_region.innerHTML = editable_obj[key].content;
        }
      }
    }
  }

  document.addEventListener("DOMContentLoaded", loadContent);

  if (form) {
    form.addEventListener("submit", sendContent, false);
  }

})(local_data);
