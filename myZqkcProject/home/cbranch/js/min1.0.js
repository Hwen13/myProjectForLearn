/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 17.11.2014
*********************************************/


/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.6
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.skinkers.com/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function(a) {
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define(["jquery"], a)
	} else {
		a(jQuery)
	}
}(function(f) {
	var p = "left",
		o = "right",
		e = "up",
		x = "down",
		c = "in",
		z = "out",
		m = "none",
		s = "auto",
		l = "swipe",
		t = "pinch",
		A = "tap",
		j = "doubletap",
		b = "longtap",
		y = "hold",
		D = "horizontal",
		u = "vertical",
		i = "all",
		r = 10,
		g = "start",
		k = "move",
		h = "end",
		q = "cancel",
		a = "ontouchstart" in window,
		v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
		d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
		B = "TouchSwipe";
	var n = {
		fingers: 1,
		threshold: 75,
		cancelThreshold: null,
		pinchThreshold: 20,
		maxTimeThreshold: null,
		fingerReleaseThreshold: 250,
		longTapThreshold: 500,
		doubleTapThreshold: 200,
		swipe: null,
		swipeLeft: null,
		swipeRight: null,
		swipeUp: null,
		swipeDown: null,
		swipeStatus: null,
		pinchIn: null,
		pinchOut: null,
		pinchStatus: null,
		click: null,
		tap: null,
		doubleTap: null,
		longTap: null,
		hold: null,
		triggerOnTouchEnd: true,
		triggerOnTouchLeave: false,
		allowPageScroll: "auto",
		fallbackToMouseEvents: true,
		excludedElements: "label, button, input, select, textarea, a, .noSwipe"
	};
	f.fn.swipe = function(G) {
		var F = f(this),
			E = F.data(B);
		if (E && typeof G === "string") {
			if (E[G]) {
				return E[G].apply(this, Array.prototype.slice.call(arguments, 1))
			} else {
				f.error("Method " + G + " does not exist on jQuery.swipe")
			}
		} else {
			if (!E && (typeof G === "object" || !G)) {
				return w.apply(this, arguments)
			}
		}
		return F
	};
	f.fn.swipe.defaults = n;
	f.fn.swipe.phases = {
		PHASE_START: g,
		PHASE_MOVE: k,
		PHASE_END: h,
		PHASE_CANCEL: q
	};
	f.fn.swipe.directions = {
		LEFT: p,
		RIGHT: o,
		UP: e,
		DOWN: x,
		IN: c,
		OUT: z
	};
	f.fn.swipe.pageScroll = {
		NONE: m,
		HORIZONTAL: D,
		VERTICAL: u,
		AUTO: s
	};
	f.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		ALL: i
	};

	function w(E) {
		if (E && (E.allowPageScroll === undefined && (E.swipe !== undefined || E.swipeStatus !== undefined))) {
			E.allowPageScroll = m
		}
		if (E.click !== undefined && E.tap === undefined) {
			E.tap = E.click
		}
		if (!E) {
			E = {}
		}
		E = f.extend({}, f.fn.swipe.defaults, E);
		return this.each(function() {
			var G = f(this);
			var F = G.data(B);
			if (!F) {
				F = new C(this, E);
				G.data(B, F)
			}
		})
	}

	function C(a4, av) {
		var az = (a || d || !av.fallbackToMouseEvents),
			J = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
			ay = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
			U = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
			S = az ? null : "mouseleave",
			aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
		var ag = 0,
			aP = null,
			ab = 0,
			a1 = 0,
			aZ = 0,
			G = 1,
			aq = 0,
			aJ = 0,
			M = null;
		var aR = f(a4);
		var Z = "start";
		var W = 0;
		var aQ = null;
		var T = 0,
			a2 = 0,
			a5 = 0,
			ad = 0,
			N = 0;
		var aW = null,
			af = null;
		try {
			aR.bind(J, aN);
			aR.bind(aD, a9)
		} catch (ak) {
			f.error("events not supported " + J + "," + aD + " on jQuery.swipe")
		}
		this.enable = function() {
			aR.bind(J, aN);
			aR.bind(aD, a9);
			return aR
		};
		this.disable = function() {
			aK();
			return aR
		};
		this.destroy = function() {
			aK();
			aR.data(B, null);
			return aR
		};
		this.option = function(bc, bb) {
			if (av[bc] !== undefined) {
				if (bb === undefined) {
					return av[bc]
				} else {
					av[bc] = bb
				}
			} else {
				f.error("Option " + bc + " does not exist on jQuery.swipe.options")
			}
			return null
		};

		function aN(bd) {
			if (aB()) {
				return
			}
			if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
				return
			}
			var be = bd.originalEvent ? bd.originalEvent : bd;
			var bc, bb = a ? be.touches[0] : be;
			Z = g;
			if (a) {
				W = be.touches.length
			} else {
				bd.preventDefault()
			}
			ag = 0;
			aP = null;
			aJ = null;
			ab = 0;
			a1 = 0;
			aZ = 0;
			G = 1;
			aq = 0;
			aQ = aj();
			M = aa();
			R();
			if (!a || (W === av.fingers || av.fingers === i) || aX()) {
				ai(0, bb);
				T = at();
				if (W == 2) {
					ai(1, be.touches[1]);
					a1 = aZ = au(aQ[0].start, aQ[1].start)
				}
				if (av.swipeStatus || av.pinchStatus) {
					bc = O(be, Z)
				}
			} else {
				bc = false
			} if (bc === false) {
				Z = q;
				O(be, Z);
				return bc
			} else {
				if (av.hold) {
					af = setTimeout(f.proxy(function() {
						aR.trigger("hold", [be.target]);
						if (av.hold) {
							bc = av.hold.call(aR, be, be.target)
						}
					}, this), av.longTapThreshold)
				}
				ao(true)
			}
			return null
		}

		function a3(be) {
			var bh = be.originalEvent ? be.originalEvent : be;
			if (Z === h || Z === q || am()) {
				return
			}
			var bd, bc = a ? bh.touches[0] : bh;
			var bf = aH(bc);
			a2 = at();
			if (a) {
				W = bh.touches.length
			}
			if (av.hold) {
				clearTimeout(af)
			}
			Z = k;
			if (W == 2) {
				if (a1 == 0) {
					ai(1, bh.touches[1]);
					a1 = aZ = au(aQ[0].start, aQ[1].start)
				} else {
					aH(bh.touches[1]);
					aZ = au(aQ[0].end, aQ[1].end);
					aJ = ar(aQ[0].end, aQ[1].end)
				}
				G = a7(a1, aZ);
				aq = Math.abs(a1 - aZ)
			}
			if ((W === av.fingers || av.fingers === i) || !a || aX()) {
				aP = aL(bf.start, bf.end);
				al(be, aP);
				ag = aS(bf.start, bf.end);
				ab = aM();
				aI(aP, ag);
				if (av.swipeStatus || av.pinchStatus) {
					bd = O(bh, Z)
				}
				if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
					var bb = true;
					if (av.triggerOnTouchLeave) {
						var bg = aY(this);
						bb = E(bf.end, bg)
					}
					if (!av.triggerOnTouchEnd && bb) {
						Z = aC(k)
					} else {
						if (av.triggerOnTouchLeave && !bb) {
							Z = aC(h)
						}
					} if (Z == q || Z == h) {
						O(bh, Z)
					}
				}
			} else {
				Z = q;
				O(bh, Z)
			} if (bd === false) {
				Z = q;
				O(bh, Z)
			}
		}

		function L(bb) {
			var bc = bb.originalEvent;
			if (a) {
				if (bc.touches.length > 0) {
					F();
					return true
				}
			}
			if (am()) {
				W = ad
			}
			a2 = at();
			ab = aM();
			if (ba() || !an()) {
				Z = q;
				O(bc, Z)
			} else {
				if (av.triggerOnTouchEnd || (av.triggerOnTouchEnd == false && Z === k)) {
					bb.preventDefault();
					Z = h;
					O(bc, Z)
				} else {
					if (!av.triggerOnTouchEnd && a6()) {
						Z = h;
						aF(bc, Z, A)
					} else {
						if (Z === k) {
							Z = q;
							O(bc, Z)
						}
					}
				}
			}
			ao(false);
			return null
		}

		function a9() {
			W = 0;
			a2 = 0;
			T = 0;
			a1 = 0;
			aZ = 0;
			G = 1;
			R();
			ao(false)
		}

		function K(bb) {
			var bc = bb.originalEvent;
			if (av.triggerOnTouchLeave) {
				Z = aC(h);
				O(bc, Z)
			}
		}

		function aK() {
			aR.unbind(J, aN);
			aR.unbind(aD, a9);
			aR.unbind(ay, a3);
			aR.unbind(U, L);
			if (S) {
				aR.unbind(S, K)
			}
			ao(false)
		}

		function aC(bf) {
			var be = bf;
			var bd = aA();
			var bc = an();
			var bb = ba();
			if (!bd || bb) {
				be = q
			} else {
				if (bc && bf == k && (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)) {
					be = h
				} else {
					if (!bc && bf == h && av.triggerOnTouchLeave) {
						be = q
					}
				}
			}
			return be
		}

		function O(bd, bb) {
			var bc = undefined;
			if (I() || V()) {
				bc = aF(bd, bb, l)
			} else {
				if ((P() || aX()) && bc !== false) {
					bc = aF(bd, bb, t)
				}
			} if (aG() && bc !== false) {
				bc = aF(bd, bb, j)
			} else {
				if (ap() && bc !== false) {
					bc = aF(bd, bb, b)
				} else {
					if (ah() && bc !== false) {
						bc = aF(bd, bb, A)
					}
				}
			} if (bb === q) {
				a9(bd)
			}
			if (bb === h) {
				if (a) {
					if (bd.touches.length == 0) {
						a9(bd)
					}
				} else {
					a9(bd)
				}
			}
			return bc
		}

		function aF(be, bb, bd) {
			var bc = undefined;
			if (bd == l) {
				aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ab || 0, W, aQ]);
				if (av.swipeStatus) {
					bc = av.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ab || 0, W, aQ);
					if (bc === false) {
						return false
					}
				}
				if (bb == h && aV()) {
					aR.trigger("swipe", [aP, ag, ab, W, aQ]);
					if (av.swipe) {
						bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
						if (bc === false) {
							return false
						}
					}
					switch (aP) {
						case p:
							aR.trigger("swipeLeft", [aP, ag, ab, W, aQ]);
							if (av.swipeLeft) {
								bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ)
							}
							break;
						case o:
							aR.trigger("swipeRight", [aP, ag, ab, W, aQ]);
							if (av.swipeRight) {
								bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ)
							}
							break;
						case e:
							aR.trigger("swipeUp", [aP, ag, ab, W, aQ]);
							if (av.swipeUp) {
								bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ)
							}
							break;
						case x:
							aR.trigger("swipeDown", [aP, ag, ab, W, aQ]);
							if (av.swipeDown) {
								bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ)
							}
							break
					}
				}
			}
			if (bd == t) {
				aR.trigger("pinchStatus", [bb, aJ || null, aq || 0, ab || 0, W, G, aQ]);
				if (av.pinchStatus) {
					bc = av.pinchStatus.call(aR, be, bb, aJ || null, aq || 0, ab || 0, W, G, aQ);
					if (bc === false) {
						return false
					}
				}
				if (bb == h && a8()) {
					switch (aJ) {
						case c:
							aR.trigger("pinchIn", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
							if (av.pinchIn) {
								bc = av.pinchIn.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
							}
							break;
						case z:
							aR.trigger("pinchOut", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
							if (av.pinchOut) {
								bc = av.pinchOut.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
							}
							break
					}
				}
			}
			if (bd == A) {
				if (bb === q || bb === h) {
					clearTimeout(aW);
					clearTimeout(af);
					if (Y() && !H()) {
						N = at();
						aW = setTimeout(f.proxy(function() {
							N = null;
							aR.trigger("tap", [be.target]);
							if (av.tap) {
								bc = av.tap.call(aR, be, be.target)
							}
						}, this), av.doubleTapThreshold)
					} else {
						N = null;
						aR.trigger("tap", [be.target]);
						if (av.tap) {
							bc = av.tap.call(aR, be, be.target)
						}
					}
				}
			} else {
				if (bd == j) {
					if (bb === q || bb === h) {
						clearTimeout(aW);
						N = null;
						aR.trigger("doubletap", [be.target]);
						if (av.doubleTap) {
							bc = av.doubleTap.call(aR, be, be.target)
						}
					}
				} else {
					if (bd == b) {
						if (bb === q || bb === h) {
							clearTimeout(aW);
							N = null;
							aR.trigger("longtap", [be.target]);
							if (av.longTap) {
								bc = av.longTap.call(aR, be, be.target)
							}
						}
					}
				}
			}
			return bc
		}

		function an() {
			var bb = true;
			if (av.threshold !== null) {
				bb = ag >= av.threshold
			}
			return bb
		}

		function ba() {
			var bb = false;
			if (av.cancelThreshold !== null && aP !== null) {
				bb = (aT(aP) - ag) >= av.cancelThreshold
			}
			return bb
		}

		function ae() {
			if (av.pinchThreshold !== null) {
				return aq >= av.pinchThreshold
			}
			return true
		}

		function aA() {
			var bb;
			if (av.maxTimeThreshold) {
				if (ab >= av.maxTimeThreshold) {
					bb = false
				} else {
					bb = true
				}
			} else {
				bb = true
			}
			return bb
		}

		function al(bb, bc) {
			if (av.allowPageScroll === m || aX()) {
				bb.preventDefault()
			} else {
				var bd = av.allowPageScroll === s;
				switch (bc) {
					case p:
						if ((av.swipeLeft && bd) || (!bd && av.allowPageScroll != D)) {
							bb.preventDefault()
						}
						break;
					case o:
						if ((av.swipeRight && bd) || (!bd && av.allowPageScroll != D)) {
							bb.preventDefault()
						}
						break;
					case e:
						if ((av.swipeUp && bd) || (!bd && av.allowPageScroll != u)) {
							bb.preventDefault()
						}
						break;
					case x:
						if ((av.swipeDown && bd) || (!bd && av.allowPageScroll != u)) {
							bb.preventDefault()
						}
						break
				}
			}
		}

		function a8() {
			var bc = aO();
			var bb = X();
			var bd = ae();
			return bc && bb && bd
		}

		function aX() {
			return !!(av.pinchStatus || av.pinchIn || av.pinchOut)
		}

		function P() {
			return !!(a8() && aX())
		}

		function aV() {
			var be = aA();
			var bg = an();
			var bd = aO();
			var bb = X();
			var bc = ba();
			var bf = !bc && bb && bd && bg && be;
			return bf
		}

		function V() {
			return !!(av.swipe || av.swipeStatus || av.swipeLeft || av.swipeRight || av.swipeUp || av.swipeDown)
		}

		function I() {
			return !!(aV() && V())
		}

		function aO() {
			return ((W === av.fingers || av.fingers === i) || !a)
		}

		function X() {
			return aQ[0].end.x !== 0
		}

		function a6() {
			return !!(av.tap)
		}

		function Y() {
			return !!(av.doubleTap)
		}

		function aU() {
			return !!(av.longTap)
		}

		function Q() {
			if (N == null) {
				return false
			}
			var bb = at();
			return (Y() && ((bb - N) <= av.doubleTapThreshold))
		}

		function H() {
			return Q()
		}

		function ax() {
			return ((W === 1 || !a) && (isNaN(ag) || ag < av.threshold))
		}

		function a0() {
			return ((ab > av.longTapThreshold) && (ag < r))
		}

		function ah() {
			return !!(ax() && a6())
		}

		function aG() {
			return !!(Q() && Y())
		}

		function ap() {
			return !!(a0() && aU())
		}

		function F() {
			a5 = at();
			ad = event.touches.length + 1
		}

		function R() {
			a5 = 0;
			ad = 0
		}

		function am() {
			var bb = false;
			if (a5) {
				var bc = at() - a5;
				if (bc <= av.fingerReleaseThreshold) {
					bb = true
				}
			}
			return bb
		}

		function aB() {
			return !!(aR.data(B + "_intouch") === true)
		}

		function ao(bb) {
			if (bb === true) {
				aR.bind(ay, a3);
				aR.bind(U, L);
				if (S) {
					aR.bind(S, K)
				}
			} else {
				aR.unbind(ay, a3, false);
				aR.unbind(U, L, false);
				if (S) {
					aR.unbind(S, K, false)
				}
			}
			aR.data(B + "_intouch", bb === true)
		}

		function ai(bc, bb) {
			var bd = bb.identifier !== undefined ? bb.identifier : 0;
			aQ[bc].identifier = bd;
			aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
			aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
			return aQ[bc]
		}

		function aH(bb) {
			var bd = bb.identifier !== undefined ? bb.identifier : 0;
			var bc = ac(bd);
			bc.end.x = bb.pageX || bb.clientX;
			bc.end.y = bb.pageY || bb.clientY;
			return bc
		}

		function ac(bc) {
			for (var bb = 0; bb < aQ.length; bb++) {
				if (aQ[bb].identifier == bc) {
					return aQ[bb]
				}
			}
		}

		function aj() {
			var bb = [];
			for (var bc = 0; bc <= 5; bc++) {
				bb.push({
					start: {
						x: 0,
						y: 0
					},
					end: {
						x: 0,
						y: 0
					},
					identifier: 0
				})
			}
			return bb
		}

		function aI(bb, bc) {
			bc = Math.max(bc, aT(bb));
			M[bb].distance = bc
		}

		function aT(bb) {
			if (M[bb]) {
				return M[bb].distance
			}
			return undefined
		}

		function aa() {
			var bb = {};
			bb[p] = aw(p);
			bb[o] = aw(o);
			bb[e] = aw(e);
			bb[x] = aw(x);
			return bb
		}

		function aw(bb) {
			return {
				direction: bb,
				distance: 0
			}
		}

		function aM() {
			return a2 - T
		}

		function au(be, bd) {
			var bc = Math.abs(be.x - bd.x);
			var bb = Math.abs(be.y - bd.y);
			return Math.round(Math.sqrt(bc * bc + bb * bb))
		}

		function a7(bb, bc) {
			var bd = (bc / bb) * 1;
			return bd.toFixed(2)
		}

		function ar() {
			if (G < 1) {
				return z
			} else {
				return c
			}
		}

		function aS(bc, bb) {
			return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)))
		}

		function aE(be, bc) {
			var bb = be.x - bc.x;
			var bg = bc.y - be.y;
			var bd = Math.atan2(bg, bb);
			var bf = Math.round(bd * 180 / Math.PI);
			if (bf < 0) {
				bf = 360 - Math.abs(bf)
			}
			return bf
		}

		function aL(bc, bb) {
			var bd = aE(bc, bb);
			if ((bd <= 45) && (bd >= 0)) {
				return p
			} else {
				if ((bd <= 360) && (bd >= 315)) {
					return p
				} else {
					if ((bd >= 135) && (bd <= 225)) {
						return o
					} else {
						if ((bd > 45) && (bd < 135)) {
							return x
						} else {
							return e
						}
					}
				}
			}
		}

		function at() {
			var bb = new Date();
			return bb.getTime()
		}

		function aY(bb) {
			bb = f(bb);
			var bd = bb.offset();
			var bc = {
				left: bd.left,
				right: bd.left + bb.outerWidth(),
				top: bd.top,
				bottom: bd.top + bb.outerHeight()
			};
			return bc
		}

		function E(bb, bc) {
			return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom)
		}
	}
}));



if (typeof(console) === 'undefined') {
	var console = {};
	console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
};

if (window.tplogs == true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch (e) {}


var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;

var punchgs = window.GreenSockGlobals = {};

if (window.tplogs == true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch (e) {}

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t, e) {
	"use strict";
	var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
	if (!i.TweenLite) {
		var s, r, n, a, o, l = function(t) {
				var e, s = t.split("."),
					r = i;
				for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
				return r
			}, h = l("com.greensock"),
			_ = 1e-10,
			u = function(t) {
				var e, i = [],
					s = t.length;
				for (e = 0; e !== s; i.push(t[e++]));
				return i
			}, m = function() {}, f = function() {
				var t = Object.prototype.toString,
					e = t.call([]);
				return function(i) {
					return null != i && (i instanceof Array || "object" == typeof i && !! i.push && t.call(i) === e)
				}
			}(),
			c = {}, p = function(s, r, n, a) {
				this.sc = c[s] ? c[s].sc : [], c[s] = this, this.gsClass = null, this.func = n;
				var o = [];
				this.check = function(h) {
					for (var _, u, m, f, d = r.length, v = d; --d > -1;)(_ = c[r[d]] || new p(r[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
					if (0 === v && n)
						for (u = ("com.greensock." + s).split("."), m = u.pop(), f = l(u.join("."))[m] = this.gsClass = n.apply(n, o), a && (i[m] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
							return f
						}) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check()
				}, this.check(!0)
			}, d = t._gsDefine = function(t, e, i, s) {
				return new p(t, e, i, s)
			}, v = h._class = function(t, e, i) {
				return e = e || function() {}, d(t, [], function() {
					return e
				}, i), e
			};
		d.globals = i;
		var g = [0, 0, 1, 1],
			T = [],
			y = v("easing.Ease", function(t, e, i, s) {
				this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
			}, !0),
			w = y.map = {}, P = y.register = function(t, e, i, s) {
				for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
					for (n = l[_], r = s ? v("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
			};
		for (n = y.prototype, n._calcEnd = !1, n.getRatio = function(t) {
			if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
			var e = this._type,
				i = this._power,
				s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
			return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
		}, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, P(new y(null, null, 1, r), n, "easeOut", !0), P(new y(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), P(new y(null, null, 3, r), n, "easeInOut");
		w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
		var b = v("events.EventDispatcher", function(t) {
			this._listeners = {}, this._eventTarget = t || this
		});
		n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
			r = r || 0;
			var n, l, h = this._listeners[t],
				_ = 0;
			for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1);
			h.splice(_, 0, {
				c: e,
				s: i,
				up: s,
				pr: r
			}), this !== a || o || a.wake()
		}, n.removeEventListener = function(t, e) {
			var i, s = this._listeners[t];
			if (s)
				for (i = s.length; --i > -1;)
					if (s[i].c === e) return s.splice(i, 1), void 0
		}, n.dispatchEvent = function(t) {
			var e, i, s, r = this._listeners[t];
			if (r)
				for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
					type: t,
					target: i
				}) : s.c.call(s.s || i))
		};
		var k = t.requestAnimationFrame,
			A = t.cancelAnimationFrame,
			S = Date.now || function() {
				return (new Date).getTime()
			}, x = S();
		for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !k;) k = t[s[r] + "RequestAnimationFrame"], A = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
		v("Ticker", function(t, e) {
			var i, s, r, n, l, h = this,
				u = S(),
				f = e !== !1 && k,
				c = 500,
				p = 33,
				d = function(t) {
					var e, a, o = S() - x;
					o > c && (u += o - p), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(d)), a && h.dispatchEvent("tick")
				};
			b.call(h), h.time = h.frame = 0, h.tick = function() {
				d(!0)
			}, h.lagSmoothing = function(t, e) {
				c = t || 1 / _, p = Math.min(e, c, 0)
			}, h.sleep = function() {
				null != r && (f && A ? A(r) : clearTimeout(r), s = m, r = null, h === a && (o = !1))
			}, h.wake = function() {
				null !== r ? h.sleep() : h.frame > 10 && (x = S() - c + 5), s = 0 === i ? m : f && k ? k : function(t) {
					return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
				}, h === a && (o = !0), d(2)
			}, h.fps = function(t) {
				return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, h.wake(), void 0) : i
			}, h.useRAF = function(t) {
				return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f
			}, h.fps(t), setTimeout(function() {
				f && (!r || 5 > h.frame) && h.useRAF(!1)
			}, 1500)
		}), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker;
		var R = v("core.Animation", function(t, e) {
			if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
				o || a.wake();
				var i = this.vars.useFrames ? q : B;
				i.add(this, i._time), this.vars.paused && this.paused(!0)
			}
		});
		a = R.ticker = new h.Ticker, n = R.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
		var C = function() {
			o && S() - x > 2e3 && a.wake(), setTimeout(C, 2e3)
		};
		C(), n.play = function(t, e) {
			return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
		}, n.pause = function(t, e) {
			return null != t && this.seek(t, e), this.paused(!0)
		}, n.resume = function(t, e) {
			return null != t && this.seek(t, e), this.paused(!1)
		}, n.seek = function(t, e) {
			return this.totalTime(Number(t), e !== !1)
		}, n.restart = function(t, e) {
			return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
		}, n.reverse = function(t, e) {
			return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
		}, n.render = function() {}, n.invalidate = function() {
			return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
		}, n.isActive = function() {
			var t, e = this._timeline,
				i = this._startTime;
			return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
		}, n._enabled = function(t, e) {
			return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
		}, n._kill = function() {
			return this._enabled(!1, !1)
		}, n.kill = function(t, e) {
			return this._kill(t, e), this
		}, n._uncache = function(t) {
			for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
			return this
		}, n._swapSelfInParams = function(t) {
			for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
			return i
		}, n.eventCallback = function(t, e, i, s) {
			if ("on" === (t || "").substr(0, 2)) {
				var r = this.vars;
				if (1 === arguments.length) return r[t];
				null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
			}
			return this
		}, n.delay = function(t) {
			return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
		}, n.duration = function(t) {
			return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
		}, n.totalDuration = function(t) {
			return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
		}, n.time = function(t, e) {
			return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
		}, n.totalTime = function(t, e, i) {
			if (o || a.wake(), !arguments.length) return this._totalTime;
			if (this._timeline) {
				if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
					this._dirty && this.totalDuration();
					var s = this._totalDuration,
						r = this._timeline;
					if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
						for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
				}
				this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && M())
			}
			return this
		}, n.progress = n.totalProgress = function(t, e) {
			return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
		}, n.startTime = function(t) {
			return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
		}, n.endTime = function(t) {
			return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
		}, n.timeScale = function(t) {
			if (!arguments.length) return this._timeScale;
			if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
				var e = this._pauseTime,
					i = e || 0 === e ? e : this._timeline.totalTime();
				this._startTime = i - (i - this._startTime) * this._timeScale / t
			}
			return this._timeScale = t, this._uncache(!1)
		}, n.reversed = function(t) {
			return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
		}, n.paused = function(t) {
			if (!arguments.length) return this._paused;
			if (t != this._paused && this._timeline) {
				o || t || a.wake();
				var e = this._timeline,
					i = e.rawTime(),
					s = i - this._pauseTime;
				!t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
			}
			return this._gc && !t && this._enabled(!0, !1), this
		};
		var D = v("core.SimpleTimeline", function(t) {
			R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
		});
		n = D.prototype = new R, n.constructor = D, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
			var i, s;
			if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
				for (s = t._startTime; i && i._startTime > s;) i = i._prev;
			return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
		}, n._remove = function(t, e) {
			return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
		}, n.render = function(t, e, i) {
			var s, r = this._first;
			for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
		}, n.rawTime = function() {
			return o || a.wake(), this._totalTime
		};
		var I = v("TweenLite", function(e, i, s) {
			if (R.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
			this.target = e = "string" != typeof e ? e : I.selector(e) || e;
			var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
				l = this.vars.overwrite;
			if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
				for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = $(n, this, !1), 1 === l && this._siblings[r].length > 1 && H(n, this, null, 1, this._siblings[r])) : (n = a[r--] = I.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
			else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && H(e, this, null, 1, this._siblings);
			(this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
		}, !0),
			E = function(e) {
				return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
			}, O = function(t, e) {
				var i, s = {};
				for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i], delete t[i]);
				t.css = s
			};
		n = I.prototype = new R, n.constructor = I, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, I.version = "1.14.2", I.defaultEase = n._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = !0, I.lagSmoothing = function(t, e) {
			a.lagSmoothing(t, e)
		}, I.selector = t.$ || t.jQuery || function(e) {
			var i = t.$ || t.jQuery;
			return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
		};
		var z = [],
			L = {}, N = I._internals = {
				isArray: f,
				isSelector: E,
				lazyTweens: z
			}, U = I._plugins = {}, F = N.tweenLookup = {}, j = 0,
			G = N.reservedProps = {
				ease: 1,
				delay: 1,
				overwrite: 1,
				onComplete: 1,
				onCompleteParams: 1,
				onCompleteScope: 1,
				useFrames: 1,
				runBackwards: 1,
				startAt: 1,
				onUpdate: 1,
				onUpdateParams: 1,
				onUpdateScope: 1,
				onStart: 1,
				onStartParams: 1,
				onStartScope: 1,
				onReverseComplete: 1,
				onReverseCompleteParams: 1,
				onReverseCompleteScope: 1,
				onRepeat: 1,
				onRepeatParams: 1,
				onRepeatScope: 1,
				easeParams: 1,
				yoyo: 1,
				immediateRender: 1,
				repeat: 1,
				repeatDelay: 1,
				data: 1,
				paused: 1,
				reversed: 1,
				autoCSS: 1,
				lazy: 1,
				onOverwrite: 1
			}, Q = {
				none: 0,
				all: 1,
				auto: 2,
				concurrent: 3,
				allOnStart: 4,
				preexisting: 5,
				"true": 1,
				"false": 0
			}, q = R._rootFramesTimeline = new D,
			B = R._rootTimeline = new D,
			M = N.lazyRender = function() {
				var t, e = z.length;
				for (L = {}; --e > -1;) t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
				z.length = 0
			};
		B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout(M, 1), R._updateRoot = I.render = function() {
			var t, e, i;
			if (z.length && M(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), z.length && M(), !(a.frame % 120)) {
				for (i in F) {
					for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
					0 === e.length && delete F[i]
				}
				if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
					for (; i && i._paused;) i = i._next;
					i || a.sleep()
				}
			}
		}, a.addEventListener("tick", R._updateRoot);
		var $ = function(t, e, i) {
			var s, r, n = t._gsTweenID;
			if (F[n || (t._gsTweenID = n = "t" + j++)] || (F[n] = {
				target: t,
				tweens: []
			}), e && (s = F[n].tweens, s[r = s.length] = e, i))
				for (; --r > -1;) s[r] === e && s.splice(r, 1);
			return F[n].tweens
		}, K = function(t, e, i, s) {
				var r, n, a = t.vars.onOverwrite;
				return a && (r = a(t, e, i, s)), a = I.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
			}, H = function(t, e, i, s, r) {
				var n, a, o, l;
				if (1 === s || s >= 4) {
					for (l = r.length, n = 0; l > n; n++)
						if ((o = r[n]) !== e) o._gc || K(o, e) && o._enabled(!1, !1) && (a = !0);
						else
					if (5 === s) break;
					return a
				}
				var h, u = e._startTime + _,
					m = [],
					f = 0,
					c = 0 === e._duration;
				for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, c), 0 === J(o, h, c) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
				for (n = f; --n > -1;)
					if (o = m[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
						if (2 !== s && !K(o, e)) continue;
						o._enabled(!1, !1) && (a = !0)
					}
				return a
			}, J = function(t, e, i) {
				for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
					if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
					s = s._timeline
				}
				return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
			};
		n._init = function() {
			var t, e, i, s, r, n = this.vars,
				a = this._overwrittenProps,
				o = this._duration,
				l = !! n.immediateRender,
				h = n.ease;
			if (n.startAt) {
				this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
				for (s in n.startAt) r[s] = n.startAt[s];
				if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = I.to(this.target, 0, r), l)
					if (this._time > 0) this._startAt = null;
					else
				if (0 !== o) return
			} else if (n.runBackwards && 0 !== o)
				if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
				else {
					0 !== this._time && (l = !1), i = {};
					for (s in n) G[s] && "autoCSS" !== s || (i[s] = n[s]);
					if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
						if (0 === this._time) return
					} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
				}
			if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, n.easeParams) : w[h] || I.defaultEase : I.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
				for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
			else e = this._initProps(this.target, this._propLookup, this._siblings, a); if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
				for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
			this._onUpdate = n.onUpdate, this._initted = !0
		}, n._initProps = function(e, i, s, r) {
			var n, a, o, l, h, _;
			if (null == e) return !1;
			L[e._gsTweenID] && M(), this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && O(this.vars, e);
			for (n in this.vars) {
				if (_ = this.vars[n], G[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
				else if (U[n] && (l = new U[n])._onInitTween(e, this.vars[n], this)) {
					for (this._firstPT = h = {
						_next: this._firstPT,
						t: l,
						p: "setRatio",
						s: 0,
						c: 1,
						f: !0,
						n: n,
						pg: !0,
						pr: l._priority
					}, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
					(l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
				} else this._firstPT = i[n] = h = {
					_next: this._firstPT,
					t: e,
					p: n,
					f: "function" == typeof e[n],
					n: n,
					pg: !1,
					pr: 0
				}, h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
				h && h._next && (h._next._prev = h)
			}
			return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && H(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
		}, n.render = function(t, e, i) {
			var s, r, n, a, o = this._time,
				l = this._duration,
				h = this._rawPrevTime;
			if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
			else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);
			else if (this._totalTime = this._time = t, this._easeType) {
				var u = t / l,
					m = this._easeType,
					f = this._easePower;
				(1 === m || 3 === m && u >= .5) && (u = 1 - u), 3 === m && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === m ? 1 - u : 2 === m ? u : .5 > t / l ? u / 2 : 1 - u / 2
			} else this.ratio = this._ease.getRatio(t / l); if (this._time !== o || i) {
				if (!this._initted) {
					if (this._init(), !this._initted || this._gc) return;
					if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), this._lazy = [t, e], void 0;
					this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
				}
				for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
				this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || T), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
			}
		}, n._kill = function(t, e, i) {
			if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
			e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
			var s, r, n, a, o, l, h, _, u;
			if ((f(e) || E(e)) && "number" != typeof e[0])
				for (s = e.length; --s > -1;) this._kill(t, e[s]) && (l = !0);
			else {
				if (this._targets) {
					for (s = this._targets.length; --s > -1;)
						if (e === this._targets[s]) {
							o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
							break
						}
				} else {
					if (e !== this.target) return !1;
					o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
				} if (o) {
					if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
						for (n in h) o[n] && (u || (u = []), u.push(n));
						if (!K(this, i, e, u)) return !1
					}
					for (n in h)(a = o[n]) && (a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
					!this._firstPT && this._initted && this._enabled(!1, !1)
				}
			}
			return l
		}, n.invalidate = function() {
			return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
		}, n._enabled = function(t, e) {
			if (o || a.wake(), t && this._gc) {
				var i, s = this._targets;
				if (s)
					for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
				else this._siblings = $(this.target, this, !0)
			}
			return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
		}, I.to = function(t, e, i) {
			return new I(t, e, i)
		}, I.from = function(t, e, i) {
			return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
		}, I.fromTo = function(t, e, i, s) {
			return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s)
		}, I.delayedCall = function(t, e, i, s, r) {
			return new I(e, 0, {
				delay: t,
				onComplete: e,
				onCompleteParams: i,
				onCompleteScope: s,
				onReverseComplete: e,
				onReverseCompleteParams: i,
				onReverseCompleteScope: s,
				immediateRender: !1,
				useFrames: r,
				overwrite: 0
			})
		}, I.set = function(t, e) {
			return new I(t, 0, e)
		}, I.getTweensOf = function(t, e) {
			if (null == t) return [];
			t = "string" != typeof t ? t : I.selector(t) || t;
			var i, s, r, n;
			if ((f(t) || E(t)) && "number" != typeof t[0]) {
				for (i = t.length, s = []; --i > -1;) s = s.concat(I.getTweensOf(t[i], e));
				for (i = s.length; --i > -1;)
					for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
			} else
				for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
			return s
		}, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
			"object" == typeof e && (i = e, e = !1);
			for (var s = I.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
		};
		var V = v("plugins.TweenPlugin", function(t, e) {
			this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
		}, !0);
		if (n = V.prototype, V.version = "1.10.1", V.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) {
			var a, o;
			return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
				_next: this._firstPT,
				t: t,
				p: e,
				s: i,
				c: a,
				f: "function" == typeof t[e],
				n: r || e,
				r: n
			}, o._next && (o._next._prev = o), o) : void 0
		}, n.setRatio = function(t) {
			for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
		}, n._kill = function(t) {
			var e, i = this._overwriteProps,
				s = this._firstPT;
			if (null != t[this._propName]) this._overwriteProps = [];
			else
				for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
			for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
			return !1
		}, n._roundProps = function(t, e) {
			for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
		}, I._onPluginEvent = function(t, e) {
			var i, s, r, n, a, o = e._firstPT;
			if ("_onInitAllProps" === t) {
				for (; o;) {
					for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
					(o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a
				}
				o = e._firstPT = r
			}
			for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
			return i
		}, V.activate = function(t) {
			for (var e = t.length; --e > -1;) t[e].API === V.API && (U[(new t[e])._propName] = t[e]);
			return !0
		}, d.plugin = function(t) {
			if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
			var e, i = t.propName,
				s = t.priority || 0,
				r = t.overwriteProps,
				n = {
					init: "_onInitTween",
					set: "setRatio",
					kill: "_kill",
					round: "_roundProps",
					initAll: "_onInitAllProps"
				}, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
					V.call(this, i, s), this._overwriteProps = r || []
				}, t.global === !0),
				o = a.prototype = new V(i);
			o.constructor = a, a.API = t.API;
			for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
			return a.version = t.version, V.activate([a]), a
		}, s = t._gsQueue) {
			for (r = 0; s.length > r; r++) s[r]();
			for (n in c) c[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
		}
		o = !1
	}
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
	"use strict";
	_gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
		var s = function(t) {
			e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
			var i, s, r = this.vars;
			for (s in r) i = r[s], o(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
			o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
		}, r = 1e-10,
			n = i._internals,
			a = n.isSelector,
			o = n.isArray,
			h = n.lazyTweens,
			l = n.lazyRender,
			_ = [],
			u = _gsScope._gsDefine.globals,
			c = function(t) {
				var e, i = {};
				for (e in t) i[e] = t[e];
				return i
			}, p = function(t, e, i, s) {
				var r = t._timeline._totalTime;
				(e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || _), this._forcingPlayhead && t._timeline.seek(r))
			}, f = function(t) {
				var e, i = [],
					s = t.length;
				for (e = 0; e !== s; i.push(t[e++]));
				return i
			}, m = s.prototype = new e;
		return s.version = "1.14.2", m.constructor = s, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, s, r) {
			var n = s.repeat && u.TweenMax || i;
			return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
		}, m.from = function(t, e, s, r) {
			return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
		}, m.fromTo = function(t, e, s, r, n) {
			var a = r.repeat && u.TweenMax || i;
			return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
		}, m.staggerTo = function(t, e, r, n, o, h, l, _) {
			var u, p = new s({
					onComplete: h,
					onCompleteParams: l,
					onCompleteScope: _,
					smoothChildTiming: this.smoothChildTiming
				});
			for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = f(t)), n = n || 0, 0 > n && (t = f(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), p.to(t[u], e, c(r), u * n);
			return this.add(p, o)
		}, m.staggerFrom = function(t, e, i, s, r, n, a, o) {
			return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
		}, m.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
			return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
		}, m.call = function(t, e, s, r) {
			return this.add(i.delayedCall(0, t, e, s), r)
		}, m.set = function(t, e, s) {
			return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
		}, s.exportRoot = function(t, e) {
			t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
			var r, n, a = new s(t),
				o = a._timeline;
			for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
			return o.add(a, 0), a
		}, m.add = function(r, n, a, h) {
			var l, _, u, c, p, f;
			if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
				if (r instanceof Array || r && r.push && o(r)) {
					for (a = a || "normal", h = h || 0, l = n, _ = r.length, u = 0; _ > u; u++) o(c = r[u]) && (c = new s({
						tweens: c
					})), this.add(c, l), "string" != typeof c && "function" != typeof c && ("sequence" === a ? l = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), l += h;
					return this._uncache(!0)
				}
				if ("string" == typeof r) return this.addLabel(r, n);
				if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
				r = i.delayedCall(0, r)
			}
			if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
				for (p = this, f = p.rawTime() > r._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
			return this
		}, m.remove = function(e) {
			if (e instanceof t) return this._remove(e, !1);
			if (e instanceof Array || e && e.push && o(e)) {
				for (var i = e.length; --i > -1;) this.remove(e[i]);
				return this
			}
			return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
		}, m._remove = function(t, i) {
			e.prototype._remove.call(this, t, i);
			var s = this._last;
			return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
		}, m.append = function(t, e) {
			return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
		}, m.insert = m.insertMultiple = function(t, e, i, s) {
			return this.add(t, e || 0, i, s)
		}, m.appendMultiple = function(t, e, i, s) {
			return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
		}, m.addLabel = function(t, e) {
			return this._labels[t] = this._parseTimeOrLabel(e), this
		}, m.addPause = function(t, e, i, s) {
			return this.call(p, ["{self}", e, i, s], this, t)
		}, m.removeLabel = function(t) {
			return delete this._labels[t], this
		}, m.getLabelTime = function(t) {
			return null != this._labels[t] ? this._labels[t] : -1
		}, m._parseTimeOrLabel = function(e, i, s, r) {
			var n;
			if (r instanceof t && r.timeline === this) this.remove(r);
			else if (r && (r instanceof Array || r.push && o(r)))
				for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
			if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
			if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
			else {
				if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
				i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
			}
			return Number(e) + i
		}, m.seek = function(t, e) {
			return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
		}, m.stop = function() {
			return this.paused(!0)
		}, m.gotoAndPlay = function(t, e) {
			return this.play(t, e)
		}, m.gotoAndStop = function(t, e) {
			return this.pause(t, e)
		}, m.render = function(t, e, i) {
			this._gc && this._enabled(!0, !1);
			var s, n, a, o, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
				p = this._time,
				f = this._startTime,
				m = this._timeScale,
				d = this._paused;
			if (t >= c ? (this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || u) {
				if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _)), this._time >= p)
					for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
				else
					for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
				this._onUpdate && (e || (h.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || _)))
			}
		}, m._hasPausedChild = function() {
			for (var t = this._first; t;) {
				if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
				t = t._next
			}
			return !1
		}, m.getChildren = function(t, e, s, r) {
			r = r || -9999999999;
			for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
			return n
		}, m.getTweensOf = function(t, e) {
			var s, r, n = this._gc,
				a = [],
				o = 0;
			for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
			return n && this._enabled(!1, !0), a
		}, m.recent = function() {
			return this._recent
		}, m._contains = function(t) {
			for (var e = t.timeline; e;) {
				if (e === this) return !0;
				e = e.timeline
			}
			return !1
		}, m.shiftChildren = function(t, e, i) {
			i = i || 0;
			for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
			if (e)
				for (s in n) n[s] >= i && (n[s] += t);
			return this._uncache(!0)
		}, m._kill = function(t, e) {
			if (!t && !e) return this._enabled(!1, !1);
			for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
			return r
		}, m.clear = function(t) {
			var e = this.getChildren(!1, !0, !0),
				i = e.length;
			for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
			return t !== !1 && (this._labels = {}), this._uncache(!0)
		}, m.invalidate = function() {
			for (var e = this._first; e;) e.invalidate(), e = e._next;
			return t.prototype.invalidate.call(this)
		}, m._enabled = function(t, i) {
			if (t === this._gc)
				for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
			return e.prototype._enabled.call(this, t, i)
		}, m.totalTime = function() {
			this._forcingPlayhead = !0;
			var e = t.prototype.totalTime.apply(this, arguments);
			return this._forcingPlayhead = !1, e
		}, m.duration = function(t) {
			return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
		}, m.totalDuration = function(t) {
			if (!arguments.length) {
				if (this._dirty) {
					for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
					this._duration = this._totalDuration = s, this._dirty = !1
				}
				return this._totalDuration
			}
			return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
		}, m.usesFrames = function() {
			for (var e = this._timeline; e._timeline;) e = e._timeline;
			return e === t._rootFramesTimeline
		}, m.rawTime = function() {
			return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
		}, s
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
	"use strict";
	var e = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[t]
	};
	"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
}("TimelineLite");

