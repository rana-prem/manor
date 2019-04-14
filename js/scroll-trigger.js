/* Written by Erik Terwan - MIT license - https://github.com/terwanerik */
var ScrollTrigger = (function() {
  "use strict";
  return function(t, e, n) {
    function i() {
      var t = h.scrollElement.innerWidth,
        e = h.scrollElement.innerHeight,
        n = h.bindElement.scrollTop
          ? h.bindElement.scrollTop
          : document.documentElement.scrollTop,
        s = h.bindElement.scrollLeft
          ? h.bindElement.scrollLeft
          : document.documentElement.scrollLeft;
      if (a.left != s || a.top != n) {
        for (var f = 0; f < o.length; f++) {
          var u = o[f],
            m = u.left(),
            g = u.top();
          a.left > s
            ? (m -= u.xOffset(!0))
            : a.left < s && (m += u.xOffset(!1)),
            a.top > n
              ? (g -= u.yOffset(!0))
              : a.top < n && (g += u.yOffset(!1)),
            t > m && m >= 0 && e > g && g >= 0
              ? (u.addClass(u.visibleClass, function() {
                  u.showCallback && l(u, u.showCallback);
                }),
                u.removeClass(u.hiddenClass),
                u.once && o.splice(f, 1))
              : (u.addClass(u.hiddenClass),
                u.removeClass(u.visibleClass, function() {
                  u.hideCallback && l(u, u.hideCallback);
                }));
        }
        for (var p = 0; p < r.length; p++) {
          var v = r[p];
          v.call(h, s, n, t, e);
        }
        (a.left = s), (a.top = n);
      }
      o.length > 0 || r.length > 0 ? ((c = !0), d(i)) : (c = !1);
    }
    function l(t, e) {
      var n = e.split("("),
        i = n[0];
      (n = n.length > 1 ? n[1].split(")")[0] : void 0),
        window[i] && window[i].call(t.element, n);
    }
    var s = function(t, e) {
      (this.element = e),
        (this.defaultOptions = t),
        (this.showCallback = null),
        (this.hideCallback = null),
        (this.visibleClass = "visible"),
        (this.hiddenClass = "invisible"),
        (this.addWidth = !1),
        (this.addHeight = !1),
        (this.once = !1);
      var n = 0,
        i = 0;
      (this.left = (function(t) {
        return function() {
          return t.element.getBoundingClientRect().left;
        };
      })(this)),
        (this.top = (function(t) {
          return function() {
            return t.element.getBoundingClientRect().top;
          };
        })(this)),
        (this.xOffset = (function(t) {
          return function(e) {
            var i = n;
            return (
              t.addWidth && !e
                ? (i += t.width())
                : e && !t.addWidth && (i -= t.width()),
              i
            );
          };
        })(this)),
        (this.yOffset = (function(t) {
          return function(e) {
            var n = i;
            return (
              t.addHeight && !e
                ? (n += t.height())
                : e && !t.addHeight && (n -= t.height()),
              n
            );
          };
        })(this)),
        (this.width = (function(t) {
          return function() {
            return t.element.offsetWidth;
          };
        })(this)),
        (this.height = (function(t) {
          return function() {
            return t.element.offsetHeight;
          };
        })(this)),
        (this.addClass = (function(t) {
          var e = function(e, n) {
              t.element.classList.contains(e) ||
                (t.element.classList.add(e), "function" == typeof n && n());
            },
            n = function(e, n) {
              e = e.trim();
              var i = new RegExp("(?:^|\\s)" + e + "(?:(\\s\\w)|$)", "ig"),
                l = t.element.className;
              i.test(l) ||
                ((t.element.className += " " + e),
                "function" == typeof n && n());
            };
          return t.element.classList ? e : n;
        })(this)),
        (this.removeClass = (function(t) {
          var e = function(e, n) {
              t.element.classList.contains(e) &&
                (t.element.classList.remove(e), "function" == typeof n && n());
            },
            n = function(e, n) {
              e = e.trim();
              var i = new RegExp("(?:^|\\s)" + e + "(?:(\\s\\w)|$)", "ig"),
                l = t.element.className;
              i.test(l) &&
                ((t.element.className = l.replace(i, "$1").trim()),
                "function" == typeof n && n());
            };
          return t.element.classList ? e : n;
        })(this)),
        (this.init = (function(t) {
          return function() {
            var e = t.defaultOptions,
              l = t.element.getAttribute("data-scroll");
            e
              ? (e.toggle &&
                  e.toggle.visible &&
                  (t.visibleClass = e.toggle.visible),
                e.toggle &&
                  e.toggle.hidden &&
                  (t.hiddenClass = e.toggle.hidden),
                e.centerHorizontal === !0 && (n = t.element.offsetWidth / 2),
                e.centerVertical === !0 && (i = t.element.offsetHeight / 2),
                e.offset && e.offset.x && (n += e.offset.x),
                e.offset && e.offset.y && (i += e.offset.y),
                e.addWidth && (t.addWidth = e.addWidth),
                e.addHeight && (t.addHeight = e.addHeight),
                e.once && (t.once = e.once))
              : ((t.addWidth = l.indexOf("addWidth") > -1),
                (t.addHeight = l.indexOf("addHeight") > -1),
                (t.once = l.indexOf("once") > -1)),
              (t.showCallback = t.element.getAttribute(
                "data-scroll-showCallback"
              )),
              (t.hideCallback = t.element.getAttribute(
                "data-scroll-hideCallback"
              ));
            var s = l.split("toggle(");
            if (s.length > 1) {
              var o = s[1].split(")")[0].split(",");
              String.prototype.trim ||
                (String.prototype.trim = function() {
                  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }),
                (t.visibleClass = o[0].trim().replace(".", "")),
                (t.hiddenClass = o[1].trim().replace(".", ""));
            }
            l.indexOf("centerHorizontal") > -1 &&
              (n = t.element.offsetWidth / 2),
              l.indexOf("centerVertical") > -1 &&
                (i = t.element.offsetHeight / 2);
            var r = l.split("offset(");
            if (r.length > 1) {
              var a = r[1].split(")")[0].split(",");
              (n += parseInt(a[0].replace("px", ""))),
                (i += parseInt(a[1].replace("px", "")));
            }
            return t;
          };
        })(this));
    };
    (this.scrollElement = window), (this.bindElement = document.body);
    var o = [],
      r = [],
      a = { left: -1, top: -1 },
      d =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(t) {
          setTimeout(t, 1e3 / 60);
        },
      c = !0,
      f = (function(t) {
        return function(e, n, l) {
          return (
            void 0 != n && null != n
              ? (t.bindElement = n)
              : (t.bindElement = document.body),
            void 0 != l && null != l
              ? (t.scrollElement = l)
              : (t.scrollElement = window),
            (o = [].slice.call(
              t.bindElement.querySelectorAll("[data-scroll]")
            )),
            (o = o.map(function(t) {
              var n = new s(e, t);
              return n.init();
            })),
            o.length > 0 ? ((c = !0), i()) : (c = !1),
            t
          );
        };
      })(this);
    (this.attach = (function(t) {
      return function(e) {
        return r.push(e), c || ((c = !0), i()), t;
      };
    })(this)),
      (this.detach = (function(t) {
        return function(e) {
          return r.splice(r.indexOf(e), 1), t;
        };
      })(this));
    var h = this;
    return f(t, e, n);
  };
})();
