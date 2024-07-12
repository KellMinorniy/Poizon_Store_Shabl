/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[i.call(e)] || "object"
      : typeof e;
  }
  var t = "3.7.0",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = ue.call(t, "constructor") && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) return e.textContent;
          if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += ce.text(t);
        return n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ge +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      R = function () {
        V();
      },
      M = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && z(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function F(e) {
      return (e[S] = !0), e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function X(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && M(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function U(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function z(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", R),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*");
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope");
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: X(!1),
          disabled: X(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && !!e.checked) ||
              (fe(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button");
          },
          text: function (e) {
            var t;
            return (
              fe(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: U(function () {
            return [0];
          }),
          last: U(function (e, t) {
            return [t - 1];
          }),
          eq: U(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: U(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: U(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: U(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: U(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = B(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(ve, " ") }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r)
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && z(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n;
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && z(t.parentNode)) || t),
        n
      );
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r;
        })
      : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          "string" == typeof e && b.test(e) ? ce(e) : e || [],
          !1
        ).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return d(e, "nextSibling");
        },
        prevAll: function (e) {
          return d(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ce.Callbacks("memory"),
              ce.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P),
        ie.addEventListener("load", P));
  var R = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in ((i = !0), n)) R(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    M = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(M, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    X = new B(),
    U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    z = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : U.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        X.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return X.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return X.access(e, t, n);
    },
    removeData: function (e, t) {
      X.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = X.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              X.set(this, n);
            })
          : R(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = X.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  X.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          X.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = { composed: !0 };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && K(e) && "none" === ce.css(e, "display"))
    );
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ("px" !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = _.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Se(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(D) || [""]).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, "input") &&
              _.get(t, "click")) ||
            fe(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ce.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) {
      function o(e) {
        if (C.documentMode) {
          var t = _.get(this, "handle"),
            n = ce.event.fix(e);
          (n.type = "focusin" === e.type ? "focus" : "blur"),
            (n.isSimulated = !0),
            t(e),
            n.target === n.currentTarget && t(n);
        } else ce.event.simulate(i, e.target, ce.event.fix(e));
      }
      (ce.event.special[r] = {
        setup: function () {
          var e;
          if ((He(this, r, !0), !C.documentMode)) return !1;
          (e = _.get(this, i)) || this.addEventListener(i, o),
            _.set(this, i, (e || 0) + 1);
        },
        trigger: function () {
          return He(this, r), !0;
        },
        teardown: function () {
          var e;
          if (!C.documentMode) return !1;
          (e = _.get(this, i) - 1)
            ? _.set(this, i, e)
            : (this.removeEventListener(i, o), _.remove(this, i));
        },
        _default: function (e) {
          return _.get(e.target, r);
        },
        delegateType: i,
      }),
        (ce.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i);
            n ||
              (C.documentMode
                ? this.addEventListener(i, o)
                : e.addEventListener(r, o, !0)),
              _.set(t, i, (n || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = _.get(t, i) - 1;
            n
              ? _.set(t, i, n)
              : (C.documentMode
                  ? this.removeEventListener(i, o)
                  : e.removeEventListener(r, o, !0),
                _.remove(t, i));
          },
        });
    }),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Me(e, t) {
    return (
      (fe(e, "table") &&
        fe(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    );
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function We(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      X.hasData(e) && ((o = X.access(e)), (a = ce.extend({}, o)), X.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : m(u.textContent.replace(Re, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[X.expando] && (n[X.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return R(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Me(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Me(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return R(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    Xe = /^--/,
    Ue = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    ze = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Xe.test(t),
      u = e.style;
    return (
      (n = n || Ue(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n &&
              (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            "padding" !== n
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    );
  }
  function ot(e, t, n) {
    var r = Ue(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        Xe.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : ze(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ue(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ze(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (ce.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (ce.cssHooks[i + o].set = rt);
    }),
    ce.fn.extend({
      css: function (e, t) {
        return R(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ue(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          { specialEasing: {}, easing: ce.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return R(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return R(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this;
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (
                ((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = Tt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = Tt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = Ct(this)) && _.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : _.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(St, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value");
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Et = ie.location,
    jt = { guid: Date.now() },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e)
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, { type: e, isSimulated: !0 });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== x(e)) i(n, e);
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements");
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Lt, "\r\n") };
          })
          .get();
      },
    });
  var Rt = /%20/g,
    Mt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    Xt = "*/".concat("*"),
    Ut = C.createElement("a");
  function zt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Ut.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Xt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: zt(Bt),
      ajaxTransport: zt(_t),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            $t,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Mt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Rt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < ce.inArray("script", v.dataTypes) &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script");
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              ce.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = { 0: 200, 1223: 204 },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Zt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ce.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function (e) {
          return R(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t;
      });
    }),
    ce.each({ Height: "height", Width: "width" }, function (a, s) {
      ce.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          ce.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return R(
              this,
              function (e, t, n) {
                var r;
                return y(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? ce.css(e, t, i)
                  : ce.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    ce.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});
/**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
 */

var Swiper = (function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(s, a) {
    void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i) => {
        void 0 === s[i]
          ? (s[i] = a[i])
          : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  function n(e) {
    return (
      void 0 === e && (e = ""),
      e
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function l(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function o() {
    return Date.now();
  }
  function d(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((n =
            l.MozTransform ||
            l.OTransform ||
            l.MsTransform ||
            l.msTransform ||
            l.transform ||
            l
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (a = n.toString().split(","))),
      "x" === t &&
        (i = s.WebKitCSSMatrix
          ? n.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
        (i = s.WebKitCSSMatrix
          ? n.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function c(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function p() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let a = 1; a < arguments.length; a += 1) {
      const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (
        null != i &&
        ((s = i),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? s instanceof HTMLElement
          : s && (1 === s.nodeType || 11 === s.nodeType)))
      ) {
        const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, a = s.length; t < a; t += 1) {
          const a = s[t],
            r = Object.getOwnPropertyDescriptor(i, a);
          void 0 !== r &&
            r.enumerable &&
            (c(e[a]) && c(i[a])
              ? i[a].__swiper__
                ? (e[a] = i[a])
                : p(e[a], i[a])
              : !c(e[a]) && c(i[a])
              ? ((e[a] = {}), i[a].__swiper__ ? (e[a] = i[a]) : p(e[a], i[a]))
              : (e[a] = i[a]));
        }
      }
    }
    var s;
    return e;
  }
  function u(e, t, s) {
    e.style.setProperty(t, s);
  }
  function m(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? "next" : "prev",
      p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [a]: c });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  function h(e) {
    return (
      e.querySelector(".swiper-slide-transform") ||
      (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
      e
    );
  }
  function f(e, t) {
    return (
      void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
    );
  }
  function g(e) {
    try {
      return void console.warn(e);
    } catch (e) {}
  }
  function v(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : n(t))), s;
  }
  function w(e) {
    const t = r(),
      s = a(),
      i = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      c = e === t ? t.scrollX : e.scrollLeft;
    return { top: i.top + d - l, left: i.left + c - o };
  }
  function b(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function y(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); )
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function E(e, t) {
    const s = [];
    let a = e.parentElement;
    for (; a; )
      t ? a.matches(t) && s.push(a) : s.push(a), (a = a.parentElement);
    return s;
  }
  function x(e, t) {
    t &&
      e.addEventListener("transitionend", function s(a) {
        a.target === e &&
          (t.call(e, a), e.removeEventListener("transitionend", s));
      });
  }
  function S(e, t, s) {
    const a = r();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            a
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            a
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  function T(e) {
    return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
  }
  let M, C, P;
  function L() {
    return (
      M ||
        (M = (function () {
          const e = r(),
            t = a();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      M
    );
  }
  function I(e) {
    return (
      void 0 === e && (e = {}),
      C ||
        (C = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = L(),
            a = r(),
            i = a.navigator.platform,
            n = t || a.navigator.userAgent,
            l = { ios: !1, android: !1 },
            o = a.screen.width,
            d = a.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === i;
          let f = "MacIntel" === i;
          return (
            !p &&
              f &&
              s.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${o}x${d}`) >= 0 &&
              ((p = n.match(/(Version)\/([\d.]+)/)),
              p || (p = [0, 1, "13_0_0"]),
              (f = !1)),
            c && !h && ((l.os = "android"), (l.android = !0)),
            (p || m || u) && ((l.os = "ios"), (l.ios = !0)),
            l
          );
        })(e)),
      C
    );
  }
  function A() {
    return (
      P ||
        (P = (function () {
          const e = r(),
            t = I();
          let s = !1;
          function a() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (a()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, a] = t
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              s = e < 16 || (16 === e && a < 2);
            }
          }
          const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
            n = a();
          return {
            isSafari: s || n,
            needPerspectiveFix: s,
            need3dFix: n || (i && t.ios),
            isWebView: i,
          };
        })()),
      P
    );
  }
  var z = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
          r[n] = arguments[n];
        t.apply(a, r);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((a, i) => {
                  (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(i, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
        : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
        s.unshift(a);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(a, s);
              });
        }),
        e
      );
    },
  };
  const $ = (e, t, s) => {
    t && !e.classList.contains(s)
      ? e.classList.add(s)
      : !t && e.classList.contains(s) && e.classList.remove(s);
  };
  const k = (e, t, s) => {
    t && !e.classList.contains(s)
      ? e.classList.add(s)
      : !t && e.classList.contains(s) && e.classList.remove(s);
  };
  const O = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t &&
          e.isElement &&
          (s.shadowRoot
            ? (t = s.shadowRoot.querySelector(
                `.${e.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                s.shadowRoot &&
                  ((t = s.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  )),
                  t && t.remove());
              })),
          t && t.remove();
      }
    },
    D = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    G = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const a =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          r = [s - t];
        return (
          r.push(...Array.from({ length: t }).map((e, t) => s + a + t)),
          void e.slides.forEach((t, s) => {
            r.includes(t.column) && D(e, s);
          })
        );
      }
      const r = i + a - 1;
      if (e.params.rewind || e.params.loop)
        for (let a = i - t; a <= r + t; a += 1) {
          const t = ((a % s) + s) % s;
          (t < i || t > r) && D(e, t);
        }
      else
        for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1)
          a !== i && (a > r || a < i) && D(e, a);
    };
  var H = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : a.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : a.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(b(a, "padding-left") || 0, 10) -
            parseInt(b(a, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(b(a, "padding-top") || 0, 10) -
            parseInt(b(a, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
      }
      const s = e.params,
        {
          wrapperEl: a,
          slidesEl: i,
          size: r,
          rtlTranslate: n,
          wrongRTL: l,
        } = e,
        o = e.virtual && s.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = f(i, `.${e.params.slideClass}, swiper-slide`),
        p = o ? e.virtual.slides.length : c.length;
      let m = [];
      const h = [],
        g = [];
      let v = s.slidesOffsetBefore;
      "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
      let w = s.slidesOffsetAfter;
      "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
      const y = e.snapGrid.length,
        E = e.slidesGrid.length;
      let x = s.spaceBetween,
        T = -v,
        M = 0,
        C = 0;
      if (void 0 === r) return;
      "string" == typeof x && x.indexOf("%") >= 0
        ? (x = (parseFloat(x.replace("%", "")) / 100) * r)
        : "string" == typeof x && (x = parseFloat(x)),
        (e.virtualSize = -x),
        c.forEach((e) => {
          n ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        s.centeredSlides &&
          s.cssMode &&
          (u(a, "--swiper-centered-offset-before", ""),
          u(a, "--swiper-centered-offset-after", ""));
      const P = s.grid && s.grid.rows > 1 && e.grid;
      let L;
      P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
      const I =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (e) => void 0 !== s.breakpoints[e].slidesPerView
        ).length > 0;
      for (let a = 0; a < p; a += 1) {
        let i;
        if (
          ((L = 0),
          c[a] && (i = c[a]),
          P && e.grid.updateSlide(a, i, c),
          !c[a] || "none" !== b(i, "display"))
        ) {
          if ("auto" === s.slidesPerView) {
            I && (c[a].style[e.getDirectionLabel("width")] = "");
            const r = getComputedStyle(i),
              n = i.style.transform,
              l = i.style.webkitTransform;
            if (
              (n && (i.style.transform = "none"),
              l && (i.style.webkitTransform = "none"),
              s.roundLengths)
            )
              L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
            else {
              const e = t(r, "width"),
                s = t(r, "padding-left"),
                a = t(r, "padding-right"),
                n = t(r, "margin-left"),
                l = t(r, "margin-right"),
                o = r.getPropertyValue("box-sizing");
              if (o && "border-box" === o) L = e + n + l;
              else {
                const { clientWidth: t, offsetWidth: r } = i;
                L = e + s + a + n + l + (r - t);
              }
            }
            n && (i.style.transform = n),
              l && (i.style.webkitTransform = l),
              s.roundLengths && (L = Math.floor(L));
          } else
            (L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView),
              s.roundLengths && (L = Math.floor(L)),
              c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
          c[a] && (c[a].swiperSlideSize = L),
            g.push(L),
            s.centeredSlides
              ? ((T = T + L / 2 + M / 2 + x),
                0 === M && 0 !== a && (T = T - r / 2 - x),
                0 === a && (T = T - r / 2 - x),
                Math.abs(T) < 0.001 && (T = 0),
                s.roundLengths && (T = Math.floor(T)),
                C % s.slidesPerGroup == 0 && m.push(T),
                h.push(T))
              : (s.roundLengths && (T = Math.floor(T)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && m.push(T),
                h.push(T),
                (T = T + L + x)),
            (e.virtualSize += L + x),
            (M = L),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + w),
        n &&
          l &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          (a.style.width = `${e.virtualSize + x}px`),
        s.setWrapperSize &&
          (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`),
        P && e.grid.updateWrapperSize(L, m),
        !s.centeredSlides)
      ) {
        const t = [];
        for (let a = 0; a < m.length; a += 1) {
          let i = m[a];
          s.roundLengths && (i = Math.floor(i)),
            m[a] <= e.virtualSize - r && t.push(i);
        }
        (m = t),
          Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 &&
            m.push(e.virtualSize - r);
      }
      if (o && s.loop) {
        const t = g[0] + x;
        if (s.slidesPerGroup > 1) {
          const a = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                s.slidesPerGroup
            ),
            i = t * s.slidesPerGroup;
          for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i);
        }
        for (
          let a = 0;
          a < e.virtual.slidesBefore + e.virtual.slidesAfter;
          a += 1
        )
          1 === s.slidesPerGroup && m.push(m[m.length - 1] + t),
            h.push(h[h.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === m.length && (m = [0]), 0 !== x)) {
        const t =
          e.isHorizontal() && n
            ? "marginLeft"
            : e.getDirectionLabel("marginRight");
        c.filter(
          (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1
        ).forEach((e) => {
          e.style[t] = `${x}px`;
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        g.forEach((t) => {
          e += t + (x || 0);
        }),
          (e -= x);
        const t = e - r;
        m = m.map((e) => (e <= 0 ? -v : e > t ? t + w : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        g.forEach((t) => {
          e += t + (x || 0);
        }),
          (e -= x);
        const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
        if (e + t < r) {
          const s = (r - e - t) / 2;
          m.forEach((e, t) => {
            m[t] = e - s;
          }),
            h.forEach((e, t) => {
              h[t] = e + s;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: m,
          slidesGrid: h,
          slidesSizesGrid: g,
        }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        u(a, "--swiper-centered-offset-before", -m[0] + "px"),
          u(
            a,
            "--swiper-centered-offset-after",
            e.size / 2 - g[g.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit("slidesLengthChange"),
        m.length !== y &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== E && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset(),
        e.emit("slidesUpdated"),
        !(o || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const t = `${s.containerModifierClass}backface-hidden`,
          a = e.el.classList.contains(t);
        p <= s.maxBackfaceHiddenSlides
          ? a || e.el.classList.add(t)
          : a && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let a = 0; a < t.length; a += 1)
        t[a].swiperSlideOffset =
          (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0
        ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
        : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < a.length; e += 1) {
        const o = a[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
        const c =
            (n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          p =
            (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          u = -(n - d),
          m = u + t.slidesSizesGrid[e],
          h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
          f =
            (u >= 0 && u < t.size - 1) ||
            (m > 1 && m <= t.size) ||
            (u <= 0 && m >= t.size);
        f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)),
          $(o, f, s.slideVisibleClass),
          $(o, h, s.slideFullyVisibleClass),
          (o.progress = i ? -c : c),
          (o.originalProgress = i ? -p : p);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t;
      const o = r,
        d = n;
      if (0 === a) (i = 0), (r = !0), (n = !0);
      else {
        i = (e - t.minTranslate()) / a;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        (r = s || i <= 0), (n = l || i >= 1), s && (i = 0), l && (i = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          a = t.getSlideIndexByData(t.slides.length - 1),
          i = t.slidesGrid[s],
          r = t.slidesGrid[a],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        (l = o >= i ? (o - i) / n : (o + n - r) / n), l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: r,
        isEnd: n,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !d && t.emit("reachEnd toEdge"),
        ((o && !r) || (d && !n)) && t.emit("fromEdge"),
        t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: a, activeIndex: i } = e,
        r = e.virtual && s.virtual.enabled,
        n = e.grid && s.grid && s.grid.rows > 1,
        l = (e) => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let o, d, c;
      if (r)
        if (s.loop) {
          let t = i - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (o = l(`[data-swiper-slide-index="${t}"]`));
        } else o = l(`[data-swiper-slide-index="${i}"]`);
      else
        n
          ? ((o = t.filter((e) => e.column === i)[0]),
            (c = t.filter((e) => e.column === i + 1)[0]),
            (d = t.filter((e) => e.column === i - 1)[0]))
          : (o = t[i]);
      o &&
        (n ||
          ((c = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const a = e.nextElementSibling;
              t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0]),
          s.loop && !c && (c = t[0]),
          (d = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const a = e.previousElementSibling;
              t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
            }
            return s;
          })(o, `.${s.slideClass}, swiper-slide`)[0]),
          s.loop && 0 === !d && (d = t[t.length - 1]))),
        t.forEach((e) => {
          k(e, e === o, s.slideActiveClass),
            k(e, e === c, s.slideNextClass),
            k(e, e === d, s.slidePrevClass);
        }),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: a,
          params: i,
          activeIndex: r,
          realIndex: n,
          snapIndex: l,
        } = t;
      let o,
        d = e;
      const c = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              a = e.rtlTranslate ? e.translate : -e.translate;
            let i;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (i = e)
                  : a >= t[e] && a < t[e + 1] && (i = e + 1)
                : a >= t[e] && (i = e);
            return (
              s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            );
          })(t)),
        a.indexOf(s) >= 0)
      )
        o = a.indexOf(s);
      else {
        const e = Math.min(i.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / i.slidesPerGroup);
      }
      if ((o >= a.length && (o = a.length - 1), d === r && !t.params.loop))
        return void (o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")));
      if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled)
        return void (t.realIndex = c(d));
      const p = t.grid && i.grid && i.grid.rows > 1;
      let u;
      if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
      else if (p) {
        const e = t.slides.filter((e) => e.column === d)[0];
        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
          (u = Math.floor(s / i.grid.rows));
      } else if (t.slides[d]) {
        const e = t.slides[d].getAttribute("data-swiper-slide-index");
        u = e ? parseInt(e, 10) : d;
      } else u = d;
      Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: n,
        realIndex: u,
        previousIndex: r,
        activeIndex: d,
      }),
        t.initialized && G(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) &&
          (n !== u && t.emit("realIndexChange"), t.emit("slideChange"));
    },
    updateClickedSlide: function (e, t) {
      const s = this,
        a = s.params;
      let i = e.closest(`.${a.slideClass}, swiper-slide`);
      !i &&
        s.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
          !i &&
            e.matches &&
            e.matches(`.${a.slideClass}, swiper-slide`) &&
            (i = e);
        });
      let r,
        n = !1;
      if (i)
        for (let e = 0; e < s.slides.length; e += 1)
          if (s.slides[e] === i) {
            (n = !0), (r = e);
            break;
          }
      if (!i || !n)
        return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
      (s.clickedSlide = i),
        s.virtual && s.params.virtual.enabled
          ? (s.clickedIndex = parseInt(
              i.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (s.clickedIndex = r),
        a.slideToClickedSlide &&
          void 0 !== s.clickedIndex &&
          s.clickedIndex !== s.activeIndex &&
          s.slideToClickedSlide();
    },
  };
  var N = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: a, wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = d(i, e);
      return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? (o = a ? -e : e) : (d = e),
        i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : d),
        i.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -o
              : -d)
          : i.virtualTranslate ||
            (s.isHorizontal()
              ? (o -= s.cssOverflowAdjustment())
              : (d -= s.cssOverflowAdjustment()),
            (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
      const c = s.maxTranslate() - s.minTranslate();
      (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
        l !== n && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === a && (a = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = a && e > o ? o : a && e < d ? d : e),
        r.updateProgress(c),
        n.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              m({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, i),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    (r.animating = !1),
                    s && r.emit("transitionEnd"));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function X(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if (
      (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
      t.emit(`transition${i}`),
      s && r !== n)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`),
        "next" === l
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  var B = {
    slideTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === s && (s = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: f,
      } = r;
      if (
        (!f && !a && !i) ||
        r.destroyed ||
        (r.animating && l.preventInteractionOnTransition)
      )
        return !1;
      void 0 === t && (t = r.params.speed);
      const g = Math.min(r.params.slidesPerGroupSkip, n);
      let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * w),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < a - (a - s) / 2
              ? (n = e)
              : t >= s && t < a && (n = e + 1)
            : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (
          !r.allowSlideNext &&
          (u
            ? w > r.translate && w > r.minTranslate()
            : w < r.translate && w < r.minTranslate())
        )
          return !1;
        if (
          !r.allowSlidePrev &&
          w > r.translate &&
          w > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let b;
      if (
        (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
        r.updateProgress(w),
        (b = n > p ? "next" : n < p ? "prev" : "reset"),
        (u && -w === r.translate) || (!u && w === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(w),
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? w : -w;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._immediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              m({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(w),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
              }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      if (
        (void 0 === e && (e = 0),
        void 0 === s && (s = !0),
        "string" == typeof e)
      ) {
        e = parseInt(e, 10);
      }
      const i = this;
      if (i.destroyed) return;
      void 0 === t && (t = i.params.speed);
      const r = i.grid && i.params.grid && i.params.grid.rows > 1;
      let n = e;
      if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;
        else {
          let e;
          if (r) {
            const t = n * i.params.grid.rows;
            e = i.slides.filter(
              (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
            )[0].column;
          } else e = i.getSlideIndexByData(n);
          const t = r
              ? Math.ceil(i.slides.length / i.params.grid.rows)
              : i.slides.length,
            { centeredSlides: s } = i.params;
          let l = i.params.slidesPerView;
          "auto" === l
            ? (l = i.slidesPerViewDynamic())
            : ((l = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
              s && l % 2 == 0 && (l += 1));
          let o = t - e < l;
          if (
            (s && (o = o || e < Math.ceil(l / 2)),
            a && s && "auto" !== i.params.slidesPerView && !r && (o = !1),
            o)
          ) {
            const a = s
              ? e < i.activeIndex
                ? "prev"
                : "next"
              : e - i.activeIndex - 1 < i.params.slidesPerView
              ? "next"
              : "prev";
            i.loopFix({
              direction: a,
              slideTo: !0,
              activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
              slideRealIndex: "next" === a ? i.realIndex : void 0,
            });
          }
          if (r) {
            const e = n * i.params.grid.rows;
            n = i.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0].column;
          } else n = i.getSlideIndexByData(n);
        }
      return (
        requestAnimationFrame(() => {
          i.slideTo(n, t, s, a);
        }),
        i
      );
    },
    slideNext: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this,
        { enabled: i, params: r, animating: n } = a;
      if (!i || a.destroyed) return a;
      void 0 === e && (e = a.params.speed);
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = a.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        if (
          (a.loopFix({ direction: "next" }),
          (a._clientLeft = a.wrapperEl.clientLeft),
          a.activeIndex === a.slides.length - 1 && r.cssMode)
        )
          return (
            requestAnimationFrame(() => {
              a.slideTo(a.activeIndex + o, e, t, s);
            }),
            !0
          );
      }
      return r.rewind && a.isEnd
        ? a.slideTo(0, e, t, s)
        : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          snapGrid: r,
          slidesGrid: n,
          rtlTranslate: l,
          enabled: o,
          animating: d,
        } = a;
      if (!o || a.destroyed) return a;
      void 0 === e && (e = a.params.speed);
      const c = a.virtual && i.virtual.enabled;
      if (i.loop) {
        if (d && !c && i.loopPreventsSliding) return !1;
        a.loopFix({ direction: "prev" }),
          (a._clientLeft = a.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? a.translate : -a.translate),
        m = r.map((e) => p(e));
      let h = r[m.indexOf(u) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== h &&
          ((f = n.indexOf(h)),
          f < 0 && (f = a.activeIndex - 1),
          "auto" === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((f = f - a.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        i.rewind && a.isBeginning)
      ) {
        const i =
          a.params.virtual && a.params.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return i.loop && 0 === a.activeIndex && i.cssMode
        ? (requestAnimationFrame(() => {
            a.slideTo(f, e, t, s);
          }),
          !0)
        : a.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      void 0 === t && (t = !0);
      const a = this;
      if (!a.destroyed)
        return (
          void 0 === e && (e = a.params.speed),
          a.slideTo(a.activeIndex, e, t, s)
        );
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === t && (t = !0), void 0 === a && (a = 0.5);
      const i = this;
      if (i.destroyed) return;
      void 0 === e && (e = i.params.speed);
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, i.slidesGrid.length - 1)),
        i.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this;
      if (e.destroyed) return;
      const { params: t, slidesEl: s } = e,
        a =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 ||
              r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]
                )),
                l(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
            ? (e.loopFix(),
              (r = e.getSlideIndex(
                f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]
              )),
              l(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  var Y = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: a } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      const i = () => {
          f(a, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          });
        },
        r = t.grid && s.grid && s.grid.rows > 1,
        n = s.slidesPerGroup * (r ? s.grid.rows : 1),
        l = t.slides.length % n != 0,
        o = r && t.slides.length % s.grid.rows != 0,
        d = (e) => {
          for (let a = 0; a < e; a += 1) {
            const e = t.isElement
              ? v("swiper-slide", [s.slideBlankClass])
              : v("div", [s.slideClass, s.slideBlankClass]);
            t.slidesEl.append(e);
          }
        };
      if (l) {
        if (s.loopAddBlankSlides) {
          d(n - (t.slides.length % n)), t.recalcSlides(), t.updateSlides();
        } else
          g(
            "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
          );
        i();
      } else if (o) {
        if (s.loopAddBlankSlides) {
          d(s.grid.rows - (t.slides.length % s.grid.rows)),
            t.recalcSlides(),
            t.updateSlides();
        } else
          g(
            "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
          );
        i();
      } else i();
      t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next",
      });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: a,
        setTranslate: i,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l,
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
          slides: d,
          allowSlidePrev: c,
          allowSlideNext: p,
          slidesEl: u,
          params: m,
        } = o,
        { centeredSlides: h } = m;
      if (
        ((o.allowSlidePrev = !0),
        (o.allowSlideNext = !0),
        o.virtual && m.virtual.enabled)
      )
        return (
          s &&
            (m.centeredSlides || 0 !== o.snapIndex
              ? m.centeredSlides && o.snapIndex < m.slidesPerView
                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                : o.snapIndex === o.snapGrid.length - 1 &&
                  o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
              : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = c),
          (o.allowSlideNext = p),
          void o.emit("loopFix")
        );
      let f = m.slidesPerView;
      "auto" === f
        ? (f = o.slidesPerViewDynamic())
        : ((f = Math.ceil(parseFloat(m.slidesPerView, 10))),
          h && f % 2 == 0 && (f += 1));
      const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
      let w = v;
      w % v != 0 && (w += v - (w % v)),
        (w += m.loopAdditionalSlides),
        (o.loopedSlides = w);
      const b = o.grid && m.grid && m.grid.rows > 1;
      d.length < f + w
        ? g(
            "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
          )
        : b &&
          "row" === m.grid.fill &&
          g(
            "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
          );
      const y = [],
        E = [];
      let x = o.activeIndex;
      void 0 === r
        ? (r = o.getSlideIndex(
            d.filter((e) => e.classList.contains(m.slideActiveClass))[0]
          ))
        : (x = r);
      const S = "next" === a || !a,
        T = "prev" === a || !a;
      let M = 0,
        C = 0;
      const P = b ? Math.ceil(d.length / m.grid.rows) : d.length,
        L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + 0.5 : 0);
      if (L < w) {
        M = Math.max(w - L, v);
        for (let e = 0; e < w - L; e += 1) {
          const t = e - Math.floor(e / P) * P;
          if (b) {
            const e = P - t - 1;
            for (let t = d.length - 1; t >= 0; t -= 1)
              d[t].column === e && y.push(t);
          } else y.push(P - t - 1);
        }
      } else if (L + f > P - w) {
        C = Math.max(L - (P - 2 * w), v);
        for (let e = 0; e < C; e += 1) {
          const t = e - Math.floor(e / P) * P;
          b
            ? d.forEach((e, s) => {
                e.column === t && E.push(s);
              })
            : E.push(t);
        }
      }
      if (
        ((o.__preventObserver__ = !0),
        requestAnimationFrame(() => {
          o.__preventObserver__ = !1;
        }),
        T &&
          y.forEach((e) => {
            (d[e].swiperLoopMoveDOM = !0),
              u.prepend(d[e]),
              (d[e].swiperLoopMoveDOM = !1);
          }),
        S &&
          E.forEach((e) => {
            (d[e].swiperLoopMoveDOM = !0),
              u.append(d[e]),
              (d[e].swiperLoopMoveDOM = !1);
          }),
        o.recalcSlides(),
        "auto" === m.slidesPerView
          ? o.updateSlides()
          : b &&
            ((y.length > 0 && T) || (E.length > 0 && S)) &&
            o.slides.forEach((e, t) => {
              o.grid.updateSlide(t, e, o.slides);
            }),
        m.watchSlidesProgress && o.updateSlidesOffset(),
        s)
      )
        if (y.length > 0 && T) {
          if (void 0 === t) {
            const e = o.slidesGrid[x],
              t = o.slidesGrid[x + M] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(x + Math.ceil(M), 0, !1, !0),
                i &&
                  ((o.touchEventsData.startTranslate =
                    o.touchEventsData.startTranslate - t),
                  (o.touchEventsData.currentTranslate =
                    o.touchEventsData.currentTranslate - t)));
          } else if (i) {
            const e = b ? y.length / m.grid.rows : y.length;
            o.slideTo(o.activeIndex + e, 0, !1, !0),
              (o.touchEventsData.currentTranslate = o.translate);
          }
        } else if (E.length > 0 && S)
          if (void 0 === t) {
            const e = o.slidesGrid[x],
              t = o.slidesGrid[x - C] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(x - C, 0, !1, !0),
                i &&
                  ((o.touchEventsData.startTranslate =
                    o.touchEventsData.startTranslate - t),
                  (o.touchEventsData.currentTranslate =
                    o.touchEventsData.currentTranslate - t)));
          } else {
            const e = b ? E.length / m.grid.rows : E.length;
            o.slideTo(o.activeIndex - e, 0, !1, !0);
          }
      if (
        ((o.allowSlidePrev = c),
        (o.allowSlideNext = p),
        o.controller && o.controller.control && !n)
      ) {
        const e = {
          slideRealIndex: t,
          direction: a,
          setTranslate: i,
          activeSlideIndex: r,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((t) => {
              !t.destroyed &&
                t.params.loop &&
                t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === m.slidesPerView && s,
                });
            })
          : o.controller.control instanceof o.constructor &&
            o.controller.control.params.loop &&
            o.controller.control.loopFix({
              ...e,
              slideTo:
                o.controller.control.params.slidesPerView === m.slidesPerView &&
                s,
            });
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const a = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        a[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        a.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function R(e, t, s) {
    const a = r(),
      { params: i } = e,
      n = i.edgeSwipeDetection,
      l = i.edgeSwipeThreshold;
    return (
      !n ||
      !(s <= l || s >= a.innerWidth - l) ||
      ("prevent" === n && (t.preventDefault(), !0))
    );
  }
  function F(e) {
    const t = this,
      s = a();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const n = t.touchEventsData;
    if ("pointerdown" === i.type) {
      if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
      n.pointerId = i.pointerId;
    } else
      "touchstart" === i.type &&
        1 === i.targetTouches.length &&
        (n.touchId = i.targetTouches[0].identifier);
    if ("touchstart" === i.type) return void R(t, i, i.targetTouches[0].pageX);
    const { params: l, touches: d, enabled: c } = t;
    if (!c) return;
    if (!l.simulateTouch && "mouse" === i.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = i.target;
    if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
    if ("which" in i && 3 === i.which) return;
    if ("button" in i && i.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
      m = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && m && (p = m[0]);
    const h = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      f = !(!i.target || !i.target.shadowRoot);
    if (
      l.noSwiping &&
      (f
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t)
            );
          })(h, p)
        : p.closest(h))
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
    (d.currentX = i.pageX), (d.currentY = i.pageY);
    const g = d.currentX,
      v = d.currentY;
    if (!R(t, i, g)) return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (d.startX = g),
      (d.startY = v),
      (n.touchStartTime = o()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1);
    let w = !0;
    p.matches(n.focusableElements) &&
      ((w = !1), "SELECT" === p.nodeName && (n.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(n.focusableElements) &&
        s.activeElement !== p &&
        s.activeElement.blur();
    const b = w && t.allowTouchMove && l.touchStartPreventDefault;
    (!l.touchStartForcePreventDefault && !b) ||
      p.isContentEditable ||
      i.preventDefault(),
      l.freeMode &&
        l.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !l.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", i);
  }
  function q(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: l, enabled: d } = s;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let c,
      p = e;
    if ((p.originalEvent && (p = p.originalEvent), "pointermove" === p.type)) {
      if (null !== i.touchId) return;
      if (p.pointerId !== i.pointerId) return;
    }
    if ("touchmove" === p.type) {
      if (
        ((c = [...p.changedTouches].filter(
          (e) => e.identifier === i.touchId
        )[0]),
        !c || c.identifier !== i.touchId)
      )
        return;
    } else c = p;
    if (!i.isTouched)
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", p)
      );
    const u = c.pageX,
      m = c.pageY;
    if (p.preventedByNestedSwiper) return (n.startX = u), void (n.startY = m);
    if (!s.allowTouchMove)
      return (
        p.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, { startX: u, startY: m, currentX: u, currentY: m }),
          (i.touchStartTime = o()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (m < n.startY && s.translate <= s.maxTranslate()) ||
          (m > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (u < n.startX && s.translate <= s.maxTranslate()) ||
        (u > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      p.target === t.activeElement &&
      p.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    i.allowTouchCallbacks && s.emit("touchMove", p),
      (n.previousX = n.currentX),
      (n.previousY = n.currentY),
      (n.currentX = u),
      (n.currentY = m);
    const h = n.currentX - n.startX,
      f = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
      (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : h * h + f * f >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", p),
      void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
      i.isScrolling ||
        ("touchmove" === p.type && i.preventTouchMoveFromPointerMove))
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && p.cancelable && p.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
    let g = s.isHorizontal() ? h : f,
      v = s.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    r.oneWayMovement &&
      ((g = Math.abs(g) * (l ? 1 : -1)), (v = Math.abs(v) * (l ? 1 : -1))),
      (n.diff = g),
      (g *= r.touchRatio),
      l && ((g = -g), (v = -v));
    const w = s.touchesDirection;
    (s.swipeDirection = g > 0 ? "prev" : "next"),
      (s.touchesDirection = v > 0 ? "prev" : "next");
    const b = s.params.loop && !r.cssMode,
      y =
        ("next" === s.touchesDirection && s.allowSlideNext) ||
        ("prev" === s.touchesDirection && s.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (b && y && s.loopFix({ direction: s.swipeDirection }),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", p);
    }
    if (
      (new Date().getTime(),
      i.isMoved &&
        i.allowThresholdMove &&
        w !== s.touchesDirection &&
        b &&
        y &&
        Math.abs(g) >= 1)
    )
      return (
        Object.assign(n, {
          startX: u,
          startY: m,
          currentX: u,
          currentY: m,
          startTranslate: i.currentTranslate,
        }),
        (i.loopSwapReset = !0),
        void (i.startTranslate = i.currentTranslate)
      );
    s.emit("sliderMove", p),
      (i.isMoved = !0),
      (i.currentTranslate = g + i.startTranslate);
    let E = !0,
      x = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (x = 0),
      g > 0
        ? (b &&
            y &&
            i.allowThresholdMove &&
            i.currentTranslate >
              (r.centeredSlides
                ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1]
                : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > s.minTranslate() &&
            ((E = !1),
            r.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + g) ** x)))
        : g < 0 &&
          (b &&
            y &&
            i.allowThresholdMove &&
            i.currentTranslate <
              (r.centeredSlides
                ? s.maxTranslate() +
                  s.slidesSizesGrid[s.slidesSizesGrid.length - 1]
                : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === r.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() &&
            ((E = !1),
            r.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - g) ** x))),
      E && (p.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      r.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function V(e) {
    const t = this,
      s = t.touchEventsData;
    let a,
      i = e;
    i.originalEvent && (i = i.originalEvent);
    if ("touchend" === i.type || "touchcancel" === i.type) {
      if (
        ((a = [...i.changedTouches].filter(
          (e) => e.identifier === s.touchId
        )[0]),
        !a || a.identifier !== s.touchId)
      )
        return;
    } else {
      if (null !== s.touchId) return;
      if (i.pointerId !== s.pointerId) return;
      a = i;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        i.type
      )
    ) {
      if (
        !(
          ["pointercancel", "contextmenu"].includes(i.type) &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    (s.pointerId = null), (s.touchId = null);
    const {
      params: r,
      touches: n,
      rtlTranslate: d,
      slidesGrid: c,
      enabled: p,
    } = t;
    if (!p) return;
    if (!r.simulateTouch && "mouse" === i.pointerType) return;
    if (
      (s.allowTouchCallbacks && t.emit("touchEnd", i),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && r.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    r.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const u = o(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = i.path || (i.composedPath && i.composedPath());
      t.updateClickedSlide((e && e[0]) || i.target, e),
        t.emit("tap click", i),
        m < 300 &&
          u - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", i);
    }
    if (
      ((s.lastClickTime = o()),
      l(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        (0 === n.diff && !s.loopSwapReset) ||
        (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (h = r.followFinger
        ? d
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      r.cssMode)
    )
      return;
    if (r.freeMode && r.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    const f = h >= -t.maxTranslate() && !t.params.loop;
    let g = 0,
      v = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < c.length;
      e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
    ) {
      const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      void 0 !== c[e + t]
        ? (f || (h >= c[e] && h < c[e + t])) && ((g = e), (v = c[e + t] - c[e]))
        : (f || h >= c[e]) &&
          ((g = e), (v = c[c.length - 1] - c[c.length - 2]));
    }
    let w = null,
      b = null;
    r.rewind &&
      (t.isBeginning
        ? (b =
            r.virtual && r.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (w = 0));
    const y = (h - c[g]) / v,
      E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (m > r.longSwipesMs) {
      if (!r.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (y >= r.longSwipesRatio
          ? t.slideTo(r.rewind && t.isEnd ? w : g + E)
          : t.slideTo(g)),
        "prev" === t.swipeDirection &&
          (y > 1 - r.longSwipesRatio
            ? t.slideTo(g + E)
            : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio
            ? t.slideTo(b)
            : t.slideTo(g));
    } else {
      if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl)
        ? i.target === t.navigation.nextEl
          ? t.slideTo(g + E)
          : t.slideTo(g)
        : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E),
          "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g));
    }
  }
  function _() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e,
      n = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    l
      ? e.params.loop && !n
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function W(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function j() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function U(e) {
    const t = this;
    O(t, e.target),
      t.params.cssMode ||
        ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
        t.update();
  }
  function K() {
    const e = this;
    e.documentTouchHandlerProceeded ||
      ((e.documentTouchHandlerProceeded = !0),
      e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  const Z = (e, t) => {
    const s = a(),
      { params: i, el: r, wrapperEl: n, device: l } = e,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    r &&
      "string" != typeof r &&
      (s[d]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
      r[d]("touchstart", e.onTouchStart, { passive: !1 }),
      r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
      s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
      s[d]("touchend", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
      s[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
      i.cssMode && n[d]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[c](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            _,
            !0
          )
        : e[c]("observerUpdate", _, !0),
      r[d]("load", e.onLoad, { capture: !0 }));
  };
  const Q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var J = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function ee(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i
        ? (!0 === e[a] && (e[a] = { enabled: !0 }),
          "navigation" === a &&
            e[a] &&
            e[a].enabled &&
            !e[a].prevEl &&
            !e[a].nextEl &&
            (e[a].auto = !0),
          ["pagination", "scrollbar"].indexOf(a) >= 0 &&
            e[a] &&
            e[a].enabled &&
            !e[a].el &&
            (e[a].auto = !0),
          a in e && "enabled" in i
            ? ("object" != typeof e[a] ||
                "enabled" in e[a] ||
                (e[a].enabled = !0),
              e[a] || (e[a] = { enabled: !1 }),
              p(t, s))
            : p(t, s))
        : p(t, s);
    };
  }
  const te = {
      eventsEmitter: z,
      update: H,
      translate: N,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode ||
            ((s.wrapperEl.style.transitionDuration = `${e}ms`),
            (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          a.cssMode ||
            (a.autoHeight && s.updateAutoHeight(),
            X({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          (s.animating = !1),
            a.cssMode ||
              (s.setTransition(0),
              X({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: B,
      loop: Y,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (s.style.cursor = "move"),
            (s.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            { params: t } = e;
          (e.onTouchStart = F.bind(e)),
            (e.onTouchMove = q.bind(e)),
            (e.onTouchEnd = V.bind(e)),
            (e.onDocumentTouchStart = K.bind(e)),
            t.cssMode && (e.onScroll = j.bind(e)),
            (e.onClick = W.bind(e)),
            (e.onLoad = U.bind(e)),
            Z(e, "on");
        },
        detachEvents: function () {
          Z(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: a, el: i } = e,
            r = a.breakpoints;
          if (!r || (r && 0 === Object.keys(r).length)) return;
          const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          const l = (n in r ? r[n] : void 0) || e.originalParams,
            o = Q(e, a),
            d = Q(e, l),
            c = e.params.grabCursor,
            u = l.grabCursor,
            m = a.enabled;
          o && !d
            ? (i.classList.remove(
                `${a.containerModifierClass}grid`,
                `${a.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !o &&
              d &&
              (i.classList.add(`${a.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === a.grid.fill)) &&
                i.classList.add(`${a.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            c && !u ? e.unsetGrabCursor() : !c && u && e.setGrabCursor(),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              if (void 0 === l[t]) return;
              const s = a[t] && a[t].enabled,
                i = l[t] && l[t].enabled;
              s && !i && e[t].disable(), !s && i && e[t].enable();
            });
          const h = l.direction && l.direction !== a.direction,
            f = a.loop && (l.slidesPerView !== a.slidesPerView || h),
            g = a.loop;
          h && s && e.changeDirection(), p(e.params, l);
          const v = e.params.enabled,
            w = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            m && !v ? e.disable() : !m && v && e.enable(),
            (e.currentBreakpoint = n),
            e.emit("_beforeBreakpoint", l),
            s &&
              (f
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !g && w
                ? (e.loopCreate(t), e.updateSlides())
                : g && !w && e.loopDestroy()),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
            return;
          let a = !1;
          const i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const { point: r, value: n } = l[e];
            "window" === t
              ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
              : n <= s.clientWidth && (a = r);
          }
          return a || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: a, el: i, device: r } = e,
            n = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((a) => {
                        e[a] && s.push(t + a);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: a },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...n), i.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e &&
            "string" != typeof e &&
            (e.classList.remove(...t), this.emitContainerClasses());
        },
      },
    },
    se = {};
  class ae {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
        i[r] = arguments[r];
      1 === i.length &&
      i[0].constructor &&
      "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
        ? (t = i[0])
        : ([e, t] = i),
        t || (t = {}),
        (t = p({}, t)),
        e && !t.el && (t.el = e);
      const n = a();
      if (
        t.el &&
        "string" == typeof t.el &&
        n.querySelectorAll(t.el).length > 1
      ) {
        const e = [];
        return (
          n.querySelectorAll(t.el).forEach((s) => {
            const a = p({}, t, { el: s });
            e.push(new ae(a));
          }),
          e
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = L()),
        (l.device = I({ userAgent: t.userAgent })),
        (l.browser = A()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const o = {};
      l.modules.forEach((e) => {
        e({
          params: t,
          swiper: l,
          extendParams: ee(t, o),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const d = p({}, J, o);
      return (
        (l.params = p({}, d, se, t)),
        (l.originalParams = p({}, l.params)),
        (l.passedParams = p({}, t)),
        l.params &&
          l.params.on &&
          Object.keys(l.params.on).forEach((e) => {
            l.on(e, l.params.on[e]);
          }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === l.params.direction,
          isVertical: () => "vertical" === l.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
      return y(e) - a;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = f(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if ("number" == typeof s.slidesPerView) return s.slidesPerView;
      if (s.centeredSlides) {
        let e,
          t = a[l] ? Math.ceil(a[l].swiperSlideSize) : 0;
        for (let s = l + 1; s < a.length; s += 1)
          a[s] &&
            !e &&
            ((t += Math.ceil(a[s].swiperSlideSize)),
            (o += 1),
            t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && O(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        s.freeMode && s.freeMode.enabled && !s.cssMode)
      )
        a(), s.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
          e.isEnd &&
          !s.centeredSlides
        ) {
          const t =
            e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || a();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = "horizontal" === a ? "vertical" : "horizontal"),
        e === a ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t),
        s.parentNode &&
          s.parentNode.host &&
          s.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const a = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(a());
        }
        return f(s, a())[0];
      })();
      return (
        !i &&
          t.params.createElements &&
          ((i = v("div", t.params.wrapperClass)),
          s.append(i),
          f(s, `.${t.params.slideClass}`).forEach((e) => {
            i.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: i,
          slidesEl:
            t.isElement && !s.parentNode.host.slideSlots
              ? s.parentNode.host
              : i,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
          wrongRTL: "-webkit-box" === b(i, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      if (!1 === t.mount(e)) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const s = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach((e) => {
          e.complete
            ? O(t, e)
            : e.addEventListener("load", (e) => {
                O(t, e.target);
              });
        }),
        G(t),
        (t.initialized = !0),
        G(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, el: i, wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i && "string" != typeof i && i.removeAttribute("style"),
            r && r.removeAttribute("style"),
            n &&
              n.length &&
              n.forEach((e) => {
                e.classList.remove(
                  a.slideVisibleClass,
                  a.slideFullyVisibleClass,
                  a.slideActiveClass,
                  a.slideNextClass,
                  a.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            (s.el && "string" != typeof s.el && (s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      p(se, e);
    }
    static get extendedDefaults() {
      return se;
    }
    static get defaults() {
      return J;
    }
    static installModule(e) {
      ae.prototype.__modules__ || (ae.prototype.__modules__ = []);
      const t = ae.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ae.installModule(e)), ae)
        : (ae.installModule(e), ae);
    }
  }
  function ie(e, t, s, a) {
    return (
      e.params.createElements &&
        Object.keys(a).forEach((i) => {
          if (!s[i] && !0 === s.auto) {
            let r = f(e.el, `.${a[i]}`)[0];
            r || ((r = v("div", a[i])), (r.className = a[i]), e.el.append(r)),
              (s[i] = r),
              (t[i] = r);
          }
        }),
      s
    );
  }
  function re(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function ne(e) {
    const t = this,
      { params: s, slidesEl: a } = t;
    s.loop && t.loopDestroy();
    const i = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), a.append(t.children[0]), (t.innerHTML = "");
      } else a.append(e);
    };
    if ("object" == typeof e && "length" in e)
      for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
    else i(e);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update();
  }
  function le(e) {
    const t = this,
      { params: s, activeIndex: a, slidesEl: i } = t;
    s.loop && t.loopDestroy();
    let r = a + 1;
    const n = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), i.prepend(t.children[0]), (t.innerHTML = "");
      } else i.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
      r = a + e.length;
    } else n(e);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      t.slideTo(r, 0, !1);
  }
  function oe(e, t) {
    const s = this,
      { params: a, activeIndex: i, slidesEl: r } = s;
    let n = i;
    a.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides[t];
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    s.recalcSlides(),
      a.loop && s.loopCreate(),
      (a.observer && !s.isElement) || s.update(),
      a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function de(e) {
    const t = this,
      { params: s, activeIndex: a } = t;
    let i = a;
    s.loop && ((i -= t.loopedSlides), t.loopDestroy());
    let r,
      n = i;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1)
        (r = e[s]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
      n = Math.max(n, 0);
    } else
      (r = e),
        t.slides[r] && t.slides[r].remove(),
        r < n && (n -= 1),
        (n = Math.max(n, 0));
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function ce() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function pe(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let c;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a("setTranslate", () => {
        s.params.effect === t && i();
      }),
      a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      }),
      a("transitionEnd", () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.forEach((e) => {
            e.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((e) => e.remove());
          }),
            o();
        }
      }),
      a("virtualUpdate", () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && s.slides && s.slides.length && (i(), (c = !1));
          }));
      });
  }
  function ue(e, t) {
    const s = h(t);
    return (
      s !== t &&
        ((s.style.backfaceVisibility = "hidden"),
        (s.style["-webkit-backface-visibility"] = "hidden")),
      s
    );
  }
  function me(e) {
    let { swiper: t, duration: s, transformElements: a, allSlides: i } = e;
    const { activeIndex: r } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = i
        ? a
        : a.filter((e) => {
            const s = e.classList.contains("swiper-slide-transform")
              ? ((e) => {
                  if (!e.parentElement)
                    return t.slides.filter(
                      (t) => t.shadowRoot && t.shadowRoot === e.parentNode
                    )[0];
                  return e.parentElement;
                })(e)
              : e;
            return t.getSlideIndex(s) === r;
          })),
        e.forEach((e) => {
          x(e, () => {
            if (s) return;
            if (!t || t.destroyed) return;
            (s = !0), (t.animating = !1);
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            t.wrapperEl.dispatchEvent(e);
          });
        });
    }
  }
  function he(e, t, s) {
    const a = `swiper-slide-shadow${s ? `-${s}` : ""}${
        e ? ` swiper-slide-shadow-${e}` : ""
      }`,
      i = h(t);
    let r = i.querySelector(`.${a.split(" ").join(".")}`);
    return r || ((r = v("div", a.split(" "))), i.append(r)), r;
  }
  Object.keys(te).forEach((e) => {
    Object.keys(te[e]).forEach((t) => {
      ae.prototype[t] = te[e][t];
    });
  }),
    ae.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (a("beforeResize"), a("resize"));
          },
          d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((n = new ResizeObserver((e) => {
                l = i.requestAnimationFrame(() => {
                  const { width: s, height: a } = t;
                  let i = s,
                    r = a;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: a, target: n } = e;
                    (n && n !== t.el) ||
                      ((i = a ? a.width : (s[0] || s).inlineSize),
                      (r = a ? a.height : (s[0] || s).blockSize));
                  }),
                    (i === s && r === a) || o();
                });
              })),
              n.observe(t.el))
            : (i.addEventListener("resize", o),
              i.addEventListener("orientationchange", d));
        }),
          s("destroy", () => {
            l && i.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              i.removeEventListener("resize", o),
              i.removeEventListener("orientationchange", d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, s) {
            void 0 === s && (s = {});
            const a = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const s = function () {
                  i("observerUpdate", e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(s)
                  : l.setTimeout(s, 0);
              }
            );
            a.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              n.push(a);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = E(t.hostEl);
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.hostEl, { childList: t.params.observeSlideChildren }),
                o(t.wrapperEl, { attributes: !1 });
            }
          }),
          a("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const fe = [
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      i({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      });
      const l = a();
      s.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      };
      const o = l.createElement("div");
      function d(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        let i;
        return (
          a.renderSlide
            ? ((i = a.renderSlide.call(s, e, t)),
              "string" == typeof i && ((o.innerHTML = i), (i = o.children[0])))
            : (i = s.isElement
                ? v("swiper-slide")
                : v("div", s.params.slideClass)),
          i.setAttribute("data-swiper-slide-index", t),
          a.renderSlide || (i.innerHTML = e),
          a.cache && (s.virtual.cache[t] = i),
          i
        );
      }
      function c(e, t) {
        const {
          slidesPerView: a,
          slidesPerGroup: i,
          centeredSlides: r,
          loop: l,
          initialSlide: o,
        } = s.params;
        if (t && !l && o > 0) return;
        const { addSlidesBefore: c, addSlidesAfter: p } = s.params.virtual,
          { from: u, to: m, slides: h, slidesGrid: g, offset: v } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const w = s.activeIndex || 0;
        let b, y, E;
        (b = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
          r
            ? ((y = Math.floor(a / 2) + i + p), (E = Math.floor(a / 2) + i + c))
            : ((y = a + (i - 1) + p), (E = (l ? a : i) + c));
        let x = w - E,
          S = w + y;
        l || ((x = Math.max(x, 0)), (S = Math.min(S, h.length - 1)));
        let T = (s.slidesGrid[x] || 0) - (s.slidesGrid[0] || 0);
        function M() {
          s.updateSlides(),
            s.updateProgress(),
            s.updateSlidesClasses(),
            n("virtualUpdate");
        }
        if (
          (l && w >= E
            ? ((x -= E), r || (T += s.slidesGrid[0]))
            : l && w < E && ((x = -E), r && (T += s.slidesGrid[0])),
          Object.assign(s.virtual, {
            from: x,
            to: S,
            offset: T,
            slidesGrid: s.slidesGrid,
            slidesBefore: E,
            slidesAfter: y,
          }),
          u === x && m === S && !e)
        )
          return (
            s.slidesGrid !== g &&
              T !== v &&
              s.slides.forEach((e) => {
                e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px";
              }),
            s.updateProgress(),
            void n("virtualUpdate")
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: T,
              from: x,
              to: S,
              slides: (function () {
                const e = [];
                for (let t = x; t <= S; t += 1) e.push(h[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate
              ? M()
              : n("virtualUpdate"))
          );
        const C = [],
          P = [],
          L = (e) => {
            let t = e;
            return (
              e < 0 ? (t = h.length + e) : t >= h.length && (t -= h.length), t
            );
          };
        if (e)
          s.slides
            .filter((e) => e.matches(`.${s.params.slideClass}, swiper-slide`))
            .forEach((e) => {
              e.remove();
            });
        else
          for (let e = u; e <= m; e += 1)
            if (e < x || e > S) {
              const t = L(e);
              s.slides
                .filter((e) =>
                  e.matches(
                    `.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
                  )
                )
                .forEach((e) => {
                  e.remove();
                });
            }
        const I = l ? -h.length : 0,
          A = l ? 2 * h.length : h.length;
        for (let t = I; t < A; t += 1)
          if (t >= x && t <= S) {
            const s = L(t);
            void 0 === m || e
              ? P.push(s)
              : (t > m && P.push(s), t < u && C.push(s));
          }
        if (
          (P.forEach((e) => {
            s.slidesEl.append(d(h[e], e));
          }),
          l)
        )
          for (let e = C.length - 1; e >= 0; e -= 1) {
            const t = C[e];
            s.slidesEl.prepend(d(h[t], t));
          }
        else
          C.sort((e, t) => t - e),
            C.forEach((e) => {
              s.slidesEl.prepend(d(h[e], e));
            });
        f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
          e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px";
        }),
          M();
      }
      r("beforeInit", () => {
        if (!s.params.virtual.enabled) return;
        let e;
        if (void 0 === s.passedParams.virtual.slides) {
          const t = [...s.slidesEl.children].filter((e) =>
            e.matches(`.${s.params.slideClass}, swiper-slide`)
          );
          t &&
            t.length &&
            ((s.virtual.slides = [...t]),
            (e = !0),
            t.forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t),
                (s.virtual.cache[t] = e),
                e.remove();
            }));
        }
        e || (s.virtual.slides = s.params.virtual.slides),
          s.classNames.push(`${s.params.containerModifierClass}virtual`),
          (s.params.watchSlidesProgress = !0),
          (s.originalParams.watchSlidesProgress = !0),
          c(!1, !0);
      }),
        r("setTranslate", () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  c();
                }, 100)))
              : c());
        }),
        r("init update resize", () => {
          s.params.virtual.enabled &&
            s.params.cssMode &&
            u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            c(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.unshift(e[t]);
              (a = t + e.length), (i = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.getAttribute("data-swiper-slide-index");
                r &&
                  a.setAttribute(
                    "data-swiper-slide-index",
                    parseInt(r, 10) + i
                  ),
                  (t[parseInt(s, 10) + i] = a);
              }),
                (s.virtual.cache = t);
            }
            c(!0), s.slideTo(a, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1)
                s.params.virtual.cache &&
                  (delete s.virtual.cache[e[a]],
                  Object.keys(s.virtual.cache).forEach((t) => {
                    t > e &&
                      ((s.virtual.cache[t - 1] = s.virtual.cache[t]),
                      s.virtual.cache[t - 1].setAttribute(
                        "data-swiper-slide-index",
                        t - 1
                      ),
                      delete s.virtual.cache[t]);
                  })),
                  s.virtual.slides.splice(e[a], 1),
                  e[a] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              s.params.virtual.cache &&
                (delete s.virtual.cache[e],
                Object.keys(s.virtual.cache).forEach((t) => {
                  t > e &&
                    ((s.virtual.cache[t - 1] = s.virtual.cache[t]),
                    s.virtual.cache[t - 1].setAttribute(
                      "data-swiper-slide-index",
                      t - 1
                    ),
                    delete s.virtual.cache[t]);
                })),
                s.virtual.slides.splice(e, 1),
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            c(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []),
              s.params.virtual.cache && (s.virtual.cache = {}),
              c(!0),
              s.slideTo(0, 0);
          },
          update: c,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function d(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          m = 38 === i,
          h = 40 === i;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && u) || (t.isVertical() && h) || c)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && p) || (t.isVertical() && m) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ("input" === l.activeElement.nodeName.toLowerCase() ||
                "textarea" === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (d || c || p || u || m || h)
          ) {
            let e = !1;
            if (
              E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
              0 === E(t.el, `.${t.params.slideActiveClass}`).length
            )
              return;
            const a = t.el,
              i = a.clientWidth,
              r = a.clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = w(a);
            s && (d.left -= a.scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || c || p || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || m || h) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (c || h) && t.slideNext(),
              (d || m) && t.slidePrev()),
            n("keyPress", i);
        }
      }
      function c() {
        t.keyboard.enabled ||
          (l.addEventListener("keydown", d), (t.keyboard.enabled = !0));
      }
      function p() {
        t.keyboard.enabled &&
          (l.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i("init", () => {
          t.params.keyboard.enabled && c();
        }),
        i("destroy", () => {
          t.keyboard.enabled && p();
        }),
        Object.assign(t.keyboard, { enable: c, disable: p });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      let d;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: "swiper-no-mousewheel",
        },
      }),
        (t.mousewheel = { enabled: !1 });
      let c,
        p = o();
      const u = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function h() {
        t.enabled && (t.mouseEntered = !1);
      }
      function f(e) {
        return (
          !(
            t.params.mousewheel.thresholdDelta &&
            e.delta < t.params.mousewheel.thresholdDelta
          ) &&
          !(
            t.params.mousewheel.thresholdTime &&
            o() - p < t.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && o() - p < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), i("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), i("scroll", e.raw)),
            (p = new n.Date().getTime()),
            !1))
        );
      }
      function g(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
          return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let n = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (n = document.querySelector(t.params.mousewheel.eventsTarget));
        const p = n && n.contains(s.target);
        if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
        s.originalEvent && (s = s.originalEvent);
        let m = 0;
        const h = t.rtlTranslate ? -1 : 1,
          g = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              "deltaY" in e && (i = e.deltaY),
              "deltaX" in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((a *= 40), (i *= 40))
                  : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
            m = -g.pixelX * h;
          } else {
            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
            m = -g.pixelY;
          }
        else
          m =
            Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
        if (0 === m) return !0;
        r.invert && (m = -m);
        let v = t.getTranslate() + m * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          (a =
            !!t.params.loop ||
            !(v === t.minTranslate() || v === t.maxTranslate())),
          a && t.params.nested && s.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: o(), delta: Math.abs(m), direction: Math.sign(m) },
            a =
              c &&
              e.time < c.time + 500 &&
              e.delta <= c.delta &&
              e.direction === c.direction;
          if (!a) {
            c = void 0;
            let n = t.getTranslate() + m * r.sensitivity;
            const o = t.isBeginning,
              p = t.isEnd;
            if (
              (n >= t.minTranslate() && (n = t.minTranslate()),
              n <= t.maxTranslate() && (n = t.maxTranslate()),
              t.setTransition(0),
              t.setTranslate(n),
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses(),
              ((!o && t.isBeginning) || (!p && t.isEnd)) &&
                t.updateSlidesClasses(),
              t.params.loop &&
                t.loopFix({
                  direction: e.direction < 0 ? "next" : "prev",
                  byMousewheel: !0,
                }),
              t.params.freeMode.sticky)
            ) {
              clearTimeout(d), (d = void 0), u.length >= 15 && u.shift();
              const s = u.length ? u[u.length - 1] : void 0,
                a = u[0];
              if (
                (u.push(e),
                s && (e.delta > s.delta || e.direction !== s.direction))
              )
                u.splice(0);
              else if (
                u.length >= 15 &&
                e.time - a.time < 500 &&
                a.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = m > 0 ? 0.8 : 0.2;
                (c = e),
                  u.splice(0),
                  (d = l(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              d ||
                (d = l(() => {
                  (c = e),
                    u.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (a || i("scroll", s),
              t.params.autoplay &&
                t.params.autoplayDisableOnInteraction &&
                t.autoplay.stop(),
              r.releaseOnEdges &&
                (n === t.minTranslate() || n === t.maxTranslate()))
            )
              return !0;
          }
        } else {
          const s = {
            time: o(),
            delta: Math.abs(m),
            direction: Math.sign(m),
            raw: e,
          };
          u.length >= 2 && u.shift();
          const a = u.length ? u[u.length - 1] : void 0;
          if (
            (u.push(s),
            a
              ? (s.direction !== a.direction ||
                  s.delta > a.delta ||
                  s.time > a.time + 150) &&
                f(s)
              : f(s),
            (function (e) {
              const s = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                return !0;
              return !1;
            })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function v(e) {
        let s = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (s = document.querySelector(t.params.mousewheel.eventsTarget)),
          s[e]("mouseenter", m),
          s[e]("mouseleave", h),
          s[e]("wheel", g);
      }
      function w() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener("wheel", g), !0)
          : !t.mousewheel.enabled &&
              (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
      }
      function b() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, g), !0)
          : !!t.mousewheel.enabled &&
              (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
      }
      a("init", () => {
        !t.params.mousewheel.enabled && t.params.cssMode && b(),
          t.params.mousewheel.enabled && w();
      }),
        a("destroy", () => {
          t.params.cssMode && w(), t.mousewheel.enabled && b();
        }),
        Object.assign(t.mousewheel, { enable: w, disable: b });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      function r(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
              ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
              "string" == typeof e &&
              s &&
              s.length > 1 &&
              1 === t.el.querySelectorAll(e).length
                ? (s = t.el.querySelector(e))
                : s && 1 === s.length && (s = s[0])),
            e && !s ? e : s);
      }
      function n(e, s) {
        const a = t.params.navigation;
        (e = T(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
        });
      }
      function l() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return n(s, !1), void n(e, !1);
        n(s, t.isBeginning && !t.params.rewind),
          n(e, t.isEnd && !t.params.rewind);
      }
      function o(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), i("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), i("navigationNext"));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = ie(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let s = r(e.nextEl),
          a = r(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: a }),
          (s = T(s)),
          (a = T(a));
        const i = (s, a) => {
          s && s.addEventListener("click", "next" === a ? d : o),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => i(e, "next")), a.forEach((e) => i(e, "prev"));
      }
      function p() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = T(e)), (s = T(s));
        const a = (e, s) => {
          e.removeEventListener("click", "next" === s ? d : o),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => a(e, "next")), s.forEach((e) => a(e, "prev"));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null }),
        a("init", () => {
          !1 === t.params.navigation.enabled ? u() : (c(), l());
        }),
        a("toEdge fromEdge lock unlock", () => {
          l();
        }),
        a("destroy", () => {
          p();
        }),
        a("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = T(e)),
            (s = T(s)),
            t.enabled
              ? l()
              : [...e, ...s]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass)
                  );
        }),
        a("click", (e, s) => {
          let { nextEl: a, prevEl: r } = t.navigation;
          (a = T(a)), (r = T(r));
          const n = s.target;
          let l = r.includes(n) || a.includes(n);
          if (t.isElement && !l) {
            const e = s.path || (s.composedPath && s.composedPath());
            e && (l = e.find((e) => a.includes(e) || r.includes(e)));
          }
          if (t.params.navigation.hideOnClick && !l) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === n || t.pagination.el.contains(n))
            )
              return;
            let e;
            a.length
              ? (e = a[0].classList.contains(t.params.navigation.hiddenClass))
              : r.length &&
                (e = r[0].classList.contains(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              [...a, ...r]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass)
                );
          }
        });
      const u = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          p();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            c(),
            l();
        },
        disable: u,
        update: l,
        init: c,
        destroy: p,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let l = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function d(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${a}-${s}`),
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${a}-${s}-${s}`));
      }
      function c(e) {
        const s = e.target.closest(re(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const a = y(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === a) return;
          t.slideToLoop(a);
        } else t.slideTo(a);
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        let a,
          r,
          c = t.pagination.el;
        c = T(c);
        const p =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          u = t.params.loop
            ? Math.ceil(p / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0),
              (a =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((a = t.snapIndex), (r = t.previousSnapIndex))
            : ((r = t.previousIndex || 0), (a = t.activeIndex || 0)),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let o, p, u;
          if (
            (s.dynamicBullets &&
              ((n = S(i[0], t.isHorizontal() ? "width" : "height", !0)),
              c.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  n * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== r &&
                ((l += a - (r || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (o = Math.max(a - l, 0)),
              (p = o + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (p + o) / 2)),
            i.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            c.length > 1)
          )
            i.forEach((e) => {
              const i = y(e);
              i === a
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                  (i >= o &&
                    i <= p &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" ")
                    ),
                  i === o && d(e, "prev"),
                  i === p && d(e, "next"));
            });
          else {
            const e = i[a];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              t.isElement &&
                i.forEach((e, t) => {
                  e.setAttribute("part", t === a ? "bullet-active" : "bullet");
                }),
              s.dynamicBullets)
            ) {
              const e = i[o],
                t = i[p];
              for (let e = o; e <= p; e += 1)
                i[e] &&
                  i[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              d(e, "prev"), d(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (n * a - n) / 2 - u * n,
              l = e ? "right" : "left";
            i.forEach((e) => {
              e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        c.forEach((e, r) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(re(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(a + 1);
              }),
              e.querySelectorAll(re(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(u);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (a + 1) / u;
            let n = 1,
              l = 1;
            "horizontal" === i ? (n = r) : (l = r),
              e.querySelectorAll(re(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, a + 1, u)),
              0 === r && i("paginationRender", e))
            : (0 === r && i("paginationRender", e), i("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.grid && t.params.grid.rows > 1
            ? t.slides.length / Math.ceil(t.params.grid.rows)
            : t.slides.length;
        let a = t.pagination.el;
        a = T(a);
        let r = "";
        if ("bullets" === e.type) {
          let a = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
          for (let s = 0; s < a; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} ${
                  t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          a.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = r || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...s.querySelectorAll(re(e.bulletClass))
                );
          }),
          "custom" !== e.type && i("paginationRender", a[0]);
      }
      function m() {
        t.params.pagination = ie(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
            "string" != typeof e.el ||
            (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
            0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 &&
                (s = s.filter((e) => E(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = T(s)),
            s.forEach((s) => {
              "bullets" === e.type &&
                e.clickable &&
                s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (l = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", c),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function h() {
        const e = t.params.pagination;
        if (o()) return;
        let s = t.pagination.el;
        s &&
          ((s = T(s)),
          s.forEach((s) => {
            s.classList.remove(e.hiddenClass),
              s.classList.remove(e.modifierClass + e.type),
              s.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              e.clickable &&
                (s.classList.remove(...(e.clickableClass || "").split(" ")),
                s.removeEventListener("click", c));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" "))
            );
      }
      a("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = T(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
      }),
        a("init", () => {
          !1 === t.params.pagination.enabled ? f() : (m(), u(), p());
        }),
        a("activeIndexChange", () => {
          void 0 === t.snapIndex && p();
        }),
        a("snapIndexChange", () => {
          p();
        }),
        a("snapGridLengthChange", () => {
          u(), p();
        }),
        a("destroy", () => {
          h();
        }),
        a("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = T(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass
              )
            ));
        }),
        a("lock unlock", () => {
          p();
        }),
        a("click", (e, s) => {
          const a = s.target,
            r = T(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !a.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                (t.navigation.prevEl && a === t.navigation.prevEl))
            )
              return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
              r.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass)
              );
          }
        });
      const f = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = T(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass)
          )),
          h();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = T(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass)
            )),
            m(),
            u(),
            p();
        },
        disable: f,
        render: u,
        update: p,
        init: m,
        destroy: h,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const o = a();
      let d,
        c,
        p,
        u,
        m = !1,
        h = null,
        f = null;
      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s } = t,
          { dragEl: a, el: i } = e,
          r = t.params.scrollbar,
          n = t.params.loop ? t.progressLoop : t.progress;
        let l = c,
          o = (p - c) * n;
        s
          ? ((o = -o),
            o > 0 ? ((l = c - o), (o = 0)) : -o + c > p && (l = p + o))
          : o < 0
          ? ((l = c + o), (o = 0))
          : o + c > p && (l = p - o),
          t.isHorizontal()
            ? ((a.style.transform = `translate3d(${o}px, 0, 0)`),
              (a.style.width = `${l}px`))
            : ((a.style.transform = `translate3d(0px, ${o}px, 0)`),
              (a.style.height = `${l}px`)),
          r.hide &&
            (clearTimeout(h),
            (i.style.opacity = 1),
            (h = setTimeout(() => {
              (i.style.opacity = 0), (i.style.transitionDuration = "400ms");
            }, 1e3)));
      }
      function b() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { dragEl: s, el: a } = e;
        (s.style.width = ""),
          (s.style.height = ""),
          (p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight),
          (u =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (c =
            "auto" === t.params.scrollbar.dragSize
              ? p * u
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (s.style.width = `${c}px`)
            : (s.style.height = `${c}px`),
          (a.style.display = u >= 1 ? "none" : ""),
          t.params.scrollbar.hide && (a.style.opacity = 0),
          t.params.watchOverflow &&
            t.enabled &&
            e.el.classList[t.isLocked ? "add" : "remove"](
              t.params.scrollbar.lockClass
            );
      }
      function y(e) {
        return t.isHorizontal() ? e.clientX : e.clientY;
      }
      function E(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { el: i } = s;
        let r;
        (r =
          (y(e) -
            w(i)[t.isHorizontal() ? "left" : "top"] -
            (null !== d ? d : c / 2)) /
          (p - c)),
          (r = Math.max(Math.min(r, 1), 0)),
          a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      }
      function x(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: n, dragEl: l } = a;
        (m = !0),
          (d =
            e.target === l
              ? y(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          (i.style.transitionDuration = "100ms"),
          (l.style.transitionDuration = "100ms"),
          E(e),
          clearTimeout(f),
          (n.style.transitionDuration = "0ms"),
          s.hide && (n.style.opacity = 1),
          t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
          r("scrollbarDragStart", e);
      }
      function S(e) {
        const { scrollbar: s, wrapperEl: a } = t,
          { el: i, dragEl: n } = s;
        m &&
          (e.preventDefault && e.cancelable
            ? e.preventDefault()
            : (e.returnValue = !1),
          E(e),
          (a.style.transitionDuration = "0ms"),
          (i.style.transitionDuration = "0ms"),
          (n.style.transitionDuration = "0ms"),
          r("scrollbarDragMove", e));
      }
      function M(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: n } = a;
        m &&
          ((m = !1),
          t.params.cssMode &&
            ((t.wrapperEl.style["scroll-snap-type"] = ""),
            (i.style.transitionDuration = "")),
          s.hide &&
            (clearTimeout(f),
            (f = l(() => {
              (n.style.opacity = 0), (n.style.transitionDuration = "400ms");
            }, 1e3))),
          r("scrollbarDragEnd", e),
          s.snapOnRelease && t.slideToClosest());
      }
      function C(e) {
        const { scrollbar: s, params: a } = t,
          i = s.el;
        if (!i) return;
        const r = i,
          n = !!a.passiveListeners && { passive: !1, capture: !1 },
          l = !!a.passiveListeners && { passive: !0, capture: !1 };
        if (!r) return;
        const d = "on" === e ? "addEventListener" : "removeEventListener";
        r[d]("pointerdown", x, n),
          o[d]("pointermove", S, n),
          o[d]("pointerup", M, l);
      }
      function P() {
        const { scrollbar: e, el: s } = t;
        t.params.scrollbar = ie(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i, r;
        if (
          ("string" == typeof a.el &&
            t.isElement &&
            (i = t.el.querySelector(a.el)),
          i || "string" != typeof a.el)
        )
          i || (i = a.el);
        else if (((i = o.querySelectorAll(a.el)), !i.length)) return;
        t.params.uniqueNavElements &&
          "string" == typeof a.el &&
          i.length > 1 &&
          1 === s.querySelectorAll(a.el).length &&
          (i = s.querySelector(a.el)),
          i.length > 0 && (i = i[0]),
          i.classList.add(
            t.isHorizontal() ? a.horizontalClass : a.verticalClass
          ),
          i &&
            ((r = i.querySelector(re(t.params.scrollbar.dragClass))),
            r || ((r = v("div", t.params.scrollbar.dragClass)), i.append(r))),
          Object.assign(e, { el: i, dragEl: r }),
          a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
          i &&
            i.classList[t.enabled ? "remove" : "add"](
              ...n(t.params.scrollbar.lockClass)
            );
      }
      function L() {
        const e = t.params.scrollbar,
          s = t.scrollbar.el;
        s &&
          s.classList.remove(
            ...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          ),
          t.params.scrollbar.el && t.scrollbar.el && C("off");
      }
      s({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (t.scrollbar = { el: null, dragEl: null }),
        i("changeDirection", () => {
          if (!t.scrollbar || !t.scrollbar.el) return;
          const e = t.params.scrollbar;
          let { el: s } = t.scrollbar;
          (s = T(s)),
            s.forEach((s) => {
              s.classList.remove(e.horizontalClass, e.verticalClass),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                );
            });
        }),
        i("init", () => {
          !1 === t.params.scrollbar.enabled ? I() : (P(), b(), g());
        }),
        i("update resize observerUpdate lock unlock changeDirection", () => {
          b();
        }),
        i("setTranslate", () => {
          g();
        }),
        i("setTransition", (e, s) => {
          !(function (e) {
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
          })(s);
        }),
        i("enable disable", () => {
          const { el: e } = t.scrollbar;
          e &&
            e.classList[t.enabled ? "remove" : "add"](
              ...n(t.params.scrollbar.lockClass)
            );
        }),
        i("destroy", () => {
          L();
        });
      const I = () => {
        t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),
          t.scrollbar.el &&
            t.scrollbar.el.classList.add(
              ...n(t.params.scrollbar.scrollbarDisabledClass)
            ),
          L();
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          t.el.classList.remove(
            ...n(t.params.scrollbar.scrollbarDisabledClass)
          ),
            t.scrollbar.el &&
              t.scrollbar.el.classList.remove(
                ...n(t.params.scrollbar.scrollbarDisabledClass)
              ),
            P(),
            b(),
            g();
        },
        disable: I,
        updateSize: b,
        setTranslate: g,
        init: P,
        destroy: L,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i =
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
        r = (e, s) => {
          const { rtl: a } = t,
            i = a ? -1 : 1,
            r = e.getAttribute("data-swiper-parallax") || "0";
          let n = e.getAttribute("data-swiper-parallax-x"),
            l = e.getAttribute("data-swiper-parallax-y");
          const o = e.getAttribute("data-swiper-parallax-scale"),
            d = e.getAttribute("data-swiper-parallax-opacity"),
            c = e.getAttribute("data-swiper-parallax-rotate");
          if (
            (n || l
              ? ((n = n || "0"), (l = l || "0"))
              : t.isHorizontal()
              ? ((n = r), (l = "0"))
              : ((l = r), (n = "0")),
            (n =
              n.indexOf("%") >= 0
                ? parseInt(n, 10) * s * i + "%"
                : n * s * i + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
          ) {
            const t = d - (d - 1) * (1 - Math.abs(s));
            e.style.opacity = t;
          }
          let p = `translate3d(${n}, ${l}, 0px)`;
          if (null != o) {
            p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
          }
          if (c && null != c) {
            p += ` rotate(${c * s * -1}deg)`;
          }
          e.style.transform = p;
        },
        n = () => {
          const {
              el: e,
              slides: s,
              progress: a,
              snapGrid: n,
              isElement: l,
            } = t,
            o = f(e, i);
          t.isElement && o.push(...f(t.hostEl, i)),
            o.forEach((e) => {
              r(e, a);
            }),
            s.forEach((e, s) => {
              let l = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (l += Math.ceil(s / 2) - a * (n.length - 1)),
                (l = Math.min(Math.max(l, -1), 1)),
                e
                  .querySelectorAll(`${i}, [data-swiper-parallax-rotate]`)
                  .forEach((e) => {
                    r(e, l);
                  });
            });
        };
      a("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        a("init", () => {
          t.params.parallax.enabled && n();
        }),
        a("setTranslate", () => {
          t.params.parallax.enabled && n();
        }),
        a("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { el: s, hostEl: a } = t,
                r = [...s.querySelectorAll(i)];
              t.isElement && r.push(...a.querySelectorAll(i)),
                r.forEach((t) => {
                  let s =
                    parseInt(
                      t.getAttribute("data-swiper-parallax-duration"),
                      10
                    ) || e;
                  0 === e && (s = 0), (t.style.transitionDuration = `${s}ms`);
                });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      s({
        zoom: {
          enabled: !1,
          limitToOriginalSize: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (t.zoom = { enabled: !1 });
      let l,
        o,
        c = 1,
        p = !1;
      const u = [],
        m = {
          originX: 0,
          originY: 0,
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3,
        },
        h = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        g = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let v,
        b = 1;
      function y() {
        if (u.length < 2) return 1;
        const e = u[0].pageX,
          t = u[0].pageY,
          s = u[1].pageX,
          a = u[1].pageY;
        return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
      }
      function x() {
        const e = t.params.zoom,
          s = m.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
        if (e.limitToOriginalSize && m.imageEl && m.imageEl.naturalWidth) {
          const e = m.imageEl.naturalWidth / m.imageEl.offsetWidth;
          return Math.min(e, s);
        }
        return s;
      }
      function S(e) {
        const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return (
          !!e.target.matches(s) ||
          t.slides.filter((t) => t.contains(e.target)).length > 0
        );
      }
      function T(e) {
        if (("mouse" === e.pointerType && u.splice(0, u.length), !S(e))) return;
        const s = t.params.zoom;
        if (((l = !1), (o = !1), u.push(e), !(u.length < 2))) {
          if (((l = !0), (m.scaleStart = y()), !m.slideEl)) {
            (m.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
              m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
            let a = m.slideEl.querySelector(`.${s.containerClass}`);
            if (
              (a &&
                (a = a.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target"
                )[0]),
              (m.imageEl = a),
              (m.imageWrapEl = a
                ? E(m.imageEl, `.${s.containerClass}`)[0]
                : void 0),
              !m.imageWrapEl)
            )
              return void (m.imageEl = void 0);
            m.maxRatio = x();
          }
          if (m.imageEl) {
            const [e, t] = (function () {
              if (u.length < 2) return { x: null, y: null };
              const e = m.imageEl.getBoundingClientRect();
              return [
                (u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) /
                  c,
                (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) /
                  c,
              ];
            })();
            (m.originX = e),
              (m.originY = t),
              (m.imageEl.style.transitionDuration = "0ms");
          }
          p = !0;
        }
      }
      function M(e) {
        if (!S(e)) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = u.findIndex((t) => t.pointerId === e.pointerId);
        i >= 0 && (u[i] = e),
          u.length < 2 ||
            ((o = !0),
            (m.scaleMove = y()),
            m.imageEl &&
              ((a.scale = (m.scaleMove / m.scaleStart) * c),
              a.scale > m.maxRatio &&
                (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** 0.5),
              a.scale < s.minRatio &&
                (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** 0.5),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`)));
      }
      function C(e) {
        if (!S(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = u.findIndex((t) => t.pointerId === e.pointerId);
        i >= 0 && u.splice(i, 1),
          l &&
            o &&
            ((l = !1),
            (o = !1),
            m.imageEl &&
              ((a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio)),
              (m.imageEl.style.transitionDuration = `${t.params.speed}ms`),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`),
              (c = a.scale),
              (p = !1),
              a.scale > 1 && m.slideEl
                ? m.slideEl.classList.add(`${s.zoomedSlideClass}`)
                : a.scale <= 1 &&
                  m.slideEl &&
                  m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
              1 === a.scale &&
                ((m.originX = 0), (m.originY = 0), (m.slideEl = void 0))));
      }
      function P() {
        t.touchEventsData.preventTouchMoveFromPointerMove = !1;
      }
      function L(e) {
        if (
          !S(e) ||
          !(function (e) {
            const s = `.${t.params.zoom.containerClass}`;
            return (
              !!e.target.matches(s) ||
              [...t.hostEl.querySelectorAll(s)].filter((t) =>
                t.contains(e.target)
              ).length > 0
            );
          })(e)
        )
          return;
        const s = t.zoom;
        if (!m.imageEl) return;
        if (!h.isTouched || !m.slideEl) return;
        h.isMoved ||
          ((h.width = m.imageEl.offsetWidth || m.imageEl.clientWidth),
          (h.height = m.imageEl.offsetHeight || m.imageEl.clientHeight),
          (h.startX = d(m.imageWrapEl, "x") || 0),
          (h.startY = d(m.imageWrapEl, "y") || 0),
          (m.slideWidth = m.slideEl.offsetWidth),
          (m.slideHeight = m.slideEl.offsetHeight),
          (m.imageWrapEl.style.transitionDuration = "0ms"));
        const a = h.width * s.scale,
          i = h.height * s.scale;
        (h.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
          (h.maxX = -h.minX),
          (h.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
          (h.maxY = -h.minY),
          (h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX),
          (h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY);
        if (
          (Math.max(
            Math.abs(h.touchesCurrent.x - h.touchesStart.x),
            Math.abs(h.touchesCurrent.y - h.touchesStart.y)
          ) > 5 && (t.allowClick = !1),
          !h.isMoved && !p)
        ) {
          if (
            t.isHorizontal() &&
            ((Math.floor(h.minX) === Math.floor(h.startX) &&
              h.touchesCurrent.x < h.touchesStart.x) ||
              (Math.floor(h.maxX) === Math.floor(h.startX) &&
                h.touchesCurrent.x > h.touchesStart.x))
          )
            return (h.isTouched = !1), void P();
          if (
            !t.isHorizontal() &&
            ((Math.floor(h.minY) === Math.floor(h.startY) &&
              h.touchesCurrent.y < h.touchesStart.y) ||
              (Math.floor(h.maxY) === Math.floor(h.startY) &&
                h.touchesCurrent.y > h.touchesStart.y))
          )
            return (h.isTouched = !1), void P();
        }
        e.cancelable && e.preventDefault(),
          e.stopPropagation(),
          clearTimeout(v),
          (t.touchEventsData.preventTouchMoveFromPointerMove = !0),
          (v = setTimeout(() => {
            P();
          })),
          (h.isMoved = !0);
        const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
          { originX: n, originY: l } = m;
        (h.currentX =
          h.touchesCurrent.x -
          h.touchesStart.x +
          h.startX +
          r * (h.width - 2 * n)),
          (h.currentY =
            h.touchesCurrent.y -
            h.touchesStart.y +
            h.startY +
            r * (h.height - 2 * l)),
          h.currentX < h.minX &&
            (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** 0.8),
          h.currentX > h.maxX &&
            (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** 0.8),
          h.currentY < h.minY &&
            (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** 0.8),
          h.currentY > h.maxY &&
            (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** 0.8),
          g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x),
          g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y),
          g.prevTime || (g.prevTime = Date.now()),
          (g.x =
            (h.touchesCurrent.x - g.prevPositionX) /
            (Date.now() - g.prevTime) /
            2),
          (g.y =
            (h.touchesCurrent.y - g.prevPositionY) /
            (Date.now() - g.prevTime) /
            2),
          Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
          Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
          (g.prevPositionX = h.touchesCurrent.x),
          (g.prevPositionY = h.touchesCurrent.y),
          (g.prevTime = Date.now()),
          (m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
      }
      function I() {
        const e = t.zoom;
        m.slideEl &&
          t.activeIndex !== t.slides.indexOf(m.slideEl) &&
          (m.imageEl &&
            (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          m.imageWrapEl &&
            (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
          (e.scale = 1),
          (c = 1),
          (m.slideEl = void 0),
          (m.imageEl = void 0),
          (m.imageWrapEl = void 0),
          (m.originX = 0),
          (m.originY = 0));
      }
      function A(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (!m.slideEl) {
          e &&
            e.target &&
            (m.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
            m.slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (m.slideEl = f(
                    t.slidesEl,
                    `.${t.params.slideActiveClass}`
                  )[0])
                : (m.slideEl = t.slides[t.activeIndex]));
          let s = m.slideEl.querySelector(`.${a.containerClass}`);
          s &&
            (s = s.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (m.imageEl = s),
            (m.imageWrapEl = s
              ? E(m.imageEl, `.${a.containerClass}`)[0]
              : void 0);
        }
        if (!m.imageEl || !m.imageWrapEl) return;
        let i, r, l, o, d, p, u, g, v, b, y, S, T, M, C, P, L, I;
        t.params.cssMode &&
          ((t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.touchAction = "none")),
          m.slideEl.classList.add(`${a.zoomedSlideClass}`),
          void 0 === h.touchesStart.x && e
            ? ((i = e.pageX), (r = e.pageY))
            : ((i = h.touchesStart.x), (r = h.touchesStart.y));
        const A = "number" == typeof e ? e : null;
        1 === c && A && ((i = void 0), (r = void 0));
        const z = x();
        (s.scale = A || z),
          (c = A || z),
          !e || (1 === c && A)
            ? ((u = 0), (g = 0))
            : ((L = m.slideEl.offsetWidth),
              (I = m.slideEl.offsetHeight),
              (l = w(m.slideEl).left + n.scrollX),
              (o = w(m.slideEl).top + n.scrollY),
              (d = l + L / 2 - i),
              (p = o + I / 2 - r),
              (v = m.imageEl.offsetWidth || m.imageEl.clientWidth),
              (b = m.imageEl.offsetHeight || m.imageEl.clientHeight),
              (y = v * s.scale),
              (S = b * s.scale),
              (T = Math.min(L / 2 - y / 2, 0)),
              (M = Math.min(I / 2 - S / 2, 0)),
              (C = -T),
              (P = -M),
              (u = d * s.scale),
              (g = p * s.scale),
              u < T && (u = T),
              u > C && (u = C),
              g < M && (g = M),
              g > P && (g = P)),
          A && 1 === s.scale && ((m.originX = 0), (m.originY = 0)),
          (m.imageWrapEl.style.transitionDuration = "300ms"),
          (m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`),
          (m.imageEl.style.transitionDuration = "300ms"),
          (m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`);
      }
      function z() {
        const e = t.zoom,
          s = t.params.zoom;
        if (!m.slideEl) {
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
            : (m.slideEl = t.slides[t.activeIndex]);
          let e = m.slideEl.querySelector(`.${s.containerClass}`);
          e &&
            (e = e.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (m.imageEl = e),
            (m.imageWrapEl = e
              ? E(m.imageEl, `.${s.containerClass}`)[0]
              : void 0);
        }
        m.imageEl &&
          m.imageWrapEl &&
          (t.params.cssMode &&
            ((t.wrapperEl.style.overflow = ""),
            (t.wrapperEl.style.touchAction = "")),
          (e.scale = 1),
          (c = 1),
          (m.imageWrapEl.style.transitionDuration = "300ms"),
          (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          (m.imageEl.style.transitionDuration = "300ms"),
          (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
          (m.slideEl = void 0),
          (m.originX = 0),
          (m.originY = 0));
      }
      function $(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? z() : A(e);
      }
      function k() {
        return {
          passiveListener: !!t.params.passiveListeners && {
            passive: !0,
            capture: !1,
          },
          activeListenerWithCapture: !t.params.passiveListeners || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function O() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: s, activeListenerWithCapture: a } = k();
        t.wrapperEl.addEventListener("pointerdown", T, s),
          t.wrapperEl.addEventListener("pointermove", M, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.addEventListener(e, C, s);
          }),
          t.wrapperEl.addEventListener("pointermove", L, a);
      }
      function D() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: s, activeListenerWithCapture: a } = k();
        t.wrapperEl.removeEventListener("pointerdown", T, s),
          t.wrapperEl.removeEventListener("pointermove", M, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.removeEventListener(e, C, s);
          }),
          t.wrapperEl.removeEventListener("pointermove", L, a);
      }
      Object.defineProperty(t.zoom, "scale", {
        get: () => b,
        set(e) {
          if (b !== e) {
            const t = m.imageEl,
              s = m.slideEl;
            i("zoomChange", e, t, s);
          }
          b = e;
        },
      }),
        a("init", () => {
          t.params.zoom.enabled && O();
        }),
        a("destroy", () => {
          D();
        }),
        a("touchStart", (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              if (!m.imageEl) return;
              if (h.isTouched) return;
              s.android && e.cancelable && e.preventDefault(),
                (h.isTouched = !0);
              const a = u.length > 0 ? u[0] : e;
              (h.touchesStart.x = a.pageX), (h.touchesStart.y = a.pageY);
            })(s);
        }),
        a("touchEnd", (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.imageEl) return;
              if (!h.isTouched || !h.isMoved)
                return (h.isTouched = !1), void (h.isMoved = !1);
              (h.isTouched = !1), (h.isMoved = !1);
              let s = 300,
                a = 300;
              const i = g.x * s,
                r = h.currentX + i,
                n = g.y * a,
                l = h.currentY + n;
              0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)),
                0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
              const o = Math.max(s, a);
              (h.currentX = r), (h.currentY = l);
              const d = h.width * e.scale,
                c = h.height * e.scale;
              (h.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (h.maxX = -h.minX),
                (h.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                (h.maxY = -h.minY),
                (h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX)),
                (h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY)),
                (m.imageWrapEl.style.transitionDuration = `${o}ms`),
                (m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`);
            })();
        }),
        a("doubleTap", (e, s) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            $(s);
        }),
        a("transitionEnd", () => {
          t.zoom.enabled && t.params.zoom.enabled && I();
        }),
        a("slideChange", () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && I();
        }),
        Object.assign(t.zoom, {
          enable: O,
          disable: D,
          in: A,
          out: z,
          toggle: $,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1; )
              (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                  (this.x[i] - this.x[a]) +
                  this.y[a])
              : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        a("beforeInit", () => {
          if (
            "undefined" != typeof window &&
            ("string" == typeof t.params.controller.control ||
              t.params.controller.control instanceof HTMLElement)
          ) {
            const e = document.querySelector(t.params.controller.control);
            if (e && e.swiper) t.controller.control = e.swiper;
            else if (e) {
              const s = (a) => {
                (t.controller.control = a.detail[0]),
                  t.update(),
                  e.removeEventListener("init", s);
              };
              e.addEventListener("init", s);
            }
          } else t.controller.control = t.params.controller.control;
        }),
        a("update", () => {
          r();
        }),
        a("resize", () => {
          r();
        }),
        a("observerUpdate", () => {
          r();
        }),
        a("setTranslate", (e, s, a) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTranslate(s, a);
        }),
        a("setTransition", (e, s, a) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              if (e.destroyed) return;
              const s = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline = t.params.loop
                    ? new i(t.slidesGrid, e.slidesGrid)
                    : new i(t.snapGrid, e.snapGrid);
                })(e),
                (n = -t.controller.spline.interpolate(-s))),
                (n && "container" !== t.params.controller.by) ||
                  ((r =
                    (e.maxTranslate() - e.minTranslate()) /
                    (t.maxTranslate() - t.minTranslate())),
                  (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1)
                a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function n(s) {
              s.destroyed ||
                (s.setTransition(e, t),
                0 !== e &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    l(() => {
                      s.updateAutoHeight();
                    }),
                  x(s.wrapperEl, () => {
                    i && s.transitionEnd();
                  })));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && n(i[r]);
            else i instanceof a && s !== i && n(i);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (t.a11y = { clicked: !1 });
      let r,
        n,
        l = null,
        o = new Date().getTime();
      function d(e) {
        const t = l;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      function c(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function p(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function u(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function m(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function h(e, t) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function f(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function g(e) {
        (e = T(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function w(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = e.target;
        if (
          !t.pagination ||
          !t.pagination.el ||
          (a !== t.pagination.el && !t.pagination.el.contains(e.target)) ||
          e.target.matches(re(t.params.pagination.bulletClass))
        ) {
          if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
            const e = T(t.navigation.prevEl);
            T(t.navigation.nextEl).includes(a) &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)),
              e.includes(a) &&
                ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                t.isBeginning ? d(s.firstSlideMessage) : d(s.prevSlideMessage));
          }
          t.pagination &&
            a.matches(re(t.params.pagination.bulletClass)) &&
            a.click();
        }
      }
      function b() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function E() {
        return b() && t.params.pagination.clickable;
      }
      const x = (e, t, s) => {
          c(e),
            "BUTTON" !== e.tagName &&
              (u(e, "button"), e.addEventListener("keydown", w)),
            h(e, s),
            (function (e, t) {
              (e = T(e)).forEach((e) => {
                e.setAttribute("aria-controls", t);
              });
            })(e, t);
        },
        S = (e) => {
          n && n !== e.target && !n.contains(e.target) && (r = !0),
            (t.a11y.clicked = !0);
        },
        M = () => {
          (r = !1),
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1);
              });
            });
        },
        C = (e) => {
          o = new Date().getTime();
        },
        P = (e) => {
          if (t.a11y.clicked) return;
          if (new Date().getTime() - o < 100) return;
          const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
          if (!s || !t.slides.includes(s)) return;
          n = s;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(s);
          a ||
            i ||
            (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
            (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
            requestAnimationFrame(() => {
              r ||
                (t.params.loop
                  ? t.slideToLoop(
                      parseInt(s.getAttribute("data-swiper-slide-index")),
                      0
                    )
                  : t.slideTo(t.slides.indexOf(s), 0),
                (r = !1));
            }));
        },
        L = () => {
          const e = t.params.a11y;
          e.itemRoleDescriptionMessage &&
            m(t.slides, e.itemRoleDescriptionMessage),
            e.slideRole && u(t.slides, e.slideRole);
          const s = t.slides.length;
          e.slideLabelMessage &&
            t.slides.forEach((a, i) => {
              const r = t.params.loop
                ? parseInt(a.getAttribute("data-swiper-slide-index"), 10)
                : i;
              h(
                a,
                e.slideLabelMessage
                  .replace(/\{\{index\}\}/, r + 1)
                  .replace(/\{\{slidesLength\}\}/, s)
              );
            });
        },
        I = () => {
          const e = t.params.a11y;
          t.el.append(l);
          const s = t.el;
          e.containerRoleDescriptionMessage &&
            m(s, e.containerRoleDescriptionMessage),
            e.containerMessage && h(s, e.containerMessage);
          const i = t.wrapperEl,
            r =
              e.id ||
              i.getAttribute("id") ||
              `swiper-wrapper-${
                ((n = 16),
                void 0 === n && (n = 16),
                "x"
                  .repeat(n)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  ))
              }`;
          var n;
          const o =
            t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var d;
          (d = r),
            T(i).forEach((e) => {
              e.setAttribute("id", d);
            }),
            (function (e, t) {
              (e = T(e)).forEach((e) => {
                e.setAttribute("aria-live", t);
              });
            })(i, o),
            L();
          let { nextEl: c, prevEl: p } = t.navigation ? t.navigation : {};
          if (
            ((c = T(c)),
            (p = T(p)),
            c && c.forEach((t) => x(t, r, e.nextSlideMessage)),
            p && p.forEach((t) => x(t, r, e.prevSlideMessage)),
            E())
          ) {
            T(t.pagination.el).forEach((e) => {
              e.addEventListener("keydown", w);
            });
          }
          a().addEventListener("visibilitychange", C),
            t.el.addEventListener("focus", P, !0),
            t.el.addEventListener("focus", P, !0),
            t.el.addEventListener("pointerdown", S, !0),
            t.el.addEventListener("pointerup", M, !0);
        };
      i("beforeInit", () => {
        (l = v("span", t.params.a11y.notificationClass)),
          l.setAttribute("aria-live", "assertive"),
          l.setAttribute("aria-atomic", "true");
      }),
        i("afterInit", () => {
          t.params.a11y.enabled && I();
        }),
        i(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            t.params.a11y.enabled && L();
          }
        ),
        i("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { nextEl: e, prevEl: s } = t.navigation;
              s && (t.isBeginning ? (f(s), p(s)) : (g(s), c(s))),
                e && (t.isEnd ? (f(e), p(e)) : (g(e), c(e)));
            })();
        }),
        i("paginationUpdate", () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              b() &&
                t.pagination.bullets.forEach((s) => {
                  t.params.pagination.clickable &&
                    (c(s),
                    t.params.pagination.renderBullet ||
                      (u(s, "button"),
                      h(
                        s,
                        e.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          y(s) + 1
                        )
                      ))),
                    s.matches(re(t.params.pagination.bulletActiveClass))
                      ? s.setAttribute("aria-current", "true")
                      : s.removeAttribute("aria-current");
                });
            })();
        }),
        i("destroy", () => {
          t.params.a11y.enabled &&
            (function () {
              l && l.remove();
              let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
              (e = T(e)),
                (s = T(s)),
                e && e.forEach((e) => e.removeEventListener("keydown", w)),
                s && s.forEach((e) => e.removeEventListener("keydown", w)),
                E() &&
                  T(t.pagination.el).forEach((e) => {
                    e.removeEventListener("keydown", w);
                  });
              a().removeEventListener("visibilitychange", C),
                t.el &&
                  "string" != typeof t.el &&
                  (t.el.removeEventListener("focus", P, !0),
                  t.el.removeEventListener("pointerdown", S, !0),
                  t.el.removeEventListener("pointerup", M, !0));
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let i = !1,
        n = {};
      const l = (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`)
              : t.slides[s];
          let d = l(o.getAttribute("data-history"));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${e ? `${e}/` : ""}${d}`);
          } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
          t.params.history.keepQuery && (d += n.search);
          const c = a.history.state;
          (c && c.value === d) ||
            (t.params.history.replaceState
              ? a.history.replaceState({ value: d }, null, d)
              : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides[i];
              if (l(r.getAttribute("data-history")) === s) {
                const s = t.getSlideIndex(r);
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          (n = o(t.params.url)), c(t.params.speed, n.value, !1);
        };
      a("init", () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              (i = !0),
                (n = o(t.params.url)),
                n.key || n.value
                  ? (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                      e.addEventListener("popstate", p))
                  : t.params.history.replaceState ||
                    e.addEventListener("popstate", p);
            }
          })();
      }),
        a("destroy", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState ||
                e.removeEventListener("popstate", p);
            })();
        }),
        a("transitionEnd _freeModeNoMomentumRelease", () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a("slideChange", () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        d = r();
      s({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1,
          getSlideIndex(e, s) {
            if (t.virtual && t.params.virtual.enabled) {
              const e = t.slides.filter(
                (e) => e.getAttribute("data-hash") === s
              )[0];
              if (!e) return 0;
              return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            }
            return t.getSlideIndex(
              f(
                t.slidesEl,
                `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`
              )[0]
            );
          },
        },
      });
      const c = () => {
          i("hashChange");
          const e = o.location.hash.replace("#", ""),
            s =
              t.virtual && t.params.virtual.enabled
                ? t.slidesEl.querySelector(
                    `[data-swiper-slide-index="${t.activeIndex}"]`
                  )
                : t.slides[t.activeIndex];
          if (e !== (s ? s.getAttribute("data-hash") : "")) {
            const s = t.params.hashNavigation.getSlideIndex(t, e);
            if (void 0 === s || Number.isNaN(s)) return;
            t.slideTo(s);
          }
        },
        p = () => {
          if (!l || !t.params.hashNavigation.enabled) return;
          const e =
              t.virtual && t.params.virtual.enabled
                ? t.slidesEl.querySelector(
                    `[data-swiper-slide-index="${t.activeIndex}"]`
                  )
                : t.slides[t.activeIndex],
            s = e
              ? e.getAttribute("data-hash") || e.getAttribute("data-history")
              : "";
          t.params.hashNavigation.replaceState &&
          d.history &&
          d.history.replaceState
            ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet"))
            : ((o.location.hash = s || ""), i("hashSet"));
        };
      n("init", () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            l = !0;
            const e = o.location.hash.replace("#", "");
            if (e) {
              const s = 0,
                a = t.params.hashNavigation.getSlideIndex(t, e);
              t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0);
            }
            t.params.hashNavigation.watchState &&
              d.addEventListener("hashchange", c);
          })();
      }),
        n("destroy", () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            d.removeEventListener("hashchange", c);
        }),
        n("transitionEnd _freeModeNoMomentumRelease", () => {
          l && p();
        }),
        n("slideChange", () => {
          l && t.params.cssMode && p();
        });
    },
    function (e) {
      let t,
        s,
        { swiper: i, extendParams: r, on: n, emit: l, params: o } = e;
      (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let d,
        c,
        p,
        u,
        m,
        h,
        f,
        g,
        v = o && o.autoplay ? o.autoplay.delay : 3e3,
        w = o && o.autoplay ? o.autoplay.delay : 3e3,
        b = new Date().getTime();
      function y(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", y),
          g || (e.detail && e.detail.bySwiperTouchMove) || C());
      }
      const E = () => {
          if (i.destroyed || !i.autoplay.running) return;
          i.autoplay.paused ? (c = !0) : c && ((w = d), (c = !1));
          const e = i.autoplay.paused ? d : b + w - new Date().getTime();
          (i.autoplay.timeLeft = e),
            l("autoplayTimeLeft", e, e / v),
            (s = requestAnimationFrame(() => {
              E();
            }));
        },
        x = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          cancelAnimationFrame(s), E();
          let a = void 0 === e ? i.params.autoplay.delay : e;
          (v = i.params.autoplay.delay), (w = i.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : i.slides[i.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((a = r), (v = r), (w = r)),
            (d = a);
          const n = i.params.speed,
            o = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(n, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                      (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                  ? (i.slideNext(n, !0, !0), l("autoplay"))
                  : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(0, n, !0, !0), l("autoplay")),
                i.params.cssMode &&
                  ((b = new Date().getTime()),
                  requestAnimationFrame(() => {
                    x();
                  })));
            };
          return (
            a > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  o();
                }, a)))
              : requestAnimationFrame(() => {
                  o();
                }),
            a
          );
        },
        S = () => {
          (b = new Date().getTime()),
            (i.autoplay.running = !0),
            x(),
            l("autoplayStart");
        },
        T = () => {
          (i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            l("autoplayStop");
        },
        M = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          clearTimeout(t), e || (f = !0);
          const a = () => {
            l("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", y)
                : C();
          };
          if (((i.autoplay.paused = !0), s))
            return h && (d = i.params.autoplay.delay), (h = !1), void a();
          const r = d || i.params.autoplay.delay;
          (d = r - (new Date().getTime() - b)),
            (i.isEnd && d < 0 && !i.params.loop) || (d < 0 && (d = 0), a());
        },
        C = () => {
          (i.isEnd && d < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((b = new Date().getTime()),
            f ? ((f = !1), x(d)) : x(),
            (i.autoplay.paused = !1),
            l("autoplayResume"));
        },
        P = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = a();
          "hidden" === e.visibilityState && ((f = !0), M(!0)),
            "visible" === e.visibilityState && C();
        },
        L = (e) => {
          "mouse" === e.pointerType &&
            ((f = !0), (g = !0), i.animating || i.autoplay.paused || M(!0));
        },
        I = (e) => {
          "mouse" === e.pointerType && ((g = !1), i.autoplay.paused && C());
        };
      n("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", L),
            i.el.addEventListener("pointerleave", I)),
          a().addEventListener("visibilitychange", P),
          S());
      }),
        n("destroy", () => {
          i.el &&
            "string" != typeof i.el &&
            (i.el.removeEventListener("pointerenter", L),
            i.el.removeEventListener("pointerleave", I)),
            a().removeEventListener("visibilitychange", P),
            i.autoplay.running && T();
        }),
        n("_freeModeStaticRelease", () => {
          (u || f) && C();
        }),
        n("_freeModeNoMomentumRelease", () => {
          i.params.autoplay.disableOnInteraction ? T() : M(!0, !0);
        }),
        n("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T());
        }),
        n("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? T()
              : ((p = !0),
                (u = !1),
                (f = !1),
                (m = setTimeout(() => {
                  (f = !0), (u = !0), M(!0);
                }, 200))));
        }),
        n("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && p) {
            if (
              (clearTimeout(m),
              clearTimeout(t),
              i.params.autoplay.disableOnInteraction)
            )
              return (u = !1), void (p = !1);
            u && i.params.cssMode && C(), (u = !1), (p = !1);
          }
        }),
        n("slideChange", () => {
          !i.destroyed && i.autoplay.running && (h = !0);
        }),
        Object.assign(i.autoplay, { start: S, stop: T, pause: M, resume: C });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        n = !1;
      function l() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let i;
        (i = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
      }
      function o() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update();
        else if (c(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(a)),
            (n = !0);
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass
          ),
          t.thumbs.swiper.on("tap", l),
          !0
        );
      }
      function d(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let i = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (i = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (i = 1),
          (i = Math.floor(i)),
          s.slides.forEach((e) => e.classList.remove(r)),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < i; e += 1)
            f(
              s.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`
            ).forEach((e) => {
              e.classList.add(r);
            });
        else
          for (let e = 0; e < i; e += 1)
            s.slides[t.realIndex + e] &&
              s.slides[t.realIndex + e].classList.add(r);
        const n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || l) {
          const i = s.activeIndex;
          let r, o;
          if (s.params.loop) {
            const e = s.slides.filter(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
            )[0];
            (r = s.slides.indexOf(e)),
              (o = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev");
          l && (r += "next" === o ? n : -1 * n),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(r) < 0 &&
              (s.params.centeredSlides
                ? (r =
                    r > i
                      ? r - Math.floor(a / 2) + 1
                      : r + Math.floor(a / 2) - 1)
                : r > i && s.params.slidesPerGroup,
              s.slideTo(r, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        i("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const s = a(),
                i = () => {
                  const a =
                    "string" == typeof e.swiper
                      ? s.querySelector(e.swiper)
                      : e.swiper;
                  if (a && a.swiper) (e.swiper = a.swiper), o(), d(!0);
                  else if (a) {
                    const s = (i) => {
                      (e.swiper = i.detail[0]),
                        a.removeEventListener("init", s),
                        o(),
                        d(!0),
                        e.swiper.update(),
                        t.update();
                    };
                    a.addEventListener("init", s);
                  }
                  return a;
                },
                r = () => {
                  if (t.destroyed) return;
                  i() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else o(), d(!0);
        }),
        i("slideChange update resize observerUpdate", () => {
          d();
        }),
        i("setTransition", (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        i("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && n && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: d });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                });
            },
            onTouchMove: function () {
              if (t.params.cssMode) return;
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: s[t.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: s[t.isHorizontal() ? "currentX" : "currentY"],
                  time: o(),
                });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              if (t.params.cssMode) return;
              const {
                  params: r,
                  wrapperEl: n,
                  rtlTranslate: l,
                  snapGrid: d,
                  touchEventsData: c,
                } = t,
                p = o() - c.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate())
                t.slides.length < d.length
                  ? t.slideTo(d.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      s = c.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    (t.velocity = a / i),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                        (t.velocity = 0),
                      (i > 150 || o() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio),
                    (c.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let p = t.translate + s;
                  l && (p = -p);
                  let u,
                    m = !1;
                  const h =
                    20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (p < t.maxTranslate())
                    r.freeMode.momentumBounce
                      ? (p + t.maxTranslate() < -h &&
                          (p = t.maxTranslate() - h),
                        (u = t.maxTranslate()),
                        (m = !0),
                        (c.allowMomentumBounce = !0))
                      : (p = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (p > t.minTranslate())
                    r.freeMode.momentumBounce
                      ? (p - t.minTranslate() > h && (p = t.minTranslate() + h),
                        (u = t.minTranslate()),
                        (m = !0),
                        (c.allowMomentumBounce = !0))
                      : (p = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < d.length; t += 1)
                      if (d[t] > -p) {
                        e = t;
                        break;
                      }
                    (p =
                      Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) ||
                      "next" === t.swipeDirection
                        ? d[e]
                        : d[e - 1]),
                      (p = -p);
                  }
                  if (
                    (f &&
                      i("transitionEnd", () => {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (
                      ((e = l
                        ? Math.abs((-p - t.translate) / t.velocity)
                        : Math.abs((p - t.translate) / t.velocity)),
                      r.freeMode.sticky)
                    ) {
                      const s = Math.abs((l ? -p : p) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e =
                        s < a
                          ? r.speed
                          : s < 2 * a
                          ? 1.5 * r.speed
                          : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && m
                    ? (t.updateProgress(u),
                      t.setTransition(e),
                      t.setTranslate(p),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      x(n, () => {
                        t &&
                          !t.destroyed &&
                          c.allowMomentumBounce &&
                          (a("momentumBounce"),
                          t.setTransition(r.speed),
                          setTimeout(() => {
                            t.setTranslate(u),
                              x(n, () => {
                                t && !t.destroyed && t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                    ? (a("_freeModeNoMomentumRelease"),
                      t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(p),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        x(n, () => {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(p),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a("_freeModeNoMomentumRelease");
                }
                (!r.freeMode.momentum || p >= r.longSwipesMs) &&
                  (a("_freeModeStaticRelease"),
                  t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        s,
        a,
        i,
        { swiper: r, extendParams: n, on: l } = e;
      n({ grid: { rows: 1, fill: "column" } });
      const o = () => {
        let e = r.params.spaceBetween;
        return (
          "string" == typeof e && e.indexOf("%") >= 0
            ? (e = (parseFloat(e.replace("%", "")) / 100) * r.size)
            : "string" == typeof e && (e = parseFloat(e)),
          e
        );
      };
      l("init", () => {
        i = r.params.grid && r.params.grid.rows > 1;
      }),
        l("update", () => {
          const { params: e, el: t } = r,
            s = e.grid && e.grid.rows > 1;
          i && !s
            ? (t.classList.remove(
                `${e.containerModifierClass}grid`,
                `${e.containerModifierClass}grid-column`
              ),
              (a = 1),
              r.emitContainerClasses())
            : !i &&
              s &&
              (t.classList.add(`${e.containerModifierClass}grid`),
              "column" === e.grid.fill &&
                t.classList.add(`${e.containerModifierClass}grid-column`),
              r.emitContainerClasses()),
            (i = s);
        }),
        (r.grid = {
          initSlides: (e) => {
            const { slidesPerView: i } = r.params,
              { rows: n, fill: l } = r.params.grid,
              o =
                r.virtual && r.params.virtual.enabled
                  ? r.virtual.slides.length
                  : e.length;
            (a = Math.floor(o / n)),
              (t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n),
              "auto" !== i && "row" === l && (t = Math.max(t, i * n)),
              (s = t / n);
          },
          unsetSlides: () => {
            r.slides &&
              r.slides.forEach((e) => {
                e.swiperSlideGridSet &&
                  ((e.style.height = ""),
                  (e.style[r.getDirectionLabel("margin-top")] = ""));
              });
          },
          updateSlide: (e, i, n) => {
            const { slidesPerGroup: l } = r.params,
              d = o(),
              { rows: c, fill: p } = r.params.grid,
              u =
                r.virtual && r.params.virtual.enabled
                  ? r.virtual.slides.length
                  : n.length;
            let m, h, f;
            if ("row" === p && l > 1) {
              const s = Math.floor(e / (l * c)),
                a = e - c * l * s,
                r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
              (f = Math.floor(a / r)),
                (h = a - f * r + s * l),
                (m = h + (f * t) / c),
                (i.style.order = m);
            } else
              "column" === p
                ? ((h = Math.floor(e / c)),
                  (f = e - h * c),
                  (h > a || (h === a && f === c - 1)) &&
                    ((f += 1), f >= c && ((f = 0), (h += 1))))
                : ((f = Math.floor(e / s)), (h = e - f * s));
            (i.row = f),
              (i.column = h),
              (i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`),
              (i.style[r.getDirectionLabel("margin-top")] =
                0 !== f ? d && `${d}px` : ""),
              (i.swiperSlideGridSet = !0);
          },
          updateWrapperSize: (e, s) => {
            const { centeredSlides: a, roundLengths: i } = r.params,
              n = o(),
              { rows: l } = r.params.grid;
            if (
              ((r.virtualSize = (e + n) * t),
              (r.virtualSize = Math.ceil(r.virtualSize / l) - n),
              r.params.cssMode ||
                (r.wrapperEl.style[r.getDirectionLabel("width")] = `${
                  r.virtualSize + n
                }px`),
              a)
            ) {
              const e = [];
              for (let t = 0; t < s.length; t += 1) {
                let a = s[t];
                i && (a = Math.floor(a)),
                  s[t] < r.virtualSize + s[0] && e.push(a);
              }
              s.splice(0, s.length), s.push(...e);
            }
          },
        });
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: ne.bind(t),
        prependSlide: le.bind(t),
        addSlide: oe.bind(t),
        removeSlide: de.bind(t),
        removeAllSlides: ce.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ fadeEffect: { crossFade: !1 } }),
        pe({
          effect: "fade",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let s = 0; s < e.length; s += 1) {
              const e = t.slides[s];
              let a = -e.swiperSlideOffset;
              t.params.virtualTranslate || (a -= t.translate);
              let i = 0;
              t.isHorizontal() || ((i = a), (a = 0));
              const r = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(e.progress), 0)
                  : 1 + Math.min(Math.max(e.progress, -1), 0),
                n = ue(0, e);
              (n.style.opacity = r),
                (n.style.transform = `translate3d(${a}px, ${i}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => h(e));
            s.forEach((t) => {
              t.style.transitionDuration = `${e}ms`;
            }),
              me({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0,
              });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const i = (e, t, s) => {
        let a = s
            ? e.querySelector(".swiper-slide-shadow-left")
            : e.querySelector(".swiper-slide-shadow-top"),
          i = s
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        a ||
          ((a = v(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (s ? "left" : "top")
            ).split(" ")
          )),
          e.append(a)),
          i ||
            ((i = v(
              "div",
              (
                "swiper-slide-shadow-cube swiper-slide-shadow-" +
                (s ? "right" : "bottom")
              ).split(" ")
            )),
            e.append(i)),
          a && (a.style.opacity = Math.max(-t, 0)),
          i && (i.style.opacity = Math.max(t, 0));
      };
      pe({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
              el: e,
              wrapperEl: s,
              slides: a,
              width: r,
              height: n,
              rtlTranslate: l,
              size: o,
              browser: d,
            } = t,
            c = t.params.cubeEffect,
            p = t.isHorizontal(),
            u = t.virtual && t.params.virtual.enabled;
          let m,
            h = 0;
          c.shadow &&
            (p
              ? ((m = t.wrapperEl.querySelector(".swiper-cube-shadow")),
                m ||
                  ((m = v("div", "swiper-cube-shadow")), t.wrapperEl.append(m)),
                (m.style.height = `${r}px`))
              : ((m = e.querySelector(".swiper-cube-shadow")),
                m || ((m = v("div", "swiper-cube-shadow")), e.append(m))));
          for (let e = 0; e < a.length; e += 1) {
            const s = a[e];
            let r = e;
            u && (r = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
            let n = 90 * r,
              d = Math.floor(n / 360);
            l && ((n = -n), (d = Math.floor(-n / 360)));
            const m = Math.max(Math.min(s.progress, 1), -1);
            let f = 0,
              g = 0,
              v = 0;
            r % 4 == 0
              ? ((f = 4 * -d * o), (v = 0))
              : (r - 1) % 4 == 0
              ? ((f = 0), (v = 4 * -d * o))
              : (r - 2) % 4 == 0
              ? ((f = o + 4 * d * o), (v = o))
              : (r - 3) % 4 == 0 && ((f = -o), (v = 3 * o + 4 * o * d)),
              l && (f = -f),
              p || ((g = f), (f = 0));
            const w = `rotateX(${p ? 0 : -n}deg) rotateY(${
              p ? n : 0
            }deg) translate3d(${f}px, ${g}px, ${v}px)`;
            m <= 1 &&
              m > -1 &&
              ((h = 90 * r + 90 * m),
              l && (h = 90 * -r - 90 * m),
              t.browser &&
                t.browser.need3dFix &&
                (Math.abs(h) / 90) % 2 == 1 &&
                (h += 0.001)),
              (s.style.transform = w),
              c.slideShadows && i(s, m, p);
          }
          if (
            ((s.style.transformOrigin = `50% 50% -${o / 2}px`),
            (s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`),
            c.shadow)
          )
            if (p)
              m.style.transform = `translate3d(0px, ${
                r / 2 + c.shadowOffset
              }px, ${-r / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
                c.shadowScale
              })`;
            else {
              const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = c.shadowScale,
                a = c.shadowScale / t,
                i = c.shadowOffset;
              m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${
                n / 2 + i
              }px, ${-n / 2 / a}px) rotateX(-89.99deg)`;
            }
          const f =
            (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
          (s.style.transform = `translate3d(0px,0,${f}px) rotateX(${
            t.isHorizontal() ? 0 : h
          }deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`),
            s.style.setProperty("--swiper-cube-translate-z", `${f}px`);
        },
        setTransition: (e) => {
          const { el: s, slides: a } = t;
          if (
            (a.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
            }),
            t.params.cubeEffect.shadow && !t.isHorizontal())
          ) {
            const t = s.querySelector(".swiper-cube-shadow");
            t && (t.style.transitionDuration = `${e}ms`);
          }
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.forEach((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(t, s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const i = (e, s) => {
        let a = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-left")
            : e.querySelector(".swiper-slide-shadow-top"),
          i = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        a || (a = he("flip", e, t.isHorizontal() ? "left" : "top")),
          i || (i = he("flip", e, t.isHorizontal() ? "right" : "bottom")),
          a && (a.style.opacity = Math.max(-s, 0)),
          i && (i.style.opacity = Math.max(s, 0));
      };
      pe({
        effect: "flip",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e[r];
            let l = n.progress;
            t.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(n.progress, 1), -1));
            const o = n.swiperSlideOffset;
            let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal()
              ? s && (d = -d)
              : ((u = p), (p = 0), (c = -d), (d = 0)),
              t.browser &&
                t.browser.need3dFix &&
                ((Math.abs(d) / 90) % 2 == 1 && (d += 0.001),
                (Math.abs(c) / 90) % 2 == 1 && (c += 0.001)),
              (n.style.zIndex = -Math.abs(Math.round(l)) + e.length),
              a.slideShadows && i(n, l);
            const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            ue(0, n).style.transform = m;
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => h(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
          }),
            me({ swiper: t, duration: e, transformElements: s });
        },
        recreateShadows: () => {
          t.params.flipEffect,
            t.slides.forEach((e) => {
              let s = e.progress;
              t.params.flipEffect.limitRotation &&
                (s = Math.max(Math.min(e.progress, 1), -1)),
                i(e, s);
            });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
        },
      }),
        pe({
          effect: "coverflow",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, s = a.length; e < s; e += 1) {
              const s = a[e],
                l = i[e],
                p = (o - s.swiperSlideOffset - l / 2) / l,
                u =
                  "function" == typeof r.modifier
                    ? r.modifier(p)
                    : p * r.modifier;
              let m = n ? d * u : 0,
                h = n ? 0 : d * u,
                f = -c * Math.abs(u),
                g = r.stretch;
              "string" == typeof g &&
                -1 !== g.indexOf("%") &&
                (g = (parseFloat(r.stretch) / 100) * l);
              let v = n ? 0 : g * u,
                w = n ? g * u : 0,
                b = 1 - (1 - r.scale) * Math.abs(u);
              Math.abs(w) < 0.001 && (w = 0),
                Math.abs(v) < 0.001 && (v = 0),
                Math.abs(f) < 0.001 && (f = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(b) < 0.001 && (b = 0),
                t.browser &&
                  t.browser.need3dFix &&
                  ((Math.abs(m) / 90) % 2 == 1 && (m += 0.001),
                  (Math.abs(h) / 90) % 2 == 1 && (h += 0.001));
              const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;
              if (
                ((ue(0, s).style.transform = y),
                (s.style.zIndex = 1 - Math.abs(Math.round(u))),
                r.slideShadows)
              ) {
                let e = n
                    ? s.querySelector(".swiper-slide-shadow-left")
                    : s.querySelector(".swiper-slide-shadow-top"),
                  t = n
                    ? s.querySelector(".swiper-slide-shadow-right")
                    : s.querySelector(".swiper-slide-shadow-bottom");
                e || (e = he("coverflow", s, n ? "left" : "top")),
                  t || (t = he("coverflow", s, n ? "right" : "bottom")),
                  e && (e.style.opacity = u > 0 ? u : 0),
                  t && (t.style.opacity = -u > 0 ? -u : 0);
              }
            }
          },
          setTransition: (e) => {
            t.slides
              .map((e) => h(e))
              .forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const i = (e) => ("string" == typeof e ? e : `${e}px`);
      pe({
        effect: "creative",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.style.transform = `translateX(calc(50% - ${e}px))`;
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e[s],
              o = a.progress,
              d = Math.min(
                Math.max(a.progress, -r.limitProgress),
                r.limitProgress
              );
            let c = d;
            l ||
              (c = Math.min(
                Math.max(a.originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const p = a.swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              m = [0, 0, 0];
            let h = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((f = r.next), (h = !0))
              : d > 0 && ((f = r.prev), (h = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(
                  d * n
                )}))`;
              }),
              m.forEach((e, s) => {
                let a = f.rotate[s] * Math.abs(d * n);
                t.browser &&
                  t.browser.need3dFix &&
                  (Math.abs(a) / 90) % 2 == 1 &&
                  (a += 0.001),
                  (m[s] = a);
              }),
              (a.style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(", "),
              v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
              w =
                c < 0
                  ? `scale(${1 + (1 - f.scale) * c * n})`
                  : `scale(${1 - (1 - f.scale) * c * n})`,
              b =
                c < 0
                  ? 1 + (1 - f.opacity) * c * n
                  : 1 - (1 - f.opacity) * c * n,
              y = `translate3d(${g}) ${v} ${w}`;
            if ((h && f.shadow) || !h) {
              let e = a.querySelector(".swiper-slide-shadow");
              if ((!e && f.shadow && (e = he("creative", a)), e)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const E = ue(0, a);
            (E.style.transform = y),
              (E.style.opacity = b),
              f.origin && (E.style.transformOrigin = f.origin);
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => h(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              });
          }),
            me({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        pe({
          effect: "cards",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s, rtlTranslate: a } = t,
              i = t.params.cardsEffect,
              { startTranslate: r, isTouched: n } = t.touchEventsData,
              l = a ? -t.translate : t.translate;
            for (let o = 0; o < e.length; o += 1) {
              const d = e[o],
                c = d.progress,
                p = Math.min(Math.max(c, -4), 4);
              let u = d.swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                  t.params.cssMode &&
                  (u -= e[0].swiperSlideOffset);
              let m = t.params.cssMode ? -u - t.translate : -u,
                h = 0;
              const f = -100 * Math.abs(p);
              let g = 1,
                v = -i.perSlideRotate * p,
                w = i.perSlideOffset - 0.75 * Math.abs(p);
              const b =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.from + o
                    : o,
                y =
                  (b === s || b === s - 1) &&
                  p > 0 &&
                  p < 1 &&
                  (n || t.params.cssMode) &&
                  l < r,
                E =
                  (b === s || b === s + 1) &&
                  p < 0 &&
                  p > -1 &&
                  (n || t.params.cssMode) &&
                  l > r;
              if (y || E) {
                const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                (v += -28 * p * e),
                  (g += -0.5 * e),
                  (w += 96 * e),
                  (h = -25 * e * Math.abs(p) + "%");
              }
              if (
                ((m =
                  p < 0
                    ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))`
                    : p > 0
                    ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))`
                    : `${m}px`),
                !t.isHorizontal())
              ) {
                const e = h;
                (h = m), (m = e);
              }
              const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${
                  i.rotate ? (a ? -v : v) : 0
                }deg)\n        scale(${x})\n      `;
              if (i.slideShadows) {
                let e = d.querySelector(".swiper-slide-shadow");
                e || (e = he("cards", d)),
                  e &&
                    (e.style.opacity = Math.min(
                      Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
              ue(0, d).style.transform = S;
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => h(e));
            s.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
              me({ swiper: t, duration: e, transformElements: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
  ];
  return ae.use(fe), ae;
})();
//# sourceMappingURL=swiper-bundle.min.js.map
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).noUiSlider = {})
      );
})(this, function (ut) {
  "use strict";
  function n(t) {
    return "object" == typeof t && "function" == typeof t.to;
  }
  function ct(t) {
    t.parentElement.removeChild(t);
  }
  function pt(t) {
    return null != t;
  }
  function ft(t) {
    t.preventDefault();
  }
  function i(t) {
    return "number" == typeof t && !isNaN(t) && isFinite(t);
  }
  function dt(t, e, r) {
    0 < r &&
      (gt(t, e),
      setTimeout(function () {
        vt(t, e);
      }, r));
  }
  function ht(t) {
    return Math.max(Math.min(t, 100), 0);
  }
  function mt(t) {
    return Array.isArray(t) ? t : [t];
  }
  function e(t) {
    t = (t = String(t)).split(".");
    return 1 < t.length ? t[1].length : 0;
  }
  function gt(t, e) {
    t.classList && !/\s/.test(e)
      ? t.classList.add(e)
      : (t.className += " " + e);
  }
  function vt(t, e) {
    t.classList && !/\s/.test(e)
      ? t.classList.remove(e)
      : (t.className = t.className.replace(
          new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
          " "
        ));
  }
  function bt(t) {
    var e = void 0 !== window.pageXOffset,
      r = "CSS1Compat" === (t.compatMode || "");
    return {
      x: e ? window.pageXOffset : (r ? t.documentElement : t.body).scrollLeft,
      y: e ? window.pageYOffset : (r ? t.documentElement : t.body).scrollTop,
    };
  }
  function s(t, e) {
    return 100 / (e - t);
  }
  function a(t, e, r) {
    return (100 * e) / (t[r + 1] - t[r]);
  }
  function l(t, e) {
    for (var r = 1; t >= e[r]; ) r += 1;
    return r;
  }
  function r(t, e, r) {
    if (r >= t.slice(-1)[0]) return 100;
    var n = l(r, t),
      i = t[n - 1],
      o = t[n],
      t = e[n - 1],
      n = e[n];
    return (
      t +
      ((r = r),
      a((o = [i, o]), o[0] < 0 ? r + Math.abs(o[0]) : r - o[0], 0) / s(t, n))
    );
  }
  function o(t, e, r, n) {
    if (100 === n) return n;
    var i = l(n, t),
      o = t[i - 1],
      s = t[i];
    return r
      ? (s - o) / 2 < n - o
        ? s
        : o
      : e[i - 1]
      ? t[i - 1] + ((t = n - t[i - 1]), (i = e[i - 1]), Math.round(t / i) * i)
      : n;
  }
  (ut.PipsMode = void 0),
    ((z = ut.PipsMode || (ut.PipsMode = {})).Range = "range"),
    (z.Steps = "steps"),
    (z.Positions = "positions"),
    (z.Count = "count"),
    (z.Values = "values"),
    (ut.PipsType = void 0),
    ((z = ut.PipsType || (ut.PipsType = {}))[(z.None = -1)] = "None"),
    (z[(z.NoValue = 0)] = "NoValue"),
    (z[(z.LargeValue = 1)] = "LargeValue"),
    (z[(z.SmallValue = 2)] = "SmallValue");
  var u =
    ((t.prototype.getDistance = function (t) {
      for (var e = [], r = 0; r < this.xNumSteps.length - 1; r++)
        e[r] = a(this.xVal, t, r);
      return e;
    }),
    (t.prototype.getAbsoluteDistance = function (t, e, r) {
      var n = 0;
      if (t < this.xPct[this.xPct.length - 1])
        for (; t > this.xPct[n + 1]; ) n++;
      else t === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
      r || t !== this.xPct[n + 1] || n++;
      for (
        var i,
          o = 1,
          s = (e = null === e ? [] : e)[n],
          a = 0,
          l = 0,
          u = 0,
          c = r
            ? (t - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
            : (this.xPct[n + 1] - t) / (this.xPct[n + 1] - this.xPct[n]);
        0 < s;

      )
        (i = this.xPct[n + 1 + u] - this.xPct[n + u]),
          100 < e[n + u] * o + 100 - 100 * c
            ? ((a = i * c), (o = (s - 100 * c) / e[n + u]), (c = 1))
            : ((a = ((e[n + u] * i) / 100) * o), (o = 0)),
          r
            ? ((l -= a), 1 <= this.xPct.length + u && u--)
            : ((l += a), 1 <= this.xPct.length - u && u++),
          (s = e[n + u] * o);
      return t + l;
    }),
    (t.prototype.toStepping = function (t) {
      return (t = r(this.xVal, this.xPct, t));
    }),
    (t.prototype.fromStepping = function (t) {
      return (function (t, e, r) {
        if (100 <= r) return t.slice(-1)[0];
        var n = l(r, e),
          i = t[n - 1],
          o = t[n],
          t = e[n - 1],
          n = e[n];
        return ((r - t) * s(t, n) * ((o = [i, o])[1] - o[0])) / 100 + o[0];
      })(this.xVal, this.xPct, t);
    }),
    (t.prototype.getStep = function (t) {
      return (t = o(this.xPct, this.xSteps, this.snap, t));
    }),
    (t.prototype.getDefaultStep = function (t, e, r) {
      var n = l(t, this.xPct);
      return (
        (100 === t || (e && t === this.xPct[n - 1])) &&
          (n = Math.max(n - 1, 1)),
        (this.xVal[n] - this.xVal[n - 1]) / r
      );
    }),
    (t.prototype.getNearbySteps = function (t) {
      t = l(t, this.xPct);
      return {
        stepBefore: {
          startValue: this.xVal[t - 2],
          step: this.xNumSteps[t - 2],
          highestStep: this.xHighestCompleteStep[t - 2],
        },
        thisStep: {
          startValue: this.xVal[t - 1],
          step: this.xNumSteps[t - 1],
          highestStep: this.xHighestCompleteStep[t - 1],
        },
        stepAfter: {
          startValue: this.xVal[t],
          step: this.xNumSteps[t],
          highestStep: this.xHighestCompleteStep[t],
        },
      };
    }),
    (t.prototype.countStepDecimals = function () {
      var t = this.xNumSteps.map(e);
      return Math.max.apply(null, t);
    }),
    (t.prototype.hasNoSize = function () {
      return this.xVal[0] === this.xVal[this.xVal.length - 1];
    }),
    (t.prototype.convert = function (t) {
      return this.getStep(this.toStepping(t));
    }),
    (t.prototype.handleEntryPoint = function (t, e) {
      t = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t);
      if (!i(t) || !i(e[0]))
        throw new Error("noUiSlider: 'range' value isn't numeric.");
      this.xPct.push(t), this.xVal.push(e[0]);
      e = Number(e[1]);
      t ? this.xSteps.push(!isNaN(e) && e) : isNaN(e) || (this.xSteps[0] = e),
        this.xHighestCompleteStep.push(0);
    }),
    (t.prototype.handleStepPoint = function (t, e) {
      e &&
        (this.xVal[t] !== this.xVal[t + 1]
          ? ((this.xSteps[t] =
              a([this.xVal[t], this.xVal[t + 1]], e, 0) /
              s(this.xPct[t], this.xPct[t + 1])),
            (e = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t]),
            (e = Math.ceil(Number(e.toFixed(3)) - 1)),
            (e = this.xVal[t] + this.xNumSteps[t] * e),
            (this.xHighestCompleteStep[t] = e))
          : (this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t]));
    }),
    t);
  function t(e, t, r) {
    var n;
    (this.xPct = []),
      (this.xVal = []),
      (this.xSteps = []),
      (this.xNumSteps = []),
      (this.xHighestCompleteStep = []),
      (this.xSteps = [r || !1]),
      (this.xNumSteps = [!1]),
      (this.snap = t);
    var i = [];
    for (
      Object.keys(e).forEach(function (t) {
        i.push([mt(e[t]), t]);
      }),
        i.sort(function (t, e) {
          return t[0][0] - e[0][0];
        }),
        n = 0;
      n < i.length;
      n++
    )
      this.handleEntryPoint(i[n][1], i[n][0]);
    for (
      this.xNumSteps = this.xSteps.slice(0), n = 0;
      n < this.xNumSteps.length;
      n++
    )
      this.handleStepPoint(n, this.xNumSteps[n]);
  }
  var c = {
      to: function (t) {
        return void 0 === t ? "" : t.toFixed(2);
      },
      from: Number,
    },
    p = {
      target: "target",
      base: "base",
      origin: "origin",
      handle: "handle",
      handleLower: "handle-lower",
      handleUpper: "handle-upper",
      touchArea: "touch-area",
      horizontal: "horizontal",
      vertical: "vertical",
      background: "background",
      connect: "connect",
      connects: "connects",
      ltr: "ltr",
      rtl: "rtl",
      textDirectionLtr: "txt-dir-ltr",
      textDirectionRtl: "txt-dir-rtl",
      draggable: "draggable",
      drag: "state-drag",
      tap: "state-tap",
      active: "active",
      tooltip: "tooltip",
      pips: "pips",
      pipsHorizontal: "pips-horizontal",
      pipsVertical: "pips-vertical",
      marker: "marker",
      markerHorizontal: "marker-horizontal",
      markerVertical: "marker-vertical",
      markerNormal: "marker-normal",
      markerLarge: "marker-large",
      markerSub: "marker-sub",
      value: "value",
      valueHorizontal: "value-horizontal",
      valueVertical: "value-vertical",
      valueNormal: "value-normal",
      valueLarge: "value-large",
      valueSub: "value-sub",
    },
    St = { tooltips: ".__tooltips", aria: ".__aria" };
  function f(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'step' is not numeric.");
    t.singleStep = e;
  }
  function d(t, e) {
    if (!i(e))
      throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    t.keyboardPageMultiplier = e;
  }
  function h(t, e) {
    if (!i(e))
      throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    t.keyboardMultiplier = e;
  }
  function m(t, e) {
    if (!i(e))
      throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    t.keyboardDefaultStep = e;
  }
  function g(t, e) {
    if ("object" != typeof e || Array.isArray(e))
      throw new Error("noUiSlider: 'range' is not an object.");
    if (void 0 === e.min || void 0 === e.max)
      throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    t.spectrum = new u(e, t.snap || !1, t.singleStep);
  }
  function v(t, e) {
    if (((e = mt(e)), !Array.isArray(e) || !e.length))
      throw new Error("noUiSlider: 'start' option is incorrect.");
    (t.handles = e.length), (t.start = e);
  }
  function b(t, e) {
    if ("boolean" != typeof e)
      throw new Error("noUiSlider: 'snap' option must be a boolean.");
    t.snap = e;
  }
  function S(t, e) {
    if ("boolean" != typeof e)
      throw new Error("noUiSlider: 'animate' option must be a boolean.");
    t.animate = e;
  }
  function x(t, e) {
    if ("number" != typeof e)
      throw new Error(
        "noUiSlider: 'animationDuration' option must be a number."
      );
    t.animationDuration = e;
  }
  function xt(t, e) {
    var r,
      n = [!1];
    if (
      ("lower" === e ? (e = [!0, !1]) : "upper" === e && (e = [!1, !0]),
      !0 === e || !1 === e)
    ) {
      for (r = 1; r < t.handles; r++) n.push(e);
      n.push(!1);
    } else {
      if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
        throw new Error(
          "noUiSlider: 'connect' option doesn't match handle count."
        );
      n = e;
    }
    t.connect = n;
  }
  function y(t, e) {
    switch (e) {
      case "horizontal":
        t.ort = 0;
        break;
      case "vertical":
        t.ort = 1;
        break;
      default:
        throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
  }
  function w(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
    0 !== e && (t.margin = t.spectrum.getDistance(e));
  }
  function E(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
    if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2))
      throw new Error(
        "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
      );
  }
  function P(t, e) {
    var r;
    if (!i(e) && !Array.isArray(e))
      throw new Error(
        "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
      );
    if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1]))
      throw new Error(
        "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
      );
    if (0 !== e) {
      for (
        Array.isArray(e) || (e = [e, e]),
          t.padding = [
            t.spectrum.getDistance(e[0]),
            t.spectrum.getDistance(e[1]),
          ],
          r = 0;
        r < t.spectrum.xNumSteps.length - 1;
        r++
      )
        if (t.padding[0][r] < 0 || t.padding[1][r] < 0)
          throw new Error(
            "noUiSlider: 'padding' option must be a positive number(s)."
          );
      var n = e[0] + e[1],
        e = t.spectrum.xVal[0];
      if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - e))
        throw new Error(
          "noUiSlider: 'padding' option must not exceed 100% of the range."
        );
    }
  }
  function C(t, e) {
    switch (e) {
      case "ltr":
        t.dir = 0;
        break;
      case "rtl":
        t.dir = 1;
        break;
      default:
        throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
  }
  function N(t, e) {
    if ("string" != typeof e)
      throw new Error(
        "noUiSlider: 'behaviour' must be a string containing options."
      );
    var r = 0 <= e.indexOf("tap"),
      n = 0 <= e.indexOf("drag"),
      i = 0 <= e.indexOf("fixed"),
      o = 0 <= e.indexOf("snap"),
      s = 0 <= e.indexOf("hover"),
      a = 0 <= e.indexOf("unconstrained"),
      l = 0 <= e.indexOf("invert-connects"),
      u = 0 <= e.indexOf("drag-all"),
      e = 0 <= e.indexOf("smooth-steps");
    if (i) {
      if (2 !== t.handles)
        throw new Error(
          "noUiSlider: 'fixed' behaviour must be used with 2 handles"
        );
      w(t, t.start[1] - t.start[0]);
    }
    if (l && 2 !== t.handles)
      throw new Error(
        "noUiSlider: 'invert-connects' behaviour must be used with 2 handles"
      );
    if (a && (t.margin || t.limit))
      throw new Error(
        "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
      );
    t.events = {
      tap: r || o,
      drag: n,
      dragAll: u,
      smoothSteps: e,
      fixed: i,
      snap: o,
      hover: s,
      unconstrained: a,
      invertConnects: l,
    };
  }
  function V(t, e) {
    if (!1 !== e)
      if (!0 === e || n(e)) {
        t.tooltips = [];
        for (var r = 0; r < t.handles; r++) t.tooltips.push(e);
      } else {
        if ((e = mt(e)).length !== t.handles)
          throw new Error("noUiSlider: must pass a formatter for all handles.");
        e.forEach(function (t) {
          if ("boolean" != typeof t && !n(t))
            throw new Error(
              "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
            );
        }),
          (t.tooltips = e);
      }
  }
  function A(t, e) {
    if (e.length !== t.handles)
      throw new Error("noUiSlider: must pass a attributes for all handles.");
    t.handleAttributes = e;
  }
  function k(t, e) {
    if (!n(e))
      throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    t.ariaFormat = e;
  }
  function M(t, e) {
    if (!n((r = e)) || "function" != typeof r.from)
      throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    var r;
    t.format = e;
  }
  function U(t, e) {
    if ("boolean" != typeof e)
      throw new Error(
        "noUiSlider: 'keyboardSupport' option must be a boolean."
      );
    t.keyboardSupport = e;
  }
  function D(t, e) {
    t.documentElement = e;
  }
  function O(t, e) {
    if ("string" != typeof e && !1 !== e)
      throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    t.cssPrefix = e;
  }
  function L(e, r) {
    if ("object" != typeof r)
      throw new Error("noUiSlider: 'cssClasses' must be an object.");
    "string" == typeof e.cssPrefix
      ? ((e.cssClasses = {}),
        Object.keys(r).forEach(function (t) {
          e.cssClasses[t] = e.cssPrefix + r[t];
        }))
      : (e.cssClasses = r);
  }
  function yt(e) {
    var r = {
        margin: null,
        limit: null,
        padding: null,
        animate: !0,
        animationDuration: 300,
        ariaFormat: c,
        format: c,
      },
      n = {
        step: { r: !1, t: f },
        keyboardPageMultiplier: { r: !1, t: d },
        keyboardMultiplier: { r: !1, t: h },
        keyboardDefaultStep: { r: !1, t: m },
        start: { r: !0, t: v },
        connect: { r: !0, t: xt },
        direction: { r: !0, t: C },
        snap: { r: !1, t: b },
        animate: { r: !1, t: S },
        animationDuration: { r: !1, t: x },
        range: { r: !0, t: g },
        orientation: { r: !1, t: y },
        margin: { r: !1, t: w },
        limit: { r: !1, t: E },
        padding: { r: !1, t: P },
        behaviour: { r: !0, t: N },
        ariaFormat: { r: !1, t: k },
        format: { r: !1, t: M },
        tooltips: { r: !1, t: V },
        keyboardSupport: { r: !0, t: U },
        documentElement: { r: !1, t: D },
        cssPrefix: { r: !0, t: O },
        cssClasses: { r: !0, t: L },
        handleAttributes: { r: !1, t: A },
      },
      i = {
        connect: !1,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: !0,
        cssPrefix: "noUi-",
        cssClasses: p,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
      };
    e.format && !e.ariaFormat && (e.ariaFormat = e.format),
      Object.keys(n).forEach(function (t) {
        if (pt(e[t]) || void 0 !== i[t]) n[t].t(r, (pt(e[t]) ? e : i)[t]);
        else if (n[t].r)
          throw new Error("noUiSlider: '" + t + "' is required.");
      }),
      (r.pips = e.pips);
    var t = document.createElement("div"),
      o = void 0 !== t.style.msTransform,
      t = void 0 !== t.style.transform;
    r.transformRule = t ? "transform" : o ? "msTransform" : "webkitTransform";
    return (
      (r.style = [
        ["left", "top"],
        ["right", "bottom"],
      ][r.dir][r.ort]),
      r
    );
  }
  function T(t, f, o) {
    var i,
      n,
      l,
      u,
      s,
      a,
      c = window.navigator.pointerEnabled
        ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
        : window.navigator.msPointerEnabled
        ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
        : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend",
          },
      p =
        window.CSS &&
        CSS.supports &&
        CSS.supports("touch-action", "none") &&
        (function () {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
            window.addEventListener("test", null, e);
          } catch (t) {}
          return t;
        })(),
      d = t,
      S = f.spectrum,
      h = [],
      m = [],
      g = [],
      v = 0,
      b = {},
      x = !1,
      y = t.ownerDocument,
      w = f.documentElement || y.documentElement,
      E = y.body,
      r = "rtl" === y.dir || 1 === f.ort ? 0 : 100;
    function P(t, e) {
      var r = y.createElement("div");
      return e && gt(r, e), t.appendChild(r), r;
    }
    function C(t, e) {
      var r,
        t = P(t, f.cssClasses.origin),
        n = P(t, f.cssClasses.handle);
      return (
        P(n, f.cssClasses.touchArea),
        n.setAttribute("data-handle", String(e)),
        f.keyboardSupport &&
          (n.setAttribute("tabindex", "0"),
          n.addEventListener("keydown", function (t) {
            return (function (t, e) {
              if (V() || A(e)) return !1;
              var r = ["Left", "Right"],
                n = ["Down", "Up"],
                i = ["PageDown", "PageUp"],
                o = ["Home", "End"];
              f.dir && !f.ort
                ? r.reverse()
                : f.ort && !f.dir && (n.reverse(), i.reverse());
              var s = t.key.replace("Arrow", ""),
                a = s === i[0],
                l = s === i[1],
                i = s === n[0] || s === r[0] || a,
                n = s === n[1] || s === r[1] || l,
                r = s === o[0],
                o = s === o[1];
              if (!(i || n || r || o)) return !0;
              if ((t.preventDefault(), n || i)) {
                var u = i ? 0 : 1,
                  u = st(e)[u];
                if (null === u) return !1;
                !1 === u &&
                  (u = S.getDefaultStep(m[e], i, f.keyboardDefaultStep)),
                  (u *=
                    l || a ? f.keyboardPageMultiplier : f.keyboardMultiplier),
                  (u = Math.max(u, 1e-7)),
                  (u *= i ? -1 : 1),
                  (u = h[e] + u);
              } else u = o ? f.spectrum.xVal[f.spectrum.xVal.length - 1] : f.spectrum.xVal[0];
              return (
                et(e, S.toStepping(u), !0, !0),
                $("slide", e),
                $("update", e),
                $("change", e),
                $("set", e),
                !1
              );
            })(t, e);
          })),
        void 0 !== f.handleAttributes &&
          ((r = f.handleAttributes[e]),
          Object.keys(r).forEach(function (t) {
            n.setAttribute(t, r[t]);
          })),
        n.setAttribute("role", "slider"),
        n.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"),
        0 === e
          ? gt(n, f.cssClasses.handleLower)
          : e === f.handles - 1 && gt(n, f.cssClasses.handleUpper),
        (t.handle = n),
        t
      );
    }
    function N(t, e) {
      return !!e && P(t, f.cssClasses.connect);
    }
    function e(t, e) {
      return (
        !(!f.tooltips || !f.tooltips[e]) &&
        P(t.firstChild, f.cssClasses.tooltip)
      );
    }
    function V() {
      return d.hasAttribute("disabled");
    }
    function A(t) {
      return l[t].hasAttribute("disabled");
    }
    function k() {
      a &&
        (W("update" + St.tooltips),
        a.forEach(function (t) {
          t && ct(t);
        }),
        (a = null));
    }
    function M() {
      k(),
        (a = l.map(e)),
        I("update" + St.tooltips, function (t, e, r) {
          a &&
            f.tooltips &&
            !1 !== a[e] &&
            ((t = t[e]),
            !0 !== f.tooltips[e] && (t = f.tooltips[e].to(r[e])),
            (a[e].innerHTML = t));
        });
    }
    function U(t, e) {
      return t.map(function (t) {
        return S.fromStepping(e ? S.getStep(t) : t);
      });
    }
    function D(d) {
      var h = (function (t) {
          if (t.mode === ut.PipsMode.Range || t.mode === ut.PipsMode.Steps)
            return S.xVal;
          if (t.mode !== ut.PipsMode.Count)
            return t.mode === ut.PipsMode.Positions
              ? U(t.values, t.stepped)
              : t.mode === ut.PipsMode.Values
              ? t.stepped
                ? t.values.map(function (t) {
                    return S.fromStepping(S.getStep(S.toStepping(t)));
                  })
                : t.values
              : [];
          if (t.values < 2)
            throw new Error(
              "noUiSlider: 'values' (>= 2) required for mode 'count'."
            );
          for (var e = t.values - 1, r = 100 / e, n = []; e--; ) n[e] = e * r;
          return n.push(100), U(n, t.stepped);
        })(d),
        m = {},
        t = S.xVal[0],
        e = S.xVal[S.xVal.length - 1],
        g = !1,
        v = !1,
        b = 0;
      return (
        (h = h
          .slice()
          .sort(function (t, e) {
            return t - e;
          })
          .filter(function (t) {
            return !this[t] && (this[t] = !0);
          }, {}))[0] !== t && (h.unshift(t), (g = !0)),
        h[h.length - 1] !== e && (h.push(e), (v = !0)),
        h.forEach(function (t, e) {
          var r,
            n,
            i,
            o,
            s,
            a,
            l,
            u,
            t = t,
            c = h[e + 1],
            p = d.mode === ut.PipsMode.Steps,
            f = (f = p ? S.xNumSteps[e] : f) || c - t;
          for (
            void 0 === c && (c = t), f = Math.max(f, 1e-7), r = t;
            r <= c;
            r = Number((r + f).toFixed(7))
          ) {
            for (
              a = (o = (i = S.toStepping(r)) - b) / (d.density || 1),
                u = o / (l = Math.round(a)),
                n = 1;
              n <= l;
              n += 1
            )
              m[(s = b + n * u).toFixed(5)] = [S.fromStepping(s), 0];
            (a =
              -1 < h.indexOf(r)
                ? ut.PipsType.LargeValue
                : p
                ? ut.PipsType.SmallValue
                : ut.PipsType.NoValue),
              !e && g && r !== c && (a = 0),
              (r === c && v) || (m[i.toFixed(5)] = [r, a]),
              (b = i);
          }
        }),
        m
      );
    }
    function O(i, o, s) {
      var t,
        a = y.createElement("div"),
        n =
          (((t = {})[ut.PipsType.None] = ""),
          (t[ut.PipsType.NoValue] = f.cssClasses.valueNormal),
          (t[ut.PipsType.LargeValue] = f.cssClasses.valueLarge),
          (t[ut.PipsType.SmallValue] = f.cssClasses.valueSub),
          t),
        l =
          (((t = {})[ut.PipsType.None] = ""),
          (t[ut.PipsType.NoValue] = f.cssClasses.markerNormal),
          (t[ut.PipsType.LargeValue] = f.cssClasses.markerLarge),
          (t[ut.PipsType.SmallValue] = f.cssClasses.markerSub),
          t),
        u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical],
        c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];
      function p(t, e) {
        var r = e === f.cssClasses.value;
        return e + " " + (r ? u : c)[f.ort] + " " + (r ? n : l)[t];
      }
      return (
        gt(a, f.cssClasses.pips),
        gt(
          a,
          0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical
        ),
        Object.keys(i).forEach(function (t) {
          var e, r, n;
          (r = i[(e = t)][0]),
            (n = i[t][1]),
            (n = o ? o(r, n) : n) !== ut.PipsType.None &&
              (((t = P(a, !1)).className = p(n, f.cssClasses.marker)),
              (t.style[f.style] = e + "%"),
              n > ut.PipsType.NoValue &&
                (((t = P(a, !1)).className = p(n, f.cssClasses.value)),
                t.setAttribute("data-value", String(r)),
                (t.style[f.style] = e + "%"),
                (t.innerHTML = String(s.to(r)))));
        }),
        a
      );
    }
    function L() {
      s && (ct(s), (s = null));
    }
    function T(t) {
      L();
      var e = D(t),
        r = t.filter,
        t = t.format || {
          to: function (t) {
            return String(Math.round(t));
          },
        };
      return (s = d.appendChild(O(e, r, t)));
    }
    function j() {
      var t = i.getBoundingClientRect(),
        e = "offset" + ["Width", "Height"][f.ort];
      return 0 === f.ort ? t.width || i[e] : t.height || i[e];
    }
    function z(n, i, o, s) {
      function e(t) {
        var e,
          r = (function (e, t, r) {
            var n = 0 === e.type.indexOf("touch"),
              i = 0 === e.type.indexOf("mouse"),
              o = 0 === e.type.indexOf("pointer"),
              s = 0,
              a = 0;
            0 === e.type.indexOf("MSPointer") && (o = !0);
            if ("mousedown" === e.type && !e.buttons && !e.touches) return !1;
            if (n) {
              var l = function (t) {
                t = t.target;
                return (
                  t === r ||
                  r.contains(t) ||
                  (e.composed && e.composedPath().shift() === r)
                );
              };
              if ("touchstart" === e.type) {
                n = Array.prototype.filter.call(e.touches, l);
                if (1 < n.length) return !1;
                (s = n[0].pageX), (a = n[0].pageY);
              } else {
                l = Array.prototype.find.call(e.changedTouches, l);
                if (!l) return !1;
                (s = l.pageX), (a = l.pageY);
              }
            }
            (t = t || bt(y)),
              (i || o) && ((s = e.clientX + t.x), (a = e.clientY + t.y));
            return (
              (e.pageOffset = t), (e.points = [s, a]), (e.cursor = i || o), e
            );
          })(t, s.pageOffset, s.target || i);
        return (
          !!r &&
          !(V() && !s.doNotReject) &&
          ((e = d),
          (t = f.cssClasses.tap),
          !(
            (e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className)) &&
            !s.doNotReject
          ) &&
            !(n === c.start && void 0 !== r.buttons && 1 < r.buttons) &&
            (!s.hover || !r.buttons) &&
            (p || r.preventDefault(),
            (r.calcPoint = r.points[f.ort]),
            void o(r, s)))
        );
      }
      var r = [];
      return (
        n.split(" ").forEach(function (t) {
          i.addEventListener(t, e, !!p && { passive: !0 }), r.push([t, e]);
        }),
        r
      );
    }
    function H(t) {
      var e,
        r,
        n = ht(
          (n =
            (100 *
              (t -
                ((n = i),
                (e = f.ort),
                (r = n.getBoundingClientRect()),
                (n = (t = n.ownerDocument).documentElement),
                (t = bt(t)),
                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) &&
                  (t.x = 0),
                e ? r.top + t.y - n.clientTop : r.left + t.x - n.clientLeft))) /
            j())
        );
      return f.dir ? 100 - n : n;
    }
    function F(t, e) {
      "mouseout" === t.type &&
        "HTML" === t.target.nodeName &&
        null === t.relatedTarget &&
        _(t, e);
    }
    function R(t, e) {
      if (
        -1 === navigator.appVersion.indexOf("MSIE 9") &&
        0 === t.buttons &&
        0 !== e.buttonsProperty
      )
        return _(t, e);
      t = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
      K(0 < t, (100 * t) / e.baseSize, e.locations, e.handleNumbers, e.connect);
    }
    function _(t, e) {
      e.handle && (vt(e.handle, f.cssClasses.active), --v),
        e.listeners.forEach(function (t) {
          w.removeEventListener(t[0], t[1]);
        }),
        0 === v &&
          (vt(d, f.cssClasses.drag),
          tt(),
          t.cursor &&
            ((E.style.cursor = ""), E.removeEventListener("selectstart", ft))),
        f.events.smoothSteps &&
          (e.handleNumbers.forEach(function (t) {
            et(t, m[t], !0, !0, !1, !1);
          }),
          e.handleNumbers.forEach(function (t) {
            $("update", t);
          })),
        e.handleNumbers.forEach(function (t) {
          $("change", t), $("set", t), $("end", t);
        });
    }
    function B(t, e) {
      var r, n, i, o;
      e.handleNumbers.some(A) ||
        (1 === e.handleNumbers.length &&
          ((o = l[e.handleNumbers[0]].children[0]),
          (v += 1),
          gt(o, f.cssClasses.active)),
        t.stopPropagation(),
        (n = z(c.move, w, R, {
          target: t.target,
          handle: o,
          connect: e.connect,
          listeners: (r = []),
          startCalcPoint: t.calcPoint,
          baseSize: j(),
          pageOffset: t.pageOffset,
          handleNumbers: e.handleNumbers,
          buttonsProperty: t.buttons,
          locations: m.slice(),
        })),
        (i = z(c.end, w, _, {
          target: t.target,
          handle: o,
          listeners: r,
          doNotReject: !0,
          handleNumbers: e.handleNumbers,
        })),
        (o = z("mouseout", w, F, {
          target: t.target,
          handle: o,
          listeners: r,
          doNotReject: !0,
          handleNumbers: e.handleNumbers,
        })),
        r.push.apply(r, n.concat(i, o)),
        t.cursor &&
          ((E.style.cursor = getComputedStyle(t.target).cursor),
          1 < l.length && gt(d, f.cssClasses.drag),
          E.addEventListener("selectstart", ft, !1)),
        e.handleNumbers.forEach(function (t) {
          $("start", t);
        }));
    }
    function q(t) {
      t.stopPropagation();
      var i,
        o,
        s,
        e = H(t.calcPoint),
        r =
          ((i = e),
          (s = !(o = 100)),
          l.forEach(function (t, e) {
            var r, n;
            A(e) ||
              ((r = m[e]),
              ((n = Math.abs(r - i)) < o ||
                (n <= o && r < i) ||
                (100 === n && 100 === o)) &&
                ((s = e), (o = n)));
          }),
          s);
      !1 !== r &&
        (f.events.snap || dt(d, f.cssClasses.tap, f.animationDuration),
        et(r, e, !0, !0),
        tt(),
        $("slide", r, !0),
        $("update", r, !0),
        f.events.snap
          ? B(t, { handleNumbers: [r] })
          : ($("change", r, !0), $("set", r, !0)));
    }
    function X(t) {
      var t = H(t.calcPoint),
        t = S.getStep(t),
        e = S.fromStepping(t);
      Object.keys(b).forEach(function (t) {
        "hover" === t.split(".")[0] &&
          b[t].forEach(function (t) {
            t.call(lt, e);
          });
      });
    }
    function Y(a) {
      a.fixed ||
        l.forEach(function (t, e) {
          z(c.start, t.children[0], B, { handleNumbers: [e] });
        }),
        a.tap && z(c.start, i, q, {}),
        a.hover && z(c.move, i, X, { hover: !0 }),
        a.drag &&
          u.forEach(function (e, t) {
            var r, n, i, o, s;
            !1 !== e &&
              0 !== t &&
              t !== u.length - 1 &&
              ((r = l[t - 1]),
              (n = l[t]),
              (i = [e]),
              (o = [r, n]),
              (s = [t - 1, t]),
              gt(e, f.cssClasses.draggable),
              a.fixed && (i.push(r.children[0]), i.push(n.children[0])),
              a.dragAll && ((o = l), (s = g)),
              i.forEach(function (t) {
                z(c.start, t, B, { handles: o, handleNumbers: s, connect: e });
              }));
          });
    }
    function I(t, e) {
      (b[t] = b[t] || []),
        b[t].push(e),
        "update" === t.split(".")[0] &&
          l.forEach(function (t, e) {
            $("update", e);
          });
    }
    function W(t) {
      var n = t && t.split(".")[0],
        i = n ? t.substring(n.length) : t;
      Object.keys(b).forEach(function (t) {
        var e = t.split(".")[0],
          r = t.substring(e.length);
        (n && n !== e) ||
          (i && i !== r) ||
          ((((e = r) !== St.aria && e !== St.tooltips) || i === r) &&
            delete b[t]);
      });
    }
    function $(r, n, i) {
      Object.keys(b).forEach(function (t) {
        var e = t.split(".")[0];
        r === e &&
          b[t].forEach(function (t) {
            t.call(
              lt,
              h.map(f.format.to),
              n,
              h.slice(),
              i || !1,
              m.slice(),
              lt
            );
          });
      });
    }
    function G(t, e, r, n, i, o, s) {
      var a;
      return (
        1 < l.length &&
          !f.events.unconstrained &&
          (n &&
            0 < e &&
            ((a = S.getAbsoluteDistance(t[e - 1], f.margin, !1)),
            (r = Math.max(r, a))),
          i &&
            e < l.length - 1 &&
            ((a = S.getAbsoluteDistance(t[e + 1], f.margin, !0)),
            (r = Math.min(r, a)))),
        1 < l.length &&
          f.limit &&
          (n &&
            0 < e &&
            ((a = S.getAbsoluteDistance(t[e - 1], f.limit, !1)),
            (r = Math.min(r, a))),
          i &&
            e < l.length - 1 &&
            ((a = S.getAbsoluteDistance(t[e + 1], f.limit, !0)),
            (r = Math.max(r, a)))),
        f.padding &&
          (0 === e &&
            ((a = S.getAbsoluteDistance(0, f.padding[0], !1)),
            (r = Math.max(r, a))),
          e === l.length - 1 &&
            ((a = S.getAbsoluteDistance(100, f.padding[1], !0)),
            (r = Math.min(r, a)))),
        !((r = ht((r = !s ? S.getStep(r) : r))) === t[e] && !o) && r
      );
    }
    function J(t, e) {
      var r = f.ort;
      return (r ? e : t) + ", " + (r ? t : e);
    }
    function K(t, r, n, e, i) {
      var o = n.slice(),
        s = e[0],
        a = f.events.smoothSteps,
        l = [!t, t],
        u = [t, !t];
      (e = e.slice()),
        t && e.reverse(),
        1 < e.length
          ? e.forEach(function (t, e) {
              e = G(o, t, o[t] + r, l[e], u[e], !1, a);
              !1 === e ? (r = 0) : ((r = e - o[t]), (o[t] = e));
            })
          : (l = u = [!0]);
      var c = !1;
      e.forEach(function (t, e) {
        c = et(t, n[t] + r, l[e], u[e], !1, a) || c;
      }),
        c &&
          (e.forEach(function (t) {
            $("update", t), $("slide", t);
          }),
          null != i && $("drag", s));
    }
    function Q(t, e) {
      return f.dir ? 100 - t - e : t;
    }
    function Z(t, e) {
      (m[t] = e), (h[t] = S.fromStepping(e));
      e = "translate(" + J(Q(e, 0) - r + "%", "0") + ")";
      if (
        ((l[t].style[f.transformRule] = e),
        f.events.invertConnects && 1 < m.length)
      ) {
        e = m.every(function (t, e, r) {
          return 0 === e || t >= r[e - 1];
        });
        if (x !== !e)
          return (
            (x = !x),
            xt(
              f,
              f.connect.map(function (t) {
                return !t;
              })
            ),
            void at()
          );
      }
      rt(t), rt(t + 1), x && (rt(t - 1), rt(t + 2));
    }
    function tt() {
      g.forEach(function (t) {
        var e = 50 < m[t] ? -1 : 1,
          e = 3 + (l.length + e * t);
        l[t].style.zIndex = String(e);
      });
    }
    function et(t, e, r, n, i, o) {
      return !1 !== (e = i ? e : G(m, t, e, r, n, !1, o)) && (Z(t, e), !0);
    }
    function rt(t) {
      var e, r, n;
      u[t] &&
        ((e = m.slice()),
        x &&
          e.sort(function (t, e) {
            return t - e;
          }),
        (n = 100),
        (r =
          "translate(" +
          J(
            Q(
              (r = (r = 0) !== t ? e[t - 1] : r),
              (n = (n = t !== u.length - 1 ? e[t] : n) - r)
            ) + "%",
            "0"
          ) +
          ")"),
        (n = "scale(" + J(n / 100, "1") + ")"),
        (u[t].style[f.transformRule] = r + " " + n));
    }
    function nt(t, e) {
      return null === t || !1 === t || void 0 === t
        ? m[e]
        : ("number" == typeof t && (t = String(t)),
          !1 === (t = !1 !== (t = f.format.from(t)) ? S.toStepping(t) : t) ||
          isNaN(t)
            ? m[e]
            : t);
    }
    function it(t, e, r) {
      var n = mt(t),
        t = void 0 === m[0];
      (e = void 0 === e || e),
        f.animate && !t && dt(d, f.cssClasses.tap, f.animationDuration),
        g.forEach(function (t) {
          et(t, nt(n[t], t), !0, !1, r);
        });
      var i,
        o = 1 === g.length ? 0 : 1;
      for (
        t &&
        S.hasNoSize() &&
        ((r = !0),
        (m[0] = 0),
        1 < g.length &&
          ((i = 100 / (g.length - 1)),
          g.forEach(function (t) {
            m[t] = t * i;
          })));
        o < g.length;
        ++o
      )
        g.forEach(function (t) {
          et(t, m[t], !0, !0, r);
        });
      tt(),
        g.forEach(function (t) {
          $("update", t), null !== n[t] && e && $("set", t);
        });
    }
    function ot(t) {
      if ((t = void 0 === t ? !1 : t))
        return 1 === h.length ? h[0] : h.slice(0);
      t = h.map(f.format.to);
      return 1 === t.length ? t[0] : t;
    }
    function st(t) {
      var e = m[t],
        r = S.getNearbySteps(e),
        n = h[t],
        i = r.thisStep.step,
        t = null;
      if (f.snap)
        return [
          n - r.stepBefore.startValue || null,
          r.stepAfter.startValue - n || null,
        ];
      !1 !== i &&
        n + i > r.stepAfter.startValue &&
        (i = r.stepAfter.startValue - n),
        (t =
          n > r.thisStep.startValue
            ? r.thisStep.step
            : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep),
        100 === e ? (i = null) : 0 === e && (t = null);
      e = S.countStepDecimals();
      return (
        null !== i && !1 !== i && (i = Number(i.toFixed(e))),
        [(t = null !== t && !1 !== t ? Number(t.toFixed(e)) : t), i]
      );
    }
    function at() {
      for (; n.firstChild; ) n.removeChild(n.firstChild);
      for (var t = 0; t <= f.handles; t++) (u[t] = N(n, f.connect[t])), rt(t);
      Y({ drag: f.events.drag, fixed: !0 });
    }
    gt((t = d), f.cssClasses.target),
      0 === f.dir ? gt(t, f.cssClasses.ltr) : gt(t, f.cssClasses.rtl),
      0 === f.ort
        ? gt(t, f.cssClasses.horizontal)
        : gt(t, f.cssClasses.vertical),
      gt(
        t,
        "rtl" === getComputedStyle(t).direction
          ? f.cssClasses.textDirectionRtl
          : f.cssClasses.textDirectionLtr
      ),
      (i = P(t, f.cssClasses.base)),
      (function (t, e) {
        (n = P(e, f.cssClasses.connects)), (l = []), (u = []).push(N(n, t[0]));
        for (var r = 0; r < f.handles; r++)
          l.push(C(e, r)), (g[r] = r), u.push(N(n, t[r + 1]));
      })(f.connect, i),
      Y(f.events),
      it(f.start),
      f.pips && T(f.pips),
      f.tooltips && M(),
      W("update" + St.aria),
      I("update" + St.aria, function (t, e, o, r, s) {
        g.forEach(function (t) {
          var e = l[t],
            r = G(m, t, 0, !0, !0, !0),
            n = G(m, t, 100, !0, !0, !0),
            i = s[t],
            t = String(f.ariaFormat.to(o[t])),
            r = S.fromStepping(r).toFixed(1),
            n = S.fromStepping(n).toFixed(1),
            i = S.fromStepping(i).toFixed(1);
          e.children[0].setAttribute("aria-valuemin", r),
            e.children[0].setAttribute("aria-valuemax", n),
            e.children[0].setAttribute("aria-valuenow", i),
            e.children[0].setAttribute("aria-valuetext", t);
        });
      });
    var lt = {
      destroy: function () {
        for (
          W(St.aria),
            W(St.tooltips),
            Object.keys(f.cssClasses).forEach(function (t) {
              vt(d, f.cssClasses[t]);
            });
          d.firstChild;

        )
          d.removeChild(d.firstChild);
        delete d.noUiSlider;
      },
      steps: function () {
        return g.map(st);
      },
      on: I,
      off: W,
      get: ot,
      set: it,
      setHandle: function (t, e, r, n) {
        if (!(0 <= (t = Number(t)) && t < g.length))
          throw new Error("noUiSlider: invalid handle number, got: " + t);
        et(t, nt(e, t), !0, !0, n), $("update", t), r && $("set", t);
      },
      reset: function (t) {
        it(f.start, t);
      },
      disable: function (t) {
        null != t
          ? (l[t].setAttribute("disabled", ""),
            l[t].handle.removeAttribute("tabindex"))
          : (d.setAttribute("disabled", ""),
            l.forEach(function (t) {
              t.handle.removeAttribute("tabindex");
            }));
      },
      enable: function (t) {
        null != t
          ? (l[t].removeAttribute("disabled"),
            l[t].handle.setAttribute("tabindex", "0"))
          : (d.removeAttribute("disabled"),
            l.forEach(function (t) {
              t.removeAttribute("disabled"),
                t.handle.setAttribute("tabindex", "0");
            }));
      },
      __moveHandles: function (t, e, r) {
        K(t, e, m, r);
      },
      options: o,
      updateOptions: function (e, t) {
        var r = ot(),
          n = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
            "connect",
          ];
        n.forEach(function (t) {
          void 0 !== e[t] && (o[t] = e[t]);
        });
        var i = yt(o);
        n.forEach(function (t) {
          void 0 !== e[t] && (f[t] = i[t]);
        }),
          (S = i.spectrum),
          (f.margin = i.margin),
          (f.limit = i.limit),
          (f.padding = i.padding),
          f.pips ? T(f.pips) : L(),
          (f.tooltips ? M : k)(),
          (m = []),
          it(pt(e.start) ? e.start : r, t),
          e.connect && at();
      },
      target: d,
      removePips: L,
      removeTooltips: k,
      getPositions: function () {
        return m.slice();
      },
      getTooltips: function () {
        return a;
      },
      getOrigins: function () {
        return l;
      },
      pips: T,
    };
    return lt;
  }
  function j(t, e) {
    if (!t || !t.nodeName)
      throw new Error(
        "noUiSlider: create requires a single element, got: " + t
      );
    if (t.noUiSlider)
      throw new Error("noUiSlider: Slider was already initialized.");
    e = T(t, yt(e), e);
    return (t.noUiSlider = e);
  }
  var z = { __spectrum: u, cssClasses: p, create: j };
  (ut.create = j),
    (ut.cssClasses = p),
    (ut.default = z),
    Object.defineProperty(ut, "__esModule", { value: !0 });
});
/**
 * @popperjs/core v2.11.8 - MIT License
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Popper =
          {})
      );
})(this, function (e) {
  "use strict";
  function t(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function n(e) {
    return e instanceof t(e).Element || e instanceof Element;
  }
  function r(e) {
    return e instanceof t(e).HTMLElement || e instanceof HTMLElement;
  }
  function o(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var i = Math.max,
    a = Math.min,
    s = Math.round;
  function f() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function c() {
    return !/^((?!chrome|android).)*safari/i.test(f());
  }
  function p(e, o, i) {
    void 0 === o && (o = !1), void 0 === i && (i = !1);
    var a = e.getBoundingClientRect(),
      f = 1,
      p = 1;
    o &&
      r(e) &&
      ((f = (e.offsetWidth > 0 && s(a.width) / e.offsetWidth) || 1),
      (p = (e.offsetHeight > 0 && s(a.height) / e.offsetHeight) || 1));
    var u = (n(e) ? t(e) : window).visualViewport,
      l = !c() && i,
      d = (a.left + (l && u ? u.offsetLeft : 0)) / f,
      h = (a.top + (l && u ? u.offsetTop : 0)) / p,
      m = a.width / f,
      v = a.height / p;
    return {
      width: m,
      height: v,
      top: h,
      right: d + m,
      bottom: h + v,
      left: d,
      x: d,
      y: h,
    };
  }
  function u(e) {
    var n = t(e);
    return { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
  }
  function l(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function d(e) {
    return (
      (n(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function h(e) {
    return p(d(e)).left + u(e).scrollLeft;
  }
  function m(e) {
    return t(e).getComputedStyle(e);
  }
  function v(e) {
    var t = m(e),
      n = t.overflow,
      r = t.overflowX,
      o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function y(e, n, o) {
    void 0 === o && (o = !1);
    var i,
      a,
      f = r(n),
      c =
        r(n) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            n = s(t.width) / e.offsetWidth || 1,
            r = s(t.height) / e.offsetHeight || 1;
          return 1 !== n || 1 !== r;
        })(n),
      m = d(n),
      y = p(e, c, o),
      g = { scrollLeft: 0, scrollTop: 0 },
      b = { x: 0, y: 0 };
    return (
      (f || (!f && !o)) &&
        (("body" !== l(n) || v(m)) &&
          (g =
            (i = n) !== t(i) && r(i)
              ? { scrollLeft: (a = i).scrollLeft, scrollTop: a.scrollTop }
              : u(i)),
        r(n)
          ? (((b = p(n, !0)).x += n.clientLeft), (b.y += n.clientTop))
          : m && (b.x = h(m))),
      {
        x: y.left + g.scrollLeft - b.x,
        y: y.top + g.scrollTop - b.y,
        width: y.width,
        height: y.height,
      }
    );
  }
  function g(e) {
    var t = p(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
  }
  function b(e) {
    return "html" === l(e)
      ? e
      : e.assignedSlot || e.parentNode || (o(e) ? e.host : null) || d(e);
  }
  function x(e) {
    return ["html", "body", "#document"].indexOf(l(e)) >= 0
      ? e.ownerDocument.body
      : r(e) && v(e)
      ? e
      : x(b(e));
  }
  function w(e, n) {
    var r;
    void 0 === n && (n = []);
    var o = x(e),
      i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
      a = t(o),
      s = i ? [a].concat(a.visualViewport || [], v(o) ? o : []) : o,
      f = n.concat(s);
    return i ? f : f.concat(w(b(s)));
  }
  function O(e) {
    return ["table", "td", "th"].indexOf(l(e)) >= 0;
  }
  function j(e) {
    return r(e) && "fixed" !== m(e).position ? e.offsetParent : null;
  }
  function E(e) {
    for (var n = t(e), i = j(e); i && O(i) && "static" === m(i).position; )
      i = j(i);
    return i &&
      ("html" === l(i) || ("body" === l(i) && "static" === m(i).position))
      ? n
      : i ||
          (function (e) {
            var t = /firefox/i.test(f());
            if (/Trident/i.test(f()) && r(e) && "fixed" === m(e).position)
              return null;
            var n = b(e);
            for (
              o(n) && (n = n.host);
              r(n) && ["html", "body"].indexOf(l(n)) < 0;

            ) {
              var i = m(n);
              if (
                "none" !== i.transform ||
                "none" !== i.perspective ||
                "paint" === i.contain ||
                -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                (t && "filter" === i.willChange) ||
                (t && i.filter && "none" !== i.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          n;
  }
  var D = "top",
    A = "bottom",
    L = "right",
    P = "left",
    M = "auto",
    k = [D, A, L, P],
    W = "start",
    B = "end",
    H = "viewport",
    T = "popper",
    R = k.reduce(function (e, t) {
      return e.concat([t + "-" + W, t + "-" + B]);
    }, []),
    S = [].concat(k, [M]).reduce(function (e, t) {
      return e.concat([t, t + "-" + W, t + "-" + B]);
    }, []),
    V = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function q(e) {
    var t = new Map(),
      n = new Set(),
      r = [];
    function o(e) {
      n.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            if (!n.has(e)) {
              var r = t.get(e);
              r && o(r);
            }
          }),
        r.push(e);
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e);
      }),
      e.forEach(function (e) {
        n.has(e.name) || o(e);
      }),
      r
    );
  }
  function C(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && o(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function N(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function I(e, r, o) {
    return r === H
      ? N(
          (function (e, n) {
            var r = t(e),
              o = d(e),
              i = r.visualViewport,
              a = o.clientWidth,
              s = o.clientHeight,
              f = 0,
              p = 0;
            if (i) {
              (a = i.width), (s = i.height);
              var u = c();
              (u || (!u && "fixed" === n)) &&
                ((f = i.offsetLeft), (p = i.offsetTop));
            }
            return { width: a, height: s, x: f + h(e), y: p };
          })(e, o)
        )
      : n(r)
      ? (function (e, t) {
          var n = p(e, !1, "fixed" === t);
          return (
            (n.top = n.top + e.clientTop),
            (n.left = n.left + e.clientLeft),
            (n.bottom = n.top + e.clientHeight),
            (n.right = n.left + e.clientWidth),
            (n.width = e.clientWidth),
            (n.height = e.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n
          );
        })(r, o)
      : N(
          (function (e) {
            var t,
              n = d(e),
              r = u(e),
              o = null == (t = e.ownerDocument) ? void 0 : t.body,
              a = i(
                n.scrollWidth,
                n.clientWidth,
                o ? o.scrollWidth : 0,
                o ? o.clientWidth : 0
              ),
              s = i(
                n.scrollHeight,
                n.clientHeight,
                o ? o.scrollHeight : 0,
                o ? o.clientHeight : 0
              ),
              f = -r.scrollLeft + h(e),
              c = -r.scrollTop;
            return (
              "rtl" === m(o || n).direction &&
                (f += i(n.clientWidth, o ? o.clientWidth : 0) - a),
              { width: a, height: s, x: f, y: c }
            );
          })(d(e))
        );
  }
  function _(e, t, o, s) {
    var f =
        "clippingParents" === t
          ? (function (e) {
              var t = w(b(e)),
                o =
                  ["absolute", "fixed"].indexOf(m(e).position) >= 0 && r(e)
                    ? E(e)
                    : e;
              return n(o)
                ? t.filter(function (e) {
                    return n(e) && C(e, o) && "body" !== l(e);
                  })
                : [];
            })(e)
          : [].concat(t),
      c = [].concat(f, [o]),
      p = c[0],
      u = c.reduce(function (t, n) {
        var r = I(e, n, s);
        return (
          (t.top = i(r.top, t.top)),
          (t.right = a(r.right, t.right)),
          (t.bottom = a(r.bottom, t.bottom)),
          (t.left = i(r.left, t.left)),
          t
        );
      }, I(e, p, s));
    return (
      (u.width = u.right - u.left),
      (u.height = u.bottom - u.top),
      (u.x = u.left),
      (u.y = u.top),
      u
    );
  }
  function F(e) {
    return e.split("-")[0];
  }
  function U(e) {
    return e.split("-")[1];
  }
  function z(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function X(e) {
    var t,
      n = e.reference,
      r = e.element,
      o = e.placement,
      i = o ? F(o) : null,
      a = o ? U(o) : null,
      s = n.x + n.width / 2 - r.width / 2,
      f = n.y + n.height / 2 - r.height / 2;
    switch (i) {
      case D:
        t = { x: s, y: n.y - r.height };
        break;
      case A:
        t = { x: s, y: n.y + n.height };
        break;
      case L:
        t = { x: n.x + n.width, y: f };
        break;
      case P:
        t = { x: n.x - r.width, y: f };
        break;
      default:
        t = { x: n.x, y: n.y };
    }
    var c = i ? z(i) : null;
    if (null != c) {
      var p = "y" === c ? "height" : "width";
      switch (a) {
        case W:
          t[c] = t[c] - (n[p] / 2 - r[p] / 2);
          break;
        case B:
          t[c] = t[c] + (n[p] / 2 - r[p] / 2);
      }
    }
    return t;
  }
  function Y(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function G(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function J(e, t) {
    void 0 === t && (t = {});
    var r = t,
      o = r.placement,
      i = void 0 === o ? e.placement : o,
      a = r.strategy,
      s = void 0 === a ? e.strategy : a,
      f = r.boundary,
      c = void 0 === f ? "clippingParents" : f,
      u = r.rootBoundary,
      l = void 0 === u ? H : u,
      h = r.elementContext,
      m = void 0 === h ? T : h,
      v = r.altBoundary,
      y = void 0 !== v && v,
      g = r.padding,
      b = void 0 === g ? 0 : g,
      x = Y("number" != typeof b ? b : G(b, k)),
      w = m === T ? "reference" : T,
      O = e.rects.popper,
      j = e.elements[y ? w : m],
      E = _(n(j) ? j : j.contextElement || d(e.elements.popper), c, l, s),
      P = p(e.elements.reference),
      M = X({ reference: P, element: O, strategy: "absolute", placement: i }),
      W = N(Object.assign({}, O, M)),
      B = m === T ? W : P,
      R = {
        top: E.top - B.top + x.top,
        bottom: B.bottom - E.bottom + x.bottom,
        left: E.left - B.left + x.left,
        right: B.right - E.right + x.right,
      },
      S = e.modifiersData.offset;
    if (m === T && S) {
      var V = S[i];
      Object.keys(R).forEach(function (e) {
        var t = [L, A].indexOf(e) >= 0 ? 1 : -1,
          n = [D, A].indexOf(e) >= 0 ? "y" : "x";
        R[e] += V[n] * t;
      });
    }
    return R;
  }
  var K = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Q() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function Z(e) {
    void 0 === e && (e = {});
    var t = e,
      r = t.defaultModifiers,
      o = void 0 === r ? [] : r,
      i = t.defaultOptions,
      a = void 0 === i ? K : i;
    return function (e, t, r) {
      void 0 === r && (r = a);
      var i,
        s,
        f = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, K, a),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        c = [],
        p = !1,
        u = {
          state: f,
          setOptions: function (r) {
            var i = "function" == typeof r ? r(f.options) : r;
            l(),
              (f.options = Object.assign({}, a, f.options, i)),
              (f.scrollParents = {
                reference: n(e)
                  ? w(e)
                  : e.contextElement
                  ? w(e.contextElement)
                  : [],
                popper: w(t),
              });
            var s,
              p,
              d = (function (e) {
                var t = q(e);
                return V.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    })
                  );
                }, []);
              })(
                ((s = [].concat(o, f.options.modifiers)),
                (p = s.reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {})),
                Object.keys(p).map(function (e) {
                  return p[e];
                }))
              );
            return (
              (f.orderedModifiers = d.filter(function (e) {
                return e.enabled;
              })),
              f.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  o = e.effect;
                if ("function" == typeof o) {
                  var i = o({ state: f, name: t, instance: u, options: r }),
                    a = function () {};
                  c.push(i || a);
                }
              }),
              u.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var e = f.elements,
                t = e.reference,
                n = e.popper;
              if (Q(t, n)) {
                (f.rects = {
                  reference: y(t, E(n), "fixed" === f.options.strategy),
                  popper: g(n),
                }),
                  (f.reset = !1),
                  (f.placement = f.options.placement),
                  f.orderedModifiers.forEach(function (e) {
                    return (f.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var r = 0; r < f.orderedModifiers.length; r++)
                  if (!0 !== f.reset) {
                    var o = f.orderedModifiers[r],
                      i = o.fn,
                      a = o.options,
                      s = void 0 === a ? {} : a,
                      c = o.name;
                    "function" == typeof i &&
                      (f =
                        i({ state: f, options: s, name: c, instance: u }) || f);
                  } else (f.reset = !1), (r = -1);
              }
            }
          },
          update:
            ((i = function () {
              return new Promise(function (e) {
                u.forceUpdate(), e(f);
              });
            }),
            function () {
              return (
                s ||
                  (s = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (s = void 0), e(i());
                    });
                  })),
                s
              );
            }),
          destroy: function () {
            l(), (p = !0);
          },
        };
      if (!Q(e, t)) return u;
      function l() {
        c.forEach(function (e) {
          return e();
        }),
          (c = []);
      }
      return (
        u.setOptions(r).then(function (e) {
          !p && r.onFirstUpdate && r.onFirstUpdate(e);
        }),
        u
      );
    };
  }
  var $ = { passive: !0 };
  var ee = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var n = e.state,
        r = e.instance,
        o = e.options,
        i = o.scroll,
        a = void 0 === i || i,
        s = o.resize,
        f = void 0 === s || s,
        c = t(n.elements.popper),
        p = [].concat(n.scrollParents.reference, n.scrollParents.popper);
      return (
        a &&
          p.forEach(function (e) {
            e.addEventListener("scroll", r.update, $);
          }),
        f && c.addEventListener("resize", r.update, $),
        function () {
          a &&
            p.forEach(function (e) {
              e.removeEventListener("scroll", r.update, $);
            }),
            f && c.removeEventListener("resize", r.update, $);
        }
      );
    },
    data: {},
  };
  var te = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state,
          n = e.name;
        t.modifiersData[n] = X({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    },
    ne = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function re(e) {
    var n,
      r = e.popper,
      o = e.popperRect,
      i = e.placement,
      a = e.variation,
      f = e.offsets,
      c = e.position,
      p = e.gpuAcceleration,
      u = e.adaptive,
      l = e.roundOffsets,
      h = e.isFixed,
      v = f.x,
      y = void 0 === v ? 0 : v,
      g = f.y,
      b = void 0 === g ? 0 : g,
      x = "function" == typeof l ? l({ x: y, y: b }) : { x: y, y: b };
    (y = x.x), (b = x.y);
    var w = f.hasOwnProperty("x"),
      O = f.hasOwnProperty("y"),
      j = P,
      M = D,
      k = window;
    if (u) {
      var W = E(r),
        H = "clientHeight",
        T = "clientWidth";
      if (
        (W === t(r) &&
          "static" !== m((W = d(r))).position &&
          "absolute" === c &&
          ((H = "scrollHeight"), (T = "scrollWidth")),
        (W = W),
        i === D || ((i === P || i === L) && a === B))
      )
        (M = A),
          (b -=
            (h && W === k && k.visualViewport
              ? k.visualViewport.height
              : W[H]) - o.height),
          (b *= p ? 1 : -1);
      if (i === P || ((i === D || i === A) && a === B))
        (j = L),
          (y -=
            (h && W === k && k.visualViewport ? k.visualViewport.width : W[T]) -
            o.width),
          (y *= p ? 1 : -1);
    }
    var R,
      S = Object.assign({ position: c }, u && ne),
      V =
        !0 === l
          ? (function (e, t) {
              var n = e.x,
                r = e.y,
                o = t.devicePixelRatio || 1;
              return { x: s(n * o) / o || 0, y: s(r * o) / o || 0 };
            })({ x: y, y: b }, t(r))
          : { x: y, y: b };
    return (
      (y = V.x),
      (b = V.y),
      p
        ? Object.assign(
            {},
            S,
            (((R = {})[M] = O ? "0" : ""),
            (R[j] = w ? "0" : ""),
            (R.transform =
              (k.devicePixelRatio || 1) <= 1
                ? "translate(" + y + "px, " + b + "px)"
                : "translate3d(" + y + "px, " + b + "px, 0)"),
            R)
          )
        : Object.assign(
            {},
            S,
            (((n = {})[M] = O ? b + "px" : ""),
            (n[j] = w ? y + "px" : ""),
            (n.transform = ""),
            n)
          )
    );
  }
  var oe = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        o = void 0 === r || r,
        i = n.adaptive,
        a = void 0 === i || i,
        s = n.roundOffsets,
        f = void 0 === s || s,
        c = {
          placement: F(t.placement),
          variation: U(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: o,
          isFixed: "fixed" === t.options.strategy,
        };
      null != t.modifiersData.popperOffsets &&
        (t.styles.popper = Object.assign(
          {},
          t.styles.popper,
          re(
            Object.assign({}, c, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: a,
              roundOffsets: f,
            })
          )
        )),
        null != t.modifiersData.arrow &&
          (t.styles.arrow = Object.assign(
            {},
            t.styles.arrow,
            re(
              Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: f,
              })
            )
          )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-placement": t.placement,
        }));
    },
    data: {},
  };
  var ie = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
          o = t.attributes[e] || {},
          i = t.elements[e];
        r(i) &&
          l(i) &&
          (Object.assign(i.style, n),
          Object.keys(o).forEach(function (e) {
            var t = o[e];
            !1 === t
              ? i.removeAttribute(e)
              : i.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var o = t.elements[e],
              i = t.attributes[e] || {},
              a = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            r(o) &&
              l(o) &&
              (Object.assign(o.style, a),
              Object.keys(i).forEach(function (e) {
                o.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  var ae = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.options,
          r = e.name,
          o = n.offset,
          i = void 0 === o ? [0, 0] : o,
          a = S.reduce(function (e, n) {
            return (
              (e[n] = (function (e, t, n) {
                var r = F(e),
                  o = [P, D].indexOf(r) >= 0 ? -1 : 1,
                  i =
                    "function" == typeof n
                      ? n(Object.assign({}, t, { placement: e }))
                      : n,
                  a = i[0],
                  s = i[1];
                return (
                  (a = a || 0),
                  (s = (s || 0) * o),
                  [P, L].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                );
              })(n, t.rects, i)),
              e
            );
          }, {}),
          s = a[t.placement],
          f = s.x,
          c = s.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += f),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[r] = a);
      },
    },
    se = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function fe(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return se[e];
    });
  }
  var ce = { start: "end", end: "start" };
  function pe(e) {
    return e.replace(/start|end/g, function (e) {
      return ce[e];
    });
  }
  function ue(e, t) {
    void 0 === t && (t = {});
    var n = t,
      r = n.placement,
      o = n.boundary,
      i = n.rootBoundary,
      a = n.padding,
      s = n.flipVariations,
      f = n.allowedAutoPlacements,
      c = void 0 === f ? S : f,
      p = U(r),
      u = p
        ? s
          ? R
          : R.filter(function (e) {
              return U(e) === p;
            })
        : k,
      l = u.filter(function (e) {
        return c.indexOf(e) >= 0;
      });
    0 === l.length && (l = u);
    var d = l.reduce(function (t, n) {
      return (
        (t[n] = J(e, {
          placement: n,
          boundary: o,
          rootBoundary: i,
          padding: a,
        })[F(n)]),
        t
      );
    }, {});
    return Object.keys(d).sort(function (e, t) {
      return d[e] - d[t];
    });
  }
  var le = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name;
      if (!t.modifiersData[r]._skip) {
        for (
          var o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 === a || a,
            f = n.fallbackPlacements,
            c = n.padding,
            p = n.boundary,
            u = n.rootBoundary,
            l = n.altBoundary,
            d = n.flipVariations,
            h = void 0 === d || d,
            m = n.allowedAutoPlacements,
            v = t.options.placement,
            y = F(v),
            g =
              f ||
              (y === v || !h
                ? [fe(v)]
                : (function (e) {
                    if (F(e) === M) return [];
                    var t = fe(e);
                    return [pe(e), t, pe(t)];
                  })(v)),
            b = [v].concat(g).reduce(function (e, n) {
              return e.concat(
                F(n) === M
                  ? ue(t, {
                      placement: n,
                      boundary: p,
                      rootBoundary: u,
                      padding: c,
                      flipVariations: h,
                      allowedAutoPlacements: m,
                    })
                  : n
              );
            }, []),
            x = t.rects.reference,
            w = t.rects.popper,
            O = new Map(),
            j = !0,
            E = b[0],
            k = 0;
          k < b.length;
          k++
        ) {
          var B = b[k],
            H = F(B),
            T = U(B) === W,
            R = [D, A].indexOf(H) >= 0,
            S = R ? "width" : "height",
            V = J(t, {
              placement: B,
              boundary: p,
              rootBoundary: u,
              altBoundary: l,
              padding: c,
            }),
            q = R ? (T ? L : P) : T ? A : D;
          x[S] > w[S] && (q = fe(q));
          var C = fe(q),
            N = [];
          if (
            (i && N.push(V[H] <= 0),
            s && N.push(V[q] <= 0, V[C] <= 0),
            N.every(function (e) {
              return e;
            }))
          ) {
            (E = B), (j = !1);
            break;
          }
          O.set(B, N);
        }
        if (j)
          for (
            var I = function (e) {
                var t = b.find(function (t) {
                  var n = O.get(t);
                  if (n)
                    return n.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (E = t), "break";
              },
              _ = h ? 3 : 1;
            _ > 0;
            _--
          ) {
            if ("break" === I(_)) break;
          }
        t.placement !== E &&
          ((t.modifiersData[r]._skip = !0), (t.placement = E), (t.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function de(e, t, n) {
    return i(e, a(t, n));
  }
  var he = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name,
        o = n.mainAxis,
        s = void 0 === o || o,
        f = n.altAxis,
        c = void 0 !== f && f,
        p = n.boundary,
        u = n.rootBoundary,
        l = n.altBoundary,
        d = n.padding,
        h = n.tether,
        m = void 0 === h || h,
        v = n.tetherOffset,
        y = void 0 === v ? 0 : v,
        b = J(t, { boundary: p, rootBoundary: u, padding: d, altBoundary: l }),
        x = F(t.placement),
        w = U(t.placement),
        O = !w,
        j = z(x),
        M = "x" === j ? "y" : "x",
        k = t.modifiersData.popperOffsets,
        B = t.rects.reference,
        H = t.rects.popper,
        T =
          "function" == typeof y
            ? y(Object.assign({}, t.rects, { placement: t.placement }))
            : y,
        R =
          "number" == typeof T
            ? { mainAxis: T, altAxis: T }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
        S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        V = { x: 0, y: 0 };
      if (k) {
        if (s) {
          var q,
            C = "y" === j ? D : P,
            N = "y" === j ? A : L,
            I = "y" === j ? "height" : "width",
            _ = k[j],
            X = _ + b[C],
            Y = _ - b[N],
            G = m ? -H[I] / 2 : 0,
            K = w === W ? B[I] : H[I],
            Q = w === W ? -H[I] : -B[I],
            Z = t.elements.arrow,
            $ = m && Z ? g(Z) : { width: 0, height: 0 },
            ee = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            te = ee[C],
            ne = ee[N],
            re = de(0, B[I], $[I]),
            oe = O
              ? B[I] / 2 - G - re - te - R.mainAxis
              : K - re - te - R.mainAxis,
            ie = O
              ? -B[I] / 2 + G + re + ne + R.mainAxis
              : Q + re + ne + R.mainAxis,
            ae = t.elements.arrow && E(t.elements.arrow),
            se = ae ? ("y" === j ? ae.clientTop || 0 : ae.clientLeft || 0) : 0,
            fe = null != (q = null == S ? void 0 : S[j]) ? q : 0,
            ce = _ + ie - fe,
            pe = de(m ? a(X, _ + oe - fe - se) : X, _, m ? i(Y, ce) : Y);
          (k[j] = pe), (V[j] = pe - _);
        }
        if (c) {
          var ue,
            le = "x" === j ? D : P,
            he = "x" === j ? A : L,
            me = k[M],
            ve = "y" === M ? "height" : "width",
            ye = me + b[le],
            ge = me - b[he],
            be = -1 !== [D, P].indexOf(x),
            xe = null != (ue = null == S ? void 0 : S[M]) ? ue : 0,
            we = be ? ye : me - B[ve] - H[ve] - xe + R.altAxis,
            Oe = be ? me + B[ve] + H[ve] - xe - R.altAxis : ge,
            je =
              m && be
                ? (function (e, t, n) {
                    var r = de(e, t, n);
                    return r > n ? n : r;
                  })(we, me, Oe)
                : de(m ? we : ye, me, m ? Oe : ge);
          (k[M] = je), (V[M] = je - me);
        }
        t.modifiersData[r] = V;
      }
    },
    requiresIfExists: ["offset"],
  };
  var me = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        n = e.state,
        r = e.name,
        o = e.options,
        i = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        s = F(n.placement),
        f = z(s),
        c = [P, L].indexOf(s) >= 0 ? "height" : "width";
      if (i && a) {
        var p = (function (e, t) {
            return Y(
              "number" !=
                typeof (e =
                  "function" == typeof e
                    ? e(Object.assign({}, t.rects, { placement: t.placement }))
                    : e)
                ? e
                : G(e, k)
            );
          })(o.padding, n),
          u = g(i),
          l = "y" === f ? D : P,
          d = "y" === f ? A : L,
          h =
            n.rects.reference[c] +
            n.rects.reference[f] -
            a[f] -
            n.rects.popper[c],
          m = a[f] - n.rects.reference[f],
          v = E(i),
          y = v ? ("y" === f ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
          b = h / 2 - m / 2,
          x = p[l],
          w = y - u[c] - p[d],
          O = y / 2 - u[c] / 2 + b,
          j = de(x, O, w),
          M = f;
        n.modifiersData[r] = (((t = {})[M] = j), (t.centerOffset = j - O), t);
      }
    },
    effect: function (e) {
      var t = e.state,
        n = e.options.element,
        r = void 0 === n ? "[data-popper-arrow]" : n;
      null != r &&
        ("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
        C(t.elements.popper, r) &&
        (t.elements.arrow = r);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function ve(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function ye(e) {
    return [D, L, A, P].some(function (t) {
      return e[t] >= 0;
    });
  }
  var ge = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          r = t.rects.reference,
          o = t.rects.popper,
          i = t.modifiersData.preventOverflow,
          a = J(t, { elementContext: "reference" }),
          s = J(t, { altBoundary: !0 }),
          f = ve(a, r),
          c = ve(s, o, i),
          p = ye(f),
          u = ye(c);
        (t.modifiersData[n] = {
          referenceClippingOffsets: f,
          popperEscapeOffsets: c,
          isReferenceHidden: p,
          hasPopperEscaped: u,
        }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": p,
            "data-popper-escaped": u,
          }));
      },
    },
    be = Z({ defaultModifiers: [ee, te, oe, ie] }),
    xe = [ee, te, oe, ie, ae, le, he, me, ge],
    we = Z({ defaultModifiers: xe });
  (e.applyStyles = ie),
    (e.arrow = me),
    (e.computeStyles = oe),
    (e.createPopper = we),
    (e.createPopperLite = be),
    (e.defaultModifiers = xe),
    (e.detectOverflow = J),
    (e.eventListeners = ee),
    (e.flip = le),
    (e.hide = ge),
    (e.offset = ae),
    (e.popperGenerator = Z),
    (e.popperOffsets = te),
    (e.preventOverflow = he),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=popper.min.js.map
/**!
 * tippy.js v6.3.7
 * (c) 2017-2021 atomiks
 * MIT License
 */
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory(require("@popperjs/core")))
    : typeof define === "function" && define.amd
    ? define(["@popperjs/core"], factory)
    : ((global = global || self), (global.tippy = factory(global.Popper)));
})(this, function (core) {
  "use strict";

  var css =
    '.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}';

  function injectCSS(css) {
    var style = document.createElement("style");
    style.textContent = css;
    style.setAttribute("data-tippy-stylesheet", "");
    var head = document.head;
    var firstStyleOrLinkTag = document.querySelector("head>style,head>link");

    if (firstStyleOrLinkTag) {
      head.insertBefore(style, firstStyleOrLinkTag);
    } else {
      head.appendChild(style);
    }
  }

  var isBrowser =
    typeof window !== "undefined" && typeof document !== "undefined";
  var isIE11 = isBrowser // @ts-ignore
    ? !!window.msCrypto
    : false;

  var ROUND_ARROW =
    '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
  var BOX_CLASS = "tippy-box";
  var CONTENT_CLASS = "tippy-content";
  var BACKDROP_CLASS = "tippy-backdrop";
  var ARROW_CLASS = "tippy-arrow";
  var SVG_ARROW_CLASS = "tippy-svg-arrow";
  var TOUCH_OPTIONS = {
    passive: true,
    capture: true,
  };
  var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
  };

  function hasOwnProperty(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v = value[index];
      return v == null
        ? Array.isArray(defaultValue)
          ? defaultValue[index]
          : defaultValue
        : v;
    }

    return value;
  }
  function isType(value, type) {
    var str = {}.toString.call(value);
    return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
  }
  function invokeWithArgsOrReturn(value, args) {
    return typeof value === "function" ? value.apply(void 0, args) : value;
  }
  function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) {
      return fn;
    }

    var timeout;
    return function (arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn(arg);
      }, ms);
    };
  }
  function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function (key) {
      delete clone[key];
    });
    return clone;
  }
  function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
  }
  function normalizeToArray(value) {
    return [].concat(value);
  }
  function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  function unique(arr) {
    return arr.filter(function (item, index) {
      return arr.indexOf(item) === index;
    });
  }
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  function arrayFrom(value) {
    return [].slice.call(value);
  }
  function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }

      return acc;
    }, {});
  }

  function div() {
    return document.createElement("div");
  }
  function isElement(value) {
    return ["Element", "Fragment"].some(function (type) {
      return isType(value, type);
    });
  }
  function isNodeList(value) {
    return isType(value, "NodeList");
  }
  function isMouseEvent(value) {
    return isType(value, "MouseEvent");
  }
  function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
  }
  function getArrayOfElements(value) {
    if (isElement(value)) {
      return [value];
    }

    if (isNodeList(value)) {
      return arrayFrom(value);
    }

    if (Array.isArray(value)) {
      return value;
    }

    return arrayFrom(document.querySelectorAll(value));
  }
  function setTransitionDuration(els, value) {
    els.forEach(function (el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  function setVisibilityState(els, state) {
    els.forEach(function (el) {
      if (el) {
        el.setAttribute("data-state", state);
      }
    });
  }
  function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;

    var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body

    return element != null &&
      (_element$ownerDocumen = element.ownerDocument) != null &&
      _element$ownerDocumen.body
      ? element.ownerDocument
      : document;
  }
  function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX,
      clientY = event.clientY;
    return popperTreeData.every(function (_ref) {
      var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
      var interactiveBorder = props.interactiveBorder;
      var basePlacement = getBasePlacement(popperState.placement);
      var offsetData = popperState.modifiersData.offset;

      if (!offsetData) {
        return true;
      }

      var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
      var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
      var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
      var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
      var exceedsTop =
        popperRect.top - clientY + topDistance > interactiveBorder;
      var exceedsBottom =
        clientY - popperRect.bottom - bottomDistance > interactiveBorder;
      var exceedsLeft =
        popperRect.left - clientX + leftDistance > interactiveBorder;
      var exceedsRight =
        clientX - popperRect.right - rightDistance > interactiveBorder;
      return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
  }
  function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...

    ["transitionend", "webkitTransitionEnd"].forEach(function (event) {
      box[method](event, listener);
    });
  }
  /**
   * Compared to xxx.contains, this function works for dom structures with shadow
   * dom
   */

  function actualContains(parent, child) {
    var target = child;

    while (target) {
      var _target$getRootNode;

      if (parent.contains(target)) {
        return true;
      }

      target =
        target.getRootNode == null
          ? void 0
          : (_target$getRootNode = target.getRootNode()) == null
          ? void 0
          : _target$getRootNode.host;
    }

    return false;
  }

  var currentInput = {
    isTouch: false,
  };
  var lastMouseMoveTime = 0;
  /**
   * When a `touchstart` event is fired, it's assumed the user is using touch
   * input. We'll bind a `mousemove` event listener to listen for mouse input in
   * the future. This way, the `isTouch` property is fully dynamic and will handle
   * hybrid devices that use a mix of touch + mouse input.
   */

  function onDocumentTouchStart() {
    if (currentInput.isTouch) {
      return;
    }

    currentInput.isTouch = true;

    if (window.performance) {
      document.addEventListener("mousemove", onDocumentMouseMove);
    }
  }
  /**
   * When two `mousemove` event are fired consecutively within 20ms, it's assumed
   * the user is using mouse input again. `mousemove` can fire on touch devices as
   * well, but very rarely that quickly.
   */

  function onDocumentMouseMove() {
    var now = performance.now();

    if (now - lastMouseMoveTime < 20) {
      currentInput.isTouch = false;
      document.removeEventListener("mousemove", onDocumentMouseMove);
    }

    lastMouseMoveTime = now;
  }
  /**
   * When an element is in focus and has a tippy, leaving the tab/window and
   * returning causes it to show again. For mouse users this is unexpected, but
   * for keyboard use it makes sense.
   * TODO: find a better technique to solve this problem
   */

  function onWindowBlur() {
    var activeElement = document.activeElement;

    if (isReferenceElement(activeElement)) {
      var instance = activeElement._tippy;

      if (activeElement.blur && !instance.state.isVisible) {
        activeElement.blur();
      }
    }
  }
  function bindGlobalEventListeners() {
    document.addEventListener(
      "touchstart",
      onDocumentTouchStart,
      TOUCH_OPTIONS
    );
    window.addEventListener("blur", onWindowBlur);
  }

  function createMemoryLeakWarning(method) {
    var txt = method === "destroy" ? "n already-" : " ";
    return [
      method +
        "() was called on a" +
        txt +
        "destroyed instance. This is a no-op but",
      "indicates a potential memory leak.",
    ].join(" ");
  }
  function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value
      .replace(spacesAndTabs, " ")
      .replace(lineStartWithSpaces, "")
      .trim();
  }

  function getDevMessage(message) {
    return clean(
      "\n  %ctippy.js\n\n  %c" +
        clean(message) +
        "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  "
    );
  }

  function getFormattedMessage(message) {
    return [
      getDevMessage(message), // title
      "color: #00C584; font-size: 1.3em; font-weight: bold;", // message
      "line-height: 1.5", // footer
      "color: #a6a095;",
    ];
  } // Assume warnings and errors never have the same message

  var visitedMessages;

  {
    resetVisitedMessages();
  }

  function resetVisitedMessages() {
    visitedMessages = new Set();
  }
  function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console;

      visitedMessages.add(message);

      (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
  }
  function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console2;

      visitedMessages.add(message);

      (_console2 = console).error.apply(
        _console2,
        getFormattedMessage(message)
      );
    }
  }
  function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject =
      Object.prototype.toString.call(targets) === "[object Object]" &&
      !targets.addEventListener;
    errorWhen(
      didPassFalsyValue,
      [
        "tippy() was passed",
        "`" + String(targets) + "`",
        "as its targets (first) argument. Valid types are: String, Element,",
        "Element[], or NodeList.",
      ].join(" ")
    );
    errorWhen(
      didPassPlainObject,
      [
        "tippy() was passed a plain object which is not supported as an argument",
        "for virtual positioning. Use props.getReferenceClientRect instead.",
      ].join(" ")
    );
  }

  var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false,
  };
  var renderProps = {
    allowHTML: false,
    animation: "fade",
    arrow: true,
    content: "",
    inertia: false,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999,
  };
  var defaultProps = Object.assign(
    {
      appendTo: TIPPY_DEFAULT_APPEND_TO,
      aria: {
        content: "auto",
        expanded: "auto",
      },
      delay: 0,
      duration: [300, 250],
      getReferenceClientRect: null,
      hideOnClick: true,
      ignoreAttributes: false,
      interactive: false,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      moveTransition: "",
      offset: [0, 10],
      onAfterUpdate: function onAfterUpdate() {},
      onBeforeUpdate: function onBeforeUpdate() {},
      onCreate: function onCreate() {},
      onDestroy: function onDestroy() {},
      onHidden: function onHidden() {},
      onHide: function onHide() {},
      onMount: function onMount() {},
      onShow: function onShow() {},
      onShown: function onShown() {},
      onTrigger: function onTrigger() {},
      onUntrigger: function onUntrigger() {},
      onClickOutside: function onClickOutside() {},
      placement: "top",
      plugins: [],
      popperOptions: {},
      render: null,
      showOnCreate: false,
      touch: true,
      trigger: "mouseenter focus",
      triggerTarget: null,
    },
    pluginProps,
    renderProps
  );
  var defaultKeys = Object.keys(defaultProps);
  var setDefaultProps = function setDefaultProps(partialProps) {
    /* istanbul ignore else */
    {
      validateProps(partialProps, []);
    }

    var keys = Object.keys(partialProps);
    keys.forEach(function (key) {
      defaultProps[key] = partialProps[key];
    });
  };
  function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function (acc, plugin) {
      var name = plugin.name,
        defaultValue = plugin.defaultValue;

      if (name) {
        var _name;

        acc[name] =
          passedProps[name] !== undefined
            ? passedProps[name]
            : (_name = defaultProps[name]) != null
            ? _name
            : defaultValue;
      }

      return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps);
  }
  function getDataAttributeProps(reference, plugins) {
    var propKeys = plugins
      ? Object.keys(
          getExtendedPassedProps(
            Object.assign({}, defaultProps, {
              plugins: plugins,
            })
          )
        )
      : defaultKeys;
    var props = propKeys.reduce(function (acc, key) {
      var valueAsString = (
        reference.getAttribute("data-tippy-" + key) || ""
      ).trim();

      if (!valueAsString) {
        return acc;
      }

      if (key === "content") {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e) {
          acc[key] = valueAsString;
        }
      }

      return acc;
    }, {});
    return props;
  }
  function evaluateProps(reference, props) {
    var out = Object.assign(
      {},
      props,
      {
        content: invokeWithArgsOrReturn(props.content, [reference]),
      },
      props.ignoreAttributes
        ? {}
        : getDataAttributeProps(reference, props.plugins)
    );
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
      expanded:
        out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
      content:
        out.aria.content === "auto"
          ? props.interactive
            ? null
            : "describedby"
          : out.aria.content,
    };
    return out;
  }
  function validateProps(partialProps, plugins) {
    if (partialProps === void 0) {
      partialProps = {};
    }

    if (plugins === void 0) {
      plugins = [];
    }

    var keys = Object.keys(partialProps);
    keys.forEach(function (prop) {
      var nonPluginProps = removeProperties(
        defaultProps,
        Object.keys(pluginProps)
      );
      var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

      if (didPassUnknownProp) {
        didPassUnknownProp =
          plugins.filter(function (plugin) {
            return plugin.name === prop;
          }).length === 0;
      }

      warnWhen(
        didPassUnknownProp,
        [
          "`" + prop + "`",
          "is not a valid prop. You may have spelled it incorrectly, or if it's",
          "a plugin, forgot to pass it in an array as props.plugins.",
          "\n\n",
          "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n",
          "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/",
        ].join(" ")
      );
    });
  }

  var innerHTML = function innerHTML() {
    return "innerHTML";
  };

  function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
  }

  function createArrowElement(value) {
    var arrow = div();

    if (value === true) {
      arrow.className = ARROW_CLASS;
    } else {
      arrow.className = SVG_ARROW_CLASS;

      if (isElement(value)) {
        arrow.appendChild(value);
      } else {
        dangerouslySetInnerHTML(arrow, value);
      }
    }

    return arrow;
  }

  function setContent(content, props) {
    if (isElement(props.content)) {
      dangerouslySetInnerHTML(content, "");
      content.appendChild(props.content);
    } else if (typeof props.content !== "function") {
      if (props.allowHTML) {
        dangerouslySetInnerHTML(content, props.content);
      } else {
        content.textContent = props.content;
      }
    }
  }
  function getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
      box: box,
      content: boxChildren.find(function (node) {
        return node.classList.contains(CONTENT_CLASS);
      }),
      arrow: boxChildren.find(function (node) {
        return (
          node.classList.contains(ARROW_CLASS) ||
          node.classList.contains(SVG_ARROW_CLASS)
        );
      }),
      backdrop: boxChildren.find(function (node) {
        return node.classList.contains(BACKDROP_CLASS);
      }),
    };
  }
  function render(instance) {
    var popper = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute("data-state", "hidden");
    box.setAttribute("tabindex", "-1");
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute("data-state", "hidden");
    setContent(content, instance.props);
    popper.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);

    function onUpdate(prevProps, nextProps) {
      var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

      if (nextProps.theme) {
        box.setAttribute("data-theme", nextProps.theme);
      } else {
        box.removeAttribute("data-theme");
      }

      if (typeof nextProps.animation === "string") {
        box.setAttribute("data-animation", nextProps.animation);
      } else {
        box.removeAttribute("data-animation");
      }

      if (nextProps.inertia) {
        box.setAttribute("data-inertia", "");
      } else {
        box.removeAttribute("data-inertia");
      }

      box.style.maxWidth =
        typeof nextProps.maxWidth === "number"
          ? nextProps.maxWidth + "px"
          : nextProps.maxWidth;

      if (nextProps.role) {
        box.setAttribute("role", nextProps.role);
      } else {
        box.removeAttribute("role");
      }

      if (
        prevProps.content !== nextProps.content ||
        prevProps.allowHTML !== nextProps.allowHTML
      ) {
        setContent(content, instance.props);
      }

      if (nextProps.arrow) {
        if (!arrow) {
          box.appendChild(createArrowElement(nextProps.arrow));
        } else if (prevProps.arrow !== nextProps.arrow) {
          box.removeChild(arrow);
          box.appendChild(createArrowElement(nextProps.arrow));
        }
      } else if (arrow) {
        box.removeChild(arrow);
      }
    }

    return {
      popper: popper,
      onUpdate: onUpdate,
    };
  } // Runtime check to identify if the render function is the default one; this
  // way we can apply default CSS transitions logic and it can be tree-shaken away

  render.$$tippy = true;

  var idCounter = 1;
  var mouseMoveListeners = []; // Used by `hideAll()`

  var mountedInstances = [];
  function createTippy(reference, passedProps) {
    var props = evaluateProps(
      reference,
      Object.assign(
        {},
        defaultProps,
        getExtendedPassedProps(removeUndefinedProps(passedProps))
      )
    ); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================

    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================

    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
      // Is the instance currently enabled?
      isEnabled: true,
      // Is the tippy currently showing and not transitioning out?
      isVisible: false,
      // Has the instance been destroyed?
      isDestroyed: false,
      // Is the tippy currently mounted to the DOM?
      isMounted: false,
      // Has the tippy finished transitioning in?
      isShown: false,
    };
    var instance = {
      // properties
      id: id,
      reference: reference,
      popper: div(),
      popperInstance: popperInstance,
      props: props,
      state: state,
      plugins: plugins,
      // methods
      clearDelayTimeouts: clearDelayTimeouts,
      setProps: setProps,
      setContent: setContent,
      show: show,
      hide: hide,
      hideWithInteractivity: hideWithInteractivity,
      enable: enable,
      disable: disable,
      unmount: unmount,
      destroy: destroy,
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser

    /* istanbul ignore if */

    if (!props.render) {
      {
        errorWhen(true, "render() function has not been supplied.");
      }

      return instance;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================

    var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

    popper.setAttribute("data-tippy-root", "");
    popper.id = "tippy-" + instance.id;
    instance.popper = popper;
    reference._tippy = instance;
    popper._tippy = instance;
    var pluginsHooks = plugins.map(function (plugin) {
      return plugin.fn(instance);
    });
    var hasAriaExpanded = reference.hasAttribute("aria-expanded");
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook("onCreate", [instance]);

    if (props.showOnCreate) {
      scheduleShow();
    } // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding

    popper.addEventListener("mouseenter", function () {
      if (instance.props.interactive && instance.state.isVisible) {
        instance.clearDelayTimeouts();
      }
    });
    popper.addEventListener("mouseleave", function () {
      if (
        instance.props.interactive &&
        instance.props.trigger.indexOf("mouseenter") >= 0
      ) {
        getDocument().addEventListener("mousemove", debouncedOnMouseMove);
      }
    });
    return instance; // ===========================================================================
    // 🔒 Private methods
    // ===========================================================================

    function getNormalizedTouchSettings() {
      var touch = instance.props.touch;
      return Array.isArray(touch) ? touch : [touch, 0];
    }

    function getIsCustomTouchBehavior() {
      return getNormalizedTouchSettings()[0] === "hold";
    }

    function getIsDefaultRenderFn() {
      var _instance$props$rende;

      // @ts-ignore
      return !!(
        (_instance$props$rende = instance.props.render) != null &&
        _instance$props$rende.$$tippy
      );
    }

    function getCurrentTarget() {
      return currentTarget || reference;
    }

    function getDocument() {
      var parent = getCurrentTarget().parentNode;
      return parent ? getOwnerDocument(parent) : document;
    }

    function getDefaultTemplateChildren() {
      return getChildren(popper);
    }

    function getDelay(isShow) {
      // For touch or keyboard input, force `0` delay for UX reasons
      // Also if the instance is mounted but not visible (transitioning out),
      // ignore delay
      if (
        (instance.state.isMounted && !instance.state.isVisible) ||
        currentInput.isTouch ||
        (lastTriggerEvent && lastTriggerEvent.type === "focus")
      ) {
        return 0;
      }

      return getValueAtIndexOrReturn(
        instance.props.delay,
        isShow ? 0 : 1,
        defaultProps.delay
      );
    }

    function handleStyles(fromHide) {
      if (fromHide === void 0) {
        fromHide = false;
      }

      popper.style.pointerEvents =
        instance.props.interactive && !fromHide ? "" : "none";
      popper.style.zIndex = "" + instance.props.zIndex;
    }

    function invokeHook(hook, args, shouldInvokePropsHook) {
      if (shouldInvokePropsHook === void 0) {
        shouldInvokePropsHook = true;
      }

      pluginsHooks.forEach(function (pluginHooks) {
        if (pluginHooks[hook]) {
          pluginHooks[hook].apply(pluginHooks, args);
        }
      });

      if (shouldInvokePropsHook) {
        var _instance$props;

        (_instance$props = instance.props)[hook].apply(_instance$props, args);
      }
    }

    function handleAriaContentAttribute() {
      var aria = instance.props.aria;

      if (!aria.content) {
        return;
      }

      var attr = "aria-" + aria.content;
      var id = popper.id;
      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        var currentValue = node.getAttribute(attr);

        if (instance.state.isVisible) {
          node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
        } else {
          var nextValue = currentValue && currentValue.replace(id, "").trim();

          if (nextValue) {
            node.setAttribute(attr, nextValue);
          } else {
            node.removeAttribute(attr);
          }
        }
      });
    }

    function handleAriaExpandedAttribute() {
      if (hasAriaExpanded || !instance.props.aria.expanded) {
        return;
      }

      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        if (instance.props.interactive) {
          node.setAttribute(
            "aria-expanded",
            instance.state.isVisible && node === getCurrentTarget()
              ? "true"
              : "false"
          );
        } else {
          node.removeAttribute("aria-expanded");
        }
      });
    }

    function cleanupInteractiveMouseListeners() {
      getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
      mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
        return listener !== debouncedOnMouseMove;
      });
    }

    function onDocumentPress(event) {
      // Moved finger to scroll instead of an intentional tap outside
      if (currentInput.isTouch) {
        if (didTouchMove || event.type === "mousedown") {
          return;
        }
      }

      var actualTarget =
        (event.composedPath && event.composedPath()[0]) || event.target; // Clicked on interactive popper

      if (instance.props.interactive && actualContains(popper, actualTarget)) {
        return;
      } // Clicked on the event listeners target

      if (
        normalizeToArray(instance.props.triggerTarget || reference).some(
          function (el) {
            return actualContains(el, actualTarget);
          }
        )
      ) {
        if (currentInput.isTouch) {
          return;
        }

        if (
          instance.state.isVisible &&
          instance.props.trigger.indexOf("click") >= 0
        ) {
          return;
        }
      } else {
        invokeHook("onClickOutside", [instance, event]);
      }

      if (instance.props.hideOnClick === true) {
        instance.clearDelayTimeouts();
        instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
        // currentTarget. This lets a tippy with `focus` trigger know that it
        // should not show

        didHideDueToDocumentMouseDown = true;
        setTimeout(function () {
          didHideDueToDocumentMouseDown = false;
        }); // The listener gets added in `scheduleShow()`, but this may be hiding it
        // before it shows, and hide()'s early bail-out behavior can prevent it
        // from being cleaned up

        if (!instance.state.isMounted) {
          removeDocumentPress();
        }
      }
    }

    function onTouchMove() {
      didTouchMove = true;
    }

    function onTouchStart() {
      didTouchMove = false;
    }

    function addDocumentPress() {
      var doc = getDocument();
      doc.addEventListener("mousedown", onDocumentPress, true);
      doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
      doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
      doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }

    function removeDocumentPress() {
      var doc = getDocument();
      doc.removeEventListener("mousedown", onDocumentPress, true);
      doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
      doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
      doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }

    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function () {
        if (
          !instance.state.isVisible &&
          popper.parentNode &&
          popper.parentNode.contains(popper)
        ) {
          callback();
        }
      });
    }

    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }

    function onTransitionEnd(duration, callback) {
      var box = getDefaultTemplateChildren().box;

      function listener(event) {
        if (event.target === box) {
          updateTransitionEndListener(box, "remove", listener);
          callback();
        }
      } // Make callback synchronous if duration is 0
      // `transitionend` won't fire otherwise

      if (duration === 0) {
        return callback();
      }

      updateTransitionEndListener(box, "remove", currentTransitionEndListener);
      updateTransitionEndListener(box, "add", listener);
      currentTransitionEndListener = listener;
    }

    function on(eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }

      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        node.addEventListener(eventType, handler, options);
        listeners.push({
          node: node,
          eventType: eventType,
          handler: handler,
          options: options,
        });
      });
    }

    function addListeners() {
      if (getIsCustomTouchBehavior()) {
        on("touchstart", onTrigger, {
          passive: true,
        });
        on("touchend", onMouseLeave, {
          passive: true,
        });
      }

      splitBySpaces(instance.props.trigger).forEach(function (eventType) {
        if (eventType === "manual") {
          return;
        }

        on(eventType, onTrigger);

        switch (eventType) {
          case "mouseenter":
            on("mouseleave", onMouseLeave);
            break;

          case "focus":
            on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
            break;

          case "focusin":
            on("focusout", onBlurOrFocusOut);
            break;
        }
      });
    }

    function removeListeners() {
      listeners.forEach(function (_ref) {
        var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }

    function onTrigger(event) {
      var _lastTriggerEvent;

      var shouldScheduleClickHide = false;

      if (
        !instance.state.isEnabled ||
        isEventListenerStopped(event) ||
        didHideDueToDocumentMouseDown
      ) {
        return;
      }

      var wasFocused =
        ((_lastTriggerEvent = lastTriggerEvent) == null
          ? void 0
          : _lastTriggerEvent.type) === "focus";
      lastTriggerEvent = event;
      currentTarget = event.currentTarget;
      handleAriaExpandedAttribute();

      if (!instance.state.isVisible && isMouseEvent(event)) {
        // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved
        mouseMoveListeners.forEach(function (listener) {
          return listener(event);
        });
      } // Toggle show/hide when clicking click-triggered tooltips

      if (
        event.type === "click" &&
        (instance.props.trigger.indexOf("mouseenter") < 0 ||
          isVisibleFromClick) &&
        instance.props.hideOnClick !== false &&
        instance.state.isVisible
      ) {
        shouldScheduleClickHide = true;
      } else {
        scheduleShow(event);
      }

      if (event.type === "click") {
        isVisibleFromClick = !shouldScheduleClickHide;
      }

      if (shouldScheduleClickHide && !wasFocused) {
        scheduleHide(event);
      }
    }

    function onMouseMove(event) {
      var target = event.target;
      var isCursorOverReferenceOrPopper =
        getCurrentTarget().contains(target) || popper.contains(target);

      if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
        return;
      }

      var popperTreeData = getNestedPopperTree()
        .concat(popper)
        .map(function (popper) {
          var _instance$popperInsta;

          var instance = popper._tippy;
          var state =
            (_instance$popperInsta = instance.popperInstance) == null
              ? void 0
              : _instance$popperInsta.state;

          if (state) {
            return {
              popperRect: popper.getBoundingClientRect(),
              popperState: state,
              props: props,
            };
          }

          return null;
        })
        .filter(Boolean);

      if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
        cleanupInteractiveMouseListeners();
        scheduleHide(event);
      }
    }

    function onMouseLeave(event) {
      var shouldBail =
        isEventListenerStopped(event) ||
        (instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick);

      if (shouldBail) {
        return;
      }

      if (instance.props.interactive) {
        instance.hideWithInteractivity(event);
        return;
      }

      scheduleHide(event);
    }

    function onBlurOrFocusOut(event) {
      if (
        instance.props.trigger.indexOf("focusin") < 0 &&
        event.target !== getCurrentTarget()
      ) {
        return;
      } // If focus was moved to within the popper

      if (
        instance.props.interactive &&
        event.relatedTarget &&
        popper.contains(event.relatedTarget)
      ) {
        return;
      }

      scheduleHide(event);
    }

    function isEventListenerStopped(event) {
      return currentInput.isTouch
        ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0
        : false;
    }

    function createPopperInstance() {
      destroyPopperInstance();
      var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
      var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
      var computedReference = getReferenceClientRect
        ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement:
              getReferenceClientRect.contextElement || getCurrentTarget(),
          }
        : reference;
      var tippyModifier = {
        name: "$$tippy",
        enabled: true,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function fn(_ref2) {
          var state = _ref2.state;

          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

            ["placement", "reference-hidden", "escaped"].forEach(function (
              attr
            ) {
              if (attr === "placement") {
                box.setAttribute("data-placement", state.placement);
              } else {
                if (state.attributes.popper["data-popper-" + attr]) {
                  box.setAttribute("data-" + attr, "");
                } else {
                  box.removeAttribute("data-" + attr);
                }
              }
            });
            state.attributes.popper = {};
          }
        },
      };
      var modifiers = [
        {
          name: "offset",
          options: {
            offset: offset,
          },
        },
        {
          name: "preventOverflow",
          options: {
            padding: {
              top: 2,
              bottom: 2,
              left: 5,
              right: 5,
            },
          },
        },
        {
          name: "flip",
          options: {
            padding: 5,
          },
        },
        {
          name: "computeStyles",
          options: {
            adaptive: !moveTransition,
          },
        },
        tippyModifier,
      ];

      if (getIsDefaultRenderFn() && arrow) {
        modifiers.push({
          name: "arrow",
          options: {
            element: arrow,
            padding: 3,
          },
        });
      }

      modifiers.push.apply(
        modifiers,
        (popperOptions == null ? void 0 : popperOptions.modifiers) || []
      );
      instance.popperInstance = core.createPopper(
        computedReference,
        popper,
        Object.assign({}, popperOptions, {
          placement: placement,
          onFirstUpdate: onFirstUpdate,
          modifiers: modifiers,
        })
      );
    }

    function destroyPopperInstance() {
      if (instance.popperInstance) {
        instance.popperInstance.destroy();
        instance.popperInstance = null;
      }
    }

    function mount() {
      var appendTo = instance.props.appendTo;
      var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
      // it's directly after the reference element so the elements inside the
      // tippy can be tabbed to
      // If there are clipping issues, the user can specify a different appendTo
      // and ensure focus management is handled correctly manually

      var node = getCurrentTarget();

      if (
        (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO) ||
        appendTo === "parent"
      ) {
        parentNode = node.parentNode;
      } else {
        parentNode = invokeWithArgsOrReturn(appendTo, [node]);
      } // The popper element needs to exist on the DOM before its position can be
      // updated as Popper needs to read its dimensions

      if (!parentNode.contains(popper)) {
        parentNode.appendChild(popper);
      }

      instance.state.isMounted = true;
      createPopperInstance();
      /* istanbul ignore else */

      {
        // Accessibility check
        warnWhen(
          instance.props.interactive &&
            appendTo === defaultProps.appendTo &&
            node.nextElementSibling !== popper,
          [
            "Interactive tippy element may not be accessible via keyboard",
            "navigation because it is not directly after the reference element",
            "in the DOM source order.",
            "\n\n",
            "Using a wrapper <div> or <span> tag around the reference element",
            "solves this by creating a new parentNode context.",
            "\n\n",
            "Specifying `appendTo: document.body` silences this warning, but it",
            "assumes you are using a focus management solution to handle",
            "keyboard navigation.",
            "\n\n",
            "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity",
          ].join(" ")
        );
      }
    }

    function getNestedPopperTree() {
      return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
    }

    function scheduleShow(event) {
      instance.clearDelayTimeouts();

      if (event) {
        invokeHook("onTrigger", [instance, event]);
      }

      addDocumentPress();
      var delay = getDelay(true);

      var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

      if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
        delay = touchDelay;
      }

      if (delay) {
        showTimeout = setTimeout(function () {
          instance.show();
        }, delay);
      } else {
        instance.show();
      }
    }

    function scheduleHide(event) {
      instance.clearDelayTimeouts();
      invokeHook("onUntrigger", [instance, event]);

      if (!instance.state.isVisible) {
        removeDocumentPress();
        return;
      } // For interactive tippies, scheduleHide is added to a document.body handler
      // from onMouseLeave so must intercept scheduled hides from mousemove/leave
      // events when trigger contains mouseenter and click, and the tip is
      // currently shown as a result of a click.

      if (
        instance.props.trigger.indexOf("mouseenter") >= 0 &&
        instance.props.trigger.indexOf("click") >= 0 &&
        ["mouseleave", "mousemove"].indexOf(event.type) >= 0 &&
        isVisibleFromClick
      ) {
        return;
      }

      var delay = getDelay(false);

      if (delay) {
        hideTimeout = setTimeout(function () {
          if (instance.state.isVisible) {
            instance.hide();
          }
        }, delay);
      } else {
        // Fixes a `transitionend` problem when it fires 1 frame too
        // late sometimes, we don't want hide() to be called.
        scheduleHideAnimationFrame = requestAnimationFrame(function () {
          instance.hide();
        });
      }
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================

    function enable() {
      instance.state.isEnabled = true;
    }

    function disable() {
      // Disabling the instance should also hide it
      // https://github.com/atomiks/tippy.js-react/issues/106
      instance.hide();
      instance.state.isEnabled = false;
    }

    function clearDelayTimeouts() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(scheduleHideAnimationFrame);
    }

    function setProps(partialProps) {
      /* istanbul ignore else */
      {
        warnWhen(
          instance.state.isDestroyed,
          createMemoryLeakWarning("setProps")
        );
      }

      if (instance.state.isDestroyed) {
        return;
      }

      invokeHook("onBeforeUpdate", [instance, partialProps]);
      removeListeners();
      var prevProps = instance.props;
      var nextProps = evaluateProps(
        reference,
        Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
          ignoreAttributes: true,
        })
      );
      instance.props = nextProps;
      addListeners();

      if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
        cleanupInteractiveMouseListeners();
        debouncedOnMouseMove = debounce(
          onMouseMove,
          nextProps.interactiveDebounce
        );
      } // Ensure stale aria-expanded attributes are removed

      if (prevProps.triggerTarget && !nextProps.triggerTarget) {
        normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
          node.removeAttribute("aria-expanded");
        });
      } else if (nextProps.triggerTarget) {
        reference.removeAttribute("aria-expanded");
      }

      handleAriaExpandedAttribute();
      handleStyles();

      if (onUpdate) {
        onUpdate(prevProps, nextProps);
      }

      if (instance.popperInstance) {
        createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
        // and the nested ones get re-rendered first.
        // https://github.com/atomiks/tippyjs-react/issues/177
        // TODO: find a cleaner / more efficient solution(!)

        getNestedPopperTree().forEach(function (nestedPopper) {
          // React (and other UI libs likely) requires a rAF wrapper as it flushes
          // its work in one
          requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
        });
      }

      invokeHook("onAfterUpdate", [instance, partialProps]);
    }

    function setContent(content) {
      instance.setProps({
        content: content,
      });
    }

    function show() {
      /* istanbul ignore else */
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
      } // Early bail-out

      var isAlreadyVisible = instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var isTouchAndTouchDisabled =
        currentInput.isTouch && !instance.props.touch;
      var duration = getValueAtIndexOrReturn(
        instance.props.duration,
        0,
        defaultProps.duration
      );

      if (
        isAlreadyVisible ||
        isDestroyed ||
        isDisabled ||
        isTouchAndTouchDisabled
      ) {
        return;
      } // Normalize `disabled` behavior across browsers.
      // Firefox allows events on disabled elements, but Chrome doesn't.
      // Using a wrapper element (i.e. <span>) is recommended.

      if (getCurrentTarget().hasAttribute("disabled")) {
        return;
      }

      invokeHook("onShow", [instance], false);

      if (instance.props.onShow(instance) === false) {
        return;
      }

      instance.state.isVisible = true;

      if (getIsDefaultRenderFn()) {
        popper.style.visibility = "visible";
      }

      handleStyles();
      addDocumentPress();

      if (!instance.state.isMounted) {
        popper.style.transition = "none";
      } // If flipping to the opposite side after hiding at least once, the
      // animation will use the wrong placement without resetting the duration

      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

        setTransitionDuration([box, content], 0);
      }

      onFirstUpdate = function onFirstUpdate() {
        var _instance$popperInsta2;

        if (!instance.state.isVisible || ignoreOnFirstUpdate) {
          return;
        }

        ignoreOnFirstUpdate = true; // reflow

        void popper.offsetHeight;
        popper.style.transition = instance.props.moveTransition;

        if (getIsDefaultRenderFn() && instance.props.animation) {
          var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

          setTransitionDuration([_box, _content], duration);
          setVisibilityState([_box, _content], "visible");
        }

        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
        // popper has been positioned for the first time

        (_instance$popperInsta2 = instance.popperInstance) == null
          ? void 0
          : _instance$popperInsta2.forceUpdate();
        invokeHook("onMount", [instance]);

        if (instance.props.animation && getIsDefaultRenderFn()) {
          onTransitionedIn(duration, function () {
            instance.state.isShown = true;
            invokeHook("onShown", [instance]);
          });
        }
      };

      mount();
    }

    function hide() {
      /* istanbul ignore else */
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
      } // Early bail-out

      var isAlreadyHidden = !instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var duration = getValueAtIndexOrReturn(
        instance.props.duration,
        1,
        defaultProps.duration
      );

      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }

      invokeHook("onHide", [instance], false);

      if (instance.props.onHide(instance) === false) {
        return;
      }

      instance.state.isVisible = false;
      instance.state.isShown = false;
      ignoreOnFirstUpdate = false;
      isVisibleFromClick = false;

      if (getIsDefaultRenderFn()) {
        popper.style.visibility = "hidden";
      }

      cleanupInteractiveMouseListeners();
      removeDocumentPress();
      handleStyles(true);

      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

        if (instance.props.animation) {
          setTransitionDuration([box, content], duration);
          setVisibilityState([box, content], "hidden");
        }
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();

      if (instance.props.animation) {
        if (getIsDefaultRenderFn()) {
          onTransitionedOut(duration, instance.unmount);
        }
      } else {
        instance.unmount();
      }
    }

    function hideWithInteractivity(event) {
      /* istanbul ignore else */
      {
        warnWhen(
          instance.state.isDestroyed,
          createMemoryLeakWarning("hideWithInteractivity")
        );
      }

      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }

    function unmount() {
      /* istanbul ignore else */
      {
        warnWhen(
          instance.state.isDestroyed,
          createMemoryLeakWarning("unmount")
        );
      }

      if (instance.state.isVisible) {
        instance.hide();
      }

      if (!instance.state.isMounted) {
        return;
      }

      destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
      // tree by default. This seems mainly for interactive tippies, but we should
      // find a workaround if possible

      getNestedPopperTree().forEach(function (nestedPopper) {
        nestedPopper._tippy.unmount();
      });

      if (popper.parentNode) {
        popper.parentNode.removeChild(popper);
      }

      mountedInstances = mountedInstances.filter(function (i) {
        return i !== instance;
      });
      instance.state.isMounted = false;
      invokeHook("onHidden", [instance]);
    }

    function destroy() {
      /* istanbul ignore else */
      {
        warnWhen(
          instance.state.isDestroyed,
          createMemoryLeakWarning("destroy")
        );
      }

      if (instance.state.isDestroyed) {
        return;
      }

      instance.clearDelayTimeouts();
      instance.unmount();
      removeListeners();
      delete reference._tippy;
      instance.state.isDestroyed = true;
      invokeHook("onDestroy", [instance]);
    }
  }

  function tippy(targets, optionalProps) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }

    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    /* istanbul ignore else */

    {
      validateTargets(targets);
      validateProps(optionalProps, plugins);
    }

    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
      plugins: plugins,
    });
    var elements = getArrayOfElements(targets);
    /* istanbul ignore else */

    {
      var isSingleContentElement = isElement(passedProps.content);
      var isMoreThanOneReferenceElement = elements.length > 1;
      warnWhen(
        isSingleContentElement && isMoreThanOneReferenceElement,
        [
          "tippy() was passed an Element as the `content` prop, but more than",
          "one tippy instance was created by this invocation. This means the",
          "content element will only be appended to the last tippy instance.",
          "\n\n",
          "Instead, pass the .innerHTML of the element, or use a function that",
          "returns a cloned version of the element instead.",
          "\n\n",
          "1) content: element.innerHTML\n",
          "2) content: () => element.cloneNode(true)",
        ].join(" ")
      );
    }

    var instances = elements.reduce(function (acc, reference) {
      var instance = reference && createTippy(reference, passedProps);

      if (instance) {
        acc.push(instance);
      }

      return acc;
    }, []);
    return isElement(targets) ? instances[0] : instances;
  }

  tippy.defaultProps = defaultProps;
  tippy.setDefaultProps = setDefaultProps;
  tippy.currentInput = currentInput;
  var hideAll = function hideAll(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

    mountedInstances.forEach(function (instance) {
      var isExcluded = false;

      if (excludedReferenceOrInstance) {
        isExcluded = isReferenceElement(excludedReferenceOrInstance)
          ? instance.reference === excludedReferenceOrInstance
          : instance.popper === excludedReferenceOrInstance.popper;
      }

      if (!isExcluded) {
        var originalDuration = instance.props.duration;
        instance.setProps({
          duration: duration,
        });
        instance.hide();

        if (!instance.state.isDestroyed) {
          instance.setProps({
            duration: originalDuration,
          });
        }
      }
    });
  };

  // every time the popper is destroyed (i.e. a new target), removing the styles
  // and causing transitions to break for singletons when the console is open, but
  // most notably for non-transform styles being used, `gpuAcceleration: false`.

  var applyStylesModifier = Object.assign({}, core.applyStyles, {
    effect: function effect(_ref) {
      var state = _ref.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: {
          position: "absolute",
        },
        reference: {},
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;

      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      } // intentionally return no cleanup function
      // return () => { ... }
    },
  });

  var createSingleton = function createSingleton(
    tippyInstances,
    optionalProps
  ) {
    var _optionalProps$popper;

    if (optionalProps === void 0) {
      optionalProps = {};
    }

    /* istanbul ignore else */
    {
      errorWhen(
        !Array.isArray(tippyInstances),
        [
          "The first argument passed to createSingleton() must be an array of",
          "tippy instances. The passed value was",
          String(tippyInstances),
        ].join(" ")
      );
    }

    var individualInstances = tippyInstances;
    var references = [];
    var triggerTargets = [];
    var currentTarget;
    var overrides = optionalProps.overrides;
    var interceptSetPropsCleanups = [];
    var shownOnCreate = false;

    function setTriggerTargets() {
      triggerTargets = individualInstances
        .map(function (instance) {
          return normalizeToArray(
            instance.props.triggerTarget || instance.reference
          );
        })
        .reduce(function (acc, item) {
          return acc.concat(item);
        }, []);
    }

    function setReferences() {
      references = individualInstances.map(function (instance) {
        return instance.reference;
      });
    }

    function enableInstances(isEnabled) {
      individualInstances.forEach(function (instance) {
        if (isEnabled) {
          instance.enable();
        } else {
          instance.disable();
        }
      });
    }

    function interceptSetProps(singleton) {
      return individualInstances.map(function (instance) {
        var originalSetProps = instance.setProps;

        instance.setProps = function (props) {
          originalSetProps(props);

          if (instance.reference === currentTarget) {
            singleton.setProps(props);
          }
        };

        return function () {
          instance.setProps = originalSetProps;
        };
      });
    } // have to pass singleton, as it maybe undefined on first call

    function prepareInstance(singleton, target) {
      var index = triggerTargets.indexOf(target); // bail-out

      if (target === currentTarget) {
        return;
      }

      currentTarget = target;
      var overrideProps = (overrides || [])
        .concat("content")
        .reduce(function (acc, prop) {
          acc[prop] = individualInstances[index].props[prop];
          return acc;
        }, {});
      singleton.setProps(
        Object.assign({}, overrideProps, {
          getReferenceClientRect:
            typeof overrideProps.getReferenceClientRect === "function"
              ? overrideProps.getReferenceClientRect
              : function () {
                  var _references$index;

                  return (_references$index = references[index]) == null
                    ? void 0
                    : _references$index.getBoundingClientRect();
                },
        })
      );
    }

    enableInstances(false);
    setReferences();
    setTriggerTargets();
    var plugin = {
      fn: function fn() {
        return {
          onDestroy: function onDestroy() {
            enableInstances(true);
          },
          onHidden: function onHidden() {
            currentTarget = null;
          },
          onClickOutside: function onClickOutside(instance) {
            if (instance.props.showOnCreate && !shownOnCreate) {
              shownOnCreate = true;
              currentTarget = null;
            }
          },
          onShow: function onShow(instance) {
            if (instance.props.showOnCreate && !shownOnCreate) {
              shownOnCreate = true;
              prepareInstance(instance, references[0]);
            }
          },
          onTrigger: function onTrigger(instance, event) {
            prepareInstance(instance, event.currentTarget);
          },
        };
      },
    };
    var singleton = tippy(
      div(),
      Object.assign({}, removeProperties(optionalProps, ["overrides"]), {
        plugins: [plugin].concat(optionalProps.plugins || []),
        triggerTarget: triggerTargets,
        popperOptions: Object.assign({}, optionalProps.popperOptions, {
          modifiers: [].concat(
            ((_optionalProps$popper = optionalProps.popperOptions) == null
              ? void 0
              : _optionalProps$popper.modifiers) || [],
            [applyStylesModifier]
          ),
        }),
      })
    );
    var originalShow = singleton.show;

    singleton.show = function (target) {
      originalShow(); // first time, showOnCreate or programmatic call with no params
      // default to showing first instance

      if (!currentTarget && target == null) {
        return prepareInstance(singleton, references[0]);
      } // triggered from event (do nothing as prepareInstance already called by onTrigger)
      // programmatic call with no params when already visible (do nothing again)

      if (currentTarget && target == null) {
        return;
      } // target is index of instance

      if (typeof target === "number") {
        return (
          references[target] && prepareInstance(singleton, references[target])
        );
      } // target is a child tippy instance

      if (individualInstances.indexOf(target) >= 0) {
        var ref = target.reference;
        return prepareInstance(singleton, ref);
      } // target is a ReferenceElement

      if (references.indexOf(target) >= 0) {
        return prepareInstance(singleton, target);
      }
    };

    singleton.showNext = function () {
      var first = references[0];

      if (!currentTarget) {
        return singleton.show(0);
      }

      var index = references.indexOf(currentTarget);
      singleton.show(references[index + 1] || first);
    };

    singleton.showPrevious = function () {
      var last = references[references.length - 1];

      if (!currentTarget) {
        return singleton.show(last);
      }

      var index = references.indexOf(currentTarget);
      var target = references[index - 1] || last;
      singleton.show(target);
    };

    var originalSetProps = singleton.setProps;

    singleton.setProps = function (props) {
      overrides = props.overrides || overrides;
      originalSetProps(props);
    };

    singleton.setInstances = function (nextInstances) {
      enableInstances(true);
      interceptSetPropsCleanups.forEach(function (fn) {
        return fn();
      });
      individualInstances = nextInstances;
      enableInstances(false);
      setReferences();
      setTriggerTargets();
      interceptSetPropsCleanups = interceptSetProps(singleton);
      singleton.setProps({
        triggerTarget: triggerTargets,
      });
    };

    interceptSetPropsCleanups = interceptSetProps(singleton);
    return singleton;
  };

  var BUBBLING_EVENTS_MAP = {
    mouseover: "mouseenter",
    focusin: "focus",
    click: "click",
  };
  /**
   * Creates a delegate instance that controls the creation of tippy instances
   * for child elements (`target` CSS selector).
   */

  function delegate(targets, props) {
    /* istanbul ignore else */
    {
      errorWhen(
        !(props && props.target),
        [
          "You must specity a `target` prop indicating a CSS selector string matching",
          "the target elements that should receive a tippy.",
        ].join(" ")
      );
    }

    var listeners = [];
    var childTippyInstances = [];
    var disabled = false;
    var target = props.target;
    var nativeProps = removeProperties(props, ["target"]);
    var parentProps = Object.assign({}, nativeProps, {
      trigger: "manual",
      touch: false,
    });
    var childProps = Object.assign(
      {
        touch: defaultProps.touch,
      },
      nativeProps,
      {
        showOnCreate: true,
      }
    );
    var returnValue = tippy(targets, parentProps);
    var normalizedReturnValue = normalizeToArray(returnValue);

    function onTrigger(event) {
      if (!event.target || disabled) {
        return;
      }

      var targetNode = event.target.closest(target);

      if (!targetNode) {
        return;
      } // Get relevant trigger with fallbacks:
      // 1. Check `data-tippy-trigger` attribute on target node
      // 2. Fallback to `trigger` passed to `delegate()`
      // 3. Fallback to `defaultProps.trigger`

      var trigger =
        targetNode.getAttribute("data-tippy-trigger") ||
        props.trigger ||
        defaultProps.trigger; // @ts-ignore

      if (targetNode._tippy) {
        return;
      }

      if (
        event.type === "touchstart" &&
        typeof childProps.touch === "boolean"
      ) {
        return;
      }

      if (
        event.type !== "touchstart" &&
        trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0
      ) {
        return;
      }

      var instance = tippy(targetNode, childProps);

      if (instance) {
        childTippyInstances = childTippyInstances.concat(instance);
      }
    }

    function on(node, eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }

      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options,
      });
    }

    function addEventListeners(instance) {
      var reference = instance.reference;
      on(reference, "touchstart", onTrigger, TOUCH_OPTIONS);
      on(reference, "mouseover", onTrigger);
      on(reference, "focusin", onTrigger);
      on(reference, "click", onTrigger);
    }

    function removeEventListeners() {
      listeners.forEach(function (_ref) {
        var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }

    function applyMutations(instance) {
      var originalDestroy = instance.destroy;
      var originalEnable = instance.enable;
      var originalDisable = instance.disable;

      instance.destroy = function (shouldDestroyChildInstances) {
        if (shouldDestroyChildInstances === void 0) {
          shouldDestroyChildInstances = true;
        }

        if (shouldDestroyChildInstances) {
          childTippyInstances.forEach(function (instance) {
            instance.destroy();
          });
        }

        childTippyInstances = [];
        removeEventListeners();
        originalDestroy();
      };

      instance.enable = function () {
        originalEnable();
        childTippyInstances.forEach(function (instance) {
          return instance.enable();
        });
        disabled = false;
      };

      instance.disable = function () {
        originalDisable();
        childTippyInstances.forEach(function (instance) {
          return instance.disable();
        });
        disabled = true;
      };

      addEventListeners(instance);
    }

    normalizedReturnValue.forEach(applyMutations);
    return returnValue;
  }

  var animateFill = {
    name: "animateFill",
    defaultValue: false,
    fn: function fn(instance) {
      var _instance$props$rende;

      // @ts-ignore
      if (
        !(
          (_instance$props$rende = instance.props.render) != null &&
          _instance$props$rende.$$tippy
        )
      ) {
        {
          errorWhen(
            instance.props.animateFill,
            "The `animateFill` plugin requires the default render function."
          );
        }

        return {};
      }

      var _getChildren = getChildren(instance.popper),
        box = _getChildren.box,
        content = _getChildren.content;

      var backdrop = instance.props.animateFill
        ? createBackdropElement()
        : null;
      return {
        onCreate: function onCreate() {
          if (backdrop) {
            box.insertBefore(backdrop, box.firstElementChild);
            box.setAttribute("data-animatefill", "");
            box.style.overflow = "hidden";
            instance.setProps({
              arrow: false,
              animation: "shift-away",
            });
          }
        },
        onMount: function onMount() {
          if (backdrop) {
            var transitionDuration = box.style.transitionDuration;
            var duration = Number(transitionDuration.replace("ms", "")); // The content should fade in after the backdrop has mostly filled the
            // tooltip element. `clip-path` is the other alternative but is not
            // well-supported and is buggy on some devices.

            content.style.transitionDelay = Math.round(duration / 10) + "ms";
            backdrop.style.transitionDuration = transitionDuration;
            setVisibilityState([backdrop], "visible");
          }
        },
        onShow: function onShow() {
          if (backdrop) {
            backdrop.style.transitionDuration = "0ms";
          }
        },
        onHide: function onHide() {
          if (backdrop) {
            setVisibilityState([backdrop], "hidden");
          }
        },
      };
    },
  };

  function createBackdropElement() {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    setVisibilityState([backdrop], "hidden");
    return backdrop;
  }

  var mouseCoords = {
    clientX: 0,
    clientY: 0,
  };
  var activeInstances = [];

  function storeMouseCoords(_ref) {
    var clientX = _ref.clientX,
      clientY = _ref.clientY;
    mouseCoords = {
      clientX: clientX,
      clientY: clientY,
    };
  }

  function addMouseCoordsListener(doc) {
    doc.addEventListener("mousemove", storeMouseCoords);
  }

  function removeMouseCoordsListener(doc) {
    doc.removeEventListener("mousemove", storeMouseCoords);
  }

  var followCursor = {
    name: "followCursor",
    defaultValue: false,
    fn: function fn(instance) {
      var reference = instance.reference;
      var doc = getOwnerDocument(instance.props.triggerTarget || reference);
      var isInternalUpdate = false;
      var wasFocusEvent = false;
      var isUnmounted = true;
      var prevProps = instance.props;

      function getIsInitialBehavior() {
        return (
          instance.props.followCursor === "initial" && instance.state.isVisible
        );
      }

      function addListener() {
        doc.addEventListener("mousemove", onMouseMove);
      }

      function removeListener() {
        doc.removeEventListener("mousemove", onMouseMove);
      }

      function unsetGetReferenceClientRect() {
        isInternalUpdate = true;
        instance.setProps({
          getReferenceClientRect: null,
        });
        isInternalUpdate = false;
      }

      function onMouseMove(event) {
        // If the instance is interactive, avoid updating the position unless it's
        // over the reference element
        var isCursorOverReference = event.target
          ? reference.contains(event.target)
          : true;
        var followCursor = instance.props.followCursor;
        var clientX = event.clientX,
          clientY = event.clientY;
        var rect = reference.getBoundingClientRect();
        var relativeX = clientX - rect.left;
        var relativeY = clientY - rect.top;

        if (isCursorOverReference || !instance.props.interactive) {
          instance.setProps({
            // @ts-ignore - unneeded DOMRect properties
            getReferenceClientRect: function getReferenceClientRect() {
              var rect = reference.getBoundingClientRect();
              var x = clientX;
              var y = clientY;

              if (followCursor === "initial") {
                x = rect.left + relativeX;
                y = rect.top + relativeY;
              }

              var top = followCursor === "horizontal" ? rect.top : y;
              var right = followCursor === "vertical" ? rect.right : x;
              var bottom = followCursor === "horizontal" ? rect.bottom : y;
              var left = followCursor === "vertical" ? rect.left : x;
              return {
                width: right - left,
                height: bottom - top,
                top: top,
                right: right,
                bottom: bottom,
                left: left,
              };
            },
          });
        }
      }

      function create() {
        if (instance.props.followCursor) {
          activeInstances.push({
            instance: instance,
            doc: doc,
          });
          addMouseCoordsListener(doc);
        }
      }

      function destroy() {
        activeInstances = activeInstances.filter(function (data) {
          return data.instance !== instance;
        });

        if (
          activeInstances.filter(function (data) {
            return data.doc === doc;
          }).length === 0
        ) {
          removeMouseCoordsListener(doc);
        }
      }

      return {
        onCreate: create,
        onDestroy: destroy,
        onBeforeUpdate: function onBeforeUpdate() {
          prevProps = instance.props;
        },
        onAfterUpdate: function onAfterUpdate(_, _ref2) {
          var followCursor = _ref2.followCursor;

          if (isInternalUpdate) {
            return;
          }

          if (
            followCursor !== undefined &&
            prevProps.followCursor !== followCursor
          ) {
            destroy();

            if (followCursor) {
              create();

              if (
                instance.state.isMounted &&
                !wasFocusEvent &&
                !getIsInitialBehavior()
              ) {
                addListener();
              }
            } else {
              removeListener();
              unsetGetReferenceClientRect();
            }
          }
        },
        onMount: function onMount() {
          if (instance.props.followCursor && !wasFocusEvent) {
            if (isUnmounted) {
              onMouseMove(mouseCoords);
              isUnmounted = false;
            }

            if (!getIsInitialBehavior()) {
              addListener();
            }
          }
        },
        onTrigger: function onTrigger(_, event) {
          if (isMouseEvent(event)) {
            mouseCoords = {
              clientX: event.clientX,
              clientY: event.clientY,
            };
          }

          wasFocusEvent = event.type === "focus";
        },
        onHidden: function onHidden() {
          if (instance.props.followCursor) {
            unsetGetReferenceClientRect();
            removeListener();
            isUnmounted = true;
          }
        },
      };
    },
  };

  function getProps(props, modifier) {
    var _props$popperOptions;

    return {
      popperOptions: Object.assign({}, props.popperOptions, {
        modifiers: [].concat(
          (
            ((_props$popperOptions = props.popperOptions) == null
              ? void 0
              : _props$popperOptions.modifiers) || []
          ).filter(function (_ref) {
            var name = _ref.name;
            return name !== modifier.name;
          }),
          [modifier]
        ),
      }),
    };
  }

  var inlinePositioning = {
    name: "inlinePositioning",
    defaultValue: false,
    fn: function fn(instance) {
      var reference = instance.reference;

      function isEnabled() {
        return !!instance.props.inlinePositioning;
      }

      var placement;
      var cursorRectIndex = -1;
      var isInternalUpdate = false;
      var triedPlacements = [];
      var modifier = {
        name: "tippyInlinePositioning",
        enabled: true,
        phase: "afterWrite",
        fn: function fn(_ref2) {
          var state = _ref2.state;

          if (isEnabled()) {
            if (triedPlacements.indexOf(state.placement) !== -1) {
              triedPlacements = [];
            }

            if (
              placement !== state.placement &&
              triedPlacements.indexOf(state.placement) === -1
            ) {
              triedPlacements.push(state.placement);
              instance.setProps({
                // @ts-ignore - unneeded DOMRect properties
                getReferenceClientRect: function getReferenceClientRect() {
                  return _getReferenceClientRect(state.placement);
                },
              });
            }

            placement = state.placement;
          }
        },
      };

      function _getReferenceClientRect(placement) {
        return getInlineBoundingClientRect(
          getBasePlacement(placement),
          reference.getBoundingClientRect(),
          arrayFrom(reference.getClientRects()),
          cursorRectIndex
        );
      }

      function setInternalProps(partialProps) {
        isInternalUpdate = true;
        instance.setProps(partialProps);
        isInternalUpdate = false;
      }

      function addModifier() {
        if (!isInternalUpdate) {
          setInternalProps(getProps(instance.props, modifier));
        }
      }

      return {
        onCreate: addModifier,
        onAfterUpdate: addModifier,
        onTrigger: function onTrigger(_, event) {
          if (isMouseEvent(event)) {
            var rects = arrayFrom(instance.reference.getClientRects());
            var cursorRect = rects.find(function (rect) {
              return (
                rect.left - 2 <= event.clientX &&
                rect.right + 2 >= event.clientX &&
                rect.top - 2 <= event.clientY &&
                rect.bottom + 2 >= event.clientY
              );
            });
            var index = rects.indexOf(cursorRect);
            cursorRectIndex = index > -1 ? index : cursorRectIndex;
          }
        },
        onHidden: function onHidden() {
          cursorRectIndex = -1;
        },
      };
    },
  };
  function getInlineBoundingClientRect(
    currentBasePlacement,
    boundingRect,
    clientRects,
    cursorRectIndex
  ) {
    // Not an inline element, or placement is not yet known
    if (clientRects.length < 2 || currentBasePlacement === null) {
      return boundingRect;
    } // There are two rects and they are disjoined

    if (
      clientRects.length === 2 &&
      cursorRectIndex >= 0 &&
      clientRects[0].left > clientRects[1].right
    ) {
      return clientRects[cursorRectIndex] || boundingRect;
    }

    switch (currentBasePlacement) {
      case "top":
      case "bottom": {
        var firstRect = clientRects[0];
        var lastRect = clientRects[clientRects.length - 1];
        var isTop = currentBasePlacement === "top";
        var top = firstRect.top;
        var bottom = lastRect.bottom;
        var left = isTop ? firstRect.left : lastRect.left;
        var right = isTop ? firstRect.right : lastRect.right;
        var width = right - left;
        var height = bottom - top;
        return {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          width: width,
          height: height,
        };
      }

      case "left":
      case "right": {
        var minLeft = Math.min.apply(
          Math,
          clientRects.map(function (rects) {
            return rects.left;
          })
        );
        var maxRight = Math.max.apply(
          Math,
          clientRects.map(function (rects) {
            return rects.right;
          })
        );
        var measureRects = clientRects.filter(function (rect) {
          return currentBasePlacement === "left"
            ? rect.left === minLeft
            : rect.right === maxRight;
        });
        var _top = measureRects[0].top;
        var _bottom = measureRects[measureRects.length - 1].bottom;
        var _left = minLeft;
        var _right = maxRight;

        var _width = _right - _left;

        var _height = _bottom - _top;

        return {
          top: _top,
          bottom: _bottom,
          left: _left,
          right: _right,
          width: _width,
          height: _height,
        };
      }

      default: {
        return boundingRect;
      }
    }
  }

  var sticky = {
    name: "sticky",
    defaultValue: false,
    fn: function fn(instance) {
      var reference = instance.reference,
        popper = instance.popper;

      function getReference() {
        return instance.popperInstance
          ? instance.popperInstance.state.elements.reference
          : reference;
      }

      function shouldCheck(value) {
        return (
          instance.props.sticky === true || instance.props.sticky === value
        );
      }

      var prevRefRect = null;
      var prevPopRect = null;

      function updatePosition() {
        var currentRefRect = shouldCheck("reference")
          ? getReference().getBoundingClientRect()
          : null;
        var currentPopRect = shouldCheck("popper")
          ? popper.getBoundingClientRect()
          : null;

        if (
          (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect)) ||
          (currentPopRect && areRectsDifferent(prevPopRect, currentPopRect))
        ) {
          if (instance.popperInstance) {
            instance.popperInstance.update();
          }
        }

        prevRefRect = currentRefRect;
        prevPopRect = currentPopRect;

        if (instance.state.isMounted) {
          requestAnimationFrame(updatePosition);
        }
      }

      return {
        onMount: function onMount() {
          if (instance.props.sticky) {
            updatePosition();
          }
        },
      };
    },
  };

  function areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) {
      return (
        rectA.top !== rectB.top ||
        rectA.right !== rectB.right ||
        rectA.bottom !== rectB.bottom ||
        rectA.left !== rectB.left
      );
    }

    return true;
  }

  if (isBrowser) {
    injectCSS(css);
  }

  tippy.setDefaultProps({
    plugins: [animateFill, followCursor, inlinePositioning, sticky],
    render: render,
  });
  tippy.createSingleton = createSingleton;
  tippy.delegate = delegate;
  tippy.hideAll = hideAll;
  tippy.roundArrow = ROUND_ARROW;

  return tippy;
});
//# sourceMappingURL=tippy-bundle.umd.js.map
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).window =
          t.window || {})
      );
})(this, function (t) {
  "use strict";
  const e = (t, e = 1e4) => (
      (t = parseFloat(t + "") || 0), Math.round((t + Number.EPSILON) * e) / e
    ),
    i = function (t) {
      if (!(t && t instanceof Element && t.offsetParent)) return !1;
      const e = t.scrollHeight > t.clientHeight,
        i = window.getComputedStyle(t).overflowY,
        n = -1 !== i.indexOf("hidden"),
        s = -1 !== i.indexOf("visible");
      return e && !n && !s;
    },
    n = function (t, e = void 0) {
      return (
        !(!t || t === document.body || (e && t === e)) &&
        (i(t) ? t : n(t.parentElement, e))
      );
    },
    s = function (t) {
      var e = new DOMParser().parseFromString(t, "text/html").body;
      if (e.childElementCount > 1) {
        for (var i = document.createElement("div"); e.firstChild; )
          i.appendChild(e.firstChild);
        return i;
      }
      return e.firstChild;
    },
    o = (t) => `${t || ""}`.split(" ").filter((t) => !!t),
    a = (t, e, i) => {
      t &&
        o(e).forEach((e) => {
          t.classList.toggle(e, i || !1);
        });
    };
  class r {
    constructor(t) {
      Object.defineProperty(this, "pageX", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
        Object.defineProperty(this, "pageY", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "clientX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "clientY", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "id", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "time", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "nativePointer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.nativePointer = t),
        (this.pageX = t.pageX),
        (this.pageY = t.pageY),
        (this.clientX = t.clientX),
        (this.clientY = t.clientY),
        (this.id = self.Touch && t instanceof Touch ? t.identifier : -1),
        (this.time = Date.now());
    }
  }
  const l = { passive: !1 };
  class c {
    constructor(
      t,
      { start: e = () => !0, move: i = () => {}, end: n = () => {} }
    ) {
      Object.defineProperty(this, "element", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
        Object.defineProperty(this, "startCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "moveCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "endCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "currentPointers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "startPointers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        (this.element = t),
        (this.startCallback = e),
        (this.moveCallback = i),
        (this.endCallback = n);
      for (const t of [
        "onPointerStart",
        "onTouchStart",
        "onMove",
        "onTouchEnd",
        "onPointerEnd",
        "onWindowBlur",
      ])
        this[t] = this[t].bind(this);
      this.element.addEventListener("mousedown", this.onPointerStart, l),
        this.element.addEventListener("touchstart", this.onTouchStart, l),
        this.element.addEventListener("touchmove", this.onMove, l),
        this.element.addEventListener("touchend", this.onTouchEnd),
        this.element.addEventListener("touchcancel", this.onTouchEnd);
    }
    onPointerStart(t) {
      if (!t.buttons || 0 !== t.button) return;
      const e = new r(t);
      this.currentPointers.some((t) => t.id === e.id) ||
        (this.triggerPointerStart(e, t) &&
          (window.addEventListener("mousemove", this.onMove),
          window.addEventListener("mouseup", this.onPointerEnd),
          window.addEventListener("blur", this.onWindowBlur)));
    }
    onTouchStart(t) {
      for (const e of Array.from(t.changedTouches || []))
        this.triggerPointerStart(new r(e), t);
      window.addEventListener("blur", this.onWindowBlur);
    }
    onMove(t) {
      const e = this.currentPointers.slice(),
        i =
          "changedTouches" in t
            ? Array.from(t.changedTouches || []).map((t) => new r(t))
            : [new r(t)],
        n = [];
      for (const t of i) {
        const e = this.currentPointers.findIndex((e) => e.id === t.id);
        e < 0 || (n.push(t), (this.currentPointers[e] = t));
      }
      n.length && this.moveCallback(t, this.currentPointers.slice(), e);
    }
    onPointerEnd(t) {
      (t.buttons > 0 && 0 !== t.button) ||
        (this.triggerPointerEnd(t, new r(t)),
        window.removeEventListener("mousemove", this.onMove),
        window.removeEventListener("mouseup", this.onPointerEnd),
        window.removeEventListener("blur", this.onWindowBlur));
    }
    onTouchEnd(t) {
      for (const e of Array.from(t.changedTouches || []))
        this.triggerPointerEnd(t, new r(e));
    }
    triggerPointerStart(t, e) {
      return (
        !!this.startCallback(e, t, this.currentPointers.slice()) &&
        (this.currentPointers.push(t), this.startPointers.push(t), !0)
      );
    }
    triggerPointerEnd(t, e) {
      const i = this.currentPointers.findIndex((t) => t.id === e.id);
      i < 0 ||
        (this.currentPointers.splice(i, 1),
        this.startPointers.splice(i, 1),
        this.endCallback(t, e, this.currentPointers.slice()));
    }
    onWindowBlur() {
      this.clear();
    }
    clear() {
      for (; this.currentPointers.length; ) {
        const t = this.currentPointers[this.currentPointers.length - 1];
        this.currentPointers.splice(this.currentPointers.length - 1, 1),
          this.startPointers.splice(this.currentPointers.length - 1, 1),
          this.endCallback(
            new Event("touchend", {
              bubbles: !0,
              cancelable: !0,
              clientX: t.clientX,
              clientY: t.clientY,
            }),
            t,
            this.currentPointers.slice()
          );
      }
    }
    stop() {
      this.element.removeEventListener("mousedown", this.onPointerStart, l),
        this.element.removeEventListener("touchstart", this.onTouchStart, l),
        this.element.removeEventListener("touchmove", this.onMove, l),
        this.element.removeEventListener("touchend", this.onTouchEnd),
        this.element.removeEventListener("touchcancel", this.onTouchEnd),
        window.removeEventListener("mousemove", this.onMove),
        window.removeEventListener("mouseup", this.onPointerEnd),
        window.removeEventListener("blur", this.onWindowBlur);
    }
  }
  function h(t, e) {
    return e
      ? Math.sqrt(
          Math.pow(e.clientX - t.clientX, 2) +
            Math.pow(e.clientY - t.clientY, 2)
        )
      : 0;
  }
  function d(t, e) {
    return e
      ? {
          clientX: (t.clientX + e.clientX) / 2,
          clientY: (t.clientY + e.clientY) / 2,
        }
      : t;
  }
  const u = (t) =>
      "object" == typeof t &&
      null !== t &&
      t.constructor === Object &&
      "[object Object]" === Object.prototype.toString.call(t),
    p = (t, ...e) => {
      const i = e.length;
      for (let n = 0; n < i; n++) {
        const i = e[n] || {};
        Object.entries(i).forEach(([e, i]) => {
          const n = Array.isArray(i) ? [] : {};
          t[e] || Object.assign(t, { [e]: n }),
            u(i)
              ? Object.assign(t[e], p(n, i))
              : Array.isArray(i)
              ? Object.assign(t, { [e]: [...i] })
              : Object.assign(t, { [e]: i });
        });
      }
      return t;
    },
    f = function (t, e) {
      return t
        .split(".")
        .reduce((t, e) => ("object" == typeof t ? t[e] : void 0), e);
    };
  class g {
    constructor(t = {}) {
      Object.defineProperty(this, "options", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "events", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        this.setOptions(t);
      for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
        t.startsWith("on") &&
          "function" == typeof this[t] &&
          (this[t] = this[t].bind(this));
    }
    setOptions(t) {
      this.options = t ? p({}, this.constructor.defaults, t) : {};
      for (const [t, e] of Object.entries(this.option("on") || {}))
        this.on(t, e);
    }
    option(t, ...e) {
      let i = f(t, this.options);
      return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
    }
    optionFor(t, e, i, ...n) {
      let s = f(e, t);
      var o;
      "string" != typeof (o = s) ||
        isNaN(o) ||
        isNaN(parseFloat(o)) ||
        (s = parseFloat(s)),
        "true" === s && (s = !0),
        "false" === s && (s = !1),
        s && "function" == typeof s && (s = s.call(this, this, t, ...n));
      let a = f(e, this.options);
      return (
        a && "function" == typeof a
          ? (s = a.call(this, this, t, ...n, s))
          : void 0 === s && (s = a),
        void 0 === s ? i : s
      );
    }
    cn(t) {
      const e = this.options.classes;
      return (e && e[t]) || "";
    }
    localize(t, e = []) {
      t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, e, i) => {
        let n = "";
        return (
          i
            ? (n = this.option(
                `${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`
              ))
            : e && (n = this.option(`l10n.${e}`)),
          n || (n = t),
          n
        );
      });
      for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
      return (t = t.replace(/\{\{(.*?)\}\}/g, (t, e) => e));
    }
    on(t, e) {
      let i = [];
      "string" == typeof t ? (i = t.split(" ")) : Array.isArray(t) && (i = t),
        this.events || (this.events = new Map()),
        i.forEach((t) => {
          let i = this.events.get(t);
          i || (this.events.set(t, []), (i = [])),
            i.includes(e) || i.push(e),
            this.events.set(t, i);
        });
    }
    off(t, e) {
      let i = [];
      "string" == typeof t ? (i = t.split(" ")) : Array.isArray(t) && (i = t),
        i.forEach((t) => {
          const i = this.events.get(t);
          if (Array.isArray(i)) {
            const t = i.indexOf(e);
            t > -1 && i.splice(t, 1);
          }
        });
    }
    emit(t, ...e) {
      [...(this.events.get(t) || [])].forEach((t) => t(this, ...e)),
        "*" !== t && this.emit("*", t, ...e);
    }
  }
  Object.defineProperty(g, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.36",
  }),
    Object.defineProperty(g, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {},
    });
  class m extends g {
    constructor(t = {}) {
      super(t),
        Object.defineProperty(this, "plugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        });
    }
    attachPlugins(t = {}) {
      const e = new Map();
      for (const [i, n] of Object.entries(t)) {
        const t = this.option(i),
          s = this.plugins[i];
        s || !1 === t
          ? s && !1 === t && (s.detach(), delete this.plugins[i])
          : e.set(i, new n(this, t || {}));
      }
      for (const [t, i] of e) (this.plugins[t] = i), i.attach();
    }
    detachPlugins(t) {
      t = t || Object.keys(this.plugins);
      for (const e of t) {
        const t = this.plugins[e];
        t && t.detach(), delete this.plugins[e];
      }
      return this.emit("detachPlugins"), this;
    }
  }
  var v;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Error = 1)] = "Error"),
      (t[(t.Ready = 2)] = "Ready"),
      (t[(t.Panning = 3)] = "Panning"),
      (t[(t.Mousemove = 4)] = "Mousemove"),
      (t[(t.Destroy = 5)] = "Destroy");
  })(v || (v = {}));
  const b = ["a", "b", "c", "d", "e", "f"],
    y = {
      PANUP: "Move up",
      PANDOWN: "Move down",
      PANLEFT: "Move left",
      PANRIGHT: "Move right",
      ZOOMIN: "Zoom in",
      ZOOMOUT: "Zoom out",
      TOGGLEZOOM: "Toggle zoom level",
      TOGGLE1TO1: "Toggle zoom level",
      ITERATEZOOM: "Toggle zoom level",
      ROTATECCW: "Rotate counterclockwise",
      ROTATECW: "Rotate clockwise",
      FLIPX: "Flip horizontally",
      FLIPY: "Flip vertically",
      FITX: "Fit horizontally",
      FITY: "Fit vertically",
      RESET: "Reset",
      TOGGLEFS: "Toggle fullscreen",
    },
    w = {
      content: null,
      width: "auto",
      height: "auto",
      panMode: "drag",
      touch: !0,
      dragMinThreshold: 3,
      lockAxis: !1,
      mouseMoveFactor: 1,
      mouseMoveFriction: 0.12,
      zoom: !0,
      pinchToZoom: !0,
      panOnlyZoomed: "auto",
      minScale: 1,
      maxScale: 2,
      friction: 0.25,
      dragFriction: 0.35,
      decelFriction: 0.05,
      click: "toggleZoom",
      dblClick: !1,
      wheel: "zoom",
      wheelLimit: 7,
      spinner: !0,
      bounds: "auto",
      infinite: !1,
      rubberband: !0,
      bounce: !0,
      maxVelocity: 75,
      transformParent: !1,
      classes: {
        content: "f-panzoom__content",
        isLoading: "is-loading",
        canZoomIn: "can-zoom_in",
        canZoomOut: "can-zoom_out",
        isDraggable: "is-draggable",
        isDragging: "is-dragging",
        inFullscreen: "in-fullscreen",
        htmlHasFullscreen: "with-panzoom-in-fullscreen",
      },
      l10n: y,
    },
    x = '<circle cx="25" cy="25" r="20"></circle>',
    E =
      '<div class="f-spinner"><svg viewBox="0 0 50 50">' +
      x +
      x +
      "</svg></div>",
    S = (t) => t && null !== t && t instanceof Element && "nodeType" in t,
    P = (t, e) => {
      t &&
        o(e).forEach((e) => {
          t.classList.remove(e);
        });
    },
    C = (t, e) => {
      t &&
        o(e).forEach((e) => {
          t.classList.add(e);
        });
    },
    T = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
    M = 1e5,
    O = 1e4,
    A = "mousemove",
    L = "drag",
    z = "content",
    R = "auto";
  let k = null,
    I = null;
  class D extends m {
    get fits() {
      return (
        this.contentRect.width - this.contentRect.fitWidth < 1 &&
        this.contentRect.height - this.contentRect.fitHeight < 1
      );
    }
    get isTouchDevice() {
      return null === I && (I = window.matchMedia("(hover: none)").matches), I;
    }
    get isMobile() {
      return (
        null === k &&
          (k = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
        k
      );
    }
    get panMode() {
      return this.options.panMode !== A || this.isTouchDevice ? L : A;
    }
    get panOnlyZoomed() {
      const t = this.options.panOnlyZoomed;
      return t === R ? this.isTouchDevice : t;
    }
    get isInfinite() {
      return this.option("infinite");
    }
    get angle() {
      return (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0;
    }
    get targetAngle() {
      return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
    }
    get scale() {
      const { a: t, b: e } = this.current;
      return Math.sqrt(t * t + e * e) || 1;
    }
    get targetScale() {
      const { a: t, b: e } = this.target;
      return Math.sqrt(t * t + e * e) || 1;
    }
    get minScale() {
      return this.option("minScale") || 1;
    }
    get fullScale() {
      const { contentRect: t } = this;
      return t.fullWidth / t.fitWidth || 1;
    }
    get maxScale() {
      return this.fullScale * (this.option("maxScale") || 1) || 1;
    }
    get coverScale() {
      const { containerRect: t, contentRect: e } = this,
        i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
      return Math.min(this.fullScale, i);
    }
    get isScaling() {
      return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
    }
    get isContentLoading() {
      const t = this.content;
      return !!(t && t instanceof HTMLImageElement) && !t.complete;
    }
    get isResting() {
      if (this.isBouncingX || this.isBouncingY) return !1;
      for (const t of b) {
        const e = "e" == t || "f" === t ? 1e-4 : 1e-5;
        if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
      }
      return !(!this.ignoreBounds && !this.checkBounds().inBounds);
    }
    constructor(t, e = {}, i = {}) {
      var n;
      if (
        (super(e),
        Object.defineProperty(this, "pointerTracker", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "resizeObserver", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "updateTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "clickTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "rAF", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "isTicking", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "ignoreBounds", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "isBouncingX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "isBouncingY", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "clicks", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "trackingPoints", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "pwt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "cwd", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "pmme", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "friction", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: v.Init,
        }),
        Object.defineProperty(this, "isDragging", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "content", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "spinner", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "containerRect", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
        }),
        Object.defineProperty(this, "contentRect", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            fullWidth: 0,
            fullHeight: 0,
            fitWidth: 0,
            fitHeight: 0,
            width: 0,
            height: 0,
          },
        }),
        Object.defineProperty(this, "dragStart", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
        }),
        Object.defineProperty(this, "dragOffset", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: { x: 0, y: 0, time: 0 },
        }),
        Object.defineProperty(this, "current", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Object.assign({}, T),
        }),
        Object.defineProperty(this, "target", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Object.assign({}, T),
        }),
        Object.defineProperty(this, "velocity", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
        }),
        Object.defineProperty(this, "lockedAxis", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        !t)
      )
        throw new Error("Container Element Not Found");
      (this.container = t),
        this.initContent(),
        this.attachPlugins(Object.assign(Object.assign({}, D.Plugins), i)),
        this.emit("attachPlugins"),
        this.emit("init");
      const o = this.content;
      if (
        (o.addEventListener("load", this.onLoad),
        o.addEventListener("error", this.onError),
        this.isContentLoading)
      ) {
        if (this.option("spinner")) {
          t.classList.add(this.cn("isLoading"));
          const e = s(E);
          !t.contains(o) || o.parentElement instanceof HTMLPictureElement
            ? (this.spinner = t.appendChild(e))
            : (this.spinner =
                (null === (n = o.parentElement) || void 0 === n
                  ? void 0
                  : n.insertBefore(e, o)) || null);
        }
        this.emit("beforeLoad");
      } else
        queueMicrotask(() => {
          this.enable();
        });
    }
    initContent() {
      const { container: t } = this,
        e = this.cn(z);
      let i = this.option(z) || t.querySelector(`.${e}`);
      if (
        (i ||
          ((i = t.querySelector("img,picture") || t.firstElementChild),
          i && C(i, e)),
        i instanceof HTMLPictureElement && (i = i.querySelector("img")),
        !i)
      )
        throw new Error("No content found");
      this.content = i;
    }
    onLoad() {
      const { spinner: t, container: e, state: i } = this;
      t && (t.remove(), (this.spinner = null)),
        this.option("spinner") && e.classList.remove(this.cn("isLoading")),
        this.emit("afterLoad"),
        i === v.Init ? this.enable() : this.updateMetrics();
    }
    onError() {
      this.state !== v.Destroy &&
        (this.spinner && (this.spinner.remove(), (this.spinner = null)),
        this.stop(),
        this.detachEvents(),
        (this.state = v.Error),
        this.emit("error"));
    }
    getNextScale(t) {
      const {
        fullScale: e,
        targetScale: i,
        coverScale: n,
        maxScale: s,
        minScale: o,
      } = this;
      let a = o;
      switch (t) {
        case "toggleMax":
          a = i - o < 0.5 * (s - o) ? s : o;
          break;
        case "toggleCover":
          a = i - o < 0.5 * (n - o) ? n : o;
          break;
        case "toggleZoom":
          a = i - o < 0.5 * (e - o) ? e : o;
          break;
        case "iterateZoom":
          let t = [1, e, s].sort((t, e) => t - e),
            r = t.findIndex((t) => t > i + 1e-5);
          a = t[r] || 1;
      }
      return a;
    }
    attachObserver() {
      var t;
      const e = () => {
        const { container: t, containerRect: e } = this;
        return (
          Math.abs(e.width - t.getBoundingClientRect().width) > 0.1 ||
          Math.abs(e.height - t.getBoundingClientRect().height) > 0.1
        );
      };
      this.resizeObserver ||
        void 0 === window.ResizeObserver ||
        (this.resizeObserver = new ResizeObserver(() => {
          this.updateTimer ||
            (e()
              ? (this.onResize(),
                this.isMobile &&
                  (this.updateTimer = setTimeout(() => {
                    e() && this.onResize(), (this.updateTimer = null);
                  }, 500)))
              : this.updateTimer &&
                (clearTimeout(this.updateTimer), (this.updateTimer = null)));
        })),
        null === (t = this.resizeObserver) ||
          void 0 === t ||
          t.observe(this.container);
    }
    detachObserver() {
      var t;
      null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
    }
    attachEvents() {
      const { container: t } = this;
      t.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
        t.addEventListener("wheel", this.onWheel, { passive: !1 }),
        (this.pointerTracker = new c(t, {
          start: this.onPointerDown,
          move: this.onPointerMove,
          end: this.onPointerUp,
        })),
        document.addEventListener(A, this.onMouseMove);
    }
    detachEvents() {
      var t;
      const { container: e } = this;
      e.removeEventListener("click", this.onClick, {
        passive: !1,
        capture: !1,
      }),
        e.removeEventListener("wheel", this.onWheel, { passive: !1 }),
        null === (t = this.pointerTracker) || void 0 === t || t.stop(),
        (this.pointerTracker = null),
        document.removeEventListener(A, this.onMouseMove),
        document.removeEventListener("keydown", this.onKeydown, !0),
        this.clickTimer &&
          (clearTimeout(this.clickTimer), (this.clickTimer = null)),
        this.updateTimer &&
          (clearTimeout(this.updateTimer), (this.updateTimer = null));
    }
    animate() {
      this.setTargetForce();
      const t = this.friction,
        e = this.option("maxVelocity");
      for (const i of b)
        t
          ? ((this.velocity[i] *= 1 - t),
            e &&
              !this.isScaling &&
              (this.velocity[i] = Math.max(
                Math.min(this.velocity[i], e),
                -1 * e
              )),
            (this.current[i] += this.velocity[i]))
          : (this.current[i] = this.target[i]);
      this.setTransform(),
        this.setEdgeForce(),
        !this.isResting || this.isDragging
          ? (this.rAF = requestAnimationFrame(() => this.animate()))
          : this.stop("current");
    }
    setTargetForce() {
      for (const t of b)
        ("e" === t && this.isBouncingX) ||
          ("f" === t && this.isBouncingY) ||
          (this.velocity[t] =
            (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
    }
    checkBounds(t = 0, e = 0) {
      const { current: i } = this,
        n = i.e + t,
        s = i.f + e,
        o = this.getBounds(),
        { x: a, y: r } = o,
        l = a.min,
        c = a.max,
        h = r.min,
        d = r.max;
      let u = 0,
        p = 0;
      return (
        l !== 1 / 0 && n < l
          ? (u = l - n)
          : c !== 1 / 0 && n > c && (u = c - n),
        h !== 1 / 0 && s < h
          ? (p = h - s)
          : d !== 1 / 0 && s > d && (p = d - s),
        Math.abs(u) < 1e-4 && (u = 0),
        Math.abs(p) < 1e-4 && (p = 0),
        Object.assign(Object.assign({}, o), {
          xDiff: u,
          yDiff: p,
          inBounds: !u && !p,
        })
      );
    }
    clampTargetBounds() {
      const { target: t } = this,
        { x: e, y: i } = this.getBounds();
      e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)),
        e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)),
        i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)),
        i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
    }
    calculateContentDim(t = this.current) {
      const { content: e, contentRect: i } = this,
        { fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a } = i;
      let r = o,
        l = a;
      if (this.option("zoom") || 0 !== this.angle) {
        const i =
            !(e instanceof HTMLImageElement) &&
            ("none" === window.getComputedStyle(e).maxWidth ||
              "none" === window.getComputedStyle(e).maxHeight),
          c = i ? o : n,
          h = i ? a : s,
          d = this.getMatrix(t),
          u = new DOMPoint(0, 0).matrixTransform(d),
          p = new DOMPoint(0 + c, 0).matrixTransform(d),
          f = new DOMPoint(0 + c, 0 + h).matrixTransform(d),
          g = new DOMPoint(0, 0 + h).matrixTransform(d),
          m = Math.abs(f.x - u.x),
          v = Math.abs(f.y - u.y),
          b = Math.abs(g.x - p.x),
          y = Math.abs(g.y - p.y);
        (r = Math.max(m, b)), (l = Math.max(v, y));
      }
      return { contentWidth: r, contentHeight: l };
    }
    setEdgeForce() {
      if (
        this.ignoreBounds ||
        this.isDragging ||
        this.panMode === A ||
        this.targetScale < this.scale
      )
        return (this.isBouncingX = !1), void (this.isBouncingY = !1);
      const { target: t } = this,
        { x: e, y: i, xDiff: n, yDiff: s } = this.checkBounds();
      const o = this.option("maxVelocity");
      let a = this.velocity.e,
        r = this.velocity.f;
      0 !== n
        ? ((this.isBouncingX = !0),
          n * a <= 0
            ? (a += 0.14 * n)
            : ((a = 0.14 * n),
              e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)),
              e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))),
          o && (a = Math.max(Math.min(a, o), -1 * o)))
        : (this.isBouncingX = !1),
        0 !== s
          ? ((this.isBouncingY = !0),
            s * r <= 0
              ? (r += 0.14 * s)
              : ((r = 0.14 * s),
                i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)),
                i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))),
            o && (r = Math.max(Math.min(r, o), -1 * o)))
          : (this.isBouncingY = !1),
        this.isBouncingX && (this.velocity.e = a),
        this.isBouncingY && (this.velocity.f = r);
    }
    enable() {
      const { content: t } = this,
        e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
      for (const t of b) this.current[t] = this.target[t] = e[t];
      this.updateMetrics(),
        this.attachObserver(),
        this.attachEvents(),
        (this.state = v.Ready),
        this.emit("ready");
    }
    onClick(t) {
      var e;
      "click" === t.type &&
        0 === t.detail &&
        ((this.dragOffset.x = 0), (this.dragOffset.y = 0)),
        this.isDragging &&
          (null === (e = this.pointerTracker) || void 0 === e || e.clear(),
          (this.trackingPoints = []),
          this.startDecelAnim());
      const i = t.target;
      if (!i || t.defaultPrevented) return;
      if (i.hasAttribute("disabled"))
        return t.preventDefault(), void t.stopPropagation();
      if (
        (() => {
          const t = window.getSelection();
          return t && "Range" === t.type;
        })() &&
        !i.closest("button")
      )
        return;
      const n = i.closest("[data-panzoom-action]"),
        s = i.closest("[data-panzoom-change]"),
        o = n || s,
        a = o && S(o) ? o.dataset : null;
      if (a) {
        const e = a.panzoomChange,
          i = a.panzoomAction;
        if (((e || i) && t.preventDefault(), e)) {
          let t = {};
          try {
            t = JSON.parse(e);
          } catch (t) {
            console && console.warn("The given data was not valid JSON");
          }
          return void this.applyChange(t);
        }
        if (i) return void (this[i] && this[i]());
      }
      if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
        return t.preventDefault(), void t.stopPropagation();
      if (i.closest("[data-fancybox]")) return;
      const r = this.content.getBoundingClientRect(),
        l = this.dragStart;
      if (
        l.time &&
        !this.canZoomOut() &&
        (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)
      )
        return;
      this.dragStart.time = 0;
      const c = (e) => {
          this.option("zoom", t) &&
            e &&
            "string" == typeof e &&
            /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
              e
            ) &&
            "function" == typeof this[e] &&
            (t.preventDefault(), this[e]({ event: t }));
        },
        h = this.option("click", t),
        d = this.option("dblClick", t);
      d
        ? (this.clicks++,
          1 == this.clicks &&
            (this.clickTimer = setTimeout(() => {
              1 === this.clicks
                ? (this.emit("click", t), !t.defaultPrevented && h && c(h))
                : (this.emit("dblClick", t), t.defaultPrevented || c(d)),
                (this.clicks = 0),
                (this.clickTimer = null);
            }, 350)))
        : (this.emit("click", t), !t.defaultPrevented && h && c(h));
    }
    addTrackingPoint(t) {
      const e = this.trackingPoints.filter((t) => t.time > Date.now() - 100);
      e.push(t), (this.trackingPoints = e);
    }
    onPointerDown(t, e, i) {
      var n;
      if (!1 === this.option("touch", t)) return !1;
      (this.pwt = 0),
        (this.dragOffset = { x: 0, y: 0, time: 0 }),
        (this.trackingPoints = []);
      const s = this.content.getBoundingClientRect();
      if (
        ((this.dragStart = {
          x: s.x,
          y: s.y,
          top: s.top,
          left: s.left,
          time: Date.now(),
        }),
        this.clickTimer)
      )
        return !1;
      if (this.panMode === A && this.targetScale > 1)
        return t.preventDefault(), t.stopPropagation(), !1;
      const o = t.composedPath()[0];
      if (!i.length) {
        if (
          ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(
            o.nodeName
          ) ||
          o.closest(
            "[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"
          )
        )
          return !1;
        null === (n = window.getSelection()) ||
          void 0 === n ||
          n.removeAllRanges();
      }
      if ("mousedown" === t.type)
        ["A", "BUTTON"].includes(o.nodeName) || t.preventDefault();
      else if (Math.abs(this.velocity.a) > 0.3) return !1;
      return (
        (this.target.e = this.current.e),
        (this.target.f = this.current.f),
        this.stop(),
        this.isDragging ||
          ((this.isDragging = !0),
          this.addTrackingPoint(e),
          this.emit("touchStart", t)),
        !0
      );
    }
    onPointerMove(t, i, s) {
      if (!1 === this.option("touch", t)) return;
      if (!this.isDragging) return;
      if (
        i.length < 2 &&
        this.panOnlyZoomed &&
        e(this.targetScale) <= e(this.minScale)
      )
        return;
      if ((this.emit("touchMove", t), t.defaultPrevented)) return;
      this.addTrackingPoint(i[0]);
      const { content: o } = this,
        a = d(s[0], s[1]),
        r = d(i[0], i[1]);
      let l = 0,
        c = 0;
      if (i.length > 1) {
        const t = o.getBoundingClientRect();
        (l = a.clientX - t.left - 0.5 * t.width),
          (c = a.clientY - t.top - 0.5 * t.height);
      }
      const u = h(s[0], s[1]),
        p = h(i[0], i[1]);
      let f = u ? p / u : 1,
        g = r.clientX - a.clientX,
        m = r.clientY - a.clientY;
      (this.dragOffset.x += g),
        (this.dragOffset.y += m),
        (this.dragOffset.time = Date.now() - this.dragStart.time);
      let v =
        e(this.targetScale) === e(this.minScale) && this.option("lockAxis");
      if (v && !this.lockedAxis)
        if ("xy" === v || "y" === v || "touchmove" === t.type) {
          if (
            Math.abs(this.dragOffset.x) < 6 &&
            Math.abs(this.dragOffset.y) < 6
          )
            return void t.preventDefault();
          const e = Math.abs(
            (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
          );
          (this.lockedAxis = e > 45 && e < 135 ? "y" : "x"),
            (this.dragOffset.x = 0),
            (this.dragOffset.y = 0),
            (g = 0),
            (m = 0);
        } else this.lockedAxis = v;
      if (
        (n(t.target, this.content) && ((v = "x"), (this.dragOffset.y = 0)),
        v &&
          "xy" !== v &&
          this.lockedAxis !== v &&
          e(this.targetScale) === e(this.minScale))
      )
        return;
      t.cancelable && t.preventDefault(),
        this.container.classList.add(this.cn("isDragging"));
      const b = this.checkBounds(g, m);
      this.option("rubberband")
        ? ("x" !== this.isInfinite &&
            ((b.xDiff > 0 && g < 0) || (b.xDiff < 0 && g > 0)) &&
            (g *= Math.max(
              0,
              0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * b.xDiff)
            )),
          "y" !== this.isInfinite &&
            ((b.yDiff > 0 && m < 0) || (b.yDiff < 0 && m > 0)) &&
            (m *= Math.max(
              0,
              0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * b.yDiff)
            )))
        : (b.xDiff && (g = 0), b.yDiff && (m = 0));
      const y = this.targetScale,
        w = this.minScale,
        x = this.maxScale;
      y < 0.5 * w && (f = Math.max(f, w)),
        y > 1.5 * x && (f = Math.min(f, x)),
        "y" === this.lockedAxis && e(y) === e(w) && (g = 0),
        "x" === this.lockedAxis && e(y) === e(w) && (m = 0),
        this.applyChange({
          originX: l,
          originY: c,
          panX: g,
          panY: m,
          scale: f,
          friction: this.option("dragFriction"),
          ignoreBounds: !0,
        });
    }
    onPointerUp(t, e, i) {
      if (i.length)
        return (
          (this.dragOffset.x = 0),
          (this.dragOffset.y = 0),
          void (this.trackingPoints = [])
        );
      this.container.classList.remove(this.cn("isDragging")),
        this.isDragging &&
          (this.addTrackingPoint(e),
          this.panOnlyZoomed &&
            this.contentRect.width - this.contentRect.fitWidth < 1 &&
            this.contentRect.height - this.contentRect.fitHeight < 1 &&
            (this.trackingPoints = []),
          n(t.target, this.content) &&
            "y" === this.lockedAxis &&
            (this.trackingPoints = []),
          this.emit("touchEnd", t),
          (this.isDragging = !1),
          (this.lockedAxis = !1),
          this.state !== v.Destroy &&
            (t.defaultPrevented || this.startDecelAnim()));
    }
    startDecelAnim() {
      var t;
      const i = this.isScaling;
      this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
        (this.isBouncingX = !1),
        (this.isBouncingY = !1);
      for (const t of b) this.velocity[t] = 0;
      (this.target.e = this.current.e),
        (this.target.f = this.current.f),
        P(this.container, "is-scaling"),
        P(this.container, "is-animating"),
        (this.isTicking = !1);
      const { trackingPoints: n } = this,
        s = n[0],
        o = n[n.length - 1];
      let a = 0,
        r = 0,
        l = 0;
      o &&
        s &&
        ((a = o.clientX - s.clientX),
        (r = o.clientY - s.clientY),
        (l = o.time - s.time));
      const c =
        (null === (t = window.visualViewport) || void 0 === t
          ? void 0
          : t.scale) || 1;
      1 !== c && ((a *= c), (r *= c));
      let h = 0,
        d = 0,
        u = 0,
        p = 0,
        f = this.option("decelFriction");
      const g = this.targetScale;
      if (l > 0) {
        (u = Math.abs(a) > 3 ? a / (l / 30) : 0),
          (p = Math.abs(r) > 3 ? r / (l / 30) : 0);
        const t = this.option("maxVelocity");
        t &&
          ((u = Math.max(Math.min(u, t), -1 * t)),
          (p = Math.max(Math.min(p, t), -1 * t)));
      }
      u && (h = u / (1 / (1 - f) - 1)),
        p && (d = p / (1 / (1 - f) - 1)),
        ("y" === this.option("lockAxis") ||
          ("xy" === this.option("lockAxis") &&
            "y" === this.lockedAxis &&
            e(g) === this.minScale)) &&
          (h = u = 0),
        ("x" === this.option("lockAxis") ||
          ("xy" === this.option("lockAxis") &&
            "x" === this.lockedAxis &&
            e(g) === this.minScale)) &&
          (d = p = 0);
      const m = this.dragOffset.x,
        v = this.dragOffset.y,
        y = this.option("dragMinThreshold") || 0;
      Math.abs(m) < y && Math.abs(v) < y && ((h = d = 0), (u = p = 0)),
        ((this.option("zoom") &&
          (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5)) ||
          (i && !h && !d)) &&
          (f = 0.35),
        this.applyChange({ panX: h, panY: d, friction: f }),
        this.emit("decel", u, p, m, v);
    }
    onWheel(t) {
      var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (
        t,
        e
      ) {
        return Math.abs(e) > Math.abs(t) ? e : t;
      });
      const i = Math.max(-1, Math.min(1, e));
      if ((this.emit("wheel", t, i), this.panMode === A)) return;
      if (t.defaultPrevented) return;
      const n = this.option("wheel");
      "pan" === n
        ? (t.preventDefault(),
          (this.panOnlyZoomed && !this.canZoomOut()) ||
            this.applyChange({
              panX: 2 * -t.deltaX,
              panY: 2 * -t.deltaY,
              bounce: !1,
            }))
        : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
    }
    onMouseMove(t) {
      this.panWithMouse(t);
    }
    onKeydown(t) {
      "Escape" === t.key && this.toggleFS();
    }
    onResize() {
      this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
    }
    setTransform() {
      this.emit("beforeTransform");
      const { current: t, target: i, content: n, contentRect: s } = this,
        o = Object.assign({}, T);
      for (const n of b) {
        const s = "e" == n || "f" === n ? O : M;
        (o[n] = e(t[n], s)),
          Math.abs(i[n] - t[n]) < ("e" == n || "f" === n ? 0.51 : 0.001) &&
            (t[n] = i[n]);
      }
      let { a: a, b: r, c: l, d: c, e: h, f: d } = o,
        u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,
        p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
      if (
        (this.option("transformParent") && (p = p.parentElement || p),
        p.style.transform === u)
      )
        return;
      p.style.transform = u;
      const { contentWidth: f, contentHeight: g } = this.calculateContentDim();
      (s.width = f), (s.height = g), this.emit("afterTransform");
    }
    updateMetrics(t = !1) {
      var i;
      if (!this || this.state === v.Destroy) return;
      if (this.isContentLoading) return;
      const n = Math.max(
          1,
          (null === (i = window.visualViewport) || void 0 === i
            ? void 0
            : i.scale) || 1
        ),
        { container: s, content: o } = this,
        a = o instanceof HTMLImageElement,
        r = s.getBoundingClientRect(),
        l = getComputedStyle(this.container);
      let c = r.width * n,
        h = r.height * n;
      const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
        u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
        p = h - d;
      this.containerRect = {
        width: c,
        height: h,
        innerWidth: u,
        innerHeight: p,
      };
      const f =
          parseFloat(o.dataset.width || "") ||
          ((t) => {
            let e = 0;
            return (
              (e =
                t instanceof HTMLImageElement
                  ? t.naturalWidth
                  : t instanceof SVGElement
                  ? t.width.baseVal.value
                  : Math.max(t.offsetWidth, t.scrollWidth)),
              e || 0
            );
          })(o),
        g =
          parseFloat(o.dataset.height || "") ||
          ((t) => {
            let e = 0;
            return (
              (e =
                t instanceof HTMLImageElement
                  ? t.naturalHeight
                  : t instanceof SVGElement
                  ? t.height.baseVal.value
                  : Math.max(t.offsetHeight, t.scrollHeight)),
              e || 0
            );
          })(o);
      let m = this.option("width", f) || R,
        b = this.option("height", g) || R;
      const y = m === R,
        w = b === R;
      "number" != typeof m && (m = f),
        "number" != typeof b && (b = g),
        y && (m = f * (b / g)),
        w && (b = g / (f / m));
      let x =
        o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
      this.option("transformParent") && (x = x.parentElement || x);
      const E = x.getAttribute("style") || "";
      x.style.setProperty("transform", "none", "important"),
        a && ((x.style.width = ""), (x.style.height = "")),
        x.offsetHeight;
      const S = o.getBoundingClientRect();
      let P = S.width * n,
        C = S.height * n,
        T = P,
        M = C;
      (P = Math.min(P, m)),
        (C = Math.min(C, b)),
        a
          ? ({ width: P, height: C } = ((t, e, i, n) => {
              const s = i / t,
                o = n / e,
                a = Math.min(s, o);
              return { width: (t *= a), height: (e *= a) };
            })(m, b, P, C))
          : ((P = Math.min(P, m)), (C = Math.min(C, b)));
      let O = 0.5 * (M - C),
        A = 0.5 * (T - P);
      (this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
        top: S.top - r.top + O,
        bottom: r.bottom - S.bottom + O,
        left: S.left - r.left + A,
        right: r.right - S.right + A,
        fitWidth: P,
        fitHeight: C,
        width: P,
        height: C,
        fullWidth: m,
        fullHeight: b,
      })),
        (x.style.cssText = E),
        a && ((x.style.width = `${P}px`), (x.style.height = `${C}px`)),
        this.setTransform(),
        !0 !== t && this.emit("refresh"),
        this.ignoreBounds ||
          (e(this.targetScale) < e(this.minScale)
            ? this.zoomTo(this.minScale, { friction: 0 })
            : this.targetScale > this.maxScale
            ? this.zoomTo(this.maxScale, { friction: 0 })
            : this.state === v.Init ||
              this.checkBounds().inBounds ||
              this.requestTick()),
        this.updateControls();
    }
    calculateBounds() {
      const { contentWidth: t, contentHeight: i } = this.calculateContentDim(
          this.target
        ),
        { targetScale: n, lockedAxis: s } = this,
        { fitWidth: o, fitHeight: a } = this.contentRect;
      let r = 0,
        l = 0,
        c = 0,
        h = 0;
      const d = this.option("infinite");
      if (!0 === d || (s && d === s))
        (r = -1 / 0), (c = 1 / 0), (l = -1 / 0), (h = 1 / 0);
      else {
        let { containerRect: s, contentRect: d } = this,
          u = e(o * n, O),
          p = e(a * n, O),
          { innerWidth: f, innerHeight: g } = s;
        if (
          (s.width === u && (f = s.width),
          s.width === p && (g = s.height),
          t > f)
        ) {
          (c = 0.5 * (t - f)), (r = -1 * c);
          let e = 0.5 * (d.right - d.left);
          (r += e), (c += e);
        }
        if (
          (o > f && t < f && ((r -= 0.5 * (o - f)), (c -= 0.5 * (o - f))),
          i > g)
        ) {
          (h = 0.5 * (i - g)), (l = -1 * h);
          let t = 0.5 * (d.bottom - d.top);
          (l += t), (h += t);
        }
        a > g && i < g && ((r -= 0.5 * (a - g)), (c -= 0.5 * (a - g)));
      }
      return { x: { min: r, max: c }, y: { min: l, max: h } };
    }
    getBounds() {
      const t = this.option("bounds");
      return t !== R ? t : this.calculateBounds();
    }
    updateControls() {
      const t = this,
        i = t.container,
        { panMode: n, contentRect: s, targetScale: o, minScale: r } = t;
      let l = r,
        c = t.option("click") || !1;
      c && (l = t.getNextScale(c));
      let h = t.canZoomIn(),
        d = t.canZoomOut(),
        u = n === L && !!this.option("touch"),
        p = d && u;
      if (
        (u &&
          (e(o) < e(r) && !this.panOnlyZoomed && (p = !0),
          (e(s.width, 1) > e(s.fitWidth, 1) ||
            e(s.height, 1) > e(s.fitHeight, 1)) &&
            (p = !0)),
        e(s.width * o, 1) < e(s.fitWidth, 1) && (p = !1),
        n === A && (p = !1),
        a(i, this.cn("isDraggable"), p),
        !this.option("zoom"))
      )
        return;
      let f = h && e(l) > e(o),
        g = !f && !p && d && e(l) < e(o);
      a(i, this.cn("canZoomIn"), f), a(i, this.cn("canZoomOut"), g);
      for (const t of i.querySelectorAll("[data-panzoom-action]")) {
        let e = !1,
          i = !1;
        switch (t.dataset.panzoomAction) {
          case "zoomIn":
            h ? (e = !0) : (i = !0);
            break;
          case "zoomOut":
            d ? (e = !0) : (i = !0);
            break;
          case "toggleZoom":
          case "iterateZoom":
            h || d ? (e = !0) : (i = !0);
            const n = t.querySelector("g");
            n && (n.style.display = h ? "" : "none");
        }
        e
          ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
          : i &&
            (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
      }
    }
    panTo({
      x: t = this.target.e,
      y: e = this.target.f,
      scale: i = this.targetScale,
      friction: n = this.option("friction"),
      angle: s = 0,
      originX: o = 0,
      originY: a = 0,
      flipX: r = !1,
      flipY: l = !1,
      ignoreBounds: c = !1,
    }) {
      this.state !== v.Destroy &&
        this.applyChange({
          panX: t - this.target.e,
          panY: e - this.target.f,
          scale: i / this.targetScale,
          angle: s,
          originX: o,
          originY: a,
          friction: n,
          flipX: r,
          flipY: l,
          ignoreBounds: c,
        });
    }
    applyChange({
      panX: t = 0,
      panY: i = 0,
      scale: n = 1,
      angle: s = 0,
      originX: o = -this.current.e,
      originY: a = -this.current.f,
      friction: r = this.option("friction"),
      flipX: l = !1,
      flipY: c = !1,
      ignoreBounds: h = !1,
      bounce: d = this.option("bounce"),
    }) {
      const u = this.state;
      if (u === v.Destroy) return;
      this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
        (this.friction = r || 0),
        (this.ignoreBounds = h);
      const { current: p } = this,
        f = p.e,
        g = p.f,
        m = this.getMatrix(this.target);
      let y = new DOMMatrix().translate(f, g).translate(o, a).translate(t, i);
      if (this.option("zoom")) {
        if (!h) {
          const t = this.targetScale,
            e = this.minScale,
            i = this.maxScale;
          t * n < e && (n = e / t), t * n > i && (n = i / t);
        }
        y = y.scale(n);
      }
      (y = y.translate(-o, -a).translate(-f, -g).multiply(m)),
        s && (y = y.rotate(s)),
        l && (y = y.scale(-1, 1)),
        c && (y = y.scale(1, -1));
      for (const t of b)
        "e" !== t &&
        "f" !== t &&
        (y[t] > this.minScale + 1e-5 || y[t] < this.minScale - 1e-5)
          ? (this.target[t] = y[t])
          : (this.target[t] = e(y[t], O));
      (this.targetScale < this.scale ||
        Math.abs(n - 1) > 0.1 ||
        this.panMode === A ||
        !1 === d) &&
        !h &&
        this.clampTargetBounds(),
        u === v.Init
          ? this.animate()
          : this.isResting || ((this.state = v.Panning), this.requestTick());
    }
    stop(t = !1) {
      if (this.state === v.Init || this.state === v.Destroy) return;
      const e = this.isTicking;
      this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
        (this.isBouncingX = !1),
        (this.isBouncingY = !1);
      for (const e of b)
        (this.velocity[e] = 0),
          "current" === t
            ? (this.current[e] = this.target[e])
            : "target" === t && (this.target[e] = this.current[e]);
      this.setTransform(),
        P(this.container, "is-scaling"),
        P(this.container, "is-animating"),
        (this.isTicking = !1),
        (this.state = v.Ready),
        e && (this.emit("endAnimation"), this.updateControls());
    }
    requestTick() {
      this.isTicking ||
        (this.emit("startAnimation"),
        this.updateControls(),
        C(this.container, "is-animating"),
        this.isScaling && C(this.container, "is-scaling")),
        (this.isTicking = !0),
        this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
    }
    panWithMouse(t, i = this.option("mouseMoveFriction")) {
      if (((this.pmme = t), this.panMode !== A || !t)) return;
      if (e(this.targetScale) <= e(this.minScale)) return;
      this.emit("mouseMove", t);
      const { container: n, containerRect: s, contentRect: o } = this,
        a = s.width,
        r = s.height,
        l = n.getBoundingClientRect(),
        c = (t.clientX || 0) - l.left,
        h = (t.clientY || 0) - l.top;
      let { contentWidth: d, contentHeight: u } = this.calculateContentDim(
        this.target
      );
      const p = this.option("mouseMoveFactor");
      p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
      let f = 0.5 * (d - a) - (((c / a) * 100) / 100) * (d - a);
      f += 0.5 * (o.right - o.left);
      let g = 0.5 * (u - r) - (((h / r) * 100) / 100) * (u - r);
      (g += 0.5 * (o.bottom - o.top)),
        this.applyChange({
          panX: f - this.target.e,
          panY: g - this.target.f,
          friction: i,
        });
    }
    zoomWithWheel(t) {
      if (this.state === v.Destroy || this.state === v.Init) return;
      const i = Date.now();
      if (i - this.pwt < 45) return void t.preventDefault();
      this.pwt = i;
      var n = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (
        t,
        e
      ) {
        return Math.abs(e) > Math.abs(t) ? e : t;
      });
      const s = Math.max(-1, Math.min(1, n)),
        { targetScale: o, maxScale: a, minScale: r } = this;
      let l = (o * (100 + 45 * s)) / 100;
      e(l) < e(r) && e(o) <= e(r)
        ? ((this.cwd += Math.abs(s)), (l = r))
        : e(l) > e(a) && e(o) >= e(a)
        ? ((this.cwd += Math.abs(s)), (l = a))
        : ((this.cwd = 0), (l = Math.max(Math.min(l, a), r))),
        this.cwd > this.option("wheelLimit") ||
          (t.preventDefault(), e(l) !== e(o) && this.zoomTo(l, { event: t }));
    }
    canZoomIn() {
      return (
        this.option("zoom") &&
        (e(this.contentRect.width, 1) < e(this.contentRect.fitWidth, 1) ||
          e(this.targetScale) < e(this.maxScale))
      );
    }
    canZoomOut() {
      return this.option("zoom") && e(this.targetScale) > e(this.minScale);
    }
    zoomIn(t = 1.25, e) {
      this.zoomTo(this.targetScale * t, e);
    }
    zoomOut(t = 0.8, e) {
      this.zoomTo(this.targetScale * t, e);
    }
    zoomToFit(t) {
      this.zoomTo("fit", t);
    }
    zoomToCover(t) {
      this.zoomTo("cover", t);
    }
    zoomToFull(t) {
      this.zoomTo("full", t);
    }
    zoomToMax(t) {
      this.zoomTo("max", t);
    }
    toggleZoom(t) {
      this.zoomTo(this.getNextScale("toggleZoom"), t);
    }
    toggleMax(t) {
      this.zoomTo(this.getNextScale("toggleMax"), t);
    }
    toggleCover(t) {
      this.zoomTo(this.getNextScale("toggleCover"), t);
    }
    iterateZoom(t) {
      this.zoomTo("next", t);
    }
    zoomTo(
      t = 1,
      { friction: e = R, originX: i = R, originY: n = R, event: s } = {}
    ) {
      if (this.isContentLoading || this.state === v.Destroy) return;
      const { targetScale: o, fullScale: a, maxScale: r, coverScale: l } = this;
      if (
        (this.stop(),
        this.panMode === A && (s = this.pmme || s),
        s || i === R || n === R)
      ) {
        const t = this.content.getBoundingClientRect(),
          e = this.container.getBoundingClientRect(),
          o = s ? s.clientX : e.left + 0.5 * e.width,
          a = s ? s.clientY : e.top + 0.5 * e.height;
        (i = o - t.left - 0.5 * t.width), (n = a - t.top - 0.5 * t.height);
      }
      let c = 1;
      "number" == typeof t
        ? (c = t)
        : "full" === t
        ? (c = a)
        : "cover" === t
        ? (c = l)
        : "max" === t
        ? (c = r)
        : "fit" === t
        ? (c = 1)
        : "next" === t && (c = this.getNextScale("iterateZoom")),
        (c = c / o || 1),
        (e = e === R ? (c > 1 ? 0.15 : 0.25) : e),
        this.applyChange({ scale: c, originX: i, originY: n, friction: e }),
        s && this.panMode === A && this.panWithMouse(s, e);
    }
    rotateCCW() {
      this.applyChange({ angle: -90 });
    }
    rotateCW() {
      this.applyChange({ angle: 90 });
    }
    flipX() {
      this.applyChange({ flipX: !0 });
    }
    flipY() {
      this.applyChange({ flipY: !0 });
    }
    fitX() {
      this.stop("target");
      const { containerRect: t, contentRect: e, target: i } = this;
      this.applyChange({
        panX: 0.5 * t.width - (e.left + 0.5 * e.fitWidth) - i.e,
        panY: 0.5 * t.height - (e.top + 0.5 * e.fitHeight) - i.f,
        scale: t.width / e.fitWidth / this.targetScale,
        originX: 0,
        originY: 0,
        ignoreBounds: !0,
      });
    }
    fitY() {
      this.stop("target");
      const { containerRect: t, contentRect: e, target: i } = this;
      this.applyChange({
        panX: 0.5 * t.width - (e.left + 0.5 * e.fitWidth) - i.e,
        panY: 0.5 * t.innerHeight - (e.top + 0.5 * e.fitHeight) - i.f,
        scale: t.height / e.fitHeight / this.targetScale,
        originX: 0,
        originY: 0,
        ignoreBounds: !0,
      });
    }
    toggleFS() {
      const { container: t } = this,
        e = this.cn("inFullscreen"),
        i = this.cn("htmlHasFullscreen");
      t.classList.toggle(e);
      const n = t.classList.contains(e);
      n
        ? (document.documentElement.classList.add(i),
          document.addEventListener("keydown", this.onKeydown, !0))
        : (document.documentElement.classList.remove(i),
          document.removeEventListener("keydown", this.onKeydown, !0)),
        this.updateMetrics(),
        this.emit(n ? "enterFS" : "exitFS");
    }
    getMatrix(t = this.current) {
      const { a: e, b: i, c: n, d: s, e: o, f: a } = t;
      return new DOMMatrix([e, i, n, s, o, a]);
    }
    reset(t) {
      if (this.state !== v.Init && this.state !== v.Destroy) {
        this.stop("current");
        for (const t of b) this.target[t] = T[t];
        (this.target.a = this.minScale),
          (this.target.d = this.minScale),
          this.clampTargetBounds(),
          this.isResting ||
            ((this.friction = void 0 === t ? this.option("friction") : t),
            (this.state = v.Panning),
            this.requestTick());
      }
    }
    destroy() {
      this.stop(),
        (this.state = v.Destroy),
        this.detachEvents(),
        this.detachObserver();
      const { container: t, content: e } = this,
        i = this.option("classes") || {};
      for (const e of Object.values(i)) t.classList.remove(e + "");
      e &&
        (e.removeEventListener("load", this.onLoad),
        e.removeEventListener("error", this.onError)),
        this.detachPlugins();
    }
  }
  Object.defineProperty(D, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: w,
  }),
    Object.defineProperty(D, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {},
    });
  const F = function (t, e) {
      let i = !0;
      return (...n) => {
        i &&
          ((i = !1),
          t(...n),
          setTimeout(() => {
            i = !0;
          }, e));
      };
    },
    j = (t, e) => {
      let i = [];
      return (
        t.childNodes.forEach((t) => {
          t.nodeType !== Node.ELEMENT_NODE || (e && !t.matches(e)) || i.push(t);
        }),
        i
      );
    },
    B = {
      viewport: null,
      track: null,
      enabled: !0,
      slides: [],
      axis: "x",
      transition: "fade",
      preload: 1,
      slidesPerPage: "auto",
      initialPage: 0,
      friction: 0.12,
      Panzoom: { decelFriction: 0.12 },
      center: !0,
      infinite: !0,
      fill: !0,
      dragFree: !1,
      adaptiveHeight: !1,
      direction: "ltr",
      classes: {
        container: "f-carousel",
        viewport: "f-carousel__viewport",
        track: "f-carousel__track",
        slide: "f-carousel__slide",
        isLTR: "is-ltr",
        isRTL: "is-rtl",
        isHorizontal: "is-horizontal",
        isVertical: "is-vertical",
        inTransition: "in-transition",
        isSelected: "is-selected",
      },
      l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d",
      },
    };
  var H;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Destroy = 2)] = "Destroy");
  })(H || (H = {}));
  const N = (t) => {
      if ("string" == typeof t || t instanceof HTMLElement) t = { html: t };
      else {
        const e = t.thumb;
        void 0 !== e &&
          ("string" == typeof e && (t.thumbSrc = e),
          e instanceof HTMLImageElement &&
            ((t.thumbEl = e), (t.thumbElSrc = e.src), (t.thumbSrc = e.src)),
          delete t.thumb);
      }
      return Object.assign(
        {
          html: "",
          el: null,
          isDom: !1,
          class: "",
          customClass: "",
          index: -1,
          dim: 0,
          gap: 0,
          pos: 0,
          transition: !1,
        },
        t
      );
    },
    _ = (t = {}) =>
      Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t);
  class $ extends g {
    constructor(t, e) {
      super(e),
        Object.defineProperty(this, "instance", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t,
        });
    }
    attach() {}
    detach() {}
  }
  const W = {
    classes: {
      list: "f-carousel__dots",
      isDynamic: "is-dynamic",
      hasDots: "has-dots",
      dot: "f-carousel__dot",
      isBeforePrev: "is-before-prev",
      isPrev: "is-prev",
      isCurrent: "is-current",
      isNext: "is-next",
      isAfterNext: "is-after-next",
    },
    dotTpl:
      '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
    dynamicFrom: 11,
    maxCount: 1 / 0,
    minCount: 2,
  };
  class X extends $ {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "isDynamic", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "list", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    onRefresh() {
      this.refresh();
    }
    build() {
      let t = this.list;
      if (!t) {
        (t = document.createElement("ul")),
          C(t, this.cn("list")),
          t.setAttribute("role", "tablist");
        const e = this.instance.container;
        e.appendChild(t), C(e, this.cn("hasDots")), (this.list = t);
      }
      return t;
    }
    refresh() {
      var t;
      const e = this.instance.pages.length,
        i = Math.min(2, this.option("minCount")),
        n = Math.max(2e3, this.option("maxCount")),
        s = this.option("dynamicFrom");
      if (e < i || e > n) return void this.cleanup();
      const o = "number" == typeof s && e > 5 && e >= s,
        r =
          !this.list || this.isDynamic !== o || this.list.children.length !== e;
      r && this.cleanup();
      const l = this.build();
      if ((a(l, this.cn("isDynamic"), !!o), r))
        for (let t = 0; t < e; t++) l.append(this.createItem(t));
      let c,
        h = 0;
      for (const e of [...l.children]) {
        const i = h === this.instance.page;
        i && (c = e),
          a(e, this.cn("isCurrent"), i),
          null === (t = e.children[0]) ||
            void 0 === t ||
            t.setAttribute("aria-selected", i ? "true" : "false");
        for (const t of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
          P(e, this.cn(t));
        h++;
      }
      if (((c = c || l.firstChild), o && c)) {
        const t = c.previousElementSibling,
          e = t && t.previousElementSibling;
        C(t, this.cn("isPrev")), C(e, this.cn("isBeforePrev"));
        const i = c.nextElementSibling,
          n = i && i.nextElementSibling;
        C(i, this.cn("isNext")), C(n, this.cn("isAfterNext"));
      }
      this.isDynamic = o;
    }
    createItem(t = 0) {
      var e;
      const i = document.createElement("li");
      i.setAttribute("role", "presentation");
      const n = s(
        this.instance
          .localize(this.option("dotTpl"), [["%d", t + 1]])
          .replace(/\%i/g, t + "")
      );
      return (
        i.appendChild(n),
        null === (e = i.children[0]) ||
          void 0 === e ||
          e.setAttribute("role", "tab"),
        i
      );
    }
    cleanup() {
      this.list && (this.list.remove(), (this.list = null)),
        (this.isDynamic = !1),
        P(this.instance.container, this.cn("hasDots"));
    }
    attach() {
      this.instance.on(["refresh", "change"], this.onRefresh);
    }
    detach() {
      this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
    }
  }
  Object.defineProperty(X, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: W,
  });
  const q = "disabled",
    Y = "next",
    V = "prev";
  class Z extends $ {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "prev", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "next", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "isDom", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        });
    }
    onRefresh() {
      const t = this.instance,
        e = t.pages.length,
        i = t.page;
      if (e < 2) return void this.cleanup();
      this.build();
      let n = this.prev,
        s = this.next;
      n &&
        s &&
        (n.removeAttribute(q),
        s.removeAttribute(q),
        t.isInfinite ||
          (i <= 0 && n.setAttribute(q, ""),
          i >= e - 1 && s.setAttribute(q, "")));
    }
    addBtn(t) {
      var e;
      const i = this.instance,
        n = document.createElement("button");
      n.setAttribute("tabindex", "0"),
        n.setAttribute("title", i.localize(`{{${t.toUpperCase()}}}`)),
        C(n, this.cn("button") + " " + this.cn(t === Y ? "isNext" : "isPrev"));
      const s = i.isRTL ? (t === Y ? V : Y) : t;
      var o;
      return (
        (n.innerHTML = i.localize(this.option(`${s}Tpl`))),
        (n.dataset[
          `carousel${
            ((o = t),
            o
              ? o.match("^[a-z]")
                ? o.charAt(0).toUpperCase() + o.substring(1)
                : o
              : "")
          }`
        ] = "true"),
        null === (e = this.container) || void 0 === e || e.appendChild(n),
        n
      );
    }
    build() {
      const t = this.instance.container,
        e = this.cn("container");
      let { container: i, prev: n, next: s } = this;
      i || ((i = t.querySelector("." + e)), (this.isDom = !!i)),
        i || ((i = document.createElement("div")), C(i, e), t.appendChild(i)),
        (this.container = i),
        s || (s = i.querySelector("[data-carousel-next]")),
        s || (s = this.addBtn(Y)),
        (this.next = s),
        n || (n = i.querySelector("[data-carousel-prev]")),
        n || (n = this.addBtn(V)),
        (this.prev = n);
    }
    cleanup() {
      this.isDom ||
        (this.prev && this.prev.remove(),
        this.next && this.next.remove(),
        this.container && this.container.remove()),
        (this.prev = null),
        (this.next = null),
        (this.container = null),
        (this.isDom = !1);
    }
    attach() {
      this.instance.on(["refresh", "change"], this.onRefresh);
    }
    detach() {
      this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
    }
  }
  Object.defineProperty(Z, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      classes: {
        container: "f-carousel__nav",
        button: "f-button",
        isNext: "is-next",
        isPrev: "is-prev",
      },
      nextTpl:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
      prevTpl:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
    },
  });
  class U extends $ {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "selectedIndex", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "target", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "nav", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    addAsTargetFor(t) {
      (this.target = this.instance), (this.nav = t), this.attachEvents();
    }
    addAsNavFor(t) {
      (this.nav = this.instance), (this.target = t), this.attachEvents();
    }
    attachEvents() {
      const { nav: t, target: e } = this;
      t &&
        e &&
        ((t.options.initialSlide = e.options.initialPage),
        t.state === H.Ready
          ? this.onNavReady(t)
          : t.on("ready", this.onNavReady),
        e.state === H.Ready
          ? this.onTargetReady(e)
          : e.on("ready", this.onTargetReady));
    }
    onNavReady(t) {
      t.on("createSlide", this.onNavCreateSlide),
        t.on("Panzoom.click", this.onNavClick),
        t.on("Panzoom.touchEnd", this.onNavTouch),
        this.onTargetChange();
    }
    onTargetReady(t) {
      t.on("change", this.onTargetChange),
        t.on("Panzoom.refresh", this.onTargetChange),
        this.onTargetChange();
    }
    onNavClick(t, e, i) {
      this.onNavTouch(t, t.panzoom, i);
    }
    onNavTouch(t, e, i) {
      var n, s;
      if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
      const o = i.target,
        { nav: a, target: r } = this;
      if (!a || !r || !o) return;
      const l = o.closest("[data-index]");
      if ((i.stopPropagation(), i.preventDefault(), !l)) return;
      const c = parseInt(l.dataset.index || "", 10) || 0,
        h = r.getPageForSlide(c),
        d = a.getPageForSlide(c);
      a.slideTo(d),
        r.slideTo(h, {
          friction:
            (null ===
              (s =
                null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) ||
            void 0 === s
              ? void 0
              : s.Sync.option("friction")) || 0,
        }),
        this.markSelectedSlide(c);
    }
    onNavCreateSlide(t, e) {
      e.index === this.selectedIndex && this.markSelectedSlide(e.index);
    }
    onTargetChange() {
      var t, e;
      const { target: i, nav: n } = this;
      if (!i || !n) return;
      if (n.state !== H.Ready || i.state !== H.Ready) return;
      const s =
          null ===
            (e =
              null === (t = i.pages[i.page]) || void 0 === t
                ? void 0
                : t.slides[0]) || void 0 === e
            ? void 0
            : e.index,
        o = n.getPageForSlide(s);
      this.markSelectedSlide(s),
        n.slideTo(
          o,
          null === n.prevPage && null === i.prevPage ? { friction: 0 } : void 0
        );
    }
    markSelectedSlide(t) {
      const e = this.nav;
      e &&
        e.state === H.Ready &&
        ((this.selectedIndex = t),
        [...e.slides].map((e) => {
          e.el &&
            e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
        }));
    }
    attach() {
      const t = this;
      let e = t.options.target,
        i = t.options.nav;
      e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
    }
    detach() {
      const t = this,
        e = t.nav,
        i = t.target;
      e &&
        (e.off("ready", t.onNavReady),
        e.off("createSlide", t.onNavCreateSlide),
        e.off("Panzoom.click", t.onNavClick),
        e.off("Panzoom.touchEnd", t.onNavTouch)),
        (t.nav = null),
        i &&
          (i.off("ready", t.onTargetReady),
          i.off("refresh", t.onTargetChange),
          i.off("change", t.onTargetChange)),
        (t.target = null);
    }
  }
  Object.defineProperty(U, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: { friction: 0.35 },
  });
  const G = { Navigation: Z, Dots: X, Sync: U },
    K = "animationend",
    J = "isSelected",
    Q = "slide";
  class tt extends m {
    get axis() {
      return this.isHorizontal ? "e" : "f";
    }
    get isEnabled() {
      return this.state === H.Ready;
    }
    get isInfinite() {
      let t = !1;
      const { contentDim: e, viewportDim: i, pages: n, slides: s } = this,
        o = s[0];
      return (
        n.length >= 2 && o && e + o.dim >= i && (t = this.option("infinite")), t
      );
    }
    get isRTL() {
      return "rtl" === this.option("direction");
    }
    get isHorizontal() {
      return "x" === this.option("axis");
    }
    constructor(t, e = {}, i = {}) {
      if (
        (super(),
        Object.defineProperty(this, "bp", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "",
        }),
        Object.defineProperty(this, "lp", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "userOptions", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(this, "userPlugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: H.Init,
        }),
        Object.defineProperty(this, "page", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "prevPage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "viewport", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "track", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "slides", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "pages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "panzoom", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "inTransition", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Set(),
        }),
        Object.defineProperty(this, "contentDim", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "viewportDim", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        "string" == typeof t && (t = document.querySelector(t)),
        !t || !S(t))
      )
        throw new Error("No Element found");
      (this.container = t),
        (this.slideNext = F(this.slideNext.bind(this), 150)),
        (this.slidePrev = F(this.slidePrev.bind(this), 150)),
        (this.userOptions = e),
        (this.userPlugins = i),
        queueMicrotask(() => {
          this.processOptions();
        });
    }
    processOptions() {
      var t, e;
      const i = p({}, tt.defaults, this.userOptions);
      let n = "";
      const s = i.breakpoints;
      if (s && u(s))
        for (const [t, e] of Object.entries(s))
          window.matchMedia(t).matches && u(e) && ((n += t), p(i, e));
      (n === this.bp && this.state !== H.Init) ||
        ((this.bp = n),
        this.state === H.Ready &&
          (i.initialSlide =
            (null ===
              (e =
                null === (t = this.pages[this.page]) || void 0 === t
                  ? void 0
                  : t.slides[0]) || void 0 === e
              ? void 0
              : e.index) || 0),
        this.state !== H.Init && this.destroy(),
        super.setOptions(i),
        !1 === this.option("enabled")
          ? this.attachEvents()
          : setTimeout(() => {
              this.init();
            }, 0));
    }
    init() {
      (this.state = H.Init),
        this.emit("init"),
        this.attachPlugins(
          Object.assign(Object.assign({}, tt.Plugins), this.userPlugins)
        ),
        this.emit("attachPlugins"),
        this.initLayout(),
        this.initSlides(),
        this.updateMetrics(),
        this.setInitialPosition(),
        this.initPanzoom(),
        this.attachEvents(),
        (this.state = H.Ready),
        this.emit("ready");
    }
    initLayout() {
      const { container: t } = this,
        e = this.option("classes");
      C(t, this.cn("container")),
        a(t, e.isLTR, !this.isRTL),
        a(t, e.isRTL, this.isRTL),
        a(t, e.isVertical, !this.isHorizontal),
        a(t, e.isHorizontal, this.isHorizontal);
      let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
      i ||
        ((i = document.createElement("div")),
        C(i, e.viewport),
        i.append(...j(t, `.${e.slide}`)),
        t.prepend(i)),
        i.addEventListener("scroll", this.onScroll);
      let n = this.option("track") || t.querySelector(`.${e.track}`);
      n ||
        ((n = document.createElement("div")),
        C(n, e.track),
        n.append(...Array.from(i.childNodes))),
        n.setAttribute("aria-live", "polite"),
        i.contains(n) || i.prepend(n),
        (this.viewport = i),
        (this.track = n),
        this.emit("initLayout");
    }
    initSlides() {
      const { track: t } = this;
      if (!t) return;
      const e = [...this.slides],
        i = [];
      [...j(t, `.${this.cn(Q)}`)].forEach((t) => {
        if (S(t)) {
          const e = N({ el: t, isDom: !0, index: this.slides.length });
          i.push(e);
        }
      });
      for (let t of [...(this.option("slides", []) || []), ...e]) i.push(N(t));
      this.slides = i;
      for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
      for (const t of i)
        this.emit("beforeInitSlide", t, t.index),
          this.emit("initSlide", t, t.index);
      this.emit("initSlides");
    }
    setInitialPage() {
      const t = this.option("initialSlide");
      this.page =
        "number" == typeof t
          ? this.getPageForSlide(t)
          : parseInt(this.option("initialPage", 0) + "", 10) || 0;
    }
    setInitialPosition() {
      const { track: t, pages: e, isHorizontal: i } = this;
      if (!t || !e.length) return;
      let n = this.page;
      e[n] || (this.page = n = 0);
      const s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1),
        o = i ? `${s}px` : "0",
        a = i ? "0" : `${s}px`;
      (t.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`),
        this.option("adaptiveHeight") && this.setViewportHeight();
    }
    initPanzoom() {
      this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
      const t = this.option("Panzoom") || {};
      (this.panzoom = new D(
        this.viewport,
        p(
          {},
          {
            content: this.track,
            zoom: !1,
            panOnlyZoomed: !1,
            lockAxis: this.isHorizontal ? "x" : "y",
            infinite: this.isInfinite,
            click: !1,
            dblClick: !1,
            touch: (t) => !(this.pages.length < 2 && !t.options.infinite),
            bounds: () => this.getBounds(),
            maxVelocity: (t) =>
              Math.abs(t.target[this.axis] - t.current[this.axis]) <
              2 * this.viewportDim
                ? 100
                : 0,
          },
          t
        )
      )),
        this.panzoom.on("*", (t, e, ...i) => {
          this.emit(`Panzoom.${e}`, t, ...i);
        }),
        this.panzoom.on("decel", this.onDecel),
        this.panzoom.on("refresh", this.onRefresh),
        this.panzoom.on("beforeTransform", this.onBeforeTransform),
        this.panzoom.on("endAnimation", this.onEndAnimation);
    }
    attachEvents() {
      const t = this.container;
      t &&
        (t.addEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
        t.addEventListener("slideTo", this.onSlideTo)),
        window.addEventListener("resize", this.onResize);
    }
    createPages() {
      let t = [];
      const { contentDim: e, viewportDim: i } = this;
      let n = this.option("slidesPerPage");
      n =
        ("auto" === n || e <= i) && !1 !== this.option("fill")
          ? 1 / 0
          : parseFloat(n + "");
      let s = 0,
        o = 0,
        a = 0;
      for (const e of this.slides)
        (!t.length || o + e.dim - i > 0.05 || a >= n) &&
          (t.push(_()), (s = t.length - 1), (o = 0), (a = 0)),
          t[s].slides.push(e),
          (o += e.dim + e.gap),
          a++;
      return t;
    }
    processPages() {
      const t = this.pages,
        { contentDim: i, viewportDim: n, isInfinite: s } = this,
        o = this.option("center"),
        a = this.option("fill"),
        r = a && o && i > n && !s;
      if (
        (t.forEach((t, e) => {
          var s;
          (t.index = e),
            (t.pos =
              (null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) ||
              0),
            (t.dim = 0);
          for (const [e, i] of t.slides.entries())
            (t.dim += i.dim), e < t.slides.length - 1 && (t.dim += i.gap);
          r && t.pos + 0.5 * t.dim < 0.5 * n
            ? (t.pos = 0)
            : r && t.pos + 0.5 * t.dim >= i - 0.5 * n
            ? (t.pos = i - n)
            : o && (t.pos += -0.5 * (n - t.dim));
        }),
        t.forEach((t) => {
          a &&
            !s &&
            i > n &&
            ((t.pos = Math.max(t.pos, 0)), (t.pos = Math.min(t.pos, i - n))),
            (t.pos = e(t.pos, 1e3)),
            (t.dim = e(t.dim, 1e3)),
            Math.abs(t.pos) <= 0.1 && (t.pos = 0);
        }),
        s)
      )
        return t;
      const l = [];
      let c;
      return (
        t.forEach((t) => {
          const e = Object.assign({}, t);
          c && e.pos === c.pos
            ? ((c.dim += e.dim), (c.slides = [...c.slides, ...e.slides]))
            : ((e.index = l.length), (c = e), l.push(e));
        }),
        l
      );
    }
    getPageFromIndex(t = 0) {
      const e = this.pages.length;
      let i;
      return (
        (t = parseInt((t || 0).toString()) || 0),
        (i = this.isInfinite
          ? ((t % e) + e) % e
          : Math.max(Math.min(t, e - 1), 0)),
        i
      );
    }
    getSlideMetrics(t) {
      var i, n;
      const s = this.isHorizontal ? "width" : "height";
      let o = 0,
        a = 0,
        r = t.el;
      const l = !(!r || r.parentNode);
      if (
        (r
          ? (o = parseFloat(r.dataset[s] || "") || 0)
          : ((r = document.createElement("div")),
            (r.style.visibility = "hidden"),
            (this.track || document.body).prepend(r)),
        C(r, this.cn(Q) + " " + t.class + " " + t.customClass),
        o)
      )
        (r.style[s] = `${o}px`),
          (r.style["width" === s ? "height" : "width"] = "");
      else {
        l && (this.track || document.body).prepend(r),
          (o =
            r.getBoundingClientRect()[s] *
            Math.max(
              1,
              (null === (i = window.visualViewport) || void 0 === i
                ? void 0
                : i.scale) || 1
            ));
        let t = r[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
        t - 1 > o && (o = t);
      }
      const c = getComputedStyle(r);
      return (
        "content-box" === c.boxSizing &&
          (this.isHorizontal
            ? ((o += parseFloat(c.paddingLeft) || 0),
              (o += parseFloat(c.paddingRight) || 0))
            : ((o += parseFloat(c.paddingTop) || 0),
              (o += parseFloat(c.paddingBottom) || 0))),
        (a =
          parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) ||
          0),
        l
          ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r)
          : t.el || r.remove(),
        { dim: e(o, 1e3), gap: e(a, 1e3) }
      );
    }
    getBounds() {
      const { isInfinite: t, isRTL: e, isHorizontal: i, pages: n } = this;
      let s = { min: 0, max: 0 };
      if (t) s = { min: -1 / 0, max: 1 / 0 };
      else if (n.length) {
        const t = n[0].pos,
          o = n[n.length - 1].pos;
        s = e && i ? { min: t, max: o } : { min: -1 * o, max: -1 * t };
      }
      return { x: i ? s : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : s };
    }
    repositionSlides() {
      let t,
        {
          isHorizontal: i,
          isRTL: n,
          isInfinite: s,
          viewport: o,
          viewportDim: a,
          contentDim: r,
          page: l,
          pages: c,
          slides: h,
          panzoom: d,
        } = this,
        u = 0,
        p = 0,
        f = 0,
        g = 0;
      d ? (g = -1 * d.current[this.axis]) : c[l] && (g = c[l].pos || 0),
        (t = i ? (n ? "right" : "left") : "top"),
        n && i && (g *= -1);
      for (const i of h) {
        const n = i.el;
        n
          ? ("top" === t
              ? ((n.style.right = ""), (n.style.left = ""))
              : (n.style.top = ""),
            i.index !== u
              ? (n.style[t] = 0 === p ? "" : `${e(p, 1e3)}px`)
              : (n.style[t] = ""),
            (f += i.dim + i.gap),
            u++)
          : (p += i.dim + i.gap);
      }
      if (s && f && o) {
        let n = getComputedStyle(o),
          s = "padding",
          l = i ? "Right" : "Bottom",
          c = parseFloat(n[s + (i ? "Left" : "Top")]);
        (g -= c), (a += c), (a += parseFloat(n[s + l]));
        for (const i of h)
          i.el &&
            (e(i.pos) < e(a) &&
              e(i.pos + i.dim + i.gap) < e(g) &&
              e(g) > e(r - a) &&
              (i.el.style[t] = `${e(p + f, 1e3)}px`),
            e(i.pos + i.gap) >= e(r - a) &&
              e(i.pos) > e(g + a) &&
              e(g) < e(a) &&
              (i.el.style[t] = `-${e(f, 1e3)}px`));
      }
      let m,
        v,
        b = [...this.inTransition];
      if ((b.length > 1 && ((m = c[b[0]]), (v = c[b[1]])), m && v)) {
        let i = 0;
        for (const n of h)
          n.el
            ? this.inTransition.has(n.index) &&
              m.slides.indexOf(n) < 0 &&
              (n.el.style[t] = `${e(i + (m.pos - v.pos), 1e3)}px`)
            : (i += n.dim + n.gap);
      }
    }
    createSlideEl(t) {
      const { track: e, slides: i } = this;
      if (!e || !t) return;
      if (t.el && t.el.parentNode) return;
      const n = t.el || document.createElement("div");
      C(n, this.cn(Q)), C(n, t.class), C(n, t.customClass);
      const s = t.html;
      s &&
        (s instanceof HTMLElement
          ? n.appendChild(s)
          : (n.innerHTML = t.html + ""));
      const o = [];
      i.forEach((t, e) => {
        t.el && o.push(e);
      });
      const a = t.index;
      let r = null;
      if (o.length) {
        r = i[o.reduce((t, e) => (Math.abs(e - a) < Math.abs(t - a) ? e : t))];
      }
      const l =
        r && r.el && r.el.parentNode
          ? r.index < t.index
            ? r.el.nextSibling
            : r.el
          : null;
      e.insertBefore(n, e.contains(l) ? l : null),
        (t.el = n),
        this.emit("createSlide", t);
    }
    removeSlideEl(t, e = !1) {
      const i = null == t ? void 0 : t.el;
      if (!i || !i.parentNode) return;
      const n = this.cn(J);
      if (
        (i.classList.contains(n) && (P(i, n), this.emit("unselectSlide", t)),
        t.isDom && !e)
      )
        return (
          i.removeAttribute("aria-hidden"),
          i.removeAttribute("data-index"),
          void (i.style.left = "")
        );
      this.emit("removeSlide", t);
      const s = new CustomEvent(K);
      i.dispatchEvent(s), t.el && (t.el.remove(), (t.el = null));
    }
    transitionTo(t = 0, e = this.option("transition")) {
      var i, n, s, o;
      if (!e) return !1;
      const a = this.page,
        { pages: r, panzoom: l } = this;
      t = parseInt((t || 0).toString()) || 0;
      const c = this.getPageFromIndex(t);
      if (
        !l ||
        !r[c] ||
        r.length < 2 ||
        Math.abs(
          ((null ===
            (n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) ||
          void 0 === n
            ? void 0
            : n.dim) || 0) - this.viewportDim
        ) > 1
      )
        return !1;
      let h = t > a ? 1 : -1;
      this.isInfinite &&
        (0 === a && t === r.length - 1 && (h = -1),
        a === r.length - 1 && 0 === t && (h = 1));
      const d = r[c].pos * (this.isRTL ? 1 : -1);
      if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;
      this.clearTransitions();
      const u = l.isResting;
      C(this.container, this.cn("inTransition"));
      const p =
          (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null,
        f =
          (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;
      this.inTransition.add(f.index), this.createSlideEl(f);
      let g = p.el,
        m = f.el;
      u || e === Q || ((e = "fadeFast"), (g = null));
      const v = this.isRTL ? "next" : "prev",
        b = this.isRTL ? "prev" : "next";
      return (
        g &&
          (this.inTransition.add(p.index),
          (p.transition = e),
          g.addEventListener(K, this.onAnimationEnd),
          g.classList.add(`f-${e}Out`, `to-${h > 0 ? b : v}`)),
        m &&
          ((f.transition = e),
          m.addEventListener(K, this.onAnimationEnd),
          m.classList.add(`f-${e}In`, `from-${h > 0 ? v : b}`)),
        (l.current[this.axis] = d),
        (l.target[this.axis] = d),
        l.requestTick(),
        this.onChange(c),
        !0
      );
    }
    manageSlideVisiblity() {
      const t = new Set(),
        e = new Set(),
        i = this.getVisibleSlides(
          parseFloat(this.option("preload", 0) + "") || 0
        );
      for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
      for (const e of this.inTransition) t.add(this.slides[e]);
      for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
      for (const i of e) t.has(i) || this.removeSlideEl(i);
      this.markSelectedSlides(), this.repositionSlides();
    }
    markSelectedSlides() {
      if (!this.pages[this.page] || !this.pages[this.page].slides) return;
      const t = "aria-hidden";
      let e = this.cn(J);
      if (e)
        for (const i of this.slides) {
          const n = i.el;
          n &&
            ((n.dataset.index = `${i.index}`),
            n.classList.contains("f-thumbs__slide")
              ? this.getVisibleSlides(0).has(i)
                ? n.removeAttribute(t)
                : n.setAttribute(t, "true")
              : this.pages[this.page].slides.includes(i)
              ? (n.classList.contains(e) ||
                  (C(n, e), this.emit("selectSlide", i)),
                n.removeAttribute(t))
              : (n.classList.contains(e) &&
                  (P(n, e), this.emit("unselectSlide", i)),
                n.setAttribute(t, "true")));
        }
    }
    flipInfiniteTrack() {
      const {
          axis: t,
          isHorizontal: e,
          isInfinite: i,
          isRTL: n,
          viewportDim: s,
          contentDim: o,
        } = this,
        a = this.panzoom;
      if (!a || !i) return;
      let r = a.current[t],
        l = a.target[t] - r,
        c = 0,
        h = 0.5 * s;
      n && e
        ? (r < -h && ((c = -1), (r += o)), r > o - h && ((c = 1), (r -= o)))
        : (r > h && ((c = 1), (r -= o)), r < -o + h && ((c = -1), (r += o))),
        c && ((a.current[t] = r), (a.target[t] = r + l));
    }
    lazyLoadImg(t, e) {
      const i = this,
        n = "f-fadeIn",
        o = "is-preloading";
      let a = !1,
        r = null;
      const l = () => {
        a ||
          ((a = !0),
          r && (r.remove(), (r = null)),
          P(e, o),
          e.complete &&
            (C(e, n),
            setTimeout(() => {
              P(e, n);
            }, 350)),
          this.option("adaptiveHeight") &&
            t.el &&
            this.pages[this.page].slides.indexOf(t) > -1 &&
            (i.updateMetrics(), i.setViewportHeight()),
          this.emit("load", t));
      };
      C(e, o),
        (e.src = e.dataset.lazySrcset || e.dataset.lazySrc || ""),
        delete e.dataset.lazySrc,
        delete e.dataset.lazySrcset,
        e.addEventListener("error", () => {
          l();
        }),
        e.addEventListener("load", () => {
          l();
        }),
        setTimeout(() => {
          const i = e.parentNode;
          i &&
            t.el &&
            (e.complete ? l() : a || ((r = s(E)), i.insertBefore(r, e)));
        }, 300);
    }
    lazyLoadSlide(t) {
      const e = t && t.el;
      if (!e) return;
      const i = new Set();
      let n = Array.from(
        e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]")
      );
      e.dataset.lazySrc && n.push(e),
        n.map((t) => {
          t instanceof HTMLImageElement
            ? i.add(t)
            : t instanceof HTMLElement &&
              t.dataset.lazySrc &&
              ((t.style.backgroundImage = `url('${t.dataset.lazySrc}')`),
              delete t.dataset.lazySrc);
        });
      for (const e of i) this.lazyLoadImg(t, e);
    }
    onAnimationEnd(t) {
      var e;
      const i = t.target,
        n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
        s = this.slides[n],
        o = t.animationName;
      if (!i || !s || !o) return;
      const a = !!this.inTransition.has(n) && s.transition;
      a &&
        o.substring(0, a.length + 2) === `f-${a}` &&
        this.inTransition.delete(n),
        this.inTransition.size || this.clearTransitions(),
        n === this.page &&
          (null === (e = this.panzoom) || void 0 === e
            ? void 0
            : e.isResting) &&
          this.emit("settle");
    }
    onDecel(t, e = 0, i = 0, n = 0, s = 0) {
      if (this.option("dragFree")) return void this.setPageFromPosition();
      const { isRTL: o, isHorizontal: a, axis: r, pages: l } = this,
        c = l.length,
        h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
      let d = 0;
      if (((d = h > 45 && h < 135 ? (a ? 0 : i) : a ? e : 0), !c)) return;
      let u = this.page,
        p = o && a ? 1 : -1;
      const f = t.current[r] * p;
      let { pageIndex: g } = this.getPageFromPosition(f);
      Math.abs(d) > 5
        ? (l[u].dim <
            document.documentElement[
              "client" + (this.isHorizontal ? "Width" : "Height")
            ] -
              1 && (u = g),
          (u = o && a ? (d < 0 ? u - 1 : u + 1) : d < 0 ? u + 1 : u - 1))
        : (u = 0 === n && 0 === s ? u : g),
        this.slideTo(u, {
          transition: !1,
          friction: t.option("decelFriction"),
        });
    }
    onClick(t) {
      const e = t.target,
        i = e && S(e) ? e.dataset : null;
      let n, s;
      i &&
        (void 0 !== i.carouselPage
          ? ((s = "slideTo"), (n = i.carouselPage))
          : void 0 !== i.carouselNext
          ? (s = "slideNext")
          : void 0 !== i.carouselPrev && (s = "slidePrev")),
        s
          ? (t.preventDefault(),
            t.stopPropagation(),
            e && !e.hasAttribute("disabled") && this[s](n))
          : this.emit("click", t);
    }
    onSlideTo(t) {
      const e = t.detail || 0;
      this.slideTo(this.getPageForSlide(e), { friction: 0 });
    }
    onChange(t, e = 0) {
      const i = this.page;
      (this.prevPage = i),
        (this.page = t),
        this.option("adaptiveHeight") && this.setViewportHeight(),
        t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
    }
    onRefresh() {
      let t = this.contentDim,
        e = this.viewportDim;
      this.updateMetrics(),
        (this.contentDim === t && this.viewportDim === e) ||
          this.slideTo(this.page, { friction: 0, transition: !1 });
    }
    onScroll() {
      var t;
      null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
    }
    onResize() {
      this.option("breakpoints") && this.processOptions();
    }
    onBeforeTransform(t) {
      this.lp !== t.current[this.axis] &&
        (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
        (this.lp = t.current.e);
    }
    onEndAnimation() {
      this.inTransition.size || this.emit("settle");
    }
    reInit(t = null, e = null) {
      this.destroy(),
        (this.state = H.Init),
        (this.prevPage = null),
        (this.userOptions = t || this.userOptions),
        (this.userPlugins = e || this.userPlugins),
        this.processOptions();
    }
    slideTo(
      t = 0,
      {
        friction: e = this.option("friction"),
        transition: i = this.option("transition"),
      } = {}
    ) {
      if (this.state === H.Destroy) return;
      t = parseInt((t || 0).toString()) || 0;
      const n = this.getPageFromIndex(t),
        { axis: s, isHorizontal: o, isRTL: a, pages: r, panzoom: l } = this,
        c = r.length,
        h = a && o ? 1 : -1;
      if (!l || !c) return;
      if (this.page !== n) {
        const e = new Event("beforeChange", { bubbles: !0, cancelable: !0 });
        if ((this.emit("beforeChange", e, t), e.defaultPrevented)) return;
      }
      if (this.transitionTo(t, i)) return;
      let d = r[n].pos;
      if (this.isInfinite) {
        const e = this.contentDim,
          i = l.target[s] * h;
        if (2 === c) d += e * Math.floor(parseFloat(t + "") / 2);
        else {
          d = [d, d - e, d + e].reduce(function (t, e) {
            return Math.abs(e - i) < Math.abs(t - i) ? e : t;
          });
        }
      }
      (d *= h),
        Math.abs(l.target[s] - d) < 1 ||
          (l.panTo({ x: o ? d : 0, y: o ? 0 : d, friction: e }),
          this.onChange(n));
    }
    slideToClosest(t) {
      if (this.panzoom) {
        const { pageIndex: e } = this.getPageFromPosition();
        this.slideTo(e, t);
      }
    }
    slideNext() {
      this.slideTo(this.page + 1);
    }
    slidePrev() {
      this.slideTo(this.page - 1);
    }
    clearTransitions() {
      this.inTransition.clear(), P(this.container, this.cn("inTransition"));
      const t = ["to-prev", "to-next", "from-prev", "from-next"];
      for (const e of this.slides) {
        const i = e.el;
        if (i) {
          i.removeEventListener(K, this.onAnimationEnd),
            i.classList.remove(...t);
          const n = e.transition;
          n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
        }
      }
      this.manageSlideVisiblity();
    }
    addSlide(t, e) {
      var i, n, s, o;
      const a = this.panzoom,
        r =
          (null === (i = this.pages[this.page]) || void 0 === i
            ? void 0
            : i.pos) || 0,
        l =
          (null === (n = this.pages[this.page]) || void 0 === n
            ? void 0
            : n.dim) || 0,
        c = this.contentDim < this.viewportDim;
      let h = Array.isArray(e) ? e : [e];
      const d = [];
      for (const t of h) d.push(N(t));
      this.slides.splice(t, 0, ...d);
      for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
      for (const t of d) this.emit("beforeInitSlide", t, t.index);
      if (
        (this.page >= t && (this.page += d.length), this.updateMetrics(), a)
      ) {
        const e =
            (null === (s = this.pages[this.page]) || void 0 === s
              ? void 0
              : s.pos) || 0,
          i =
            (null === (o = this.pages[this.page]) || void 0 === o
              ? void 0
              : o.dim) || 0,
          n = this.pages.length || 1,
          h = this.isRTL ? l - i : i - l,
          d = this.isRTL ? r - e : e - r;
        c && 1 === n
          ? (t <= this.page &&
              ((a.current[this.axis] -= h), (a.target[this.axis] -= h)),
            a.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * e }))
          : d &&
            t <= this.page &&
            ((a.target[this.axis] -= d),
            (a.current[this.axis] -= d),
            a.requestTick());
      }
      for (const t of d) this.emit("initSlide", t, t.index);
    }
    prependSlide(t) {
      this.addSlide(0, t);
    }
    appendSlide(t) {
      this.addSlide(this.slides.length, t);
    }
    removeSlide(t) {
      const e = this.slides.length;
      t = ((t % e) + e) % e;
      const i = this.slides[t];
      if (i) {
        this.removeSlideEl(i, !0), this.slides.splice(t, 1);
        for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
        this.updateMetrics(),
          this.slideTo(this.page, { friction: 0, transition: !1 }),
          this.emit("destroySlide", i);
      }
    }
    updateMetrics() {
      const {
        panzoom: t,
        viewport: i,
        track: n,
        slides: s,
        isHorizontal: o,
        isInfinite: a,
      } = this;
      if (!n) return;
      const r = o ? "width" : "height",
        l = o ? "offsetWidth" : "offsetHeight";
      if (i) {
        let t = Math.max(i[l], e(i.getBoundingClientRect()[r], 1e3)),
          n = getComputedStyle(i),
          s = "padding",
          a = o ? "Right" : "Bottom";
        (t -= parseFloat(n[s + (o ? "Left" : "Top")]) + parseFloat(n[s + a])),
          (this.viewportDim = t);
      }
      let c,
        h = 0;
      for (const [t, i] of s.entries()) {
        let n = 0,
          o = 0;
        !i.el && c
          ? ((n = c.dim), (o = c.gap))
          : (({ dim: n, gap: o } = this.getSlideMetrics(i)), (c = i)),
          (n = e(n, 1e3)),
          (o = e(o, 1e3)),
          (i.dim = n),
          (i.gap = o),
          (i.pos = h),
          (h += n),
          (a || t < s.length - 1) && (h += o);
      }
      (h = e(h, 1e3)),
        (this.contentDim = h),
        t &&
          ((t.contentRect[r] = h),
          (t.contentRect[o ? "fullWidth" : "fullHeight"] = h)),
        (this.pages = this.createPages()),
        (this.pages = this.processPages()),
        this.state === H.Init && this.setInitialPage(),
        (this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
        this.manageSlideVisiblity(),
        this.emit("refresh");
    }
    getProgress(t, i = !1, n = !1) {
      void 0 === t && (t = this.page);
      const s = this,
        o = s.panzoom,
        a = s.contentDim,
        r = s.pages[t] || 0;
      if (!r || !o) return t > this.page ? -1 : 1;
      let l = -1 * o.current.e,
        c = e((l - r.pos) / (1 * r.dim), 1e3),
        h = c,
        d = c;
      this.isInfinite &&
        !0 !== n &&
        ((h = e((l - r.pos + a) / (1 * r.dim), 1e3)),
        (d = e((l - r.pos - a) / (1 * r.dim), 1e3)));
      let u = [c, h, d].reduce(function (t, e) {
        return Math.abs(e) < Math.abs(t) ? e : t;
      });
      return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
    }
    setViewportHeight() {
      const { page: t, pages: e, viewport: i, isHorizontal: n } = this;
      if (!i || !e[t]) return;
      let s = 0;
      n &&
        this.track &&
        ((this.track.style.height = "auto"),
        e[t].slides.forEach((t) => {
          t.el && (s = Math.max(s, t.el.offsetHeight));
        })),
        (i.style.height = s ? `${s}px` : "");
    }
    getPageForSlide(t) {
      for (const e of this.pages)
        for (const i of e.slides) if (i.index === t) return e.index;
      return -1;
    }
    getVisibleSlides(t = 0) {
      var e;
      const i = new Set();
      let {
        panzoom: n,
        contentDim: s,
        viewportDim: o,
        pages: a,
        page: r,
      } = this;
      if (o) {
        s =
          s +
            (null === (e = this.slides[this.slides.length - 1]) || void 0 === e
              ? void 0
              : e.gap) || 0;
        let l = 0;
        (l =
          n && n.state !== v.Init && n.state !== v.Destroy
            ? -1 * n.current[this.axis]
            : (a[r] && a[r].pos) || 0),
          this.isInfinite && (l -= Math.floor(l / s) * s),
          this.isRTL && this.isHorizontal && (l *= -1);
        const c = l - o * t,
          h = l + o * (t + 1),
          d = this.isInfinite ? [-1, 0, 1] : [0];
        for (const t of this.slides)
          for (const e of d) {
            const n = t.pos + e * s,
              o = n + t.dim + t.gap;
            n < h && o > c && i.add(t);
          }
      }
      return i;
    }
    getPageFromPosition(t) {
      const {
          viewportDim: e,
          contentDim: i,
          slides: n,
          pages: s,
          panzoom: o,
        } = this,
        a = s.length,
        r = n.length,
        l = n[0],
        c = n[r - 1],
        h = this.option("center");
      let d = 0,
        u = 0,
        p = 0,
        f =
          void 0 === t
            ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0)
            : t;
      h && (f += 0.5 * e),
        this.isInfinite
          ? (f < l.pos - 0.5 * c.gap && ((f -= i), (p = -1)),
            f > c.pos + c.dim + 0.5 * c.gap && ((f -= i), (p = 1)))
          : (f = Math.max(l.pos || 0, Math.min(f, c.pos)));
      let g = c,
        m = n.find((t) => {
          const e = t.pos - 0.5 * g.gap,
            i = t.pos + t.dim + 0.5 * t.gap;
          return (g = t), f >= e && f < i;
        });
      return (
        m || (m = c),
        (u = this.getPageForSlide(m.index)),
        (d = u + p * a),
        { page: d, pageIndex: u }
      );
    }
    setPageFromPosition() {
      const { pageIndex: t } = this.getPageFromPosition();
      this.onChange(t);
    }
    destroy() {
      if ([H.Destroy].includes(this.state)) return;
      this.state = H.Destroy;
      const {
          container: t,
          viewport: e,
          track: i,
          slides: n,
          panzoom: s,
        } = this,
        o = this.option("classes");
      t.removeEventListener("click", this.onClick, {
        passive: !1,
        capture: !1,
      }),
        t.removeEventListener("slideTo", this.onSlideTo),
        window.removeEventListener("resize", this.onResize),
        s && (s.destroy(), (this.panzoom = null)),
        n &&
          n.forEach((t) => {
            this.removeSlideEl(t);
          }),
        this.detachPlugins(),
        e &&
          (e.removeEventListener("scroll", this.onScroll),
          e.offsetParent &&
            i &&
            i.offsetParent &&
            e.replaceWith(...i.childNodes));
      for (const [e, i] of Object.entries(o))
        "container" !== e && i && t.classList.remove(i);
      (this.track = null),
        (this.viewport = null),
        (this.page = 0),
        (this.slides = []);
      const a = this.events.get("ready");
      (this.events = new Map()), a && this.events.set("ready", a);
    }
  }
  Object.defineProperty(tt, "Panzoom", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: D,
  }),
    Object.defineProperty(tt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: B,
    }),
    Object.defineProperty(tt, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: G,
    });
  const et = function (t) {
      if (!S(t)) return 0;
      const e = window.scrollY,
        i = window.innerHeight,
        n = e + i,
        s = t.getBoundingClientRect(),
        o = s.y + e,
        a = s.height,
        r = o + a;
      if (e > r || n < o) return 0;
      if (e < o && n > r) return 100;
      if (o < e && r > n) return 100;
      let l = a;
      o < e && (l -= e - o), r > n && (l -= r - n);
      const c = (l / i) * 100;
      return Math.round(c);
    },
    it = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    );
  let nt;
  const st = [
      "a[href]",
      "area[href]",
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      "select:not([disabled]):not([aria-hidden])",
      "textarea:not([disabled]):not([aria-hidden])",
      "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
      "iframe",
      "object",
      "embed",
      "video",
      "audio",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
    ].join(","),
    ot = (t) => {
      if (t && it) {
        void 0 === nt &&
          document.createElement("div").focus({
            get preventScroll() {
              return (nt = !0), !1;
            },
          });
        try {
          if (nt) t.focus({ preventScroll: !0 });
          else {
            const e = window.scrollY || document.body.scrollTop,
              i = window.scrollX || document.body.scrollLeft;
            t.focus(),
              document.body.scrollTo({ top: e, left: i, behavior: "auto" });
          }
        } catch (t) {}
      }
    },
    at = () => {
      const t = document;
      let e,
        i = "",
        n = "",
        s = "";
      return (
        t.fullscreenEnabled
          ? ((i = "requestFullscreen"),
            (n = "exitFullscreen"),
            (s = "fullscreenElement"))
          : t.webkitFullscreenEnabled &&
            ((i = "webkitRequestFullscreen"),
            (n = "webkitExitFullscreen"),
            (s = "webkitFullscreenElement")),
        i &&
          (e = {
            request: function (e = t.documentElement) {
              return "webkitRequestFullscreen" === i
                ? e[i](Element.ALLOW_KEYBOARD_INPUT)
                : e[i]();
            },
            exit: function () {
              return t[s] && t[n]();
            },
            isFullscreen: function () {
              return t[s];
            },
          }),
        e
      );
    },
    rt = {
      animated: !0,
      autoFocus: !0,
      backdropClick: "close",
      Carousel: {
        classes: {
          container: "fancybox__carousel",
          viewport: "fancybox__viewport",
          track: "fancybox__track",
          slide: "fancybox__slide",
        },
      },
      closeButton: "auto",
      closeExisting: !1,
      commonCaption: !1,
      compact: () =>
        window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
      contentClick: "toggleZoom",
      contentDblClick: !1,
      defaultType: "image",
      defaultDisplay: "flex",
      dragToClose: !0,
      Fullscreen: { autoStart: !1 },
      groupAll: !1,
      groupAttr: "data-fancybox",
      hideClass: "f-fadeOut",
      hideScrollbar: !0,
      idle: 3500,
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev",
      },
      l10n: Object.assign(Object.assign({}, y), {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download",
      }),
      parentEl: null,
      placeFocusBack: !0,
      showClass: "f-zoomInUp",
      startIndex: 0,
      tpl: {
        closeButton:
          '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
        main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
      },
      trapFocus: !0,
      wheel: "zoom",
    };
  var lt, ct;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Closing = 2)] = "Closing"),
      (t[(t.CustomClosing = 3)] = "CustomClosing"),
      (t[(t.Destroy = 4)] = "Destroy");
  })(lt || (lt = {})),
    (function (t) {
      (t[(t.Loading = 0)] = "Loading"),
        (t[(t.Opening = 1)] = "Opening"),
        (t[(t.Ready = 2)] = "Ready"),
        (t[(t.Closing = 3)] = "Closing");
    })(ct || (ct = {}));
  let ht = "",
    dt = !1,
    ut = !1,
    pt = null;
  const ft = () => {
      let t = "",
        e = "";
      const i = Ae.getInstance();
      if (i) {
        const n = i.carousel,
          s = i.getSlide();
        if (n && s) {
          let o = s.slug || void 0,
            a = s.triggerEl || void 0;
          (e = o || i.option("slug") || ""),
            !e && a && a.dataset && (e = a.dataset.fancybox || ""),
            e &&
              "true" !== e &&
              (t =
                "#" +
                e +
                (!o && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
        }
      }
      return { hash: t, slug: e, index: 1 };
    },
    gt = () => {
      const t = new URL(document.URL).hash,
        e = t.slice(1).split("-"),
        i = e[e.length - 1],
        n = (i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10)) || 1;
      return { hash: t, slug: e.join("-"), index: n };
    },
    mt = () => {
      const { slug: t, index: e } = gt();
      if (!t) return;
      let i = document.querySelector(`[data-slug="${t}"]`);
      if (
        (i &&
          i.dispatchEvent(
            new CustomEvent("click", { bubbles: !0, cancelable: !0 })
          ),
        Ae.getInstance())
      )
        return;
      const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
      n.length &&
        ((i = n[e - 1]),
        i &&
          i.dispatchEvent(
            new CustomEvent("click", { bubbles: !0, cancelable: !0 })
          ));
    },
    vt = () => {
      if (!1 === Ae.defaults.Hash) return;
      const t = Ae.getInstance();
      if (!1 === (null == t ? void 0 : t.options.Hash)) return;
      const { slug: e, index: i } = gt(),
        { slug: n } = ft();
      t && (e === n ? t.jumpTo(i - 1) : ((dt = !0), t.close())), mt();
    },
    bt = () => {
      pt && clearTimeout(pt),
        queueMicrotask(() => {
          vt();
        });
    },
    yt = () => {
      window.addEventListener("hashchange", bt, !1),
        setTimeout(() => {
          vt();
        }, 500);
    };
  it &&
    (/complete|interactive|loaded/.test(document.readyState)
      ? yt()
      : document.addEventListener("DOMContentLoaded", yt));
  const wt = "is-zooming-in";
  class xt extends $ {
    onCreateSlide(t, e, i) {
      const n = this.instance.optionFor(i, "src") || "";
      i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
    }
    onRemoveSlide(t, e, i) {
      i.panzoom && i.panzoom.destroy(),
        (i.panzoom = void 0),
        (i.imageEl = void 0);
    }
    onChange(t, e, i, n) {
      P(this.instance.container, wt);
      for (const t of e.slides) {
        const e = t.panzoom;
        e && t.index !== i && e.reset(0.35);
      }
    }
    onClose() {
      var t;
      const e = this.instance,
        i = e.container,
        n = e.getSlide();
      if (!i || !i.parentElement || !n) return;
      const { el: s, contentEl: o, panzoom: a, thumbElSrc: r } = n;
      if (
        !s ||
        !r ||
        !o ||
        !a ||
        a.isContentLoading ||
        a.state === v.Init ||
        a.state === v.Destroy
      )
        return;
      a.updateMetrics();
      let l = this.getZoomInfo(n);
      if (!l) return;
      (this.instance.state = lt.CustomClosing),
        i.classList.remove(wt),
        i.classList.add("is-zooming-out"),
        (o.style.backgroundImage = `url('${r}')`);
      const c = i.getBoundingClientRect();
      1 ===
        ((null === (t = window.visualViewport) || void 0 === t
          ? void 0
          : t.scale) || 1) &&
        Object.assign(i.style, {
          position: "absolute",
          top: `${i.offsetTop + window.scrollY}px`,
          left: `${i.offsetLeft + window.scrollX}px`,
          bottom: "auto",
          right: "auto",
          width: `${c.width}px`,
          height: `${c.height}px`,
          overflow: "hidden",
        });
      const { x: h, y: d, scale: u, opacity: p } = l;
      if (p) {
        const t = ((t, e, i, n) => {
          const s = e - t,
            o = n - i;
          return (e) => i + (((e - t) / s) * o || 0);
        })(a.scale, u, 1, 0);
        a.on("afterTransform", () => {
          o.style.opacity = t(a.scale) + "";
        });
      }
      a.on("endAnimation", () => {
        e.destroy();
      }),
        (a.target.a = u),
        (a.target.b = 0),
        (a.target.c = 0),
        (a.target.d = u),
        a.panTo({
          x: h,
          y: d,
          scale: u,
          friction: p ? 0.2 : 0.33,
          ignoreBounds: !0,
        }),
        a.isResting && e.destroy();
    }
    setImage(t, e) {
      const i = this.instance;
      (t.src = e),
        this.process(t, e).then(
          (e) => {
            const { contentEl: n, imageEl: s, thumbElSrc: o, el: a } = t;
            if (i.isClosing() || !n || !s) return;
            n.offsetHeight;
            const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
            if (this.option("protected") && a) {
              a.addEventListener("contextmenu", (t) => {
                t.preventDefault();
              });
              const t = document.createElement("div");
              C(t, "fancybox-protected"), n.appendChild(t);
            }
            if (o && r) {
              const s = e.contentRect,
                a = Math.max(s.fullWidth, s.fullHeight);
              let c = null;
              !r.opacity &&
                a > 1200 &&
                ((c = document.createElement("img")),
                C(c, "fancybox-ghost"),
                (c.src = o),
                n.appendChild(c));
              const h = () => {
                c &&
                  (C(c, "f-fadeFastOut"),
                  setTimeout(() => {
                    c && (c.remove(), (c = null));
                  }, 200));
              };
              ((l = o),
              new Promise((t, e) => {
                const i = new Image();
                (i.onload = t), (i.onerror = e), (i.src = l);
              })).then(
                () => {
                  i.hideLoading(t),
                    (t.state = ct.Opening),
                    this.instance.emit("reveal", t),
                    this.zoomIn(t).then(
                      () => {
                        h(), this.instance.done(t);
                      },
                      () => {}
                    ),
                    c &&
                      setTimeout(
                        () => {
                          h();
                        },
                        a > 2500 ? 800 : 200
                      );
                },
                () => {
                  i.hideLoading(t), i.revealContent(t);
                }
              );
            } else {
              const n = this.optionFor(t, "initialSize"),
                s = this.optionFor(t, "zoom"),
                o = {
                  event: i.prevMouseMoveEvent || i.options.event,
                  friction: s ? 0.12 : 0,
                };
              let a = i.optionFor(t, "showClass") || void 0,
                r = !0;
              i.isOpeningSlide(t) &&
                ("full" === n
                  ? e.zoomToFull(o)
                  : "cover" === n
                  ? e.zoomToCover(o)
                  : "max" === n
                  ? e.zoomToMax(o)
                  : (r = !1),
                e.stop("current")),
                r && a && (a = e.isDragging ? "f-fadeIn" : ""),
                i.hideLoading(t),
                i.revealContent(t, a);
            }
            var l;
          },
          () => {
            i.setError(t, "{{IMAGE_ERROR}}");
          }
        );
    }
    process(t, e) {
      return new Promise((i, n) => {
        var o;
        const a = this.instance,
          r = t.el;
        a.clearContent(t), a.showLoading(t);
        let l = this.optionFor(t, "content");
        if (("string" == typeof l && (l = s(l)), !l || !S(l))) {
          if (
            ((l = document.createElement("img")), l instanceof HTMLImageElement)
          ) {
            let i = "",
              n = t.caption;
            (i =
              "string" == typeof n && n
                ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3)
                : `Image ${t.index + 1} of ${
                    (null === (o = a.carousel) || void 0 === o
                      ? void 0
                      : o.pages.length) || 1
                  }`),
              (l.src = e || ""),
              (l.alt = i),
              (l.draggable = !1),
              t.srcset && l.setAttribute("srcset", t.srcset),
              this.instance.isOpeningSlide(t) && (l.fetchPriority = "high");
          }
          t.sizes && l.setAttribute("sizes", t.sizes);
        }
        C(l, "fancybox-image"), (t.imageEl = l), a.setContent(t, l, !1);
        t.panzoom = new D(
          r,
          p({ transformParent: !0 }, this.option("Panzoom") || {}, {
            content: l,
            width: (e, i) => a.optionFor(t, "width", "auto", i) || "auto",
            height: (e, i) => a.optionFor(t, "height", "auto", i) || "auto",
            wheel: () => {
              const t = a.option("wheel");
              return ("zoom" === t || "pan" == t) && t;
            },
            click: (e, i) => {
              var n, s;
              if (a.isCompact || a.isClosing()) return !1;
              if (
                t.index !==
                (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)
              )
                return !1;
              if (i) {
                const t = i.composedPath()[0];
                if (
                  [
                    "A",
                    "BUTTON",
                    "TEXTAREA",
                    "OPTION",
                    "INPUT",
                    "SELECT",
                    "VIDEO",
                  ].includes(t.nodeName)
                )
                  return !1;
              }
              let o =
                !i ||
                (i.target &&
                  (null === (s = t.contentEl) || void 0 === s
                    ? void 0
                    : s.contains(i.target)));
              return a.option(o ? "contentClick" : "backdropClick") || !1;
            },
            dblClick: () =>
              a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
            spinner: !1,
            panOnlyZoomed: !0,
            wheelLimit: 1 / 0,
            on: {
              ready: (t) => {
                i(t);
              },
              error: () => {
                n();
              },
              destroy: () => {
                n();
              },
            },
          })
        );
      });
    }
    zoomIn(t) {
      return new Promise((e, i) => {
        const n = this.instance,
          s = n.container,
          { panzoom: o, contentEl: a, el: r } = t;
        o && o.updateMetrics();
        const l = this.getZoomInfo(t);
        if (!(l && r && a && o && s)) return void i();
        const { x: c, y: h, scale: d, opacity: u } = l,
          p = () => {
            t.state !== ct.Closing &&
              (u &&
                (a.style.opacity =
                  Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""),
              o.scale >= 1 && o.scale > o.targetScale - 0.1 && e(o));
          },
          f = (t) => {
            ((t.scale < 0.99 || t.scale > 1.01) && !t.isDragging) ||
              (P(s, wt),
              (a.style.opacity = ""),
              t.off("endAnimation", f),
              t.off("touchStart", f),
              t.off("afterTransform", p),
              e(t));
          };
        o.on("endAnimation", f),
          o.on("touchStart", f),
          o.on("afterTransform", p),
          o.on(["error", "destroy"], () => {
            i();
          }),
          o.panTo({ x: c, y: h, scale: d, friction: 0, ignoreBounds: !0 }),
          o.stop("current");
        const g = {
            event:
              "mousemove" === o.panMode
                ? n.prevMouseMoveEvent || n.options.event
                : void 0,
          },
          m = this.optionFor(t, "initialSize");
        C(s, wt),
          n.hideLoading(t),
          "full" === m
            ? o.zoomToFull(g)
            : "cover" === m
            ? o.zoomToCover(g)
            : "max" === m
            ? o.zoomToMax(g)
            : o.reset(0.172);
      });
    }
    getZoomInfo(t) {
      const { el: e, imageEl: i, thumbEl: n, panzoom: s } = t,
        o = this.instance,
        a = o.container;
      if (
        !e ||
        !i ||
        !n ||
        !s ||
        et(n) < 3 ||
        !this.optionFor(t, "zoom") ||
        !a ||
        o.state === lt.Destroy
      )
        return !1;
      if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom"))
        return !1;
      const r = window.visualViewport || null;
      if (1 !== (r ? r.scale : 1)) return !1;
      let { top: l, left: c, width: h, height: d } = n.getBoundingClientRect(),
        { top: u, left: p, fitWidth: f, fitHeight: g } = s.contentRect;
      if (!(h && d && f && g)) return !1;
      const m = s.container.getBoundingClientRect();
      (p += m.left), (u += m.top);
      const v = -1 * (p + 0.5 * f - (c + 0.5 * h)),
        b = -1 * (u + 0.5 * g - (l + 0.5 * d)),
        y = h / f;
      let w = this.option("zoomOpacity") || !1;
      return (
        "auto" === w && (w = Math.abs(h / d - f / g) > 0.1),
        { x: v, y: b, scale: y, opacity: w }
      );
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("Carousel.change", t.onChange),
        e.on("Carousel.createSlide", t.onCreateSlide),
        e.on("Carousel.removeSlide", t.onRemoveSlide),
        e.on("close", t.onClose);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("Carousel.change", t.onChange),
        e.off("Carousel.createSlide", t.onCreateSlide),
        e.off("Carousel.removeSlide", t.onRemoveSlide),
        e.off("close", t.onClose);
    }
  }
  Object.defineProperty(xt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      initialSize: "fit",
      Panzoom: { maxScale: 1 },
      protected: !1,
      zoom: !0,
      zoomOpacity: "auto",
    },
  }),
    "function" == typeof SuppressedError && SuppressedError;
  const Et = "html",
    St = "image",
    Pt = "map",
    Ct = "youtube",
    Tt = "vimeo",
    Mt = "html5video",
    Ot = (t, e = {}) => {
      const i = new URL(t),
        n = new URLSearchParams(i.search),
        s = new URLSearchParams();
      for (const [t, i] of [...n, ...Object.entries(e)]) {
        let e = i + "";
        if ("t" === t) {
          let t = e.match(/((\d*)m)?(\d*)s?/);
          t &&
            s.set(
              "start",
              60 * parseInt(t[2] || "0") + parseInt(t[3] || "0") + ""
            );
        } else s.set(t, e);
      }
      let o = s + "",
        a = t.match(/#t=((.*)?\d+s)/);
      return a && (o += `#t=${a[1]}`), o;
    },
    At = {
      ajax: null,
      autoSize: !0,
      iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
      preload: !0,
      videoAutoplay: !0,
      videoRatio: 16 / 9,
      videoTpl:
        '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
      videoFormat: "",
      vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
      youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
    },
    Lt = [
      "image",
      "html",
      "ajax",
      "inline",
      "clone",
      "iframe",
      "map",
      "pdf",
      "html5video",
      "youtube",
      "vimeo",
    ];
  class zt extends $ {
    onBeforeInitSlide(t, e, i) {
      this.processType(i);
    }
    onCreateSlide(t, e, i) {
      this.setContent(i);
    }
    onClearContent(t, e) {
      e.xhr && (e.xhr.abort(), (e.xhr = null));
      const i = e.iframeEl;
      i &&
        ((i.onload = i.onerror = null),
        (i.src = "//about:blank"),
        (e.iframeEl = null));
      const n = e.contentEl,
        s = e.placeholderEl;
      if ("inline" === e.type && n && s)
        n.classList.remove("fancybox__content"),
          "none" !== getComputedStyle(n).getPropertyValue("display") &&
            (n.style.display = "none"),
          setTimeout(() => {
            s &&
              (n && s.parentNode && s.parentNode.insertBefore(n, s),
              s.remove());
          }, 0),
          (e.contentEl = void 0),
          (e.placeholderEl = void 0);
      else for (; e.el && e.el.firstChild; ) e.el.removeChild(e.el.firstChild);
    }
    onSelectSlide(t, e, i) {
      i.state === ct.Ready && this.playVideo();
    }
    onUnselectSlide(t, e, i) {
      var n, s;
      if (i.type === Mt) {
        try {
          null ===
            (s =
              null === (n = i.el) || void 0 === n
                ? void 0
                : n.querySelector("video")) ||
            void 0 === s ||
            s.pause();
        } catch (t) {}
        return;
      }
      let o;
      i.type === Tt
        ? (o = { method: "pause", value: "true" })
        : i.type === Ct && (o = { event: "command", func: "pauseVideo" }),
        o &&
          i.iframeEl &&
          i.iframeEl.contentWindow &&
          i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"),
        i.poller && clearTimeout(i.poller);
    }
    onDone(t, e) {
      t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
    }
    onRefresh(t, e) {
      e.slides.forEach((t) => {
        t.el && (this.resizeIframe(t), this.setAspectRatio(t));
      });
    }
    onMessage(t) {
      try {
        let e = JSON.parse(t.data);
        if ("https://player.vimeo.com" === t.origin) {
          if ("ready" === e.event)
            for (let e of Array.from(
              document.getElementsByClassName("fancybox__iframe")
            ))
              e instanceof HTMLIFrameElement &&
                e.contentWindow === t.source &&
                (e.dataset.ready = "true");
        } else if (
          t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
          "onReady" === e.event
        ) {
          const t = document.getElementById(e.id);
          t && (t.dataset.ready = "true");
        }
      } catch (t) {}
    }
    loadAjaxContent(t) {
      const e = this.instance.optionFor(t, "src") || "";
      this.instance.showLoading(t);
      const i = this.instance,
        n = new XMLHttpRequest();
      i.showLoading(t),
        (n.onreadystatechange = function () {
          n.readyState === XMLHttpRequest.DONE &&
            i.state === lt.Ready &&
            (i.hideLoading(t),
            200 === n.status
              ? i.setContent(t, n.responseText)
              : i.setError(
                  t,
                  404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"
                ));
        });
      const s = t.ajax || null;
      n.open(s ? "POST" : "GET", e + ""),
        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        n.send(s),
        (t.xhr = n);
    }
    setInlineContent(t) {
      let e = null;
      if (S(t.src)) e = t.src;
      else if ("string" == typeof t.src) {
        const i = t.src.split("#", 2).pop();
        e = i ? document.getElementById(i) : null;
      }
      if (e) {
        if ("clone" === t.type || e.closest(".fancybox__slide")) {
          e = e.cloneNode(!0);
          const i = e.dataset.animationName;
          i && (e.classList.remove(i), delete e.dataset.animationName);
          let n = e.getAttribute("id");
          (n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`),
            e.setAttribute("id", n);
        } else if (e.parentNode) {
          const i = document.createElement("div");
          i.classList.add("fancybox-placeholder"),
            e.parentNode.insertBefore(i, e),
            (t.placeholderEl = i);
        }
        this.instance.setContent(t, e);
      } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
    setIframeContent(t) {
      const { src: e, el: i } = t;
      if (!e || "string" != typeof e || !i) return;
      i.classList.add("is-loading");
      const n = this.instance,
        s = document.createElement("iframe");
      (s.className = "fancybox__iframe"),
        s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
      for (const [e, i] of Object.entries(
        this.optionFor(t, "iframeAttr") || {}
      ))
        s.setAttribute(e, i);
      (s.onerror = () => {
        n.setError(t, "{{IFRAME_ERROR}}");
      }),
        (t.iframeEl = s);
      const o = this.optionFor(t, "preload");
      if ("iframe" !== t.type || !1 === o)
        return (
          s.setAttribute("src", t.src + ""),
          n.setContent(t, s, !1),
          this.resizeIframe(t),
          void n.revealContent(t)
        );
      n.showLoading(t),
        (s.onload = () => {
          if (!s.src.length) return;
          const e = "true" !== s.dataset.ready;
          (s.dataset.ready = "true"),
            this.resizeIframe(t),
            e ? n.revealContent(t) : n.hideLoading(t);
        }),
        s.setAttribute("src", e),
        n.setContent(t, s, !1);
    }
    resizeIframe(t) {
      const { type: e, iframeEl: i } = t;
      if (e === Ct || e === Tt) return;
      const n = null == i ? void 0 : i.parentElement;
      if (!i || !n) return;
      let s = t.autoSize;
      void 0 === s && (s = this.optionFor(t, "autoSize"));
      let o = t.width || 0,
        a = t.height || 0;
      o && a && (s = !1);
      const r = n && n.style;
      if (!1 !== t.preload && !1 !== s && r)
        try {
          const t = window.getComputedStyle(n),
            e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
            s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
            l = i.contentWindow;
          if (l) {
            const t = l.document,
              i = t.getElementsByTagName(Et)[0],
              n = t.body;
            (r.width = ""),
              (n.style.overflow = "hidden"),
              (o = o || i.scrollWidth + e),
              (r.width = `${o}px`),
              (n.style.overflow = ""),
              (r.flex = "0 0 auto"),
              (r.height = `${n.scrollHeight}px`),
              (a = i.scrollHeight + s);
          }
        } catch (t) {}
      if (o || a) {
        const t = { flex: "0 1 auto", width: "", height: "" };
        o && "auto" !== o && (t.width = `${o}px`),
          a && "auto" !== a && (t.height = `${a}px`),
          Object.assign(r, t);
      }
    }
    playVideo() {
      const t = this.instance.getSlide();
      if (!t) return;
      const { el: e } = t;
      if (!e || !e.offsetParent) return;
      if (!this.optionFor(t, "videoAutoplay")) return;
      if (t.type === Mt)
        try {
          const t = e.querySelector("video");
          if (t) {
            const e = t.play();
            void 0 !== e &&
              e
                .then(() => {})
                .catch((e) => {
                  (t.muted = !0), t.play();
                });
          }
        } catch (t) {}
      if (t.type !== Ct && t.type !== Tt) return;
      const i = () => {
        if (t.iframeEl && t.iframeEl.contentWindow) {
          let e;
          if ("true" === t.iframeEl.dataset.ready)
            return (
              (e =
                t.type === Ct
                  ? { event: "command", func: "playVideo" }
                  : { method: "play", value: "true" }),
              e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"),
              void (t.poller = void 0)
            );
          t.type === Ct &&
            ((e = { event: "listening", id: t.iframeEl.getAttribute("id") }),
            t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
        }
        t.poller = setTimeout(i, 250);
      };
      i();
    }
    processType(t) {
      if (t.html) return (t.type = Et), (t.src = t.html), void (t.html = "");
      const e = this.instance.optionFor(t, "src", "");
      if (!e || "string" != typeof e) return;
      let i = t.type,
        n = null;
      if (
        (n = e.match(
          /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
        ))
      ) {
        const s = this.optionFor(t, Ct),
          { nocookie: o } = s,
          a = (function (t, e) {
            var i = {};
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) &&
                e.indexOf(n) < 0 &&
                (i[n] = t[n]);
            if (
              null != t &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var s = 0;
              for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
                e.indexOf(n[s]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
                  (i[n[s]] = t[n[s]]);
            }
            return i;
          })(s, ["nocookie"]),
          r = `www.youtube${o ? "-nocookie" : ""}.com`,
          l = Ot(e, a),
          c = encodeURIComponent(n[2]);
        (t.videoId = c),
          (t.src = `https://${r}/embed/${c}?${l}`),
          (t.thumbSrc =
            t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
          (i = Ct);
      } else if (
        (n = e.match(
          /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
        ))
      ) {
        const s = Ot(e, this.optionFor(t, Tt)),
          o = encodeURIComponent(n[1]),
          a = n[4] || "";
        (t.videoId = o),
          (t.src = `https://player.vimeo.com/video/${o}?${
            a ? `h=${a}${s ? "&" : ""}` : ""
          }${s}`),
          (i = Tt);
      }
      if (!i && t.triggerEl) {
        const e = t.triggerEl.dataset.type;
        Lt.includes(e) && (i = e);
      }
      i ||
        ("string" == typeof e &&
          ("#" === e.charAt(0)
            ? (i = "inline")
            : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
            ? ((i = Mt),
              (t.videoFormat =
                t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
            : e.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
            ? (i = St)
            : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf"))),
        (n = e.match(
          /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
        ))
          ? ((t.src = `https://maps.google.${n[1]}/?ll=${(n[2]
              ? n[2] +
                "&z=" +
                Math.floor(parseFloat(n[3])) +
                (n[4] ? n[4].replace(/^\//, "&") : "")
              : n[4] + ""
            ).replace(/\?/, "&")}&output=${
              n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
            }`),
            (i = Pt))
          : (n = e.match(
              /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
            )) &&
            ((t.src = `https://maps.google.${n[1]}/maps?q=${n[2]
              .replace("query=", "q=")
              .replace("api=1", "")}&output=embed`),
            (i = Pt)),
        (i = i || this.instance.option("defaultType")),
        (t.type = i),
        i === St && (t.thumbSrc = t.thumbSrc || t.src);
    }
    setContent(t) {
      const e = this.instance.optionFor(t, "src") || "";
      if (t && t.type && e) {
        switch (t.type) {
          case Et:
            this.instance.setContent(t, e);
            break;
          case Mt:
            const i = this.option("videoTpl");
            i &&
              this.instance.setContent(
                t,
                i
                  .replace(/\{\{src\}\}/gi, e + "")
                  .replace(
                    /\{\{format\}\}/gi,
                    this.optionFor(t, "videoFormat") || ""
                  )
                  .replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || "")
              );
            break;
          case "inline":
          case "clone":
            this.setInlineContent(t);
            break;
          case "ajax":
            this.loadAjaxContent(t);
            break;
          case "pdf":
          case Pt:
          case Ct:
          case Tt:
            t.preload = !1;
          case "iframe":
            this.setIframeContent(t);
        }
        this.setAspectRatio(t);
      }
    }
    setAspectRatio(t) {
      const e = t.contentEl;
      if (!(t.el && e && t.type && [Ct, Tt, Mt].includes(t.type))) return;
      let i,
        n = t.width || "auto",
        s = t.height || "auto";
      if ("auto" === n || "auto" === s) {
        i = this.optionFor(t, "videoRatio");
        const e = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
        i =
          e && e.length > 2
            ? parseFloat(e[1]) / parseFloat(e[2])
            : parseFloat(i + "");
      } else n && s && (i = n / s);
      if (!i) return;
      (e.style.aspectRatio = ""),
        (e.style.width = ""),
        (e.style.height = ""),
        e.offsetHeight;
      const o = e.getBoundingClientRect(),
        a = o.width || 1,
        r = o.height || 1;
      (e.style.aspectRatio = i + ""),
        i < a / r
          ? ((s = "auto" === s ? r : Math.min(r, s)),
            (e.style.width = "auto"),
            (e.style.height = `${s}px`))
          : ((n = "auto" === n ? a : Math.min(a, n)),
            (e.style.width = `${n}px`),
            (e.style.height = "auto"));
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("Carousel.beforeInitSlide", t.onBeforeInitSlide),
        e.on("Carousel.createSlide", t.onCreateSlide),
        e.on("Carousel.selectSlide", t.onSelectSlide),
        e.on("Carousel.unselectSlide", t.onUnselectSlide),
        e.on("Carousel.Panzoom.refresh", t.onRefresh),
        e.on("done", t.onDone),
        e.on("clearContent", t.onClearContent),
        window.addEventListener("message", t.onMessage);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("Carousel.beforeInitSlide", t.onBeforeInitSlide),
        e.off("Carousel.createSlide", t.onCreateSlide),
        e.off("Carousel.selectSlide", t.onSelectSlide),
        e.off("Carousel.unselectSlide", t.onUnselectSlide),
        e.off("Carousel.Panzoom.refresh", t.onRefresh),
        e.off("done", t.onDone),
        e.off("clearContent", t.onClearContent),
        window.removeEventListener("message", t.onMessage);
    }
  }
  Object.defineProperty(zt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: At,
  });
  const Rt = "play",
    kt = "pause",
    It = "ready";
  class Dt extends $ {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: It,
        }),
        Object.defineProperty(this, "inHover", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "timer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "progressBar", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    get isActive() {
      return this.state !== It;
    }
    onReady(t) {
      this.option("autoStart") &&
        (t.isInfinite || t.page < t.pages.length - 1) &&
        this.start();
    }
    onChange() {
      this.removeProgressBar(), this.pause();
    }
    onSettle() {
      this.resume();
    }
    onVisibilityChange() {
      "visible" === document.visibilityState ? this.resume() : this.pause();
    }
    onMouseEnter() {
      (this.inHover = !0), this.pause();
    }
    onMouseLeave() {
      var t;
      (this.inHover = !1),
        (null === (t = this.instance.panzoom) || void 0 === t
          ? void 0
          : t.isResting) && this.resume();
    }
    onTimerEnd() {
      const t = this.instance;
      "play" === this.state &&
        (t.isInfinite || t.page !== t.pages.length - 1
          ? t.slideNext()
          : t.slideTo(0));
    }
    removeProgressBar() {
      this.progressBar &&
        (this.progressBar.remove(), (this.progressBar = null));
    }
    createProgressBar() {
      var t;
      if (!this.option("showProgress")) return null;
      this.removeProgressBar();
      const e = this.instance,
        i =
          (null === (t = e.pages[e.page]) || void 0 === t
            ? void 0
            : t.slides) || [];
      let n = this.option("progressParentEl");
      if ((n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n))
        return null;
      const s = document.createElement("div");
      return (
        C(s, "f-progress"),
        n.prepend(s),
        (this.progressBar = s),
        s.offsetHeight,
        s
      );
    }
    set() {
      const t = this,
        e = t.instance;
      if (e.pages.length < 2) return;
      if (t.timer) return;
      const i = t.option("timeout");
      (t.state = Rt), C(e.container, "has-autoplay");
      let n = t.createProgressBar();
      n &&
        ((n.style.transitionDuration = `${i}ms`),
        (n.style.transform = "scaleX(1)")),
        (t.timer = setTimeout(() => {
          (t.timer = null), t.inHover || t.onTimerEnd();
        }, i)),
        t.emit("set");
    }
    clear() {
      const t = this;
      t.timer && (clearTimeout(t.timer), (t.timer = null)),
        t.removeProgressBar();
    }
    start() {
      const t = this;
      if ((t.set(), t.state !== It)) {
        if (t.option("pauseOnHover")) {
          const e = t.instance.container;
          e.addEventListener("mouseenter", t.onMouseEnter, !1),
            e.addEventListener("mouseleave", t.onMouseLeave, !1);
        }
        document.addEventListener("visibilitychange", t.onVisibilityChange, !1),
          t.emit("start");
      }
    }
    stop() {
      const t = this,
        e = t.state,
        i = t.instance.container;
      t.clear(),
        (t.state = It),
        i.removeEventListener("mouseenter", t.onMouseEnter, !1),
        i.removeEventListener("mouseleave", t.onMouseLeave, !1),
        document.removeEventListener(
          "visibilitychange",
          t.onVisibilityChange,
          !1
        ),
        P(i, "has-autoplay"),
        e !== It && t.emit("stop");
    }
    pause() {
      const t = this;
      t.state === Rt && ((t.state = kt), t.clear(), t.emit(kt));
    }
    resume() {
      const t = this,
        e = t.instance;
      if (e.isInfinite || e.page !== e.pages.length - 1)
        if (t.state !== Rt) {
          if (t.state === kt && !t.inHover) {
            const e = new Event("resume", { bubbles: !0, cancelable: !0 });
            t.emit("resume", e), e.defaultPrevented || t.set();
          }
        } else t.set();
      else t.stop();
    }
    toggle() {
      this.state === Rt || this.state === kt ? this.stop() : this.start();
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("ready", t.onReady),
        e.on("Panzoom.startAnimation", t.onChange),
        e.on("Panzoom.endAnimation", t.onSettle),
        e.on("Panzoom.touchMove", t.onChange);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("ready", t.onReady),
        e.off("Panzoom.startAnimation", t.onChange),
        e.off("Panzoom.endAnimation", t.onSettle),
        e.off("Panzoom.touchMove", t.onChange),
        t.stop();
    }
  }
  Object.defineProperty(Dt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      autoStart: !0,
      pauseOnHover: !0,
      progressParentEl: null,
      showProgress: !0,
      timeout: 3e3,
    },
  });
  class Ft extends $ {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "ref", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    onPrepare(t) {
      const e = t.carousel;
      if (!e) return;
      const i = t.container;
      i &&
        ((e.options.Autoplay = p(
          { autoStart: !1 },
          this.option("Autoplay") || {},
          {
            pauseOnHover: !1,
            timeout: this.option("timeout"),
            progressParentEl: () => this.option("progressParentEl") || null,
            on: {
              start: () => {
                t.emit("startSlideshow");
              },
              set: (e) => {
                var n;
                i.classList.add("has-slideshow"),
                  (null === (n = t.getSlide()) || void 0 === n
                    ? void 0
                    : n.state) !== ct.Ready && e.pause();
              },
              stop: () => {
                i.classList.remove("has-slideshow"),
                  t.isCompact || t.endIdle(),
                  t.emit("endSlideshow");
              },
              resume: (e, i) => {
                var n, s, o;
                !i ||
                  !i.cancelable ||
                  ((null === (n = t.getSlide()) || void 0 === n
                    ? void 0
                    : n.state) === ct.Ready &&
                    (null ===
                      (o =
                        null === (s = t.carousel) || void 0 === s
                          ? void 0
                          : s.panzoom) || void 0 === o
                      ? void 0
                      : o.isResting)) ||
                  i.preventDefault();
              },
            },
          }
        )),
        e.attachPlugins({ Autoplay: Dt }),
        (this.ref = e.plugins.Autoplay));
    }
    onReady(t) {
      const e = t.carousel,
        i = this.ref;
      i &&
        e &&
        this.option("playOnStart") &&
        (e.isInfinite || e.page < e.pages.length - 1) &&
        i.start();
    }
    onDone(t, e) {
      const i = this.ref,
        n = t.carousel;
      if (!i || !n) return;
      const s = e.panzoom;
      s &&
        s.on("startAnimation", () => {
          t.isCurrentSlide(e) && i.stop();
        }),
        t.isCurrentSlide(e) && i.resume();
    }
    onKeydown(t, e) {
      var i;
      const n = this.ref;
      n &&
        e === this.option("key") &&
        "BUTTON" !==
          (null === (i = document.activeElement) || void 0 === i
            ? void 0
            : i.nodeName) &&
        n.toggle();
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("Carousel.init", t.onPrepare),
        e.on("Carousel.ready", t.onReady),
        e.on("done", t.onDone),
        e.on("keydown", t.onKeydown);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("Carousel.init", t.onPrepare),
        e.off("Carousel.ready", t.onReady),
        e.off("done", t.onDone),
        e.off("keydown", t.onKeydown);
    }
  }
  Object.defineProperty(Ft, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      key: " ",
      playOnStart: !1,
      progressParentEl: (t) => {
        var e;
        return (
          (null === (e = t.instance.container) || void 0 === e
            ? void 0
            : e.querySelector(
                ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
              )) || t.instance.container
        );
      },
      timeout: 3e3,
    },
  });
  const jt = {
    classes: {
      container: "f-thumbs f-carousel__thumbs",
      viewport: "f-thumbs__viewport",
      track: "f-thumbs__track",
      slide: "f-thumbs__slide",
      isResting: "is-resting",
      isSelected: "is-selected",
      isLoading: "is-loading",
      hasThumbs: "has-thumbs",
    },
    minCount: 2,
    parentEl: null,
    thumbTpl:
      '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
    type: "modern",
  };
  var Bt;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Hidden = 2)] = "Hidden");
  })(Bt || (Bt = {}));
  const Ht = "isResting",
    Nt = "thumbWidth",
    _t = "thumbHeight",
    $t = "thumbClipWidth";
  let Wt = class extends $ {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "modern",
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "track", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "carousel", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "thumbWidth", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "thumbClipWidth", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "thumbHeight", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "thumbGap", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "thumbExtraGap", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bt.Init,
        });
    }
    get isModern() {
      return "modern" === this.type;
    }
    onInitSlide(t, e) {
      const i = e.el ? e.el.dataset : void 0;
      i &&
        ((e.thumbSrc = i.thumbSrc || e.thumbSrc || ""),
        (e[$t] = parseFloat(i[$t] || "") || e[$t] || 0),
        (e[_t] = parseFloat(i.thumbHeight || "") || e[_t] || 0)),
        this.addSlide(e);
    }
    onInitSlides() {
      this.build();
    }
    onChange() {
      var t;
      if (!this.isModern) return;
      const e = this.container,
        i = this.instance,
        n = i.panzoom,
        s = this.carousel,
        o = s ? s.panzoom : null,
        r = i.page;
      if (n && s && o) {
        if (n.isDragging) {
          P(e, this.cn(Ht));
          let n =
            (null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;
          n += i.getProgress(r) * (this[$t] + this.thumbGap);
          let a = o.getBounds();
          -1 * n > a.x.min &&
            -1 * n < a.x.max &&
            o.panTo({ x: -1 * n, friction: 0.12 });
        } else a(e, this.cn(Ht), n.isResting);
        this.shiftModern();
      }
    }
    onRefresh() {
      this.updateProps();
      for (const t of this.instance.slides || []) this.resizeModernSlide(t);
      this.shiftModern();
    }
    isDisabled() {
      const t = this.option("minCount") || 0;
      if (t) {
        const e = this.instance;
        let i = 0;
        for (const t of e.slides || []) t.thumbSrc && i++;
        if (i < t) return !0;
      }
      const e = this.option("type");
      return ["modern", "classic"].indexOf(e) < 0;
    }
    getThumb(t) {
      const e = this.option("thumbTpl") || "";
      return {
        html: this.instance.localize(e, [
          ["%i", t.index],
          ["%d", t.index + 1],
          [
            "%s",
            t.thumbSrc ||
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          ],
        ]),
      };
    }
    addSlide(t) {
      const e = this.carousel;
      e && e.addSlide(t.index, this.getThumb(t));
    }
    getSlides() {
      const t = [];
      for (const e of this.instance.slides || []) t.push(this.getThumb(e));
      return t;
    }
    resizeModernSlide(t) {
      this.isModern &&
        (t[Nt] =
          t[$t] && t[_t] ? Math.round(this[_t] * (t[$t] / t[_t])) : this[Nt]);
    }
    updateProps() {
      const t = this.container;
      if (!t) return;
      const e = (e) =>
        parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + e)) || 0;
      (this.thumbGap = e("gap")),
        (this.thumbExtraGap = e("extra-gap")),
        (this[Nt] = e("width") || 40),
        (this[$t] = e("clip-width") || 40),
        (this[_t] = e("height") || 40);
    }
    build() {
      const t = this;
      if (t.state !== Bt.Init) return;
      if (t.isDisabled()) return void t.emit("disabled");
      const e = t.instance,
        i = e.container,
        n = t.getSlides(),
        s = t.option("type");
      t.type = s;
      const o = t.option("parentEl"),
        a = t.cn("container"),
        r = t.cn("track");
      let l = null == o ? void 0 : o.querySelector("." + a);
      l ||
        ((l = document.createElement("div")),
        C(l, a),
        o ? o.appendChild(l) : i.after(l)),
        C(l, `is-${s}`),
        C(i, t.cn("hasThumbs")),
        (t.container = l),
        t.updateProps();
      let c = l.querySelector("." + r);
      c ||
        ((c = document.createElement("div")),
        C(c, t.cn("track")),
        l.appendChild(c)),
        (t.track = c);
      const h = p(
          {},
          {
            track: c,
            infinite: !1,
            center: !0,
            fill: "classic" === s,
            dragFree: !0,
            slidesPerPage: 1,
            transition: !1,
            preload: 0.25,
            friction: 0.12,
            Panzoom: { maxVelocity: 0 },
            Dots: !1,
            Navigation: !1,
            classes: {
              container: "f-thumbs",
              viewport: "f-thumbs__viewport",
              track: "f-thumbs__track",
              slide: "f-thumbs__slide",
            },
          },
          t.option("Carousel") || {},
          { Sync: { target: e }, slides: n }
        ),
        d = new e.constructor(l, h);
      d.on("createSlide", (e, i) => {
        t.setProps(i.index), t.emit("createSlide", i, i.el);
      }),
        d.on("ready", () => {
          t.shiftModern(), t.emit("ready");
        }),
        d.on("refresh", () => {
          t.shiftModern();
        }),
        d.on("Panzoom.click", (e, i, n) => {
          t.onClick(n);
        }),
        (t.carousel = d),
        (t.state = Bt.Ready);
    }
    onClick(t) {
      t.preventDefault(), t.stopPropagation();
      const e = this.instance,
        { pages: i, page: n } = e,
        s = (t) => {
          if (t) {
            const e = t.closest("[data-carousel-index]");
            if (e) return [parseInt(e.dataset.carouselIndex || "", 10) || 0, e];
          }
          return [-1, void 0];
        },
        o = (t, e) => {
          const i = document.elementFromPoint(t, e);
          return i ? s(i) : [-1, void 0];
        };
      let [a, r] = s(t.target);
      if (a > -1) return;
      const l = this[$t],
        c = t.clientX,
        h = t.clientY;
      let [d, u] = o(c - l, h),
        [p, f] = o(c + l, h);
      u && f
        ? ((a =
            Math.abs(c - u.getBoundingClientRect().right) <
            Math.abs(c - f.getBoundingClientRect().left)
              ? d
              : p),
          a === n && (a = a === d ? p : d))
        : u
        ? (a = d)
        : f && (a = p),
        a > -1 && i[a] && e.slideTo(a);
    }
    getShift(t) {
      var e;
      const i = this,
        { instance: n } = i,
        s = i.carousel;
      if (!n || !s) return 0;
      const o = i[Nt],
        a = i[$t],
        r = i.thumbGap,
        l = i.thumbExtraGap;
      if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el))
        return 0;
      const c = 0.5 * (o - a),
        h = n.pages.length - 1;
      let d = n.getProgress(0),
        u = n.getProgress(h),
        p = n.getProgress(t, !1, !0),
        f = 0,
        g = c + l + r;
      const m = d < 0 && d > -1,
        v = u > 0 && u < 1;
      return (
        0 === t
          ? ((f = g * Math.abs(d)), v && 1 === d && (f -= g * Math.abs(u)))
          : t === h
          ? ((f = g * Math.abs(u) * -1),
            m && -1 === u && (f += g * Math.abs(d)))
          : m || v
          ? ((f = -1 * g), (f += g * Math.abs(d)), (f += g * (1 - Math.abs(u))))
          : (f = g * p),
        f
      );
    }
    setProps(t) {
      var i;
      const n = this;
      if (!n.isModern) return;
      const { instance: s } = n,
        o = n.carousel;
      if (s && o) {
        const a = null === (i = o.slides[t]) || void 0 === i ? void 0 : i.el;
        if (a && a.childNodes.length) {
          let i = e(1 - Math.abs(s.getProgress(t))),
            o = e(n.getShift(t));
          a.style.setProperty("--progress", i ? i + "" : ""),
            a.style.setProperty("--shift", o + "");
        }
      }
    }
    shiftModern() {
      const t = this;
      if (!t.isModern) return;
      const { instance: e, track: i } = t,
        n = e.panzoom,
        s = t.carousel;
      if (!(e && i && n && s)) return;
      if (n.state === v.Init || n.state === v.Destroy) return;
      for (const i of e.slides) t.setProps(i.index);
      let o = (t[$t] + t.thumbGap) * (s.slides.length || 0);
      i.style.setProperty("--width", o + "");
    }
    cleanup() {
      const t = this;
      t.carousel && t.carousel.destroy(),
        (t.carousel = null),
        t.container && t.container.remove(),
        (t.container = null),
        t.track && t.track.remove(),
        (t.track = null),
        (t.state = Bt.Init),
        P(t.instance.container, t.cn("hasThumbs"));
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("initSlide", t.onInitSlide),
        e.state === H.Init
          ? e.on("initSlides", t.onInitSlides)
          : t.onInitSlides(),
        e.on(["change", "Panzoom.afterTransform"], t.onChange),
        e.on("Panzoom.refresh", t.onRefresh);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("initSlide", t.onInitSlide),
        e.off("initSlides", t.onInitSlides),
        e.off(["change", "Panzoom.afterTransform"], t.onChange),
        e.off("Panzoom.refresh", t.onRefresh),
        t.cleanup();
    }
  };
  Object.defineProperty(Wt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: jt,
  });
  const Xt = Object.assign(Object.assign({}, jt), {
      key: "t",
      showOnStart: !0,
      parentEl: null,
    }),
    qt = "is-masked",
    Yt = "aria-hidden";
  class Vt extends $ {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "ref", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "hidden", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        });
    }
    get isEnabled() {
      const t = this.ref;
      return t && !t.isDisabled();
    }
    get isHidden() {
      return this.hidden;
    }
    onClick(t, e) {
      e.stopPropagation();
    }
    onCreateSlide(t, e) {
      var i, n, s;
      const o =
          (null ===
            (s =
              null ===
                (n =
                  null === (i = this.instance) || void 0 === i
                    ? void 0
                    : i.carousel) || void 0 === n
                ? void 0
                : n.slides[e.index]) || void 0 === s
            ? void 0
            : s.type) || "",
        a = e.el;
      if (a && o) {
        let t = `for-${o}`;
        ["video", "youtube", "vimeo", "html5video"].includes(o) &&
          (t += " for-video"),
          C(a, t);
      }
    }
    onInit() {
      var t;
      const e = this,
        i = e.instance,
        n = i.carousel;
      if (e.ref || !n) return;
      const s = e.option("parentEl") || i.footer || i.container;
      if (!s) return;
      const o = p({}, e.options, {
        parentEl: s,
        classes: { container: "f-thumbs fancybox__thumbs" },
        Carousel: { Sync: { friction: i.option("Carousel.friction") || 0 } },
        on: {
          ready: (t) => {
            const i = t.container;
            i &&
              this.hidden &&
              (e.refresh(),
              (i.style.transition = "none"),
              e.hide(),
              i.offsetHeight,
              queueMicrotask(() => {
                (i.style.transition = ""), e.show();
              }));
          },
        },
      });
      (o.Carousel = o.Carousel || {}),
        (o.Carousel.on = p(
          (null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) ||
            {},
          { click: this.onClick, createSlide: this.onCreateSlide }
        )),
        (n.options.Thumbs = o),
        n.attachPlugins({ Thumbs: Wt }),
        (e.ref = n.plugins.Thumbs),
        e.option("showOnStart") || ((e.ref.state = Bt.Hidden), (e.hidden = !0));
    }
    onResize() {
      var t;
      const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
      e && (e.style.maxHeight = "");
    }
    onKeydown(t, e) {
      const i = this.option("key");
      i && i === e && this.toggle();
    }
    toggle() {
      const t = this.ref;
      if (t && !t.isDisabled())
        return t.state === Bt.Hidden
          ? ((t.state = Bt.Init), void t.build())
          : void (this.hidden ? this.show() : this.hide());
    }
    show() {
      const t = this.ref;
      if (!t || t.isDisabled()) return;
      const e = t.container;
      e &&
        (this.refresh(),
        e.offsetHeight,
        e.removeAttribute(Yt),
        e.classList.remove(qt),
        (this.hidden = !1));
    }
    hide() {
      const t = this.ref,
        e = t && t.container;
      e &&
        (this.refresh(),
        e.offsetHeight,
        e.classList.add(qt),
        e.setAttribute(Yt, "true")),
        (this.hidden = !0);
    }
    refresh() {
      const t = this.ref;
      if (!t || !t.state) return;
      const e = t.container,
        i = (null == e ? void 0 : e.firstChild) || null;
      e &&
        i &&
        i.childNodes.length &&
        (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
    }
    attach() {
      const t = this,
        e = t.instance;
      e.state === lt.Init ? e.on("Carousel.init", t.onInit) : t.onInit(),
        e.on("resize", t.onResize),
        e.on("keydown", t.onKeydown);
    }
    detach() {
      var t;
      const e = this,
        i = e.instance;
      i.off("Carousel.init", e.onInit),
        i.off("resize", e.onResize),
        i.off("keydown", e.onKeydown),
        null === (t = i.carousel) ||
          void 0 === t ||
          t.detachPlugins(["Thumbs"]),
        (e.ref = null);
    }
  }
  Object.defineProperty(Vt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Xt,
  });
  const Zt = {
    panLeft: {
      icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
      change: { panX: -100 },
    },
    panRight: {
      icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
      change: { panX: 100 },
    },
    panUp: {
      icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
      change: { panY: -100 },
    },
    panDown: {
      icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
      change: { panY: 100 },
    },
    zoomIn: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
      action: "zoomIn",
    },
    zoomOut: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "zoomOut",
    },
    toggle1to1: {
      icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
      action: "toggleZoom",
    },
    toggleZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "toggleZoom",
    },
    iterateZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "iterateZoom",
    },
    rotateCCW: {
      icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
      action: "rotateCCW",
    },
    rotateCW: {
      icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
      action: "rotateCW",
    },
    flipX: {
      icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
      action: "flipX",
    },
    flipY: {
      icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
      action: "flipY",
    },
    fitX: {
      icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
      action: "fitX",
    },
    fitY: {
      icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
      action: "fitY",
    },
    reset: {
      icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
      action: "reset",
    },
    toggleFS: {
      icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
      action: "toggleFS",
    },
  };
  var Ut;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Disabled = 2)] = "Disabled");
  })(Ut || (Ut = {}));
  const Gt = {
      absolute: "auto",
      display: {
        left: ["infobar"],
        middle: [],
        right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
      },
      enabled: "auto",
      items: {
        infobar: {
          tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
        },
        download: {
          tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
        },
        prev: {
          tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
        },
        next: {
          tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
        },
        slideshow: {
          tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
        },
        fullscreen: {
          tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
        },
        thumbs: {
          tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
        },
        close: {
          tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
        },
      },
      parentEl: null,
    },
    Kt = {
      tabindex: "-1",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Jt = "has-toolbar",
    Qt = "fancybox__toolbar";
  class te extends $ {
    constructor() {
      super(...arguments),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ut.Init,
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
    }
    onReady(t) {
      var e;
      if (!t.carousel) return;
      let i = this.option("display"),
        n = this.option("absolute"),
        s = this.option("enabled");
      if ("auto" === s) {
        const t = this.instance.carousel;
        let e = 0;
        if (t)
          for (const i of t.slides) (i.panzoom || "image" === i.type) && e++;
        e || (s = !1);
      }
      s || (i = void 0);
      let o = 0;
      const a = { left: [], middle: [], right: [] };
      if (i)
        for (const t of ["left", "middle", "right"])
          for (const n of i[t]) {
            const i = this.createEl(n);
            i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
          }
      let r = null;
      if ((o && (r = this.createContainer()), r)) {
        for (const [t, e] of Object.entries(a)) {
          const i = document.createElement("div");
          C(i, Qt + "__column is-" + t);
          for (const t of e) i.appendChild(t);
          "auto" !== n || "middle" !== t || e.length || (n = !0),
            r.appendChild(i);
        }
        !0 === n && C(r, "is-absolute"),
          (this.state = Ut.Ready),
          this.onRefresh();
      } else this.state = Ut.Disabled;
    }
    onClick(t) {
      var e, i;
      const n = this.instance,
        s = n.getSlide(),
        o = null == s ? void 0 : s.panzoom,
        a = t.target,
        r = a && S(a) ? a.dataset : null;
      if (!r) return;
      if (void 0 !== r.fancyboxToggleThumbs)
        return (
          t.preventDefault(),
          t.stopPropagation(),
          void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle())
        );
      if (void 0 !== r.fancyboxToggleFullscreen)
        return (
          t.preventDefault(),
          t.stopPropagation(),
          void this.instance.toggleFullscreen()
        );
      if (void 0 !== r.fancyboxToggleSlideshow) {
        t.preventDefault(), t.stopPropagation();
        const e =
          null === (i = n.carousel) || void 0 === i
            ? void 0
            : i.plugins.Autoplay;
        let s = e.isActive;
        return (
          o && "mousemove" === o.panMode && !s && o.reset(),
          void (s ? e.stop() : e.start())
        );
      }
      const l = r.panzoomAction,
        c = r.panzoomChange;
      if (((c || l) && (t.preventDefault(), t.stopPropagation()), c)) {
        let t = {};
        try {
          t = JSON.parse(c);
        } catch (t) {}
        o && o.applyChange(t);
      } else l && o && o[l] && o[l]();
    }
    onChange() {
      this.onRefresh();
    }
    onRefresh() {
      if (this.instance.isClosing()) return;
      const t = this.container;
      if (!t) return;
      const e = this.instance.getSlide();
      if (!e || e.state !== ct.Ready) return;
      const i = e && !e.error && e.panzoom;
      for (const e of t.querySelectorAll("[data-panzoom-action]"))
        i
          ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
          : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
      let n = i && i.canZoomIn(),
        s = i && i.canZoomOut();
      for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))
        n
          ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
          : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
      for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))
        s
          ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
          : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
      for (const e of t.querySelectorAll(
        '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
      )) {
        s || n
          ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
          : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
        const t = e.querySelector("g");
        t && (t.style.display = n ? "" : "none");
      }
    }
    onDone(t, e) {
      var i;
      null === (i = e.panzoom) ||
        void 0 === i ||
        i.on("afterTransform", () => {
          this.instance.isCurrentSlide(e) && this.onRefresh();
        }),
        this.instance.isCurrentSlide(e) && this.onRefresh();
    }
    createContainer() {
      const t = this.instance.container;
      if (!t) return null;
      const e = this.option("parentEl") || t;
      let i = e.querySelector("." + Qt);
      return (
        i || ((i = document.createElement("div")), C(i, Qt), e.prepend(i)),
        i.addEventListener("click", this.onClick, { passive: !1, capture: !0 }),
        t && C(t, Jt),
        (this.container = i),
        i
      );
    }
    createEl(t) {
      const e = this.instance,
        i = e.carousel;
      if (!i) return null;
      if ("toggleFS" === t) return null;
      if ("fullscreen" === t && !at()) return null;
      let n = null;
      const o = i.slides.length || 0;
      let a = 0,
        r = 0;
      for (const t of i.slides)
        (t.panzoom || "image" === t.type) && a++,
          ("image" === t.type || t.downloadSrc) && r++;
      if (o < 2 && ["infobar", "prev", "next"].includes(t)) return n;
      if (void 0 !== Zt[t] && !a) return null;
      if ("download" === t && !r) return null;
      if ("thumbs" === t) {
        const t = e.plugins.Thumbs;
        if (!t || !t.isEnabled) return null;
      }
      if ("slideshow" === t) {
        if (!i.plugins.Autoplay || o < 2) return null;
      }
      if (void 0 !== Zt[t]) {
        const e = Zt[t];
        (n = document.createElement("button")),
          n.setAttribute(
            "title",
            this.instance.localize(`{{${t.toUpperCase()}}}`)
          ),
          C(n, "f-button"),
          e.action && (n.dataset.panzoomAction = e.action),
          e.change && (n.dataset.panzoomChange = JSON.stringify(e.change)),
          n.appendChild(s(this.instance.localize(e.icon)));
      } else {
        const e = (this.option("items") || [])[t];
        e &&
          ((n = s(this.instance.localize(e.tpl))),
          "function" == typeof e.click &&
            n.addEventListener("click", (t) => {
              t.preventDefault(),
                t.stopPropagation(),
                "function" == typeof e.click && e.click.call(this, this, t);
            }));
      }
      const l = null == n ? void 0 : n.querySelector("svg");
      if (l)
        for (const [t, e] of Object.entries(Kt))
          l.getAttribute(t) || l.setAttribute(t, String(e));
      return n;
    }
    removeContainer() {
      const t = this.container;
      t && t.remove(), (this.container = null), (this.state = Ut.Disabled);
      const e = this.instance.container;
      e && P(e, Jt);
    }
    attach() {
      const t = this,
        e = t.instance;
      e.on("Carousel.initSlides", t.onReady),
        e.on("done", t.onDone),
        e.on(["reveal", "Carousel.change"], t.onChange),
        t.onReady(t.instance);
    }
    detach() {
      const t = this,
        e = t.instance;
      e.off("Carousel.initSlides", t.onReady),
        e.off("done", t.onDone),
        e.off(["reveal", "Carousel.change"], t.onChange),
        t.removeContainer();
    }
  }
  Object.defineProperty(te, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Gt,
  });
  const ee = {
      Hash: class extends $ {
        onReady() {
          dt = !1;
        }
        onChange(t) {
          pt && clearTimeout(pt);
          const { hash: e } = ft(),
            { hash: i } = gt(),
            n = t.isOpeningSlide(t.getSlide());
          n && (ht = i === e ? "" : i),
            e &&
              e !== i &&
              (pt = setTimeout(() => {
                try {
                  if (t.state === lt.Ready) {
                    let t = "replaceState";
                    n && !ut && ((t = "pushState"), (ut = !0)),
                      window.history[t](
                        {},
                        document.title,
                        window.location.pathname + window.location.search + e
                      );
                  }
                } catch (t) {}
              }, 300));
        }
        onClose(t) {
          if ((pt && clearTimeout(pt), !dt && ut))
            return (ut = !1), (dt = !1), void window.history.back();
          if (!dt)
            try {
              window.history.replaceState(
                {},
                document.title,
                window.location.pathname + window.location.search + (ht || "")
              );
            } catch (t) {}
        }
        attach() {
          const t = this.instance;
          t.on("ready", this.onReady),
            t.on(["Carousel.ready", "Carousel.change"], this.onChange),
            t.on("close", this.onClose);
        }
        detach() {
          const t = this.instance;
          t.off("ready", this.onReady),
            t.off(["Carousel.ready", "Carousel.change"], this.onChange),
            t.off("close", this.onClose);
        }
        static parseURL() {
          return gt();
        }
        static startFromUrl() {
          mt();
        }
        static destroy() {
          window.removeEventListener("hashchange", bt, !1);
        }
      },
      Html: zt,
      Images: xt,
      Slideshow: Ft,
      Thumbs: Vt,
      Toolbar: te,
    },
    ie = "with-fancybox",
    ne = "hide-scrollbar",
    se = "--fancybox-scrollbar-compensate",
    oe = "--fancybox-body-margin",
    ae = "aria-hidden",
    re = "is-using-tab",
    le = "is-animated",
    ce = "is-compact",
    he = "is-loading",
    de = "is-opening",
    ue = "has-caption",
    pe = "disabled",
    fe = "tabindex",
    ge = "download",
    me = "href",
    ve = "src",
    be = (t) => "string" == typeof t,
    ye = function () {
      var t = window.getSelection();
      return !!t && "Range" === t.type;
    };
  let we,
    xe = null,
    Ee = null,
    Se = 0,
    Pe = 0,
    Ce = 0,
    Te = 0;
  const Me = new Map();
  let Oe = 0;
  class Ae extends m {
    get isIdle() {
      return this.idle;
    }
    get isCompact() {
      return this.option("compact");
    }
    constructor(t = [], e = {}, i = {}) {
      super(e),
        Object.defineProperty(this, "userSlides", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "userPlugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(this, "idle", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "idleTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "clickTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "pwt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "ignoreFocusChange", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "startedFs", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lt.Init,
        }),
        Object.defineProperty(this, "id", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "caption", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "footer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "carousel", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "lastFocus", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(this, "prevMouseMoveEvent", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        we || (we = at()),
        (this.id = e.id || ++Oe),
        Me.set(this.id, this),
        (this.userSlides = t),
        (this.userPlugins = i),
        queueMicrotask(() => {
          this.init();
        });
    }
    init() {
      if (this.state === lt.Destroy) return;
      (this.state = lt.Init),
        this.attachPlugins(
          Object.assign(Object.assign({}, Ae.Plugins), this.userPlugins)
        ),
        this.emit("init"),
        this.emit("attachPlugins"),
        !0 === this.option("hideScrollbar") &&
          (() => {
            if (!it) return;
            const t = document,
              e = t.body,
              i = t.documentElement;
            if (e.classList.contains(ne)) return;
            let n = window.innerWidth - i.getBoundingClientRect().width;
            const s = parseFloat(window.getComputedStyle(e).marginRight);
            n < 0 && (n = 0),
              i.style.setProperty(se, `${n}px`),
              s && e.style.setProperty(oe, `${s}px`),
              e.classList.add(ne);
          })(),
        this.initLayout(),
        this.scale();
      const t = () => {
        this.initCarousel(this.userSlides),
          (this.state = lt.Ready),
          this.attachEvents(),
          this.emit("ready"),
          setTimeout(() => {
            this.container && this.container.setAttribute(ae, "false");
          }, 16);
      };
      this.option("Fullscreen.autoStart") && we && !we.isFullscreen()
        ? we
            .request()
            .then(() => {
              (this.startedFs = !0), t();
            })
            .catch(() => t())
        : t();
    }
    initLayout() {
      var t, e;
      const i = this.option("parentEl") || document.body,
        n = s(this.localize(this.option("tpl.main") || ""));
      if (n) {
        if (
          (n.setAttribute("id", `fancybox-${this.id}`),
          n.setAttribute("aria-label", this.localize("{{MODAL}}")),
          n.classList.toggle(ce, this.isCompact),
          C(n, this.option("mainClass") || ""),
          C(n, de),
          (this.container = n),
          (this.footer = n.querySelector(".fancybox__footer")),
          i.appendChild(n),
          C(document.documentElement, ie),
          (xe && Ee) ||
            ((xe = document.createElement("span")),
            C(xe, "fancybox-focus-guard"),
            xe.setAttribute(fe, "0"),
            xe.setAttribute(ae, "true"),
            xe.setAttribute("aria-label", "Focus guard"),
            (Ee = xe.cloneNode()),
            null === (t = n.parentElement) ||
              void 0 === t ||
              t.insertBefore(xe, n),
            null === (e = n.parentElement) || void 0 === e || e.append(Ee)),
          n.addEventListener("mousedown", (t) => {
            (Se = t.pageX), (Pe = t.pageY), P(n, re);
          }),
          this.option("closeExisting"))
        )
          for (const t of Me.values()) t.id !== this.id && t.close();
        else
          this.option("animated") &&
            (C(n, le),
            setTimeout(() => {
              this.isClosing() || P(n, le);
            }, 350));
        this.emit("initLayout");
      }
    }
    initCarousel(t) {
      const e = this.container;
      if (!e) return;
      const n = e.querySelector(".fancybox__carousel");
      if (!n) return;
      const s = (this.carousel = new tt(
        n,
        p(
          {},
          {
            slides: t,
            transition: "fade",
            Panzoom: {
              lockAxis: this.option("dragToClose") ? "xy" : "x",
              infinite: !!this.option("dragToClose") && "y",
            },
            Dots: !1,
            Navigation: {
              classes: {
                container: "fancybox__nav",
                button: "f-button",
                isNext: "is-next",
                isPrev: "is-prev",
              },
            },
            initialPage: this.option("startIndex"),
            l10n: this.option("l10n"),
          },
          this.option("Carousel") || {}
        )
      ));
      s.on("*", (t, e, ...i) => {
        this.emit(`Carousel.${e}`, t, ...i);
      }),
        s.on(["ready", "change"], () => {
          this.manageCaption();
        }),
        this.on("Carousel.removeSlide", (t, e, i) => {
          this.clearContent(i), (i.state = void 0);
        }),
        s.on("Panzoom.touchStart", () => {
          var t, e;
          this.isCompact || this.endIdle(),
            (null === (t = document.activeElement) || void 0 === t
              ? void 0
              : t.closest(".f-thumbs")) &&
              (null === (e = this.container) || void 0 === e || e.focus());
        }),
        s.on("settle", () => {
          this.idleTimer ||
            this.isCompact ||
            !this.option("idle") ||
            this.setIdle(),
            this.option("autoFocus") && !this.isClosing && this.checkFocus();
        }),
        this.option("dragToClose") &&
          (s.on("Panzoom.afterTransform", (t, e) => {
            const n = this.getSlide();
            if (n && i(n.el)) return;
            const s = this.container;
            if (s) {
              const t = Math.abs(e.current.f),
                i =
                  t < 1
                    ? ""
                    : Math.max(
                        0.5,
                        Math.min(1, 1 - (t / e.contentRect.fitHeight) * 1.5)
                      );
              s.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                s.style.setProperty("--fancybox-opacity", i + "");
            }
          }),
          s.on("Panzoom.touchEnd", (t, e, n) => {
            var s;
            const o = this.getSlide();
            if (o && i(o.el)) return;
            if (
              e.isMobile &&
              document.activeElement &&
              -1 !==
                ["TEXTAREA", "INPUT"].indexOf(
                  null === (s = document.activeElement) || void 0 === s
                    ? void 0
                    : s.nodeName
                )
            )
              return;
            const a = Math.abs(e.dragOffset.y);
            "y" === e.lockedAxis &&
              (a >= 200 || (a >= 50 && e.dragOffset.time < 300)) &&
              (n && n.cancelable && n.preventDefault(),
              this.close(n, "f-throwOut" + (e.current.f < 0 ? "Up" : "Down")));
          })),
        s.on("change", (t) => {
          var e;
          let i =
            null === (e = this.getSlide()) || void 0 === e
              ? void 0
              : e.triggerEl;
          if (i) {
            const e = new CustomEvent("slideTo", {
              bubbles: !0,
              cancelable: !0,
              detail: t.page,
            });
            i.dispatchEvent(e);
          }
        }),
        s.on(["refresh", "change"], (t) => {
          const e = this.container;
          if (!e) return;
          for (const i of e.querySelectorAll("[data-fancybox-current-index]"))
            i.innerHTML = t.page + 1;
          for (const i of e.querySelectorAll("[data-fancybox-count]"))
            i.innerHTML = t.pages.length;
          if (!t.isInfinite) {
            for (const i of e.querySelectorAll("[data-fancybox-next]"))
              t.page < t.pages.length - 1
                ? (i.removeAttribute(pe), i.removeAttribute(fe))
                : (i.setAttribute(pe, ""), i.setAttribute(fe, "-1"));
            for (const i of e.querySelectorAll("[data-fancybox-prev]"))
              t.page > 0
                ? (i.removeAttribute(pe), i.removeAttribute(fe))
                : (i.setAttribute(pe, ""), i.setAttribute(fe, "-1"));
          }
          const i = this.getSlide();
          if (!i) return;
          let n = i.downloadSrc || "";
          n || "image" !== i.type || i.error || !be(i[ve]) || (n = i[ve]);
          for (const t of e.querySelectorAll("[data-fancybox-download]")) {
            const e = i.downloadFilename;
            n
              ? (t.removeAttribute(pe),
                t.removeAttribute(fe),
                t.setAttribute(me, n),
                t.setAttribute(ge, e || n),
                t.setAttribute("target", "_blank"))
              : (t.setAttribute(pe, ""),
                t.setAttribute(fe, "-1"),
                t.removeAttribute(me),
                t.removeAttribute(ge));
          }
        }),
        this.emit("initCarousel");
    }
    attachEvents() {
      const t = this,
        e = t.container;
      if (!e) return;
      e.addEventListener("click", t.onClick, { passive: !1, capture: !1 }),
        e.addEventListener("wheel", t.onWheel, { passive: !1, capture: !1 }),
        document.addEventListener("keydown", t.onKeydown, {
          passive: !1,
          capture: !0,
        }),
        document.addEventListener("visibilitychange", t.onVisibilityChange, !1),
        document.addEventListener("mousemove", t.onMousemove),
        t.option("trapFocus") &&
          document.addEventListener("focus", t.onFocus, !0),
        window.addEventListener("resize", t.onResize);
      const i = window.visualViewport;
      i &&
        (i.addEventListener("scroll", t.onResize),
        i.addEventListener("resize", t.onResize));
    }
    detachEvents() {
      const t = this,
        e = t.container;
      if (!e) return;
      document.removeEventListener("keydown", t.onKeydown, {
        passive: !1,
        capture: !0,
      }),
        e.removeEventListener("wheel", t.onWheel, { passive: !1, capture: !1 }),
        e.removeEventListener("click", t.onClick, { passive: !1, capture: !1 }),
        document.removeEventListener("mousemove", t.onMousemove),
        window.removeEventListener("resize", t.onResize);
      const i = window.visualViewport;
      i &&
        (i.removeEventListener("resize", t.onResize),
        i.removeEventListener("scroll", t.onResize)),
        document.removeEventListener(
          "visibilitychange",
          t.onVisibilityChange,
          !1
        ),
        document.removeEventListener("focus", t.onFocus, !0);
    }
    scale() {
      const t = this.container;
      if (!t) return;
      const e = window.visualViewport,
        i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
      let n = "",
        s = "",
        o = "";
      if (e && i > 1) {
        let t = `${e.offsetLeft}px`,
          a = `${e.offsetTop}px`;
        (n = e.width * i + "px"),
          (s = e.height * i + "px"),
          (o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`);
      }
      (t.style.transform = o), (t.style.width = n), (t.style.height = s);
    }
    onClick(t) {
      var e;
      const { container: i, isCompact: n } = this;
      if (!i || this.isClosing()) return;
      !n && this.option("idle") && this.resetIdle();
      const s = t.composedPath()[0];
      if (s.closest(".fancybox-spinner") || s.closest("[data-fancybox-close]"))
        return t.preventDefault(), void this.close(t);
      if (s.closest("[data-fancybox-prev]"))
        return t.preventDefault(), void this.prev();
      if (s.closest("[data-fancybox-next]"))
        return t.preventDefault(), void this.next();
      if ("click" === t.type && 0 === t.detail) return;
      if (Math.abs(t.pageX - Se) > 30 || Math.abs(t.pageY - Pe) > 30) return;
      const o = document.activeElement;
      if (ye() && o && i.contains(o)) return;
      if (
        n &&
        "image" ===
          (null === (e = this.getSlide()) || void 0 === e ? void 0 : e.type)
      )
        return void (this.clickTimer
          ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
          : (this.clickTimer = setTimeout(() => {
              this.toggleIdle(), (this.clickTimer = null);
            }, 350)));
      if ((this.emit("click", t), t.defaultPrevented)) return;
      let a = !1;
      if (s.closest(".fancybox__content")) {
        if (o) {
          if (o.closest("[contenteditable]")) return;
          s.matches(st) || o.blur();
        }
        if (ye()) return;
        a = this.option("contentClick");
      } else s.closest(".fancybox__carousel") && !s.matches(st) && (a = this.option("backdropClick"));
      "close" === a
        ? (t.preventDefault(), this.close(t))
        : "next" === a
        ? (t.preventDefault(), this.next())
        : "prev" === a && (t.preventDefault(), this.prev());
    }
    onWheel(t) {
      const e = t.target;
      let i = this.option("wheel", t);
      e.closest(".fancybox__thumbs") && (i = "slide");
      const s = "slide" === i,
        o = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (
          t,
          e
        ) {
          return Math.abs(e) > Math.abs(t) ? e : t;
        }),
        a = Math.max(-1, Math.min(1, o)),
        r = Date.now();
      this.pwt && r - this.pwt < 300
        ? s && t.preventDefault()
        : ((this.pwt = r),
          this.emit("wheel", t, a),
          t.defaultPrevented ||
            ("close" === i
              ? (t.preventDefault(), this.close(t))
              : "slide" === i &&
                (n(e) ||
                  (t.preventDefault(), this[a > 0 ? "prev" : "next"]()))));
    }
    onScroll() {
      window.scrollTo(Ce, Te);
    }
    onKeydown(t) {
      if (!this.isTopmost()) return;
      this.isCompact ||
        !this.option("idle") ||
        this.isClosing() ||
        this.resetIdle();
      const e = t.key,
        i = this.option("keyboard");
      if (!i) return;
      const n = t.composedPath()[0],
        s = document.activeElement && document.activeElement.classList,
        o =
          (s && s.contains("f-button")) ||
          n.dataset.carouselPage ||
          n.dataset.carouselIndex;
      if ("Escape" !== e && !o && S(n)) {
        if (
          n.isContentEditable ||
          -1 !==
            ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
              n.nodeName
            )
        )
          return;
      }
      if (
        ("Tab" === t.key ? C(this.container, re) : P(this.container, re),
        t.ctrlKey || t.altKey || t.shiftKey)
      )
        return;
      this.emit("keydown", e, t);
      const a = i[e];
      a && "function" == typeof this[a] && (t.preventDefault(), this[a]());
    }
    onResize() {
      const t = this.container;
      if (!t) return;
      const e = this.isCompact;
      t.classList.toggle(ce, e),
        this.manageCaption(this.getSlide()),
        this.isCompact ? this.clearIdle() : this.endIdle(),
        this.scale(),
        this.emit("resize");
    }
    onFocus(t) {
      this.isTopmost() && this.checkFocus(t);
    }
    onMousemove(t) {
      (this.prevMouseMoveEvent = t),
        !this.isCompact && this.option("idle") && this.resetIdle();
    }
    onVisibilityChange() {
      "visible" === document.visibilityState
        ? this.checkFocus()
        : this.endIdle();
    }
    manageCloseBtn(t) {
      const e = this.optionFor(t, "closeButton") || !1;
      if ("auto" === e) {
        const t = this.plugins.Toolbar;
        if (t && t.state === Ut.Ready) return;
      }
      if (!e) return;
      if (!t.contentEl || t.closeBtnEl) return;
      const i = this.option("tpl.closeButton");
      if (i) {
        const e = s(this.localize(i));
        (t.closeBtnEl = t.contentEl.appendChild(e)),
          t.el && C(t.el, "has-close-btn");
      }
    }
    manageCaption(t = void 0) {
      var e, i;
      const n = "fancybox__caption",
        s = this.container;
      if (!s) return;
      P(s, ue);
      const o = this.isCompact || this.option("commonCaption"),
        a = !o;
      if (
        (this.caption && this.stop(this.caption),
        a && this.caption && (this.caption.remove(), (this.caption = null)),
        o && !this.caption)
      )
        for (const t of (null === (e = this.carousel) || void 0 === e
          ? void 0
          : e.slides) || [])
          t.captionEl &&
            (t.captionEl.remove(),
            (t.captionEl = void 0),
            P(t.el, ue),
            null === (i = t.el) ||
              void 0 === i ||
              i.removeAttribute("aria-labelledby"));
      if ((t || (t = this.getSlide()), !t || (o && !this.isCurrentSlide(t))))
        return;
      const r = t.el;
      let l = this.optionFor(t, "caption", "");
      if (!l)
        return void (
          o &&
          this.caption &&
          this.animate(this.caption, "f-fadeOut", () => {
            this.caption && (this.caption.innerHTML = "");
          })
        );
      let c = null;
      if (a) {
        if (((c = t.captionEl || null), r && !c)) {
          const e = n + `_${this.id}_${t.index}`;
          (c = document.createElement("div")),
            C(c, n),
            c.setAttribute("id", e),
            (t.captionEl = r.appendChild(c)),
            C(r, ue),
            r.setAttribute("aria-labelledby", e);
        }
      } else {
        if (((c = this.caption), c || (c = s.querySelector("." + n)), !c)) {
          (c = document.createElement("div")),
            (c.dataset.fancyboxCaption = ""),
            C(c, n);
          (this.footer || s).prepend(c);
        }
        C(s, ue), (this.caption = c);
      }
      c &&
        ((c.innerHTML = ""),
        be(l) || "number" == typeof l
          ? (c.innerHTML = l + "")
          : l instanceof HTMLElement && c.appendChild(l));
    }
    checkFocus(t) {
      this.focus(t);
    }
    focus(t) {
      var e;
      if (this.ignoreFocusChange) return;
      const i = document.activeElement || null,
        n = (null == t ? void 0 : t.target) || null,
        s = this.container,
        o = null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport;
      if (!s || !o) return;
      if (!t && i && s.contains(i)) return;
      const a = this.getSlide(),
        r = a && a.state === ct.Ready ? a.el : null;
      if (!r || r.contains(i) || s === i) return;
      t && t.cancelable && t.preventDefault(), (this.ignoreFocusChange = !0);
      const l = Array.from(s.querySelectorAll(st));
      let c = [],
        h = null;
      for (let t of l) {
        const e = !t.offsetParent || !!t.closest('[aria-hidden="true"]'),
          i = r && r.contains(t),
          n = !o.contains(t);
        if (t === s || ((i || n) && !e)) {
          c.push(t);
          const e = t.dataset.origTabindex;
          void 0 !== e && e && (t.tabIndex = parseFloat(e)),
            t.removeAttribute("data-orig-tabindex"),
            (!t.hasAttribute("autoFocus") && h) || (h = t);
        } else {
          const e =
            void 0 === t.dataset.origTabindex
              ? t.getAttribute("tabindex") || ""
              : t.dataset.origTabindex;
          e && (t.dataset.origTabindex = e), (t.tabIndex = -1);
        }
      }
      let d = null;
      t
        ? (!n || c.indexOf(n) < 0) &&
          ((d = h || s),
          c.length &&
            (i === Ee
              ? (d = c[0])
              : (this.lastFocus !== s && i !== xe) || (d = c[c.length - 1])))
        : (d = a && "image" === a.type ? s : h || s),
        d && ot(d),
        (this.lastFocus = document.activeElement),
        (this.ignoreFocusChange = !1);
    }
    next() {
      const t = this.carousel;
      t && t.pages.length > 1 && t.slideNext();
    }
    prev() {
      const t = this.carousel;
      t && t.pages.length > 1 && t.slidePrev();
    }
    jumpTo(...t) {
      this.carousel && this.carousel.slideTo(...t);
    }
    isTopmost() {
      var t;
      return (
        (null === (t = Ae.getInstance()) || void 0 === t ? void 0 : t.id) ==
        this.id
      );
    }
    animate(t = null, e = "", i) {
      if (!t || !e) return void (i && i());
      this.stop(t);
      const n = (s) => {
        s.target === t &&
          t.dataset.animationName &&
          (t.removeEventListener("animationend", n),
          delete t.dataset.animationName,
          i && i(),
          P(t, e));
      };
      (t.dataset.animationName = e),
        t.addEventListener("animationend", n),
        C(t, e);
    }
    stop(t) {
      t &&
        t.dispatchEvent(
          new CustomEvent("animationend", {
            bubbles: !1,
            cancelable: !0,
            currentTarget: t,
          })
        );
    }
    setContent(t, e = "", i = !0) {
      if (this.isClosing()) return;
      const n = t.el;
      if (!n) return;
      let o = null;
      if (
        (S(e)
          ? (o = e)
          : ((o = s(e + "")),
            S(o) ||
              ((o = document.createElement("div")), (o.innerHTML = e + ""))),
        ["img", "picture", "iframe", "video", "audio"].includes(
          o.nodeName.toLowerCase()
        ))
      ) {
        const t = document.createElement("div");
        t.appendChild(o), (o = t);
      }
      S(o) && t.filter && !t.error && (o = o.querySelector(t.filter)),
        o && S(o)
          ? (C(o, "fancybox__content"),
            t.id && o.setAttribute("id", t.id),
            n.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`),
            n.prepend(o),
            "none" === o.style.display && (o.style.display = ""),
            "none" === getComputedStyle(o).getPropertyValue("display") &&
              (o.style.display =
                t.display || this.option("defaultDisplay") || "flex"),
            (t.contentEl = o),
            i && this.revealContent(t),
            this.manageCloseBtn(t),
            this.manageCaption(t))
          : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
    revealContent(t, e) {
      const i = t.el,
        n = t.contentEl;
      i &&
        n &&
        (this.emit("reveal", t),
        this.hideLoading(t),
        (t.state = ct.Opening),
        (e = this.isOpeningSlide(t)
          ? void 0 === e
            ? this.optionFor(t, "showClass")
            : e
          : "f-fadeIn")
          ? this.animate(n, e, () => {
              this.done(t);
            })
          : this.done(t));
    }
    done(t) {
      this.isClosing() ||
        ((t.state = ct.Ready),
        this.emit("done", t),
        C(t.el, "is-done"),
        this.isCurrentSlide(t) &&
          this.option("autoFocus") &&
          queueMicrotask(() => {
            var e;
            null === (e = t.panzoom) || void 0 === e || e.updateControls(),
              this.option("autoFocus") && this.focus();
          }),
        this.isOpeningSlide(t) &&
          (P(this.container, de),
          !this.isCompact && this.option("idle") && this.setIdle()));
    }
    isCurrentSlide(t) {
      const e = this.getSlide();
      return !(!t || !e) && e.index === t.index;
    }
    isOpeningSlide(t) {
      var e, i;
      return (
        null ===
          (null === (e = this.carousel) || void 0 === e
            ? void 0
            : e.prevPage) &&
        t &&
        t.index ===
          (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
      );
    }
    showLoading(t) {
      t.state = ct.Loading;
      const e = t.el;
      if (!e) return;
      C(e, he),
        this.emit("loading", t),
        t.spinnerEl ||
          setTimeout(() => {
            if (!this.isClosing() && !t.spinnerEl && t.state === ct.Loading) {
              let i = s(E);
              C(i, "fancybox-spinner"),
                (t.spinnerEl = i),
                e.prepend(i),
                this.animate(i, "f-fadeIn");
            }
          }, 250);
    }
    hideLoading(t) {
      const e = t.el;
      if (!e) return;
      const i = t.spinnerEl;
      this.isClosing()
        ? null == i || i.remove()
        : (P(e, he),
          i &&
            this.animate(i, "f-fadeOut", () => {
              i.remove();
            }),
          t.state === ct.Loading &&
            (this.emit("loaded", t), (t.state = ct.Ready)));
    }
    setError(t, e) {
      if (this.isClosing()) return;
      const i = new Event("error", { bubbles: !0, cancelable: !0 });
      if ((this.emit("error", i, t), i.defaultPrevented)) return;
      (t.error = e), this.hideLoading(t), this.clearContent(t);
      const n = document.createElement("div");
      n.classList.add("fancybox-error"),
        (n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>")),
        this.setContent(t, n);
    }
    clearContent(t) {
      if (void 0 === t.state) return;
      this.emit("clearContent", t),
        t.contentEl && (t.contentEl.remove(), (t.contentEl = void 0));
      const e = t.el;
      e &&
        (P(e, "has-error"),
        P(e, "has-unknown"),
        P(e, `has-${t.type || "unknown"}`)),
        t.closeBtnEl && t.closeBtnEl.remove(),
        (t.closeBtnEl = void 0),
        t.captionEl && t.captionEl.remove(),
        (t.captionEl = void 0),
        t.spinnerEl && t.spinnerEl.remove(),
        (t.spinnerEl = void 0);
    }
    getSlide() {
      var t;
      const e = this.carousel;
      return (
        (null ===
          (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) ||
        void 0 === t
          ? void 0
          : t.slides[0]) || void 0
      );
    }
    close(t, e) {
      if (this.isClosing()) return;
      const i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });
      if ((this.emit("shouldClose", i, t), i.defaultPrevented)) return;
      t && t.cancelable && (t.preventDefault(), t.stopPropagation());
      const n = () => {
        this.proceedClose(t, e);
      };
      this.startedFs && we && we.isFullscreen()
        ? Promise.resolve(we.exit()).then(() => n())
        : n();
    }
    clearIdle() {
      this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
    }
    setIdle(t = !1) {
      const e = () => {
        this.clearIdle(),
          (this.idle = !0),
          C(this.container, "is-idle"),
          this.emit("setIdle");
      };
      if ((this.clearIdle(), !this.isClosing()))
        if (t) e();
        else {
          const t = this.option("idle");
          t && (this.idleTimer = setTimeout(e, t));
        }
    }
    endIdle() {
      this.clearIdle(),
        this.idle &&
          !this.isClosing() &&
          ((this.idle = !1),
          P(this.container, "is-idle"),
          this.emit("endIdle"));
    }
    resetIdle() {
      this.endIdle(), this.setIdle();
    }
    toggleIdle() {
      this.idle ? this.endIdle() : this.setIdle(!0);
    }
    toggleFullscreen() {
      we &&
        (we.isFullscreen()
          ? we.exit()
          : we.request().then(() => {
              this.startedFs = !0;
            }));
    }
    isClosing() {
      return [lt.Closing, lt.CustomClosing, lt.Destroy].includes(this.state);
    }
    proceedClose(t, e) {
      var i, n;
      (this.state = lt.Closing), this.clearIdle(), this.detachEvents();
      const s = this.container,
        o = this.carousel,
        a = this.getSlide(),
        r =
          a && this.option("placeFocusBack")
            ? a.triggerEl || this.option("triggerEl")
            : null;
      if (
        (r && (et(r) ? ot(r) : r.focus()),
        s &&
          (P(s, de),
          C(s, "is-closing"),
          s.setAttribute(ae, "true"),
          this.option("animated") && C(s, le),
          (s.style.pointerEvents = "none")),
        o)
      ) {
        o.clearTransitions(),
          null === (i = o.panzoom) || void 0 === i || i.destroy(),
          null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
        for (const t of o.slides) {
          (t.state = ct.Closing), this.hideLoading(t);
          const e = t.contentEl;
          e && this.stop(e);
          const i = null == t ? void 0 : t.panzoom;
          i && (i.stop(), i.detachEvents(), i.detachObserver()),
            this.isCurrentSlide(t) || o.emit("removeSlide", t);
        }
      }
      (Ce = window.scrollX),
        (Te = window.scrollY),
        window.addEventListener("scroll", this.onScroll),
        this.emit("close", t),
        this.state !== lt.CustomClosing
          ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")),
            e && a
              ? (this.animate(a.contentEl, e, () => {
                  o && o.emit("removeSlide", a);
                }),
                setTimeout(() => {
                  this.destroy();
                }, 500))
              : this.destroy())
          : setTimeout(() => {
              this.destroy();
            }, 500);
    }
    destroy() {
      var t;
      if (this.state === lt.Destroy) return;
      window.removeEventListener("scroll", this.onScroll),
        (this.state = lt.Destroy),
        null === (t = this.carousel) || void 0 === t || t.destroy();
      const e = this.container;
      e && e.remove(), Me.delete(this.id);
      const i = Ae.getInstance();
      i
        ? i.focus()
        : (xe && (xe.remove(), (xe = null)),
          Ee && (Ee.remove(), (Ee = null)),
          P(document.documentElement, ie),
          (() => {
            if (!it) return;
            const t = document,
              e = t.body;
            e.classList.remove(ne),
              e.style.setProperty(oe, ""),
              t.documentElement.style.setProperty(se, "");
          })(),
          this.emit("destroy"));
    }
    static bind(t, e, i) {
      if (!it) return;
      let n,
        s = "",
        o = {};
      if (
        (void 0 === t
          ? (n = document.body)
          : be(t)
          ? ((n = document.body),
            (s = t),
            "object" == typeof e && (o = e || {}))
          : ((n = t), be(e) && (s = e), "object" == typeof i && (o = i || {})),
        !n || !S(n))
      )
        return;
      s = s || "[data-fancybox]";
      const a = Ae.openers.get(n) || new Map();
      a.set(s, o),
        Ae.openers.set(n, a),
        1 === a.size && n.addEventListener("click", Ae.fromEvent);
    }
    static unbind(t, e) {
      let i,
        n = "";
      if (
        (be(t) ? ((i = document.body), (n = t)) : ((i = t), be(e) && (n = e)),
        !i)
      )
        return;
      const s = Ae.openers.get(i);
      s && n && s.delete(n),
        (n && s) ||
          (Ae.openers.delete(i), i.removeEventListener("click", Ae.fromEvent));
    }
    static destroy() {
      let t;
      for (; (t = Ae.getInstance()); ) t.destroy();
      for (const t of Ae.openers.keys())
        t.removeEventListener("click", Ae.fromEvent);
      Ae.openers = new Map();
    }
    static fromEvent(t) {
      if (t.defaultPrevented) return;
      if (t.button && 0 !== t.button) return;
      if (t.ctrlKey || t.metaKey || t.shiftKey) return;
      let e = t.composedPath()[0];
      const i = e.closest("[data-fancybox-trigger]");
      if (i) {
        const t = i.dataset.fancyboxTrigger || "",
          n = document.querySelectorAll(`[data-fancybox="${t}"]`),
          s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
        e = n[s] || e;
      }
      if (!(e && e instanceof Element)) return;
      let n, s, o, a;
      if (
        ([...Ae.openers].reverse().find(
          ([t, i]) =>
            !(
              !t.contains(e) ||
              ![...i].reverse().find(([i, r]) => {
                let l = e.closest(i);
                return !!l && ((n = t), (s = i), (o = l), (a = r), !0);
              })
            )
        ),
        !n || !s || !o)
      )
        return;
      (a = a || {}), t.preventDefault(), (e = o);
      let r = [],
        l = p({}, rt, a);
      (l.event = t), (l.triggerEl = e), (l.delegate = i);
      const c = l.groupAll,
        h = l.groupAttr,
        d = h && e ? e.getAttribute(`${h}`) : "";
      if (
        ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))),
        e &&
          !c &&
          (r = d ? r.filter((t) => t.getAttribute(`${h}`) === d) : [e]),
        !r.length)
      )
        return;
      const u = Ae.getInstance();
      return u && u.options.triggerEl && r.indexOf(u.options.triggerEl) > -1
        ? void 0
        : (e && (l.startIndex = r.indexOf(e)), Ae.fromNodes(r, l));
    }
    static fromSelector(t, e, i) {
      let n = null,
        s = "",
        o = {};
      if (
        (be(t)
          ? ((n = document.body),
            (s = t),
            "object" == typeof e && (o = e || {}))
          : t instanceof HTMLElement &&
            be(e) &&
            ((n = t), (s = e), "object" == typeof i && (o = i || {})),
        !n || !s)
      )
        return !1;
      const a = Ae.openers.get(n);
      return (
        !!a &&
        ((o = p({}, a.get(s) || {}, o)),
        !!o && Ae.fromNodes(Array.from(n.querySelectorAll(s)), o))
      );
    }
    static fromNodes(t, e) {
      e = p({}, rt, e || {});
      const i = [];
      for (const n of t) {
        const t = n.dataset || {},
          s =
            t[ve] ||
            n.getAttribute(me) ||
            n.getAttribute("currentSrc") ||
            n.getAttribute(ve) ||
            void 0;
        let o;
        const a = e.delegate;
        let r;
        a &&
          i.length === e.startIndex &&
          (o =
            a instanceof HTMLImageElement
              ? a
              : a.querySelector("img:not([aria-hidden])")),
          o ||
            (o =
              n instanceof HTMLImageElement
                ? n
                : n.querySelector("img:not([aria-hidden])")),
          o &&
            ((r = o.currentSrc || o[ve] || void 0),
            !r &&
              o.dataset &&
              (r = o.dataset.lazySrc || o.dataset[ve] || void 0));
        const l = {
          src: s,
          triggerEl: n,
          thumbEl: o,
          thumbElSrc: r,
          thumbSrc: r,
        };
        for (const e in t) {
          let i = t[e] + "";
          (i = "false" !== i && ("true" === i || i)), (l[e] = i);
        }
        i.push(l);
      }
      return new Ae(i, e);
    }
    static getInstance(t) {
      if (t) return Me.get(t);
      return (
        Array.from(Me.values())
          .reverse()
          .find((t) => !t.isClosing() && t) || null
      );
    }
    static getSlide() {
      var t;
      return (
        (null === (t = Ae.getInstance()) || void 0 === t
          ? void 0
          : t.getSlide()) || null
      );
    }
    static show(t = [], e = {}) {
      return new Ae(t, e);
    }
    static next() {
      const t = Ae.getInstance();
      t && t.next();
    }
    static prev() {
      const t = Ae.getInstance();
      t && t.prev();
    }
    static close(t = !0, ...e) {
      if (t) for (const t of Me.values()) t.close(...e);
      else {
        const t = Ae.getInstance();
        t && t.close(...e);
      }
    }
  }
  Object.defineProperty(Ae, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.36",
  }),
    Object.defineProperty(Ae, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: rt,
    }),
    Object.defineProperty(Ae, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ee,
    }),
    Object.defineProperty(Ae, "openers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new Map(),
    }),
    (t.Carousel = tt),
    (t.Fancybox = Ae),
    (t.Panzoom = D);
});
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? e(require("jquery"))
    : e(jQuery);
})(function (e) {
  var t,
    n = navigator.userAgent,
    a = /iphone/i.test(n),
    i = /chrome/i.test(n),
    r = /android/i.test(n);
  (e.mask = {
    definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_",
  }),
    e.fn.extend({
      caret: function (e, t) {
        var n;
        if (
          0 !== this.length &&
          !this.is(":hidden") &&
          this.get(0) === document.activeElement
        )
          return "number" == typeof e
            ? ((t = "number" == typeof t ? t : e),
              this.each(function () {
                this.setSelectionRange
                  ? this.setSelectionRange(e, t)
                  : this.createTextRange &&
                    ((n = this.createTextRange()).collapse(!0),
                    n.moveEnd("character", t),
                    n.moveStart("character", e),
                    n.select());
              }))
            : (this[0].setSelectionRange
                ? ((e = this[0].selectionStart), (t = this[0].selectionEnd))
                : document.selection &&
                  document.selection.createRange &&
                  ((n = document.selection.createRange()),
                  (e = 0 - n.duplicate().moveStart("character", -1e5)),
                  (t = e + n.text.length)),
              { begin: e, end: t });
      },
      unmask: function () {
        return this.trigger("unmask");
      },
      mask: function (n, o) {
        var c, l, u, f, s, h, g;
        if (!n && this.length > 0) {
          var m = e(this[0]).data(e.mask.dataName);
          return m ? m() : void 0;
        }
        return (
          (o = e.extend(
            {
              autoclear: e.mask.autoclear,
              placeholder: e.mask.placeholder,
              completed: null,
            },
            o
          )),
          (c = e.mask.definitions),
          (l = []),
          (u = h = n.length),
          (f = null),
          (n = String(n)),
          e.each(n.split(""), function (e, t) {
            "?" == t
              ? (h--, (u = e))
              : c[t]
              ? (l.push(new RegExp(c[t])),
                null === f && (f = l.length - 1),
                e < u && (s = l.length - 1))
              : l.push(null);
          }),
          this.trigger("unmask").each(function () {
            var m = e(this),
              d = e.map(n.split(""), function (e, t) {
                if ("?" != e) return c[e] ? k(t) : e;
              }),
              p = d.join(""),
              v = m.val();
            function b() {
              if (o.completed) {
                for (var e = f; e <= s; e++) if (l[e] && d[e] === k(e)) return;
                o.completed.call(m);
              }
            }
            function k(e) {
              return e < o.placeholder.length
                ? o.placeholder.charAt(e)
                : o.placeholder.charAt(0);
            }
            function y(e) {
              for (; ++e < h && !l[e]; );
              return e;
            }
            function x(e, t) {
              var n, a;
              if (!(e < 0)) {
                for (n = e, a = y(t); n < h; n++)
                  if (l[n]) {
                    if (!(a < h && l[n].test(d[a]))) break;
                    (d[n] = d[a]), (d[a] = k(a)), (a = y(a));
                  }
                R(), m.caret(Math.max(f, e));
              }
            }
            function j(e) {
              S(), m.val() != v && m.change();
            }
            function A(e, t) {
              var n;
              for (n = e; n < t && n < h; n++) l[n] && (d[n] = k(n));
            }
            function R() {
              m.val(d.join(""));
            }
            function S(e) {
              var t,
                n,
                a,
                i = m.val(),
                r = -1;
              for (t = 0, a = 0; t < h; t++)
                if (l[t]) {
                  for (d[t] = k(t); a++ < i.length; )
                    if (((n = i.charAt(a - 1)), l[t].test(n))) {
                      (d[t] = n), (r = t);
                      break;
                    }
                  if (a > i.length) {
                    A(t + 1, h);
                    break;
                  }
                } else d[t] === i.charAt(a) && a++, t < u && (r = t);
              return (
                e
                  ? R()
                  : r + 1 < u
                  ? o.autoclear || d.join("") === p
                    ? (m.val() && m.val(""), A(0, h))
                    : R()
                  : (R(), m.val(m.val().substring(0, r + 1))),
                u ? t : f
              );
            }
            m.data(e.mask.dataName, function () {
              return e
                .map(d, function (e, t) {
                  return l[t] && e != k(t) ? e : null;
                })
                .join("");
            }),
              m
                .one("unmask", function () {
                  m.off(".mask").removeData(e.mask.dataName);
                })
                .on("focus.mask", function () {
                  var e;
                  m.prop("readonly") ||
                    (clearTimeout(t),
                    (v = m.val()),
                    (e = S()),
                    (t = setTimeout(function () {
                      m.get(0) === document.activeElement &&
                        (R(),
                        e == n.replace("?", "").length
                          ? m.caret(0, e)
                          : m.caret(e));
                    }, 10)));
                })
                .on("blur.mask", j)
                .on("keydown.mask", function (e) {
                  if (!m.prop("readonly")) {
                    var t,
                      n,
                      i,
                      r = e.which || e.keyCode;
                    (g = m.val()),
                      8 === r || 46 === r || (a && 127 === r)
                        ? ((n = (t = m.caret()).begin),
                          (i = t.end) - n == 0 &&
                            ((n =
                              46 !== r
                                ? (function (e) {
                                    for (; --e >= 0 && !l[e]; );
                                    return e;
                                  })(n)
                                : (i = y(n - 1))),
                            (i = 46 === r ? y(i) : i)),
                          A(n, i),
                          x(n, i - 1),
                          e.preventDefault())
                        : 13 === r
                        ? j.call(this, e)
                        : 27 === r &&
                          (m.val(v), m.caret(0, S()), e.preventDefault());
                  }
                })
                .on("keypress.mask", function (t) {
                  if (!m.prop("readonly")) {
                    var n,
                      a,
                      i,
                      o = t.which || t.keyCode,
                      c = m.caret();
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey || o < 32) &&
                      o &&
                      13 !== o
                    ) {
                      if (
                        (c.end - c.begin != 0 &&
                          (A(c.begin, c.end), x(c.begin, c.end - 1)),
                        (n = y(c.begin - 1)) < h &&
                          ((a = String.fromCharCode(o)), l[n].test(a)))
                      ) {
                        if (
                          ((function (e) {
                            var t, n, a, i;
                            for (t = e, n = k(e); t < h; t++)
                              if (l[t]) {
                                if (
                                  ((a = y(t)),
                                  (i = d[t]),
                                  (d[t] = n),
                                  !(a < h && l[a].test(i)))
                                )
                                  break;
                                n = i;
                              }
                          })(n),
                          (d[n] = a),
                          R(),
                          (i = y(n)),
                          r)
                        ) {
                          setTimeout(function () {
                            e.proxy(e.fn.caret, m, i)();
                          }, 0);
                        } else m.caret(i);
                        c.begin <= s && b();
                      }
                      t.preventDefault();
                    }
                  }
                })
                .on("input.mask paste.mask", function () {
                  m.prop("readonly") ||
                    setTimeout(function () {
                      var e = S(!0);
                      m.caret(e), b();
                    }, 0);
                }),
              i &&
                r &&
                m.off("input.mask").on("input.mask", function (e) {
                  var t = m.val(),
                    n = m.caret();
                  if (g && g.length && g.length > t.length) {
                    for (S(!0); n.begin > 0 && !l[n.begin - 1]; ) n.begin--;
                    if (0 === n.begin)
                      for (; n.begin < f && !l[n.begin]; ) n.begin++;
                    m.caret(n.begin, n.begin);
                  } else {
                    S(!0);
                    var a = t.charAt(n.begin);
                    n.begin < h &&
                      (l[n.begin] || n.begin++,
                      l[n.begin].test(a) && n.begin++),
                      m.caret(n.begin, n.begin);
                  }
                  b();
                }),
              S();
          })
        );
      },
    });
});
//# sourceMappingURL=/sm/622b4bf7f5f7495d9a0f1b6c0d5a296833ba46faa494f6973a6a916222ac3af7.map

class App {
  constructor() {
    this.app = {
      time: null,
    };
    this.init();
    this.run();
  }
  init() {
    this.app.document = $(document);
  }
  run() {
    function getScrollBarWidth() {
      var e = document.createElement("p");
      (e.style.width = "100%"), (e.style.height = "200px");
      var t = document.createElement("div");
      (t.style.position = "absolute"),
        (t.style.top = "0px"),
        (t.style.left = "0px"),
        (t.style.visibility = "hidden"),
        (t.style.width = "200px"),
        (t.style.height = "150px"),
        (t.style.overflow = "hidden"),
        t.appendChild(e),
        document.body.appendChild(t);
      var l = e.offsetWidth;
      t.style.overflow = "scroll";
      e = e.offsetWidth;
      return l == e && (e = t.clientWidth), document.body.removeChild(t), l - e;
    }
    $("head").append(
      "<style>.noscroll{margin-right: " + getScrollBarWidth() + "px;}</style>"
    );
    $("head").append(
      "<style>.noscroll .top-menu{padding-right: " +
        getScrollBarWidth() +
        "px;}</style>"
    );
    this.modal();
    this.swiperCat();
    this.swiperProducts();
    this.swiperProductCard();
    this.menu();
    this.faq();
    this.tippy();
    this.filt();
    this.select();
    this.fancybox();
    this.product();
    this.sizeChoose();
    this.calc();
    this.form();
    this.cart();
  }
  cart() {
    function formatNumber(number) {
      number = number.toFixed(0) + "";
      let x = number.split(".");
      let x1 = x[0];
      let x2 = x.length > 1 ? " " + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "." + "$2");
      }
      return x1 + x2;
    }

    function setCost() {
      let costAll = 0;
      $(".cart-def__cost").each((i, el) => {
        let cost = parseInt(
          $(el)
            .text()
            .replace(/[\s.,%]/g, "")
        );
        costAll += cost;
      });
      costAll = formatNumber(costAll);
      costAll = costAll + " ₽";
      $(".cart-final__cost").text(costAll);
    }
    $(".cart-def__delete").on("click", function () {
      let $wrap = $(this).closest(".cart-def__tr");
      $wrap.stop().fadeOut(300);
      setTimeout(() => {
        $wrap.remove();
        setCost();
      }, 300);
      return false;
    });
  }
  form() {
    $(".inp-tel").mask("+7 (999) 999-99-99");
  }
  sort() {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
      let costFrom;
      let costTo;
      let brands;
      let sizes;
      if ($(window).width() > 600) {
        costFrom = parseInt($(".sort-select .range-inp-inp__from").val());
        costTo = $(".sort-select .range-inp-inp__to").val();
        brands = [];
        sizes = [];
        $(".sort-select_brand .checkbox-def__inp:checked").each((i, el) => {
          let val = $(el).closest(".checkbox-el").data("val");
          brands.push(val);
        });
        $(".sort-select_size .checkbox-def__inp:checked").each((i, el) => {
          let val = $(el).closest(".checkbox-el").data("val");
          sizes.push(val);
        });
      } else {
        costFrom = parseInt(
          $(".filt-mob__block_cost .range-inp-inp__from").val()
        );
        costTo = $(".filt-mob__block_cost .range-inp-inp__to").val();
        brands = [];
        sizes = [];
        $(".filt-mob__block_brands .checkbox-def__inp:checked").each(
          (i, el) => {
            let val = $(el).closest(".checkbox-el").data("val");
            brands.push(val);
          }
        );
        $(".filt-mob__block_size .checkbox-def__inp:checked").each((i, el) => {
          let val = $(el).closest(".checkbox-el").data("val");
          sizes.push(val);
        });
      }

      $(".block-catalog__el").each((i, el) => {
        let $wrap = $(el);
        let $block = $wrap.find(".product-def");
        let prBrand = $block.data("brand");
        let prSize = $block.data("size") + "";
        prSize = prSize.split(",");
        let prCost = parseInt($block.data("cost"));
        let checkShowLength = 1;
        let checkShow = 0;
        if (sizes.length) {
          checkShowLength++;
          for (let i = 0; i < sizes.length; i++) {
            for (let l = 0; l < prSize.length; l++) {
              if (sizes[i] == prSize[l]) {
                checkShow++;
              }
            }
          }
        }
        if (brands.length) {
          checkShowLength++;
          for (let i = 0; i < brands.length; i++) {
            if (brands[i] == prBrand) {
              checkShow++;
            }
          }
        }
        if (prCost >= costFrom && prCost <= costTo) {
          checkShow++;
        }
        if (checkShow >= checkShowLength) {
          $wrap.stop().fadeIn(200);
        } else {
          $wrap.stop().hide();
        }
      });
    }, 500);
  }
  calc() {
    $(".block-calc__btn-next").on("click", function () {
      let $wrap = $(this).closest(".block-calc");
      let $btn = $wrap.find(".block-calc__btn");
      let text = $btn.text();
      if (text === "Обувь") {
        text = "Одежда";
      } else {
        text = "Обувь";
      }
      $btn.find("span").text(text);
      return false;
    });
    $(".block-calc__btn").on("click", function () {
      let $wrap = $(this).closest(".block-calc");
      let $inp = $wrap.find(".block-calc__inp");
      let val = parseInt($inp.val());
      let calcVal = 0;
      let $btn = $wrap.find(".block-calc__btn");
      let text = $btn.text();
      if (text === "Одежда") {
        calcVal = ((val * 12.5 + 1900) * 1.04).toFixed(0);
      } else {
        calcVal = ((val * 12.5 + 1500) * 1.02).toFixed(0);
      }
      $(".block-calc__val").text(calcVal);
      return false;
    });
  }
  sizeChoose() {
    $(".size-choose__el").on("click", function () {
      let $wrap = $(this).closest(".size-choose");
      $wrap.find(".size-choose__el").removeClass("active");
      $(this).addClass("active");
      return false;
    });
  }
  swiperProductCard() {
    if ($(".product-card-slider").length) {
      let $wrap = $(".product-card-slider");
      let swiper;
  
      function setSlider() {
        if (!$wrap.hasClass("swiper")) {
          $wrap.addClass("swiper");
          $wrap
            .find(".product-card-slider__content")
            .addClass("swiper-wrapper");
          $wrap.find(".product-card-slider__el").addClass("swiper-slide");
          swiper = new Swiper(".product-card-slider", {
            slidesPerView: 1,
            rewind: true,
            spaceBetween: 16,
            navigation: {
              prevEl: ".acts-swiper__arr_prev",
              nextEl: ".acts-swiper__arr_next",
            },
            on: {
              slideChange: function (e) {
                let $wrap = $(e.slidesEl).closest(".swiper");
                $wrap.find(".acts-swiper__text-from").text(e.realIndex + 1);
                $wrap.find(".acts-swiper__text-to").text(e.slides.length);
              },
              init: function (e) {
                let $wrap = $(e.slidesEl).closest(".swiper");
                $wrap.find(".acts-swiper__text-from").text(e.realIndex + 1);
                $wrap.find(".acts-swiper__text-to").text(e.slides.length);
              },
            },
          });
  
          // Добавляем обработчики событий для стрелок навигации
          $('.acts-swiper__arr_prev').on('click', function() {
            swiper.slidePrev();
          });
          $('.acts-swiper__arr_next').on('click', function() {
            swiper.slideNext();
          });
        }
  
        function unsetSlider() {
          if ($wrap.hasClass("swiper")) {
            $wrap.removeClass("swiper");
            $wrap
              .find(".product-card-slider__content")
              .removeClass("swiper-wrapper");
            $wrap.find(".product-card-slider__el").removeClass("swiper-slide");
            swiper.destroy();
            // Удаляем обработчики событий при уничтожении слайдера
            $('.acts-swiper__arr_prev').off('click');
            $('.acts-swiper__arr_next').off('click');
          }
        }
  
        function slider() {
          let widthWindow = $(window).width();
          if (widthWindow <= 600) {
            setSlider();
          } else {
            unsetSlider();
          }
        }
        slider();
        $(window).resize(function () {
          slider();
        });
      }
    }
  }
  product() {
    $(".product-card__btn").on("click", function () {
      $(".cart-modal .product-min__info").text(
        $(".product-card-sizes-el.active .product-card-sizes-el__title").text()
      );
      $(".cart-min__dropdown").stop().fadeIn(300);
      $(".cart-min__count").text(1);
      return false;
    });
    $(".cart-modal__close, .cart-modal__btn3").on("click", function () {
      $(".cart-min__dropdown").stop().fadeOut(300);
      return false;
    });
    this.clickOutside($(".cart-min__dropdown"), function () {
      $(".cart-min__dropdown").stop().fadeOut(300);
    });

    $(".product-card-sizes-el").on("click", function () {
      $(".product-card-sizes-el").removeClass("active");
      $(this).addClass("active");
      return false;
    });
  }
  fancybox() {
    Fancybox.bind("[data-fancybox]", {});
  }
  select() {
    let _this = this;
    $(".select-def__top").on("click", function () {
      let $wrap = $(this).closest(".select-def");
      if ($wrap.hasClass("active")) {
        $wrap.removeClass("active");
        $wrap.find(".select-def__dropdown").stop().fadeOut(300);
      } else {
        $(".select-def").removeClass("active");
        $(".select-def__dropdown").stop().fadeOut(300);
        $wrap.addClass("active");
        $wrap.find(".select-def__dropdown").stop().fadeIn(300);
      }
      return false;
    });
    this.clickOutside($(".select-def"), function () {
      $(".select-def").removeClass("active");
      $(".select-def__dropdown").stop().fadeOut(300);
    });

    $(".select-def .checkbox-def__inp").on("change", function () {
      let $wrap = $(this).closest(".select-def");
      let text = "";
      $wrap.find(".checkbox-def__inp:checked").each((ind, el) => {
        let $wrapEl = $(el).closest(".checkbox-el");
        text += $wrapEl.find(".checkbox-el__text").text() + ", ";
      });
      $wrap.find(".select-def__val").removeClass("select-def__placeholder");
      $wrap.find(".select-def__val").text(text);
      if (!$wrap.find(".checkbox-def__inp:checked").length) {
        $wrap.find(".select-def__val").addClass("select-def__placeholder");
        $wrap.find(".select-def__val").text("Не выбран");
      }
    });
    $(".filt-mob__block_size .checkbox-def__inp").on("change", function () {
      let $wrap = $(this).closest(".select-def");
      if ($wrap.find(".checkbox-def__inp:checked").length) {
        $(".sort-mob_size").addClass("active");
      } else {
        $(".sort-mob_size").removeClass("active");
      }
      _this.sort();
    });
    $(".filt-mob__block_brands .checkbox-def__inp").on("change", function () {
      let $wrap = $(this).closest(".filt-mob__block_brands");
      if ($wrap.find(".checkbox-def__inp:checked").length) {
        $(".sort-mob_brand").addClass("active");
      } else {
        $(".sort-mob_brand").removeClass("active");
      }
      _this.sort();
    });
  }
  tippy() {
    tippy(".product-card__sizesText", {
      content(reference) {
        const id = reference.getAttribute("data-template");
        const template = document.getElementById(id);
        return template.innerHTML;
      },
      allowHTML: true,
      interactive: true,
      trigger: "click",
      placement: "bottom-end",
    });
  }
  filt() {
    let _this = this;
    $(".range-inp__inp").each((ind, el) => {
      let slider = el;
      let $wrap = $(slider).closest(".range-inp");
      let $inpFrom = $wrap.find(".range-inp-inp__from");
      let $inpTo = $wrap.find(".range-inp-inp__to");
      let text = "3 076₽ - 50 000 ₽";
      let $wrapSot = $wrap.closest(".sort-select");

      function formatNumber(number) {
        number = number.toFixed(0) + "";
        let x = number.split(".");
        let x1 = x[0];
        let x2 = x.length > 1 ? " " + x[1] : "";
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, "$1" + " " + "$2");
        }
        return x1 + x2;
      }
      const fromValue = Math.ceil(
        parseFloat(document.querySelector(".range-inp-inp__from").value)
      );
      const toValue = Math.ceil(
        parseFloat(document.querySelector(".range-inp-inp__to").value)
      );
      console.log(fromValue);
      console.log(toValue);
      noUiSlider.create(slider, {
        start: [fromValue, toValue],
        connect: true,
        range: {
          min: fromValue,
          max: toValue,
        },
      });
      let fix = 0;
      slider.noUiSlider.on("update", function (e) {
        let from = parseInt(e[0]);
        let to = parseInt(e[1]);
        $inpFrom.val(from);
        $inpTo.val(to);
        text = formatNumber(from) + " ₽" + " - " + formatNumber(to) + " ₽";
        $wrapSot.find(".sort-select__text").text(text);
        fix++;
        if (fix > 4) {
          if ($wrap.closest(".filt-mob__block_cost").length) {
            $(".sort-mob_cost").addClass("active");
          }
        }
        _this.sort();
      });
      $inpFrom.on("change", function () {
        let valFrom = $(this).val();
        let valTo = $inpTo.val();
        slider.noUiSlider.set([valFrom, valTo]);
      });
      $inpTo.on("change", function () {
        let valTo = $(this).val();
        let valFrom = $inpFrom.val();
        slider.noUiSlider.set([valFrom, valTo]);
      });
    });

    $(".sort-select__top").on("click", function () {
      let $wrap = $(this).closest(".sort-select");
      if ($wrap.hasClass("open")) {
        $wrap.removeClass("open");
        $wrap.find(".sort-select__dropdown").stop().fadeOut(300);
      } else {
        $(".sort-select").removeClass("open");
        $(".sort-select__dropdown").stop().fadeOut(300);
        $wrap.addClass("open");
        $wrap.find(".sort-select__dropdown").stop().fadeIn(300);
      }
    });
    this.clickOutside($(".sort-select"), function () {
      $(".sort-select").removeClass("open");
      $(".sort-select__dropdown").stop().fadeOut(300);
    });
    $(".popper-filt__close").on("click", function () {
      $(".sort-select").removeClass("open");
      $(".sort-select__dropdown").stop().fadeOut(300);
      return false;
    });

    $(".sort-select .checkbox-def__inp").on("change", function () {
      let $wrap = $(this).closest(".sort-select");
      let $inps = $wrap.find(".checkbox-def__inp:checked");
      if ($inps.length) {
        $wrap.addClass("active");
      } else {
        $wrap.removeClass("active");
      }
      _this.sort();
    });
    $(".popper-filt__reset").on("click", function () {
      let $wrap = $(this).closest(".sort-select");
      let $inps = $wrap.find(".checkbox-def__inp:checked");
      $inps.each((ind, el) => {
        console.log(el);
        $(el).prop("checked", false);
      });
      if ($inps.length) {
        $wrap.removeClass("active");
      }
      return false;
    });
    $(".btn-filt, .filt-mob__close").on("click", function () {
      let $filt = $(".filt-mob");
      if ($filt.hasClass("active")) {
        $filt.removeClass("active");
        $filt.stop().fadeOut(300);
        _this.unsetNoscroll();
      } else {
        $filt.addClass("active");
        $filt.stop().fadeIn(300);
        _this.setNoscroll();
      }
      return false;
    });

    $(".sort-mob_size").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".filt-mob__block_size .checkbox-def__inp").prop("checked", false);
        $(".filt-mob__block_size .select-def__val").text("Не выбран");
        $(".filt-mob__block_size .select-def__val").addClass(
          "select-def__placeholder"
        );
        _this.sort();
      } else {
        $(".filt-single-mob-bg").addClass("active");
        $(".filt-single-mob.filt-size").addClass("active");
      }
    });
    $(".sort-mob_brand").on("click", function () {
      console.log(123123123);
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".filt-mob__block_brands .checkbox-def__inp").prop("checked", false);
        _this.sort();
      } else {
        $(".filt-single-mob-bg").addClass("active");
        $(".filt-single-mob.filt-brand").addClass("active");
      }
    });
    $(".sort-mob_cost").on("click", function () {
      let el = $(this);
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".range-inp__inp").each((ind, el) => {
          $(el)[0].noUiSlider.reset();
        });
      } else {
        $(".filt-single-mob-bg").addClass("active");
        $(".filt-single-mob.filt-cost").addClass("active");
      }
    });

    $(".popper-filt__reset").on("click", function () {
      let $wrap = $(this).closest(".sort-select");
      $(".range-inp__inp").each((ind, el) => {
        $(el)[0].noUiSlider.reset();
      });
      $wrap.find(".checkbox-def__inp").prop("checked", false);
      return false;
    });
  }
  faq() {
    $(".faq-el__top").on("click", function () {
      let $wrap = $(this).closest(".faq-el");
      if ($wrap.hasClass("active")) {
        $wrap.removeClass("active");
        $wrap.find(".faq-el__dropdown").stop().slideUp(300);
      } else {
        $wrap.addClass("active");
        $wrap.find(".faq-el__dropdown").stop().slideDown(300);
      }
      return false;
    });
    $(".faq-2-el__top").on("click", function () {
      let $wrap = $(this).closest(".faq-2-el");
      if ($wrap.hasClass("active")) {
        $wrap.removeClass("active");
        $wrap.find(".faq-2-el__dropdown").stop().slideUp(300);
      } else {
        $wrap.addClass("active");
        $wrap.find(".faq-2-el__dropdown").stop().slideDown(300);
      }
      return false;
    });
  }
  menu() {
    let _this = this;
    $(".top-menu__btn-burger, .mob-menu__close").on("click", function () {
      let $menu = $(".mob-menu");
      if ($menu.hasClass("active")) {
        $menu.removeClass("active");
        $menu.stop().fadeOut(300);
        _this.unsetNoscroll();
      } else {
        $menu.addClass("active");
        $menu.stop().fadeIn(300);
        _this.setNoscroll();
      }
      return false;
    });
  }
  swiperProducts() {
    const swiper = new Swiper(".products-swiper", {
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 4,
        },
      },
      navigation: {
        prevEl: ".acts-swiper__arr_prev",
        nextEl: ".acts-swiper__arr_next",
      },
      on: {
        slideChange: function (e) {
          let $wrap = $(e.slidesEl).closest(".swiper");
          $wrap.find(".acts-swiper__text-from").text(e.realIndex + 1);
          $wrap.find(".acts-swiper__text-to").text(e.slides.length);
        },
        init: function (e) {
          let $wrap = $(e.slidesEl).closest(".swiper");
          $wrap.find(".acts-swiper__text-from").text(e.realIndex + 1);
          $wrap.find(".acts-swiper__text-to").text(e.slides.length);
        },
      },
    });
  }
  swiperCat() {
    const swiper = new Swiper(".slider-cat", {
      slidesPerView: "auto",
      rewind: true,
      navigation: {
        prevEl: ".sec-cat .nav-def__arr_prev",
        nextEl: ".sec-cat .nav-def__arr_next",
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
        },
        1201: {
          spaceBetween: 51,
        },
      },
    });
  }
  modal() {
    let _this = this;
    $(".modal-def__overlay, .modal-content__close, .modal-def__close").on(
      "click",
      function () {
        let $modal = $(this).closest(".modal-def");
        $modal.fadeOut(300);
        _this.unsetNoscroll();
        return false;
      }
    );
    $(".btn-modal").on("click", function () {
      $(".modal-def").hide();
      let $modal = $($(this).data("modal"));
      _this.setNoscroll();
      $modal.fadeIn(300);
      return false;
    });
  }
  setNoscroll() {
    if ($(window).height() === $("html").height()) {
    } else {
      document.querySelector("html").classList.add("noscroll");
    }
  }
  unsetNoscroll() {
    document.querySelector("html").classList.remove("noscroll");
  }
  clickOutside(wrap, func) {
    this.app.document.mouseup(function (e) {
      let countCheck = wrap.length;
      let countCheckLength = 0;
      for (let i = 0; i < wrap.length; i++) {
        if (
          $(wrap[i]).has(e.target).length === 0 &&
          $(wrap[i])[0] !== e.target
        ) {
        } else {
          countCheckLength++;
        }
      }
      if (countCheckLength === 0) {
        func();
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", function (event) {
  new App();
});
// Правки
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.review-slide');
  const indicators = document.querySelectorAll('.indicator');

  let startX = 0;
  let endX = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
      indicators.forEach((indicator, i) => {
          indicator.classList.remove('active');
          if (i === index) {
              indicator.classList.add('active');
          }
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }

  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
      });
  });

  document.querySelector('.reviews-block__text').addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
  });

  document.querySelector('.reviews-block__text').addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
  });

  document.querySelector('.reviews-block__text').addEventListener('touchend', () => {
      if (startX > endX + 50) {
          nextSlide();
      } else if (startX < endX - 50) {
          prevSlide();
      }
  });

  showSlide(currentSlide);
});


document.addEventListener('DOMContentLoaded', function() {
  const openModalButton = document.querySelector('.form-el__inp.inp-def');
  const modalMap = document.getElementById('modal-map');
  const closeModalButton = document.getElementById('close-modal-map');

  openModalButton.addEventListener('click', function() {
    modalMap.style.display = 'flex';
  });

  closeModalButton.addEventListener('click', function() {
    modalMap.style.display = 'none';
  });

  modalMap.addEventListener('click', function(e) {
    if (e.target === modalMap) {
      modalMap.style.display = 'none';
    }
  });
});

// Mao Yandex
initMap()
async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer} = ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById('map'),

      // Передаём параметры инициализации карты
      {
          location: {
              // Координаты центра карты
              center: [37.588144, 55.733842],

              // Уровень масштабирования
              zoom: 10
          }
      }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}