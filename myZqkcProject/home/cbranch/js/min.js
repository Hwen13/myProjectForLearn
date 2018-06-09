var addComment = {
	moveForm: function(a, b, c, d) {
		var e, f = this,
			g = f.I(a),
			h = f.I(c),
			i = f.I("cancel-comment-reply-link"),
			j = f.I("comment_parent"),
			k = f.I("comment_post_ID");
		if (g && h && i && j) {
			f.respondId = c, d = d || !1, f.I("wp-temp-form-div") || (e = document.createElement("div"), e.id = "wp-temp-form-div", e.style.display = "none", h.parentNode.insertBefore(e, h)), g.parentNode.insertBefore(h, g.nextSibling), k && d && (k.value = d), j.value = b, i.style.display = "", i.onclick = function() {
				var a = addComment,
					b = a.I("wp-temp-form-div"),
					c = a.I(a.respondId);
				if (b && c) return a.I("comment_parent").value = "0", b.parentNode.insertBefore(c, b), b.parentNode.removeChild(b), this.style.display = "none", this.onclick = null, !1
			};
			try {
				f.I("comment").focus()
			} catch (l) {}
			return !1
		}
	},
	I: function(a) {
		return document.getElementById(a)
	}
};;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
window.Modernizr = function(e, t, n) {
	function A(e) {
		f.cssText = e
	}

	function O(e, t) {
		return A(p.join(e + ";") + (t || ""))
	}

	function M(e, t) {
		return typeof e === t
	}

	function _(e, t) {
		return !!~("" + e).indexOf(t)
	}

	function D(e, t) {
		for (var r in e) {
			var i = e[r];
			if (!_(i, "-") && f[i] !== n) return t == "pfx" ? i : !0
		}
		return !1
	}

	function P(e, t, r) {
		for (var i in e) {
			var s = t[e[i]];
			if (s !== n) return r === !1 ? e[i] : M(s, "function") ? s.bind(r || t) : s
		}
		return !1
	}

	function H(e, t, n) {
		var r = e.charAt(0).toUpperCase() + e.slice(1),
			i = (e + " " + v.join(r + " ") + r).split(" ");
		if (M(t, "string") || M(t, "undefined")) return D(i, t);
		i = (e + " " + m.join(r + " ") + r).split(" ");
		return P(i, t, n)
	}

	function B() {
		i.input = function(n) {
			for (var r = 0, i = n.length; r < i; r++) w[n[r]] = n[r] in l;
			w.list && (w.list = !! t.createElement("datalist") && !! e.HTMLDataListElement);
			return w
		}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
		i.inputtypes = function(e) {
			for (var r = 0, i, s, u, a = e.length; r < a; r++) {
				l.setAttribute("type", s = e[r]);
				i = l.type !== "text";
				if (i) {
					l.value = c;
					l.style.cssText = "position:absolute;visibility:hidden;";
					if (/^range$/.test(s) && l.style.WebkitAppearance !== n) {
						o.appendChild(l);
						u = t.defaultView;
						i = u.getComputedStyle && u.getComputedStyle(l, null).WebkitAppearance !== "textfield" && l.offsetHeight !== 0;
						o.removeChild(l)
					} else /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = l.checkValidity && l.checkValidity() === !1 : i = l.value != c)
				}
				b[e[r]] = !! i
			}
			return b
		}("search tel url email datetime date month week time datetime-local number range color".split(" "))
	}
	var r = "2.6.2",
		i = {}, s = !0,
		o = t.documentElement,
		u = "modernizr",
		a = t.createElement(u),
		f = a.style,
		l = t.createElement("input"),
		c = ":)",
		h = {}.toString,
		p = " -webkit- -moz- -o- -ms- ".split(" "),
		d = "Webkit Moz O ms",
		v = d.split(" "),
		m = d.toLowerCase().split(" "),
		g = {
			svg: "http://www.w3.org/2000/svg"
		}, y = {}, b = {}, w = {}, E = [],
		S = E.slice,
		x, T = function(e, n, r, i) {
			var s, a, f, l, c = t.createElement("div"),
				h = t.body,
				p = h || t.createElement("body");
			if (parseInt(r, 10))
				while (r--) {
					f = t.createElement("div");
					f.id = i ? i[r] : u + (r + 1);
					c.appendChild(f)
				}
			s = ["&#173;", '<style id="s', u, '">', e, "</style>"].join("");
			c.id = u;
			(h ? c : p).innerHTML += s;
			p.appendChild(c);
			if (!h) {
				p.style.background = "";
				p.style.overflow = "hidden";
				l = o.style.overflow;
				o.style.overflow = "hidden";
				o.appendChild(p)
			}
			a = n(c, e);
			if (!h) {
				p.parentNode.removeChild(p);
				o.style.overflow = l
			} else c.parentNode.removeChild(c);
			return !!a
		}, N = function(t) {
			var n = e.matchMedia || e.msMatchMedia;
			if (n) return n(t).matches;
			var r;
			T("@media " + t + " { #" + u + " { position: absolute; } }", function(t) {
				r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
			});
			return r
		}, C = function() {
			function r(r, i) {
				i = i || t.createElement(e[r] || "div");
				r = "on" + r;
				var s = r in i;
				if (!s) {
					i.setAttribute || (i = t.createElement("div"));
					if (i.setAttribute && i.removeAttribute) {
						i.setAttribute(r, "");
						s = M(i[r], "function");
						M(i[r], "undefined") || (i[r] = n);
						i.removeAttribute(r)
					}
				}
				i = null;
				return s
			}
			var e = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			return r
		}(),
		k = {}.hasOwnProperty,
		L;
	!M(k, "undefined") && !M(k.call, "undefined") ? L = function(e, t) {
		return k.call(e, t)
	} : L = function(e, t) {
		return t in e && M(e.constructor.prototype[t], "undefined")
	};
	Function.prototype.bind || (Function.prototype.bind = function(t) {
		var n = this;
		if (typeof n != "function") throw new TypeError;
		var r = S.call(arguments, 1),
			i = function() {
				if (this instanceof i) {
					var e = function() {};
					e.prototype = n.prototype;
					var s = new e,
						o = n.apply(s, r.concat(S.call(arguments)));
					return Object(o) === o ? o : s
				}
				return n.apply(t, r.concat(S.call(arguments)))
			};
		return i
	});
	y.flexbox = function() {
		return H("flexWrap")
	};
	y.canvas = function() {
		var e = t.createElement("canvas");
		return !!e.getContext && !! e.getContext("2d")
	};
	y.canvastext = function() {
		return !!i.canvas && !! M(t.createElement("canvas").getContext("2d").fillText, "function")
	};
	y.webgl = function() {
		return !!e.WebGLRenderingContext
	};
	y.touch = function() {
		var n;
		"ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : T(["@media (", p.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
			n = e.offsetTop === 9
		});
		return n
	};
	y.geolocation = function() {
		return "geolocation" in navigator
	};
	y.postmessage = function() {
		return !!e.postMessage
	};
	y.websqldatabase = function() {
		return !!e.openDatabase
	};
	y.indexedDB = function() {
		return !!H("indexedDB", e)
	};
	y.hashchange = function() {
		return C("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
	};
	y.history = function() {
		return !!e.history && !! history.pushState
	};
	y.draganddrop = function() {
		var e = t.createElement("div");
		return "draggable" in e || "ondragstart" in e && "ondrop" in e
	};
	y.websockets = function() {
		return "WebSocket" in e || "MozWebSocket" in e
	};
	y.rgba = function() {
		A("background-color:rgba(150,255,150,.5)");
		return _(f.backgroundColor, "rgba")
	};
	y.hsla = function() {
		A("background-color:hsla(120,40%,100%,.5)");
		return _(f.backgroundColor, "rgba") || _(f.backgroundColor, "hsla")
	};
	y.multiplebgs = function() {
		A("background:url(https://),url(https://),red url(https://)");
		return /(url\s*\(.*?){3}/.test(f.background)
	};
	y.backgroundsize = function() {
		return H("backgroundSize")
	};
	y.borderimage = function() {
		return H("borderImage")
	};
	y.borderradius = function() {
		return H("borderRadius")
	};
	y.boxshadow = function() {
		return H("boxShadow")
	};
	y.textshadow = function() {
		return t.createElement("div").style.textShadow === ""
	};
	y.opacity = function() {
		O("opacity:.55");
		return /^0.55$/.test(f.opacity)
	};
	y.cssanimations = function() {
		return H("animationName")
	};
	y.csscolumns = function() {
		return H("columnCount")
	};
	y.cssgradients = function() {
		var e = "background-image:",
			t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
			n = "linear-gradient(left top,#9f9, white);";
		A((e + "-webkit- ".split(" ").join(t + e) + p.join(n + e)).slice(0, -e.length));
		return _(f.backgroundImage, "gradient")
	};
	y.cssreflections = function() {
		return H("boxReflect")
	};
	y.csstransforms = function() {
		return !!H("transform")
	};
	y.csstransforms3d = function() {
		var e = !! H("perspective");
		e && "webkitPerspective" in o.style && T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
			e = t.offsetLeft === 9 && t.offsetHeight === 3
		});
		return e
	};
	y.csstransitions = function() {
		return H("transition")
	};
	y.fontface = function() {
		var e;
		T('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
			var i = t.getElementById("smodernizr"),
				s = i.sheet || i.styleSheet,
				o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
			e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
		});
		return e
	};
	y.generatedcontent = function() {
		var e;
		T(["#", u, "{font:0/0 a}#", u, ':after{content:"', c, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
			e = t.offsetHeight >= 3
		});
		return e
	};
	y.video = function() {
		var e = t.createElement("video"),
			n = !1;
		try {
			if (n = !! e.canPlayType) {
				n = new Boolean(n);
				n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "");
				n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "");
				n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
			}
		} catch (r) {}
		return n
	};
	y.audio = function() {
		var e = t.createElement("audio"),
			n = !1;
		try {
			if (n = !! e.canPlayType) {
				n = new Boolean(n);
				n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "");
				n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, "");
				n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "");
				n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
			}
		} catch (r) {}
		return n
	};
	y.localstorage = function() {
		try {
			localStorage.setItem(u, u);
			localStorage.removeItem(u);
			return !0
		} catch (e) {
			return !1
		}
	};
	y.sessionstorage = function() {
		try {
			sessionStorage.setItem(u, u);
			sessionStorage.removeItem(u);
			return !0
		} catch (e) {
			return !1
		}
	};
	y.webworkers = function() {
		return !!e.Worker
	};
	y.applicationcache = function() {
		return !!e.applicationCache
	};
	y.svg = function() {
		return !!t.createElementNS && !! t.createElementNS(g.svg, "svg").createSVGRect
	};
	y.inlinesvg = function() {
		var e = t.createElement("div");
		e.innerHTML = "<svg/>";
		return (e.firstChild && e.firstChild.namespaceURI) == g.svg
	};
	y.smil = function() {
		return !!t.createElementNS && /SVGAnimate/.test(h.call(t.createElementNS(g.svg, "animate")))
	};
	y.svgclippaths = function() {
		return !!t.createElementNS && /SVGClipPath/.test(h.call(t.createElementNS(g.svg, "clipPath")))
	};
	for (var j in y)
		if (L(y, j)) {
			x = j.toLowerCase();
			i[x] = y[j]();
			E.push((i[x] ? "" : "no-") + x)
		}
	i.input || B();
	i.addTest = function(e, t) {
		if (typeof e == "object")
			for (var r in e) L(e, r) && i.addTest(r, e[r]);
		else {
			e = e.toLowerCase();
			if (i[e] !== n) return i;
			t = typeof t == "function" ? t() : t;
			typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e);
			i[e] = t
		}
		return i
	};
	A("");
	a = l = null;
	i._version = r;
	i._prefixes = p;
	i._domPrefixes = m;
	i._cssomPrefixes = v;
	i.mq = N;
	i.hasEvent = C;
	i.testProp = function(e) {
		return D([e])
	};
	i.testAllProps = H;
	i.testStyles = T;
	i.prefixed = function(e, t, n) {
		return t ? H(e, t, n) : H(e, "pfx")
	};
	o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + E.join(" ") : "");
	return i
}(this, this.document);
(function(e, t, n) {
	function r(e) {
		return "[object Function]" == d.call(e)
	}

	function i(e) {
		return "string" == typeof e
	}

	function s() {}

	function o(e) {
		return !e || "loaded" == e || "complete" == e || "uninitialized" == e
	}

	function u() {
		var e = v.shift();
		m = 1, e ? e.t ? h(function() {
			("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
		}, 0) : (e(), u()) : m = 0
	}

	function a(e, n, r, i, s, a, f) {
		function l(t) {
			if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
				"img" != e && h(function() {
					b.removeChild(c)
				}, 50);
				for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
			}
		}
		var f = f || k.errorTimeout,
			c = t.createElement(e),
			d = 0,
			g = 0,
			w = {
				t: r,
				s: n,
				e: s,
				a: a,
				x: f
			};
		1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
			l.call(this, g)
		}, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
	}

	function f(e, t, n, r, s) {
		return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
	}

	function l() {
		var e = k;
		return e.loader = {
			load: f,
			i: 0
		}, e
	}
	var c = t.documentElement,
		h = e.setTimeout,
		p = t.getElementsByTagName("script")[0],
		d = {}.toString,
		v = [],
		m = 0,
		g = "MozAppearance" in c.style,
		y = g && !! t.createRange().compareNode,
		b = y ? c : p.parentNode,
		c = e.opera && "[object Opera]" == d.call(e.opera),
		c = !! t.attachEvent && !c,
		w = g ? "object" : c ? "script" : "img",
		E = c ? "script" : w,
		S = Array.isArray || function(e) {
			return "[object Array]" == d.call(e)
		}, x = [],
		T = {}, N = {
			timeout: function(e, t) {
				return t.length && (e.timeout = t[0]), e
			}
		}, C, k;
	k = function(e) {
		function t(e) {
			var e = e.split("!"),
				t = x.length,
				n = e.pop(),
				r = e.length,
				n = {
					url: n,
					origUrl: n,
					prefixes: e
				}, i, s, o;
			for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
			for (s = 0; s < t; s++) n = x[s](n);
			return n
		}

		function o(e, i, s, o, u) {
			var a = t(e),
				f = a.autoCallback;
			a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
				l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
			})))
		}

		function u(e, t) {
			function n(e, n) {
				if (e) {
					if (i(e)) n || (f = function() {
						var e = [].slice.call(arguments);
						l.apply(this, e), c()
					}), o(e, f, t, 0, u);
					else if (Object(e) === e)
						for (p in h = function() {
							var t = 0,
								n;
							for (n in e) e.hasOwnProperty(n) && t++;
							return t
						}(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
							var e = [].slice.call(arguments);
							l.apply(this, e), c()
						} : f[p] = function(e) {
							return function() {
								var t = [].slice.call(arguments);
								e && e.apply(this, t), c()
							}
						}(l[p])), o(e[p], f, t, p, u))
				} else !n && c()
			}
			var u = !! e.test,
				a = e.load || e.both,
				f = e.callback || s,
				l = f,
				c = e.complete || s,
				h, p;
			n(u ? e.yep : e.nope, !! a), a && n(a)
		}
		var a, f, c = this.yepnope.loader;
		if (i(e)) o(e, 0, c, 0);
		else if (S(e))
			for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
		else Object(e) === e && u(e, c)
	}, k.addPrefix = function(e, t) {
		N[e] = t
	}, k.addFilter = function(e) {
		x.push(e)
	}, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
		t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
	}, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function(e, n, r, i, a, f) {
		var l = t.createElement("script"),
			c, d, i = i || k.errorTimeout;
		l.src = e;
		for (d in r) l.setAttribute(d, r[d]);
		n = f ? u : n || s, l.onreadystatechange = l.onload = function() {
			!c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
		}, h(function() {
			c || (c = 1, n(1))
		}, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
	}, e.yepnope.injectCss = function(e, n, r, i, o, a) {
		var i = t.createElement("link"),
			f, n = a ? u : n || s;
		i.href = e, i.rel = "stylesheet", i.type = "text/css";
		for (f in r) i.setAttribute(f, r[f]);
		o || (p.parentNode.insertBefore(i, p), h(n, 0))
	}
})(this, document);
Modernizr.load = function() {
	yepnope.apply(window, [].slice.call(arguments, 0))
};;
/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
(function($) {
	function sc_setScroll(e, t, n) {
		n.transition == "transition" && t == "swing" && (t = "ease");
		return {
			anims: [],
			duration: e,
			orgDuration: e,
			easing: t,
			startTime: getTime()
		}
	}

	function sc_startScroll(e, t) {
		for (var n = 0, r = e.anims.length; n < r; n++) {
			var i = e.anims[n];
			if (!i) continue;
			i[0][t.transition](i[1], e.duration, e.easing, i[2])
		}
	}

	function sc_stopScroll(e, t) {
		is_boolean(t) || (t = !0);
		is_object(e.pre) && sc_stopScroll(e.pre, t);
		for (var n = 0, r = e.anims.length; n < r; n++) {
			var i = e.anims[n];
			i[0].stop(!0);
			if (t) {
				i[0].css(i[1]);
				is_function(i[2]) && i[2]()
			}
		}
		is_object(e.post) && sc_stopScroll(e.post, t)
	}

	function sc_afterScroll(e, t, n) {
		t && t.remove();
		switch (n.fx) {
			case "fade":
			case "crossfade":
			case "cover-fade":
			case "uncover-fade":
				e.css("opacity", 1);
				e.css("filter", "")
		}
	}

	function sc_fireCallbacks(e, t, n, r, i) {
		t[n] && t[n].call(e, r);
		if (i[n].length)
			for (var s = 0, o = i[n].length; s < o; s++) i[n][s].call(e, r);
		return []
	}

	function sc_fireQueue(e, t, n) {
		if (t.length) {
			e.trigger(cf_e(t[0][0], n), t[0][1]);
			t.shift()
		}
		return t
	}

	function sc_hideHiddenItems(e) {
		e.each(function() {
			var e = $(this);
			e.data("_cfs_isHidden", e.is(":hidden")).hide()
		})
	}

	function sc_showHiddenItems(e) {
		e && e.each(function() {
			var e = $(this);
			e.data("_cfs_isHidden") || e.show()
		})
	}

	function sc_clearTimers(e) {
		e.auto && clearTimeout(e.auto);
		e.progress && clearInterval(e.progress);
		return e
	}

	function sc_mapCallbackArguments(e, t, n, r, i, s, o) {
		return {
			width: o.width,
			height: o.height,
			items: {
				old: e,
				skipped: t,
				visible: n
			},
			scroll: {
				items: r,
				direction: i,
				duration: s
			}
		}
	}

	function sc_getDuration(e, t, n, r) {
		var i = e.duration;
		if (e.fx == "none") return 0;
		i == "auto" ? i = t.scroll.duration / t.scroll.items * n : i < 10 && (i = r / i);
		if (i < 1) return 0;
		e.fx == "fade" && (i /= 2);
		return Math.round(i)
	}

	function nv_showNavi(e, t, n) {
		var r = is_number(e.items.minimum) ? e.items.minimum : e.items.visible + 1;
		if (t == "show" || t == "hide") var i = t;
		else if (r > t) {
			debug(n, "Not enough items (" + t + " total, " + r + " needed): Hiding navigation.");
			var i = "hide"
		} else var i = "show";
		var s = i == "show" ? "removeClass" : "addClass",
			o = cf_c("hidden", n);
		e.auto.button && e.auto.button[i]()[s](o);
		e.prev.button && e.prev.button[i]()[s](o);
		e.next.button && e.next.button[i]()[s](o);
		e.pagination.container && e.pagination.container[i]()[s](o)
	}

	function nv_enableNavi(e, t, n) {
		if (e.circular || e.infinite) return;
		var r = t == "removeClass" || t == "addClass" ? t : !1,
			i = cf_c("disabled", n);
		e.auto.button && r && e.auto.button[r](i);
		if (e.prev.button) {
			var s = r || t == 0 ? "addClass" : "removeClass";
			e.prev.button[s](i)
		}
		if (e.next.button) {
			var s = r || t == e.items.visible ? "addClass" : "removeClass";
			e.next.button[s](i)
		}
	}

	function go_getObject(e, t) {
		is_function(t) ? t = t.call(e) : is_undefined(t) && (t = {});
		return t
	}

	function go_getItemsObject(e, t) {
		t = go_getObject(e, t);
		is_number(t) ? t = {
			visible: t
		} : t == "variable" ? t = {
			visible: t,
			width: t,
			height: t
		} : is_object(t) || (t = {});
		return t
	}

	function go_getScrollObject(e, t) {
		t = go_getObject(e, t);
		is_number(t) ? t <= 50 ? t = {
			items: t
		} : t = {
			duration: t
		} : is_string(t) ? t = {
			easing: t
		} : is_object(t) || (t = {});
		return t
	}

	function go_getNaviObject(e, t) {
		t = go_getObject(e, t);
		if (is_string(t)) {
			var n = cf_getKeyCode(t);
			n == -1 ? t = $(t) : t = n
		}
		return t
	}

	function go_getAutoObject(e, t) {
		t = go_getNaviObject(e, t);
		is_jquery(t) ? t = {
			button: t
		} : is_boolean(t) ? t = {
			play: t
		} : is_number(t) && (t = {
			timeoutDuration: t
		});
		t.progress && (is_string(t.progress) || is_jquery(t.progress)) && (t.progress = {
			bar: t.progress
		});
		return t
	}

	function go_complementAutoObject(e, t) {
		is_function(t.button) && (t.button = t.button.call(e));
		is_string(t.button) && (t.button = $(t.button));
		is_boolean(t.play) || (t.play = !0);
		is_number(t.delay) || (t.delay = 0);
		is_undefined(t.pauseOnEvent) && (t.pauseOnEvent = !0);
		is_boolean(t.pauseOnResize) || (t.pauseOnResize = !0);
		is_number(t.timeoutDuration) || (t.timeoutDuration = t.duration < 10 ? 2500 : t.duration * 5);
		if (t.progress) {
			is_function(t.progress.bar) && (t.progress.bar = t.progress.bar.call(e));
			is_string(t.progress.bar) && (t.progress.bar = $(t.progress.bar));
			if (t.progress.bar) {
				is_function(t.progress.updater) || (t.progress.updater = $.fn.carouFredSel.progressbarUpdater);
				is_number(t.progress.interval) || (t.progress.interval = 50)
			} else t.progress = !1
		}
		return t
	}

	function go_getPrevNextObject(e, t) {
		t = go_getNaviObject(e, t);
		is_jquery(t) ? t = {
			button: t
		} : is_number(t) && (t = {
			key: t
		});
		return t
	}

	function go_complementPrevNextObject(e, t) {
		is_function(t.button) && (t.button = t.button.call(e));
		is_string(t.button) && (t.button = $(t.button));
		is_string(t.key) && (t.key = cf_getKeyCode(t.key));
		return t
	}

	function go_getPaginationObject(e, t) {
		t = go_getNaviObject(e, t);
		is_jquery(t) ? t = {
			container: t
		} : is_boolean(t) && (t = {
			keys: t
		});
		return t
	}

	function go_complementPaginationObject(e, t) {
		is_function(t.container) && (t.container = t.container.call(e));
		is_string(t.container) && (t.container = $(t.container));
		is_number(t.items) || (t.items = !1);
		is_boolean(t.keys) || (t.keys = !1);
		!is_function(t.anchorBuilder) && !is_false(t.anchorBuilder) && (t.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder);
		is_number(t.deviation) || (t.deviation = 0);
		return t
	}

	function go_getSwipeObject(e, t) {
		is_function(t) && (t = t.call(e));
		is_undefined(t) && (t = {
			onTouch: !1
		});
		is_true(t) ? t = {
			onTouch: t
		} : is_number(t) && (t = {
			items: t
		});
		return t
	}

	function go_complementSwipeObject(e, t) {
		is_boolean(t.onTouch) || (t.onTouch = !0);
		is_boolean(t.onMouse) || (t.onMouse = !1);
		is_object(t.options) || (t.options = {});
		is_boolean(t.options.triggerOnTouchEnd) || (t.options.triggerOnTouchEnd = !1);
		return t
	}

	function go_getMousewheelObject(e, t) {
		is_function(t) && (t = t.call(e));
		is_true(t) ? t = {} : is_number(t) ? t = {
			items: t
		} : is_undefined(t) && (t = !1);
		return t
	}

	function go_complementMousewheelObject(e, t) {
		return t
	}

	function gn_getItemIndex(e, t, n, r, i) {
		is_string(e) && (e = $(e, i));
		is_object(e) && (e = $(e, i));
		if (is_jquery(e)) {
			e = i.children().index(e);
			is_boolean(n) || (n = !1)
		} else is_boolean(n) || (n = !0);
		is_number(e) || (e = 0);
		is_number(t) || (t = 0);
		n && (e += r.first);
		e += t;
		if (r.total > 0) {
			while (e >= r.total) e -= r.total;
			while (e < 0) e += r.total
		}
		return e
	}

	function gn_getVisibleItemsPrev(e, t, n) {
		var r = 0,
			i = 0;
		for (var s = n; s >= 0; s--) {
			var o = e.eq(s);
			r += o.is(":visible") ? o[t.d.outerWidth](!0) : 0;
			if (r > t.maxDimension) return i;
			s == 0 && (s = e.length);
			i++
		}
	}

	function gn_getVisibleItemsPrevFilter(e, t, n) {
		return gn_getItemsPrevFilter(e, t.items.filter, t.items.visibleConf.org, n)
	}

	function gn_getScrollItemsPrevFilter(e, t, n, r) {
		return gn_getItemsPrevFilter(e, t.items.filter, r, n)
	}

	function gn_getItemsPrevFilter(e, t, n, r) {
		var i = 0,
			s = 0;
		for (var o = r, u = e.length; o >= 0; o--) {
			s++;
			if (s == u) return s;
			var a = e.eq(o);
			if (a.is(t)) {
				i++;
				if (i == n) return s
			}
			o == 0 && (o = u)
		}
	}

	function gn_getVisibleOrg(e, t) {
		return t.items.visibleConf.org || e.children().slice(0, t.items.visible).filter(t.items.filter).length
	}

	function gn_getVisibleItemsNext(e, t, n) {
		var r = 0,
			i = 0;
		for (var s = n, o = e.length - 1; s <= o; s++) {
			var u = e.eq(s);
			r += u.is(":visible") ? u[t.d.outerWidth](!0) : 0;
			if (r > t.maxDimension) return i;
			i++;
			if (i == o + 1) return i;
			s == o && (s = -1)
		}
	}

	function gn_getVisibleItemsNextTestCircular(e, t, n, r) {
		var i = gn_getVisibleItemsNext(e, t, n);
		t.circular || n + i > r && (i = r - n);
		return i
	}

	function gn_getVisibleItemsNextFilter(e, t, n) {
		return gn_getItemsNextFilter(e, t.items.filter, t.items.visibleConf.org, n, t.circular)
	}

	function gn_getScrollItemsNextFilter(e, t, n, r) {
		return gn_getItemsNextFilter(e, t.items.filter, r + 1, n, t.circular) - 1
	}

	function gn_getItemsNextFilter(e, t, n, r, i) {
		var s = 0,
			o = 0;
		for (var u = r, a = e.length - 1; u <= a; u++) {
			o++;
			if (o >= a) return o;
			var f = e.eq(u);
			if (f.is(t)) {
				s++;
				if (s == n) return o
			}
			u == a && (u = -1)
		}
	}

	function gi_getCurrentItems(e, t) {
		return e.slice(0, t.items.visible)
	}

	function gi_getOldItemsPrev(e, t, n) {
		return e.slice(n, t.items.visibleConf.old + n)
	}

	function gi_getNewItemsPrev(e, t) {
		return e.slice(0, t.items.visible)
	}

	function gi_getOldItemsNext(e, t) {
		return e.slice(0, t.items.visibleConf.old)
	}

	function gi_getNewItemsNext(e, t, n) {
		return e.slice(n, t.items.visible + n)
	}

	function sz_storeMargin(e, t, n) {
		if (t.usePadding) {
			is_string(n) || (n = "_cfs_origCssMargin");
			e.each(function() {
				var e = $(this),
					r = parseInt(e.css(t.d.marginRight), 10);
				is_number(r) || (r = 0);
				e.data(n, r)
			})
		}
	}

	function sz_resetMargin(e, t, n) {
		if (t.usePadding) {
			var r = is_boolean(n) ? n : !1;
			is_number(n) || (n = 0);
			sz_storeMargin(e, t, "_cfs_tempCssMargin");
			e.each(function() {
				var e = $(this);
				e.css(t.d.marginRight, r ? e.data("_cfs_tempCssMargin") : n + e.data("_cfs_origCssMargin"))
			})
		}
	}

	function sz_storeOrigCss(e) {
		e.each(function() {
			var e = $(this);
			e.data("_cfs_origCss", e.attr("style") || "")
		})
	}

	function sz_restoreOrigCss(e) {
		e.each(function() {
			var e = $(this);
			e.attr("style", e.data("_cfs_origCss") || "")
		})
	}

	function sz_setResponsiveSizes(e, t) {
		var n = e.items.visible,
			r = e.items[e.d.width],
			i = e[e.d.height],
			s = is_percentage(i);
		t.each(function() {
			var t = $(this),
				n = r - ms_getPaddingBorderMargin(t, e, "Width");
			t[e.d.width](n);
			s && t[e.d.height](ms_getPercentage(n, i))
		})
	}

	function sz_setSizes(e, t) {
		var n = e.parent(),
			r = e.children(),
			i = gi_getCurrentItems(r, t),
			s = cf_mapWrapperSizes(ms_getSizes(i, t, !0), t, !1);
		n.css(s);
		if (t.usePadding) {
			var o = t.padding,
				u = o[t.d[1]];
			t.align && u < 0 && (u = 0);
			var a = i.last();
			a.css(t.d.marginRight, a.data("_cfs_origCssMargin") + u);
			e.css(t.d.top, o[t.d[0]]);
			e.css(t.d.left, o[t.d[3]])
		}
		e.css(t.d.width, s[t.d.width] + ms_getTotalSize(r, t, "width") * 2);
		e.css(t.d.height, ms_getLargestSize(r, t, "height"));
		return s
	}

	function ms_getSizes(e, t, n) {
		return [ms_getTotalSize(e, t, "width", n), ms_getLargestSize(e, t, "height", n)]
	}

	function ms_getLargestSize(e, t, n, r) {
		is_boolean(r) || (r = !1);
		if (is_number(t[t.d[n]]) && r) return t[t.d[n]];
		if (is_number(t.items[t.d[n]])) return t.items[t.d[n]];
		n = n.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight";
		return ms_getTrueLargestSize(e, t, n)
	}

	function ms_getTrueLargestSize(e, t, n) {
		var r = 0;
		for (var i = 0, s = e.length; i < s; i++) {
			var o = e.eq(i),
				u = o.is(":visible") ? o[t.d[n]](!0) : 0;
			r < u && (r = u)
		}
		return r
	}

	function ms_getTotalSize(e, t, n, r) {
		is_boolean(r) || (r = !1);
		if (is_number(t[t.d[n]]) && r) return t[t.d[n]];
		if (is_number(t.items[t.d[n]])) return t.items[t.d[n]] * e.length;
		var i = n.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight",
			s = 0;
		for (var o = 0, u = e.length; o < u; o++) {
			var a = e.eq(o);
			s += a.is(":visible") ? a[t.d[i]](!0) : 0
		}
		return s
	}

	function ms_getParentSize(e, t, n) {
		var r = e.is(":visible");
		r && e.hide();
		var i = e.parent()[t.d[n]]();
		r && e.show();
		return i
	}

	function ms_getMaxDimension(e, t) {
		return is_number(e[e.d.width]) ? e[e.d.width] : t
	}

	function ms_hasVariableSizes(e, t, n) {
		var r = !1,
			i = !1;
		for (var s = 0, o = e.length; s < o; s++) {
			var u = e.eq(s),
				a = u.is(":visible") ? u[t.d[n]](!0) : 0;
			r === !1 ? r = a : r != a && (i = !0);
			r == 0 && (i = !0)
		}
		return i
	}

	function ms_getPaddingBorderMargin(e, t, n) {
		return e[t.d["outer" + n]](!0) - e[t.d[n.toLowerCase()]]()
	}

	function ms_getPercentage(e, t) {
		if (is_percentage(t)) {
			t = parseInt(t.slice(0, -1), 10);
			if (!is_number(t)) return e;
			e *= t / 100
		}
		return e
	}

	function cf_e(e, t, n, r, i) {
		is_boolean(n) || (n = !0);
		is_boolean(r) || (r = !0);
		is_boolean(i) || (i = !1);
		n && (e = t.events.prefix + e);
		r && (e = e + "." + t.events.namespace);
		r && i && (e += t.serialNumber);
		return e
	}

	function cf_c(e, t) {
		return is_string(t.classnames[e]) ? t.classnames[e] : e
	}

	function cf_mapWrapperSizes(e, t, n) {
		is_boolean(n) || (n = !0);
		var r = t.usePadding && n ? t.padding : [0, 0, 0, 0],
			i = {};
		i[t.d.width] = e[0] + r[1] + r[3];
		i[t.d.height] = e[1] + r[0] + r[2];
		return i
	}

	function cf_sortParams(e, t) {
		var n = [];
		for (var r = 0, i = e.length; r < i; r++)
			for (var s = 0, o = t.length; s < o; s++)
				if (t[s].indexOf(typeof e[r]) > -1 && is_undefined(n[s])) {
					n[s] = e[r];
					break
				}
		return n
	}

	function cf_getPadding(e) {
		if (is_undefined(e)) return [0, 0, 0, 0];
		if (is_number(e)) return [e, e, e, e];
		is_string(e) && (e = e.split("px").join("").split("em").join("").split(" "));
		if (!is_array(e)) return [0, 0, 0, 0];
		for (var t = 0; t < 4; t++) e[t] = parseInt(e[t], 10);
		switch (e.length) {
			case 0:
				return [0, 0, 0, 0];
			case 1:
				return [e[0], e[0], e[0], e[0]];
			case 2:
				return [e[0], e[1], e[0], e[1]];
			case 3:
				return [e[0], e[1], e[2], e[1]];
			default:
				return [e[0], e[1], e[2], e[3]]
		}
	}

	function cf_getAlignPadding(e, t) {
		var n = is_number(t[t.d.width]) ? Math.ceil(t[t.d.width] - ms_getTotalSize(e, t, "width")) : 0;
		switch (t.align) {
			case "left":
				return [0, n];
			case "right":
				return [n, 0];
			case "center":
			default:
				return [Math.ceil(n / 2), Math.floor(n / 2)]
		}
	}

	function cf_getDimensions(e) {
		var t = [
			["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
			["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
		],
			n = t[0].length,
			r = e.direction == "right" || e.direction == "left" ? 0 : 1,
			i = {};
		for (var s = 0; s < n; s++) i[t[0][s]] = t[r][s];
		return i
	}

	function cf_getAdjust(e, t, n, r) {
		var i = e;
		if (is_function(n)) i = n.call(r, i);
		else if (is_string(n)) {
			var s = n.split("+"),
				o = n.split("-");
			if (o.length > s.length) var u = !0,
			a = o[0], f = o[1];
			else var u = !1,
			a = s[0], f = s[1];
			switch (a) {
				case "even":
					i = e % 2 == 1 ? e - 1 : e;
					break;
				case "odd":
					i = e % 2 == 0 ? e - 1 : e;
					break;
				default:
					i = e
			}
			f = parseInt(f, 10);
			if (is_number(f)) {
				u && (f = -f);
				i += f
			}
		}
		if (!is_number(i) || i < 1) i = 1;
		return i
	}

	function cf_getItemsAdjust(e, t, n, r) {
		return cf_getItemAdjustMinMax(cf_getAdjust(e, t, n, r), t.items.visibleConf)
	}

	function cf_getItemAdjustMinMax(e, t) {
		is_number(t.min) && e < t.min && (e = t.min);
		is_number(t.max) && e > t.max && (e = t.max);
		e < 1 && (e = 1);
		return e
	}

	function cf_getSynchArr(e) {
		is_array(e) || (e = [
			[e]
		]);
		is_array(e[0]) || (e = [e]);
		for (var t = 0, n = e.length; t < n; t++) {
			is_string(e[t][0]) && (e[t][0] = $(e[t][0]));
			is_boolean(e[t][1]) || (e[t][1] = !0);
			is_boolean(e[t][2]) || (e[t][2] = !0);
			is_number(e[t][3]) || (e[t][3] = 0)
		}
		return e
	}

	function cf_getKeyCode(e) {
		return e == "right" ? 39 : e == "left" ? 37 : e == "up" ? 38 : e == "down" ? 40 : -1
	}

	function cf_setCookie(e, t, n) {
		if (e) {
			var r = t.triggerHandler(cf_e("currentPosition", n));
			$.fn.carouFredSel.cookie.set(e, r)
		}
	}

	function cf_getCookie(e) {
		var t = $.fn.carouFredSel.cookie.get(e);
		return t == "" ? 0 : t
	}

	function in_mapCss(e, t) {
		var n = {};
		for (var r = 0, i = t.length; r < i; r++) n[t[r]] = e.css(t[r]);
		return n
	}

	function in_complementItems(e, t, n, r) {
		is_object(e.visibleConf) || (e.visibleConf = {});
		is_object(e.sizesConf) || (e.sizesConf = {});
		e.start == 0 && is_number(r) && (e.start = r);
		if (is_object(e.visible)) {
			e.visibleConf.min = e.visible.min;
			e.visibleConf.max = e.visible.max;
			e.visible = !1
		} else if (is_string(e.visible)) {
			e.visible == "variable" ? e.visibleConf.variable = !0 : e.visibleConf.adjust = e.visible;
			e.visible = !1
		} else if (is_function(e.visible)) {
			e.visibleConf.adjust = e.visible;
			e.visible = !1
		}
		is_string(e.filter) || (e.filter = n.filter(":hidden").length > 0 ? ":visible" : "*");
		if (!e[t.d.width])
			if (t.responsive) {
				debug(!0, "Set a " + t.d.width + " for the items!");
				e[t.d.width] = ms_getTrueLargestSize(n, t, "outerWidth")
			} else e[t.d.width] = ms_hasVariableSizes(n, t, "outerWidth") ? "variable" : n[t.d.outerWidth](!0);
		e[t.d.height] || (e[t.d.height] = ms_hasVariableSizes(n, t, "outerHeight") ? "variable" : n[t.d.outerHeight](!0));
		e.sizesConf.width = e.width;
		e.sizesConf.height = e.height;
		return e
	}

	function in_complementVisibleItems(e, t) {
		e.items[e.d["width"]] == "variable" && (e.items.visibleConf.variable = !0);
		if (!e.items.visibleConf.variable) {
			if (is_number(e[e.d.width])) e.items.visible = Math.floor(e[e.d.width] / e.items[e.d.width]);
			else {
				e.items.visible = Math.floor(t / e.items[e.d.width]);
				e[e.d.width] = e.items.visible * e.items[e.d.width];
				e.items.visibleConf.adjust || (e.align = !1)
			} if (e.items.visible == "Infinity" || e.items.visible < 1) {
				debug(!0, 'Not a valid number of visible items: Set to "variable".');
				e.items.visibleConf.variable = !0
			}
		}
		return e
	}

	function in_complementPrimarySize(e, t, n) {
		e == "auto" && (e = ms_getTrueLargestSize(n, t, "outerWidth"));
		return e
	}

	function in_complementSecondarySize(e, t, n) {
		e == "auto" && (e = ms_getTrueLargestSize(n, t, "outerHeight"));
		e || (e = t.items[t.d.height]);
		return e
	}

	function in_getAlignPadding(e, t) {
		var n = cf_getAlignPadding(gi_getCurrentItems(t, e), e);
		e.padding[e.d[1]] = n[1];
		e.padding[e.d[3]] = n[0];
		return e
	}

	function in_getResponsiveValues(e, t, n) {
		var r = cf_getItemAdjustMinMax(Math.ceil(e[e.d.width] / e.items[e.d.width]), e.items.visibleConf);
		r > t.length && (r = t.length);
		var i = Math.floor(e[e.d.width] / r);
		e.items.visible = r;
		e.items[e.d.width] = i;
		e[e.d.width] = r * i;
		return e
	}

	function bt_pauseOnHoverConfig(e) {
		if (is_string(e)) var t = e.indexOf("immediate") > -1 ? !0 : !1,
		n = e.indexOf("resume") > -1 ? !0 : !1;
		else var t = n = !1;
		return [t, n]
	}

	function bt_mousesheelNumber(e) {
		return is_number(e) ? e : null
	}

	function is_null(e) {
		return e === null
	}

	function is_undefined(e) {
		return is_null(e) || typeof e == "undefined" || e === "" || e === "undefined"
	}

	function is_array(e) {
		return e instanceof Array
	}

	function is_jquery(e) {
		return e instanceof jQuery
	}

	function is_object(e) {
		return (e instanceof Object || typeof e == "object") && !is_null(e) && !is_jquery(e) && !is_array(e) && !is_function(e)
	}

	function is_number(e) {
		return (e instanceof Number || typeof e == "number") && !isNaN(e)
	}

	function is_string(e) {
		return (e instanceof String || typeof e == "string") && !is_undefined(e) && !is_true(e) && !is_false(e)
	}

	function is_function(e) {
		return e instanceof Function || typeof e == "function"
	}

	function is_boolean(e) {
		return e instanceof Boolean || typeof e == "boolean" || is_true(e) || is_false(e)
	}

	function is_true(e) {
		return e === !0 || e === "true"
	}

	function is_false(e) {
		return e === !1 || e === "false"
	}

	function is_percentage(e) {
		return is_string(e) && e.slice(-1) == "%"
	}

	function getTime() {
		return (new Date).getTime()
	}

	function deprecated(e, t) {
		debug(!0, e + " is DEPRECATED, support for it will be removed. Use " + t + " instead.")
	}

	function debug(e, t) {
		if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
			if (is_object(e)) {
				var n = " (" + e.selector + ")";
				e = e.debug
			} else var n = ""; if (!e) return !1;
			is_string(t) ? t = "carouFredSel" + n + ": " + t : t = ["carouFredSel" + n + ":", t];
			window.console.log(t)
		}
		return !1
	}
	if ($.fn.carouFredSel) return;
	$.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
		if (this.length == 0) {
			debug(!0, 'No element found for "' + this.selector + '".');
			return this
		}
		if (this.length > 1) return this.each(function() {
			$(this).carouFredSel(options, configs)
		});
		var $cfs = this,
			$tt0 = this[0],
			starting_position = !1;
		if ($cfs.data("_cfs_isCarousel")) {
			starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition");
			$cfs.trigger("_cfs_triggerEvent", ["destroy", !0])
		}
		var FN = {};
		FN._init = function(e, t, n) {
			e = go_getObject($tt0, e);
			e.items = go_getItemsObject($tt0, e.items);
			e.scroll = go_getScrollObject($tt0, e.scroll);
			e.auto = go_getAutoObject($tt0, e.auto);
			e.prev = go_getPrevNextObject($tt0, e.prev);
			e.next = go_getPrevNextObject($tt0, e.next);
			e.pagination = go_getPaginationObject($tt0, e.pagination);
			e.swipe = go_getSwipeObject($tt0, e.swipe);
			e.mousewheel = go_getMousewheelObject($tt0, e.mousewheel);
			t && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, e));
			opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, e);
			opts.d = cf_getDimensions(opts);
			crsl.direction = opts.direction == "up" || opts.direction == "left" ? "next" : "prev";
			var r = $cfs.children(),
				i = ms_getParentSize($wrp, opts, "width");
			is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber);
			opts.maxDimension = ms_getMaxDimension(opts, i);
			opts.items = in_complementItems(opts.items, opts, r, n);
			opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, r);
			opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, r);
			opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%"));
			if (is_percentage(opts[opts.d.width])) {
				crsl.upDateOnWindowResize = !0;
				crsl.primarySizePercentage = opts[opts.d.width];
				opts[opts.d.width] = ms_getPercentage(i, crsl.primarySizePercentage);
				opts.items.visible || (opts.items.visibleConf.variable = !0)
			}
			if (opts.responsive) {
				opts.usePadding = !1;
				opts.padding = [0, 0, 0, 0];
				opts.align = !1;
				opts.items.visibleConf.variable = !1
			} else {
				opts.items.visible || (opts = in_complementVisibleItems(opts, i));
				if (!opts[opts.d.width])
					if (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && opts.items.filter == "*") {
						opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width];
						opts.align = !1
					} else opts[opts.d.width] = "variable";
				is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1);
				opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(r, opts, 0))
			} if (opts.items.filter != "*" && !opts.items.visibleConf.variable) {
				opts.items.visibleConf.org = opts.items.visible;
				opts.items.visible = gn_getVisibleItemsNextFilter(r, opts, 0)
			}
			opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
			opts.items.visibleConf.old = opts.items.visible;
			if (opts.responsive) {
				opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible);
				opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible);
				opts = in_getResponsiveValues(opts, r, i)
			} else {
				opts.padding = cf_getPadding(opts.padding);
				opts.align == "top" ? opts.align = "left" : opts.align == "bottom" && (opts.align = "right");
				switch (opts.align) {
					case "center":
					case "left":
					case "right":
						if (opts[opts.d["width"]] != "variable") {
							opts = in_getAlignPadding(opts, r);
							opts.usePadding = !0
						}
						break;
					default:
						opts.align = !1;
						opts.usePadding = opts.padding[0] == 0 && opts.padding[1] == 0 && opts.padding[2] == 0 && opts.padding[3] == 0 ? !1 : !0
				}
			}
			is_number(opts.scroll.duration) || (opts.scroll.duration = 500);
			is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || opts.items.filter != "*" ? "visible" : opts.items.visible);
			opts.auto = $.extend(!0, {}, opts.scroll, opts.auto);
			opts.prev = $.extend(!0, {}, opts.scroll, opts.prev);
			opts.next = $.extend(!0, {}, opts.scroll, opts.next);
			opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination);
			opts.auto = go_complementAutoObject($tt0, opts.auto);
			opts.prev = go_complementPrevNextObject($tt0, opts.prev);
			opts.next = go_complementPrevNextObject($tt0, opts.next);
			opts.pagination = go_complementPaginationObject($tt0, opts.pagination);
			opts.swipe = go_complementSwipeObject($tt0, opts.swipe);
			opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel);
			opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise));
			if (opts.auto.onPauseStart) {
				opts.auto.onTimeoutStart = opts.auto.onPauseStart;
				deprecated("auto.onPauseStart", "auto.onTimeoutStart")
			}
			if (opts.auto.onPausePause) {
				opts.auto.onTimeoutPause = opts.auto.onPausePause;
				deprecated("auto.onPausePause", "auto.onTimeoutPause")
			}
			if (opts.auto.onPauseEnd) {
				opts.auto.onTimeoutEnd = opts.auto.onPauseEnd;
				deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")
			}
			if (opts.auto.pauseDuration) {
				opts.auto.timeoutDuration = opts.auto.pauseDuration;
				deprecated("auto.pauseDuration", "auto.timeoutDuration")
			}
		};
		FN._build = function() {
			$cfs.data("_cfs_isCarousel", !0);
			var e = $cfs.children(),
				t = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
				n = "relative";
			switch (t.position) {
				case "absolute":
				case "fixed":
					n = t.position
			}
			conf.wrapper == "parent" ? sz_storeOrigCss($wrp) : $wrp.css(t);
			$wrp.css({
				overflow: "hidden",
				position: n
			});
			sz_storeOrigCss($cfs);
			$cfs.data("_cfs_origCssZindex", t.zIndex);
			$cfs.css({
				textAlign: "left",
				"float": "none",
				position: "absolute",
				top: 0,
				right: "auto",
				bottom: "auto",
				left: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0,
				marginLeft: 0
			});
			sz_storeMargin(e, opts);
			sz_storeOrigCss(e);
			opts.responsive && sz_setResponsiveSizes(opts, e)
		};
		FN._bind_events = function() {
			FN._unbind_events();
			$cfs.bind(cf_e("stop", conf), function(e, t) {
				e.stopPropagation();
				crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf));
				crsl.isStopped = !0;
				if (opts.auto.play) {
					opts.auto.play = !1;
					$cfs.trigger(cf_e("pause", conf), t)
				}
				return !0
			});
			$cfs.bind(cf_e("finish", conf), function(e) {
				e.stopPropagation();
				crsl.isScrolling && sc_stopScroll(scrl);
				return !0
			});
			$cfs.bind(cf_e("pause", conf), function(e, t, n) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);
				if (t && crsl.isScrolling) {
					scrl.isStopped = !0;
					var r = getTime() - scrl.startTime;
					scrl.duration -= r;
					scrl.pre && (scrl.pre.duration -= r);
					scrl.post && (scrl.post.duration -= r);
					sc_stopScroll(scrl, !1)
				}!crsl.isPaused && !crsl.isScrolling && n && (tmrs.timePassed += getTime() - tmrs.startTime);
				crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf));
				crsl.isPaused = !0;
				if (opts.auto.onTimeoutPause) {
					var i = opts.auto.timeoutDuration - tmrs.timePassed,
						s = 100 - Math.ceil(i * 100 / opts.auto.timeoutDuration);
					opts.auto.onTimeoutPause.call($tt0, s, i)
				}
				return !0
			});
			$cfs.bind(cf_e("play", conf), function(e, t, n, r) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);
				var i = [t, n, r],
					s = ["string", "number", "boolean"],
					o = cf_sortParams(i, s);
				t = o[0];
				n = o[1];
				r = o[2];
				t != "prev" && t != "next" && (t = crsl.direction);
				is_number(n) || (n = 0);
				is_boolean(r) || (r = !1);
				if (r) {
					crsl.isStopped = !1;
					opts.auto.play = !0
				}
				if (!opts.auto.play) {
					e.stopImmediatePropagation();
					return debug(conf, "Carousel stopped: Not scrolling.")
				}
				if (crsl.isPaused && opts.auto.button) {
					opts.auto.button.removeClass(cf_c("stopped", conf));
					opts.auto.button.removeClass(cf_c("paused", conf))
				}
				crsl.isPaused = !1;
				tmrs.startTime = getTime();
				var u = opts.auto.timeoutDuration + n;
				dur2 = u - tmrs.timePassed;
				perc = 100 - Math.ceil(dur2 * 100 / u);
				opts.auto.progress && (tmrs.progress = setInterval(function() {
					var e = getTime() - tmrs.startTime + tmrs.timePassed,
						t = Math.ceil(e * 100 / u);
					opts.auto.progress.updater.call(opts.auto.progress.bar[0], t)
				}, opts.auto.progress.interval));
				tmrs.auto = setTimeout(function() {
					opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100);
					opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2);
					crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), t) : $cfs.trigger(cf_e(t, conf), opts.auto)
				}, dur2);
				opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2);
				return !0
			});
			$cfs.bind(cf_e("resume", conf), function(e) {
				e.stopPropagation();
				if (scrl.isStopped) {
					scrl.isStopped = !1;
					crsl.isPaused = !1;
					crsl.isScrolling = !0;
					scrl.startTime = getTime();
					sc_startScroll(scrl, conf)
				} else $cfs.trigger(cf_e("play", conf));
				return !0
			});
			$cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(e, t, n, r, i) {
				e.stopPropagation();
				if (crsl.isStopped || $cfs.is(":hidden")) {
					e.stopImmediatePropagation();
					return debug(conf, "Carousel stopped or hidden: Not scrolling.")
				}
				var s = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
				if (s > itms.total) {
					e.stopImmediatePropagation();
					return debug(conf, "Not enough items (" + itms.total + " total, " + s + " needed): Not scrolling.")
				}
				var o = [t, n, r, i],
					u = ["object", "number/string", "function", "boolean"],
					a = cf_sortParams(o, u);
				t = a[0];
				n = a[1];
				r = a[2];
				i = a[3];
				var f = e.type.slice(conf.events.prefix.length);
				is_object(t) || (t = {});
				is_function(r) && (t.onAfter = r);
				is_boolean(i) && (t.queue = i);
				t = $.extend(!0, {}, opts[f], t);
				if (t.conditions && !t.conditions.call($tt0, f)) {
					e.stopImmediatePropagation();
					return debug(conf, 'Callback "conditions" returned false.')
				}
				if (!is_number(n)) {
					if (opts.items.filter != "*") n = "visible";
					else {
						var l = [n, t.items, opts[f].items];
						for (var a = 0, c = l.length; a < c; a++)
							if (is_number(l[a]) || l[a] == "page" || l[a] == "visible") {
								n = l[a];
								break
							}
					}
					switch (n) {
						case "page":
							e.stopImmediatePropagation();
							return $cfs.triggerHandler(cf_e(f + "Page", conf), [t, r]);
						case "visible":
							!opts.items.visibleConf.variable && opts.items.filter == "*" && (n = opts.items.visible)
					}
				}
				if (scrl.isStopped) {
					$cfs.trigger(cf_e("resume", conf));
					$cfs.trigger(cf_e("queue", conf), [f, [t, n, r]]);
					e.stopImmediatePropagation();
					return debug(conf, "Carousel resumed scrolling.")
				}
				if (t.duration > 0 && crsl.isScrolling) {
					if (t.queue) {
						t.queue == "last" && (queu = []);
						(t.queue != "first" || queu.length == 0) && $cfs.trigger(cf_e("queue", conf), [f, [t, n, r]])
					}
					e.stopImmediatePropagation();
					return debug(conf, "Carousel currently scrolling.")
				}
				tmrs.timePassed = 0;
				$cfs.trigger(cf_e("slide_" + f, conf), [t, n]);
				if (opts.synchronise) {
					var h = opts.synchronise,
						p = [t, n];
					for (var d = 0, c = h.length; d < c; d++) {
						var v = f;
						h[d][2] || (v = v == "prev" ? "next" : "prev");
						h[d][1] || (p[0] = h[d][0].triggerHandler("_cfs_triggerEvent", ["configuration", v]));
						p[1] = n + h[d][3];
						h[d][0].trigger("_cfs_triggerEvent", ["slide_" + v, p])
					}
				}
				return !0
			});
			$cfs.bind(cf_e("slide_prev", conf), function(e, t, n) {
				e.stopPropagation();
				var r = $cfs.children();
				if (!opts.circular && itms.first == 0) {
					opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1);
					return e.stopImmediatePropagation()
				}
				sz_resetMargin(r, opts);
				if (!is_number(n)) {
					if (opts.items.visibleConf.variable) n = gn_getVisibleItemsPrev(r, opts, itms.total - 1);
					else if (opts.items.filter != "*") {
						var i = is_number(t.items) ? t.items : gn_getVisibleOrg($cfs, opts);
						n = gn_getScrollItemsPrevFilter(r, opts, itms.total - 1, i)
					} else n = opts.items.visible;
					n = cf_getAdjust(n, opts, t.items, $tt0)
				}
				opts.circular || itms.total - n < itms.first && (n = itms.total - itms.first);
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable) {
					var s = cf_getItemsAdjust(gn_getVisibleItemsNext(r, opts, itms.total - n), opts, opts.items.visibleConf.adjust, $tt0);
					if (opts.items.visible + n <= s && n < itms.total) {
						n++;
						s = cf_getItemsAdjust(gn_getVisibleItemsNext(r, opts, itms.total - n), opts, opts.items.visibleConf.adjust, $tt0)
					}
					opts.items.visible = s
				} else if (opts.items.filter != "*") {
					var s = gn_getVisibleItemsNextFilter(r, opts, itms.total - n);
					opts.items.visible = cf_getItemsAdjust(s, opts, opts.items.visibleConf.adjust, $tt0)
				}
				sz_resetMargin(r, opts, !0);
				if (n == 0) {
					e.stopImmediatePropagation();
					return debug(conf, "0 items to scroll: Not scrolling.")
				}
				debug(conf, "Scrolling " + n + " items backward.");
				itms.first += n;
				while (itms.first >= itms.total) itms.first -= itms.total;
				if (!opts.circular) {
					itms.first == 0 && t.onEnd && t.onEnd.call($tt0, "prev");
					opts.infinite || nv_enableNavi(opts, itms.first, conf)
				}
				$cfs.children().slice(itms.total - n, itms.total).prependTo($cfs);
				itms.total < opts.items.visible + n && $cfs.children().slice(0, opts.items.visible + n - itms.total).clone(!0).appendTo($cfs);
				var r = $cfs.children(),
					o = gi_getOldItemsPrev(r, opts, n),
					u = gi_getNewItemsPrev(r, opts),
					a = r.eq(n - 1),
					f = o.last(),
					l = u.last();
				sz_resetMargin(r, opts);
				var c = 0,
					h = 0;
				if (opts.align) {
					var p = cf_getAlignPadding(u, opts);
					c = p[0];
					h = p[1]
				}
				var d = c < 0 ? opts.padding[opts.d[3]] : 0,
					v = !1,
					m = $();
				if (opts.items.visible < n) {
					m = r.slice(opts.items.visibleConf.old, n);
					if (t.fx == "directscroll") {
						var g = opts.items[opts.d.width];
						v = m;
						a = l;
						sc_hideHiddenItems(v);
						opts.items[opts.d.width] = "variable"
					}
				}
				var y = !1,
					b = ms_getTotalSize(r.slice(0, n), opts, "width"),
					w = cf_mapWrapperSizes(ms_getSizes(u, opts, !0), opts, !opts.usePadding),
					E = 0,
					S = {}, x = {}, T = {}, N = {}, C = {}, k = {}, L = {}, A = sc_getDuration(t, opts, n, b);
				switch (t.fx) {
					case "cover":
					case "cover-fade":
						E = ms_getTotalSize(r.slice(0, opts.items.visible), opts, "width")
				}
				v && (opts.items[opts.d.width] = g);
				sz_resetMargin(r, opts, !0);
				h >= 0 && sz_resetMargin(f, opts, opts.padding[opts.d[1]]);
				c >= 0 && sz_resetMargin(a, opts, opts.padding[opts.d[3]]);
				if (opts.align) {
					opts.padding[opts.d[1]] = h;
					opts.padding[opts.d[3]] = c
				}
				k[opts.d.left] = -(b - d);
				L[opts.d.left] = -(E - d);
				x[opts.d.left] = w[opts.d.width];
				var O = function() {}, M = function() {}, _ = function() {}, D = function() {}, P = function() {}, H = function() {}, B = function() {}, j = function() {}, F = function() {}, I = function() {}, q = function() {};
				switch (t.fx) {
					case "crossfade":
					case "cover":
					case "cover-fade":
					case "uncover":
					case "uncover-fade":
						y = $cfs.clone(!0).appendTo($wrp)
				}
				switch (t.fx) {
					case "crossfade":
					case "uncover":
					case "uncover-fade":
						y.children().slice(0, n).remove();
						y.children().slice(opts.items.visibleConf.old).remove();
						break;
					case "cover":
					case "cover-fade":
						y.children().slice(opts.items.visible).remove();
						y.css(L)
				}
				$cfs.css(k);
				scrl = sc_setScroll(A, t.easing, conf);
				S[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
				if (opts[opts.d["width"]] == "variable" || opts[opts.d["height"]] == "variable") {
					O = function() {
						$wrp.css(w)
					};
					M = function() {
						scrl.anims.push([$wrp, w])
					}
				}
				if (opts.usePadding) {
					if (l.not(a).length) {
						T[opts.d.marginRight] = a.data("_cfs_origCssMargin");
						if (c < 0) a.css(T);
						else {
							B = function() {
								a.css(T)
							};
							j = function() {
								scrl.anims.push([a, T])
							}
						}
					}
					switch (t.fx) {
						case "cover":
						case "cover-fade":
							y.children().eq(n - 1).css(T)
					}
					if (l.not(f).length) {
						N[opts.d.marginRight] = f.data("_cfs_origCssMargin");
						_ = function() {
							f.css(N)
						};
						D = function() {
							scrl.anims.push([f, N])
						}
					}
					if (h >= 0) {
						C[opts.d.marginRight] = l.data("_cfs_origCssMargin") + opts.padding[opts.d[1]];
						P = function() {
							l.css(C)
						};
						H = function() {
							scrl.anims.push([l, C])
						}
					}
				}
				q = function() {
					$cfs.css(S)
				};
				var R = opts.items.visible + n - itms.total;
				I = function() {
					if (R > 0) {
						$cfs.children().slice(itms.total).remove();
						o = $($cfs.children().slice(itms.total - (opts.items.visible - R)).get().concat($cfs.children().slice(0, R).get()))
					}
					sc_showHiddenItems(v);
					if (opts.usePadding) {
						var e = $cfs.children().eq(opts.items.visible + n - 1);
						e.css(opts.d.marginRight, e.data("_cfs_origCssMargin"))
					}
				};
				var U = sc_mapCallbackArguments(o, m, u, n, "prev", A, w);
				F = function() {
					sc_afterScroll($cfs, y, t);
					crsl.isScrolling = !1;
					clbk.onAfter = sc_fireCallbacks($tt0, t, "onAfter", U, clbk);
					queu = sc_fireQueue($cfs, queu, conf);
					crsl.isPaused || $cfs.trigger(cf_e("play", conf))
				};
				crsl.isScrolling = !0;
				tmrs = sc_clearTimers(tmrs);
				clbk.onBefore = sc_fireCallbacks($tt0, t, "onBefore", U, clbk);
				switch (t.fx) {
					case "none":
						$cfs.css(S);
						O();
						_();
						P();
						B();
						q();
						I();
						F();
						break;
					case "fade":
						scrl.anims.push([$cfs, {
								opacity: 0
							},
							function() {
								O();
								_();
								P();
								B();
								q();
								I();
								scrl = sc_setScroll(A, t.easing, conf);
								scrl.anims.push([$cfs, {
										opacity: 1
									},
									F
								]);
								sc_startScroll(scrl, conf)
							}
						]);
						break;
					case "crossfade":
						$cfs.css({
							opacity: 0
						});
						scrl.anims.push([y, {
							opacity: 0
						}]);
						scrl.anims.push([$cfs, {
								opacity: 1
							},
							F
						]);
						M();
						_();
						P();
						B();
						q();
						I();
						break;
					case "cover":
						scrl.anims.push([y, S,
							function() {
								_();
								P();
								B();
								q();
								I();
								F()
							}
						]);
						M();
						break;
					case "cover-fade":
						scrl.anims.push([$cfs, {
							opacity: 0
						}]);
						scrl.anims.push([y, S,
							function() {
								_();
								P();
								B();
								q();
								I();
								F()
							}
						]);
						M();
						break;
					case "uncover":
						scrl.anims.push([y, x, F]);
						M();
						_();
						P();
						B();
						q();
						I();
						break;
					case "uncover-fade":
						$cfs.css({
							opacity: 0
						});
						scrl.anims.push([$cfs, {
							opacity: 1
						}]);
						scrl.anims.push([y, x, F]);
						M();
						_();
						P();
						B();
						q();
						I();
						break;
					default:
						scrl.anims.push([$cfs, S,
							function() {
								I();
								F()
							}
						]);
						M();
						D();
						H();
						j()
				}
				sc_startScroll(scrl, conf);
				cf_setCookie(opts.cookie, $cfs, conf);
				$cfs.trigger(cf_e("updatePageStatus", conf), [!1, w]);
				return !0
			});
			$cfs.bind(cf_e("slide_next", conf), function(e, t, n) {
				e.stopPropagation();
				var r = $cfs.children();
				if (!opts.circular && itms.first == opts.items.visible) {
					opts.infinite && $cfs
						.trigger(cf_e("prev", conf), itms.total - 1);
					return e.stopImmediatePropagation()
				}
				sz_resetMargin(r, opts);
				if (!is_number(n)) {
					if (opts.items.filter != "*") {
						var i = is_number(t.items) ? t.items : gn_getVisibleOrg($cfs, opts);
						n = gn_getScrollItemsNextFilter(r, opts, 0, i)
					} else n = opts.items.visible;
					n = cf_getAdjust(n, opts, t.items, $tt0)
				}
				var s = itms.first == 0 ? itms.total : itms.first;
				if (!opts.circular) {
					if (opts.items.visibleConf.variable) var o = gn_getVisibleItemsNext(r, opts, n),
					i = gn_getVisibleItemsPrev(r, opts, s - 1);
					else var o = opts.items.visible,
					i = opts.items.visible;
					n + o > s && (n = s - i)
				}
				opts.items.visibleConf.old = opts.items.visible;
				if (opts.items.visibleConf.variable) {
					var o = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(r, opts, n, s), opts, opts.items.visibleConf.adjust, $tt0);
					while (opts.items.visible - n >= o && n < itms.total) {
						n++;
						o = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(r, opts, n, s), opts, opts.items.visibleConf.adjust, $tt0)
					}
					opts.items.visible = o
				} else if (opts.items.filter != "*") {
					var o = gn_getVisibleItemsNextFilter(r, opts, n);
					opts.items.visible = cf_getItemsAdjust(o, opts, opts.items.visibleConf.adjust, $tt0)
				}
				sz_resetMargin(r, opts, !0);
				if (n == 0) {
					e.stopImmediatePropagation();
					return debug(conf, "0 items to scroll: Not scrolling.")
				}
				debug(conf, "Scrolling " + n + " items forward.");
				itms.first -= n;
				while (itms.first < 0) itms.first += itms.total;
				if (!opts.circular) {
					itms.first == opts.items.visible && t.onEnd && t.onEnd.call($tt0, "next");
					opts.infinite || nv_enableNavi(opts, itms.first, conf)
				}
				itms.total < opts.items.visible + n && $cfs.children().slice(0, opts.items.visible + n - itms.total).clone(!0).appendTo($cfs);
				var r = $cfs.children(),
					u = gi_getOldItemsNext(r, opts),
					a = gi_getNewItemsNext(r, opts, n),
					f = r.eq(n - 1),
					l = u.last(),
					c = a.last();
				sz_resetMargin(r, opts);
				var h = 0,
					p = 0;
				if (opts.align) {
					var d = cf_getAlignPadding(a, opts);
					h = d[0];
					p = d[1]
				}
				var v = !1,
					m = $();
				if (opts.items.visibleConf.old < n) {
					m = r.slice(opts.items.visibleConf.old, n);
					if (t.fx == "directscroll") {
						var g = opts.items[opts.d.width];
						v = m;
						f = l;
						sc_hideHiddenItems(v);
						opts.items[opts.d.width] = "variable"
					}
				}
				var y = !1,
					b = ms_getTotalSize(r.slice(0, n), opts, "width"),
					w = cf_mapWrapperSizes(ms_getSizes(a, opts, !0), opts, !opts.usePadding),
					E = 0,
					S = {}, x = {}, T = {}, N = {}, C = {}, k = sc_getDuration(t, opts, n, b);
				switch (t.fx) {
					case "uncover":
					case "uncover-fade":
						E = ms_getTotalSize(r.slice(0, opts.items.visibleConf.old), opts, "width")
				}
				v && (opts.items[opts.d.width] = g);
				opts.align && opts.padding[opts.d[1]] < 0 && (opts.padding[opts.d[1]] = 0);
				sz_resetMargin(r, opts, !0);
				sz_resetMargin(l, opts, opts.padding[opts.d[1]]);
				if (opts.align) {
					opts.padding[opts.d[1]] = p;
					opts.padding[opts.d[3]] = h
				}
				C[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
				var L = function() {}, A = function() {}, O = function() {}, M = function() {}, _ = function() {}, D = function() {}, P = function() {}, H = function() {}, B = function() {};
				switch (t.fx) {
					case "crossfade":
					case "cover":
					case "cover-fade":
					case "uncover":
					case "uncover-fade":
						y = $cfs.clone(!0).appendTo($wrp);
						y.children().slice(opts.items.visibleConf.old).remove()
				}
				switch (t.fx) {
					case "crossfade":
					case "cover":
					case "cover-fade":
						$cfs.css("zIndex", 1);
						y.css("zIndex", 0)
				}
				scrl = sc_setScroll(k, t.easing, conf);
				S[opts.d.left] = -b;
				x[opts.d.left] = -E;
				h < 0 && (S[opts.d.left] += h);
				if (opts[opts.d["width"]] == "variable" || opts[opts.d["height"]] == "variable") {
					L = function() {
						$wrp.css(w)
					};
					A = function() {
						scrl.anims.push([$wrp, w])
					}
				}
				if (opts.usePadding) {
					var j = c.data("_cfs_origCssMargin");
					p >= 0 && (j += opts.padding[opts.d[1]]);
					c.css(opts.d.marginRight, j);
					f.not(l).length && (N[opts.d.marginRight] = l.data("_cfs_origCssMargin"));
					O = function() {
						l.css(N)
					};
					M = function() {
						scrl.anims.push([l, N])
					};
					var F = f.data("_cfs_origCssMargin");
					h > 0 && (F += opts.padding[opts.d[3]]);
					T[opts.d.marginRight] = F;
					_ = function() {
						f.css(T)
					};
					D = function() {
						scrl.anims.push([f, T])
					}
				}
				B = function() {
					$cfs.css(C)
				};
				var I = opts.items.visible + n - itms.total;
				H = function() {
					I > 0 && $cfs.children().slice(itms.total).remove();
					var e = $cfs.children().slice(0, n).appendTo($cfs).last();
					I > 0 && (a = gi_getCurrentItems(r, opts));
					sc_showHiddenItems(v);
					if (opts.usePadding) {
						if (itms.total < opts.items.visible + n) {
							var t = $cfs.children().eq(opts.items.visible - 1);
							t.css(opts.d.marginRight, t.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
						}
						e.css(opts.d.marginRight, e.data("_cfs_origCssMargin"))
					}
				};
				var q = sc_mapCallbackArguments(u, m, a, n, "next", k, w);
				P = function() {
					$cfs.css("zIndex", $cfs.data("_cfs_origCssZindex"));
					sc_afterScroll($cfs, y, t);
					crsl.isScrolling = !1;
					clbk.onAfter = sc_fireCallbacks($tt0, t, "onAfter", q, clbk);
					queu = sc_fireQueue($cfs, queu, conf);
					crsl.isPaused || $cfs.trigger(cf_e("play", conf))
				};
				crsl.isScrolling = !0;
				tmrs = sc_clearTimers(tmrs);
				clbk.onBefore = sc_fireCallbacks($tt0, t, "onBefore", q, clbk);
				switch (t.fx) {
					case "none":
						$cfs.css(S);
						L();
						O();
						_();
						B();
						H();
						P();
						break;
					case "fade":
						scrl.anims.push([$cfs, {
								opacity: 0
							},
							function() {
								L();
								O();
								_();
								B();
								H();
								scrl = sc_setScroll(k, t.easing, conf);
								scrl.anims.push([$cfs, {
										opacity: 1
									},
									P
								]);
								sc_startScroll(scrl, conf)
							}
						]);
						break;
					case "crossfade":
						$cfs.css({
							opacity: 0
						});
						scrl.anims.push([y, {
							opacity: 0
						}]);
						scrl.anims.push([$cfs, {
								opacity: 1
							},
							P
						]);
						A();
						O();
						_();
						B();
						H();
						break;
					case "cover":
						$cfs.css(opts.d.left, $wrp[opts.d.width]());
						scrl.anims.push([$cfs, C, P]);
						A();
						O();
						_();
						H();
						break;
					case "cover-fade":
						$cfs.css(opts.d.left, $wrp[opts.d.width]());
						scrl.anims.push([y, {
							opacity: 0
						}]);
						scrl.anims.push([$cfs, C, P]);
						A();
						O();
						_();
						H();
						break;
					case "uncover":
						scrl.anims.push([y, x, P]);
						A();
						O();
						_();
						B();
						H();
						break;
					case "uncover-fade":
						$cfs.css({
							opacity: 0
						});
						scrl.anims.push([$cfs, {
							opacity: 1
						}]);
						scrl.anims.push([y, x, P]);
						A();
						O();
						_();
						B();
						H();
						break;
					default:
						scrl.anims.push([$cfs, S,
							function() {
								B();
								H();
								P()
							}
						]);
						A();
						M();
						D()
				}
				sc_startScroll(scrl, conf);
				cf_setCookie(opts.cookie, $cfs, conf);
				$cfs.trigger(cf_e("updatePageStatus", conf), [!1, w]);
				return !0
			});
			$cfs.bind(cf_e("slideTo", conf), function(e, t, n, r, i, s, o) {
				e.stopPropagation();
				var u = [t, n, r, i, s, o],
					a = ["string/number/object", "number", "boolean", "object", "string", "function"],
					f = cf_sortParams(u, a);
				i = f[3];
				s = f[4];
				o = f[5];
				t = gn_getItemIndex(f[0], f[1], f[2], itms, $cfs);
				if (t == 0) return !1;
				is_object(i) || (i = !1);
				s != "prev" && s != "next" && (opts.circular ? s = t <= itms.total / 2 ? "next" : "prev" : s = itms.first == 0 || itms.first > t ? "next" : "prev");
				s == "prev" && (t = itms.total - t);
				$cfs.trigger(cf_e(s, conf), [i, t, o]);
				return !0
			});
			$cfs.bind(cf_e("prevPage", conf), function(e, t, n) {
				e.stopPropagation();
				var r = $cfs.triggerHandler(cf_e("currentPage", conf));
				return $cfs.triggerHandler(cf_e("slideToPage", conf), [r - 1, t, "prev", n])
			});
			$cfs.bind(cf_e("nextPage", conf), function(e, t, n) {
				e.stopPropagation();
				var r = $cfs.triggerHandler(cf_e("currentPage", conf));
				return $cfs.triggerHandler(cf_e("slideToPage", conf), [r + 1, t, "next", n])
			});
			$cfs.bind(cf_e("slideToPage", conf), function(e, t, n, r, i) {
				e.stopPropagation();
				is_number(t) || (t = $cfs.triggerHandler(cf_e("currentPage", conf)));
				var s = opts.pagination.items || opts.items.visible,
					o = Math.ceil(itms.total / s) - 1;
				t < 0 && (t = o);
				t > o && (t = 0);
				return $cfs.triggerHandler(cf_e("slideTo", conf), [t * s, 0, !0, n, r, i])
			});
			$cfs.bind(cf_e("jumpToStart", conf), function(e, t) {
				e.stopPropagation();
				t ? t = gn_getItemIndex(t, 0, !0, itms, $cfs) : t = 0;
				t += itms.first;
				if (t != 0) {
					if (itms.total > 0)
						while (t > itms.total) t -= itms.total;
					$cfs.prepend($cfs.children().slice(t, itms.total))
				}
				return !0
			});
			$cfs.bind(cf_e("synchronise", conf), function(e, t) {
				e.stopPropagation();
				if (t) t = cf_getSynchArr(t);
				else {
					if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
					t = opts.synchronise
				}
				var n = $cfs.triggerHandler(cf_e("currentPosition", conf)),
					r = !0;
				for (var i = 0, s = t.length; i < s; i++) t[i][0].triggerHandler(cf_e("slideTo", conf), [n, t[i][3], !0]) || (r = !1);
				return r
			});
			$cfs.bind(cf_e("queue", conf), function(e, t, n) {
				e.stopPropagation();
				is_function(t) ? t.call($tt0, queu) : is_array(t) ? queu = t : is_undefined(t) || queu.push([t, n]);
				return queu
			});
			$cfs.bind(cf_e("insertItem", conf), function(e, t, n, r, i) {
				e.stopPropagation();
				var s = [t, n, r, i],
					o = ["string/object", "string/number/object", "boolean", "number"],
					u = cf_sortParams(s, o);
				t = u[0];
				n = u[1];
				r = u[2];
				i = u[3];
				is_object(t) && !is_jquery(t) ? t = $(t) : is_string(t) && (t = $(t));
				if (!is_jquery(t) || t.length == 0) return debug(conf, "Not a valid object.");
				is_undefined(n) && (n = "end");
				sz_storeMargin(t, opts);
				sz_storeOrigCss(t);
				var a = n,
					f = "before";
				if (n == "end")
					if (r) {
						if (itms.first == 0) {
							n = itms.total - 1;
							f = "after"
						} else {
							n = itms.first;
							itms.first += t.length
						}
						n < 0 && (n = 0)
					} else {
						n = itms.total - 1;
						f = "after"
					} else n = gn_getItemIndex(n, i, r, itms, $cfs);
				var l = $cfs.children().eq(n);
				if (l.length) l[f](t);
				else {
					debug(conf, "Correct insert-position not found! Appending item to the end.");
					$cfs.append(t)
				}
				a != "end" && !r && n < itms.first && (itms.first += t.length);
				itms.total = $cfs.children().length;
				itms.first >= itms.total && (itms.first -= itms.total);
				$cfs.trigger(cf_e("updateSizes", conf));
				$cfs.trigger(cf_e("linkAnchors", conf));
				return !0
			});
			$cfs.bind(cf_e("removeItem", conf), function(e, t, n, r) {
				e.stopPropagation();
				var i = [t, n, r],
					s = ["string/number/object", "boolean", "number"],
					o = cf_sortParams(i, s);
				t = o[0];
				n = o[1];
				r = o[2];
				var u = !1;
				if (t instanceof $ && t.length > 1) {
					a = $();
					t.each(function(e, t) {
						var i = $cfs.trigger(cf_e("removeItem", conf), [$(this), n, r]);
						i && (a = a.add(i))
					});
					return a
				}
				if (is_undefined(t) || t == "end") a = $cfs.children().last();
				else {
					t = gn_getItemIndex(t, r, n, itms, $cfs);
					var a = $cfs.children().eq(t);
					a.length && t < itms.first && (itms.first -= a.length)
				} if (a && a.length) {
					a.detach();
					itms.total = $cfs.children().length;
					$cfs.trigger(cf_e("updateSizes", conf))
				}
				return a
			});
			$cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(e, t) {
				e.stopPropagation();
				var n = e.type.slice(conf.events.prefix.length);
				is_array(t) && (clbk[n] = t);
				is_function(t) && clbk[n].push(t);
				return clbk[n]
			});
			$cfs.bind(cf_e("currentPosition", conf), function(e, t) {
				e.stopPropagation();
				if (itms.first == 0) var n = 0;
				else var n = itms.total - itms.first;
				is_function(t) && t.call($tt0, n);
				return n
			});
			$cfs.bind(cf_e("currentPage", conf), function(e, t) {
				e.stopPropagation();
				var n = opts.pagination.items || opts.items.visible,
					r = Math.ceil(itms.total / n - 1),
					i;
				itms.first == 0 ? i = 0 : itms.first < itms.total % n ? i = 0 : itms.first == n && !opts.circular ? i = r : i = Math.round((itms.total - itms.first) / n);
				i < 0 && (i = 0);
				i > r && (i = r);
				is_function(t) && t.call($tt0, i);
				return i
			});
			$cfs.bind(cf_e("currentVisible", conf), function(e, t) {
				e.stopPropagation();
				var n = gi_getCurrentItems($cfs.children(), opts);
				is_function(t) && t.call($tt0, n);
				return n
			});
			$cfs.bind(cf_e("slice", conf), function(e, t, n, r) {
				e.stopPropagation();
				if (itms.total == 0) return !1;
				var i = [t, n, r],
					s = ["number", "number", "function"],
					o = cf_sortParams(i, s);
				t = is_number(o[0]) ? o[0] : 0;
				n = is_number(o[1]) ? o[1] : itms.total;
				r = o[2];
				t += itms.first;
				n += itms.first;
				if (items.total > 0) {
					while (t > itms.total) t -= itms.total;
					while (n > itms.total) n -= itms.total;
					while (t < 0) t += itms.total;
					while (n < 0) n += itms.total
				}
				var u = $cfs.children(),
					a;
				n > t ? a = u.slice(t, n) : a = $(u.slice(t, itms.total).get().concat(u.slice(0, n).get()));
				is_function(r) && r.call($tt0, a);
				return a
			});
			$cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(e, t) {
				e.stopPropagation();
				var n = e.type.slice(conf.events.prefix.length),
					r = crsl[n];
				is_function(t) && t.call($tt0, r);
				return r
			});
			$cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
				e.stopPropagation();
				var reInit = !1;
				if (is_function(a)) a.call($tt0, opts);
				else if (is_object(a)) {
					opts_orig = $.extend(!0, {}, opts_orig, a);
					b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a)
				} else if (!is_undefined(a))
					if (is_function(b)) {
						var val = eval("opts." + a);
						is_undefined(val) && (val = "");
						b.call($tt0, val)
					} else {
						if ( !! is_undefined(b)) return eval("opts." + a);
						typeof c != "boolean" && (c = !0);
						eval("opts_orig." + a + " = b");
						c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
					}
				if (reInit) {
					sz_resetMargin($cfs.children(), opts);
					FN._init(opts_orig);
					FN._bind_buttons();
					var sz = sz_setSizes($cfs, opts);
					$cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
				}
				return opts
			});
			$cfs.bind(cf_e("linkAnchors", conf), function(e, t, n) {
				e.stopPropagation();
				is_undefined(t) ? t = $("body") : is_string(t) && (t = $(t));
				if (!is_jquery(t) || t.length == 0) return debug(conf, "Not a valid object.");
				is_string(n) || (n = "a.caroufredsel");
				t.find(n).each(function() {
					var e = this.hash || "";
					e.length > 0 && $cfs.children().index($(e)) != -1 && $(this).unbind("click").click(function(t) {
						t.preventDefault();
						$cfs.trigger(cf_e("slideTo", conf), e)
					})
				});
				return !0
			});
			$cfs.bind(cf_e("updatePageStatus", conf), function(e, t, n) {
				e.stopPropagation();
				if (!opts.pagination.container) return;
				var r = opts.pagination.items || opts.items.visible,
					i = Math.ceil(itms.total / r);
				if (t) {
					if (opts.pagination.anchorBuilder) {
						opts.pagination.container.children().remove();
						opts.pagination.container.each(function() {
							for (var e = 0; e < i; e++) {
								var t = $cfs.children().eq(gn_getItemIndex(e * r, 0, !0, itms, $cfs));
								$(this).append(opts.pagination.anchorBuilder.call(t[0], e + 1))
							}
						})
					}
					opts.pagination.container.each(function() {
						$(this).children().unbind(opts.pagination.event).each(function(e) {
							$(this).bind(opts.pagination.event, function(t) {
								t.preventDefault();
								$cfs.trigger(cf_e("slideTo", conf), [e * r, -opts.pagination.deviation, !0, opts.pagination])
							})
						})
					})
				}
				var s = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
				s >= i && (s = 0);
				s < 0 && (s = i - 1);
				opts.pagination.container.each(function() {
					$(this).children().removeClass(cf_c("selected", conf)).eq(s).addClass(cf_c("selected", conf))
				});
				return !0
			});
			$cfs.bind(cf_e("updateSizes", conf), function(e) {
				var t = opts.items.visible,
					n = $cfs.children(),
					r = ms_getParentSize($wrp, opts, "width");
				itms.total = n.length;
				if (crsl.primarySizePercentage) {
					opts.maxDimension = r;
					opts[opts.d.width] = ms_getPercentage(r, crsl.primarySizePercentage)
				} else opts.maxDimension = ms_getMaxDimension(opts, r); if (opts.responsive) {
					opts.items.width = opts.items.sizesConf.width;
					opts.items.height = opts.items.sizesConf.height;
					opts = in_getResponsiveValues(opts, n, r);
					t = opts.items.visible;
					sz_setResponsiveSizes(opts, n)
				} else opts.items.visibleConf.variable ? t = gn_getVisibleItemsNext(n, opts, 0) : opts.items.filter != "*" && (t = gn_getVisibleItemsNextFilter(n, opts, 0)); if (!opts.circular && itms.first != 0 && t > itms.first) {
					if (opts.items.visibleConf.variable) var i = gn_getVisibleItemsPrev(n, opts, itms.first) - itms.first;
					else if (opts.items.filter != "*") var i = gn_getVisibleItemsPrevFilter(n, opts, itms.first) - itms.first;
					else var i = opts.items.visible - itms.first;
					debug(conf, "Preventing non-circular: sliding " + i + " items backward.");
					$cfs.trigger(cf_e("prev", conf), i)
				}
				opts.items.visible = cf_getItemsAdjust(t, opts, opts.items.visibleConf.adjust, $tt0);
				opts.items.visibleConf.old = opts.items.visible;
				opts = in_getAlignPadding(opts, n);
				var s = sz_setSizes($cfs, opts);
				$cfs.trigger(cf_e("updatePageStatus", conf), [!0, s]);
				nv_showNavi(opts, itms.total, conf);
				nv_enableNavi(opts, itms.first, conf);
				return s
			});
			$cfs.bind(cf_e("destroy", conf), function(e, t) {
				e.stopPropagation();
				tmrs = sc_clearTimers(tmrs);
				$cfs.data("_cfs_isCarousel", !1);
				$cfs.trigger(cf_e("finish", conf));
				t && $cfs.trigger(cf_e("jumpToStart", conf));
				sz_restoreOrigCss($cfs.children());
				sz_restoreOrigCss($cfs);
				FN._unbind_events();
				FN._unbind_buttons();
				conf.wrapper == "parent" ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs);
				return !0
			});
			$cfs.bind(cf_e("debug", conf), function(e) {
				debug(conf, "Carousel width: " + opts.width);
				debug(conf, "Carousel height: " + opts.height);
				debug(conf, "Item widths: " + opts.items.width);
				debug(conf, "Item heights: " + opts.items.height);
				debug(conf, "Number of items visible: " + opts.items.visible);
				opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items);
				opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items);
				opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items);
				return conf.debug
			});
			$cfs.bind("_cfs_triggerEvent", function(e, t, n) {
				e.stopPropagation();
				return $cfs.triggerHandler(cf_e(t, conf), n)
			})
		};
		FN._unbind_events = function() {
			$cfs.unbind(cf_e("", conf));
			$cfs.unbind(cf_e("", conf, !1));
			$cfs.unbind("_cfs_triggerEvent")
		};
		FN._bind_buttons = function() {
			FN._unbind_buttons();
			nv_showNavi(opts, itms.total, conf);
			nv_enableNavi(opts, itms.first, conf);
			if (opts.auto.pauseOnHover) {
				var e = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
				$wrp.bind(cf_e("mouseenter", conf, !1), function() {
					$cfs.trigger(cf_e("pause", conf), e)
				}).bind(cf_e("mouseleave", conf, !1), function() {
					$cfs.trigger(cf_e("resume", conf))
				})
			}
			opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(e) {
				e.preventDefault();
				var t = !1,
					n = null;
				if (crsl.isPaused) t = "play";
				else if (opts.auto.pauseOnEvent) {
					t = "pause";
					n = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)
				}
				t && $cfs.trigger(cf_e(t, conf), n)
			});
			if (opts.prev.button) {
				opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e("prev", conf))
				});
				if (opts.prev.pauseOnHover) {
					var e = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
					opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
						$cfs.trigger(cf_e("pause", conf), e)
					}).bind(cf_e("mouseleave", conf, !1), function() {
						$cfs.trigger(cf_e("resume", conf))
					})
				}
			}
			if (opts.next.button) {
				opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(e) {
					e.preventDefault();
					$cfs.trigger(cf_e("next", conf))
				});
				if (opts.next.pauseOnHover) {
					var e = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
					opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
						$cfs.trigger(cf_e("pause", conf), e)
					}).bind(cf_e("mouseleave", conf, !1), function() {
						$cfs.trigger(cf_e("resume", conf))
					})
				}
			}
			if (opts.pagination.container && opts.pagination.pauseOnHover) {
				var e = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
				opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
					$cfs.trigger(cf_e("pause", conf), e)
				}).bind(cf_e("mouseleave", conf, !1), function() {
					$cfs.trigger(cf_e("resume", conf))
				})
			}(opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(e) {
				var t = e.keyCode;
				if (t == opts.next.key) {
					e.preventDefault();
					$cfs.trigger(cf_e("next", conf))
				}
				if (t == opts.prev.key) {
					e.preventDefault();
					$cfs.trigger(cf_e("prev", conf))
				}
			});
			opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(e) {
				var t = e.keyCode;
				if (t >= 49 && t < 58) {
					t = (t - 49) * opts.items.visible;
					if (t <= itms.total) {
						e.preventDefault();
						$cfs.trigger(cf_e("slideTo", conf), [t, 0, !0, opts.pagination])
					}
				}
			});
			if ($.fn.swipe) {
				var t = "ontouchstart" in window;
				if (t && opts.swipe.onTouch || !t && opts.swipe.onMouse) {
					var n = $.extend(!0, {}, opts.prev, opts.swipe),
						r = $.extend(!0, {}, opts.next, opts.swipe),
						i = function() {
							$cfs.trigger(cf_e("prev", conf), [n])
						}, s = function() {
							$cfs.trigger(cf_e("next", conf), [r])
						};
					switch (opts.direction) {
						case "up":
						case "down":
							opts.swipe.options.swipeUp = s;
							opts.swipe.options.swipeDown = i;
							break;
						default:
							opts.swipe.options.swipeLeft = s;
							opts.swipe.options.swipeRight = i
					}
					crsl.swipe && $cfs.swipe("destroy");
					$wrp.swipe(opts.swipe.options);
					$wrp.css("cursor", "move");
					crsl.swipe = !0
				}
			}
			if ($.fn.mousewheel && opts.mousewheel) {
				var o = $.extend(!0, {}, opts.prev, opts.mousewheel),
					u = $.extend(!0, {}, opts.next, opts.mousewheel);
				crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1));
				$wrp.bind(cf_e("mousewheel", conf, !1), function(e, t) {
					e.preventDefault();
					t > 0 ? $cfs.trigger(cf_e("prev", conf), [o]) : $cfs.trigger(cf_e("next", conf), [u])
				});
				crsl.mousewheel = !0
			}
			opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay);
			if (crsl.upDateOnWindowResize) {
				var a = function(e) {
					$cfs.trigger(cf_e("finish", conf));
					opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf));
					sz_resetMargin($cfs.children(), opts);
					$cfs.trigger(cf_e("updateSizes", conf))
				}, f = $(window),
					l = null;
				if ($.debounce && conf.onWindowResize == "debounce") l = $.debounce(200, a);
				else if ($.throttle && conf.onWindowResize == "throttle") l = $.throttle(300, a);
				else {
					var c = 0,
						h = 0;
					l = function() {
						var e = f.width(),
							t = f.height();
						if (e != c || t != h) {
							a();
							c = e;
							h = t
						}
					}
				}
				f.bind(cf_e("resize", conf, !1, !0, !0), l)
			}
		};
		FN._unbind_buttons = function() {
			var e = cf_e("", conf),
				t = cf_e("", conf, !1);
			ns3 = cf_e("", conf, !1, !0, !0);
			$(document).unbind(ns3);
			$(window).unbind(ns3);
			$wrp.unbind(t);
			opts.auto.button && opts.auto.button.unbind(t);
			opts.prev.button && opts.prev.button.unbind(t);
			opts.next.button && opts.next.button.unbind(t);
			if (opts.pagination.container) {
				opts.pagination.container.unbind(t);
				opts.pagination.anchorBuilder && opts.pagination.container.children().remove()
			}
			if (crsl.swipe) {
				$cfs.swipe("destroy");
				$wrp.css("cursor", "default");
				crsl.swipe = !1
			}
			crsl.mousewheel && (crsl.mousewheel = !1);
			nv_showNavi(opts, "hide", conf);
			nv_enableNavi(opts, "removeClass", conf)
		};
		is_boolean(configs) && (configs = {
			debug: configs
		});
		var crsl = {
			direction: "next",
			isPaused: !0,
			isScrolling: !1,
			isStopped: !1,
			mousewheel: !1,
			swipe: !1
		}, itms = {
				total: $cfs.children().length,
				first: 0
			}, tmrs = {
				auto: null,
				progress: null,
				startTime: getTime(),
				timePassed: 0
			}, scrl = {
				isStopped: !1,
				duration: 0,
				startTime: 0,
				easing: "",
				anims: []
			}, clbk = {
				onBefore: [],
				onAfter: []
			}, queu = [],
			conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
			opts = {}, opts_orig = $.extend(!0, {}, options),
			$wrp = conf.wrapper == "parent" ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
		conf.selector = $cfs.selector;
		conf.serialNumber = $.fn.carouFredSel.serialNumber++;
		conf.transition = conf.transition && $.fn.transition ? "transition" : "animate";
		FN._init(opts_orig, !0, starting_position);
		FN._build();
		FN._bind_events();
		FN._bind_buttons();
		if (is_array(opts.items.start)) var start_arr = opts.items.start;
		else {
			var start_arr = [];
			opts.items.start != 0 && start_arr.push(opts.items.start)
		}
		opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10));
		if (start_arr.length > 0)
			for (var a = 0, l = start_arr.length; a < l; a++) {
				var s = start_arr[a];
				if (s == 0) continue;
				if (s === !0) {
					s = window.location.hash;
					if (s.length < 1) continue
				} else s === "random" && (s = Math.floor(Math.random() * itms.total)); if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
					fx: "none"
				}])) break
			}
		var siz = sz_setSizes($cfs, opts),
			itm = gi_getCurrentItems($cfs.children(), opts);
		opts.onCreate && opts.onCreate.call($tt0, {
			width: siz.width,
			height: siz.height,
			items: itm
		});
		$cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]);
		$cfs.trigger(cf_e("linkAnchors", conf));
		conf.debug && $cfs.trigger(cf_e("debug", conf));
		return $cfs
	};
	$.fn.carouFredSel.serialNumber = 1;
	$.fn.carouFredSel.defaults = {
		synchronise: !1,
		infinite: !0,
		circular: !0,
		responsive: !1,
		direction: "left",
		items: {
			start: 0
		},
		scroll: {
			easing: "swing",
			duration: 500,
			pauseOnHover: !1,
			event: "click",
			queue: !1
		}
	};
	$.fn.carouFredSel.configs = {
		debug: !1,
		transition: !1,
		onWindowResize: "throttle",
		events: {
			prefix: "",
			namespace: "cfs"
		},
		wrapper: {
			element: "div",
			classname: "caroufredsel_wrapper"
		},
		classnames: {}
	};
	$.fn.carouFredSel.pageAnchorBuilder = function(e) {
		return '<a href="#"><span>' + e + "</span></a>"
	};
	$.fn.carouFredSel.progressbarUpdater = function(e) {
		$(this).css("width", e + "%")
	};
	$.fn.carouFredSel.cookie = {
		get: function(e) {
			e += "=";
			var t = document.cookie.split(";");
			for (var n = 0, r = t.length; n < r; n++) {
				var i = t[n];
				while (i.charAt(0) == " ") i = i.slice(1);
				if (i.indexOf(e) == 0) return i.slice(e.length)
			}
			return 0
		},
		set: function(e, t, n) {
			var r = "";
			if (n) {
				var i = new Date;
				i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3);
				r = "; expires=" + i.toGMTString()
			}
			document.cookie = e + "=" + t + r + "; path=/"
		},
		remove: function(e) {
			$.fn.carouFredSel.cookie.set(e, "", -1)
		}
	};
	$.extend($.easing, {
		quadratic: function(e) {
			var t = e * e;
			return e * (-t * e + 4 * t - 6 * e + 4)
		},
		cubic: function(e) {
			return e * (4 * e * e - 9 * e + 6)
		},
		elastic: function(e) {
			var t = e * e;
			return e * (33 * t * t - 106 * t * e + 126 * t - 67 * e + 15)
		}
	})
})(jQuery);;;
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2013 M. Alsup
 * Version: 3.0.3 (11-JUL-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */
(function($, undefined) {
	"use strict";
	var ver = '3.0.3';

	function debug(s) {
		if ($.fn.cycle.debug)
			log(s);
	}

	function log() {
		if (window.console && console.log)
			console.log('[cycle] ' + Array.prototype.join.call(arguments, ' '));
	}
	$.expr[':'].paused = function(el) {
		return el.cyclePause;
	};
	$.fn.cycle = function(options, arg2) {
		var o = {
			s: this.selector,
			c: this.context
		};
		if (this.length === 0 && options != 'stop') {
			if (!$.isReady && o.s) {
				log('DOM not ready, queuing slideshow');
				$(function() {
					$(o.s, o.c).cycle(options, arg2);
				});
				return this;
			}
			log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
			return this;
		}
		return this.each(function() {
			var opts = handleArguments(this, options, arg2);
			if (opts === false)
				return;
			opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
			if (this.cycleTimeout)
				clearTimeout(this.cycleTimeout);
			this.cycleTimeout = this.cyclePause = 0;
			this.cycleStop = 0;
			var $cont = $(this);
			var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
			var els = $slides.get();
			if (els.length < 2) {
				log('terminating; too few slides: ' + els.length);
				return;
			}
			var opts2 = buildOptions($cont, $slides, els, opts, o);
			if (opts2 === false)
				return;
			var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);
			if (startTime) {
				startTime += (opts2.delay || 0);
				if (startTime < 10)
					startTime = 10;
				debug('first timeout: ' + startTime);
				this.cycleTimeout = setTimeout(function() {
					go(els, opts2, 0, !opts.backwards);
				}, startTime);
			}
		});
	};

	function triggerPause(cont, byHover, onPager) {
		var opts = $(cont).data('cycle.opts');
		if (!opts)
			return;
		var paused = !! cont.cyclePause;
		if (paused && opts.paused)
			opts.paused(cont, opts, byHover, onPager);
		else if (!paused && opts.resumed)
			opts.resumed(cont, opts, byHover, onPager);
	}

	function handleArguments(cont, options, arg2) {
		if (cont.cycleStop === undefined)
			cont.cycleStop = 0;
		if (options === undefined || options === null)
			options = {};
		if (options.constructor == String) {
			switch (options) {
				case 'destroy':
				case 'stop':
					var opts = $(cont).data('cycle.opts');
					if (!opts)
						return false;
					cont.cycleStop++;
					if (cont.cycleTimeout)
						clearTimeout(cont.cycleTimeout);
					cont.cycleTimeout = 0;
					if (opts.elements)
						$(opts.elements).stop();
					$(cont).removeData('cycle.opts');
					if (options == 'destroy')
						destroy(cont, opts);
					return false;
				case 'toggle':
					cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
					checkInstantResume(cont.cyclePause, arg2, cont);
					triggerPause(cont);
					return false;
				case 'pause':
					cont.cyclePause = 1;
					triggerPause(cont);
					return false;
				case 'resume':
					cont.cyclePause = 0;
					checkInstantResume(false, arg2, cont);
					triggerPause(cont);
					return false;
				case 'prev':
				case 'next':
					opts = $(cont).data('cycle.opts');
					if (!opts) {
						log('options not found, "prev/next" ignored');
						return false;
					}
					if (typeof arg2 == 'string')
						opts.oneTimeFx = arg2;
					$.fn.cycle[options](opts);
					return false;
				default:
					options = {
						fx: options
					};
			}
			return options;
		} else if (options.constructor == Number) {
			var num = options;
			options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not advance slide');
				return false;
			}
			if (num < 0 || num >= options.elements.length) {
				log('invalid slide index: ' + num);
				return false;
			}
			options.nextSlide = num;
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			if (typeof arg2 == 'string')
				options.oneTimeFx = arg2;
			go(options.elements, options, 1, num >= options.currSlide);
			return false;
		}
		return options;

		function checkInstantResume(isPaused, arg2, cont) {
			if (!isPaused && arg2 === true) {
				var options = $(cont).data('cycle.opts');
				if (!options) {
					log('options not found, can not resume');
					return false;
				}
				if (cont.cycleTimeout) {
					clearTimeout(cont.cycleTimeout);
					cont.cycleTimeout = 0;
				}
				go(options.elements, options, 1, !options.backwards);
			}
		}
	}

	function removeFilter(el, opts) {
		if (!$.support.opacity && opts.cleartype && el.style.filter) {
			try {
				el.style.removeAttribute('filter');
			} catch (smother) {}
		}
	}

	function destroy(cont, opts) {
		if (opts.next)
			$(opts.next).unbind(opts.prevNextEvent);
		if (opts.prev)
			$(opts.prev).unbind(opts.prevNextEvent);
		if (opts.pager || opts.pagerAnchorBuilder)
			$.each(opts.pagerAnchors || [], function() {
				this.unbind().remove();
			});
		opts.pagerAnchors = null;
		$(cont).unbind('mouseenter.cycle mouseleave.cycle');
		if (opts.destroy)
			opts.destroy(opts);
	}

	function buildOptions($cont, $slides, els, options, o) {
		var startingSlideSpecified;
		var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
		var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
		if (meta)
			opts = $.extend(opts, meta);
		if (opts.autostop)
			opts.countdown = opts.autostopCount || els.length;
		var cont = $cont[0];
		$cont.data('cycle.opts', opts);
		opts.$cont = $cont;
		opts.stopCount = cont.cycleStop;
		opts.elements = els;
		opts.before = opts.before ? [opts.before] : [];
		opts.after = opts.after ? [opts.after] : [];
		if (!$.support.opacity && opts.cleartype)
			opts.after.push(function() {
				removeFilter(this, opts);
			});
		if (opts.continuous)
			opts.after.push(function() {
				go(els, opts, 0, !opts.backwards);
			});
		saveOriginalOpts(opts);
		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($slides);
		if ($cont.css('position') == 'static')
			$cont.css('position', 'relative');
		if (opts.width)
			$cont.width(opts.width);
		if (opts.height && opts.height != 'auto')
			$cont.height(opts.height);
		if (opts.startingSlide !== undefined) {
			opts.startingSlide = parseInt(opts.startingSlide, 10);
			if (opts.startingSlide >= els.length || opts.startSlide < 0) {
				opts.startingSlide = 0;
			} else {
				startingSlideSpecified = true;
			}
		} else if (opts.backwards) {
			opts.startingSlide = els.length - 1;
		} else {
			opts.startingSlide = 0;
		}
		if (opts.random) {
			opts.randomMap = [];
			for (var i = 0; i < els.length; i++)
				opts.randomMap.push(i);
			opts.randomMap.sort(function(a, b) {
				return Math.random() - 0.5;
			});
			if (startingSlideSpecified) {
				for (var cnt = 0; cnt < els.length; cnt++) {
					if (opts.startingSlide == opts.randomMap[cnt]) {
						opts.randomIndex = cnt;
					}
				}
			} else {
				opts.randomIndex = 1;
				opts.startingSlide = opts.randomMap[1];
			}
		} else if (opts.startingSlide >= els.length)
			opts.startingSlide = 0;
		opts.currSlide = opts.startingSlide || 0;
		var first = opts.startingSlide;
		$slides.css({
			position: 'absolute',
			top: 0,
			left: 0
		}).hide().each(function(i) {
			var z;
			if (opts.backwards) {
				z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
			} else {
				z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
			}
			$(this).css('z-index', z);
		});
		$(els[first]).css('opacity', 1).show();
		removeFilter(els[first], opts);
		if (opts.fit) {
			if (!opts.aspect) {
				if (opts.width)
					$slides.width(opts.width);
				if (opts.height && opts.height != 'auto')
					$slides.height(opts.height);
			} else {
				$slides.each(function() {
					var $slide = $(this);
					var ratio = (opts.aspect === true) ? $slide.width() / $slide.height() : opts.aspect;
					if (opts.width && $slide.width() != opts.width) {
						$slide.width(opts.width);
						$slide.height(opts.width / ratio);
					}
					if (opts.height && $slide.height() < opts.height) {
						$slide.height(opts.height);
						$slide.width(opts.height * ratio);
					}
				});
			}
		}
		if (opts.center && ((!opts.fit) || opts.aspect)) {
			$slides.each(function() {
				var $slide = $(this);
				$slide.css({
					"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
					"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
				});
			});
		}
		if (opts.center && !opts.fit && !opts.slideResize) {
			$slides.each(function() {
				var $slide = $(this);
				$slide.css({
					"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
					"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
				});
			});
		}
		var reshape = (opts.containerResize || opts.containerResizeHeight) && $cont.innerHeight() < 1;
		if (reshape) {
			var maxw = 0,
				maxh = 0;
			for (var j = 0; j < els.length; j++) {
				var $e = $(els[j]),
					e = $e[0],
					w = $e.outerWidth(),
					h = $e.outerHeight();
				if (!w) w = e.offsetWidth || e.width || $e.attr('width');
				if (!h) h = e.offsetHeight || e.height || $e.attr('height');
				maxw = w > maxw ? w : maxw;
				maxh = h > maxh ? h : maxh;
			}
			if (opts.containerResize && maxw > 0 && maxh > 0)
				$cont.animate({
					width: maxw + 'px',
					height: maxh + 'px'
				});
			if (opts.containerResizeHeight && maxh > 0)
				$cont.animate({
					height: maxh + 'px'
				});
		}
		var pauseFlag = false;
		if (opts.pause)
			$cont.bind('mouseenter.cycle', function() {
				pauseFlag = true;
				this.cyclePause++;
				triggerPause(cont, true);
			}).bind('mouseleave.cycle', function() {
				if (pauseFlag)
					this.cyclePause--;
				triggerPause(cont, true);
			});
		if (supportMultiTransitions(opts) === false)
			return false;
		var requeue = false;
		options.requeueAttempts = options.requeueAttempts || 0;
		$slides.each(function() {
			var $el = $(this);
			this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
			this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);
			if ($el.is('img')) {
				var loading = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
				if (loading) {
					if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
						log(options.requeueAttempts, ' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
						setTimeout(function() {
							$(o.s, o.c).cycle(options);
						}, opts.requeueTimeout);
						requeue = true;
						return false;
					} else {
						log('could not determine size of image: ' + this.src, this.cycleW, this.cycleH);
					}
				}
			}
			return true;
		});
		if (requeue)
			return false;
		opts.cssBefore = opts.cssBefore || {};
		opts.cssAfter = opts.cssAfter || {};
		opts.cssFirst = opts.cssFirst || {};
		opts.animIn = opts.animIn || {};
		opts.animOut = opts.animOut || {};
		$slides.not(':eq(' + first + ')').css(opts.cssBefore);
		$($slides[first]).css(opts.cssFirst);
		if (opts.timeout) {
			opts.timeout = parseInt(opts.timeout, 10);
			if (opts.speed.constructor == String)
				opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed, 10);
			if (!opts.sync)
				opts.speed = opts.speed / 2;
			var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
			while ((opts.timeout - opts.speed) < buffer)
				opts.timeout += opts.speed;
		}
		if (opts.easing)
			opts.easeIn = opts.easeOut = opts.easing;
		if (!opts.speedIn)
			opts.speedIn = opts.speed;
		if (!opts.speedOut)
			opts.speedOut = opts.speed;
		opts.slideCount = els.length;
		opts.currSlide = opts.lastSlide = first;
		if (opts.random) {
			if (++opts.randomIndex == els.length)
				opts.randomIndex = 0;
			opts.nextSlide = opts.randomMap[opts.randomIndex];
		} else if (opts.backwards) {
			opts.nextSlide = opts.startingSlide === 0 ? (els.length - 1) : opts.startingSlide - 1;
		} else {
			opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;
		}
		if (!opts.multiFx) {
			var init = $.fn.cycle.transitions[opts.fx];
			if ($.isFunction(init))
				init($cont, $slides, opts);
			else if (opts.fx != 'custom' && !opts.multiFx) {
				log('unknown transition: ' + opts.fx, '; slideshow terminating');
				return false;
			}
		}
		var e0 = $slides[first];
		if (!opts.skipInitializationCallbacks) {
			if (opts.before.length)
				opts.before[0].apply(e0, [e0, e0, opts, true]);
			if (opts.after.length)
				opts.after[0].apply(e0, [e0, e0, opts, true]);
		}
		if (opts.next)
			$(opts.next).bind(opts.prevNextEvent, function() {
				return advance(opts, 1);
			});
		if (opts.prev)
			$(opts.prev).bind(opts.prevNextEvent, function() {
				return advance(opts, 0);
			});
		if (opts.pager || opts.pagerAnchorBuilder)
			buildPager(els, opts);
		exposeAddSlide(opts, els);
		return opts;
	}

	function saveOriginalOpts(opts) {
		opts.original = {
			before: [],
			after: []
		};
		opts.original.cssBefore = $.extend({}, opts.cssBefore);
		opts.original.cssAfter = $.extend({}, opts.cssAfter);
		opts.original.animIn = $.extend({}, opts.animIn);
		opts.original.animOut = $.extend({}, opts.animOut);
		$.each(opts.before, function() {
			opts.original.before.push(this);
		});
		$.each(opts.after, function() {
			opts.original.after.push(this);
		});
	}

	function supportMultiTransitions(opts) {
		var i, tx, txs = $.fn.cycle.transitions;
		if (opts.fx.indexOf(',') > 0) {
			opts.multiFx = true;
			opts.fxs = opts.fx.replace(/\s*/g, '').split(',');
			for (i = 0; i < opts.fxs.length; i++) {
				var fx = opts.fxs[i];
				tx = txs[fx];
				if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
					log('discarding unknown transition: ', fx);
					opts.fxs.splice(i, 1);
					i--;
				}
			}
			if (!opts.fxs.length) {
				log('No valid transitions named; slideshow terminating.');
				return false;
			}
		} else if (opts.fx == 'all') {
			opts.multiFx = true;
			opts.fxs = [];
			for (var p in txs) {
				if (txs.hasOwnProperty(p)) {
					tx = txs[p];
					if (txs.hasOwnProperty(p) && $.isFunction(tx))
						opts.fxs.push(p);
				}
			}
		}
		if (opts.multiFx && opts.randomizeEffects) {
			var r1 = Math.floor(Math.random() * 20) + 30;
			for (i = 0; i < r1; i++) {
				var r2 = Math.floor(Math.random() * opts.fxs.length);
				opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
			}
			debug('randomized fx sequence: ', opts.fxs);
		}
		return true;
	}

	function exposeAddSlide(opts, els) {
		opts.addSlide = function(newSlide, prepend) {
			var $s = $(newSlide),
				s = $s[0];
			if (!opts.autostopCount)
				opts.countdown++;
			els[prepend ? 'unshift' : 'push'](s);
			if (opts.els)
				opts.els[prepend ? 'unshift' : 'push'](s);
			opts.slideCount = els.length;
			if (opts.random) {
				opts.randomMap.push(opts.slideCount - 1);
				opts.randomMap.sort(function(a, b) {
					return Math.random() - 0.5;
				});
			}
			$s.css('position', 'absolute');
			$s[prepend ? 'prependTo' : 'appendTo'](opts.$cont);
			if (prepend) {
				opts.currSlide++;
				opts.nextSlide++;
			}
			if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
				clearTypeFix($s);
			if (opts.fit && opts.width)
				$s.width(opts.width);
			if (opts.fit && opts.height && opts.height != 'auto')
				$s.height(opts.height);
			s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
			s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();
			$s.css(opts.cssBefore);
			if (opts.pager || opts.pagerAnchorBuilder)
				$.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);
			if ($.isFunction(opts.onAddSlide))
				opts.onAddSlide($s);
			else
				$s.hide();
		};
	}
	$.fn.cycle.resetState = function(opts, fx) {
		fx = fx || opts.fx;
		opts.before = [];
		opts.after = [];
		opts.cssBefore = $.extend({}, opts.original.cssBefore);
		opts.cssAfter = $.extend({}, opts.original.cssAfter);
		opts.animIn = $.extend({}, opts.original.animIn);
		opts.animOut = $.extend({}, opts.original.animOut);
		opts.fxFn = null;
		$.each(opts.original.before, function() {
			opts.before.push(this);
		});
		$.each(opts.original.after, function() {
			opts.after.push(this);
		});
		var init = $.fn.cycle.transitions[fx];
		if ($.isFunction(init))
			init(opts.$cont, $(opts.elements), opts);
	};

	function go(els, opts, manual, fwd) {
		var p = opts.$cont[0],
			curr = els[opts.currSlide],
			next = els[opts.nextSlide];
		if (manual && opts.busy && opts.manualTrump) {
			debug('manualTrump in go(), stopping active transition');
			$(els).stop(true, true);
			opts.busy = 0;
			clearTimeout(p.cycleTimeout);
		}
		if (opts.busy) {
			debug('transition active, ignoring new tx request');
			return;
		}
		if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
			return;
		if (!manual && !p.cyclePause && !opts.bounce && ((opts.autostop && (--opts.countdown <= 0)) || (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
			if (opts.end)
				opts.end(opts);
			return;
		}
		var changed = false;
		if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
			changed = true;
			var fx = opts.fx;
			curr.cycleH = curr.cycleH || $(curr).height();
			curr.cycleW = curr.cycleW || $(curr).width();
			next.cycleH = next.cycleH || $(next).height();
			next.cycleW = next.cycleW || $(next).width();
			if (opts.multiFx) {
				if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
					opts.lastFx = 0;
				else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
					opts.lastFx = opts.fxs.length - 1;
				fx = opts.fxs[opts.lastFx];
			}
			if (opts.oneTimeFx) {
				fx = opts.oneTimeFx;
				opts.oneTimeFx = null;
			}
			$.fn.cycle.resetState(opts, fx);
			if (opts.before.length)
				$.each(opts.before, function(i, o) {
					if (p.cycleStop != opts.stopCount) return;
					o.apply(next, [curr, next, opts, fwd]);
				});
			var after = function() {
				opts.busy = 0;
				$.each(opts.after, function(i, o) {
					if (p.cycleStop != opts.stopCount) return;
					o.apply(next, [curr, next, opts, fwd]);
				});
				if (!p.cycleStop) {
					queueNext();
				}
			};
			debug('tx firing(' + fx + '); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
			opts.busy = 1;
			if (opts.fxFn) {
				opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
			} else if ($.isFunction($.fn.cycle[opts.fx])) {
				$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
			} else {
				$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
			}
		} else {
			queueNext();
		}
		if (changed || opts.nextSlide == opts.currSlide) {
			var roll;
			opts.lastSlide = opts.currSlide;
			if (opts.random) {
				opts.currSlide = opts.nextSlide;
				if (++opts.randomIndex == els.length) {
					opts.randomIndex = 0;
					opts.randomMap.sort(function(a, b) {
						return Math.random() - 0.5;
					});
				}
				opts.nextSlide = opts.randomMap[opts.randomIndex];
				if (opts.nextSlide == opts.currSlide)
					opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
			} else if (opts.backwards) {
				roll = (opts.nextSlide - 1) < 0;
				if (roll && opts.bounce) {
					opts.backwards = !opts.backwards;
					opts.nextSlide = 1;
					opts.currSlide = 0;
				} else {
					opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
					opts.currSlide = roll ? 0 : opts.nextSlide + 1;
				}
			} else {
				roll = (opts.nextSlide + 1) == els.length;
				if (roll && opts.bounce) {
					opts.backwards = !opts.backwards;
					opts.nextSlide = els.length - 2;
					opts.currSlide = els.length - 1;
				} else {
					opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
					opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
				}
			}
		}
		if (changed && opts.pager)
			opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);

		function queueNext() {
			var ms = 0,
				timeout = opts.timeout;
			if (opts.timeout && !opts.continuous) {
				ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
				if (opts.fx == 'shuffle')
					ms -= opts.speedOut;
			} else if (opts.continuous && p.cyclePause)
				ms = 10;
			if (ms > 0)
				p.cycleTimeout = setTimeout(function() {
					go(els, opts, 0, !opts.backwards);
				}, ms);
		}
	}
	$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
		$(pager).each(function() {
			$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
		});
	};

	function getTimeout(curr, next, opts, fwd) {
		if (opts.timeoutFn) {
			var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
			while (opts.fx != 'none' && (t - opts.speed) < 250)
				t += opts.speed;
			debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
			if (t !== false)
				return t;
		}
		return opts.timeout;
	}
	$.fn.cycle.next = function(opts) {
		advance(opts, 1);
	};
	$.fn.cycle.prev = function(opts) {
		advance(opts, 0);
	};

	function advance(opts, moveForward) {
		var val = moveForward ? 1 : -1;
		var els = opts.elements;
		var p = opts.$cont[0],
			timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		if (opts.random && val < 0) {
			opts.randomIndex--;
			if (--opts.randomIndex == -2)
				opts.randomIndex = els.length - 2;
			else if (opts.randomIndex == -1)
				opts.randomIndex = els.length - 1;
			opts.nextSlide = opts.randomMap[opts.randomIndex];
		} else if (opts.random) {
			opts.nextSlide = opts.randomMap[opts.randomIndex];
		} else {
			opts.nextSlide = opts.currSlide + val;
			if (opts.nextSlide < 0) {
				if (opts.nowrap) return false;
				opts.nextSlide = els.length - 1;
			} else if (opts.nextSlide >= els.length) {
				if (opts.nowrap) return false;
				opts.nextSlide = 0;
			}
		}
		var cb = opts.onPrevNextEvent || opts.prevNextClick;
		if ($.isFunction(cb))
			cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
		go(els, opts, 1, moveForward);
		return false;
	}

	function buildPager(els, opts) {
		var $p = $(opts.pager);
		$.each(els, function(i, o) {
			$.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
		});
		opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
	}
	$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
		var a;
		if ($.isFunction(opts.pagerAnchorBuilder)) {
			a = opts.pagerAnchorBuilder(i, el);
			debug('pagerAnchorBuilder(' + i + ', el) returned: ' + a);
		} else {
			a = '<a href="#"></a>';
		}
		if (!a)
			return;
		var $a = $(a);
		if ($a.parents('body').length === 0) {
			var arr = [];
			if ($p.length > 1) {
				$p.each(function() {
					var $clone = $a.clone(true);
					$(this).append($clone);
					arr.push($clone[0]);
				});
				$a = $(arr);
			} else {
				$a.appendTo($p);
			}
		}
		opts.pagerAnchors = opts.pagerAnchors || [];
		opts.pagerAnchors.push($a);
		var pagerFn = function(e) {
			e.preventDefault();
			opts.nextSlide = i;
			var p = opts.$cont[0],
				timeout = p.cycleTimeout;
			if (timeout) {
				clearTimeout(timeout);
				p.cycleTimeout = 0;
			}
			var cb = opts.onPagerEvent || opts.pagerClick;
			if ($.isFunction(cb))
				cb(opts.nextSlide, els[opts.nextSlide]);
			go(els, opts, 1, opts.currSlide < i);
		};
		if (/mouseenter|mouseover/i.test(opts.pagerEvent)) {
			$a.hover(pagerFn, function() {});
		} else {
			$a.bind(opts.pagerEvent, pagerFn);
		}
		if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
			$a.bind('click.cycle', function() {
				return false;
			});
		var cont = opts.$cont[0];
		var pauseFlag = false;
		if (opts.pauseOnPagerHover) {
			$a.hover(function() {
				pauseFlag = true;
				cont.cyclePause++;
				triggerPause(cont, true, true);
			}, function() {
				if (pauseFlag)
					cont.cyclePause--;
				triggerPause(cont, true, true);
			});
		}
	};
	$.fn.cycle.hopsFromLast = function(opts, fwd) {
		var hops, l = opts.lastSlide,
			c = opts.currSlide;
		if (fwd)
			hops = c > l ? c - l : opts.slideCount - l;
		else
			hops = c < l ? l - c : l + opts.slideCount - c;
		return hops;
	};

	function clearTypeFix($slides) {
		debug('applying clearType background-color hack');

		function hex(s) {
			s = parseInt(s, 10).toString(16);
			return s.length < 2 ? '0' + s : s;
		}

		function getBg(e) {
			for (; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
				var v = $.css(e, 'background-color');
				if (v && v.indexOf('rgb') >= 0) {
					var rgb = v.match(/\d+/g);
					return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
				}
				if (v && v != 'transparent')
					return v;
			}
			return '#ffffff';
		}
		$slides.each(function() {
			$(this).css('background-color', getBg(this));
		});
	}
	$.fn.cycle.commonReset = function(curr, next, opts, w, h, rev) {
		$(opts.elements).not(curr).hide();
		if (typeof opts.cssBefore.opacity == 'undefined')
			opts.cssBefore.opacity = 1;
		opts.cssBefore.display = 'block';
		if (opts.slideResize && w !== false && next.cycleW > 0)
			opts.cssBefore.width = next.cycleW;
		if (opts.slideResize && h !== false && next.cycleH > 0)
			opts.cssBefore.height = next.cycleH;
		opts.cssAfter = opts.cssAfter || {};
		opts.cssAfter.display = 'none';
		$(curr).css('zIndex', opts.slideCount + (rev === true ? 1 : 0));
		$(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
	};
	$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
		var $l = $(curr),
			$n = $(next);
		var speedIn = opts.speedIn,
			speedOut = opts.speedOut,
			easeIn = opts.easeIn,
			easeOut = opts.easeOut,
			animInDelay = opts.animInDelay,
			animOutDelay = opts.animOutDelay;
		$n.css(opts.cssBefore);
		if (speedOverride) {
			if (typeof speedOverride == 'number')
				speedIn = speedOut = speedOverride;
			else
				speedIn = speedOut = 1;
			easeIn = easeOut = null;
		}
		var fn = function() {
			$n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function() {
				cb();
			});
		};
		$l.delay(animOutDelay).animate(opts.animOut, speedOut, easeOut, function() {
			$l.css(opts.cssAfter);
			if (!opts.sync)
				fn();
		});
		if (opts.sync) fn();
	};
	$.fn.cycle.transitions = {
		fade: function($cont, $slides, opts) {
			$slides.not(':eq(' + opts.currSlide + ')').css('opacity', 0);
			opts.before.push(function(curr, next, opts) {
				$.fn.cycle.commonReset(curr, next, opts);
				opts.cssBefore.opacity = 0;
			});
			opts.animIn = {
				opacity: 1
			};
			opts.animOut = {
				opacity: 0
			};
			opts.cssBefore = {
				top: 0,
				left: 0
			};
		}
	};
	$.fn.cycle.ver = function() {
		return ver;
	};
	$.fn.cycle.defaults = {
		activePagerClass: 'activeSlide',
		after: null,
		allowPagerClickBubble: false,
		animIn: null,
		animInDelay: 0,
		animOut: null,
		animOutDelay: 0,
		aspect: false,
		autostop: 0,
		autostopCount: 0,
		backwards: false,
		before: null,
		center: null,
		cleartype: !$.support.opacity,
		cleartypeNoBg: false,
		containerResize: 1,
		containerResizeHeight: 0,
		continuous: 0,
		cssAfter: null,
		cssBefore: null,
		delay: 0,
		easeIn: null,
		easeOut: null,
		easing: null,
		end: null,
		fastOnEvent: 0,
		fit: 0,
		fx: 'fade',
		fxFn: null,
		height: 'auto',
		manualTrump: true,
		metaAttr: 'cycle',
		next: null,
		nowrap: 0,
		onPagerEvent: null,
		onPrevNextEvent: null,
		pager: null,
		pagerAnchorBuilder: null,
		pagerEvent: 'click.cycle',
		pause: 0,
		pauseOnPagerHover: 0,
		prev: null,
		prevNextEvent: 'click.cycle',
		random: 0,
		randomizeEffects: 1,
		requeueOnImageNotLoaded: true,
		requeueTimeout: 250,
		rev: 0,
		shuffle: null,
		skipInitializationCallbacks: false,
		slideExpr: null,
		slideResize: 1,
		speed: 1000,
		speedIn: null,
		speedOut: null,
		startingSlide: undefined,
		sync: 1,
		timeout: 4000,
		timeoutFn: null,
		updateActivePagerLink: null,
		width: null
	};
})(jQuery);
/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:  2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
	"use strict";
	$.fn.cycle.transitions.none = function($cont, $slides, opts) {
		opts.fxFn = function(curr, next, opts, after) {
			$(next).show();
			$(curr).hide();
			after();
		};
	};
	$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
		$slides.not(':eq(' + opts.currSlide + ')').css({
			display: 'block',
			'opacity': 1
		});
		opts.before.push(function(curr, next, opts, w, h, rev) {
			$(curr).css('zIndex', opts.slideCount + (rev !== true ? 1 : 0));
			$(next).css('zIndex', opts.slideCount + (rev !== true ? 0 : 1));
		});
		opts.animIn.opacity = 1;
		opts.animOut.opacity = 0;
		opts.cssBefore.opacity = 1;
		opts.cssBefore.display = 'block';
		opts.cssAfter.zIndex = 0;
	};
	$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push($.fn.cycle.commonReset);
		var h = $cont.height();
		opts.cssBefore.top = h;
		opts.cssBefore.left = 0;
		opts.cssFirst.top = 0;
		opts.animIn.top = 0;
		opts.animOut.top = -h;
	};
	$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push($.fn.cycle.commonReset);
		var h = $cont.height();
		opts.cssFirst.top = 0;
		opts.cssBefore.top = -h;
		opts.cssBefore.left = 0;
		opts.animIn.top = 0;
		opts.animOut.top = h;
	};
	$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push($.fn.cycle.commonReset);
		var w = $cont.width();
		opts.cssFirst.left = 0;
		opts.cssBefore.left = w;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
		opts.animOut.left = 0 - w;
	};
	$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push($.fn.cycle.commonReset);
		var w = $cont.width();
		opts.cssFirst.left = 0;
		opts.cssBefore.left = -w;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
		opts.animOut.left = w;
	};
	$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
		$cont.css('overflow', 'hidden').width();
		opts.before.push(function(curr, next, opts, fwd) {
			if (opts.rev)
				fwd = !fwd;
			$.fn.cycle.commonReset(curr, next, opts);
			opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
			opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
		});
		opts.cssFirst.left = 0;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
		opts.animOut.top = 0;
	};
	$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
		$cont.css('overflow', 'hidden');
		opts.before.push(function(curr, next, opts, fwd) {
			if (opts.rev)
				fwd = !fwd;
			$.fn.cycle.commonReset(curr, next, opts);
			opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
			opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
		});
		opts.cssFirst.top = 0;
		opts.cssBefore.left = 0;
		opts.animIn.top = 0;
		opts.animOut.left = 0;
	};
	$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$(opts.elements).not(curr).hide();
			$.fn.cycle.commonReset(curr, next, opts, false, true);
			opts.animIn.width = next.cycleW;
		});
		opts.cssBefore.left = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.width = 0;
		opts.animIn.width = 'show';
		opts.animOut.width = 0;
	};
	$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$(opts.elements).not(curr).hide();
			$.fn.cycle.commonReset(curr, next, opts, true, false);
			opts.animIn.height = next.cycleH;
		});
		opts.cssBefore.left = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.height = 0;
		opts.animIn.height = 'show';
		opts.animOut.height = 0;
	};
	$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
		var i, w = $cont.css('overflow', 'visible').width();
		$slides.css({
			left: 0,
			top: 0
		});
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, true, true);
		});
		if (!opts.speedAdjusted) {
			opts.speed = opts.speed / 2;
			opts.speedAdjusted = true;
		}
		opts.random = 0;
		opts.shuffle = opts.shuffle || {
			left: -w,
			top: 15
		};
		opts.els = [];
		for (i = 0; i < $slides.length; i++)
			opts.els.push($slides[i]);
		for (i = 0; i < opts.currSlide; i++)
			opts.els.push(opts.els.shift());
		opts.fxFn = function(curr, next, opts, cb, fwd) {
			if (opts.rev)
				fwd = !fwd;
			var $el = fwd ? $(curr) : $(next);
			$(next).css(opts.cssBefore);
			var count = opts.slideCount;
			$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
				var hops = $.fn.cycle.hopsFromLast(opts, fwd);
				for (var k = 0; k < hops; k++) {
					if (fwd)
						opts.els.push(opts.els.shift());
					else
						opts.els.unshift(opts.els.pop());
				}
				if (fwd) {
					for (var i = 0, len = opts.els.length; i < len; i++)
						$(opts.els[i]).css('z-index', len - i + count);
				} else {
					var z = $(curr).css('z-index');
					$el.css('z-index', parseInt(z, 10) + 1 + count);
				}
				$el.animate({
					left: 0,
					top: 0
				}, opts.speedOut, opts.easeOut, function() {
					$(fwd ? this : curr).hide();
					if (cb) cb();
				});
			});
		};
		$.extend(opts.cssBefore, {
			display: 'block',
			opacity: 1,
			top: 0,
			left: 0
		});
	};
	$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, false);
			opts.cssBefore.top = next.cycleH;
			opts.animIn.height = next.cycleH;
			opts.animOut.width = next.cycleW;
		});
		opts.cssFirst.top = 0;
		opts.cssBefore.left = 0;
		opts.cssBefore.height = 0;
		opts.animIn.top = 0;
		opts.animOut.height = 0;
	};
	$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, false);
			opts.animIn.height = next.cycleH;
			opts.animOut.top = curr.cycleH;
		});
		opts.cssFirst.top = 0;
		opts.cssBefore.left = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.height = 0;
		opts.animOut.height = 0;
	};
	$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, true);
			opts.cssBefore.left = next.cycleW;
			opts.animIn.width = next.cycleW;
		});
		opts.cssBefore.top = 0;
		opts.cssBefore.width = 0;
		opts.animIn.left = 0;
		opts.animOut.width = 0;
	};
	$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, true);
			opts.animIn.width = next.cycleW;
			opts.animOut.left = curr.cycleW;
		});
		$.extend(opts.cssBefore, {
			top: 0,
			left: 0,
			width: 0
		});
		opts.animIn.left = 0;
		opts.animOut.width = 0;
	};
	$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, false, true);
			opts.cssBefore.top = next.cycleH / 2;
			opts.cssBefore.left = next.cycleW / 2;
			$.extend(opts.animIn, {
				top: 0,
				left: 0,
				width: next.cycleW,
				height: next.cycleH
			});
			$.extend(opts.animOut, {
				width: 0,
				height: 0,
				top: curr.cycleH / 2,
				left: curr.cycleW / 2
			});
		});
		opts.cssFirst.top = 0;
		opts.cssFirst.left = 0;
		opts.cssBefore.width = 0;
		opts.cssBefore.height = 0;
	};
	$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, false);
			opts.cssBefore.left = next.cycleW / 2;
			opts.cssBefore.top = next.cycleH / 2;
			$.extend(opts.animIn, {
				top: 0,
				left: 0,
				width: next.cycleW,
				height: next.cycleH
			});
		});
		opts.cssBefore.width = 0;
		opts.cssBefore.height = 0;
		opts.animOut.opacity = 0;
	};
	$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
		var w = $cont.css('overflow', 'hidden').width();
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts);
			opts.animIn.width = next.cycleW;
			opts.animOut.left = curr.cycleW;
		});
		opts.cssBefore.left = w;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
		opts.animOut.left = w;
	};
	$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
		var h = $cont.css('overflow', 'hidden').height();
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts);
			opts.animIn.height = next.cycleH;
			opts.animOut.top = curr.cycleH;
		});
		opts.cssBefore.top = h;
		opts.cssBefore.left = 0;
		opts.animIn.top = 0;
		opts.animOut.top = h;
	};
	$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
		var h = $cont.css('overflow', 'hidden').height();
		var w = $cont.width();
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts);
			opts.animIn.height = next.cycleH;
			opts.animOut.top = curr.cycleH;
		});
		opts.cssBefore.top = h;
		opts.cssBefore.left = w;
		opts.animIn.top = 0;
		opts.animIn.left = 0;
		opts.animOut.top = h;
		opts.animOut.left = w;
	};
	$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, true);
			opts.cssBefore.left = this.cycleW / 2;
			opts.animIn.left = 0;
			opts.animIn.width = this.cycleW;
			opts.animOut.left = 0;
		});
		opts.cssBefore.top = 0;
		opts.cssBefore.width = 0;
	};
	$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, false);
			opts.cssBefore.top = this.cycleH / 2;
			opts.animIn.top = 0;
			opts.animIn.height = this.cycleH;
			opts.animOut.top = 0;
		});
		opts.cssBefore.height = 0;
		opts.cssBefore.left = 0;
	};
	$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, false, true, true);
			opts.cssBefore.left = next.cycleW / 2;
			opts.animIn.left = 0;
			opts.animIn.width = this.cycleW;
			opts.animOut.left = curr.cycleW / 2;
			opts.animOut.width = 0;
		});
		opts.cssBefore.top = 0;
		opts.cssBefore.width = 0;
	};
	$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, false, true);
			opts.cssBefore.top = next.cycleH / 2;
			opts.animIn.top = 0;
			opts.animIn.height = next.cycleH;
			opts.animOut.top = curr.cycleH / 2;
			opts.animOut.height = 0;
		});
		opts.cssBefore.height = 0;
		opts.cssBefore.left = 0;
	};
	$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
		var d = opts.direction || 'left';
		var w = $cont.css('overflow', 'hidden').width();
		var h = $cont.height();
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts);
			opts.cssAfter.display = '';
			if (d == 'right')
				opts.cssBefore.left = -w;
			else if (d == 'up')
				opts.cssBefore.top = h;
			else if (d == 'down')
				opts.cssBefore.top = -h;
			else
				opts.cssBefore.left = w;
		});
		opts.animIn.left = 0;
		opts.animIn.top = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.left = 0;
	};
	$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
		var d = opts.direction || 'left';
		var w = $cont.css('overflow', 'hidden').width();
		var h = $cont.height();
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, true, true);
			if (d == 'right')
				opts.animOut.left = w;
			else if (d == 'up')
				opts.animOut.top = -h;
			else if (d == 'down')
				opts.animOut.top = h;
			else
				opts.animOut.left = -w;
		});
		opts.animIn.left = 0;
		opts.animIn.top = 0;
		opts.cssBefore.top = 0;
		opts.cssBefore.left = 0;
	};
	$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
		var w = $cont.css('overflow', 'visible').width();
		var h = $cont.height();
		opts.before.push(function(curr, next, opts) {
			$.fn.cycle.commonReset(curr, next, opts, true, true, true);
			if (!opts.animOut.left && !opts.animOut.top)
				$.extend(opts.animOut, {
					left: w * 2,
					top: -h / 2,
					opacity: 0
				});
			else
				opts.animOut.opacity = 0;
		});
		opts.cssBefore.left = 0;
		opts.cssBefore.top = 0;
		opts.animIn.left = 0;
	};
	$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
		var w = $cont.css('overflow', 'hidden').width();
		var h = $cont.height();
		opts.cssBefore = opts.cssBefore || {};
		var clip;
		if (opts.clip) {
			if (/l2r/.test(opts.clip))
				clip = 'rect(0px 0px ' + h + 'px 0px)';
			else if (/r2l/.test(opts.clip))
				clip = 'rect(0px ' + w + 'px ' + h + 'px ' + w + 'px)';
			else if (/t2b/.test(opts.clip))
				clip = 'rect(0px ' + w + 'px 0px 0px)';
			else if (/b2t/.test(opts.clip))
				clip = 'rect(' + h + 'px ' + w + 'px ' + h + 'px 0px)';
			else if (/zoom/.test(opts.clip)) {
				var top = parseInt(h / 2, 10);
				var left = parseInt(w / 2, 10);
				clip = 'rect(' + top + 'px ' + left + 'px ' + top + 'px ' + left + 'px)';
			}
		}
		opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';
		var d = opts.cssBefore.clip.match(/(\d+)/g);
		var t = parseInt(d[0], 10),
			r = parseInt(d[1], 10),
			b = parseInt(d[2], 10),
			l = parseInt(d[3], 10);
		opts.before.push(function(curr, next, opts) {
			if (curr == next) return;
			var $curr = $(curr),
				$next = $(next);
			$.fn.cycle.commonReset(curr, next, opts, true, true, false);
			opts.cssAfter.display = 'block';
			var step = 1,
				count = parseInt((opts.speedIn / 13), 10) - 1;
			(function f() {
				var tt = t ? t - parseInt(step * (t / count), 10) : 0;
				var ll = l ? l - parseInt(step * (l / count), 10) : 0;
				var bb = b < h ? b + parseInt(step * ((h - b) / count || 1), 10) : h;
				var rr = r < w ? r + parseInt(step * ((w - r) / count || 1), 10) : w;
				$next.css({
					clip: 'rect(' + tt + 'px ' + rr + 'px ' + bb + 'px ' + ll + 'px)'
				});
				(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
			})();
		});
		$.extend(opts.cssBefore, {
			display: 'block',
			opacity: 1,
			top: 0,
			left: 0
		});
		opts.animIn = {
			left: 0
		};
		opts.animOut = {
			left: 0
		};
	};
})(jQuery);;
(function(e) {
	function t() {
		var e = location.href;
		return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1
	}

	function n(e, t) {
		e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var n = RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
		return null == n ? "" : n[1]
	}
	e.prettyPhoto = {
		version: "3.1.5"
	};
	e.fn.prettyPhoto = function(r) {
		function i() {
			e(".pp_loaderIcon").hide();
			projectedTop = scroll_pos.scrollTop + (S / 2 - m.containerHeight / 2);
			0 > projectedTop && (projectedTop = 0);
			$ppt.fadeTo(settings.animation_speed, 1);
			$pp_pic_holder.find(".pp_content").animate({
				height: m.contentHeight,
				width: m.contentWidth
			}, settings.animation_speed);
			$pp_pic_holder.animate({
				top: projectedTop,
				left: 0 > x / 2 - m.containerWidth / 2 ? 0 : x / 2 - m.containerWidth / 2,
				width: m.containerWidth
			}, settings.animation_speed, function() {
				$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(m.height).width(m.width);
				$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
				isSet && "image" == f(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide();
				settings.allow_expand && (m.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide());
				settings.autoplay_slideshow && !T && !g && e.prettyPhoto.startSlideshow();
				settings.changepicturecallback();
				g = !0
			});
			isSet && settings.overlay_gallery && "image" == f(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((m.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave");
			r.ajaxcallback()
		}

		function s(t) {
			$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
			$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
				e(".pp_loaderIcon").show();
				t()
			})
		}

		function o(e, t) {
			resized = !1;
			u(e, t);
			imageWidth = e;
			imageHeight = t;
			if ((E > x || w > S) && doresize && settings.allow_resize && !d) {
				resized = !0;
				for (fitting = !1; !fitting;) E > x ? (imageWidth = x - 30, imageHeight = t / e * imageWidth) : w > S ? (imageHeight = S - 100, imageWidth = e / t * imageHeight) : fitting = !0, w = imageHeight, E = imageWidth;
				(E > x || w > S) && o(E, w);
				u(imageWidth, imageHeight)
			}
			return {
				width: Math.floor(imageWidth),
				height: Math.floor(imageHeight),
				containerHeight: Math.floor(w),
				containerWidth: Math.floor(E) + 2 * settings.horizontal_padding,
				contentHeight: Math.floor(y),
				contentWidth: Math.floor(b),
				resized: resized
			}
		}

		function u(t, n) {
			t = parseFloat(t);
			n = parseFloat(n);
			$pp_details = $pp_pic_holder.find(".pp_details");
			$pp_details.width(t);
			detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
			$pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
				position: "absolute",
				top: -1e4
			});
			detailsHeight += $pp_details.height();
			detailsHeight = 34 >= detailsHeight ? 36 : detailsHeight;
			$pp_details.remove();
			$pp_title = $pp_pic_holder.find(".ppt");
			$pp_title.width(t);
			titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
			$pp_title = $pp_title.clone().appendTo(e("body")).css({
				position: "absolute",
				top: -1e4
			});
			titleHeight += $pp_title.height();
			$pp_title.remove();
			y = n + detailsHeight;
			b = t;
			w = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
			E = t
		}

		function f(e) {
			return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
		}

		function l() {
			doresize && "undefined" != typeof $pp_pic_holder && (scroll_pos = c(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = S / 2 + scroll_pos.scrollTop - contentHeight / 2, 0 > projectedTop && (projectedTop = 0), contentHeight > S || $pp_pic_holder.css({
				top: projectedTop,
				left: x / 2 + scroll_pos.scrollLeft - contentwidth / 2
			}))
		}

		function c() {
			if (self.pageYOffset) return {
				scrollTop: self.pageYOffset,
				scrollLeft: self.pageXOffset
			};
			if (document.documentElement && document.documentElement.scrollTop) return {
				scrollTop: document.documentElement.scrollTop,
				scrollLeft: document.documentElement.scrollLeft
			};
			if (document.body) return {
				scrollTop: document.body.scrollTop,
				scrollLeft: document.body.scrollLeft
			}
		}

		function h() {
			settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)));
			settings.markup = settings.markup.replace("{pp_social}", "");
			e("body").append(settings.markup);
			$pp_pic_holder = e(".pp_pic_holder");
			$ppt = e(".ppt");
			$pp_overlay = e("div.pp_overlay");
			if (isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
				toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
				$pp_pic_holder.find("#pp_full_res").after(toInject);
				$pp_gallery = e(".pp_pic_holder .pp_gallery");
				$pp_gallery_li = $pp_gallery.find("li");
				$pp_gallery.find(".pp_arrow_next").click(function() {
					e.prettyPhoto.changeGalleryPage("next");
					e.prettyPhoto.stopSlideshow();
					return !1
				});
				$pp_gallery.find(".pp_arrow_previous").click(function() {
					e.prettyPhoto.changeGalleryPage("previous");
					e.prettyPhoto.stopSlideshow();
					return !1
				});
				$pp_pic_holder.find(".pp_content").hover(function() {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
				}, function() {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
				});
				itemWidth = 57;
				$pp_gallery_li.each(function(t) {
					e(this).find("a").click(function() {
						e.prettyPhoto.changePage(t);
						e.prettyPhoto.stopSlideshow();
						return !1
					})
				})
			}
			settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
				e.prettyPhoto.startSlideshow();
				return !1
			}));
			$pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
			$pp_overlay.css({
				opacity: 0.8,
				height: e(document).height(),
				width: e(window).width()
			}).bind("click", function() {
				settings.modal || e.prettyPhoto.close()
			});
			e("a.pp_close").bind("click", function() {
				e.prettyPhoto.close();
				return !1
			});
			settings.allow_expand && e("a.pp_expand").bind("click", function() {
				e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0);
				s(function() {
					e.prettyPhoto.open()
				});
				return !1
			});
			$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
				e.prettyPhoto.changePage("previous");
				e.prettyPhoto.stopSlideshow();
				return !1
			});
			$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
				e.prettyPhoto.changePage("next");
				e.prettyPhoto.stopSlideshow();
				return !1
			});
			l()
		}
		r = jQuery.extend({
			hook: "rel",
			animation_speed: "fast",
			hd: !0,
			ajaxcallback: function() {},
			slideshow: 5e3,
			autoplay_slideshow: !1,
			opacity: .8,
			show_title: !0,
			allow_resize: !0,
			allow_expand: !0,
			default_width: 600,
			default_height: 344,
			counter_separator_label: "/",
			theme: "pp_default",
			horizontal_padding: 20,
			hideflash: !1,
			wmode: "opaque",
			autoplay: !0,
			modal: !1,
			deeplinking: !0,
			overlay_gallery: !0,
			overlay_gallery_max: 30,
			keyboard_shortcuts: !0,
			changepicturecallback: function() {},
			callback: function() {},
			ie6_fallback: !0,
			markup: '<div class="pp_pic_holder"> <div class="ppt">&nbsp;</div> <div class="pp_top"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> <div class="pp_content_container"> <div class="pp_left"> <div class="pp_right"> <div class="pp_content"> <div class="pp_loaderIcon"></div> <div class="pp_fade"> <a href="#" class="pp_expand" title="Expand the image">Expand</a> <div class="pp_hoverContainer"> <a class="pp_next" href="#">next</a> <a class="pp_previous" href="#">previous</a> </div> <div id="pp_full_res"></div> <div class="pp_details"> <div class="pp_nav"> <a href="#" class="pp_arrow_previous">Previous</a> <p class="currentTextHolder">0/0</p> <a href="#" class="pp_arrow_next">Next</a> </div> <p class="pp_description"></p> <div class="pp_social">{pp_social}</div> <a class="pp_close" href="#">Close</a> </div> </div> </div> </div> </div> </div> <div class="pp_bottom"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> </div> <div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> <a href="#" class="pp_arrow_previous">Previous</a> <div> <ul> {gallery} </ul> </div> <a href="#" class="pp_arrow_next">Next</a> </div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="//www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="//www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: "",
			social_tools: '<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
		}, r);
		var p = this,
			d = !1,
			m, g, y, b, w, E, S = e(window).height(),
			x = e(window).width(),
			T;
		current_as_setting = r.autoplay_slideshow;
		current_og_setting = r.overlay_gallery;
		doresize = !0;
		scroll_pos = c();
		e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
			l();
			S = e(window).height();
			x = e(window).width();
			"undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(x)
		});
		r.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
			if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
				case 37:
					e.prettyPhoto.changePage("previous");
					t.preventDefault();
					break;
				case 39:
					e.prettyPhoto.changePage("next");
					t.preventDefault();
					break;
				case 27:
					settings.modal || e.prettyPhoto.close(), t.preventDefault()
			}
		});
		e.prettyPhoto.initialize = function() {
			settings = r;
			"pp_default" == settings.theme && (settings.horizontal_padding = 16);
			theRel = e(this).attr(settings.hook);
			galleryRegExp = /\[(?:.*)\]/;
			pp_images = (isSet = galleryRegExp.exec(theRel) ? !0 : !1) ? jQuery.map(p, function(t) {
				if (-1 != e(t).attr(settings.hook).indexOf(theRel)) return e(t).attr("href")
			}) : e.makeArray(e(this).attr("href"));
			pp_titles = isSet ? jQuery.map(p, function(t) {
				if (-1 != e(t).attr(settings.hook).indexOf(theRel)) return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : ""
			}) : e.makeArray(e(this).find("img").attr("alt"));
			pp_descriptions = isSet ? jQuery.map(p, function(t) {
				if (-1 != e(t).attr(settings.hook).indexOf(theRel)) return e(t).attr("title") ? e(t).attr("title") : ""
			}) : e.makeArray(e(this).attr("title"));
			pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1);
			1 == pp_images.length ? (settings.autoplay_slideshow = !1, settings.overlay_gallery = !1, e(".pp_previous, .pp_next").remove()) : (settings.autoplay_slideshow = current_as_setting, settings.overlay_gallery = current_og_setting);
			set_position = jQuery.inArray(e(this).attr("href"), pp_images);
			rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this));
			h(this);
			settings.allow_resize && e(window).bind("scroll.prettyphoto", function() {
				l()
			});
			e.prettyPhoto.open();
			1 == pp_images.length && e(".pp_previous, .pp_next").remove();
			!1 === r.show_desc && e(".pp_description").remove();
			return !1
		};
		e.prettyPhoto.open = function(t, s, u, l) {
			"undefined" == typeof settings && (settings = r, pp_images = e.makeArray(t), pp_titles = s ? e.makeArray(s) : e.makeArray(""), pp_descriptions = u ? e.makeArray(u) : e.makeArray(""), isSet = 1 < pp_images.length ? !0 : !1, set_position = l ? l : 0, h(t.target));
			settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
			1 < e(pp_images).size() ? e(".pp_nav").show() : e(".pp_nav").hide();
			e(".pp_loaderIcon").show();
			settings.deeplinking && "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/");
			settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link));
			$ppt.is(":hidden") && $ppt.css("opacity", 0.8).show();
			$pp_overlay.show();
			$pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size());
			"undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide();
			movie_width = parseFloat(n("width", pp_images[set_position])) ? n("width", pp_images[set_position]) : settings.default_width.toString();
			movie_height = parseFloat(n("height", pp_images[set_position])) ? n("height", pp_images[set_position]) : settings.default_height.toString();
			d = !1; - 1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), d = !0); - 1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), d = !0);
			$pp_pic_holder.fadeIn(function() {
				settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;");
				imgPreloader = "";
				skipInjection = !1;
				switch (f(pp_images[set_position])) {
					case "image":
						imgPreloader = new Image;
						nextImage = new Image;
						isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]);
						prevImage = new Image;
						isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]);
						$pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
						imgPreloader.onload = function() {
							m = o(imgPreloader.width, imgPreloader.height);
							i()
						};
						imgPreloader.onerror = function() {
							alert("Image cannot be loaded. Make sure the path is correct and image exist.");
							e.prettyPhoto.close()
						};
						imgPreloader.src = pp_images[set_position];
						break;
					case "youtube":
						m = o(movie_width, movie_height);
						movie_id = n("v", pp_images[set_position]);
						"" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], 0 < movie_id.indexOf("?") && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), 0 < movie_id.indexOf("&") && (movie_id = movie_id.substr(0, movie_id.indexOf("&"))));
						movie = "//www.youtube.com/embed/" + movie_id;
						n("rel", pp_images[set_position]) ? movie += "?rel=" + n("rel", pp_images[set_position]) : movie += "?rel=1";
						settings.autoplay && (movie += "&autoplay=1");
						settings.hd && (movie += "&vq=hd1080");
						toInject = settings.iframe_markup.replace(/{width}/g, m.width).replace(/{height}/g, m.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
						break;
					case "vimeo":
						m = o(movie_width, movie_height);
						movie_id = pp_images[set_position];
						movie = "//player.vimeo.com/video/" + movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/)[3] + "?title=0&amp;byline=0&amp;portrait=0";
						settings.autoplay && (movie += "&autoplay=1;");
						vimeo_width = m.width + "/embed/?moog_width=" + m.width;
						toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, m.height).replace(/{path}/g, movie);
						break;
					case "quicktime":
						m = o(movie_width, movie_height);
						m.height += 15;
						m.contentHeight += 15;
						m.containerHeight += 15;
						toInject = settings.quicktime_markup.replace(/{width}/g, m.width).replace(/{height}/g, m.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
						break;
					case "flash":
						m = o(movie_width, movie_height);
						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
						filename = pp_images[set_position];
						filename = filename.substring(0, filename.indexOf("?"));
						toInject = settings.flash_markup.replace(/{width}/g, m.width).replace(/{height}/g, m.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
						break;
					case "iframe":
						m = o(movie_width, movie_height);
						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
						toInject = settings.iframe_markup.replace(/{width}/g, m.width).replace(/{height}/g, m.height).replace(/{path}/g, frame_url);
						break;
					case "ajax":
						doresize = !1;
						m = o(movie_width, movie_height);
						skipInjection = doresize = !0;
						e.get(pp_images[set_position], function(e) {
							toInject = settings.inline_markup.replace(/{content}/g, e);
							$pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
							i()
						});
						break;
					case "custom":
						m = o(movie_width, movie_height);
						toInject = settings.custom_markup;
						break;
					case "inline":
						myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
							width: settings.default_width
						}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, m = o(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
				}!imgPreloader && !skipInjection && ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, i())
			});
			t = f(pp_images[set_position]);
			"youtube" == t || "vimeo" == t || "quicktime" == t || "flash" == t ? e(".pp_gallery").hide() : e(".pp_content").hover(function() {
				e(".pp_gallery:not(.disabled)").fadeIn()
			}, function() {
				e(".pp_gallery:not(.disabled)").fadeOut()
			});
			return !1
		};
		e.prettyPhoto.changePage = function(t) {
			currentGalleryPage = 0;
			"previous" == t ? (set_position--, 0 > set_position && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t;
			rel_index = set_position;
			doresize || (doresize = !0);
			settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand");
			s(function() {
				e.prettyPhoto.open()
			})
		};
		e.prettyPhoto.changeGalleryPage = function(e) {
			"next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, 0 > currentGalleryPage && (currentGalleryPage = totalPage)) : currentGalleryPage = e;
			slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0;
			slide_to = currentGalleryPage * itemsPerPage * itemWidth;
			$pp_gallery.find("ul").animate({
				left: -slide_to
			}, slide_speed)
		};
		e.prettyPhoto.startSlideshow = function() {
			"undefined" == typeof T ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
				e.prettyPhoto.stopSlideshow();
				return !1
			}), T = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
		};
		e.prettyPhoto.stopSlideshow = function() {
			$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
				e.prettyPhoto.startSlideshow();
				return !1
			});
			clearInterval(T);
			T = void 0
		};
		e.prettyPhoto.close = function() {
			$pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
				e(this).remove()
			}), $pp_overlay.fadeOut(settings.animation_speed, function() {
				settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
				e(this).remove();
				e(window).unbind("scroll.prettyphoto"); - 1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto");
				settings.callback();
				doresize = !0;
				g = !1;
				delete settings
			}))
		};
		!pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashRel = hashIndex = t(), hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
			e("a[" + r.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
		}, 50));
		return this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
	}
})(jQuery);
var pp_alreadyInitialized = !1;;
(function(e) {
	e.flexslider = function(t, n) {
		var r = e(t);
		r.vars = e.extend({}, e.flexslider.defaults, n);
		var i = r.vars.namespace,
			s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
			o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
			u = "click touchend MSPointerUp",
			a = "",
			f, l = r.vars.direction === "vertical",
			c = r.vars.reverse,
			h = r.vars.itemWidth > 0,
			p = r.vars.animation === "fade",
			d = r.vars.asNavFor !== "",
			v = {}, m = true;
		e.data(t, "flexslider", r);
		v = {
			init: function() {
				r.animating = false;
				r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
				if (isNaN(r.currentSlide)) r.currentSlide = 0;
				r.animatingTo = r.currentSlide;
				r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
				r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
				r.slides = e(r.vars.selector, r);
				r.container = e(r.containerSelector, r);
				r.count = r.slides.length;
				r.syncExists = e(r.vars.sync).length > 0;
				if (r.vars.animation === "slide") r.vars.animation = "swing";
				r.prop = l ? "top" : "marginLeft";
				r.args = {};
				r.manualPause = false;
				r.stopped = false;
				r.started = false;
				r.startTimeout = null;
				r.transitions = !r.vars.video && !p && r.vars.useCSS && function() {
					var e = document.createElement("div"),
						t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var n in t) {
						if (e.style[t[n]] !== undefined) {
							r.pfx = t[n].replace("Perspective", "").toLowerCase();
							r.prop = "-" + r.pfx + "-transform";
							return true
						}
					}
					return false
				}();
				r.ensureAnimationEnd = "";
				if (r.vars.controlsContainer !== "") r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer);
				if (r.vars.manualControls !== "") r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls);
				if (r.vars.randomize) {
					r.slides.sort(function() {
						return Math.round(Math.random()) - .5
					});
					r.container.empty().append(r.slides)
				}
				r.doMath();
				r.setup("init");
				if (r.vars.controlNav) v.controlNav.setup();
				if (r.vars.directionNav) v.directionNav.setup();
				if (r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard)) {
					e(document).bind("keyup", function(e) {
						var t = e.keyCode;
						if (!r.animating && (t === 39 || t === 37)) {
							var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : false;
							r.flexAnimate(n, r.vars.pauseOnAction)
						}
					})
				}
				if (r.vars.mousewheel) {
					r.bind("mousewheel", function(e, t, n, i) {
						e.preventDefault();
						var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
						r.flexAnimate(s, r.vars.pauseOnAction)
					})
				}
				if (r.vars.pausePlay) v.pausePlay.setup();
				if (r.vars.slideshow && r.vars.pauseInvisible) v.pauseInvisible.init();
				if (r.vars.slideshow) {
					if (r.vars.pauseOnHover) {
						r.hover(function() {
							if (!r.manualPlay && !r.manualPause) r.pause()
						}, function() {
							if (!r.manualPause && !r.manualPlay && !r.stopped) r.play()
						})
					}
					if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) {
						r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()
					}
				}
				if (d) v.asNav.setup();
				if (o && r.vars.touch) v.touch();
				if (!p || p && r.vars.smoothHeight) e(window).bind("resize orientationchange focus", v.resize);
				r.find("img").attr("draggable", "false");
				setTimeout(function() {
					r.vars.start(r)
				}, 200)
			},
			asNav: {
				setup: function() {
					r.asNav = true;
					r.animatingTo = Math.floor(r.currentSlide / r.move);
					r.currentItem = r.currentSlide;
					r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
					if (!s) {
						r.slides.on(u, function(t) {
							t.preventDefault();
							var n = e(this),
								s = n.index();
							var o = n.offset().left - e(r).scrollLeft();
							if (o <= 0 && n.hasClass(i + "active-slide")) {
								r.flexAnimate(r.getTarget("prev"), true)
							} else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
								r.direction = r.currentItem < s ? "next" : "prev";
								r.flexAnimate(s, r.vars.pauseOnAction, false, true, true)
							}
						})
					} else {
						t._slider = r;
						r.slides.each(function() {
							var t = this;
							t._gesture = new MSGesture;
							t._gesture.target = t;
							t.addEventListener("MSPointerDown", function(e) {
								e.preventDefault();
								if (e.currentTarget._gesture) e.currentTarget._gesture.addPointer(e.pointerId)
							}, false);
							t.addEventListener("MSGestureTap", function(t) {
								t.preventDefault();
								var n = e(this),
									i = n.index();
								if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
									r.direction = r.currentItem < i ? "next" : "prev";
									r.flexAnimate(i, r.vars.pauseOnAction, false, true, true)
								}
							})
						})
					}
				}
			},
			controlNav: {
				setup: function() {
					if (!r.manualControls) {
						v.controlNav.setupPaging()
					} else {
						v.controlNav.setupManual()
					}
				},
				setupPaging: function() {
					var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
						n = 1,
						s, o;
					r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
					if (r.pagingCount > 1) {
						for (var f = 0; f < r.pagingCount; f++) {
							o = r.slides.eq(f);
							s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>";
							if ("thumbnails" === r.vars.controlNav && true === r.vars.thumbCaptions) {
								var l = o.attr("data-thumbcaption");
								if ("" != l && undefined != l) s += '<span class="' + i + 'caption">' + l + "</span>"
							}
							r.controlNavScaffold.append("<li>" + s + "</li>");
							n++
						}
					}
					r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
					v.controlNav.set();
					v.controlNav.active();
					r.controlNavScaffold.delegate("a, img", u, function(t) {
						t.preventDefault();
						if (a === "" || a === t.type) {
							var n = e(this),
								s = r.controlNav.index(n);
							if (!n.hasClass(i + "active")) {
								r.direction = s > r.currentSlide ? "next" : "prev";
								r.flexAnimate(s, r.vars.pauseOnAction)
							}
						}
						if (a === "") {
							a = t.type
						}
						v.setToClearWatchedEvent()
					})
				},
				setupManual: function() {
					r.controlNav = r.manualControls;
					v.controlNav.active();
					r.controlNav.bind(u, function(t) {
						t.preventDefault();
						if (a === "" || a === t.type) {
							var n = e(this),
								s = r.controlNav.index(n);
							if (!n.hasClass(i + "active")) {
								s > r.currentSlide ? r.direction = "next" : r.direction = "prev";
								r.flexAnimate(s, r.vars.pauseOnAction)
							}
						}
						if (a === "") {
							a = t.type
						}
						v.setToClearWatchedEvent()
					})
				},
				set: function() {
					var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
					r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
				},
				active: function() {
					r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active")
				},
				update: function(t, n) {
					if (r.pagingCount > 1 && t === "add") {
						r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>"))
					} else if (r.pagingCount === 1) {
						r.controlNavScaffold.find("li").remove()
					} else {
						r.controlNav.eq(n).closest("li").remove()
					}
					v.controlNav.set();
					r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active()
				}
			},
			directionNav: {
				setup: function() {
					var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
					if (r.controlsContainer) {
						e(r.controlsContainer).append(t);
						r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer)
					} else {
						r.append(t);
						r.directionNav = e("." + i + "direction-nav li a", r)
					}
					v.directionNav.update();
					r.directionNav.bind(u, function(t) {
						t.preventDefault();
						var n;
						if (a === "" || a === t.type) {
							n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
							r.flexAnimate(n, r.vars.pauseOnAction)
						}
						if (a === "") {
							a = t.type
						}
						v.setToClearWatchedEvent()
					})
				},
				update: function() {
					var e = i + "disabled";
					if (r.pagingCount === 1) {
						r.directionNav.addClass(e).attr("tabindex", "-1")
					} else if (!r.vars.animationLoop) {
						if (r.animatingTo === 0) {
							r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1")
						} else if (r.animatingTo === r.last) {
							r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1")
						} else {
							r.directionNav.removeClass(e).removeAttr("tabindex")
						}
					} else {
						r.directionNav.removeClass(e).removeAttr("tabindex")
					}
				}
			},
			pausePlay: {
				setup: function() {
					var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
					if (r.controlsContainer) {
						r.controlsContainer.append(t);
						r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer)
					} else {
						r.append(t);
						r.pausePlay = e("." + i + "pauseplay a", r)
					}
					v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play");
					r.pausePlay.bind(u, function(t) {
						t.preventDefault();
						if (a === "" || a === t.type) {
							if (e(this).hasClass(i + "pause")) {
								r.manualPause = true;
								r.manualPlay = false;
								r.pause()
							} else {
								r.manualPause = false;
								r.manualPlay = true;
								r.play()
							}
						}
						if (a === "") {
							a = t.type
						}
						v.setToClearWatchedEvent()
					})
				},
				update: function(e) {
					e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText)
				}
			},
			touch: function() {
				var e, n, i, o, u, a, f = false,
					d = 0,
					v = 0,
					m = 0;
				if (!s) {
					t.addEventListener("touchstart", g, false);

					function g(s) {
						if (r.animating) {
							s.preventDefault()
						} else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
							r.pause();
							o = l ? r.h : r.w;
							a = Number(new Date);
							d = s.touches[0].pageX;
							v = s.touches[0].pageY;
							i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
							e = l ? v : d;
							n = l ? d : v;
							t.addEventListener("touchmove", y, false);
							t.addEventListener("touchend", b, false)
						}
					}

					function y(t) {
						d = t.touches[0].pageX;
						v = t.touches[0].pageY;
						u = l ? e - v : e - d;
						f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
						var s = 500;
						if (!f || Number(new Date) - a > s) {
							t.preventDefault();
							if (!p && r.transitions) {
								if (!r.vars.animationLoop) {
									u = u / (r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1)
								}
								r.setProps(i + u, "setTouch")
							}
						}
					}

					function b(s) {
						t.removeEventListener("touchmove", y, false);
						if (r.animatingTo === r.currentSlide && !f && !(u === null)) {
							var l = c ? -u : u,
								h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
							if (r.canAdvance(h) && (Number(new Date) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2)) {
								r.flexAnimate(h, r.vars.pauseOnAction)
							} else {
								if (!p) r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, true)
							}
						}
						t.removeEventListener("touchend", b, false);
						e = null;
						n = null;
						u = null;
						i = null
					}
				} else {
					t.style.msTouchAction = "none";
					t._gesture = new MSGesture;
					t._gesture.target = t;
					t.addEventListener("MSPointerDown", w, false);
					t._slider = r;
					t.addEventListener("MSGestureChange", E, false);
					t.addEventListener("MSGestureEnd", S, false);

					function w(e) {
						e.stopPropagation();
						if (r.animating) {
							e.preventDefault()
						} else {
							r.pause();
							t._gesture.addPointer(e.pointerId);
							m = 0;
							o = l ? r.h : r.w;
							a = Number(new Date);
							i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o
						}
					}

					function E(e) {
						e.stopPropagation();
						var n = e.target._slider;
						if (!n) {
							return
						}
						var r = -e.translationX,
							s = -e.translationY;
						m = m + (l ? s : r);
						u = m;
						f = l ? Math.abs(m) < Math.abs(-r) : Math.abs(m) < Math.abs(-s);
						if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
							setImmediate(function() {
								t._gesture.stop()
							});
							return
						}
						if (!f || Number(new Date) - a > 500) {
							e.preventDefault();
							if (!p && n.transitions) {
								if (!n.vars.animationLoop) {
									u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1)
								}
								n.setProps(i + u, "setTouch")
							}
						}
					}

					function S(t) {
						t.stopPropagation();
						var r = t.target._slider;
						if (!r) {
							return
						}
						if (r.animatingTo === r.currentSlide && !f && !(u === null)) {
							var s = c ? -u : u,
								l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
							if (r.canAdvance(l) && (Number(new Date) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2)) {
								r.flexAnimate(l, r.vars.pauseOnAction)
							} else {
								if (!p) r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, true)
							}
						}
						e = null;
						n = null;
						u = null;
						i = null;
						m = 0
					}
				}
			},
			resize: function() {
				if (!r.animating && r.is(":visible")) {
					if (!h) r.doMath();
					if (p) {
						v.smoothHeight()
					} else if (h) {
						r.slides.width(r.computedW);
						r.update(r.pagingCount);
						r.setProps()
					} else if (l) {
						r.viewport.height(r.h);
						r.setProps(r.h, "setTotal")
					} else {
						if (r.vars.smoothHeight) v.smoothHeight();
						r.newSlides.width(r.computedW);
						r.setProps(r.computedW, "setTotal")
					}
				}
			},
			smoothHeight: function(e) {
				if (!l || p) {
					var t = p ? r : r.viewport;
					e ? t.animate({
						height: r.slides.eq(r.animatingTo).height()
					}, e) : t.height(r.slides.eq(r.animatingTo).height())
				}
			},
			sync: function(t) {
				var n = e(r.vars.sync).data("flexslider"),
					i = r.animatingTo;
				switch (t) {
					case "animate":
						n.flexAnimate(i, r.vars.pauseOnAction, false, true);
						break;
					case "play":
						if (!n.playing && !n.asNav) {
							n.play()
						}
						break;
					case "pause":
						n.pause();
						break
				}
			},
			uniqueID: function(t) {
				t.find("[id]").each(function() {
					var t = e(this);
					t.attr("id", t.attr("id") + "_clone")
				});
				return t
			},
			pauseInvisible: {
				visProp: null,
				init: function() {
					var e = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var t = 0; t < e.length; t++) {
						if (e[t] + "Hidden" in document) v.pauseInvisible.visProp = e[t] + "Hidden"
					}
					if (v.pauseInvisible.visProp) {
						var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
						document.addEventListener(n, function() {
							if (v.pauseInvisible.isHidden()) {
								if (r.startTimeout) clearTimeout(r.startTimeout);
								else r.pause()
							} else {
								if (r.started) r.play();
								else r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
							}
						})
					}
				},
				isHidden: function() {
					return document[v.pauseInvisible.visProp] || false
				}
			},
			setToClearWatchedEvent: function() {
				clearTimeout(f);
				f = setTimeout(function() {
					a = ""
				}, 3e3)
			}
		};
		r.flexAnimate = function(t, n, s, u, a) {
			if (!r.vars.animationLoop && t !== r.currentSlide) {
				r.direction = t > r.currentSlide ? "next" : "prev"
			}
			if (d && r.pagingCount === 1) r.direction = r.currentItem < t ? "next" : "prev";
			if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
				if (d && u) {
					var f = e(r.vars.asNavFor).data("flexslider");
					r.atEnd = t === 0 || t === r.count - 1;
					f.flexAnimate(t, true, false, true, a);
					r.direction = r.currentItem < t ? "next" : "prev";
					f.direction = r.direction;
					if (Math.ceil((t + 1) / r.visible) - 1 !== r.currentSlide && t !== 0) {
						r.currentItem = t;
						r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
						t = Math.floor(t / r.visible)
					} else {
						r.currentItem = t;
						r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
						return false
					}
				}
				r.animating = true;
				r.animatingTo = t;
				if (n) r.pause();
				r.vars.before(r);
				if (r.syncExists && !a) v.sync("animate");
				if (r.vars.controlNav) v.controlNav.active();
				if (!h) r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
				r.atEnd = t === 0 || t === r.last;
				if (r.vars.directionNav) v.directionNav.update();
				if (t === r.last) {
					r.vars.end(r);
					if (!r.vars.animationLoop) r.pause()
				}
				if (!p) {
					var m = l ? r.slides.filter(":first").height() : r.computedW,
						g, y, b;
					if (h) {
						g = r.vars.itemMargin;
						b = (r.itemW + g) * r.move * r.animatingTo;
						y = b > r.limit && r.visible !== 1 ? r.limit : b
					} else if (r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next") {
						y = c ? (r.count + r.cloneOffset) * m : 0
					} else if (r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev") {
						y = c ? 0 : (r.count + 1) * m
					} else {
						y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m
					}
					r.setProps(y, "", r.vars.animationSpeed);
					if (r.transitions) {
						if (!r.vars.animationLoop || !r.atEnd) {
							r.animating = false;
							r.currentSlide = r.animatingTo
						}
						r.container.unbind("webkitTransitionEnd transitionend");
						r.container.bind("webkitTransitionEnd transitionend", function() {
							clearTimeout(r.ensureAnimationEnd);
							r.wrapup(m)
						});
						clearTimeout(r.ensureAnimationEnd);
						r.ensureAnimationEnd = setTimeout(function() {
							r.wrapup(m)
						}, r.vars.animationSpeed + 100)
					} else {
						r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function() {
							r.wrapup(m)
						})
					}
				} else {
					if (!o) {
						r.slides.eq(r.currentSlide).css({
							zIndex: 1
						}).animate({
							opacity: 0
						}, r.vars.animationSpeed, r.vars.easing);
						r.slides.eq(t).css({
							zIndex: 2
						}).animate({
							opacity: 1
						}, r.vars.animationSpeed, r.vars.easing, r.wrapup)
					} else {
						r.slides.eq(r.currentSlide).css({
							opacity: 0,
							zIndex: 1
						});
						r.slides.eq(t).css({
							opacity: 1,
							zIndex: 2
						});
						r.wrapup(m)
					}
				} if (r.vars.smoothHeight) v.smoothHeight(r.vars.animationSpeed)
			}
		};
		r.wrapup = function(e) {
			if (!p && !h) {
				if (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop) {
					r.setProps(e, "jumpEnd")
				} else if (r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop) {
					r.setProps(e, "jumpStart")
				}
			}
			r.animating = false;
			r.currentSlide = r.animatingTo;
			r.vars.after(r)
		};
		r.animateSlides = function() {
			if (!r.animating && m) r.flexAnimate(r.getTarget("next"))
		};
		r.pause = function() {
			clearInterval(r.animatedSlides);
			r.animatedSlides = null;
			r.playing = false;
			if (r.vars.pausePlay) v.pausePlay.update("play");
			if (r.syncExists) v.sync("pause")
		};
		r.play = function() {
			if (r.playing) clearInterval(r.animatedSlides);
			r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
			r.started = r.playing = true;
			if (r.vars.pausePlay) v.pausePlay.update("pause");
			if (r.syncExists) v.sync("play")
		};
		r.stop = function() {
			r.pause();
			r.stopped = true
		};
		r.canAdvance = function(e, t) {
			var n = d ? r.pagingCount - 1 : r.last;
			return t ? true : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? true : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? false : e === r.currentSlide && !d ? false : r.vars.animationLoop ? true : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? false : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? false : true
		};
		r.getTarget = function(e) {
			r.direction = e;
			if (e === "next") {
				return r.currentSlide === r.last ? 0 : r.currentSlide + 1
			} else {
				return r.currentSlide === 0 ? r.last : r.currentSlide - 1
			}
		};
		r.setProps = function(e, t, n) {
			var i = function() {
				var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
					i = function() {
						if (h) {
							return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n
						} else {
							switch (t) {
								case "setTotal":
									return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
								case "setTouch":
									return c ? e : e;
								case "jumpEnd":
									return c ? e : r.count * e;
								case "jumpStart":
									return c ? r.count * e : e;
								default:
									return e
							}
						}
					}();
				return i * -1 + "px"
			}();
			if (r.transitions) {
				i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)";
				n = n !== undefined ? n / 1e3 + "s" : "0s";
				r.container.css("-" + r.pfx + "-transition-duration", n);
				r.container.css("transition-duration", n)
			}
			r.args[r.prop] = i;
			if (r.transitions || n === undefined) r.container.css(r.args);
			r.container.css("transform", i)
		};
		r.setup = function(t) {
			if (!p) {
				var n, s;
				if (t === "init") {
					r.viewport = e('<div class="' + i + 'viewport"></div>').css({
						overflow: "hidden",
						position: "relative"
					}).appendTo(r).append(r.container);
					r.cloneCount = 0;
					r.cloneOffset = 0;
					if (c) {
						s = e.makeArray(r.slides).reverse();
						r.slides = e(s);
						r.container.empty().append(r.slides)
					}
				}
				if (r.vars.animationLoop && !h) {
					r.cloneCount = 2;
					r.cloneOffset = 1;
					if (t !== "init") r.container.find(".clone").remove();
					v.uniqueID(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(r.container);
					v.uniqueID(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(r.container)
				}
				r.newSlides = e(r.vars.selector, r);
				n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
				if (l && !h) {
					r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
					setTimeout(function() {
						r.newSlides.css({
							display: "block"
						});
						r.doMath();
						r.viewport.height(r.h);
						r.setProps(n * r.h, "init")
					}, t === "init" ? 100 : 0)
				} else {
					r.container.width((r.count + r.cloneCount) * 200 + "%");
					r.setProps(n * r.computedW, "init");
					setTimeout(function() {
						r.doMath();
						r.newSlides.css({
							width: r.computedW,
							"float": "left",
							display: "block"
						});
						if (r.vars.smoothHeight) v.smoothHeight()
					}, t === "init" ? 100 : 0)
				}
			} else {
				r.slides.css({
					width: "100%",
					"float": "left",
					marginRight: "-100%",
					position: "relative"
				});
				if (t === "init") {
					if (!o) {
						r.slides.css({
							opacity: 0,
							display: "block",
							zIndex: 1
						}).eq(r.currentSlide).css({
							zIndex: 2
						}).animate({
							opacity: 1
						}, r.vars.animationSpeed, r.vars.easing)
					} else {
						r.slides.css({
							opacity: 0,
							display: "block",
							webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
							zIndex: 1
						}).eq(r.currentSlide).css({
							opacity: 1,
							zIndex: 2
						})
					}
				}
				if (r.vars.smoothHeight) v.smoothHeight()
			} if (!h) r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
			r.vars.init(r)
		};
		r.doMath = function() {
			var e = r.slides.first(),
				t = r.vars.itemMargin,
				n = r.vars.minItems,
				i = r.vars.maxItems;
			r.w = r.viewport === undefined ? r.width() : r.viewport.width();
			r.h = e.height();
			r.boxPadding = e.outerWidth() - e.width();
			if (h) {
				r.itemT = r.vars.itemWidth + t;
				r.minW = n ? n * r.itemT : r.w;
				r.maxW = i ? i * r.itemT - t : r.w;
				r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth;
				r.visible = Math.floor(r.w / r.itemW);
				r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible;
				r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
				r.last = r.pagingCount - 1;
				r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t
			} else {
				r.itemW = r.w;
				r.pagingCount = r.count;
				r.last = r.count - 1
			}
			r.computedW = r.itemW - r.boxPadding
		};
		r.update = function(e, t) {
			r.doMath();
			if (!h) {
				if (e < r.currentSlide) {
					r.currentSlide += 1
				} else if (e <= r.currentSlide && e !== 0) {
					r.currentSlide -= 1
				}
				r.animatingTo = r.currentSlide
			}
			if (r.vars.controlNav && !r.manualControls) {
				if (t === "add" && !h || r.pagingCount > r.controlNav.length) {
					v.controlNav.update("add")
				} else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
					if (h && r.currentSlide > r.last) {
						r.currentSlide -= 1;
						r.animatingTo -= 1
					}
					v.controlNav.update("remove", r.last)
				}
			}
			if (r.vars.directionNav) v.directionNav.update()
		};
		r.addSlide = function(t, n) {
			var i = e(t);
			r.count += 1;
			r.last = r.count - 1;
			if (l && c) {
				n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i)
			} else {
				n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i)
			}
			r.update(n, "add");
			r.slides = e(r.vars.selector + ":not(.clone)", r);
			r.setup();
			r.vars.added(r)
		};
		r.removeSlide = function(t) {
			var n = isNaN(t) ? r.slides.index(e(t)) : t;
			r.count -= 1;
			r.last = r.count - 1;
			if (isNaN(t)) {
				e(t, r.slides).remove()
			} else {
				l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove()
			}
			r.doMath();
			r.update(n, "remove");
			r.slides = e(r.vars.selector + ":not(.clone)", r);
			r.setup();
			r.vars.removed(r)
		};
		r.destroy = function() {
			var t = "." + r.vars.namespace;
			if (r.vars.controlNav) r.controlNav.closest(t + "control-nav").remove();
			if (r.vars.directionNav) r.directionNav.closest(t + "direction-nav").remove();
			if (r.vars.pausePlay) r.pausePlay.closest(t + "pauseplay").remove();
			r.find(".clone").remove();
			r.unbind(r.vars.eventNamespace);
			if (r.vars.animation != "fade") r.container.unwrap();
			r.container.removeAttr("style");
			r.container.unbind(r.vars.eventNamespace);
			r.slides.removeAttr("style");
			r.slides.filter(t + "active-slide").removeClass(r.vars.namespace + "active-slide");
			r.slides.unbind(r.vars.eventNamespace);
			e(document).unbind(r.vars.eventNamespace + "-" + r.id);
			e(window).unbind(r.vars.eventNamespace + "-" + r.id);
			r.stop();
			r.removeData("flexslider")
		};
		v.init()
	};
	e(window).blur(function(e) {
		focused = false
	}).focus(function(e) {
		focused = true
	});
	e.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: false,
		animationLoop: true,
		smoothHeight: false,
		startAt: 0,
		slideshow: true,
		slideshowSpeed: 7e3,
		animationSpeed: 600,
		initDelay: 0,
		randomize: false,
		thumbCaptions: false,
		pauseOnAction: true,
		pauseOnHover: false,
		pauseInvisible: true,
		useCSS: true,
		touch: true,
		video: false,
		controlNav: true,
		directionNav: true,
		prevText: "Previous",
		nextText: "Next",
		keyboard: true,
		multipleKeyboard: false,
		mousewheel: false,
		pausePlay: false,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 1,
		maxItems: 0,
		move: 0,
		allowOneSlide: true,
		start: function() {},
		before: function() {},
		after: function() {},
		end: function() {},
		added: function() {},
		removed: function() {},
		init: function() {}
	};
	e.fn.flexslider = function(t) {
		if (t === undefined) t = {};
		if (typeof t === "object") {
			return this.each(function() {
				var n = e(this),
					r = t.selector ? t.selector : ".slides > li",
					i = n.find(r);
				if (i.length === 1 && t.allowOneSlide === true || i.length === 0) {
					i.fadeIn(400);
					if (t.start) t.start(n)
				} else if (n.data("flexslider") === undefined) {
					new e.flexslider(this, t)
				}
			})
		} else {
			var n = e(this).data("flexslider");
			switch (t) {
				case "play":
					n.play();
					break;
				case "pause":
					n.pause();
					break;
				case "stop":
					n.stop();
					break;
				case "next":
					n.flexAnimate(n.getTarget("next"), true);
					break;
				case "prev":
				case "previous":
					n.flexAnimate(n.getTarget("prev"), true);
					break;
				case "destroy":
					n.destroy();
					break;
				default:
					if (typeof t === "number") n.flexAnimate(t, true)
			}
		}
	}
})(jQuery);
(function(e) {
	"use strict";
	e.fn.fitVids = function(t) {
		var n = {
			customSelector: null,
			ignore: null
		};
		if (!document.getElementById("fit-vids-style")) {
			var r = document.head || document.getElementsByTagName("head")[0];
			var i = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
			var s = document.createElement("div");
			s.innerHTML = '<p>x</p><style id="fit-vids-style">' + i + "</style>";
			r.appendChild(s.childNodes[1])
		}
		if (t) {
			e.extend(n, t)
		}
		return this.each(function() {
			var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
			if (n.customSelector) {
				t.push(n.customSelector)
			}
			var r = ".fitvidsignore";
			if (n.ignore) {
				r = r + ", " + n.ignore
			}
			var i = e(this).find(t.join(","));
			i = i.not("object object");
			i = i.not(r);
			i.each(function() {
				var t = e(this);
				if (t.parents(r).length > 0) {
					return
				}
				if (this.tagName.toLowerCase() === "embed" && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length) {
					return
				}
				if (!t.css("height") && !t.css("width") && (isNaN(t.attr("height")) || isNaN(t.attr("width")))) {
					t.attr("height", 9);
					t.attr("width", 16)
				}
				var n = this.tagName.toLowerCase() === "object" || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
					i = !isNaN(parseInt(t.attr("width"), 10)) ? parseInt(t.attr("width"), 10) : t.width(),
					s = n / i;
				if (!t.attr("id")) {
					var o = "fitvid" + Math.floor(Math.random() * 999999);
					t.attr("id", o)
				}
				t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", s * 100 + "%");
				t.removeAttr("height").removeAttr("width")
			})
		})
	}
})(window.jQuery || window.Zepto);
(function(a) {
	a.fn.countTo = function(g) {
		g = g || {};
		return a(this).each(function() {
			function e(a) {
				a = b.formatter.call(h, a, b);
				f.html(a)
			}
			var b = a.extend({}, a.fn.countTo.defaults, {
				from: a(this).data("from"),
				to: a(this).data("to"),
				speed: a(this).data("speed"),
				refreshInterval: a(this).data("refresh-interval"),
				decimals: a(this).data("decimals")
			}, g),
				j = Math.ceil(b.speed / b.refreshInterval),
				l = (b.to - b.from) / j,
				h = this,
				f = a(this),
				k = 0,
				c = b.from,
				d = f.data("countTo") || {};
			f.data("countTo", d);
			d.interval && clearInterval(d.interval);
			d.interval = setInterval(function() {
				c += l;
				k++;
				e(Math.abs(c));
				"function" == typeof b.onUpdate && b.onUpdate.call(h, c);
				k >= j && (f.removeData("countTo"), clearInterval(d.interval), c = b.to, "function" == typeof b.onComplete && b.onComplete.call(h, c))
			}, b.refreshInterval);
			e(c)
		})
	};
	a.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 1E3,
		refreshInterval: 100,
		decimals: 0,
		formatter: function(a, e) {
			return a.toFixed(e.decimals)
		},
		onUpdate: null,
		onComplete: null
	}
})(jQuery);
(function($) {
	$.fn.hoverFlow = function(c, d, e, f, g) {
		if ($.inArray(c, ['mouseover', 'mouseenter', 'mouseout', 'mouseleave']) == -1) {
			return this
		}
		var h = typeof e === 'object' ? e : {
			complete: g || !g && f || $.isFunction(e) && e,
			duration: e,
			easing: g && f || f && !$.isFunction(f) && f
		};
		h.queue = false;
		var i = h.complete;
		h.complete = function() {
			$(this).dequeue();
			if ($.isFunction(i)) {
				i.call(this)
			}
		};
		return this.each(function() {
			var b = $(this);
			if (c == 'mouseover' || c == 'mouseenter') {
				b.data('jQuery.hoverFlow', true)
			} else {
				b.removeData('jQuery.hoverFlow')
			}
			b.queue(function() {
				var a = (c == 'mouseover' || c == 'mouseenter') ? b.data('jQuery.hoverFlow') !== undefined : b.data('jQuery.hoverFlow') === undefined;
				if (a) {
					b.animate(d, h)
				} else {
					b.queue([])
				}
			})
		})
	}
})(jQuery);
var cssua = function(n, l, p) {
	var q = /\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,
		r = /([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,
		s = /\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,
		t = /\bsilk-accelerated=true\b/,
		u = /\bfluidapp\b/,
		v = /(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,
		w = /(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
		x = /(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,
		k = {
			parse: function(b, d) {
				var a = {};
				d && (a.standalone = d);
				b = ("" + b).toLowerCase();
				if (!b) return a;
				for (var c, e, g = b.split(/[()]/), f = 0, k = g.length; f < k; f++)
					if (f % 2) {
						var m = g[f].split(";");
						c = 0;
						for (e = m.length; c < e; c++)
							if (q.exec(m[c])) {
								var h = RegExp.$1.split(" ").join("_"),
									l = RegExp.$2;
								if (!a[h] || parseFloat(a[h]) < parseFloat(l)) a[h] = l
							}
					} else
				if (m = g[f].match(r))
					for (c = 0, e = m.length; c < e; c++) h = m[c].split(/[\/\s]+/), h.length && "mozilla" !== h[0] && (a[h[0].split(" ").join("_")] = h.slice(1).join("-"));
				w.exec(b) ? (a.mobile = RegExp.$1, s.exec(b) && (delete a[a.mobile], a.blackberry = a.version || RegExp.$3 || RegExp.$2 || RegExp.$1, RegExp.$1 ? a.mobile = "blackberry" : "0.0.1" === a.version && (a.blackberry = "7.1.0.0"))) : v.exec(b) ? a.desktop = RegExp.$1 : x.exec(b) && (a.game = RegExp.$1, c = a.game.split(" ").join("_"), a.version && !a[c] && (a[c] = a.version));
				a.intel_mac_os_x ? (a.mac_os_x = a.intel_mac_os_x.split("_").join("."), delete a.intel_mac_os_x) : a.cpu_iphone_os ? (a.ios = a.cpu_iphone_os.split("_").join("."), delete a.cpu_iphone_os) : a.cpu_os ? (a.ios = a.cpu_os.split("_").join("."), delete a.cpu_os) : "iphone" !== a.mobile || a.ios || (a.ios = "1");
				a.opera && a.version ? (a.opera = a.version, delete a.blackberry) : t.exec(b) ? a.silk_accelerated = !0 : u.exec(b) && (a.fluidapp = a.version);
				if (a.applewebkit) a.webkit = a.applewebkit, delete a.applewebkit, a.opr && (a.opera = a.opr, delete a.opr, delete a.chrome), a.safari && (a.chrome || a.crios || a.opera || a.silk || a.fluidapp || a.phantomjs || a.mobile && !a.ios ? delete a.safari : a.safari = a.version && !a.rim_tablet_os ? a.version : {
					419: "2.0.4",
					417: "2.0.3",
					416: "2.0.2",
					412: "2.0",
					312: "1.3",
					125: "1.2",
					85: "1.0"
				}[parseInt(a.safari, 10)] || a.safari);
				else if (a.msie || a.trident)
					if (a.opera || (a.ie = a.msie || a.rv), delete a.msie, a.windows_phone_os) a.windows_phone = a.windows_phone_os, delete a.windows_phone_os;
					else {
						if ("wpdesktop" === a.mobile || "xblwp7" === a.mobile || "zunewp7" === a.mobile) a.mobile = "windows desktop", a.windows_phone = 9 > +a.ie ? "7.0" : 10 > +a.ie ? "7.5" : "8.0", delete a.windows_nt
					} else
				if (a.gecko || a.firefox) a.gecko = a.rv;
				a.rv && delete a.rv;
				a.version && delete a.version;
				return a
			},
			format: function(b) {
				var d = "",
					a;
				for (a in b)
					if (a && b.hasOwnProperty(a)) {
						var c = a,
							e = b[a],
							c = c.split(".").join("-"),
							g = " ua-" + c;
						if ("string" === typeof e) {
							for (var e = e.split(" ").join("_").split(".").join("-"), f = e.indexOf("-"); 0 < f;) g += " ua-" + c + "-" + e.substring(0, f), f = e.indexOf("-", f + 1);
							g += " ua-" + c + "-" + e
						}
						d += g
					}
				return d
			},
			encode: function(b) {
				var d = "",
					a;
				for (a in b) a && b.hasOwnProperty(a) && (d && (d += "\x26"), d += encodeURIComponent(a) + "\x3d" + encodeURIComponent(b[a]));
				return d
			}
		};
	k.userAgent = k.ua = k.parse(l, p);
	l = k.format(k.ua) + " js";
	n.className = n.className ? n.className.replace(/\bno-js\b/g, "") + l : l.substr(1);
	return k
}(document.documentElement, navigator.userAgent, navigator.standalone);
var generateCarousel = function() {
	if (jQuery().carouFredSel) {
		jQuery('.es-carousel-wrapper').not('.fusion-woo-featured-products-slider').each(function() {
			jQuery(this).find('ul').carouFredSel({
				auto: false,
				prev: jQuery(this).find('.es-nav-prev'),
				next: jQuery(this).find('.es-nav-next'),
				width: '100%',
				height: 'variable',
				align: 'center',
				onCreate: function(data) {
					jQuery(this).find('.image').css('visibility', 'visible');
				}
			});
		});
		jQuery('.fusion-woo-featured-products-slider').each(function() {
			var carousel = jQuery(this).find('ul');
			carousel.carouFredSel({
				auto: false,
				prev: jQuery(this).find('.es-nav-prev'),
				next: jQuery(this).find('.es-nav-next'),
				align: 'left',
				left: 0,
				width: '100%',
				height: 'variable',
				responsive: true,
				scroll: {
					items: 1
				},
				items: {
					width: 500,
					height: 'variable',
					visible: {
						min: 1,
						max: 30
					}
				},
				onCreate: function(data) {
					jQuery(this).find('.image').css('visibility', 'visible');
					jQuery(this).parent().css('overflow', '');
				}
			});
		});
		jQuery('.simple-products-slider-variable').each(function() {
			var carousel = jQuery(this).find('ul');
			carousel.carouFredSel({
				auto: false,
				prev: jQuery(this).find('.es-nav-prev'),
				next: jQuery(this).find('.es-nav-next'),
				width: '100%',
				height: 'variable',
				align: 'center'
			});
		});
	}
};
var calcTabsLayout = function(tab_selector) {
	jQuery(tab_selector).each(function() {
		var menuWidth = jQuery(this).parent().width();
		var menuItems = jQuery(this).find('li').length;
		var mod = menuWidth % menuItems;
		var itemWidth = (menuWidth - mod) / menuItems;
		var lastItemWidth = menuWidth - itemWidth * (menuItems - 1);
		jQuery(this).css({
			'width': menuWidth + 'px'
		});
		jQuery(this).find('li').css({
			'width': itemWidth + 'px'
		});
		jQuery(this).find('li:last').css({
			'width': lastItemWidth + 'px'
		}).addClass('no-border-right');
	});
};
var fusion_reanimate_slider = function(content_container) {
	var slide_content = content_container.find('.slide-content');
	jQuery(slide_content).each(function() {
		jQuery(this).stop(true, true);
		jQuery(this).css('opacity', '0');
		jQuery(this).css('margin-top', '50px');
		jQuery(this).animate({
			'opacity': '1',
			'margin-top': '0'
		}, 1000);
	});
};

function onPlayerStateChange(frame, slider) {
	return function(event) {
		if (event.data == YT.PlayerState.PLAYING) {
			jQuery(slider).flexslider("pause");
		}
		if (event.data == YT.PlayerState.PAUSED) {
			jQuery(slider).flexslider("play");
		}
		if (event.data == YT.PlayerState.BUFFERING) {
			jQuery(slider).flexslider("pause");
		}
	}
}

function onPlayerReady(slide) {
	return function(event) {
		if (jQuery(slide).attr('data-mute') == 'yes') {
			event.target.mute();
		}
	}
}
(function(jQuery) {
	"use strict";
	jQuery('.tfs-slider').each(function() {
		var this_tfslider = this;
		if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
			jQuery(this_tfslider).data('parallax', 0);
			jQuery(this_tfslider).data('full_screen', 0);
		}
		if (cssua.ua.tablet_pc) {
			jQuery(this_tfslider).data('parallax', 0);
		}
		if (cssua.ua.mobile) {
			jQuery(this_tfslider).data('parallax', 0);
		}
	});
	jQuery.fn.init_sticky_header = function() {
		var sticky_mobile_menu_padding;
		var sticky_header_height = 65;
		var sticky_top = jQuery('.sticky-header').css('top');
		var sticky_start = sticky_top.replace('px', '') - 55;
		var logo = '.sticky-header .logo img.normal_logo';
		var not_logo = '.sticky-header .logo img.retina_logo';
		var orig_logo_height, orig_logo_width, logo_max_width, width_ratio, calc_width, calc_height, logo_height, logo_line_height, logo_width, logo_margin_top = 0;
		var anchor_scrolling = 0;
		jQuery('.sticky-header').css('top', sticky_start + 'px');
		jQuery('.init-sticky-header').waypoint(function(direction) {
			if (direction === "down") {
				var adminbar_height = jQuery('#wpadminbar').outerHeight();
				var anchor = window.location.hash.toString();
				if (anchor.length > 1 && jQuery(anchor).length && !anchor_scrolling) {
					jQuery('html, body').animate({
						scrollTop: jQuery(anchor).offset().top - adminbar_height - 65 + 1
					}, 350, 'easeInOutExpo');
					anchor_scrolling = 1;
				}
				if (jQuery('#wpadminbar').length) {
					sticky_top = jQuery('#wpadminbar').outerHeight() + "px";
				}
				jQuery('.sticky-header').show();
				jQuery('.sticky-header').animate({
					height: sticky_header_height + 3 + 'px',
					top: sticky_top
				}, 500);
				jQuery('.sticky-shadow').animate({
					height: sticky_header_height + 'px',
					top: sticky_top
				}, 500);
				if (jQuery('#header .retina_logo').is(':visible')) {
					logo = '.sticky-header .logo img.retina_logo';
					not_logo = '.sticky-header .logo img.normal_logo';
				} else {
					logo = '.sticky-header .logo img.normal_logo';
					not_logo = '.sticky-header .logo img.retina_logo';
				}
				orig_logo_height = jQuery(logo).height();
				orig_logo_width = jQuery(logo).width();
				logo_max_width = jQuery(logo).data("max-width");
				if (jQuery('.no-svg').length >= 1) {
					orig_logo_height = orig_logo_height + 4;
					orig_logo_width = orig_logo_width + 4;
				}
				calc_width = orig_logo_width;
				calc_height = orig_logo_height;
				if (logo_max_width > 0) {
					width_ratio = logo_max_width / orig_logo_width;
					calc_width = logo_max_width;
					calc_height = orig_logo_height * width_ratio;
				}
				if (calc_height > 55) {
					logo_height = "55px";
					logo_line_height = "55px";
					logo_width = 55 / orig_logo_height * orig_logo_width;
					logo_margin_top = "5px";
				} else {
					logo_height = calc_height + "px";
					logo_line_height = calc_height + "px";
					logo_width = calc_width;
					logo_margin_top = (65 - calc_height) / 2;
				}
				sticky_mobile_menu_padding = logo_width + 25;
				jQuery('body #header-sticky.sticky-header .sticky-shadow .mobile-nav-holder').css('padding-left', sticky_mobile_menu_padding + "px");
				logo_width = logo_width + "px";
				if (jQuery('.no-svg').length) {
					jQuery(logo).animate({
						height: logo_height,
						'line-height': logo_line_height,
						'max-width': logo_width,
						'margin-top': logo_margin_top
					}, 500);
					jQuery(not_logo).css('height', logo_height).css('line-height', logo_line_height).css('max-width', logo_width).css('margin-top', logo_margin_top);
					jQuery(logo).css('display', '');
				} else {
					jQuery(logo).animate({
						height: logo_height,
						'line-height': logo_line_height,
						width: logo_width,
						'margin-top': logo_margin_top
					}, 500);
					jQuery(not_logo).css('height', logo_height).css('line-height', logo_line_height).css('width', logo_width).css('margin-top', logo_margin_top);
					jQuery(logo).css('display', '');
				}
				jQuery('.sticky-header #sticky-nav ul.menu > li > a').animate({
					height: sticky_header_height + 'px',
					'line-height': sticky_header_height + 'px'
				}, 500);
				jQuery('.sticky-header').addClass('sticky');
				jQuery('#small-nav').css('visibility', 'hidden');
			} else if (direction === "up") {
				jQuery('.sticky-header').css('height', '');
				jQuery('.sticky-shadow').css('height', '');
				jQuery('#header-sticky .retina_logo').css('height', orig_logo_height);
				jQuery('#header .retina_logo, #header-sticky .retina_logo').css('width', orig_logo_width);
				jQuery('#header-sticky .retina_logo').css('margin-top', '');
				jQuery('#header .normal_logo, #header-sticky .normal_logo').css('height', '');
				jQuery('#header .normal_logo, #header-sticky .normal_logo').css('width', '');
				jQuery('#header-sticky .retina_logo').css('margin-top', '');
				jQuery(logo + ',' + not_logo).css('line-height', '');
				jQuery(logo + ',' + not_logo).css('padding-top', '');
				jQuery(logo + ',' + not_logo).css('max-width', '');
				jQuery(logo + ',' + not_logo).css('margin-top', '');
				jQuery('.sticky-header #sticky-nav ul.menu > li > a').css('height', '');
				jQuery('.sticky-header #sticky-nav ul.menu > li > a').css('line-height', '');
				jQuery('.sticky-header').removeClass('sticky');
				jQuery('.sticky-header').hide();
				jQuery('#small-nav').css('visibility', 'visible');
				jQuery('.sticky-header .mobile-nav-holder #mobile-nav').css('display', 'none');
			}
		});
	};
	jQuery.fn.fusion_position_menu_dropdown = function(variables) {
		if ((js_local_vars.header_position == 'Top' && !jQuery('body.rtl').length) || js_local_vars.header_position == 'Left') {
			return jQuery(this).children('.sub-menu').each(function() {
				jQuery(this).removeAttr('style');
				jQuery(this).show();
				jQuery(this).removeData('shifted');
				var submenu = jQuery(this);
				if (submenu.length) {
					var submenu_position = submenu.offset(),
						submenu_left = submenu_position.left,
						submenu_top = submenu_position.top,
						submenu_height = submenu.height(),
						submenu_width = submenu.outerWidth(),
						submenu_bottom_edge = submenu_top + submenu_height,
						submenu_right_edge = submenu_left + submenu_width,
						browser_bottom_edge = jQuery(window).height(),
						browser_right_edge = jQuery(window).width();
					if (jQuery('#wpadminbar').length) {
						var admin_bar_height = jQuery('#wpadminbar').height();
					} else {
						var admin_bar_height = 0;
					}
					if (jQuery('#side-header').length) {
						var side_header_top = jQuery('#side-header').offset().top - admin_bar_height;
					}
					if (submenu_right_edge > browser_right_edge) {
						if (submenu.parent().parent('.sub-menu').parent().parent('.sub-menu').length) {
							submenu.css({
								'left': '0',
								'top': submenu.parent().parent('.sub-menu').height()
							});
						} else {
							if (!submenu.parent().parent('.sub-menu').length) {
								submenu.css('left', (-1) * submenu_width + submenu.parent().width());
							} else {
								submenu.css({
									'left': (-1) * submenu_width
								});
							}
						}
						submenu.data('shifted', 1);
					} else if (submenu.parent().parent('.sub-menu').length) {
						if (submenu.parent().parent('.sub-menu').data('shifted')) {
							submenu.css('left', (-1) * submenu_width);
							submenu.data('shifted', 1);
						}
					}
					if (js_local_vars.header_position != 'Top' && submenu_bottom_edge > side_header_top + browser_bottom_edge && jQuery(window).height() >= jQuery('.side-header-wrapper').height()) {
						if (submenu_height < browser_bottom_edge) {
							var submenu_new_top_pos = (-1) * (submenu_bottom_edge - side_header_top - browser_bottom_edge + 20);
						} else {
							var submenu_new_top_pos = (-1) * (submenu_top - admin_bar_height);
						}
						submenu.css('top', submenu_new_top_pos);
					}
				}
			});
		} else {
			return jQuery(this).children('.sub-menu').each(function() {
				jQuery(this).removeAttr('style');
				jQuery(this).removeData('shifted');
				var submenu = jQuery(this);
				if (submenu.length) {
					var submenu_position = submenu.offset(),
						submenu_left_edge = submenu_position.left,
						submenu_top = submenu_position.top,
						submenu_height = submenu.height(),
						submenu_width = submenu.outerWidth(),
						submenu_bottom_edge = submenu_top + submenu_height,
						browser_bottom_edge = jQuery(window).height();
					if (jQuery('#wpadminbar').length) {
						var admin_bar_height = jQuery('#wpadminbar').height();
					} else {
						var admin_bar_height = 0;
					}
					if (jQuery('#side-header').length) {
						var side_header_top = jQuery('#side-header').offset().top - admin_bar_height;
					}
					if (submenu_left_edge < 0) {
						if (submenu.parent().parent('.sub-menu').parent().parent('.sub-menu').length) {
							if (js_local_vars.header_position == 'Right') {
								submenu.css({
									'left': '0',
									'top': submenu.parent().parent('.sub-menu').height()
								});
							} else {
								submenu.css({
									'right': '0',
									'top': submenu.parent().parent('.sub-menu').height()
								});
							}
						} else {
							if (!submenu.parent().parent('.sub-menu').length) {
								submenu.css('right', (-1) * submenu_width + submenu.parent().width());
							} else {
								submenu.css({
									'right': (-1) * submenu_width
								});
							}
						}
						submenu.data('shifted', 1);
					} else if (submenu.parent().parent('.sub-menu').length) {
						if (submenu.parent().parent('.sub-menu').data('shifted')) {
							submenu.css('right', (-1) * submenu_width);
						}
					}
					if (js_local_vars.header_position != 'Top' && submenu_bottom_edge > side_header_top + browser_bottom_edge && jQuery(window).height() >= jQuery('.side-header-wrapper').height()) {
						if (submenu_height < browser_bottom_edge) {
							var submenu_new_top_pos = (-1) * (submenu_bottom_edge - side_header_top - browser_bottom_edge + 20);
						} else {
							var submenu_new_top_pos = (-1) * (submenu_top - admin_bar_height);
						}
						submenu.css('top', submenu_new_top_pos);
					}
				}
			});
		}
	};
	jQuery.fn.walk_through_menu_items = function() {
		jQuery(this).fusion_position_menu_dropdown();
		if (jQuery(this).find('.sub-menu').length) {
			jQuery(this).find('.sub-menu li').walk_through_menu_items();
		} else {
			return;
		}
	};
	jQuery.fn.position_cart_dropdown = function() {
		if (js_local_vars.header_position != 'Top') {
			jQuery(this).each(function() {
				jQuery(this).css('top', '');
				var cart_dropdown = jQuery(this),
					cart_dropdown_top = cart_dropdown.offset().top,
					cart_dropdown_height = cart_dropdown.height(),
					cart_dropdown_bottom_edge = cart_dropdown_top + cart_dropdown_height,
					admin_bar_height = (jQuery('#wpadminbar').length) ? jQuery('#wpadminbar').height() : 0,
					side_header_top = jQuery('#side-header').offset().top - admin_bar_height,
					browser_bottom_edge = jQuery(window).height();
				if (cart_dropdown_bottom_edge > side_header_top + browser_bottom_edge && jQuery(window).height() >= jQuery('.side-header-wrapper').height()) {
					if (cart_dropdown_height < browser_bottom_edge) {
						var cart_dropdown_new_top_pos = (-1) * (cart_dropdown_bottom_edge - side_header_top - browser_bottom_edge + 20);
					} else {
						var cart_dropdown_new_top_pos = (-1) * (cart_dropdown_top - admin_bar_height);
					}
					cart_dropdown.css('top', cart_dropdown_new_top_pos);
				}
			});
		}
	};
	jQuery.fn.position_menu_search_form = function() {
		if (js_local_vars.header_position != 'Top') {
			jQuery(this).each(function() {
				jQuery(this).css('top', '');
				var search_form = jQuery(this),
					search_form_top = search_form.offset().top,
					search_form_height = search_form.outerHeight(),
					search_form_bottom_edge = search_form_top + search_form_height,
					admin_bar_height = (jQuery('#wpadminbar').length) ? jQuery('#wpadminbar').height() : 0,
					side_header_top = jQuery('#side-header').offset().top - admin_bar_height,
					browser_bottom_edge = jQuery(window).height();
				if (search_form_bottom_edge > side_header_top + browser_bottom_edge && jQuery(window).height() >= jQuery('.side-header-wrapper').height()) {
					var search_form_new_top_pos = (-1) * (search_form_bottom_edge - side_header_top - browser_bottom_edge + 20);
					search_form.css('top', search_form_new_top_pos);
				}
			});
		}
	};
	jQuery.fn.fusion_position_megamenu = function(variables) {
		if (jQuery('.side-header-left').length) {
			return this.each(function() {
				jQuery(this).children('li').each(function() {
					var li_item = jQuery(this),
						megamenu_wrapper = li_item.find('.fusion-megamenu-wrapper');
					if (megamenu_wrapper.length) {
						megamenu_wrapper.removeAttr('style');
						var megamenu_wrapper_left = jQuery('#side-header').outerWidth() - 1,
							megamenu_wrapper_top = megamenu_wrapper.offset().top,
							megamenu_wrapper_height = megamenu_wrapper.height(),
							megamenu_bottom_edge = megamenu_wrapper_top + megamenu_wrapper_height,
							admin_bar_height = (jQuery('#wpadminbar').length) ? jQuery('#wpadminbar').height() : 0,
							side_header_top = jQuery('#side-header').offset().top - admin_bar_height,
							browser_bottom_edge = jQuery(window).height();
						if (!jQuery('body.rtl').length) {
							megamenu_wrapper.css('left', megamenu_wrapper_left);
						} else {
							megamenu_wrapper.css({
								'left': megamenu_wrapper_left,
								'right': 'auto'
							});
						}
						if (megamenu_bottom_edge > side_header_top + browser_bottom_edge && jQuery(window).height() >= jQuery('.side-header-wrapper').height()) {
							if (megamenu_wrapper_height < browser_bottom_edge) {
								var megamenu_wrapper_new_top_pos = (-1) * (megamenu_bottom_edge - side_header_top - browser_bottom_edge + 20);
							} else {
								var megamenu_wrapper_new_top_pos = (-1) * (megamenu_wrapper_top - admin_bar_height);
							}
							megamenu_wrapper.css('top', megamenu_wrapper_new_top_pos);
						}
					}
				});
			});
		}
		if (jQuery('.side-header-right').length) {
			return this.each(function() {
				jQuery(this).children('li').each(function() {
					var li_item = jQuery(this),
						megamenu_wrapper = li_item.find('.fusion-megamenu-wrapper');
					if (megamenu_wrapper.length) {
						megamenu_wrapper.removeAttr('style');
						var megamenu_wrapper_left = (-1) * megamenu_wrapper.outerWidth(),
							megamenu_wrapper_top = megamenu_wrapper.offset().top,
							megamenu_wrapper_height = megamenu_wrapper.height(),
							megamenu_bottom_edge = megamenu_wrapper_top + megamenu_wrapper_height,
							admin_bar_height = (jQuery('#wpadminbar').length) ? jQuery('#wpadminbar').height() : 0,
							side_header_top = jQuery('#side-header').offset().top - admin_bar_height,
							browser_bottom_edge = jQuery(window).height();
						if (!jQuery('body.rtl').length) {
							megamenu_wrapper.css('left', megamenu_wrapper_left);
						} else {
							megamenu_wrapper.css({
								'left': megamenu_wrapper_left,
								'right': 'auto'
							});
						}
						if (megamenu_bottom_edge > side_header_top + browser_bottom_edge && jQuery(window).height() >= jQuery('.side-header-wrapper').height()) {
							if (megamenu_wrapper_height < browser_bottom_edge) {
								var megamenu_wrapper_new_top_pos = (-1) * (megamenu_bottom_edge - side_header_top - browser_bottom_edge + 20);
							} else {
								var megamenu_wrapper_new_top_pos = (-1) * (megamenu_wrapper_top - admin_bar_height);
							}
							megamenu_wrapper.css('top', megamenu_wrapper_new_top_pos);
						}
					}
				});
			});
		}
		var reference_elem = '';
		if (jQuery('.header-v4').length) {
			reference_elem = jQuery(this).parent('nav').parent();
		} else {
			reference_elem = jQuery(this).parent('nav');
		}
		if (jQuery(this).parent('nav').length) {
			var main_nav_container = reference_elem,
				main_nav_container_position = main_nav_container.offset(),
				main_nav_container_width = main_nav_container.width(),
				main_nav_container_left_edge = main_nav_container_position.left,
				main_nav_container_right_edge = main_nav_container_left_edge + main_nav_container_width;
			if (!jQuery('body.rtl').length) {
				return this.each(function() {
					jQuery(this).children('li').each(function() {
						var li_item = jQuery(this),
							li_item_position = li_item.offset(),
							megamenu_wrapper = li_item.find('.fusion-megamenu-wrapper'),
							megamenu_wrapper_width = megamenu_wrapper.outerWidth(),
							megamenu_wrapper_position = 0;
						if (megamenu_wrapper.length) {
							megamenu_wrapper.removeAttr('style');
							var reference_avada_row;
							if (jQuery('#small-nav').length) {
								reference_avada_row = jQuery('.header-wrapper #small-nav .avada-row');
							} else {
								reference_avada_row = jQuery('.header-wrapper .avada-row');
							}
							if (megamenu_wrapper.hasClass('col-span-12') && (reference_avada_row.width() < megamenu_wrapper.data('maxwidth'))) {
								megamenu_wrapper.css('width', reference_avada_row.width());
							} else {
								megamenu_wrapper.removeAttr('style');
							}
							megamenu_wrapper_width = megamenu_wrapper.outerWidth();
							if (li_item_position.left + megamenu_wrapper_width > main_nav_container_right_edge) {
								megamenu_wrapper_position = -1 * (li_item_position.left - (main_nav_container_right_edge - megamenu_wrapper_width));
								if (js_local_vars.logo_alignment.toLowerCase() == 'right') {
									if (li_item_position.left + megamenu_wrapper_position < main_nav_container_left_edge) {
										megamenu_wrapper_position = -1 * (li_item_position.left - main_nav_container_left_edge);
									}
								}
								megamenu_wrapper.css('left', megamenu_wrapper_position);
							}
						}
					});
				});
			} else {
				return this.each(function() {
					jQuery(this).children('li').each(function() {
						var li_item = jQuery(this),
							li_item_position = li_item.offset(),
							li_item_right_edge = li_item_position.left + li_item.outerWidth(),
							megamenu_wrapper = li_item.find('.fusion-megamenu-wrapper'),
							megamenu_wrapper_width = megamenu_wrapper.outerWidth(),
							megamenu_wrapper_position = 0;
						if (megamenu_wrapper.length) {
							megamenu_wrapper.removeAttr('style');
							var reference_avada_row;
							if (jQuery('#small-nav').length) {
								reference_avada_row = jQuery('.header-wrapper #small-nav .avada-row');
							} else {
								reference_avada_row = jQuery('.header-wrapper .avada-row');
							}
							if (megamenu_wrapper.hasClass('col-span-12') && (reference_avada_row.width() < megamenu_wrapper.data('maxwidth'))) {
								megamenu_wrapper.css('width', reference_avada_row.width());
							} else {
								megamenu_wrapper.removeAttr('style');
							}
							if (li_item_right_edge - megamenu_wrapper_width < main_nav_container_left_edge) {
								megamenu_wrapper_position = -1 * (megamenu_wrapper_width - (li_item_right_edge - main_nav_container_left_edge));
								if (js_local_vars.logo_alignment.toLowerCase() == 'left' || (js_local_vars.logo_alignment.toLowerCase() == 'center' && !jQuery('.header-v5').length) || jQuery(this).parents('.sticky-header').length) {
									if (li_item_right_edge - megamenu_wrapper_position > main_nav_container_right_edge) {
										megamenu_wrapper_position = -1 * (main_nav_container_right_edge - li_item_right_edge);
									}
								}
								megamenu_wrapper.css('right', megamenu_wrapper_position);
							}
						}
					});
				});
			}
		}
	};
	jQuery.fn.calc_mengamenu_responsive_column_widths = function(variables) {
		jQuery(this).find('.fusion-megamenu-menu').each(function() {
			var megamenu_holder = jQuery(this).find('.fusion-megamenu-holder');
			var megamenu_holder_full_width = megamenu_holder.data('width');
			var main_padding = jQuery('#main').css('padding-left').replace('px', '') * 2;
			var available_space = jQuery(window).width() - main_padding;
			if (js_local_vars.header_position != 'Top') {
				available_space = available_space - jQuery('#side-header').outerWidth() + 30;
			}
			if (available_space < megamenu_holder_full_width) {
				megamenu_holder.css('width', available_space);
				if (!megamenu_holder.parents('.fusion-megamenu-wrapper').hasClass('fusion-megamenu-fullwidth')) {
					megamenu_holder.find('.fusion-megamenu-submenu').each(function() {
						var submenu = jQuery(this);
						var submenu_width = submenu.data('width') * available_space / megamenu_holder_full_width;
						submenu.css('width', submenu_width);
					});
				}
			} else {
				megamenu_holder.css('width', megamenu_holder_full_width);
				if (!megamenu_holder.parents('.fusion-megamenu-wrapper').hasClass('fusion-megamenu-fullwidth')) {
					megamenu_holder.find('.fusion-megamenu-submenu').each(function() {
						jQuery(this).css('width', jQuery(this).data('width'));
					});
				}
			}
		});
	};
	jQuery.fn.position_last_top_menu_item = function(variables) {
		if (jQuery(this).children('ul').length || jQuery(this).children('div').length) {
			var last_item = jQuery(this),
				last_item_left_pos = last_item.position().left,
				last_item_width = last_item.outerWidth(),
				last_item_child, parent_container = jQuery('.header-social .avada-row'),
				parent_container_left_pos = parent_container.position().left,
				parent_container_width = parent_container.outerWidth();
			if (last_item.children('ul').length) {
				last_item_child = last_item.children('ul');
			} else if (last_item.children('div').length) {
				last_item_child = last_item.children('div');
			}
			if (!jQuery('body.rtl').length) {
				if (last_item_left_pos + last_item_child.outerWidth() > parent_container_left_pos + parent_container_width) {
					last_item_child.css('right', '-1px').css('left', 'auto');
					last_item_child.find('.sub-menu').each(function() {
						jQuery(this).css('right', '100px').css('left', 'auto');
					});
				}
			} else {
				if (last_item_child.position().left < last_item_left_pos) {
					last_item_child.css('left', '-1px').css('right', 'auto');
					last_item_child.find('.sub-menu').each(function() {
						jQuery(this).css('left', '100px').css('right', 'auto');
					});
				}
			}
		}
	};
	jQuery.fn.init_waypoint = function() {
		if (jQuery().waypoint) {
			jQuery('.fusion-counter-box').not('.fusion-modal .fusion-counter-box').waypoint(function() {
				jQuery(this).find('.display-counter').each(function() {
					jQuery(this).fusion_box_counting();
				});
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			});
			jQuery('.counter-circle-wrapper').not('.fusion-modal .counter-circle-wrapper').waypoint(function() {
				jQuery(this).fusion_draw_circles();
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			});
			jQuery('.counter-circle-wrapper').not('.fusion-modal .counter-circle-wrapper').waypoint(function() {
				var counter_circles = jQuery(this);
				jQuery(window).on('resize', function() {
					counter_circles.fusion_redraw_circles();
				});
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			});
			jQuery('.fusion-progressbar').not('.fusion-modal .fusion-progressbar').waypoint(function() {
				jQuery(this).fusion_draw_progress();
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			});
			jQuery('.fusion-animated').waypoint(function() {
				jQuery(this).css('visibility', 'visible');
				var animation_type = jQuery(this).data('animationtype');
				var animation_duration = jQuery(this).data('animationduration');
				jQuery(this).addClass('animated- ' + animation_type);
				if (animation_duration) {
					jQuery(this).css('-moz-animation-duration', animation_duration + 's');
					jQuery(this).css('-webkit-animation-duration', animation_duration + 's');
					jQuery(this).css('-ms-animation-duration', animation_duration + 's');
					jQuery(this).css('-o-animation-duration', animation_duration + 's');
					jQuery(this).css('animation-duration', animation_duration + 's');
				}
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			});
		}
	};
	jQuery.fn.fusion_box_counting = function() {
		var count_value = jQuery(this).data('value');
		var count_direction = jQuery(this).data('direction');
		if (count_direction == 'down') {
			jQuery(this).countTo({
				from: count_value,
				to: 0,
				refreshInterval: 10,
				speed: 1000
			});
		} else {
			jQuery(this).countTo({
				from: 0,
				to: count_value,
				refreshInterval: 10,
				speed: 1000
			});
		}
	};
	jQuery.fn.fusion_draw_circles = function() {
		var circle = jQuery(this);
		var countdown = circle.children('.counter-circle').attr('data-countdown');
		var filledcolor = circle.children('.counter-circle').attr('data-filledcolor');
		var unfilledcolor = circle.children('.counter-circle').attr('data-unfilledcolor');
		var scale = circle.children('.counter-circle').attr('data-scale');
		var size = circle.children('.counter-circle').attr('data-size');
		var speed = circle.children('.counter-circle').attr('data-speed');
		var strokesize = circle.children('.counter-circle').attr('data-strokesize');
		var percentage = circle.children('.counter-circle').attr('data-percent');
		if (circle.parent().width() < circle.width()) {
			size = circle.parent().width();
			strokesize = size / 220 * 11;
			circle.css({
				'width': size,
				'height': size,
				'line-height': size + 'px'
			});
			circle.find('.fusion-counter-circle').each(function() {
				jQuery(this).css({
					'width': size,
					'height': size,
					'line-height': size + 'px'
				});
				jQuery(this).data('size', size);
				jQuery(this).data('strokesize', strokesize);
			});
		}
		if (scale) {
			scale = jQuery('body').css('color');
		}
		if (countdown) {
			circle.children('.counter-circle').attr('data-percent', 100);
			circle.children('.counter-circle').easyPieChart({
				barColor: filledcolor,
				trackColor: unfilledcolor,
				scaleColor: scale,
				scaleLength: 5,
				lineCap: 'round',
				lineWidth: strokesize,
				size: size,
				rotate: 0,
				animate: {
					duration: speed,
					enabled: true
				}
			});
			circle.children('.counter-circle').data('easyPieChart').enableAnimation();
			circle.children('.counter-circle').data('easyPieChart').update(percentage);
		} else {
			circle.children('.counter-circle').easyPieChart({
				barColor: filledcolor,
				trackColor: unfilledcolor,
				scaleColor: scale,
				scaleLength: 5,
				lineCap: 'round',
				lineWidth: strokesize,
				size: size,
				rotate: 0,
				animate: {
					duration: speed,
					enabled: true
				}
			});
		}
	};
	jQuery.fn.fusion_redraw_circles = function() {
		var counter_circles_wrapper = jQuery(this);
		counter_circles_wrapper.attr('data-originalsize', counter_circles_wrapper.width());
		var fusion_counters_circle_width = counter_circles_wrapper.parent().width();
		if (fusion_counters_circle_width < counter_circles_wrapper.data('originalsize')) {
			counter_circles_wrapper.css({
				'width': fusion_counters_circle_width,
				'height': fusion_counters_circle_width,
				'line-height': fusion_counters_circle_width + 'px'
			});
			counter_circles_wrapper.find('.fusion-counter-circle').each(function() {
				jQuery(this).css({
					'width': fusion_counters_circle_width,
					'height': fusion_counters_circle_width,
					'line-height': fusion_counters_circle_width + 'px'
				});
				jQuery(this).data('size', fusion_counters_circle_width);
				jQuery(this).data('strokesize', fusion_counters_circle_width / 220 * 11);
				jQuery(this).data('animate', false);
				jQuery(this).attr('data-size', fusion_counters_circle_width);
				jQuery(this).attr('data-strokesize', fusion_counters_circle_width / 220 * 11);
				jQuery(this).children('canvas').remove();
				jQuery(this).removeData('easyPieChart');
			});
			counter_circles_wrapper.fusion_draw_circles();
		} else if (fusion_counters_circle_width >= counter_circles_wrapper.data('originalsize') && counter_circles_wrapper.width() < counter_circles_wrapper.data('originalsize')) {
			var original_size = counter_circles_wrapper.data('originalsize');
			counter_circles_wrapper.css({
				'width': original_size,
				'height': original_size,
				'line-height': original_size + 'px'
			});
			counter_circles_wrapper.find('.fusion-counter-circle').each(function() {
				jQuery(this).css({
					'width': original_size,
					'height': original_size,
					'line-height': original_size + 'px'
				});
				jQuery(this).data('size', original_size);
				jQuery(this).data('strokesize', original_size / 220 * 11);
				jQuery(this).data('animate', false);
				jQuery(this).attr('data-size', original_size);
				jQuery(this).attr('data-strokesize', original_size / 220 * 11);
				jQuery(this).children('canvas').remove();
				jQuery(this).removeData('easyPieChart');
			});
			counter_circles_wrapper.fusion_draw_circles();
		}
	};
	jQuery.fn.fusion_draw_progress = function() {
		var progressbar = jQuery(this);
		if (jQuery('html').hasClass('lt-ie9')) {
			progressbar.css('visibility', 'visible');
			progressbar.each(function() {
				var percentage = progressbar.find('.progress').attr("aria-valuenow");
				progressbar.find('.progress').css('width', '0%');
				progressbar.find('.progress').animate({
					width: percentage + '%'
				}, 'slow');
			});
		} else {
			progressbar.find('.progress').css("width", function() {
				return jQuery(this).attr("aria-valuenow") + "%";
			});
		}
	};
	jQuery.fn.fusion_calc_flip_boxes_height = function() {
		var flip_box = jQuery(this);
		var outer_height, height, top_margin = 0;
		flip_box.find('.flip-box-front').css('min-height', '');
		flip_box.find('.flip-box-back').css('min-height', '');
		flip_box.find('.flip-box-front-inner').css('margin-top', '');
		flip_box.find('.flip-box-back-inner').css('margin-top', '');
		flip_box.css('min-height', '');
		setTimeout(function() {
			if (flip_box.find('.flip-box-front').outerHeight() > flip_box.find('.flip-box-back').outerHeight()) {
				height = flip_box.find('.flip-box-front').height();
				if (cssua.ua.ie && cssua.ua.ie.substr(0, 1) == '8') {
					outer_height = flip_box.find('.flip-box-front').height();
				} else {
					outer_height = flip_box.find('.flip-box-front').outerHeight();
				}
				top_margin = (height - flip_box.find('.flip-box-back-inner').outerHeight()) / 2;
				flip_box.find('.flip-box-back').css('min-height', outer_height);
				flip_box.css('min-height', outer_height);
				flip_box.find('.flip-box-back-inner').css('margin-top', top_margin);
			} else {
				height = flip_box.find('.flip-box-back').height();
				if (cssua.ua.ie && cssua.ua.ie.substr(0, 1) == '8') {
					outer_height = flip_box.find('.flip-box-back').height();
				} else {
					outer_height = flip_box.find('.flip-box-back').outerHeight();
				}
				top_margin = (height - flip_box.find('.flip-box-front-inner').outerHeight()) / 2;
				flip_box.find('.flip-box-front').css('min-height', outer_height);
				flip_box.css('min-height', outer_height);
				flip_box.find('.flip-box-front-inner').css('margin-top', top_margin);
			}
			if (cssua.ua.ie && cssua.ua.ie.substr(0, 1) == '8') {
				flip_box.find('.flip-box-back').css('height', '100%');
			}
		}, 100);
	};
	jQuery.fn.fusion_scroller = function(options) {
		var settings = jQuery.extend({
			type: 'opacity',
			offset: 0,
			end_offset: ''
		}, options);
		var divs = jQuery(this);
		divs.each(function() {
			var offset, height, end_offset;
			var current_element = this;
			jQuery(window).on('scroll', function() {
				offset = jQuery(current_element).offset().top;
				if (jQuery('body').hasClass('admin-bar')) {
					offset = jQuery(current_element).offset().top - jQuery('#wpadminbar').outerHeight();
				}
				if (settings.offset > 0) {
					offset = jQuery(current_element).offset().top - settings.offset;
				}
				height = jQuery(current_element).outerHeight();
				end_offset = offset + height;
				if (settings.end_offset) {
					end_offset = jQuery(settings.end_offset).offset().top;
				}
				var st = jQuery(this).scrollTop();
				if (st >= offset && st <= end_offset) {
					var diff = end_offset - st;
					var diff_percentage = (diff / height) * 100;
					if (settings.type == 'opacity') {
						var opacity = (diff_percentage / 100) * 1;
						jQuery(current_element).css({
							'opacity': opacity
						});
					} else if (settings.type == 'blur') {
						var diff_percentage = 100 - diff_percentage;
						var blur = 'blur(' + ((diff_percentage / 100) * 50) + 'px)';
						jQuery(current_element).css({
							'-webkit-filter': blur,
							'-ms-filter': blur,
							'-o-filter': blur,
							'-moz-filter': blur,
							'filter': blur
						});
					} else if (settings.type == 'fading_blur') {
						var opacity = (diff_percentage / 100) * 1;
						var diff_percentage = 100 - diff_percentage;
						var blur = 'blur(' + ((diff_percentage / 100) * 50) + 'px)';
						jQuery(current_element).css({
							'-webkit-filter': blur,
							'-ms-filter': blur,
							'-o-filter': blur,
							'-moz-filter': blur,
							'filter': blur,
							'opacity': opacity
						});
					}
				}
				if (st < offset) {
					if (settings.type == 'opacity') {
						jQuery(current_element).css({
							'opacity': 1
						});
					} else if (settings.type == 'blur') {
						blur = 'blur(0px)';
						jQuery(current_element).css({
							'-webkit-filter': blur,
							'-ms-filter': blur,
							'-o-filter': blur,
							'-moz-filter': blur,
							'filter': blur
						});
					} else if (settings.type == 'fading_blur') {
						blur = 'blur(0px)';
						jQuery(current_element).css({
							'opacity': 1,
							'-webkit-filter': blur,
							'-ms-filter': blur,
							'-o-filter': blur,
							'-moz-filter': blur,
							'filter': blur
						});
					}
				}
			});
		});
	};
	jQuery.fn.fusion_switch_tab_on_link_click = function() {
		if (document.location.hash && jQuery(this).find('.nav-tabs li a[href="' + document.location.hash + '"]').length) {
			jQuery(this).find('.nav-tabs li').removeClass('active');
			jQuery(this).find('.nav-tabs li a[href="' + document.location.hash + '"]').parent().addClass('active');
			jQuery(this).find('.tab-content .tab-pane').removeClass('in').removeClass('active');
			jQuery(this).find('.tab-content .tab-pane[id="' + document.location.hash.split('#')[1] + '"]').addClass('in').addClass('active');
		}
		if (document.location.hash && jQuery(this).find('.nav-tabs li a[id="' + window.location.href.split('#')[1] + '"]').length) {
			jQuery(this).find('.nav-tabs li').removeClass('active');
			jQuery(this).find('.nav-tabs li a[id="' + window.location.href.split('#')[1] + '"]').parent().addClass('active');
			jQuery(this).find('.tab-content .tab-pane').removeClass('in').removeClass('active');
			jQuery(this).find('.tab-content .tab-pane[id="' + jQuery(this).find('.nav-tabs li a[id="' + window.location.href.split('#')[1] + '"]').attr('href').split('#')[1] + '"]').addClass('in').addClass('active');
		}
	};
	jQuery.fn.equalHeights = function(min_height, max_height) {
		if (Modernizr.mq('only screen and (min-width: 800px)') || Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)')) {
			var tallest = (min_height) ? min_height : 0;
			this.each(function() {
				jQuery(this).css('min-height', '0');
				jQuery(this).css('height', 'auto');
				if (jQuery(this).outerHeight() > tallest) {
					tallest = jQuery(this).outerHeight();
				}
			});
			if ((max_height) && tallest > max_height) {
				tallest = max_height;
			}
			return this.each(function() {
				jQuery(this).css('min-height', tallest).css('overflow', 'auto');
			});
		} else {
			return this.each(function() {
				jQuery(this).css('min-height', '').css('overflow', 'auto');
			});
		}
	};
	jQuery.fn.reinitialize_google_map = function() {
		var fusion_map_object = jQuery(this).data('plugin_fusion_maps'),
			map = fusion_map_object.map,
			center = map.getCenter();
		google.maps.event.trigger(map, 'resize');
		map.setCenter(center);
	};
})(jQuery);
jQuery(window).load(function() {
	if (js_local_vars.is_responsive == '0') {
		var column_classes = ['col-sm-0', 'col-sm-1', 'col-sm-2', 'col-sm-3', 'col-sm-4', 'col-sm-5', 'col-sm-6', 'col-sm-7', 'col-sm-8', 'col-sm-9', 'col-sm-10', 'col-sm-11', 'col-sm-12'];
		jQuery('.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12').each(function() {
			for (var i = 0; i < column_classes.length; i++) {
				if (jQuery(this).attr('class').indexOf(column_classes[i]) !== -1) {
					jQuery(this).addClass('col-xs-' + i);
				}
			}
		});
	}
	jQuery.waypoints('viewportHeight');
	setTimeout(function() {
		jQuery(window).init_waypoint();
	}, 300);
	jQuery('.fusion-modal .fusion-counter-box').each(function() {
		jQuery(this).appear(function() {
			jQuery(this).find('.display-counter').each(function() {
				jQuery(this).fusion_box_counting();
			});
		});
	});
	jQuery('.fusion-modal .counter-circle-wrapper').each(function() {
		jQuery(this).appear(function() {
			jQuery(this).fusion_draw_circles();
		});
	});
	jQuery('.fusion-modal .fusion-progressbar').each(function() {
		jQuery(this).appear(function() {
			jQuery(this).fusion_draw_progress();
		});
	});
	jQuery('.flip-box-inner-wrapper').each(function() {
		jQuery(this).fusion_calc_flip_boxes_height();
	});

	function onBefore(curr, next, opts, fwd) {
		var $ht = jQuery(this).height();
		jQuery(this).parent().children().removeClass('active-testimonial');
		jQuery(this).addClass('active-testimonial');
		jQuery(this).parent().animate({
			height: $ht
		}, 500);
	}
	if (jQuery().cycle) {
		var reviews_cycle_args = {
			fx: 'fade',
			before: onBefore,
			containerResize: 0,
			containerResizeHeight: 1,
			height: 'auto',
			width: '100%',
			fit: 1,
			speed: 500,
			delay: 0
		};
		if (js_local_vars.testimonials_speed) {
			reviews_cycle_args.timeout = parseInt(js_local_vars.testimonials_speed);
		}
		reviews_cycle_args.pager = '.testimonial-pagination';
		jQuery('.fusion-testimonials .reviews').each(function() {
			if (jQuery(this).children().length == 1) {
				jQuery(this).children().fadeIn();
			}
			reviews_cycle_args.pager = '#' + jQuery(this).parent().find('.testimonial-pagination').attr('id');
			jQuery(this).cycle(reviews_cycle_args);
		});
		jQuery(window).resize(function() {
			jQuery('.fusion-testimonials .reviews').each(function() {
				jQuery(this).css('height', jQuery(this).children('.active-testimonial').height());
			});
		});
	}
	jQuery('.fusion-accordian .panel-title a').on('click', function() {
		var clicked_toggle = jQuery(this);
		var toggle_content_to_activate = jQuery(jQuery(this).data('target')).find('.panel-body');
		jQuery(window).trigger('resize');
		if (clicked_toggle.hasClass('active')) {
			clicked_toggle.parents('.fusion-accordian ').find('.panel-title a').removeClass('active');
		} else {
			clicked_toggle.parents('.fusion-accordian ').find('.panel-title a').removeClass('active');
			clicked_toggle.addClass('active');
			setTimeout(function() {
				toggle_content_to_activate.find('.shortcode-map').each(function() {
					jQuery(this).reinitialize_google_map();
				});
				if (toggle_content_to_activate.find('.es-carousel-wrapper').length) {
					generateCarousel();
				}
				toggle_content_to_activate.find('.portfolio').each(function() {
					jQuery(this).find('.portfolio-wrapper').isotope('layout');
				});
				if (toggle_content_to_activate.find('.flexslider').length) {
					jQuery(window).trigger('resize');
				}
				toggle_content_to_activate.find('.fusion-blog-shortcode').each(function() {
					var columns = 2;
					for (i = 1; i < 7; i++) {
						if (jQuery(this).find('.grid-layout').hasClass('grid-layout-' + i)) {
							columns = i;
						}
					}
					var grid_width = Math.floor(100 / columns * 100) / 100 + '%';
					jQuery(this).find('.grid-layout').find('.post').css('width', grid_width);
					jQuery(this).find('.grid-layout').isotope();
					calc_select_arrow_dimensions();
				});
			}, 350);
		}
	});
	jQuery('.fusion-modal').each(function() {
		jQuery('#wrapper').append(jQuery(this));
	});
	jQuery('.fusion-modal').bind('hidden.bs.modal', function() {
		jQuery('html').css('overflow', '');
	});
	jQuery('.fusion-modal').bind('show.bs.modal', function() {
		jQuery('html').css('overflow', 'visible');
		var modal_window = jQuery(this);
		jQuery(window).trigger('resize');
		setTimeout(function() {
			modal_window.find('.shortcode-map').each(function() {
				jQuery(this).reinitialize_google_map();
			});
			if (modal_window.find('.es-carousel-wrapper').length) {
				generateCarousel();
			}
			modal_window.find('.portfolio').each(function() {
				jQuery(this).find('.portfolio-wrapper').isotope('layout');
			});
			if (modal_window.find('.flexslider').length) {
				jQuery(window).trigger('resize');
			}
			modal_window.find('.fusion-blog-shortcode').each(function() {
				var columns = 2;
				for (i = 1; i < 7; i++) {
					if (jQuery(this).find('.grid-layout').hasClass('grid-layout-' + i)) {
						columns = i;
					}
				}
				var grid_width = Math.floor(100 / columns * 100) / 100 + '%';
				jQuery(this).find('.grid-layout').find('.post').css('width', grid_width);
				jQuery(this).find('.grid-layout').isotope();
				calc_select_arrow_dimensions();
			});
		}, 350);
	});
	if (jQuery('#sliders-container .tfs-slider').data('parallax') == 1) {
		jQuery('.fusion-modal').css('top', jQuery('.header-wrapper').height());
	}
	jQuery('.fusion-modal').each(function() {
		jQuery(this).on('hide.bs.modal', function() {
			jQuery(this).find('iframe').each(function(i) {
				var func = 'stopVideo';
				this.contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
			});
			jQuery(this).find('.fusion-vimeo iframe').each(function(i) {
				$f(this).api('pause');
			});
		});
	});
	jQuery('[data-toggle=modal]').on('click', function(e) {
		e.preventDefault();
	});
	jQuery('.fusion-modal-text-link').click(function(e) {
		e.preventDefault();
	});
	if (cssua.ua.mobile || cssua.ua.tablet_pc) {
		jQuery('.fusion-popover, .fusion-tooltip').each(function() {
			jQuery(this).attr('data-trigger', 'click');
			jQuery(this).data('trigger', 'click');
		});
	}
	jQuery('[data-toggle~="popover"]').popover({
		container: 'body'
	});
	if (jQuery('.vertical-tabs').length) {
		jQuery('.vertical-tabs .tab-content .tab-pane').each(function() {
			if (jQuery(this).parents('.vertical-tabs').hasClass('clean')) {
				jQuery(this).css('min-height', jQuery('.vertical-tabs .nav-tabs').outerHeight() - 10);
			} else {
				jQuery(this).css('min-height', jQuery('.vertical-tabs .nav-tabs').outerHeight());
			}
			if (jQuery(this).find('.video-shortcode').length) {
				var video_width = parseInt(jQuery(this).find('.fusion-video').css('max-width').replace('px', ''));
				jQuery(this).css({
					'float': 'none',
					'max-width': video_width + 60
				});
			}
		});
	}
	jQuery(window).on('resize', function() {
		if (jQuery('.vertical-tabs').length) {
			jQuery('.vertical-tabs .tab-content .tab-pane').css('min-height', jQuery('.vertical-tabs .nav-tabs').outerHeight());
		}
	});
	jQuery('[data-toggle~="tooltip"]').tooltip({
		container: 'body'
	});
	generateCarousel();
	if (jQuery().flexslider && jQuery('.woocommerce .images #carousel').length >= 1) {
		var WooThumbWidth = 100;
		if (jQuery('body.woocommerce .sidebar').is(':visible')) {
			wooThumbWidth = 100;
		} else {
			wooThumbWidth = 118;
		}
		if (typeof jQuery('.woocommerce .images #carousel').data('flexslider') !== 'undefined') {
			jQuery('.woocommerce .images #carousel').flexslider('destroy');
			jQuery('.woocommerce .images #slider').flexslider('destroy');
		}
		jQuery('.woocommerce .images #carousel').flexslider({
			animation: 'slide',
			controlNav: false,
			directionNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: wooThumbWidth,
			itemMargin: 9,
			touch: false,
			useCSS: false,
			asNavFor: '.woocommerce .images #slider',
			smoothHeight: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;'
		});
		jQuery('.woocommerce .images #slider').flexslider({
			animation: 'slide',
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			smoothHeight: true,
			touch: true,
			useCSS: false,
			sync: '.woocommerce .images #carousel',
			prevText: '&#xf104;',
			nextText: '&#xf105;'
		});
	}
	if (jQuery().flexslider && jQuery('.flexslider-attachments').length >= 1) {
		if (typeof jQuery('.flexslider-attachments').data('flexslider') !== 'undefined') {
			jQuery('.flexslider-attachments').flexslider('destroy');
		}
		jQuery('.flexslider-attachments').flexslider({
			slideshow: Boolean(Number(js_local_vars.slideshow_autoplay)),
			slideshowSpeed: js_local_vars.slideshow_speed,
			video: false,
			smoothHeight: false,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			controlNav: 'thumbnails'
		});
	}
	jQuery('.content-boxes-icon-boxed').each(function() {
		jQuery(this).find('.content-box-column .content-wrapper-boxed').equalHeights();
		jQuery(this).find('.content-box-column .content-wrapper-boxed').css('overflow', 'visible');
	});
	jQuery(window).on('resize', function() {
		jQuery('.content-boxes-icon-boxed').each(function() {
			jQuery(this).find('.content-box-column .content-wrapper-boxed').equalHeights();
			jQuery(this).find('.content-box-column .content-wrapper-boxed').css('overflow', 'visible');
		});
	});
	jQuery('.double-sidebars.woocommerce .social-share > li').equalHeights();
	jQuery('.fusion-fullwidth.equal-height-columns').each(function() {
		jQuery(this).find('.fusion-column .fusion-column-wrapper').equalHeights();
	});
	jQuery(window).on('resize', function() {
		jQuery('.fusion-fullwidth.equal-height-columns').each(function() {
			jQuery(this).find('.fusion-layout-column .fusion-column-wrapper').equalHeights();
		});
	});
	if (cssua.ua.ios) {
		var ios_version = parseInt(cssua.ua.ios);
		if (ios_version == 7) {
			jQuery('.button-icon-divider-left, .button-icon-divider-right').each(function() {
				var height = jQuery(this).parent().outerHeight();
				jQuery(this).css('height', height);
			});
		}
	}
});
jQuery(document).ready(function($) {
	if (js_local_vars.header_position != 'Top') {
		var resize_width = jQuery(window).width();
		var resize_height = jQuery(window).height();
		jQuery(window).on('resize', function() {
			if (jQuery(window).width() != resize_width || jQuery(window).height() != resize_height) {
				if (jQuery(window).height() < jQuery('.side-header-wrapper').height()) {
					jQuery('body').css('position', 'relative');
					if (jQuery('.layout-boxed-mode').length && js_local_vars.header_position == 'Right') {
						jQuery('.side-header-wrapper').css('position', 'absolute');
					} else if (jQuery('body.rtl').length && js_local_vars.header_position == 'Left') {
						jQuery('#side-header').css({
							'position': 'absolute',
							'top': '0'
						});
						jQuery('.side-header-wrapper').css('position', 'absolute');
						jQuery('#slidingbar-area').css('top', '0');
					} else {
						jQuery('#slidingbar-area').css('top', '0');
						jQuery('#side-header').css({
							'position': 'absolute',
							'top': '0'
						});
					}
				} else {
					jQuery('body').css('position', '');
					jQuery('#slidingbar-area').css('top', '');
					jQuery('#side-header').css({
						'position': '',
						'top': ''
					});
					jQuery('.side-header-wrapper').css('position', '');
				}
				resize_width = jQuery(window).width();
				resize_height = jQuery(window).height();
			}
		});
		if (jQuery(window).height() < jQuery('.side-header-wrapper').height()) {
			jQuery('body').css('position', 'relative');
			if (jQuery('.layout-boxed-mode').length && js_local_vars.header_position == 'Right') {
				jQuery('.side-header-wrapper').css('position', 'absolute');
			} else if (jQuery('body.rtl').length && js_local_vars.header_position == 'Left') {
				jQuery('#side-header').css({
					'position': 'absolute',
					'top': '0'
				});
				jQuery('.side-header-wrapper').css('position', 'absolute');
				jQuery('#slidingbar-area').css('top', '0');
			} else {
				jQuery('#slidingbar-area').css('top', '0');
				jQuery('#side-header').css({
					'position': 'absolute',
					'top': '0'
				});
			}
		}
	}
	jQuery('#nav > ul > li:last-child').addClass('last-menu-item');
	jQuery('#sticky-nav > ul > li:last-child').addClass('last-menu-item');
	if (cssua.ua.ie) {
		jQuery('.header-shadow').removeClass('header-shadow');
	}
	if (js_local_vars.disable_mobile_animate_css == '1' && cssua.ua.mobile) {
		jQuery('body').addClass('dont-animate');
	} else {
		jQuery('body').addClass('do-animate');
	}
	if (jQuery('#sidebar-2').length >= 1) {
		var sidebar_1_float = jQuery('#sidebar').css('float');
		jQuery('body').addClass('sidebar-position-' + sidebar_1_float);
	}
	jQuery('.fusion-flip-box').mouseover(function() {
		jQuery(this).addClass('hover');
	});
	jQuery('.fusion-flip-box').mouseout(function() {
		jQuery(this).removeClass('hover');
	});
	jQuery('.fusion-accordian .panel-title a').click(function(e) {
		e.preventDefault();
	});
	jQuery('.header-wrapper .top-menu > ul > li:last-child').position_last_top_menu_item();
	jQuery('.fusion-navbar-nav').mouseenter(function() {
		jQuery(this).css('overflow', '');
	});
	if (jQuery.fn.fusion_position_menu_dropdown) {
		jQuery('.fusion-navbar-nav .fusion-dropdown-menu, .fusion-navbar-nav .fusion-dropdown-menu li').mouseenter(function() {
			jQuery(this).fusion_position_menu_dropdown();
		});
		jQuery('.fusion-navbar-nav .fusion-dropdown-menu > ul > li').each(function() {
			jQuery(this).walk_through_menu_items();
		});
		jQuery(window).on('resize', function() {
			jQuery('.fusion-navbar-nav .fusion-dropdown-menu > ul > li').each(function() {
				jQuery(this).walk_through_menu_items();
			});
		});
	}
	jQuery('.fusion-navbar-nav .fusion-dropdown-menu ').mouseenter(function() {
		jQuery(this).css('overflow', 'visible');
	});
	jQuery('.fusion-navbar-nav .fusion-dropdown-menu').mouseleave(function() {
		jQuery(this).css('overflow', '');
	});
	if (js_local_vars.header_position == 'Top') {
		if (jQuery('.fusion-navbar-nav .cart').length) {
			jQuery('.fusion-navbar-nav .cart').mouseenter(function(e) {
				if (!jQuery('body.rtl').length && jQuery(this).find('.cart-contents').length && jQuery(this).find('.cart-contents').offset().left < 0) {
					jQuery(this).find('.cart-contents').css({
						'left': '0',
						'right': 'auto'
					});
				}
				if (jQuery('body.rtl').length && jQuery(this).find('.cart-contents').length && jQuery(this).find('.cart-contents').offset().left + jQuery(this).find('.cart-contents').width() > jQuery(window).width()) {
					jQuery(this).find('.cart-contents').css({
						'left': 'auto',
						'right': '0'
					});
				}
			});
		}
		jQuery(window).on('resize', function() {
			jQuery('.fusion-navbar-nav .cart').find('.cart-contents').each(function() {
				var cart_dropdown = jQuery(this),
					cart_dropdown_width = cart_dropdown.outerWidth(),
					cart_dropdown_left_edge = cart_dropdown.offset().left,
					cart_dropdown_right_edge = cart_dropdown_left_edge + cart_dropdown_width,
					cart_menu_item_left_edge = cart_dropdown.parent().offset().left,
					window_right_edge = jQuery(window).width();
				if (!jQuery('body.rtl').length) {
					if ((cart_dropdown_left_edge < cart_menu_item_left_edge && cart_dropdown_left_edge < 0) || (cart_dropdown_left_edge == cart_menu_item_left_edge && cart_dropdown_left_edge - cart_dropdown_width < 0)) {
						cart_dropdown.css({
							'left': '0',
							'right': 'auto'
						});
					} else {
						cart_dropdown.css({
							'left': 'auto',
							'right': '0'
						});
					}
				} else {
					if ((cart_dropdown_left_edge == cart_menu_item_left_edge && cart_dropdown_right_edge > window_right_edge) || (cart_dropdown_left_edge < cart_menu_item_left_edge && cart_dropdown_right_edge + cart_dropdown_width > window_right_edge)) {
						cart_dropdown.css({
							'left': 'auto',
							'right': '0'
						});
					} else {
						cart_dropdown.css({
							'left': '0',
							'right': 'auto'
						});
					}
				}
			});
		});
	}
	jQuery('.fusion-navbar-nav .cart').find('.cart-contents').position_cart_dropdown();
	jQuery(window).on('resize', function() {
		jQuery('.fusion-navbar-nav .cart').find('.cart-contents').position_cart_dropdown();
	});
	jQuery('.fusion-navbar-nav .search-link').click(function() {
		setTimeout(function() {
			jQuery('.fusion-navbar-nav .search-link').parent().find('.main-nav-search-form').position_menu_search_form();
		}, 5);
	});
	jQuery(window).on('resize', function() {
		jQuery('.fusion-navbar-nav .main-nav-search').find('.main-nav-search-form').position_menu_search_form();
	});
	if (jQuery.fn.fusion_position_megamenu) {
		jQuery('.fusion-navbar-nav').fusion_position_megamenu();
		jQuery('.fusion-navbar-nav .fusion-megamenu-menu').mouseenter(function() {
			jQuery(this).parent().fusion_position_megamenu();
		});
		jQuery(window).resize(function() {
			jQuery('.fusion-navbar-nav').fusion_position_megamenu();
		});
	}
	if (jQuery.fn.fusion_position_megamenu) {
		jQuery('.fusion-navbar-nav').calc_mengamenu_responsive_column_widths();
		jQuery(window).resize(function() {
			jQuery('.fusion-navbar-nav').calc_mengamenu_responsive_column_widths();
		});
	}
	jQuery('.fusion-megamenu-menu').mouseenter(function() {
		if (jQuery(this).find('.shortcode-map').length >= 1) {
			jQuery(this).find('.shortcode-map').each(function() {
				jQuery(this).reinitialize_google_map();
			});
		}
	});
	jQuery(".my-show").click(function() {
		jQuery(".my-hidden").css('visibility', 'visible');
	});
	if (jQuery(".demo_store").length) {
		jQuery("#wrapper").css('margin-top', jQuery(".demo_store").outerHeight());
		if (jQuery("#slidingbar-area").outerHeight() > 0) {
			jQuery(".header-wrapper").css('margin-top', '0');
		}
		if (jQuery('.sticky-header').length) {
			jQuery('.sticky-header').css('margin-top', jQuery('.demo_store').outerHeight());
		}
	}
	var slidingbar_state = 0;
	if (jQuery('#slidingbar-area.open_onload').length) {
		jQuery("div#slidingbar").slideDown(240, 'easeOutQuad');
		jQuery('.sb-toggle').addClass('open');
		slidingbar_state = 1;
		if (jQuery('#slidingbar .shortcode-map').length >= 1) {
			jQuery('#slidingbar').find('.shortcode-map').each(function() {
				jQuery(this).reinitialize_google_map();
			});
		}
		jQuery('#slidingbar-area').removeClass('open_onload');
	}
	jQuery('.sb-toggle').click(function() {
		if (slidingbar_state == 0) {
			jQuery('div#slidingbar').slideDown(240, 'easeOutQuad');
			jQuery('.sb-toggle').addClass('open');
			slidingbar_state = 1;
			if (jQuery('#slidingbar .shortcode-map').length) {
				jQuery('#slidingbar').find('.shortcode-map').each(function() {
					jQuery(this).reinitialize_google_map();
				});
			}
		} else if (slidingbar_state == 1) {
			jQuery('div#slidingbar').slideUp(240, 'easeOutQuad');
			jQuery('.sb-toggle').removeClass('open');
			slidingbar_state = 0;
		}
	});
	if (!jQuery('.fusion-social-links-footer').find('.fusion-social-networks').children().length) {
		jQuery('.fusion-social-links-footer').hide();
		jQuery('#footer .copyright').css('padding-bottom', '0');
	}
	if (jQuery().UItoTop) {
		if (cssua.ua.mobile && js_local_vars.status_totop_mobile == '1') {
			jQuery().UItoTop({
				easingType: 'easeOutQuart'
			});
		} else if (!cssua.ua.mobile) {
			jQuery().UItoTop({
				easingType: 'easeOutQuart'
			});
		}
	}
	jQuery(window).on('resize', function() {
		if (jQuery(".demo_store").length) {
			jQuery("#wrapper").css('margin-top', jQuery(".demo_store").outerHeight());
			if (jQuery('.sticky-header').length) {
				jQuery(".sticky-header").css('margin-top', jQuery(".demo_store").outerHeight());
			}
		}
		if (jQuery(".sticky-header").length) {
			if (jQuery(window).width() < 765) {
				jQuery('body.admin-bar #header-sticky.sticky-header').css('top', '46px');
			} else {
				jQuery('body.admin-bar #header-sticky.sticky-header').css('top', '32px');
			}
		}
	});
	jQuery('.header-wrapper .mobile-topnav-holder').append('<div class="mobile-selector"><span>' + js_local_vars.dropdown_goto + '</span></div>');
	jQuery('.header-wrapper .mobile-topnav-holder .mobile-selector').append('<div class="selector-down"></div>');
	jQuery('.header-wrapper .mobile-topnav-holder').append(jQuery('.header-wrapper .top-menu ul#snav').clone());
	jQuery('.header-wrapper .mobile-topnav-holder ul#snav').attr("class", "mobile-topnav");
	jQuery('.header-wrapper .mobile-topnav-holder ul#snav').attr("id", "mobile-nav");
	jQuery('.header-wrapper .mobile-topnav-holder ul#mobile-nav').children('.cart').each(function() {
		jQuery(this).children('.my-cart-link').text(js_local_vars.mobile_nav_cart);
		jQuery(this).children('.cart-contents').remove();
	});
	jQuery('.header-wrapper .mobile-topnav-holder ul#mobile-nav li').children('.login-box').remove();
	jQuery('.header-wrapper .mobile-topnav-holder ul#mobile-nav').children('li').each(function() {
		var classes = 'mobile-nav-item';
		if (jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery(this).attr('class', classes);
		if (jQuery(this).attr('id')) {
			jQuery(this).attr('id', jQuery(this).attr('id').replace('menu-item', 'mobile-topmenu-item'));
		}
		jQuery(this).attr('style', '');
	});
	jQuery('.header-wrapper .mobile-topnav-holder .mobile-selector').click(function() {
		jQuery('.header-wrapper .mobile-topnav-holder #mobile-nav').slideToggle(200, 'easeOutQuad');
	});
	if (js_local_vars.mobile_menu_design == 'classic') {
		jQuery('.header-wrapper .mobile-nav-holder').append('<div class="mobile-selector"><span>' + js_local_vars.dropdown_goto + '</span></div>');
		jQuery('.header-wrapper .mobile-nav-holder .mobile-selector').append('<div class="selector-down"></div>');
	}
	jQuery('.header-wrapper .mobile-nav-holder').append(jQuery('.header-wrapper .nav-holder .fusion-navbar-nav').clone());
	jQuery('.header-wrapper .mobile-nav-holder .fusion-navbar-nav').attr("id", "mobile-nav");
	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav').removeClass('fusion-navbar-nav');
	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav').children('.cart').remove();
	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav .mobile-nav-item').children('.login-box').remove();
	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav li').children('#main-nav-search-link').each(function() {
		jQuery(this).parents('li').remove();
	});
	jQuery('.header-wrapper .mobile-nav-holder ul#mobile-nav').find('li').each(function() {
		var classes = 'mobile-nav-item';
		if (jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery(this).attr('class', classes);
		if (jQuery(this).attr('id')) {
			jQuery(this).attr('id', jQuery(this).attr('id').replace('menu-item', 'mobile-menu-item'));
		}
		jQuery(this).attr('style', '');
	});
	jQuery('.header-wrapper .mobile-nav-holder .mobile-selector').click(function() {
		if (jQuery('.header-wrapper .mobile-nav-holder #mobile-nav').hasClass('mobile-menu-expanded')) {
			jQuery('.header-wrapper .mobile-nav-holder #mobile-nav').removeClass('mobile-menu-expanded');
		} else {
			jQuery('.header-wrapper .mobile-nav-holder #mobile-nav').addClass('mobile-menu-expanded');
		}
		jQuery('.header-wrapper .mobile-nav-holder #mobile-nav').slideToggle(200, 'easeOutQuad');
	});
	if (js_local_vars.mobile_menu_design == 'classic') {
		jQuery('.sh-mobile-nav-holder').append('<div class="mobile-selector"><span>' + js_local_vars.dropdown_goto + '</span></div>');
		jQuery('.sh-mobile-nav-holder .mobile-selector').append('<div class="selector-down"></div>');
	}
	jQuery('.sh-mobile-nav-holder').append(jQuery('.nav-holder .fusion-navbar-nav').clone());
	jQuery('.sh-mobile-nav-holder .fusion-navbar-nav').attr("id", "mobile-nav");
	jQuery('.sh-mobile-nav-holder ul#mobile-nav').removeClass('fusion-navbar-nav');
	jQuery('.sh-mobile-nav-holder ul#mobile-nav').children('.cart').remove();
	jQuery('.sh-mobile-nav-holder ul#mobile-nav .mobile-nav-item').children('.login-box').remove();
	jQuery('.sh-mobile-nav-holder ul#mobile-nav li').children('#main-nav-search-link').each(function() {
		jQuery(this).parents('li').remove();
	});
	jQuery('.sh-mobile-nav-holder ul#mobile-nav').find('li').each(function() {
		var classes = 'mobile-nav-item';
		if (jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery(this).attr('class', classes);
		if (jQuery(this).attr('id')) {
			jQuery(this).attr('id', jQuery(this).attr('id').replace('menu-item', 'mobile-menu-item'));
		}
		jQuery(this).attr('style', '');
	});
	jQuery('.sh-mobile-nav-holder .mobile-selector').click(function() {
		if (jQuery('.sh-mobile-nav-holder #mobile-nav').hasClass('mobile-menu-expanded')) {
			jQuery('.sh-mobile-nav-holder #mobile-nav').removeClass('mobile-menu-expanded');
		} else {
			jQuery('.sh-mobile-nav-holder #mobile-nav').addClass('mobile-menu-expanded');
		}
		jQuery('.sh-mobile-nav-holder #mobile-nav').slideToggle(200, 'easeOutQuad');
	});
	jQuery('.sticky-header .mobile-nav-holder').append('<div class="mobile-selector"><span>' + js_local_vars.dropdown_goto + '</span></div>');
	jQuery('.sticky-header .mobile-nav-holder .mobile-selector').append('<div class="selector-down"></div>');
	jQuery('.sticky-header .mobile-nav-holder').append(jQuery('.sticky-header .nav-holder ul.navigation').clone());
	jQuery('.sticky-header .mobile-nav-holder ul.navigation').attr("class", "navigation mobile-sticky-nav");
	jQuery('.sticky-header .mobile-nav-holder ul.navigation').removeClass('fusion-navbar-nav');
	jQuery('.sticky-header .mobile-nav-holder .mobile-sticky-nav').children('.cart').each(function() {
		jQuery(this).children('.my-cart-link').text(js_local_vars.mobile_nav_cart);
		jQuery(this).children('.cart-contents').remove();
	});
	jQuery('.sticky-header .mobile-nav-holder .mobile-sticky-nav li').children('.login-box').remove();
	jQuery('.sticky-header .mobile-nav-holder ul.navigation').attr("id", "mobile-nav");
	jQuery('.sticky-header .mobile-nav-holder .mobile-sticky-nav').find('li').each(function() {
		var classes = 'mobile-nav-item';
		if (jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery(this).attr('class', classes);
		jQuery(this).removeAttr('id');
		jQuery(this).children('a').css('style', '');
	});
	jQuery('.sticky-header .mobile-nav-holder .mobile-sticky-nav li').children('#sticky-nav-search-link').each(function() {
		jQuery(this).parents('li').remove();
	});
	jQuery('.sticky-header .mobile-nav-holder .mobile-selector').click(function() {
		jQuery('.sticky-header .mobile-nav-holder .mobile-sticky-nav').slideToggle(200, 'easeOutQuad');
	});
	jQuery('body #header-sticky.sticky-header .sticky-shadow .mobile-nav-holder').css('padding-left', jQuery('.sticky-header .sticky-shadow .logo').width() + 25 + "px");
	jQuery('.header-wrapper .mobile-nav-holder .navigation > .mobile-nav-item, .sticky-header .mobile-nav-holder .navigation > .mobile-nav-item, .sh-mobile-nav-holder .navigation > .mobile-nav-item').each(function() {
		jQuery(this).find('.fusion-megamenu-widgets-container').remove();
		jQuery(this).find('.fusion-megamenu-holder > ul').each(function() {
			jQuery(this).attr('class', 'sub-menu');
			jQuery(this).attr('style', '');
			jQuery(this).find('> li').each(function() {
				var classes = 'mobile-nav-item';
				if (jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor') || jQuery(this).hasClass('mobile-current-nav-item')) {
					classes += ' mobile-current-nav-item';
				}
				jQuery(this).attr('class', classes);
				if (!jQuery(this).find('.fusion-megamenu-title a, > a').length) {
					jQuery(this).find('.fusion-megamenu-title').each(function() {
						if (!jQuery(this).children('a').length) {
							jQuery(this).append('<a href="#">' + jQuery(this).text() + '</a>');
						}
					});
					if (!jQuery(this).find('.fusion-megamenu-title').length) {
						var parent_li = jQuery(this);
						jQuery(this).find('.sub-menu').each(function() {
							parent_li.after(jQuery(this));
						});
						jQuery(this).remove();
					}
				}
				jQuery(this).prepend(jQuery(this).find('.fusion-megamenu-title a, > a'));
				jQuery(this).find('.fusion-megamenu-title').remove();
			});
			jQuery(this).closest('.mobile-nav-item').append(jQuery(this));
		});
		jQuery(this).find('.fusion-megamenu-wrapper, .caret, .fusion-megamenu-bullet').remove();
	});
	if (js_local_vars.submenu_slideout == 1) {
		jQuery('.header-wrapper .mobile-topnav-holder .mobile-topnav li, .header-wrapper .mobile-nav-holder .navigation li, .sticky-header .mobile-nav-holder .navigation li, .sh-mobile-nav-holder .navigation li').each(function() {
			var classes = 'mobile-nav-item';
			if (jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor') || jQuery(this).hasClass('mobile-current-nav-item')) {
				classes += ' mobile-current-nav-item';
			}
			jQuery(this).attr('class', classes);
			if (jQuery(this).find(' > ul').length) {
				jQuery(this).prepend('<span href="#" aria-haspopup="true" class="open-submenu"></span>');
				jQuery(this).find(' > ul').hide();
			}
		});
		jQuery('.header-wrapper .mobile-topnav-holder .open-submenu, .header-wrapper .mobile-nav-holder .open-submenu, .sticky-header .mobile-nav-holder .open-submenu, .sh-mobile-nav-holder .open-submenu').click(function(e) {
			e.stopPropagation();
			jQuery(this).parent().children('.sub-menu').slideToggle(200, 'easeOutQuad');
		});
	}
	jQuery('.mobile-menu-icons .fusionicon-bars').click(function() {
		jQuery('.header-wrapper #mobile-nav, .sh-mobile-nav-holder #mobile-nav').slideToggle(200, 'easeOutQuad');
	});
	jQuery('.mobile-menu-icons .fusionicon-search').click(function() {
		jQuery('.header-wrapper .mobile-header-search .searchform').slideToggle(200, 'easeOutQuad');
	});
	var mobile_menu_sep_added = false;

	function adjust_mobile_menu_settings() {
		var menu_width = 0;
		if (Modernizr.mq('only screen and (max-width: 800px)')) {
			jQuery('.top-menu #snav').children('li').each(function() {
				menu_width += jQuery(this).outerWidth(true) + 2;
			});
			if (menu_width > jQuery(window).width() && jQuery(window).width() > 318) {
				if (!mobile_menu_sep_added) {
					jQuery('.top-menu #snav').append('<div class="mobile-menu-sep"></div>');
					jQuery('.top-menu #snav').css('position', 'relative');
					jQuery('.mobile-menu-sep').css({
						'position': 'absolute',
						'top': jQuery('.top-menu #snav li').height() - 1 + 'px',
						'width': '100%',
						'border-bottom-width': '1px',
						'border-bottom-style': 'solid'
					});
					mobile_menu_sep_added = true;
				}
			} else {
				jQuery('.top-menu #snav').css('position', '');
				jQuery('.top-menu #snav').find('.mobile-menu-sep').remove();
				mobile_menu_sep_added = false;
			}
		} else {
			jQuery('.top-menu #snav').css('position', '');
			jQuery('.top-menu #snav').find('.mobile-menu-sep').remove();
			mobile_menu_sep_added = false;
		}
	}
	adjust_mobile_menu_settings();
	jQuery(window).on('resize', function() {
		adjust_mobile_menu_settings();
	});
	var adminbar_height = 0;
	var sticky_height = 0;
	if (jQuery('#wpadminbar').length) {
		adminbar_height = parseInt(jQuery('#wpadminbar').outerHeight());
	}
	if (jQuery('.sticky-header').length) {
		sticky_height = 65;
	}
	jQuery(window).on('resize', function() {
		if (jQuery('#wpadminbar').length) {
			adminbar_height = parseInt(jQuery('#wpadminbar').outerHeight());
		}
		if (jQuery('.sticky-header').length) {
			sticky_height = jQuery('.sticky-shadow').height();
		}
	});
	jQuery('.fusion-navbar-nav a:not([href=#], .fusion-megamenu-widgets-container a, .search-link), .top-menu .menu a:not([href=#]), .mobile-nav-item a:not([href=#], .search-link), a.fusion-button:not([href=#]), a.fusion-one-page-text-link:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			if (this.hash) {
				var target = jQuery(this.hash);
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
				if (target.length && this.hash.slice(1) != '') {
					jQuery('#nav .fusion-navbar-nav li').removeClass('current-menu-item');
					jQuery('html, body').animate({
						scrollTop: target.offset().top - sticky_height
					}, 850, 'easeInOutExpo');
					return false;
				}
			}
		}
	});
	var scrollspy_target = '.header-wrapper #nav .fusion-navbar-nav li > a';
	var sticky_scroll = 70;
	var is_tfs_parallax_sticky_scroll = false;
	if (jQuery('.tfs_parallax').length && jQuery('.header-v1').length && jQuery('#sliders-container').index() > jQuery('#header-wrapper').index()) {
		if (!is_tfs_parallax_sticky_scroll) {
			if (adminbar_height > 0) {
				sticky_scroll = sticky_scroll + jQuery('.header-v1').height() + 15;
			} else {
				sticky_scroll = sticky_scroll + jQuery('.header-v1').height() + 30;
			}
			is_tfs_parallax_sticky_scroll = true;
		}
	}
	jQuery('body').scrollspy({
		target: scrollspy_target,
		offset: parseInt(adminbar_height + sticky_scroll)
	});
	jQuery('body').on('activate.bs.scrollspy', function() {
		if (jQuery('.sticky-header').length) {
			var current_menu_item_id = jQuery('.header-wrapper').find('.nav-holder').find('.current-menu-item').attr('id');
			jQuery('.sticky-header').find('.nav-holder .fusion-navbar-nav').children().removeClass('current-menu-item');
			jQuery('.sticky-header').find('.nav-holder .fusion-navbar-nav').children('.' + current_menu_item_id).addClass('current-menu-item');
		}
	});
	jQuery('.side-nav-left .side-nav li').each(function() {
		if (jQuery(this).find('> .children').length) {
			if (jQuery('.rtl').length) {
				jQuery(this).find('> a').prepend('<span class="arrow"></span>');
			} else {
				jQuery(this).find('> a').append('<span class="arrow"></span>');
			}
		}
	});
	jQuery('.side-nav-right .side-nav li').each(function() {
		if (jQuery(this).find('> .children').length) {
			if (jQuery('body.rtl').length) {
				jQuery(this).find('> a').append('<span class="arrow"></span>');
			} else {
				jQuery(this).find('> a').prepend('<span class="arrow"></span>');
			}
		}
	});
	jQuery('.side-nav .current_page_item').each(function() {
		if (jQuery(this).find('.children').length) {
			jQuery(this).find('.children').show('slow');
		}
	});
	jQuery('.side-nav .current_page_item').each(function() {
		if (jQuery(this).parent().hasClass('side-nav')) {
			jQuery(this).find('ul').show('slow');
		}
		if (jQuery(this).parent().hasClass('children')) {
			jQuery(this).parents('ul').show('slow');
		}
	});
	if ('ontouchstart' in document.documentElement || navigator.msMaxTouchPoints) {
		jQuery('.nav-holder .submenu li.menu-item-has-children > a, .order-dropdown > li .current-li').on("click", function(e) {
			var link = jQuery(this);
			if (link.hasClass('hover')) {
				link.removeClass("hover");
				return true;
			} else {
				link.addClass("hover");
				jQuery('.nav-holder li.menu-item-has-children > a, .order-dropdown > li .current-li').not(this).removeClass("hover");
				return false;
			}
		});
		jQuery('.sub-menu li, .mobile-nav-item li').not('li.menu-item-has-children').on("click", function(e) {
			var link = jQuery(this).find('a').attr('href');
			window.location = link;
			return true;
		});
	}
	jQuery('#nav li.menu-item-has-children a, .top-menu li.menu-item-has-children a, #sticky-nav li.menu-item-has-children a, .side-nav li.page_item_has_children a').each(function() {
		jQuery(this).attr('aria-haspopup', 'true');
	});
	if (jQuery('.timeline-sidebar-layout, .blog-timeline-layout').length) {
		var content_style = jQuery('#content').attr('style');
		var sidebar_1_style = jQuery('#sidebar').attr('style');
		var sidebar_2_style = jQuery('#sidebar-2').attr('style');
		var break_point_triggered = false;
		var complete_content_width;
		calc_timeline_positioning();
		jQuery(window).on('resize', function() {
			calc_timeline_positioning();
		});
	}

	function calc_timeline_positioning() {
		if (jQuery('.timeline-layout').length) {
			var timeline_container = '.timeline-layout';
		} else {
			var timeline_container = '.blog-timeline-layout';
		}
		if (jQuery('#content').width() > 775) {
			jQuery('.timeline-icon').removeClass('has-sidebar');
			jQuery(timeline_container).removeClass('timeline-sidebar-layout');
		} else {
			jQuery('.timeline-icon').addClass('has-sidebar');
			jQuery(timeline_container).addClass('timeline-sidebar-layout');
		}
		if (!break_point_triggered) {
			if (jQuery('#sidebar-2').length) {
				var content_margin = jQuery('#content').outerWidth(true) - jQuery('#content').width();
				complete_content_width = jQuery(timeline_container).outerWidth(true) + content_margin + jQuery('#sidebar-2').outerWidth(true);
			} else {
				complete_content_width = jQuery(timeline_container).width() + jQuery('#content').width() * 0.06 + jQuery('#sidebar').outerWidth(true);
			}
		}
		if (jQuery('#main .avada-row').width() < complete_content_width) {
			break_point_triggered = true;
			jQuery('#content').css('cssText', "float: none;margin:0 !important;width: 100% !important;");
			jQuery('.sidebar').css('cssText', "float: none;margin:0 !important;padding:0 !important;width: 100% !important;clear:both;");
		} else {
			break_point_triggered = false;
			jQuery('#content').attr('style', content_style);
			jQuery('#sidebar').attr('style', sidebar_1_style);
			jQuery('#sidebar-2').attr('style', sidebar_2_style);
		}
	}
	if (jQuery('.megaResponsive').length >= 1) {
		jQuery('.mobile-nav-holder.main-menu').addClass('set-invisible');
	}
	if (js_local_vars.language_flag != '') {
		jQuery('.search-field, .searchform').each(function() {
			if (!jQuery(this).find('input[name="lang"]').length && !jQuery(this).parents('.searchform').find('input[name="lang"]').length) {
				jQuery(this).append('<input type="hidden" name="lang" value="' + js_local_vars.language_flag + '"/>');
			}
		});
	}
	jQuery('#wrapper .share-box').each(function() {
		if (!jQuery('meta[property="og:title"]').length) {
			jQuery('head title').after('<meta property="og:title" content="' + jQuery(this).data('title') + '"/>');
			jQuery('head title').after('<meta property="og:description" content="' + jQuery(this).data('description') + '"/>');
			jQuery('head title').after('<meta property="og:type" content="article"/>');
			jQuery('head title').after('<meta property="og:url" content="' + jQuery(this).data('link') + '"/>');
			jQuery('head title').after('<meta property="og:image" content="' + jQuery(this).data('image') + '"/>');
		}
	});
	sharebox_h4_width = jQuery('#wrapper .share-box h4').outerWidth();
	sharebox_ul = jQuery('.share-box ul').outerWidth();
	if (sharebox_h4_width + sharebox_ul > jQuery('.post-content').width() && !jQuery('.single-avada_portfolio').length) {
		jQuery('#wrapper .share-box').css('height', 'auto');
		jQuery('#wrapper .share-box h4').css('float', 'none').css('line-height', '20px').css('padding-bottom', '25px').css('padding-top', '25px');
		jQuery('.share-box ul').css('float', 'none').css('margin-top', '0').css('overflow', 'hidden').css('padding', '0 25px 25px');
	} else {
		jQuery('#wrapper .share-box').css('height', '');
	}
	header_social_social_networks = 0;
	jQuery('.header-social .social-networks li').each(function() {
		header_social_social_networks += jQuery(this).outerWidth(true);
	});
	if (header_social_social_networks > jQuery('.header-social .social-networks').css('max-width')) {
		header_social_social_networks = jQuery('.header-social .social-networks').css('max-width');
	}
	jQuery(window).on('resize', function() {
		jQuery('.title').each(function(index) {
			if (special_titles_width[index] > jQuery(this).parent().width()) {
				jQuery(this).addClass('border-below-title');
			} else {
				jQuery(this).removeClass('border-below-title');
			}
		});
		if (sharebox_h4_width + sharebox_ul > jQuery('#content').width()) {
			jQuery('#wrapper .share-box').css('height', 'auto');
			jQuery('#wrapper .share-box h4').css('float', 'none').css('line-height', '20px').css('padding-bottom', '25px').css('padding-top', '25px');
			jQuery('.share-box ul').css('float', 'none').css('margin-top', '0').css('overflow', 'hidden').css('padding', '0 25px 25px');
		} else {
			jQuery('#wrapper .share-box').css('height', '');
		}
		if (jQuery(window).width() >= 784) {
			jQuery('.header-social .social-networks').css('width', header_social_social_networks);
		} else {
			jQuery('.header-social .social-networks').css('width', '');
		}
	});
	jQuery(document).click(function() {
		jQuery('.main-nav-search-form').hide();
		jQuery('.main-nav-search-form').parent().removeClass('search-box-open');
	});
	jQuery('.main-nav-search-form').click(function(e) {
		e.stopPropagation();
	});
	jQuery('.main-nav-search .search-link').click(function(e) {
		e.stopPropagation();
		if (jQuery(this).parent().find('.main-nav-search-form').css('display') == 'block') {
			jQuery(this).parent().find('.main-nav-search-form').hide();
			jQuery(this).parent().removeClass('search-box-open');
		} else {
			jQuery(this).parent().find('.main-nav-search-form').removeAttr('style');
			jQuery(this).parent().find('.main-nav-search-form').show();
			jQuery(this).parent().addClass('search-box-open');
			if (js_local_vars.header_position == 'Top') {
				if (!jQuery('body.rtl').length && jQuery(this).parent().find('.main-nav-search-form').offset().left < 0) {
					jQuery(this).parent().find('.main-nav-search-form').css({
						'left': '0',
						'right': 'auto'
					});
				}
				if (jQuery('body.rtl').length && jQuery(this).parent().find('.main-nav-search-form').offset().left + jQuery(this).parent().find('.main-nav-search-form').width() > jQuery(window).width()) {
					jQuery(this).parent().find('.main-nav-search-form').css({
						'left': 'auto',
						'right': '0'
					});
				}
			}
		}
	});
	if (js_local_vars.header_position == 'Top') {
		jQuery(window).on('resize', function() {
			jQuery('.main-nav-search').each(function() {
				if (jQuery(this).hasClass('search-box-open')) {
					var search_form = jQuery(this).find('.main-nav-search-form'),
						search_form_width = search_form.outerWidth(),
						search_form_left_edge = search_form.offset().left,
						search_form_right_edge = search_form_left_edge + search_form_width,
						search_menu_item_left_edge = search_form.parent().offset().left,
						window_right_edge = jQuery(window).width();
					if (!jQuery('body.rtl').length) {
						if ((search_form_left_edge < search_menu_item_left_edge && search_form_left_edge < 0) || (search_form_left_edge == search_menu_item_left_edge && search_form_left_edge - search_form_width < 0)) {
							search_form.css({
								'left': '0',
								'right': 'auto'
							});
						} else {
							search_form.css({
								'left': 'auto',
								'right': '0'
							});
						}
					} else {
						if ((search_form_left_edge == search_menu_item_left_edge && search_form_right_edge > window_right_edge) || (search_form_left_edge < search_menu_item_left_edge && search_form_right_edge + search_form_width > window_right_edge)) {
							search_form.css({
								'left': 'auto',
								'right': '0'
							});
						} else {
							search_form.css({
								'left': '0',
								'right': 'auto'
							});
						}
					}
				}
			});
		});
	}
	var special_titles_width = [];
	jQuery('.title').each(function(index) {
		special_titles_width[index] = jQuery(this).find('h1,h2,h3,h4,h5,h6').width();
		if (jQuery(this).find('h1,h2,h3,h4,h5,h6').width() > jQuery(this).parent().width()) {
			jQuery(this).addClass('border-below-title');
		}
	});
	jQuery('.fusion-tabs').fusion_switch_tab_on_link_click();
	jQuery(".nav-tabs li").click(function(e) {
		var clicked_tab = jQuery(this);
		var tab_content_to_activate = jQuery(this).find("a").attr("href");
		var map_id = clicked_tab.attr('id');
		jQuery(window).trigger('resize');
		setTimeout(function() {
			clicked_tab.parents('.fusion-tabs').find(tab_content_to_activate).find('.shortcode-map').each(function() {
				jQuery(this).reinitialize_google_map();
			});
			if (clicked_tab.parents('.fusion-tabs').find(tab_content_to_activate).find('.es-carousel-wrapper').length) {
				generateCarousel();
			}
			clicked_tab.parents('.fusion-tabs').find(tab_content_to_activate).find('.portfolio').each(function() {
				jQuery(this).find('.portfolio-wrapper').isotope('layout');
			});
			if (clicked_tab.parents('.fusion-tabs').find(tab_content_to_activate).find('.flexslider').length) {
				jQuery(window).trigger('resize');
			}
			clicked_tab.parents('.fusion-tabs').find(tab_content_to_activate).find('.fusion-blog-shortcode').each(function() {
				var columns = 2;
				for (i = 1; i < 7; i++) {
					if (jQuery(this).find('.grid-layout').hasClass('grid-layout-' + i)) {
						columns = i;
					}
				}
				var grid_width = Math.floor(100 / columns * 100) / 100 + '%';
				jQuery(this).find('.grid-layout').find('.post').css('width', grid_width);
				jQuery(this).find('.grid-layout').isotope();
				calc_select_arrow_dimensions();
			});
		}, 350);
		e.preventDefault();
	});
	jQuery('.tabs-widget .tabset li a').click(function(e) {
		e.preventDefault();
	});
	jQuery('.tabs-widget').each(function() {
		jQuery(this).find('.tabset li:first').addClass('active').show();
		jQuery(this).find('.tab_content:first').show();
	});
	jQuery('.tabs-widget .tabset li').click(function(e) {
		var tab_to_activate = jQuery(this).find('a').attr('href');
		jQuery(this).parent().find(' > li').removeClass('active');
		jQuery(this).addClass('active');
		jQuery(this).parents('.tabs-widget').find('.tab_content').hide();
		jQuery(this).parents('.tabs-widget').find(tab_to_activate).fadeIn();
	});
	jQuery('.woocommerce .images #carousel a').click(function(e) {
		e.preventDefault();
	});
	jQuery('.tooltip-shortcode, .author_social .social-networks li, #footer .social-networks li, .footer-area .social-networks li, .sidebar .social-networks li, .social_links_shortcode li, .share-box li, .social-icon, .social li').mouseenter(function(e) {
		jQuery(this).find('.popup').hoverFlow(e.type, {
			'opacity': 'show'
		});
	});
	jQuery('.tooltip-shortcode, .author_social .social-networks li, #footer .social-networks li, .footer-area .social-networks li, .sidebar .social-networks li, .social_links_shortcode li, .share-box li, .social-icon, .social li').mouseleave(function(e) {
		jQuery(this).find('.popup').hoverFlow(e.type, {
			'opacity': 'hide'
		});
	});
	jQuery('.portfolio-tabs a').click(function(e) {
		e.preventDefault();
		var selector = jQuery(this).attr('data-filter');
		jQuery(this).parents('.portfolio').find('.portfolio-wrapper').isotope({
			filter: selector
		});
		jQuery(this).parents('ul').find('li').removeClass('active');
		jQuery(this).parent().addClass('active');
	});
	jQuery('.faq-tabs a').click(function(e) {
		e.preventDefault();
		var selector = jQuery(this).attr('data-filter');
		jQuery('.faqs .faqs-wrapper .faq-item').fadeOut();
		setTimeout(function() {
			jQuery('.faqs .faqs-wrapper .faq-item' + selector).fadeIn();
		}, 400);
		jQuery(this).parents('ul').find('li').removeClass('active');
		jQuery(this).parent().addClass('active');
	});

	function isScrolledIntoView(elem) {
		var docViewTop = jQuery(window).scrollTop();
		var docViewBottom = docViewTop + jQuery(window).height();
		var elemTop = jQuery(elem).offset().top;
		var elemBottom = elemTop + jQuery(elem).height();
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	jQuery('.fusion-alert .close').click(function(e) {
		e.preventDefault();
		jQuery(this).parent().slideUp();
	});
	jQuery('input, textarea').placeholder();

	function checkForImage(url) {
		return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
	}
	if (Modernizr.mq('only screen and (max-width: 479px)')) {
		jQuery('.overlay-full.layout-text-left .slide-excerpt p').each(function() {
			var excerpt = jQuery(this).html();
			var wordArray = excerpt.split(/[\s\.\?]+/);
			var maxWords = 10;
			var total_words = wordArray.length;
			var newString = "";
			if (total_words > maxWords + 1) {
				for (var i = 0; i < maxWords; i++) {
					newString += wordArray[i] + " ";
				}
				jQuery(this).html(newString);
			}
		});
		jQuery('.portfolio .gallery-icon').each(function() {
			var img = jQuery(this).attr('href');
			if (checkForImage(img) == true) {
				jQuery(this).parents('.image').find('> img').attr('src', img).attr('width', '').attr('height', '');
			}
			jQuery(this).parents('.portfolio-item').css('width', 'auto');
			jQuery(this).parents('.portfolio-item').css('height', 'auto');
			jQuery(this).parents('.portfolio-one:not(.portfolio-one-text)').find('.portfolio-item').css('margin', '0');
		});
		if (jQuery('.portfolio').length >= 1) {
			jQuery('.portfolio-wrapper').isotope();
		}
	}
	if (Modernizr.mq('only screen and (max-width: 800px)')) {
		jQuery('.tabs-vertical').addClass('tabs-horizontal').removeClass('tabs-vertical');
	}
	jQuery(window).on('resize', function() {
		if (Modernizr.mq('only screen and (max-width: 800px)')) {
			jQuery('.tabs-vertical').addClass('tabs-original-vertical');
			jQuery('.tabs-vertical').addClass('tabs-horizontal').removeClass('tabs-vertical');
		} else {
			jQuery('.tabs-original-vertical').removeClass('tabs-horizontal').addClass('tabs-vertical');
		}
	});
	jQuery('.catalog-ordering .orderby .current-li a').html(jQuery('.catalog-ordering .orderby ul li.current a').html());
	jQuery('.catalog-ordering .sort-count .current-li a').html(jQuery('.catalog-ordering .sort-count ul li.current a').html());
	jQuery('.woocommerce #calc_shipping_state').parent().addClass('fusion-column fusion-one-half spacing-yes');
	jQuery('.woocommerce #calc_shipping_postcode').parent().addClass('fusion-column fusion-one-half spacing-yes last');
	jQuery('.woocommerce .shop_table .variation dd').after('<br />');
	jQuery('.woocommerce .avada-myaccount-data th.order-actions').text(js_local_vars.order_actions);
	jQuery('body.rtl .woocommerce .wc-forward').each(function() {
		var checkout_button = jQuery(this);
		checkout_button.val('\u2190 ' + checkout_button.val().replace('\u2192', ''));
	});
	var avada_myaccount_active = jQuery('.avada-myaccount-nav').find('.active a');
	if (avada_myaccount_active.hasClass('address')) {
		jQuery('.avada-myaccount-data .edit_address_heading').fadeIn();
	} else {
		jQuery('.avada-myaccount-data h2:nth-of-type(1)').fadeIn();
	}
	if (avada_myaccount_active.hasClass('downloads')) {
		jQuery('.avada-myaccount-data .digital-downloads').fadeIn();
	} else if (avada_myaccount_active.hasClass('orders')) {
		jQuery('.avada-myaccount-data .my_account_orders').fadeIn();
	} else if (avada_myaccount_active) {
		jQuery('.avada-myaccount-data .myaccount_address, .avada-myaccount-data .addresses').fadeIn();
	}
	jQuery('body.rtl .avada-myaccount-data .my_account_orders .order-status').each(function() {
		jQuery(this).css('text-align', 'right');
	});
	jQuery('.woocommerce input').each(function() {
		if (!jQuery(this).has('#coupon_code')) {
			name = jQuery(this).attr('id');
			jQuery(this).attr('placeholder', jQuery(this).parent().find('label[for=' + name + ']').text());
		}
	});
	if (jQuery('.woocommerce #reviews #comments .comment_container .comment-text').length) {
		jQuery('.woocommerce #reviews #comments .comment_container').append('<div class="clear"></div>');
	}
	if (jQuery('.woocommerce.single-product .related.products > h2').length) {
		jQuery('.woocommerce.single-product .related.products > h2').addClass('title-heading-left');
		jQuery('.woocommerce.single-product .related.products > h2').wrap('<div class="fusion-title title"></div>');
		jQuery('.woocommerce.single-product .related.products > .title').append('<div class="title-sep-container"><div class="title-sep sep-double"></div></div>');
	}
	if (jQuery('.woocommerce.single-product .upsells.products > h2').length) {
		jQuery('.woocommerce.single-product .upsells.products > h2').addClass('title-heading-left');
		jQuery('.woocommerce.single-product .upsells.products > h2').wrap('<div class="fusion-title title"></div>');
		jQuery('.woocommerce.single-product .upsells.products > .title').append('<div class="title-sep-container"><div class="title-sep sep-double"></div></div>');
	}
	if (jQuery('body .sidebar').css('display') == "block") {
		jQuery('body').addClass('has-sidebar');
		calcTabsLayout('.woocommerce-tabs .tabs-horizontal');
	}
	jQuery('.sidebar .products,.footer-area .products,#slidingbar-area .products').each(function() {
		jQuery(this).removeClass('products-4');
		jQuery(this).removeClass('products-3');
		jQuery(this).removeClass('products-2');
		jQuery(this).addClass('products-1');
	});
	jQuery('.products-6 li, .products-5 li, .products-4 li, .products-3 li, .products-3 li').removeClass('last');
	jQuery('.subcategory-products').each(function() {
		jQuery(this).addClass('products-' + js_local_vars.woocommerce_shop_page_columns);
	});
	jQuery('.woocommerce-tabs ul.tabs li a').unbind('click');
	jQuery('.woocommerce-tabs > ul.tabs li a').click(function() {
		var tab = jQuery(this);
		var tabs_wrapper = tab.closest('.woocommerce-tabs');
		jQuery('ul.tabs li', tabs_wrapper).removeClass('active');
		jQuery('> div.panel', tabs_wrapper).hide();
		jQuery('div' + tab.attr('href'), tabs_wrapper).show();
		tab.parent().addClass('active');
		return false;
	});
	jQuery('.woocommerce-checkout-nav a,.continue-checkout').click(function(e) {
		e.preventDefault();
		if (!jQuery('.woocommerce .avada-checkout').find('.woocommerce-invalid').is(':visible')) {
			var data_name = $(this).attr('data-name');
			var name = data_name;
			if (data_name != '#order_review') {
				name = '.' + data_name;
			}
			jQuery('form.checkout .col-1, form.checkout .col-2, form.checkout #order_review_heading, form.checkout #order_review').hide();
			jQuery('form.checkout').find(name).fadeIn();
			if (name == '#order_review') {
				jQuery('form.checkout').find('#order_review_heading').fadeIn();
			}
			jQuery('.woocommerce-checkout-nav li').removeClass('active');
			jQuery('.woocommerce-checkout-nav').find('[data-name=' + data_name + ']').parent().addClass('active');
			if (jQuery(this).hasClass('continue-checkout') && jQuery(window).scrollTop() > 0) {
				jQuery('html, body').animate({
					scrollTop: jQuery('.woocommerce-content-box.avada-checkout').offset().top - adminbar_height - sticky_height
				}, 500);
			}
			calc_select_arrow_dimensions();
		}
	});
	jQuery('.avada-myaccount-nav a').click(function(e) {
		e.preventDefault();
		jQuery('.avada-myaccount-data h2, .avada-myaccount-data .digital-downloads, .avada-myaccount-data .my_account_orders, .avada-myaccount-data .myaccount_address, .avada-myaccount-data .addresses, .avada-myaccount-data .edit-account-heading, .avada-myaccount-data .edit-account-form').hide();
		if (jQuery(this).hasClass('downloads')) {
			jQuery('.avada-myaccount-data h2:nth-of-type(1), .avada-myaccount-data .digital-downloads').fadeIn();
		} else if (jQuery(this).hasClass('orders')) {
			if (jQuery(this).parents('.avada-myaccount-nav').find('.downloads').length) {
				heading = jQuery('.avada-myaccount-data h2:nth-of-type(2)');
			} else {
				heading = jQuery('.avada-myaccount-data h2:nth-of-type(1)');
			}
			heading.fadeIn();
			jQuery('.avada-myaccount-data .my_account_orders').fadeIn();
		} else if (jQuery(this).hasClass('address')) {
			if (jQuery(this).parents('.avada-myaccount-nav').find('.downloads').length && jQuery(this).parents('.avada-myaccount-nav').find('.orders').length) {
				heading = jQuery('.avada-myaccount-data h2:nth-of-type(3)');
			} else if (jQuery(this).parents('.avada-myaccount-nav').find('.downloads').length || jQuery(this).parents('.avada-myaccount-nav').find('.orders').length) {
				heading = jQuery('.avada-myaccount-data h2:nth-of-type(2)');
			} else {
				heading = jQuery('.avada-myaccount-data h2:nth-of-type(1)');
			}
			heading.fadeIn();
			jQuery('.avada-myaccount-data .myaccount_address, .avada-myaccount-data .addresses').fadeIn();
		} else if (jQuery(this).hasClass('account')) {
			jQuery('.avada-myaccount-data .edit-account-heading, .avada-myaccount-data .edit-account-form').fadeIn();
		}
		jQuery('.avada-myaccount-nav li').removeClass('active');
		jQuery(this).parent().addClass('active');
	});
	jQuery('a.add_to_cart_button').click(function(e) {
		var link = this;
		jQuery(link).closest('.product').find('.cart-loading').find('i').removeClass('fusionicon-check-square-o').addClass('fusionicon-spinner');
		jQuery(this).closest('.product').find('.cart-loading').fadeIn();
		setTimeout(function() {
			jQuery(link).closest('.product').find('.product-images img').animate({
				opacity: 0.75
			});
			jQuery(link).closest('.product').find('.cart-loading').find('i').hide().removeClass('fusionicon-spinner').addClass('fusionicon-check-square-o').fadeIn();
			setTimeout(function() {
				jQuery(link).closest('.product').find('.cart-loading').fadeOut().closest('.product').find('.product-images img').animate({
					opacity: 1
				});;
			}, 2000);
		}, 2000);
	});
	jQuery('li.product').mouseenter(function() {
		if (jQuery(this).find('.cart-loading').find('i').hasClass('fusionicon-check-square-o')) {
			jQuery(this).find('.cart-loading').fadeIn();
		}
	}).mouseleave(function() {
		if (jQuery(this).find('.cart-loading').find('i').hasClass('fusionicon-check-square-o')) {
			jQuery(this).find('.cart-loading').fadeOut();
		}
	});
	if (!Boolean(Number(js_local_vars.avada_styles_dropdowns))) {
		if (jQuery('.woocommerce .country_select').length) {
			jQuery('.woocommerce .country_select').parent().addClass('avada-select');
			jQuery('.woocommerce .validate-state').parent().addClass('avada-select');
		}
		jQuery('.cart-collaterals #calc_shipping_country, .widget_layered_nav select').wrap('<p class="avada-select-parent"></p>').after('<div class="select-arrow">&#xe61f;</div>');
		jQuery('.cart-collaterals select#calc_shipping_state').after('<div class="select-arrow">&#xe61f;</div>');
		setTimeout(function() {
			if (!jQuery('#billing_country_field .chosen-container').length && !jQuery('#billing_country_field .select2-container').length) {
				jQuery('#billing_country_field select.country_select').wrap('<p class="avada-select-parent"></p>').after('<span class="select-arrow">&#xe61f;</span>');
				if (jQuery('#billing_state_field select.state_select').length) {
					jQuery('#billing_state_field').addClass('avada-select-parent').append('<div class="select-arrow">&#xe61f;</div>');
				}
				jQuery("#billing_country").change(function() {
					setTimeout(function() {
						if (jQuery('#billing_state_field input#billing_state').length || jQuery('#billing_state_field').is(':hidden')) {
							jQuery('#billing_state_field .select-arrow').remove();
							jQuery('#billing_state_field').removeClass('avada-select-parent');
						}
						if (jQuery('#billing_state_field select.state_select').length) {
							jQuery('#billing_state_field').addClass('avada-select-parent');
							if (!jQuery('#billing_state_field .select-arrow').length) {
								jQuery('#billing_state_field').append('<div class="select-arrow">&#xe61f;</div>');
								calc_select_arrow_dimensions();
							}
						}
					}, 1);
				});
			}
			if (!jQuery('#shipping_country_field .chosen-container').length && !jQuery('#shipping_country_field .select2-container').length) {
				jQuery('#shipping_country_field select.country_select').wrap('<p class="avada-select-parent"></p>').after('<span class="select-arrow">&#xe61f;</span>');
				if (jQuery('#shipping_state_field select.state_select').length) {
					jQuery('#shipping_state_field').addClass('avada-select-parent').append('<div class="select-arrow">&#xe61f;</div>');
				}
				jQuery("#shipping_country").change(function() {
					setTimeout(function() {
						if (jQuery('#shipping_state_field input#shipping_state').length || jQuery('#shipping_state_field').is(':hidden')) {
							jQuery('#shipping_state_field .select-arrow').remove();
							jQuery('#shipping_state_field').removeClass('avada-select-parent');
						}
						if (jQuery('#shipping_state_field select.state_select').length) {
							jQuery('#shipping_state_field').addClass('avada-select-parent');
							if (!jQuery('#shipping_state_field .select-arrow').length) {
								jQuery('#shipping_state_field').append('<div class="select-arrow">&#xe61f;</div>');
								calc_select_arrow_dimensions();
							}
						}
					}, 1);
				});
			}
		}, 1);
		jQuery('#calc_shipping_country').change(function() {
			if (jQuery('.avada-shipping-calculator-form select#calc_shipping_state').length && !jQuery('.avada-shipping-calculator-form #calc_shipping_state').parent().find('.select-arrow').length) {
				jQuery('.avada-shipping-calculator-form select#calc_shipping_state').after('<div class="select-arrow">&#xe61f;</div>');
			}
			if (jQuery('.avada-shipping-calculator-form input#calc_shipping_state').length) {
				jQuery('.avada-shipping-calculator-form #calc_shipping_state').parent().children('.select-arrow').remove();
			}
			calc_select_arrow_dimensions();
		});
		jQuery('table.variations select, .variations-table select, .product-addon select').wrap('<div class="avada-select-parent"></div>');
		jQuery('<div class="select-arrow">&#xe61f;</div>').appendTo('table.variations .avada-select-parent, .variations-table .avada-select-parent, .product-addon .avada-select-parent');
		jQuery('.wpcf7-select:not([multiple])').wrap('<div class="wpcf7-select-parent"></div>');
		jQuery('<div class="select-arrow">&#xe61f;</div>').appendTo('.wpcf7-select-parent');
		jQuery('.gform_wrapper select:not([multiple])').each(function() {
			var current_select = jQuery(this);
			setTimeout(function() {
				if (!current_select.siblings('.chosen-container').length) {
					var select_width = current_select.css('width');
					current_select.wrap('<div class="gravity-select-parent"></div>');
					current_select.parent().width(select_width);
					current_select.css('cssText', "width: 100% !important;");
					jQuery('<div class="select-arrow">&#xe61f;</div>').appendTo(current_select.parent('.gravity-select-parent'));
				}
			}, 150);
		});
		jQuery('#bbp_stick_topic_select, #bbp_topic_status_select, #bbp_forum_id, #bbp_destination_topic').wrap('<div class="avada-select-parent"></div>').after('<div class="select-arrow">&#xe61f;</div>');
		jQuery('.variations_form select').change(function() {
			if (jQuery('.product #slider').length) {
				jQuery('.product #slider').flexslider(0);
			}
		});
		jQuery('.widget_categories select, .widget_archive select ').css('width', '100%');
		jQuery('.widget_categories select, .widget_archive select ').wrap('<div class="avada-select-parent"></div>').after('<div class="select-arrow">&#xe61f;</div>');
	}
	jQuery('.bbp-template-notice').each(function() {
		if (jQuery(this).hasClass('info')) {
			jQuery(this).attr('class', 'fusion-alert alert notice alert-dismissable alert-info alert-shadow');
		} else {
			jQuery(this).attr('class', 'fusion-alert alert notice alert-dismissable alert-warning alert-shadow');
		}
		jQuery(this).children('tt').contents().unwrap();
		jQuery(this).children('p').contents().unwrap();
		jQuery(this).prepend('<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button><span class="alert-icon"><i class="fa fa-lg fa-lg fa-cog"></i></span>');
		jQuery(this).children('.close').click(function(e) {
			e.preventDefault();
			jQuery(this).parent().slideUp();
		});
	});
	jQuery('.bbp-login-form').each(function() {
		jQuery(this).children('tt').contents().unwrap();
	});
	jQuery('.textarea-comment').each(function() {
		jQuery(this).css('max-width', jQuery('#content').width());
	});
	if (Modernizr.mq('only screen and (max-width: 800px)')) {
		jQuery('.fullwidth-faded').each(function() {
			var bkgd_img = jQuery(this).css('background-image');
			jQuery(this).parent().css('background-image', bkgd_img);
			jQuery(this).remove();
		});
	}
});
jQuery(window).load(function() {
	calc_select_arrow_dimensions();
	if (cssua.ua.mobile == undefined) {
		if (js_local_vars.page_title_fading == '1') {
			if (js_local_vars.header_position == 'Left' || js_local_vars.header_position == 'Right') {
				jQuery('.page-title-wrapper').fusion_scroller({
					type: 'opacity',
					end_offset: '.entry-title'
				});
			} else {
				jQuery('.page-title-wrapper').fusion_scroller({
					type: 'opacity',
					offset: 100
				});
			}
		}
		jQuery('.fullwidth-faded').fusion_scroller({
			type: 'fading_blur'
		});
	}
});

function calc_select_arrow_dimensions() {
	jQuery('.avada-select-parent .select-arrow, .gravity-select-parent .select-arrow, .wpcf7-select-parent .select-arrow').each(function() {
		if (jQuery(this).prev().innerHeight() > 0) {
			jQuery(this).css({
				height: jQuery(this).prev().innerHeight(),
				width: jQuery(this).prev().innerHeight(),
				'line-height': jQuery(this).prev().innerHeight() + 'px'
			});
		}
	});
}
jQuery(document).bind('gform_post_conditional_logic', function() {
	var select = jQuery('.gform_wrapper select');
	jQuery(select).each(function() {
		if (jQuery(this).hasClass('chzn-done') && jQuery(this).parent().hasClass('gravity-select-parent')) {
			jQuery(this).parent().find('.select-arrow').remove();
			jQuery(this).unwrap('<div class="gravity-select-parent"></div>');
		}
	});
});
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * scrollspy.js
 * modified by ThemeFusion 2014
 */
+ function($) {
	'use strict';

	function ScrollSpy(element, options) {
		var href;
		var process = $.proxy(this.process, this);
		this.$element = $(element).is('body') ? $(window) : $(element);
		this.$body = $('body');
		this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process);
		this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
		this.selector = (this.options.target || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) || '');
		this.offsets = $([]);
		this.targets = $([]);
		this.activeTarget = null;
		this.refresh();
		this.process();
	}
	ScrollSpy.DEFAULTS = {
		offset: 10
	};
	ScrollSpy.prototype.refresh = function() {
		var offsetMethod = this.$element[0] == window ? 'offset' : 'position';
		this.offsets = $([]);
		this.targets = $([]);
		var self = this;
		var $targets = this.$body.find(this.selector).map(function() {
			var $el = $(this);
			var href = $el.data('target') || $el.attr('href');
			var $href = /^#./.test(href) && $(href);
			return ($href && $href.length && $href.is(':visible') && [
				[$href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href]
			]) || null;
		}).sort(function(a, b) {
			return a[0] - b[0];
		}).each(function() {
			self.offsets.push(this[0]);
			self.targets.push(this[1]);
		});
	};
	ScrollSpy.prototype.process = function() {
		var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
		var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight;
		var maxScroll = scrollHeight - this.$scrollElement.height();
		var offsets = this.offsets;
		var targets = this.targets;
		var activeTarget = this.activeTarget;
		var i;
		if (scrollTop >= maxScroll) {
			return activeTarget != (i = targets.last()[0]) && this.activate(i);
		}
		for (i = offsets.length; i--;) {
			activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
		}
	};
	ScrollSpy.prototype.activate = function(target) {
		this.activeTarget = target;
		$(this.selector).parents('.current-menu-item').removeClass('current-menu-item');
		var selector = this.selector + '[data-target="' + target + '"],' +
			this.selector + '[href="' + target + '"]';
		var active = $(selector).parents('li').addClass('current-menu-item');
		if (active.parent('.sub-menu').length) {
			active = active.closest('li.fusion-dropdown-menu').addClass('current-menu-item');
		}
		active.trigger('activate.bs.scrollspy');
	};
	var old = $.fn.scrollspy;
	$.fn.scrollspy = function(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data('bs.scrollspy');
			var options = typeof option == 'object' && option;
			if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};
	$.fn.scrollspy.Constructor = ScrollSpy;
	$.fn.scrollspy.noConflict = function() {
		$.fn.scrollspy = old;
		return this;
	};
	$(window).on('load', function() {
		$('[data-spy="scroll"]').each(function() {
			var $spy = $(this);
			$spy.scrollspy($spy.data());
		});
	});
}(jQuery);
(function() {
	var __indexOf = [].indexOf || function(item) {
			for (var i = 0, l = this.length; i < l; i++) {
				if (i in this && this[i] === item) return i;
			}
			return -1;
		}, __slice = [].slice;
	(function(root, factory) {
		if (typeof define === 'function' && define.amd) {
			return define('waypoints', ['jquery'], function($) {
				return factory($, root);
			});
		} else {
			return factory(root.jQuery, root);
		}
	})(this, function($, window) {
			var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;
			$w = $(window);
			isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
			allWaypoints = {
				horizontal: {},
				vertical: {}
			};
			contextCounter = 1;
			contexts = {};
			contextKey = 'waypoints-context-id';
			resizeEvent = 'resize.waypoints';
			scrollEvent = 'scroll.waypoints';
			waypointCounter = 1;
			waypointKey = 'waypoints-waypoint-ids';
			wp = 'waypoint';
			wps = 'waypoints';
			Context = (function() {
				function Context($element) {
					var _this = this;
					this.$element = $element;
					this.element = $element[0];
					this.didResize = false;
					this.didScroll = false;
					this.id = 'context' + contextCounter++;
					this.oldScroll = {
						x: $element.scrollLeft(),
						y: $element.scrollTop()
					};
					this.waypoints = {
						horizontal: {},
						vertical: {}
					};
					$element.data(contextKey, this.id);
					contexts[this.id] = this;
					$element.bind(scrollEvent, function() {
						var scrollHandler;
						if (!(_this.didScroll || isTouch)) {
							_this.didScroll = true;
							scrollHandler = function() {
								_this.doScroll();
								return _this.didScroll = false;
							};
							return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
						}
					});
					$element.bind(resizeEvent, function() {
						var resizeHandler;
						if (!_this.didResize) {
							_this.didResize = true;
							resizeHandler = function() {
								$[wps]('refresh');
								return _this.didResize = false;
							};
							return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
						}
					});
				}
				Context.prototype.doScroll = function() {
					var axes, _this = this;
					axes = {
						horizontal: {
							newScroll: this.$element.scrollLeft(),
							oldScroll: this.oldScroll.x,
							forward: 'right',
							backward: 'left'
						},
						vertical: {
							newScroll: this.$element.scrollTop(),
							oldScroll: this.oldScroll.y,
							forward: 'down',
							backward: 'up'
						}
					};
					if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
						$[wps]('refresh');
					}
					$.each(axes, function(aKey, axis) {
						var direction, isForward, triggered;
						triggered = [];
						isForward = axis.newScroll > axis.oldScroll;
						direction = isForward ? axis.forward : axis.backward;
						$.each(_this.waypoints[aKey], function(wKey, waypoint) {
							var _ref, _ref1;
							if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
								return triggered.push(waypoint);
							} else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
								return triggered.push(waypoint);
							}
						});
						triggered.sort(function(a, b) {
							return a.offset - b.offset;
						});
						if (!isForward) {
							triggered.reverse();
						}
						return $.each(triggered, function(i, waypoint) {
							if (waypoint.options.continuous || i === triggered.length - 1) {
								return waypoint.trigger([direction]);
							}
						});
					});
					return this.oldScroll = {
						x: axes.horizontal.newScroll,
						y: axes.vertical.newScroll
					};
				};
				Context.prototype.refresh = function() {
					var axes, cOffset, isWin, _this = this;
					isWin = $.isWindow(this.element);
					cOffset = this.$element.offset();
					this.doScroll();
					axes = {
						horizontal: {
							contextOffset: isWin ? 0 : cOffset.left,
							contextScroll: isWin ? 0 : this.oldScroll.x,
							contextDimension: this.$element.width(),
							oldScroll: this.oldScroll.x,
							forward: 'right',
							backward: 'left',
							offsetProp: 'left'
						},
						vertical: {
							contextOffset: isWin ? 0 : cOffset.top,
							contextScroll: isWin ? 0 : this.oldScroll.y,
							contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
							oldScroll: this.oldScroll.y,
							forward: 'down',
							backward: 'up',
							offsetProp: 'top'
						}
					};
					return $.each(axes, function(aKey, axis) {
						return $.each(_this.waypoints[aKey], function(i, waypoint) {
							var adjustment, elementOffset, oldOffset, _ref, _ref1;
							adjustment = waypoint.options.offset;
							oldOffset = waypoint.offset;
							elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
							if ($.isFunction(adjustment)) {
								adjustment = adjustment.apply(waypoint.element);
							} else if (typeof adjustment === 'string') {
								adjustment = parseFloat(adjustment);
								if (waypoint.options.offset.indexOf('%') > -1) {
									adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
								}
							}
							waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
							if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
								return;
							}
							if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
								return waypoint.trigger([axis.backward]);
							} else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
								return waypoint.trigger([axis.forward]);
							} else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
								return waypoint.trigger([axis.forward]);
							}
						});
					});
				};
				Context.prototype.checkEmpty = function() {
					if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
						this.$element.unbind([resizeEvent, scrollEvent].join(' '));
						return delete contexts[this.id];
					}
				};
				return Context;
			})();
			Waypoint = (function() {
				function Waypoint($element, context, options) {
					var idList, _ref;
					options = $.extend({}, $.fn[wp].defaults, options);
					if (options.offset === 'bottom-in-view') {
						options.offset = function() {
							var contextHeight;
							contextHeight = $[wps]('viewportHeight');
							if (!$.isWindow(context.element)) {
								contextHeight = context.$element.height();
							}
							return contextHeight - $(this).outerHeight();
						};
					}
					this.$element = $element;
					this.element = $element[0];
					this.axis = options.horizontal ? 'horizontal' : 'vertical';
					this.callback = options.handler;
					this.context = context;
					this.enabled = options.enabled;
					this.id = 'waypoints' + waypointCounter++;
					this.offset = null;
					this.options = options;
					context.waypoints[this.axis][this.id] = this;
					allWaypoints[this.axis][this.id] = this;
					idList = (_ref = $element.data(waypointKey)) != null ? _ref : [];
					idList.push(this.id);
					$element.data(waypointKey, idList);
				}
				Waypoint.prototype.trigger = function(args) {
					if (!this.enabled) {
						return;
					}
					if (this.callback != null) {
						this.callback.apply(this.element, args);
					}
					if (this.options.triggerOnce) {
						return this.destroy();
					}
				};
				Waypoint.prototype.disable = function() {
					return this.enabled = false;
				};
				Waypoint.prototype.enable = function() {
					this.context.refresh();
					return this.enabled = true;
				};
				Waypoint.prototype.destroy = function() {
					delete allWaypoints[this.axis][this.id];
					delete this.context.waypoints[this.axis][this.id];
					return this.context.checkEmpty();
				};
				Waypoint.getWaypointsByElement = function(element) {
					var all, ids;
					ids = $(element).data(waypointKey);
					if (!ids) {
						return [];
					}
					all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
					return $.map(ids, function(id) {
						return all[id];
					});
				};
				return Waypoint;
			})();
			methods = {
				init: function(f, options) {
					var _ref;
					if (options == null) {
						options = {};
					}
					if ((_ref = options.handler) == null) {
						options.handler = f;
					}
					this.each(function() {
						var $this, context, contextElement, _ref1;
						$this = $(this);
						contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
						if (!$.isWindow(contextElement)) {
							contextElement = $this.closest(contextElement);
						}
						contextElement = $(contextElement);
						context = contexts[contextElement.data(contextKey)];
						if (!context) {
							context = new Context(contextElement);
						}
						return new Waypoint($this, context, options);
					});
					$[wps]('refresh');
					return this;
				},
				disable: function() {
					return methods._invoke(this, 'disable');
				},
				enable: function() {
					return methods._invoke(this, 'enable');
				},
				destroy: function() {
					return methods._invoke(this, 'destroy');
				},
				prev: function(axis, selector) {
					return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
						if (index > 0) {
							return stack.push(waypoints[index - 1]);
						}
					});
				},
				next: function(axis, selector) {
					return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
						if (index < waypoints.length - 1) {
							return stack.push(waypoints[index + 1]);
						}
					});
				},
				_traverse: function(axis, selector, push) {
					var stack, waypoints;
					if (axis == null) {
						axis = 'vertical';
					}
					if (selector == null) {
						selector = window;
					}
					waypoints = jQMethods.aggregate(selector);
					stack = [];
					this.each(function() {
						var index;
						index = $.inArray(this, waypoints[axis]);
						return push(stack, index, waypoints[axis]);
					});
					return this.pushStack(stack);
				},
				_invoke: function($elements, method) {
					$elements.each(function() {
						var waypoints;
						waypoints = Waypoint.getWaypointsByElement(this);
						return $.each(waypoints, function(i, waypoint) {
							waypoint[method]();
							return true;
						});
					});
					return this;
				}
			};
			$.fn[wp] = function() {
				var args, method;
				method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
				if (methods[method]) {
					return methods[method].apply(this, args);
				} else if ($.isFunction(method)) {
					return methods.init.apply(this, arguments);
				} else if ($.isPlainObject(method)) {
					return methods.init.apply(this, [null, method]);
				} else if (!method) {
					return $.error("jQuery Waypoints needs a callback function or handler option.");
				} else {
					return $.error("The " + method + " method does not exist in jQuery Waypoints.");
				}
			};
			$.fn[wp].defaults = {
				context: window,
				continuous: true,
				enabled: true,
				horizontal: false,
				offset: 0,
				triggerOnce: false
			};
			jQMethods = {
				refresh: function() {
					return $.each(contexts, function(i, context) {
						return context.refresh();
					});
				},
				viewportHeight: function() {
					var _ref;
					return (_ref = window.innerHeight) != null ? _ref : $w.height();
				},
				aggregate: function(contextSelector) {
					var collection, waypoints, _ref;
					collection = allWaypoints;
					if (contextSelector) {
						collection = (_ref = contexts[$(contextSelector).data(contextKey)]) != null ? _ref.waypoints : void 0;
					}
					if (!collection) {
						return [];
					}
					waypoints = {
						horizontal: [],
						vertical: []
					};
					$.each(waypoints, function(axis, arr) {
						$.each(collection[axis], function(key, waypoint) {
							return arr.push(waypoint);
						});
						arr.sort(function(a, b) {
							return a.offset - b.offset;
						});
						waypoints[axis] = $.map(arr, function(waypoint) {
							return waypoint.element;
						});
						return waypoints[axis] = $.unique(waypoints[axis]);
					});
					return waypoints;
				},
				above: function(contextSelector) {
					if (contextSelector == null) {
						contextSelector = window;
					}
					return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
						return waypoint.offset <= context.oldScroll.y;
					});
				},
				below: function(contextSelector) {
					if (contextSelector == null) {
						contextSelector = window;
					}
					return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
						return waypoint.offset > context.oldScroll.y;
					});
				},
				left: function(contextSelector) {
					if (contextSelector == null) {
						contextSelector = window;
					}
					return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
						return waypoint.offset <= context.oldScroll.x;
					});
				},
				right: function(contextSelector) {
					if (contextSelector == null) {
						contextSelector = window;
					}
					return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
						return waypoint.offset > context.oldScroll.x;
					});
				},
				enable: function() {
					return jQMethods._invoke('enable');
				},
				disable: function() {
					return jQMethods._invoke('disable');
				},
				destroy: function() {
					return jQMethods._invoke('destroy');
				},
				extendFn: function(methodName, f) {
					return methods[methodName] = f;
				},
				_invoke: function(method) {
					var waypoints;
					waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
					return $.each(waypoints, function(key, waypoint) {
						waypoint[method]();
						return true;
					});
				},
				_filter: function(selector, axis, test) {
					var context, waypoints;
					context = contexts[$(selector).data(contextKey)];
					if (!context) {
						return [];
					}
					waypoints = [];
					$.each(context.waypoints[axis], function(i, waypoint) {
						if (test(context, waypoint)) {
							return waypoints.push(waypoint);
						}
					});
					waypoints.sort(function(a, b) {
						return a.offset - b.offset;
					});
					return $.map(waypoints, function(waypoint) {
						return waypoint.element;
					});
				}
			};
			$[wps] = function() {
				var args, method;
				method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
				if (jQMethods[method]) {
					return jQMethods[method].apply(null, args);
				} else {
					return jQMethods.aggregate.call(null, method);
				}
			};
			$[wps].settings = {
				resizeThrottle: 100,
				scrollThrottle: 30
			};
			return $w.load(function() {
				return $[wps]('refresh');
			});
		});
}).call(this);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;
(function(window, document, $) {
	var isInputSupported = 'placeholder' in document.createElement('input');
	var isTextareaSupported = 'placeholder' in document.createElement('textarea');
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;
	if (isInputSupported && isTextareaSupported) {
		placeholder = prototype.placeholder = function() {
			return this;
		};
		placeholder.input = placeholder.textarea = true;
	} else {
		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({
				'focus.placeholder': clearPlaceholder,
				'blur.placeholder': setPlaceholder
			}).data('placeholder-enabled', true).trigger('blur.placeholder');
			return $this;
		};
		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;
		hooks = {
			'get': function(element) {
				var $element = $(element);
				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}
				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);
				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}
				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					if (element != safeActiveElement()) {
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				return $element;
			}
		};
		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}
		$(function() {
			$(document).delegate('form', 'submit.placeholder', function() {
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});
	}

	function args(elem) {
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({
							'type': 'text'
						});
					} catch (e) {
						$replacement = $('<input>').attr($.extend(args(this), {
							'type': 'text'
						}));
					}
					$replacement.removeAttr('name').data({
						'placeholder-password': $input,
						'placeholder-id': id
					}).bind('focus.placeholder', clearPlaceholder);
					$input.data({
						'placeholder-textinput': $replacement,
						'placeholder-id': id
					}).before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}
}(this, document, jQuery));
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function(t) {
	function e() {}

	function i(t) {
		function i(e) {
			e.prototype.option || (e.prototype.option = function(e) {
				t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
			})
		}

		function n(e, i) {
			t.fn[e] = function(n) {
				if ("string" == typeof n) {
					for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
						var p = this[a],
							h = t.data(p, e);
						if (h)
							if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
								var f = h[n].apply(h, s);
								if (void 0 !== f) return f
							} else r("no such method '" + n + "' for " + e + " instance");
							else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
					}
					return this
				}
				return this.each(function() {
					var o = t.data(this, e);
					o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
				})
			}
		}
		if (t) {
			var r = "undefined" == typeof console ? e : function(t) {
					console.error(t)
				};
			return t.bridget = function(t, e) {
				i(e), n(t, e)
			}, t.bridget
		}
	}
	var o = Array.prototype.slice;
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window),
function(t) {
	function e(e) {
		var i = t.event;
		return i.target = i.target || i.srcElement || e, i
	}
	var i = document.documentElement,
		o = function() {};
	i.addEventListener ? o = function(t, e, i) {
		t.addEventListener(e, i, !1)
	} : i.attachEvent && (o = function(t, i, o) {
		t[i + o] = o.handleEvent ? function() {
			var i = e(t);
			o.handleEvent.call(o, i)
		} : function() {
			var i = e(t);
			o.call(t, i)
		}, t.attachEvent("on" + i, t[i + o])
	});
	var n = function() {};
	i.removeEventListener ? n = function(t, e, i) {
		t.removeEventListener(e, i, !1)
	} : i.detachEvent && (n = function(t, e, i) {
		t.detachEvent("on" + e, t[e + i]);
		try {
			delete t[e + i]
		} catch (o) {
			t[e + i] = void 0
		}
	});
	var r = {
		bind: o,
		unbind: n
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
	function e(t) {
		"function" == typeof t && (e.isReady ? t() : r.push(t))
	}

	function i(t) {
		var i = "readystatechange" === t.type && "complete" !== n.readyState;
		if (!e.isReady && !i) {
			e.isReady = !0;
			for (var o = 0, s = r.length; s > o; o++) {
				var a = r[o];
				a()
			}
		}
	}

	function o(o) {
		return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
	}
	var n = t.document,
		r = [];
	e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this),
function() {
	function t() {}

	function e(t, e) {
		for (var i = t.length; i--;)
			if (t[i].listener === e) return i;
		return -1
	}

	function i(t) {
		return function() {
			return this[t].apply(this, arguments)
		}
	}
	var o = t.prototype,
		n = this,
		r = n.EventEmitter;
	o.getListeners = function(t) {
		var e, i, o = this._getEvents();
		if (t instanceof RegExp) {
			e = {};
			for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
		} else e = o[t] || (o[t] = []);
		return e
	}, o.flattenListeners = function(t) {
		var e, i = [];
		for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
		return i
	}, o.getListenersAsObject = function(t) {
		var e, i = this.getListeners(t);
		return i instanceof Array && (e = {}, e[t] = i), e || i
	}, o.addListener = function(t, i) {
		var o, n = this.getListenersAsObject(t),
			r = "object" == typeof i;
		for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
			listener: i,
			once: !1
		});
		return this
	}, o.on = i("addListener"), o.addOnceListener = function(t, e) {
		return this.addListener(t, {
			listener: e,
			once: !0
		})
	}, o.once = i("addOnceListener"), o.defineEvent = function(t) {
		return this.getListeners(t), this
	}, o.defineEvents = function(t) {
		for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
		return this
	}, o.removeListener = function(t, i) {
		var o, n, r = this.getListenersAsObject(t);
		for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
		return this
	}, o.off = i("removeListener"), o.addListeners = function(t, e) {
		return this.manipulateListeners(!1, t, e)
	}, o.removeListeners = function(t, e) {
		return this.manipulateListeners(!0, t, e)
	}, o.manipulateListeners = function(t, e, i) {
		var o, n, r = t ? this.removeListener : this.addListener,
			s = t ? this.removeListeners : this.addListeners;
		if ("object" != typeof e || e instanceof RegExp)
			for (o = i.length; o--;) r.call(this, e, i[o]);
		else
			for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
		return this
	}, o.removeEvent = function(t) {
		var e, i = typeof t,
			o = this._getEvents();
		if ("string" === i) delete o[t];
		else if (t instanceof RegExp)
			for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
		else delete this._events;
		return this
	}, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
		var i, o, n, r, s = this.getListenersAsObject(t);
		for (n in s)
			if (s.hasOwnProperty(n))
				for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
		return this
	}, o.trigger = i("emitEvent"), o.emit = function(t) {
		var e = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(t, e)
	}, o.setOnceReturnValue = function(t) {
		return this._onceReturnValue = t, this
	}, o._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, o._getEvents = function() {
		return this._events || (this._events = {})
	}, t.noConflict = function() {
		return n.EventEmitter = r, t
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return t
	}) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
function(t) {
	function e(t) {
		if (t) {
			if ("string" == typeof o[t]) return t;
			t = t.charAt(0).toUpperCase() + t.slice(1);
			for (var e, n = 0, r = i.length; r > n; n++)
				if (e = i[n] + t, "string" == typeof o[e]) return e
		}
	}
	var i = "Webkit Moz ms Ms O".split(" "),
		o = document.documentElement.style;
	"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
		return e
	}) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t) {
	function e(t) {
		var e = parseFloat(t),
			i = -1 === t.indexOf("%") && !isNaN(e);
		return i && e
	}

	function i() {
		for (var t = {
			width: 0,
			height: 0,
			innerWidth: 0,
			innerHeight: 0,
			outerWidth: 0,
			outerHeight: 0
		}, e = 0, i = s.length; i > e; e++) {
			var o = s[e];
			t[o] = 0
		}
		return t
	}

	function o(t) {
		function o(t) {
			if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
				var o = r(t);
				if ("none" === o.display) return i();
				var n = {};
				n.width = t.offsetWidth, n.height = t.offsetHeight;
				for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
					var d = s[f],
						l = o[d];
					l = a(t, l);
					var y = parseFloat(l);
					n[d] = isNaN(y) ? 0 : y
				}
				var m = n.paddingLeft + n.paddingRight,
					g = n.paddingTop + n.paddingBottom,
					v = n.marginLeft + n.marginRight,
					_ = n.marginTop + n.marginBottom,
					I = n.borderLeftWidth + n.borderRightWidth,
					L = n.borderTopWidth + n.borderBottomWidth,
					z = h && u,
					S = e(o.width);
				S !== !1 && (n.width = S + (z ? 0 : m + I));
				var b = e(o.height);
				return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
			}
		}

		function a(t, e) {
			if (n || -1 === e.indexOf("%")) return e;
			var i = t.style,
				o = i.left,
				r = t.runtimeStyle,
				s = r && r.left;
			return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
		}
		var u, p = t("boxSizing");
		return function() {
			if (p) {
				var t = document.createElement("div");
				t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
				var i = document.body || document.documentElement;
				i.appendChild(t);
				var o = r(t);
				u = 200 === e(o.width), i.removeChild(t)
			}
		}(), o
	}
	var n = t.getComputedStyle,
		r = n ? function(t) {
			return n(t, null)
		} : function(t) {
			return t.currentStyle
		}, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
	"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t, e) {
	function i(t, e) {
		return t[a](e)
	}

	function o(t) {
		if (!t.parentNode) {
			var e = document.createDocumentFragment();
			e.appendChild(t)
		}
	}

	function n(t, e) {
		o(t);
		for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
			if (i[n] === t) return !0;
		return !1
	}

	function r(t, e) {
		return o(t), i(t, e)
	}
	var s, a = function() {
			if (e.matchesSelector) return "matchesSelector";
			for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
				var n = t[i],
					r = n + "MatchesSelector";
				if (e[r]) return r
			}
		}();
	if (a) {
		var u = document.createElement("div"),
			p = i(u, "div");
		s = p ? i : r
	} else s = n;
	"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
		return s
	}) : window.matchesSelector = s
}(this, Element.prototype),
function(t) {
	function e(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function o(t) {
		return t.replace(/([A-Z])/g, function(t) {
			return "-" + t.toLowerCase()
		})
	}

	function n(t, n, r) {
		function a(t, e) {
			t && (this.element = t, this.layout = e, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}
		var u = r("transition"),
			p = r("transform"),
			h = u && p,
			f = !! r("perspective"),
			c = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "otransitionend",
				transition: "transitionend"
			}[u],
			d = ["transform", "transition", "transitionDuration", "transitionProperty"],
			l = function() {
				for (var t = {}, e = 0, i = d.length; i > e; e++) {
					var o = d[e],
						n = r(o);
					n && n !== o && (t[o] = n)
				}
				return t
			}();
		e(a.prototype, t.prototype), a.prototype._create = function() {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, a.prototype.handleEvent = function(t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, a.prototype.getSize = function() {
			this.size = n(this.element)
		}, a.prototype.css = function(t) {
			var e = this.element.style;
			for (var i in t) {
				var o = l[i] || i;
				e[o] = t[i]
			}
		}, a.prototype.getPosition = function() {
			var t = s(this.element),
				e = this.layout.options,
				i = e.isOriginLeft,
				o = e.isOriginTop,
				n = parseInt(t[i ? "left" : "right"], 10),
				r = parseInt(t[o ? "top" : "bottom"], 10);
			n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
			var a = this.layout.size;
			n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
		}, a.prototype.layoutPosition = function() {
			var t = this.layout.size,
				e = this.layout.options,
				i = {};
			e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
		};
		var y = f ? function(t, e) {
				return "translate3d(" + t + "px, " + e + "px, 0)"
			} : function(t, e) {
				return "translate(" + t + "px, " + e + "px)"
			};
		a.prototype._transitionTo = function(t, e) {
			this.getPosition();
			var i = this.position.x,
				o = this.position.y,
				n = parseInt(t, 10),
				r = parseInt(e, 10),
				s = n === this.position.x && r === this.position.y;
			if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
			var a = t - i,
				u = e - o,
				p = {}, h = this.layout.options;
			a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
				to: p,
				onTransitionEnd: {
					transform: this.layoutPosition
				},
				isCleaning: !0
			})
		}, a.prototype.goTo = function(t, e) {
			this.setPosition(t, e), this.layoutPosition()
		}, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
			this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
		}, a.prototype._nonTransition = function(t) {
			this.css(t.to), t.isCleaning && this._removeStyles(t.to);
			for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
		}, a.prototype._transition = function(t) {
			if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
			var e = this._transn;
			for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
			for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
			if (t.from) {
				this.css(t.from);
				var o = this.element.offsetHeight;
				o = null
			}
			this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
		};
		var m = p && o(p) + ",opacity";
		a.prototype.enableTransition = function() {
			this.isTransitioning || (this.css({
				transitionProperty: m,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(c, this, !1))
		}, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
			this.ontransitionend(t)
		}, a.prototype.onotransitionend = function(t) {
			this.ontransitionend(t)
		};
		var g = {
			"-webkit-transform": "transform",
			"-moz-transform": "transform",
			"-o-transform": "transform"
		};
		a.prototype.ontransitionend = function(t) {
			if (t.target === this.element) {
				var e = this._transn,
					o = g[t.propertyName] || t.propertyName;
				if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
					var n = e.onEnd[o];
					n.call(this), delete e.onEnd[o]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, a.prototype.disableTransition = function() {
			this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1
		}, a.prototype._removeStyles = function(t) {
			var e = {};
			for (var i in t) e[i] = "";
			this.css(e)
		};
		var v = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return a.prototype.removeTransitionStyles = function() {
			this.css(v)
		}, a.prototype.removeElem = function() {
			this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
		}, a.prototype.remove = function() {
			if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
			var t = this;
			this.on("transitionEnd", function() {
				return t.removeElem(), !0
			}), this.hide()
		}, a.prototype.reveal = function() {
			delete this.isHidden, this.css({
				display: ""
			});
			var t = this.layout.options;
			this.transition({
				from: t.hiddenStyle,
				to: t.visibleStyle,
				isCleaning: !0
			})
		}, a.prototype.hide = function() {
			this.isHidden = !0, this.css({
				display: ""
			});
			var t = this.layout.options;
			this.transition({
				from: t.visibleStyle,
				to: t.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: {
					opacity: function() {
						this.isHidden && this.css({
							display: "none"
						})
					}
				}
			})
		}, a.prototype.destroy = function() {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, a
	}
	var r = t.getComputedStyle,
		s = r ? function(t) {
			return r(t, null)
		} : function(t) {
			return t.currentStyle
		};
	"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window),
function(t) {
	function e(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}

	function i(t) {
		return "[object Array]" === f.call(t)
	}

	function o(t) {
		var e = [];
		if (i(t)) e = t;
		else if (t && "number" == typeof t.length)
			for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
		else e.push(t);
		return e
	}

	function n(t, e) {
		var i = d(e, t); - 1 !== i && e.splice(i, 1)
	}

	function r(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	}

	function s(i, s, f, d, l, y) {
		function m(t, i) {
			if ("string" == typeof t && (t = a.querySelector(t)), !t || !c(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
			this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
			var o = ++g;
			this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
		}
		var g = 0,
			v = {};
		return m.namespace = "outlayer", m.Item = y, m.defaults = {
			containerStyle: {
				position: "relative"
			},
			isInitLayout: !0,
			isOriginLeft: !0,
			isOriginTop: !0,
			isResizeBound: !0,
			isResizingContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		}, e(m.prototype, f.prototype), m.prototype.option = function(t) {
			e(this.options, t)
		}, m.prototype._create = function() {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
		}, m.prototype.reloadItems = function() {
			this.items = this._itemize(this.element.children)
		}, m.prototype._itemize = function(t) {
			for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
				var s = e[n],
					a = new i(s, this);
				o.push(a)
			}
			return o
		}, m.prototype._filterFindItemElements = function(t) {
			t = o(t);
			for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
				var s = t[n];
				if (c(s))
					if (e) {
						l(s, e) && i.push(s);
						for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u])
					} else i.push(s)
			}
			return i
		}, m.prototype.getItemElements = function() {
			for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
			return t
		}, m.prototype.layout = function() {
			this._resetLayout(), this._manageStamps();
			var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			this.layoutItems(this.items, t), this._isLayoutInited = !0
		}, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
			this.getSize()
		}, m.prototype.getSize = function() {
			this.size = d(this.element)
		}, m.prototype._getMeasurement = function(t, e) {
			var i, o = this.options[t];
			o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o), this[t] = i ? d(i)[e] : o) : this[t] = 0
		}, m.prototype.layoutItems = function(t, e) {
			t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
		}, m.prototype._getItemsForLayout = function(t) {
			for (var e = [], i = 0, o = t.length; o > i; i++) {
				var n = t[i];
				n.isIgnored || e.push(n)
			}
			return e
		}, m.prototype._layoutItems = function(t, e) {
			function i() {
				o.emitEvent("layoutComplete", [o, t])
			}
			var o = this;
			if (!t || !t.length) return i(), void 0;
			this._itemsOn(t, "layout", i);
			for (var n = [], r = 0, s = t.length; s > r; r++) {
				var a = t[r],
					u = this._getItemLayoutPosition(a);
				u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
			}
			this._processLayoutQueue(n)
		}, m.prototype._getItemLayoutPosition = function() {
			return {
				x: 0,
				y: 0
			}
		}, m.prototype._processLayoutQueue = function(t) {
			for (var e = 0, i = t.length; i > e; e++) {
				var o = t[e];
				this._positionItem(o.item, o.x, o.y, o.isInstant)
			}
		}, m.prototype._positionItem = function(t, e, i, o) {
			o ? t.goTo(e, i) : t.moveTo(e, i)
		}, m.prototype._postLayout = function() {
			this.resizeContainer()
		}, m.prototype.resizeContainer = function() {
			if (this.options.isResizingContainer) {
				var t = this._getContainerSize();
				t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
			}
		}, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
			if (void 0 !== t) {
				var i = this.size;
				i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
			}
		}, m.prototype._itemsOn = function(t, e, i) {
			function o() {
				return n++, n === r && i.call(s), !0
			}
			for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
				var p = t[a];
				p.on(e, o)
			}
		}, m.prototype.ignore = function(t) {
			var e = this.getItem(t);
			e && (e.isIgnored = !0)
		}, m.prototype.unignore = function(t) {
			var e = this.getItem(t);
			e && delete e.isIgnored
		}, m.prototype.stamp = function(t) {
			if (t = this._find(t)) {
				this.stamps = this.stamps.concat(t);
				for (var e = 0, i = t.length; i > e; e++) {
					var o = t[e];
					this.ignore(o)
				}
			}
		}, m.prototype.unstamp = function(t) {
			if (t = this._find(t))
				for (var e = 0, i = t.length; i > e; e++) {
					var o = t[e];
					n(o, this.stamps), this.unignore(o)
				}
		}, m.prototype._find = function(t) {
			return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
		}, m.prototype._manageStamps = function() {
			if (this.stamps && this.stamps.length) {
				this._getBoundingRect();
				for (var t = 0, e = this.stamps.length; e > t; t++) {
					var i = this.stamps[t];
					this._manageStamp(i)
				}
			}
		}, m.prototype._getBoundingRect = function() {
			var t = this.element.getBoundingClientRect(),
				e = this.size;
			this._boundingRect = {
				left: t.left + e.paddingLeft + e.borderLeftWidth,
				top: t.top + e.paddingTop + e.borderTopWidth,
				right: t.right - (e.paddingRight + e.borderRightWidth),
				bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
			}
		}, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
			var e = t.getBoundingClientRect(),
				i = this._boundingRect,
				o = d(t),
				n = {
					left: e.left - i.left - o.marginLeft,
					top: e.top - i.top - o.marginTop,
					right: i.right - e.right - o.marginRight,
					bottom: i.bottom - e.bottom - o.marginBottom
				};
			return n
		}, m.prototype.handleEvent = function(t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, m.prototype.bindResize = function() {
			this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
		}, m.prototype.unbindResize = function() {
			this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
		}, m.prototype.onresize = function() {
			function t() {
				e.resize(), delete e.resizeTimeout
			}
			this.resizeTimeout && clearTimeout(this.resizeTimeout);
			var e = this;
			this.resizeTimeout = setTimeout(t, 100)
		}, m.prototype.resize = function() {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, m.prototype.needsResizeLayout = function() {
			var t = d(this.element),
				e = this.size && t;
			return e && t.innerWidth !== this.size.innerWidth
		}, m.prototype.addItems = function(t) {
			var e = this._itemize(t);
			return e.length && (this.items = this.items.concat(e)), e
		}, m.prototype.appended = function(t) {
			var e = this.addItems(t);
			e.length && (this.layoutItems(e, !0), this.reveal(e))
		}, m.prototype.prepended = function(t) {
			var e = this._itemize(t);
			if (e.length) {
				var i = this.items.slice(0);
				this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
			}
		}, m.prototype.reveal = function(t) {
			var e = t && t.length;
			if (e)
				for (var i = 0; e > i; i++) {
					var o = t[i];
					o.reveal()
				}
		}, m.prototype.hide = function(t) {
			var e = t && t.length;
			if (e)
				for (var i = 0; e > i; i++) {
					var o = t[i];
					o.hide()
				}
		}, m.prototype.getItem = function(t) {
			for (var e = 0, i = this.items.length; i > e; e++) {
				var o = this.items[e];
				if (o.element === t) return o
			}
		}, m.prototype.getItems = function(t) {
			if (t && t.length) {
				for (var e = [], i = 0, o = t.length; o > i; i++) {
					var n = t[i],
						r = this.getItem(n);
					r && e.push(r)
				}
				return e
			}
		}, m.prototype.remove = function(t) {
			t = o(t);
			var e = this.getItems(t);
			if (e && e.length) {
				this._itemsOn(e, "remove", function() {
					this.emitEvent("removeComplete", [this, e])
				});
				for (var i = 0, r = e.length; r > i; i++) {
					var s = e[i];
					s.remove(), n(s, this.items)
				}
			}
		}, m.prototype.destroy = function() {
			var t = this.element.style;
			t.height = "", t.position = "", t.width = "";
			for (var e = 0, i = this.items.length; i > e; e++) {
				var o = this.items[e];
				o.destroy()
			}
			this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
		}, m.data = function(t) {
			var e = t && t.outlayerGUID;
			return e && v[e]
		}, m.create = function(t, i) {
			function o() {
				m.apply(this, arguments)
			}
			return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() {
				y.apply(this, arguments)
			}, o.Item.prototype = new y, s(function() {
				for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
					var f, c = i[s],
						d = c.getAttribute(n);
					try {
						f = d && JSON.parse(d)
					} catch (l) {
						u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
						continue
					}
					var y = new o(c, f);
					p && p.data(c, t, y)
				}
			}), p && p.bridget && p.bridget(t, o), o
		}, m.Item = y, m
	}
	var a = t.document,
		u = t.console,
		p = t.jQuery,
		h = function() {}, f = Object.prototype.toString,
		c = "object" == typeof HTMLElement ? function(t) {
			return t instanceof HTMLElement
		} : function(t) {
			return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
		}, d = Array.prototype.indexOf ? function(t, e) {
			return t.indexOf(e)
		} : function(t, e) {
			for (var i = 0, o = t.length; o > i; i++)
				if (t[i] === e) return i;
			return -1
		};
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window),
function(t) {
	function e(t) {
		function e() {
			t.Item.apply(this, arguments)
		}
		return e.prototype = new t.Item, e.prototype._create = function() {
			this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
		}, e.prototype.updateSortData = function() {
			if (!this.isIgnored) {
				this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
				var t = this.layout.options.getSortData,
					e = this.layout._sorters;
				for (var i in t) {
					var o = e[i];
					this.sortData[i] = o(this.element, this)
				}
			}
		}, e
	}
	"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window),
function(t) {
	function e(t, e) {
		function i(t) {
			this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
		}
		return function() {
			function t(t) {
				return function() {
					return e.prototype[t].apply(this.isotope, arguments)
				}
			}
			for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
				var s = o[n];
				i.prototype[s] = t(s)
			}
		}(), i.prototype.needsVerticalResizeLayout = function() {
			var e = t(this.isotope.element),
				i = this.isotope.size && e;
			return i && e.innerHeight !== this.isotope.size.innerHeight
		}, i.prototype._getMeasurement = function() {
			this.isotope._getMeasurement.apply(this, arguments)
		}, i.prototype.getColumnWidth = function() {
			this.getSegmentSize("column", "Width")
		}, i.prototype.getRowHeight = function() {
			this.getSegmentSize("row", "Height")
		}, i.prototype.getSegmentSize = function(t, e) {
			var i = t + e,
				o = "outer" + e;
			if (this._getMeasurement(i, o), !this[i]) {
				var n = this.getFirstItemSize();
				this[i] = n && n[o] || this.isotope.size["inner" + e]
			}
		}, i.prototype.getFirstItemSize = function() {
			var e = this.isotope.filteredItems[0];
			return e && e.element && t(e.element)
		}, i.prototype.layout = function() {
			this.isotope.layout.apply(this.isotope, arguments)
		}, i.prototype.getSize = function() {
			this.isotope.getSize(), this.size = this.isotope.size
		}, i.modes = {}, i.create = function(t, e) {
			function o() {
				i.apply(this, arguments)
			}
			return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
		}, i
	}
	"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window),
function(t) {
	function e(t, e) {
		var o = t.create("masonry");
		return o.prototype._resetLayout = function() {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var t = this.cols;
			for (this.colYs = []; t--;) this.colYs.push(0);
			this.maxY = 0
		}, o.prototype.measureColumns = function() {
			if (this.getContainerWidth(), !this.columnWidth) {
				var t = this.items[0],
					i = t && t.element;
				this.columnWidth = i && e(i).outerWidth || this.containerWidth
			}
			this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
		}, o.prototype.getContainerWidth = function() {
			var t = this.options.isFitWidth ? this.element.parentNode : this.element,
				i = e(t);
			this.containerWidth = i && i.innerWidth
		}, o.prototype._getItemLayoutPosition = function(t) {
			t.getSize();
			var e = t.size.outerWidth % this.columnWidth,
				o = e && 1 > e ? "round" : "ceil",
				n = Math[o](t.size.outerWidth / this.columnWidth);
			n = Math.min(n, this.cols);
			for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
					x: this.columnWidth * a,
					y: s
				}, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
			return u
		}, o.prototype._getColGroup = function(t) {
			if (2 > t) return this.colYs;
			for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
				var n = this.colYs.slice(o, o + t);
				e[o] = Math.max.apply(Math, n)
			}
			return e
		}, o.prototype._manageStamp = function(t) {
			var i = e(t),
				o = this._getElementOffset(t),
				n = this.options.isOriginLeft ? o.left : o.right,
				r = n + i.outerWidth,
				s = Math.floor(n / this.columnWidth);
			s = Math.max(0, s);
			var a = Math.floor(r / this.columnWidth);
			a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
			for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
		}, o.prototype._getContainerSize = function() {
			this.maxY = Math.max.apply(Math, this.colYs);
			var t = {
				height: this.maxY
			};
			return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
		}, o.prototype._getContainerFitWidth = function() {
			for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
			return (this.cols - t) * this.columnWidth - this.gutter
		}, o.prototype.needsResizeLayout = function() {
			var t = this.containerWidth;
			return this.getContainerWidth(), t !== this.containerWidth
		}, o
	}
	var i = Array.prototype.indexOf ? function(t, e) {
			return t.indexOf(e)
		} : function(t, e) {
			for (var i = 0, o = t.length; o > i; i++) {
				var n = t[i];
				if (n === e) return i
			}
			return -1
		};
	"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window),
function(t) {
	function e(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}

	function i(t, i) {
		var o = t.create("masonry"),
			n = o.prototype._getElementOffset,
			r = o.prototype.layout,
			s = o.prototype._getMeasurement;
		e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
		var a = o.prototype.measureColumns;
		o.prototype.measureColumns = function() {
			this.items = this.isotope.filteredItems, a.call(this)
		};
		var u = o.prototype._manageStamp;
		return o.prototype._manageStamp = function() {
			this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
		}, o
	}
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window),
function(t) {
	function e(t) {
		var e = t.create("fitRows");
		return e.prototype._resetLayout = function() {
			this.x = 0, this.y = 0, this.maxY = 0
		}, e.prototype._getItemLayoutPosition = function(t) {
			t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
			var e = {
				x: this.x,
				y: this.y
			};
			return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
		}, e.prototype._getContainerSize = function() {
			return {
				height: this.maxY
			}
		}, e
	}
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window),
function(t) {
	function e(t) {
		var e = t.create("vertical", {
			horizontalAlignment: 0
		});
		return e.prototype._resetLayout = function() {
			this.y = 0
		}, e.prototype._getItemLayoutPosition = function(t) {
			t.getSize();
			var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
				i = this.y;
			return this.y += t.size.outerHeight, {
				x: e,
				y: i
			}
		}, e.prototype._getContainerSize = function() {
			return {
				height: this.y
			}
		}, e
	}
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window),
function(t) {
	function e(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}

	function i(t) {
		return "[object Array]" === h.call(t)
	}

	function o(t) {
		var e = [];
		if (i(t)) e = t;
		else if (t && "number" == typeof t.length)
			for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
		else e.push(t);
		return e
	}

	function n(t, e) {
		var i = f(e, t); - 1 !== i && e.splice(i, 1)
	}

	function r(t, i, r, u, h) {
		function f(t, e) {
			return function(i, o) {
				for (var n = 0, r = t.length; r > n; n++) {
					var s = t[n],
						a = i.sortData[s],
						u = o.sortData[s];
					if (a > u || u > a) {
						var p = void 0 !== e[s] ? e[s] : e,
							h = p ? 1 : -1;
						return (a > u ? 1 : -1) * h
					}
				}
				return 0
			}
		}
		var c = t.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
		c.Item = u, c.LayoutMode = h, c.prototype._create = function() {
			this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
			for (var e in h.modes) this._initLayoutMode(e)
		}, c.prototype.reloadItems = function() {
			this.itemGUID = 0, t.prototype.reloadItems.call(this)
		}, c.prototype._itemize = function() {
			for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
				var n = e[i];
				n.id = this.itemGUID++
			}
			return this._updateItemsSortData(e), e
		}, c.prototype._initLayoutMode = function(t) {
			var i = h.modes[t],
				o = this.options[t] || {};
			this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
		}, c.prototype.layout = function() {
			return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
		}, c.prototype._layout = function() {
			var t = this._getIsInstant();
			this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
		}, c.prototype.arrange = function(t) {
			this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
		}, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function() {
			var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			return this._isInstant = t, t
		}, c.prototype._filter = function(t) {
			function e() {
				f.reveal(n), f.hide(r)
			}
			var i = this.options.filter;
			i = i || "*";
			for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
				var p = t[a];
				if (!p.isIgnored) {
					var h = s(p);
					h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
				}
			}
			var f = this;
			return this._isInstant ? this._noTransition(e) : e(), o
		}, c.prototype._getFilterTest = function(t) {
			return s && this.options.isJQueryFiltering ? function(e) {
				return s(e.element).is(t)
			} : "function" == typeof t ? function(e) {
				return t(e.element)
			} : function(e) {
				return r(e.element, t)
			}
		}, c.prototype.updateSortData = function(t) {
			this._getSorters(), t = o(t);
			var e = this.getItems(t);
			e = e.length ? e : this.items, this._updateItemsSortData(e)
		}, c.prototype._getSorters = function() {
			var t = this.options.getSortData;
			for (var e in t) {
				var i = t[e];
				this._sorters[e] = d(i)
			}
		}, c.prototype._updateItemsSortData = function(t) {
			for (var e = 0, i = t.length; i > e; e++) {
				var o = t[e];
				o.updateSortData()
			}
		};
		var d = function() {
			function t(t) {
				if ("string" != typeof t) return t;
				var i = a(t).split(" "),
					o = i[0],
					n = o.match(/^\[(.+)\]$/),
					r = n && n[1],
					s = e(r, o),
					u = c.sortDataParsers[i[1]];
				return t = u ? function(t) {
					return t && u(s(t))
				} : function(t) {
					return t && s(t)
				}
			}

			function e(t, e) {
				var i;
				return i = t ? function(e) {
					return e.getAttribute(t)
				} : function(t) {
					var i = t.querySelector(e);
					return i && p(i)
				}
			}
			return t
		}();
		c.sortDataParsers = {
			parseInt: function(t) {
				return parseInt(t, 10)
			},
			parseFloat: function(t) {
				return parseFloat(t)
			}
		}, c.prototype._sort = function() {
			var t = this.options.sortBy;
			if (t) {
				var e = [].concat.apply(t, this.sortHistory),
					i = f(e, this.options.sortAscending);
				this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
			}
		}, c.prototype._mode = function() {
			var t = this.options.layoutMode,
				e = this.modes[t];
			if (!e) throw Error("No layout mode: " + t);
			return e.options = this.options[t], e
		}, c.prototype._resetLayout = function() {
			t.prototype._resetLayout.call(this), this._mode()._resetLayout()
		}, c.prototype._getItemLayoutPosition = function(t) {
			return this._mode()._getItemLayoutPosition(t)
		}, c.prototype._manageStamp = function(t) {
			this._mode()._manageStamp(t)
		}, c.prototype._getContainerSize = function() {
			return this._mode()._getContainerSize()
		}, c.prototype.needsResizeLayout = function() {
			return this._mode().needsResizeLayout()
		}, c.prototype.appended = function(t) {
			var e = this.addItems(t);
			if (e.length) {
				var i = this._filterRevealAdded(e);
				this.filteredItems = this.filteredItems.concat(i)
			}
		}, c.prototype.prepended = function(t) {
			var e = this._itemize(t);
			if (e.length) {
				var i = this.items.slice(0);
				this.items = e.concat(i), this._resetLayout(), this._manageStamps();
				var o = this._filterRevealAdded(e);
				this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
			}
		}, c.prototype._filterRevealAdded = function(t) {
			var e = this._noTransition(function() {
				return this._filter(t)
			});
			return this.layoutItems(e, !0), this.reveal(e), t
		}, c.prototype.insert = function(t) {
			var e = this.addItems(t);
			if (e.length) {
				var i, o, n = e.length;
				for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
				var r = this._filter(e);
				for (this._noTransition(function() {
					this.hide(r)
				}), i = 0; n > i; i++) e[i].isLayoutInstant = !0;
				for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
				this.reveal(r)
			}
		};
		var l = c.prototype.remove;
		return c.prototype.remove = function(t) {
			t = o(t);
			var e = this.getItems(t);
			if (l.call(this, t), e && e.length)
				for (var i = 0, r = e.length; r > i; i++) {
					var s = e[i];
					n(s, this.filteredItems)
				}
		}, c.prototype._noTransition = function(t) {
			var e = this.options.transitionDuration;
			this.options.transitionDuration = 0;
			var i = t.call(this);
			return this.options.transitionDuration = e, i
		}, c
	}
	var s = t.jQuery,
		a = String.prototype.trim ? function(t) {
			return t.trim()
		} : function(t) {
			return t.replace(/^\s+|\s+$/g, "")
		}, u = document.documentElement,
		p = u.textContent ? function(t) {
			return t.textContent
		} : function(t) {
			return t.innerText
		}, h = Object.prototype.toString,
		f = Array.prototype.indexOf ? function(t, e) {
			return t.indexOf(e)
		} : function(t, e) {
			for (var i = 0, o = t.length; o > i; i++)
				if (t[i] === e) return i;
			return -1
		};
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);
/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 */
(function($) {
	$.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
		var cfg = {
			interval: 100,
			sensitivity: 7,
			timeout: 0
		};
		if (typeof handlerIn === "object") {
			cfg = $.extend(cfg, handlerIn);
		} else if ($.isFunction(handlerOut)) {
			cfg = $.extend(cfg, {
				over: handlerIn,
				out: handlerOut,
				selector: selector
			});
		} else {
			cfg = $.extend(cfg, {
				over: handlerIn,
				out: handlerIn,
				selector: handlerOut
			});
		}
		var cX, cY, pX, pY;
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};
		var compare = function(ev, ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
				$(ob).off("mousemove.hoverIntent", track);
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob, [ev]);
			} else {
				pX = cX;
				pY = cY;
				ob.hoverIntent_t = setTimeout(function() {
					compare(ev, ob);
				}, cfg.interval);
			}
		};
		var delay = function(ev, ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob, [ev]);
		};
		var handleHover = function(e) {
			var ev = jQuery.extend({}, e);
			var ob = this;
			if (ob.hoverIntent_t) {
				ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			}
			if (e.type == "mouseenter") {
				pX = ev.pageX;
				pY = ev.pageY;
				$(ob).on("mousemove.hoverIntent", track);
				if (ob.hoverIntent_s != 1) {
					ob.hoverIntent_t = setTimeout(function() {
						compare(ev, ob);
					}, cfg.interval);
				}
			} else {
				$(ob).off("mousemove.hoverIntent", track);
				if (ob.hoverIntent_s == 1) {
					ob.hoverIntent_t = setTimeout(function() {
						delay(ev, ob);
					}, cfg.timeout);
				}
			}
		};
		return this.on({
			'mouseenter.hoverIntent': handleHover,
			'mouseleave.hoverIntent': handleHover
		}, cfg.selector);
	};
})(jQuery);
(function($) {
	$.fn.UItoTop = function(options) {
		var defaults = {
			text: '',
			min: 200,
			inDelay: 600,
			outDelay: 400,
			containerID: 'toTop',
			containerHoverID: 'toTopHover',
			scrollSpeed: 1200,
			easingType: 'linear'
		}, settings = $.extend(defaults, options),
			containerIDhash = '#' + settings.containerID,
			containerHoverIDHash = '#' + settings.containerHoverID;
		$('body').append('<div class="to-top-container"><a href="#" id="' + settings.containerID + '">' + settings.text + '</a></div>');
		$(containerIDhash).hide().on('click.UItoTop', function() {
			$('html, body').animate({
				scrollTop: 0
			}, settings.scrollSpeed, settings.easingType);
			$('#' + settings.containerHoverID, this).stop().animate({
				'opacity': 0
			}, settings.inDelay, settings.easingType);
			return false;
		}).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() {
			$(containerHoverIDHash, this).stop().animate({
				'opacity': 1
			}, 600, 'linear');
		}, function() {
			$(containerHoverIDHash, this).stop().animate({
				'opacity': 0
			}, 700, 'linear');
		});
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if (typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $(window).height() - 50
				});
			}
			if (sd > settings.min) {
				$(containerIDhash).fadeIn(settings.inDelay);
			} else {
				$(containerIDhash).fadeOut(settings.Outdelay);
			}
		});
	};
})(jQuery);
(function(window, $, undefined) {
	var $event = $.event,
		resizeTimeout;
	$event.special.smartresize = {
		setup: function() {
			$(this).bind("resize", $event.special.smartresize.handler);
		},
		teardown: function() {
			$(this).unbind("resize", $event.special.smartresize.handler);
		},
		handler: function(event, execAsap) {
			var context = this,
				args = arguments;
			event.type = "smartresize";
			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
			}
			resizeTimeout = setTimeout(function() {
				jQuery.event.handle.apply(context, args);
			}, execAsap === "execAsap" ? 0 : 100);
		}
	};
	$.fn.smartresize = function(fn) {
		return fn ? this.bind("smartresize", fn) : this.trigger("smartresize", ["execAsap"]);
	};
	$.Slideshow = function(options, element) {
		this.$el = $(element);
		this.$list = this.$el.find('ul.ei-slider-large');
		this.$imgItems = this.$list.children('li');
		this.itemsCount = this.$imgItems.length;
		this.$images = this.$imgItems.find('img:first');
		this.$sliderthumbs = this.$el.find('ul.ei-slider-thumbs').hide();
		this.$sliderElems = this.$sliderthumbs.children('li');
		this.$sliderElem = this.$sliderthumbs.children('li.ei-slider-element');
		this.$thumbs = this.$sliderElems.not('.ei-slider-element');
		this._init(options);
	};
	$.Slideshow.defaults = {
		animation: 'sides',
		autoplay: false,
		slideshow_interval: 3000,
		speed: 800,
		easing: '',
		titlesFactor: 0.60,
		titlespeed: 800,
		titleeasing: '',
		thumbMaxWidth: 150
	};
	$.Slideshow.prototype = {
		_init: function(options) {
			this.options = $.extend(true, {}, $.Slideshow.defaults, options);
			this.$imgItems.css('opacity', 0);
			this.$imgItems.find('div.ei-title > *').css('opacity', 0);
			this.current = 0;
			var _self = this;
			this.$loading = $('<div class="ei-slider-loading">Loading</div>').prependTo(_self.$el);
			$.when(this._preloadImages()).done(function() {
				_self.$loading.hide();
				_self._setImagesSize();
				_self._initThumbs();
				_self.$imgItems.eq(_self.current).css({
					'opacity': 1,
					'z-index': 10
				}).show().find('div.ei-title > *').css('opacity', 1);
				if (_self.options.autoplay) {
					_self._startSlideshow();
				}
				_self._initEvents();
			});
		},
		_preloadImages: function() {
			var _self = this,
				loaded = 0;
			return $.Deferred(function(dfd) {
				_self.$images.each(function(i) {
					$('<img/>').load(function() {
						if (++loaded === _self.itemsCount) {
							dfd.resolve();
						}
					}).attr('src', $(this).attr('src'));
				});
			}).promise();
		},
		_setImagesSize: function() {
			this.elWidth = this.$el.width();
			var _self = this;
			this.$images.each(function(i) {
				var $img = $(this);
				imgDim = _self._getImageDim($img.attr('src'));
				$img.css({
					width: imgDim.width,
					height: imgDim.height,
					marginLeft: imgDim.left,
					marginTop: imgDim.top
				});
			});
		},
		_getImageDim: function(src) {
			var $img = new Image();
			$img.src = src;
			var c_w = this.elWidth,
				c_h = this.$el.height(),
				r_w = c_h / c_w,
				i_w = $img.width,
				i_h = $img.height,
				r_i = i_h / i_w,
				new_w, new_h, new_left, new_top;
			if (r_w > r_i) {
				new_h = c_h;
				new_w = c_h / r_i;
			} else {
				new_h = c_w * r_i;
				new_w = c_w;
			}
			return {
				width: new_w,
				height: new_h,
				left: (c_w - new_w) / 2,
				top: (c_h - new_h) / 2
			};
		},
		_initThumbs: function() {
			this.$sliderElems.css({
				'max-width': this.options.thumbMaxWidth + 'px',
				'width': 100 / this.itemsCount + '%'
			});
			this.$sliderthumbs.css('max-width', this.options.thumbMaxWidth * this.itemsCount + 'px').show();
		},
		_startSlideshow: function() {
			var _self = this;
			this.slideshow = setTimeout(function() {
				var pos;
				(_self.current === _self.itemsCount - 1) ? pos = 0 : pos = _self.current + 1;
				_self._slideTo(pos);
				if (_self.options.autoplay) {
					_self._startSlideshow();
				}
			}, this.options.slideshow_interval);
		},
		_slideTo: function(pos) {
			if (pos === this.current || this.isAnimating)
				return false;
			this.isAnimating = true;
			var $currentSlide = this.$imgItems.eq(this.current),
				$nextSlide = this.$imgItems.eq(pos),
				_self = this,
				preCSS = {
					zIndex: 10
				}, animCSS = {
					opacity: 1
				};
			if (this.options.animation === 'sides') {
				preCSS.left = (pos > this.current) ? -1 * this.elWidth : this.elWidth;
				animCSS.left = 0;
			}
			$nextSlide.find('div.ei-title > h2').css('margin-right', 50 + 'px').stop().delay(this.options.speed * this.options.titlesFactor).animate({
				marginRight: 0 + 'px',
				opacity: 1
			}, this.options.titlespeed, this.options.titleeasing).end().find('div.ei-title > h3').css('margin-right', -50 + 'px').stop().delay(this.options.speed * this.options.titlesFactor).animate({
				marginRight: 0 + 'px',
				opacity: 1
			}, this.options.titlespeed, this.options.titleeasing);
			$.when($currentSlide.css('z-index', 1).find('div.ei-title > *').stop().fadeOut(this.options.speed / 2, function() {
				$(this).show().css('opacity', 0);
			}), $nextSlide.css(preCSS).stop().animate(animCSS, this.options.speed, this.options.easing), this.$sliderElem.stop().animate({
				left: this.$thumbs.eq(pos).position().left
			}, this.options.speed)).done(function() {
				$currentSlide.css('opacity', 0).find('div.ei-title > *').css('opacity', 0);
				_self.current = pos;
				_self.isAnimating = false;
			});
		},
		_initEvents: function() {
			var _self = this;
			$(window).on('smartresize.eislideshow', function(event) {
				_self._setImagesSize();
				_self.$sliderElem.css('left', _self.$thumbs.eq(_self.current).position().left);
			});
			this.$thumbs.on('click.eislideshow', function(event) {
				if (_self.options.autoplay) {
					clearTimeout(_self.slideshow);
					_self.options.autoplay = false;
				}
				var $thumb = $(this),
					idx = $thumb.index() - 1;
				_self._slideTo(idx);
				return false;
			});
		}
	};
	var logError = function(message) {
		if (this.console) {
			console.error(message);
		}
	};
	$.fn.eislideshow = function(options) {
		if (typeof options === 'string') {
			var args = Array.prototype.slice.call(arguments, 1);
			this.each(function() {
				var instance = $.data(this, 'eislideshow');
				if (!instance) {
					logError("cannot call methods on eislideshow prior to initialization; " + "attempted to call method '" + options + "'");
					return;
				}
				if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
					logError("no such method '" + options + "' for eislideshow instance");
					return;
				}
				instance[options].apply(instance, args);
			});
		} else {
			this.each(function() {
				var instance = $.data(this, 'eislideshow');
				if (!instance) {
					$.data(this, 'eislideshow', new $.Slideshow(options, this));
				}
			});
		}
		return this;
	};
})(window, jQuery);
/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
	"use strict";

	function e() {}

	function t(e, t) {
		for (var n = e.length; n--;)
			if (e[n].listener === t) return n;
		return -1
	}

	function n(e) {
		return function() {
			return this[e].apply(this, arguments)
		}
	}
	var i = e.prototype;
	i.getListeners = function(e) {
		var t, n, i = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
		} else t = i[e] || (i[e] = []);
		return t
	}, i.flattenListeners = function(e) {
		var t, n = [];
		for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
		return n
	}, i.getListenersAsObject = function(e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, i.addListener = function(e, n) {
		var i, r = this.getListenersAsObject(e),
			o = "object" == typeof n;
		for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
			listener: n,
			once: !1
		});
		return this
	}, i.on = n("addListener"), i.addOnceListener = function(e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	}, i.once = n("addOnceListener"), i.defineEvent = function(e) {
		return this.getListeners(e), this
	}, i.defineEvents = function(e) {
		for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
		return this
	}, i.removeListener = function(e, n) {
		var i, r, o = this.getListenersAsObject(e);
		for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
		return this
	}, i.off = n("removeListener"), i.addListeners = function(e, t) {
		return this.manipulateListeners(!1, e, t)
	}, i.removeListeners = function(e, t) {
		return this.manipulateListeners(!0, e, t)
	}, i.manipulateListeners = function(e, t, n) {
		var i, r, o = e ? this.removeListener : this.addListener,
			s = e ? this.removeListeners : this.addListeners;
		if ("object" != typeof t || t instanceof RegExp)
			for (i = n.length; i--;) o.call(this, t, n[i]);
		else
			for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
		return this
	}, i.removeEvent = function(e) {
		var t, n = typeof e,
			i = this._getEvents();
		if ("string" === n) delete i[e];
		else if ("object" === n)
			for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
		else delete this._events;
		return this
	}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
		var n, i, r, o, s = this.getListenersAsObject(e);
		for (r in s)
			if (s.hasOwnProperty(r))
				for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
		return this
	}, i.trigger = n("emitEvent"), i.emit = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, i.setOnceReturnValue = function(e) {
		return this._onceReturnValue = e, this
	}, i._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, i._getEvents = function() {
		return this._events || (this._events = {})
	}, "function" == typeof define && define.amd ? define(function() {
		return e
	}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
function(e) {
	"use strict";
	var t = document.documentElement,
		n = function() {};
	t.addEventListener ? n = function(e, t, n) {
		e.addEventListener(t, n, !1)
	} : t.attachEvent && (n = function(t, n, i) {
		t[n + i] = i.handleEvent ? function() {
			var t = e.event;
			t.target = t.target || t.srcElement, i.handleEvent.call(i, t)
		} : function() {
			var n = e.event;
			n.target = n.target || n.srcElement, i.call(t, n)
		}, t.attachEvent("on" + n, t[n + i])
	});
	var i = function() {};
	t.removeEventListener ? i = function(e, t, n) {
		e.removeEventListener(t, n, !1)
	} : t.detachEvent && (i = function(e, t, n) {
		e.detachEvent("on" + t, e[t + n]);
		try {
			delete e[t + n]
		} catch (i) {
			e[t + n] = void 0
		}
	});
	var r = {
		bind: n,
		unbind: i
	};
	"function" == typeof define && define.amd ? define(r) : e.eventie = r
}(this),
function(e) {
	"use strict";

	function t(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function n(e) {
		return "[object Array]" === c.call(e)
	}

	function i(e) {
		var t = [];
		if (n(e)) t = e;
		else if ("number" == typeof e.length)
			for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
		else t.push(e);
		return t
	}

	function r(e, n) {
		function r(e, n, s) {
			if (!(this instanceof r)) return new r(e, n);
			"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = t({}, this.options), "function" == typeof n ? s = n : t(this.options, n), s && this.on("always", s), this.getImages(), o && (this.jqDeferred = new o.Deferred);
			var a = this;
			setTimeout(function() {
				a.check()
			})
		}

		function c(e) {
			this.img = e
		}
		r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
			this.images = [];
			for (var e = 0, t = this.elements.length; t > e; e++) {
				var n = this.elements[e];
				"IMG" === n.nodeName && this.addImage(n);
				for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
					var s = i[r];
					this.addImage(s)
				}
			}
		}, r.prototype.addImage = function(e) {
			var t = new c(e);
			this.images.push(t)
		}, r.prototype.check = function() {
			function e(e, r) {
				return t.options.debug && a && s.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
			}
			var t = this,
				n = 0,
				i = this.images.length;
			if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
			for (var r = 0; i > r; r++) {
				var o = this.images[r];
				o.on("confirm", e), o.check()
			}
		}, r.prototype.progress = function(e) {
			this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
			var t = this;
			setTimeout(function() {
				t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e)
			})
		}, r.prototype.complete = function() {
			var e = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var t = this;
			setTimeout(function() {
				if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
					var n = t.hasAnyBroken ? "reject" : "resolve";
					t.jqDeferred[n](t)
				}
			})
		}, o && (o.fn.imagesLoaded = function(e, t) {
			var n = new r(this, e, t);
			return n.jqDeferred.promise(o(this))
		});
		var f = {};
		return c.prototype = new e, c.prototype.check = function() {
			var e = f[this.img.src];
			if (e) return this.useCached(e), void 0;
			if (f[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
			var t = this.proxyImage = new Image;
			n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.img.src
		}, c.prototype.useCached = function(e) {
			if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
			else {
				var t = this;
				e.on("confirm", function(e) {
					return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
				})
			}
		}, c.prototype.confirm = function(e, t) {
			this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
		}, c.prototype.handleEvent = function(e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, c.prototype.onload = function() {
			this.confirm(!0, "onload"), this.unbindProxyEvents()
		}, c.prototype.onerror = function() {
			this.confirm(!1, "onerror"), this.unbindProxyEvents()
		}, c.prototype.unbindProxyEvents = function() {
			n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
		}, r
	}
	var o = e.jQuery,
		s = e.console,
		a = s !== void 0,
		c = Object.prototype.toString;
	"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r) : e.imagesLoaded = r(e.EventEmitter, e.eventie)
}(window);
(function(d) {
	"function" === typeof define && define.amd ? define(["jquery"], d) : d(jQuery)
})(function(d, f) {
	d.infinitescroll = function(a, b, c) {
		this.element = d(c);
		this._create(a, b) || (this.failed = !0)
	};
	d.infinitescroll.defaults = {
		loading: {
			finished: f,
			finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
			img: "",
			msg: null,
			msgText: "<em>Loading the next set of posts...</em>",
			selector: null,
			speed: "fast",
			start: f
		},
		state: {
			isDuringAjax: !1,
			isInvalidPage: !1,
			isDestroyed: !1,
			isDone: !1,
			isPaused: !1,
			isBeyondMaxPage: !1,
			currPage: 1
		},
		debug: !1,
		behavior: f,
		binder: d(window),
		nextSelector: "div.navigation a:first",
		navSelector: "div.navigation",
		contentSelector: null,
		extraScrollPx: 150,
		itemSelector: "div.post",
		animate: !1,
		pathParse: f,
		dataType: "html",
		appendCallback: !0,
		bufferPx: 40,
		errorCallback: function() {},
		infid: 0,
		pixelsFromNavToBottom: f,
		path: f,
		prefill: !1,
		maxPage: f
	};
	d.infinitescroll.prototype = {
		_binding: function(a) {
			var b = this,
				c = b.options;
			c.v = "2.0b2.120520";
			if (c.behavior && this["_binding_" + c.behavior] !== f) this["_binding_" + c.behavior].call(this);
			else {
				if ("bind" !== a && "unbind" !== a) return this._debug("Binding value  " + a + " not valid"), !1;
				if ("unbind" === a) this.options.binder.unbind("smartscroll.infscr." + b.options.infid);
				else this.options.binder[a]("smartscroll.infscr." + b.options.infid, function() {
					b.scroll()
				});
				this._debug("Binding", a)
			}
		},
		_create: function(a, b) {
			var c = d.extend(!0, {}, d.infinitescroll.defaults, a);
			this.options = c;
			var e = d(window);
			if (!this._validate(a)) return !1;
			var g = d(c.nextSelector).attr("href");
			if (!g) return this._debug("Navigation selector not found"), !1;
			c.path = c.path || this._determinepath(g);
			c.contentSelector = c.contentSelector || this.element;
			c.loading.selector = c.loading.selector || c.contentSelector;
			c.loading.msg = c.loading.msg || d('<div id="infscr-loading"><img alt="Loading..." src="' + c.loading.img + '" /><div>' + c.loading.msgText + "</div></div>");
			(new Image).src = c.loading.img;
			c.pixelsFromNavToBottom === f && (c.pixelsFromNavToBottom = d(document).height() - d(c.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + c.pixelsFromNavToBottom));
			var h = this;
			c.loading.start = c.loading.start || function() {
				d(c.navSelector).hide();
				c.loading.msg.insertAfter(c.loading.selector).show(c.loading.speed, d.proxy(function() {
					this.beginAjax(c)
				}, h))
			};
			c.loading.finished = c.loading.finished || function() {
				c.state.isBeyondMaxPage || c.loading.msg.fadeOut(c.loading.speed)
			};
			c.callback = function(a, g, h) {
				c.behavior && a["_callback_" + c.behavior] !== f && a["_callback_" + c.behavior].call(d(c.contentSelector)[0], g, h);
				b && b.call(d(c.contentSelector)[0], g, c, h);
				c.prefill && e.bind("resize.infinite-scroll", a._prefill)
			};
			a.debug && (!Function.prototype.bind || "object" !== typeof console && "function" !== typeof console || "object" !== typeof console.log || "log info warn error assert dir clear profile profileEnd".split(" ").forEach(function(a) {
				console[a] = this.call(console[a], console)
			}, Function.prototype.bind));
			this._setup();
			c.prefill && this._prefill();
			return !0
		},
		_prefill: function() {
			var a = this,
				b = d(window);
			this._prefill = function() {
				a.options.contentSelector.height() <= b.height() && a.scroll();
				b.bind("resize.infinite-scroll", function() {
					a.options.contentSelector.height() <= b.height() && (b.unbind("resize.infinite-scroll"), a.scroll())
				})
			};
			this._prefill()
		},
		_debug: function() {
			!0 === this.options.debug && ("undefined" !== typeof console && "function" === typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" === typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" === typeof console || "object" !== typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
		},
		_determinepath: function(a) {
			var b = this.options;
			if (b.behavior && this["_determinepath_" + b.behavior] !== f) return this["_determinepath_" + b.behavior].call(this, a);
			if (b.pathParse) return this._debug("pathParse manual"), b.pathParse(a, this.options.state.currPage + 1);
			if (a.match(/^(.*2?)\b2\b(.*?$)/)) a = a.match(/^(.*2?)\b2\b(.*?$)/).slice(1);
			else if (a.match(/^(.*?)\b2\b(.*?$)/)) a = a.match(/^(.*?)\b2\b(.*?$)/).slice(1);
			else if (a.match(/^(.*?)2(.*?$)/)) {
				if (a.match(/^(.*?page=)2(\/.*|$)/)) return a = a.match(/^(.*?page=)2(\/.*|$)/).slice(1);
				a = a.match(/^(.*?)2(.*?$)/).slice(1)
			} else {
				if (a.match(/^(.*?page=)1(\/.*|$)/)) return a = a.match(/^(.*?page=)1(\/.*|$)/).slice(1);
				this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
				b.state.isInvalidPage = !0
			}
			this._debug("determinePath", a);
			return a
		},
		_error: function(a) {
			var b = this.options;
			b.behavior && this["_error_" + b.behavior] !== f ? this["_error_" + b.behavior].call(this, a) : ("destroy" !== a && "end" !== a && (a = "unknown"), this._debug("Error", a), ("end" === a || b.state.isBeyondMaxPage) && this._showdonemsg(), b.state.isDone = !0, b.state.currPage = 1, b.state.isPaused = !1, b.state.isBeyondMaxPage = !1, this._binding("unbind"))
		},
		_loadcallback: function(a, b, c) {
			var e = this.options,
				g = this.options.callback,
				h = e.state.isDone ? "done" : e.appendCallback ? "append" : "no-append";
			if (e.behavior && this["_loadcallback_" + e.behavior] !== f) this["_loadcallback_" + e.behavior].call(this, a, b);
			else {
				switch (h) {
					case "done":
						return this._showdonemsg(), !1;
					case "no-append":
						"html" === e.dataType && (b = d("<div>" + b + "</div>").find(e.itemSelector));
						break;
					case "append":
						h = a.children();
						if (0 === h.length) return this._error("end");
						for (b = document.createDocumentFragment(); a[0].firstChild;) b.appendChild(a[0].firstChild);
						this._debug("contentSelector", d(e.contentSelector)[0]);
						d(e.contentSelector)[0].appendChild(b);
						b = h.get()
				}
				e.loading.finished.call(d(e.contentSelector)[0], e);
				e.animate && (a = d(window).scrollTop() + d(e.loading.msg).height() + e.extraScrollPx + "px", d("html,body").animate({
					scrollTop: a
				}, 800, function() {
					e.state.isDuringAjax = !1
				}));
				e.animate || (e.state.isDuringAjax = !1);
				g(this, b, c);
				e.prefill && this._prefill()
			}
		},
		_nearbottom: function() {
			var a = this.options,
				b = 0 + d(document).height() - a.binder.scrollTop() - d(window).height();
			if (a.behavior && this["_nearbottom_" + a.behavior] !== f) return this["_nearbottom_" + a.behavior].call(this);
			this._debug("math:", b, a.pixelsFromNavToBottom);
			return b - a.bufferPx < a.pixelsFromNavToBottom
		},
		_pausing: function(a) {
			var b = this.options;
			if (b.behavior && this["_pausing_" + b.behavior] !== f) this["_pausing_" + b.behavior].call(this, a);
			else {
				"pause" !== a && "resume" !== a && null !== a && this._debug("Invalid argument. Toggling pause value instead");
				switch (!a || "pause" !== a && "resume" !== a ? "toggle" : a) {
					case "pause":
						b.state.isPaused = !0;
						break;
					case "resume":
						b.state.isPaused = !1;
						break;
					case "toggle":
						b.state.isPaused = !b.state.isPaused
				}
				this._debug("Paused", b.state.isPaused);
				return !1
			}
		},
		_setup: function() {
			var a = this.options;
			if (a.behavior && this["_setup_" + a.behavior] !== f) this["_setup_" + a.behavior].call(this);
			else return this._binding("bind"), !1
		},
		_showdonemsg: function() {
			var a = this.options;
			a.behavior && this["_showdonemsg_" + a.behavior] !== f ? this["_showdonemsg_" + a.behavior].call(this) : (a.loading.msg.find(".loading-spinner").hide().parent().find(".loading-msg").html(a.loading.finishedMsg).animate({
				opacity: 1
			}, 2E3, function() {
				d(this).parent().fadeOut(a.loading.speed)
			}), a.errorCallback.call(d(a.contentSelector)[0], "done"))
		},
		_validate: function(a) {
			for (var b in a)
				if (b.indexOf && -1 < b.indexOf("Selector") && 0 === d(a[b]).length) return this._debug("Your " + b + " found no elements."), !1;
			return !0
		},
		bind: function() {
			this._binding("bind")
		},
		destroy: function() {
			this.options.state.isDestroyed = !0;
			this.options.loading.finished();
			return this._error("destroy")
		},
		pause: function() {
			this._pausing("pause")
		},
		resume: function() {
			this._pausing("resume")
		},
		beginAjax: function(a) {
			var b = this,
				c = a.path,
				e, g, h;
			a.state.currPage++;
			if (a.maxPage !== f && a.state.currPage > a.maxPage) a.state.isBeyondMaxPage = !0, this.destroy();
			else switch (e = d(a.contentSelector).is("table, tbody") ? d("<tbody/>") : d("<div/>"), g = "function" === typeof c ? c(a.state.currPage) : c.join(a.state.currPage), b._debug("heading into ajax", g), c = "html" === a.dataType || "json" === a.dataType ? a.dataType : "html+callback", a.appendCallback && "html" === a.dataType && (c += "+callback"), c) {
				case "html+callback":
					b._debug("Using HTML via .load() method");
					e.load(g + " " + a.itemSelector, f, function(a) {
						b._loadcallback(e, a, g)
					});
					break;
				case "html":
					b._debug("Using " + c.toUpperCase() + " via $.ajax() method");
					d.ajax({
						url: g,
						dataType: a.dataType,
						complete: function(a, c) {
							(h = "undefined" !== typeof a.isResolved ? a.isResolved() : "success" === c || "notmodified" === c) ? b._loadcallback(e, a.responseText, g) : b._error("end")
						}
					});
					break;
				case "json":
					b._debug("Using " + c.toUpperCase() + " via $.ajax() method"), d.ajax({
						dataType: "json",
						type: "GET",
						url: g,
						success: function(c, d, k) {
							h = "undefined" !== typeof k.isResolved ? k.isResolved() : "success" === d || "notmodified" === d;
							a.appendCallback ? a.template !== f ? (c = a.template(c), e.append(c), h ? b._loadcallback(e, c) : b._error("end")) : (b._debug("template must be defined."), b._error("end")) : h ? b._loadcallback(e, c, g) : b._error("end")
						},
						error: function() {
							b._debug("JSON ajax request failed.");
							b._error("end")
						}
					})
			}
		},
		retrieve: function(a) {
			a = a || null;
			var b = this.options;
			if (b.behavior && this["retrieve_" + b.behavior] !== f) this["retrieve_" + b.behavior].call(this, a);
			else {
				if (b.state.isDestroyed) return this._debug("Instance is destroyed"), !1;
				b.state.isDuringAjax = !0;
				b.loading.start.call(d(b.contentSelector)[0], b)
			}
		},
		scroll: function() {
			var a = this.options,
				b = a.state;
			a.behavior && this["scroll_" + a.behavior] !== f ? this["scroll_" + a.behavior].call(this) : b.isDuringAjax || b.isInvalidPage || b.isDone || b.isDestroyed || b.isPaused || this._nearbottom() && this.retrieve()
		},
		toggle: function() {
			this._pausing()
		},
		unbind: function() {
			this._binding("unbind")
		},
		update: function(a) {
			d.isPlainObject(a) && (this.options = d.extend(!0, this.options, a))
		}
	};
	d.fn.infinitescroll = function(a, b) {
		switch (typeof a) {
			case "string":
				var c = Array.prototype.slice.call(arguments, 1);
				this.each(function() {
					var b = d.data(this, "infinitescroll");
					if (!b || !d.isFunction(b[a]) || "_" === a.charAt(0)) return !1;
					b[a].apply(b, c)
				});
				break;
			case "object":
				this.each(function() {
					var c = d.data(this, "infinitescroll");
					c ? c.update(a) : (c = new d.infinitescroll(a, b, this), c.failed || d.data(this, "infinitescroll", c))
				})
		}
		return this
	};
	var k = d.event,
		l;
	k.special.smartscroll = {
		setup: function() {
			d(this).bind("scroll", k.special.smartscroll.handler)
		},
		teardown: function() {
			d(this).unbind("scroll", k.special.smartscroll.handler)
		},
		handler: function(a, b) {
			var c = this,
				e = arguments;
			a.type = "smartscroll";
			l && clearTimeout(l);
			l = setTimeout(function() {
				d(c).trigger("smartscroll", e)
			}, "execAsap" === b ? 0 : 100)
		}
	};
	d.fn.smartscroll = function(a) {
		return a ? this.bind("smartscroll", a) : this.trigger("smartscroll", ["execAsap"])
	}
});
var Froogaloop = (function() {
	function Froogaloop(iframe) {
		return new Froogaloop.fn.init(iframe);
	}
	var eventCallbacks = {}, hasWindowEvent = false,
		isReady = false,
		slice = Array.prototype.slice,
		playerDomain = '';
	Froogaloop.fn = Froogaloop.prototype = {
		element: null,
		init: function(iframe) {
			if (typeof iframe === "string") {
				iframe = document.getElementById(iframe);
			}
			this.element = iframe;
			playerDomain = getDomainFromUrl(this.element.getAttribute('src'));
			return this;
		},
		api: function(method, valueOrCallback) {
			if (!this.element || !method) {
				return false;
			}
			var self = this,
				element = self.element,
				target_id = element.id !== '' ? element.id : null,
				params = !isFunction(valueOrCallback) ? valueOrCallback : null,
				callback = isFunction(valueOrCallback) ? valueOrCallback : null;
			if (callback) {
				storeCallback(method, callback, target_id);
			}
			postMessage(method, params, element);
			return self;
		},
		addEvent: function(eventName, callback) {
			if (!this.element) {
				return false;
			}
			var self = this,
				element = self.element,
				target_id = element.id !== '' ? element.id : null;
			storeCallback(eventName, callback, target_id);
			if (eventName != 'ready') {
				postMessage('addEventListener', eventName, element);
			} else if (eventName == 'ready' && isReady) {
				callback.call(null, target_id);
			}
			return self;
		},
		removeEvent: function(eventName) {
			if (!this.element) {
				return false;
			}
			var self = this,
				element = self.element,
				target_id = element.id !== '' ? element.id : null,
				removed = removeCallback(eventName, target_id);
			if (eventName != 'ready' && removed) {
				postMessage('removeEventListener', eventName, element);
			}
		}
	};

	function postMessage(method, params, target) {
		if (!target.contentWindow.postMessage) {
			return false;
		}
		var url = target.getAttribute('src').split('?')[0],
			data = JSON.stringify({
				method: method,
				value: params
			});
		if (url.substr(0, 2) === '//') {
			url = window.location.protocol + url;
		}
		target.contentWindow.postMessage(data, url);
	}

	function onMessageReceived(event) {
		var data, method;
		try {
			data = JSON.parse(event.data);
			method = data.event || data.method;
		} catch (e) {}
		if (method == 'ready' && !isReady) {
			isReady = true;
		}
		if (event.origin != playerDomain) {
			return false;
		}
		var value = data.value,
			eventData = data.data,
			target_id = target_id === '' ? null : data.player_id,
			callback = getCallback(method, target_id),
			params = [];
		if (!callback) {
			return false;
		}
		if (value !== undefined) {
			params.push(value);
		}
		if (eventData) {
			params.push(eventData);
		}
		if (target_id) {
			params.push(target_id);
		}
		return params.length > 0 ? callback.apply(null, params) : callback.call();
	}

	function storeCallback(eventName, callback, target_id) {
		if (target_id) {
			if (!eventCallbacks[target_id]) {
				eventCallbacks[target_id] = {};
			}
			eventCallbacks[target_id][eventName] = callback;
		} else {
			eventCallbacks[eventName] = callback;
		}
	}

	function getCallback(eventName, target_id) {
		if (target_id) {
			return eventCallbacks[target_id][eventName];
		} else {
			return eventCallbacks[eventName];
		}
	}

	function removeCallback(eventName, target_id) {
		if (target_id && eventCallbacks[target_id]) {
			if (!eventCallbacks[target_id][eventName]) {
				return false;
			}
			eventCallbacks[target_id][eventName] = null;
		} else {
			if (!eventCallbacks[eventName]) {
				return false;
			}
			eventCallbacks[eventName] = null;
		}
		return true;
	}

	function getDomainFromUrl(url) {
		if (url.substr(0, 2) === '//') {
			url = window.location.protocol + url;
		}
		var url_pieces = url.split('/'),
			domain_str = '';
		for (var i = 0, length = url_pieces.length; i < length; i++) {
			if (i < 3) {
				domain_str += url_pieces[i];
			} else {
				break;
			}
			if (i < 2) {
				domain_str += '/';
			}
		}
		return domain_str;
	}

	function isFunction(obj) {
		return !!(obj && obj.constructor && obj.call && obj.apply);
	}

	function isArray(obj) {
		return toString.call(obj) === '[object Array]';
	}
	Froogaloop.fn.init.prototype = Froogaloop.fn;
	if (window.addEventListener) {
		window.addEventListener('message', onMessageReceived, false);
	} else {
		window.attachEvent('onmessage', onMessageReceived);
	}
	return (window.Froogaloop = window.$f = Froogaloop);
})();
(function(root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(root.jQuery);
	}
}(this, function($) {
	var CanvasRenderer = function(el, options) {
		var cachedBackground;
		var canvas = document.createElement('canvas');
		el.appendChild(canvas);
		if (typeof(G_vmlCanvasManager) !== 'undefined') {
			G_vmlCanvasManager.initElement(canvas);
		}
		var ctx = canvas.getContext('2d');
		canvas.width = canvas.height = options.size;
		var scaleBy = 1;
		if (window.devicePixelRatio > 1) {
			scaleBy = window.devicePixelRatio;
			canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
			canvas.width = canvas.height = options.size * scaleBy;
			ctx.scale(scaleBy, scaleBy);
		}
		ctx.translate(options.size / 2, options.size / 2);
		ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);
		var radius = (options.size - options.lineWidth) / 2;
		if (options.scaleColor && options.scaleLength) {
			radius -= options.scaleLength + 2;
		}
		Date.now = Date.now || function() {
			return +(new Date());
		};
		var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(-1, percent || 0), 1);
			var isNegative = percent <= 0 ? true : false;
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);
			ctx.strokeStyle = color;
			ctx.lineWidth = lineWidth;
			ctx.stroke();
		};
		var drawScale = function() {
			var offset;
			var length;
			ctx.lineWidth = 1;
			ctx.fillStyle = options.scaleColor;
			ctx.save();
			for (var i = 24; i > 0; --i) {
				if (i % 6 === 0) {
					length = options.scaleLength;
					offset = 0;
				} else {
					length = options.scaleLength * 0.6;
					offset = options.scaleLength - length;
				}
				ctx.fillRect(-options.size / 2 + offset, 0, length, 1);
				ctx.rotate(Math.PI / 12);
			}
			ctx.restore();
		};
		var reqAnimationFrame = (function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
		}());
		var drawBackground = function() {
			if (options.scaleColor) drawScale();
			if (options.trackColor) drawCircle(options.trackColor, options.lineWidth, 1);
		};
		this.getCanvas = function() {
			return canvas;
		};
		this.getCtx = function() {
			return ctx;
		};
		this.clear = function() {
			ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
		};
		this.draw = function(percent) {
			if ( !! options.scaleColor || !! options.trackColor) {
				if (ctx.getImageData && ctx.putImageData) {
					if (!cachedBackground) {
						drawBackground();
						cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
					} else {
						ctx.putImageData(cachedBackground, 0, 0);
					}
				} else {
					this.clear();
					drawBackground();
				}
			} else {
				this.clear();
			}
			ctx.lineCap = options.lineCap;
			var color;
			if (typeof(options.barColor) === 'function') {
				color = options.barColor(percent);
			} else {
				color = options.barColor;
			}
			drawCircle(color, options.lineWidth, percent / 100);
		}.bind(this);
		this.animate = function(from, to) {
			var startTime = Date.now();
			options.onStart(from, to);
			var animation = function() {
				var process = Math.min(Date.now() - startTime, options.animate.duration);
				var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
				this.draw(currentValue);
				options.onStep(from, to, currentValue);
				if (process >= options.animate.duration) {
					options.onStop(from, to);
				} else {
					reqAnimationFrame(animation);
				}
			}.bind(this);
			reqAnimationFrame(animation);
		}.bind(this);
	};
	var EasyPieChart = function(el, opts) {
		var defaultOptions = {
			barColor: '#ef1e25',
			trackColor: '#f9f9f9',
			scaleColor: '#dfe0e0',
			scaleLength: 5,
			lineCap: 'round',
			lineWidth: 3,
			size: 110,
			rotate: 0,
			animate: {
				duration: 1000,
				enabled: true
			},
			easing: function(x, t, b, c, d) {
				t = t / (d / 2);
				if (t < 1) {
					return c / 2 * t * t + b;
				}
				return -c / 2 * ((--t) * (t - 2) - 1) + b;
			},
			onStart: function(from, to) {
				return;
			},
			onStep: function(from, to, currentValue) {
				return;
			},
			onStop: function(from, to) {
				return;
			}
		};
		if (typeof(CanvasRenderer) !== 'undefined') {
			defaultOptions.renderer = CanvasRenderer;
		} else if (typeof(SVGRenderer) !== 'undefined') {
			defaultOptions.renderer = SVGRenderer;
		} else {
			throw new Error('Please load either the SVG- or the CanvasRenderer');
		}
		var options = {};
		var currentValue = 0;
		var init = function() {
			this.el = el;
			this.options = options;
			for (var i in defaultOptions) {
				if (defaultOptions.hasOwnProperty(i)) {
					options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
					if (typeof(options[i]) === 'function') {
						options[i] = options[i].bind(this);
					}
				}
			}
			if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
				options.easing = jQuery.easing[options.easing];
			} else {
				options.easing = defaultOptions.easing;
			}
			if (typeof(options.animate) === 'number') {
				options.animate = {
					duration: options.animate,
					enabled: true
				};
			}
			if (typeof(options.animate) === 'boolean' && !options.animate) {
				options.animate = {
					duration: 1000,
					enabled: options.animate
				};
			}
			this.renderer = new options.renderer(el, options);
			this.renderer.draw(currentValue);
			if (el.dataset && el.dataset.percent) {
				this.update(parseFloat(el.dataset.percent));
			} else if (el.getAttribute && el.getAttribute('data-percent')) {
				this.update(parseFloat(el.getAttribute('data-percent')));
			}
		}.bind(this);
		this.update = function(newValue) {
			newValue = parseFloat(newValue);
			if (options.animate.enabled) {
				this.renderer.animate(currentValue, newValue);
			} else {
				this.renderer.draw(newValue);
			}
			currentValue = newValue;
			return this;
		}.bind(this);
		this.disableAnimation = function() {
			options.animate.enabled = false;
			return this;
		};
		this.enableAnimation = function() {
			options.animate.enabled = true;
			return this;
		};
		init();
	};
	$.fn.easyPieChart = function(options) {
		return this.each(function() {
			var instanceOptions;
			if (!$.data(this, 'easyPieChart')) {
				instanceOptions = $.extend({}, options, $(this).data());
				$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
			}
		});
	};
}));
(function($) {
	$.fn.appear = function(fn, options) {
		var settings = $.extend({
			data: undefined,
			one: true,
			accX: 0,
			accY: 0
		}, options);
		return this.each(function() {
			var t = $(this);
			t.appeared = false;
			if (!fn) {
				t.trigger('appear', settings.data);
				return;
			}
			var w = $(window);
			var check = function() {
				if (!t.is(':visible')) {
					t.appeared = false;
					return;
				}
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;
				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();
				if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
					if (!t.appeared) t.trigger('appear', settings.data);
				} else {
					t.appeared = false;
				}
			};
			var modifiedFn = function() {
				t.appeared = true;
				if (settings.one) {
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}
				fn.apply(this, arguments);
			};
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);
			w.scroll(check);
			$.fn.appear.checks.push(check);
			(check)();
		});
	};
	$.extend($.fn.appear, {
		checks: [],
		timeout: null,
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if (length > 0)
				while (length--)($.fn.appear.checks[length])();
		},
		run: function() {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});
	$.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});
})(jQuery); + function($) {
	'use strict';

	function transitionEnd() {
		var el = document.createElement('bootstrap');
		var transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd otransitionend',
			'transition': 'transitionend'
		};
		for (var name in transEndEventNames) {
			if (el.style[name] !== undefined) {
				return {
					end: transEndEventNames[name]
				}
			}
		}
		return false;
	}
	$.fn.emulateTransitionEnd = function(duration) {
		var called = false,
			$el = this;
		$(this).one($.support.transition.end, function() {
			called = true
		});
		var callback = function() {
			if (!called) $($el).trigger($.support.transition.end)
		};
		setTimeout(callback, duration);
		return this;
	};
	$(function() {
		$.support.transition = transitionEnd();
	})
}(jQuery); + function($) {
	'use strict';
	var Collapse = function(element, options) {
		this.$element = $(element);
		this.options = $.extend({}, Collapse.DEFAULTS, options);
		this.transitioning = null;
		if (this.options.parent) this.$parent = $(this.options.parent);
		if (this.options.toggle) this.toggle();
	};
	Collapse.DEFAULTS = {
		toggle: true
	};
	Collapse.prototype.dimension = function() {
		var hasWidth = this.$element.hasClass('width');
		return hasWidth ? 'width' : 'height';
	};
	Collapse.prototype.show = function() {
		if (this.transitioning || this.$element.hasClass('in')) return;
		var startEvent = $.Event('show.bs.collapse');
		this.$element.trigger(startEvent);
		if (startEvent.isDefaultPrevented()) return;
		var actives = this.$parent && this.$parent.find('> .fusion-panel > .in');
		if (actives && actives.length) {
			var hasData = actives.data('bs.collapse');
			if (hasData && hasData.transitioning) return;
			actives.collapse('hide');
			hasData || actives.data('bs.collapse', null)
		}
		var dimension = this.dimension();
		this.$element.removeClass('collapse').addClass('collapsing')[dimension](0);
		this.transitioning = 1;
		var complete = function() {
			this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('auto');
			this.transitioning = 0;
			this.$element.trigger('shown.bs.collapse');
		};
		if (!$.support.transition) return complete.call(this);
		var scrollSize = $.camelCase(['scroll', dimension].join('-'));
		this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);
	};
	Collapse.prototype.hide = function() {
		if (this.transitioning || !this.$element.hasClass('in')) return;
		var startEvent = $.Event('hide.bs.collapse');
		this.$element.trigger(startEvent);
		if (startEvent.isDefaultPrevented()) return;
		var dimension = this.dimension();
		this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
		this.$element.addClass('collapsing').removeClass('collapse').removeClass('in');
		this.transitioning = 1;
		var complete = function() {
			this.transitioning = 0;
			this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse');
		};
		if (!$.support.transition) return complete.call(this);
		this.$element[dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350);
	};
	Collapse.prototype.toggle = function() {
		this[this.$element.hasClass('in') ? 'hide' : 'show']();
	};
	var old = $.fn.collapse;
	$.fn.collapse = function(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data('bs.collapse');
			var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);
			if (!data && options.toggle && option == 'show') option = !option;
			if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)));
			if (typeof option == 'string') data[option]();
		})
	};
	$.fn.collapse.Constructor = Collapse;
	$.fn.collapse.noConflict = function() {
		$.fn.collapse = old;
		return this;
	};
	$(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function(e) {
		var $this = $(this),
			href;
		var target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
		var $target = $(target);
		var data = $target.data('bs.collapse');
		var option = data ? 'toggle' : $this.data();
		var parent = $this.attr('data-parent');
		var $parent = parent && $(parent);
		if (!data || !data.transitioning) {
			if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed');
			$this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed');
		}
		$target.collapse(option);
	});
	jQuery('click.bs.collapse.data-api, [data-toggle=collapse]').each(function() {
		var parent = jQuery(this).attr('data-parent');
		if (jQuery(this).parents('.panel-group').length == 0) {
			var random = Math.floor((Math.random() * 10) + 1);
			var single_panel = jQuery(this).parents('.fusion-panel');
			jQuery(this).attr('data-parent', 'accordian-' + random);
			jQuery(single_panel).wrap('<div class="accordian fusion-accordian fusion-single-accordian"><div class="panel-group" id="accordion-' + random + '"></div></div>');
		}
	});
}(jQuery); + function($) {
	'use strict';
	var Modal = function(element, options) {
		this.options = options;
		this.$element = $(element);
		this.$backdrop = '';
		this.isShown = null;
		if (this.options.remote) {
			this.$element.find('.modal-content').load(this.options.remote, $.proxy(function() {
				this.$element.trigger('loaded.bs.modal');
			}, this));
		}
	};
	Modal.DEFAULTS = {
		backdrop: true,
		keyboard: true,
		show: true
	};
	Modal.prototype.toggle = function(_relatedTarget) {
		return this[!this.isShown ? 'show' : 'hide'](_relatedTarget);
	};
	Modal.prototype.show = function(_relatedTarget) {
		var that = this;
		var e = $.Event('show.bs.modal', {
			relatedTarget: _relatedTarget
		});
		this.$element.trigger(e);
		if (this.isShown || e.isDefaultPrevented()) return;
		this.isShown = true;
		this.escape();
		this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
		this.backdrop(function() {
			var transition = $.support.transition && that.$element.hasClass('fade');
			if (!that.$element.parent().length) {
				that.$element.appendTo(document.body);
			}
			that.$element.show().scrollTop(0);
			if (transition) {
				that.$element[0].offsetWidth;
			}
			that.$element.addClass('in').attr('aria-hidden', false);
			that.enforceFocus();
			var e = $.Event('shown.bs.modal', {
				relatedTarget: _relatedTarget
			});
			transition ? that.$element.find('.modal-dialog').one($.support.transition.end, function() {
				that.$element.focus().trigger(e);
			}).emulateTransitionEnd(300) : that.$element.focus().trigger(e);
		})
	};
	Modal.prototype.hide = function(e) {
		if (e) e.preventDefault();
		e = $.Event('hide.bs.modal');
		this.$element.trigger(e);
		if (!this.isShown || e.isDefaultPrevented()) return;
		this.isShown = false;
		this.escape();
		$(document).off('focusin.bs.modal');
		this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal');
		$.support.transition && this.$element.hasClass('fade') ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal();
	};
	Modal.prototype.enforceFocus = function() {
		$(document).off('focusin.bs.modal').on('focusin.bs.modal', $.proxy(function(e) {
			if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
				this.$element.focus();
			}
		}, this));
	};
	Modal.prototype.escape = function() {
		if (this.isShown && this.options.keyboard) {
			this.$element.on('keyup.dismiss.bs.modal', $.proxy(function(e) {
				e.which == 27 && this.hide();
			}, this));
		} else if (!this.isShown) {
			this.$element.off('keyup.dismiss.bs.modal');
		}
	};
	Modal.prototype.hideModal = function() {
		var that = this;
		this.$element.hide();
		this.backdrop(function() {
			that.removeBackdrop();
			that.$element.trigger('hidden.bs.modal');
		});
	};
	Modal.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove();
		this.$backdrop = null;
	};
	Modal.prototype.backdrop = function(callback) {
		var animate = this.$element.hasClass('fade') ? 'fade' : '';
		if (this.isShown && this.options.backdrop) {
			var doAnimate = $.support.transition && animate;
			this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body);
			this.$element.on('click.dismiss.bs.modal', $.proxy(function(e) {
				if (e.target !== e.currentTarget) return;
				this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
			}, this));
			if (doAnimate) this.$backdrop[0].offsetWidth;
			this.$backdrop.addClass('in');
			if (!callback) return;
			doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass('in');
			$.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
		} else if (callback) {
			callback();
		}
	};
	var old = $.fn.modal;
	$.fn.modal = function(option, _relatedTarget) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data('bs.modal');
			var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
			if (!data) $this.data('bs.modal', (data = new Modal(this, options)));
			if (typeof option == 'string') data[option](_relatedTarget);
			else if (options.show) data.show(_relatedTarget);
		});
	};
	$.fn.modal.Constructor = Modal;
	$.fn.modal.noConflict = function() {
		$.fn.modal = old;
		return this;
	};
	$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {
		var $this = $(this);
		var href = $this.attr('href');
		var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')));
		var option = $target.data('bs.modal') ? 'toggle' : $.extend({
			remote: !/#/.test(href) && href
		}, $target.data(), $this.data());
		if ($this.is('a')) e.preventDefault();
		$target.modal(option, this).one('hide', function() {
			$this.is(':visible') && $this.focus();
		});
	});
	$(document).on('show.bs.modal', '.modal', function() {
		$(document.body).addClass('modal-open')
	}).on('hidden.bs.modal', '.modal', function() {
		$(document.body).removeClass('modal-open')
	});
}(jQuery); + function($) {
	'use strict';
	var Tab = function(element) {
		this.element = $(element);
	};
	Tab.prototype.show = function() {
		var $this = this.element;
		var $ul = $this.closest('ul:not(.dropdown-menu)');
		var selector = $this.data('target');
		if (!selector) {
			selector = $this.attr('href');
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
		}
		if ($this.parent('li').hasClass('active')) return;
		var previous = $ul.find('.active:last a')[0];
		var e = $.Event('show.bs.tab', {
			relatedTarget: previous
		});
		$this.trigger(e);
		if (e.isDefaultPrevented()) return;
		var $target = $(selector);
		this.activate($this.parent('li'), $ul);
		this.activate($target, $target.parent(), function() {
			$this.trigger({
				type: 'shown.bs.tab',
				relatedTarget: previous
			});
		});
	};
	Tab.prototype.activate = function(element, container, callback) {
		var $active = container.find('> .active');
		var transition = callback && $.support.transition && $active.hasClass('fade');

		function next() {
			$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active');
			element.addClass('active');
			if (transition) {
				element[0].offsetWidth;
				element.addClass('in');
			} else {
				element.removeClass('fade');
			}
			if (element.parent('.dropdown-menu')) {
				element.closest('li.dropdown').addClass('active');
			}
			callback && callback();
		}
		transition ? $active.one($.support.transition.end, next).emulateTransitionEnd(150) : next();
		$active.removeClass('in');
	};
	var old = $.fn.tab;
	$.fn.tab = function(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data('bs.tab');
			if (!data) $this.data('bs.tab', (data = new Tab(this)));
			if (typeof option == 'string') data[option]();
		});
	};
	$.fn.tab.Constructor = Tab;
	$.fn.tab.noConflict = function() {
		$.fn.tab = old;
		return this;
	};
	$(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
		e.preventDefault();
		$(this).tab('show');
	});
}(jQuery); + function($) {
	'use strict';
	var Tooltip = function(element, options) {
		this.type = '';
		this.options = '';
		this.enabled = '';
		this.timeout = '';
		this.hoverState = '';
		this.$element = null;
		this.init('tooltip', element, options);
	};
	Tooltip.DEFAULTS = {
		animation: true,
		placement: 'top',
		selector: false,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: 'hover focus',
		title: '',
		delay: 0,
		html: false,
		container: false
	};
	Tooltip.prototype.init = function(type, element, options) {
		this.enabled = true;
		this.type = type;
		this.$element = $(element);
		this.options = this.getOptions(options);
		var triggers = this.options.trigger.split(' ');
		for (var i = triggers.length; i--;) {
			var trigger = triggers[i];
			if (trigger == 'click') {
				this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
			} else if (trigger != 'manual') {
				var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
				var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';
				this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
				this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
			}
		}
		this.options.selector ? (this._options = $.extend({}, this.options, {
			trigger: 'manual',
			selector: ''
		})) : this.fixTitle();
	};
	Tooltip.prototype.getDefaults = function() {
		return Tooltip.DEFAULTS;
	};
	Tooltip.prototype.getOptions = function(options) {
		options = $.extend({}, this.getDefaults(), this.$element.data(), options);
		if (options.delay && typeof options.delay == 'number') {
			options.delay = {
				show: options.delay,
				hide: options.delay
			};
		}
		return options;
	};
	Tooltip.prototype.getDelegateOptions = function() {
		var options = {};
		var defaults = this.getDefaults();
		this._options && $.each(this._options, function(key, value) {
			if (defaults[key] != value) options[key] = value;
		});
		return options;
	};
	Tooltip.prototype.enter = function(obj) {
		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
		clearTimeout(self.timeout);
		self.hoverState = 'in';
		if (!self.options.delay || !self.options.delay.show) return self.show();
		self.timeout = setTimeout(function() {
			if (self.hoverState == 'in') self.show();
		}, self.options.delay.show);
	};
	Tooltip.prototype.leave = function(obj) {
		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
		clearTimeout(self.timeout);
		self.hoverState = 'out';
		if (!self.options.delay || !self.options.delay.hide) return self.hide();
		self.timeout = setTimeout(function() {
			if (self.hoverState == 'out') self.hide();
		}, self.options.delay.hide);
	};
	Tooltip.prototype.show = function() {
		var e = $.Event('show.bs.' + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			if (e.isDefaultPrevented()) return;
			var that = this;
			var $tip = this.tip();
			this.setContent();
			if (this.options.animation) $tip.addClass('fade');
			var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
			var autoToken = /\s?auto?\s?/i;
			var autoPlace = autoToken.test(placement);
			if (autoPlace) placement = placement.replace(autoToken, '') || 'top';
			$tip.detach().css({
				top: 0,
				left: 0,
				display: 'block'
			}).addClass(placement).addClass(this.$element.data('class'));
			this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
			var pos = this.getPosition();
			var actualWidth = $tip[0].offsetWidth;
			var actualHeight = $tip[0].offsetHeight;
			if (autoPlace) {
				var $parent = this.$element.parent();
				var orgPlacement = placement;
				var docScroll = document.documentElement.scrollTop || document.body.scrollTop;
				var parentWidth = this.options.container == 'body' ? window.innerWidth : $parent.outerWidth();
				var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight();
				var parentLeft = this.options.container == 'body' ? 0 : $parent.offset().left;
				placement = placement == 'bottom' && pos.top + pos.height + actualHeight - docScroll > parentHeight ? 'top' : placement == 'top' && pos.top - docScroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentWidth ? 'left' : placement == 'left' && pos.left - actualWidth < parentLeft ? 'right' : placement;
				$tip.removeClass(orgPlacement).addClass(placement);
			}
			var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
			this.applyPlacement(calculatedOffset, placement);
			this.hoverState = null;
			var complete = function() {
				that.$element.trigger('shown.bs.' + that.type);
			};
			$.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete();
		}
	};
	Tooltip.prototype.applyPlacement = function(offset, placement) {
		var replace;
		var $tip = this.tip();
		var width = $tip[0].offsetWidth;
		var height = $tip[0].offsetHeight;
		var marginTop = parseInt($tip.css('margin-top'), 10);
		var marginLeft = parseInt($tip.css('margin-left'), 10);
		if (isNaN(marginTop)) marginTop = 0;
		if (isNaN(marginLeft)) marginLeft = 0;
		offset.top = offset.top + marginTop;
		offset.left = offset.left + marginLeft;
		$.offset.setOffset($tip[0], $.extend({
			using: function(props) {
				$tip.css({
					top: Math.round(props.top),
					left: Math.round(props.left)
				});
			}
		}, offset), 0);
		$tip.addClass('in');
		var actualWidth = $tip[0].offsetWidth;
		var actualHeight = $tip[0].offsetHeight;
		if (placement == 'top' && actualHeight != height) {
			replace = true;
			offset.top = offset.top + height - actualHeight;
		}
		if (/bottom|top/.test(placement)) {
			var delta = 0;
			if (offset.left < 0) {
				delta = offset.left * -2;
				offset.left = 0;
				$tip.offset(offset);
				actualWidth = $tip[0].offsetWidth;
				actualHeight = $tip[0].offsetHeight;
			}
			this.replaceArrow(delta - width + actualWidth, actualWidth, 'left');
		} else {
			this.replaceArrow(actualHeight - height, actualHeight, 'top');
		}
		if (replace) $tip.offset(offset);
	};
	Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
		this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '');
	};
	Tooltip.prototype.setContent = function() {
		var $tip = this.tip();
		var title = this.getTitle();
		$tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
		$tip.removeClass('fade in top bottom left right');
	};
	Tooltip.prototype.hide = function() {
		var that = this;
		var $tip = this.tip();
		var e = $.Event('hide.bs.' + this.type);

		function complete() {
			if (that.hoverState != 'in') $tip.detach();
			that.$element.trigger('hidden.bs.' + that.type);
		};
		this.$element.trigger(e);
		if (e.isDefaultPrevented()) return;
		$tip.removeClass('in');
		$.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete();
		this.hoverState = null;
		return this;
	};
	Tooltip.prototype.fixTitle = function() {
		var $e = this.$element;
		if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
			$e.attr('data-original-title', $e.attr('title') || '');
		}
	};
	Tooltip.prototype.hasContent = function() {
		return this.getTitle();
	};
	Tooltip.prototype.getPosition = function() {
		var el = this.$element[0];
		return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
			width: el.offsetWidth,
			height: el.offsetHeight
		}, this.$element.offset());
	};
	Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
		return placement == 'bottom' ? {
			top: pos.top + pos.height,
			left: pos.left + pos.width / 2 - actualWidth / 2
		} : placement == 'top' ? {
			top: pos.top - actualHeight,
			left: pos.left + pos.width / 2 - actualWidth / 2
		} : placement == 'left' ? {
			top: pos.top + pos.height / 2 - actualHeight / 2,
			left: pos.left - actualWidth
		} : {
			top: pos.top + pos.height / 2 - actualHeight / 2,
			left: pos.left + pos.width
		};
	};
	Tooltip.prototype.getTitle = function() {
		var title;
		var $e = this.$element;
		var o = this.options;
		title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);
		return title;
	};
	Tooltip.prototype.tip = function() {
		return this.$tip = this.$tip || $(this.options.template);
	};
	Tooltip.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
	};
	Tooltip.prototype.validate = function() {
		if (!this.$element[0].parentNode) {
			this.hide();
			this.$element = null;
			this.options = null;
		}
	};
	Tooltip.prototype.enable = function() {
		this.enabled = true;
	};
	Tooltip.prototype.disable = function() {
		this.enabled = false;
	};
	Tooltip.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled;
	};
	Tooltip.prototype.toggle = function(e) {
		var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this;
		self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
	};
	Tooltip.prototype.destroy = function() {
		clearTimeout(this.timeout);
		this.hide().$element.off('.' + this.type).removeData('bs.' + this.type);
	};
	var old = $.fn.tooltip;
	$.fn.tooltip = function(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data('bs.tooltip');
			var options = typeof option == 'object' && option;
			if (!data && option == 'destroy') return;
			if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};
	$.fn.tooltip.Constructor = Tooltip;
	$.fn.tooltip.noConflict = function() {
		$.fn.tooltip = old;
		return this;
	};
}(jQuery); + function($) {
	'use strict';
	var Popover = function(element, options) {
		this.init('popover', element, options);
	};
	if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');
	Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
		placement: 'right',
		trigger: 'click',
		content: '',
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});
	Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
	Popover.prototype.constructor = Popover;
	Popover.prototype.getDefaults = function() {
		return Popover.DEFAULTS;
	};
	Popover.prototype.setContent = function() {
		var $tip = this.tip();
		var title = this.getTitle();
		var content = this.getContent();
		$tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
		$tip.find('.popover-content')[this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'](content);
		$tip.removeClass('fade top bottom left right in');
		if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
	};
	Popover.prototype.hasContent = function() {
		return this.getTitle() || this.getContent();
	};
	Popover.prototype.getContent = function() {
		var $e = this.$element;
		var o = this.options;
		return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
	};
	Popover.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find('.arrow');
	};
	Popover.prototype.tip = function() {
		if (!this.$tip) this.$tip = $(this.options.template);
		return this.$tip;
	};
	var old = $.fn.popover;
	$.fn.popover = function(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data('bs.popover');
			var options = typeof option == 'object' && option;
			if (!data && option == 'destroy') return;
			if (!data) $this.data('bs.popover', (data = new Popover(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};
	$.fn.popover.Constructor = Popover;
	$.fn.popover.noConflict = function() {
		$.fn.popover = old;
		return this;
	};
}(jQuery);
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function(x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function(x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function(x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInCubic: function(x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function(x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function(x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function(x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function(x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function(x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function(x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function(x, t, b, c, d) {
		return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function(x, t, b, c, d) {
		return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function(x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function(x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function(x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function(x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function(x, t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
		}
	},
	easeInOutBounce: function(x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

function insertParam(url, parameterName, parameterValue, atStart) {
	replaceDuplicates = true;
	if (url.indexOf('#') > 0) {
		var cl = url.indexOf('#');
		urlhash = url.substring(url.indexOf('#'), url.length);
	} else {
		urlhash = '';
		cl = url.length;
	}
	sourceUrl = url.substring(0, cl);
	var urlParts = sourceUrl.split("?");
	var newQueryString = "";
	if (urlParts.length > 1) {
		var parameters = urlParts[1].split("&");
		for (var i = 0;
			(i < parameters.length); i++) {
			var parameterParts = parameters[i].split("=");
			if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
				if (newQueryString == "") {
					newQueryString = "?" + parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
				} else {
					newQueryString += "&";
					newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
				}
			}
		}
	}
	if (newQueryString == "")
		newQueryString = "?";
	if (atStart) {
		newQueryString = '?' + parameterName + "=" + parameterValue + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
	} else {
		if (newQueryString !== "" && newQueryString != '?')
			newQueryString += "&";
		newQueryString += parameterName + "=" + (parameterValue ? parameterValue : '');
	}
	return urlParts[0] + newQueryString + urlhash;
}

function ytVidId(url) {
	var p = /^(?:https?:)?(\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	return (url.match(p)) ? RegExp.$1 : false;
}
jQuery(document).ready(function() {
	jQuery('.portfolio-wrapper').hide();
	jQuery('.portfolio-tabs ').hide();
	if (jQuery('.portfolio').length >= 1) {
		jQuery('#content').append('<div class="loading-container"><div class="loading-spinner"><div class="spinner-1"></div><div class="spinner-2"></div><div class="spinner-3"></div></div><div class="loading-msg">' + js_local_vars.portfolio_loading_text + '</div>');
	}
	var iframes = jQuery('iframe');
	jQuery.each(iframes, function(i, v) {
		var src = jQuery(this).attr('src');
		if (src) {
			if (!Number(js_local_vars.status_vimeo) && src.indexOf('vimeo') >= 1) {
				jQuery(this).attr('id', 'player_' + (i + 1));
				var new_src = insertParam(src, 'api', '1', false);
				var new_src_2 = insertParam(new_src, 'player_id', 'player_' + (i + 1), false);
				jQuery(this).attr('src', new_src_2);
			}
			if (!Number(js_local_vars.status_yt) && ytVidId(src)) {
				jQuery(this).attr('id', 'player_' + (i + 1));
				jQuery(this).parent().wrap('<span class="play3" />');
				var new_src = insertParam(src, 'enablejsapi', '1', false);
				jQuery(this).attr('src', new_src);
				window.yt_vid_exists = true;
			}
		}
	});
	if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
		var tag = document.createElement('script');
		tag.src = window.location.protocol + "//www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}
});
var YT_ready = (function() {
	var onReady_funcs = [],
		api_isReady = false;
	return function(func, b_before) {
		if (func === true) {
			api_isReady = true;
			while (onReady_funcs.length) {
				onReady_funcs.shift()();
			}
		} else if (typeof func == "function") {
			if (api_isReady) func();
			else onReady_funcs[b_before ? "unshift" : "push"](func);
		}
	}
})();

function onYouTubePlayerAPIReady() {
	YT_ready(true);
}
var orig_logo_height = jQuery('.header-wrapper').find('.logo').height();
var orig_logo_container_margin_top = String(jQuery('.header-wrapper').find('.logo').data('margin-top'));
var orig_logo_container_margin_bottom = String(jQuery('.header-wrapper').find('.logo').data('margin-bottom'));
var orig_menu_height = jQuery('.header-wrapper .fusion-navbar-nav > li > a').outerHeight();
if (jQuery('#wrapper').length >= 1) {
	var wrapper_position = jQuery('#wrapper').position().left;
} else {
	var wrapper_position;
}
var is_parallax_tfs_slider = false;
if (!orig_logo_container_margin_top) {
	orig_logo_container_margin_top = '0px';
}
if (!orig_logo_container_margin_bottom) {
	orig_logo_container_margin_bottom = '0px';
}
if (js_local_vars.header_sticky == '1' && jQuery('.header-v1').length && jQuery('.header-wrapper').css('position') != 'absolute' && jQuery('.header-wrapper').prev().attr('id') != 'sliders-container') {
	jQuery('#sliders-container .tfs-slider').each(function() {
		if (jQuery(this).data('parallax') == 1) {
			is_parallax_tfs_slider = true;
			jQuery(window).scroll(animate_scrolled_header_v1);
			if (!Modernizr.mq('only screen and (max-width: 1000px)')) {
				jQuery('#header-sticky').addClass('tfs_parallax');
			}
		}
	});
	if (is_parallax_tfs_slider) {
		if (orig_logo_height + parseInt(orig_logo_container_margin_top.replace('px', '')) + parseInt(orig_logo_container_margin_bottom.replace('px', '')) > orig_menu_height) {
			var orig_header_height = orig_logo_height + parseInt(orig_logo_container_margin_top.replace('px', '')) + parseInt(orig_logo_container_margin_bottom.replace('px', ''));
		} else {
			var orig_header_height = orig_menu_height;
		}
		var is_scrolled = false;
		var scrolled_header_height = 65;
		if (jQuery('.header-wrapper').find('.logo .logo_normal:visible')) {
			var scrolled_logo_height = jQuery('.header-v1').find('.logo .normal_logo').height();
			if (scrolled_logo_height < scrolled_header_height - 10) {
				var scrolled_logo_container_margin = (scrolled_header_height - scrolled_logo_height) / 2;
			} else {
				scrolled_logo_height = scrolled_header_height - 10;
				var scrolled_logo_container_margin = 5;
			}
		}
		jQuery(window).on('resize', function() {
			if (jQuery('#wrapper').length >= 1) {
				wrapper_position = jQuery('#wrapper').position().left;
			} else {
				wrapper_position;
			}
			if (Modernizr.mq('only screen and (max-width: 800px)')) {
				jQuery('.header-v1').css({
					'height': '',
					'position': ''
				});
				jQuery('#header-sticky').removeClass('tfs_parallax');
			}
			if (!Modernizr.mq('only screen and (max-width: 800px)')) {
				if (is_scrolled) {
					setTimeout(function() {
						jQuery('.header-wrapper').css({
							'margin-left': -wrapper_position + 'px',
							'height': scrolled_header_height
						});
					}, 5);
					if (js_local_vars.layout_mode == 'boxed') {
						jQuery('.header-v1').css({
							'width': jQuery('#wrapper').width(),
							'left': '0',
							'right': '0',
							'margin': ' 0 auto'
						});
					} else {
						jQuery('.header-v1').css({
							'width': '100%',
						});
					}
					jQuery('.header-v1').css({
						'position': 'fixed',
						'height': 'auto',
						'-webkit-box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
						'-moz-box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
						'box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
						'-webkit-backface-visibility': 'hidden'
					});
					jQuery('.header-wrapper').find('.avada-row').css({
						'padding-top': '0',
						'padding-bottom': '0'
					});
					if (jQuery('.header-wrapper').find('.logo .logo_normal:visible')) {
						jQuery('.header-wrapper').find('.logo .logo_normal').css({
							'height': scrolled_logo_height
						});
					}
					jQuery('.header-wrapper').find('.logo').css({
						'margin-top': scrolled_logo_container_margin,
						'margin-bottom': scrolled_logo_container_margin
					});
					jQuery('.header-wrapper').find('.fusion-navbar-nav > li > a').css({
						'height': scrolled_header_height - 3 + 'px',
						'line-height': scrolled_header_height - 3 + 'px'
					});
				}
				if (!is_scrolled) {
					jQuery('.header-wrapper, .header-v1').css('height', orig_header_height);
					jQuery('.header-wrapper').find('.logo').css({
						'margin-top': orig_logo_container_margin_top,
						'margin-bottom': orig_logo_container_margin_top,
						'height': ''
					});
					jQuery('.header-wrapper').find('.fusion-navbar-nav > li > a').css({
						'height': orig_menu_height + 'px',
						'line-height': orig_menu_height + 'px'
					});
				}
				jQuery('#header-sticky').addClass('tfs_parallax');
			}
		});
	}
}

function animate_scrolled_header_v1() {
	if (jQuery('#wrapper').length >= 1) {
		wrapper_position = jQuery('#wrapper').position().left;
	} else {
		wrapper_position;
	}
	if (!Modernizr.mq('only screen and (max-width: 800px)')) {
		if (jQuery(window).scrollTop() > 0) {
			if (!is_scrolled) {
				jQuery('.header-wrapper').css({
					'z-index': '5',
					'position': 'static',
					'margin-left': -wrapper_position + 'px',
					'height': orig_header_height,
				});
				if (js_local_vars.layout_mode == 'boxed') {
					jQuery('.header-v1').css({
						'width': jQuery('#wrapper').width(),
						'left': '0',
						'right': '0',
						'margin': ' 0 auto'
					});
				} else {
					jQuery('.header-v1').css({
						'width': '100%',
					});
				}
				jQuery('.header-v1').css({
					'z-index': '5',
					'position': 'fixed',
					'height': orig_header_height,
					'-webkit-box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
					'-moz-box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
					'box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12)',
					'-webkit-backface-visibility': 'hidden'
				});
				jQuery('.header-wrapper').find('.fusion-navbar-nav > li > a').css('height', orig_menu_height);
				jQuery('.header-wrapper,  .header-v1').stop(true, true).animate({
					height: scrolled_header_height
				}, {
					queue: false,
					duration: 350,
					easing: 'easeOutCubic'
				});
				jQuery('.header-wrapper').find('.avada-row').stop(true, true).animate({
					'padding-top': '0',
					'padding-bottom': '0'
				}, {
					queue: false,
					duration: 350,
					easing: 'easeOutCubic'
				});
				if (jQuery('.header-wrapper').find('.logo .logo_normal:visible')) {
					var scrolled_logo_height = jQuery('.header-v1').find('.logo .normal_logo').height();
					if (scrolled_logo_height < scrolled_header_height - 10) {
						var scrolled_logo_container_margin = (scrolled_header_height - scrolled_logo_height) / 2;
					} else {
						scrolled_logo_height = scrolled_header_height - 10;
						var scrolled_logo_container_margin = 5;
					}
					jQuery('.header-wrapper').find('.logo .logo_normal').stop(true, true).animate({
						'height': scrolled_logo_height
					}, {
						queue: false,
						duration: 350,
						easing: 'easeOutCubic'
					});
				}
				jQuery('.header-wrapper').find('.logo').stop(true, true).animate({
					'margin-top': scrolled_logo_container_margin,
					'margin-bottom': scrolled_logo_container_margin
				}, {
					queue: false,
					duration: 350,
					easing: 'easeOutCubic'
				});
				jQuery('.header-wrapper').find('.fusion-navbar-nav > li > a').stop(true, true).animate({
					height: scrolled_header_height - 3,
					'line-height': scrolled_header_height - 3
				}, {
					queue: false,
					duration: 350,
					easing: 'easeOutCubic',
					complete: function() {
						if (!jQuery('.header-v1 .nav-holder style').length) {
							jQuery('.header-v1 .nav-holder').prepend('<style type="text/css">.header-v1 #nav.nav-holder .navigation > .cart > a { height:' + scrolled_header_height + ';line-height:' + scrolled_header_height + '; }</style>');
						}
					}
				});
			}
		} else {
			if (is_scrolled) {
				jQuery('.header-v1').css({
					'-webkit-box-shadow': '',
					'-moz-box-shadow': '',
					'box-shadow': '',
					'-webkit-backface-visibility': ''
				});
				jQuery('.header-wrapper, .header-v1').stop(true, true).animate({
					'height': orig_header_height
				}, {
					queue: false,
					duration: 350,
					easing: 'easeOutCubic',
					complete: function() {
						jQuery('.header-wrapper').css('margin-left', '');
						jQuery(this).css({
							'position': 'relative',
							'width': ''
						});
					}
				});
				jQuery('.header-wrapper').find('.avada-row').stop(true, true).animate({
					'padding-top': '0',
					'padding-bottom': '0'
				}, {
					queue: false,
					duration: 350,
					easing: 'easeOutCubic'
				});
				if (jQuery('.header-wrapper').find('.logo .logo_normal:visible')) {
					jQuery('.header-wrapper').find('.logo .logo_normal').stop(true, true).animate({
						'height': orig_logo_height
					}, {
						queue: false,
						duration: 350,
						easing: 'easeOutCubic'
					});
				}
				jQuery('.header-wrapper').find('.logo').stop(true, true).animate({
					'margin-top': orig_logo_container_margin_top,
					'margin-bottom': orig_logo_container_margin_bottom
				}, {
					queue: false,
					duration: 350,
					easing: 'easeOutCubic'
				});
				jQuery('.header-wrapper').find('.fusion-navbar-nav > li > a').stop(true, true).animate({
					'height': orig_menu_height,
					'line-height': orig_menu_height
				}, {
					queue: false,
					duration: 350,
					easing: 'easeOutCubic',
					complete: function() {
						if (jQuery('.header-wrapper .nav-holder style').length) {
							jQuery('.header-wrapper .nav-holder style').remove();
						}
					}
				});
			}
		}
	}
	if (jQuery(window).scrollTop() > 0) {
		is_scrolled = true;
	} else {
		is_scrolled = false;
	}
}
jQuery(window).load(function() {
	var headerHeight = jQuery('.header-wrapper').height();
	if (jQuery('.header-v1').length) {
		if (orig_logo_height + parseInt(orig_logo_container_margin_top.replace('px', '')) + parseInt(orig_logo_container_margin_bottom.replace('px', '')) > orig_menu_height) {
			headerHeight = orig_logo_height + parseInt(orig_logo_container_margin_top.replace('px', '')) + parseInt(orig_logo_container_margin_bottom.replace('px', ''));
		} else {
			headerHeight = orig_menu_height;
		}
	}
	if (jQuery('.sidebar').is(':visible')) {
		jQuery('.post-content div.portfolio').each(function() {
			var columns = jQuery(this).data('columns');
			jQuery(this).addClass('portfolio-' + columns + '-sidebar');
		});
	}
	if (jQuery().isotope) {
		imagesLoaded(jQuery('.portfolio-one .portfolio-wrapper'), function() {
			jQuery('.portfolio-wrapper').fadeIn();
			jQuery('.portfolio-tabs').fadeIn();
			jQuery('.loading-container').remove();
			jQuery('.portfolio-one .portfolio-wrapper').isotope({
				itemSelector: '.portfolio-item',
				layoutMode: 'vertical',
				transformsEnabled: false,
				isOriginLeft: jQuery('body.rtl').length ? false : true
			});
			jQuery('[data-spy="scroll"]').each(function() {
				var $spy = jQuery(this).scrollspy('refresh');
			});
		});
		imagesLoaded(jQuery('.portfolio-masonry .portfolio-wrapper, .portfolio-two .portfolio-wrapper, .portfolio-three .portfolio-wrapper, .portfolio-four .portfolio-wrapper, .portfolio-five .portfolio-wrapper, .portfolio-six .portfolio-wrapper'), function() {
			jQuery('.portfolio-wrapper').fadeIn();
			jQuery('.portfolio-tabs').fadeIn();
			jQuery('.loading-container').remove();
			jQuery('.portfolio-masonry .portfolio-wrapper, .portfolio-two .portfolio-wrapper, .portfolio-three .portfolio-wrapper, .portfolio-four .portfolio-wrapper, .portfolio-five .portfolio-wrapper, .portfolio-six .portfolio-wrapper').isotope({
				itemSelector: '.portfolio-item',
				resizable: true,
				layoutMode: js_local_vars.isotope_type,
				transformsEnabled: false,
				isOriginLeft: jQuery('body.rtl').length ? false : true
			});
			jQuery('[data-spy="scroll"]').each(function() {
				var $spy = jQuery(this).scrollspy('refresh');
			});
		});
		jQuery(window).resize(function() {
			jQuery('.portfolio-wrapper').isotope();
		});
	}
	if (jQuery().flexslider) {
		var avada_ytplayer;
		if (!Number(js_local_vars.status_vimeo)) {
			function ready(player_id) {
				var froogaloop = $f(player_id);
				var slide = jQuery('#' + player_id).parents('li');
				froogaloop.addEvent('play', function(data) {
					jQuery('#' + player_id).parents('li').parent().parent().flexslider("pause");
				});
				froogaloop.addEvent('pause', function(data) {
					if (jQuery(slide).attr('data-loop') == 'yes') {
						jQuery('#' + player_id).parents('li').parent().parent().flexslider("pause");
					} else {
						jQuery('#' + player_id).parents('li').parent().parent().flexslider("play");
					}
				});
			}
			var vimeoPlayers = jQuery('.flexslider').find('iframe'),
				player;
			jQuery('.flexslider').find('iframe').each(function() {
				var id = jQuery(this).attr('id');
				if (id) {
					$f(id).addEvent('ready', ready);
				}
			});

			function addEvent(element, eventName, callback) {
				if (element.addEventListener) {
					element.addEventListener(eventName, callback, false)
				} else {
					element.attachEvent(eventName, callback, false);
				}
			}
		}
		jQuery('.full-video, .video-shortcode, .wooslider .slide-content').not('#bbpress-forums full-video, #bbpress-forums .video-shortcode, #bbpress-forums .wooslider .slide-content').fitVids();
		jQuery('#bbpress-forums').fitVids();
		jQuery('.tfs-slider').each(function() {
			var this_tfslider = this;
			var first_slide = jQuery(this_tfslider).find('li').get(0);
			if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
				jQuery(this_tfslider).data('parallax', 0);
				jQuery(this_tfslider).data('full_screen', 0);
			}
			if (cssua.ua.tablet_pc) {
				jQuery(this_tfslider).data('parallax', 0);
			}
			if (cssua.ua.mobile || Modernizr.mq('only screen and (max-width: 1000px)')) {
				jQuery(this_tfslider).data('parallax', 0);
			}
			wpadminbarHeight = 0;
			if (jQuery('#wpadminbar').length >= 1) {
				var wpadminbarHeight = jQuery('#wpadminbar').height();
			}
			if (jQuery(this_tfslider).data('full_screen') == 1) {
				var sliderHeight = jQuery(window).height();
				if (jQuery(this_tfslider).parents('#sliders-container').next().hasClass('header-wrapper')) {
					sliderHeight = sliderHeight + (headerHeight - wpadminbarHeight);
				}
				if (jQuery(this_tfslider).data('parallax') == 0) {
					sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
				}
				if (Modernizr.mq('only screen and (max-width: 1000px)')) {
					var sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
				}
				jQuery(this_tfslider).find('video').each(function() {
					var aspect_ratio = jQuery(this).width() / jQuery(this).height();
					var arc_sliderWidth = aspect_ratio * sliderHeight;
					var arc_sliderLeft = '-' + ((arc_sliderWidth - jQuery(this_tfslider).width()) / 2) + 'px';
					var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
					if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
						compare_width = jQuery(this_tfslider).width();
					}
					if (compare_width > arc_sliderWidth) {
						arc_sliderWidth = '100%';
						arc_sliderLeft = 0;
					}
					jQuery(this).width(arc_sliderWidth);
					jQuery(this).css('left', arc_sliderLeft);
				});
			} else {
				var sliderWidth = jQuery(this_tfslider).data('slider_width');
				if (sliderWidth.indexOf('%') != -1) {
					sliderWidth = jQuery(first_slide).find('.background-image').data('imgwidth');
					if (!sliderWidth && !cssua.ua.mobile) {
						sliderWidth = jQuery(first_slide).find('video').width();
					}
					if (!sliderWidth) {
						sliderWidth = 940;
					}
					jQuery(this_tfslider).data('first_slide_width', sliderWidth);
					if (sliderWidth < jQuery(this_tfslider).data('slider_width')) {
						sliderWidth = jQuery(this_tfslider).data('slider_width');
					}
					var percentage_width = true;
				} else {
					sliderWidth = parseInt(jQuery(this_tfslider).data('slider_width'));
				}
				var sliderHeight = parseInt(jQuery(this_tfslider).data('slider_height'));
				var aspect_ratio = sliderHeight / sliderWidth;
				if (aspect_ratio < 0.5) {
					aspect_ratio = 0.5;
				}
				var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
				if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
					compare_width = jQuery(this_tfslider).width();
				}
				var sliderHeight = aspect_ratio * compare_width;
				if (sliderHeight > parseInt(jQuery(this_tfslider).data('slider_height'))) {
					sliderHeight = parseInt(jQuery(this_tfslider).data('slider_height'));
				}
				if (sliderHeight < 200) {
					sliderHeight = 300;
				}
			}
			if (jQuery(this_tfslider).data('full_screen') == 1) {
				jQuery(this_tfslider).css('max-width', '100%');
				jQuery(this_tfslider).find('.slides, .background').css('width', '100%');
			}
			if ((js_local_vars.header_position == 'Left' || js_local_vars.header_position == 'Right') && !jQuery(this_tfslider).hasClass('fixed-width-slider') && jQuery(this_tfslider).data('parallax') == 1) {
				jQuery(this_tfslider).css('max-width', jQuery('#wrapper').width());
				if (jQuery('body').hasClass('side-header-left')) {
					jQuery(this_tfslider).css('left', jQuery('#side-header').width() + 1)
				} else if (jQuery('body').hasClass('side-header-right')) {
					jQuery(this_tfslider).css('right', jQuery('#side-header').width() + 1)
				}
			}
			jQuery(this_tfslider).parents('.fusion-slider-container').css('height', sliderHeight);
			jQuery(this_tfslider).css('height', sliderHeight);
			jQuery(this_tfslider).find('.background, .mobile_video_image').css('height', sliderHeight);
			if (jQuery('.layout-boxed-mode').length >= 1) {
				var boxed_mode_width = jQuery('.layout-boxed-mode #wrapper').width();
				jQuery(this_tfslider).css('width', boxed_mode_width);
				jQuery(this_tfslider).css('margin-left', 'auto');
				jQuery(this_tfslider).css('margin-right', 'auto');
				if (jQuery(this_tfslider).data('parallax') == 1 && !Modernizr.mq('only screen and (max-width: 1000px)')) {
					jQuery(this_tfslider).css('left', '50%');
					if (js_local_vars.header_position == 'Left' || js_local_vars.header_position == 'Right') {
						boxed_mode_width = jQuery('.layout-boxed-mode #wrapper').width() - jQuery('.layout-boxed-mode #side-header').width();
						if (js_local_vars.header_position == 'Right') {
							boxed_mode_width = jQuery('.layout-boxed-mode #wrapper').width() + jQuery('.layout-boxed-mode #side-header').width();
						}
						jQuery(this_tfslider).css('margin-left', '-' + Math.floor(boxed_mode_width / 2) + 'px');
					} else {
						jQuery(this_tfslider).css('margin-left', '-' + (boxed_mode_width / 2) + 'px');
					}
				}
				jQuery(this_tfslider).find('.slides, .background').css('width', '100%');
			}
			if (cssua.ua.mobile) {
				jQuery(this_tfslider).find('a.button').each(function() {
					jQuery(this).removeClass('xlarge large medium button-xlarge button-large button-medium');
					jQuery(this).addClass('small button-small');
				});
				jQuery(this_tfslider).find('li').each(function() {
					jQuery(this).attr('data-autoplay', 'no');
					jQuery(this).data('autoplay', 'no');
				});
			}
			jQuery(this_tfslider).find('a.button').each(function() {
				jQuery(this).data('old', jQuery(this).attr('class'));
			});
			if (Modernizr.mq('only screen and (max-width: 800px)')) {
				jQuery(this_tfslider).find('a.button').each(function() {
					jQuery(this).data('old', jQuery(this).attr('class'));
					jQuery(this).removeClass('xlarge large medium button-xlarge button-large button-medium');
					jQuery(this).addClass('small button-small');
				});
			} else {
				jQuery(this_tfslider).find('a.button').each(function() {
					jQuery(this).attr('class', jQuery(this).data('old'));
				});
			}
			if (jQuery(this_tfslider).data('parallax') == 1) {
				jQuery(window).scroll(function() {
					if (jQuery(window).scrollTop() >= jQuery(this_tfslider).parents('#sliders-container').position().top + jQuery(this_tfslider).parents('#sliders-container').height()) {
						jQuery(this_tfslider).css('display', 'none');
					} else {
						jQuery(this_tfslider).css('display', 'block');
					}
				});
			}
			var resize_width = jQuery(window).width();
			var resize_height = jQuery(window).height();
			jQuery(window).on('resize', function() {
				if (jQuery(window).width() != resize_width || jQuery(window).height() != resize_height) {
					var wpadminbarHeight = 0;
					var oldHeaderHeight = jQuery('.header-wrapper').height();
					jQuery('.header-wrapper').css('height', '');
					var headerHeight = jQuery('.header-wrapper').height();
					jQuery('.header-wrapper').css('height', oldHeaderHeight);
					if (jQuery('.header-v1').length) {
						if (orig_logo_height + parseInt(orig_logo_container_margin_top.replace('px', '')) + parseInt(orig_logo_container_margin_bottom.replace('px', '')) > orig_menu_height) {
							headerHeight = orig_logo_height + parseInt(orig_logo_container_margin_top.replace('px', '')) + parseInt(orig_logo_container_margin_bottom.replace('px', ''));
						} else {
							headerHeight = orig_menu_height;
						}
					}
					if (jQuery('#wpadminbar').length >= 1) {
						var wpadminbarHeight = jQuery('#wpadminbar').height();
					}
					if (jQuery(this_tfslider).data('full_screen') == 1) {
						var sliderHeight = jQuery(window).height();
						if (jQuery(this_tfslider).parents('#sliders-container').next().hasClass('header-wrapper')) {
							sliderHeight = sliderHeight + (headerHeight - wpadminbarHeight);
						}
						if (jQuery(this_tfslider).data('parallax') == 0) {
							sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
						}
						if (Modernizr.mq('only screen and (max-width: 800px)')) {
							var sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
						}
						jQuery(this_tfslider).find('video').each(function() {
							var aspect_ratio = jQuery(this).width() / jQuery(this).height();
							var arc_sliderWidth = aspect_ratio * jQuery(window).height();
							var arc_sliderLeft = '-' + ((arc_sliderWidth - jQuery(this_tfslider).width()) / 2) + 'px';
							var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
							if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
								compare_width = jQuery(this_tfslider).width();
							}
							if (compare_width > arc_sliderWidth) {
								arc_sliderWidth = '100%';
								arc_sliderLeft = 0;
							}
							jQuery(this).width(arc_sliderWidth);
							jQuery(this).css('left', arc_sliderLeft);
						});
					} else {
						var sliderWidth = jQuery(this_tfslider).data('slider_width');
						if (sliderWidth.indexOf('%') != -1) {
							sliderWidth = jQuery(this_tfslider).data('first_slide_width');
							if (sliderWidth < jQuery(this_tfslider).data('slider_width')) {
								sliderWidth = jQuery(this_tfslider).data('slider_width');
							}
							var percentage_width = true;
						} else {
							sliderWidth = parseInt(jQuery(this_tfslider).data('slider_width'));
						}
						var sliderHeight = parseInt(jQuery(this_tfslider).data('slider_height'));
						var aspect_ratio = sliderHeight / sliderWidth;
						if (aspect_ratio < 0.5) {
							aspect_ratio = 0.5;
						}
						var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
						if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
							compare_width = jQuery(this_tfslider).width();
						}
						var sliderHeight = aspect_ratio * compare_width;
						if (sliderHeight > parseInt(jQuery(this_tfslider).data('slider_height'))) {
							sliderHeight = parseInt(jQuery(this_tfslider).data('slider_height'));
						}
						if (sliderHeight < 200) {
							sliderHeight = 300;
						}
						jQuery(this_tfslider).find('video').each(function() {
							var aspect_ratio = jQuery(this).width() / jQuery(this).height();
							var arc_sliderWidth = aspect_ratio * sliderHeight;
							if (arc_sliderWidth < sliderWidth && !jQuery(this_tfslider).hasClass('full-width-slider')) {
								arc_sliderWidth = sliderWidth;
							}
							var arc_sliderLeft = '-' + ((arc_sliderWidth - jQuery(this_tfslider).width()) / 2) + 'px';
							var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
							if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
								compare_width = jQuery(this_tfslider).width();
							}
							if (compare_width > arc_sliderWidth && percentage_width == true && jQuery(this_tfslider).data('full_screen') != 1) {
								arc_sliderWidth = '100%';
								arc_sliderLeft = 0;
							}
							jQuery(this).width(arc_sliderWidth);
							jQuery(this).css('left', arc_sliderLeft);
						});
						if (Modernizr.mq('only screen and (max-width: 800px)')) {
							jQuery(this_tfslider).find('a.button').each(function() {
								jQuery(this).removeClass('xlarge large medium button-xlarge button-large button-medium');
								jQuery(this).addClass('small button-small');
							});
						} else {
							jQuery(this_tfslider).find('a.button').each(function() {
								jQuery(this).attr('class', jQuery(this).data('old'));
							});
						}
					}
					if (jQuery(this_tfslider).data('full_screen') == 1 && jQuery(this_tfslider).data('animation') == "fade") {
						jQuery(this_tfslider).css('max-width', '100%');
						jQuery(this_tfslider).find('.slides, .background').css('width', '100%');
					}
					if ((js_local_vars.header_position == 'Left' || js_local_vars.header_position == 'Right') && !jQuery(this_tfslider).hasClass('fixed-width-slider') && jQuery(this_tfslider).data('parallax') == 1) {
						jQuery(this_tfslider).css('max-width', jQuery('#wrapper').width());
						if (jQuery('body').hasClass('side-header-left')) {
							jQuery(this_tfslider).css('left', jQuery('#side-header').width() + 1)
						} else if (jQuery('body').hasClass('side-header-right')) {
							jQuery(this_tfslider).css('right', jQuery('#side-header').width() + 1)
						}
					}
					jQuery(this_tfslider).parents('.fusion-slider-container').css('height', sliderHeight);
					jQuery(this_tfslider).parents('.fusion-slider-container').css('max-height', sliderHeight);
					jQuery(this_tfslider).css('height', sliderHeight);
					jQuery(this_tfslider).find('.background, .mobile_video_image').css('height', sliderHeight);
					if (jQuery('.layout-boxed-mode').length >= 1 && jQuery(this_tfslider).parents('.post-content').length == 0) {
						var boxed_mode_width = jQuery('.layout-boxed-mode #wrapper').width();
						jQuery(this_tfslider).css('width', boxed_mode_width);
						jQuery(this_tfslider).css('margin-left', 'auto');
						jQuery(this_tfslider).css('margin-right', 'auto');
						if (jQuery(this_tfslider).data('parallax') == 1 && !Modernizr.mq('only screen and (max-width: 1000px)')) {
							jQuery(this_tfslider).css('left', '50%');
							if (js_local_vars.header_position == 'Left' || js_local_vars.header_position == 'Right') {
								boxed_mode_width = jQuery('.layout-boxed-mode #wrapper').width() - jQuery('.layout-boxed-mode #side-header').width();
								if (js_local_vars.header_position == 'Right') {
									boxed_mode_width = jQuery('.layout-boxed-mode #wrapper').width() + jQuery('.layout-boxed-mode #side-header').width();
								}
								jQuery(this_tfslider).css('margin-left', '-' + Math.floor(boxed_mode_width / 2) + 'px');
							} else {
								jQuery(this_tfslider).css('margin-left', '-' + (boxed_mode_width / 2) + 'px');
							}
						}
						if (jQuery(this_tfslider).data('animation') != 'slide') {
							jQuery(this_tfslider).find('.slides').css('width', '100%');
						}
						jQuery(this_tfslider).find('.background').css('width', '100%');
					}
					if (jQuery(this_tfslider).data('parallax') == 1 && !Modernizr.mq('only screen and (max-width: 1000px)')) {
						jQuery(this_tfslider).css('position', 'fixed');
						if (jQuery('.header-wrapper').css('position') != 'absolute') {
							jQuery('.header-wrapper').css('position', 'relative');
							jQuery(this_tfslider).parents('.fusion-slider-container').css('margin-top', '-' + headerHeight + 'px');
						}
						jQuery('#main, .footer-area, #footer, .page-title-container').css('position', 'relative');
						jQuery('#main, .footer-area, #footer, .page-title-container').css('z-index', '3');
						jQuery('.header-wrapper').css('z-index', '5');
						jQuery('.header-wrapper').css('height', headerHeight);
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-webkit-transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-ms-transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-o-transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-moz-transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						if (jQuery(this_tfslider).hasClass('fixed-width-slider')) {
							if (js_local_vars.header_position == 'Left' || js_local_vars.header_position == 'Right') {
								if (jQuery(this_tfslider).parents('#sliders-container').length) {
									var wrapping_container = jQuery('#sliders-container');
								} else {
									var wrapping_container = jQuery('#main');
								}
								if (wrapping_container.width() < parseFloat(jQuery(this_tfslider).parent().css('max-width'))) {
									jQuery(this_tfslider).css('max-width', wrapping_container.width());
								} else {
									jQuery(this_tfslider).css('max-width', jQuery(this_tfslider).parent().css('max-width'));
								}
								if (wrapping_container.width() < parseFloat(jQuery(this_tfslider).parent().css('max-width'))) {
									jQuery(this_tfslider).css('max-width', wrapping_container.width());
								} else {
									jQuery(this_tfslider).css('max-width', jQuery(this_tfslider).parent().css('max-width'));
								}
								if (js_local_vars.header_position == 'Left') {
									var fixed_width_center = '-' + ((jQuery(this_tfslider).width() - jQuery('#side-header').width()) / 2) + 'px';
								} else {
									var fixed_width_center = '-' + ((jQuery(this_tfslider).width() + jQuery('#side-header').width()) / 2) + 'px';
								}
								if ((-1) * fixed_width_center > jQuery(this_tfslider).width()) {
									fixed_width_center = (-1) * jQuery(this_tfslider).width();
								}
							} else {
								var fixed_width_center = '-' + (jQuery(this_tfslider).width() / 2) + 'px';
							}
							jQuery(this_tfslider).css('left', '50%');
							jQuery(this_tfslider).css('margin-left', fixed_width_center);
						}
						jQuery(this_tfslider).find('.flex-control-nav').css('bottom', (headerHeight / 2));
					} else if (jQuery(this_tfslider).data('parallax') == 1 && Modernizr.mq('only screen and (max-width: 1000px)')) {
						jQuery(this_tfslider).css('position', 'relative');
						jQuery(this_tfslider).css('left', '0');
						jQuery(this_tfslider).css('margin-left', '0');
						if (jQuery('.header-wrapper').css('position') != 'absolute') {
							jQuery('.header-wrapper').css('position', 'relative');
						}
						jQuery('#main, .footer-area, #footer, .page-title-container').css('position', 'relative');
						jQuery('#main, .footer-area, #footer, .page-title-container').css('z-index', '3');
						jQuery('.header-wrapper').css('z-index', '5');
						jQuery('.header-wrapper').css('height', 'auto');
						jQuery(this_tfslider).parents('.fusion-slider-container').css('margin-top', '');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-webkit-transform', 'translate(0, 0)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-ms-transform', 'translate(0, 0)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-o-transform', 'translate(0, 0)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-moz-transform', 'translate(0, 0)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('transform', 'translate(0, 0)');
						jQuery(this_tfslider).find('.flex-control-nav').css('bottom', 0);
					}
					if (Modernizr.mq('only screen and (max-width: 640px)')) {
						jQuery(this_tfslider).parents('.fusion-slider-container').css('height', sliderHeight);
						jQuery(this_tfslider).css('height', sliderHeight);
						jQuery(this_tfslider).find('.background, .mobile_video_image').css('height', sliderHeight);
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							var contentPadding = '0px';
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					} else if (Modernizr.mq('only screen and (max-width: 1000px)')) {
						jQuery(this_tfslider).parents('.fusion-slider-container').css('height', sliderHeight);
						jQuery(this_tfslider).css('height', sliderHeight);
						jQuery(this_tfslider).find('.background, .mobile_video_image').css('height', sliderHeight);
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							var contentPadding = '0px';
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					} else {
						jQuery(this_tfslider).parents('.fusion-slider-container').css('height', sliderHeight);
						jQuery(this_tfslider).css('height', sliderHeight);
						jQuery(this_tfslider).find('.background, .mobile_video_image').css('height', sliderHeight);
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							jQuery(this).css('-webkit-transform', '');
							jQuery(this).css('-ms-transform', '');
							jQuery(this).css('-o-transform', '');
							jQuery(this).css('-moz-transform', '');
							jQuery(this).css('transform', '');
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							if (jQuery(this_tfslider).data('parallax') == '1' && jQuery(this_tfslider).parents('.post-content').length == 0) {
								var contentPadding = headerHeight / 2;
							}
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					}
					if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
						jQuery(this_tfslider).parents('.fusion-slider-container').css('height', 'auto');
						jQuery(this_tfslider).css('height', 'auto');
						jQuery(this_tfslider).parents('.fusion-slider-container').css('max-height', 'none');
						jQuery(this_tfslider).find('.mobile_video_image').each(function() {
							var img_url = jQuery('.mobile_video_image').css('background-image').replace('url(', '').replace(')', '');
							if (img_url) {
								var preview_image = new Image();
								preview_image.name = img_url;
								preview_image.src = img_url;
								preview_image.onload = function() {
									var ar = this.height / this.width;
									var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
									if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
										compare_width = jQuery(this_tfslider).width();
									}
									var mobile_preview_height = ar * compare_width;
									if (mobile_preview_height < sliderHeight) {
										jQuery(this_tfslider).find('.mobile_video_image').css('height', mobile_preview_height);
										jQuery(this_tfslider).css('height', mobile_preview_height);
									}
								}
							}
						});
					}
					if (Modernizr.mq('only screen and (max-width: 1000px)')) {
						jQuery('.header-wrapper').css('height', '');
					}
					resize_width = jQuery(window).width();
					resize_height = jQuery(window).height();
				}
			});
			if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
				jQuery(this_tfslider).css('max-width', '100%');
				if (jQuery(this_tfslider).data('animation') != 'slide') {
					jQuery(this_tfslider).find('.slides').css('max-width', '100%');
				}
			}
			jQuery(this_tfslider).find('video').each(function() {
				if (typeof jQuery(this)[0].pause === "function") {
					jQuery(this)[0].pause();
				}
			});
			jQuery(this_tfslider).flexslider({
				animation: jQuery(this_tfslider).data('animation'),
				slideshow: jQuery(this_tfslider).data('autoplay'),
				slideshowSpeed: jQuery(this_tfslider).data('slideshow_speed'),
				animationSpeed: jQuery(this_tfslider).data('animation_speed'),
				controlNav: Boolean(Number(jQuery(this_tfslider).data('pagination_circles'))),
				directionNav: Boolean(Number(jQuery(this_tfslider).data('nav_arrows'))),
				animationLoop: Boolean(Number(jQuery(this_tfslider).data('loop'))),
				smoothHeight: true,
				pauseOnHover: false,
				useCSS: true,
				video: true,
				touch: true,
				prevText: '&#xe61e;',
				nextText: '&#xe620;',
				start: function(slider) {
					wpadminbarHeight = 0;
					if (jQuery('#wpadminbar').length >= 1) {
						var wpadminbarHeight = jQuery('#wpadminbar').height();
					}
					jQuery(slider.slides.eq(slider.currentSlide)).find('.slide-content-container').show();
					if (jQuery(this_tfslider).data('full_screen') == 1) {
						var sliderHeight = jQuery(window).height();
						if (jQuery(this_tfslider).parents('#sliders-container').next().hasClass('header-wrapper')) {
							sliderHeight = sliderHeight + (headerHeight - wpadminbarHeight);
						}
						if (jQuery(this_tfslider).data('parallax') == 0) {
							sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
						}
						if (Modernizr.mq('only screen and (max-width: 1000px)')) {
							var sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
						}
						jQuery(this_tfslider).find('video').each(function() {
							var aspect_ratio = jQuery(this).width() / jQuery(this).height();
							var arc_sliderWidth = aspect_ratio * sliderHeight;
							var arc_sliderLeft = '-' + ((arc_sliderWidth - jQuery(this_tfslider).width()) / 2) + 'px';
							var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
							if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
								compare_width = jQuery(this_tfslider).width();
							}
							if (compare_width > arc_sliderWidth) {
								arc_sliderWidth = '100%';
								arc_sliderLeft = 0;
							}
							jQuery(this).width(arc_sliderWidth);
							jQuery(this).css('left', arc_sliderLeft);
						});
					} else {
						var sliderWidth = jQuery(this_tfslider).data('slider_width');
						if (sliderWidth.indexOf('%') != -1) {
							sliderWidth = jQuery(first_slide).find('.background-image').data('imgwidth');
							if (!sliderWidth && !cssua.ua.mobile) {
								sliderWidth = jQuery(first_slide).find('video').width();
							}
							if (!sliderWidth) {
								sliderWidth = 940;
							}
							jQuery(this_tfslider).data('first_slide_width', sliderWidth);
							if (sliderWidth < jQuery(this_tfslider).data('slider_width')) {
								sliderWidth = jQuery(this_tfslider).data('slider_width');
							}
							var percentage_width = true;
						} else {
							sliderWidth = parseInt(jQuery(this_tfslider).data('slider_width'));
						}
						var sliderHeight = parseInt(jQuery(this_tfslider).data('slider_height'));
						var aspect_ratio = sliderHeight / sliderWidth;
						if (aspect_ratio < 0.5) {
							aspect_ratio = 0.5;
						}
						var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
						if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
							compare_width = jQuery(this_tfslider).width();
						}
						var sliderHeight = aspect_ratio * compare_width;
						if (sliderHeight > parseInt(jQuery(this_tfslider).data('slider_height'))) {
							sliderHeight = parseInt(jQuery(this_tfslider).data('slider_height'));
						}
						if (sliderHeight < 200) {
							sliderHeight = 300;
						}
						jQuery(this_tfslider).find('video').each(function() {
							var aspect_ratio = jQuery(this).width() / jQuery(this).height();
							var arc_sliderWidth = aspect_ratio * sliderHeight;
							if (arc_sliderWidth < sliderWidth && !jQuery(this_tfslider).hasClass('full-width-slider')) {
								arc_sliderWidth = sliderWidth;
							}
							var arc_sliderLeft = '-' + ((arc_sliderWidth - jQuery(this_tfslider).width()) / 2) + 'px';
							var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
							if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
								compare_width = jQuery(this_tfslider).width();
							}
							if (compare_width > arc_sliderWidth && percentage_width == true && jQuery(this_tfslider).data('full_screen') != 1) {
								arc_sliderWidth = '100%';
								arc_sliderLeft = 0;
							}
							jQuery(this).width(arc_sliderWidth);
							jQuery(this).css('left', arc_sliderLeft);
						});
					}
					jQuery(this_tfslider).parents('.fusion-slider-container').css('max-height', sliderHeight);
					jQuery(this_tfslider).parents('.fusion-slider-container').css('height', sliderHeight);
					jQuery(this_tfslider).css('height', sliderHeight);
					jQuery(this_tfslider).find('.background, .mobile_video_image').css('height', sliderHeight);
					if ((cssua.ua.mobile && cssua.ua.mobile != 'ipad') || jQuery(this_tfslider).parents('.post-content').length >= 1) {
						jQuery(this_tfslider).parents('.fusion-slider-container').css('height', 'auto');
						jQuery(this_tfslider).find('.mobile_video_image').each(function() {
							var img_url = jQuery('.mobile_video_image').css('background-image').replace('url(', '').replace(')', '');
							if (img_url) {
								var preview_image = new Image();
								preview_image.name = img_url;
								preview_image.src = img_url;
								preview_image.onload = function() {
									var ar = this.height / this.width;
									var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
									if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
										compare_width = jQuery(this_tfslider).width();
									}
									var mobile_preview_height = ar * compare_width;
									if (mobile_preview_height < sliderHeight) {
										jQuery(this_tfslider).find('.mobile_video_image').css('height', mobile_preview_height);
										jQuery(this_tfslider).find('.mobile_video_image').css('height', mobile_preview_height);
									}
								}
							}
						});
						if (jQuery(slider.slides.eq(slider.currentSlide)).find('video').length >= 1 && jQuery(slider.slides.eq(slider.currentSlide)).find('.mobile_video_image').length >= 1) {
							var img_url = jQuery(slider.slides.eq(slider.currentSlide)).find('.mobile_video_image').css('background-image').replace('url(', '').replace(')', '');
							if (img_url) {
								var preview_image = new Image();
								preview_image.name = img_url;
								preview_image.src = img_url;
								preview_image.onload = function() {
									var ar = this.height / this.width;
									var compare_width = jQuery(this_tfslider).parent().parent().parent().width();
									if (jQuery(this_tfslider).parents('.post-content').length >= 1) {
										compare_width = jQuery(this_tfslider).width();
									}
									var mobile_preview_height = ar * compare_width;
									if (mobile_preview_height < sliderHeight) {
										jQuery(this_tfslider).find('.mobile_video_image').css('height', mobile_preview_height);
										jQuery(this_tfslider).css('height', mobile_preview_height);
									}
								}
							}
						}
					}
					if (jQuery(this_tfslider).data('parallax') == 1 && !Modernizr.mq('only screen and (max-width: 1000px)')) {
						jQuery(this_tfslider).css('position', 'fixed');
						if (jQuery('.header-wrapper').css('position') != 'absolute') {
							jQuery('.header-wrapper').css('position', 'relative');
							jQuery(this_tfslider).parents('.fusion-slider-container').css('margin-top', '-' + headerHeight + 'px');
						}
						jQuery('#main, .footer-area, #footer, .page-title-container').css('position', 'relative');
						jQuery('#main, .footer-area, #footer, .page-title-container').css('z-index', '3');
						jQuery('.header-wrapper').css('z-index', '5');
						jQuery('.header-wrapper').css('height', headerHeight);
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-webkit-transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-ms-transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-o-transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('-moz-transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						jQuery(this_tfslider).find('.flex-direction-nav li a').css('transform', 'translate(0, ' + (headerHeight / 2) + 'px)');
						if (jQuery(this_tfslider).data('full_screen') == 1) {
							jQuery(slider).find('.flex-control-nav').css('bottom', (headerHeight / 2));
						} else {
							jQuery(slider).find('.flex-control-nav').css('bottom', 0);
						}
						if (jQuery(this_tfslider).hasClass('fixed-width-slider')) {
							if (js_local_vars.header_position == 'Left' || js_local_vars.header_position == 'Right') {
								if (jQuery(this_tfslider).parents('#sliders-container').length) {
									var wrapping_container = jQuery('#sliders-container');
								} else {
									var wrapping_container = jQuery('#main');
								}
								if (wrapping_container.width() < parseFloat(jQuery(this_tfslider).parent().css('max-width'))) {
									jQuery(this_tfslider).css('max-width', wrapping_container.width());
								} else {
									jQuery(this_tfslider).css('max-width', jQuery(this_tfslider).parent().css('max-width'));
								}
								if (js_local_vars.header_position == 'Left') {
									var fixed_width_center = '-' + ((jQuery(this_tfslider).width() - jQuery('#side-header').width()) / 2) + 'px';
								} else {
									var fixed_width_center = '-' + ((jQuery(this_tfslider).width() + jQuery('#side-header').width()) / 2) + 'px';
								}
								if ((-1) * fixed_width_center > jQuery(this_tfslider).width()) {
									fixed_width_center = (-1) * jQuery(this_tfslider).width();
								}
							} else {
								var fixed_width_center = '-' + (jQuery(this_tfslider).width() / 2) + 'px';
							}
							jQuery(this_tfslider).css('left', '50%');
							jQuery(this_tfslider).css('margin-left', fixed_width_center);
						}
					} else if (jQuery(this_tfslider).data('parallax') == 1 && Modernizr.mq('only screen and (max-width: 1000px)')) {
						jQuery(slider).find('.flex-control-nav').css('bottom', 0);
					}
					if (Modernizr.mq('only screen and (max-width: 640px)')) {
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							var contentPadding = '0px';
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					} else if (Modernizr.mq('only screen and (max-width: 800px)')) {
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							var contentPadding = '0px';
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					} else {
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							jQuery(this).css('-webkit-transform', '');
							jQuery(this).css('-ms-transform', '');
							jQuery(this).css('-o-transform', '');
							jQuery(this).css('-moz-transform', '');
							jQuery(this).css('transform', '');
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							if (jQuery(this_tfslider).data('parallax') == '1' && jQuery(this_tfslider).parents('.post-content').length == 0) {
								var contentPadding = headerHeight / 2;
							}
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					}
					jQuery(slider.slides.eq(slider.currentSlide)).find('video').each(function() {
						if (jQuery(this).parents('li').attr('data-autoplay') == 'yes') {
							if (typeof jQuery(this)[0].play === "function") {
								jQuery(this)[0].play();
							}
						}
					});
					jQuery(slider.slides.eq(slider.currentSlide)).find('iframe').each(function() {
						if (jQuery(this).parents('li').attr('data-autoplay') == 'yes') {
							jQuery(this_tfslider).flexslider('pause');
							var video = this;
							setTimeout(function() {
								video.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
							}, 1000);
						}
					});
					if (js_local_vars.header_position == 'Left' || js_local_vars.header_position == 'Right') {
						if (jQuery(this_tfslider).parents('#sliders-container').length >= 1) {
							var slideContent = jQuery(this_tfslider).parents('#sliders-container').find('.slide-content-container');
							jQuery(slideContent).each(function() {
								if (jQuery(this).hasClass('slide-content-right')) {
									jQuery(this).find('.slide-content').css('margin-right', '100px');
								} else if (jQuery(this).hasClass('slide-content-left')) {
									jQuery(this).find('.slide-content').css('margin-left', '100px');
								}
							});
						}
					}
					fusion_reanimate_slider(slideContent);
					if (typeof(slider.slides) !== 'undefined' && slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
						if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
							YT_ready(function() {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onReady': onPlayerReady(slider.slides.eq(slider.currentSlide)),
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}
						if (!Number(js_local_vars.status_vimeo)) {
							$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
							if (jQuery(slider.slides.eq(slider.currentSlide)).data('autoplay') == 'yes') {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('play');
							}
							if (jQuery(slider.slides.eq(slider.currentSlide)).data('mute') == 'yes') {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('setVolume', 0);
							}
						}
					}
					jQuery(this_tfslider).find('.overlay-link').hide();
					jQuery(slider.slides.eq(slider.currentSlide)).find('.overlay-link').show();
					jQuery.waypoints('viewportHeight');
					jQuery.waypoints('refresh');
				},
				before: function(slider) {
					jQuery(this_tfslider).find('.slide-content-container').hide();
					if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
						if (!Number(js_local_vars.status_vimeo)) {
							jQuery(this_tfslider).find('iframe').each(function() {
								$f(jQuery(this)[0]).api('pause');
							});
							if (jQuery(slider.slides.eq(slider.currentSlide)).data('autoplay') == 'yes') {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('play');
							}
							if (jQuery(slider.slides.eq(slider.currentSlide)).data('mute') == 'yes') {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('setVolume', 0);
							}
						}
						if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
							YT_ready(function() {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onReady': onPlayerReady(slider.slides.eq(slider.currentSlide)),
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}
					}
					playVideoAndPauseOthers(slider);
				},
				after: function(slider) {
					jQuery(slider.slides.eq(slider.currentSlide)).find('.slide-content-container').show();
					if (Modernizr.mq('only screen and (max-width: 640px)')) {
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							var contentPadding = '0px';
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					} else if (Modernizr.mq('only screen and (max-width: 800px)')) {
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							var contentPadding = '0px';
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					} else {
						var slideContent = jQuery(this_tfslider).find('.slide-content-container');
						jQuery(slideContent).each(function() {
							jQuery(this).css('-webkit-transform', '');
							jQuery(this).css('-ms-transform', '');
							jQuery(this).css('-o-transform', '');
							jQuery(this).css('-moz-transform', '');
							jQuery(this).css('transform', '');
							var contentHeight = '-' + (jQuery(this).find('.slide-content').height() / 2) + 'px';
							if (jQuery(this_tfslider).data('parallax') == '1' && jQuery(this_tfslider).parents('.post-content').length == 0) {
								var contentPadding = headerHeight / 2;
							}
							jQuery(this).css('margin-top', contentHeight);
							jQuery(this).css('padding-top', contentPadding);
						});
					}
					fusion_reanimate_slider(slideContent);
					if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
						if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
							YT_ready(function() {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onReady': onPlayerReady(slider.slides.eq(slider.currentSlide)),
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}
						if (!Number(js_local_vars.status_vimeo)) {
							jQuery(this_tfslider).find('iframe').each(function() {
								$f(jQuery(this)[0]).api('pause');
							});
							if (jQuery(slider.slides.eq(slider.currentSlide)).data('autoplay') == 'yes') {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('play');
							}
							if (jQuery(slider.slides.eq(slider.currentSlide)).data('mute') == 'yes') {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('setVolume', 0);
							}
						}
					}
					jQuery(this_tfslider).find('.overlay-link').hide();
					jQuery(slider.slides.eq(slider.currentSlide)).find('.overlay-link').show();
					playVideoAndPauseOthers(slider);
					jQuery('[data-spy="scroll"]').each(function() {
						var $spy = jQuery(this).scrollspy('refresh');
					});
				}
			});
		});
		if (js_local_vars.page_smoothHeight === 'false') {
			page_smoothHeight = false;
		} else {
			page_smoothHeight = true;
		}
		jQuery('.grid-layout .flexslider').flexslider({
			slideshow: Boolean(Number(js_local_vars.slideshow_autoplay)),
			slideshowSpeed: Number(js_local_vars.slideshow_speed),
			video: true,
			smoothHeight: page_smoothHeight,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function(slider) {
				if (typeof(slider.slides) !== 'undefined' && slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery.waypoints('viewportHeight');
				jQuery.waypoints('refresh');
			},
			before: function(slider) {
				if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (!Number(js_local_vars.status_vimeo)) {
						$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
					playVideoAndPauseOthers(slider);
				}
			},
			after: function(slider) {
				if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery('[data-spy="scroll"]').each(function() {
					var $spy = jQuery(this).scrollspy('refresh');
				});
			}
		});
		if (js_local_vars.flex_smoothHeight === 'false') {
			flex_smoothHeight = false;
		} else {
			flex_smoothHeight = true;
		}
		jQuery('.fusion-flexslider').flexslider({
			slideshow: Boolean(Number(js_local_vars.slideshow_autoplay)),
			slideshowSpeed: js_local_vars.slideshow_speed,
			video: true,
			smoothHeight: flex_smoothHeight,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function(slider) {
				if (typeof(slider.slides) !== 'undefined' && slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery.waypoints('viewportHeight');
				jQuery.waypoints('refresh');
			},
			before: function(slider) {
				if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (!Number(js_local_vars.status_vimeo)) {
						$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
					playVideoAndPauseOthers(slider);
				}
			},
			after: function(slider) {
				if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery('[data-spy="scroll"]').each(function() {
					var $spy = jQuery(this).scrollspy('refresh');
				});
			}
		});
		jQuery('.flexslider').flexslider({
			slideshow: Boolean(Number(js_local_vars.slideshow_autoplay)),
			slideshowSpeed: js_local_vars.slideshow_speed,
			video: true,
			smoothHeight: flex_smoothHeight,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function(slider) {
				if (typeof(slider.slides) !== 'undefined' && slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery.waypoints('viewportHeight');
				jQuery.waypoints('refresh');
			},
			before: function(slider) {
				if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (!Number(js_local_vars.status_vimeo)) {
						$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
					playVideoAndPauseOthers(slider);
				}
			},
			after: function(slider) {
				if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery('[data-spy="scroll"]').each(function() {
					var $spy = jQuery(this).scrollspy('refresh');
				});
			}
		});

		function playVideoAndPauseOthers(slider) {
			jQuery(slider).find('iframe').each(function(i) {
				var func = 'stopVideo';
				this.contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
				if (!jQuery(this).parents('li').hasClass('clone') && jQuery(this).parents('li').hasClass('flex-active-slide') && jQuery(this).parents('li').attr('data-autoplay') == 'yes') {
					jQuery(this).parents('.flexslider').flexslider('pause');
					this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
					if (jQuery(this).parents('li').attr('data-mute') == 'yes') {
						this.contentWindow.postMessage('{"event":"command","func":"' + 'mute' + '","args":""}', '*');
					}
				}
			});
			jQuery(slider).find('video').each(function(i) {
				if (typeof jQuery(this)[0].pause === "function") {
					jQuery(this)[0].pause();
				}
				if (!jQuery(this).parents('li').hasClass('clone') && jQuery(this).parents('li').hasClass('flex-active-slide') && jQuery(this).parents('li').attr('data-autoplay') == 'yes') {
					if (typeof jQuery(this)[0].play === "function") {
						jQuery(this)[0].play();
					}
				}
			});
		}
		jQuery('.flex-next, .flex-prev').click(function() {});
	}
	if (jQuery().isotope) {
		jQuery('.grid-layout').each(function() {
			var columns = 2;
			for (i = 1; i < 7; i++) {
				if (jQuery(this).hasClass('grid-layout-' + i)) {
					columns = i;
				}
			}
			var grid_width = Math.floor(100 / columns * 100) / 100 + '%';
			jQuery(this).find('.post').css('width', grid_width);
			jQuery(this).isotope({
				layoutMode: 'masonry',
				itemSelector: '.post',
				transformsEnabled: false,
				isOriginLeft: jQuery('body.rtl').length ? false : true,
				resizable: true,
			});
			if ((jQuery(this).hasClass('grid-layout-4') || jQuery(this).hasClass('grid-layout-5') || jQuery(this).hasClass('grid-layout-6')) && Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)')) {
				var grid_width = Math.floor(100 / 3 * 100) / 100 + '%';
				jQuery(this).find('.post').css('width', grid_width);
				jQuery(this).isotope({
					layoutMode: 'masonry',
					itemSelector: '.post',
					transformsEnabled: false,
					isOriginLeft: jQuery('body.rtl').length ? false : true,
					resizable: true,
				});
			}
		});
	}
	if (Boolean(Number(js_local_vars.avada_rev_styles))) {
		jQuery('.rev_slider_wrapper').each(function() {
			var rev_slider_wrapper = jQuery(this);
			if (jQuery(this).length >= 1 && jQuery(this).find('.tp-bannershadow').length == 0) {
				jQuery('<div class="shadow-left">').appendTo(this);
				jQuery('<div class="shadow-right">').appendTo(this);
				jQuery(this).addClass('avada-skin-rev');
			}
			if (!jQuery(this).find('.tp-leftarrow').hasClass('preview1') && !jQuery(this).find('.tp-leftarrow').hasClass('preview2') && !jQuery(this).find('.tp-leftarrow').hasClass('preview3') && !jQuery(this).find('.tp-leftarrow').hasClass('preview4')) {
				jQuery(this).addClass('avada-skin-rev-nav');
				if (rev_slider_wrapper.find('.tp-leftarrow').height() > rev_slider_wrapper.height() / 4 && rev_slider_wrapper.find('.tp-leftarrow').height() < rev_slider_wrapper.height()) {
					var rev_slider_id = rev_slider_wrapper.attr('id');
					var new_dimension = rev_slider_wrapper.height() / 4;
					if (rev_slider_wrapper.children('.avada-rev-arrows').length) {
						rev_slider_wrapper.children('.avada-rev-arrows').empty();
						rev_slider_wrapper.children('.avada-rev-arrows').append('<style type="text/css">#' + rev_slider_id + ' .tp-leftarrow, #' + rev_slider_id + ' .tp-rightarrow{margin-top:-' + new_dimension / 2 + 'px !important;width:' + new_dimension + 'px !important;height:' + new_dimension + 'px !important;}#' + rev_slider_id + ' .tp-leftarrow:before, #' + rev_slider_id + ' .tp-rightarrow:before{line-height:' + new_dimension + 'px;font-size:' + new_dimension / 2 + 'px;}</style>');
					} else {
						rev_slider_wrapper.prepend('<div class="avada-rev-arrows"><style type="text/css">#' + rev_slider_id + ' .tp-leftarrow, #' + rev_slider_id + ' .tp-rightarrow{margin-top:-' + new_dimension / 2 + 'px !important;width:' + new_dimension + 'px !important;height:' + new_dimension + 'px !important;}#' + rev_slider_id + ' .tp-leftarrow:before, #' + rev_slider_id + ' .tp-rightarrow:before{line-height:' + new_dimension + 'px;font-size:' + new_dimension / 2 + 'px;}</style></div>');
					}
				}
				jQuery(window).on('resize', function() {
					if (rev_slider_wrapper.find('.tp-leftarrow').height() > rev_slider_wrapper.height() / 4 && rev_slider_wrapper.find('.tp-leftarrow').height() < rev_slider_wrapper.height()) {
						var rev_slider_id = rev_slider_wrapper.attr('id');
						var new_dimension = rev_slider_wrapper.height() / 4;
						if (rev_slider_wrapper.children('.avada-rev-arrows').length) {
							rev_slider_wrapper.children('.avada-rev-arrows').empty();
							rev_slider_wrapper.children('.avada-rev-arrows').append('<style type="text/css">#' + rev_slider_id + ' .tp-leftarrow, #' + rev_slider_id + ' .tp-rightarrow{margin-top:-' + new_dimension / 2 + 'px !important;width:' + new_dimension + 'px !important;height:' + new_dimension + 'px !important;}#' + rev_slider_id + ' .tp-leftarrow:before, #' + rev_slider_id + ' .tp-rightarrow:before{line-height:' + new_dimension + 'px;font-size:' + new_dimension / 2 + 'px;}</style>');
						} else {
							rev_slider_wrapper.prepend('<div class="avada-rev-arrows"><style type="text/css">#' + rev_slider_id + ' .tp-leftarrow, #' + rev_slider_id + ' .tp-rightarrow{margin-top:-' + new_dimension / 2 + 'px !important;width:' + new_dimension + 'px !important;height:' + new_dimension + 'px !important;}#' + rev_slider_id + ' .tp-leftarrow:before, #' + rev_slider_id + ' .tp-rightarrow:before{line-height:' + new_dimension + 'px;font-size:' + new_dimension / 2 + 'px;}</style></div>');
						}
					} else {
						rev_slider_wrapper.children('.avada-rev-arrows').remove();
					}
				});
			}
		});
	}
});
jQuery(window).load(function($) {
	var header_social_height;
	var other_content_alignment;
	if ((jQuery(window).width() >= 800 || (js_local_vars.mobile_menu_design == 'modern' && Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)'))) && js_local_vars.ipad_potrait == '0') {
		header_social_height = jQuery('.header-wrapper .header-social').height();
	}
	if (jQuery('.header-social .alignleft .top-menu').length) {
		other_content_alignment = '.alignright';
	}
	if (jQuery('.header-social .alignright .top-menu').length) {
		other_content_alignment = '.alignleft';
	}
	jQuery(window).on('resize', function() {
		if (jQuery('.header-social').find(other_content_alignment).height() > 43) {
			header_social_height = jQuery('.header-social').find(other_content_alignment).height();
		} else {
			header_social_height = 43;
		}
		jQuery('.header-wrapper .header-social .menu > li').css({
			'height': header_social_height,
			'line-height': header_social_height + 'px'
		});
	});
	if (jQuery('.header-wrapper .top-menu #snav > .cart').width() > 176) {
		setTimeout(function() {
			var cart_width = jQuery('.header-wrapper .top-menu #snav > .cart').outerWidth(),
				cart_content = jQuery('.header-wrapper .top-menu .cart-content a'),
				cart_content_width = cart_content.width(),
				cart_content_padding = cart_content.outerWidth() - cart_content_width,
				new_cart_content_width = cart_width - cart_content_padding,
				img = jQuery('.header-wrapper .top-menu .cart-content a > img'),
				img_width = img.width();
			img_margin = img.outerWidth(true) - img_width;
			jQuery('.header-wrapper .top-menu .cart-contents-wrapper').width(cart_width);
			jQuery('.header-wrapper .top-menu .cart-content a').width(new_cart_content_width);
			jQuery('.header-wrapper .top-menu .cart-content a').find('.cart-desc').each(function() {
				jQuery(this).width(jQuery(this).parent().width() - img_width - img_margin);
			});
		}, 750);
	};
	if (jQuery().prettyPhoto) {
		var ppArgs = {
			overlay_gallery: Boolean(Number(js_local_vars.lightbox_gallery)),
			autoplay_slideshow: Boolean(Number(js_local_vars.lightbox_autoplay)),
			show_title: Boolean(Number(js_local_vars.lightbox_title)),
			show_desc: Boolean(Number(js_local_vars.lightbox_desc)),
			deeplinking: Boolean(Number(js_local_vars.lightbox_deeplinking)),
		};
		if (js_local_vars.lightbox_animation_speed) {
			ppArgs.animation_speed = js_local_vars.lightbox_animation_speed.toLowerCase();
		}
		if (js_local_vars.lightbox_slideshow_speed) {
			ppArgs.slideshow = js_local_vars.lightbox_slideshow_speed;
		}
		if (js_local_vars.lightbox_opacity) {
			ppArgs.opacity = js_local_vars.lightbox_opacity;
		}
		if (!Boolean(Number(js_local_vars.lightbox_social))) {
			ppArgs.social_tools = '';
		}
		jQuery("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto(ppArgs);
		var ppArgs_woo = ppArgs;
		ppArgs_woo.hook = 'data-rel';
		jQuery("a.zoom, a[data-rel^='prettyPhoto']").prettyPhoto(ppArgs_woo);
		if (Boolean(Number(js_local_vars.lightbox_post_images))) {
			jQuery('.single-post .post-content a, #posts-container .post .post-content a, .fusion-blog-shortcode .post .post-content a').has('img').each(function() {
				if (String(jQuery(this).attr('rel')).indexOf('prettyPhoto') === -1) {
					jQuery(this).prettyPhoto(ppArgs);
				}
			});
		}
		if (Boolean(Number(js_local_vars.status_lightbox_mobile))) {
			var mediaQuery = 'desk';
			if (Modernizr.mq('only screen and (max-width: 600px)') || Modernizr.mq('only screen and (max-height: 520px)')) {
				mediaQuery = 'mobile';
				jQuery("a.zoom, a[data-rel^='prettyPhoto'], a[rel^='prettyPhoto']").unbind('click');
				if (Boolean(Number(js_local_vars.lightbox_post_images))) {
					jQuery('.single-post .post-content a, #posts-container .post .post-content a, .fusion-blog-shortcode .post .post-content a').has('img').unbind('click');
				}
			}
			jQuery(window).on('resize', function() {
				if ((Modernizr.mq('only screen and (max-width: 600px)') || Modernizr.mq('only screen and (max-height: 520px)')) && mediaQuery == 'desk') {
					jQuery("a.zoom, a[data-rel^='prettyPhoto'], a[rel^='prettyPhoto']").unbind('click.prettyphoto');
					if (Boolean(Number(js_local_vars.lightbox_post_images))) {
						jQuery('.single-post .post-content a, #posts-container .post .post-content a, .fusion-blog-shortcode .post .post-content a').has('img').unbind('click.prettyphoto');
					}
					mediaQuery = 'mobile';
				} else if (!Modernizr.mq('only screen and (max-width: 600px)') && !Modernizr.mq('only screen and (max-height: 520px)') && mediaQuery == 'mobile') {
					jQuery("a.zoom, a[data-rel^='prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto(ppArgs);
					if (Boolean(Number(js_local_vars.lightbox_post_images))) {
						jQuery('.single-post .post-content a, #posts-container .post .post-content a, .fusion-blog-shortcode .post .post-content a').has('img').each(function() {
							if (String(jQuery(this).attr('rel')).indexOf('prettyPhoto') === -1) {
								jQuery(this).prettyPhoto(ppArgs);
							}
						});
					}
					mediaQuery = 'desk';
				}
			});
		}
	}
	if (js_local_vars.sidenav_behavior == 'Click') {
		jQuery('.side-nav li a').on('click', function(e) {
			if (jQuery(this).parent('.page_item_has_children').length) {
				if (jQuery(this).parent().find('> .children').length && !jQuery(this).parent().find('> .children').is(':visible')) {
					jQuery(this).parent().find('> .children').stop(true, true).slideDown('slow');
				} else {
					jQuery(this).parent().find('> .children').stop(true, true).slideUp('slow');
				}
			}
			if (jQuery(this).parent('.page_item_has_children.current_page_item').length) {
				return false;
			}
		});
	} else {
		jQuery('.side-nav li').hoverIntent({
			over: function() {
				if (jQuery(this).find('> .children').length) {
					jQuery(this).find('> .children').stop(true, true).slideDown('slow');
				}
			},
			out: function() {
				if (jQuery(this).find('.current_page_item').length == 0 && jQuery(this).hasClass('current_page_item') == false) {
					jQuery(this).find('.children').stop(true, true).slideUp('slow');
				}
			},
			timeout: 500
		});
	}
	if (jQuery().eislideshow) {
		var eislideshow_args = {
			autoplay: Boolean(Number(js_local_vars.tfes_autoplay))
		};
		if (js_local_vars.tfes_animation) {
			eislideshow_args.animation = js_local_vars.tfes_animation;
		}
		if (js_local_vars.tfes_interval) {
			eislideshow_args.slideshow_interval = js_local_vars.tfes_interval;
		}
		if (js_local_vars.tfes_speed) {
			eislideshow_args.speed = js_local_vars.tfes_speed;
		}
		if (js_local_vars.tfes_width) {
			eislideshow_args.thumbMaxWidth = js_local_vars.tfes_width;
		}
		jQuery('#ei-slider').eislideshow(eislideshow_args);
	}
	var retina = window.devicePixelRatio > 1 ? true : false;
	if (js_local_vars.custom_icon_image_retina && retina) {
		jQuery('.fusion-social-networks a.custom').each(function() {
			jQuery(this).find('img').attr('src', js_local_vars.custom_icon_image_retina);
			jQuery(this).find('img').attr('width', js_local_vars.retina_icon_width);
			jQuery(this).find('img').attr('height', js_local_vars.retina_icon_height);
		})
	}
	var wpml_flag = jQuery('ul#navigation > li > a > .iclflag');
	var wpml_h = wpml_flag.height();
	wpml_flag.css('margin-top', +wpml_h / -2 + "px");
	var wpml_flag = jQuery('.top-menu > ul > li > a > .iclflag');
	var wpml_h = wpml_flag.height();
	wpml_flag.css('margin-top', +wpml_h / -2 + "px");
	if (js_local_vars.blog_pagination_type == 'Infinite Scroll') {
		jQuery('#posts-container').infinitescroll({
			navSelector: "div.pagination",
			nextSelector: "a.pagination-next",
			itemSelector: "div.post, .timeline-date",
			loading: {
				finishedMsg: js_local_vars.infinite_finished_msg,
				msg: jQuery('<div class="loading-container"><div class="loading-spinner"><div class="spinner-1"></div><div class="spinner-2"></div><div class="spinner-3"></div></div><div class="loading-msg">' + js_local_vars.infinite_blog_text + '</div>')
			},
			errorCallback: function() {
				if (jQuery('#posts-container').hasClass('isotope')) {
					jQuery('#posts-container').isotope();
				}
			}
		}, function(posts) {
			if (jQuery().isotope) {
				jQuery(posts).hide();
				imagesLoaded(posts, function() {
					jQuery(posts).fadeIn();
					if (jQuery('#posts-container').hasClass('isotope')) {
						jQuery('#posts-container').isotope('appended', jQuery(posts));
						jQuery('#posts-container').isotope();
					}
					jQuery('[data-spy="scroll"]').each(function() {
						var $spy = jQuery(this).scrollspy('refresh');
					});
				});
				var columns = 2;
				for (i = 1; i < 7; i++) {
					if (jQuery('.grid-layout').hasClass('grid-layout-' + i)) {
						columns = i;
					}
				}
				var grid_width = Math.floor(100 / columns * 100) / 100 + '%';
				jQuery('.grid-layout').find('.post').css('width', grid_width);
				if (jQuery('#posts-container').hasClass('isotope')) {
					jQuery('#posts-container').isotope();
				}
			}
			jQuery('.flexslider').flexslider({
				slideshow: Boolean(Number(js_local_vars.slideshow_autoplay)),
				slideshowSpeed: js_local_vars.slideshow_speed,
				video: true,
				pauseOnHover: false,
				useCSS: false,
				prevText: '&#xf104;',
				nextText: '&#xf105;',
				start: function(slider) {
					if (typeof(slider.slides) !== 'undefined' && slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
						if (Number(js_local_vars.pagination_video_slide)) {
							jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
						} else {
							jQuery(slider).find('.flex-control-nav').hide();
						}
						if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
							YT_ready(function() {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}
					} else {
						if (Number(js_local_vars.pagination_video_slide)) {
							jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
						} else {
							jQuery(slider).find('.flex-control-nav').show();
						}
					}
					jQuery.waypoints('viewportHeight');
					jQuery.waypoints('refresh');
				},
				before: function(slider) {
					if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
						if (!Number(js_local_vars.status_vimeo)) {
							$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
						}
						if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
							YT_ready(function() {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}
					}
				},
				after: function(slider) {
					if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
						if (Number(js_local_vars.pagination_video_slide)) {
							jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
						} else {
							jQuery(slider).find('.flex-control-nav').hide();
						}
						if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
							YT_ready(function() {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}
					} else {
						if (Number(js_local_vars.pagination_video_slide)) {
							jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
						} else {
							jQuery(slider).find('.flex-control-nav').show();
						}
					}
					jQuery('[data-spy="scroll"]').each(function() {
						var $spy = jQuery(this).scrollspy('refresh');
					});
				}
			});
			jQuery(posts).each(function() {
				jQuery(this).find('.full-video, .video-shortcode, .wooslider .slide-content').fitVids();
			});
			if (jQuery().isotope && jQuery('#posts-container').hasClass('isotope')) {}
		});
	}
	var blog_shortcode_infinite_container = '.posts-container-infinite';
	if (jQuery('.posts-container-infinite').find('.blog-timeline-layout').length) {
		blog_shortcode_infinite_container = '.posts-container-infinite .blog-timeline-layout';
	}
	jQuery(blog_shortcode_infinite_container).infinitescroll({
		navSelector: "div.pagination",
		nextSelector: "a.pagination-next",
		itemSelector: "div.post, .timeline-date",
		loading: {
			finishedMsg: js_local_vars.infinite_finished_msg,
			msg: jQuery('<div class="loading-container"><div class="loading-spinner"><div class="spinner-1"></div><div class="spinner-2"></div><div class="spinner-3"></div></div><div class="loading-msg">' + js_local_vars.infinite_blog_text + '</div>')
		},
		errorCallback: function() {
			if (jQuery('.posts-container-infinite').hasClass('isotope')) {
				jQuery('.posts-container-infinite').isotope();
			}
		}
	}, function(posts) {
		if (jQuery().isotope) {
			jQuery(posts).hide();
			imagesLoaded(posts, function() {
				jQuery(posts).fadeIn();
				if (jQuery('.posts-container-infinite').hasClass('isotope')) {
					jQuery('.posts-container-infinite').isotope('appended', jQuery(posts));
					jQuery('.posts-container-infinite').isotope();
				}
				jQuery('[data-spy="scroll"]').each(function() {
					var $spy = jQuery(this).scrollspy('refresh');
				});
			});
			var columns = 2;
			for (i = 1; i < 7; i++) {
				if (jQuery('.grid-layout').hasClass('grid-layout-' + i)) {
					columns = i;
				}
			}
			var grid_width = Math.floor(100 / columns * 100) / 100 + '%';
			jQuery('.grid-layout').find('.post').css('width', grid_width);
			if (jQuery('.posts-container-infinite').hasClass('isotope')) {
				jQuery('.posts-container-infinite').isotope();
			}
		}
		jQuery('.flexslider').flexslider({
			slideshow: Boolean(Number(js_local_vars.slideshow_autoplay)),
			slideshowSpeed: js_local_vars.slideshow_speed,
			video: true,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function(slider) {
				if (typeof(slider.slides) !== 'undefined' && slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery.waypoints('viewportHeight');
				jQuery.waypoints('refresh');
			},
			before: function(slider) {
				if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (!Number(js_local_vars.status_vimeo)) {
						$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
					playVideoAndPauseOthers(slider);
				}
			},
			after: function(slider) {
				if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-30px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (!Number(js_local_vars.status_yt) && window.yt_vid_exists == true) {
						YT_ready(function() {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(js_local_vars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery('[data-spy="scroll"]').each(function() {
					var $spy = jQuery(this).scrollspy('refresh');
				});
			}
		});
		jQuery(posts).each(function() {
			jQuery(this).find('.full-video, .video-shortcode, .wooslider .slide-content').fitVids();
		});
		if (jQuery().isotope && jQuery('.posts-container-infinite').hasClass('isotope')) {
			jQuery('.posts-container-infinite').isotope();
		}
	});
	if (js_local_vars.portfolio_pagination_type == 'Infinite Scroll') {
		jQuery('.portfolio:not(.fusion-recent-works) .portfolio-wrapper').infinitescroll({
			navSelector: "div.pagination",
			nextSelector: "a.pagination-next",
			itemSelector: "div.portfolio-item",
			loading: {
				finishedMsg: js_local_vars.infinite_finished_msg,
				msg: jQuery('<div class="loading-container"><div class="loading-spinner"><div class="spinner-1"></div><div class="spinner-2"></div><div class="spinner-3"></div></div><div class="loading-msg">' + js_local_vars.infinite_blog_text + '</div>')
			},
			errorCallback: function() {
				jQuery('.portfolio .portfolio-wrapper').isotope();
			},
		}, function(posts) {
			if (jQuery().isotope) {
				jQuery(posts).hide();
				imagesLoaded(posts, function() {
					jQuery(posts).fadeIn();
					jQuery('.portfolio .portfolio-wrapper').isotope('appended', jQuery(posts));
					jQuery(posts).each(function() {
						jQuery(this).find('.full-video, .video-shortcode, .wooslider .slide-content').fitVids();
					});
					jQuery('.portfolio .portfolio-wrapper').isotope();
					jQuery('[data-spy="scroll"]').each(function() {
						var $spy = jQuery(this).scrollspy('refresh');
					});
				});
			}
		});
	}
	if (jQuery('.sticky-header').length) {
		jQuery('.sticky-header').init_sticky_header();
	}
});
jQuery(document).ajaxComplete(function() {
	jQuery('.header-wrapper .top-menu .cart').css({
		'height': jQuery('.top-menu .cart').prev().css('height'),
		'line-height': jQuery('.top-menu .cart').prev().css('line-height')
	});
	if (jQuery().prettyPhoto) {
		var ppArgs = {
			overlay_gallery: Boolean(Number(js_local_vars.lightbox_gallery)),
			autoplay_slideshow: Boolean(Number(js_local_vars.lightbox_autoplay)),
			show_title: Boolean(Number(js_local_vars.lightbox_title)),
			show_desc: Boolean(Number(js_local_vars.lightbox_desc))
		};
		if (js_local_vars.lightbox_animation_speed) {
			ppArgs.animation_speed = js_local_vars.lightbox_animation_speed.toLowerCase();
		}
		if (js_local_vars.lightbox_slideshow_speed) {
			ppArgs.slideshow = js_local_vars.lightbox_slideshow_speed;
		}
		if (js_local_vars.lightbox_opacity) {
			ppArgs.opacity = js_local_vars.lightbox_opacity;
		}
		if (!Boolean(Number(js_local_vars.lightbox_social))) {
			ppArgs.social_tools = '';
		}
		jQuery("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto(ppArgs);
	}
});
(function(d, l, h, m) {
	function e(a, c) {
		this.element = a;
		this.settings = d.extend({}, k, c);
		this._defaults = k;
		this._name = "fusion_maps";
		this.geocoder = new google.maps.Geocoder;
		this.next_address = 0;
		this.infowindow = new google.maps.InfoWindow;
		this.markers = [];
		this.init()
	}
	var k = {
		addresses: {},
		address_pin: !0,
		animations: !0,
		delay: 10,
		infobox_background_color: !1,
		infobox_styling: "default",
		infobox_text_color: !1,
		map_style: "default",
		map_type: "roadmap",
		marker_icon: !1,
		overlay_color: !1,
		overlay_color_hsl: {},
		pan_control: !0,
		show_address: !0,
		scale_control: !0,
		scrollwheel: !0,
		zoom: 9,
		zoom_control: !0
	};
	d.extend(e.prototype, {
		init: function() {
			var a = {
				zoom: this.settings.zoom,
				mapTypeId: this.settings.map_type,
				scrollwheel: this.settings.scrollwheel,
				scaleControl: this.settings.scale_control,
				panControl: this.settings.pan_control,
				zoomControl: this.settings.zoom_control
			}, c;
			c = 640 < d(h).width() ? !0 : !1;
			this.settings.scrollwheel && (a.draggable = c);
			this.settings.address_pin || (this.settings.addresses = [this.settings.addresses[0]]);
			this.settings.addresses = this.settings.addresses.reverse();
			this.settings.addresses[0].coordinates && (c = new google.maps.LatLng(this.settings.addresses[0].latitude, this.settings.addresses[0].longitude), a.center = c);
			this.map = new google.maps.Map(this.element, a);
			this.settings.overlay_color && "custom" == this.settings.map_style && (a = [{
				stylers: [{
					hue: this.settings.overlay_color
				}, {
					lightness: 2 * this.settings.overlay_color_hsl.lum - 100
				}, {
					saturation: 2 * this.settings.overlay_color_hsl.sat - 100
				}]
			}, {
				featureType: "road",
				elementType: "geometry",
				stylers: [{
					visibility: "simplified"
				}]
			}, {
				featureType: "road",
				elementType: "labels"
			}], this.map.setOptions({
				styles: a
			}));
			this.next_geocode_request()
		},
		geocode_address: function(a) {
			var c = this,
				b;
			b = !0 === a.coordinates ? {
				latLng: new google.maps.LatLng(a.latitude, a.longitude)
			} : {
				address: a.address
			};
			this.geocoder.geocode(b, function(b, d) {
				var f, g;
				d == google.maps.GeocoderStatus.OK ? (g = b[0].geometry.location, f = g.lat(), g = g.lng(), !0 === a.coordinates && "" === a.infobox_content && (a.geocoded_address = b[0].formatted_address), 1 != c.next_address || a.coordinates || c.map.setCenter(b[0].geometry.location), c.settings.address_pin && c.create_marker(a, f, g), c.map.setCenter(b[0].geometry.location)) : d == google.maps.GeocoderStatus.OVER_QUERY_LIMIT && (c.next_address--, c.settings.delay++);
				c.next_geocode_request()
			})
		},
		create_marker: function(a, c, b) {
			b = {
				position: new google.maps.LatLng(c, b),
				map: this.map
			};
			a.infobox_content ? c = a.infobox_content : (c = a.address, !0 === a.coordinates && a.geocoded_address && (c = a.geocoded_address));
			this.settings.animations && (b.animation = google.maps.Animation.DROP);
			"custom" == this.settings.map_style && "theme" == this.settings.marker_icon ? b.icon = new google.maps.MarkerImage(a.marker, null, null, null, new google.maps.Size(37, 55)) : "custom" == this.settings.map_style && a.marker && (b.icon = a.marker);
			a = new google.maps.Marker(b);
			this.markers.push(a);
			this.create_infowindow(c, a)
		},
		create_infowindow: function(a, c) {
			var b, d, e, f = this;
			"custom" == this.settings.infobox_styling && "custom" == this.settings.map_style ? (d = h.createElement("div"), e = {
				content: d,
				disableAutoPan: !1,
				maxWidth: 150,
				pixelOffset: new google.maps.Size(-125, 10),
				zIndex: null,
				boxStyle: {
					background: "none",
					opacity: 1,
					width: "250px"
				},
				closeBoxMargin: "2px 2px 2px 2px",
				closeBoxURL: "//www.google.com/intl/en_us/mapfiles/close.gif",
				infoBoxClearance: new google.maps.Size(1, 1)
			}, d.className = "fusion-info-box", d.style.cssText = "background-color:" + this.settings.infobox_background_color + ";color:" + this.settings.infobox_text_color + ";", d.innerHTML = a, b = new InfoBox(e), b.open(this.map, c), this.settings.show_address || b.setVisible(!1), google.maps.event.addListener(c, "click", function() {
				b.getVisible() ? b.setVisible(!1) : b.setVisible(!0)
			})) : (b = new google.maps.InfoWindow({
				content: a
			}), this.settings.show_address && (b.show = !0, b.open(this.map, c)), google.maps.event.addListener(c, "click", function() {
				b.show ? (b.close(f.map, this), b.show = !1) : (b.open(f.map, this), b.show = !0)
			}))
		},
		next_geocode_request: function() {
			var a = this;
			this.next_address < this.settings.addresses.length && setTimeout(function() {
				a.geocode_address(a.settings.addresses[a.next_address]);
				a.next_address++
			}, this.settings.delay)
		}
	});
	d.fn.fusion_maps = function(a) {
		this.each(function() {
			d.data(this, "plugin_fusion_maps") || d.data(this, "plugin_fusion_maps", new e(this, a))
		});
		return this
	}
})(jQuery, window, document);
jQuery(function($) {
	if (typeof js_local_vars.woocommerce_23 !== 'undefined') {
		var $testProp = $('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').find('qty');
		if ($testProp && $testProp.prop('type') != 'date') {
			$('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
			$('input.qty:not(.product-quantity input.qty)').each(function() {
				var min = parseFloat($(this).attr('min'));
				if (min && min > 0 && parseFloat($(this).val()) < min) {
					$(this).val(min);
				}
			});
			$(document).on('click', '.plus, .minus', function() {
				var $qty = $(this).closest('.quantity').find('.qty'),
					currentVal = parseFloat($qty.val()),
					max = parseFloat($qty.attr('max')),
					min = parseFloat($qty.attr('min')),
					step = $qty.attr('step');
				if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
				if (max === '' || max === 'NaN') max = '';
				if (min === '' || min === 'NaN') min = 0;
				if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;
				if ($(this).is('.plus')) {
					if (max && (max == currentVal || currentVal > max)) {
						$qty.val(max);
					} else {
						$qty.val(currentVal + parseFloat(step));
					}
				} else {
					if (min && (min == currentVal || currentVal < min)) {
						$qty.val(min);
					} else if (currentVal > 0) {
						$qty.val(currentVal - parseFloat(step));
					}
				}
				$qty.trigger('change');
			});
		}
	}
});;
"use strict";
var BJLL_options = BJLL_options || {}, BJLL = {
		_ticking: !1,
		check: function() {
			if (!BJLL._ticking) {
				BJLL._ticking = !0, "undefined" == typeof BJLL.threshold && (BJLL.threshold = "undefined" != typeof BJLL_options.threshold ? parseInt(BJLL_options.threshold) : 200);
				var winH = document.documentElement.clientHeight || body.clientHeight,
					updated = !1,
					els = document.getElementsByClassName("lazy-hidden");
				[].forEach.call(els, function(el) {
						var elemRect = el.getBoundingClientRect();
						winH - elemRect.top + BJLL.threshold > 0 && (BJLL.show(el), updated = !0)
					}), BJLL._ticking = !1, updated && BJLL.check()
			}
		},
		show: function(el) {
			el.className = el.className.replace(/(?:^|\s)lazy-hidden(?!\S)/g, ""), el.addEventListener("load", function() {
				BJLL.customEvent(el, "lazyloaded")
			}, !1);
			var type = el.getAttribute("data-lazy-type");
			if ("image" == type) el.setAttribute("src", el.getAttribute("data-lazy-src")), null != el.getAttribute("data-srcset") && el.setAttribute("srcset", el.getAttribute("data-srcset"));
			else if ("iframe" == type) {
				var s = el.getAttribute("data-lazy-src"),
					div = document.createElement("div");
				div.innerHTML = s;
				var iframe = div.firstChild;
				el.parentNode.replaceChild(iframe, el)
			}
		},
		customEvent: function(el, eventName) {
			var event;
			document.createEvent ? (event = document.createEvent("HTMLEvents"), event.initEvent(eventName, !0, !0)) : (event = document.createEventObject(), event.eventType = eventName), event.eventName = eventName, document.createEvent ? el.dispatchEvent(event) : el.fireEvent("on" + event.eventType, event)
		}
	};
window.addEventListener("load", BJLL.check, !1), window.addEventListener("scroll", BJLL.check, !1), window.addEventListener("resize", BJLL.check, !1), document.getElementsByTagName("body").item(0).addEventListener("post-load", BJLL.check, !1);