/* h5ai v0.30.0 - https://larsjung.de/h5ai/ */ ! function(e) {
    if (!e || e.window !== e || !e.document) throw new Error("no-window");
    var n = "no-browser",
        r = e.document.documentElement;

    function t(e, t) {
        if (!t) throw r.className = n, new Error(n + ": " + e)
    }

    function i(e) {
        return "function" == typeof e
    }
    r.className = "", t("console", e.console && i(e.console.log)), t("assign", e.Object && i(e.Object.assign)), t("promise", i(e.Promise)), t("xhr", e.XMLHttpRequest)
}(this),
function(n) {
    var r = {};

    function i(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = n, i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 0)
}([function(e, t, n) {
    n(1)
}, function(e, t, n) {
    var r = n(2),
        i = r.dom,
        o = r.awaitReady,
        a = n(8),
        s = i("script[data-module]").attr("data-module"),
        l = {
            action: "get",
            setup: !0,
            options: !0,
            types: !0
        };
    if ("index" === s) l.theme = !0, l.langs = !0;
    else {
        if ("info" !== s) throw new Error("no-main-module: '".concat(s, "'"));
        l.refresh = !0
    }
    a._update(l).then(function() {
        return o()
    }).then(function() {
        return n(10)("./".concat(s))
    })
}, function(e, t, n) {
    e.exports = Object.assign({}, n(3), n(4), n(6), n(7))
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        return n(e) === t
    }

    function i(e) {
        return r(e, "string")
    }

    function o(e) {
        return r(e, "function")
    }

    function a(e) {
        return e && e.hasOwnProperty("length")
    }

    function s(e) {
        return !e || i(e) ? [] : (a(e) && (e = Array.from(e)), Object.keys(e))
    }

    function l(t) {
        return s(t).map(function(e) {
            return t[e]
        })
    }

    function c(e, t) {
        return l(e).filter(t)
    }

    function u(e, t) {
        return e < t ? -1 : t < e ? 1 : 0
    }
    e.exports = {
        is: function(e) {
            return null != e
        },
        isStr: i,
        isFn: o,
        isNum: function(e) {
            return r(e, "number")
        },
        hasLength: a,
        keys: s,
        values: l,
        each: function(t, n) {
            return s(t).forEach(function(e) {
                return n(t[e], e)
            })
        },
        filter: c,
        map: function(e, t) {
            return l(e).map(t)
        },
        includes: function(e, t) {
            return 0 <= l(e).indexOf(t)
        },
        compact: function(e) {
            return c(e, function(e) {
                return !!e
            })
        },
        isInstanceOf: function(e, t) {
            return !!e && e instanceof t
        },
        toArray: function(e) {
            return Array.from(e)
        },
        difference: function(e, t) {
            return t = l(t), c(e, function(e) {
                return t.indexOf(e) < 0
            })
        },
        intersection: function(e, t) {
            return t = l(t), c(e, function(e) {
                return 0 <= t.indexOf(e)
            })
        },
        cmp: u,
        sortBy: function(e, t) {
            var n = o(t) ? t : function(e) {
                return e[t]
            };
            return l(e).sort(function(e, t) {
                return u(n(e), n(t))
            })
        },
        debounce: function(e, t) {
            var n = null;
            return function() {
                clearTimeout(n), n = setTimeout(e, t)
            }
        }
    }
}, function(T, e, $) {
    (function(e) {
        function n(e) {
            return function(e) {
                if (Array.isArray(e)) return r(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || l(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || l(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = l(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);

                    function r() {}
                    var i = 0;
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0,
                s = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done, e
                },
                e: function(e) {
                    s = !0, o = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function l(e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }

        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var c, u, t = $(3),
            i = t.each,
            o = t.filter,
            f = t.hasLength,
            d = t.is,
            p = t.isStr,
            h = t.map,
            g = t.isInstanceOf,
            m = t.toArray,
            v = e.window,
            b = v.document,
            w = (c = [
                [/^<t(head|body|foot)|^<c(ap|olg)/i, y("table")],
                [/^<col/i, y("colgroup")],
                [/^<tr/i, y("tbody")],
                [/^<t[dh]/i, y("tr")]
            ], u = y("div"), function(e) {
                var t = function(e) {
                    var t, n = s(c);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = a(t.value, 2),
                                i = r[0],
                                o = r[1];
                            if (i.test(e)) return o
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return u
                }(e);
                t.innerHTML = e;
                var n = m(t.childNodes);
                return i(n, function(e) {
                    return t.removeChild(e)
                }), t.innerHTML = "", n
            });

        function y(e) {
            return b.createElement(e)
        }

        function x(e, t) {
            var n = 1 < arguments.length && void 0 !== t ? t : b;
            try {
                return m(n.querySelectorAll(e))
            } catch (e) {
                return []
            }
        }

        function k(e) {
            return g(e, v.Document)
        }

        function S(e) {
            return g(e, v.Element) || k(e) || d(t = e) && t.window === t && k(t.document);
            var t
        }

        function _(e, t, n) {
            return e.addEventListener(t, n)
        }

        function C(e) {
            if (g(e, C)) return e;
            var t = p(e) ? ("<" === (e = e.trim())[0] ? w : x)(e) : !S(e) && f(e) ? e : [e];
            return t = o(t, S), Object.assign(Object.create(C.prototype), t, {
                length: t.length
            })
        }
        var z = new Promise(function(e) {
                /^(i|c|loade)/.test(b.readyState) ? e() : _(b, "DOMContentLoaded", function() {
                    return e()
                })
            }),
            A = new Promise(function(e) {
                _(v, "load", function() {
                    return e()
                })
            });
        C.prototype = {
            constructor: C,
            each: function(e) {
                return i(this, e), this
            },
            map: function(e) {
                return h(this, e)
            },
            find: function(t) {
                var e;
                return C((e = []).concat.apply(e, n(this.map(function(e) {
                    return x(t, e)
                }))))
            },
            on: function(t, n) {
                return this.each(function(e) {
                    return _(e, t, n)
                })
            },
            off: function(r, i) {
                return this.each(function(e) {
                    return t = r, n = i, e.removeEventListener(t, n);
                    var t, n
                })
            },
            attr: function(t, n) {
                return void 0 === n ? this.length ? this[0].getAttribute(t) : void 0 : this.each(function(e) {
                    return e.setAttribute(t, n)
                })
            },
            rmAttr: function(t) {
                return this.each(function(e) {
                    return e.removeAttribute(t)
                })
            },
            prop: function(t, n) {
                return void 0 === n ? this.length ? this[0][t] : void 0 : this.each(function(e) {
                    e[t] = n
                })
            },
            rmProp: function(t) {
                return this.each(function(e) {
                    return delete e[t]
                })
            },
            val: function(t) {
                return void 0 === t ? this.length ? this[0].value : void 0 : this.each(function(e) {
                    e.value = t
                })
            },
            html: function(t) {
                return void 0 === t ? this.map(function(e) {
                    return e.innerHTML
                }).join("") : this.each(function(e) {
                    e.innerHTML = t
                })
            },
            text: function(t) {
                return void 0 === t ? this.map(function(e) {
                    return e.textContent
                }).join("") : this.each(function(e) {
                    e.textContent = t
                })
            },
            clr: function() {
                return this.html("")
            },
            rm: function() {
                return this.each(function(e) {
                    var t = e.parentNode;
                    t && t.removeChild(e)
                })
            },
            rpl: function(n) {
                return this.each(function(e) {
                    var t = e.parentNode;
                    t && t.replaceChild(C(n)[0], e)
                })
            },
            app: function(e) {
                return this.each(function(t) {
                    C(e).each(function(e) {
                        return t.appendChild(e)
                    })
                })
            },
            appTo: function(e) {
                return C(e).app(this), this
            },
            pre: function(e) {
                return this.each(function(n) {
                    C(e).each(function(e) {
                        var t = n.firstChild;
                        t ? n.insertBefore(e, t) : n.appendChild(e)
                    })
                })
            },
            preTo: function(e) {
                return C(e).pre(this), this
            },
            cls: function() {
                return arguments.length ? (this.each(function(e) {
                    e.className = ""
                }), this.addCls.apply(this, arguments)) : this.length ? m(this[0].classList) : []
            },
            hasCls: function(t) {
                return m(this).every(function(e) {
                    return e.classList.contains(t)
                })
            },
            addCls: function() {
                for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
                return this.each(function(e) {
                    var t, n = s(i);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = t.value;
                            e.classList.add(r)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                })
            },
            rmCls: function() {
                for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
                return this.each(function(e) {
                    var t, n = s(i);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = t.value;
                            e.classList.remove(r)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                })
            },
            tglCls: function() {
                for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
                return this.each(function(e) {
                    var t, n = s(i);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = t.value;
                            e.classList.contains(r) ? e.classList.remove(r) : e.classList.add(r)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                })
            },
            parent: function() {
                return C(this.map(function(e) {
                    return e.parentNode
                }))
            },
            children: function() {
                var e;
                return C((e = []).concat.apply(e, n(this.map(function(e) {
                    return m(e.children)
                }))))
            },
            hide: function() {
                return this.addCls("hidden")
            },
            show: function() {
                return this.rmCls("hidden")
            },
            isHidden: function() {
                return this.hasCls("hidden")
            },
            css: function(t) {
                return this.each(function(e) {
                    return Object.assign(e.style, t)
                })
            }
        }, T.exports = {
            awaitReady: function() {
                return z
            },
            awaitLoad: function() {
                return A
            },
            dom: C
        }
    }).call(this, $(5))
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
    }
    e.exports = r
}, function(e, t) {
    function d(e) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var p = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
        h = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
        g = /^0x[0-9a-f]+$/i,
        m = /^0/;
    e.exports = {
        naturalCmp: function(e, t) {
            var n = String(e).trim(),
                r = String(t).trim(),
                i = n.replace(p, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                o = r.replace(p, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                a = parseInt(n.match(g), 16) || 1 !== i.length && n.match(h) && Date.parse(n),
                s = parseInt(r.match(g), 16) || a && r.match(h) && Date.parse(r) || null;
            if (s) {
                if (a < s) return -1;
                if (s < a) return 1
            }
            for (var l = 0, c = Math.max(i.length, o.length); l < c; l += 1) {
                var u = !(i[l] || "").match(m) && parseFloat(i[l]) || i[l] || 0,
                    f = !(o[l] || "").match(m) && parseFloat(o[l]) || o[l] || 0;
                if (isNaN(u) !== isNaN(f)) return isNaN(u) ? 1 : -1;
                if (d(u) !== d(f) && (u = String(u), f = String(f)), u < f) return -1;
                if (f < u) return 1
            }
            return 0
        }
    }
}, function(e, t) {
    function n(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\$\^|#\s]/g, "\\$&")
    }
    e.exports = {
        parsePattern: function(e, t) {
            return t ? "re:" === e.substr(0, 3) ? e.substr(3) : e.trim().split(/\s+/).map(function(e) {
                return e.split("").map(n).join(".*?")
            }).join("|") : n(e)
        }
    }
}, function(e, t, n) {
    var r = n(9).request,
        i = e.exports = {
            _update: function(e) {
                return r(e).then(function(e) {
                    return Object.assign(i, e)
                })
            }
        }
}, function(n, e, a) {
    (function(e) {
        var t = a(2),
            r = t.each,
            i = t.dom,
            o = e.window.XMLHttpRequest;
        n.exports = {
            request: function(e) {
                return new Promise(function(t) {
                    var n = new o;
                    n.open("POST", "?", !0), n.onreadystatechange = function() {
                        if (n.readyState === o.DONE) try {
                            t(JSON.parse(n.responseText))
                        } catch (e) {
                            t({
                                err: e,
                                txt: n.responseText
                            })
                        }
                    }, n.setRequestHeader("Content-Type", "application/json;charset=utf-8"), n.send(JSON.stringify(e))
                })
            },
            formRequest: function(e) {
                var n = i('<form method="post" action="?" style="display:none;"/>');
                r(e, function(e, t) {
                    i('<input type="hidden"/>').attr("name", t).attr("value", e).appTo(n)
                }), n.appTo("body"), n[0].submit(), n.rm()
            }
        }
    }).call(this, a(5))
}, function(e, t, n) {
    var r = {
        "./": 11,
        "./index": 11,
        "./index.js": 11,
        "./info": 52,
        "./info.js": 52
    };

    function i(e) {
        var t = o(e);
        return n(t)
    }

    function o(e) {
        if (n.o(r, e)) return r[e];
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
    }
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = o, (e.exports = i).id = 10
}, function(e, t, n) {
    (function(e) {
        n(12), n(25), n(26), n(27), n(28), n(30), n(31), n(32), n(33), n(36), n(38), n(39), n(46), n(47), n(48), n(49), n(50), n(51);
        var t = e.window.document.location.href;
        n(21).setLocation(t, !0)
    }).call(this, n(5))
}, function(e, t, n) {
    function r(e, t) {
        f("#viewmode-settings .mode").rmCls("active"), f("#viewmode-" + e).addCls("active"), f("#viewmode-size").val(a.indexOf(t)), "next" === b.modeToggle && (e = o[(o.indexOf(e) + 1) % o.length]), f("#viewmode-toggle img").attr("src", p.image("view-" + e))
    }

    function i() {
        var e = v.getMode(),
            t = (o.indexOf(e) + 1) % o.length,
            n = o[t];
        v.setMode(n)
    }
    var o, a, s, l, c = n(2),
        u = c.each,
        f = c.dom,
        d = n(13),
        p = n(14),
        h = n(15),
        g = n(16),
        m = n(18),
        v = n(19),
        b = Object.assign({
            modeToggle: !1
        }, h.view),
        w = '<div id="viewmode-[MODE]" class="button mode">\n            <img src="'.concat(p.image("view-[MODE]"), '" alt="viewmode-[MODE]"/>\n        </div>');
    o = v.getModes(), a = v.getSizes(), o.length < 2 && a.length < 2 || (s = f('<div id="viewmode-settings" class="block"><h1 class="l10n-view">View</h1></div>'), 1 < o.length && u(o, function(e) {
        f(w.replace(/\[MODE\]/g, e)).on("click", function() {
            v.setMode(e)
        }).appTo(s)
    }), 1 < a.length && (l = a.length - 1, f('<input id="viewmode-size" type="range" min="0" max="0" value="0">').attr("max", l).on("input", function(e) {
        return v.setSize(a[e.target.valueAsNumber])
    }).on("change", function(e) {
        return v.setSize(a[e.target.valueAsNumber])
    }).appTo(s)), s.appTo(g.$el)), b.modeToggle && 1 < o.length && f('<div id="viewmode-toggle" class="tool">\n            <img alt="viewmode"/>\n        </div>').on("click", i).appTo(m.$toolbar), r(v.getMode(), v.getSize()), d.sub("view.mode.changed", r)
}, function(s, e, l) {
    (function(e) {
        function t(t) {
            for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            i(t) && a[t] && a[t].forEach(function(e) {
                e.apply(t, n)
            })
        }
        var n = l(2),
            i = n.isStr,
            r = n.isFn,
            o = n.dom,
            a = {};
        o(e.window).on("resize", function() {
            return t("resize")
        }), s.exports = {
            sub: function(e, t) {
                i(e) && r(t) && (a[e] || (a[e] = []), a[e].push(t))
            },
            pub: t
        }
    }).call(this, l(5))
}, function(e, t, n) {
    var r = n(2).includes,
        i = n(8),
        o = n(15).publicHref + "images/",
        a = o + "ui/",
        s = o + "themes/",
        l = s + "default/",
        c = ["file", "folder", "folder-page", "folder-parent", "ar", "aud", "bin", "img", "txt", "vid", "x"];
    e.exports = {
        image: function(e) {
            return a + e + ".svg"
        },
        icon: function(e) {
            var t = (e || "").split("-")[0],
                n = i.theme[e] || i.theme[t];
            return n ? s + n : r(c, e) ? l + e + ".svg" : r(c, t) ? l + t + ".svg" : l + "file.svg"
        }
    }
}, function(e, t, n) {
    var r = n(8);
    e.exports = Object.assign({}, r.options, {
        publicHref: r.setup.PUBLIC_HREF,
        rootHref: r.setup.ROOT_HREF
    })
}, function(e, t, n) {
    var r, i, o, a = n(2).dom,
        s = n(14),
        l = n(15),
        c = n(17),
        u = n(18),
        f = Object.assign({
            disableSidebar: !1
        }, l.view),
        d = "sidebarIsVisible";

    function p(e) {
        var t = c.get(d);
        e && (t = !t, c.put(d, t)), t ? (i.addCls("active"), o.attr("src", s.image("back")), r.show()) : (i.rmCls("active"), o.attr("src", s.image("sidebar")), r.hide())
    }
    e.exports = (r = a('<div id="sidebar"></div>').hide(), i = a('<div id="sidebar-toggle" class="tool">\n            <img alt="sidebar"/>\n        </div>'), o = i.find("img"), f.disableSidebar || (r.appTo(u.$mainrow), i.appTo(u.$toolbar).on("click", function() {
        return p(!0)
    }), p()), {
        $el: r
    })
}, function(t, e, n) {
    (function(e) {
        function i() {
            try {
                return JSON.parse(o._h5ai)
            } catch (e) {}
            return {}
        }
        var o = e.window.localStorage;
        t.exports = {
            put: function(e, t) {
                var n, r = i();
                r[e] = t, n = r, o._h5ai = JSON.stringify(n)
            },
            get: function(e) {
                return i()[e]
            }
        }
    }).call(this, n(5))
}, function(e, t, n) {
    var r, i = n(2).dom;
    e.exports = {
        $root: r = i("body").attr("id", "root").clr().app('<div id="topbar">\n            <div id="toolbar"></div>\n            <div id="flowbar"></div>\n            <a id="backlink" href="https://larsjung.de/h5ai/" title="powered by h5ai - https://larsjung.de/h5ai/">\n                <div>powered</div>\n                <div>by h5ai</div>\n            </a>\n        </div>').app('<div id="mainrow">\n            <div id="content"></div>\n        </div>'),
        $topbar: r.find("#topbar"),
        $toolbar: r.find("#toolbar"),
        $flowbar: r.find("#flowbar"),
        $mainrow: r.find("#mainrow"),
        $content: r.find("#content")
    }
}, function(e, t, n) {
    function u(e, t, n) {
        return Math.min(n, Math.max(t, e))
    }

    function r(t, n) {
        var e = C.get(j);
        t = t || e && e.mode, n = n || e && e.size, t = b($.modes, t) ? t : $.modes[0], n = b($.sizes, n) ? n : $.sizes[0], C.put(j, {
            mode: t,
            size: n
        }), m(O, function(e) {
            e === t ? P.addCls("view-" + e) : P.rmCls("view-" + e)
        }), m(M, function(e) {
            e === n ? P.addCls("view-size-" + e) : P.rmCls("view-size-" + e)
        }), x.pub("view.mode.changed", t, n)
    }

    function s(e) {
        var t = e.target._item;
        x.pub("item.mouseenter", t)
    }

    function l(e) {
        var t = e.target._item;
        x.pub("item.mouseleave", t)
    }

    function i(e) {
        var t = y('<li class="item">\n            <a>\n                <span class="icon square"><img/></span>\n                <span class="icon landscape"><img/></span>\n                <span class="label"></span>\n                <span class="date"></span>\n                <span class="size"></span>\n            </a>\n        </li>'),
            n = t.find("a"),
            r = t.find(".icon img"),
            i = t.find(".label"),
            o = t.find(".date"),
            a = t.find(".size");
        return t.addCls(e.isFolder() ? "folder" : "file").on("mouseenter", s).on("mouseleave", l), S.setLink(n, e), i.text(e.label).attr("title", e.label), o.attr("data-time", e.time).text(k.formatDate(e.time)), a.attr("data-bytes", e.size).text(k.formatSize(e.size)), e.icon = _.icon(e.type), e.isFolder() && !e.isManaged && (t.addCls("page"), e.icon = _.icon("folder-page")), e.isCurrentParentFolder() && (e.icon = _.icon("folder-parent"), $.setParentFolderLabels || i.addCls("l10n-parentDirectory"), t.addCls("folder-parent")), r.attr("src", e.icon).attr("alt", e.type), (e.$view = t)[0]._item = e, t
    }

    function o() {
        D.find(".item").length === D.find(".folder-parent").length ? I.show() : I.hide()
    }

    function a(e) {
        var t = v(D.find(".item"), function(e) {
            return e._item
        });
        D.find(".item").rm(), m(e, function(e) {
            return D.app(i(e))
        }), A.$content[0].scrollLeft = 0, A.$content[0].scrollTop = 0, o(), x.pub("view.changed", e, t)
    }

    function c(e, t) {
        m(e, function(e) {
            i(e).hide().appTo(D).show()
        }), m(t, function(e) {
            e.$view.hide().rm()
        }), o(), x.pub("view.changed", e, t)
    }

    function f(e) {
        I.rmCls().addCls("l10n-" + e), o()
    }

    function d(e) {
        e = e || S.getItem();
        var t = [];
        e.parent && !$.hideParentFolder && t.push(e.parent), m(e.content, function(e) {
            e.isFolder() && $.hideFolders || t.push(e)
        }), f("empty"), a(t)
    }

    function p(e, t, n) {
        var r = [];
        m(t, function(e) {
            e.isFolder() && $.hideFolders || r.push(e)
        }), f("empty"), c(r, n)
    }

    function h() {
        var e = P[0].offsetWidth;
        P.rmCls("width-0").rmCls("width-1"), e < 320 ? P.addCls("width-0") : e < 480 && P.addCls("width-1")
    }
    var g = n(2),
        m = g.each,
        v = g.map,
        b = g.includes,
        w = g.intersection,
        y = g.dom,
        x = n(13),
        k = n(20),
        S = n(21),
        _ = n(14),
        C = n(17),
        z = n(15),
        A = n(18),
        T = ["details", "grid", "icons"],
        $ = Object.assign({
            binaryPrefix: !1,
            hideFolders: !1,
            hideParentFolder: !1,
            maxIconSize: 40,
            modes: T,
            setParentFolderLabels: !1,
            sizes: [20, 40, 60, 80, 100, 150, 200, 250, 300, 350, 400]
        }, z.view),
        M = $.sizes.sort(function(e, t) {
            return e - t
        }),
        O = w($.modes, T),
        j = "view",
        P = y('<div id="view">\n            <ul id="items" class="clearfix">\n                <li class="header">\n                    <a class="icon"></a>\n                    <a class="label" href="#"><span class="l10n-name"/></a>\n                    <a class="date" href="#"><span class="l10n-lastModified"/></a>\n                    <a class="size" href="#"><span class="l10n-size"/></a>\n                </li>\n            </ul>\n            <div id="view-hint"></div>\n        </div>'),
        D = P.find("#items"),
        I = P.find("#view-hint");
    (function() {
        var e = v(M, function(e) {
            return n = u(t = e, 20, 80), r = u(t, 40, 160), i = u(t, 80, 1e3), o = Math.round(4 * i / 3), a = "!important;", s = "#view.view-details.view-size-".concat(t), l = "#view.view-grid.view-size-".concat(t), c = "#view.view-icons.view-size-".concat(t), ["".concat(s, " .item .label {line-height: ").concat(n + 14, "px ").concat(a, "}"), "".concat(s, " .item .date {line-height: ").concat(n + 14, "px ").concat(a, "}"), "".concat(s, " .item .size {line-height: ").concat(n + 14, "px ").concat(a, "}"), "".concat(s, " .square {width: ").concat(n, "px ").concat(a, " height: ").concat(n, "px ").concat(a, "}"), "".concat(s, " .square img {width: ").concat(n, "px ").concat(a, " height: ").concat(n, "px ").concat(a, "}"), "".concat(s, " .label {margin-left: ").concat(n + 32, "px ").concat(a, "}"), "".concat(l, " .item .label {line-height: ").concat(r, "px ").concat(a, "}"), "".concat(l, " .square {width: ").concat(r, "px ").concat(a, " height: ").concat(r, "px ").concat(a, "}"), "".concat(l, " .square img {width: ").concat(r, "px ").concat(a, " height: ").concat(r, "px ").concat(a, "}"), "".concat(c, " .item {width: ").concat(o, "px ").concat(a, "}"), "".concat(c, " .landscape {width: ").concat(o, "px ").concat(a, " height: ").concat(i, "px ").concat(a, "}"), "".concat(c, " .landscape img {width: ").concat(i, "px ").concat(a, " height: ").concat(i, "px ").concat(a, "}"), "".concat(c, " .landscape .thumb {width: ").concat(o, "px ").concat(a, "}")].join("\n");
            var t, n, r, i, o, a, s, l, c
        });
        e.push("#view .icon img {max-width: ".concat($.maxIconSize, "px; max-height: ").concat($.maxIconSize, "px;}")), y("<style></style>").text(e.join("\n")).appTo("head")
    })(), r(), P.appTo(A.$content), I.hide(), k.setDefaultMetric($.binaryPrefix), x.sub("location.changed", d), x.sub("location.refreshed", p), x.sub("resize", h), h(), e.exports = {
        $el: P,
        setItems: a,
        changeItems: c,
        setLocation: d,
        setHint: f,
        getModes: function() {
            return O
        },
        getMode: function() {
            return C.get(j).mode
        },
        setMode: function(e) {
            return r(e, null)
        },
        getSizes: function() {
            return M
        },
        getSize: function() {
            return C.get(j).size
        },
        setSize: function(e) {
            return r(null, e)
        }
    }
}, function(e, t, n) {
    var a = n(2).isNum,
        r = {
            t: 1e3,
            k: 1e3,
            u: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        },
        i = {
            t: 1024,
            k: 1024,
            u: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
        },
        o = r,
        s = [
            [/YYYY/, "Y", 4],
            [/YY/, "Y", 2],
            [/Y/, "Y", 0],
            [/MM/, "M", 2],
            [/M/, "M", 0],
            [/DD/, "D", 2],
            [/D/, "D", 0],
            [/HH/, "H", 2],
            [/H/, "H", 0],
            [/mm/, "m", 2],
            [/m/, "m", 0],
            [/ss/, "s", 2],
            [/s/, "s", 0]
        ],
        l = "YYYY-MM-DD HH:mm";
    e.exports = {
        setDefaultMetric: function(e) {
            o = e ? i : r
        },
        formatSize: function(e, t) {
            if (t = t || o, !a(e) || e < 0) return "";
            for (var n = 0, r = t.u.length - 1; e >= t.t && n < r;) e /= t.k, n += 1;
            return (n <= 1 ? Math.round(e) : e.toFixed(1)).toString() + " " + t.u[n]
        },
        setDefaultDateFormat: function(e) {
            l = e
        },
        formatDate: function(e, i) {
            if (!e || !a(e)) return "";
            i = i || l;
            var t = new Date(e),
                o = {
                    Y: t.getFullYear(),
                    M: t.getMonth() + 1,
                    D: t.getDate(),
                    H: t.getHours(),
                    m: t.getMinutes(),
                    s: t.getSeconds()
                };
            return s.forEach(function(e) {
                var t, n, r;
                i = i.replace(e[0], (t = o[e[1]], n = e[2], r = String(t), n && (r = ("000" + r).substr(-n)), r))
            }), i
        }
    }
}, function(_, e, C) {
    (function(e) {
        function a(e) {
            return x.reduce(function(e, t) {
                return e.replace(t[0], t[1])
            }, e)
        }

        function s(e) {
            return e.replace(y, "")
        }

        function l() {
            return C(23).get(k)
        }

        function c() {
            return d({
                action: "get",
                items: {
                    href: k,
                    what: 1
                }
            }).then(function(e) {
                var n, r = C(23),
                    t = r.get(k);
                return e && (n = {}, i(e.items, function(e) {
                    var t = r.get(e);
                    n[t.absHref] = !0
                }), i(t.content, function(e) {
                    n[e.absHref] || r.remove(e.absHref)
                })), t
            })
        }

        function u() {
            var r = l(),
                i = o(r.content);
            h.pub("location.beforeRefresh"), c().then(function() {
                var e = o(r.content),
                    t = f(e, i),
                    n = f(i, e);
                h.pub("location.refreshed", r, t, n)
            })
        }

        function n(e, t) {
            var n, r, i;
            h.pub("location.beforeChange"), n = e, (i = v.createElement("a")).href = n, r = s(i.href), S && (r = encodeURIComponent(r).replace(/%2F/gi, "/")), e = a(r), k !== e && (k = e, w && (t ? w.replaceState({
                absHref: k
            }, "", k) : w.pushState({
                absHref: k
            }, "", k)));
            var o = l();
            o.isLoaded ? (h.pub("location.changed", o), u()) : (g.set("loading..."), c().then(function() {
                o.isLoaded = !0, g.set(), h.pub("location.changed", o)
            }))
        }
        var t, r = C(2),
            i = r.each,
            o = r.values,
            f = r.difference,
            d = C(9).request,
            p = C(15),
            h = C(13),
            g = C(22),
            m = e.window,
            v = m.document,
            b = Object.assign({
                fastBrowsing: !0,
                unmanagedInNewWindow: !0
            }, p.view),
            w = b.fastBrowsing ? m.history : null,
            y = /^.*:\/\/[^\/]*|[^\/]*$/g,
            x = [
                [/\/+/g, "/"],
                [/ /g, "%20"],
                [/!/g, "%21"],
                [/#/g, "%23"],
                [/\$/g, "%24"],
                [/&/g, "%26"],
                [/'/g, "%27"],
                [/\(/g, "%28"],
                [/\)/g, "%29"],
                [/\*/g, "%2A"],
                [/\+/g, "%2B"],
                [/\,/g, "%2C"],
                [/:/g, "%3A"],
                [/;/g, "%3B"],
                [/\=/g, "%3D"],
                [/\?/g, "%3F"],
                [/@/g, "%40"],
                [/\[/g, "%5B"],
                [/\]/g, "%5D"]
            ],
            k = null,
            S = ((t = v.createElement("a")).href = "/a b") === s(t.href);
        m.onpopstate = w ? function(e) {
            e.state && e.state.absHref && n(e.state.absHref, !0)
        } : null, _.exports = {
            forceEncoding: a,
            getDomain: function() {
                return v.domain
            },
            getAbsHref: function() {
                return k
            },
            getItem: l,
            setLocation: n,
            refresh: u,
            setLink: function(e, t) {
                e.attr("href", t.absHref), w && t.isFolder() && t.isManaged && e.on("click", function(e) {
                    return n(t.absHref), e.preventDefault(), !1
                }), b.unmanagedInNewWindow && !t.isManaged && e.attr("target", "_blank")
            }
        }
    }).call(this, C(5))
}, function(e, t, n) {
    var r, i = n(2).dom,
        o = n(18);
    e.exports = (r = i('<div id="notification"></div>').hide().appTo(o.$root), {
        set: function(e) {
            e ? r.html(e).show() : r.hide()
        }
    })
}, function(e, t, n) {
    function i(e, t) {
        return u(e) && e.startsWith(t)
    }

    function o(e) {
        if (u(e)) e = {
            href: e
        };
        else if (!e || !u(e.href)) return null;
        var t = p.forceEncoding(e.href);
        if (!i(t, h.rootHref)) return null;
        var n = b[t] || w(t);
        return f(e.time) && (n.time = e.time), f(e.size) && (n.size = e.size), e.managed && (n.isManaged = !0), e.fetched && (n.isContentFetched = !0), n
    }
    var r = n(2),
        a = r.keys,
        s = r.each,
        l = r.filter,
        c = r.sortBy,
        u = r.isStr,
        f = r.isNum,
        d = n(9),
        p = n(21),
        h = n(15),
        g = n(24),
        m = /\/$/,
        v = /^(.*\/)([^\/]+\/?)$/,
        b = {},
        w = function e(t) {
            var n = function(e) {
                    if ("/" === e) return {
                        parent: null,
                        name: "/"
                    };
                    var t = v.exec(e);
                    if (!t) return null;
                    var n = {
                        parent: t[1],
                        name: t[2]
                    };
                    return n.parent && !i(n.parent, h.rootHref) && (n.parent = null), n
                }(t),
                r = Object.assign(Object.create(e.prototype), {
                    absHref: t,
                    type: g.getType(t),
                    label: function(e) {
                        e = e.replace(m, "");
                        try {
                            e = decodeURIComponent(e)
                        } catch (e) {}
                        return e
                    }("/" === t ? p.getDomain() : n.name),
                    time: null,
                    size: null,
                    parent: null,
                    isManaged: null,
                    content: {}
                });
            return b[t] = r, n.parent && (r.parent = o(n.parent), r.parent.content[r.absHref] = r, 1 < a(r.parent.content).length && (r.parent.isContentFetched = !0)), r
        };
    w.prototype = {
        constructor: w,
        isFolder: function() {
            return m.test(this.absHref)
        },
        isCurrentFolder: function() {
            return this.absHref === p.getAbsHref()
        },
        isInCurrentFolder: function() {
            return !!this.parent && this.parent.isCurrentFolder()
        },
        isCurrentParentFolder: function() {
            var e = o(p.getAbsHref());
            return !!e && this === e.parent
        },
        isDomain: function() {
            return "/" === this.absHref
        },
        isRoot: function() {
            return this.absHref === h.rootHref
        },
        isEmpty: function() {
            return 0 === a(this.content).length
        },
        fetchContent: function() {
            return e = this.absHref, new Promise(function(t) {
                var n = o(e);
                n.isContentFetched ? t(n) : d.request({
                    action: "get",
                    items: {
                        href: n.absHref,
                        what: 1
                    }
                }).then(function(e) {
                    e.items && s(e.items, function(e) {
                        o(e)
                    }), t(n)
                })
            });
            var e
        },
        getCrumb: function() {
            for (var e = this, t = [e]; e.parent;) e = e.parent, t.unshift(e);
            return t
        },
        getSubfolders: function() {
            return c(l(this.content, function(e) {
                return e.isFolder()
            }), function(e) {
                return e.label.toLowerCase()
            })
        },
        getStats: function() {
            var t = 0,
                n = 0;
            s(this.content, function(e) {
                e.isFolder() ? t += 1 : n += 1
            });
            for (var e = 0, r = this; r.parent;) e += 1, r = r.parent;
            return {
                folders: t,
                files: n,
                depth: e
            }
        }
    }, e.exports = {
        get: o,
        remove: function t(e) {
            e = p.forceEncoding(e);
            var n = b[e];
            n && (delete b[e], n.parent && delete n.parent.content[n.absHref], s(n.content, function(e) {
                t(e.absHref)
            }))
        }
    }
}, function(e, t, n) {
    var r, i = n(2),
        o = i.each,
        a = i.map,
        s = n(8),
        l = /\/$/,
        c = {};
    r = Object.assign({}, s.types), o(r, function(e, t) {
        var n = "^(" + a(e, function(e) {
            return "(" + e.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$]/g, "\\$&").replace(/\*/g, ".*") + ")"
        }).join("|") + ")$";
        c[t] = new RegExp(n, "i")
    }), e.exports = {
        getType: function(e) {
            if (l.test(e)) return "folder";
            var n, t = e.lastIndexOf("/"),
                r = 0 <= t ? e.substr(t + 1) : e;
            return o(c, function(e, t) {
                c[t].test(r) && (n = t)
            }), n || "file"
        }
    }
}, function(e, t, u) {
    (function(e) {
        function t() {
            o.refresh()
        }

        function n() {
            s.clearTimeout(c)
        }

        function r() {
            s.clearTimeout(c), c = s.setTimeout(t, l.interval)
        }
        var i = u(13),
            o = u(21),
            a = u(15),
            s = e.window,
            l = Object.assign({
                enabled: !1,
                interval: 5e3
            }, a.autorefresh),
            c = null;
        l.enabled && (l.interval = Math.max(1e3, l.interval), i.sub("location.beforeChange", n), i.sub("location.beforeRefresh", n), i.sub("location.changed", r), i.sub("location.refreshed", r))
    }).call(this, u(5))
}, function(e, t, n) {
    function u(n) {
        function e(e) {
            e.stopPropagation(), e.preventDefault();
            var t = function(e) {
                for (; !e._cmId && e.parentNode;) e = e.parentNode;
                return e._cmId
            }(e.target);
            e.target !== r[0] && void 0 === t || (r.rm(), n(t))
        }
        var r = d('<div id="cm-overlay"></div>');
        return r.on("contextmenu", e).on("click", e)
    }

    function r(e, t, n, r) {
        var i, o, a, s, l = u(r),
            c = (i = n, a = d('<div class="cm-panel"><ul></ul></div>'), s = a.find("ul"), f(i, function(e) {
                "-" === e.type ? d('<li class="cm-sep"></li>').appTo(s) : "l" === e.type ? d('<li class="cm-label"><span class="cm-text"></span></li>').appTo(s).find(".cm-text").text(e.text) : "e" === e.type && ((o = d('<li class="cm-entry"><span class="cm-icon"><img/></span><span class="cm-text"></span></li>').appTo(s))[0]._cmId = e.id, o.find(".cm-text").text(e.text), e.icon ? o.find(".cm-icon img").attr("src", p.icon(e.icon)) : o.find(".cm-icon").addCls("no-icon"))
            }), a);
        l.hide().app(c).appTo("body"),
            function(e, t, n, r) {
                t.css({
                    left: 0,
                    top: 0,
                    opacity: 0
                }), e.show();
                var i = e[0].getBoundingClientRect(),
                    o = t[0].getBoundingClientRect(),
                    a = i.left,
                    s = i.top,
                    l = i.width,
                    c = i.height,
                    u = o.width,
                    f = o.height,
                    d = n,
                    p = r;
                l - 8 < u && (d = 4, u = l - 8), c - 8 < f && (p = 4, f = c - 8), d < a + 4 && (d = a + 4), a + l - 4 < d + u && (d = a + l - 4 - u), p < s + 4 && (p = s + 4), s + c - 4 < p + f && (p = s + c - 4 - f), t.css({
                    left: d + "px",
                    top: p + "px",
                    width: u + "px",
                    height: f + "px",
                    opacity: 1
                })
            }(l, c, e, t)
    }
    var i, o = n(2),
        f = o.each,
        d = o.dom,
        p = n(14),
        a = n(15),
        s = Object.assign({
            enabled: !1
        }, a.contextmenu);
    s.enabled && (i = [{
        type: "e",
        id: "e1",
        text: "testing context menus"
    }, {
        type: "e",
        id: "e2",
        text: "another entry"
    }, {
        type: "e",
        id: "e3",
        text: "one with icon",
        icon: "folder"
    }, {
        type: "-"
    }, {
        type: "e",
        id: "e4",
        text: "one with icon",
        icon: "x"
    }, {
        type: "e",
        id: "e5",
        text: "one with icon",
        icon: "img"
    }], d("#view").on("contextmenu", function(e) {
        e.preventDefault(), r(e.pageX, e.pageY, i)
    }))
}, function(e, t, n) {
    function r(e) {
        var t = e._$crumb,
            r = a("#crumbbar");
        t && t.parent()[0] === r[0] ? (r.children().rmCls("active"), t.addCls("active")) : (r.clr(), o(e.getCrumb(), function(e) {
            var t, n;
            r.app((t = e, n = a(p), l.setLink(n, t), n.find(".label").text(t.label), t.isCurrentFolder() && n.addCls("active"), t.isManaged || n.app(a(h)), (t._$crumb = n)[0]._item = t, n))
        }))
    }
    var i = n(2),
        o = i.each,
        a = i.dom,
        s = n(13),
        l = n(21),
        c = n(14),
        u = n(15),
        f = n(18),
        d = Object.assign({
            enabled: !1
        }, u.crumb),
        p = '<a class="crumb">\n            <img class="sep" src="'.concat(c.image("crumb"), '" alt=">"/>\n            <span class="label"></span>\n        </a>'),
        h = '<img class="hint" src="'.concat(c.icon("folder-page"), '" alt="has index page"/>');
    d.enabled && (a('<div id="crumbbar"></div>').appTo(f.$flowbar), s.sub("location.changed", r))
}, function(e, t, n) {
    function r(e) {
        o.request({
            action: "get",
            custom: e.absHref
        }).then(function(e) {
            var o = e && e.custom;
            s(["header", "footer"], function(e) {
                return t = o, i = l("#content-".concat(n = e)), void(t && t[n].content ? (r = t[n].content, "md" === t[n].type && (r = a(r)), i.html(r).show()) : i.hide());
                var t, n, r, i
            })
        })
    }
    var a = n(29),
        i = n(2),
        s = i.each,
        l = i.dom,
        o = n(9),
        c = n(13),
        u = n(15),
        f = Object.assign({
            enabled: !1
        }, u.custom);
    f.enabled && (l('<div id="content-header"></div>').hide().preTo("#content"), l('<div id="content-footer"></div>').hide().appTo("#content"), c.sub("location.changed", r))
}, function(e, t, n) {
    var r, i, o;

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    o = function() {
        "use strict";

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function p(e, t) {
            var n;
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator]) return (n = e[Symbol.iterator]()).next.bind(n);
            if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0;
                return function() {
                    return r >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[r++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function n(e) {
            return c[e]
        }
        var e, t = (function(t) {
                function e() {
                    return {
                        baseUrl: null,
                        breaks: !1,
                        gfm: !0,
                        headerIds: !0,
                        headerPrefix: "",
                        highlight: null,
                        langPrefix: "language-",
                        mangle: !0,
                        pedantic: !1,
                        renderer: null,
                        sanitize: !1,
                        sanitizer: null,
                        silent: !1,
                        smartLists: !1,
                        smartypants: !1,
                        tokenizer: null,
                        walkTokens: null,
                        xhtml: !1
                    }
                }
                t.exports = {
                    defaults: e(),
                    getDefaults: e,
                    changeDefaults: function(e) {
                        t.exports.defaults = e
                    }
                }
            }(e = {
                exports: {}
            }), e.exports),
            r = (t.defaults, t.getDefaults, t.changeDefaults, /[&<>"']/),
            a = /[&<>"']/g,
            s = /[<>"']|&(?!#?\w+;)/,
            l = /[<>"']|&(?!#?\w+;)/g,
            c = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };
        var u = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

        function f(e) {
            return e.replace(u, function(e, t) {
                return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
            })
        }
        var d = /(^|[^\[])\^/g;
        var h = /[^\w:]/g,
            g = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        var m = {},
            v = /^[^:]+:\/*[^/]*$/,
            b = /^([^:]+:)[\s\S]*$/,
            w = /^([^:]+:\/*[^/]*)[\s\S]*$/;

        function y(e, t) {
            m[" " + e] || (v.test(e) ? m[" " + e] = e + "/" : m[" " + e] = x(e, "/", !0));
            var n = -1 === (e = m[" " + e]).indexOf(":");
            return "//" === t.substring(0, 2) ? n ? t : e.replace(b, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(w, "$1") + t : e + t
        }

        function x(e, t, n) {
            var r = e.length;
            if (0 === r) return "";
            for (var i = 0; i < r;) {
                var o = e.charAt(r - i - 1);
                if (o !== t || n) {
                    if (o === t || !n) break;
                    i++
                } else i++
            }
            return e.substr(0, r - i)
        }
        var k = function(e, t) {
                if (t) {
                    if (r.test(e)) return e.replace(a, n)
                } else if (s.test(e)) return e.replace(l, n);
                return e
            },
            S = f,
            _ = function(n, e) {
                n = n.source || n, e = e || "";
                var r = {
                    replace: function(e, t) {
                        return t = (t = t.source || t).replace(d, "$1"), n = n.replace(e, t), r
                    },
                    getRegex: function() {
                        return new RegExp(n, e)
                    }
                };
                return r
            },
            C = function(e, t, n) {
                if (e) {
                    var r;
                    try {
                        r = decodeURIComponent(f(n)).replace(h, "").toLowerCase()
                    } catch (e) {
                        return null
                    }
                    if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
                }
                t && !g.test(n) && (n = y(t, n));
                try {
                    n = encodeURI(n).replace(/%25/g, "%")
                } catch (e) {
                    return null
                }
                return n
            },
            z = {
                exec: function() {}
            },
            A = function(e) {
                for (var t, n, r = 1; r < arguments.length; r++)
                    for (n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            },
            T = function(e, t) {
                var n = e.replace(/\|/g, function(e, t, n) {
                        for (var r = !1, i = t; 0 <= --i && "\\" === n[i];) r = !r;
                        return r ? "|" : " |"
                    }).split(/ \|/),
                    r = 0;
                if (n.length > t) n.splice(t);
                else
                    for (; n.length < t;) n.push("");
                for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                return n
            },
            $ = function(e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                for (var n = e.length, r = 0, i = 0; i < n; i++)
                    if ("\\" === e[i]) i++;
                    else if (e[i] === t[0]) r++;
                else if (e[i] === t[1] && --r < 0) return i;
                return -1
            },
            M = function(e) {
                e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
            },
            O = function(e, t) {
                if (t < 1) return "";
                for (var n = ""; 1 < t;) 1 & t && (n += e), t >>= 1, e += e;
                return n + e
            },
            j = t.defaults,
            P = x,
            D = T,
            I = k,
            L = $;

        function H(e, t, n) {
            var r = t.href,
                i = t.title ? I(t.title) : null,
                o = e[1].replace(/\\([\[\]])/g, "$1");
            return "!" !== e[0].charAt(0) ? {
                type: "link",
                raw: n,
                href: r,
                title: i,
                text: o
            } : {
                type: "image",
                raw: n,
                href: r,
                title: i,
                text: I(o)
            }
        }
        var B = function() {
                function e(e) {
                    this.options = e || j
                }
                var t = e.prototype;
                return t.space = function(e) {
                    var t = this.rules.block.newline.exec(e);
                    if (t) return 1 < t[0].length ? {
                        type: "space",
                        raw: t[0]
                    } : {
                        raw: "\n"
                    }
                }, t.code = function(e, t) {
                    var n = this.rules.block.code.exec(e);
                    if (n) {
                        var r = t[t.length - 1];
                        if (r && "paragraph" === r.type) return {
                            raw: n[0],
                            text: n[0].trimRight()
                        };
                        var i = n[0].replace(/^ {4}/gm, "");
                        return {
                            type: "code",
                            raw: n[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? i : P(i, "\n")
                        }
                    }
                }, t.fences = function(e) {
                    var t = this.rules.block.fences.exec(e);
                    if (t) {
                        var n = t[0],
                            r = function(e, t) {
                                var n = e.match(/^(\s+)(?:```)/);
                                if (null === n) return t;
                                var r = n[1];
                                return t.split("\n").map(function(e) {
                                    var t = e.match(/^\s+/);
                                    return null !== t && t[0].length >= r.length ? e.slice(r.length) : e
                                }).join("\n")
                            }(n, t[3] || "");
                        return {
                            type: "code",
                            raw: n,
                            lang: t[2] ? t[2].trim() : t[2],
                            text: r
                        }
                    }
                }, t.heading = function(e) {
                    var t = this.rules.block.heading.exec(e);
                    if (t) {
                        var n, r = t[2].trim();
                        return /#$/.test(r) && (n = P(r, "#"), !this.options.pedantic && n && !/ $/.test(n) || (r = n.trim())), {
                            type: "heading",
                            raw: t[0],
                            depth: t[1].length,
                            text: r
                        }
                    }
                }, t.nptable = function(e) {
                    var t = this.rules.block.nptable.exec(e);
                    if (t) {
                        var n = {
                            type: "table",
                            header: D(t[1].replace(/^ *| *\| *$/g, "")),
                            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
                            raw: t[0]
                        };
                        if (n.header.length === n.align.length) {
                            for (var r = n.align.length, i = 0; i < r; i++) /^ *-+: *$/.test(n.align[i]) ? n.align[i] = "right" : /^ *:-+: *$/.test(n.align[i]) ? n.align[i] = "center" : /^ *:-+ *$/.test(n.align[i]) ? n.align[i] = "left" : n.align[i] = null;
                            for (r = n.cells.length, i = 0; i < r; i++) n.cells[i] = D(n.cells[i], n.header.length);
                            return n
                        }
                    }
                }, t.hr = function(e) {
                    var t = this.rules.block.hr.exec(e);
                    if (t) return {
                        type: "hr",
                        raw: t[0]
                    }
                }, t.blockquote = function(e) {
                    var t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        var n = t[0].replace(/^ *> ?/gm, "");
                        return {
                            type: "blockquote",
                            raw: t[0],
                            text: n
                        }
                    }
                }, t.list = function(e) {
                    var t = this.rules.block.list.exec(e);
                    if (t) {
                        for (var n, r, i, o, a, s, l, c = t[0], u = t[2], f = 1 < u.length, d = {
                                type: "list",
                                raw: c,
                                ordered: f,
                                start: f ? +u.slice(0, -1) : "",
                                loose: !1,
                                items: []
                            }, p = t[0].match(this.rules.block.item), h = !1, g = p.length, m = this.rules.block.listItemStart.exec(p[0]), v = 0; v < g; v++) {
                            if (c = n = p[v], v !== g - 1) {
                                if ((i = this.rules.block.listItemStart.exec(p[v + 1]))[1].length > m[0].length || 3 < i[1].length) {
                                    p.splice(v, 2, p[v] + "\n" + p[v + 1]), v--, g--;
                                    continue
                                }(!this.options.pedantic || this.options.smartLists ? i[2][i[2].length - 1] !== u[u.length - 1] : f == (1 === i[2].length)) && (o = p.slice(v + 1).join("\n"), d.raw = d.raw.substring(0, d.raw.length - o.length), v = g - 1), m = i
                            }
                            r = n.length, ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (r -= n.length, n = this.options.pedantic ? n.replace(/^ {1,4}/gm, "") : n.replace(new RegExp("^ {1," + r + "}", "gm"), "")), a = h || /\n\n(?!\s*$)/.test(n), v !== g - 1 && (h = "\n" === n.charAt(n.length - 1), a = a || h), a && (d.loose = !0), this.options.gfm && (l = void 0, (s = /^\[[ xX]\] /.test(n)) && (l = " " !== n[1], n = n.replace(/^\[[ xX]\] +/, ""))), d.items.push({
                                type: "list_item",
                                raw: c,
                                task: s,
                                checked: l,
                                loose: a,
                                text: n
                            })
                        }
                        return d
                    }
                }, t.html = function(e) {
                    var t = this.rules.block.html.exec(e);
                    if (t) return {
                        type: this.options.sanitize ? "paragraph" : "html",
                        raw: t[0],
                        pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : I(t[0]) : t[0]
                    }
                }, t.def = function(e) {
                    var t = this.rules.block.def.exec(e);
                    if (t) return t[3] && (t[3] = t[3].substring(1, t[3].length - 1)), {
                        tag: t[1].toLowerCase().replace(/\s+/g, " "),
                        raw: t[0],
                        href: t[2],
                        title: t[3]
                    }
                }, t.table = function(e) {
                    var t = this.rules.block.table.exec(e);
                    if (t) {
                        var n = {
                            type: "table",
                            header: D(t[1].replace(/^ *| *\| *$/g, "")),
                            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : []
                        };
                        if (n.header.length === n.align.length) {
                            n.raw = t[0];
                            for (var r = n.align.length, i = 0; i < r; i++) /^ *-+: *$/.test(n.align[i]) ? n.align[i] = "right" : /^ *:-+: *$/.test(n.align[i]) ? n.align[i] = "center" : /^ *:-+ *$/.test(n.align[i]) ? n.align[i] = "left" : n.align[i] = null;
                            for (r = n.cells.length, i = 0; i < r; i++) n.cells[i] = D(n.cells[i].replace(/^ *\| *| *\| *$/g, ""), n.header.length);
                            return n
                        }
                    }
                }, t.lheading = function(e) {
                    var t = this.rules.block.lheading.exec(e);
                    if (t) return {
                        type: "heading",
                        raw: t[0],
                        depth: "=" === t[2].charAt(0) ? 1 : 2,
                        text: t[1]
                    }
                }, t.paragraph = function(e) {
                    var t = this.rules.block.paragraph.exec(e);
                    if (t) return {
                        type: "paragraph",
                        raw: t[0],
                        text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1]
                    }
                }, t.text = function(e, t) {
                    var n = this.rules.block.text.exec(e);
                    if (n) {
                        var r = t[t.length - 1];
                        return r && "text" === r.type ? {
                            raw: n[0],
                            text: n[0]
                        } : {
                            type: "text",
                            raw: n[0],
                            text: n[0]
                        }
                    }
                }, t.escape = function(e) {
                    var t = this.rules.inline.escape.exec(e);
                    if (t) return {
                        type: "escape",
                        raw: t[0],
                        text: I(t[1])
                    }
                }, t.tag = function(e, t, n) {
                    var r = this.rules.inline.tag.exec(e);
                    if (r) return !t && /^<a /i.test(r[0]) ? t = !0 : t && /^<\/a>/i.test(r[0]) && (t = !1), !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (n = !1), {
                        type: this.options.sanitize ? "text" : "html",
                        raw: r[0],
                        inLink: t,
                        inRawBlock: n,
                        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : I(r[0]) : r[0]
                    }
                }, t.link = function(e) {
                    var t = this.rules.inline.link.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        if (!this.options.pedantic && /^</.test(n)) {
                            if (!/>$/.test(n)) return;
                            var r = P(n.slice(0, -1), "\\");
                            if ((n.length - r.length) % 2 == 0) return
                        } else {
                            var i, o = L(t[2], "()"); - 1 < o && (i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + o, t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, i).trim(), t[3] = "")
                        }
                        var a, s = t[2],
                            l = "";
                        return this.options.pedantic ? (a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s), a && (s = a[1], l = a[3])) : l = t[3] ? t[3].slice(1, -1) : "", s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), H(t, {
                            href: s ? s.replace(this.rules.inline._escapes, "$1") : s,
                            title: l ? l.replace(this.rules.inline._escapes, "$1") : l
                        }, t[0])
                    }
                }, t.reflink = function(e, t) {
                    var n;
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        var r = (n[2] || n[1]).replace(/\s+/g, " ");
                        if ((r = t[r.toLowerCase()]) && r.href) return H(n, r, n[0]);
                        var i = n[0].charAt(0);
                        return {
                            type: "text",
                            raw: i,
                            text: i
                        }
                    }
                }, t.strong = function(e, t, n) {
                    void 0 === n && (n = "");
                    var r = this.rules.inline.strong.start.exec(e);
                    if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
                        t = t.slice(-1 * e.length);
                        var i, o = "**" === r[0] ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
                        for (o.lastIndex = 0; null != (r = o.exec(t));)
                            if (i = this.rules.inline.strong.middle.exec(t.slice(0, r.index + 3))) return {
                                type: "strong",
                                raw: e.slice(0, i[0].length),
                                text: e.slice(2, i[0].length - 2)
                            }
                    }
                }, t.em = function(e, t, n) {
                    void 0 === n && (n = "");
                    var r = this.rules.inline.em.start.exec(e);
                    if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
                        t = t.slice(-1 * e.length);
                        var i, o = "*" === r[0] ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
                        for (o.lastIndex = 0; null != (r = o.exec(t));)
                            if (i = this.rules.inline.em.middle.exec(t.slice(0, r.index + 2))) return {
                                type: "em",
                                raw: e.slice(0, i[0].length),
                                text: e.slice(1, i[0].length - 1)
                            }
                    }
                }, t.codespan = function(e) {
                    var t = this.rules.inline.code.exec(e);
                    if (t) {
                        var n = t[2].replace(/\n/g, " "),
                            r = /[^ ]/.test(n),
                            i = /^ /.test(n) && / $/.test(n);
                        return r && i && (n = n.substring(1, n.length - 1)), n = I(n, !0), {
                            type: "codespan",
                            raw: t[0],
                            text: n
                        }
                    }
                }, t.br = function(e) {
                    var t = this.rules.inline.br.exec(e);
                    if (t) return {
                        type: "br",
                        raw: t[0]
                    }
                }, t.del = function(e) {
                    var t = this.rules.inline.del.exec(e);
                    if (t) return {
                        type: "del",
                        raw: t[0],
                        text: t[2]
                    }
                }, t.autolink = function(e, t) {
                    var n = this.rules.inline.autolink.exec(e);
                    if (n) {
                        var r, i = "@" === n[2] ? "mailto:" + (r = I(this.options.mangle ? t(n[1]) : n[1])) : r = I(n[1]);
                        return {
                            type: "link",
                            raw: n[0],
                            text: r,
                            href: i,
                            tokens: [{
                                type: "text",
                                raw: r,
                                text: r
                            }]
                        }
                    }
                }, t.url = function(e, t) {
                    var n, r, i, o;
                    if (n = this.rules.inline.url.exec(e)) {
                        if ("@" === n[2]) i = "mailto:" + (r = I(this.options.mangle ? t(n[0]) : n[0]));
                        else {
                            for (; o = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0], o !== n[0];);
                            r = I(n[0]), i = "www." === n[1] ? "http://" + r : r
                        }
                        return {
                            type: "link",
                            raw: n[0],
                            text: r,
                            href: i,
                            tokens: [{
                                type: "text",
                                raw: r,
                                text: r
                            }]
                        }
                    }
                }, t.inlineText = function(e, t, n) {
                    var r = this.rules.inline.text.exec(e);
                    if (r) {
                        var i = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : I(r[0]) : r[0] : I(this.options.smartypants ? n(r[0]) : r[0]);
                        return {
                            type: "text",
                            raw: r[0],
                            text: i
                        }
                    }
                }, e
            }(),
            R = z,
            E = _,
            q = A,
            F = {
                newline: /^\n+/,
                code: /^( {4}[^\n]+\n*)+/,
                fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
                html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                nptable: R,
                table: R,
                lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
                text: /^[^\n]+/,
                _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
                _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
            };
        F.def = E(F.def).replace("label", F._label).replace("title", F._title).getRegex(), F.bullet = /(?:[*+-]|\d{1,9}[.)])/, F.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, F.item = E(F.item, "gm").replace(/bull/g, F.bullet).getRegex(), F.listItemStart = E(/^( *)(bull)/).replace("bull", F.bullet).getRegex(), F.list = E(F.list).replace(/bull/g, F.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + F.def.source + ")").getRegex(), F._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", F._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, F.html = E(F.html, "i").replace("comment", F._comment).replace("tag", F._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), F.paragraph = E(F._paragraph).replace("hr", F.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", F._tag).getRegex(), F.blockquote = E(F.blockquote).replace("paragraph", F.paragraph).getRegex(), F.normal = q({}, F), F.gfm = q({}, F.normal, {
            nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
            table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
        }), F.gfm.nptable = E(F.gfm.nptable).replace("hr", F.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", F._tag).getRegex(), F.gfm.table = E(F.gfm.table).replace("hr", F.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", F._tag).getRegex(), F.pedantic = q({}, F.normal, {
            html: E("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", F._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: R,
            paragraph: E(F.normal._paragraph).replace("hr", F.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", F.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
        });
        var N = {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: R,
            tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
            nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
            reflinkSearch: "reflink|nolink(?!\\()",
            strong: {
                start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
                middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
                endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
                endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/
            },
            em: {
                start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
                middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
                endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
                endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/
            },
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            br: /^( {2,}|\\)\n(?!\s*$)/,
            del: R,
            text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
            punctuation: /^([\s*punctuation])/,
            _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"
        };
        N.punctuation = E(N.punctuation).replace(/punctuation/g, N._punctuation).getRegex(), N._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>", N._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*", N._comment = E(F._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), N.em.start = E(N.em.start).replace(/punctuation/g, N._punctuation).getRegex(), N.em.middle = E(N.em.middle).replace(/punctuation/g, N._punctuation).replace(/overlapSkip/g, N._overlapSkip).getRegex(), N.em.endAst = E(N.em.endAst, "g").replace(/punctuation/g, N._punctuation).getRegex(), N.em.endUnd = E(N.em.endUnd, "g").replace(/punctuation/g, N._punctuation).getRegex(), N.strong.start = E(N.strong.start).replace(/punctuation/g, N._punctuation).getRegex(), N.strong.middle = E(N.strong.middle).replace(/punctuation/g, N._punctuation).replace(/overlapSkip/g, N._overlapSkip).getRegex(), N.strong.endAst = E(N.strong.endAst, "g").replace(/punctuation/g, N._punctuation).getRegex(), N.strong.endUnd = E(N.strong.endUnd, "g").replace(/punctuation/g, N._punctuation).getRegex(), N.blockSkip = E(N._blockSkip, "g").getRegex(), N.overlapSkip = E(N._overlapSkip, "g").getRegex(), N._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, N._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, N._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, N.autolink = E(N.autolink).replace("scheme", N._scheme).replace("email", N._email).getRegex(), N._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, N.tag = E(N.tag).replace("comment", N._comment).replace("attribute", N._attribute).getRegex(), N._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, N._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, N._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, N.link = E(N.link).replace("label", N._label).replace("href", N._href).replace("title", N._title).getRegex(), N.reflink = E(N.reflink).replace("label", N._label).getRegex(), N.reflinkSearch = E(N.reflinkSearch, "g").replace("reflink", N.reflink).replace("nolink", N.nolink).getRegex(), N.normal = q({}, N), N.pedantic = q({}, N.normal, {
            strong: {
                start: /^__|\*\*/,
                middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                endAst: /\*\*(?!\*)/g,
                endUnd: /__(?!_)/g
            },
            em: {
                start: /^_|\*/,
                middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                endAst: /\*(?!\*)/g,
                endUnd: /_(?!_)/g
            },
            link: E(/^!?\[(label)\]\((.*?)\)/).replace("label", N._label).getRegex(),
            reflink: E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", N._label).getRegex()
        }), N.gfm = q({}, N.normal, {
            escape: E(N.escape).replace("])", "~|])").getRegex(),
            _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
            text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
        }), N.gfm.url = E(N.gfm.url, "i").replace("email", N.gfm._extended_email).getRegex(), N.breaks = q({}, N.gfm, {
            br: E(N.br).replace("{2,}", "*").getRegex(),
            text: E(N.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
        });
        var U = {
                block: F,
                inline: N
            },
            Y = t.defaults,
            Z = U.block,
            V = U.inline,
            W = O;

        function X(e) {
            return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
        }

        function G(e) {
            for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), .5 < Math.random() && (t = "x" + t.toString(16)), n += "&#" + t + ";";
            return n
        }
        var J = function() {
                function n(e) {
                    this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Y, this.options.tokenizer = this.options.tokenizer || new B, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
                    var t = {
                        block: Z.normal,
                        inline: V.normal
                    };
                    this.options.pedantic ? (t.block = Z.pedantic, t.inline = V.pedantic) : this.options.gfm && (t.block = Z.gfm, this.options.breaks ? t.inline = V.breaks : t.inline = V.gfm), this.tokenizer.rules = t
                }
                n.lex = function(e, t) {
                    return new n(t).lex(e)
                }, n.lexInline = function(e, t) {
                    return new n(t).inlineTokens(e)
                };
                var e, t, r, i = n.prototype;
                return i.lex = function(e) {
                    return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), this.tokens
                }, i.blockTokens = function(e, t, n) {
                    var r, i, o, a;
                    for (void 0 === t && (t = []), void 0 === n && (n = !0), e = e.replace(/^ +$/gm, ""); e;)
                        if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), r.type && t.push(r);
                        else if (r = this.tokenizer.code(e, t)) e = e.substring(r.raw.length), r.type ? t.push(r) : ((a = t[t.length - 1]).raw += "\n" + r.raw, a.text += "\n" + r.text);
                    else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), t.push(r);
                    else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), t.push(r);
                    else if (r = this.tokenizer.nptable(e)) e = e.substring(r.raw.length), t.push(r);
                    else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), t.push(r);
                    else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), r.tokens = this.blockTokens(r.text, [], n), t.push(r);
                    else if (r = this.tokenizer.list(e)) {
                        for (e = e.substring(r.raw.length), o = r.items.length, i = 0; i < o; i++) r.items[i].tokens = this.blockTokens(r.items[i].text, [], !1);
                        t.push(r)
                    } else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), t.push(r);
                    else if (n && (r = this.tokenizer.def(e))) e = e.substring(r.raw.length), this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                        href: r.href,
                        title: r.title
                    });
                    else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), t.push(r);
                    else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), t.push(r);
                    else if (n && (r = this.tokenizer.paragraph(e))) e = e.substring(r.raw.length), t.push(r);
                    else if (r = this.tokenizer.text(e, t)) e = e.substring(r.raw.length), r.type ? t.push(r) : ((a = t[t.length - 1]).raw += "\n" + r.raw, a.text += "\n" + r.text);
                    else if (e) {
                        var s = "Infinite loop on byte: " + e.charCodeAt(0);
                        if (this.options.silent) {
                            console.error(s);
                            break
                        }
                        throw new Error(s)
                    }
                    return t
                }, i.inline = function(e) {
                    for (var t, n, r, i, o, a = e.length, s = 0; s < a; s++) switch ((o = e[s]).type) {
                        case "paragraph":
                        case "text":
                        case "heading":
                            o.tokens = [], this.inlineTokens(o.text, o.tokens);
                            break;
                        case "table":
                            for (o.tokens = {
                                    header: [],
                                    cells: []
                                }, r = o.header.length, t = 0; t < r; t++) o.tokens.header[t] = [], this.inlineTokens(o.header[t], o.tokens.header[t]);
                            for (r = o.cells.length, t = 0; t < r; t++)
                                for (i = o.cells[t], o.tokens.cells[t] = [], n = 0; n < i.length; n++) o.tokens.cells[t][n] = [], this.inlineTokens(i[n], o.tokens.cells[t][n]);
                            break;
                        case "blockquote":
                            this.inline(o.tokens);
                            break;
                        case "list":
                            for (r = o.items.length, t = 0; t < r; t++) this.inline(o.items[t].tokens)
                    }
                    return e
                }, i.inlineTokens = function(e, t, n, r) {
                    var i;
                    void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === r && (r = !1);
                    var o, a, s, l = e;
                    if (this.tokens.links) {
                        var c = Object.keys(this.tokens.links);
                        if (0 < c.length)
                            for (; null != (o = this.tokenizer.rules.inline.reflinkSearch.exec(l));) c.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, o.index) + "[" + W("a", o[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                    }
                    for (; null != (o = this.tokenizer.rules.inline.blockSkip.exec(l));) l = l.slice(0, o.index) + "[" + W("a", o[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (; e;)
                        if (a || (s = ""), a = !1, i = this.tokenizer.escape(e)) e = e.substring(i.raw.length), t.push(i);
                        else if (i = this.tokenizer.tag(e, n, r)) e = e.substring(i.raw.length), n = i.inLink, r = i.inRawBlock, t.push(i);
                    else if (i = this.tokenizer.link(e)) e = e.substring(i.raw.length), "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)), t.push(i);
                    else if (i = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(i.raw.length), "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)), t.push(i);
                    else if (i = this.tokenizer.strong(e, l, s)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i);
                    else if (i = this.tokenizer.em(e, l, s)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i);
                    else if (i = this.tokenizer.codespan(e)) e = e.substring(i.raw.length), t.push(i);
                    else if (i = this.tokenizer.br(e)) e = e.substring(i.raw.length), t.push(i);
                    else if (i = this.tokenizer.del(e)) e = e.substring(i.raw.length), i.tokens = this.inlineTokens(i.text, [], n, r), t.push(i);
                    else if (i = this.tokenizer.autolink(e, G)) e = e.substring(i.raw.length), t.push(i);
                    else if (n || !(i = this.tokenizer.url(e, G))) {
                        if (i = this.tokenizer.inlineText(e, r, X)) e = e.substring(i.raw.length), s = i.raw.slice(-1), a = !0, t.push(i);
                        else if (e) {
                            var u = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(u);
                                break
                            }
                            throw new Error(u)
                        }
                    } else e = e.substring(i.raw.length), t.push(i);
                    return t
                }, e = n, r = [{
                    key: "rules",
                    get: function() {
                        return {
                            block: Z,
                            inline: V
                        }
                    }
                }], (t = null) && o(e.prototype, t), r && o(e, r), n
            }(),
            K = t.defaults,
            Q = C,
            ee = k,
            te = function() {
                function e(e) {
                    this.options = e || K
                }
                var t = e.prototype;
                return t.code = function(e, t, n) {
                    var r, i = (t || "").match(/\S*/)[0];
                    return !this.options.highlight || null != (r = this.options.highlight(e, i)) && r !== e && (n = !0, e = r), i ? '<pre><code class="' + this.options.langPrefix + ee(i, !0) + '">' + (n ? e : ee(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : ee(e, !0)) + "</code></pre>\n"
                }, t.blockquote = function(e) {
                    return "<blockquote>\n" + e + "</blockquote>\n"
                }, t.html = function(e) {
                    return e
                }, t.heading = function(e, t, n, r) {
                    return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
                }, t.hr = function() {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }, t.list = function(e, t, n) {
                    var r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
                }, t.listitem = function(e) {
                    return "<li>" + e + "</li>\n"
                }, t.checkbox = function(e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                }, t.paragraph = function(e) {
                    return "<p>" + e + "</p>\n"
                }, t.table = function(e, t) {
                    return "<table>\n<thead>\n" + e + "</thead>\n" + (t = t && "<tbody>" + t + "</tbody>") + "</table>\n"
                }, t.tablerow = function(e) {
                    return "<tr>\n" + e + "</tr>\n"
                }, t.tablecell = function(e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                }, t.strong = function(e) {
                    return "<strong>" + e + "</strong>"
                }, t.em = function(e) {
                    return "<em>" + e + "</em>"
                }, t.codespan = function(e) {
                    return "<code>" + e + "</code>"
                }, t.br = function() {
                    return this.options.xhtml ? "<br/>" : "<br>"
                }, t.del = function(e) {
                    return "<del>" + e + "</del>"
                }, t.link = function(e, t, n) {
                    if (null === (e = Q(this.options.sanitize, this.options.baseUrl, e))) return n;
                    var r = '<a href="' + ee(e) + '"';
                    return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>"
                }, t.image = function(e, t, n) {
                    if (null === (e = Q(this.options.sanitize, this.options.baseUrl, e))) return n;
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
                }, t.text = function(e) {
                    return e
                }, e
            }(),
            ne = function() {
                function e() {}
                var t = e.prototype;
                return t.strong = function(e) {
                    return e
                }, t.em = function(e) {
                    return e
                }, t.codespan = function(e) {
                    return e
                }, t.del = function(e) {
                    return e
                }, t.html = function(e) {
                    return e
                }, t.text = function(e) {
                    return e
                }, t.link = function(e, t, n) {
                    return "" + n
                }, t.image = function(e, t, n) {
                    return "" + n
                }, t.br = function() {
                    return ""
                }, e
            }(),
            re = function() {
                function e() {
                    this.seen = {}
                }
                var t = e.prototype;
                return t.serialize = function(e) {
                    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
                }, t.getNextSafeSlug = function(e, t) {
                    var n = e,
                        r = 0;
                    if (this.seen.hasOwnProperty(n))
                        for (r = this.seen[e]; n = e + "-" + ++r, this.seen.hasOwnProperty(n););
                    return t || (this.seen[e] = r, this.seen[n] = 0), n
                }, t.slug = function(e, t) {
                    void 0 === t && (t = {});
                    var n = this.serialize(e);
                    return this.getNextSafeSlug(n, t.dryrun)
                }, e
            }(),
            ie = t.defaults,
            oe = S,
            ae = function() {
                function n(e) {
                    this.options = e || ie, this.options.renderer = this.options.renderer || new te, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ne, this.slugger = new re
                }
                n.parse = function(e, t) {
                    return new n(t).parse(e)
                }, n.parseInline = function(e, t) {
                    return new n(t).parseInline(e)
                };
                var e = n.prototype;
                return e.parse = function(e, t) {
                    void 0 === t && (t = !0);
                    for (var n, r, i, o, a, s, l, c, u, f, d, p, h, g, m, v, b, w = "", y = e.length, x = 0; x < y; x++) switch ((u = e[x]).type) {
                        case "space":
                            continue;
                        case "hr":
                            w += this.renderer.hr();
                            continue;
                        case "heading":
                            w += this.renderer.heading(this.parseInline(u.tokens), u.depth, oe(this.parseInline(u.tokens, this.textRenderer)), this.slugger);
                            continue;
                        case "code":
                            w += this.renderer.code(u.text, u.lang, u.escaped);
                            continue;
                        case "table":
                            for (s = l = "", i = u.header.length, n = 0; n < i; n++) s += this.renderer.tablecell(this.parseInline(u.tokens.header[n]), {
                                header: !0,
                                align: u.align[n]
                            });
                            for (l += this.renderer.tablerow(s), c = "", i = u.cells.length, n = 0; n < i; n++) {
                                for (s = "", o = (a = u.tokens.cells[n]).length, r = 0; r < o; r++) s += this.renderer.tablecell(this.parseInline(a[r]), {
                                    header: !1,
                                    align: u.align[r]
                                });
                                c += this.renderer.tablerow(s)
                            }
                            w += this.renderer.table(l, c);
                            continue;
                        case "blockquote":
                            c = this.parse(u.tokens), w += this.renderer.blockquote(c);
                            continue;
                        case "list":
                            for (f = u.ordered, d = u.start, p = u.loose, i = u.items.length, c = "", n = 0; n < i; n++) m = (g = u.items[n]).checked, v = g.task, h = "", g.task && (b = this.renderer.checkbox(m), p ? 0 < g.tokens.length && "text" === g.tokens[0].type ? (g.tokens[0].text = b + " " + g.tokens[0].text, g.tokens[0].tokens && 0 < g.tokens[0].tokens.length && "text" === g.tokens[0].tokens[0].type && (g.tokens[0].tokens[0].text = b + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                                type: "text",
                                text: b
                            }) : h += b), h += this.parse(g.tokens, p), c += this.renderer.listitem(h, v, m);
                            w += this.renderer.list(c, f, d);
                            continue;
                        case "html":
                            w += this.renderer.html(u.text);
                            continue;
                        case "paragraph":
                            w += this.renderer.paragraph(this.parseInline(u.tokens));
                            continue;
                        case "text":
                            for (c = u.tokens ? this.parseInline(u.tokens) : u.text; x + 1 < y && "text" === e[x + 1].type;) c += "\n" + ((u = e[++x]).tokens ? this.parseInline(u.tokens) : u.text);
                            w += t ? this.renderer.paragraph(c) : c;
                            continue;
                        default:
                            var k = 'Token with "' + u.type + '" type was not found.';
                            if (this.options.silent) return void console.error(k);
                            throw new Error(k)
                    }
                    return w
                }, e.parseInline = function(e, t) {
                    t = t || this.renderer;
                    for (var n, r = "", i = e.length, o = 0; o < i; o++) switch ((n = e[o]).type) {
                        case "escape":
                            r += t.text(n.text);
                            break;
                        case "html":
                            r += t.html(n.text);
                            break;
                        case "link":
                            r += t.link(n.href, n.title, this.parseInline(n.tokens, t));
                            break;
                        case "image":
                            r += t.image(n.href, n.title, n.text);
                            break;
                        case "strong":
                            r += t.strong(this.parseInline(n.tokens, t));
                            break;
                        case "em":
                            r += t.em(this.parseInline(n.tokens, t));
                            break;
                        case "codespan":
                            r += t.codespan(n.text);
                            break;
                        case "br":
                            r += t.br();
                            break;
                        case "del":
                            r += t.del(this.parseInline(n.tokens, t));
                            break;
                        case "text":
                            r += t.text(n.text);
                            break;
                        default:
                            var a = 'Token with "' + n.type + '" type was not found.';
                            if (this.options.silent) return void console.error(a);
                            throw new Error(a)
                    }
                    return r
                }, n
            }(),
            se = A,
            le = M,
            ce = k,
            ue = t.getDefaults,
            fe = t.changeDefaults,
            de = t.defaults;

        function pe(e, n, r) {
            if (null == e) throw new Error("marked(): input parameter is undefined or null");
            if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
            if ("function" == typeof n && (r = n, n = null), n = se({}, pe.defaults, n || {}), le(n), r) {
                var i, o = n.highlight;
                try {
                    i = J.lex(e, n)
                } catch (e) {
                    return r(e)
                }
                var a = function(t) {
                    var e;
                    if (!t) try {
                        e = ae.parse(i, n)
                    } catch (e) {
                        t = e
                    }
                    return n.highlight = o, t ? r(t) : r(null, e)
                };
                if (!o || o.length < 3) return a();
                if (delete n.highlight, !i.length) return a();
                var s = 0;
                return pe.walkTokens(i, function(n) {
                    "code" === n.type && (s++, setTimeout(function() {
                        o(n.text, n.lang, function(e, t) {
                            return e ? a(e) : (null != t && t !== n.text && (n.text = t, n.escaped = !0), void(0 === --s && a()))
                        })
                    }, 0))
                }), void(0 === s && a())
            }
            try {
                var t = J.lex(e, n);
                return n.walkTokens && pe.walkTokens(t, n.walkTokens), ae.parse(t, n)
            } catch (e) {
                if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", n.silent) return "<p>An error occurred:</p><pre>" + ce(e.message + "", !0) + "</pre>";
                throw e
            }
        }
        return pe.options = pe.setOptions = function(e) {
            return se(pe.defaults, e), fe(pe.defaults), pe
        }, pe.getDefaults = ue, pe.defaults = de, pe.use = function(s) {
            var t, n = se({}, s);
            s.renderer && function() {
                var a = pe.defaults.renderer || new te;
                for (var e in s.renderer) ! function(i) {
                    var o = a[i];
                    a[i] = function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r = s.renderer[i].apply(a, t);
                        return !1 === r && (r = o.apply(a, t)), r
                    }
                }(e);
                n.renderer = a
            }(), s.tokenizer && function() {
                var a = pe.defaults.tokenizer || new B;
                for (var e in s.tokenizer) ! function(i) {
                    var o = a[i];
                    a[i] = function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r = s.tokenizer[i].apply(a, t);
                        return !1 === r && (r = o.apply(a, t)), r
                    }
                }(e);
                n.tokenizer = a
            }(), s.walkTokens && (t = pe.defaults.walkTokens, n.walkTokens = function(e) {
                s.walkTokens(e), t && t(e)
            }), pe.setOptions(n)
        }, pe.walkTokens = function(e, t) {
            for (var n, r = p(e); !(n = r()).done;) {
                var i = n.value;
                switch (t(i), i.type) {
                    case "table":
                        for (var o, a = p(i.tokens.header); !(o = a()).done;) {
                            var s = o.value;
                            pe.walkTokens(s, t)
                        }
                        for (var l, c = p(i.tokens.cells); !(l = c()).done;)
                            for (var u, f = p(l.value); !(u = f()).done;) {
                                var d = u.value;
                                pe.walkTokens(d, t)
                            }
                        break;
                    case "list":
                        pe.walkTokens(i.items, t);
                        break;
                    default:
                        i.tokens && pe.walkTokens(i.tokens, t)
                }
            }
        }, pe.parseInline = function(e, t) {
            if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
            if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
            t = se({}, pe.defaults, t || {}), le(t);
            try {
                var n = J.lexInline(e, t);
                return t.walkTokens && pe.walkTokens(n, t.walkTokens), ae.parseInline(n, t)
            } catch (e) {
                if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + ce(e.message + "", !0) + "</pre>";
                throw e
            }
        }, pe.Parser = ae, pe.parser = ae.parse, pe.Renderer = te, pe.TextRenderer = ne, pe.Lexer = J, pe.lexer = J.lex, pe.Tokenizer = B, pe.Slugger = re, pe.parse = pe
    }, "object" === a(t) && void 0 !== e ? e.exports = o() : void 0 === (i = "function" == typeof(r = o) ? r.call(t, n, t, e) : r) || (e.exports = i)
}, function(e, t, n) {
    function r(e) {
        (m = e.slice(0)).length ? o.show() : h.alwaysVisible || o.hide()
    }

    function i() {
        var e = h.type,
            t = h.packageName,
            n = "shell-zip" === e ? "zip" : "tar",
            r = {
                action: "download",
                as: (t = t || (1 === m.length ? m[0].label : f.getItem().label)) + "." + n,
                type: e,
                baseHref: f.getAbsHref(),
                hrefs: ""
            };
        s(m, function(e, t) {
            r["hrefs[".concat(t, "]")] = e.absHref
        }), c.formRequest(r)
    }
    var o, a = n(2),
        s = a.each,
        l = a.dom,
        c = n(9),
        u = n(13),
        f = n(21),
        d = n(14),
        p = n(15),
        h = Object.assign({
            enabled: !1,
            type: "php-tar",
            packageName: "package",
            alwaysVisible: !1
        }, p.download),
        g = '<div id="download" class="tool">\n            <img src="'.concat(d.image("download"), '" alt="download"/>\n        </div>'),
        m = [];
    h.enabled && (o = l(g).hide().appTo("#toolbar").on("click", i), h.alwaysVisible && o.show(), u.sub("selection", r))
}, function(e, t, n) {
    function r(e) {
        var t, n, r = 0 < arguments.length && void 0 !== e ? e : "";
        r !== k && ((k = r) ? (s.addCls("pending"), t = new RegExp(r, w.ignorecase ? "i" : ""), n = u(g.getItem().content, function(e) {
            return t.test(e.label)
        }), s.rmCls("pending"), b.setHint("noMatch"), b.setItems(n)) : b.setLocation())
    }

    function i() {
        x ? (s.addCls("active"), l[0].focus(), r(d(l.val(), w.advanced))) : (r(), s.rmCls("active"))
    }

    function o() {
        x = !x, i()
    }

    function a() {
        x = !1, l.val(""), i()
    }
    var s, l, c = n(2),
        u = c.filter,
        f = c.debounce,
        d = c.parsePattern,
        p = c.dom,
        h = n(13),
        g = n(21),
        m = n(14),
        v = n(15),
        b = n(19),
        w = Object.assign({
            enabled: !1,
            advanced: !1,
            debounceTime: 100,
            ignorecase: !0
        }, v.filter),
        y = '<div id="filter" class="tool">\n            <img src="'.concat(m.image("filter"), '" alt="filter"/>\n            <input class="l10n_ph-filter" type="text" value=""/>\n        </div>'),
        x = !1,
        k = "";
    w.enabled && (s = p(y).appTo("#toolbar"), l = s.find("input"), s.find("img").on("click", o), l.on("keyup", f(i, w.debounceTime)), h.sub("location.changed", a))
}, function(e, t, f) {
    (function(e) {
        var t, n, r, i, o, a = f(2).map,
            s = f(13),
            l = f(15),
            c = e.window,
            u = Object.assign({
                enabled: !1,
                id: "UA-000000-0"
            }, l["google-analytics-ua"]);
        u.enabled && (t = window, n = document, r = "ga", t.GoogleAnalyticsObject = r, t.ga = t.ga || function() {
            (t.ga.q = t.ga.q || []).push(arguments)
        }, t.ga.l = +new Date, i = n.createElement("script"), o = n.getElementsByTagName("script")[0], i.async = 1, i.src = "//www.google-analytics.com/analytics.js", o.parentNode.insertBefore(i, o), c.ga("create", u.id, "auto"), s.sub("location.changed", function(e) {
            var t = c.location;
            c.ga("send", "pageview", {
                location: t.protocol + "//" + t.host + e.absHref,
                title: a(e.getCrumb(), function(e) {
                    return e.label
                }).join(" > ")
            })
        }))
    }).call(this, f(5))
}, function(e, t, T) {
    (function(o) {
        function t() {
            _.get(A) ? (w("#view-info").addCls("active"), w("#info").show()) : (w("#view-info").rmCls("active"), w("#info").hide())
        }

        function n(e) {
            var t, n, r = e.thumbRational || e.icon,
                i = !!e.thumbRational;
            !e.isCurrentFolder() && r || (r = k.icon("folder")), a.attr("src", r), i ? a.addCls("thumb") : a.rmCls("thumb"), s.text(e.label), b(e.time) ? l.text(x.formatDate(e.time)) : l.text("."), b(e.size) ? (c.text(x.formatSize(e.size)), c.show()) : c.hide(), e.isContentFetched ? (t = e.getStats(), f.text(t.folders), d.text(t.files), u.show()) : u.hide(), C.qrcode && (n = o.window.location, p.clr().app(m({
                render: "image",
                size: 200,
                fill: C.qrFill,
                back: C.qrBack,
                text: n.protocol + "//" + n.host + e.absHref,
                crisp: !0,
                quiet: 1
            })))
        }

        function e(e) {
            n(e)
        }

        function r() {
            n(h)
        }

        function i(e) {
            n(h = e)
        }
        var a, s, l, c, u, f, d, p, h, g, m = T(34),
            v = T(2),
            b = v.isNum,
            w = v.dom,
            y = T(13),
            x = T(20),
            k = T(14),
            S = T(15),
            _ = T(17),
            C = Object.assign({
                enabled: !1,
                show: !1,
                qrcode: !0,
                qrColor: "#999"
            }, S.info),
            z = '<div class="block">\n            <h1 class="l10n-info">Info</h1>\n            <div id="view-info" class="button view">\n                <img src="'.concat(k.image("info-toggle"), '" alt="view-info"/>\n            </div>\n        </div>'),
            A = "ext/info";
        C.enabled && (g = w('<div id="info">\n            <div class="icon"><img/></div>\n            <div class="block">\n                <div class="label"></div>\n                <div class="time"></div>\n                <div class="size"></div>\n                <div class="content">\n                    <span class="folders"></span> <span class="l10n-folders"></span>,\n                    <span class="files"></span> <span class="l10n-files"></span>\n                </div>\n            </div>\n            <div class="qrcode"/>\n        </div>').hide().appTo("#mainrow"), a = g.find(".icon img"), s = g.find(".label"), l = g.find(".time"), c = g.find(".size"), u = g.find(".content"), f = g.find(".folders"), d = g.find(".files"), p = g.find(".qrcode"), C.qrcode || p.rm(), w(z).appTo("#sidebar").find("#view-info").on("click", function(e) {
            _.put(A, !_.get(A)), t(), y.pub("resize"), e.preventDefault()
        }), "boolean" != typeof _.get(A) && _.put(A, C.show), t(), y.sub("location.changed", i), y.sub("item.mouseenter", e), y.sub("item.mouseleave", r))
    }).call(this, T(5))
}, function(e, o, t) {
    (function(e) {
        var t, n, r, i;

        function $(e) {
            return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        i = function() {
            return r = {}, i.m = n = [function(e, t, n) {
                function r(e) {
                    var t = Object.assign({}, i, e),
                        n = o(t.text, t.ecLevel, t.minVersion, t.quiet);
                    return "svg" === t.render ? s(n, t) : a(n, t, "image" === t.render)
                }
                var i = n(1),
                    o = n(2),
                    a = n(4),
                    s = n(8);
                e.exports = r;
                try {
                    jQuery.fn.kjua = function(n) {
                        return this.each(function(e, t) {
                            return t.appendChild(r(n))
                        })
                    }
                } catch (e) {}
            }, function(e, t) {
                e.exports = {
                    render: "image",
                    crisp: !0,
                    minVersion: 1,
                    ecLevel: "L",
                    size: 200,
                    ratio: null,
                    fill: "#333",
                    back: "#fff",
                    text: "no text",
                    rounded: 0,
                    quiet: 0,
                    mode: "plain",
                    mSize: 30,
                    mPosX: 50,
                    mPosY: 50,
                    label: "no label",
                    fontname: "sans",
                    fontcolor: "#333",
                    image: null
                }
            }, function(e, t, n) {
                function s(e) {
                    return (s = "function" == typeof Symbol && "symbol" == $(Symbol.iterator) ? function(e) {
                        return $(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : $(e)
                    })(e)
                }
                var l = /code length overflow/i,
                    c = n(3);
                c.stringToBytes = c.stringToBytesFuncs["UTF-8"], e.exports = function(e, t, n, r) {
                    var i, o = 3 < arguments.length && void 0 !== r ? r : 0,
                        a = function(e, t, n) {
                            for (var r = 2 < arguments.length && void 0 !== n ? n : 1, i = Math.max(1, r); i <= 40; i += 1) try {
                                var o = function() {
                                    var n = c(i, t);
                                    n.addData(e), n.make();
                                    var r = n.getModuleCount();
                                    return {
                                        v: {
                                            text: e,
                                            level: t,
                                            version: i,
                                            module_count: r,
                                            is_dark: function(e, t) {
                                                return 0 <= e && e < r && 0 <= t && t < r && n.isDark(e, t)
                                            }
                                        }
                                    }
                                }();
                                if ("object" === s(o)) return o.v
                            } catch (e) {
                                if (!(i < 40 && l.test(e))) throw new Error(e)
                            }
                            return null
                        }(0 < arguments.length && void 0 !== e ? e : "", 1 < arguments.length && void 0 !== t ? t : "L", 2 < arguments.length && void 0 !== n ? n : 1);
                    return a && (i = a.is_dark, a.module_count += 2 * o, a.is_dark = function(e, t) {
                        return i(e - o, t - o)
                    }), a
                }
            }, function(e, t, n) {
                var r, i, o = function() {
                    function r(e, t) {
                        function a(e, t) {
                            u = function(e) {
                                for (var t = new Array(e), n = 0; n < e; n += 1) {
                                    t[n] = new Array(e);
                                    for (var r = 0; r < e; r += 1) t[n][r] = null
                                }
                                return t
                            }(f = 4 * s + 17), n(0, 0), n(f - 7, 0), n(0, f - 7), o(), i(), h(e, t), 7 <= s && d(e), null == r && (r = m(s, l, c)), g(r, t)
                        }
                        var s = e,
                            l = b[t],
                            u = null,
                            f = 0,
                            r = null,
                            c = [],
                            p = {},
                            n = function(e, t) {
                                for (var n = -1; n <= 7; n += 1)
                                    if (!(e + n <= -1 || f <= e + n))
                                        for (var r = -1; r <= 7; r += 1) t + r <= -1 || f <= t + r || (u[e + n][t + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4)
                            },
                            i = function() {
                                for (var e = 8; e < f - 8; e += 1) null == u[e][6] && (u[e][6] = e % 2 == 0);
                                for (var t = 8; t < f - 8; t += 1) null == u[6][t] && (u[6][t] = t % 2 == 0)
                            },
                            o = function() {
                                for (var e = w.getPatternPosition(s), t = 0; t < e.length; t += 1)
                                    for (var n = 0; n < e.length; n += 1) {
                                        var r = e[t],
                                            i = e[n];
                                        if (null == u[r][i])
                                            for (var o = -2; o <= 2; o += 1)
                                                for (var a = -2; a <= 2; a += 1) u[r + o][i + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
                                    }
                            },
                            d = function(e) {
                                for (var t = w.getBCHTypeNumber(s), n = 0; n < 18; n += 1) {
                                    var r = !e && 1 == (t >> n & 1);
                                    u[Math.floor(n / 3)][n % 3 + f - 8 - 3] = r
                                }
                                for (n = 0; n < 18; n += 1) r = !e && 1 == (t >> n & 1), u[n % 3 + f - 8 - 3][Math.floor(n / 3)] = r
                            },
                            h = function(e, t) {
                                for (var n = l << 3 | t, r = w.getBCHTypeInfo(n), i = 0; i < 15; i += 1) {
                                    var o = !e && 1 == (r >> i & 1);
                                    i < 6 ? u[i][8] = o : i < 8 ? u[i + 1][8] = o : u[f - 15 + i][8] = o
                                }
                                for (i = 0; i < 15; i += 1) o = !e && 1 == (r >> i & 1), i < 8 ? u[8][f - i - 1] = o : i < 9 ? u[8][15 - i - 1 + 1] = o : u[8][15 - i - 1] = o;
                                u[f - 8][8] = !e
                            },
                            g = function(e, t) {
                                for (var n = -1, r = f - 1, i = 7, o = 0, a = w.getMaskFunction(t), s = f - 1; 0 < s; s -= 2)
                                    for (6 == s && --s;;) {
                                        for (var l, c = 0; c < 2; c += 1) null == u[r][s - c] && (l = !1, o < e.length && (l = 1 == (e[o] >>> i & 1)), a(r, s - c) && (l = !l), u[r][s - c] = l, -1 == --i && (o += 1, i = 7));
                                        if ((r += n) < 0 || f <= r) {
                                            r -= n, n = -n;
                                            break
                                        }
                                    }
                            },
                            m = function(e, t, n) {
                                for (var r = x.getRSBlocks(e, t), i = k(), o = 0; o < n.length; o += 1) {
                                    var a = n[o];
                                    i.put(a.getMode(), 4), i.put(a.getLength(), w.getLengthInBits(a.getMode(), e)), a.write(i)
                                }
                                for (var s = 0, o = 0; o < r.length; o += 1) s += r[o].dataCount;
                                if (i.getLengthInBits() > 8 * s) throw "code length overflow. (" + i.getLengthInBits() + ">" + 8 * s + ")";
                                for (i.getLengthInBits() + 4 <= 8 * s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
                                for (; !(i.getLengthInBits() >= 8 * s || (i.put(236, 8), i.getLengthInBits() >= 8 * s));) i.put(17, 8);
                                return function(e, t) {
                                    for (var n = 0, r = 0, i = 0, o = new Array(t.length), a = new Array(t.length), s = 0; s < t.length; s += 1) {
                                        var l = t[s].dataCount,
                                            c = t[s].totalCount - l,
                                            r = Math.max(r, l),
                                            i = Math.max(i, c);
                                        o[s] = new Array(l);
                                        for (var u = 0; u < o[s].length; u += 1) o[s][u] = 255 & e.getBuffer()[u + n];
                                        n += l;
                                        var f = w.getErrorCorrectPolynomial(c),
                                            d = y(o[s], f.getLength() - 1).mod(f);
                                        for (a[s] = new Array(f.getLength() - 1), u = 0; u < a[s].length; u += 1) {
                                            var p = u + d.getLength() - a[s].length;
                                            a[s][u] = 0 <= p ? d.getAt(p) : 0
                                        }
                                    }
                                    for (var h = 0, u = 0; u < t.length; u += 1) h += t[u].totalCount;
                                    for (var g = new Array(h), m = 0, u = 0; u < r; u += 1)
                                        for (s = 0; s < t.length; s += 1) u < o[s].length && (g[m] = o[s][u], m += 1);
                                    for (u = 0; u < i; u += 1)
                                        for (s = 0; s < t.length; s += 1) u < a[s].length && (g[m] = a[s][u], m += 1);
                                    return g
                                }(i, r)
                            };
                        p.addData = function(e, t) {
                            var n = null;
                            switch (t = t || "Byte") {
                                case "Numeric":
                                    n = S(e);
                                    break;
                                case "Alphanumeric":
                                    n = _(e);
                                    break;
                                case "Byte":
                                    n = z(e);
                                    break;
                                case "Kanji":
                                    n = A(e);
                                    break;
                                default:
                                    throw "mode:" + t
                            }
                            c.push(n), r = null
                        }, p.isDark = function(e, t) {
                            if (e < 0 || f <= e || t < 0 || f <= t) throw e + "," + t;
                            return u[e][t]
                        }, p.getModuleCount = function() {
                            return f
                        }, p.make = function() {
                            if (s < 1) {
                                for (var e = 1; e < 40; e++) {
                                    for (var t = x.getRSBlocks(e, l), n = k(), r = 0; r < c.length; r++) {
                                        var i = c[r];
                                        n.put(i.getMode(), 4), n.put(i.getLength(), w.getLengthInBits(i.getMode(), e)), i.write(n)
                                    }
                                    for (var o = 0, r = 0; r < t.length; r++) o += t[r].dataCount;
                                    if (n.getLengthInBits() <= 8 * o) break
                                }
                                s = e
                            }
                            a(!1, function() {
                                for (var e = 0, t = 0, n = 0; n < 8; n += 1) {
                                    a(!0, n);
                                    var r = w.getLostPoint(p);
                                    (0 == n || r < e) && (e = r, t = n)
                                }
                                return t
                            }())
                        }, p.createTableTag = function(e, t) {
                            e = e || 2;
                            var n = "";
                            n += '<table style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: " + (t = void 0 === t ? 4 * e : t) + "px;", n += '">', n += "<tbody>";
                            for (var r = 0; r < p.getModuleCount(); r += 1) {
                                n += "<tr>";
                                for (var i = 0; i < p.getModuleCount(); i += 1) n += '<td style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: 0px;", n += " width: " + e + "px;", n += " height: " + e + "px;", n += " background-color: ", n += p.isDark(r, i) ? "#000000" : "#ffffff", n += ";", n += '"/>';
                                n += "</tr>"
                            }
                            return (n += "</tbody>") + "</table>"
                        }, p.createSvgTag = function(e, t, n, r) {
                            var i = {};
                            "object" == $(arguments[0]) && (e = (i = arguments[0]).cellSize, t = i.margin, n = i.alt, r = i.title), e = e || 2, t = void 0 === t ? 4 * e : t, (n = "string" == typeof n ? {
                                text: n
                            } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-description" : null, (r = "string" == typeof r ? {
                                text: r
                            } : r || {}).text = r.text || null, r.id = r.text ? r.id || "qrcode-title" : null;
                            var o, a, s, l = p.getModuleCount() * e + 2 * t,
                                c = "",
                                u = "l" + e + ",0 0," + e + " -" + e + ",0 0,-" + e + "z ";
                            for (c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c += i.scalable ? "" : ' width="' + l + 'px" height="' + l + 'px"', c += ' viewBox="0 0 ' + l + " " + l + '" ', c += ' preserveAspectRatio="xMinYMin meet"', c += r.text || n.text ? ' role="img" aria-labelledby="' + v([r.id, n.id].join(" ").trim()) + '"' : "", c += ">", c += r.text ? '<title id="' + v(r.id) + '">' + v(r.text) + "</title>" : "", c += n.text ? '<description id="' + v(n.id) + '">' + v(n.text) + "</description>" : "", c += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c += '<path d="', a = 0; a < p.getModuleCount(); a += 1)
                                for (s = a * e + t, o = 0; o < p.getModuleCount(); o += 1) p.isDark(a, o) && (c += "M" + (o * e + t) + "," + s + u);
                            return (c += '" stroke="transparent" fill="black"/>') + "</svg>"
                        }, p.createDataURL = function(i, e) {
                            i = i || 2, e = void 0 === e ? 4 * i : e;
                            var t = p.getModuleCount() * i + 2 * e,
                                o = e,
                                a = t - e;
                            return T(t, t, function(e, t) {
                                if (o <= e && e < a && o <= t && t < a) {
                                    var n = Math.floor((e - o) / i),
                                        r = Math.floor((t - o) / i);
                                    return p.isDark(r, n) ? 0 : 1
                                }
                                return 1
                            })
                        }, p.createImgTag = function(e, t, n) {
                            e = e || 2, t = void 0 === t ? 4 * e : t;
                            var r = p.getModuleCount() * e + 2 * t,
                                i = "";
                            return i += "<img", i += ' src="', i += p.createDataURL(e, t), i += '"', i += ' width="', i += r, i += '"', i += ' height="', i += r, i += '"', n && (i += ' alt="', i += v(n), i += '"'), i + "/>"
                        };
                        var v = function(e) {
                            for (var t = "", n = 0; n < e.length; n += 1) {
                                var r = e.charAt(n);
                                switch (r) {
                                    case "<":
                                        t += "&lt;";
                                        break;
                                    case ">":
                                        t += "&gt;";
                                        break;
                                    case "&":
                                        t += "&amp;";
                                        break;
                                    case '"':
                                        t += "&quot;";
                                        break;
                                    default:
                                        t += r
                                }
                            }
                            return t
                        };
                        return p.createASCII = function(e, t) {
                            if ((e = e || 1) < 2) return function(e) {
                                e = void 0 === e ? 2 : e;
                                for (var t, n, r, i, o = +p.getModuleCount() + 2 * e, a = e, s = o - e, l = {
                                        "██": "█",
                                        "█ ": "▀",
                                        " █": "▄",
                                        "  ": " "
                                    }, c = {
                                        "██": "▀",
                                        "█ ": "▀",
                                        " █": " ",
                                        "  ": " "
                                    }, u = "", f = 0; f < o; f += 2) {
                                    for (n = Math.floor(f - a), r = Math.floor(f + 1 - a), t = 0; t < o; t += 1) i = "█", a <= t && t < s && a <= f && f < s && p.isDark(n, Math.floor(t - a)) && (i = " "), a <= t && t < s && a <= f + 1 && f + 1 < s && p.isDark(r, Math.floor(t - a)) ? i += " " : i += "█", u += e < 1 && s <= f + 1 ? c[i] : l[i];
                                    u += "\n"
                                }
                                return o % 2 && 0 < e ? u.substring(0, u.length - o - 1) + Array(1 + o).join("▀") : u.substring(0, u.length - 1)
                            }(t);
                            --e, t = void 0 === t ? 2 * e : t;
                            for (var n, r, i, o = p.getModuleCount() * e + 2 * t, a = t, s = o - t, l = Array(e + 1).join("██"), c = Array(e + 1).join("  "), u = "", f = "", d = 0; d < o; d += 1) {
                                for (r = Math.floor((d - a) / e), f = "", n = 0; n < o; n += 1) i = 1, a <= n && n < s && a <= d && d < s && p.isDark(r, Math.floor((n - a) / e)) && (i = 0), f += i ? l : c;
                                for (r = 0; r < e; r += 1) u += f + "\n"
                            }
                            return u.substring(0, u.length - 1)
                        }, p.renderTo2dContext = function(e, t) {
                            t = t || 2;
                            for (var n = p.getModuleCount(), r = 0; r < n; r++)
                                for (var i = 0; i < n; i++) e.fillStyle = p.isDark(r, i) ? "black" : "white", e.fillRect(r * t, i * t, t, t)
                        }, p
                    }
                    r.stringToBytes = (r.stringToBytesFuncs = {
                        default: function(e) {
                            for (var t = [], n = 0; n < e.length; n += 1) {
                                var r = e.charCodeAt(n);
                                t.push(255 & r)
                            }
                            return t
                        }
                    }).default, r.createStringToBytes = function(s, l) {
                        var o = function() {
                                function e() {
                                    var e = t.read();
                                    if (-1 == e) throw "eof";
                                    return e
                                }
                                for (var t = c(s), n = 0, r = {};;) {
                                    var i = t.read();
                                    if (-1 == i) break;
                                    var o = e(),
                                        a = e() << 8 | e();
                                    r[String.fromCharCode(i << 8 | o)] = a, n += 1
                                }
                                if (n != l) throw n + " != " + l;
                                return r
                            }(),
                            a = "?".charCodeAt(0);
                        return function(e) {
                            for (var t = [], n = 0; n < e.length; n += 1) {
                                var r, i = e.charCodeAt(n);
                                i < 128 ? t.push(i) : "number" == typeof(r = o[e.charAt(n)]) ? (255 & r) == r ? t.push(r) : (t.push(r >>> 8), t.push(255 & r)) : t.push(a)
                            }
                            return t
                        }
                    };
                    var t, e, b = {
                            L: 1,
                            M: 0,
                            Q: 3,
                            H: 2
                        },
                        w = (t = [
                            [],
                            [6, 18],
                            [6, 22],
                            [6, 26],
                            [6, 30],
                            [6, 34],
                            [6, 22, 38],
                            [6, 24, 42],
                            [6, 26, 46],
                            [6, 28, 50],
                            [6, 30, 54],
                            [6, 32, 58],
                            [6, 34, 62],
                            [6, 26, 46, 66],
                            [6, 26, 48, 70],
                            [6, 26, 50, 74],
                            [6, 30, 54, 78],
                            [6, 30, 56, 82],
                            [6, 30, 58, 86],
                            [6, 34, 62, 90],
                            [6, 28, 50, 72, 94],
                            [6, 26, 50, 74, 98],
                            [6, 30, 54, 78, 102],
                            [6, 28, 54, 80, 106],
                            [6, 32, 58, 84, 110],
                            [6, 30, 58, 86, 114],
                            [6, 34, 62, 90, 118],
                            [6, 26, 50, 74, 98, 122],
                            [6, 30, 54, 78, 102, 126],
                            [6, 26, 52, 78, 104, 130],
                            [6, 30, 56, 82, 108, 134],
                            [6, 34, 60, 86, 112, 138],
                            [6, 30, 58, 86, 114, 142],
                            [6, 34, 62, 90, 118, 146],
                            [6, 30, 54, 78, 102, 126, 150],
                            [6, 24, 50, 76, 102, 128, 154],
                            [6, 28, 54, 80, 106, 132, 158],
                            [6, 32, 58, 84, 110, 136, 162],
                            [6, 26, 54, 82, 110, 138, 166],
                            [6, 30, 58, 86, 114, 142, 170]
                        ], (e = {}).getBCHTypeInfo = function(e) {
                            for (var t = e << 10; 0 <= n(t) - n(1335);) t ^= 1335 << n(t) - n(1335);
                            return 21522 ^ (e << 10 | t)
                        }, e.getBCHTypeNumber = function(e) {
                            for (var t = e << 12; 0 <= n(t) - n(7973);) t ^= 7973 << n(t) - n(7973);
                            return e << 12 | t
                        }, e.getPatternPosition = function(e) {
                            return t[e - 1]
                        }, e.getMaskFunction = function(e) {
                            switch (e) {
                                case 0:
                                    return function(e, t) {
                                        return (e + t) % 2 == 0
                                    };
                                case 1:
                                    return function(e, t) {
                                        return e % 2 == 0
                                    };
                                case 2:
                                    return function(e, t) {
                                        return t % 3 == 0
                                    };
                                case 3:
                                    return function(e, t) {
                                        return (e + t) % 3 == 0
                                    };
                                case 4:
                                    return function(e, t) {
                                        return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0
                                    };
                                case 5:
                                    return function(e, t) {
                                        return e * t % 2 + e * t % 3 == 0
                                    };
                                case 6:
                                    return function(e, t) {
                                        return (e * t % 2 + e * t % 3) % 2 == 0
                                    };
                                case 7:
                                    return function(e, t) {
                                        return (e * t % 3 + (e + t) % 2) % 2 == 0
                                    };
                                default:
                                    throw "bad maskPattern:" + e
                            }
                        }, e.getErrorCorrectPolynomial = function(e) {
                            for (var t = y([1], 0), n = 0; n < e; n += 1) t = t.multiply(y([1, a.gexp(n)], 0));
                            return t
                        }, e.getLengthInBits = function(e, t) {
                            if (1 <= t && t < 10) switch (e) {
                                case 1:
                                    return 10;
                                case 2:
                                    return 9;
                                case 4:
                                case 8:
                                    return 8;
                                default:
                                    throw "mode:" + e
                            } else if (t < 27) switch (e) {
                                case 1:
                                    return 12;
                                case 2:
                                    return 11;
                                case 4:
                                    return 16;
                                case 8:
                                    return 10;
                                default:
                                    throw "mode:" + e
                            } else {
                                if (!(t < 41)) throw "type:" + t;
                                switch (e) {
                                    case 1:
                                        return 14;
                                    case 2:
                                        return 13;
                                    case 4:
                                        return 16;
                                    case 8:
                                        return 12;
                                    default:
                                        throw "mode:" + e
                                }
                            }
                        }, e.getLostPoint = function(e) {
                            for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r += 1)
                                for (var i = 0; i < t; i += 1) {
                                    for (var o = 0, a = e.isDark(r, i), s = -1; s <= 1; s += 1)
                                        if (!(r + s < 0 || t <= r + s))
                                            for (var l = -1; l <= 1; l += 1) i + l < 0 || t <= i + l || 0 == s && 0 == l || a == e.isDark(r + s, i + l) && (o += 1);
                                    5 < o && (n += 3 + o - 5)
                                }
                            for (r = 0; r < t - 1; r += 1)
                                for (i = 0; i < t - 1; i += 1) {
                                    var c = 0;
                                    e.isDark(r, i) && (c += 1), e.isDark(r + 1, i) && (c += 1), e.isDark(r, i + 1) && (c += 1), e.isDark(r + 1, i + 1) && (c += 1), 0 != c && 4 != c || (n += 3)
                                }
                            for (r = 0; r < t; r += 1)
                                for (i = 0; i < t - 6; i += 1) e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6) && (n += 40);
                            for (i = 0; i < t; i += 1)
                                for (r = 0; r < t - 6; r += 1) e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i) && (n += 40);
                            for (var u = 0, i = 0; i < t; i += 1)
                                for (r = 0; r < t; r += 1) e.isDark(r, i) && (u += 1);
                            return n + Math.abs(100 * u / t / t - 50) / 5 * 10
                        }, e);

                    function n(e) {
                        for (var t = 0; 0 != e;) t += 1, e >>>= 1;
                        return t
                    }
                    var a = function() {
                        for (var t = new Array(256), n = new Array(256), e = 0; e < 8; e += 1) t[e] = 1 << e;
                        for (e = 8; e < 256; e += 1) t[e] = t[e - 4] ^ t[e - 5] ^ t[e - 6] ^ t[e - 8];
                        for (e = 0; e < 255; e += 1) n[t[e]] = e;
                        return {
                            glog: function(e) {
                                if (e < 1) throw "glog(" + e + ")";
                                return n[e]
                            },
                            gexp: function(e) {
                                for (; e < 0;) e += 255;
                                for (; 256 <= e;) e -= 255;
                                return t[e]
                            }
                        }
                    }();

                    function y(r, i) {
                        if (void 0 === r.length) throw r.length + "/" + i;
                        var t = function() {
                                for (var e = 0; e < r.length && 0 == r[e];) e += 1;
                                for (var t = new Array(r.length - e + i), n = 0; n < r.length - e; n += 1) t[n] = r[n + e];
                                return t
                            }(),
                            o = {
                                getAt: function(e) {
                                    return t[e]
                                },
                                getLength: function() {
                                    return t.length
                                },
                                multiply: function(e) {
                                    for (var t = new Array(o.getLength() + e.getLength() - 1), n = 0; n < o.getLength(); n += 1)
                                        for (var r = 0; r < e.getLength(); r += 1) t[n + r] ^= a.gexp(a.glog(o.getAt(n)) + a.glog(e.getAt(r)));
                                    return y(t, 0)
                                },
                                mod: function(e) {
                                    if (o.getLength() - e.getLength() < 0) return o;
                                    for (var t = a.glog(o.getAt(0)) - a.glog(e.getAt(0)), n = new Array(o.getLength()), r = 0; r < o.getLength(); r += 1) n[r] = o.getAt(r);
                                    for (r = 0; r < e.getLength(); r += 1) n[r] ^= a.gexp(a.glog(e.getAt(r)) + t);
                                    return y(n, 0).mod(e)
                                }
                            };
                        return o
                    }

                    function C() {
                        var n = [],
                            i = {
                                writeByte: function(e) {
                                    n.push(255 & e)
                                },
                                writeShort: function(e) {
                                    i.writeByte(e), i.writeByte(e >>> 8)
                                },
                                writeBytes: function(e, t, n) {
                                    t = t || 0, n = n || e.length;
                                    for (var r = 0; r < n; r += 1) i.writeByte(e[r + t])
                                },
                                writeString: function(e) {
                                    for (var t = 0; t < e.length; t += 1) i.writeByte(e.charCodeAt(t))
                                },
                                toByteArray: function() {
                                    return n
                                },
                                toString: function() {
                                    var e = "";
                                    e += "[";
                                    for (var t = 0; t < n.length; t += 1) 0 < t && (e += ","), e += n[t];
                                    return e + "]"
                                }
                            };
                        return i
                    }
                    var d, i, x = (d = [
                            [1, 26, 19],
                            [1, 26, 16],
                            [1, 26, 13],
                            [1, 26, 9],
                            [1, 44, 34],
                            [1, 44, 28],
                            [1, 44, 22],
                            [1, 44, 16],
                            [1, 70, 55],
                            [1, 70, 44],
                            [2, 35, 17],
                            [2, 35, 13],
                            [1, 100, 80],
                            [2, 50, 32],
                            [2, 50, 24],
                            [4, 25, 9],
                            [1, 134, 108],
                            [2, 67, 43],
                            [2, 33, 15, 2, 34, 16],
                            [2, 33, 11, 2, 34, 12],
                            [2, 86, 68],
                            [4, 43, 27],
                            [4, 43, 19],
                            [4, 43, 15],
                            [2, 98, 78],
                            [4, 49, 31],
                            [2, 32, 14, 4, 33, 15],
                            [4, 39, 13, 1, 40, 14],
                            [2, 121, 97],
                            [2, 60, 38, 2, 61, 39],
                            [4, 40, 18, 2, 41, 19],
                            [4, 40, 14, 2, 41, 15],
                            [2, 146, 116],
                            [3, 58, 36, 2, 59, 37],
                            [4, 36, 16, 4, 37, 17],
                            [4, 36, 12, 4, 37, 13],
                            [2, 86, 68, 2, 87, 69],
                            [4, 69, 43, 1, 70, 44],
                            [6, 43, 19, 2, 44, 20],
                            [6, 43, 15, 2, 44, 16],
                            [4, 101, 81],
                            [1, 80, 50, 4, 81, 51],
                            [4, 50, 22, 4, 51, 23],
                            [3, 36, 12, 8, 37, 13],
                            [2, 116, 92, 2, 117, 93],
                            [6, 58, 36, 2, 59, 37],
                            [4, 46, 20, 6, 47, 21],
                            [7, 42, 14, 4, 43, 15],
                            [4, 133, 107],
                            [8, 59, 37, 1, 60, 38],
                            [8, 44, 20, 4, 45, 21],
                            [12, 33, 11, 4, 34, 12],
                            [3, 145, 115, 1, 146, 116],
                            [4, 64, 40, 5, 65, 41],
                            [11, 36, 16, 5, 37, 17],
                            [11, 36, 12, 5, 37, 13],
                            [5, 109, 87, 1, 110, 88],
                            [5, 65, 41, 5, 66, 42],
                            [5, 54, 24, 7, 55, 25],
                            [11, 36, 12, 7, 37, 13],
                            [5, 122, 98, 1, 123, 99],
                            [7, 73, 45, 3, 74, 46],
                            [15, 43, 19, 2, 44, 20],
                            [3, 45, 15, 13, 46, 16],
                            [1, 135, 107, 5, 136, 108],
                            [10, 74, 46, 1, 75, 47],
                            [1, 50, 22, 15, 51, 23],
                            [2, 42, 14, 17, 43, 15],
                            [5, 150, 120, 1, 151, 121],
                            [9, 69, 43, 4, 70, 44],
                            [17, 50, 22, 1, 51, 23],
                            [2, 42, 14, 19, 43, 15],
                            [3, 141, 113, 4, 142, 114],
                            [3, 70, 44, 11, 71, 45],
                            [17, 47, 21, 4, 48, 22],
                            [9, 39, 13, 16, 40, 14],
                            [3, 135, 107, 5, 136, 108],
                            [3, 67, 41, 13, 68, 42],
                            [15, 54, 24, 5, 55, 25],
                            [15, 43, 15, 10, 44, 16],
                            [4, 144, 116, 4, 145, 117],
                            [17, 68, 42],
                            [17, 50, 22, 6, 51, 23],
                            [19, 46, 16, 6, 47, 17],
                            [2, 139, 111, 7, 140, 112],
                            [17, 74, 46],
                            [7, 54, 24, 16, 55, 25],
                            [34, 37, 13],
                            [4, 151, 121, 5, 152, 122],
                            [4, 75, 47, 14, 76, 48],
                            [11, 54, 24, 14, 55, 25],
                            [16, 45, 15, 14, 46, 16],
                            [6, 147, 117, 4, 148, 118],
                            [6, 73, 45, 14, 74, 46],
                            [11, 54, 24, 16, 55, 25],
                            [30, 46, 16, 2, 47, 17],
                            [8, 132, 106, 4, 133, 107],
                            [8, 75, 47, 13, 76, 48],
                            [7, 54, 24, 22, 55, 25],
                            [22, 45, 15, 13, 46, 16],
                            [10, 142, 114, 2, 143, 115],
                            [19, 74, 46, 4, 75, 47],
                            [28, 50, 22, 6, 51, 23],
                            [33, 46, 16, 4, 47, 17],
                            [8, 152, 122, 4, 153, 123],
                            [22, 73, 45, 3, 74, 46],
                            [8, 53, 23, 26, 54, 24],
                            [12, 45, 15, 28, 46, 16],
                            [3, 147, 117, 10, 148, 118],
                            [3, 73, 45, 23, 74, 46],
                            [4, 54, 24, 31, 55, 25],
                            [11, 45, 15, 31, 46, 16],
                            [7, 146, 116, 7, 147, 117],
                            [21, 73, 45, 7, 74, 46],
                            [1, 53, 23, 37, 54, 24],
                            [19, 45, 15, 26, 46, 16],
                            [5, 145, 115, 10, 146, 116],
                            [19, 75, 47, 10, 76, 48],
                            [15, 54, 24, 25, 55, 25],
                            [23, 45, 15, 25, 46, 16],
                            [13, 145, 115, 3, 146, 116],
                            [2, 74, 46, 29, 75, 47],
                            [42, 54, 24, 1, 55, 25],
                            [23, 45, 15, 28, 46, 16],
                            [17, 145, 115],
                            [10, 74, 46, 23, 75, 47],
                            [10, 54, 24, 35, 55, 25],
                            [19, 45, 15, 35, 46, 16],
                            [17, 145, 115, 1, 146, 116],
                            [14, 74, 46, 21, 75, 47],
                            [29, 54, 24, 19, 55, 25],
                            [11, 45, 15, 46, 46, 16],
                            [13, 145, 115, 6, 146, 116],
                            [14, 74, 46, 23, 75, 47],
                            [44, 54, 24, 7, 55, 25],
                            [59, 46, 16, 1, 47, 17],
                            [12, 151, 121, 7, 152, 122],
                            [12, 75, 47, 26, 76, 48],
                            [39, 54, 24, 14, 55, 25],
                            [22, 45, 15, 41, 46, 16],
                            [6, 151, 121, 14, 152, 122],
                            [6, 75, 47, 34, 76, 48],
                            [46, 54, 24, 10, 55, 25],
                            [2, 45, 15, 64, 46, 16],
                            [17, 152, 122, 4, 153, 123],
                            [29, 74, 46, 14, 75, 47],
                            [49, 54, 24, 10, 55, 25],
                            [24, 45, 15, 46, 46, 16],
                            [4, 152, 122, 18, 153, 123],
                            [13, 74, 46, 32, 75, 47],
                            [48, 54, 24, 14, 55, 25],
                            [42, 45, 15, 32, 46, 16],
                            [20, 147, 117, 4, 148, 118],
                            [40, 75, 47, 7, 76, 48],
                            [43, 54, 24, 22, 55, 25],
                            [10, 45, 15, 67, 46, 16],
                            [19, 148, 118, 6, 149, 119],
                            [18, 75, 47, 31, 76, 48],
                            [34, 54, 24, 34, 55, 25],
                            [20, 45, 15, 61, 46, 16]
                        ], (i = {}).getRSBlocks = function(e, t) {
                            var n = function(e) {
                                switch (t) {
                                    case b.L:
                                        return d[4 * (e - 1) + 0];
                                    case b.M:
                                        return d[4 * (e - 1) + 1];
                                    case b.Q:
                                        return d[4 * (e - 1) + 2];
                                    case b.H:
                                        return d[4 * (e - 1) + 3];
                                    default:
                                        return
                                }
                            }(e);
                            if (void 0 === n) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + t;
                            for (var r, i, o = n.length / 3, a = [], s = 0; s < o; s += 1)
                                for (var l = n[3 * s + 0], c = n[3 * s + 1], u = n[3 * s + 2], f = 0; f < l; f += 1) a.push((r = u, i = void 0, (i = {}).totalCount = c, i.dataCount = r, i));
                            return a
                        }, i),
                        k = function() {
                            var n = [],
                                r = 0,
                                i = {
                                    getBuffer: function() {
                                        return n
                                    },
                                    getAt: function(e) {
                                        var t = Math.floor(e / 8);
                                        return 1 == (n[t] >>> 7 - e % 8 & 1)
                                    },
                                    put: function(e, t) {
                                        for (var n = 0; n < t; n += 1) i.putBit(1 == (e >>> t - n - 1 & 1))
                                    },
                                    getLengthInBits: function() {
                                        return r
                                    },
                                    putBit: function(e) {
                                        var t = Math.floor(r / 8);
                                        n.length <= t && n.push(0), e && (n[t] |= 128 >>> r % 8), r += 1
                                    }
                                };
                            return i
                        },
                        S = function(e) {
                            var r = e,
                                t = {
                                    getMode: function() {
                                        return 1
                                    },
                                    getLength: function() {
                                        return r.length
                                    },
                                    write: function(e) {
                                        for (var t = r, n = 0; n + 2 < t.length;) e.put(i(t.substring(n, n + 3)), 10), n += 3;
                                        n < t.length && (t.length - n == 1 ? e.put(i(t.substring(n, n + 1)), 4) : t.length - n == 2 && e.put(i(t.substring(n, n + 2)), 7))
                                    }
                                },
                                i = function(e) {
                                    for (var t = 0, n = 0; n < e.length; n += 1) t = 10 * t + o(e.charAt(n));
                                    return t
                                },
                                o = function(e) {
                                    if ("0" <= e && e <= "9") return e.charCodeAt(0) - "0".charCodeAt(0);
                                    throw "illegal char :" + e
                                };
                            return t
                        },
                        _ = function(e) {
                            var r = e,
                                t = {
                                    getMode: function() {
                                        return 2
                                    },
                                    getLength: function() {
                                        return r.length
                                    },
                                    write: function(e) {
                                        for (var t = r, n = 0; n + 1 < t.length;) e.put(45 * i(t.charAt(n)) + i(t.charAt(n + 1)), 11), n += 2;
                                        n < t.length && e.put(i(t.charAt(n)), 6)
                                    }
                                },
                                i = function(e) {
                                    if ("0" <= e && e <= "9") return e.charCodeAt(0) - "0".charCodeAt(0);
                                    if ("A" <= e && e <= "Z") return e.charCodeAt(0) - "A".charCodeAt(0) + 10;
                                    switch (e) {
                                        case " ":
                                            return 36;
                                        case "$":
                                            return 37;
                                        case "%":
                                            return 38;
                                        case "*":
                                            return 39;
                                        case "+":
                                            return 40;
                                        case "-":
                                            return 41;
                                        case ".":
                                            return 42;
                                        case "/":
                                            return 43;
                                        case ":":
                                            return 44;
                                        default:
                                            throw "illegal char :" + e
                                    }
                                };
                            return t
                        },
                        z = function(e) {
                            var n = r.stringToBytes(e);
                            return {
                                getMode: function() {
                                    return 4
                                },
                                getLength: function() {
                                    return n.length
                                },
                                write: function(e) {
                                    for (var t = 0; t < n.length; t += 1) e.put(n[t], 8)
                                }
                            }
                        },
                        A = function(e) {
                            var t = r.stringToBytesFuncs.SJIS;
                            if (!t) throw "sjis not supported.";
                            ! function() {
                                var e = t("友");
                                if (2 != e.length || 38726 != (e[0] << 8 | e[1])) throw "sjis not supported."
                            }();
                            var i = t(e);
                            return {
                                getMode: function() {
                                    return 8
                                },
                                getLength: function() {
                                    return ~~(i.length / 2)
                                },
                                write: function(e) {
                                    for (var t = i, n = 0; n + 1 < t.length;) {
                                        var r = (255 & t[n]) << 8 | 255 & t[n + 1];
                                        if (33088 <= r && r <= 40956) r -= 33088;
                                        else {
                                            if (!(57408 <= r && r <= 60351)) throw "illegal char at " + (n + 1) + "/" + r;
                                            r -= 49472
                                        }
                                        r = 192 * (r >>> 8 & 255) + (255 & r), e.put(r, 13), n += 2
                                    }
                                    if (n < t.length) throw "illegal char at " + (n + 1)
                                }
                            }
                        },
                        c = function(e) {
                            var n = e,
                                r = 0,
                                i = 0,
                                o = 0,
                                t = {
                                    read: function() {
                                        for (; o < 8;) {
                                            if (r >= n.length) {
                                                if (0 == o) return -1;
                                                throw "unexpected end of file./" + o
                                            }
                                            var e = n.charAt(r);
                                            if (r += 1, "=" == e) return o = 0, -1;
                                            e.match(/^\s$/) || (i = i << 6 | a(e.charCodeAt(0)), o += 6)
                                        }
                                        var t = i >>> o - 8 & 255;
                                        return o -= 8, t
                                    }
                                },
                                a = function(e) {
                                    if (65 <= e && e <= 90) return e - 65;
                                    if (97 <= e && e <= 122) return e - 97 + 26;
                                    if (48 <= e && e <= 57) return e - 48 + 52;
                                    if (43 == e) return 62;
                                    if (47 == e) return 63;
                                    throw "c:" + e
                                };
                            return t
                        },
                        T = function(e, t, n) {
                            for (var r, i, o, a, h, s, l, g, c = (o = r = e, a = i = t, h = new Array(r * i), s = {
                                    setPixel: function(e, t, n) {
                                        h[t * o + e] = n
                                    },
                                    write: function(e) {
                                        e.writeString("GIF87a"), e.writeShort(o), e.writeShort(a), e.writeByte(128), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(255), e.writeByte(255), e.writeByte(255), e.writeString(","), e.writeShort(0), e.writeShort(0), e.writeShort(o), e.writeShort(a), e.writeByte(0);
                                        var t = l(2);
                                        e.writeByte(2);
                                        for (var n = 0; 255 < t.length - n;) e.writeByte(255), e.writeBytes(t, n, 255), n += 255;
                                        e.writeByte(t.length - n), e.writeBytes(t, n, t.length - n), e.writeByte(0), e.writeString(";")
                                    }
                                }, l = function(e) {
                                    for (var t = 1 << e, n = 1 + (1 << e), r = e + 1, i = g(), o = 0; o < t; o += 1) i.add(String.fromCharCode(o));
                                    i.add(String.fromCharCode(t)), i.add(String.fromCharCode(n));
                                    var a, s, l, c = C(),
                                        u = (a = c, l = s = 0, {
                                            write: function(e, t) {
                                                if (e >>> t != 0) throw "length over";
                                                for (; 8 <= s + t;) a.writeByte(255 & (e << s | l)), t -= 8 - s, e >>>= 8 - s, s = l = 0;
                                                l |= e << s, s += t
                                            },
                                            flush: function() {
                                                0 < s && a.writeByte(l)
                                            }
                                        });
                                    u.write(t, r);
                                    var f = 0,
                                        d = String.fromCharCode(h[f]);
                                    for (f += 1; f < h.length;) {
                                        var p = String.fromCharCode(h[f]);
                                        f += 1, i.contains(d + p) ? d += p : (u.write(i.indexOf(d), r), i.size() < 4095 && (i.size() == 1 << r && (r += 1), i.add(d + p)), d = p)
                                    }
                                    return u.write(i.indexOf(d), r), u.write(n, r), u.flush(), c.toByteArray()
                                }, g = function() {
                                    var t = {},
                                        n = 0,
                                        r = {
                                            add: function(e) {
                                                if (r.contains(e)) throw "dup key:" + e;
                                                t[e] = n, n += 1
                                            },
                                            size: function() {
                                                return n
                                            },
                                            indexOf: function(e) {
                                                return t[e]
                                            },
                                            contains: function(e) {
                                                return void 0 !== t[e]
                                            }
                                        };
                                    return r
                                }, s), u = 0; u < t; u += 1)
                                for (var f = 0; f < e; f += 1) c.setPixel(f, u, n(f, u));
                            var d = C();
                            c.write(d);
                            for (var p, m, v, b, w, y, x = (v = m = p = 0, b = "", y = function(e) {
                                    if (!(e < 0)) {
                                        if (e < 26) return 65 + e;
                                        if (e < 52) return e - 26 + 97;
                                        if (e < 62) return e - 52 + 48;
                                        if (62 == e) return 43;
                                        if (63 == e) return 47
                                    }
                                    throw "n:" + e
                                }, (w = {}).writeByte = function(e) {
                                    for (p = p << 8 | 255 & e, m += 8, v += 1; 6 <= m;) _(p >>> m - 6), m -= 6
                                }, w.flush = function() {
                                    if (0 < m && (_(p << 6 - m), m = p = 0), v % 3 != 0)
                                        for (var e = 3 - v % 3, t = 0; t < e; t += 1) b += "="
                                }, w.toString = function() {
                                    return b
                                }, w), k = d.toByteArray(), S = 0; S < k.length; S += 1) x.writeByte(k[S]);

                            function _(e) {
                                b += String.fromCharCode(y(63 & e))
                            }
                            return x.flush(), "data:image/gif;base64," + x
                        };
                    return r
                }();
                o.stringToBytesFuncs["UTF-8"] = function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        r < 128 ? t.push(r) : r < 2048 ? t.push(192 | r >> 6, 128 | 63 & r) : r < 55296 || 57344 <= r ? t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)), t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
                    }
                    return t
                }, void 0 === (i = "function" == typeof(r = function() {
                    return o
                }) ? r.apply(t, []) : r) || (e.exports = i)
            }, function(e, t, n) {
                function f(e, t, n, r, i, o) {
                    e.is_dark(i, o) && t.rect(o * r, i * r, r, r)
                }
                var d = n(5),
                    p = n(6),
                    h = n(7);
                e.exports = function(e, t, n) {
                    var r, i, o, a, s, l = t.ratio || d.dpr,
                        c = d.create_canvas(t.size, l),
                        u = c.getContext("2d");
                    return u.scale(l, l), r = e, s = i = u, (a = o = t).back && (s.fillStyle = a.back, s.fillRect(0, 0, a.size, a.size)),
                        function(e, t, n) {
                            if (e) {
                                var r = 0 < n.rounded && n.rounded <= 100 ? p : f,
                                    i = e.module_count,
                                    o = n.size / i,
                                    a = 0;
                                n.crisp && (o = Math.floor(o), a = Math.floor((n.size - o * i) / 2)), t.translate(a, a), t.beginPath();
                                for (var s = 0; s < i; s += 1)
                                    for (var l = 0; l < i; l += 1) r(e, t, n, o, s, l);
                                t.fillStyle = n.fill, t.fill(), t.translate(-a, -a)
                            }
                        }(r, i, o), h(i, o), n ? d.canvas_to_img(c) : c
                }
            }, function(e, t) {
                function n(e, t) {
                    return e.getAttribute(t)
                }

                function r(t, n) {
                    return Object.keys(n || {}).forEach(function(e) {
                        t.setAttribute(e, n[e])
                    }), t
                }

                function i(e, t) {
                    return r(a.createElement(e), t)
                }
                var o = window,
                    a = o.document,
                    s = o.devicePixelRatio || 1,
                    l = "http://www.w3.org/2000/svg";
                e.exports = {
                    dpr: s,
                    SVG_NS: l,
                    get_attr: n,
                    create_el: i,
                    create_svg_el: function(e, t) {
                        return r(a.createElementNS(l, e), t)
                    },
                    create_canvas: function(e, t) {
                        var n = i("canvas", {
                            width: e * t,
                            height: e * t
                        });
                        return n.style.width = "".concat(e, "px"), n.style.height = "".concat(e, "px"), n
                    },
                    canvas_to_img: function(e) {
                        var t = i("img", {
                            crossOrigin: "anonymous",
                            src: e.toDataURL("image/png"),
                            width: n(e, "width"),
                            height: n(e, "height")
                        });
                        return t.style.width = e.style.width, t.style.height = e.style.height, t
                    }
                }
            }, function(e, t) {
                e.exports = function(e, t, n, r, i, o) {
                    var a, s, l, c, u, f, d, p, h, g, m, v, b, w, y, x, k, S, _, C, z = o * r,
                        A = i * r,
                        T = z + r,
                        $ = A + r,
                        M = .005 * n.rounded * r,
                        O = e.is_dark,
                        j = i - 1,
                        P = i + 1,
                        D = o - 1,
                        I = o + 1,
                        L = O(i, o),
                        H = O(j, D),
                        B = O(j, o),
                        R = O(j, I),
                        E = O(i, I),
                        q = O(P, I),
                        F = O(P, o),
                        N = O(P, D),
                        U = O(i, D),
                        Y = (a = t, {
                            m: function(e, t) {
                                return a.moveTo(e, t), this
                            },
                            l: function(e, t) {
                                return a.lineTo(e, t), this
                            },
                            a: function() {
                                return a.arcTo.apply(a, arguments), this
                            }
                        });
                    L ? (m = Y, v = z, b = A, w = T, y = $, x = M, S = !B && !E, _ = !F && !E, C = !F && !U, (k = !B && !U) ? m.m(v + x, b) : m.m(v, b), S ? m.l(w - x, b).a(w, b, w, y, x) : m.l(w, b), _ ? m.l(w, y - x).a(w, y, v, y, x) : m.l(w, y), C ? m.l(v + x, y).a(v, y, v, b, x) : m.l(v, y), k ? m.l(v, b + x).a(v, b, w, b, x) : m.l(v, b)) : (s = Y, l = z, c = A, u = T, f = $, d = M, p = B && E && R, h = F && E && q, g = F && U && N, B && U && H && s.m(l + d, c).l(l, c).l(l, c + d).a(l, c, l + d, c, d), p && s.m(u - d, c).l(u, c).l(u, c + d).a(u, c, u - d, c, d), h && s.m(u - d, f).l(u, f).l(u, f - d).a(u, f, u - d, f, d), g && s.m(l + d, f).l(l, f).l(l, f - d).a(l, f, l + d, f, d))
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    var n, r, i, o, a, s, l, c, u, f = t.mode;
                    "label" === f ? function(e, t) {
                        var n = t.size,
                            r = "bold " + .01 * t.mSize * n + "px " + t.fontname;
                        e.strokeStyle = t.back, e.lineWidth = .01 * t.mSize * n * .1, e.fillStyle = t.fontcolor, e.font = r;
                        var i = e.measureText(t.label).width,
                            o = .01 * t.mSize,
                            a = (1 - i / n) * t.mPosX * .01 * n,
                            s = (1 - o) * t.mPosY * .01 * n + .75 * t.mSize * .01 * n;
                        e.strokeText(t.label, a, s), e.fillText(t.label, a, s)
                    }(e, t) : "image" === f && (n = t.size, r = t.image.naturalWidth || 1, i = t.image.naturalHeight || 1, s = (1 - (a = (o = .01 * t.mSize) * r / i)) * t.mPosX * .01 * n, l = (1 - o) * t.mPosY * .01 * n, c = a * n, u = o * n, e.drawImage(t.image, s, l, c, u))
                }
            }, function(e, t, m) {
                var n = m(5),
                    v = n.SVG_NS,
                    b = n.get_attr,
                    w = n.create_svg_el;
                e.exports = function(e, t) {
                    var n, r, i, o, a, s, l, c, u, f, d, p = t.size,
                        h = t.mode,
                        g = w("svg", {
                            xmlns: v,
                            width: p,
                            height: p,
                            viewBox: "0 0 ".concat(p, " ").concat(p)
                        });
                    return g.style.width = "".concat(p, "px"), g.style.height = "".concat(p, "px"), t.back && g.appendChild(w("rect", {
                        x: 0,
                        y: 0,
                        width: p,
                        height: p,
                        fill: t.back
                    })), g.appendChild(w("path", {
                        d: function(e, t) {
                            if (!e) return "";
                            var n = {
                                    p: "",
                                    o: 0
                                },
                                r = e.module_count,
                                i = t.size / r;
                            t.crisp && (i = Math.floor(i), n.o = Math.floor((t.size - i * r) / 2));
                            for (var o, a, s, l, c, u, f, d, p, h, g, m, v, b, w, y, x, k, S, _, C, z, A, T, $, M, O, j, P, D, I, L, H, B, R, E, q, F, N, U, Y, Z, V = (Z = n, {
                                    m: function(e, t) {
                                        return Z.p += "M ".concat(J(e), " ").concat(J(t), " "), this
                                    },
                                    l: function(e, t) {
                                        return Z.p += "L ".concat(J(e), " ").concat(J(t), " "), this
                                    },
                                    a: function(e, t, n) {
                                        return Z.p += "A ".concat(G(n), " ").concat(G(n), " 0 0 1 ").concat(J(e), " ").concat(J(t), " "), this
                                    }
                                }), W = 0; W < r; W += 1)
                                for (var X = 0; X < r; X += 1) o = V, j = v = l = void 0, $ = (A = (s = X) * i) + i, M = (T = (a = W) * i) + i, O = .005 * t.rounded * i, P = a - 1, D = a + 1, I = s - 1, L = s + 1, H = (j = e.is_dark)(a, s), B = j(P, I), R = j(P, s), E = j(P, L), q = j(a, L), F = j(D, L), N = j(D, s), U = j(D, I), Y = j(a, I), H ? (v = o, b = A, w = T, y = $, x = M, k = O, _ = !R && !q, C = !N && !q, z = !N && !Y, (S = !R && !Y) ? v.m(b + k, w) : v.m(b, w), _ ? v.l(y - k, w).a(y, w + k, k) : v.l(y, w), C ? v.l(y, x - k).a(y - k, x, k) : v.l(y, x), z ? v.l(b + k, x).a(b, x - k, k) : v.l(b, x), S ? v.l(b, w + k).a(b + k, w, k) : v.l(b, w)) : (l = o, c = A, u = T, f = $, d = M, p = O, h = R && q && E, g = N && q && F, m = N && Y && U, R && Y && B && l.m(c + p, u).l(c, u).l(c, u + p).a(c + p, u, p), h && l.m(f, u + p).l(f, u).l(f - p, u).a(f, u + p, p), g && l.m(f - p, d).l(f, d).l(f, d - p).a(f - p, d, p), m && l.m(c, d - p).l(c, d).l(c + p, d).a(c, d - p, p));

                            function G(e) {
                                return Math.round(10 * e) / 10
                            }

                            function J(e) {
                                return Math.round(10 * e) / 10 + Z.o
                            }
                            return n.p
                        }(e, t),
                        fill: t.fill
                    })), "label" === h ? function(e, t) {
                        var n = t.size,
                            r = "bold " + .01 * t.mSize * n + "px " + t.fontname,
                            i = m(5),
                            o = t.ratio || i.dpr,
                            a = i.create_canvas(n, o).getContext("2d");
                        a.strokeStyle = t.back, a.lineWidth = .01 * t.mSize * n * .1, a.fillStyle = t.fontcolor, a.font = r;
                        var s = a.measureText(t.label).width,
                            l = .01 * t.mSize,
                            c = (1 - s / n) * t.mPosX * .01 * n,
                            u = (1 - l) * t.mPosY * .01 * n + .75 * t.mSize * .01 * n,
                            f = w("text", {
                                x: c,
                                y: u
                            });
                        Object.assign(f.style, {
                            font: r,
                            fill: t.fontcolor,
                            "paint-order": "stroke",
                            stroke: t.back,
                            "stroke-width": a.lineWidth
                        }), f.textContent = t.label, e.appendChild(f)
                    }(g, t) : "image" === h && (n = g, r = t.size, i = t.image.naturalWidth || 1, o = t.image.naturalHeight || 1, l = (1 - (s = (a = .01 * t.mSize) * i / o)) * t.mPosX * .01 * r, c = (1 - a) * t.mPosY * .01 * r, u = s * r, f = a * r, d = w("image", {
                        href: b(t.image, "src"),
                        x: l,
                        y: c,
                        width: u,
                        height: f
                    }), n.appendChild(d)), g
                }
            }], i.c = r, i.d = function(e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, i.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == $(t) && t && t.__esModule) return t;
                var n = Object.create(null);
                if (i.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) i.d(n, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return n
            }, i.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return i.d(t, "a", t), t
            }, i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, i.p = "", i(i.s = 0);

            function i(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
            }
            var n, r
        }, "object" == $(o) && "object" == $(e) ? e.exports = i() : (n = [], void 0 === (r = "function" == typeof(t = i) ? t.apply(o, n) : t) || (e.exports = r))
    }).call(this, t(35)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, k) {
    (function(e) {
        function a(e) {
            e && (x = e);
            var t = "selected";
            c("#langs option").rmAttr(t).rmProp(t), c("#langs ." + x.isoCode).attr(t, "").prop(t, !0), s(x, function(e, t) {
                c(".l10n-" + t).text(e), c(".l10n_ph-" + t).attr("placeholder", e)
            }), d.setDefaultDateFormat(x.dateFormat), c("#items .item").each(function(e) {
                c(e).find(".date").text(d.formatDate(e._item.time))
            })
        }

        function n(e, t, n) {
            var r, i, o = g.get(w);
            e[o] ? t = o : !n || (r = m.navigator.language || m.navigator.browserLanguage) && (e[r] ? t = r : 2 < r.length && e[r.substr(0, 2)] && (t = r.substr(0, 2))), e[t] || (t = "en"), (y[i = t] ? Promise.resolve(y[i]) : u.request({
                action: "get",
                l10n: [i]
            }).then(function(e) {
                return y[i] = Object.assign({}, b, e.l10n && e.l10n[i], {
                    isoCode: i
                }), y[i]
            })).then(a)
        }
        var r, t, i, o = k(2),
            s = o.each,
            l = o.isStr,
            c = o.dom,
            u = k(9),
            f = k(13),
            d = k(20),
            p = k(37),
            h = k(15),
            g = k(17),
            m = e.window,
            v = Object.assign({
                enabled: !1,
                lang: "en",
                useBrowserLang: !0
            }, h.l10n),
            b = {
                isoCode: "en",
                lang: "english",
                dateFormat: "YYYY-MM-DD HH:mm",
                details: "details",
                download: "download",
                empty: "empty",
                files: "files",
                filter: "filter",
                folders: "folders",
                grid: "grid",
                icons: "icons",
                language: "Language",
                lastModified: "Last modified",
                name: "Name",
                noMatch: "no match",
                parentDirectory: "Parent Directory",
                search: "search",
                size: "Size",
                tree: "Tree",
                view: "View"
            },
            w = "ext/l10n",
            y = {
                en: Object.assign({}, b)
            },
            x = y.en;
        v.enabled && (r = p, t = c('<div class="block">\n            <h1 class="l10n-language">Language</h1>\n            <div class="select">\n                <select id="langs"/>\n            </div>\n        </div>'), i = t.find("select").on("change", function(e) {
            var t = e.target.value;
            g.put(w, t), n(r, t, !1)
        }), s(r, function(e, t) {
            c("<option/>").attr("value", t).addCls(t).text(t + " - " + (l(e) ? e : e.lang)).appTo(i)
        }), t.appTo("#sidebar")), f.sub("view.changed", function() {
            n(p, v.lang, v.useBrowserLang)
        })
    }).call(this, k(5))
}, function(e, t, n) {
    var r = n(8).langs;
    e.exports = Object.assign({}, r)
}, function(e, t, f) {
    (function(e) {
        var t, n, r, i = f(2),
            o = i.dom,
            a = i.awaitLoad,
            s = f(13),
            l = f(15),
            c = e.window,
            u = Object.assign({
                enabled: !1,
                baseURL: "not-set",
                idSite: 0
            }, l["piwik-analytics"]);
        u.enabled && (t = ("https:" === c.location.protocol ? "https://" : "http://") + u.baseURL + "/", n = [], r = null, o("<script><\/script>").attr("src", t + "piwik.js").appTo("body"), a().then(function() {
            if (r = c.Piwik && c.Piwik.getTracker(t + "piwik.php", u.idSite))
                for (r.enableLinkTracking(); n.length;) r.trackPageView(n.shift())
        }), s.sub("location.changed", function(e) {
            var t = e.getCrumb().map(function(e) {
                return e.label
            }).join(" > ");
            r ? r.trackPageView(t) : n.push(t)
        }))
    }).call(this, f(5))
}, function(e, t, n) {
    n(40), n(41), n(42), n(43), n(45)
}, function(O, e, j) {
    (function(e) {
        function a() {
            var e, t, n, r, i, o, a, s = x.document.documentElement,
                l = s.clientWidth,
                c = s.clientHeight,
                u = C ? 0 : 20,
                f = C ? 0 : 48;
            h("#pv-container").css({
                width: l - 2 * u + "px",
                height: c - 2 * u - f + "px",
                left: u + "px",
                top: u + "px"
            }), h("#pv-spinner").css({
                left: .5 * l + "px",
                top: .5 * c + "px"
            }), C ? (h("#pv-overlay").addCls("fullscreen"), h("#pv-bar-fullscreen").find("img").attr("src", b.image("preview-no-fullscreen"))) : (h("#pv-overlay").rmCls("fullscreen"), h("#pv-bar-fullscreen").find("img").attr("src", b.image("preview-fullscreen"))), i = h("#pv-container"), o = i[0], a = i.children()[0], o && a && (e = o.offsetWidth, t = o.offsetHeight, n = a.offsetWidth, r = a.offsetHeight, h(a).css({
                left: .5 * (e - n) + "px",
                top: .5 * (t - r) + "px"
            })), p($ && $.adjust) && $.adjust()
        }

        function s(e) {
            h("#pv-buttons .bar-left").rm(), d(e, function(e) {
                h("<li></li>").addCls("bar-left").addCls("bar-label").text(e).appTo("#pv-buttons")
            })
        }

        function t() {
            var e = h("#pv-overlay .hof");
            x.clearTimeout(z), e.show(), C && (z = x.setTimeout(function() {
                return e.hide()
            }, 2e3))
        }

        function n() {
            return $ && $.moveIdx(1)
        }

        function r() {
            return $ && $.moveIdx(-1)
        }

        function i() {
            C = !C, y.put(_, C), t(), a()
        }

        function o(e) {
            e.stopPropagation(), e.preventDefault()
        }

        function l(e) {
                    if (document.querySelector("#dplayer")) {
                        return;
                    }
            var t = e.keyCode;
            27 === t ? (o(e), M()) : 8 === t || 37 === t ? (o(e), r()) : 13 === t || 32 === t || 39 === t ? (o(e), n()) : 70 === t && (o(e), i())
        }

        function c(e, t, n) {
            x.clearTimeout(T);
            var r, i = h("#pv-spinner");
            if (!e) return A = !1, void i.hide();
            A || !n ? (r = i.find(".back"), t ? r.attr("src", t).show() : r.hide(), A = !0, i.show()) : T = x.setTimeout(function() {
                return c(!0, t)
            }, n)
        }

        function u(e, t, n, r) {
            var i = Object.assign(Object.create(u.prototype), {
                items: e,
                load: n,
                adjust: r
            });
            return i.setIdx(t), i
        }
        var f = j(2),
            d = f.each,
            p = f.isFn,
            h = f.dom,
            g = f.includes,
            m = f.compact,
            v = j(13),
            b = j(14),
            w = j(15),
            y = j(17),
            x = e.window,
            k = Object.assign({
                enabled: !0
            }, w.preview),
            S = '<div id="pv-overlay">\n            <div id="pv-container"></div>\n            <div id="pv-spinner"><img class="back"/><img class="spinner" src="'.concat(b.image("spinner"), '"/></div>\n            <div id="pv-prev-area" class="hof"><img src="').concat(b.image("preview-prev"), '"/></div>\n            <div id="pv-next-area" class="hof"><img src="').concat(b.image("preview-next"), '"/></div>\n            <div id="pv-bottombar" class="clearfix hof">\n                <ul id="pv-buttons">\n                    <li id="pv-bar-close" class="bar-right bar-button"><img src="').concat(b.image("preview-close"), '"/></li>\n                    <li id="pv-bar-raw" class="bar-right"><a class="bar-button" target="_blank"><img src="').concat(b.image("preview-raw"), '"/></a></li>\n                    <li id="pv-bar-fullscreen" class="bar-right bar-button"><img src="').concat(b.image("preview-fullscreen"), '"/></li>\n                    <li id="pv-bar-next" class="bar-right bar-button"><img src="').concat(b.image("preview-next"), '"/></li>\n                    <li id="pv-bar-idx" class="bar-right bar-label"></li>\n                    <li id="pv-bar-prev" class="bar-right bar-button"><img src="').concat(b.image("preview-prev"), '"/></li>\n                </ul>\n            </div>\n        </div>'),
            _ = "ext/preview",
            C = y.get(_) || !1,
            z = null,
            A = !1,
            T = null,
            $ = null,
            M = function() {
                if (window.dplayer){
                    window.dplayer.destroy();
                    window.dplayer=null;
                }
                s([]), h("#pv-container").clr(), h("#pv-overlay").hide(), h(x).off("keydown", l)
            };
        u.prototype = {
            setIdx: function(e) {
                var t, n, r, i = this;
                this.idx = (e + this.items.length) % this.items.length, this.item = this.items[this.idx], t = this.idx + 1, n = this.items.length, h("#pv-bar-idx").text("".concat(t, "/").concat(n)).show(), r = this.item.absHref, h("#pv-bar-raw").show().find("a").attr("href", r), s([this.item.label]);
                var o = this.item;
                Promise.resolve().then(function() {
                    d(h("#pv-container *"), function(e) {
                        if (window.dplayer){
                            window.dplayer.destroy();
                            window.dplayer=null;
                        }
                        "function" == typeof e.unload && e.unload()
                    }), h("#pv-container").hide().clr(), c(!0, o.thumbSquare || o.icon, 200)
                }).then(function() {
                    return i.load(o)
                }).then(function(e) {
                    o === i.item && (h("#pv-container").clr().app(e).show(), c(!1), a())
                })
            },
            moveIdx: function(e) {
                this.setIdx(this.idx + e)
            }
        };
        O.exports = {
            setLabels: s,
            register: function(r, i, o) {
                function t(n) {
                    n.$view && g(r, n.type) && n.$view.find("a").on("click", function(e) {
                        e.preventDefault();
                        var t = m(h("#items .item").map(function(e) {
                            var t = e._item;
                            return g(r, t.type) ? t : null
                        }));
                        $ = u(t, t.indexOf(n), i, o), s([]), h("#pv-container").clr(), h("#pv-overlay").show(), h(x).on("keydown", l), a()
                    })
                }
                v.sub("view.changed", function(e) {
                    return d(e, t)
                })
            },
            get item() {
                return $ && $.item
            }
        }, k.enabled && (h(S).hide().appTo("body").on("keydown", l).on("mousemove", t).on("mousedown", t).on("click", function(e) {
            "pv-overlay" !== e.target.id && "pv-container" !== e.target.id || M()
        }).on("mousedown", o).on("mousemove", o).on("keydown", o).on("keypress", o), h("#pv-spinner").hide(), h("#pv-bar-prev, #pv-prev-area").on("click", r), h("#pv-bar-next, #pv-next-area").on("click", n), h("#pv-bar-close").on("click", M), h("#pv-bar-fullscreen").on("click", i), h(x).on("resize", a).on("load", a))
    }).call(this, j(5))
}, function(e, t, n) {
    function r() {
        var e = o("#pv-content-aud")[0];
        e && l.setLabels([l.item.label, a.formatDate(1e3 * e.duration, "m:ss")])
    }

    function i(r) {
        return new Promise(function(e) {
            var t, n = o('<audio id="pv-content-aud"/>').on("loadedmetadata", function() {
                return e(n)
            }).attr("controls", "controls");
            c.autoplay && n.attr("autoplay", "autoplay"), (t = n[0]).unload = function() {
                t.pause(), t.src = "", t.load()
            }, n.attr("src", r.absHref)
        })
    }
    var o = n(2).dom,
        a = n(20),
        s = n(15),
        l = n(40),
        c = Object.assign({
            enabled: !1,
            autoplay: !0,
            types: []
        }, s["preview-aud"]);
    c.enabled && l.register(c.types, i, r)
}, function(e, t, n) {
    function r() {
        var e, t, n, r, i = o("#pv-content-img")[0];
        i && (e = i.offsetWidth, t = [l.item.label], c.size || (n = i.naturalWidth, r = i.naturalHeight, t.push(String(n) + "x" + String(r)), t.push(String((100 * e / n).toFixed(0)) + "%")), l.setLabels(t))
    }

    function i(e) {
        return Promise.resolve(e.absHref).then(function(e) {
            return c.size ? (t = e, a.request({
                action: "get",
                thumbs: [{
                    type: "img",
                    href: t,
                    width: c.size,
                    height: 0
                }]
            }).then(function(e) {
                return e && e.thumbs && e.thumbs[0] ? e.thumbs[0] : null
            })) : e;
            var t
        }).then(function(n) {
            return new Promise(function(e) {
                var t = o('<img id="pv-content-img"/>').on("load", function() {
                    return e(t)
                }).attr("src", n)
            })
        })
    }
    var o = n(2).dom,
        a = n(9),
        s = n(15),
        l = n(40),
        c = Object.assign({
            enabled: !1,
            size: null,
            types: []
        }, s["preview-img"]);
    c.enabled && l.register(c.types, i, r)
}, function(e, t, g) {
    (function(e) {
        function t() {
            var e, t = s("#pv-content-txt")[0];
            t && (e = s("#pv-container")[0], t.style.height = e.offsetHeight + "px", c.setLabels([c.item.label, c.item.size + " bytes"]))
        }

        function n(r) {
            return i = r.absHref, new Promise(function(e, t) {
                var n = new f;
                n.open("GET", i, !0), n.onreadystatechange = function() {
                    if (n.readyState === f.DONE) try {
                        e(n.responseText || "")
                    } catch (e) {
                        t(String(e))
                    }
                }, n.send()
            }).catch(function(e) {
                return "[request failed] " + e
            }).then(function(e) {
                var t = d.styles[r.type];
                if (1 === t) return s(p).text(e);
                if (2 === t) return s(h).html(a(e));
                if (3 !== t) return s(h).text(e);
                var n = s("<code></code>").text(e);
                return u.setTimeout(function() {
                    o.el(n[0])
                }, e.length < 2e4 ? 0 : 500), s(p).app(n)
            });
            var i
        }
        var o = g(44),
            a = g(29),
            r = g(2),
            i = r.keys,
            s = r.dom,
            l = g(15),
            c = g(40),
            u = e.window,
            f = u.XMLHttpRequest,
            d = Object.assign({
                enabled: !1,
                styles: {}
            }, l["preview-txt"]),
            p = '<pre id="pv-content-txt"></pre>',
            h = '<div id="pv-content-txt"></div>';
        d.enabled && c.register(i(d.styles), n, t)
    }).call(this, g(5))
}, function(e, a, t) {
    (function(e) {
        var t, n, r, i;

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        i = function() {
            function t(e) {
                if ("string" != typeof e) throw new Error("tok: no string");
                for (var t = [], n = f.length, r = !1; e;)
                    for (var i = 0; i < n; i += 1) {
                        var o = f[i][1].exec(e);
                        if (o && 0 === o.index) {
                            var a = f[i][0];
                            if ("rex" !== a || !r) {
                                var s = o[0];
                                a === c && l.test(s) && (a = "key"), "spc" === a ? 0 <= s.indexOf("\n") && (r = !1) : r = a === u || a === c, e = e.slice(s.length), t.push([a, s]);
                                break
                            }
                        }
                    }
                return t
            }

            function e(e, t) {
                if ("undefined" != typeof document) t(document);
                else if (e) throw new Error("no doc")
            }

            function n(r) {
                e(!0, function(n) {
                    var e = t(r.textContent);
                    r.innerHTML = "", e.forEach(function(e) {
                        var t = n.createElement("span");
                        t.className = "ll-" + e[0], t.textContent = e[1], r.appendChild(t)
                    })
                })
            }

            function r(t) {
                e(!0, function(e) {
                    [].forEach.call(e.querySelectorAll(t || ".lolight"), function(e) {
                        n(e)
                    })
                })
            }
            var i = "_nam#2196f3}_num#ec407a}_str#43a047}_rex#ef6c00}_pct#666}_key#555;font-weight:bold}_com#aaa;font-style:italic}".replace(/_/g, ".ll-").replace(/#/g, "{color:#"),
                l = /^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/,
                c = "nam",
                u = "num",
                f = [
                    [u, /#([0-9a-f]{6}|[0-9a-f]{3})\b/],
                    ["com", /(\/\/|#).*?(?=\n|$)/],
                    ["com", /\/\*[\s\S]*?\*\//],
                    ["com", /<!--[\s\S]*?-->/],
                    ["rex", /\/(\\\/|[^\n])*?\//],
                    ["str", /(['"`])(\\\1|[\s\S])*?\1/],
                    [u, /[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?/],
                    ["pct", /[\\.,:;+\-*\/=<>()[\]{}|?!&@~]/],
                    ["spc", /\s+/],
                    [c, /[\w$]+/],
                    ["unk", /./]
                ];
            return e(!1, function(e) {
                var t = e.querySelector("head"),
                    n = e.createElement("style");
                n.textContent = i, t.insertBefore(n, t.firstChild), /^(i|c|loade)/.test(e.readyState) ? r() : e.addEventListener("DOMContentLoaded", function() {
                    r()
                })
            }), r.tok = t, r.el = n, r
        }, "object" == o(a) && "object" == o(e) ? e.exports = i() : (n = [], void 0 === (r = "function" == typeof(t = i) ? t.apply(a, n) : t) || (e.exports = r))
    }).call(this, t(35)(e))
}, function(e, t, n) {
    function r() {
        var e, t, n, r = o("#pv-content-vid")[0];
        r && (e = r.offsetWidth, t = r.videoWidth, n = r.videoHeight)
    }

    function i(r) {
        return new Promise(function(e) {
            var fileurl = r.absHref;
            var filepath = fileurl.slice(0,fileurl.lastIndexOf('/'));
            var filename = fileurl.slice(fileurl.lastIndexOf('/')+1);
            var filenotype = fileurl.slice(fileurl.lastIndexOf('/')+1,fileurl.lastIndexOf('.'));
            var filetype = fileurl.slice(fileurl.lastIndexOf('.')+1);
            var filem3u8 = filepath+'/__'+filename+'__/video.m3u8';
            var filesub = filepath+'/'+filenotype+'.vtt';
            function checkhls(m3u8,videourl,islive=false) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status == 200) {
                            console.log('play m3u8');
                            newPlayer(m3u8,islive);
                        } else {
                            console.log('play file');
                            newPlayer(videourl,islive);
                        }
                    }
                }
                xmlhttp.open("GET", m3u8, true);
                xmlhttp.send();
            }
            function showPlayer(){
                document.querySelector("#pv-container").classList.remove('hidden');
                document.querySelector("#pv-spinner").style.display = 'none';
                var dp = document.createElement('div');
                dp.id = 'dplayer';
                dp.style.cssText = 'width:100%;height:100%';
                document.querySelector("#pv-container").appendChild(dp);
            }
            function newPlayer(videourl,islive=false,videotype='auto'){
                showPlayer();
                window.dplayer = new DPlayer({
                    container: document.querySelector("#dplayer"),
                    live: islive,
                    autoplay: true,
                    mutex: true,
                    video: {
                        url: videourl,
                        type: videotype,
                    },
                    subtitle: {
                        url: filesub,
                        type: 'webvtt'
                    },
                });
                a.setLabels([a.item.label],'','');
            }
            if(fileurl.slice(-9) == '.live.flv'){
                console.log('live true');
                    var liveurl = location.origin+'/live/'+filename.replace('.live.flv','.flv');
                var livem3u8 = location.origin+'/live/'+filename.replace('.live.flv','.m3u8');
                checkhls(livem3u8,liveurl,true);
            } else {
                console.log('live false');
                checkhls(filem3u8,fileurl);
                    }
        })
    }
    var o = n(2).dom,
        a = n(15),
        s = n(40),
        l = Object.assign({
            enabled: !1,
            autoplay: !0,
            types: []
        }, a["preview-vid"]);
    l.enabled && s.register(l.types, i, r)
}, function(e, t, n) {
    function r(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : "";
        t !== _ && ((_ = t) ? (s.addCls("pending"), h.request({
            action: "get",
            search: {
                href: m.getAbsHref(),
                pattern: t,
                ignorecase: x.ignorecase
            }
        }).then(function(e) {
            s.rmCls("pending"), y.setHint("noMatch"), y.setItems(u(e.search, function(e) {
                return w.get(e)
            }))
        })) : y.setLocation())
    }

    function i() {
        S ? (s.addCls("active"), l[0].focus(), r(d(l.val(), x.advanced))) : (r(), s.rmCls("active"))
    }

    function o() {
        S = !S, i()
    }

    function a() {
        S = !1, l.val(""), i()
    }
    var s, l, c = n(2),
        u = c.map,
        f = c.debounce,
        d = c.parsePattern,
        p = c.dom,
        h = n(9),
        g = n(13),
        m = n(21),
        v = n(14),
        b = n(15),
        w = n(23),
        y = n(19),
        x = Object.assign({
            enabled: !1,
            advanced: !1,
            debounceTime: 300,
            ignorecase: !0
        }, b.search),
        k = '<div id="search" class="tool">\n            <img src="'.concat(v.image("search"), '" alt="search"/>\n            <input class="l10n_ph-search" type="text" value=""/>\n        </div>'),
        S = !1,
        _ = "";
    x.enabled && (s = p(k).appTo("#toolbar"), l = s.find("input"), s.find("img").on("click", o), l.on("keyup", f(i, x.debounceTime)), g.sub("location.changed", a))
}, function(e, t, A) {
    (function(e) {
        function n() {
            var e = v("#items .item.selected").map(function(e) {
                return e._item
            });
            u.pub("selection", e)
        }

        function g(e) {
            var t = v(e);
            if (!t.length || t.isHidden()) return null;
            var n = t[0].getBoundingClientRect();
            return {
                l: n.left,
                t: n.top,
                r: n.right,
                b: n.bottom
            }
        }

        function m(e) {
            var t = v("#content")[0],
                n = g(t);
            return {
                x: e.pageX - n.l + t.scrollLeft,
                y: e.pageY - n.t + t.scrollTop
            }
        }

        function i(e) {
            var t, n, r, i, o, a, s = m(e),
                l = s.x,
                c = s.y,
                u = S(C, l),
                f = S(z, c),
                d = _(C - l),
                p = _(z - c),
                h = e.ctrlKey || e.metaKey;
            !h && d < 4 && p < 4 || (h || v("#items .item").rmCls("selected"), y.addCls("drag-select"), x.show().css({
                left: u + "px",
                top: f + "px",
                width: d + "px",
                height: p + "px"
            }), t = g(x), n = v("#items .item:not(.folder-parent)"), a = (r = n)[0], i = g(a), o = a && a._rect, i && o && i.l === o.l && i.t === o.t && i.r === o.r && i.b === o.b || r.each(function(e) {
                e._rect = g(e)
            }), n.rmCls("selecting").each(function(e) {
                ! function(e, t) {
                    if (!e || !t) return !1;
                    var n = k(e.l, t.l),
                        r = S(e.r, t.r),
                        i = k(e.t, t.t),
                        o = S(e.b, t.b);
                    return n <= r && i <= o
                }(t, e._rect) || v(e).addCls("selecting")
            }))
        }

        function o(e) {
            w.off("mousemove", i).off("mouseup", o), i(e), v("#items .item.selecting.selected").rmCls("selecting").rmCls("selected"), v("#items .item.selecting").rmCls("selecting").addCls("selected"), n(), y.rmCls("drag-select"), x.hide(), e.stopPropagation(), e.preventDefault()
        }

        function t(e) {
            var t, n, r;
            0 !== e.button || e.offsetX >= v("#content")[0].offsetWidth - 16 || (n = (t = m(e)).x, r = t.y, C = n, z = r, w.on("mousemove", i).on("mouseup", o), i(e), e.preventDefault())
        }

        function r(e) {
            (function(e) {
                for (; !e._item && e.parentNode;) e = e.parentNode;
                return e._item
            })(e.target).$view.tglCls("selected"), n(), e.stopPropagation(), e.preventDefault()
        }

        function a(e) {
            e.$view && !e.isCurrentParentFolder() && v(b).on("click", r).appTo(e.$view.find("a"))
        }

        function s(e, t) {
            h.checkboxes && c(e, a), c(t, function(e) {
                e.$view && e.$view.rmCls("selected")
            }), n()
        }
        var l = A(2),
            c = l.each,
            v = l.dom,
            u = A(13),
            f = A(14),
            d = A(15),
            p = e.window.document,
            h = Object.assign({
                enabled: !1,
                clickndrag: !1,
                checkboxes: !1
            }, d.select),
            b = '<span class="selector">\n            <img src="'.concat(f.image("selected"), '" alt="selected"/>\n        </span>'),
            w = v(p),
            y = v("html"),
            x = v('<div id="selection-rect"></div>'),
            k = Math.max,
            S = Math.min,
            _ = Math.abs,
            C = 0,
            z = 0;
        h.enabled && (h.clickndrag || h.checkboxes) && (u.sub("view.changed", s), h.clickndrag && (x.hide().appTo("#content"), v("#content").on("mousedown", t).on("drag", function(e) {
            return e.preventDefault()
        }).on("dragstart", function(e) {
            return e.preventDefault()
        })))
    }).call(this, A(5))
}, function(e, t, n) {
    function f(e) {
        return e.isFolder() ? v.folders : 1
    }

    function r(e, t) {
        var s, l, c, u, n = p("#items li.header a"),
            r = p("#items li.header a." + x[e]),
            i = (s = y[e], l = t, c = v.ignorecase, u = v.natural, function(e, t) {
                var n = e._item,
                    r = t._item,
                    i = f(n) - f(r);
                if (0 !== i) return i;
                var o = n[s],
                    a = r[s];
                return (isNaN(o) || isNaN(a)) && (o = String(o), a = String(a), c && (o = o.toLowerCase(), a = a.toLowerCase())), i = (u ? g : h)(o, a), l ? -i : i
            });
        m.put(b, {
            column: e,
            reverse: t
        }), n.rmCls("ascending").rmCls("descending"), r.addCls(t ? "descending" : "ascending"), p(d(p("#items .item:not(.folder-parent)")).sort(i)).appTo("#items")
    }

    function i() {
        var e = m.get(b),
            t = e && e.column || v.column,
            n = e && e.reverse || v.reverse;
        r(t, n)
    }
    var o, a = n(2),
        s = a.each,
        d = a.toArray,
        p = a.dom,
        h = a.cmp,
        g = a.naturalCmp,
        l = n(13),
        c = n(14),
        u = n(15),
        m = n(17),
        v = Object.assign({
            enabled: !1,
            column: 0,
            reverse: !1,
            ignorecase: !0,
            natural: !1,
            folders: 0
        }, u.sort),
        b = "ext/sort",
        w = '<img src="'.concat(c.image("sort"), '" class="sort" alt="sort order"/>'),
        y = {
            0: "label",
            1: "time",
            2: "size"
        },
        x = {
            0: "label",
            1: "date",
            2: "size"
        };
    v.enabled && (o = p("#items li.header"), s(x, function(e, t) {
        var n = "0" === t ? "app" : "pre";
        o.find("a." + e)[n](w).on("click", function(e) {
            r(t, p(e.currentTarget).hasCls("ascending")), e.preventDefault()
        })
    }), l.sub("view.changed", i))
}, function(e, t, n) {
    function r(r) {
        function e(n) {
            o = o.then(function() {
                return e = r.slice(n, n + i), t = l(e, function(e) {
                    return {
                        type: e.type,
                        href: e.href,
                        width: Math.round(p.size * e.ratio),
                        height: p.size
                    }
                }), u.request({
                    action: "get",
                    thumbs: t
                }).then(function(n) {
                    s(e, function(e, t) {
                        e.callback(n && n.thumbs ? n.thumbs[t] : null)
                    })
                });
                var e, t
            })
        }
        for (var t = r.length, i = p.chunksize, o = Promise.resolve(), n = 0; n < t; n += i) e(n)
    }

    function i(e) {
        var t = [];
        s(e, function(e) {
            return function(e, t) {
                var n = null;
                if (c(p.img, t.type)) n = "img";
                else if (c(p.mov, t.type)) n = "mov";
                else {
                    if (!c(p.doc, t.type)) return;
                    n = "doc"
                }
                t.thumbSquare ? t.$view.find(".icon.square img").addCls("thumb").attr("src", t.thumbSquare) : e.push({
                    type: n,
                    href: t.absHref,
                    ratio: 1,
                    callback: function(e) {
                        e && t.$view && (t.thumbSquare = e, t.$view.find(".icon.square img").addCls("thumb").attr("src", e))
                    }
                }), t.thumbRational ? t.$view.find(".icon.landscape img").addCls("thumb").attr("src", t.thumbRational) : e.push({
                    type: n,
                    href: t.absHref,
                    ratio: 4 / 3,
                    callback: function(e) {
                        e && t.$view && (t.thumbRational = e, t.$view.find(".icon.landscape img").addCls("thumb").attr("src", e))
                    }
                })
            }(t, e)
        }), r(t)
    }

    function o(e) {
        setTimeout(function() {
            return i(e)
        }, p.delay)
    }
    var a = n(2),
        s = a.each,
        l = a.map,
        c = a.includes,
        u = n(9),
        f = n(13),
        d = n(15),
        p = Object.assign({
            enabled: !1,
            img: ["img-bmp", "img-gif", "img-ico", "img-jpg", "img-png"],
            mov: ["vid-avi", "vid-flv", "vid-mkv", "vid-mov", "vid-mp4", "vid-mpg", "vid-webm"],
            doc: ["x-pdf", "x-ps"],
            delay: 1,
            size: 100,
            exif: !1,
            chunksize: 20
        }, d.thumbnails);
    p.enabled && f.sub("view.changed", o)
}, function(e, t, a) {
    (function(e) {
        function t(e) {
            var t = e.getCrumb().map(function(e) {
                    return e.label
                }),
                n = t.join(" > ");
            1 < t.length && (n = t[t.length - 1] + " - " + n), i.title = n
        }
        var n = a(13),
            r = a(15),
            i = e.window.document,
            o = Object.assign({
                enabled: !1
            }, r.title);
        o.enabled && n.sub("location.changed", t)
    }).call(this, a(5))
}, function(e, t, n) {
    function s(e) {
        var t = function(e) {
            for (; !e._item && e.parentNode;) e = e.parentNode;
            return e._item
        }(e.target);
        "unknown" === t._treeState ? t.fetchContent().then(function() {
            t._treeState = "open", x(t)
        }) : "open" === t._treeState ? (t._treeState = "closed", t._$tree.rmCls("open").addCls("closed")) : "closed" === t._treeState && (t._treeState = "open", t._$tree.rmCls("closed").addCls("open"))
    }

    function l(e, t) {
        var n = e.label,
            r = t.label;
        return v.ignorecase && (n = n.toLowerCase(), r = r.toLowerCase()), (v.naturalSort ? f : a)(n, r)
    }

    function r() {
        m.get(y) ? (u("#view-tree").addCls("active"), u("#tree").show()) : (u("#view-tree").rmCls("active"), u("#tree").hide())
    }

    function i(e) {
        (function e(t) {
            return t._treeState = "open", t.fetchContent().then(function() {
                return t.parent ? e(t.parent) : t
            })
        })(e).then(function(e) {
            u("#tree").clr().app(x(e)), r()
        })
    }
    var o = n(2),
        c = o.each,
        u = o.dom,
        a = o.cmp,
        f = o.naturalCmp,
        d = n(13),
        p = n(21),
        h = n(14),
        g = n(15),
        m = n(17),
        v = Object.assign({
            enabled: !1,
            show: !0,
            maxSubfolders: 50,
            naturalSort: !1,
            ignorecase: !0
        }, g.tree),
        b = '<div class="item folder">\n            <span class="indicator">\n                <img src="'.concat(h.image("tree-indicator"), '"/>\n            </span>\n            <a>\n                <span class="icon"><img src="').concat(h.icon("folder"), '"/></span>\n                <span class="label"></span>\n            </a>\n        </span>'),
        w = '<div class="block">\n            <h1 class="l10n-tree">Tree</h1>\n            <div id="view-tree" class="button view">\n                <img src="'.concat(h.image("tree-toggle"), '" alt="view-tree"/>\n            </div>\n        </div>'),
        y = "ext/tree",
        x = function t(e) {
            var n, r = e.getSubfolders(),
                i = r.length,
                o = v.maxSubfolders,
                a = u(b);
            return a.find(".indicator").on("click", s), a.find(".label").text(e.label), p.setLink(a.find("a"), e), e.isCurrentFolder() && a.addCls("active"), e.isManaged || a.find(".icon img").attr("src", h.icon("folder-page")), e._treeState = e._treeState || "none", e.isManaged && !e.isContentFetched ? e._treeState = "unknown" : i || (e._treeState = "none"), a.addCls(e._treeState), i && (n = u('<div class="content"></div>').appTo(a), r.sort(l), c(r.slice(0, o), function(e) {
                return n.app(t(e))
            }), o < i && n.app('<div class="summary">… '.concat(i - o, " more subfolders</div>"))), e._$tree && e._$tree.rpl(a), (e._$tree = a)[0]._item = e, a
        };
    v.enabled && (u('<div id="tree"></div>').hide().appTo("#mainrow"), u(w).appTo("#sidebar").find("#view-tree").on("click", function(e) {
        m.put(y, !m.get(y)), r(), d.pub("resize"), e.preventDefault()
    }), "boolean" != typeof m.get(y) && m.put(y, v.show), r(), d.sub("location.changed", i))
}, function(e, t, d) {
    (function(e) {
        function t(e, t, n, r) {
            var i = a('<li class="test">\n            <span class="label"></span>\n            <span class="result"></span>\n            <div class="info"></div>\n        </li>').appTo("#tests");
            i.find(".label").text(e), i.find(".result").addCls(n ? "passed" : "failed").text(r || (n ? "yes" : "no")), i.find(".info").html(t)
        }

        function n() {
            e.window.location.reload()
        }

        function r() {
            l.request({
                action: "login",
                pass: a("#pass").val()
            }).then(n)
        }

        function i() {
            l.request({
                action: "logout"
            }).then(n)
        }

        function o(e) {
            13 === e.which && r()
        }
        var a = d(2).dom,
            s = d(8),
            l = d(9),
            c = d(14),
            u = '<div id="support">\n            Show your support with a donation!\n            <div class="paypal">\n                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">\n                    <input type="hidden" name="cmd" value="_s-xclick"/>\n                    <input type="hidden" name="hosted_button_id" value="8WSPKWT7YBTSQ"/>\n                    <input type="image" src="'.concat(c.image("paypal"), '" name="submit" alt="PayPal"/>\n                </form>\n            </div>\n        </div>'),
            f = s.setup;
        a(u).appTo("#content"), a('<div id="login-wrapper">\n            <input id="pass" type="password" placeholder="password"/>\n            <span id="login">login</span>\n            <span id="logout">logout</span>\n            <div id="hint">\n                The preset password is the empty string, just click login.\n                Change it in \'_h5ai/private/conf/options.json\'.\n            </div>\n        </div>').appTo("#content"), f.AS_ADMIN ? (a("#pass").rm(), a("#login").rm(), a("#logout").on("click", i)) : (a("#pass").on("keydown", o)[0].focus(), a("#login").on("click", r), a("#logout").rm()), s.options.hasCustomPasshash && a("#hint").rm(), f.AS_ADMIN && (a('<ul id="tests"></ul>').appTo("#content"), t("h5ai version", "Only green if this is an official h5ai release", /^\d+\.\d+\.\d+$/.test(f.VERSION), f.VERSION), t("Index file found", "Add <code>" + f.INDEX_HREF + "</code> to your index file list", f.INDEX_HREF), t("Options parsable", "File <code>options.json</code> is readable and syntax is correct", null !== s.options), t("Types parsable", "File <code>types.json</code> is readable and syntax is correct", null !== s.types), t("Server software", "Server is one of apache, lighttpd, nginx or cherokee", f.HAS_SERVER, f.SERVER_NAME + " " + f.SERVER_VERSION), t("PHP version", "PHP version &gt;= " + f.MIN_PHP_VERSION, !0, f.PHP_VERSION), t("PHP arch", "64-bit required to correctly display file/folder sizes &gt; ~2GB", "64-bit" === f.PHP_ARCH, f.PHP_ARCH), t("Public Cache directory", "Web server has write access", f.HAS_WRITABLE_CACHE_PUB), t("Private Cache directory", "Web server has write access", f.HAS_WRITABLE_CACHE_PRV), t("Image thumbs", "PHP GD extension with JPEG support available", f.HAS_PHP_JPEG), t("Use EXIF thumbs", "PHP EXIF extension available", f.HAS_PHP_EXIF), t("Movie thumbs", "Command line program <code>avconv</code> or <code>ffmpeg</code> available", f.HAS_CMD_AVCONV || f.HAS_CMD_FFMPEG), t("PDF thumbs", "Command line program <code>convert</code> or <code>gm</code> available", f.HAS_CMD_CONVERT || f.HAS_CMD_GM), t("Shell tar", "Command line program <code>tar</code> available", f.HAS_CMD_TAR), t("Shell zip", "Command line program <code>zip</code> available", f.HAS_CMD_ZIP), t("Shell du", "Command line program <code>du</code> available", f.HAS_CMD_DU))
    }).call(this, d(5))
}]);