/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
	"use strict";
	_gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
		var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
			n = r.com.greensock,
			a = 2 * Math.PI,
			o = Math.PI / 2,
			h = n._class,
			l = function(e, i) {
				var s = h("easing." + e, function() {}, !0),
					r = s.prototype = new t;
				return r.constructor = s, r.getRatio = i, s
			}, _ = t.register || function() {}, u = function(t, e, i, s) {
				var r = h("easing." + t, {
					easeOut: new e,
					easeIn: new i,
					easeInOut: new s
				}, !0);
				return _(r, t), r
			}, c = function(t, e, i) {
				this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
			}, p = function(e, i) {
				var s = h("easing." + e, function(t) {
					this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
				}, !0),
					r = s.prototype = new t;
				return r.constructor = s, r.getRatio = i, r.config = function(t) {
					return new s(t)
				}, s
			}, f = u("Back", p("BackOut", function(t) {
				return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
			}), p("BackIn", function(t) {
				return t * t * ((this._p1 + 1) * t - this._p1)
			}), p("BackInOut", function(t) {
				return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
			})),
			m = h("easing.SlowMo", function(t, e, i) {
				e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
			}, !0),
			d = m.prototype = new t;
		return d.constructor = m, d.getRatio = function(t) {
			var e = t + (.5 - t) * this._p;
			return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
		}, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
			return new m(t, e, i)
		}, e = h("easing.SteppedEase", function(t) {
			t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
		}, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
			return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
		}, d.config = e.config = function(t) {
			return new e(t)
		}, i = h("easing.RoughEase", function(e) {
			e = e || {};
			for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
				x: i,
				y: s
			};
			for (l.sort(function(t, e) {
				return t.x - e.x
			}), o = new c(1, 1, null), p = u; --p > -1;) a = l[p], o = new c(a.x, a.y, o);
			this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
		}, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
			var e = this._prev;
			if (t > e.t) {
				for (; e.next && t >= e.t;) e = e.next;
				e = e.prev
			} else
				for (; e.prev && e.t >= t;) e = e.prev;
			return this._prev = e, e.v + (t - e.t) / e.gap * e.c
		}, d.config = function(t) {
			return new i(t)
		}, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
			return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		}), l("BounceIn", function(t) {
			return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
		}), l("BounceInOut", function(t) {
			var e = .5 > t;
			return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
		})), u("Circ", l("CircOut", function(t) {
			return Math.sqrt(1 - (t -= 1) * t)
		}), l("CircIn", function(t) {
			return -(Math.sqrt(1 - t * t) - 1)
		}), l("CircInOut", function(t) {
			return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		})), s = function(e, i, s) {
			var r = h("easing." + e, function(t, e) {
				this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
			}, !0),
				n = r.prototype = new t;
			return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
				return new r(t, e)
			}, r
		}, u("Elastic", s("ElasticOut", function(t) {
			return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
		}, .3), s("ElasticIn", function(t) {
			return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
		}, .3), s("ElasticInOut", function(t) {
			return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
		}, .45)), u("Expo", l("ExpoOut", function(t) {
			return 1 - Math.pow(2, -10 * t)
		}), l("ExpoIn", function(t) {
			return Math.pow(2, 10 * (t - 1)) - .001
		}), l("ExpoInOut", function(t) {
			return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
		})), u("Sine", l("SineOut", function(t) {
			return Math.sin(t * o)
		}), l("SineIn", function(t) {
			return -Math.cos(t * o) + 1
		}), l("SineInOut", function(t) {
			return -.5 * (Math.cos(Math.PI * t) - 1)
		})), h("easing.EaseLookup", {
			find: function(e) {
				return t.map[e]
			}
		}, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
	"use strict";
	_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
		var i, r, s, n, a = function() {
				t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
			}, o = {}, l = a.prototype = new t("css");
		l.constructor = a, a.version = "1.14.2", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
			top: l,
			right: l,
			bottom: l,
			left: l,
			width: l,
			height: l,
			fontSize: l,
			padding: l,
			margin: l,
			perspective: l,
			lineHeight: ""
		};
		var h, u, f, p, _, c, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
			m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
			v = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,
			y = /(?:\d|\-|\+|=|#|\.)*/g,
			x = /opacity *= *([^)]*)/i,
			T = /opacity:([^;]*)/i,
			w = /alpha\(opacity *=.+?\)/i,
			b = /^(rgb|hsl)/,
			P = /([A-Z])/g,
			S = /-([a-z])/gi,
			R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
			C = function(t, e) {
				return e.toUpperCase()
			}, k = /(?:Left|Right|Width)/i,
			O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			D = /,(?=[^\)]*(?:\(|$))/gi,
			M = Math.PI / 180,
			L = 180 / Math.PI,
			N = {}, z = document,
			X = z.createElement("div"),
			I = z.createElement("img"),
			E = a._internals = {
				_specialProps: o
			}, F = navigator.userAgent,
			Y = function() {
				var t, e = F.indexOf("Android"),
					i = z.createElement("div");
				return f = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), _ = f && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), p = -1 !== F.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) && (c = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
			}(),
			B = function(t) {
				return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
			}, U = function(t) {
				window.console && console.log(t)
			}, j = "",
			W = "",
			V = function(t, e) {
				e = e || X;
				var i, r, s = e.style;
				if (void 0 !== s[t]) return t;
				for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];);
				return r >= 0 ? (W = 3 === r ? "ms" : i[r], j = "-" + W.toLowerCase() + "-", W + t) : null
			}, q = z.defaultView ? z.defaultView.getComputedStyle : function() {}, H = a.getStyle = function(t, e, i, r, s) {
				var n;
				return Y || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || q(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : B(t)
			}, G = E.convertToPixels = function(t, i, r, s, n) {
				if ("px" === s || !s) return r;
				if ("auto" === s || !r) return 0;
				var o, l, h, u = k.test(i),
					f = t,
					p = X.style,
					_ = 0 > r;
				if (_ && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight);
				else {
					if (p.cssText = "border:0 solid red;position:" + H(t, "position") + ";line-height:0;", "%" !== s && f.appendChild) p[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
					else {
						if (f = t.parentNode || z.body, l = f._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;
						p[u ? "width" : "height"] = r + s
					}
					f.appendChild(X), o = parseFloat(X[u ? "offsetWidth" : "offsetHeight"]), f.removeChild(X), u && "%" === s && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = h, l.width = 100 * (o / r)), 0 !== o || n || (o = G(t, i, r, s, !0))
				}
				return _ ? -o : o
			}, Q = E.calculateOffset = function(t, e, i) {
				if ("absolute" !== H(t, "position", i)) return 0;
				var r = "left" === e ? "Left" : "Top",
					s = H(t, "margin" + r, i);
				return t["offset" + r] - (G(t, e, parseFloat(s), s.replace(y, "")) || 0)
			}, Z = function(t, e) {
				var i, r, s = {};
				if (e = e || q(t, null))
					if (i = e.length)
						for (; --i > -1;) s[e[i].replace(S, C)] = e.getPropertyValue(e[i]);
					else
						for (i in e) s[i] = e[i];
					else
				if (e = t.currentStyle || t.style)
					for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(S, C)] = e[i]);
				return Y || (s.opacity = B(t)), r = Ae(t, e, !1), s.rotation = r.rotation, s.skewX = r.skewX, s.scaleX = r.scaleX, s.scaleY = r.scaleY, s.x = r.x, s.y = r.y, be && (s.z = r.z, s.rotationX = r.rotationX, s.rotationY = r.rotationY, s.scaleZ = r.scaleZ), s.filters && delete s.filters, s
			}, $ = function(t, e, i, r, s) {
				var n, a, o, l = {}, h = t.style;
				for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Q(t, a), void 0 !== h[a] && (o = new fe(h, a, h[a], o)));
				if (r)
					for (a in r) "className" !== a && (l[a] = r[a]);
				return {
					difs: l,
					firstMPT: o
				}
			}, K = {
				width: ["Left", "Right"],
				height: ["Top", "Bottom"]
			}, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
			te = function(t, e, i) {
				var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
					s = K[e],
					n = s.length;
				for (i = i || q(t, null); --n > -1;) r -= parseFloat(H(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(H(t, "border" + s[n] + "Width", i, !0)) || 0;
				return r
			}, ee = function(t, e) {
				(null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
				var i = t.split(" "),
					r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
					s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
				return null == s ? s = "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(v, "")), e.oy = parseFloat(s.replace(v, ""))), r + " " + s + (i.length > 2 ? " " + i[2] : "")
			}, ie = function(t, e) {
				return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
			}, re = function(t, e) {
				return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
			}, se = function(t, e, i, r) {
				var s, n, a, o, l = 1e-6;
				return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : L) - ("=" === t.charAt(1) ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), l > o && o > -l && (o = 0), o
			}, ne = {
				aqua: [0, 255, 255],
				lime: [0, 255, 0],
				silver: [192, 192, 192],
				black: [0, 0, 0],
				maroon: [128, 0, 0],
				teal: [0, 128, 128],
				blue: [0, 0, 255],
				navy: [0, 0, 128],
				white: [255, 255, 255],
				fuchsia: [255, 0, 255],
				olive: [128, 128, 0],
				yellow: [255, 255, 0],
				orange: [255, 165, 0],
				gray: [128, 128, 128],
				purple: [128, 0, 128],
				green: [0, 128, 0],
				red: [255, 0, 0],
				pink: [255, 192, 203],
				cyan: [0, 255, 255],
				transparent: [255, 255, 255, 0]
			}, ae = function(t, e, i) {
				return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
			}, oe = a.parseColor = function(t) {
				var e, i, r, s, n, a;
				return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), r = t.charAt(3), t = "#" + e + e + i + i + r + r), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), s = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(s + 1 / 3, e, i), t[1] = ae(s, e, i), t[2] = ae(s - 1 / 3, e, i), t) : (t = t.match(d) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
			}, le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
		for (l in ne) le += "|" + l + "\\b";
		le = RegExp(le + ")", "gi");
		var he = function(t, e, i, r) {
			if (null == t) return function(t) {
				return t
			};
			var s, n = e ? (t.match(le) || [""])[0] : "",
				a = t.split(n).join("").match(g) || [],
				o = t.substr(0, t.indexOf(a[0])),
				l = ")" === t.charAt(t.length - 1) ? ")" : "",
				h = -1 !== t.indexOf(" ") ? " " : ",",
				u = a.length,
				f = u > 0 ? a[0].replace(d, "") : "";
			return u ? s = e ? function(t) {
				var e, p, _, c;
				if ("number" == typeof t) t += f;
				else if (r && D.test(t)) {
					for (c = t.replace(D, "|").split("|"), _ = 0; c.length > _; _++) c[_] = s(c[_]);
					return c.join(",")
				}
				if (e = (t.match(le) || [n])[0], p = t.split(e).join("").match(g) || [], _ = p.length, u > _--)
					for (; u > ++_;) p[_] = i ? p[0 | (_ - 1) / 2] : a[_];
				return o + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
			} : function(t) {
				var e, n, p;
				if ("number" == typeof t) t += f;
				else if (r && D.test(t)) {
					for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++) n[p] = s(n[p]);
					return n.join(",")
				}
				if (e = t.match(g) || [], p = e.length, u > p--)
					for (; u > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
				return o + e.join(h) + l
			} : function(t) {
				return t
			}
		}, ue = function(t) {
				return t = t.split(","),
				function(e, i, r, s, n, a, o) {
					var l, h = (i + "").split(" ");
					for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
					return s.parse(e, o, n, a)
				}
			}, fe = (E._setPluginRatio = function(t) {
				this.plugin.setRatio(t);
				for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
				if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
					for (o = n.firstMPT; o;) {
						if (i = o.t, i.type) {
							if (1 === i.type) {
								for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++) s += i["xn" + r] + i["xs" + (r + 1)];
								i.e = s
							}
						} else i.e = i.s + i.xs0;
						o = o._next
					}
			}, function(t, e, i, r, s) {
				this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r)
			}),
			pe = (E._parseToProxy = function(t, e, i, r, s, n) {
				var a, o, l, h, u, f = r,
					p = {}, _ = {}, c = i._transform,
					d = N;
				for (i._transform = null, N = e, r = u = i.parse(t, e, r, s), N = d, n && (i._transform = c, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
					if (1 >= r.type && (o = r.p, _[o] = r.s + r.c, p[o] = r.s, n || (h = new fe(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
						for (a = r.l; --a > 0;) l = "xn" + a, o = r.p + "_" + l, _[o] = r.data[l], p[o] = r[l], n || (h = new fe(r, l, o, h, r.rxp[l]));
					r = r._next
				}
				return {
					proxy: p,
					end: _,
					firstMPT: h,
					pt: u
				}
			}, E.CSSPropTween = function(t, e, r, s, a, o, l, h, u, f, p) {
				this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof pe || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === f ? r : f, this.e = void 0 === p ? r + s : p, a && (this._next = a, a._prev = this)
			}),
			_e = a.parseComplex = function(t, e, i, r, s, n, a, o, l, u) {
				i = i || n || "", a = new pe(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, r), r += "";
				var f, p, _, c, g, v, y, x, T, w, P, S, R = i.split(", ").join(",").split(" "),
					C = r.split(", ").join(",").split(" "),
					k = R.length,
					O = h !== !1;
				for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(D, ", ").split(" "), C = C.join(" ").replace(D, ", ").split(" "), k = R.length), k !== C.length && (R = (n || "").split(" "), k = R.length), a.plugin = l, a.setRatio = u, f = 0; k > f; f++)
					if (c = R[f], g = C[f], x = parseFloat(c), x || 0 === x) a.appendXtra("", x, ie(g, x), g.replace(m, ""), O && -1 !== g.indexOf("px"), !0);
					else
				if (s && ("#" === c.charAt(0) || ne[c] || b.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), T = c.length + g.length > 6, T && !Y && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(C[f]).join("transparent")) : (Y || (T = !1), a.appendXtra(T ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], T ? "," : S, !0), T && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
				else if (v = c.match(d)) {
					if (y = g.match(m), !y || y.length !== v.length) return a;
					for (_ = 0, p = 0; v.length > p; p++) P = v[p], w = c.indexOf(P, _), a.appendXtra(c.substr(_, w - _), Number(P), ie(y[p], P), "", O && "px" === c.substr(w + P.length, 2), 0 === p), _ = w + P.length;
					a["xs" + a.l] += c.substr(_)
				} else a["xs" + a.l] += a.l ? " " + c : c; if (-1 !== r.indexOf("=") && a.data) {
					for (S = a.xs0 + a.data.s, f = 1; a.l > f; f++) S += a["xs" + f] + a.data["xn" + f];
					a.e = S + a["xs" + f]
				}
				return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
			}, ce = 9;
		for (l = pe.prototype, l.l = l.pr = 0; --ce > 0;) l["xn" + ce] = 0, l["xs" + ce] = "";
		l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, r, s, n) {
			var a = this,
				o = a.l;
			return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
				s: e + i
			}, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a)
		};
		var de = function(t, e) {
			e = e || {}, this.p = e.prefix ? V(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || he(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
		}, me = E._registerComplexSpecialProp = function(t, e, i) {
				"object" != typeof e && (e = {
					parser: i
				});
				var r, s, n = t.split(","),
					a = e.defaultValue;
				for (i = i || [a], r = 0; n.length > r; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || a, s = new de(n[r], e)
			}, ge = function(t) {
				if (!o[t]) {
					var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
					me(t, {
						parser: function(t, i, r, s, n, a, l) {
							var h = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
							return h ? (h._cssRegister(), o[r].parse(t, i, r, s, n, a, l)) : (U("Error: " + e + " js file not loaded."), n)
						}
					})
				}
			};
		l = de.prototype, l.parseComplex = function(t, e, i, r, s, n) {
			var a, o, l, h, u, f, p = this.keyword;
			if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : p && (o = [e], l = [i])), l) {
				for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, p && (u = e.indexOf(p), f = i.indexOf(p), u !== f && (i = -1 === f ? l : o, i[a] += " " + p));
				e = o.join(", "), i = l.join(", ")
			}
			return _e(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
		}, l.parse = function(t, e, i, r, n, a) {
			return this.parseComplex(t.style, this.format(H(t, this.p, s, !1, this.dflt)), this.format(e), n, a)
		}, a.registerSpecialProp = function(t, e, i) {
			me(t, {
				parser: function(t, r, s, n, a, o) {
					var l = new pe(t, s, 0, 0, a, 2, s, !1, i);
					return l.plugin = o, l.setRatio = e(t, r, n._tween, s), l
				},
				priority: i
			})
		};
		var ve, ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
			xe = V("transform"),
			Te = j + "transform",
			we = V("transformOrigin"),
			be = null !== V("perspective"),
			Pe = E.Transform = function() {
				this.skewY = 0
			}, Se = window.SVGElement,
			Re = function(t, e, i) {
				var r, s = z.createElementNS("http://www.w3.org/2000/svg", t),
					n = /([a-z])([A-Z])/g;
				for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
				return e.appendChild(s), s
			}, Ce = document.documentElement,
			ke = function() {
				var t, e, i, r = c || /Android/i.test(F) && !window.chrome;
				return z.createElementNS && !r && (t = Re("svg", Ce), e = Re("rect", t, {
					width: 100,
					height: 50,
					x: 100
				}), i = e.getBoundingClientRect().left, e.style[we] = "50% 50%", e.style[xe] = "scale(0.5,0.5)", r = i === e.getBoundingClientRect().left, Ce.removeChild(t)), r
			}(),
			Oe = function(t, e, i) {
				var r = t.getBBox();
				e = ee(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y
			}, Ae = E.getTransform = function(t, e, i, r) {
				if (t._gsTransform && i && !r) return t._gsTransform;
				var n, o, l, h, u, f, p, _, c, d, m, g, v, y = i ? t._gsTransform || new Pe : new Pe,
					x = 0 > y.scaleX,
					T = 2e-5,
					w = 1e5,
					b = 179.99,
					P = b * M,
					S = be ? parseFloat(H(t, we, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0,
					R = parseFloat(a.defaultTransformPerspective) || 0;
				if (xe ? n = H(t, Te, e, !0) : t.currentStyle && (n = t.currentStyle.filter.match(O), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), n && "none" !== n && "matrix(1, 0, 0, 1, 0, 0)" !== n) {
					for (o = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = o.length; --l > -1;) h = Number(o[l]), o[l] = (u = h - (h |= 0)) ? (0 | u * w + (0 > u ? -.5 : .5)) / w + h : h;
					if (16 === o.length) {
						var C = o[8],
							k = o[9],
							A = o[10],
							D = o[12],
							N = o[13],
							z = o[14];
						if (y.zOrigin && (z = -y.zOrigin, D = C * z - o[12], N = k * z - o[13], z = A * z + y.zOrigin - o[14]), !i || r || null == y.rotationX) {
							var X, I, E, F, Y, B, U, j = o[0],
								W = o[1],
								V = o[2],
								q = o[3],
								G = o[4],
								Q = o[5],
								Z = o[6],
								$ = o[7],
								K = o[11],
								J = Math.atan2(Z, A),
								te = -P > J || J > P;
							y.rotationX = J * L, J && (F = Math.cos(-J), Y = Math.sin(-J), X = G * F + C * Y, I = Q * F + k * Y, E = Z * F + A * Y, C = G * -Y + C * F, k = Q * -Y + k * F, A = Z * -Y + A * F, K = $ * -Y + K * F, G = X, Q = I, Z = E), J = Math.atan2(C, j), y.rotationY = J * L, J && (B = -P > J || J > P, F = Math.cos(-J), Y = Math.sin(-J), X = j * F - C * Y, I = W * F - k * Y, E = V * F - A * Y, k = W * Y + k * F, A = V * Y + A * F, K = q * Y + K * F, j = X, W = I, V = E), J = Math.atan2(W, Q), y.rotation = J * L, J && (U = -P > J || J > P, F = Math.cos(-J), Y = Math.sin(-J), j = j * F + G * Y, I = W * F + Q * Y, Q = W * -Y + Q * F, Z = V * -Y + Z * F, W = I), U && te ? y.rotation = y.rotationX = 0 : U && B ? y.rotation = y.rotationY = 0 : B && te && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(j * j + W * W) * w + .5) / w, y.scaleY = (0 | Math.sqrt(Q * Q + k * k) * w + .5) / w, y.scaleZ = (0 | Math.sqrt(Z * Z + A * A) * w + .5) / w, y.skewX = 0, y.perspective = K ? 1 / (0 > K ? -K : K) : 0, y.x = D, y.y = N, y.z = z
						}
					} else if (!(be && !r && o.length && y.x === o[4] && y.y === o[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === H(t, "display", e))) {
						var ee = o.length >= 6,
							ie = ee ? o[0] : 1,
							re = o[1] || 0,
							se = o[2] || 0,
							ne = ee ? o[3] : 1;
						y.x = o[4] || 0, y.y = o[5] || 0, f = Math.sqrt(ie * ie + re * re), p = Math.sqrt(ne * ne + se * se), _ = ie || re ? Math.atan2(re, ie) * L : y.rotation || 0, c = se || ne ? Math.atan2(se, ne) * L + _ : y.skewX || 0, d = f - Math.abs(y.scaleX || 0), m = p - Math.abs(y.scaleY || 0), Math.abs(c) > 90 && 270 > Math.abs(c) && (x ? (f *= -1, c += 0 >= _ ? 180 : -180, _ += 0 >= _ ? 180 : -180) : (p *= -1, c += 0 >= c ? 180 : -180)), g = (_ - y.rotation) % 180, v = (c - y.skewX) % 180, (void 0 === y.skewX || d > T || -T > d || m > T || -T > m || g > -b && b > g && false | g * w || v > -b && b > v && false | v * w) && (y.scaleX = f, y.scaleY = p, y.rotation = _, y.skewX = c), be && (y.rotationX = y.rotationY = y.z = 0, y.perspective = R, y.scaleZ = 1)
					}
					y.zOrigin = S;
					for (l in y) T > y[l] && y[l] > -T && (y[l] = 0)
				} else y = {
					x: 0,
					y: 0,
					z: 0,
					scaleX: 1,
					scaleY: 1,
					scaleZ: 1,
					skewX: 0,
					skewY: 0,
					perspective: R,
					rotation: 0,
					rotationX: 0,
					rotationY: 0,
					zOrigin: 0
				};
				return i && (t._gsTransform = y), y.svg = Se && t instanceof Se && t.parentNode instanceof Se, y.svg && (Oe(t, H(t, we, s, !1, "50% 50%") + "", y), ve = a.useSVGTransformAttr || ke), y.xPercent = y.yPercent = 0, y
			}, De = function(t) {
				var e, i, r = this.data,
					s = -r.rotation * M,
					n = s + r.skewX * M,
					a = 1e5,
					o = (0 | Math.cos(s) * r.scaleX * a) / a,
					l = (0 | Math.sin(s) * r.scaleX * a) / a,
					h = (0 | Math.sin(n) * -r.scaleY * a) / a,
					u = (0 | Math.cos(n) * r.scaleY * a) / a,
					f = this.t.style,
					p = this.t.currentStyle;
				if (p) {
					i = l, l = -h, h = -i, e = p.filter, f.filter = "";
					var _, d, m = this.t.offsetWidth,
						g = this.t.offsetHeight,
						v = "absolute" !== p.position,
						T = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
						w = r.x + m * r.xPercent / 100,
						b = r.y + g * r.yPercent / 100;
					if (null != r.ox && (_ = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, d = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, w += _ - (_ * o + d * l), b += d - (_ * h + d * u)), v ? (_ = m / 2, d = g / 2, T += ", Dx=" + (_ - (_ * o + d * l) + w) + ", Dy=" + (d - (_ * h + d * u) + b) + ")") : T += ", sizingMethod='auto expand')", f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(A, T) : T + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === T.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && f.removeAttribute("filter")), !v) {
						var P, S, R, C = 8 > c ? 1 : -1;
						for (_ = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ce = 0; 4 > ce; ce++) S = J[ce], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : G(this.t, S, parseFloat(P), P.replace(y, "")) || 0, R = i !== r[S] ? 2 > ce ? -r.ieOffsetX : -r.ieOffsetY : 2 > ce ? _ - r.ieOffsetX : d - r.ieOffsetY, f[S] = (r[S] = Math.round(i - R * (0 === ce || 2 === ce ? 1 : C))) + "px"
					}
				}
			}, Me = E.set3DTransformRatio = function(t) {
				var e, i, r, s, n, a, o, l, h, u, f, _, c, d, m, g, v, y, x, T, w, b, P, S = this.data,
					R = this.t.style,
					C = S.rotation * M,
					k = S.scaleX,
					O = S.scaleY,
					A = S.scaleZ,
					D = S.x,
					L = S.y,
					N = S.z,
					z = S.perspective;
				if (!(1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== A || z || N)) return Le.call(this, t), void 0;
				if (p) {
					var X = 1e-4;
					X > k && k > -X && (k = A = 2e-5), X > O && O > -X && (O = A = 2e-5), !z || S.z || S.rotationX || S.rotationY || (z = 0)
				}
				if (C || S.skewX) y = Math.cos(C), x = Math.sin(C), e = y, n = x, S.skewX && (C -= S.skewX * M, y = Math.cos(C), x = Math.sin(C), "simple" === S.skewType && (T = Math.tan(S.skewX * M), T = Math.sqrt(1 + T * T), y *= T, x *= T)), i = -x, a = y;
				else {
					if (!(S.rotationY || S.rotationX || 1 !== A || z || S.svg)) return R[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + L + "px," + N + "px)" + (1 !== k || 1 !== O ? " scale(" + k + "," + O + ")" : ""), void 0;
					e = a = 1, i = n = 0
				}
				f = 1, r = s = o = l = h = u = _ = c = d = 0, m = z ? -1 / z : 0, g = S.zOrigin, v = 1e5, C = S.rotationY * M, C && (y = Math.cos(C), x = Math.sin(C), h = f * -x, c = m * -x, r = e * x, o = n * x, f *= y, m *= y, e *= y, n *= y), C = S.rotationX * M, C && (y = Math.cos(C), x = Math.sin(C), T = i * y + r * x, w = a * y + o * x, b = u * y + f * x, P = d * y + m * x, r = i * -x + r * y, o = a * -x + o * y, f = u * -x + f * y, m = d * -x + m * y, i = T, a = w, u = b, d = P), 1 !== A && (r *= A, o *= A, f *= A, m *= A), 1 !== O && (i *= O, a *= O, u *= O, d *= O), 1 !== k && (e *= k, n *= k, h *= k, c *= k), g && (_ -= g, s = r * _, l = o * _, _ = f * _ + g), S.svg && (s += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), l += S.yOrigin - (S.xOrigin * n + S.yOrigin * a)), s = (T = (s += D) - (s |= 0)) ? (0 | T * v + (0 > T ? -.5 : .5)) / v + s : s, l = (T = (l += L) - (l |= 0)) ? (0 | T * v + (0 > T ? -.5 : .5)) / v + l : l, _ = (T = (_ += N) - (_ |= 0)) ? (0 | T * v + (0 > T ? -.5 : .5)) / v + _ : _, R[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * v) / v, (0 | n * v) / v, (0 | h * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | u * v) / v, (0 | d * v) / v, (0 | r * v) / v, (0 | o * v) / v, (0 | f * v) / v, (0 | m * v) / v, s, l, _, z ? 1 + -_ / z : 1].join(",") + ")"
			}, Le = E.set2DTransformRatio = function(t) {
				var e, i, r, s, n, a, o, l, h, u, f, p = this.data,
					_ = this.t,
					c = _.style,
					d = p.x,
					m = p.y;
				return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && ve || !be ? (s = p.scaleX, n = p.scaleY, p.rotation || p.skewX || p.svg ? (e = p.rotation * M, i = e - p.skewX * M, r = 1e5, a = Math.cos(e) * s, o = Math.sin(e) * s, l = Math.sin(i) * -n, h = Math.cos(i) * n, p.svg && (d += p.xOrigin - (p.xOrigin * a + p.yOrigin * l), m += p.yOrigin - (p.xOrigin * o + p.yOrigin * h), f = 1e-6, f > d && d > -f && (d = 0), f > m && m > -f && (m = 0)), u = (0 | a * r) / r + "," + (0 | o * r) / r + "," + (0 | l * r) / r + "," + (0 | h * r) / r + "," + d + "," + m + ")", p.svg && ve ? _.setAttribute("transform", "matrix(" + u) : c[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + u) : c[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + s + ",0,0," + n + "," + d + "," + m + ")", void 0) : (this.setRatio = Me, Me.call(this, t), void 0)
			};
		me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
			parser: function(t, e, i, r, n, o, l) {
				if (r._transform) return n;
				var h, u, f, p, _, c, d, m = r._transform = Ae(t, s, !0, l.parseTransform),
					g = t.style,
					v = 1e-6,
					y = ye.length,
					x = l,
					T = {};
				if ("string" == typeof x.transform && xe) f = X.style, f[xe] = x.transform, f.display = "block", f.position = "absolute", z.body.appendChild(X), h = Ae(X, null, !1), z.body.removeChild(X);
				else if ("object" == typeof x) {
					if (h = {
						scaleX: re(null != x.scaleX ? x.scaleX : x.scale, m.scaleX),
						scaleY: re(null != x.scaleY ? x.scaleY : x.scale, m.scaleY),
						scaleZ: re(x.scaleZ, m.scaleZ),
						x: re(x.x, m.x),
						y: re(x.y, m.y),
						z: re(x.z, m.z),
						xPercent: re(x.xPercent, m.xPercent),
						yPercent: re(x.yPercent, m.yPercent),
						perspective: re(x.transformPerspective, m.perspective)
					}, d = x.directionalRotation, null != d)
						if ("object" == typeof d)
							for (f in d) x[f] = d[f];
						else x.rotation = d;
						"string" == typeof x.x && -1 !== x.x.indexOf("%") && (h.x = 0, h.xPercent = re(x.x, m.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (h.y = 0, h.yPercent = re(x.y, m.yPercent)), h.rotation = se("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : m.rotation, m.rotation, "rotation", T), be && (h.rotationX = se("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", T), h.rotationY = se("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", T)), h.skewX = null == x.skewX ? m.skewX : se(x.skewX, m.skewX), h.skewY = null == x.skewY ? m.skewY : se(x.skewY, m.skewY), (u = h.skewY - m.skewY) && (h.skewX += u, h.rotation += u)
				}
				for (be && null != x.force3D && (m.force3D = x.force3D, c = !0), m.skewType = x.skewType || m.skewType || a.defaultSkewType, _ = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, _ || null == x.scale || (h.scaleZ = 1); --y > -1;) i = ye[y], p = h[i] - m[i], (p > v || -v > p || null != x[i] || null != N[i]) && (c = !0, n = new pe(m, i, m[i], p, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
				return p = x.transformOrigin, p && m.svg && (Oe(t, p, h), n = new pe(m, "xOrigin", m.xOrigin, h.xOrigin - m.xOrigin, n, -1, "transformOrigin"), n.b = m.xOrigin, n.e = n.xs0 = h.xOrigin, n = new pe(m, "yOrigin", m.yOrigin, h.yOrigin - m.yOrigin, n, -1, "transformOrigin"), n.b = m.yOrigin, n.e = n.xs0 = h.yOrigin, p = "0px 0px"), (p || be && _ && m.zOrigin) && (xe ? (c = !0, i = we, p = (p || H(t, i, s, !1, "50% 50%")) + "", n = new pe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, be ? (f = m.zOrigin, p = p.split(" "), m.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new pe(m, "zOrigin", 0, 0, n, -1, n.n), n.b = f, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = p) : ee(p + "", m)), c && (r._transformType = m.svg && ve || !_ && 3 !== this._transformType ? 2 : 3), n
			},
			prefix: !0
		}), me("boxShadow", {
			defaultValue: "0px 0px 0px 0px #999",
			prefix: !0,
			color: !0,
			multi: !0,
			keyword: "inset"
		}), me("borderRadius", {
			defaultValue: "0px",
			parser: function(t, e, i, n, a) {
				e = this.format(e);
				var o, l, h, u, f, p, _, c, d, m, g, v, y, x, T, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
					P = t.style;
				for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = V(b[l])), f = u = H(t, b[l], s, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), p = h = o[l], _ = parseFloat(f), v = f.substr((_ + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = r[i] || v), g !== v && (x = G(t, "borderLeft", _, v), T = G(t, "borderTop", _, v), "%" === g ? (f = 100 * (x / d) + "%", u = 100 * (T / m) + "%") : "em" === g ? (w = G(t, "borderLeft", 1, "em"), f = x / w + "em", u = T / w + "em") : (f = x + "px", u = T + "px"), y && (p = parseFloat(f) + c + g, h = parseFloat(u) + c + g)), a = _e(P, b[l], f + " " + u, p + " " + h, !1, "0px", a);
				return a
			},
			prefix: !0,
			formatter: he("0px 0px 0px 0px", !1, !0)
		}), me("backgroundPosition", {
			defaultValue: "0 0",
			parser: function(t, e, i, r, n, a) {
				var o, l, h, u, f, p, _ = "background-position",
					d = s || q(t, null),
					m = this.format((d ? c ? d.getPropertyValue(_ + "-x") + " " + d.getPropertyValue(_ + "-y") : d.getPropertyValue(_) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
					g = this.format(e);
				if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (p = H(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
					for (o = m.split(" "), l = g.split(" "), I.setAttribute("src", p), h = 2; --h > -1;) m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[h] = u ? parseFloat(m) / 100 * f + "px" : 100 * (parseFloat(m) / f) + "%");
					m = o.join(" ")
				}
				return this.parseComplex(t.style, m, g, n, a)
			},
			formatter: ee
		}), me("backgroundSize", {
			defaultValue: "0 0",
			formatter: ee
		}), me("perspective", {
			defaultValue: "0px",
			prefix: !0
		}), me("perspectiveOrigin", {
			defaultValue: "50% 50%",
			prefix: !0
		}), me("transformStyle", {
			prefix: !0
		}), me("backfaceVisibility", {
			prefix: !0
		}), me("userSelect", {
			prefix: !0
		}), me("margin", {
			parser: ue("marginTop,marginRight,marginBottom,marginLeft")
		}), me("padding", {
			parser: ue("paddingTop,paddingRight,paddingBottom,paddingLeft")
		}), me("clip", {
			defaultValue: "rect(0px,0px,0px,0px)",
			parser: function(t, e, i, r, n, a) {
				var o, l, h;
				return 9 > c ? (l = t.currentStyle, h = 8 > c ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(H(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
			}
		}), me("textShadow", {
			defaultValue: "0px 0px 0px #999",
			color: !0,
			multi: !0
		}), me("autoRound,strictUnits", {
			parser: function(t, e, i, r, s) {
				return s
			}
		}), me("border", {
			defaultValue: "0px solid #000",
			parser: function(t, e, i, r, n, a) {
				return this.parseComplex(t.style, this.format(H(t, "borderTopWidth", s, !1, "0px") + " " + H(t, "borderTopStyle", s, !1, "solid") + " " + H(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a)
			},
			color: !0,
			formatter: function(t) {
				var e = t.split(" ");
				return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
			}
		}), me("borderWidth", {
			parser: ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
		}), me("float,cssFloat,styleFloat", {
			parser: function(t, e, i, r, s) {
				var n = t.style,
					a = "cssFloat" in n ? "cssFloat" : "styleFloat";
				return new pe(n, a, 0, 0, s, -1, i, !1, 0, n[a], e)
			}
		});
		var Ne = function(t) {
			var e, i = this.t,
				r = i.filter || H(this.data, "filter") || "",
				s = 0 | this.s + this.c * t;
			100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !H(this.data, "filter")) : (i.filter = r.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(x, "opacity=" + s))
		};
		me("opacity,alpha,autoAlpha", {
			defaultValue: "1",
			parser: function(t, e, i, r, n, a) {
				var o = parseFloat(H(t, "opacity", s, !1, "1")),
					l = t.style,
					h = "autoAlpha" === i;
				return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === H(t, "visibility", s) && 0 !== e && (o = 0), Y ? n = new pe(l, "opacity", o, e - o, n) : (n = new pe(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ne), h && (n = new pe(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
			}
		});
		var ze = function(t, e) {
			e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
		}, Xe = function(t) {
				if (this.t._gsClassPT = this, 1 === t || 0 === t) {
					this.t.setAttribute("class", 0 === t ? this.b : this.e);
					for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : ze(i, e.p), e = e._next;
					1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
				} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
			};
		me("className", {
			parser: function(t, e, r, n, a, o, l) {
				var h, u, f, p, _, c = t.getAttribute("class") || "",
					d = t.style.cssText;
				if (a = n._classNamePT = new pe(t, r, 0, 0, a, 2), a.setRatio = Xe, a.pr = -11, i = !0, a.b = c, u = Z(t, s), f = t._gsClassPT) {
					for (p = {}, _ = f.data; _;) p[_.p] = 1, _ = _._next;
					f.setRatio(1)
				}
				return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), h = $(t, u, Z(t), l, p), t.setAttribute("class", c), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)), a
			}
		});
		var Ie = function(t) {
			if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
				var e, i, r, s, n = this.t.style,
					a = o.transform.parse;
				if ("all" === this.e) n.cssText = "", s = !0;
				else
					for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) i = e[r], o[i] && (o[i].parse === a ? s = !0 : i = "transformOrigin" === i ? we : o[i].p), ze(n, i);
				s && (ze(n, xe), this.t._gsTransform && delete this.t._gsTransform)
			}
		};
		for (me("clearProps", {
			parser: function(t, e, r, s, n) {
				return n = new pe(t, r, 0, 0, n, 2), n.setRatio = Ie, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n
			}
		}), l = "bezier,throwProps,physicsProps,physics2D".split(","), ce = l.length; ce--;) ge(l[ce]);
		l = a.prototype, l._firstPT = null, l._onInitTween = function(t, e, o) {
			if (!t.nodeType) return !1;
			this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = q(t, ""), n = this._overwriteProps;
			var l, p, c, d, m, g, v, y, x, w = t.style;
			if (u && "" === w.zIndex && (l = H(t, "zIndex", s), ("auto" === l || "" === l) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (d = w.cssText, l = Z(t, s), w.cssText = d + ";" + e, l = $(t, l, Z(t)).difs, !Y && T.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = d), this._firstPT = p = this.parse(t, e, null), this._transformType) {
				for (x = 3 === this._transformType, xe ? f && (u = !0, "" === w.zIndex && (v = H(t, "zIndex", s), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), _ && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
				y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = x && be ? Me : xe ? Le : De, y.data = this._transform || Ae(t, s, !0), n.pop()
			}
			if (i) {
				for (; p;) {
					for (g = p._next, c = d; c && c.pr > p.pr;) c = c._next;
					(p._prev = c ? c._prev : m) ? p._prev._next = p : d = p, (p._next = c) ? c._prev = p : m = p, p = g
				}
				this._firstPT = d
			}
			return !0
		}, l.parse = function(t, e, i, n) {
			var a, l, u, f, p, _, c, d, m, g, v = t.style;
			for (a in e) _ = e[a], l = o[a], l ? i = l.parse(t, _, a, this, i, n, e) : (p = H(t, a, s) + "", m = "string" == typeof _, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && b.test(_) ? (m || (_ = oe(_), _ = (_.length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), i = _e(v, a, p, _, !0, "transparent", i, 0, n)) : !m || -1 === _.indexOf(" ") && -1 === _.indexOf(",") ? (u = parseFloat(p), c = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (u = te(t, a, s), c = "px") : "left" === a || "top" === a ? (u = Q(t, a, s), c = "px") : (u = "opacity" !== a ? 0 : 1, c = "")), g = m && "=" === _.charAt(1), g ? (f = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), f *= parseFloat(_), d = _.replace(y, "")) : (f = parseFloat(_), d = m ? _.substr((f + "").length) || "" : ""), "" === d && (d = a in r ? r[a] : c), _ = f || 0 === f ? (g ? f + u : f) + d : e[a], c !== d && "" !== d && (f || 0 === f) && u && (u = G(t, a, u, c), "%" === d ? (u /= G(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = u + "%")) : "em" === d ? u /= G(t, a, 1, "em") : "px" !== d && (f = G(t, a, f, d), d = "px"), g && (f || 0 === f) && (_ = f + u + d)), g && (f += u), !u && 0 !== u || !f && 0 !== f ? void 0 !== v[a] && (_ || "NaN" != _ + "" && null != _) ? (i = new pe(v, a, f || u || 0, 0, i, -1, a, !1, 0, p, _), i.xs0 = "none" !== _ || "display" !== a && -1 === a.indexOf("Style") ? _ : p) : U("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, u, f - u, i, 0, a, h !== !1 && ("px" === d || "zIndex" === a), 0, p, _), i.xs0 = d)) : i = _e(v, a, p, _, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
			return i
		}, l.setRatio = function(t) {
			var e, i, r, s = this._firstPT,
				n = 1e-6;
			if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
				if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
					for (; s;) {
						if (e = s.c * t + s.s, s.r ? e = Math.round(e) : n > e && e > -n && (e = 0), s.type)
							if (1 === s.type)
								if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
								else
						if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
						else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
						else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
						else {
							for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) i += s["xn" + r] + s["xs" + (r + 1)];
							s.t[s.p] = i
						} else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
						else s.t[s.p] = e + s.xs0;
						s = s._next
					} else
						for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
				else
					for (; s;) 2 !== s.type ? s.t[s.p] = s.e : s.setRatio(t), s = s._next
		}, l._enableTransforms = function(t) {
			this._transform = this._transform || Ae(this._target, s, !0), this._transformType = this._transform.svg && ve || !t && 3 !== this._transformType ? 2 : 3
		};
		var Ee = function() {
			this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
		};
		l._addLazySet = function(t, e, i) {
			var r = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);
			r.e = i, r.setRatio = Ee, r.data = this
		}, l._linkCSSP = function(t, e, i, r) {
			return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
		}, l._kill = function(e) {
			var i, r, s, n = e;
			if (e.autoAlpha || e.alpha) {
				n = {};
				for (r in e) n[r] = e[r];
				n.opacity = 1, n.autoAlpha && (n.visibility = 1)
			}
			return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
		};
		var Fe = function(t, e, i) {
			var r, s, n, a;
			if (t.slice)
				for (s = t.length; --s > -1;) Fe(t[s], e, i);
			else
				for (r = t.childNodes, s = r.length; --s > -1;) n = r[s], a = n.type, n.style && (e.push(Z(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Fe(n, e, i)
		};
		return a.cascadeTo = function(t, i, r) {
			var s, n, a, o = e.to(t, i, r),
				l = [o],
				h = [],
				u = [],
				f = [],
				p = e._internals.reservedProps;
			for (t = o._targets || o.target, Fe(t, h, f), o.render(i, !0), Fe(t, u), o.render(0, !0), o._enabled(!0), s = f.length; --s > -1;)
				if (n = $(f[s], h[s], u[s]), n.firstMPT) {
					n = n.difs;
					for (a in r) p[a] && (n[a] = r[a]);
					l.push(e.to(f[s], i, n))
				}
			return l
		}, t.activate([a]), a
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
	"use strict";
	var e = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[t]
	};
	"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
}("CSSPlugin");

/*!
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(function(t) {
	"use strict";
	var e = t.GreenSockGlobals || t,
		i = function(t) {
			var i, s = t.split("."),
				r = e;
			for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
			return r
		}, s = i("com.greensock.utils"),
		r = function(t) {
			var e = t.nodeType,
				i = "";
			if (1 === e || 9 === e || 11 === e) {
				if ("string" == typeof t.textContent) return t.textContent;
				for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
			} else if (3 === e || 4 === e) return t.nodeValue;
			return i
		}, n = document,
		a = n.defaultView ? n.defaultView.getComputedStyle : function() {}, o = /([A-Z])/g,
		h = function(t, e, i, s) {
			var r;
			return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0
		}, l = function(t) {
			return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
		}, _ = function(t) {
			var e, i, s, r = [],
				n = t.length;
			for (e = 0; n > e; e++)
				if (i = t[e], l(i))
					for (s = i.length, s = 0; i.length > s; s++) r.push(i[s]);
				else r.push(i);
			return r
		}, u = ")eefec303079ad17405c",
		c = /(?:<br>|<br\/>|<br \/>)/gi,
		p = n.all && !n.addEventListener,
		f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
		m = function(t) {
			t = t || "";
			var e = -1 !== t.indexOf("++"),
				i = 1;
			return e && (t = t.split("++").join("")),
			function() {
				return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
			}
		}, d = s.SplitText = e.SplitText = function(t, e) {
			if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
			this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
		}, g = function(t, e, i) {
			var s = t.nodeType;
			if (1 === s || 9 === s || 11 === s)
				for (t = t.firstChild; t; t = t.nextSibling) g(t, e, i);
			else(3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i))
		}, v = function(t, e) {
			for (var i = e.length; --i > -1;) t.push(e[i])
		}, y = function(t, e, i, s, o) {
			c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
			var l, _, p, f, d, y, T, w, b, x, P, S, C, k, R = r(t),
				A = e.type || e.split || "chars,words,lines",
				O = -1 !== A.indexOf("lines") ? [] : null,
				D = -1 !== A.indexOf("words"),
				M = -1 !== A.indexOf("chars"),
				L = "absolute" === e.position || e.absolute === !0,
				z = L ? "&#173; " : " ",
				I = -999,
				E = a(t),
				N = h(t, "paddingLeft", E),
				F = h(t, "borderBottomWidth", E) + h(t, "borderTopWidth", E),
				X = h(t, "borderLeftWidth", E) + h(t, "borderRightWidth", E),
				U = h(t, "paddingTop", E) + h(t, "paddingBottom", E),
				B = h(t, "paddingLeft", E) + h(t, "paddingRight", E),
				j = h(t, "textAlign", E, !0),
				Y = t.clientHeight,
				q = t.clientWidth,
				G = "</div>",
				V = m(e.wordsClass),
				Q = m(e.charsClass),
				W = -1 !== (e.linesClass || "").indexOf("++"),
				H = e.linesClass,
				Z = -1 !== R.indexOf("<"),
				$ = !0,
				K = [],
				J = [],
				te = [];
			for (W && (H = H.split("++").join("")), Z && (R = R.split("<").join("{{LT}}")), l = R.length, f = V(), d = 0; l > d; d++)
				if (T = R.charAt(d), ")" === T && R.substr(d, 20) === u) f += ($ ? G : "") + "<BR/>", $ = !1, d !== l - 20 && R.substr(d + 20, 20) !== u && (f += " " + V(), $ = !0), d += 19;
				else
			if (" " === T && " " !== R.charAt(d - 1) && d !== l - 1 && R.substr(d - 20, 20) !== u) {
				for (f += $ ? G : "", $ = !1;
					" " === R.charAt(d + 1);) f += z, d++;
				(")" !== R.charAt(d + 1) || R.substr(d + 1, 20) !== u) && (f += z + V(), $ = !0)
			} else f += M && " " !== T ? Q() + T + "</div>" : T;
			for (t.innerHTML = f + ($ ? G : ""), Z && g(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), l = y.length, w = [], d = 0; l > d; d++) w[d] = y[d];
			if (O || L)
				for (d = 0; l > d; d++) b = w[d], p = b.parentNode === t, (p || L || M && !D) && (x = b.offsetTop, O && p && x !== I && "BR" !== b.nodeName && (_ = [], O.push(_), I = x), L && (b._x = b.offsetLeft, b._y = x, b._w = b.offsetWidth, b._h = b.offsetHeight), O && (D !== p && M || (_.push(b), b._x -= N), p && d && (w[d - 1]._wordEnd = !0), "BR" === b.nodeName && b.nextSibling && "BR" === b.nextSibling.nodeName && O.push([])));
			for (d = 0; l > d; d++) b = w[d], p = b.parentNode === t, "BR" !== b.nodeName ? (L && (S = b.style, D || p || (b._x += b.parentNode._x, b._y += b.parentNode._y), S.left = b._x + "px", S.top = b._y + "px", S.position = "absolute", S.display = "block", S.width = b._w + 1 + "px", S.height = b._h + "px"), D ? p && "" !== b.innerHTML ? J.push(b) : M && K.push(b) : p ? (t.removeChild(b), w.splice(d--, 1), l--) : !p && M && (x = !O && !L && b.nextSibling, t.appendChild(b), x || t.appendChild(n.createTextNode(" ")), K.push(b))) : O || L ? (t.removeChild(b), w.splice(d--, 1), l--) : D || t.appendChild(b);
			if (O) {
				for (L && (P = n.createElement("div"), t.appendChild(P), C = P.offsetWidth + "px", x = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
				for (k = !L || !D && !M, d = 0; O.length > d; d++) {
					for (_ = O[d], P = n.createElement("div"), P.style.cssText = "display:block;text-align:" + j + ";position:" + (L ? "absolute;" : "relative;"), H && (P.className = H + (W ? d + 1 : "")), te.push(P), l = _.length, y = 0; l > y; y++) "BR" !== _[y].nodeName && (b = _[y], P.appendChild(b), k && (b._wordEnd || D) && P.appendChild(n.createTextNode(" ")), L && (0 === y && (P.style.top = b._y + "px", P.style.left = N + x + "px"), b.style.top = "0px", x && (b.style.left = b._x - x + "px")));
					0 === l && (P.innerHTML = "&nbsp;"), D || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), L && (P.style.width = C, P.style.height = b._h + "px"), t.appendChild(P)
				}
				t.style.cssText = S
			}
			L && (Y > t.clientHeight && (t.style.height = Y - U + "px", Y > t.clientHeight && (t.style.height = Y + F + "px")), q > t.clientWidth && (t.style.width = q - B + "px", q > t.clientWidth && (t.style.width = q + X + "px"))), v(i, K), v(s, J), v(o, te)
		}, T = d.prototype;
	T.split = function(t) {
		this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
		for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
		return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
	}, T.revert = function() {
		if (!this._originals) throw "revert() call wasn't scoped properly.";
		for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
		return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
	}, d.selector = t.$ || t.jQuery || function(e) {
		var i = t.$ || t.jQuery;
		return i ? (d.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
	}, d.version = "0.3.3"
})(_gsScope),
function(t) {
	"use strict";
	var e = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[t]
	};
	"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText");


try {
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);
} catch (e) {}

try {
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
} catch (e) {}

if (window.tplogs == true)
	try {
		console.groupEnd();
	} catch (e) {}



(function(e, t) {
	e.waitForImages = {
		hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
	};
	e.expr[":"].uncached = function(t) {
		var n = document.createElement("img");
		n.src = t.src;
		return e(t).is('img[src!=""]') && !n.complete
	};
	e.fn.waitForImages = function(t, n, r) {
		if (e.isPlainObject(arguments[0])) {
			n = t.each;
			r = t.waitForAll;
			t = t.finished
		}
		t = t || e.noop;
		n = n || e.noop;
		r = !! r;
		if (!e.isFunction(t) || !e.isFunction(n)) {
			throw new TypeError("An invalid callback was supplied.")
		}
		return this.each(function() {
			var i = e(this),
				s = [];
			if (r) {
				var o = e.waitForImages.hasImageProperties || [],
					u = /url\((['"]?)(.*?)\1\)/g;
				i.find("*").each(function() {
					var t = e(this);
					if (t.is("img:uncached")) {
						s.push({
							src: t.attr("src"),
							element: t[0]
						})
					}
					e.each(o, function(e, n) {
						var r = t.css(n);
						if (!r) {
							return true
						}
						var i;
						while (i = u.exec(r)) {
							s.push({
								src: i[2],
								element: t[0]
							})
						}
					})
				})
			} else {
				i.find("img:uncached").each(function() {
					s.push({
						src: this.src,
						element: this
					})
				})
			}
			var f = s.length,
				l = 0;
			if (f == 0) {
				t.call(i[0])
			}
			e.each(s, function(r, s) {
				var o = new Image;
				e(o).bind("load error", function(e) {
					l++;
					n.call(s.element, l, f, e.type == "load");
					if (l == f) {
						t.call(i[0]);
						return false
					}
				});
				o.src = s.src
			})
		})
	};
})(jQuery)

;
/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.5 (02.12.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 **************************************************************************/

function revslider_showDoubleJqueryError(a) {
	var b = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	b += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", b += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", b += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.", b = "<span style='font-size:16px;color:#BC0C06;'>" + b + "</span>", jQuery(a).show().html(b)
}! function(a, b) {
	function c() {
		var a = !1;
		return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (a = !0) : a = !1, a
	}

	function d(d, e) {
		if (d == b) return !1;
		if (d.data("aimg") != b && ("enabled" == d.data("aie8") && i(8) || "enabled" == d.data("amobile") && W()) && d.html('<img class="tp-slider-alternative-image" src="' + d.data("aimg") + '">'), ("preview1" == e.navigationStyle || "preview3" == e.navigationStyle || "preview4" == e.navigationStyle) && (e.soloArrowLeftHalign = "left", e.soloArrowLeftValign = "center", e.soloArrowLeftHOffset = 0, e.soloArrowLeftVOffset = 0, e.soloArrowRightHalign = "right", e.soloArrowRightValign = "center", e.soloArrowRightHOffset = 0, e.soloArrowRightVOffset = 0, e.navigationArrows = "solo"), "on" == e.simplifyAll && (i(8) || c()) && (d.find(".tp-caption").each(function() {
			var b = a(this);
			b.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"), b.data("splitin", ""), b.data("speed", 400)
		}), d.find(">ul>li").each(function() {
			var b = a(this);
			b.data("transition", "fade"), b.data("masterspeed", 500), b.data("slotamount", 1);
			var c = b.find(">img").first();
			c.data("kenburns", "off")
		})), e.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != e.fullWidth && "on" != e.fullScreen && (e.autoHeight = "off"), "on" == e.fullScreen && (e.autoHeight = "on"), "on" != e.fullWidth && "on" != e.fullScreen && (forceFulWidth = "off"), "on" == e.fullWidth && "off" == e.autoHeight && d.css({
			maxHeight: e.startheight + "px"
		}), W() && "on" == e.hideThumbsOnMobile && "thumb" == e.navigationType && (e.navigationType = "none"), W() && "on" == e.hideBulletsOnMobile && "bullet" == e.navigationType && (e.navigationType = "none"), W() && "on" == e.hideBulletsOnMobile && "both" == e.navigationType && (e.navigationType = "none"), W() && "on" == e.hideArrowsOnMobile && (e.navigationArrows = "none"), "on" == e.forceFullWidth && 0 == d.closest(".forcefullwidth_wrapper_tp_banner").length) {
			var j = d.parent().offset().left,
				p = d.parent().css("marginBottom"),
				q = d.parent().css("marginTop");
			p == b && (p = 0), q == b && (q = 0), d.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + q + ";margin-bottom:" + p + '" class="forcefullwidth_wrapper_tp_banner"></div>'), d.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + d.height() + 'px"></div>'), d.css({
				backgroundColor: d.parent().css("backgroundColor"),
				backgroundImage: d.parent().css("backgroundImage")
			}), d.parent().css({
				left: 0 - j + "px",
				position: "absolute",
				width: a(window).width()
			}), e.width = a(window).width()
		}
		try {
			e.hideThumbsUnderResolution > a(window).width() && 0 != e.hideThumbsUnderResolution ? d.parent().find(".tp-bullets.tp-thumbs").css({
				display: "none"
			}) : d.parent().find(".tp-bullets.tp-thumbs").css({
				display: "block"
			})
		} catch (r) {}
		if (!d.hasClass("revslider-initialised")) {
			d.addClass("revslider-initialised"), d.attr("id") == b && d.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), e.firefox13 = !1, e.ie = !a.support.opacity, e.ie9 = 9 == document.documentMode, e.origcd = e.delay;
			var t = a.fn.jquery.split("."),
				u = parseFloat(t[0]),
				v = parseFloat(t[1]);
			parseFloat(t[2] || "0"), 1 == u && 7 > v && d.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + t + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), u > 1 && (e.ie = !1), a.support.transition || (a.fn.transition = a.fn.animate), d.find(".caption").each(function() {
				a(this).addClass("tp-caption")
			}), W() && d.find(".tp-caption").each(function() {
				var b = a(this);
				(1 == b.data("autoplayonlyfirsttime") || "true" == b.data("autoplayonlyfirsttime")) && b.data("autoplayonlyfirsttime", "false"), (1 == b.data("autoplay") || "true" == b.data("autoplay")) && b.data("autoplay", !1)
			});
			var x = 0,
				y = 0,
				B = "http";
			if ("https:" === location.protocol && (B = "https"), d.find(".tp-caption").each(function() {
				try {
					if ((a(this).data("ytid") != b || a(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == x) {
						x = 1;
						var d = document.createElement("script"),
							e = "https";
						d.src = e + "://www.youtube.com/iframe_api";
						var f = document.getElementsByTagName("script")[0],
							g = !0;
						a("head").find("*").each(function() {
							a(this).attr("src") == e + "://www.youtube.com/iframe_api" && (g = !1)
						}), g && f.parentNode.insertBefore(d, f)
					}
				} catch (h) {}
				try {
					if ((a(this).data("vimeoid") != b || a(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == y) {
						y = 1;
						var i = document.createElement("script");
						i.src = B + "://a.vimeocdn.com/js/froogaloop2.min.js";
						var f = document.getElementsByTagName("script")[0],
							g = !0;
						a("head").find("*").each(function() {
							a(this).attr("src") == B + "://a.vimeocdn.com/js/froogaloop2.min.js" && (g = !1)
						}), g && f.parentNode.insertBefore(i, f)
					}
				} catch (h) {}
				try {
					a(this).data("videomp4") != b || a(this).data("videowebm") != b
				} catch (h) {}
			}), d.find(".tp-caption video").each(function() {
				a(this).removeClass("video-js").removeClass("vjs-default-skin"), a(this).attr("preload", ""), a(this).css({
					display: "none"
				})
			}), d.find(">ul:first-child >li").each(function() {
				var b = a(this);
				b.data("origindex", b.index())
			}), "on" == e.shuffle) {
				var C = new Object,
					D = d.find(">ul:first-child >li:first-child");
				C.fstransition = D.data("fstransition"), C.fsmasterspeed = D.data("fsmasterspeed"), C.fsslotamount = D.data("fsslotamount");
				for (var E = 0; E < d.find(">ul:first-child >li").length; E++) {
					var F = Math.round(Math.random() * d.find(">ul:first-child >li").length);
					d.find(">ul:first-child >li:eq(" + F + ")").prependTo(d.find(">ul:first-child"))
				}
				var G = d.find(">ul:first-child >li:first-child");
				G.data("fstransition", C.fstransition), G.data("fsmasterspeed", C.fsmasterspeed), G.data("fsslotamount", C.fsslotamount)
			}
			e.slots = 4, e.act = -1, e.next = 0, e.startWithSlide != b && (e.next = e.startWithSlide);
			var H = g("#")[0];
			if (H.length < 9 && H.split("slide").length > 1) {
				var I = parseInt(H.split("slide")[1], 0);
				1 > I && (I = 1), I > d.find(">ul:first >li").length && (I = d.find(">ul:first >li").length), e.next = I - 1
			}
			e.firststart = 1, e.navigationHOffset == b && (e.navOffsetHorizontal = 0), e.navigationVOffset == b && (e.navOffsetVertical = 0), d.append('<div class="tp-loader ' + e.spinner + '">' + '<div class="dot1"></div>' + '<div class="dot2"></div>' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + "</div>"), 0 == d.find(".tp-bannertimer").length && d.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
			var J = d.find(".tp-bannertimer");
			if (J.length > 0 && J.css({
				width: "0%"
			}), d.addClass("tp-simpleresponsive"), e.container = d, e.slideamount = d.find(">ul:first >li").length, 0 == d.height() && d.height(e.startheight), (e.startwidth == b || 0 == e.startwidth) && (e.startwidth = d.width()), (e.startheight == b || 0 == e.startheight) && (e.startheight = d.height()), e.width = d.width(), e.height = d.height(), e.bw = e.startwidth / d.width(), e.bh = e.startheight / d.height(), e.width != e.startwidth && (e.height = Math.round(e.startheight * (e.width / e.startwidth)), d.height(e.height)), 0 != e.shadow) {
				d.parent().append('<div class="tp-bannershadow tp-shadow' + e.shadow + '"></div>');
				var j = 0;
				"on" == e.forceFullWidth && (j = 0 - e.container.parent().offset().left), d.parent().find(".tp-bannershadow").css({
					width: e.width,
					left: j
				})
			}
			d.find("ul").css({
				display: "none"
			}), d.find("ul").css({
				display: "block"
			}), s(d, e), "off" != e.parallax && ab(d, e), e.slideamount > 1 && k(d, e), e.slideamount > 1 && "thumb" == e.navigationType && cb(d, e), e.slideamount > 1 && l(d, e), "on" == e.keyboardNavigation && m(d, e), n(d, e), e.hideThumbs > 0 && o(d, e), setTimeout(function() {
				z(d, e)
			}, e.startDelay), e.startDelay = 0, e.slideamount > 1 && V(d, e), setTimeout(function() {
				d.trigger("revolution.slide.onloaded")
			}, 500), a("body").data("rs-fullScreenMode", !1), a(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
				a("body").data("rs-fullScreenMode", !a("body").data("rs-fullScreenMode")), a("body").data("rs-fullScreenMode") && setTimeout(function() {
					a(window).trigger("resize")
				}, 200)
			});
			var L = "resize.revslider-" + d.attr("id");
			a(window).on(L, function() {
				if (d == b) return !1;
				if (0 != a("body").find(d) && "on" == e.forceFullWidth) {
					var c = e.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
					e.container.parent().css({
						left: 0 - c + "px",
						width: a(window).width()
					})
				}(d.outerWidth(!0) != e.width || d.is(":hidden")) && h(d, e)
			});
			try {
				0 != e.hideThumbsUnderResoluition && "thumb" == e.navigationType && (e.hideThumbsUnderResoluition > a(window).width() ? a(".tp-bullets").css({
					display: "none"
				}) : a(".tp-bullets").css({
					display: "block"
				}))
			} catch (r) {}
			d.find(".tp-scrollbelowslider").on("click", function() {
				var b = 0;
				try {
					b = a("body").find(e.fullScreenOffsetContainer).height()
				} catch (c) {}
				try {
					b -= parseInt(a(this).data("scrolloffset"), 0)
				} catch (c) {}
				a("body,html").animate({
					scrollTop: d.offset().top + d.find(">ul >li").height() - b + "px"
				}, {
					duration: 400
				})
			});
			var M = d.parent();
			a(window).width() < e.hideSliderAtLimit && (d.trigger("stoptimer"), "none" != M.css("display") && M.data("olddisplay", M.css("display")), M.css({
				display: "none"
			})), f(d, e)
		}
	}
	a.fn.extend({
		revolution: function(c) {
			var e = {
				delay: 9e3,
				startheight: 500,
				startwidth: 960,
				fullScreenAlignForce: "off",
				autoHeight: "off",
				hideTimerBar: "off",
				hideThumbs: 200,
				hideNavDelayOnMobile: 1500,
				thumbWidth: 100,
				thumbHeight: 50,
				thumbAmount: 3,
				navigationType: "bullet",
				navigationArrows: "solo",
				navigationInGrid: "off",
				hideThumbsOnMobile: "off",
				hideBulletsOnMobile: "off",
				hideArrowsOnMobile: "off",
				hideThumbsUnderResoluition: 0,
				navigationStyle: "round",
				navigationHAlign: "center",
				navigationVAlign: "bottom",
				navigationHOffset: 0,
				navigationVOffset: 20,
				soloArrowLeftHalign: "left",
				soloArrowLeftValign: "center",
				soloArrowLeftHOffset: 20,
				soloArrowLeftVOffset: 0,
				soloArrowRightHalign: "right",
				soloArrowRightValign: "center",
				soloArrowRightHOffset: 20,
				soloArrowRightVOffset: 0,
				keyboardNavigation: "on",
				touchenabled: "on",
				onHoverStop: "on",
				stopAtSlide: -1,
				stopAfterLoops: -1,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLimit: 0,
				hideSliderAtLimit: 0,
				shadow: 0,
				fullWidth: "off",
				fullScreen: "off",
				minFullScreenHeight: 0,
				fullScreenOffsetContainer: "",
				fullScreenOffset: "0",
				dottedOverlay: "none",
				forceFullWidth: "off",
				spinner: "spinner0",
				swipe_treshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: !1,
				isJoomla: !1,
				parallax: "off",
				parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
				parallaxBgFreeze: "off",
				parallaxOpacity: "on",
				parallaxDisableOnMobile: "off",
				panZoomDisableOnMobile: "off",
				simplifyAll: "on",
				minHeight: 0,
				nextSlideOnWindowFocus: "off",
				startDelay: 0
			};
			return c = a.extend({}, e, c), this.each(function() {
				if (1 == window.tplogs) try {
					console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on " + a(this).attr("id")), console.groupCollapsed("Used Options:"), console.info(c), console.groupEnd(), console.groupCollapsed("Tween Engine:")
				} catch (e) {}
				if (punchgs.TweenLite == b) {
					if (1 == window.tplogs) try {
						console.error("GreenSock Engine Does not Exist!")
					} catch (e) {}
					return !1
				}
				if (punchgs.force3D = !0, 1 == window.tplogs) try {
					console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
				} catch (e) {}
				if ("on" == c.simplifyAll || (punchgs.TweenLite.lagSmoothing(1e3, 16), punchgs.force3D = "true"), 1 == window.tplogs) try {
					console.groupEnd(), console.groupEnd()
				} catch (e) {}
				d(a(this), c)
			})
		},
		revscroll: function(c) {
			return this.each(function() {
				var d = a(this);
				d != b && d.length > 0 && a("body").find("#" + d.attr("id")).length > 0 && a("body,html").animate({
					scrollTop: d.offset().top + d.find(">ul >li").height() - c + "px"
				}, {
					duration: 400
				})
			})
		},
		revredraw: function() {
			return this.each(function() {
				var c = a(this);
				if (c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0) {
					var d = c.parent().find(".tp-bannertimer"),
						e = d.data("opt");
					h(c, e)
				}
			})
		},
		revkill: function() {
			var d = this,
				e = a(this);
			if (e != b && e.length > 0 && a("body").find("#" + e.attr("id")).length > 0) {
				e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause");
				var f = e.parent().find(".tp-bannertimer"),
					g = f.data("opt");
				g.bannertimeronpause = !0, e.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(e.find("*"), !1), punchgs.TweenLite.killTweensOf(e, !1), e.unbind("hover, mouseover, mouseenter,mouseleave, resize");
				var h = "resize.revslider-" + e.attr("id");
				a(window).off(h), e.find("*").each(function() {
					var c = a(this);
					c.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), c.off("on, hover, mouseenter,mouseleave,mouseover, resize"), c.data("mySplitText", null), c.data("ctl", null), c.data("tween") != b && c.data("tween").kill(), c.data("kenburn") != b && c.data("kenburn").kill(), c.remove(), c.empty(), c = null
				}), punchgs.TweenLite.killTweensOf(e.find("*"), !1), punchgs.TweenLite.killTweensOf(e, !1), f.remove();
				try {
					e.closest(".forcefullwidth_wrapper_tp_banner").remove()
				} catch (i) {}
				try {
					e.closest(".rev_slider_wrapper").remove()
				} catch (i) {}
				try {
					e.remove()
				} catch (i) {}
				return e.empty(), e.html(), e = null, g = null, delete d.container, delete d.opt, !0
			}
			return !1
		},
		revpause: function() {
			return this.each(function() {
				var c = a(this);
				if (c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0) {
					c.data("conthover", 1), c.data("conthover-changed", 1), c.trigger("revolution.slide.onpause");
					var d = c.parent().find(".tp-bannertimer"),
						e = d.data("opt");
					e.bannertimeronpause = !0, c.trigger("stoptimer")
				}
			})
		},
		revresume: function() {
			return this.each(function() {
				var c = a(this);
				if (c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0) {
					c.data("conthover", 0), c.data("conthover-changed", 1), c.trigger("revolution.slide.onresume");
					var d = c.parent().find(".tp-bannertimer"),
						e = d.data("opt");
					e.bannertimeronpause = !1, c.trigger("starttimer")
				}
			})
		},
		revnext: function() {
			return this.each(function() {
				var c = a(this);
				c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0 && c.parent().find(".tp-rightarrow").click()
			})
		},
		revprev: function() {
			return this.each(function() {
				var c = a(this);
				c != b && c.length > 0 && a("body").find("#" + c.attr("id")).length > 0 && c.parent().find(".tp-leftarrow").click()
			})
		},
		revmaxslide: function() {
			return a(this).find(">ul:first-child >li").length
		},
		revcurrentslide: function() {
			var d = a(this);
			if (d != b && d.length > 0 && a("body").find("#" + d.attr("id")).length > 0) {
				var e = d.parent().find(".tp-bannertimer"),
					f = e.data("opt");
				return f.act
			}
		},
		revlastslide: function() {
			var d = a(this);
			if (d != b && d.length > 0 && a("body").find("#" + d.attr("id")).length > 0) {
				var e = d.parent().find(".tp-bannertimer"),
					f = e.data("opt");
				return f.lastslide
			}
		},
		revshowslide: function(c) {
			return this.each(function() {
				var d = a(this);
				d != b && d.length > 0 && a("body").find("#" + d.attr("id")).length > 0 && (d.data("showus", c), d.parent().find(".tp-rightarrow").click())
			})
		}
	}),
	function() {
		var a, b, c = {
				hidden: "visibilitychange",
				webkitHidden: "webkitvisibilitychange",
				mozHidden: "mozvisibilitychange",
				msHidden: "msvisibilitychange"
			};
		for (a in c)
			if (a in document) {
				b = c[a];
				break
			}
		return function(c) {
			return c && document.addEventListener(b, c), !document[a]
		}
	}();
	var f = function(c, d) {
		var e = document.documentMode === b,
			f = window.chrome;
		e && !f ? a(window).on("focusin", function() {
			return c == b ? !1 : (setTimeout(function() {
				"on" == d.nextSlideOnWindowFocus && c.revnext(), c.revredraw()
			}, 300), void 0)
		}).on("focusout", function() {}) : window.addEventListener ? (window.addEventListener("focus", function() {
			return c == b ? !1 : (setTimeout(function() {
				"on" == d.nextSlideOnWindowFocus && c.revnext(), c.revredraw()
			}, 300), void 0)
		}, !1), window.addEventListener("blur", function() {}, !1)) : (window.attachEvent("focus", function() {
			setTimeout(function() {
				return c == b ? !1 : ("on" == d.nextSlideOnWindowFocus && c.revnext(), c.revredraw(), void 0)
			}, 300)
		}), window.attachEvent("blur", function() {}))
	}, g = function(a) {
			for (var c, b = [], d = window.location.href.slice(window.location.href.indexOf(a) + 1).split("_"), e = 0; e < d.length; e++) d[e] = d[e].replace("%3D", "="), c = d[e].split("="), b.push(c[0]), b[c[0]] = c[1];
			return b
		}, h = function(c, d) {
			if (c == b) return !1;
			try {
				0 != d.hideThumbsUnderResoluition && "thumb" == d.navigationType && (d.hideThumbsUnderResoluition > a(window).width() ? a(".tp-bullets").css({
					display: "none"
				}) : a(".tp-bullets").css({
					display: "block"
				}))
			} catch (e) {}
			c.find(".defaultimg").each(function() {
				r(a(this), d)
			});
			var f = c.parent();
			a(window).width() < d.hideSliderAtLimit ? (c.trigger("stoptimer"), "none" != f.css("display") && f.data("olddisplay", f.css("display")), f.css({
				display: "none"
			})) : c.is(":hidden") && (f.data("olddisplay") != b && "undefined" != f.data("olddisplay") && "none" != f.data("olddisplay") ? f.css({
				display: f.data("olddisplay")
			}) : f.css({
				display: "block"
			}), c.trigger("restarttimer"), setTimeout(function() {
				h(c, d)
			}, 150));
			var g = 0;
			"on" == d.forceFullWidth && (g = 0 - d.container.parent().offset().left);
			try {
				c.parent().find(".tp-bannershadow").css({
					width: d.width,
					left: g
				})
			} catch (e) {}
			var i = c.find(">ul >li:eq(" + d.act + ") .slotholder"),
				j = c.find(">ul >li:eq(" + d.next + ") .slotholder");
			v(c, d, c), punchgs.TweenLite.set(j.find(".defaultimg"), {
				opacity: 0
			}), i.find(".defaultimg").css({
				opacity: 1
			}), j.find(".defaultimg").each(function() {
				var e = a(this);
				"on" == d.panZoomDisableOnMobile || e.data("kenburn") != b && (e.data("kenburn").restart(), Y(c, d, !0))
			});
			var k = c.find(">ul >li:eq(" + d.next + ")"),
				l = c.parent().find(".tparrows");
			l.hasClass("preview2") && l.css({
				width: parseInt(l.css("minWidth"), 0)
			}), L(k, d, !0), p(c, d)
		}, i = function(b, c) {
			var d = a('<div style="display:none;"/>').appendTo(a("body"));
			d.html("<!--[if " + (c || "") + " IE " + (b || "") + "]><a>&nbsp;</a><![endif]-->");
			var e = d.find("a").length;
			return d.remove(), e
		}, j = function(a, b) {
			a.next == b.find(">ul >li").length - 1 && (a.looptogo = a.looptogo - 1, a.looptogo <= 0 && (a.stopLoop = "on")), z(b, a)
		}, k = function(b, c) {
			var d = "hidebullets";
			0 == c.hideThumbs && (d = ""), ("bullet" == c.navigationType || "both" == c.navigationType) && b.parent().append('<div class="tp-bullets ' + d + " simplebullets " + c.navigationStyle + '"></div>');
			var e = b.parent().find(".tp-bullets");
			b.find(">ul:first >li").each(function(a) {
				b.find(">ul:first >li:eq(" + a + ") img:first").attr("src"), e.append('<div class="bullet"></div>'), e.find(".bullet:first")
			}), e.find(".bullet").each(function(d) {
				var e = a(this);
				d == c.slideamount - 1 && e.addClass("last"), 0 == d && e.addClass("first"), e.click(function() {
					var a = !1,
						d = e.index();
					("withbullet" == c.navigationArrows || "nexttobullets" == c.navigationArrows) && (d = e.index() - 1), d == c.act && (a = !0), 0 != c.transition || a || (c.next = d, j(c, b))
				})
			}), e.append('<div class="tpclear"></div>'), p(b, c)
		}, l = function(a, c) {
			function h(b) {
				a.parent().append('<div style="' + e + '" class="tp-' + b + "arrow " + f + " tparrows " + g + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
			}
			var e = (a.find(".tp-bullets"), ""),
				f = "hidearrows",
				g = c.navigationStyle;
			0 == c.hideThumbs && (f = ""), "none" == c.navigationArrows && (e = "visibility:hidden;display:none"), c.soloArrowStyle = "default " + c.navigationStyle, "none" != c.navigationArrows && "nexttobullets" != c.navigationArrows && (g = c.soloArrowStyle), h("left"), h("right"), a.parent().find(".tp-rightarrow").click(function() {
				0 == c.transition && (c.next = a.data("showus") != b && -1 != a.data("showus") ? a.data("showus") - 1 : c.next + 1, a.data("showus", -1), c.next >= c.slideamount && (c.next = 0), c.next < 0 && (c.next = 0), c.act != c.next && j(c, a))
			}), a.parent().find(".tp-leftarrow").click(function() {
				0 == c.transition && (c.next = c.next - 1, c.leftarrowpressed = 1, c.next < 0 && (c.next = c.slideamount - 1), j(c, a))
			}), p(a, c)
		}, m = function(c, d) {
			a(document).keydown(function(a) {
				0 == d.transition && 39 == a.keyCode && (d.next = c.data("showus") != b && -1 != c.data("showus") ? c.data("showus") - 1 : d.next + 1, c.data("showus", -1), d.next >= d.slideamount && (d.next = 0), d.next < 0 && (d.next = 0), d.act != d.next && j(d, c)), 0 == d.transition && 37 == a.keyCode && (d.next = d.next - 1, d.leftarrowpressed = 1, d.next < 0 && (d.next = d.slideamount - 1), j(d, c))
			}), p(c, d)
		}, n = function(b, c) {
			var d = "vertical";
			"on" == c.touchenabled && (1 == c.drag_block_vertical && (d = "none"), b.swipe({
				allowPageScroll: d,
				fingers: c.swipe_min_touches,
				treshold: c.swipe_treshold,
				swipe: function(e, f) {
					switch (f) {
						case "left":
							0 == c.transition && (c.next = c.next + 1, c.next == c.slideamount && (c.next = 0), j(c, b));
							break;
						case "right":
							0 == c.transition && (c.next = c.next - 1, c.leftarrowpressed = 1, c.next < 0 && (c.next = c.slideamount - 1), j(c, b));
							break;
						case "up":
							"none" == d && a("html, body").animate({
								scrollTop: b.offset().top + b.height() + "px"
							});
							break;
						case "down":
							"none" == d && a("html, body").animate({
								scrollTop: b.offset().top - a(window).height() + "px"
							})
					}
				}
			}))
		}, o = function(a, b) {
			var c = a.parent().find(".tp-bullets"),
				d = a.parent().find(".tparrows");
			if (null == c) {
				a.append('<div class=".tp-bullets"></div>');
				var c = a.parent().find(".tp-bullets")
			}
			if (null == d) {
				a.append('<div class=".tparrows"></div>');
				var d = a.parent().find(".tparrows")
			}
			if (a.data("hideThumbs", b.hideThumbs), c.addClass("hidebullets"), d.addClass("hidearrows"), W()) try {
				a.hammer().on("touch", function() {
					a.addClass("hovered"), "on" == b.onHoverStop && a.trigger("stoptimer"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
				}), a.hammer().on("release", function() {
					a.removeClass("hovered"), a.trigger("starttimer"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
						c.addClass("hidebullets"), d.addClass("hidearrows"), a.trigger("starttimer")
					}, b.hideNavDelayOnMobile))
				})
			} catch (e) {} else c.hover(function() {
				b.overnav = !0, "on" == b.onHoverStop && a.trigger("stoptimer"), c.addClass("hovered"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
			}, function() {
				b.overnav = !1, a.trigger("starttimer"), c.removeClass("hovered"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
					c.addClass("hidebullets"), d.addClass("hidearrows")
				}, b.hideThumbs))
			}), d.hover(function() {
				b.overnav = !0, "on" == b.onHoverStop && a.trigger("stoptimer"), c.addClass("hovered"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
			}, function() {
				b.overnav = !1, a.trigger("starttimer"), c.removeClass("hovered")
			}), a.on("mouseenter", function() {
				a.addClass("hovered"), "on" == b.onHoverStop && a.trigger("stoptimer"), clearTimeout(a.data("hideThumbs")), c.removeClass("hidebullets"), d.removeClass("hidearrows")
			}), a.on("mouseleave", function() {
				a.removeClass("hovered"), a.trigger("starttimer"), a.hasClass("hovered") || c.hasClass("hovered") || a.data("hideThumbs", setTimeout(function() {
					c.addClass("hidebullets"), d.addClass("hidearrows")
				}, b.hideThumbs))
			})
		}, p = function(b, c) {
			var d = b.parent(),
				e = d.find(".tp-bullets");
			if ("thumb" == c.navigationType) {
				e.find(".thumb").each(function() {
					var d = a(this);
					d.css({
						width: c.thumbWidth * c.bw + "px",
						height: c.thumbHeight * c.bh + "px"
					})
				});
				var f = e.find(".tp-mask");
				f.width(c.thumbWidth * c.thumbAmount * c.bw), f.height(c.thumbHeight * c.bh), f.parent().width(c.thumbWidth * c.thumbAmount * c.bw), f.parent().height(c.thumbHeight * c.bh)
			}
			var g = d.find(".tp-leftarrow"),
				h = d.find(".tp-rightarrow");
			"thumb" == c.navigationType && "nexttobullets" == c.navigationArrows && (c.navigationArrows = "solo"), "nexttobullets" == c.navigationArrows && (g.prependTo(e).css({
				"float": "left"
			}), h.insertBefore(e.find(".tpclear")).css({
				"float": "left"
			}));
			var i = 0;
			"on" == c.forceFullWidth && (i = 0 - c.container.parent().offset().left);
			var j = 0,
				k = 0;
			if ("on" == c.navigationInGrid && (j = b.width() > c.startwidth ? (b.width() - c.startwidth) / 2 : 0, k = b.height() > c.startheight ? (b.height() - c.startheight) / 2 : 0), "none" != c.navigationArrows && "nexttobullets" != c.navigationArrows) {
				var l = c.soloArrowLeftValign,
					m = c.soloArrowLeftHalign,
					n = c.soloArrowRightValign,
					o = c.soloArrowRightHalign,
					p = c.soloArrowLeftVOffset,
					q = c.soloArrowLeftHOffset,
					r = c.soloArrowRightVOffset,
					s = c.soloArrowRightHOffset;
				g.css({
					position: "absolute"
				}), h.css({
					position: "absolute"
				}), "center" == l ? g.css({
					top: "50%",
					marginTop: p - Math.round(g.innerHeight() / 2) + "px"
				}) : "bottom" == l ? g.css({
					top: "auto",
					bottom: 0 + p + "px"
				}) : "top" == l && g.css({
					bottom: "auto",
					top: 0 + p + "px"
				}), "center" == m ? g.css({
					left: "50%",
					marginLeft: i + q - Math.round(g.innerWidth() / 2) + "px"
				}) : "left" == m ? g.css({
					left: j + q + i + "px"
				}) : "right" == m && g.css({
					right: j + q - i + "px"
				}), "center" == n ? h.css({
					top: "50%",
					marginTop: r - Math.round(h.innerHeight() / 2) + "px"
				}) : "bottom" == n ? h.css({
					top: "auto",
					bottom: 0 + r + "px"
				}) : "top" == n && h.css({
					bottom: "auto",
					top: 0 + r + "px"
				}), "center" == o ? h.css({
					left: "50%",
					marginLeft: i + s - Math.round(h.innerWidth() / 2) + "px"
				}) : "left" == o ? h.css({
					left: j + s + i + "px"
				}) : "right" == o && h.css({
					right: j + s - i + "px"
				}), null != g.position() && g.css({
					top: Math.round(parseInt(g.position().top, 0)) + "px"
				}), null != h.position() && h.css({
					top: Math.round(parseInt(h.position().top, 0)) + "px"
				})
			}
			"none" == c.navigationArrows && (g.css({
				visibility: "hidden"
			}), h.css({
				visibility: "hidden"
			}));
			var t = c.navigationVAlign,
				u = c.navigationHAlign,
				v = c.navigationVOffset * c.bh,
				w = c.navigationHOffset * c.bw;
			"center" == t && e.css({
				top: "50%",
				marginTop: v - Math.round(e.innerHeight() / 2) + "px"
			}), "bottom" == t && e.css({
				bottom: 0 + v + "px"
			}), "top" == t && e.css({
				top: 0 + v + "px"
			}), "center" == u && e.css({
				left: "50%",
				marginLeft: i + w - Math.round(e.innerWidth() / 2) + "px"
			}), "left" == u && e.css({
				left: 0 + w + i + "px"
			}), "right" == u && e.css({
				right: 0 + w - i + "px"
			})
		}, q = function(c) {
			var d = c.container;
			c.beforli = c.next - 1, c.comingli = c.next + 1, c.beforli < 0 && (c.beforli = c.slideamount - 1), c.comingli >= c.slideamount && (c.comingli = 0);
			var e = d.find(">ul:first-child >li:eq(" + c.comingli + ")"),
				f = d.find(">ul:first-child >li:eq(" + c.beforli + ")"),
				g = f.find(".defaultimg").attr("src"),
				h = e.find(".defaultimg").attr("src");
			c.arr == b && (c.arr = d.parent().find(".tparrows"), c.rar = d.parent().find(".tp-rightarrow"), c.lar = d.parent().find(".tp-leftarrow"), c.raimg = c.rar.find(".tp-arr-imgholder"), c.laimg = c.lar.find(".tp-arr-imgholder"), c.raimg_b = c.rar.find(".tp-arr-imgholder2"), c.laimg_b = c.lar.find(".tp-arr-imgholder2"), c.ratit = c.rar.find(".tp-arr-titleholder"), c.latit = c.lar.find(".tp-arr-titleholder"));
			var i = c.arr,
				j = c.rar,
				k = c.lar,
				l = c.raimg,
				m = c.laimg,
				n = c.raimg_b,
				o = c.laimg_b,
				p = c.ratit,
				q = c.latit;
			if (e.data("title") != b && p.html(e.data("title")), f.data("title") != b && q.html(f.data("title")), j.hasClass("itishovered") && j.width(p.outerWidth(!0) + parseInt(j.css("minWidth"), 0)), k.hasClass("itishovered") && k.width(q.outerWidth(!0) + parseInt(k.css("minWidth"), 0)), i.hasClass("preview2") && !i.hasClass("hashoveralready"))
				if (i.addClass("hashoveralready"), W()) {
					var i = a(this),
						r = i.find(".tp-arr-titleholder");
					r.addClass("alwayshidden"), punchgs.TweenLite.set(r, {
						autoAlpha: 0
					})
				} else i.hover(function() {
					var b = a(this),
						c = b.find(".tp-arr-titleholder");
					a(window).width() > 767 && b.width(c.outerWidth(!0) + parseInt(b.css("minWidth"), 0)), b.addClass("itishovered")
				}, function() {
					var b = a(this);
					b.find(".tp-arr-titleholder"), b.css({
						width: parseInt(b.css("minWidth"), 0)
					}), b.removeClass("itishovered")
				});
			f.data("thumb") != b && (g = f.data("thumb")), e.data("thumb") != b && (h = e.data("thumb")), i.hasClass("preview4") ? (n.css({
				backgroundImage: "url(" + h + ")"
			}), o.css({
				backgroundImage: "url(" + g + ")"
			}), punchgs.TweenLite.fromTo(n, .8, {
				force3D: punchgs.force3d,
				x: 0
			}, {
				x: -l.width(),
				ease: punchgs.Power3.easeOut,
				delay: 1,
				onComplete: function() {
					l.css({
						backgroundImage: "url(" + h + ")"
					}), punchgs.TweenLite.set(n, {
						x: 0
					})
				}
			}), punchgs.TweenLite.fromTo(o, .8, {
				force3D: punchgs.force3d,
				x: 0
			}, {
				x: l.width(),
				ease: punchgs.Power3.easeOut,
				delay: 1,
				onComplete: function() {
					m.css({
						backgroundImage: "url(" + g + ")"
					}), punchgs.TweenLite.set(o, {
						x: 0
					})
				}
			}), punchgs.TweenLite.fromTo(l, .8, {
				x: 0
			}, {
				force3D: punchgs.force3d,
				x: -l.width(),
				ease: punchgs.Power3.easeOut,
				delay: 1,
				onComplete: function() {
					punchgs.TweenLite.set(l, {
						x: 0
					})
				}
			}), punchgs.TweenLite.fromTo(m, .8, {
				x: 0
			}, {
				force3D: punchgs.force3d,
				x: l.width(),
				ease: punchgs.Power3.easeOut,
				delay: 1,
				onComplete: function() {
					punchgs.TweenLite.set(m, {
						x: 0
					})
				}
			})) : (punchgs.TweenLite.to(l, .5, {
				autoAlpha: 0,
				onComplete: function() {
					l.css({
						backgroundImage: "url(" + h + ")"
					}), m.css({
						backgroundImage: "url(" + g + ")"
					})
				}
			}), punchgs.TweenLite.to(m, .5, {
				autoAlpha: 0,
				onComplete: function() {
					punchgs.TweenLite.to(l, .5, {
						autoAlpha: 1,
						delay: .2
					}), punchgs.TweenLite.to(m, .5, {
						autoAlpha: 1,
						delay: .2
					})
				}
			})), j.hasClass("preview4") && !j.hasClass("hashoveralready") && (j.addClass("hashoveralready"), j.hover(function() {
				var b = a(this).find(".tp-arr-iwrapper"),
					c = a(this).find(".tp-arr-allwrapper");
				punchgs.TweenLite.fromTo(b, .4, {
					x: b.width()
				}, {
					x: 0,
					delay: .3,
					ease: punchgs.Power3.easeOut,
					overwrite: "all"
				}), punchgs.TweenLite.to(c, .2, {
					autoAlpha: 1,
					overwrite: "all"
				})
			}, function() {
				var b = a(this).find(".tp-arr-iwrapper"),
					c = a(this).find(".tp-arr-allwrapper");
				punchgs.TweenLite.to(b, .4, {
					x: b.width(),
					ease: punchgs.Power3.easeOut,
					delay: .2,
					overwrite: "all"
				}), punchgs.TweenLite.to(c, .2, {
					delay: .6,
					autoAlpha: 0,
					overwrite: "all"
				})
			}), k.hover(function() {
				var b = a(this).find(".tp-arr-iwrapper"),
					c = a(this).find(".tp-arr-allwrapper");
				punchgs.TweenLite.fromTo(b, .4, {
					x: 0 - b.width()
				}, {
					x: 0,
					delay: .3,
					ease: punchgs.Power3.easeOut,
					overwrite: "all"
				}), punchgs.TweenLite.to(c, .2, {
					autoAlpha: 1,
					overwrite: "all"
				})
			}, function() {
				var b = a(this).find(".tp-arr-iwrapper"),
					c = a(this).find(".tp-arr-allwrapper");
				punchgs.TweenLite.to(b, .4, {
					x: 0 - b.width(),
					ease: punchgs.Power3.easeOut,
					delay: .2,
					overwrite: "all"
				}), punchgs.TweenLite.to(c, .2, {
					delay: .6,
					autoAlpha: 0,
					overwrite: "all"
				})
			}))
		}, r = function(c, d) {
			if (d.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
				height: d.container.height()
			}), d.container.closest(".rev_slider_wrapper").css({
				height: d.container.height()
			}), d.width = parseInt(d.container.width(), 0), d.height = parseInt(d.container.height(), 0), d.bw = d.width / d.startwidth, d.bh = d.height / d.startheight, d.bh > d.bw && (d.bh = d.bw), d.bh < d.bw && (d.bw = d.bh), d.bw < d.bh && (d.bh = d.bw), d.bh > 1 && (d.bw = 1, d.bh = 1), d.bw > 1 && (d.bw = 1, d.bh = 1), d.height = Math.round(d.startheight * (d.width / d.startwidth)), d.height > d.startheight && "on" != d.autoHeight && (d.height = d.startheight), "on" == d.fullScreen) {
				d.height = d.bw * d.startheight, d.container.parent().width();
				var f = a(window).height();
				if (d.fullScreenOffsetContainer != b) {
					try {
						var g = d.fullScreenOffsetContainer.split(",");
						a.each(g, function(b, c) {
							f -= a(c).outerHeight(!0), f < d.minFullScreenHeight && (f = d.minFullScreenHeight)
						})
					} catch (h) {}
					try {
						d.fullScreenOffset.split("%").length > 1 && d.fullScreenOffset != b && d.fullScreenOffset.length > 0 ? f -= a(window).height() * parseInt(d.fullScreenOffset, 0) / 100 : d.fullScreenOffset != b && d.fullScreenOffset.length > 0 && (f -= parseInt(d.fullScreenOffset, 0)), f < d.minFullScreenHeight && (f = d.minFullScreenHeight)
					} catch (h) {}
				}
				d.container.parent().height(f), d.container.closest(".rev_slider_wrapper").height(f), d.container.css({
					height: "100%"
				}), d.height = f, d.minHeight != b && d.height < d.minHeight && (d.height = d.minHeight)
			} else d.minHeight != b && d.height < d.minHeight && (d.height = d.minHeight), d.container.height(d.height);
			d.slotw = Math.ceil(d.width / d.slots), d.sloth = "on" == d.fullScreen ? Math.ceil(a(window).height() / d.slots) : Math.ceil(d.height / d.slots), "on" == d.autoHeight && (d.sloth = Math.ceil(c.height() / d.slots))
		}, s = function(c, d) {
			c.find(".tp-caption").each(function() {
				a(this).addClass(a(this).data("transition")), a(this).addClass("start")
			}), c.find(">ul:first").css({
				overflow: "hidden",
				width: "100%",
				height: "100%",
				maxHeight: c.parent().css("maxHeight")
			}).addClass("tp-revslider-mainul"), "on" == d.autoHeight && (c.find(">ul:first").css({
				overflow: "hidden",
				width: "100%",
				height: "100%",
				maxHeight: "none"
			}), c.css({
				maxHeight: "none"
			}), c.parent().css({
				maxHeight: "none"
			})), c.find(">ul:first >li").each(function() {
				var e = a(this);
				if (e.addClass("tp-revslider-slidesli"), e.css({
					width: "100%",
					height: "100%",
					overflow: "hidden"
				}), e.data("link") != b) {
					var f = e.data("link"),
						g = "_self",
						h = 60;
					"back" == e.data("slideindex") && (h = 0);
					var i = checksl = e.data("linktoslide");
					i != b && "next" != i && "prev" != i && c.find(">ul:first-child >li").each(function() {
						var b = a(this);
						b.data("origindex") + 1 == checksl && (i = b.index() + 1)
					}), e.data("target") != b && (g = e.data("target")), "slide" != f && (i = "no");
					var j = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + h + ';" data-x="center" data-y="center" data-linktoslide="' + i + '" data-start="0"><a style="width:100%;height:100%;display:block"';
					"slide" != f && (j = j + ' target="' + g + '" href="' + f + '"'), j += '><span style="width:100%;height:100%;display:block"></span></a></div>', e.append(j)
				}
			}), c.parent().css({
				overflow: "visible"
			}), c.find(">ul:first >li >img").each(function(c) {
				var e = a(this);
				e.addClass("defaultimg"), e.data("lazyload") != b && 1 != e.data("lazydone") || r(e, d), i(8) && e.data("kenburns", "off"), "on" == d.panZoomDisableOnMobile && W() && (e.data("kenburns", "off"), e.data("bgfit", "cover")), e.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + e.data("duration") + '"' + 'data-zoomstart="' + e.data("zoomstart") + '"' + 'data-zoomend="' + e.data("zoomend") + '"' + 'data-rotationstart="' + e.data("rotationstart") + '"' + 'data-rotationend="' + e.data("rotationend") + '"' + 'data-ease="' + e.data("ease") + '"' + 'data-duration="' + e.data("duration") + '"' + 'data-bgpositionend="' + e.data("bgpositionend") + '"' + 'data-bgposition="' + e.data("bgposition") + '"' + 'data-duration="' + e.data("duration") + '"' + 'data-kenburns="' + e.data("kenburns") + '"' + 'data-easeme="' + e.data("ease") + '"' + 'data-bgfit="' + e.data("bgfit") + '"' + 'data-bgfitend="' + e.data("bgfitend") + '"' + 'data-owidth="' + e.data("owidth") + '"' + 'data-oheight="' + e.data("oheight") + '"' + "></div>"), "none" != d.dottedOverlay && d.dottedOverlay != b && e.closest(".slotholder").append('<div class="tp-dottedoverlay ' + d.dottedOverlay + '"></div>');
				var f = e.attr("src"),
					h = (e.data("lazyload"), e.data("bgfit")),
					j = e.data("bgrepeat"),
					k = e.data("bgposition");
				h == b && (h = "cover"), j == b && (j = "no-repeat"), k == b && (k = "center center");
				var l = e.closest(".slotholder");
				e.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + e.data("lazyload") + '" data-bgfit="' + h + '"data-bgposition="' + k + '" data-bgrepeat="' + j + '" data-lazydone="' + e.data("lazydone") + '" src="' + f + '" data-src="' + f + '" style="background-color:' + e.css("backgroundColor") + ";background-repeat:" + j + ";background-image:url(" + f + ");background-size:" + h + ";background-position:" + k + ';width:100%;height:100%;"></div>'), i(8) && (l.find(".tp-bgimg").css({
					backgroundImage: "none",
					"background-image": "none"
				}), l.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + f + '" style="width:100%">')), e.css({
					opacity: 0
				}), e.data("li-id", c)
			})
		}, t = function(a, c, d, e) {
			var f = a,
				g = f.find(".defaultimg"),
				h = f.data("zoomstart"),
				j = f.data("rotationstart");
			g.data("currotate") != b && (j = g.data("currotate")), g.data("curscale") != b && "box" == e ? h = 100 * g.data("curscale") : g.data("curscale") != b && (h = g.data("curscale")), r(g, c);
			var k = g.data("src"),
				l = g.css("backgroundColor"),
				m = c.width,
				n = c.height,
				o = g.data("fxof"),
				p = 0;
			"on" == c.autoHeight && (n = c.container.height()), o == b && (o = 0);
			var q = 0,
				s = g.data("bgfit"),
				t = g.data("bgrepeat"),
				v = g.data("bgposition");
			if (s == b && (s = "cover"), t == b && (t = "no-repeat"), v == b && (v = "center center"), i(8)) {
				f.data("kenburns", "off");
				var w = k;
				k = ""
			}
			switch (e) {
				case "box":
					var x = 0,
						y = 0,
						z = 0;
					if (x = c.sloth > c.slotw ? c.sloth : c.slotw, !d) var q = 0 - x;
					c.slotw = x, c.sloth = x;
					var y = 0,
						z = 0;
					"on" == f.data("kenburns") && (s = h, s.toString().length < 4 && (s = X(s, f, c)));
					for (var A = 0; A < c.slots; A++) {
						z = 0;
						for (var B = 0; B < c.slots; B++) f.append('<div class="slot" style="position:absolute;top:' + (p + z) + "px;" + "left:" + (o + y) + "px;" + "width:" + x + "px;" + "height:" + x + "px;" + 'overflow:hidden;">' + '<div class="slotslide" data-x="' + y + '" data-y="' + z + '" ' + 'style="position:absolute;' + "top:" + 0 + "px;" + "left:" + 0 + "px;" + "width:" + x + "px;" + "height:" + x + "px;" + 'overflow:hidden;">' + '<div style="position:absolute;' + "top:" + (0 - z) + "px;" + "left:" + (0 - y) + "px;" + "width:" + m + "px;" + "height:" + n + "px;" + "background-color:" + l + ";" + "background-image:url(" + k + ");" + "background-repeat:" + t + ";" + "background-size:" + s + ";background-position:" + v + ';">' + "</div></div></div>"), z += x, i(8) && (f.find(".slot ").last().find(".slotslide").append('<img src="' + w + '">'), u(f, c)), h != b && j != b && punchgs.TweenLite.set(f.find(".slot").last(), {
							rotationZ: j
						});
						y += x
					}
					break;
				case "vertical":
				case "horizontal":
					if ("on" == f.data("kenburns") && (s = h, s.toString().length < 4 && (s = X(s, f, c))), "horizontal" == e) {
						if (!d) var q = 0 - c.slotw;
						for (var B = 0; B < c.slots; B++) f.append('<div class="slot" style="position:absolute;top:' + (0 + p) + "px;" + "left:" + (o + B * c.slotw) + "px;" + "overflow:hidden;width:" + (c.slotw + .6) + "px;" + "height:" + n + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:0px;left:" + q + "px;" + "width:" + (c.slotw + .6) + "px;" + "height:" + n + 'px;overflow:hidden;">' + '<div style="background-color:' + l + ";" + "position:absolute;top:0px;" + "left:" + (0 - B * c.slotw) + "px;" + "width:" + m + "px;height:" + n + "px;" + "background-image:url(" + k + ");" + "background-repeat:" + t + ";" + "background-size:" + s + ";background-position:" + v + ';">' + "</div></div></div>"), h != b && j != b && punchgs.TweenLite.set(f.find(".slot").last(), {
							rotationZ: j
						}), i(8) && (f.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + w + '" style="width:100%;height:auto">'), u(f, c))
					} else {
						if (!d) var q = 0 - c.sloth;
						for (var B = 0; B < c.slots + 2; B++) f.append('<div class="slot" style="position:absolute;top:' + (p + B * c.sloth) + "px;" + "left:" + o + "px;" + "overflow:hidden;" + "width:" + m + "px;" + "height:" + c.sloth + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:" + q + "px;" + "left:0px;width:" + m + "px;" + "height:" + c.sloth + "px;" + 'overflow:hidden;">' + '<div style="background-color:' + l + ";" + "position:absolute;" + "top:" + (0 - B * c.sloth) + "px;" + "left:0px;" + "width:" + m + "px;height:" + n + "px;" + "background-image:url(" + k + ");" + "background-repeat:" + t + ";" + "background-size:" + s + ";background-position:" + v + ';">' + "</div></div></div>"), h != b && j != b && punchgs.TweenLite.set(f.find(".slot").last(), {
							rotationZ: j
						}), i(8) && (f.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + w + '" style="width:100%;height:auto;">'), u(f, c))
					}
			}
		}, u = function(a, b) {
			if (i(8)) {
				var c = a.find(".ieeightfallbackimage");
				c.width(), c.height(), b.startwidth / b.startheight < a.data("owidth") / a.data("oheight") ? c.css({
					width: "auto",
					height: "100%"
				}) : c.css({
					width: "100%",
					height: "auto"
				}), setTimeout(function() {
					var d = c.width(),
						e = c.height(),
						f = a.data("bgposition");
					"center center" == f && c.css({
						position: "absolute",
						top: b.height / 2 - e / 2 + "px",
						left: b.width / 2 - d / 2 + "px"
					}), ("center top" == f || "top center" == f) && c.css({
						position: "absolute",
						top: "0px",
						left: b.width / 2 - d / 2 + "px"
					}), ("center bottom" == f || "bottom center" == f) && c.css({
						position: "absolute",
						bottom: "0px",
						left: b.width / 2 - d / 2 + "px"
					}), ("right top" == f || "top right" == f) && c.css({
						position: "absolute",
						top: "0px",
						right: "0px"
					}), ("right bottom" == f || "bottom right" == f) && c.css({
						position: "absolute",
						bottom: "0px",
						right: "0px"
					}), ("right center" == f || "center right" == f) && c.css({
						position: "absolute",
						top: b.height / 2 - e / 2 + "px",
						right: "0px"
					}), ("left bottom" == f || "bottom left" == f) && c.css({
						position: "absolute",
						bottom: "0px",
						left: "0px"
					}), ("left center" == f || "center left" == f) && c.css({
						position: "absolute",
						top: b.height / 2 - e / 2 + "px",
						left: "0px"
					})
				}, 20)
			}
		}, v = function(b, c, d) {
			d.find(".slot").each(function() {
				a(this).remove()
			}), c.transition = 0
		}, w = function(c, d) {
			c.find("img, .defaultimg").each(function() {
				var e = a(this),
					f = e.data("lazyload");
				if (f != e.attr("src") && 3 > d && f != b && "undefined" != f) {
					if (f != b && "undefined" != f) {
						e.attr("src", f);
						var g = new Image;
						g.onload = function() {
							e.data("lazydone", 1), e.hasClass("defaultimg") && x(e, g)
						}, g.error = function() {
							e.data("lazydone", 1)
						}, g.src = e.attr("src"), g.complete && (e.hasClass("defaultimg") && x(e, g), e.data("lazydone", 1))
					}
				} else if ((f === b || "undefined" === f) && 1 != e.data("lazydone")) {
					var g = new Image;
					g.onload = function() {
						e.hasClass("defaultimg") && x(e, g), e.data("lazydone", 1)
					}, g.error = function() {
						e.data("lazydone", 1)
					}, g.src = e.attr("src") != b && "undefined" != e.attr("src") ? e.attr("src") : e.data("src"), g.complete && (e.hasClass("defaultimg") && x(e, g), e.data("lazydone", 1))
				}
			})
		}, x = function(a, b) {
			var c = a.closest("li"),
				d = b.width,
				e = b.height;
			c.data("owidth", d), c.data("oheight", e), c.find(".slotholder").data("owidth", d), c.find(".slotholder").data("oheight", e), c.data("loadeddone", 1)
		}, y = function(c, d, e) {
			w(c, 0);
			var f = setInterval(function() {
				e.bannertimeronpause = !0, e.container.trigger("stoptimer"), e.cd = 0;
				var g = 0;
				c.find("img, .defaultimg").each(function() {
					1 != a(this).data("lazydone") && g++
				}), g > 0 ? w(c, g) : (clearInterval(f), d != b && d())
			}, 100)
		}, z = function(a, c) {
			try {
				a.find(">ul:first-child >li:eq(" + c.act + ")")
			} catch (e) {
				a.find(">ul:first-child >li:eq(1)")
			}
			c.lastslide = c.act;
			var f = a.find(">ul:first-child >li:eq(" + c.next + ")"),
				g = f.find(".defaultimg");
			c.bannertimeronpause = !0, a.trigger("stoptimer"), c.cd = 0, g.data("lazyload") != b && "undefined" != g.data("lazyload") && 1 != g.data("lazydone") ? (i(8) ? g.attr("src", f.find(".defaultimg").data("lazyload")) : g.css({
				backgroundImage: 'url("' + f.find(".defaultimg").data("lazyload") + '")'
			}), g.data("src", f.find(".defaultimg").data("lazyload")), g.data("lazydone", 0), g.data("orgw", 0), f.data("loadeddone", 1), a.find(".tp-loader").css({
				display: "block"
			}), y(a.find(".tp-static-layers"), function() {
				y(f, function() {
					var b = f.find(".slotholder");
					if ("on" == b.data("kenburns")) var d = setInterval(function() {
						var e = b.data("owidth");
						e >= 0 && (clearInterval(d), A(c, g, a))
					}, 10);
					else A(c, g, a)
				}, c)
			}, c)) : f.data("loadeddone") === b ? (f.data("loadeddone", 1), y(f, function() {
				A(c, g, a)
			}, c)) : A(c, g, a)
		}, A = function(a, b, c) {
			a.bannertimeronpause = !1, a.cd = 0, c.trigger("nulltimer"), c.find(".tp-loader").css({
				display: "none"
			}), r(b, a), p(c, a), r(b, a), B(c, a)
		}, B = function(a, c) {
			a.trigger("revolution.slide.onbeforeswap"), c.transition = 1, c.videoplaying = !1;
			try {
				var d = a.find(">ul:first-child >li:eq(" + c.act + ")")
			} catch (e) {
				var d = a.find(">ul:first-child >li:eq(1)")
			}
			c.lastslide = c.act;
			var f = a.find(">ul:first-child >li:eq(" + c.next + ")");
			setTimeout(function() {
				q(c)
			}, 200);
			var g = d.find(".slotholder"),
				h = f.find(".slotholder");
			("on" == h.data("kenburns") || "on" == g.data("kenburns")) && (_(a, c), a.find(".kenburnimg").remove()), f.data("delay") != b ? (c.cd = 0, c.delay = f.data("delay")) : c.delay = c.origcd, 1 == c.firststart && punchgs.TweenLite.set(d, {
					autoAlpha: 0
				}), punchgs.TweenLite.set(d, {
					zIndex: 18
				}), punchgs.TweenLite.set(f, {
					autoAlpha: 0,
					zIndex: 20
				});
			var i = 0;
			d.index() != f.index() && 1 != c.firststart && (i = R(d, c)), "on" != d.data("saveperformance") && (i = 0), setTimeout(function() {
				a.trigger("restarttimer"), C(a, c, f, d, g, h)
			}, i)
		}, C = function(c, d, e, f, g, h) {
			function x() {
				a.each(o, function(a, b) {
					(b[0] == m || b[8] == m) && (j = b[1], n = b[2], r = s), s += 1
				})
			}
			"prepared" == e.data("differentissplayed") && (e.data("differentissplayed", "done"), e.data("transition", e.data("savedtransition")), e.data("slotamount", e.data("savedslotamount")), e.data("masterspeed", e.data("savedmasterspeed"))), e.data("fstransition") != b && "done" != e.data("differentissplayed") && (e.data("savedtransition", e.data("transition")), e.data("savedslotamount", e.data("slotamount")), e.data("savedmasterspeed", e.data("masterspeed")), e.data("transition", e.data("fstransition")), e.data("slotamount", e.data("fsslotamount")), e.data("masterspeed", e.data("fsmasterspeed")), e.data("differentissplayed", "prepared")), c.find(".active-revslide").removeClass(".active-revslide"), e.addClass("active-revslide"), e.data("transition") == b && e.data("transition", "random");
			var j = 0,
				k = e.data("transition").split(","),
				l = e.data("nexttransid") == b ? -1 : e.data("nexttransid");
			"on" == e.data("randomtransition") ? l = Math.round(Math.random() * k.length) : l += 1, l == k.length && (l = 0), e.data("nexttransid", l);
			var m = k[l];
			d.ie && ("boxfade" == m && (m = "boxslide"), "slotfade-vertical" == m && (m = "slotzoom-vertical"), "slotfade-horizontal" == m && (m = "slotzoom-horizontal")), i(8) && (m = 11);
			var n = 0;
			"scroll" == d.parallax && d.parallaxFirstGo == b && (d.parallaxFirstGo = !0, bb(c, d), setTimeout(function() {
				bb(c, d)
			}, 210), setTimeout(function() {
				bb(c, d)
			}, 420)), "slidehorizontal" == m && (m = "slideleft", 1 == d.leftarrowpressed && (m = "slideright")), "slidevertical" == m && (m = "slideup", 1 == d.leftarrowpressed && (m = "slidedown")), "parallaxhorizontal" == m && (m = "parallaxtoleft", 1 == d.leftarrowpressed && (m = "parallaxtoright")), "parallaxvertical" == m && (m = "parallaxtotop", 1 == d.leftarrowpressed && (m = "parallaxtobottom"));
			var o = [
				["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
				["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
				["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
				["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
				["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
				["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
				["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
				["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
				["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
				["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
				["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
				["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
				["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
				["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
				["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
				["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
				["papercut", 16, 0, 0, 600, "", null, null, 16],
				["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
				["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
				["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
				["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
				["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
				["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
				["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23],
				["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
				["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
				["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
				["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27],
				["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
				["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
				["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
				["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
				["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
				["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
				["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
				["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
				["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
				["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
				["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
				["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
				["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
				["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
				["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
				["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
				["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
				["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
				["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
			],
				p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
				q = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
				j = 0,
				n = 1,
				r = 0,
				s = 0,
				u = new Array;
			"on" == h.data("kenburns") && (("boxslide" == m || 0 == m || "boxfade" == m || 1 == m || "papercut" == m || 16 == m) && (m = 11), Y(c, d, !0, !0)), "random" == m && (m = Math.round(Math.random() * o.length - 1), m > o.length - 1 && (m = o.length - 1)), "random-static" == m && (m = Math.round(Math.random() * p.length - 1), m > p.length - 1 && (m = p.length - 1), m = p[m]), "random-premium" == m && (m = Math.round(Math.random() * q.length - 1), m > q.length - 1 && (m = q.length - 1), m = q[m]);
			var v = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
			if (1 == d.isJoomla && window.MooTools != b && -1 != v.indexOf(m)) {
				var w = Math.round(Math.random() * (q.length - 2)) + 1;
				w > q.length - 1 && (w = q.length - 1), 0 == w && (w = 1), m = q[w]
			}
			x(), i(8) && j > 15 && 28 > j && (m = Math.round(Math.random() * p.length - 1), m > p.length - 1 && (m = p.length - 1), m = p[m], s = 0, x());
			var y = -1;
			(1 == d.leftarrowpressed || d.act > d.next) && (y = 1), d.leftarrowpressed = 0, j > 26 && (j = 26), 0 > j && (j = 0);
			var z = 300;
			e.data("masterspeed") != b && e.data("masterspeed") > 99 && e.data("masterspeed") < d.delay && (z = e.data("masterspeed")), e.data("masterspeed") != b && e.data("masterspeed") > d.delay && (z = d.delay), u = o[r], c.parent().find(".bullet").each(function() {
				var b = a(this),
					c = b.index();
				b.removeClass("selected"), ("withbullet" == d.navigationArrows || "nexttobullets" == d.navigationArrows) && (c = b.index() - 1), c == d.next && b.addClass("selected")
			});
			var A = new punchgs.TimelineLite({
				onComplete: function() {
					D(c, d, h, g, e, f, A)
				}
			});
			if (A.add(punchgs.TweenLite.set(h.find(".defaultimg"), {
				opacity: 0
			})), A.pause(), e.data("slotamount") == b || e.data("slotamount") < 1 ? (d.slots = Math.round(12 * Math.random() + 4), "boxslide" == m ? d.slots = Math.round(6 * Math.random() + 3) : "flyin" == m && (d.slots = Math.round(4 * Math.random() + 1))) : d.slots = e.data("slotamount"), d.rotate = e.data("rotate") == b ? 0 : 999 == e.data("rotate") ? Math.round(360 * Math.random()) : e.data("rotate"), (!a.support.transition || d.ie || d.ie9) && (d.rotate = 0), 1 == d.firststart && (d.firststart = 0), z += u[4], (4 == j || 5 == j || 6 == j) && d.slots < 3 && (d.slots = 3), 0 != u[3] && (d.slots = Math.min(d.slots, u[3])), 9 == j && (d.slots = d.width / 20), 10 == j && (d.slots = d.height / 20), null != u[7] && t(g, d, u[7], u[5]), null != u[6] && t(h, d, u[6], u[5]), 0 == j) {
				var B = Math.ceil(d.height / d.sloth),
					C = 0;
				h.find(".slotslide").each(function(b) {
					var c = a(this);
					C += 1, C == B && (C = 0), A.add(punchgs.TweenLite.from(c, z / 600, {
						opacity: 0,
						top: 0 - d.sloth,
						left: 0 - d.slotw,
						rotation: d.rotate,
						force3D: "auto",
						ease: punchgs.Power2.easeOut
					}), (15 * b + 30 * C) / 1500)
				})
			}
			if (1 == j) {
				var E, F = 0;
				h.find(".slotslide").each(function(b) {
					var c = a(this),
						e = Math.random() * z + 300,
						f = 500 * Math.random() + 200;
					e + f > E && (E = f + f, F = b), A.add(punchgs.TweenLite.from(c, e / 1e3, {
						autoAlpha: 0,
						force3D: "auto",
						rotation: d.rotate,
						ease: punchgs.Power2.easeInOut
					}), f / 1e3)
				})
			}
			if (2 == j) {
				var G = new punchgs.TimelineLite;
				g.find(".slotslide").each(function() {
					var b = a(this);
					G.add(punchgs.TweenLite.to(b, z / 1e3, {
						left: d.slotw,
						force3D: "auto",
						rotation: 0 - d.rotate
					}), 0), A.add(G, 0)
				}), h.find(".slotslide").each(function() {
					var b = a(this);
					G.add(punchgs.TweenLite.from(b, z / 1e3, {
						left: 0 - d.slotw,
						force3D: "auto",
						rotation: d.rotate
					}), 0), A.add(G, 0)
				})
			}
			if (3 == j) {
				var G = new punchgs.TimelineLite;
				g.find(".slotslide").each(function() {
					var b = a(this);
					G.add(punchgs.TweenLite.to(b, z / 1e3, {
						top: d.sloth,
						rotation: d.rotate,
						force3D: "auto",
						transformPerspective: 600
					}), 0), A.add(G, 0)
				}), h.find(".slotslide").each(function() {
					var b = a(this);
					G.add(punchgs.TweenLite.from(b, z / 1e3, {
						top: 0 - d.sloth,
						rotation: d.rotate,
						ease: punchgs.Power2.easeOut,
						force3D: "auto",
						transformPerspective: 600
					}), 0), A.add(G, 0)
				})
			}
			if (4 == j || 5 == j) {
				setTimeout(function() {
					g.find(".defaultimg").css({
						opacity: 0
					})
				}, 100);
				var H = z / 1e3,
					G = new punchgs.TimelineLite;
				g.find(".slotslide").each(function(b) {
					var c = a(this),
						e = b * H / d.slots;
					5 == j && (e = (d.slots - b - 1) * H / d.slots / 1.5), G.add(punchgs.TweenLite.to(c, 3 * H, {
						transformPerspective: 600,
						force3D: "auto",
						top: 0 + d.height,
						opacity: .5,
						rotation: d.rotate,
						ease: punchgs.Power2.easeInOut,
						delay: e
					}), 0), A.add(G, 0)
				}), h.find(".slotslide").each(function(b) {
					var c = a(this),
						e = b * H / d.slots;
					5 == j && (e = (d.slots - b - 1) * H / d.slots / 1.5), G.add(punchgs.TweenLite.from(c, 3 * H, {
						top: 0 - d.height,
						opacity: .5,
						rotation: d.rotate,
						force3D: "auto",
						ease: punchgs.Power2.easeInOut,
						delay: e
					}), 0), A.add(G, 0)
				})
			}
			if (6 == j) {
				d.slots < 2 && (d.slots = 2), d.slots % 2 && (d.slots = d.slots + 1);
				var G = new punchgs.TimelineLite;
				setTimeout(function() {
					g.find(".defaultimg").css({
						opacity: 0
					})
				}, 100), g.find(".slotslide").each(function(b) {
					var c = a(this);
					if (b + 1 < d.slots / 2) var e = 90 * (b + 2);
					else var e = 90 * (2 + d.slots - b);
					G.add(punchgs.TweenLite.to(c, (z + e) / 1e3, {
						top: 0 + d.height,
						opacity: 1,
						force3D: "auto",
						rotation: d.rotate,
						ease: punchgs.Power2.easeInOut
					}), 0), A.add(G, 0)
				}), h.find(".slotslide").each(function(b) {
					var c = a(this);
					if (b + 1 < d.slots / 2) var e = 90 * (b + 2);
					else var e = 90 * (2 + d.slots - b);
					G.add(punchgs.TweenLite.from(c, (z + e) / 1e3, {
						top: 0 - d.height,
						opacity: 1,
						force3D: "auto",
						rotation: d.rotate,
						ease: punchgs.Power2.easeInOut
					}), 0), A.add(G, 0)
				})
			}
			if (7 == j) {
				z = 2 * z, z > d.delay && (z = d.delay);
				var G = new punchgs.TimelineLite;
				setTimeout(function() {
					g.find(".defaultimg").css({
						opacity: 0
					})
				}, 100), g.find(".slotslide").each(function() {
					var b = a(this).find("div");
					G.add(punchgs.TweenLite.to(b, z / 1e3, {
						left: 0 - d.slotw / 2 + "px",
						top: 0 - d.height / 2 + "px",
						width: 2 * d.slotw + "px",
						height: 2 * d.height + "px",
						opacity: 0,
						rotation: d.rotate,
						force3D: "auto",
						ease: punchgs.Power2.easeOut
					}), 0), A.add(G, 0)
				}), h.find(".slotslide").each(function(b) {
					var c = a(this).find("div");
					G.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						left: 0,
						top: 0,
						opacity: 0,
						transformPerspective: 600
					}, {
						left: 0 - b * d.slotw + "px",
						ease: punchgs.Power2.easeOut,
						force3D: "auto",
						top: "0px",
						width: d.width,
						height: d.height,
						opacity: 1,
						rotation: 0,
						delay: .1
					}), 0), A.add(G, 0)
				})
			}
			if (8 == j) {
				z = 3 * z, z > d.delay && (z = d.delay);
				var G = new punchgs.TimelineLite;
				g.find(".slotslide").each(function() {
					var b = a(this).find("div");
					G.add(punchgs.TweenLite.to(b, z / 1e3, {
						left: 0 - d.width / 2 + "px",
						top: 0 - d.sloth / 2 + "px",
						width: 2 * d.width + "px",
						height: 2 * d.sloth + "px",
						force3D: "auto",
						opacity: 0,
						rotation: d.rotate
					}), 0), A.add(G, 0)
				}), h.find(".slotslide").each(function(b) {
					var c = a(this).find("div");
					G.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						left: 0,
						top: 0,
						opacity: 0,
						force3D: "auto"
					}, {
						left: "0px",
						top: 0 - b * d.sloth + "px",
						width: h.find(".defaultimg").data("neww") + "px",
						height: h.find(".defaultimg").data("newh") + "px",
						opacity: 1,
						rotation: 0
					}), 0), A.add(G, 0)
				})
			}
			if (9 == j || 10 == j) {
				var J = 0;
				h.find(".slotslide").each(function(b) {
					var c = a(this);
					J++, A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						autoAlpha: 0,
						force3D: "auto",
						transformPerspective: 600
					}, {
						autoAlpha: 1,
						ease: punchgs.Power2.easeInOut,
						delay: 5 * b / 1e3
					}), 0)
				})
			}
			if (11 == j || 26 == j) {
				var J = 0;
				26 == j && (z = 0), h.find(".slotslide").each(function() {
					var c = a(this);
					A.add(punchgs.TweenLite.from(c, z / 1e3, {
						autoAlpha: 0,
						force3D: "auto",
						ease: punchgs.Power2.easeInOut
					}), 0)
				})
			}
			if (12 == j || 13 == j || 14 == j || 15 == j) {
				z = z, z > d.delay && (z = d.delay), setTimeout(function() {
					punchgs.TweenLite.set(g.find(".defaultimg"), {
						autoAlpha: 0
					})
				}, 100);
				var K = d.width,
					M = d.height,
					N = h.find(".slotslide"),
					O = 0,
					P = 0,
					Q = 1,
					R = 1,
					S = 1,
					T = punchgs.Power2.easeInOut,
					U = punchgs.Power2.easeInOut,
					V = z / 1e3,
					W = V;
				("on" == d.fullWidth || "on" == d.fullScreen) && (K = N.width(), M = N.height()), 12 == j ? O = K : 15 == j ? O = 0 - K : 13 == j ? P = M : 14 == j && (P = 0 - M), 1 == n && (Q = 0), 2 == n && (Q = 0), 3 == n && (T = punchgs.Power2.easeInOut, U = punchgs.Power1.easeInOut, V = z / 1200), (4 == n || 5 == n) && (R = .6), 6 == n && (R = 1.4), (5 == n || 6 == n) && (S = 1.4, Q = 0, K = 0, M = 0, O = 0, P = 0), 6 == n && (S = .6), A.add(punchgs.TweenLite.from(N, V, {
						left: O,
						top: P,
						scale: S,
						opacity: Q,
						rotation: d.rotate,
						ease: U,
						force3D: "auto"
					}), 0);
				var Z = g.find(".slotslide");
				if ((4 == n || 5 == n) && (K = 0, M = 0), 1 != n) switch (j) {
					case 12:
						A.add(punchgs.TweenLite.to(Z, W, {
							left: 0 - K + "px",
							force3D: "auto",
							scale: R,
							opacity: Q,
							rotation: d.rotate,
							ease: T
						}), 0);
						break;
					case 15:
						A.add(punchgs.TweenLite.to(Z, W, {
							left: K + "px",
							force3D: "auto",
							scale: R,
							opacity: Q,
							rotation: d.rotate,
							ease: T
						}), 0);
						break;
					case 13:
						A.add(punchgs.TweenLite.to(Z, W, {
							top: 0 - M + "px",
							force3D: "auto",
							scale: R,
							opacity: Q,
							rotation: d.rotate,
							ease: T
						}), 0);
						break;
					case 14:
						A.add(punchgs.TweenLite.to(Z, W, {
							top: M + "px",
							force3D: "auto",
							scale: R,
							opacity: Q,
							rotation: d.rotate,
							ease: T
						}), 0)
				}
			}
			if (16 == j) {
				var G = new punchgs.TimelineLite;
				A.add(punchgs.TweenLite.set(f, {
					position: "absolute",
					"z-index": 20
				}), 0), A.add(punchgs.TweenLite.set(e, {
					position: "absolute",
					"z-index": 15
				}), 0), f.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), f.find(".tp-half-one").clone(!0).appendTo(f).addClass("tp-half-two"), f.find(".tp-half-two").removeClass("tp-half-one");
				var K = d.width,
					M = d.height;
				"on" == d.autoHeight && (M = c.height()), f.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + K + "px;height:" + M + 'px;"></div>'), f.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + K + "px;height:" + M + 'px;"></div>'), f.find(".tp-half-two .defaultimg").css({
					position: "absolute",
					top: "-50%"
				}), f.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), A.add(punchgs.TweenLite.set(f.find(".tp-half-two"), {
					width: K,
					height: M,
					overflow: "hidden",
					zIndex: 15,
					position: "absolute",
					top: M / 2,
					left: "0px",
					transformPerspective: 600,
					transformOrigin: "center bottom"
				}), 0), A.add(punchgs.TweenLite.set(f.find(".tp-half-one"), {
					width: K,
					height: M / 2,
					overflow: "visible",
					zIndex: 10,
					position: "absolute",
					top: "0px",
					left: "0px",
					transformPerspective: 600,
					transformOrigin: "center top"
				}), 0);
				var _ = (f.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
					ab = Math.round(20 * Math.random() - 10),
					cb = Math.round(20 * Math.random() - 10),
					db = .4 * Math.random() - .2,
					eb = .4 * Math.random() - .2,
					fb = 1 * Math.random() + 1,
					gb = 1 * Math.random() + 1,
					hb = .3 * Math.random() + .3;
				A.add(punchgs.TweenLite.set(f.find(".tp-half-one"), {
					overflow: "hidden"
				}), 0), A.add(punchgs.TweenLite.fromTo(f.find(".tp-half-one"), z / 800, {
					width: K,
					height: M / 2,
					position: "absolute",
					top: "0px",
					left: "0px",
					force3D: "auto",
					transformOrigin: "center top"
				}, {
					scale: fb,
					rotation: _,
					y: 0 - M - M / 4,
					autoAlpha: 0,
					ease: punchgs.Power2.easeInOut
				}), 0), A.add(punchgs.TweenLite.fromTo(f.find(".tp-half-two"), z / 800, {
					width: K,
					height: M,
					overflow: "hidden",
					position: "absolute",
					top: M / 2,
					left: "0px",
					force3D: "auto",
					transformOrigin: "center bottom"
				}, {
					scale: gb,
					rotation: ab,
					y: M + M / 4,
					ease: punchgs.Power2.easeInOut,
					autoAlpha: 0,
					onComplete: function() {
						punchgs.TweenLite.set(f, {
							position: "absolute",
							"z-index": 15
						}), punchgs.TweenLite.set(e, {
							position: "absolute",
							"z-index": 20
						}), f.find(".tp-half-one").length > 0 && (f.find(".tp-half-one .defaultimg").unwrap(), f.find(".tp-half-one .slotholder").unwrap()), f.find(".tp-half-two").remove()
					}
				}), 0), G.add(punchgs.TweenLite.set(h.find(".defaultimg"), {
					autoAlpha: 1
				}), 0), null != f.html() && A.add(punchgs.TweenLite.fromTo(e, (z - 200) / 1e3, {
					scale: hb,
					x: d.width / 4 * db,
					y: M / 4 * eb,
					rotation: cb,
					force3D: "auto",
					transformOrigin: "center center",
					ease: punchgs.Power2.easeOut
				}, {
					autoAlpha: 1,
					scale: 1,
					x: 0,
					y: 0,
					rotation: 0
				}), 0), A.add(G, 0)
			}
			if (17 == j && h.find(".slotslide").each(function(b) {
				var c = a(this);
				A.add(punchgs.TweenLite.fromTo(c, z / 800, {
					opacity: 0,
					rotationY: 0,
					scale: .9,
					rotationX: -110,
					force3D: "auto",
					transformPerspective: 600,
					transformOrigin: "center center"
				}, {
					opacity: 1,
					top: 0,
					left: 0,
					scale: 1,
					rotation: 0,
					rotationX: 0,
					force3D: "auto",
					rotationY: 0,
					ease: punchgs.Power3.easeOut,
					delay: .06 * b
				}), 0)
			}), 18 == j && h.find(".slotslide").each(function(b) {
				var c = a(this);
				A.add(punchgs.TweenLite.fromTo(c, z / 500, {
					autoAlpha: 0,
					rotationY: 310,
					scale: .9,
					rotationX: 10,
					force3D: "auto",
					transformPerspective: 600,
					transformOrigin: "center center"
				}, {
					autoAlpha: 1,
					top: 0,
					left: 0,
					scale: 1,
					rotation: 0,
					rotationX: 0,
					force3D: "auto",
					rotationY: 0,
					ease: punchgs.Power3.easeOut,
					delay: .06 * b
				}), 0)
			}), 19 == j || 22 == j) {
				var G = new punchgs.TimelineLite;
				A.add(punchgs.TweenLite.set(f, {
					zIndex: 20
				}), 0), A.add(punchgs.TweenLite.set(e, {
					zIndex: 20
				}), 0), setTimeout(function() {
					g.find(".defaultimg").css({
						opacity: 0
					})
				}, 100);
				var kb = (e.css("z-index"), f.css("z-index"), 90),
					Q = 1,
					lb = "center center ";
				1 == y && (kb = -90), 19 == j ? (lb = lb + "-" + d.height / 2, Q = 0) : lb += d.height / 2, punchgs.TweenLite.set(c, {
					transformStyle: "flat",
					backfaceVisibility: "hidden",
					transformPerspective: 600
				}), h.find(".slotslide").each(function(b) {
					var c = a(this);
					G.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						transformStyle: "flat",
						backfaceVisibility: "hidden",
						left: 0,
						rotationY: d.rotate,
						z: 10,
						top: 0,
						scale: 1,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: lb,
						rotationX: kb
					}, {
						left: 0,
						rotationY: 0,
						top: 0,
						z: 0,
						scale: 1,
						force3D: "auto",
						rotationX: 0,
						delay: 50 * b / 1e3,
						ease: punchgs.Power2.easeInOut
					}), 0), G.add(punchgs.TweenLite.to(c, .1, {
						autoAlpha: 1,
						delay: 50 * b / 1e3
					}), 0), A.add(G)
				}), g.find(".slotslide").each(function(b) {
					var c = a(this),
						e = -90;
					1 == y && (e = 90), G.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						transformStyle: "flat",
						backfaceVisibility: "hidden",
						autoAlpha: 1,
						rotationY: 0,
						top: 0,
						z: 0,
						scale: 1,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: lb,
						rotationX: 0
					}, {
						autoAlpha: 1,
						rotationY: d.rotate,
						top: 0,
						z: 10,
						scale: 1,
						rotationX: e,
						delay: 50 * b / 1e3,
						force3D: "auto",
						ease: punchgs.Power2.easeInOut
					}), 0), A.add(G)
				})
			}
			if (20 == j) {
				if (setTimeout(function() {
					g.find(".defaultimg").css({
						opacity: 0
					})
				}, 100), e.css("z-index"), f.css("z-index"), 1 == y) var mb = -d.width,
				kb = 70, lb = "left center -" + d.height / 2;
				else var mb = d.width,
				kb = -70, lb = "right center -" + d.height / 2;
				h.find(".slotslide").each(function(b) {
					var c = a(this);
					A.add(punchgs.TweenLite.fromTo(c, z / 1500, {
						left: mb,
						rotationX: 40,
						z: -600,
						opacity: Q,
						top: 0,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: lb,
						rotationY: kb
					}, {
						left: 0,
						delay: 50 * b / 1e3,
						ease: punchgs.Power2.easeInOut
					}), 0), A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						rotationX: 40,
						z: -600,
						opacity: Q,
						top: 0,
						scale: 1,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: lb,
						rotationY: kb
					}, {
						rotationX: 0,
						opacity: 1,
						top: 0,
						z: 0,
						scale: 1,
						rotationY: 0,
						delay: 50 * b / 1e3,
						ease: punchgs.Power2.easeInOut
					}), 0), A.add(punchgs.TweenLite.to(c, .1, {
						opacity: 1,
						force3D: "auto",
						delay: 50 * b / 1e3 + z / 2e3
					}), 0)
				}), g.find(".slotslide").each(function(b) {
					var c = a(this);
					if (1 != y) var e = -d.width,
					f = 70, g = "left center -" + d.height / 2;
					else var e = d.width,
					f = -70, g = "right center -" + d.height / 2;
					A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						opacity: 1,
						rotationX: 0,
						top: 0,
						z: 0,
						scale: 1,
						left: 0,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: g,
						rotationY: 0
					}, {
						opacity: 1,
						rotationX: 40,
						top: 0,
						z: -600,
						left: e,
						force3D: "auto",
						scale: .8,
						rotationY: f,
						delay: 50 * b / 1e3,
						ease: punchgs.Power2.easeInOut
					}), 0), A.add(punchgs.TweenLite.to(c, .1, {
						force3D: "auto",
						opacity: 0,
						delay: 50 * b / 1e3 + (z / 1e3 - z / 1e4)
					}), 0)
				})
			}
			if (21 == j || 25 == j) {
				setTimeout(function() {
					g.find(".defaultimg").css({
						opacity: 0
					})
				}, 100);
				var kb = (e.css("z-index"), f.css("z-index"), 90),
					mb = -d.width,
					nb = -kb;
				if (1 == y)
					if (25 == j) {
						var lb = "center top 0";
						kb = d.rotate
					} else {
						var lb = "left center 0";
						nb = d.rotate
					} else
				if (mb = d.width, kb = -90, 25 == j) {
					var lb = "center bottom 0";
					nb = -kb, kb = d.rotate
				} else {
					var lb = "right center 0";
					nb = d.rotate
				}
				h.find(".slotslide").each(function() {
					var c = a(this);
					A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						left: 0,
						transformStyle: "flat",
						rotationX: nb,
						z: 0,
						autoAlpha: 0,
						top: 0,
						scale: 1,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: lb,
						rotationY: kb
					}, {
						left: 0,
						rotationX: 0,
						top: 0,
						z: 0,
						autoAlpha: 1,
						scale: 1,
						rotationY: 0,
						force3D: "auto",
						ease: punchgs.Power3.easeInOut
					}), 0)
				}), 1 != y ? (mb = -d.width, kb = 90, 25 == j ? (lb = "center top 0", nb = -kb, kb = d.rotate) : (lb = "left center 0", nb = d.rotate)) : (mb = d.width, kb = -90, 25 == j ? (lb = "center bottom 0", nb = -kb, kb = d.rotate) : (lb = "right center 0", nb = d.rotate)), g.find(".slotslide").each(function() {
					var c = a(this);
					A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						left: 0,
						transformStyle: "flat",
						rotationX: 0,
						z: 0,
						autoAlpha: 1,
						top: 0,
						scale: 1,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: lb,
						rotationY: 0
					}, {
						left: 0,
						rotationX: nb,
						top: 0,
						z: 0,
						autoAlpha: 1,
						force3D: "auto",
						scale: 1,
						rotationY: kb,
						ease: punchgs.Power1.easeInOut
					}), 0)
				})
			}
			if (23 == j || 24 == j) {
				setTimeout(function() {
					g.find(".defaultimg").css({
						opacity: 0
					})
				}, 100);
				var kb = (e.css("z-index"), f.css("z-index"), -90),
					Q = 1,
					ob = 0;
				if (1 == y && (kb = 90), 23 == j) {
					var lb = "center center -" + d.width / 2;
					Q = 0
				} else var lb = "center center " + d.width / 2;
				punchgs.TweenLite.set(c, {
					transformStyle: "preserve-3d",
					backfaceVisibility: "hidden",
					perspective: 2500
				}), h.find(".slotslide").each(function(b) {
					var c = a(this);
					A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						left: ob,
						rotationX: d.rotate,
						force3D: "auto",
						opacity: Q,
						top: 0,
						scale: 1,
						transformPerspective: 600,
						transformOrigin: lb,
						rotationY: kb
					}, {
						left: 0,
						rotationX: 0,
						autoAlpha: 1,
						top: 0,
						z: 0,
						scale: 1,
						rotationY: 0,
						delay: 50 * b / 500,
						ease: punchgs.Power2.easeInOut
					}), 0)
				}), kb = 90, 1 == y && (kb = -90), g.find(".slotslide").each(function(b) {
					var c = a(this);
					A.add(punchgs.TweenLite.fromTo(c, z / 1e3, {
						left: 0,
						autoAlpha: 1,
						rotationX: 0,
						top: 0,
						z: 0,
						scale: 1,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: lb,
						rotationY: 0
					}, {
						left: ob,
						autoAlpha: 1,
						rotationX: d.rotate,
						top: 0,
						scale: 1,
						rotationY: kb,
						delay: 50 * b / 500,
						ease: punchgs.Power2.easeInOut
					}), 0)
				})
			}
			A.pause(), L(e, d, null, A), punchgs.TweenLite.to(e, .001, {
				autoAlpha: 1
			});
			var pb = {};
			pb.slideIndex = d.next + 1, pb.slide = e, c.trigger("revolution.slide.onchange", pb), setTimeout(function() {
				c.trigger("revolution.slide.onafterswap")
			}, z), c.trigger("revolution.slide.onvideostop")
		}, D = function(a, b, c, d, e, f, g) {
			punchgs.TweenLite.to(c.find(".defaultimg"), .001, {
				autoAlpha: 1,
				onComplete: function() {
					v(a, b, e)
				}
			}), e.index() != f.index() && punchgs.TweenLite.to(f, .2, {
				autoAlpha: 0,
				onComplete: function() {
					v(a, b, f)
				}
			}), b.act = b.next, "thumb" == b.navigationType && db(a), "on" == c.data("kenburns") && Y(a, b), a.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), e.addClass("current-sr-slide-visible"), ("scroll" == b.parallax || "scroll+mouse" == b.parallax || "mouse+scroll" == b.parallax) && bb(a, b), g.clear()
		}, E = function(b) {
			var c = b.target.getVideoEmbedCode(),
				d = a("#" + c.split('id="')[1].split('"')[0]),
				e = d.closest(".tp-simpleresponsive"),
				f = d.parent().data("player");
			if (b.data == YT.PlayerState.PLAYING) {
				var g = e.find(".tp-bannertimer"),
					h = g.data("opt");
				"mute" == d.closest(".tp-caption").data("volume") && f.mute(), h.videoplaying = !0, e.trigger("stoptimer"), e.trigger("revolution.slide.onvideoplay")
			} else {
				var g = e.find(".tp-bannertimer"),
					h = g.data("opt"); - 1 != b.data && 3 != b.data && (h.videoplaying = !1, e.trigger("starttimer"), e.trigger("revolution.slide.onvideostop")), 0 == b.data && 1 == h.nextslideatend ? h.container.revnext() : (h.videoplaying = !1, e.trigger("starttimer"), e.trigger("revolution.slide.onvideostop"))
			}
		}, F = function(a, b, c) {
			a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent(b, c, !1)
		}, G = function(b, c) {
			var d = $f(b),
				e = a("#" + b),
				f = e.closest(".tp-simpleresponsive"),
				g = e.closest(".tp-caption");
			setTimeout(function() {
				d.addEvent("ready", function() {
					c && d.api("play"), d.addEvent("play", function() {
						var b = f.find(".tp-bannertimer"),
							c = b.data("opt");
						c.videoplaying = !0, f.trigger("stoptimer"), "mute" == g.data("volume") && d.api("setVolume", "0")
					}), d.addEvent("finish", function() {
						var b = f.find(".tp-bannertimer"),
							c = b.data("opt");
						c.videoplaying = !1, f.trigger("starttimer"), f.trigger("revolution.slide.onvideoplay"), 1 == c.nextslideatend && c.container.revnext()
					}), d.addEvent("pause", function() {
						var b = f.find(".tp-bannertimer"),
							c = b.data("opt");
						c.videoplaying = !1, f.trigger("starttimer"), f.trigger("revolution.slide.onvideostop")
					}), g.find(".tp-thumb-image").click(function() {
						punchgs.TweenLite.to(a(this), .3, {
							autoAlpha: 0,
							force3D: "auto",
							ease: punchgs.Power3.easeInOut
						}), d.api("play")
					})
				})
			}, 150)
		}, H = function(a, c) {
			var d = c.width(),
				e = c.height(),
				f = a.data("mediaAspect");
			f == b && (f = 1);
			var g = d / e;
			a.css({
				position: "absolute"
			}), a.find("video"), f > g ? punchgs.TweenLite.to(a, 1e-4, {
				width: e * f,
				force3D: "auto",
				top: 0,
				left: 0 - (e * f - d) / 2,
				height: e
			}) : punchgs.TweenLite.to(a, 1e-4, {
				width: d,
				force3D: "auto",
				top: 0 - (d / f - e) / 2,
				left: 0,
				height: d / f
			})
		}, I = function() {
			var a = new Object;
			return a.x = 0, a.y = 0, a.rotationX = 0, a.rotationY = 0, a.rotationZ = 0, a.scale = 1, a.scaleX = 1, a.scaleY = 1, a.skewX = 0, a.skewY = 0, a.opacity = 0, a.transformOrigin = "center, center", a.transformPerspective = 400, a.rotation = 0, a
		}, J = function(b, c) {
			var d = c.split(";");
			return a.each(d, function(a, c) {
				c = c.split(":");
				var d = c[0],
					e = c[1];
				"rotationX" == d && (b.rotationX = parseInt(e, 0)), "rotationY" == d && (b.rotationY = parseInt(e, 0)), "rotationZ" == d && (b.rotationZ = parseInt(e, 0)), "rotationZ" == d && (b.rotation = parseInt(e, 0)), "scaleX" == d && (b.scaleX = parseFloat(e)), "scaleY" == d && (b.scaleY = parseFloat(e)), "opacity" == d && (b.opacity = parseFloat(e)), "skewX" == d && (b.skewX = parseInt(e, 0)), "skewY" == d && (b.skewY = parseInt(e, 0)), "x" == d && (b.x = parseInt(e, 0)), "y" == d && (b.y = parseInt(e, 0)), "z" == d && (b.z = parseInt(e, 0)), "transformOrigin" == d && (b.transformOrigin = e.toString()), "transformPerspective" == d && (b.transformPerspective = parseInt(e, 0))
			}), b
		}, K = function(b) {
			var c = b.split("animation:"),
				d = new Object;
			d.animation = J(I(), c[1]);
			var e = c[0].split(";");
			return a.each(e, function(a, b) {
				b = b.split(":");
				var c = b[0],
					e = b[1];
				"typ" == c && (d.typ = e), "speed" == c && (d.speed = parseInt(e, 0) / 1e3), "start" == c && (d.start = parseInt(e, 0) / 1e3), "elementdelay" == c && (d.elementdelay = parseFloat(e)), "ease" == c && (d.ease = e)
			}), d
		}, L = function(c, d, e, f) {
			function g() {}

			function h() {}
			c.data("ctl") == b && c.data("ctl", new punchgs.TimelineLite);
			var j = c.data("ctl"),
				k = 0,
				l = 0,
				m = c.find(".tp-caption"),
				n = d.container.find(".tp-static-layers").find(".tp-caption");
			j.pause(), a.each(n, function(a, b) {
				m.push(b)
			}), m.each(function(c) {
				var f = e,
					j = -1,
					m = a(this);
				if (m.hasClass("tp-static-layer")) {
					var n = m.data("startslide"),
						o = m.data("endslide");
					(-1 == n || "-1" == n) && m.data("startslide", 0), (-1 == o || "-1" == o) && m.data("endslide", d.slideamount), 0 == n && o == d.slideamount - 1 && m.data("endslide", d.slideamount + 1), n = m.data("startslide"), o = m.data("endslide"), m.hasClass("tp-is-shown") ? j = o == d.next || n > d.next || o < d.next ? 2 : 0 : n <= d.next && o >= d.next || n == d.next || o == d.next ? (m.addClass("tp-is-shown"), j = 1) : j = 0
				}
				k = d.width / 2 - d.startwidth * d.bw / 2;
				var p = d.bw;
				d.bh, "on" == d.fullScreen && (l = d.height / 2 - d.startheight * d.bh / 2), ("on" == d.autoHeight || d.minHeight != b && d.minHeight > 0) && (l = d.container.height() / 2 - d.startheight * d.bh / 2), 0 > l && (l = 0);
				var r = 0;
				if (d.width < d.hideCaptionAtLimit && "on" == m.data("captionhidden") ? (m.addClass("tp-hidden-caption"), r = 1) : d.width < d.hideAllCaptionAtLimit || d.width < d.hideAllCaptionAtLilmit ? (m.addClass("tp-hidden-caption"), r = 1) : m.removeClass("tp-hidden-caption"), 0 == r) {
					if (m.data("linktoslide") == b || m.hasClass("hasclicklistener") || (m.addClass("hasclicklistener"), m.css({
						cursor: "pointer"
					}), "no" != m.data("linktoslide") && m.click(function() {
						var b = a(this),
							c = b.data("linktoslide");
						"next" != c && "prev" != c ? (d.container.data("showus", c), d.container.parent().find(".tp-rightarrow").click()) : "next" == c ? d.container.parent().find(".tp-rightarrow").click() : "prev" == c && d.container.parent().find(".tp-leftarrow").click()
					})), 0 > k && (k = 0), m.hasClass("tp-videolayer") || m.find("iframe").length > 0 || m.find("video").length > 0) {
						var s = "iframe" + Math.round(1e5 * Math.random() + 1),
							t = m.data("videowidth"),
							u = m.data("videoheight"),
							v = m.data("videoattributes"),
							w = m.data("ytid"),
							x = m.data("vimeoid"),
							y = m.data("videpreload"),
							z = m.data("videomp4"),
							A = m.data("videowebm"),
							B = m.data("videoogv"),
							C = m.data("videocontrols"),
							D = "http",
							L = "loop" == m.data("videoloop") ? "loop" : "loopandnoslidestop" == m.data("videoloop") ? "loop" : "";
						if (m.data("thumbimage") != b && m.data("videoposter") == b && m.data("videoposter", m.data("thumbimage")), w != b && String(w).length > 1 && 0 == m.find("iframe").length && (D = "https", "none" == C && (v = v.replace("controls=1", "controls=0"), -1 == v.toLowerCase().indexOf("controls") && (v += "&controls=0")), m.append('<iframe style="visible:hidden" src="' + D + "://www.youtube.com/embed/" + w + "?" + v + '" width="' + t + '" height="' + u + '" style="width:' + t + "px;height:" + u + 'px"></iframe>')), x != b && String(x).length > 1 && 0 == m.find("iframe").length && ("https:" === location.protocol && (D = "https"), m.append('<iframe style="visible:hidden" src="' + D + "://player.vimeo.com/video/" + x + "?" + v + '" width="' + t + '" height="' + u + '" style="width:' + t + "px;height:" + u + 'px"></iframe>')), (z != b || A != b) && 0 == m.find("video").length) {
							"controls" != C && (C = "");
							var N = '<video style="visible:hidden" class="" ' + L + ' preload="' + y + '" width="' + t + '" height="' + u + '"';
							m.data("videoposter") != b && m.data("videoposter") != b && (N = N + 'poster="' + m.data("videoposter") + '">'), A != b && "firefox" == M().toLowerCase() && (N = N + '<source src="' + A + '" type="video/webm" />'), z != b && (N = N + '<source src="' + z + '" type="video/mp4" />'), B != b && (N = N + '<source src="' + B + '" type="video/ogg" />'), N += "</video>", m.append(N), "controls" == C && m.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')
						}
						var R = !1;
						(1 == m.data("autoplayonlyfirsttime") || "true" == m.data("autoplayonlyfirsttime") || 1 == m.data("autoplay")) && (m.data("autoplay", !0), R = !0), m.find("iframe").each(function() {
							var c = a(this);
							if (punchgs.TweenLite.to(c, .1, {
								autoAlpha: 1,
								zIndex: 0,
								transformStyle: "preserve-3d",
								z: 0,
								rotationX: 0,
								force3D: "auto"
							}), W()) {
								var g = c.attr("src");
								c.attr("src", ""), c.attr("src", g)
							}
							if (d.nextslideatend = m.data("nextslideatend"), m.data("videoposter") != b && m.data("videoposter").length > 2 && 1 != m.data("autoplay") && !f && (0 == m.find(".tp-thumb-image").length ? m.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + m.data("videoposter") + '); background-size:cover"></div>') : punchgs.TweenLite.set(m.find(".tp-thumb-image"), {
								autoAlpha: 1
							})), c.attr("src").toLowerCase().indexOf("youtube") >= 0)
								if (c.hasClass("HasListener")) {
									if (!e) {
										var h = m.data("player");
										"on" != m.data("forcerewind") || W() || h.seekTo(0), (!W() && 1 == m.data("autoplay") || R) && m.data("timerplay", setTimeout(function() {
											h.playVideo()
										}, m.data("start")))
									}
								} else try {
									c.attr("id", s);
									var h, i = setInterval(function() {
											YT != b && typeof YT.Player != b && "undefined" != typeof YT.Player && (h = new YT.Player(s, {
												events: {
													onStateChange: E,
													onReady: function(c) {
														var d = c.target.getVideoEmbedCode(),
															e = a("#" + d.split('id="')[1].split('"')[0]),
															f = e.closest(".tp-caption"),
															g = f.data("videorate");
														f.data("videostart"), g != b && c.target.setPlaybackRate(parseFloat(g)), (!W() && 1 == f.data("autoplay") || R) && f.data("timerplay", setTimeout(function() {
															c.target.playVideo()
														}, f.data("start"))), f.find(".tp-thumb-image").click(function() {
															punchgs.TweenLite.to(a(this), .3, {
																autoAlpha: 0,
																force3D: "auto",
																ease: punchgs.Power3.easeInOut
															}), W() || h.playVideo()
														})
													}
												}
											})), c.addClass("HasListener"), m.data("player", h), clearInterval(i)
										}, 100)
								} catch (j) {} else if (c.attr("src").toLowerCase().indexOf("vimeo") >= 0)
									if (c.hasClass("HasListener")) {
										if (!(e || W() || 1 != m.data("autoplay") && "on" != m.data("forcerewind"))) {
											var c = m.find("iframe"),
												r = c.attr("id"),
												t = $f(r);
											"on" == m.data("forcerewind") && t.api("seekTo", 0), m.data("timerplay", setTimeout(function() {
												1 == m.data("autoplay") && t.api("play")
											}, m.data("start")))
										}
									} else {
										c.addClass("HasListener"), c.attr("id", s);
										for (var p, k = c.attr("src"), l = {}, n = k, o = /([^&=]+)=([^&]*)/g; p = o.exec(n);) l[decodeURIComponent(p[1])] = decodeURIComponent(p[2]);
										k = l.player_id != b ? k.replace(l.player_id, s) : k + "&player_id=" + s;
										try {
											k = k.replace("api=0", "api=1")
										} catch (j) {}
										k += "&api=1", c.attr("src", k);
										var h = m.find("iframe")[0],
											q = setInterval(function() {
												$f != b && typeof $f(s).api != b && "undefined" != typeof $f(s).api && ($f(h).addEvent("ready", function() {
													G(s, R)
												}), clearInterval(q))
											}, 100)
									}
						}), (W() && 1 == m.data("disablevideoonmobile") || i(8)) && m.find("video").remove(), m.find("video").length > 0 && m.find("video").each(function() {
							var e = this,
								f = a(this);
							f.parent().hasClass("html5vid") || f.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
							var g = f.parent();
							F(e, "loadedmetadata", function(a) {
								a.data("metaloaded", 1)
							}(g)), clearInterval(g.data("interval")), g.data("interval", setInterval(function() {
								if (1 == g.data("metaloaded") || 0 / 0 != e.duration) {
									if (clearInterval(g.data("interval")), !g.hasClass("HasListener")) {
										g.addClass("HasListener"), "none" != m.data("dottedoverlay") && m.data("dottedoverlay") != b && 1 != m.find(".tp-dottedoverlay").length && g.append('<div class="tp-dottedoverlay ' + m.data("dottedoverlay") + '"></div>'), f.attr("control") == b && (0 == g.find(".tp-video-play-button").length && g.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), g.find("video, .tp-poster, .tp-video-play-button").click(function() {
											g.hasClass("videoisplaying") ? e.pause() : e.play()
										})), (1 == m.data("forcecover") || m.hasClass("fullscreenvideo")) && (1 == m.data("forcecover") && (H(g, d.container), g.addClass("fullcoveredvideo"), m.addClass("fullcoveredvideo")), g.css({
											width: "100%",
											height: "100%"
										}));
										var a = m.find(".tp-vid-play-pause")[0],
											c = m.find(".tp-vid-mute")[0],
											h = m.find(".tp-vid-full-screen")[0],
											i = m.find(".tp-seek-bar")[0],
											j = m.find(".tp-volume-bar")[0];
										a != b && (F(a, "click", function() {
											1 == e.paused ? e.play() : e.pause()
										}), F(c, "click", function() {
											0 == e.muted ? (e.muted = !0, c.innerHTML = "Unmute") : (e.muted = !1, c.innerHTML = "Mute")
										}), F(h, "click", function() {
											e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
										}), F(i, "change", function() {
											var a = e.duration * (i.value / 100);
											e.currentTime = a
										}), F(e, "timeupdate", function() {
											var a = 100 / e.duration * e.currentTime;
											i.value = a
										}), F(i, "mousedown", function() {
											e.pause()
										}), F(i, "mouseup", function() {
											e.play()
										}), F(j, "change", function() {
											e.volume = j.value
										})), F(e, "play", function() {
											"mute" == m.data("volume") && (e.muted = !0), g.addClass("videoisplaying"), "loopandnoslidestop" == m.data("videoloop") ? (d.videoplaying = !1, d.container.trigger("starttimer"), d.container.trigger("revolution.slide.onvideostop")) : (d.videoplaying = !0, d.container.trigger("stoptimer"), d.container.trigger("revolution.slide.onvideoplay"));
											var a = m.find(".tp-vid-play-pause")[0],
												c = m.find(".tp-vid-mute")[0];
											a != b && (a.innerHTML = "Pause"), c != b && e.muted && (c.innerHTML = "Unmute")
										}), F(e, "pause", function() {
											g.removeClass("videoisplaying"), d.videoplaying = !1, d.container.trigger("starttimer"), d.container.trigger("revolution.slide.onvideostop");
											var a = m.find(".tp-vid-play-pause")[0];
											a != b && (a.innerHTML = "Play")
										}), F(e, "ended", function() {
											g.removeClass("videoisplaying"), d.videoplaying = !1, d.container.trigger("starttimer"), d.container.trigger("revolution.slide.onvideostop"), 1 == d.nextslideatend && d.container.revnext()
										})
									}
									var k = !1;
									(1 == m.data("autoplayonlyfirsttime") || "true" == m.data("autoplayonlyfirsttime")) && (k = !0);
									var l = 16 / 9;
									if ("4:3" == m.data("aspectratio") && (l = 4 / 3), g.data("mediaAspect", l), 1 == g.closest(".tp-caption").data("forcecover") && (H(g, d.container), g.addClass("fullcoveredvideo")), f.css({
										display: "block"
									}), d.nextslideatend = m.data("nextslideatend"), (1 == m.data("autoplay") || 1 == k) && ("loopandnoslidestop" == m.data("videoloop") ? (d.videoplaying = !1, d.container.trigger("starttimer"), d.container.trigger("revolution.slide.onvideostop")) : (d.videoplaying = !0, d.container.trigger("stoptimer"), d.container.trigger("revolution.slide.onvideoplay")), "on" != m.data("forcerewind") || g.hasClass("videoisplaying") || e.currentTime > 0 && (e.currentTime = 0), "mute" == m.data("volume") && (e.muted = !0), g.data("timerplay", setTimeout(function() {
										"on" != m.data("forcerewind") || g.hasClass("videoisplaying") || e.currentTime > 0 && (e.currentTime = 0), "mute" == m.data("volume") && (e.muted = !0), e.play()
									}, 10 + m.data("start")))), g.data("ww") == b && g.data("ww", f.attr("width")), g.data("hh") == b && g.data("hh", f.attr("height")), !m.hasClass("fullscreenvideo") && 1 == m.data("forcecover")) try {
										g.width(g.data("ww") * d.bw), g.height(g.data("hh") * d.bh)
									} catch (n) {}
									clearInterval(g.data("interval"))
								}
							}), 100)
						}), 1 == m.data("autoplay") && (setTimeout(function() {
							"loopandnoslidestop" != m.data("videoloop") && (d.videoplaying = !0, d.container.trigger("stoptimer"))
						}, 200), "loopandnoslidestop" != m.data("videoloop") && (d.videoplaying = !0, d.container.trigger("stoptimer")), (1 == m.data("autoplayonlyfirsttime") || "true" == m.data("autoplayonlyfirsttime")) && (m.data("autoplay", !1), m.data("autoplayonlyfirsttime", !1)))
					}
					var U = 0,
						V = 0;
					if (m.find("img").length > 0) {
						var X = m.find("img");
						0 == X.width() && X.css({
							width: "auto"
						}), 0 == X.height() && X.css({
							height: "auto"
						}), X.data("ww") == b && X.width() > 0 && X.data("ww", X.width()), X.data("hh") == b && X.height() > 0 && X.data("hh", X.height());
						var Y = X.data("ww"),
							Z = X.data("hh");
						Y == b && (Y = 0), Z == b && (Z = 0), X.width(Y * d.bw), X.height(Z * d.bh), U = X.width(), V = X.height()
					} else if (m.find("iframe").length > 0 || m.find("video").length > 0) {
						var $ = !1,
							X = m.find("iframe");
						0 == X.length && (X = m.find("video"), $ = !0), X.css({
							display: "block"
						}), m.data("ww") == b && m.data("ww", X.width()), m.data("hh") == b && m.data("hh", X.height());
						var Y = m.data("ww"),
							Z = m.data("hh"),
							_ = m;
						_.data("fsize") == b && _.data("fsize", parseInt(_.css("font-size"), 0) || 0), _.data("pt") == b && _.data("pt", parseInt(_.css("paddingTop"), 0) || 0), _.data("pb") == b && _.data("pb", parseInt(_.css("paddingBottom"), 0) || 0), _.data("pl") == b && _.data("pl", parseInt(_.css("paddingLeft"), 0) || 0), _.data("pr") == b && _.data("pr", parseInt(_.css("paddingRight"), 0) || 0), _.data("mt") == b && _.data("mt", parseInt(_.css("marginTop"), 0) || 0), _.data("mb") == b && _.data("mb", parseInt(_.css("marginBottom"), 0) || 0), _.data("ml") == b && _.data("ml", parseInt(_.css("marginLeft"), 0) || 0), _.data("mr") == b && _.data("mr", parseInt(_.css("marginRight"), 0) || 0), _.data("bt") == b && _.data("bt", parseInt(_.css("borderTop"), 0) || 0), _.data("bb") == b && _.data("bb", parseInt(_.css("borderBottom"), 0) || 0), _.data("bl") == b && _.data("bl", parseInt(_.css("borderLeft"), 0) || 0), _.data("br") == b && _.data("br", parseInt(_.css("borderRight"), 0) || 0), _.data("lh") == b && _.data("lh", parseInt(_.css("lineHeight"), 0) || 0), "auto" == _.data("lh") && _.data("lh", _.data("fsize") + 4);
						var ab = d.width,
							bb = d.height;
						if (ab > d.startwidth && (ab = d.startwidth), bb > d.startheight && (bb = d.startheight), m.hasClass("fullscreenvideo")) {
							k = 0, l = 0, m.data("x", 0), m.data("y", 0);
							var cb = d.height;
							"on" == d.autoHeight && (cb = d.container.height()), m.css({
								width: d.width,
								height: cb
							})
						} else m.css({
							"font-size": _.data("fsize") * d.bw + "px",
							"padding-top": _.data("pt") * d.bh + "px",
							"padding-bottom": _.data("pb") * d.bh + "px",
							"padding-left": _.data("pl") * d.bw + "px",
							"padding-right": _.data("pr") * d.bw + "px",
							"margin-top": _.data("mt") * d.bh + "px",
							"margin-bottom": _.data("mb") * d.bh + "px",
							"margin-left": _.data("ml") * d.bw + "px",
							"margin-right": _.data("mr") * d.bw + "px",
							"border-top": _.data("bt") * d.bh + "px",
							"border-bottom": _.data("bb") * d.bh + "px",
							"border-left": _.data("bl") * d.bw + "px",
							"border-right": _.data("br") * d.bw + "px",
							"line-height": _.data("lh") * d.bh + "px",
							height: Z * d.bh + "px"
						});
						0 == $ ? (X.width(Y * d.bw), X.height(Z * d.bh)) : 1 == m.data("forcecover") || m.hasClass("fullscreenvideo") || (X.width(Y * d.bw), X.height(Z * d.bh)), U = X.width(), V = X.height()
					} else {
						m.find(".tp-resizeme, .tp-resizeme *").each(function() {
							O(a(this), d)
						}), m.hasClass("tp-resizeme") && m.find("*").each(function() {
							O(a(this), d)
						}), O(m, d), V = m.outerHeight(!0), U = m.outerWidth(!0);
						var db = m.outerHeight(),
							eb = m.css("backgroundColor");
						m.find(".frontcorner").css({
							borderWidth: db + "px",
							left: 0 - db + "px",
							borderRight: "0px solid transparent",
							borderTopColor: eb
						}), m.find(".frontcornertop").css({
							borderWidth: db + "px",
							left: 0 - db + "px",
							borderRight: "0px solid transparent",
							borderBottomColor: eb
						}), m.find(".backcorner").css({
							borderWidth: db + "px",
							right: 0 - db + "px",
							borderLeft: "0px solid transparent",
							borderBottomColor: eb
						}), m.find(".backcornertop").css({
							borderWidth: db + "px",
							right: 0 - db + "px",
							borderLeft: "0px solid transparent",
							borderTopColor: eb
						})
					}
					"on" == d.fullScreenAlignForce && (k = 0, l = 0), m.data("voffset") == b && m.data("voffset", 0), m.data("hoffset") == b && m.data("hoffset", 0);
					var fb = m.data("voffset") * p,
						gb = m.data("hoffset") * p,
						hb = d.startwidth * p,
						ib = d.startheight * p;
					"on" == d.fullScreenAlignForce && (hb = d.container.width(), ib = d.container.height()), ("center" == m.data("x") || "center" == m.data("xcenter")) && (m.data("xcenter", "center"), m.data("x", hb / 2 - m.outerWidth(!0) / 2 + gb)), ("left" == m.data("x") || "left" == m.data("xleft")) && (m.data("xleft", "left"), m.data("x", 0 / p + gb)), ("right" == m.data("x") || "right" == m.data("xright")) && (m.data("xright", "right"), m.data("x", (hb - m.outerWidth(!0) + gb) / p)), ("center" == m.data("y") || "center" == m.data("ycenter")) && (m.data("ycenter", "center"), m.data("y", ib / 2 - m.outerHeight(!0) / 2 + fb)), ("top" == m.data("y") || "top" == m.data("ytop")) && (m.data("ytop", "top"), m.data("y", 0 / d.bh + fb)), ("bottom" == m.data("y") || "bottom" == m.data("ybottom")) && (m.data("ybottom", "bottom"), m.data("y", (ib - m.outerHeight(!0) + fb) / p)), m.data("start") == b && m.data("start", 1e3);
					var jb = m.data("easing");
					jb == b && (jb = "punchgs.Power1.easeOut");
					var kb = m.data("start") / 1e3,
						lb = m.data("speed") / 1e3;
					if ("center" == m.data("x") || "center" == m.data("xcenter")) var mb = m.data("x") + k;
					else var mb = p * m.data("x") + k; if ("center" == m.data("y") || "center" == m.data("ycenter")) var nb = m.data("y") + l;
					else var nb = d.bh * m.data("y") + l; if (punchgs.TweenLite.set(m, {
						top: nb,
						left: mb,
						overwrite: "auto"
					}), 0 == j && (f = !0), m.data("timeline") == b || f || (2 != j && m.data("timeline").gotoAndPlay(0), f = !0), !f) {
						m.data("timeline") != b;
						var ob = new punchgs.TimelineLite({
							smoothChildTiming: !0,
							onStart: h
						});
						ob.pause(), "on" == d.fullScreenAlignForce;
						var pb = m;
						m.data("mySplitText") != b && m.data("mySplitText").revert(), ("chars" == m.data("splitin") || "words" == m.data("splitin") || "lines" == m.data("splitin") || "chars" == m.data("splitout") || "words" == m.data("splitout") || "lines" == m.data("splitout")) && (m.find("a").length > 0 ? m.data("mySplitText", new punchgs.SplitText(m.find("a"), {
							type: "lines,words,chars",
							charsClass: "tp-splitted",
							wordsClass: "tp-splitted",
							linesClass: "tp-splitted"
						})) : m.find(".tp-layer-inner-rotation").length > 0 ? m.data("mySplitText", new punchgs.SplitText(m.find(".tp-layer-inner-rotation"), {
							type: "lines,words,chars",
							charsClass: "tp-splitted",
							wordsClass: "tp-splitted",
							linesClass: "tp-splitted"
						})) : m.data("mySplitText", new punchgs.SplitText(m, {
							type: "lines,words,chars",
							charsClass: "tp-splitted",
							wordsClass: "tp-splitted",
							linesClass: "tp-splitted"
						})), m.addClass("splitted")), "chars" == m.data("splitin") && (pb = m.data("mySplitText").chars), "words" == m.data("splitin") && (pb = m.data("mySplitText").words), "lines" == m.data("splitin") && (pb = m.data("mySplitText").lines);
						var qb = I(),
							rb = I();
						m.data("repeat") != b && (repeatV = m.data("repeat")), m.data("yoyo") != b && (yoyoV = m.data("yoyo")), m.data("repeatdelay") != b && (repeatdelayV = m.data("repeatdelay"));
						var sb = m.attr("class");
						sb.match("customin") ? qb = J(qb, m.data("customin")) : sb.match("randomrotate") ? (qb.scale = 3 * Math.random() + 1, qb.rotation = Math.round(200 * Math.random() - 100), qb.x = Math.round(200 * Math.random() - 100), qb.y = Math.round(200 * Math.random() - 100)) : sb.match("lfr") || sb.match("skewfromright") ? qb.x = 15 + d.width : sb.match("lfl") || sb.match("skewfromleft") ? qb.x = -15 - U : sb.match("sfl") || sb.match("skewfromleftshort") ? qb.x = -50 : sb.match("sfr") || sb.match("skewfromrightshort") ? qb.x = 50 : sb.match("lft") ? qb.y = -25 - V : sb.match("lfb") ? qb.y = 25 + d.height : sb.match("sft") ? qb.y = -50 : sb.match("sfb") && (qb.y = 50), sb.match("skewfromright") || m.hasClass("skewfromrightshort") ? qb.skewX = -85 : (sb.match("skewfromleft") || m.hasClass("skewfromleftshort")) && (qb.skewX = 85), (sb.match("fade") || sb.match("sft") || sb.match("sfl") || sb.match("sfb") || sb.match("skewfromleftshort") || sb.match("sfr") || sb.match("skewfromrightshort")) && (qb.opacity = 0), "safari" == M().toLowerCase();
						var tb = m.data("elementdelay") == b ? 0 : m.data("elementdelay");
						rb.ease = qb.ease = m.data("easing") == b ? punchgs.Power1.easeInOut : m.data("easing"), qb.data = new Object, qb.data.oldx = qb.x, qb.data.oldy = qb.y, rb.data = new Object, rb.data.oldx = rb.x, rb.data.oldy = rb.y, qb.x = qb.x * p, qb.y = qb.y * p;
						var ub = new punchgs.TimelineLite;
						if (2 != j)
							if (sb.match("customin")) pb != m && ob.add(punchgs.TweenLite.set(m, {
								force3D: "auto",
								opacity: 1,
								scaleX: 1,
								scaleY: 1,
								rotationX: 0,
								rotationY: 0,
								rotationZ: 0,
								skewX: 0,
								skewY: 0,
								z: 0,
								x: 0,
								y: 0,
								visibility: "visible",
								delay: 0,
								overwrite: "all"
							})), qb.visibility = "hidden", rb.visibility = "visible", rb.overwrite = "all", rb.opacity = 1, rb.onComplete = g(), rb.delay = kb, rb.force3D = "auto", ob.add(ub.staggerFromTo(pb, lb, qb, rb, tb), "frame0");
							else
						if (qb.visibility = "visible", qb.transformPerspective = 600, pb != m && ob.add(punchgs.TweenLite.set(m, {
							force3D: "auto",
							opacity: 1,
							scaleX: 1,
							scaleY: 1,
							rotationX: 0,
							rotationY: 0,
							rotationZ: 0,
							skewX: 0,
							skewY: 0,
							z: 0,
							x: 0,
							y: 0,
							visibility: "visible",
							delay: 0,
							overwrite: "all"
						})), rb.visibility = "visible", rb.delay = kb, rb.onComplete = g(), rb.opacity = 1, rb.force3D = "auto", sb.match("randomrotate") && pb != m)
							for (var c = 0; c < pb.length; c++) {
								var vb = new Object,
									wb = new Object;
								a.extend(vb, qb), a.extend(wb, rb), qb.scale = 3 * Math.random() + 1, qb.rotation = Math.round(200 * Math.random() - 100), qb.x = Math.round(200 * Math.random() - 100), qb.y = Math.round(200 * Math.random() - 100), 0 != c && (wb.delay = kb + c * tb), ob.append(punchgs.TweenLite.fromTo(pb[c], lb, vb, wb), "frame0")
							} else ob.add(ub.staggerFromTo(pb, lb, qb, rb, tb), "frame0");
						if (m.data("timeline", ob), new Array, m.data("frames") != b) {
							var yb = m.data("frames");
							yb = yb.replace(/\s+/g, ""), yb = yb.replace("{", "");
							var zb = yb.split("}");
							a.each(zb, function(a, b) {
								if (b.length > 0) {
									var c = K(b);
									S(m, d, c, "frame" + (a + 10), p)
								}
							})
						}
						ob = m.data("timeline"), m.data("end") == b || -1 != j && 2 != j ? -1 == j || 2 == j ? T(m, d, 999999, qb, "frame99", p) : T(m, d, 999999, qb, "frame99", p) : T(m, d, m.data("end") / 1e3, qb, "frame99", p), ob = m.data("timeline"), m.data("timeline", ob), P(m, p), ob.resume()
					}
				}
				if (f && (Q(m), P(m, p), m.data("timeline") != b)) {
					var Ab = m.data("timeline").getTweensOf();
					a.each(Ab, function(a, c) {
						if (c.vars.data != b) {
							var d = c.vars.data.oldx * p,
								e = c.vars.data.oldy * p;
							if (1 != c.progress() && 0 != c.progress()) try {
								c.vars.x = d, c.vary.y = e
							} catch (f) {} else 1 == c.progress() && punchgs.TweenLite.set(c.target, {
								x: d,
								y: e
							})
						}
					})
				}
			});
			var o = a("body").find("#" + d.container.attr("id")).find(".tp-bannertimer");
			o.data("opt", d), f != b && setTimeout(function() {
				f.resume()
			}, 30)
		}, M = function() {
			var c, a = navigator.appName,
				b = navigator.userAgent,
				d = b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
			return d && null != (c = b.match(/version\/([\.\d]+)/i)) && (d[2] = c[1]), d = d ? [d[1], d[2]] : [a, navigator.appVersion, "-?"], d[0]
		}, O = function(a, c) {
			a.data("fsize") == b && a.data("fsize", parseInt(a.css("font-size"), 0) || 0), a.data("pt") == b && a.data("pt", parseInt(a.css("paddingTop"), 0) || 0), a.data("pb") == b && a.data("pb", parseInt(a.css("paddingBottom"), 0) || 0), a.data("pl") == b && a.data("pl", parseInt(a.css("paddingLeft"), 0) || 0), a.data("pr") == b && a.data("pr", parseInt(a.css("paddingRight"), 0) || 0), a.data("mt") == b && a.data("mt", parseInt(a.css("marginTop"), 0) || 0), a.data("mb") == b && a.data("mb", parseInt(a.css("marginBottom"), 0) || 0), a.data("ml") == b && a.data("ml", parseInt(a.css("marginLeft"), 0) || 0), a.data("mr") == b && a.data("mr", parseInt(a.css("marginRight"), 0) || 0), a.data("bt") == b && a.data("bt", parseInt(a.css("borderTopWidth"), 0) || 0), a.data("bb") == b && a.data("bb", parseInt(a.css("borderBottomWidth"), 0) || 0), a.data("bl") == b && a.data("bl", parseInt(a.css("borderLeftWidth"), 0) || 0), a.data("br") == b && a.data("br", parseInt(a.css("borderRightWidth"), 0) || 0), a.data("ls") == b && a.data("ls", parseInt(a.css("letterSpacing"), 0) || 0), a.data("lh") == b && a.data("lh", parseInt(a.css("lineHeight"), 0) || "auto"), a.data("minwidth") == b && a.data("minwidth", parseInt(a.css("minWidth"), 0) || 0), a.data("minheight") == b && a.data("minheight", parseInt(a.css("minHeight"), 0) || 0), a.data("maxwidth") == b && a.data("maxwidth", parseInt(a.css("maxWidth"), 0) || "none"), a.data("maxheight") == b && a.data("maxheight", parseInt(a.css("maxHeight"), 0) || "none"), a.data("wii") == b && a.data("wii", parseInt(a.css("width"), 0) || 0), a.data("hii") == b && a.data("hii", parseInt(a.css("height"), 0) || 0), a.data("wan") == b && a.data("wan", a.css("-webkit-transition")), a.data("moan") == b && a.data("moan", a.css("-moz-animation-transition")), a.data("man") == b && a.data("man", a.css("-ms-animation-transition")), a.data("ani") == b && a.data("ani", a.css("transition")), "auto" == a.data("lh") && a.data("lh", a.data("fsize") + 4), a.hasClass("tp-splitted") || (a.css("-webkit-transition", "none"), a.css("-moz-transition", "none"), a.css("-ms-transition", "none"), a.css("transition", "none"), punchgs.TweenLite.set(a, {
				fontSize: Math.round(a.data("fsize") * c.bw) + "px",
				letterSpacing: Math.floor(a.data("ls") * c.bw) + "px",
				paddingTop: Math.round(a.data("pt") * c.bh) + "px",
				paddingBottom: Math.round(a.data("pb") * c.bh) + "px",
				paddingLeft: Math.round(a.data("pl") * c.bw) + "px",
				paddingRight: Math.round(a.data("pr") * c.bw) + "px",
				marginTop: a.data("mt") * c.bh + "px",
				marginBottom: a.data("mb") * c.bh + "px",
				marginLeft: a.data("ml") * c.bw + "px",
				marginRight: a.data("mr") * c.bw + "px",
				borderTopWidth: Math.round(a.data("bt") * c.bh) + "px",
				borderBottomWidth: Math.round(a.data("bb") * c.bh) + "px",
				borderLeftWidth: Math.round(a.data("bl") * c.bw) + "px",
				borderRightWidth: Math.round(a.data("br") * c.bw) + "px",
				lineHeight: Math.round(a.data("lh") * c.bh) + "px",
				minWidth: a.data("minwidth") * c.bw + "px",
				minHeight: a.data("minheight") * c.bh + "px",
				overwrite: "auto"
			}), setTimeout(function() {
				a.css("-webkit-transition", a.data("wan")), a.css("-moz-transition", a.data("moan")), a.css("-ms-transition", a.data("man")), a.css("transition", a.data("ani"))
			}, 30), "none" != a.data("maxheight") && a.css({
				maxHeight: a.data("maxheight") * c.bh + "px"
			}), "none" != a.data("maxwidth") && a.css({
				maxWidth: a.data("maxwidth") * c.bw + "px"
			}))
		}, P = function(c, d) {
			c.find(".rs-pendulum").each(function() {
				var c = a(this);
				if (c.data("timeline") == b) {
					c.data("timeline", new punchgs.TimelineLite);
					var e = c.data("startdeg") == b ? -20 : c.data("startdeg"),
						f = c.data("enddeg") == b ? 20 : c.data("enddeg"),
						g = c.data("speed") == b ? 2 : c.data("speed"),
						h = c.data("origin") == b ? "50% 50%" : c.data("origin"),
						i = c.data("easing") == b ? punchgs.Power2.easeInOut : c.data("ease");
					e *= d, f *= d, c.data("timeline").append(new punchgs.TweenLite.fromTo(c, g, {
						force3D: "auto",
						rotation: e,
						transformOrigin: h
					}, {
						rotation: f,
						ease: i
					})), c.data("timeline").append(new punchgs.TweenLite.fromTo(c, g, {
						force3D: "auto",
						rotation: f,
						transformOrigin: h
					}, {
						rotation: e,
						ease: i,
						onComplete: function() {
							c.data("timeline").restart()
						}
					}))
				}
			}), c.find(".rs-rotate").each(function() {
				var c = a(this);
				if (c.data("timeline") == b) {
					c.data("timeline", new punchgs.TimelineLite);
					var e = c.data("startdeg") == b ? 0 : c.data("startdeg"),
						f = c.data("enddeg") == b ? 360 : c.data("enddeg");
					speed = c.data("speed") == b ? 2 : c.data("speed"), origin = c.data("origin") == b ? "50% 50%" : c.data("origin"), easing = c.data("easing") == b ? punchgs.Power2.easeInOut : c.data("easing"), e *= d, f *= d, c.data("timeline").append(new punchgs.TweenLite.fromTo(c, speed, {
						force3D: "auto",
						rotation: e,
						transformOrigin: origin
					}, {
						rotation: f,
						ease: easing,
						onComplete: function() {
							c.data("timeline").restart()
						}
					}))
				}
			}), c.find(".rs-slideloop").each(function() {
				var c = a(this);
				if (c.data("timeline") == b) {
					c.data("timeline", new punchgs.TimelineLite);
					var e = c.data("xs") == b ? 0 : c.data("xs"),
						f = c.data("ys") == b ? 0 : c.data("ys"),
						g = c.data("xe") == b ? 0 : c.data("xe"),
						h = c.data("ye") == b ? 0 : c.data("ye"),
						i = c.data("speed") == b ? 2 : c.data("speed"),
						j = c.data("easing") == b ? punchgs.Power2.easeInOut : c.data("easing");
					e *= d, f *= d, g *= d, h *= d, c.data("timeline").append(new punchgs.TweenLite.fromTo(c, i, {
						force3D: "auto",
						x: e,
						y: f
					}, {
						x: g,
						y: h,
						ease: j
					})), c.data("timeline").append(new punchgs.TweenLite.fromTo(c, i, {
						force3D: "auto",
						x: g,
						y: h
					}, {
						x: e,
						y: f,
						onComplete: function() {
							c.data("timeline").restart()
						}
					}))
				}
			}), c.find(".rs-pulse").each(function() {
				var c = a(this);
				if (c.data("timeline") == b) {
					c.data("timeline", new punchgs.TimelineLite);
					var d = c.data("zoomstart") == b ? 0 : c.data("zoomstart"),
						e = c.data("zoomend") == b ? 0 : c.data("zoomend"),
						f = c.data("speed") == b ? 2 : c.data("speed"),
						g = c.data("easing") == b ? punchgs.Power2.easeInOut : c.data("easing");
					c.data("timeline").append(new punchgs.TweenLite.fromTo(c, f, {
						force3D: "auto",
						scale: d
					}, {
						scale: e,
						ease: g
					})), c.data("timeline").append(new punchgs.TweenLite.fromTo(c, f, {
						force3D: "auto",
						scale: e
					}, {
						scale: d,
						onComplete: function() {
							c.data("timeline").restart()
						}
					}))
				}
			}), c.find(".rs-wave").each(function() {
				var c = a(this);
				if (c.data("timeline") == b) {
					c.data("timeline", new punchgs.TimelineLite);
					var e = c.data("angle") == b ? 10 : c.data("angle"),
						f = c.data("radius") == b ? 10 : c.data("radius"),
						g = c.data("speed") == b ? -20 : c.data("speed");
					c.data("origin") == b ? -20 : c.data("origin"), e *= d, f *= d;
					var i = {
						a: 0,
						ang: e,
						element: c,
						unit: f
					};
					c.data("timeline").append(new punchgs.TweenLite.fromTo(i, g, {
						a: 360
					}, {
						a: 0,
						force3D: "auto",
						ease: punchgs.Linear.easeNone,
						onUpdate: function() {
							var a = i.a * (Math.PI / 180);
							punchgs.TweenLite.to(i.element, .1, {
								force3D: "auto",
								x: Math.cos(a) * i.unit,
								y: i.unit * (1 - Math.sin(a))
							})
						},
						onComplete: function() {
							c.data("timeline").restart()
						}
					}))
				}
			})
		}, Q = function(c) {
			c.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
				var c = a(this);
				c.data("timeline") != b && (c.data("timeline").pause(), c.data("timeline", null))
			})
		}, R = function(c, d) {
			var e = 0,
				f = c.find(".tp-caption"),
				g = d.container.find(".tp-static-layers").find(".tp-caption");
			return a.each(g, function(a, b) {
				f.push(b)
			}), f.each(function() {
				var f = -1,
					g = a(this);
				if (g.hasClass("tp-static-layer") && ((-1 == g.data("startslide") || "-1" == g.data("startslide")) && g.data("startslide", 0), (-1 == g.data("endslide") || "-1" == g.data("endslide")) && g.data("endslide", d.slideamount), g.hasClass("tp-is-shown") ? g.data("startslide") > d.next || g.data("endslide") < d.next ? (f = 2, g.removeClass("tp-is-shown")) : f = 0 : f = 2), 0 != f) {
					if (Q(g), g.find("iframe").length > 0) {
						punchgs.TweenLite.to(g.find("iframe"), .2, {
							autoAlpha: 0
						}), W() && g.find("iframe").remove();
						try {
							var h = g.find("iframe"),
								i = h.attr("id"),
								j = $f(i);
							j.api("pause"), clearTimeout(g.data("timerplay"))
						} catch (k) {}
						try {
							var l = g.data("player");
							l.stopVideo(), clearTimeout(g.data("timerplay"))
						} catch (k) {}
					}
					if (g.find("video").length > 0) try {
						g.find("video").each(function() {
							var c = a(this).parent();
							c.attr("id"), clearTimeout(c.data("timerplay"));
							var e = this;
							e.pause()
						})
					} catch (k) {}
					try {
						var m = g.data("timeline"),
							n = m.getLabelTime("frame99"),
							o = m.time();
						if (n > o) {
							var p = m.getTweensOf(g);
							if (a.each(p, function(a, b) {
								0 != a && b.pause()
							}), 0 != g.css("opacity")) {
								var q = g.data("endspeed") == b ? g.data("speed") : g.data("endspeed");
								q > e && (e = q), m.play("frame99")
							} else m.progress(1, !1)
						}
					} catch (k) {}
				}
			}), e
		}, S = function(a, c, d, e, f) {
			var g = a.data("timeline"),
				h = new punchgs.TimelineLite,
				i = a;
			"chars" == d.typ ? i = a.data("mySplitText").chars : "words" == d.typ ? i = a.data("mySplitText").words : "lines" == d.typ && (i = a.data("mySplitText").lines), d.animation.ease = d.ease, d.animation.rotationZ != b && (d.animation.rotation = d.animation.rotationZ), d.animation.data = new Object, d.animation.data.oldx = d.animation.x, d.animation.data.oldy = d.animation.y, d.animation.x = d.animation.x * f, d.animation.y = d.animation.y * f, g.add(h.staggerTo(i, d.speed, d.animation, d.elementdelay), d.start), g.addLabel(e, d.start), a.data("timeline", g)
		}, T = function(a, c, d, e, f, g) {
			var h = a.data("timeline"),
				i = new punchgs.TimelineLite,
				j = I(),
				k = a.data("endspeed") == b ? a.data("speed") : a.data("endspeed"),
				l = a.attr("class");
			if (j.ease = a.data("endeasing") == b ? punchgs.Power1.easeInOut : a.data("endeasing"), k /= 1e3, l.match("ltr") || l.match("ltl") || l.match("str") || l.match("stl") || l.match("ltt") || l.match("ltb") || l.match("stt") || l.match("stb") || l.match("skewtoright") || l.match("skewtorightshort") || l.match("skewtoleft") || l.match("skewtoleftshort") || l.match("fadeout") || l.match("randomrotateout")) {
				l.match("skewtoright") || l.match("skewtorightshort") ? j.skewX = 35 : (l.match("skewtoleft") || l.match("skewtoleftshort")) && (j.skewX = -35), l.match("ltr") || l.match("skewtoright") ? j.x = c.width + 60 : l.match("ltl") || l.match("skewtoleft") ? j.x = 0 - (c.width + 60) : l.match("ltt") ? j.y = 0 - (c.height + 60) : l.match("ltb") ? j.y = c.height + 60 : l.match("str") || l.match("skewtorightshort") ? (j.x = 50, j.opacity = 0) : l.match("stl") || l.match("skewtoleftshort") ? (j.x = -50, j.opacity = 0) : l.match("stt") ? (j.y = -50, j.opacity = 0) : l.match("stb") ? (j.y = 50, j.opacity = 0) : l.match("randomrotateout") ? (j.x = Math.random() * c.width, j.y = Math.random() * c.height, j.scale = 2 * Math.random() + .3, j.rotation = 360 * Math.random() - 180, j.opacity = 0) : l.match("fadeout") && (j.opacity = 0), l.match("skewtorightshort") ? j.x = 270 : l.match("skewtoleftshort") && (j.x = -270), j.data = new Object, j.data.oldx = j.x, j.data.oldy = j.y, j.x = j.x * g, j.y = j.y * g, j.overwrite = "auto";
				var m = a,
					m = a;
				"chars" == a.data("splitout") ? m = a.data("mySplitText").chars : "words" == a.data("splitout") ? m = a.data("mySplitText").words : "lines" == a.data("splitout") && (m = a.data("mySplitText").lines);
				var n = a.data("endelementdelay") == b ? 0 : a.data("endelementdelay");
				h.add(i.staggerTo(m, k, j, n), d)
			} else if (a.hasClass("customout")) {
				j = J(j, a.data("customout"));
				var m = a;
				"chars" == a.data("splitout") ? m = a.data("mySplitText").chars : "words" == a.data("splitout") ? m = a.data("mySplitText").words : "lines" == a.data("splitout") && (m = a.data("mySplitText").lines);
				var n = a.data("endelementdelay") == b ? 0 : a.data("endelementdelay");
				j.onStart = function() {
					punchgs.TweenLite.set(a, {
						transformPerspective: j.transformPerspective,
						transformOrigin: j.transformOrigin,
						overwrite: "auto"
					})
				}, j.data = new Object, j.data.oldx = j.x, j.data.oldy = j.y, j.x = j.x * g, j.y = j.y * g, h.add(i.staggerTo(m, k, j, n), d)
			} else e.delay = 0, h.add(punchgs.TweenLite.to(a, k, e), d);
			h.addLabel(f, d), a.data("timeline", h)
		}, U = function(b, c) {
			b.children().each(function() {
				try {
					a(this).die("click")
				} catch (b) {}
				try {
					a(this).die("mouseenter")
				} catch (b) {}
				try {
					a(this).die("mouseleave")
				} catch (b) {}
				try {
					a(this).unbind("hover")
				} catch (b) {}
			});
			try {
				b.die("click", "mouseenter", "mouseleave")
			} catch (d) {}
			clearInterval(c.cdint), b = null
		}, V = function(c, d) {
			if (d.cd = 0, d.loop = 0, d.looptogo = d.stopAfterLoops != b && d.stopAfterLoops > -1 ? d.stopAfterLoops : 9999999, d.lastslidetoshow = d.stopAtSlide != b && d.stopAtSlide > -1 ? d.stopAtSlide : 999, d.stopLoop = "off", 0 == d.looptogo && (d.stopLoop = "on"), d.slideamount > 1 && (0 != d.stopAfterLoops || 1 != d.stopAtSlide)) {
				var e = c.find(".tp-bannertimer");
				c.on("stoptimer", function() {
					var b = a(this).find(".tp-bannertimer");
					b.data("tween").pause(), "on" == d.hideTimerBar && b.css({
						visibility: "hidden"
					})
				}), c.on("starttimer", function() {
					1 != d.conthover && 1 != d.videoplaying && d.width > d.hideSliderAtLimit && 1 != d.bannertimeronpause && 1 != d.overnav && ("on" == d.stopLoop && d.next == d.lastslidetoshow - 1 || 1 == d.noloopanymore ? d.noloopanymore = 1 : (e.css({
						visibility: "visible"
					}), e.data("tween").resume())), "on" == d.hideTimerBar && e.css({
						visibility: "hidden"
					})
				}), c.on("restarttimer", function() {
					var b = a(this).find(".tp-bannertimer");
					"on" == d.stopLoop && d.next == d.lastslidetoshow - 1 || 1 == d.noloopanymore ? d.noloopanymore = 1 : (b.css({
						visibility: "visible"
					}), b.data("tween").kill(), b.data("tween", punchgs.TweenLite.fromTo(b, d.delay / 1e3, {
						width: "0%"
					}, {
						force3D: "auto",
						width: "100%",
						ease: punchgs.Linear.easeNone,
						onComplete: f,
						delay: 1
					}))), "on" == d.hideTimerBar && b.css({
						visibility: "hidden"
					})
				}), c.on("nulltimer", function() {
					e.data("tween").pause(0), "on" == d.hideTimerBar && e.css({
						visibility: "hidden"
					})
				});
				var f = function() {
					0 == a("body").find(c).length && (U(c, d), clearInterval(d.cdint)), c.trigger("revolution.slide.slideatend"), 1 == c.data("conthover-changed") && (d.conthover = c.data("conthover"), c.data("conthover-changed", 0)), d.act = d.next, d.next = d.next + 1, d.next > c.find(">ul >li").length - 1 && (d.next = 0, d.looptogo = d.looptogo - 1, d.looptogo <= 0 && (d.stopLoop = "on")), "on" == d.stopLoop && d.next == d.lastslidetoshow - 1 ? (c.find(".tp-bannertimer").css({
						visibility: "hidden"
					}), c.trigger("revolution.slide.onstop"), d.noloopanymore = 1) : e.data("tween").restart(), z(c, d)
				};
				e.data("tween", punchgs.TweenLite.fromTo(e, d.delay / 1e3, {
					width: "0%"
				}, {
					force3D: "auto",
					width: "100%",
					ease: punchgs.Linear.easeNone,
					onComplete: f,
					delay: 1
				})), e.data("opt", d), c.hover(function() {
					if ("on" == d.onHoverStop && !W()) {
						c.trigger("stoptimer"), c.trigger("revolution.slide.onpause");
						var e = c.find(">ul >li:eq(" + d.next + ") .slotholder");
						e.find(".defaultimg").each(function() {
							var c = a(this);
							c.data("kenburn") != b && c.data("kenburn").pause()
						})
					}
				}, function() {
					if (1 != c.data("conthover")) {
						c.trigger("revolution.slide.onresume"), c.trigger("starttimer");
						var e = c.find(">ul >li:eq(" + d.next + ") .slotholder");
						e.find(".defaultimg").each(function() {
							var c = a(this);
							c.data("kenburn") != b && c.data("kenburn").play()
						})
					}
				})
			}
		}, W = function() {
			var a = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
				b = !1;
			for (var c in a) navigator.userAgent.split(a[c]).length > 1 && (b = !0);
			return b
		}, X = function(a, b, c) {
			var d = b.data("owidth"),
				e = b.data("oheight");
			if (d / e > c.width / c.height) {
				var f = c.container.width() / d,
					g = e * f,
					h = g / c.container.height() * a;
				return a *= 100 / h, h = 100, a = a, a + "% " + h + "%" + " 1"
			}
			var f = c.container.width() / d,
				g = e * f,
				h = g / c.container.height() * a;
			return a + "% " + h + "%"
		}, Y = function(c, d, e, f) {
			try {
				c.find(">ul:first-child >li:eq(" + d.act + ")")
			} catch (h) {
				c.find(">ul:first-child >li:eq(1)")
			}
			d.lastslide = d.act;
			var j = c.find(">ul:first-child >li:eq(" + d.next + ")"),
				k = j.find(".slotholder"),
				l = k.data("bgposition"),
				m = k.data("bgpositionend"),
				n = k.data("zoomstart") / 100,
				o = k.data("zoomend") / 100,
				p = k.data("rotationstart"),
				q = k.data("rotationend"),
				r = k.data("bgfit"),
				s = k.data("bgfitend"),
				t = k.data("easeme"),
				u = k.data("duration") / 1e3,
				v = 100;
			r == b && (r = 100), s == b && (s = 100);
			var w = r,
				x = s;
			r = X(r, k, d), s = X(s, k, d), v = X(100, k, d), n == b && (n = 1), o == b && (o = 1), p == b && (p = 0), q == b && (q = 0), 1 > n && (n = 1), 1 > o && (o = 1);
			var y = new Object;
			y.w = parseInt(v.split(" ")[0], 0), y.h = parseInt(v.split(" ")[1], 0);
			var z = !1;
			"1" == v.split(" ")[2] && (z = !0), k.find(".defaultimg").each(function() {
				var b = a(this);
				0 == k.find(".kenburnimg").length ? k.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + b.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + y.w + "%;height:" + y.h + '%;"></div>') : k.find(".kenburnimg img").css({
					width: y.w + "%",
					height: y.h + "%"
				});
				var c = k.find(".kenburnimg img"),
					e = Z(d, l, r, c, z),
					g = Z(d, m, s, c, z);
				if (z && (e.w = w / 100, g.w = x / 100), f) {
					punchgs.TweenLite.set(c, {
						autoAlpha: 0,
						transformPerspective: 1200,
						transformOrigin: "0% 0%",
						top: 0,
						left: 0,
						scale: e.w,
						x: e.x,
						y: e.y
					});
					var h = e.w,
						j = h * c.width() - d.width,
						n = h * c.height() - d.height,
						o = Math.abs(100 * (e.x / j)),
						p = Math.abs(100 * (e.y / n));
					0 == n && (p = 0), 0 == j && (o = 0), b.data("bgposition", o + "% " + p + "%"), i(8) || b.data("currotate", $(c)), i(8) || b.data("curscale", y.w * h + "%  " + (y.h * h + "%")), k.find(".kenburnimg").remove()
				} else b.data("kenburn", punchgs.TweenLite.fromTo(c, u, {
					autoAlpha: 1,
					force3D: punchgs.force3d,
					transformOrigin: "0% 0%",
					top: 0,
					left: 0,
					scale: e.w,
					x: e.x,
					y: e.y
				}, {
					autoAlpha: 1,
					rotationZ: q,
					ease: t,
					x: g.x,
					y: g.y,
					scale: g.w,
					onUpdate: function() {
						var a = c[0]._gsTransform.scaleX,
							e = a * c.width() - d.width,
							f = a * c.height() - d.height,
							g = Math.abs(100 * (c[0]._gsTransform.x / e)),
							h = Math.abs(100 * (c[0]._gsTransform.y / f));
						0 == f && (h = 0), 0 == e && (g = 0), b.data("bgposition", g + "% " + h + "%"), i(8) || b.data("currotate", $(c)), i(8) || b.data("curscale", y.w * a + "%  " + (y.h * a + "%"))
					}
				}))
			})
		}, Z = function(a, b, c, d, e) {
			var f = new Object;
			switch (f.w = e ? parseInt(c.split(" ")[1], 0) / 100 : parseInt(c.split(" ")[0], 0) / 100, b) {
				case "left top":
				case "top left":
					f.x = 0, f.y = 0;
					break;
				case "center top":
				case "top center":
					f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = 0;
					break;
				case "top right":
				case "right top":
					f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = 0;
					break;
				case "center left":
				case "left center":
					f.x = 0, f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
					break;
				case "center center":
					f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
					break;
				case "center right":
				case "right center":
					f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = ((0 - d.height()) * f.w + parseInt(a.height, 0)) / 2;
					break;
				case "bottom left":
				case "left bottom":
					f.x = 0, f.y = (0 - d.height()) * f.w + parseInt(a.height, 0);
					break;
				case "bottom center":
				case "center bottom":
					f.x = ((0 - d.width()) * f.w + parseInt(a.width, 0)) / 2, f.y = (0 - d.height()) * f.w + parseInt(a.height, 0);
					break;
				case "bottom right":
				case "right bottom":
					f.x = (0 - d.width()) * f.w + parseInt(a.width, 0), f.y = (0 - d.height()) * f.w + parseInt(a.height, 0)
			}
			return f
		}, $ = function(a) {
			var b = a.css("-webkit-transform") || a.css("-moz-transform") || a.css("-ms-transform") || a.css("-o-transform") || a.css("transform");
			if ("none" !== b) var c = b.split("(")[1].split(")")[0].split(","),
			d = c[0], e = c[1], f = Math.round(Math.atan2(e, d) * (180 / Math.PI));
			else var f = 0;
			return 0 > f ? f += 360 : f
		}, _ = function(c, d) {
			try {
				var e = c.find(">ul:first-child >li:eq(" + d.act + ")")
			} catch (f) {
				var e = c.find(">ul:first-child >li:eq(1)")
			}
			d.lastslide = d.act;
			var g = c.find(">ul:first-child >li:eq(" + d.next + ")");
			e.find(".slotholder"), g.find(".slotholder"), c.find(".defaultimg").each(function() {
				var c = a(this);
				punchgs.TweenLite.killTweensOf(c, !1), punchgs.TweenLite.set(c, {
					scale: 1,
					rotationZ: 0
				}), punchgs.TweenLite.killTweensOf(c.data("kenburn img"), !1), c.data("kenburn") != b && c.data("kenburn").pause(), c.data("currotate") != b && c.data("bgposition") != b && c.data("curscale") != b && punchgs.TweenLite.set(c, {
					rotation: c.data("currotate"),
					backgroundPosition: c.data("bgposition"),
					backgroundSize: c.data("curscale")
				}), c != b && c.data("kenburn img") != b && c.data("kenburn img").length > 0 && punchgs.TweenLite.set(c.data("kenburn img"), {
					autoAlpha: 0
				})
			})
		}, ab = function(b, c) {
			return W() && "on" == c.parallaxDisableOnMobile ? !1 : (b.find(">ul:first-child >li").each(function() {
				for (var b = a(this), d = 1; 10 >= d; d++) b.find(".rs-parallaxlevel-" + d).each(function() {
					var b = a(this);
					b.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + b.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + c.parallaxLevels[d - 1] + '"></div>')
				})
			}), ("mouse" == c.parallax || "scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax) && (b.mouseenter(function(a) {
				var c = b.find(".current-sr-slide-visible"),
					d = b.offset().top,
					e = b.offset().left,
					f = a.pageX - e,
					g = a.pageY - d;
				c.data("enterx", f), c.data("entery", g)
			}), b.on("mousemove.hoverdir, mouseleave.hoverdir", function(d) {
				var e = b.find(".current-sr-slide-visible");
				switch (d.type) {
					case "mousemove":
						var f = b.offset().top,
							g = b.offset().left,
							h = e.data("enterx"),
							i = e.data("entery"),
							j = h - (d.pageX - g),
							k = i - (d.pageY - f);
						e.find(".tp-parallax-container").each(function() {
							var b = a(this),
								d = parseInt(b.data("parallaxlevel"), 0) / 100,
								e = j * d,
								f = k * d;
							"scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax ? punchgs.TweenLite.to(b, .4, {
								force3D: "auto",
								x: e,
								ease: punchgs.Power3.easeOut,
								overwrite: "all"
							}) : punchgs.TweenLite.to(b, .4, {
								force3D: "auto",
								x: e,
								y: f,
								ease: punchgs.Power3.easeOut,
								overwrite: "all"
							})
						});
						break;
					case "mouseleave":
						e.find(".tp-parallax-container").each(function() {
							var b = a(this);
							"scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax ? punchgs.TweenLite.to(b, 1.5, {
								force3D: "auto",
								x: 0,
								ease: punchgs.Power3.easeOut
							}) : punchgs.TweenLite.to(b, 1.5, {
								force3D: "auto",
								x: 0,
								y: 0,
								ease: punchgs.Power3.easeOut
							})
						})
				}
			}), W() && (window.ondeviceorientation = function(c) {
				var d = Math.round(c.beta || 0),
					e = Math.round(c.gamma || 0),
					f = b.find(".current-sr-slide-visible");
				if (a(window).width() > a(window).height()) {
					var g = e;
					e = d, d = g
				}
				var h = 360 / b.width() * e,
					i = 180 / b.height() * d;
				f.find(".tp-parallax-container").each(function() {
					var b = a(this),
						c = parseInt(b.data("parallaxlevel"), 0) / 100,
						d = h * c,
						e = i * c;
					punchgs.TweenLite.to(b, .2, {
						force3D: "auto",
						x: d,
						y: e,
						ease: punchgs.Power3.easeOut
					})
				})
			})), ("scroll" == c.parallax || "scroll+mouse" == c.parallax || "mouse+scroll" == c.parallax) && a(window).on("scroll", function() {
				bb(b, c)
			}), void 0)
		}, bb = function(b, c) {
			if (W() && "on" == c.parallaxDisableOnMobile) return !1;
			var d = b.offset().top,
				e = a(window).scrollTop(),
				f = d + b.height() / 2,
				g = d + b.height() / 2 - e,
				h = a(window).height() / 2,
				i = h - g;
			if (h > f && (i -= h - f), b.find(".current-sr-slide-visible"), b.find(".tp-parallax-container").each(function() {
				var c = a(this),
					d = parseInt(c.data("parallaxlevel"), 0) / 100,
					e = i * d;
				c.data("parallaxoffset", e), punchgs.TweenLite.to(c, .2, {
					force3D: "auto",
					y: e,
					ease: punchgs.Power3.easeOut
				})
			}), "on" != c.parallaxBgFreeze) {
				var k = c.parallaxLevels[0] / 100,
					l = i * k;
				punchgs.TweenLite.to(b, .2, {
					force3D: "auto",
					y: l,
					ease: punchgs.Power3.easeOut
				})
			}
		}, cb = function(c, d) {
			var e = c.parent();
			("thumb" == d.navigationType || "both" == d.navsecond) && e.append('<div class="tp-bullets tp-thumbs ' + d.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
			var f = e.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
				g = f.parent();
			g.width(d.thumbWidth * d.thumbAmount), g.height(d.thumbHeight), g.parent().width(d.thumbWidth * d.thumbAmount), g.parent().height(d.thumbHeight), c.find(">ul:first >li").each(function(a) {
				var e = c.find(">ul:first >li:eq(" + a + ")"),
					g = e.find(".defaultimg").css("backgroundColor");
				if (e.data("thumb") != b) var h = e.data("thumb");
				else var h = e.find("img:first").attr("src");
				f.append('<div class="bullet thumb" style="background-color:' + g + ";position:relative;width:" + d.thumbWidth + "px;height:" + d.thumbHeight + "px;background-image:url(" + h + ') !important;background-size:cover;background-position:center center;"></div>'), f.find(".bullet:first")
			});
			var h = 10;
			f.find(".bullet").each(function(b) {
				var e = a(this);
				b == d.slideamount - 1 && e.addClass("last"), 0 == b && e.addClass("first"), e.width(d.thumbWidth), e.height(d.thumbHeight), h < e.outerWidth(!0) && (h = e.outerWidth(!0)), e.click(function() {
					0 == d.transition && e.index() != d.act && (d.next = e.index(), j(d, c))
				})
			});
			var i = h * c.find(">ul:first >li").length,
				k = f.parent().width();
			d.thumbWidth = h, i > k && (a(document).mousemove(function(b) {
				a("body").data("mousex", b.pageX)
			}), f.parent().mouseenter(function() {
				var b = a(this),
					d = b.offset(),
					e = a("body").data("mousex") - d.left,
					f = b.width(),
					g = b.find(".bullet:first").outerWidth(!0),
					h = g * c.find(">ul:first >li").length,
					i = h - f + 15,
					j = i / f;
				b.addClass("over"), e -= 30;
				var k = 0 - e * j;
				k > 0 && (k = 0), 0 - h + f > k && (k = 0 - h + f), eb(b, k, 200)
			}), f.parent().mousemove(function() {
				var b = a(this),
					d = b.offset(),
					e = a("body").data("mousex") - d.left,
					f = b.width(),
					g = b.find(".bullet:first").outerWidth(!0),
					h = g * c.find(">ul:first >li").length - 1,
					i = h - f + 15,
					j = i / f;
				e -= 3, 6 > e && (e = 0), e + 3 > f - 6 && (e = f);
				var k = 0 - e * j;
				k > 0 && (k = 0), 0 - h + f > k && (k = 0 - h + f), eb(b, k, 0)
			}), f.parent().mouseleave(function() {
				var b = a(this);
				b.removeClass("over"), db(c)
			}))
		}, db = function(a) {
			var b = a.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
				c = b.parent(),
				e = (c.offset(), c.find(".bullet:first").outerWidth(!0)),
				f = c.find(".bullet.selected").index() * e,
				g = c.width(),
				e = c.find(".bullet:first").outerWidth(!0),
				h = e * a.find(">ul:first >li").length,
				k = 0 - f;
			k > 0 && (k = 0), 0 - h + g > k && (k = 0 - h + g), c.hasClass("over") || eb(c, k, 200)
		}, eb = function(a, b) {
			punchgs.TweenLite.to(a.find(".tp-thumbcontainer"), .2, {
				force3D: "auto",
				left: b,
				ease: punchgs.Power3.easeOut,
				overwrite: "auto"
			})
		}
}(jQuery);;

function dtNode(e, g, b, c, j, h, a) {
	this.id = e;
	this.pid = g;
	this.name = b;
	this.url = c;
	this.title = j;
	this.rsspath = a;
	var i, d, f;
	this.target = h;
	this.icon = i;
	this.iconOpen = d;
	this._io = f || false;
	this._is = false;
	this._ls = false;
	this._hc = false;
	this._ai = 0;
	this._p
}

function wpdTree(c, b, a) {
	this.config = {
		target: null,
		folderLinks: false,
		useSelection: false,
		useCookies: true,
		useLines: true,
		useIcons: false,
		useStatusText: false,
		closeSameLevel: false,
		inOrder: false
	};
	this.icon = {
		root: WPdTreeSettings.imgurl + "dtree-img/empty.gif",
		folder: WPdTreeSettings.imgurl + "dtree-img/folder.gif",
		folderOpen: WPdTreeSettings.imgurl + "dtree-img/folderopen.gif",
		node: WPdTreeSettings.imgurl + "dtree-img/page.gif",
		empty: WPdTreeSettings.imgurl + "dtree-img/empty.gif",
		line: WPdTreeSettings.imgurl + "dtree-img/line.gif",
		join: WPdTreeSettings.imgurl + "dtree-img/join.gif",
		joinBottom: WPdTreeSettings.imgurl + "dtree-img/joinbottom.gif",
		plus: WPdTreeSettings.imgurl + "dtree-img/plus.gif",
		plusBottom: WPdTreeSettings.imgurl + "dtree-img/plusbottom.gif",
		minus: WPdTreeSettings.imgurl + "dtree-img/minus.gif",
		minusBottom: WPdTreeSettings.imgurl + "dtree-img/minusbottom.gif",
		nlPlus: WPdTreeSettings.imgurl + "dtree-img/nolines_plus.gif",
		nlMinus: WPdTreeSettings.imgurl + "dtree-img/nolines_minus.gif"
	};
	this._url = b;
	this._truncate = a;
	this._objName = c;
	this.adtNodes = [];
	this.aIndent = [];
	this.root = new dtNode("root");
	this.selecteddtNode = null;
	this.selectedFound = false;
	this.completed = false
}
wpdTree.prototype.a = function(h, b, d, g, f, a, e) {
	if (e != "") {
		e = "<a class='dtree-rss' href='" + this._url + e + "' title='Feed for " + d + "'></a>"
	}
	f += "";
	var c = f;
	if (!f.indexOf("http://") == 0) {
		c = this._url + f
	}
	if (!g) {
		g = d
	}
	if (this._truncate > 0) {
		d = this.truncate(d, this._truncate)
	}
	this.adtNodes[this.adtNodes.length] = new dtNode(h, b, d, c, g, a, e)
};
wpdTree.prototype.truncate = function(c, b) {
	var b = b || 16;
	var a = "...";
	if (c.length > b) {
		return c.slice(0, b - a.length) + a
	}
	return c
};
wpdTree.prototype.openAll = function() {
	this.oAll(true)
};
wpdTree.prototype.closeAll = function() {
	this.oAll(false)
};
wpdTree.prototype.toString = function() {
	var a = this._objName.substr(0, 3);
	var b = '<div class="dtree_' + a + '" id="dtree_' + this._objName + '">\n';
	if (document.getElementById) {
		if (this.config.useCookies) {
			this.selecteddtNode = this.getSelected()
		}
		b += this.adddtNode(this.root)
	} else {
		b += "Browser not supported."
	}
	b += "</div>";
	if (!this.selectedFound) {
		this.selecteddtNode = null
	}
	this.completed = true;
	return b
};
wpdTree.prototype.adddtNode = function(a) {
	var b = "";
	var d = 0;
	if (this.config.inOrder) {
		d = a._ai
	}
	for (d; d < this.adtNodes.length; d++) {
		if (this.adtNodes[d].pid == a.id) {
			var c = this.adtNodes[d];
			c._p = a;
			c._ai = d;
			this.setCS(c);
			if (!c.target && this.config.target) {
				c.target = this.config.target
			}
			if (c._hc && !c._io && this.config.useCookies) {
				c._io = this.isOpen(c.id)
			}
			if (!this.config.folderLinks && c._hc) {
				c.url = null
			}
			if (this.config.useSelection && c.id == this.selecteddtNode && !this.selectedFound) {
				c._is = true;
				this.selecteddtNode = d;
				this.selectedFound = true
			}
			b += this.node(c, d);
			if (c._ls) {
				break
			}
		}
	}
	return b
};
wpdTree.prototype.node = function(a, c) {
	var b = '<div class="dtNode">' + this.indent(a, c);
	if (this.config.useIcons) {
		if (!a.icon) {
			a.icon = (this.root.id == a.pid) ? this.icon.root : ((a._hc) ? this.icon.folder : this.icon.node)
		}
		if (!a.iconOpen) {
			a.iconOpen = (a._hc) ? this.icon.folderOpen : this.icon.node
		}
		if (this.root.id != a.pid) {
			b += '<img id="i' + this._objName + c + '" src="' + ((a._io) ? a.iconOpen : a.icon) + '" alt="" />'
		}
	}
	if (this.root.id != a.pid) {
		if (a.url) {
			b += '<a id="s' + this._objName + c + '" class="' + ((this.config.useSelection) ? ((a._is ? "nodeSel" : "node")) : "node") + '" href="' + a.url + '"';
			if (a.title) {
				b += ' title="' + a.title + '"'
			}
			if (a.target) {
				b += ' target="' + a.target + '"'
			}
			if (this.config.useStatusText) {
				b += " onmouseover=\"window.status='" + a.name + "';return true;\" onmouseout=\"window.status='';return true;\" "
			}
			if (this.config.useSelection && ((a._hc && this.config.folderLinks) || !a._hc)) {
				b += ' onclick="javascript: ' + this._objName + ".s(" + c + ');"'
			}
			b += ">"
		} else {
			if ((!this.config.folderLinks || !a.url) && a._hc && a.pid != this.root.id) {
				b += '<a href="javascript: ' + this._objName + ".o(" + c + ');"';
				if (true || a.title) {
					b += ' title="' + a.title + '"'
				}
				b += ' class="node">'
			}
		}
		b += a.name;
		if (a.url || ((!this.config.folderLinks || !a.url) && a._hc)) {
			b += "</a>"
		}
	}
	if (a.rsspath) {
		b += a.rsspath
	}
	b += " </div>";
	if (a._hc) {
		b += '<div id="d' + this._objName + c + '" class="clip" style="display:' + ((this.root.id == a.pid || a._io) ? "block" : "none") + ';">';
		b += this.adddtNode(a);
		b += "</div>"
	}
	this.aIndent.pop();
	return b
};
wpdTree.prototype.indent = function(a, c) {
	var b = "";
	if (this.root.id != a.pid) {
		for (var d = 0; d < this.aIndent.length; d++) {
			b += '<img src="' + ((this.aIndent[d] == 1 && this.config.useLines) ? this.icon.line : this.icon.empty) + '" alt="" />'
		}(a._ls) ? this.aIndent.push(0) : this.aIndent.push(1);
		if (a._hc) {
			b += '<a href="javascript: ' + this._objName + ".o(" + c + ');"><img id="j' + this._objName + c + '" src="';
			if (!this.config.useLines) {
				b += (a._io) ? this.icon.nlMinus : this.icon.nlPlus
			} else {
				b += ((a._io) ? ((a._ls && this.config.useLines) ? this.icon.minusBottom : this.icon.minus) : ((a._ls && this.config.useLines) ? this.icon.plusBottom : this.icon.plus))
			}
			b += '" alt="" /></a>'
		} else {
			b += '<img src="' + ((this.config.useLines) ? ((a._ls) ? this.icon.joinBottom : this.icon.join) : this.icon.empty) + '" alt="" />'
		}
	}
	return b
};
wpdTree.prototype.setCS = function(a) {
	var b;
	for (var c = 0; c < this.adtNodes.length; c++) {
		if (this.adtNodes[c].pid == a.id) {
			a._hc = true
		}
		if (this.adtNodes[c].pid == a.pid) {
			b = this.adtNodes[c].id
		}
	}
	if (b == a.id) {
		a._ls = true
	}
};
wpdTree.prototype.getSelected = function() {
	var a = this.getCookie("cs" + this._objName);
	return (a) ? a : null
};
wpdTree.prototype.s = function(b) {
	if (!this.config.useSelection) {
		return
	}
	var a = this.adtNodes[b];
	if (a._hc && !this.config.folderLinks) {
		return
	}
	if (this.selecteddtNode != b) {
		if (this.selecteddtNode || this.selecteddtNode == 0) {
			eOld = document.getElementById("s" + this._objName + this.selecteddtNode);
			if (eOld) {
				eOld.className = "node"
			}
		}
		eNew = document.getElementById("s" + this._objName + b);
		if (eNew) {
			eNew.className = "nodeSel"
		}
		this.selecteddtNode = b;
		if (this.config.useCookies) {
			this.setCookie("cs" + this._objName, a.id)
		}
	}
};
wpdTree.prototype.o = function(b) {
	var a = this.adtNodes[b];
	this.nodeStatus(!a._io, b, a._ls);
	a._io = !a._io;
	if (this.config.closeSameLevel) {
		this.closeLevel(a)
	}
	if (this.config.useCookies) {
		this.updateCookie()
	}
};
wpdTree.prototype.oAll = function(a) {
	for (var b = 0; b < this.adtNodes.length; b++) {
		if (this.adtNodes[b]._hc && this.adtNodes[b].pid != this.root.id) {
			if (this.adtNodes[b]._io != a) {
				this.nodeStatus(a, b, this.adtNodes[b]._ls)
			}
			this.adtNodes[b]._io = a
		}
	}
	if (this.config.useCookies) {
		this.updateCookie()
	}
};
wpdTree.prototype.openTo = function(b, a, c) {
	if (!c) {
		for (var e = 0; e < this.adtNodes.length; e++) {
			if (this.adtNodes[e].id == b) {
				b = e;
				break
			}
		}
	}
	var d = this.adtNodes[b];
	if (d.pid == this.root.id || !d._p) {
		return
	}
	d._io = true;
	d._is = a;
	if (this.completed && d._hc) {
		this.nodeStatus(true, d._ai, d._ls)
	}
	if (this.completed && a) {
		this.s(d._ai)
	} else {
		if (a) {
			this._sn = d._ai
		}
	}
	this.openTo(d._p._ai, false, true)
};
wpdTree.prototype.closeLevel = function(a) {
	for (var b = 0; b < this.adtNodes.length; b++) {
		if (this.adtNodes[b].pid == a.pid && this.adtNodes[b].id != a.id && this.adtNodes[b]._hc) {
			this.nodeStatus(false, b, this.adtNodes[b]._ls);
			this.adtNodes[b]._io = false;
			this.closeAllChildren(this.adtNodes[b])
		}
	}
};
wpdTree.prototype.closeAllChildren = function(a) {
	for (var b = 0; b < this.adtNodes.length; b++) {
		if (this.adtNodes[b].pid == a.id && this.adtNodes[b]._hc) {
			if (this.adtNodes[b]._io) {
				this.nodeStatus(false, b, this.adtNodes[b]._ls)
			}
			this.adtNodes[b]._io = false;
			this.closeAllChildren(this.adtNodes[b])
		}
	}
};
wpdTree.prototype.nodeStatus = function(a, c, b) {
	eDiv = document.getElementById("d" + this._objName + c);
	eJoin = document.getElementById("j" + this._objName + c);
	if (this.config.useIcons) {
		eIcon = document.getElementById("i" + this._objName + c);
		eIcon.src = (a) ? this.adtNodes[c].iconOpen : this.adtNodes[c].icon
	}
	eJoin.src = (this.config.useLines) ? ((a) ? ((b) ? this.icon.minusBottom : this.icon.minus) : ((b) ? this.icon.plusBottom : this.icon.plus)) : ((a) ? this.icon.nlMinus : this.icon.nlPlus);
	if (WPdTreeSettings.animate === "1" && typeof jQuery == "function") {
		(a) ? jQuery(eDiv).slideDown(parseInt(WPdTreeSettings.duration)) : jQuery(eDiv).slideUp(parseInt(WPdTreeSettings.duration))
	} else {
		eDiv.style.display = (a) ? "block" : "none"
	}
};
wpdTree.prototype.clearCookie = function() {
	var a = new Date();
	var b = new Date(a.getTime() - 1000 * 60 * 60 * 24);
	this.setCookie("co" + this._objName, "cookieValue", b);
	this.setCookie("cs" + this._objName, "cookieValue", b)
};
wpdTree.prototype.setCookie = function(f, e, a, d, b, c) {
	document.cookie = escape(f) + "=" + escape(e) + (a ? "; expires=" + a.toGMTString() : "") + (d ? "; path=" + d : "; path=/") + (b ? "; domain=" + b : "") + (c ? "; secure" : "")
};
wpdTree.prototype.getCookie = function(e) {
	var d = "";
	var b = document.cookie.indexOf(escape(e) + "=");
	if (b != -1) {
		var c = b + (escape(e) + "=").length;
		var a = document.cookie.indexOf(";", c);
		if (a != -1) {
			d = unescape(document.cookie.substring(c, a))
		} else {
			d = unescape(document.cookie.substring(c))
		}
	}
	return (d)
};
wpdTree.prototype.updateCookie = function() {
	var a = "";
	for (var b = 0; b < this.adtNodes.length; b++) {
		if (this.adtNodes[b]._io && this.adtNodes[b].pid != this.root.id) {
			if (a) {
				a += "."
			}
			a += this.adtNodes[b].id
		}
	}
	this.setCookie("co" + this._objName, a)
};
wpdTree.prototype.isOpen = function(c) {
	var b = this.getCookie("co" + this._objName).split(".");
	for (var a = 0; a < b.length; a++) {
		if (b[a] == c) {
			return true
		}
	}
	return false
};
if (!Array.prototype.push) {
	Array.prototype.push = function array_push() {
		for (var a = 0; a < arguments.length; a++) {
			this[this.length] = arguments[a]
		}
		return this.length
	}
}
if (!Array.prototype.pop) {
	Array.prototype.pop = function array_pop() {
		lastElement = this[this.length - 1];
		this.length = Math.max(this.length - 1, 0);
		return lastElement
	}
};