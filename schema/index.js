var H, Tt;
function nr() {
  if (Tt) return H;
  Tt = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return H = e, H;
}
var J, gt;
function wn() {
  if (gt) return J;
  gt = 1;
  function e(a, t) {
    return a === t || a !== a && t !== t;
  }
  return J = e, J;
}
var $, Ct;
function z() {
  if (Ct) return $;
  Ct = 1;
  var e = wn();
  function a(t, o) {
    for (var n = t.length; n--; )
      if (e(t[n][0], o))
        return n;
    return -1;
  }
  return $ = a, $;
}
var X, Nt;
function rr() {
  if (Nt) return X;
  Nt = 1;
  var e = z(), a = Array.prototype, t = a.splice;
  function o(n) {
    var r = this.__data__, l = e(r, n);
    if (l < 0)
      return !1;
    var p = r.length - 1;
    return l == p ? r.pop() : t.call(r, l, 1), --this.size, !0;
  }
  return X = o, X;
}
var Y, Ot;
function lr() {
  if (Ot) return Y;
  Ot = 1;
  var e = z();
  function a(t) {
    var o = this.__data__, n = e(o, t);
    return n < 0 ? void 0 : o[n][1];
  }
  return Y = a, Y;
}
var Z, bt;
function pr() {
  if (bt) return Z;
  bt = 1;
  var e = z();
  function a(t) {
    return e(this.__data__, t) > -1;
  }
  return Z = a, Z;
}
var Q, ht;
function sr() {
  if (ht) return Q;
  ht = 1;
  var e = z();
  function a(t, o) {
    var n = this.__data__, r = e(n, t);
    return r < 0 ? (++this.size, n.push([t, o])) : n[r][1] = o, this;
  }
  return Q = a, Q;
}
var ee, jt;
function _() {
  if (jt) return ee;
  jt = 1;
  var e = nr(), a = rr(), t = lr(), o = pr(), n = sr();
  function r(l) {
    var p = -1, s = l == null ? 0 : l.length;
    for (this.clear(); ++p < s; ) {
      var y = l[p];
      this.set(y[0], y[1]);
    }
  }
  return r.prototype.clear = e, r.prototype.delete = a, r.prototype.get = t, r.prototype.has = o, r.prototype.set = n, ee = r, ee;
}
var ae, Bt;
function yr() {
  if (Bt) return ae;
  Bt = 1;
  var e = _();
  function a() {
    this.__data__ = new e(), this.size = 0;
  }
  return ae = a, ae;
}
var te, It;
function ir() {
  if (It) return te;
  It = 1;
  function e(a) {
    var t = this.__data__, o = t.delete(a);
    return this.size = t.size, o;
  }
  return te = e, te;
}
var oe, Rt;
function dr() {
  if (Rt) return oe;
  Rt = 1;
  function e(a) {
    return this.__data__.get(a);
  }
  return oe = e, oe;
}
var ne, Mt;
function cr() {
  if (Mt) return ne;
  Mt = 1;
  function e(a) {
    return this.__data__.has(a);
  }
  return ne = e, ne;
}
var re, Ut;
function zn() {
  if (Ut) return re;
  Ut = 1;
  var e = typeof window == "object" && window && window.Object === Object && window;
  return re = e, re;
}
var le, kt;
function K() {
  if (kt) return le;
  kt = 1;
  var e = zn(), a = typeof self == "object" && self && self.Object === Object && self, t = e || a || Function("return this")();
  return le = t, le;
}
var pe, Kt;
function V() {
  if (Kt) return pe;
  Kt = 1;
  var e = K(), a = e.Symbol;
  return pe = a, pe;
}
var se, Pt;
function mr() {
  if (Pt) return se;
  Pt = 1;
  var e = V(), a = Object.prototype, t = a.hasOwnProperty, o = a.toString, n = e ? e.toStringTag : void 0;
  function r(l) {
    var p = t.call(l, n), s = l[n];
    try {
      l[n] = void 0;
      var y = !0;
    } catch {
    }
    var d = o.call(l);
    return y && (p ? l[n] = s : delete l[n]), d;
  }
  return se = r, se;
}
var ye, At;
function ur() {
  if (At) return ye;
  At = 1;
  var e = Object.prototype, a = e.toString;
  function t(o) {
    return a.call(o);
  }
  return ye = t, ye;
}
var ie, xt;
function D() {
  if (xt) return ie;
  xt = 1;
  var e = V(), a = mr(), t = ur(), o = "[object Null]", n = "[object Undefined]", r = e ? e.toStringTag : void 0;
  function l(p) {
    return p == null ? p === void 0 ? n : o : r && r in Object(p) ? a(p) : t(p);
  }
  return ie = l, ie;
}
var de, Ft;
function G() {
  if (Ft) return de;
  Ft = 1;
  function e(a) {
    var t = typeof a;
    return a != null && (t == "object" || t == "function");
  }
  return de = e, de;
}
var ce, Dt;
function _n() {
  if (Dt) return ce;
  Dt = 1;
  var e = D(), a = G(), t = "[object AsyncFunction]", o = "[object Function]", n = "[object GeneratorFunction]", r = "[object Proxy]";
  function l(p) {
    if (!a(p))
      return !1;
    var s = e(p);
    return s == o || s == n || s == t || s == r;
  }
  return ce = l, ce;
}
var me, vt;
function fr() {
  if (vt) return me;
  vt = 1;
  var e = K(), a = e["__core-js_shared__"];
  return me = a, me;
}
var ue, wt;
function Tr() {
  if (wt) return ue;
  wt = 1;
  var e = fr(), a = function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }();
  function t(o) {
    return !!a && a in o;
  }
  return ue = t, ue;
}
var fe, zt;
function Vn() {
  if (zt) return fe;
  zt = 1;
  var e = Function.prototype, a = e.toString;
  function t(o) {
    if (o != null) {
      try {
        return a.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  return fe = t, fe;
}
var Te, _t;
function gr() {
  if (_t) return Te;
  _t = 1;
  var e = _n(), a = Tr(), t = G(), o = Vn(), n = /[\\^$.*+?()[\]{}|]/g, r = /^\[object .+?Constructor\]$/, l = Function.prototype, p = Object.prototype, s = l.toString, y = p.hasOwnProperty, d = RegExp(
    "^" + s.call(y).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function i(c) {
    if (!t(c) || a(c))
      return !1;
    var m = e(c) ? d : r;
    return m.test(o(c));
  }
  return Te = i, Te;
}
var ge, Vt;
function Cr() {
  if (Vt) return ge;
  Vt = 1;
  function e(a, t) {
    return a == null ? void 0 : a[t];
  }
  return ge = e, ge;
}
var Ce, Gt;
function A() {
  if (Gt) return Ce;
  Gt = 1;
  var e = gr(), a = Cr();
  function t(o, n) {
    var r = a(o, n);
    return e(r) ? r : void 0;
  }
  return Ce = t, Ce;
}
var Ne, Wt;
function dt() {
  if (Wt) return Ne;
  Wt = 1;
  var e = A(), a = K(), t = e(a, "Map");
  return Ne = t, Ne;
}
var Oe, Et;
function W() {
  if (Et) return Oe;
  Et = 1;
  var e = A(), a = e(Object, "create");
  return Oe = a, Oe;
}
var be, qt;
function Nr() {
  if (qt) return be;
  qt = 1;
  var e = W();
  function a() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return be = a, be;
}
var he, St;
function Or() {
  if (St) return he;
  St = 1;
  function e(a) {
    var t = this.has(a) && delete this.__data__[a];
    return this.size -= t ? 1 : 0, t;
  }
  return he = e, he;
}
var je, Lt;
function br() {
  if (Lt) return je;
  Lt = 1;
  var e = W(), a = "__lodash_hash_undefined__", t = Object.prototype, o = t.hasOwnProperty;
  function n(r) {
    var l = this.__data__;
    if (e) {
      var p = l[r];
      return p === a ? void 0 : p;
    }
    return o.call(l, r) ? l[r] : void 0;
  }
  return je = n, je;
}
var Be, Ht;
function hr() {
  if (Ht) return Be;
  Ht = 1;
  var e = W(), a = Object.prototype, t = a.hasOwnProperty;
  function o(n) {
    var r = this.__data__;
    return e ? r[n] !== void 0 : t.call(r, n);
  }
  return Be = o, Be;
}
var Ie, Jt;
function jr() {
  if (Jt) return Ie;
  Jt = 1;
  var e = W(), a = "__lodash_hash_undefined__";
  function t(o, n) {
    var r = this.__data__;
    return this.size += this.has(o) ? 0 : 1, r[o] = e && n === void 0 ? a : n, this;
  }
  return Ie = t, Ie;
}
var Re, $t;
function Br() {
  if ($t) return Re;
  $t = 1;
  var e = Nr(), a = Or(), t = br(), o = hr(), n = jr();
  function r(l) {
    var p = -1, s = l == null ? 0 : l.length;
    for (this.clear(); ++p < s; ) {
      var y = l[p];
      this.set(y[0], y[1]);
    }
  }
  return r.prototype.clear = e, r.prototype.delete = a, r.prototype.get = t, r.prototype.has = o, r.prototype.set = n, Re = r, Re;
}
var Me, Xt;
function Ir() {
  if (Xt) return Me;
  Xt = 1;
  var e = Br(), a = _(), t = dt();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || a)(),
      string: new e()
    };
  }
  return Me = o, Me;
}
var Ue, Yt;
function Rr() {
  if (Yt) return Ue;
  Yt = 1;
  function e(a) {
    var t = typeof a;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? a !== "__proto__" : a === null;
  }
  return Ue = e, Ue;
}
var ke, Zt;
function E() {
  if (Zt) return ke;
  Zt = 1;
  var e = Rr();
  function a(t, o) {
    var n = t.__data__;
    return e(o) ? n[typeof o == "string" ? "string" : "hash"] : n.map;
  }
  return ke = a, ke;
}
var Ke, Qt;
function Mr() {
  if (Qt) return Ke;
  Qt = 1;
  var e = E();
  function a(t) {
    var o = e(this, t).delete(t);
    return this.size -= o ? 1 : 0, o;
  }
  return Ke = a, Ke;
}
var Pe, eo;
function Ur() {
  if (eo) return Pe;
  eo = 1;
  var e = E();
  function a(t) {
    return e(this, t).get(t);
  }
  return Pe = a, Pe;
}
var Ae, ao;
function kr() {
  if (ao) return Ae;
  ao = 1;
  var e = E();
  function a(t) {
    return e(this, t).has(t);
  }
  return Ae = a, Ae;
}
var xe, to;
function Kr() {
  if (to) return xe;
  to = 1;
  var e = E();
  function a(t, o) {
    var n = e(this, t), r = n.size;
    return n.set(t, o), this.size += n.size == r ? 0 : 1, this;
  }
  return xe = a, xe;
}
var Fe, oo;
function ct() {
  if (oo) return Fe;
  oo = 1;
  var e = Ir(), a = Mr(), t = Ur(), o = kr(), n = Kr();
  function r(l) {
    var p = -1, s = l == null ? 0 : l.length;
    for (this.clear(); ++p < s; ) {
      var y = l[p];
      this.set(y[0], y[1]);
    }
  }
  return r.prototype.clear = e, r.prototype.delete = a, r.prototype.get = t, r.prototype.has = o, r.prototype.set = n, Fe = r, Fe;
}
var De, no;
function Pr() {
  if (no) return De;
  no = 1;
  var e = _(), a = dt(), t = ct(), o = 200;
  function n(r, l) {
    var p = this.__data__;
    if (p instanceof e) {
      var s = p.__data__;
      if (!a || s.length < o - 1)
        return s.push([r, l]), this.size = ++p.size, this;
      p = this.__data__ = new t(s);
    }
    return p.set(r, l), this.size = p.size, this;
  }
  return De = n, De;
}
var ve, ro;
function Gn() {
  if (ro) return ve;
  ro = 1;
  var e = _(), a = yr(), t = ir(), o = dr(), n = cr(), r = Pr();
  function l(p) {
    var s = this.__data__ = new e(p);
    this.size = s.size;
  }
  return l.prototype.clear = a, l.prototype.delete = t, l.prototype.get = o, l.prototype.has = n, l.prototype.set = r, ve = l, ve;
}
var we, lo;
function Ar() {
  if (lo) return we;
  lo = 1;
  var e = "__lodash_hash_undefined__";
  function a(t) {
    return this.__data__.set(t, e), this;
  }
  return we = a, we;
}
var ze, po;
function xr() {
  if (po) return ze;
  po = 1;
  function e(a) {
    return this.__data__.has(a);
  }
  return ze = e, ze;
}
var _e, so;
function Fr() {
  if (so) return _e;
  so = 1;
  var e = ct(), a = Ar(), t = xr();
  function o(n) {
    var r = -1, l = n == null ? 0 : n.length;
    for (this.__data__ = new e(); ++r < l; )
      this.add(n[r]);
  }
  return o.prototype.add = o.prototype.push = a, o.prototype.has = t, _e = o, _e;
}
var Ve, yo;
function Dr() {
  if (yo) return Ve;
  yo = 1;
  function e(a, t) {
    for (var o = -1, n = a == null ? 0 : a.length; ++o < n; )
      if (t(a[o], o, a))
        return !0;
    return !1;
  }
  return Ve = e, Ve;
}
var Ge, io;
function vr() {
  if (io) return Ge;
  io = 1;
  function e(a, t) {
    return a.has(t);
  }
  return Ge = e, Ge;
}
var We, co;
function Wn() {
  if (co) return We;
  co = 1;
  var e = Fr(), a = Dr(), t = vr(), o = 1, n = 2;
  function r(l, p, s, y, d, i) {
    var c = s & o, m = l.length, h = p.length;
    if (m != h && !(c && h > m))
      return !1;
    var b = i.get(l), O = i.get(p);
    if (b && O)
      return b == p && O == l;
    var g = -1, u = !0, j = s & n ? new e() : void 0;
    for (i.set(l, p), i.set(p, l); ++g < m; ) {
      var C = l[g], B = p[g];
      if (y)
        var N = c ? y(B, C, g, p, l, i) : y(C, B, g, l, p, i);
      if (N !== void 0) {
        if (N)
          continue;
        u = !1;
        break;
      }
      if (j) {
        if (!a(p, function(f, I) {
          if (!t(j, I) && (C === f || d(C, f, s, y, i)))
            return j.push(I);
        })) {
          u = !1;
          break;
        }
      } else if (!(C === B || d(C, B, s, y, i))) {
        u = !1;
        break;
      }
    }
    return i.delete(l), i.delete(p), u;
  }
  return We = r, We;
}
var Ee, mo;
function wr() {
  if (mo) return Ee;
  mo = 1;
  var e = K(), a = e.Uint8Array;
  return Ee = a, Ee;
}
var qe, uo;
function zr() {
  if (uo) return qe;
  uo = 1;
  function e(a) {
    var t = -1, o = Array(a.size);
    return a.forEach(function(n, r) {
      o[++t] = [r, n];
    }), o;
  }
  return qe = e, qe;
}
var Se, fo;
function _r() {
  if (fo) return Se;
  fo = 1;
  function e(a) {
    var t = -1, o = Array(a.size);
    return a.forEach(function(n) {
      o[++t] = n;
    }), o;
  }
  return Se = e, Se;
}
var Le, To;
function Vr() {
  if (To) return Le;
  To = 1;
  var e = V(), a = wr(), t = wn(), o = Wn(), n = zr(), r = _r(), l = 1, p = 2, s = "[object Boolean]", y = "[object Date]", d = "[object Error]", i = "[object Map]", c = "[object Number]", m = "[object RegExp]", h = "[object Set]", b = "[object String]", O = "[object Symbol]", g = "[object ArrayBuffer]", u = "[object DataView]", j = e ? e.prototype : void 0, C = j ? j.valueOf : void 0;
  function B(N, f, I, R, U, T, k) {
    switch (I) {
      case u:
        if (N.byteLength != f.byteLength || N.byteOffset != f.byteOffset)
          return !1;
        N = N.buffer, f = f.buffer;
      case g:
        return !(N.byteLength != f.byteLength || !T(new a(N), new a(f)));
      case s:
      case y:
      case c:
        return t(+N, +f);
      case d:
        return N.name == f.name && N.message == f.message;
      case m:
      case b:
        return N == f + "";
      case i:
        var M = n;
      case h:
        var L = R & l;
        if (M || (M = r), N.size != f.size && !L)
          return !1;
        var w = k.get(N);
        if (w)
          return w == f;
        R |= p, k.set(N, f);
        var or = o(M(N), M(f), R, U, T, k);
        return k.delete(N), or;
      case O:
        if (C)
          return C.call(N) == C.call(f);
    }
    return !1;
  }
  return Le = B, Le;
}
var He, go;
function Gr() {
  if (go) return He;
  go = 1;
  function e(a, t) {
    for (var o = -1, n = t.length, r = a.length; ++o < n; )
      a[r + o] = t[o];
    return a;
  }
  return He = e, He;
}
var Je, Co;
function P() {
  if (Co) return Je;
  Co = 1;
  var e = Array.isArray;
  return Je = e, Je;
}
var $e, No;
function Wr() {
  if (No) return $e;
  No = 1;
  var e = Gr(), a = P();
  function t(o, n, r) {
    var l = n(o);
    return a(o) ? l : e(l, r(o));
  }
  return $e = t, $e;
}
var Xe, Oo;
function Er() {
  if (Oo) return Xe;
  Oo = 1;
  function e(a, t) {
    for (var o = -1, n = a == null ? 0 : a.length, r = 0, l = []; ++o < n; ) {
      var p = a[o];
      t(p, o, a) && (l[r++] = p);
    }
    return l;
  }
  return Xe = e, Xe;
}
var Ye, bo;
function qr() {
  if (bo) return Ye;
  bo = 1;
  function e() {
    return [];
  }
  return Ye = e, Ye;
}
var Ze, ho;
function Sr() {
  if (ho) return Ze;
  ho = 1;
  var e = Er(), a = qr(), t = Object.prototype, o = t.propertyIsEnumerable, n = Object.getOwnPropertySymbols, r = n ? function(l) {
    return l == null ? [] : (l = Object(l), e(n(l), function(p) {
      return o.call(l, p);
    }));
  } : a;
  return Ze = r, Ze;
}
var Qe, jo;
function Lr() {
  if (jo) return Qe;
  jo = 1;
  function e(a, t) {
    for (var o = -1, n = Array(a); ++o < a; )
      n[o] = t(o);
    return n;
  }
  return Qe = e, Qe;
}
var ea, Bo;
function v() {
  if (Bo) return ea;
  Bo = 1;
  function e(a) {
    return a != null && typeof a == "object";
  }
  return ea = e, ea;
}
var aa, Io;
function Hr() {
  if (Io) return aa;
  Io = 1;
  var e = D(), a = v(), t = "[object Arguments]";
  function o(n) {
    return a(n) && e(n) == t;
  }
  return aa = o, aa;
}
var ta, Ro;
function En() {
  if (Ro) return ta;
  Ro = 1;
  var e = Hr(), a = v(), t = Object.prototype, o = t.hasOwnProperty, n = t.propertyIsEnumerable, r = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(l) {
    return a(l) && o.call(l, "callee") && !n.call(l, "callee");
  };
  return ta = r, ta;
}
var x = { exports: {} }, oa, Mo;
function Jr() {
  if (Mo) return oa;
  Mo = 1;
  function e() {
    return !1;
  }
  return oa = e, oa;
}
x.exports;
var Uo;
function qn() {
  return Uo || (Uo = 1, function(e, a) {
    var t = K(), o = Jr(), n = a && !a.nodeType && a, r = n && !0 && e && !e.nodeType && e, l = r && r.exports === n, p = l ? t.Buffer : void 0, s = p ? p.isBuffer : void 0, y = s || o;
    e.exports = y;
  }(x, x.exports)), x.exports;
}
var na, ko;
function Sn() {
  if (ko) return na;
  ko = 1;
  var e = 9007199254740991, a = /^(?:0|[1-9]\d*)$/;
  function t(o, n) {
    var r = typeof o;
    return n = n ?? e, !!n && (r == "number" || r != "symbol" && a.test(o)) && o > -1 && o % 1 == 0 && o < n;
  }
  return na = t, na;
}
var ra, Ko;
function mt() {
  if (Ko) return ra;
  Ko = 1;
  var e = 9007199254740991;
  function a(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return ra = a, ra;
}
var la, Po;
function $r() {
  if (Po) return la;
  Po = 1;
  var e = D(), a = mt(), t = v(), o = "[object Arguments]", n = "[object Array]", r = "[object Boolean]", l = "[object Date]", p = "[object Error]", s = "[object Function]", y = "[object Map]", d = "[object Number]", i = "[object Object]", c = "[object RegExp]", m = "[object Set]", h = "[object String]", b = "[object WeakMap]", O = "[object ArrayBuffer]", g = "[object DataView]", u = "[object Float32Array]", j = "[object Float64Array]", C = "[object Int8Array]", B = "[object Int16Array]", N = "[object Int32Array]", f = "[object Uint8Array]", I = "[object Uint8ClampedArray]", R = "[object Uint16Array]", U = "[object Uint32Array]", T = {};
  T[u] = T[j] = T[C] = T[B] = T[N] = T[f] = T[I] = T[R] = T[U] = !0, T[o] = T[n] = T[O] = T[r] = T[g] = T[l] = T[p] = T[s] = T[y] = T[d] = T[i] = T[c] = T[m] = T[h] = T[b] = !1;
  function k(M) {
    return t(M) && a(M.length) && !!T[e(M)];
  }
  return la = k, la;
}
var pa, Ao;
function Xr() {
  if (Ao) return pa;
  Ao = 1;
  function e(a) {
    return function(t) {
      return a(t);
    };
  }
  return pa = e, pa;
}
var F = { exports: {} };
F.exports;
var xo;
function Yr() {
  return xo || (xo = 1, function(e, a) {
    var t = zn(), o = a && !a.nodeType && a, n = o && !0 && e && !e.nodeType && e, r = n && n.exports === o, l = r && t.process, p = function() {
      try {
        var s = n && n.require && n.require("util").types;
        return s || l && l.binding && l.binding("util");
      } catch {
      }
    }();
    e.exports = p;
  }(F, F.exports)), F.exports;
}
var sa, Fo;
function Ln() {
  if (Fo) return sa;
  Fo = 1;
  var e = $r(), a = Xr(), t = Yr(), o = t && t.isTypedArray, n = o ? a(o) : e;
  return sa = n, sa;
}
var ya, Do;
function Zr() {
  if (Do) return ya;
  Do = 1;
  var e = Lr(), a = En(), t = P(), o = qn(), n = Sn(), r = Ln(), l = Object.prototype, p = l.hasOwnProperty;
  function s(y, d) {
    var i = t(y), c = !i && a(y), m = !i && !c && o(y), h = !i && !c && !m && r(y), b = i || c || m || h, O = b ? e(y.length, String) : [], g = O.length;
    for (var u in y)
      (d || p.call(y, u)) && !(b && // Safari 9 has enumerable `arguments.length` in strict mode.
      (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      m && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      h && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
      n(u, g))) && O.push(u);
    return O;
  }
  return ya = s, ya;
}
var ia, vo;
function Qr() {
  if (vo) return ia;
  vo = 1;
  var e = Object.prototype;
  function a(t) {
    var o = t && t.constructor, n = typeof o == "function" && o.prototype || e;
    return t === n;
  }
  return ia = a, ia;
}
var da, wo;
function el() {
  if (wo) return da;
  wo = 1;
  function e(a, t) {
    return function(o) {
      return a(t(o));
    };
  }
  return da = e, da;
}
var ca, zo;
function al() {
  if (zo) return ca;
  zo = 1;
  var e = el(), a = e(Object.keys, Object);
  return ca = a, ca;
}
var ma, _o;
function tl() {
  if (_o) return ma;
  _o = 1;
  var e = Qr(), a = al(), t = Object.prototype, o = t.hasOwnProperty;
  function n(r) {
    if (!e(r))
      return a(r);
    var l = [];
    for (var p in Object(r))
      o.call(r, p) && p != "constructor" && l.push(p);
    return l;
  }
  return ma = n, ma;
}
var ua, Vo;
function Hn() {
  if (Vo) return ua;
  Vo = 1;
  var e = _n(), a = mt();
  function t(o) {
    return o != null && a(o.length) && !e(o);
  }
  return ua = t, ua;
}
var fa, Go;
function ut() {
  if (Go) return fa;
  Go = 1;
  var e = Zr(), a = tl(), t = Hn();
  function o(n) {
    return t(n) ? e(n) : a(n);
  }
  return fa = o, fa;
}
var Ta, Wo;
function ol() {
  if (Wo) return Ta;
  Wo = 1;
  var e = Wr(), a = Sr(), t = ut();
  function o(n) {
    return e(n, t, a);
  }
  return Ta = o, Ta;
}
var ga, Eo;
function nl() {
  if (Eo) return ga;
  Eo = 1;
  var e = ol(), a = 1, t = Object.prototype, o = t.hasOwnProperty;
  function n(r, l, p, s, y, d) {
    var i = p & a, c = e(r), m = c.length, h = e(l), b = h.length;
    if (m != b && !i)
      return !1;
    for (var O = m; O--; ) {
      var g = c[O];
      if (!(i ? g in l : o.call(l, g)))
        return !1;
    }
    var u = d.get(r), j = d.get(l);
    if (u && j)
      return u == l && j == r;
    var C = !0;
    d.set(r, l), d.set(l, r);
    for (var B = i; ++O < m; ) {
      g = c[O];
      var N = r[g], f = l[g];
      if (s)
        var I = i ? s(f, N, g, l, r, d) : s(N, f, g, r, l, d);
      if (!(I === void 0 ? N === f || y(N, f, p, s, d) : I)) {
        C = !1;
        break;
      }
      B || (B = g == "constructor");
    }
    if (C && !B) {
      var R = r.constructor, U = l.constructor;
      R != U && "constructor" in r && "constructor" in l && !(typeof R == "function" && R instanceof R && typeof U == "function" && U instanceof U) && (C = !1);
    }
    return d.delete(r), d.delete(l), C;
  }
  return ga = n, ga;
}
var Ca, qo;
function rl() {
  if (qo) return Ca;
  qo = 1;
  var e = A(), a = K(), t = e(a, "DataView");
  return Ca = t, Ca;
}
var Na, So;
function ll() {
  if (So) return Na;
  So = 1;
  var e = A(), a = K(), t = e(a, "Promise");
  return Na = t, Na;
}
var Oa, Lo;
function pl() {
  if (Lo) return Oa;
  Lo = 1;
  var e = A(), a = K(), t = e(a, "Set");
  return Oa = t, Oa;
}
var ba, Ho;
function sl() {
  if (Ho) return ba;
  Ho = 1;
  var e = A(), a = K(), t = e(a, "WeakMap");
  return ba = t, ba;
}
var ha, Jo;
function yl() {
  if (Jo) return ha;
  Jo = 1;
  var e = rl(), a = dt(), t = ll(), o = pl(), n = sl(), r = D(), l = Vn(), p = "[object Map]", s = "[object Object]", y = "[object Promise]", d = "[object Set]", i = "[object WeakMap]", c = "[object DataView]", m = l(e), h = l(a), b = l(t), O = l(o), g = l(n), u = r;
  return (e && u(new e(new ArrayBuffer(1))) != c || a && u(new a()) != p || t && u(t.resolve()) != y || o && u(new o()) != d || n && u(new n()) != i) && (u = function(j) {
    var C = r(j), B = C == s ? j.constructor : void 0, N = B ? l(B) : "";
    if (N)
      switch (N) {
        case m:
          return c;
        case h:
          return p;
        case b:
          return y;
        case O:
          return d;
        case g:
          return i;
      }
    return C;
  }), ha = u, ha;
}
var ja, $o;
function il() {
  if ($o) return ja;
  $o = 1;
  var e = Gn(), a = Wn(), t = Vr(), o = nl(), n = yl(), r = P(), l = qn(), p = Ln(), s = 1, y = "[object Arguments]", d = "[object Array]", i = "[object Object]", c = Object.prototype, m = c.hasOwnProperty;
  function h(b, O, g, u, j, C) {
    var B = r(b), N = r(O), f = B ? d : n(b), I = N ? d : n(O);
    f = f == y ? i : f, I = I == y ? i : I;
    var R = f == i, U = I == i, T = f == I;
    if (T && l(b)) {
      if (!l(O))
        return !1;
      B = !0, R = !1;
    }
    if (T && !R)
      return C || (C = new e()), B || p(b) ? a(b, O, g, u, j, C) : t(b, O, f, g, u, j, C);
    if (!(g & s)) {
      var k = R && m.call(b, "__wrapped__"), M = U && m.call(O, "__wrapped__");
      if (k || M) {
        var L = k ? b.value() : b, w = M ? O.value() : O;
        return C || (C = new e()), j(L, w, g, u, C);
      }
    }
    return T ? (C || (C = new e()), o(b, O, g, u, j, C)) : !1;
  }
  return ja = h, ja;
}
var Ba, Xo;
function Jn() {
  if (Xo) return Ba;
  Xo = 1;
  var e = il(), a = v();
  function t(o, n, r, l, p) {
    return o === n ? !0 : o == null || n == null || !a(o) && !a(n) ? o !== o && n !== n : e(o, n, r, l, t, p);
  }
  return Ba = t, Ba;
}
var Ia, Yo;
function dl() {
  if (Yo) return Ia;
  Yo = 1;
  var e = Gn(), a = Jn(), t = 1, o = 2;
  function n(r, l, p, s) {
    var y = p.length, d = y, i = !s;
    if (r == null)
      return !d;
    for (r = Object(r); y--; ) {
      var c = p[y];
      if (i && c[2] ? c[1] !== r[c[0]] : !(c[0] in r))
        return !1;
    }
    for (; ++y < d; ) {
      c = p[y];
      var m = c[0], h = r[m], b = c[1];
      if (i && c[2]) {
        if (h === void 0 && !(m in r))
          return !1;
      } else {
        var O = new e();
        if (s)
          var g = s(h, b, m, r, l, O);
        if (!(g === void 0 ? a(b, h, t | o, s, O) : g))
          return !1;
      }
    }
    return !0;
  }
  return Ia = n, Ia;
}
var Ra, Zo;
function $n() {
  if (Zo) return Ra;
  Zo = 1;
  var e = G();
  function a(t) {
    return t === t && !e(t);
  }
  return Ra = a, Ra;
}
var Ma, Qo;
function cl() {
  if (Qo) return Ma;
  Qo = 1;
  var e = $n(), a = ut();
  function t(o) {
    for (var n = a(o), r = n.length; r--; ) {
      var l = n[r], p = o[l];
      n[r] = [l, p, e(p)];
    }
    return n;
  }
  return Ma = t, Ma;
}
var Ua, en;
function Xn() {
  if (en) return Ua;
  en = 1;
  function e(a, t) {
    return function(o) {
      return o == null ? !1 : o[a] === t && (t !== void 0 || a in Object(o));
    };
  }
  return Ua = e, Ua;
}
var ka, an;
function ml() {
  if (an) return ka;
  an = 1;
  var e = dl(), a = cl(), t = Xn();
  function o(n) {
    var r = a(n);
    return r.length == 1 && r[0][2] ? t(r[0][0], r[0][1]) : function(l) {
      return l === n || e(l, n, r);
    };
  }
  return ka = o, ka;
}
var Ka, tn;
function q() {
  if (tn) return Ka;
  tn = 1;
  var e = D(), a = v(), t = "[object Symbol]";
  function o(n) {
    return typeof n == "symbol" || a(n) && e(n) == t;
  }
  return Ka = o, Ka;
}
var Pa, on;
function ft() {
  if (on) return Pa;
  on = 1;
  var e = P(), a = q(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function n(r, l) {
    if (e(r))
      return !1;
    var p = typeof r;
    return p == "number" || p == "symbol" || p == "boolean" || r == null || a(r) ? !0 : o.test(r) || !t.test(r) || l != null && r in Object(l);
  }
  return Pa = n, Pa;
}
var Aa, nn;
function ul() {
  if (nn) return Aa;
  nn = 1;
  var e = ct(), a = "Expected a function";
  function t(o, n) {
    if (typeof o != "function" || n != null && typeof n != "function")
      throw new TypeError(a);
    var r = function() {
      var l = arguments, p = n ? n.apply(this, l) : l[0], s = r.cache;
      if (s.has(p))
        return s.get(p);
      var y = o.apply(this, l);
      return r.cache = s.set(p, y) || s, y;
    };
    return r.cache = new (t.Cache || e)(), r;
  }
  return t.Cache = e, Aa = t, Aa;
}
var xa, rn;
function fl() {
  if (rn) return xa;
  rn = 1;
  var e = ul(), a = 500;
  function t(o) {
    var n = e(o, function(l) {
      return r.size === a && r.clear(), l;
    }), r = n.cache;
    return n;
  }
  return xa = t, xa;
}
var Fa, ln;
function Tl() {
  if (ln) return Fa;
  ln = 1;
  var e = fl(), a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, o = e(function(n) {
    var r = [];
    return n.charCodeAt(0) === 46 && r.push(""), n.replace(a, function(l, p, s, y) {
      r.push(s ? y.replace(t, "$1") : p || l);
    }), r;
  });
  return Fa = o, Fa;
}
var Da, pn;
function gl() {
  if (pn) return Da;
  pn = 1;
  function e(a, t) {
    for (var o = -1, n = a == null ? 0 : a.length, r = Array(n); ++o < n; )
      r[o] = t(a[o], o, a);
    return r;
  }
  return Da = e, Da;
}
var va, sn;
function Cl() {
  if (sn) return va;
  sn = 1;
  var e = V(), a = gl(), t = P(), o = q(), n = 1 / 0, r = e ? e.prototype : void 0, l = r ? r.toString : void 0;
  function p(s) {
    if (typeof s == "string")
      return s;
    if (t(s))
      return a(s, p) + "";
    if (o(s))
      return l ? l.call(s) : "";
    var y = s + "";
    return y == "0" && 1 / s == -n ? "-0" : y;
  }
  return va = p, va;
}
var wa, yn;
function Nl() {
  if (yn) return wa;
  yn = 1;
  var e = Cl();
  function a(t) {
    return t == null ? "" : e(t);
  }
  return wa = a, wa;
}
var za, dn;
function Yn() {
  if (dn) return za;
  dn = 1;
  var e = P(), a = ft(), t = Tl(), o = Nl();
  function n(r, l) {
    return e(r) ? r : a(r, l) ? [r] : t(o(r));
  }
  return za = n, za;
}
var _a, cn;
function S() {
  if (cn) return _a;
  cn = 1;
  var e = q(), a = 1 / 0;
  function t(o) {
    if (typeof o == "string" || e(o))
      return o;
    var n = o + "";
    return n == "0" && 1 / o == -a ? "-0" : n;
  }
  return _a = t, _a;
}
var Va, mn;
function Zn() {
  if (mn) return Va;
  mn = 1;
  var e = Yn(), a = S();
  function t(o, n) {
    n = e(n, o);
    for (var r = 0, l = n.length; o != null && r < l; )
      o = o[a(n[r++])];
    return r && r == l ? o : void 0;
  }
  return Va = t, Va;
}
var Ga, un;
function Ol() {
  if (un) return Ga;
  un = 1;
  var e = Zn();
  function a(t, o, n) {
    var r = t == null ? void 0 : e(t, o);
    return r === void 0 ? n : r;
  }
  return Ga = a, Ga;
}
var Wa, fn;
function bl() {
  if (fn) return Wa;
  fn = 1;
  function e(a, t) {
    return a != null && t in Object(a);
  }
  return Wa = e, Wa;
}
var Ea, Tn;
function hl() {
  if (Tn) return Ea;
  Tn = 1;
  var e = Yn(), a = En(), t = P(), o = Sn(), n = mt(), r = S();
  function l(p, s, y) {
    s = e(s, p);
    for (var d = -1, i = s.length, c = !1; ++d < i; ) {
      var m = r(s[d]);
      if (!(c = p != null && y(p, m)))
        break;
      p = p[m];
    }
    return c || ++d != i ? c : (i = p == null ? 0 : p.length, !!i && n(i) && o(m, i) && (t(p) || a(p)));
  }
  return Ea = l, Ea;
}
var qa, gn;
function jl() {
  if (gn) return qa;
  gn = 1;
  var e = bl(), a = hl();
  function t(o, n) {
    return o != null && a(o, n, e);
  }
  return qa = t, qa;
}
var Sa, Cn;
function Bl() {
  if (Cn) return Sa;
  Cn = 1;
  var e = Jn(), a = Ol(), t = jl(), o = ft(), n = $n(), r = Xn(), l = S(), p = 1, s = 2;
  function y(d, i) {
    return o(d) && n(i) ? r(l(d), i) : function(c) {
      var m = a(c, d);
      return m === void 0 && m === i ? t(c, d) : e(i, m, p | s);
    };
  }
  return Sa = y, Sa;
}
var La, Nn;
function Il() {
  if (Nn) return La;
  Nn = 1;
  function e(a) {
    return a;
  }
  return La = e, La;
}
var Ha, On;
function Rl() {
  if (On) return Ha;
  On = 1;
  function e(a) {
    return function(t) {
      return t == null ? void 0 : t[a];
    };
  }
  return Ha = e, Ha;
}
var Ja, bn;
function Ml() {
  if (bn) return Ja;
  bn = 1;
  var e = Zn();
  function a(t) {
    return function(o) {
      return e(o, t);
    };
  }
  return Ja = a, Ja;
}
var $a, hn;
function Ul() {
  if (hn) return $a;
  hn = 1;
  var e = Rl(), a = Ml(), t = ft(), o = S();
  function n(r) {
    return t(r) ? e(o(r)) : a(r);
  }
  return $a = n, $a;
}
var Xa, jn;
function Qn() {
  if (jn) return Xa;
  jn = 1;
  var e = ml(), a = Bl(), t = Il(), o = P(), n = Ul();
  function r(l) {
    return typeof l == "function" ? l : l == null ? t : typeof l == "object" ? o(l) ? a(l[0], l[1]) : e(l) : n(l);
  }
  return Xa = r, Xa;
}
var Ya, Bn;
function kl() {
  if (Bn) return Ya;
  Bn = 1;
  var e = Qn(), a = Hn(), t = ut();
  function o(n) {
    return function(r, l, p) {
      var s = Object(r);
      if (!a(r)) {
        var y = e(l, 3);
        r = t(r), l = function(i) {
          return y(s[i], i, s);
        };
      }
      var d = n(r, l, p);
      return d > -1 ? s[y ? r[d] : d] : void 0;
    };
  }
  return Ya = o, Ya;
}
var Za, In;
function er() {
  if (In) return Za;
  In = 1;
  function e(a, t, o, n) {
    for (var r = a.length, l = o + (n ? 1 : -1); n ? l-- : ++l < r; )
      if (t(a[l], l, a))
        return l;
    return -1;
  }
  return Za = e, Za;
}
var Qa, Rn;
function Kl() {
  if (Rn) return Qa;
  Rn = 1;
  var e = /\s/;
  function a(t) {
    for (var o = t.length; o-- && e.test(t.charAt(o)); )
      ;
    return o;
  }
  return Qa = a, Qa;
}
var et, Mn;
function Pl() {
  if (Mn) return et;
  Mn = 1;
  var e = Kl(), a = /^\s+/;
  function t(o) {
    return o && o.slice(0, e(o) + 1).replace(a, "");
  }
  return et = t, et;
}
var at, Un;
function Al() {
  if (Un) return at;
  Un = 1;
  var e = Pl(), a = G(), t = q(), o = NaN, n = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, l = /^0o[0-7]+$/i, p = parseInt;
  function s(y) {
    if (typeof y == "number")
      return y;
    if (t(y))
      return o;
    if (a(y)) {
      var d = typeof y.valueOf == "function" ? y.valueOf() : y;
      y = a(d) ? d + "" : d;
    }
    if (typeof y != "string")
      return y === 0 ? y : +y;
    y = e(y);
    var i = r.test(y);
    return i || l.test(y) ? p(y.slice(2), i ? 2 : 8) : n.test(y) ? o : +y;
  }
  return at = s, at;
}
var tt, kn;
function xl() {
  if (kn) return tt;
  kn = 1;
  var e = Al(), a = 1 / 0, t = 17976931348623157e292;
  function o(n) {
    if (!n)
      return n === 0 ? n : 0;
    if (n = e(n), n === a || n === -a) {
      var r = n < 0 ? -1 : 1;
      return r * t;
    }
    return n === n ? n : 0;
  }
  return tt = o, tt;
}
var ot, Kn;
function ar() {
  if (Kn) return ot;
  Kn = 1;
  var e = xl();
  function a(t) {
    var o = e(t), n = o % 1;
    return o === o ? n ? o - n : o : 0;
  }
  return ot = a, ot;
}
var nt, Pn;
function Fl() {
  if (Pn) return nt;
  Pn = 1;
  var e = er(), a = Qn(), t = ar(), o = Math.max;
  function n(r, l, p) {
    var s = r == null ? 0 : r.length;
    if (!s)
      return -1;
    var y = p == null ? 0 : t(p);
    return y < 0 && (y = o(s + y, 0)), e(r, a(l, 3), y);
  }
  return nt = n, nt;
}
var rt, An;
function Dl() {
  if (An) return rt;
  An = 1;
  var e = kl(), a = Fl(), t = e(a);
  return rt = t, rt;
}
Dl();
var lt, xn;
function vl() {
  if (xn) return lt;
  xn = 1;
  function e(a) {
    return a !== a;
  }
  return lt = e, lt;
}
var pt, Fn;
function wl() {
  if (Fn) return pt;
  Fn = 1;
  function e(a, t, o) {
    for (var n = o - 1, r = a.length; ++n < r; )
      if (a[n] === t)
        return n;
    return -1;
  }
  return pt = e, pt;
}
var st, Dn;
function zl() {
  if (Dn) return st;
  Dn = 1;
  var e = er(), a = vl(), t = wl();
  function o(n, r, l) {
    return r === r ? t(n, r, l) : e(n, a, l);
  }
  return st = o, st;
}
var yt, vn;
function _l() {
  if (vn) return yt;
  vn = 1;
  var e = zl(), a = ar(), t = Math.max;
  function o(n, r, l) {
    var p = n == null ? 0 : n.length;
    if (!p)
      return -1;
    var s = l == null ? 0 : a(l);
    return s < 0 && (s = t(p + s, 0)), e(n, r, s);
  }
  return yt = o, yt;
}
_l();
const Vl = {
  name: "occupancyStatus",
  type: "table",
  scope: "public",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "occupancyStatus",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "occupancyStatus",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "occupancyStatus",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "occupancyStatus",
      type: "color",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "occupancyStatus",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "occupancyStatus",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "occupancyStatus",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    rooms: {
      name: "rooms",
      objectTypeName: "occupancyStatus",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "occupancyStatusId",
        targetModelName: "room",
        propertyTypeName: "rooms",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "occupancyStatuses",
  camelized: {
    singular: "occupancyStatus",
    plural: "occupancyStatuses",
    id: "occupancyStatusId"
  },
  capitalized: {
    singular: "OccupancyStatus",
    plural: "OccupancyStatuses",
    id: "OccupancyStatusId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "room"
    ],
    belongsTo: []
  }
}, Gl = {
  name: "user",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "user",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    email: {
      name: "email",
      objectTypeName: "user",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    firstname: {
      name: "firstname",
      objectTypeName: "user",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    lastname: {
      name: "lastname",
      objectTypeName: "user",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    picture: {
      name: "picture",
      objectTypeName: "user",
      type: "image",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    sub: {
      name: "sub",
      objectTypeName: "user",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "user",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "user",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "user",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanies: {
      name: "userCompanies",
      objectTypeName: "user",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanies",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "users",
  camelized: {
    singular: "user",
    plural: "users",
    id: "userId"
  },
  capitalized: {
    singular: "User",
    plural: "Users",
    id: "UserId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "userCompany"
    ],
    belongsTo: []
  }
}, Wl = {
  name: "userRefreshToken",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "userRefreshToken",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    refreshToken: {
      name: "refreshToken",
      objectTypeName: "userRefreshToken",
      type: "password",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "userRefreshToken",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "userRefreshToken",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "userRefreshToken",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userId: {
      name: "userId",
      objectTypeName: "userRefreshToken",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userId",
        targetModelName: "user",
        propertyTypeName: "user",
        options: {
          readOnly: !1
        }
      }
    },
    user: {
      name: "user",
      objectTypeName: "userRefreshToken",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userId",
        targetModelName: "user",
        propertyTypeName: "user",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "userRefreshTokens",
  camelized: {
    singular: "userRefreshToken",
    plural: "userRefreshTokens",
    id: "userRefreshTokenId"
  },
  capitalized: {
    singular: "UserRefreshToken",
    plural: "UserRefreshTokens",
    id: "UserRefreshTokenId"
  },
  hidden: !0,
  context: {
    hasMany: [],
    belongsTo: []
  }
}, El = {
  name: "companyType",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "companyType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "companyType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    billable: {
      name: "billable",
      objectTypeName: "companyType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "companyType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "companyType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "companyType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    companies: {
      name: "companies",
      objectTypeName: "companyType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyTypeId",
        targetModelName: "company",
        propertyTypeName: "companies",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "companyTypes",
  camelized: {
    singular: "companyType",
    plural: "companyTypes",
    id: "companyTypeId"
  },
  capitalized: {
    singular: "CompanyType",
    plural: "CompanyTypes",
    id: "CompanyTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "company"
    ],
    belongsTo: []
  }
}, ql = {
  name: "company",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "company",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "company",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    logoPath: {
      name: "logoPath",
      objectTypeName: "company",
      type: "image",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    iconPath: {
      name: "iconPath",
      objectTypeName: "company",
      type: "square-image",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    proxyImages: {
      name: "proxyImages",
      objectTypeName: "company",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    workingDaysCount: {
      name: "workingDaysCount",
      objectTypeName: "company",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    enablePathfinding: {
      name: "enablePathfinding",
      objectTypeName: "company",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    planningNumberOfDays: {
      name: "planningNumberOfDays",
      objectTypeName: "company",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 14
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "company",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "company",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "company",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    companyTypeId: {
      name: "companyTypeId",
      objectTypeName: "company",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyTypeId",
        targetModelName: "companyType",
        propertyTypeName: "companyType",
        options: {
          readOnly: !1
        }
      }
    },
    companyType: {
      name: "companyType",
      objectTypeName: "company",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyTypeId",
        targetModelName: "companyType",
        propertyTypeName: "companyType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanies: {
      name: "userCompanies",
      objectTypeName: "company",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanies",
        options: {
          readOnly: !1
        }
      }
    },
    buildingTypes: {
      name: "buildingTypes",
      objectTypeName: "company",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "buildingType",
        propertyTypeName: "buildingTypes",
        options: {
          readOnly: !1
        }
      }
    },
    buildings: {
      name: "buildings",
      objectTypeName: "company",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "building",
        propertyTypeName: "buildings",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "companies",
  camelized: {
    singular: "company",
    plural: "companies",
    id: "companyId"
  },
  capitalized: {
    singular: "Company",
    plural: "Companies",
    id: "CompanyId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "userCompany",
      "buildingType",
      "building"
    ],
    belongsTo: []
  }
}, Sl = {
  name: "campus",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "campus",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "campus",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "campus",
      type: "color",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    address: {
      name: "address",
      objectTypeName: "campus",
      type: "address",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "campus",
      type: "surface",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "campus",
      type: "surface-by-workplace",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "campus",
      type: "surface-by-people",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "campus",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "campus",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "campus",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "campus",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "campus",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "campus",
      type: "weight",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "campus",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "campus",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "campus",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "campus",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "campus",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "campus",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "campus",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "campus",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "campus",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    buildings: {
      name: "buildings",
      objectTypeName: "campus",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "campusId",
        targetModelName: "building",
        propertyTypeName: "buildings",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "campus",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "campus",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "campuses",
  camelized: {
    singular: "campus",
    plural: "campuses",
    id: "campusId"
  },
  capitalized: {
    singular: "Campus",
    plural: "Campuses",
    id: "CampusId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "building"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Ll = {
  name: "roomConnectorType",
  type: "table",
  scope: "public",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomConnectorType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "roomConnectorType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomConnectorType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomConnectorType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomConnectorType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomConnectors: {
      name: "roomConnectors",
      objectTypeName: "roomConnectorType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomConnectorTypeId",
        targetModelName: "roomConnector",
        propertyTypeName: "roomConnectors",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "roomConnectorTypes",
  camelized: {
    singular: "roomConnectorType",
    plural: "roomConnectorTypes",
    id: "roomConnectorTypeId"
  },
  capitalized: {
    singular: "RoomConnectorType",
    plural: "RoomConnectorTypes",
    id: "RoomConnectorTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "roomConnector"
    ],
    belongsTo: []
  }
}, Hl = {
  name: "roomConnector",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomConnector",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "roomConnector",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    waitTime: {
      name: "waitTime",
      objectTypeName: "roomConnector",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    timePerFloor: {
      name: "timePerFloor",
      objectTypeName: "roomConnector",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomConnector",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomConnector",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomConnector",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomConnectorTypeId: {
      name: "roomConnectorTypeId",
      objectTypeName: "roomConnector",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomConnectorTypeId",
        targetModelName: "roomConnectorType",
        propertyTypeName: "roomConnectorType",
        options: {
          readOnly: !1
        }
      }
    },
    roomConnectorType: {
      name: "roomConnectorType",
      objectTypeName: "roomConnector",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomConnectorTypeId",
        targetModelName: "roomConnectorType",
        propertyTypeName: "roomConnectorType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomConnector",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomConnector",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomConnector",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomConnector",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    rooms: {
      name: "rooms",
      objectTypeName: "roomConnector",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomConnectorId",
        targetModelName: "room",
        propertyTypeName: "rooms",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomConnector",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomConnector",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomConnectors",
  camelized: {
    singular: "roomConnector",
    plural: "roomConnectors",
    id: "roomConnectorId"
  },
  capitalized: {
    singular: "RoomConnector",
    plural: "RoomConnectors",
    id: "RoomConnectorId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "room"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Jl = {
  name: "userCompany",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "userCompany",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "userCompany",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "userCompany",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "userCompany",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    campusCreatedBies: {
      name: "campusCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "campus",
        propertyTypeName: "campusCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    campusUpdatedBies: {
      name: "campusUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "campus",
        propertyTypeName: "campusUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomConnectorCreatedBies: {
      name: "roomConnectorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomConnector",
        propertyTypeName: "roomConnectorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomConnectorUpdatedBies: {
      name: "roomConnectorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomConnector",
        propertyTypeName: "roomConnectorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    userId: {
      name: "userId",
      objectTypeName: "userCompany",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userId",
        targetModelName: "user",
        propertyTypeName: "user",
        options: {
          readOnly: !1
        }
      }
    },
    user: {
      name: "user",
      objectTypeName: "userCompany",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userId",
        targetModelName: "user",
        propertyTypeName: "user",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "userCompany",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !1
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "userCompany",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !1
        }
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "userCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "userCompany",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "userCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "userCompany",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBies: {
      name: "userCompanyCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "userCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "userCompany",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBies: {
      name: "userCompanyUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCompanyCreatedBies: {
      name: "personCompanyCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personCompany",
        propertyTypeName: "personCompanyCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCompanyUpdatedBies: {
      name: "personCompanyUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personCompany",
        propertyTypeName: "personCompanyUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    buildingTypeCreatedBies: {
      name: "buildingTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "buildingType",
        propertyTypeName: "buildingTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    buildingTypeUpdatedBies: {
      name: "buildingTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "buildingType",
        propertyTypeName: "buildingTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    organizationCreatedBies: {
      name: "organizationCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "organization",
        propertyTypeName: "organizationCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    organizationUpdatedBies: {
      name: "organizationUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "organization",
        propertyTypeName: "organizationUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypeFamilyCreatedBies: {
      name: "itemTypeFamilyCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "itemTypeFamily",
        propertyTypeName: "itemTypeFamilyCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypeFamilyUpdatedBies: {
      name: "itemTypeFamilyUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "itemTypeFamily",
        propertyTypeName: "itemTypeFamilyUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    manufacturerCreatedBies: {
      name: "manufacturerCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "manufacturer",
        propertyTypeName: "manufacturerCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    manufacturerUpdatedBies: {
      name: "manufacturerUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "manufacturer",
        propertyTypeName: "manufacturerUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypeCreatedBies: {
      name: "itemTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "itemType",
        propertyTypeName: "itemTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypeUpdatedBies: {
      name: "itemTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "itemType",
        propertyTypeName: "itemTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    buildingOwners: {
      name: "buildingOwners",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyOwnerId",
        targetModelName: "building",
        propertyTypeName: "buildingOwners",
        options: {
          readOnly: !1
        }
      }
    },
    buildingCreatedBies: {
      name: "buildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "building",
        propertyTypeName: "buildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    buildingUpdatedBies: {
      name: "buildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "building",
        propertyTypeName: "buildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    mapScaleCreatedBies: {
      name: "mapScaleCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "mapScale",
        propertyTypeName: "mapScaleCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    mapScaleUpdatedBies: {
      name: "mapScaleUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "mapScale",
        propertyTypeName: "mapScaleUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    structureCreatedBies: {
      name: "structureCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "structure",
        propertyTypeName: "structureCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    structureUpdatedBies: {
      name: "structureUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "structure",
        propertyTypeName: "structureUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    structurePointCreatedBies: {
      name: "structurePointCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "structurePoint",
        propertyTypeName: "structurePointCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    structurePointUpdatedBies: {
      name: "structurePointUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "structurePoint",
        propertyTypeName: "structurePointUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    floorCreatedBies: {
      name: "floorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "floor",
        propertyTypeName: "floorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    floorUpdatedBies: {
      name: "floorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "floor",
        propertyTypeName: "floorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    distributionCostTypeCreatedBies: {
      name: "distributionCostTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "distributionCostType",
        propertyTypeName: "distributionCostTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    distributionCostTypeUpdatedBies: {
      name: "distributionCostTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "distributionCostType",
        propertyTypeName: "distributionCostTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeCreatedBies: {
      name: "roomTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomType",
        propertyTypeName: "roomTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeUpdatedBies: {
      name: "roomTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomType",
        propertyTypeName: "roomTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeGroupToRoomTypeCreatedBies: {
      name: "roomTypeGroupToRoomTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomTypeGroupToRoomType",
        propertyTypeName: "roomTypeGroupToRoomTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeGroupToRoomTypeUpdatedBies: {
      name: "roomTypeGroupToRoomTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomTypeGroupToRoomType",
        propertyTypeName: "roomTypeGroupToRoomTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeGroupFloorCreatedBies: {
      name: "roomTypeGroupFloorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomTypeGroupFloor",
        propertyTypeName: "roomTypeGroupFloorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeGroupFloorUpdatedBies: {
      name: "roomTypeGroupFloorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomTypeGroupFloor",
        propertyTypeName: "roomTypeGroupFloorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeGroupBuildingCreatedBies: {
      name: "roomTypeGroupBuildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomTypeGroupBuilding",
        propertyTypeName: "roomTypeGroupBuildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeGroupBuildingUpdatedBies: {
      name: "roomTypeGroupBuildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomTypeGroupBuilding",
        propertyTypeName: "roomTypeGroupBuildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    costCenterCreatedBies: {
      name: "costCenterCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "costCenter",
        propertyTypeName: "costCenterCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    costCenterUpdatedBies: {
      name: "costCenterUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "costCenter",
        propertyTypeName: "costCenterUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    costCenterBuildingCreatedBies: {
      name: "costCenterBuildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "costCenterBuilding",
        propertyTypeName: "costCenterBuildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    costCenterBuildingUpdatedBies: {
      name: "costCenterBuildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "costCenterBuilding",
        propertyTypeName: "costCenterBuildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    costCenterFloorCreatedBies: {
      name: "costCenterFloorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "costCenterFloor",
        propertyTypeName: "costCenterFloorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    costCenterFloorUpdatedBies: {
      name: "costCenterFloorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "costCenterFloor",
        propertyTypeName: "costCenterFloorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomCreatedBies: {
      name: "roomCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "room",
        propertyTypeName: "roomCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomUpdatedBies: {
      name: "roomUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "room",
        propertyTypeName: "roomUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomPointCreatedBies: {
      name: "roomPointCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPointCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomPointUpdatedBies: {
      name: "roomPointUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPointUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomPointRoomCreatedBies: {
      name: "roomPointRoomCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomPointRoom",
        propertyTypeName: "roomPointRoomCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomPointRoomUpdatedBies: {
      name: "roomPointRoomUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomPointRoom",
        propertyTypeName: "roomPointRoomUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomPointSegmentCreatedBies: {
      name: "roomPointSegmentCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomPointSegment",
        propertyTypeName: "roomPointSegmentCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomPointSegmentUpdatedBies: {
      name: "roomPointSegmentUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomPointSegment",
        propertyTypeName: "roomPointSegmentUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypePointCreatedBies: {
      name: "itemTypePointCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "itemTypePoint",
        propertyTypeName: "itemTypePointCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypePointUpdatedBies: {
      name: "itemTypePointUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "itemTypePoint",
        propertyTypeName: "itemTypePointUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionTypeCreatedBies: {
      name: "dimensionTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionTypeUpdatedBies: {
      name: "dimensionTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionCreatedBies: {
      name: "dimensionCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "dimension",
        propertyTypeName: "dimensionCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionUpdatedBies: {
      name: "dimensionUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "dimension",
        propertyTypeName: "dimensionUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionRoomCreatedBies: {
      name: "dimensionRoomCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "dimensionRoom",
        propertyTypeName: "dimensionRoomCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionRoomUpdatedBies: {
      name: "dimensionRoomUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "dimensionRoom",
        propertyTypeName: "dimensionRoomUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionFloorCreatedBies: {
      name: "dimensionFloorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "dimensionFloor",
        propertyTypeName: "dimensionFloorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionFloorUpdatedBies: {
      name: "dimensionFloorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "dimensionFloor",
        propertyTypeName: "dimensionFloorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionBuildingCreatedBies: {
      name: "dimensionBuildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "dimensionBuilding",
        propertyTypeName: "dimensionBuildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionBuildingUpdatedBies: {
      name: "dimensionBuildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "dimensionBuilding",
        propertyTypeName: "dimensionBuildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    factTypeCreatedBies: {
      name: "factTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "factType",
        propertyTypeName: "factTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    factTypeUpdatedBies: {
      name: "factTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "factType",
        propertyTypeName: "factTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    factCreatedBies: {
      name: "factCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "fact",
        propertyTypeName: "factCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    factUpdatedBies: {
      name: "factUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "fact",
        propertyTypeName: "factUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personStateCreatedBies: {
      name: "personStateCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personState",
        propertyTypeName: "personStateCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personStateUpdatedBies: {
      name: "personStateUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personState",
        propertyTypeName: "personStateUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personSecurityProfileCreatedBies: {
      name: "personSecurityProfileCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personSecurityProfile",
        propertyTypeName: "personSecurityProfileCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personSecurityProfileUpdatedBies: {
      name: "personSecurityProfileUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personSecurityProfile",
        propertyTypeName: "personSecurityProfileUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCreatedBies: {
      name: "personCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "person",
        propertyTypeName: "personCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personUpdatedBies: {
      name: "personUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "person",
        propertyTypeName: "personUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToPersonTypeCreatedBies: {
      name: "personToPersonTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personToPersonType",
        propertyTypeName: "personToPersonTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToPersonTypeUpdatedBies: {
      name: "personToPersonTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personToPersonType",
        propertyTypeName: "personToPersonTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToPersonCreatedBies: {
      name: "personToPersonCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personToPerson",
        propertyTypeName: "personToPersonCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToPersonUpdatedBies: {
      name: "personToPersonUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personToPerson",
        propertyTypeName: "personToPersonUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomAffectationCreatedBies: {
      name: "roomAffectationCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomAffectation",
        propertyTypeName: "roomAffectationCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomAffectationUpdatedBies: {
      name: "roomAffectationUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomAffectation",
        propertyTypeName: "roomAffectationUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceTypeCreatedBies: {
      name: "workplaceTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "workplaceType",
        propertyTypeName: "workplaceTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceTypeUpdatedBies: {
      name: "workplaceTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "workplaceType",
        propertyTypeName: "workplaceTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceTypeItemTypeCreatedBies: {
      name: "workplaceTypeItemTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "workplaceTypeItemType",
        propertyTypeName: "workplaceTypeItemTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceTypeItemTypeUpdatedBies: {
      name: "workplaceTypeItemTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "workplaceTypeItemType",
        propertyTypeName: "workplaceTypeItemTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceCreatedBies: {
      name: "workplaceCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "workplace",
        propertyTypeName: "workplaceCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceUpdatedBies: {
      name: "workplaceUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "workplace",
        propertyTypeName: "workplaceUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemCreatedBies: {
      name: "itemCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "item",
        propertyTypeName: "itemCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemUpdatedBies: {
      name: "itemUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "item",
        propertyTypeName: "itemUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceAffectationCreatedBies: {
      name: "workplaceAffectationCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "workplaceAffectation",
        propertyTypeName: "workplaceAffectationCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceAffectationUpdatedBies: {
      name: "workplaceAffectationUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "workplaceAffectation",
        propertyTypeName: "workplaceAffectationUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    organizationFloorCreatedBies: {
      name: "organizationFloorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "organizationFloor",
        propertyTypeName: "organizationFloorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    organizationFloorUpdatedBies: {
      name: "organizationFloorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "organizationFloor",
        propertyTypeName: "organizationFloorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    organizationBuildingCreatedBies: {
      name: "organizationBuildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "organizationBuilding",
        propertyTypeName: "organizationBuildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    organizationBuildingUpdatedBies: {
      name: "organizationBuildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "organizationBuilding",
        propertyTypeName: "organizationBuildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeFloorCreatedBies: {
      name: "roomTypeFloorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomTypeFloor",
        propertyTypeName: "roomTypeFloorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeFloorUpdatedBies: {
      name: "roomTypeFloorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomTypeFloor",
        propertyTypeName: "roomTypeFloorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeBuildingCreatedBies: {
      name: "roomTypeBuildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "roomTypeBuilding",
        propertyTypeName: "roomTypeBuildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeBuildingUpdatedBies: {
      name: "roomTypeBuildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "roomTypeBuilding",
        propertyTypeName: "roomTypeBuildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemToPersonCreatedBies: {
      name: "itemToPersonCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "itemToPerson",
        propertyTypeName: "itemToPersonCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemToPersonUpdatedBies: {
      name: "itemToPersonUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "itemToPerson",
        propertyTypeName: "itemToPersonUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToBuildingCreatedBies: {
      name: "personToBuildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personToBuilding",
        propertyTypeName: "personToBuildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToBuildingUpdatedBies: {
      name: "personToBuildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personToBuilding",
        propertyTypeName: "personToBuildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionToPersonCreatedBies: {
      name: "dimensionToPersonCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "dimensionToPerson",
        propertyTypeName: "dimensionToPersonCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionToPersonUpdatedBies: {
      name: "dimensionToPersonUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "dimensionToPerson",
        propertyTypeName: "dimensionToPersonUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionTypeToBuildingCreatedBies: {
      name: "dimensionTypeToBuildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "dimensionTypeToBuilding",
        propertyTypeName: "dimensionTypeToBuildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionTypeToBuildingUpdatedBies: {
      name: "dimensionTypeToBuildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "dimensionTypeToBuilding",
        propertyTypeName: "dimensionTypeToBuildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personWorkingLocationCreatedBies: {
      name: "personWorkingLocationCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocationCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personWorkingLocationUpdatedBies: {
      name: "personWorkingLocationUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocationUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToWorkplaceBookingCreatedBies: {
      name: "personToWorkplaceBookingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personToWorkplaceBooking",
        propertyTypeName: "personToWorkplaceBookingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToWorkplaceBookingUpdatedBies: {
      name: "personToWorkplaceBookingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personToWorkplaceBooking",
        propertyTypeName: "personToWorkplaceBookingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToRoomBookingCreatedBies: {
      name: "personToRoomBookingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personToRoomBooking",
        propertyTypeName: "personToRoomBookingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToRoomBookingUpdatedBies: {
      name: "personToRoomBookingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personToRoomBooking",
        propertyTypeName: "personToRoomBookingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToDimensionBookingCreatedBies: {
      name: "personToDimensionBookingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personToDimensionBooking",
        propertyTypeName: "personToDimensionBookingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personToDimensionBookingUpdatedBies: {
      name: "personToDimensionBookingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personToDimensionBooking",
        propertyTypeName: "personToDimensionBookingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCompanyToItemTypeCreatedBies: {
      name: "personCompanyToItemTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personCompanyToItemType",
        propertyTypeName: "personCompanyToItemTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCompanyToItemTypeUpdatedBies: {
      name: "personCompanyToItemTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personCompanyToItemType",
        propertyTypeName: "personCompanyToItemTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCompanyToRoomTypeCreatedBies: {
      name: "personCompanyToRoomTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personCompanyToRoomType",
        propertyTypeName: "personCompanyToRoomTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCompanyToRoomTypeUpdatedBies: {
      name: "personCompanyToRoomTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personCompanyToRoomType",
        propertyTypeName: "personCompanyToRoomTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCompanyToItemCreatedBies: {
      name: "personCompanyToItemCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "personCompanyToItem",
        propertyTypeName: "personCompanyToItemCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    personCompanyToItemUpdatedBies: {
      name: "personCompanyToItemUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "personCompanyToItem",
        propertyTypeName: "personCompanyToItemUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    legendCreatedBies: {
      name: "legendCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "legend",
        propertyTypeName: "legendCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    legendUpdatedBies: {
      name: "legendUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "legend",
        propertyTypeName: "legendUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    openerPostMessageHostCreatedBies: {
      name: "openerPostMessageHostCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "openerPostMessageHost",
        propertyTypeName: "openerPostMessageHostCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    openerPostMessageHostUpdatedBies: {
      name: "openerPostMessageHostUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "openerPostMessageHost",
        propertyTypeName: "openerPostMessageHostUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleCreatedBies: {
      name: "contentRoleCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "contentRole",
        propertyTypeName: "contentRoleCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleUpdatedBies: {
      name: "contentRoleUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "contentRole",
        propertyTypeName: "contentRoleUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    jupUserCompanyToJupRoles: {
      name: "jupUserCompanyToJupRoles",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyId",
        targetModelName: "jupUserCompanyToJupRole",
        propertyTypeName: "jupUserCompanyToJupRoles",
        options: {
          readOnly: !1
        }
      }
    },
    jupUserCompanyToJupRoleCreatedBies: {
      name: "jupUserCompanyToJupRoleCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "jupUserCompanyToJupRole",
        propertyTypeName: "jupUserCompanyToJupRoleCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    jupUserCompanyToJupRoleUpdatedBies: {
      name: "jupUserCompanyToJupRoleUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "jupUserCompanyToJupRole",
        propertyTypeName: "jupUserCompanyToJupRoleUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToBuildingCreatedBies: {
      name: "contentRoleToBuildingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "contentRoleToBuilding",
        propertyTypeName: "contentRoleToBuildingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToBuildingUpdatedBies: {
      name: "contentRoleToBuildingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "contentRoleToBuilding",
        propertyTypeName: "contentRoleToBuildingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToUserCompanies: {
      name: "contentRoleToUserCompanies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyId",
        targetModelName: "contentRoleToUserCompany",
        propertyTypeName: "contentRoleToUserCompanies",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleToUserCompanyCreatedBies: {
      name: "contentRoleToUserCompanyCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "contentRoleToUserCompany",
        propertyTypeName: "contentRoleToUserCompanyCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToUserCompanyUpdatedBies: {
      name: "contentRoleToUserCompanyUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "contentRoleToUserCompany",
        propertyTypeName: "contentRoleToUserCompanyUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToFloorCreatedBies: {
      name: "contentRoleToFloorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "contentRoleToFloor",
        propertyTypeName: "contentRoleToFloorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToFloorUpdatedBies: {
      name: "contentRoleToFloorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "contentRoleToFloor",
        propertyTypeName: "contentRoleToFloorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerApiCredentialCreatedBies: {
      name: "partnerApiCredentialCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "partnerApiCredential",
        propertyTypeName: "partnerApiCredentialCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerApiCredentialUpdatedBies: {
      name: "partnerApiCredentialUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "partnerApiCredential",
        propertyTypeName: "partnerApiCredentialUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    apiUserCreatedBies: {
      name: "apiUserCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "apiUser",
        propertyTypeName: "apiUserCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    apiUserUpdatedBies: {
      name: "apiUserUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "apiUser",
        propertyTypeName: "apiUserUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    apiUserToJupRoleCreatedBies: {
      name: "apiUserToJupRoleCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "apiUserToJupRole",
        propertyTypeName: "apiUserToJupRoleCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    apiUserToJupRoleUpdatedBies: {
      name: "apiUserToJupRoleUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "apiUserToJupRole",
        propertyTypeName: "apiUserToJupRoleUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    apiUserToContentRoleCreatedBies: {
      name: "apiUserToContentRoleCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "apiUserToContentRole",
        propertyTypeName: "apiUserToContentRoleCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    apiUserToContentRoleUpdatedBies: {
      name: "apiUserToContentRoleUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "apiUserToContentRole",
        propertyTypeName: "apiUserToContentRoleUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    jupUiTenantOperationCreatedBies: {
      name: "jupUiTenantOperationCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "jupUiTenantOperation",
        propertyTypeName: "jupUiTenantOperationCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    jupUiTenantOperationUpdatedBies: {
      name: "jupUiTenantOperationUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "jupUiTenantOperation",
        propertyTypeName: "jupUiTenantOperationUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToJupUiTenantOperationCreatedBies: {
      name: "contentRoleToJupUiTenantOperationCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "contentRoleToJupUiTenantOperation",
        propertyTypeName: "contentRoleToJupUiTenantOperationCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToJupUiTenantOperationUpdatedBies: {
      name: "contentRoleToJupUiTenantOperationUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "contentRoleToJupUiTenantOperation",
        propertyTypeName: "contentRoleToJupUiTenantOperationUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    userRegistrationTenantRuleCreatedBies: {
      name: "userRegistrationTenantRuleCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userRegistrationTenantRule",
        propertyTypeName: "userRegistrationTenantRuleCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    userRegistrationTenantRuleUpdatedBies: {
      name: "userRegistrationTenantRuleUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userRegistrationTenantRule",
        propertyTypeName: "userRegistrationTenantRuleUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    userRegistrationTenantRuleToJupRoleCreatedBies: {
      name: "userRegistrationTenantRuleToJupRoleCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userRegistrationTenantRuleToJupRole",
        propertyTypeName: "userRegistrationTenantRuleToJupRoleCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    userRegistrationTenantRuleToJupRoleUpdatedBies: {
      name: "userRegistrationTenantRuleToJupRoleUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userRegistrationTenantRuleToJupRole",
        propertyTypeName: "userRegistrationTenantRuleToJupRoleUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    userRegistrationTenantRuleToContentRoleCreatedBies: {
      name: "userRegistrationTenantRuleToContentRoleCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userRegistrationTenantRuleToContentRole",
        propertyTypeName: "userRegistrationTenantRuleToContentRoleCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    userRegistrationTenantRuleToContentRoleUpdatedBies: {
      name: "userRegistrationTenantRuleToContentRoleUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userRegistrationTenantRuleToContentRole",
        propertyTypeName: "userRegistrationTenantRuleToContentRoleUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingConfigurationCreatedBies: {
      name: "partnerExportMappingConfigurationCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "partnerExportMappingConfiguration",
        propertyTypeName: "partnerExportMappingConfigurationCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingConfigurationUpdatedBies: {
      name: "partnerExportMappingConfigurationUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "partnerExportMappingConfiguration",
        propertyTypeName: "partnerExportMappingConfigurationUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingCreatedBies: {
      name: "partnerExportMappingCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "partnerExportMapping",
        propertyTypeName: "partnerExportMappingCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingUpdatedBies: {
      name: "partnerExportMappingUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "partnerExportMapping",
        propertyTypeName: "partnerExportMappingUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingToRoomTypeCreatedBies: {
      name: "partnerExportMappingToRoomTypeCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "partnerExportMappingToRoomType",
        propertyTypeName: "partnerExportMappingToRoomTypeCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingToRoomTypeUpdatedBies: {
      name: "partnerExportMappingToRoomTypeUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "partnerExportMappingToRoomType",
        propertyTypeName: "partnerExportMappingToRoomTypeUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingConfigurationToFloorCreatedBies: {
      name: "partnerExportMappingConfigurationToFloorCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "partnerExportMappingConfigurationToFloor",
        propertyTypeName: "partnerExportMappingConfigurationToFloorCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingConfigurationToFloorUpdatedBies: {
      name: "partnerExportMappingConfigurationToFloorUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "partnerExportMappingConfigurationToFloor",
        propertyTypeName: "partnerExportMappingConfigurationToFloorUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemFactCreatedBies: {
      name: "itemFactCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "itemFact",
        propertyTypeName: "itemFactCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    itemFactUpdatedBies: {
      name: "itemFactUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "itemFact",
        propertyTypeName: "itemFactUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    featureFamilyCreatedBies: {
      name: "featureFamilyCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "featureFamily",
        propertyTypeName: "featureFamilyCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    featureFamilyUpdatedBies: {
      name: "featureFamilyUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "featureFamily",
        propertyTypeName: "featureFamilyUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    featureGroupCreatedBies: {
      name: "featureGroupCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "featureGroup",
        propertyTypeName: "featureGroupCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    featureGroupUpdatedBies: {
      name: "featureGroupUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "featureGroup",
        propertyTypeName: "featureGroupUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    featureCreatedBies: {
      name: "featureCreatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "feature",
        propertyTypeName: "featureCreatedBies",
        options: {
          readOnly: !0
        }
      }
    },
    featureUpdatedBies: {
      name: "featureUpdatedBies",
      objectTypeName: "userCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "feature",
        propertyTypeName: "featureUpdatedBies",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "userCompanies",
  camelized: {
    singular: "userCompany",
    plural: "userCompanies",
    id: "userCompanyId"
  },
  capitalized: {
    singular: "UserCompany",
    plural: "UserCompanies",
    id: "UserCompanyId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "campus",
      "roomConnector",
      "userCompany",
      "personCompany",
      "buildingType",
      "organization",
      "itemTypeFamily",
      "manufacturer",
      "itemType",
      "building",
      "mapScale",
      "structure",
      "structurePoint",
      "floor",
      "distributionCostType",
      "roomType",
      "roomTypeGroupToRoomType",
      "roomTypeGroupFloor",
      "roomTypeGroupBuilding",
      "costCenter",
      "costCenterBuilding",
      "costCenterFloor",
      "room",
      "roomPoint",
      "roomPointRoom",
      "roomPointSegment",
      "itemTypePoint",
      "dimensionType",
      "dimension",
      "dimensionRoom",
      "dimensionFloor",
      "dimensionBuilding",
      "factType",
      "fact",
      "personState",
      "personSecurityProfile",
      "person",
      "personToPersonType",
      "personToPerson",
      "roomAffectation",
      "workplaceType",
      "workplaceTypeItemType",
      "workplace",
      "item",
      "workplaceAffectation",
      "organizationFloor",
      "organizationBuilding",
      "roomTypeFloor",
      "roomTypeBuilding",
      "itemToPerson",
      "personToBuilding",
      "dimensionToPerson",
      "dimensionTypeToBuilding",
      "personWorkingLocation",
      "personToWorkplaceBooking",
      "personToRoomBooking",
      "personToDimensionBooking",
      "personCompanyToItemType",
      "personCompanyToRoomType",
      "personCompanyToItem",
      "legend",
      "openerPostMessageHost",
      "contentRole",
      "jupUserCompanyToJupRole",
      "contentRoleToBuilding",
      "contentRoleToUserCompany",
      "contentRoleToFloor",
      "partnerApiCredential",
      "apiUser",
      "apiUserToJupRole",
      "apiUserToContentRole",
      "jupUiTenantOperation",
      "contentRoleToJupUiTenantOperation",
      "userRegistrationTenantRule",
      "userRegistrationTenantRuleToJupRole",
      "userRegistrationTenantRuleToContentRole",
      "partnerExportMappingConfiguration",
      "partnerExportMapping",
      "partnerExportMappingToRoomType",
      "partnerExportMappingConfigurationToFloor",
      "itemFact",
      "featureFamily",
      "featureGroup",
      "feature"
    ],
    belongsTo: [
      "company"
    ]
  }
}, $l = {
  name: "personGender",
  type: "table",
  scope: "public",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personGender",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "personGender",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personGender",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personGender",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personGender",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    people: {
      name: "people",
      objectTypeName: "personGender",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personGenderId",
        targetModelName: "person",
        propertyTypeName: "people",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "personGenders",
  camelized: {
    singular: "personGender",
    plural: "personGenders",
    id: "personGenderId"
  },
  capitalized: {
    singular: "PersonGender",
    plural: "PersonGenders",
    id: "PersonGenderId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "person"
    ],
    belongsTo: []
  }
}, Xl = {
  name: "personCompany",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personCompany",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "personCompany",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    comment: {
      name: "comment",
      objectTypeName: "personCompany",
      type: "text-md",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    contact: {
      name: "contact",
      objectTypeName: "personCompany",
      type: "text-md",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    documents: {
      name: "documents",
      objectTypeName: "personCompany",
      type: "url",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personCompany",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personCompany",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personCompany",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personCompany",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personCompany",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    people: {
      name: "people",
      objectTypeName: "personCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "person",
        propertyTypeName: "people",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyToItemTypes: {
      name: "personCompanyToItemTypes",
      objectTypeName: "personCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompanyToItemType",
        propertyTypeName: "personCompanyToItemTypes",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyToRoomTypes: {
      name: "personCompanyToRoomTypes",
      objectTypeName: "personCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompanyToRoomType",
        propertyTypeName: "personCompanyToRoomTypes",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyToItems: {
      name: "personCompanyToItems",
      objectTypeName: "personCompany",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompanyToItem",
        propertyTypeName: "personCompanyToItems",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personCompany",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personCompanies",
  camelized: {
    singular: "personCompany",
    plural: "personCompanies",
    id: "personCompanyId"
  },
  capitalized: {
    singular: "PersonCompany",
    plural: "PersonCompanies",
    id: "PersonCompanyId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "person",
      "personCompanyToItemType",
      "personCompanyToRoomType",
      "personCompanyToItem"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Yl = {
  name: "jupUiLayout",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupUiLayout",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "jupUiLayout",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupUiLayout",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupUiLayout",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupUiLayout",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    buildings: {
      name: "buildings",
      objectTypeName: "jupUiLayout",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiLayoutId",
        targetModelName: "building",
        propertyTypeName: "buildings",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleToJupUiLayouts: {
      name: "jupRoleToJupUiLayouts",
      objectTypeName: "jupUiLayout",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiLayoutId",
        targetModelName: "jupRoleToJupUiLayout",
        propertyTypeName: "jupRoleToJupUiLayouts",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupUiLayouts",
  camelized: {
    singular: "jupUiLayout",
    plural: "jupUiLayouts",
    id: "jupUiLayoutId"
  },
  capitalized: {
    singular: "JupUiLayout",
    plural: "JupUiLayouts",
    id: "JupUiLayoutId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "building",
      "jupRoleToJupUiLayout"
    ],
    belongsTo: []
  }
}, Zl = {
  name: "buildingType",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "buildingType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "buildingType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "buildingType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "buildingType",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "buildingType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "buildingType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "buildingType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "buildingType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !1
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "buildingType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "buildingType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "buildingType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "buildingType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "buildingType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    buildings: {
      name: "buildings",
      objectTypeName: "buildingType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingTypeId",
        targetModelName: "building",
        propertyTypeName: "buildings",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "buildingTypes",
  camelized: {
    singular: "buildingType",
    plural: "buildingTypes",
    id: "buildingTypeId"
  },
  capitalized: {
    singular: "BuildingType",
    plural: "BuildingTypes",
    id: "BuildingTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "building"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Ql = {
  name: "organization",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "organization",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "organization",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "organization",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "organization",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "organization",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "organization",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "organization",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    organizationId: {
      name: "organizationId",
      objectTypeName: "organization",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    organization: {
      name: "organization",
      objectTypeName: "organization",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    organizations: {
      name: "organizations",
      objectTypeName: "organization",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organizations",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "organization",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "organization",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "organization",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "organization",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    rooms: {
      name: "rooms",
      objectTypeName: "organization",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "room",
        propertyTypeName: "rooms",
        options: {
          readOnly: !1
        }
      }
    },
    people: {
      name: "people",
      objectTypeName: "organization",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "person",
        propertyTypeName: "people",
        options: {
          readOnly: !1
        }
      }
    },
    workplaces: {
      name: "workplaces",
      objectTypeName: "organization",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "workplace",
        propertyTypeName: "workplaces",
        options: {
          readOnly: !1
        }
      }
    },
    organizationFloors: {
      name: "organizationFloors",
      objectTypeName: "organization",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organizationFloor",
        propertyTypeName: "organizationFloors",
        options: {
          readOnly: !1
        }
      }
    },
    organizationBuildings: {
      name: "organizationBuildings",
      objectTypeName: "organization",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organizationBuilding",
        propertyTypeName: "organizationBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "organization",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "organization",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "organizations",
  camelized: {
    singular: "organization",
    plural: "organizations",
    id: "organizationId"
  },
  capitalized: {
    singular: "Organization",
    plural: "Organizations",
    id: "OrganizationId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "organization",
      "room",
      "person",
      "workplace",
      "organizationFloor",
      "organizationBuilding"
    ],
    belongsTo: [
      "company"
    ]
  }
}, ep = {
  name: "itemTypeFamily",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "itemTypeFamily",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "itemTypeFamily",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "itemTypeFamily",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "itemTypeFamily",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "itemTypeFamily",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "itemTypeFamily",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "itemTypeFamily",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "itemTypeFamily",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "itemTypeFamily",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "itemTypeFamily",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypes: {
      name: "itemTypes",
      objectTypeName: "itemTypeFamily",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeFamilyId",
        targetModelName: "itemType",
        propertyTypeName: "itemTypes",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "itemTypeFamily",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "itemTypeFamily",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "itemTypeFamilies",
  camelized: {
    singular: "itemTypeFamily",
    plural: "itemTypeFamilies",
    id: "itemTypeFamilyId"
  },
  capitalized: {
    singular: "ItemTypeFamily",
    plural: "ItemTypeFamilies",
    id: "ItemTypeFamilyId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "itemType"
    ],
    belongsTo: [
      "company"
    ]
  }
}, ap = {
  name: "manufacturer",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "manufacturer",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "manufacturer",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    website: {
      name: "website",
      objectTypeName: "manufacturer",
      type: "url",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "manufacturer",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "manufacturer",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "manufacturer",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "manufacturer",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "manufacturer",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "manufacturer",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "manufacturer",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypes: {
      name: "itemTypes",
      objectTypeName: "manufacturer",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "manufacturerId",
        targetModelName: "itemType",
        propertyTypeName: "itemTypes",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "manufacturer",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "manufacturer",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "manufacturers",
  camelized: {
    singular: "manufacturer",
    plural: "manufacturers",
    id: "manufacturerId"
  },
  capitalized: {
    singular: "Manufacturer",
    plural: "Manufacturers",
    id: "ManufacturerId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "itemType"
    ],
    belongsTo: [
      "company"
    ]
  }
}, tp = {
  name: "object3dModel",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "object3dModel",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "object3dModel",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    type: {
      name: "type",
      objectTypeName: "object3dModel",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: "obj"
      }
    },
    rotation: {
      name: "rotation",
      objectTypeName: "object3dModel",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    origin: {
      name: "origin",
      objectTypeName: "object3dModel",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: "X"
      }
    },
    model: {
      name: "model",
      objectTypeName: "object3dModel",
      type: "model3d",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "object3dModel",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "object3dModel",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "object3dModel",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    itemTypes: {
      name: "itemTypes",
      objectTypeName: "object3dModel",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "object3dModelId",
        targetModelName: "itemType",
        propertyTypeName: "itemTypes",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "object3dModels",
  camelized: {
    singular: "object3dModel",
    plural: "object3dModels",
    id: "object3dModelId"
  },
  capitalized: {
    singular: "Object3dModel",
    plural: "Object3dModels",
    id: "Object3dModelId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "itemType"
    ],
    belongsTo: []
  }
}, op = {
  name: "itemType",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "itemType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "itemType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    picture: {
      name: "picture",
      objectTypeName: "itemType",
      type: "image",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    displayItemReferenceInMap: {
      name: "displayItemReferenceInMap",
      objectTypeName: "itemType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "itemType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    icon: {
      name: "icon",
      objectTypeName: "itemType",
      type: "icon",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "itemType",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: "#FFFFFF"
      }
    },
    height: {
      name: "height",
      objectTypeName: "itemType",
      type: "distance",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        unit: {
          type: "distance",
          value: "centimeter"
        },
        defaultValue: 0
      }
    },
    zIndex: {
      name: "zIndex",
      objectTypeName: "itemType",
      type: "integer",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    description: {
      name: "description",
      objectTypeName: "itemType",
      type: "text",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    price: {
      name: "price",
      objectTypeName: "itemType",
      type: "currency",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "itemType",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "itemType",
      type: "weight",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    iconShape: {
      name: "iconShape",
      objectTypeName: "itemType",
      type: "icon-shape",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: "circle"
      }
    },
    iconBackgroundColor: {
      name: "iconBackgroundColor",
      objectTypeName: "itemType",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: "#000000"
      }
    },
    iconBorderColor: {
      name: "iconBorderColor",
      objectTypeName: "itemType",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    isAffectable: {
      name: "isAffectable",
      objectTypeName: "itemType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    excludeFromPathfinding: {
      name: "excludeFromPathfinding",
      objectTypeName: "itemType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "itemType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "itemType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "itemType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    itemTypeFamilyId: {
      name: "itemTypeFamilyId",
      objectTypeName: "itemType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "itemTypeFamilyId",
        targetModelName: "itemTypeFamily",
        propertyTypeName: "itemTypeFamily",
        options: {
          readOnly: !1
        }
      }
    },
    itemTypeFamily: {
      name: "itemTypeFamily",
      objectTypeName: "itemType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeFamilyId",
        targetModelName: "itemTypeFamily",
        propertyTypeName: "itemTypeFamily",
        options: {
          readOnly: !1
        }
      }
    },
    manufacturerId: {
      name: "manufacturerId",
      objectTypeName: "itemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "manufacturerId",
        targetModelName: "manufacturer",
        propertyTypeName: "manufacturer",
        options: {
          readOnly: !1
        }
      }
    },
    manufacturer: {
      name: "manufacturer",
      objectTypeName: "itemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "manufacturerId",
        targetModelName: "manufacturer",
        propertyTypeName: "manufacturer",
        options: {
          readOnly: !1
        }
      }
    },
    object3dModelId: {
      name: "object3dModelId",
      objectTypeName: "itemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "object3dModelId",
        targetModelName: "object3dModel",
        propertyTypeName: "object3dModel",
        options: {
          readOnly: !1
        }
      }
    },
    object3dModel: {
      name: "object3dModel",
      objectTypeName: "itemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "object3dModelId",
        targetModelName: "object3dModel",
        propertyTypeName: "object3dModel",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "itemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "itemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "itemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "itemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    itemTypePoints: {
      name: "itemTypePoints",
      objectTypeName: "itemType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemTypePoint",
        propertyTypeName: "itemTypePoints",
        options: {
          readOnly: !1
        }
      }
    },
    workplaceTypeItemTypes: {
      name: "workplaceTypeItemTypes",
      objectTypeName: "itemType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "workplaceTypeItemType",
        propertyTypeName: "workplaceTypeItemTypes",
        options: {
          readOnly: !1
        }
      }
    },
    items: {
      name: "items",
      objectTypeName: "itemType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "item",
        propertyTypeName: "items",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyToItemTypes: {
      name: "personCompanyToItemTypes",
      objectTypeName: "itemType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "personCompanyToItemType",
        propertyTypeName: "personCompanyToItemTypes",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "itemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "itemType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "itemTypes",
  camelized: {
    singular: "itemType",
    plural: "itemTypes",
    id: "itemTypeId"
  },
  capitalized: {
    singular: "ItemType",
    plural: "ItemTypes",
    id: "ItemTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "itemTypePoint",
      "workplaceTypeItemType",
      "item",
      "personCompanyToItemType"
    ],
    belongsTo: [
      "company"
    ]
  }
}, np = {
  name: "building",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "building",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "building",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "building",
      type: "color",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    surface: {
      name: "surface",
      objectTypeName: "building",
      type: "surface",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    leaseStartDate: {
      name: "leaseStartDate",
      objectTypeName: "building",
      type: "date",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    leaseEndDate: {
      name: "leaseEndDate",
      objectTypeName: "building",
      type: "date",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    purchaseDate: {
      name: "purchaseDate",
      objectTypeName: "building",
      type: "date",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    documents: {
      name: "documents",
      objectTypeName: "building",
      type: "url",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    picture: {
      name: "picture",
      objectTypeName: "building",
      type: "image",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    regulatoryCapacity: {
      name: "regulatoryCapacity",
      objectTypeName: "building",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    parkingSpaceCount: {
      name: "parkingSpaceCount",
      objectTypeName: "building",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    constructionYear: {
      name: "constructionYear",
      objectTypeName: "building",
      type: "year",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    yearlyCondominiumFees: {
      name: "yearlyCondominiumFees",
      objectTypeName: "building",
      type: "currency",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    yearlyRent: {
      name: "yearlyRent",
      objectTypeName: "building",
      type: "currency",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    yearlyParkingRent: {
      name: "yearlyParkingRent",
      objectTypeName: "building",
      type: "currency",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    yearlyTaxFees: {
      name: "yearlyTaxFees",
      objectTypeName: "building",
      type: "currency",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    yearlyExploitationFees: {
      name: "yearlyExploitationFees",
      objectTypeName: "building",
      type: "currency",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    rentReferenceIndex: {
      name: "rentReferenceIndex",
      objectTypeName: "building",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    securityDeposit: {
      name: "securityDeposit",
      objectTypeName: "building",
      type: "currency",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "building",
      type: "surface",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "building",
      type: "surface-by-workplace",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "building",
      type: "surface-by-people",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "building",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "building",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "building",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "building",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "building",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "building",
      type: "weight",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "building",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "building",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    dimensionPeopleCount: {
      name: "dimensionPeopleCount",
      objectTypeName: "building",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    address: {
      name: "address",
      objectTypeName: "building",
      type: "address",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "building",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "building",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "building",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "building",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !1
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "building",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !1
        }
      }
    },
    buildingTypeId: {
      name: "buildingTypeId",
      objectTypeName: "building",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingTypeId",
        targetModelName: "buildingType",
        propertyTypeName: "buildingType",
        options: {
          readOnly: !1
        }
      }
    },
    buildingType: {
      name: "buildingType",
      objectTypeName: "building",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingTypeId",
        targetModelName: "buildingType",
        propertyTypeName: "buildingType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyOwnerId: {
      name: "userCompanyOwnerId",
      objectTypeName: "building",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyOwnerId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyOwner",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyOwner: {
      name: "userCompanyOwner",
      objectTypeName: "building",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyOwnerId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyOwner",
        options: {
          readOnly: !1
        }
      }
    },
    jupUiLayoutId: {
      name: "jupUiLayoutId",
      objectTypeName: "building",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupUiLayoutId",
        targetModelName: "jupUiLayout",
        propertyTypeName: "jupUiLayout",
        options: {
          readOnly: !1
        }
      }
    },
    jupUiLayout: {
      name: "jupUiLayout",
      objectTypeName: "building",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiLayoutId",
        targetModelName: "jupUiLayout",
        propertyTypeName: "jupUiLayout",
        options: {
          readOnly: !1
        }
      }
    },
    campusId: {
      name: "campusId",
      objectTypeName: "building",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "campusId",
        targetModelName: "campus",
        propertyTypeName: "campus",
        options: {
          readOnly: !1
        }
      }
    },
    campus: {
      name: "campus",
      objectTypeName: "building",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "campusId",
        targetModelName: "campus",
        propertyTypeName: "campus",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "building",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "building",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    buildings: {
      name: "buildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "buildings",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "building",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "building",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "building",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "building",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    floors: {
      name: "floors",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "floor",
        propertyTypeName: "floors",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeGroupBuildings: {
      name: "roomTypeGroupBuildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "roomTypeGroupBuilding",
        propertyTypeName: "roomTypeGroupBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    costCenterBuildings: {
      name: "costCenterBuildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "costCenterBuilding",
        propertyTypeName: "costCenterBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionBuildings: {
      name: "dimensionBuildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "dimensionBuilding",
        propertyTypeName: "dimensionBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    facts: {
      name: "facts",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "fact",
        propertyTypeName: "facts",
        options: {
          readOnly: !1
        }
      }
    },
    organizationBuildings: {
      name: "organizationBuildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "organizationBuilding",
        propertyTypeName: "organizationBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeBuildings: {
      name: "roomTypeBuildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "roomTypeBuilding",
        propertyTypeName: "roomTypeBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    personToBuildings: {
      name: "personToBuildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "personToBuilding",
        propertyTypeName: "personToBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionTypeToBuildings: {
      name: "dimensionTypeToBuildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "dimensionTypeToBuilding",
        propertyTypeName: "dimensionTypeToBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleToBuildings: {
      name: "contentRoleToBuildings",
      objectTypeName: "building",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "contentRoleToBuilding",
        propertyTypeName: "contentRoleToBuildings",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "buildings",
  camelized: {
    singular: "building",
    plural: "buildings",
    id: "buildingId"
  },
  capitalized: {
    singular: "Building",
    plural: "Buildings",
    id: "BuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "building",
      "floor",
      "roomTypeGroupBuilding",
      "costCenterBuilding",
      "dimensionBuilding",
      "fact",
      "organizationBuilding",
      "roomTypeBuilding",
      "personToBuilding",
      "dimensionTypeToBuilding",
      "contentRoleToBuilding"
    ],
    belongsTo: [
      "company"
    ]
  }
}, rp = {
  name: "mapScale",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "mapScale",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "mapScale",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    p1: {
      name: "p1",
      objectTypeName: "mapScale",
      type: "point2d",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1,
        defaultValue: {
          x: 0,
          y: 0
        }
      }
    },
    p2: {
      name: "p2",
      objectTypeName: "mapScale",
      type: "point2d",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1,
        defaultValue: {
          x: 0,
          y: 0
        }
      }
    },
    length: {
      name: "length",
      objectTypeName: "mapScale",
      type: "distance",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        unit: {
          type: "distance",
          value: "meter"
        },
        defaultValue: 0
      }
    },
    ratio: {
      name: "ratio",
      objectTypeName: "mapScale",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    strokeWidth: {
      name: "strokeWidth",
      objectTypeName: "mapScale",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 1
      }
    },
    roomTextSize: {
      name: "roomTextSize",
      objectTypeName: "mapScale",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 18
      }
    },
    workplaceTextSize: {
      name: "workplaceTextSize",
      objectTypeName: "mapScale",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 12
      }
    },
    segmentDistanceTextSize: {
      name: "segmentDistanceTextSize",
      objectTypeName: "mapScale",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 6
      }
    },
    itemTypeIconSize: {
      name: "itemTypeIconSize",
      objectTypeName: "mapScale",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 12
      }
    },
    roomIconSize: {
      name: "roomIconSize",
      objectTypeName: "mapScale",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 64
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "mapScale",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "mapScale",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "mapScale",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "mapScale",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "mapScale",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "mapScale",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "mapScale",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    floors: {
      name: "floors",
      objectTypeName: "mapScale",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "mapScaleId",
        targetModelName: "floor",
        propertyTypeName: "floors",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "mapScale",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "mapScale",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "mapScales",
  camelized: {
    singular: "mapScale",
    plural: "mapScales",
    id: "mapScaleId"
  },
  capitalized: {
    singular: "MapScale",
    plural: "MapScales",
    id: "MapScaleId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "floor"
    ],
    belongsTo: [
      "company"
    ]
  }
}, lp = {
  name: "structure",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "structure",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "structure",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    transform: {
      name: "transform",
      objectTypeName: "structure",
      type: "transform",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "structure",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "structure",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "structure",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "structure",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "structure",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "structure",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "structure",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    structurePoints: {
      name: "structurePoints",
      objectTypeName: "structure",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "structureId",
        targetModelName: "structurePoint",
        propertyTypeName: "structurePoints",
        options: {
          readOnly: !1
        }
      }
    },
    floors: {
      name: "floors",
      objectTypeName: "structure",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "structureId",
        targetModelName: "floor",
        propertyTypeName: "floors",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "structure",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "structure",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "structures",
  camelized: {
    singular: "structure",
    plural: "structures",
    id: "structureId"
  },
  capitalized: {
    singular: "Structure",
    plural: "Structures",
    id: "StructureId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "structurePoint",
      "floor"
    ],
    belongsTo: [
      "company"
    ]
  }
}, pp = {
  name: "structurePoint",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "structurePoint",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    x: {
      name: "x",
      objectTypeName: "structurePoint",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    y: {
      name: "y",
      objectTypeName: "structurePoint",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    sortIndex: {
      name: "sortIndex",
      objectTypeName: "structurePoint",
      type: "integer",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "structurePoint",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "structurePoint",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "structurePoint",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    structureId: {
      name: "structureId",
      objectTypeName: "structurePoint",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "structureId",
        targetModelName: "structure",
        propertyTypeName: "structure",
        options: {
          readOnly: !1
        }
      }
    },
    structure: {
      name: "structure",
      objectTypeName: "structurePoint",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "structureId",
        targetModelName: "structure",
        propertyTypeName: "structure",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "structurePoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "structurePoint",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "structurePoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "structurePoint",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "structurePoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "structurePoint",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "structurePoints",
  camelized: {
    singular: "structurePoint",
    plural: "structurePoints",
    id: "structurePointId"
  },
  capitalized: {
    singular: "StructurePoint",
    plural: "StructurePoints",
    id: "StructurePointId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, sp = {
  name: "floor",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "floor",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "floor",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    level: {
      name: "level",
      objectTypeName: "floor",
      type: "integer",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    height: {
      name: "height",
      objectTypeName: "floor",
      type: "distance",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        unit: {
          type: "distance",
          value: "centimeter"
        },
        defaultValue: 240
      }
    },
    regulatoryCapacity: {
      name: "regulatoryCapacity",
      objectTypeName: "floor",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "floor",
      type: "surface",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "floor",
      type: "surface-by-workplace",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "floor",
      type: "surface-by-people",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "floor",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "floor",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "floor",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "floor",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "floor",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "floor",
      type: "weight",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "floor",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "floor",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    backgroundLayout: {
      name: "backgroundLayout",
      objectTypeName: "floor",
      type: "image",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    backgroundLayoutOpacity: {
      name: "backgroundLayoutOpacity",
      objectTypeName: "floor",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 1
      }
    },
    pathfindingGraph: {
      name: "pathfindingGraph",
      objectTypeName: "floor",
      type: "floor-navigation-graph",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "floor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "floor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "floor",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "floor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "floor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    mapScaleId: {
      name: "mapScaleId",
      objectTypeName: "floor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "mapScaleId",
        targetModelName: "mapScale",
        propertyTypeName: "mapScale",
        options: {
          readOnly: !1
        }
      }
    },
    mapScale: {
      name: "mapScale",
      objectTypeName: "floor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "mapScaleId",
        targetModelName: "mapScale",
        propertyTypeName: "mapScale",
        options: {
          readOnly: !1
        }
      }
    },
    structureId: {
      name: "structureId",
      objectTypeName: "floor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "structureId",
        targetModelName: "structure",
        propertyTypeName: "structure",
        options: {
          readOnly: !1
        }
      }
    },
    structure: {
      name: "structure",
      objectTypeName: "floor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "structureId",
        targetModelName: "structure",
        propertyTypeName: "structure",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "floor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "floor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "floor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "floor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeGroupFloors: {
      name: "roomTypeGroupFloors",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "roomTypeGroupFloor",
        propertyTypeName: "roomTypeGroupFloors",
        options: {
          readOnly: !1
        }
      }
    },
    costCenterFloors: {
      name: "costCenterFloors",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "costCenterFloor",
        propertyTypeName: "costCenterFloors",
        options: {
          readOnly: !1
        }
      }
    },
    rooms: {
      name: "rooms",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "room",
        propertyTypeName: "rooms",
        options: {
          readOnly: !1
        }
      }
    },
    roomPoints: {
      name: "roomPoints",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPoints",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionFloors: {
      name: "dimensionFloors",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "dimensionFloor",
        propertyTypeName: "dimensionFloors",
        options: {
          readOnly: !1
        }
      }
    },
    organizationFloors: {
      name: "organizationFloors",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "organizationFloor",
        propertyTypeName: "organizationFloors",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeFloors: {
      name: "roomTypeFloors",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "roomTypeFloor",
        propertyTypeName: "roomTypeFloors",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleToFloors: {
      name: "contentRoleToFloors",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "contentRoleToFloor",
        propertyTypeName: "contentRoleToFloors",
        options: {
          readOnly: !1
        }
      }
    },
    partnerExportMappingConfigurationToFloors: {
      name: "partnerExportMappingConfigurationToFloors",
      objectTypeName: "floor",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "partnerExportMappingConfigurationToFloor",
        propertyTypeName: "partnerExportMappingConfigurationToFloors",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "floor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "floor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "floors",
  camelized: {
    singular: "floor",
    plural: "floors",
    id: "floorId"
  },
  capitalized: {
    singular: "Floor",
    plural: "Floors",
    id: "FloorId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "roomTypeGroupFloor",
      "costCenterFloor",
      "room",
      "roomPoint",
      "dimensionFloor",
      "organizationFloor",
      "roomTypeFloor",
      "contentRoleToFloor",
      "partnerExportMappingConfigurationToFloor"
    ],
    belongsTo: [
      "company"
    ]
  }
}, yp = {
  name: "distributionCostType",
  type: "many-to-many",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "distributionCostType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "distributionCostType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "distributionCostType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "distributionCostType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "distributionCostType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "distributionCostType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "distributionCostType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "distributionCostType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "distributionCostType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "distributionCostType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypes: {
      name: "roomTypes",
      objectTypeName: "distributionCostType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "distributionCostTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomTypes",
        options: {
          readOnly: !1
        }
      }
    },
    rooms: {
      name: "rooms",
      objectTypeName: "distributionCostType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "distributionCostTypeId",
        targetModelName: "room",
        propertyTypeName: "rooms",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "distributionCostType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "distributionCostType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "distributionCostTypes",
  camelized: {
    singular: "distributionCostType",
    plural: "distributionCostTypes",
    id: "distributionCostTypeId"
  },
  capitalized: {
    singular: "DistributionCostType",
    plural: "DistributionCostTypes",
    id: "DistributionCostTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "roomType",
      "room"
    ],
    belongsTo: [
      "company"
    ]
  }
}, ip = {
  name: "roomTypeGroup",
  type: "table",
  scope: "public",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomTypeGroup",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "roomTypeGroup",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "roomTypeGroup",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "roomTypeGroup",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    exclude: {
      name: "exclude",
      objectTypeName: "roomTypeGroup",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomTypeGroup",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomTypeGroup",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomTypeGroup",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomTypeGroupToRoomTypes: {
      name: "roomTypeGroupToRoomTypes",
      objectTypeName: "roomTypeGroup",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroupToRoomType",
        propertyTypeName: "roomTypeGroupToRoomTypes",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeGroupFloors: {
      name: "roomTypeGroupFloors",
      objectTypeName: "roomTypeGroup",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroupFloor",
        propertyTypeName: "roomTypeGroupFloors",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeGroupBuildings: {
      name: "roomTypeGroupBuildings",
      objectTypeName: "roomTypeGroup",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroupBuilding",
        propertyTypeName: "roomTypeGroupBuildings",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "roomTypeGroups",
  camelized: {
    singular: "roomTypeGroup",
    plural: "roomTypeGroups",
    id: "roomTypeGroupId"
  },
  capitalized: {
    singular: "RoomTypeGroup",
    plural: "RoomTypeGroups",
    id: "RoomTypeGroupId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "roomTypeGroupToRoomType",
      "roomTypeGroupFloor",
      "roomTypeGroupBuilding"
    ],
    belongsTo: []
  }
}, dp = {
  name: "roomType",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "roomType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "roomType",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    icon: {
      name: "icon",
      objectTypeName: "roomType",
      type: "icon",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color3d: {
      name: "color3d",
      objectTypeName: "roomType",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "roomType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    displayWallsOn3d: {
      name: "displayWallsOn3d",
      objectTypeName: "roomType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !0
      }
    },
    cadence: {
      name: "cadence",
      objectTypeName: "roomType",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    isBookable: {
      name: "isBookable",
      objectTypeName: "roomType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    distributionCostTypeId: {
      name: "distributionCostTypeId",
      objectTypeName: "roomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "distributionCostTypeId",
        targetModelName: "distributionCostType",
        propertyTypeName: "distributionCostType",
        options: {
          readOnly: !1
        }
      }
    },
    distributionCostType: {
      name: "distributionCostType",
      objectTypeName: "roomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "distributionCostTypeId",
        targetModelName: "distributionCostType",
        propertyTypeName: "distributionCostType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    roomTypeGroupToRoomTypes: {
      name: "roomTypeGroupToRoomTypes",
      objectTypeName: "roomType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomTypeGroupToRoomType",
        propertyTypeName: "roomTypeGroupToRoomTypes",
        options: {
          readOnly: !1
        }
      }
    },
    rooms: {
      name: "rooms",
      objectTypeName: "roomType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "room",
        propertyTypeName: "rooms",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeFloors: {
      name: "roomTypeFloors",
      objectTypeName: "roomType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomTypeFloor",
        propertyTypeName: "roomTypeFloors",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeBuildings: {
      name: "roomTypeBuildings",
      objectTypeName: "roomType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomTypeBuilding",
        propertyTypeName: "roomTypeBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyToRoomTypes: {
      name: "personCompanyToRoomTypes",
      objectTypeName: "roomType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "personCompanyToRoomType",
        propertyTypeName: "personCompanyToRoomTypes",
        options: {
          readOnly: !1
        }
      }
    },
    partnerExportMappingToRoomTypes: {
      name: "partnerExportMappingToRoomTypes",
      objectTypeName: "roomType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "partnerExportMappingToRoomType",
        propertyTypeName: "partnerExportMappingToRoomTypes",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomTypes",
  camelized: {
    singular: "roomType",
    plural: "roomTypes",
    id: "roomTypeId"
  },
  capitalized: {
    singular: "RoomType",
    plural: "RoomTypes",
    id: "RoomTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "roomTypeGroupToRoomType",
      "room",
      "roomTypeFloor",
      "roomTypeBuilding",
      "personCompanyToRoomType",
      "partnerExportMappingToRoomType"
    ],
    belongsTo: [
      "company"
    ]
  }
}, cp = {
  name: "roomTypeGroupToRoomType",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomTypeGroupId: {
      name: "roomTypeGroupId",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroup",
        propertyTypeName: "roomTypeGroup",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeGroup: {
      name: "roomTypeGroup",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroup",
        propertyTypeName: "roomTypeGroup",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeId: {
      name: "roomTypeId",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    roomType: {
      name: "roomType",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomTypeGroupToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomTypeGroupToRoomTypes",
  camelized: {
    singular: "roomTypeGroupToRoomType",
    plural: "roomTypeGroupToRoomTypes",
    id: "roomTypeGroupToRoomTypeId"
  },
  capitalized: {
    singular: "RoomTypeGroupToRoomType",
    plural: "RoomTypeGroupToRoomTypes",
    id: "RoomTypeGroupToRoomTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, mp = {
  name: "roomTypeGroupFloor",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomTypeGroupFloor",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "roomTypeGroupFloor",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "roomTypeGroupFloor",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "roomTypeGroupFloor",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "roomTypeGroupFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "roomTypeGroupFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "roomTypeGroupFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "roomTypeGroupFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "roomTypeGroupFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "roomTypeGroupFloor",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "roomTypeGroupFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "roomTypeGroupFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomTypeGroupFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomTypeGroupFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomTypeGroupFloor",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomTypeGroupId: {
      name: "roomTypeGroupId",
      objectTypeName: "roomTypeGroupFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroup",
        propertyTypeName: "roomTypeGroup",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeGroup: {
      name: "roomTypeGroup",
      objectTypeName: "roomTypeGroupFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroup",
        propertyTypeName: "roomTypeGroup",
        options: {
          readOnly: !1
        }
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "roomTypeGroupFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "roomTypeGroupFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomTypeGroupFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomTypeGroupFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomTypeGroupFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomTypeGroupFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomTypeGroupFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomTypeGroupFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomTypeGroupFloors",
  camelized: {
    singular: "roomTypeGroupFloor",
    plural: "roomTypeGroupFloors",
    id: "roomTypeGroupFloorId"
  },
  capitalized: {
    singular: "RoomTypeGroupFloor",
    plural: "RoomTypeGroupFloors",
    id: "RoomTypeGroupFloorId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, up = {
  name: "roomTypeGroupBuilding",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomTypeGroupBuilding",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "roomTypeGroupBuilding",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "roomTypeGroupBuilding",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "roomTypeGroupBuilding",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "roomTypeGroupBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "roomTypeGroupBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "roomTypeGroupBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "roomTypeGroupBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "roomTypeGroupBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "roomTypeGroupBuilding",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "roomTypeGroupBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "roomTypeGroupBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomTypeGroupBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomTypeGroupBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomTypeGroupBuilding",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomTypeGroupId: {
      name: "roomTypeGroupId",
      objectTypeName: "roomTypeGroupBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroup",
        propertyTypeName: "roomTypeGroup",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeGroup: {
      name: "roomTypeGroup",
      objectTypeName: "roomTypeGroupBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeGroupId",
        targetModelName: "roomTypeGroup",
        propertyTypeName: "roomTypeGroup",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "roomTypeGroupBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "roomTypeGroupBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomTypeGroupBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomTypeGroupBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomTypeGroupBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomTypeGroupBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomTypeGroupBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomTypeGroupBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomTypeGroupBuildings",
  camelized: {
    singular: "roomTypeGroupBuilding",
    plural: "roomTypeGroupBuildings",
    id: "roomTypeGroupBuildingId"
  },
  capitalized: {
    singular: "RoomTypeGroupBuilding",
    plural: "RoomTypeGroupBuildings",
    id: "RoomTypeGroupBuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, fp = {
  name: "costCenter",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "costCenter",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "costCenter",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "costCenter",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    info: {
      name: "info",
      objectTypeName: "costCenter",
      type: "text",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    distributeByFloor: {
      name: "distributeByFloor",
      objectTypeName: "costCenter",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    distributeByBuilding: {
      name: "distributeByBuilding",
      objectTypeName: "costCenter",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "costCenter",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "costCenter",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "costCenter",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "costCenter",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "costCenter",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "costCenter",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "costCenter",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "costCenter",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    costCenterBuildings: {
      name: "costCenterBuildings",
      objectTypeName: "costCenter",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenterBuilding",
        propertyTypeName: "costCenterBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    costCenterFloors: {
      name: "costCenterFloors",
      objectTypeName: "costCenter",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenterFloor",
        propertyTypeName: "costCenterFloors",
        options: {
          readOnly: !1
        }
      }
    },
    rooms: {
      name: "rooms",
      objectTypeName: "costCenter",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "room",
        propertyTypeName: "rooms",
        options: {
          readOnly: !1
        }
      }
    },
    people: {
      name: "people",
      objectTypeName: "costCenter",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "person",
        propertyTypeName: "people",
        options: {
          readOnly: !1
        }
      }
    },
    workplaces: {
      name: "workplaces",
      objectTypeName: "costCenter",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "workplace",
        propertyTypeName: "workplaces",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "costCenter",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "costCenter",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "costCenters",
  camelized: {
    singular: "costCenter",
    plural: "costCenters",
    id: "costCenterId"
  },
  capitalized: {
    singular: "CostCenter",
    plural: "CostCenters",
    id: "CostCenterId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "costCenterBuilding",
      "costCenterFloor",
      "room",
      "person",
      "workplace"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Tp = {
  name: "costCenterBuilding",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "costCenterBuilding",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "costCenterBuilding",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "costCenterBuilding",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "costCenterBuilding",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "costCenterBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "costCenterBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "costCenterBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "costCenterBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "costCenterBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "costCenterBuilding",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "costCenterBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "costCenterBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "costCenterBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "costCenterBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "costCenterBuilding",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    costCenterId: {
      name: "costCenterId",
      objectTypeName: "costCenterBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    costCenter: {
      name: "costCenter",
      objectTypeName: "costCenterBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "costCenterBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "costCenterBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "costCenterBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "costCenterBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "costCenterBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "costCenterBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "costCenterBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "costCenterBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "costCenterBuildings",
  camelized: {
    singular: "costCenterBuilding",
    plural: "costCenterBuildings",
    id: "costCenterBuildingId"
  },
  capitalized: {
    singular: "CostCenterBuilding",
    plural: "CostCenterBuildings",
    id: "CostCenterBuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, gp = {
  name: "costCenterFloor",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "costCenterFloor",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "costCenterFloor",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "costCenterFloor",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "costCenterFloor",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "costCenterFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "costCenterFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "costCenterFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "costCenterFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "costCenterFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "costCenterFloor",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "costCenterFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "costCenterFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "costCenterFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "costCenterFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "costCenterFloor",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    costCenterId: {
      name: "costCenterId",
      objectTypeName: "costCenterFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    costCenter: {
      name: "costCenter",
      objectTypeName: "costCenterFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "costCenterFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "costCenterFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "costCenterFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "costCenterFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "costCenterFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "costCenterFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "costCenterFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "costCenterFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "costCenterFloors",
  camelized: {
    singular: "costCenterFloor",
    plural: "costCenterFloors",
    id: "costCenterFloorId"
  },
  capitalized: {
    singular: "CostCenterFloor",
    plural: "CostCenterFloors",
    id: "CostCenterFloorId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Cp = {
  name: "room",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "room",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "room",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    prettyName: {
      name: "prettyName",
      objectTypeName: "room",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    area: {
      name: "area",
      objectTypeName: "room",
      type: "surface",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1
      }
    },
    perimeter: {
      name: "perimeter",
      objectTypeName: "room",
      type: "distance",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "distance",
          value: "meter"
        },
        defaultValue: 0
      }
    },
    textAnchor: {
      name: "textAnchor",
      objectTypeName: "room",
      type: "textAnchor",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    capacity: {
      name: "capacity",
      objectTypeName: "room",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "room",
      type: "surface-by-workplace",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "room",
      type: "surface-by-people",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "room",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "room",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "room",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "room",
      type: "percentage",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "room",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "room",
      type: "weight",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "room",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "room",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    info: {
      name: "info",
      objectTypeName: "room",
      type: "text",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    bookingEmail: {
      name: "bookingEmail",
      objectTypeName: "room",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    externalId2: {
      name: "externalId2",
      objectTypeName: "room",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    picture: {
      name: "picture",
      objectTypeName: "room",
      type: "image",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    keyCylinderCode: {
      name: "keyCylinderCode",
      objectTypeName: "room",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    livePeopleCount: {
      name: "livePeopleCount",
      objectTypeName: "room",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "room",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "room",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "room",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    occupancyStatusId: {
      name: "occupancyStatusId",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "occupancyStatusId",
        targetModelName: "occupancyStatus",
        propertyTypeName: "occupancyStatus",
        options: {
          readOnly: !1
        }
      }
    },
    occupancyStatus: {
      name: "occupancyStatus",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "occupancyStatusId",
        targetModelName: "occupancyStatus",
        propertyTypeName: "occupancyStatus",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeId: {
      name: "roomTypeId",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    roomType: {
      name: "roomType",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    organizationId: {
      name: "organizationId",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    organization: {
      name: "organization",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    costCenterId: {
      name: "costCenterId",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    costCenter: {
      name: "costCenter",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    distributionCostTypeId: {
      name: "distributionCostTypeId",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "distributionCostTypeId",
        targetModelName: "distributionCostType",
        propertyTypeName: "distributionCostType",
        options: {
          readOnly: !1
        }
      }
    },
    distributionCostType: {
      name: "distributionCostType",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "distributionCostTypeId",
        targetModelName: "distributionCostType",
        propertyTypeName: "distributionCostType",
        options: {
          readOnly: !1
        }
      }
    },
    roomConnectorId: {
      name: "roomConnectorId",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomConnectorId",
        targetModelName: "roomConnector",
        propertyTypeName: "roomConnector",
        options: {
          readOnly: !1
        }
      }
    },
    roomConnector: {
      name: "roomConnector",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomConnectorId",
        targetModelName: "roomConnector",
        propertyTypeName: "roomConnector",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    roomPointRooms: {
      name: "roomPointRooms",
      objectTypeName: "room",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "roomPointRoom",
        propertyTypeName: "roomPointRooms",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionRooms: {
      name: "dimensionRooms",
      objectTypeName: "room",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "dimensionRoom",
        propertyTypeName: "dimensionRooms",
        options: {
          readOnly: !1
        }
      }
    },
    roomAffectations: {
      name: "roomAffectations",
      objectTypeName: "room",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "roomAffectation",
        propertyTypeName: "roomAffectations",
        options: {
          readOnly: !1
        }
      }
    },
    workplaces: {
      name: "workplaces",
      objectTypeName: "room",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "workplace",
        propertyTypeName: "workplaces",
        options: {
          readOnly: !1
        }
      }
    },
    items: {
      name: "items",
      objectTypeName: "room",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "item",
        propertyTypeName: "items",
        options: {
          readOnly: !1
        }
      }
    },
    personToRoomBookings: {
      name: "personToRoomBookings",
      objectTypeName: "room",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "personToRoomBooking",
        propertyTypeName: "personToRoomBookings",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "room",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "room",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "rooms",
  camelized: {
    singular: "room",
    plural: "rooms",
    id: "roomId"
  },
  capitalized: {
    singular: "Room",
    plural: "Rooms",
    id: "RoomId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "roomPointRoom",
      "dimensionRoom",
      "roomAffectation",
      "workplace",
      "item",
      "personToRoomBooking"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Np = {
  name: "roomPoint",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomPoint",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    x: {
      name: "x",
      objectTypeName: "roomPoint",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    y: {
      name: "y",
      objectTypeName: "roomPoint",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomPoint",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomPoint",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomPoint",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "roomPoint",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "roomPoint",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomPoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomPoint",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomPoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomPoint",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    roomPointRooms: {
      name: "roomPointRooms",
      objectTypeName: "roomPoint",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomPointId",
        targetModelName: "roomPointRoom",
        propertyTypeName: "roomPointRooms",
        options: {
          readOnly: !1
        }
      }
    },
    roomPointSegmentStarts: {
      name: "roomPointSegmentStarts",
      objectTypeName: "roomPoint",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomPointStartId",
        targetModelName: "roomPointSegment",
        propertyTypeName: "roomPointSegmentStarts",
        options: {
          readOnly: !1
        }
      }
    },
    roomPointSegmentEnds: {
      name: "roomPointSegmentEnds",
      objectTypeName: "roomPoint",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomPointEndId",
        targetModelName: "roomPointSegment",
        propertyTypeName: "roomPointSegmentEnds",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomPoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomPoint",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomPoints",
  camelized: {
    singular: "roomPoint",
    plural: "roomPoints",
    id: "roomPointId"
  },
  capitalized: {
    singular: "RoomPoint",
    plural: "RoomPoints",
    id: "RoomPointId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "roomPointRoom",
      "roomPointSegment"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Op = {
  name: "roomPointRoom",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomPointRoom",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    sortIndex: {
      name: "sortIndex",
      objectTypeName: "roomPointRoom",
      type: "integer",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomPointRoom",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomPointRoom",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomPointRoom",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomId: {
      name: "roomId",
      objectTypeName: "roomPointRoom",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    room: {
      name: "room",
      objectTypeName: "roomPointRoom",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    roomPointId: {
      name: "roomPointId",
      objectTypeName: "roomPointRoom",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomPointId",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPoint",
        options: {
          readOnly: !1
        }
      }
    },
    roomPoint: {
      name: "roomPoint",
      objectTypeName: "roomPointRoom",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomPointId",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPoint",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomPointRoom",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomPointRoom",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomPointRoom",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomPointRoom",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomPointRoom",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomPointRoom",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomPointRooms",
  camelized: {
    singular: "roomPointRoom",
    plural: "roomPointRooms",
    id: "roomPointRoomId"
  },
  capitalized: {
    singular: "RoomPointRoom",
    plural: "RoomPointRooms",
    id: "RoomPointRoomId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, bp = {
  name: "roomPointSegmentType",
  type: "table",
  scope: "public",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomPointSegmentType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "roomPointSegmentType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "roomPointSegmentType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomPointSegmentType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomPointSegmentType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomPointSegmentType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomPointSegments: {
      name: "roomPointSegments",
      objectTypeName: "roomPointSegmentType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomPointSegmentTypeId",
        targetModelName: "roomPointSegment",
        propertyTypeName: "roomPointSegments",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "roomPointSegmentTypes",
  camelized: {
    singular: "roomPointSegmentType",
    plural: "roomPointSegmentTypes",
    id: "roomPointSegmentTypeId"
  },
  capitalized: {
    singular: "RoomPointSegmentType",
    plural: "RoomPointSegmentTypes",
    id: "RoomPointSegmentTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "roomPointSegment"
    ],
    belongsTo: []
  }
}, hp = {
  name: "roomPointSegment",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomPointSegment",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    reversePoints: {
      name: "reversePoints",
      objectTypeName: "roomPointSegment",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    displayBothSides: {
      name: "displayBothSides",
      objectTypeName: "roomPointSegment",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomPointSegment",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomPointSegment",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomPointSegment",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomPointSegmentTypeId: {
      name: "roomPointSegmentTypeId",
      objectTypeName: "roomPointSegment",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomPointSegmentTypeId",
        targetModelName: "roomPointSegmentType",
        propertyTypeName: "roomPointSegmentType",
        options: {
          readOnly: !1
        }
      }
    },
    roomPointSegmentType: {
      name: "roomPointSegmentType",
      objectTypeName: "roomPointSegment",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomPointSegmentTypeId",
        targetModelName: "roomPointSegmentType",
        propertyTypeName: "roomPointSegmentType",
        options: {
          readOnly: !1
        }
      }
    },
    roomPointStartId: {
      name: "roomPointStartId",
      objectTypeName: "roomPointSegment",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomPointStartId",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPointStart",
        options: {
          readOnly: !1
        }
      }
    },
    roomPointStart: {
      name: "roomPointStart",
      objectTypeName: "roomPointSegment",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomPointStartId",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPointStart",
        options: {
          readOnly: !1
        }
      }
    },
    roomPointEndId: {
      name: "roomPointEndId",
      objectTypeName: "roomPointSegment",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomPointEndId",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPointEnd",
        options: {
          readOnly: !1
        }
      }
    },
    roomPointEnd: {
      name: "roomPointEnd",
      objectTypeName: "roomPointSegment",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomPointEndId",
        targetModelName: "roomPoint",
        propertyTypeName: "roomPointEnd",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomPointSegment",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomPointSegment",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomPointSegment",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomPointSegment",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomPointSegment",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomPointSegment",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomPointSegments",
  camelized: {
    singular: "roomPointSegment",
    plural: "roomPointSegments",
    id: "roomPointSegmentId"
  },
  capitalized: {
    singular: "RoomPointSegment",
    plural: "RoomPointSegments",
    id: "RoomPointSegmentId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, jp = {
  name: "itemTypePoint",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "itemTypePoint",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    x: {
      name: "x",
      objectTypeName: "itemTypePoint",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    y: {
      name: "y",
      objectTypeName: "itemTypePoint",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    sortIndex: {
      name: "sortIndex",
      objectTypeName: "itemTypePoint",
      type: "integer",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "itemTypePoint",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "itemTypePoint",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "itemTypePoint",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    itemTypeId: {
      name: "itemTypeId",
      objectTypeName: "itemTypePoint",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemType",
        propertyTypeName: "itemType",
        options: {
          readOnly: !1
        }
      }
    },
    itemType: {
      name: "itemType",
      objectTypeName: "itemTypePoint",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemType",
        propertyTypeName: "itemType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "itemTypePoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "itemTypePoint",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "itemTypePoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "itemTypePoint",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "itemTypePoint",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "itemTypePoint",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "itemTypePoints",
  camelized: {
    singular: "itemTypePoint",
    plural: "itemTypePoints",
    id: "itemTypePointId"
  },
  capitalized: {
    singular: "ItemTypePoint",
    plural: "ItemTypePoints",
    id: "ItemTypePointId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Bp = {
  name: "dimensionType",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "dimensionType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "dimensionType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "dimensionType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    order: {
      name: "order",
      objectTypeName: "dimensionType",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    description: {
      name: "description",
      objectTypeName: "dimensionType",
      type: "text",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "dimensionType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "dimensionType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "dimensionType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "dimensionType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "dimensionType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "dimensionType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "dimensionType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    dimensions: {
      name: "dimensions",
      objectTypeName: "dimensionType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimension",
        propertyTypeName: "dimensions",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionRooms: {
      name: "dimensionRooms",
      objectTypeName: "dimensionType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionRoom",
        propertyTypeName: "dimensionRooms",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionFloors: {
      name: "dimensionFloors",
      objectTypeName: "dimensionType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionFloor",
        propertyTypeName: "dimensionFloors",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionBuildings: {
      name: "dimensionBuildings",
      objectTypeName: "dimensionType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionBuilding",
        propertyTypeName: "dimensionBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionTypeToBuildings: {
      name: "dimensionTypeToBuildings",
      objectTypeName: "dimensionType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionTypeToBuilding",
        propertyTypeName: "dimensionTypeToBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "dimensionType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "dimensionType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "dimensionTypes",
  camelized: {
    singular: "dimensionType",
    plural: "dimensionTypes",
    id: "dimensionTypeId"
  },
  capitalized: {
    singular: "DimensionType",
    plural: "DimensionTypes",
    id: "DimensionTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "dimension",
      "dimensionRoom",
      "dimensionFloor",
      "dimensionBuilding",
      "dimensionTypeToBuilding"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Ip = {
  name: "dimension",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "dimension",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "dimension",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "dimension",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    value: {
      name: "value",
      objectTypeName: "dimension",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "dimension",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "dimension",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    manualPeopleCount: {
      name: "manualPeopleCount",
      objectTypeName: "dimension",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprintPerMeter: {
      name: "carbonFootprintPerMeter",
      objectTypeName: "dimension",
      type: "weight",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "dimension",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "dimension",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "dimension",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    dimensionTypeId: {
      name: "dimensionTypeId",
      objectTypeName: "dimension",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionType: {
      name: "dimensionType",
      objectTypeName: "dimension",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "dimension",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "dimension",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "dimension",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "dimension",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    dimensionRooms: {
      name: "dimensionRooms",
      objectTypeName: "dimension",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimensionRoom",
        propertyTypeName: "dimensionRooms",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionFloors: {
      name: "dimensionFloors",
      objectTypeName: "dimension",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimensionFloor",
        propertyTypeName: "dimensionFloors",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionBuildings: {
      name: "dimensionBuildings",
      objectTypeName: "dimension",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimensionBuilding",
        propertyTypeName: "dimensionBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionToPeople: {
      name: "dimensionToPeople",
      objectTypeName: "dimension",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimensionToPerson",
        propertyTypeName: "dimensionToPeople",
        options: {
          readOnly: !1
        }
      }
    },
    personToDimensionBookings: {
      name: "personToDimensionBookings",
      objectTypeName: "dimension",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "personToDimensionBooking",
        propertyTypeName: "personToDimensionBookings",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "dimension",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "dimension",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "dimensions",
  camelized: {
    singular: "dimension",
    plural: "dimensions",
    id: "dimensionId"
  },
  capitalized: {
    singular: "Dimension",
    plural: "Dimensions",
    id: "DimensionId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "dimensionRoom",
      "dimensionFloor",
      "dimensionBuilding",
      "dimensionToPerson",
      "personToDimensionBooking"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Rp = {
  name: "dimensionRoom",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "dimensionRoom",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "dimensionRoom",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "dimensionRoom",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "dimensionRoom",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    dimensionId: {
      name: "dimensionId",
      objectTypeName: "dimensionRoom",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    dimension: {
      name: "dimension",
      objectTypeName: "dimensionRoom",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    roomId: {
      name: "roomId",
      objectTypeName: "dimensionRoom",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    room: {
      name: "room",
      objectTypeName: "dimensionRoom",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionTypeId: {
      name: "dimensionTypeId",
      objectTypeName: "dimensionRoom",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionType: {
      name: "dimensionType",
      objectTypeName: "dimensionRoom",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "dimensionRoom",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "dimensionRoom",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "dimensionRoom",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "dimensionRoom",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "dimensionRoom",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "dimensionRoom",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "dimensionRooms",
  camelized: {
    singular: "dimensionRoom",
    plural: "dimensionRooms",
    id: "dimensionRoomId"
  },
  capitalized: {
    singular: "DimensionRoom",
    plural: "DimensionRooms",
    id: "DimensionRoomId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Mp = {
  name: "dimensionFloor",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "dimensionFloor",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "dimensionFloor",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "dimensionFloor",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "dimensionFloor",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "dimensionFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "dimensionFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "dimensionFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "dimensionFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "dimensionFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "dimensionFloor",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "dimensionFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "dimensionFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "dimensionFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "dimensionFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "dimensionFloor",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    dimensionId: {
      name: "dimensionId",
      objectTypeName: "dimensionFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    dimension: {
      name: "dimension",
      objectTypeName: "dimensionFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionTypeId: {
      name: "dimensionTypeId",
      objectTypeName: "dimensionFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionType: {
      name: "dimensionType",
      objectTypeName: "dimensionFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "dimensionFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "dimensionFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "dimensionFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "dimensionFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "dimensionFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "dimensionFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "dimensionFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "dimensionFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "dimensionFloors",
  camelized: {
    singular: "dimensionFloor",
    plural: "dimensionFloors",
    id: "dimensionFloorId"
  },
  capitalized: {
    singular: "DimensionFloor",
    plural: "DimensionFloors",
    id: "DimensionFloorId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Up = {
  name: "dimensionBuilding",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "dimensionBuilding",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    dimensionPeopleCount: {
      name: "dimensionPeopleCount",
      objectTypeName: "dimensionBuilding",
      type: "integer",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "dimensionBuilding",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "dimensionBuilding",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "dimensionBuilding",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "dimensionBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "dimensionBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "dimensionBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "dimensionBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "dimensionBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "dimensionBuilding",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "dimensionBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "dimensionBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "dimensionBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "dimensionBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "dimensionBuilding",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    dimensionId: {
      name: "dimensionId",
      objectTypeName: "dimensionBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    dimension: {
      name: "dimension",
      objectTypeName: "dimensionBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionTypeId: {
      name: "dimensionTypeId",
      objectTypeName: "dimensionBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionType: {
      name: "dimensionType",
      objectTypeName: "dimensionBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "dimensionBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "dimensionBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "dimensionBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "dimensionBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "dimensionBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "dimensionBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "dimensionBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "dimensionBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "dimensionBuildings",
  camelized: {
    singular: "dimensionBuilding",
    plural: "dimensionBuildings",
    id: "dimensionBuildingId"
  },
  capitalized: {
    singular: "DimensionBuilding",
    plural: "DimensionBuildings",
    id: "DimensionBuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, kp = {
  name: "factType",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "factType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "factType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "factType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "factType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "factType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "factType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "factType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "factType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "factType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "factType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    facts: {
      name: "facts",
      objectTypeName: "factType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "factTypeId",
        targetModelName: "fact",
        propertyTypeName: "facts",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "factType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "factType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "factTypes",
  camelized: {
    singular: "factType",
    plural: "factTypes",
    id: "factTypeId"
  },
  capitalized: {
    singular: "FactType",
    plural: "FactTypes",
    id: "FactTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "fact"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Kp = {
  name: "fact",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "fact",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    value: {
      name: "value",
      objectTypeName: "fact",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    date: {
      name: "date",
      objectTypeName: "fact",
      type: "date",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "fact",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "fact",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "fact",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    factTypeId: {
      name: "factTypeId",
      objectTypeName: "fact",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "factTypeId",
        targetModelName: "factType",
        propertyTypeName: "factType",
        options: {
          readOnly: !1
        }
      }
    },
    factType: {
      name: "factType",
      objectTypeName: "fact",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "factTypeId",
        targetModelName: "factType",
        propertyTypeName: "factType",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "fact",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "fact",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "fact",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "fact",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "fact",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "fact",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "fact",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "fact",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "facts",
  camelized: {
    singular: "fact",
    plural: "facts",
    id: "factId"
  },
  capitalized: {
    singular: "Fact",
    plural: "Facts",
    id: "FactId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Pp = {
  name: "personState",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personState",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "personState",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personState",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personState",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personState",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personState",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personState",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personState",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personState",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    people: {
      name: "people",
      objectTypeName: "personState",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personStateId",
        targetModelName: "person",
        propertyTypeName: "people",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personState",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personState",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personStates",
  camelized: {
    singular: "personState",
    plural: "personStates",
    id: "personStateId"
  },
  capitalized: {
    singular: "PersonState",
    plural: "PersonStates",
    id: "PersonStateId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "person"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Ap = {
  name: "personSecurityProfile",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personSecurityProfile",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "personSecurityProfile",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    color: {
      name: "color",
      objectTypeName: "personSecurityProfile",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    icon: {
      name: "icon",
      objectTypeName: "personSecurityProfile",
      type: "icon",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personSecurityProfile",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personSecurityProfile",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personSecurityProfile",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personSecurityProfile",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personSecurityProfile",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personSecurityProfile",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personSecurityProfile",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    people: {
      name: "people",
      objectTypeName: "personSecurityProfile",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personSecurityProfileId",
        targetModelName: "person",
        propertyTypeName: "people",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personSecurityProfile",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personSecurityProfile",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personSecurityProfiles",
  camelized: {
    singular: "personSecurityProfile",
    plural: "personSecurityProfiles",
    id: "personSecurityProfileId"
  },
  capitalized: {
    singular: "PersonSecurityProfile",
    plural: "PersonSecurityProfiles",
    id: "PersonSecurityProfileId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "person"
    ],
    belongsTo: [
      "company"
    ]
  }
}, xp = {
  name: "person",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "person",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    firstname: {
      name: "firstname",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    lastname: {
      name: "lastname",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    fullname: {
      name: "fullname",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1
      }
    },
    email: {
      name: "email",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    picture: {
      name: "picture",
      objectTypeName: "person",
      type: "image",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    title: {
      name: "title",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    monitorReference: {
      name: "monitorReference",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    computerReference: {
      name: "computerReference",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    telephone: {
      name: "telephone",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    cellphone: {
      name: "cellphone",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    badgeNumber: {
      name: "badgeNumber",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    badgeRestaurant: {
      name: "badgeRestaurant",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    boxNumber: {
      name: "boxNumber",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    registrationNumber: {
      name: "registrationNumber",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    startDate: {
      name: "startDate",
      objectTypeName: "person",
      type: "date",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    endDate: {
      name: "endDate",
      objectTypeName: "person",
      type: "date",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    info: {
      name: "info",
      objectTypeName: "person",
      type: "text",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    notAffectable: {
      name: "notAffectable",
      objectTypeName: "person",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "person",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "person",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "person",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanies: {
      name: "userCompanies",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanies",
        options: {
          readOnly: !1
        }
      }
    },
    organizationId: {
      name: "organizationId",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    organization: {
      name: "organization",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    personStateId: {
      name: "personStateId",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personStateId",
        targetModelName: "personState",
        propertyTypeName: "personState",
        options: {
          readOnly: !1
        }
      }
    },
    personState: {
      name: "personState",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personStateId",
        targetModelName: "personState",
        propertyTypeName: "personState",
        options: {
          readOnly: !1
        }
      }
    },
    personSecurityProfileId: {
      name: "personSecurityProfileId",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personSecurityProfileId",
        targetModelName: "personSecurityProfile",
        propertyTypeName: "personSecurityProfile",
        options: {
          readOnly: !1
        }
      }
    },
    personSecurityProfile: {
      name: "personSecurityProfile",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personSecurityProfileId",
        targetModelName: "personSecurityProfile",
        propertyTypeName: "personSecurityProfile",
        options: {
          readOnly: !1
        }
      }
    },
    costCenterId: {
      name: "costCenterId",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    costCenter: {
      name: "costCenter",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyId: {
      name: "personCompanyId",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompany",
        propertyTypeName: "personCompany",
        options: {
          readOnly: !1
        }
      }
    },
    personCompany: {
      name: "personCompany",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompany",
        propertyTypeName: "personCompany",
        options: {
          readOnly: !1
        }
      }
    },
    personGenderId: {
      name: "personGenderId",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personGenderId",
        targetModelName: "personGender",
        propertyTypeName: "personGender",
        options: {
          readOnly: !1
        }
      }
    },
    personGender: {
      name: "personGender",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personGenderId",
        targetModelName: "personGender",
        propertyTypeName: "personGender",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    personToPersonSources: {
      name: "personToPersonSources",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personSourceId",
        targetModelName: "personToPerson",
        propertyTypeName: "personToPersonSources",
        options: {
          readOnly: !1
        }
      }
    },
    personToPersonTargets: {
      name: "personToPersonTargets",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personTargetId",
        targetModelName: "personToPerson",
        propertyTypeName: "personToPersonTargets",
        options: {
          readOnly: !1
        }
      }
    },
    roomAffectations: {
      name: "roomAffectations",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "roomAffectation",
        propertyTypeName: "roomAffectations",
        options: {
          readOnly: !1
        }
      }
    },
    workplaceAffectations: {
      name: "workplaceAffectations",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "workplaceAffectation",
        propertyTypeName: "workplaceAffectations",
        options: {
          readOnly: !1
        }
      }
    },
    itemToPeople: {
      name: "itemToPeople",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "itemToPerson",
        propertyTypeName: "itemToPeople",
        options: {
          readOnly: !1
        }
      }
    },
    personToBuildings: {
      name: "personToBuildings",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "personToBuilding",
        propertyTypeName: "personToBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionToPeople: {
      name: "dimensionToPeople",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "dimensionToPerson",
        propertyTypeName: "dimensionToPeople",
        options: {
          readOnly: !1
        }
      }
    },
    personWorkingLocations: {
      name: "personWorkingLocations",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocations",
        options: {
          readOnly: !1
        }
      }
    },
    personToWorkplaceBookings: {
      name: "personToWorkplaceBookings",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "personToWorkplaceBooking",
        propertyTypeName: "personToWorkplaceBookings",
        options: {
          readOnly: !1
        }
      }
    },
    personToRoomBookings: {
      name: "personToRoomBookings",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "personToRoomBooking",
        propertyTypeName: "personToRoomBookings",
        options: {
          readOnly: !1
        }
      }
    },
    personToDimensionBookings: {
      name: "personToDimensionBookings",
      objectTypeName: "person",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "personToDimensionBooking",
        propertyTypeName: "personToDimensionBookings",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "person",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "person",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "people",
  camelized: {
    singular: "person",
    plural: "people",
    id: "personId"
  },
  capitalized: {
    singular: "Person",
    plural: "People",
    id: "PersonId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "userCompany",
      "personToPerson",
      "roomAffectation",
      "workplaceAffectation",
      "itemToPerson",
      "personToBuilding",
      "dimensionToPerson",
      "personWorkingLocation",
      "personToWorkplaceBooking",
      "personToRoomBooking",
      "personToDimensionBooking"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Fp = {
  name: "personToPersonType",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personToPersonType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    labelForward: {
      name: "labelForward",
      objectTypeName: "personToPersonType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    labelBackward: {
      name: "labelBackward",
      objectTypeName: "personToPersonType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "personToPersonType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personToPersonType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personToPersonType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personToPersonType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personToPersonType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personToPersonType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personToPersonType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personToPersonType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    personToPeople: {
      name: "personToPeople",
      objectTypeName: "personToPersonType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personToPersonTypeId",
        targetModelName: "personToPerson",
        propertyTypeName: "personToPeople",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personToPersonType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personToPersonType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personToPersonTypes",
  camelized: {
    singular: "personToPersonType",
    plural: "personToPersonTypes",
    id: "personToPersonTypeId"
  },
  capitalized: {
    singular: "PersonToPersonType",
    plural: "PersonToPersonTypes",
    id: "PersonToPersonTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "personToPerson"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Dp = {
  name: "personToPerson",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personToPerson",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personToPerson",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personToPerson",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personToPerson",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personToPersonTypeId: {
      name: "personToPersonTypeId",
      objectTypeName: "personToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personToPersonTypeId",
        targetModelName: "personToPersonType",
        propertyTypeName: "personToPersonType",
        options: {
          readOnly: !1
        }
      }
    },
    personToPersonType: {
      name: "personToPersonType",
      objectTypeName: "personToPerson",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personToPersonTypeId",
        targetModelName: "personToPersonType",
        propertyTypeName: "personToPersonType",
        options: {
          readOnly: !1
        }
      }
    },
    personSourceId: {
      name: "personSourceId",
      objectTypeName: "personToPerson",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personSourceId",
        targetModelName: "person",
        propertyTypeName: "personSource",
        options: {
          readOnly: !1
        }
      }
    },
    personSource: {
      name: "personSource",
      objectTypeName: "personToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personSourceId",
        targetModelName: "person",
        propertyTypeName: "personSource",
        options: {
          readOnly: !1
        }
      }
    },
    personTargetId: {
      name: "personTargetId",
      objectTypeName: "personToPerson",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personTargetId",
        targetModelName: "person",
        propertyTypeName: "personTarget",
        options: {
          readOnly: !1
        }
      }
    },
    personTarget: {
      name: "personTarget",
      objectTypeName: "personToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personTargetId",
        targetModelName: "person",
        propertyTypeName: "personTarget",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personToPerson",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personToPerson",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personToPeople",
  camelized: {
    singular: "personToPerson",
    plural: "personToPeople",
    id: "personToPersonId"
  },
  capitalized: {
    singular: "PersonToPerson",
    plural: "PersonToPeople",
    id: "PersonToPersonId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, vp = {
  name: "roomAffectation",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomAffectation",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomAffectation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomAffectation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomAffectation",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "roomAffectation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "roomAffectation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    roomId: {
      name: "roomId",
      objectTypeName: "roomAffectation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    room: {
      name: "room",
      objectTypeName: "roomAffectation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomAffectation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomAffectation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomAffectation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomAffectation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomAffectation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomAffectation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomAffectations",
  camelized: {
    singular: "roomAffectation",
    plural: "roomAffectations",
    id: "roomAffectationId"
  },
  capitalized: {
    singular: "RoomAffectation",
    plural: "RoomAffectations",
    id: "RoomAffectationId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, wp = {
  name: "workplaceType",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "workplaceType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "workplaceType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    zIndex: {
      name: "zIndex",
      objectTypeName: "workplaceType",
      type: "integer",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    color: {
      name: "color",
      objectTypeName: "workplaceType",
      type: "color",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: "#FFFFFF"
      }
    },
    center: {
      name: "center",
      objectTypeName: "workplaceType",
      type: "point3d",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    size: {
      name: "size",
      objectTypeName: "workplaceType",
      type: "size",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "workplaceType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "workplaceType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "workplaceType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "workplaceType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "workplaceType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "workplaceType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "workplaceType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    workplaceTypeItemTypes: {
      name: "workplaceTypeItemTypes",
      objectTypeName: "workplaceType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceTypeId",
        targetModelName: "workplaceTypeItemType",
        propertyTypeName: "workplaceTypeItemTypes",
        options: {
          readOnly: !1
        }
      }
    },
    workplaces: {
      name: "workplaces",
      objectTypeName: "workplaceType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceTypeId",
        targetModelName: "workplace",
        propertyTypeName: "workplaces",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "workplaceType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "workplaceType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "workplaceTypes",
  camelized: {
    singular: "workplaceType",
    plural: "workplaceTypes",
    id: "workplaceTypeId"
  },
  capitalized: {
    singular: "WorkplaceType",
    plural: "WorkplaceTypes",
    id: "WorkplaceTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "workplaceTypeItemType",
      "workplace"
    ],
    belongsTo: [
      "company"
    ]
  }
}, zp = {
  name: "workplaceTypeItemType",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "workplaceTypeItemType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    position: {
      name: "position",
      objectTypeName: "workplaceTypeItemType",
      type: "point3d",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    physicalInventory: {
      name: "physicalInventory",
      objectTypeName: "workplaceTypeItemType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    rotation: {
      name: "rotation",
      objectTypeName: "workplaceTypeItemType",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    zIndex: {
      name: "zIndex",
      objectTypeName: "workplaceTypeItemType",
      type: "integer",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "workplaceTypeItemType",
      type: "integer-count",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "workplaceTypeItemType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "workplaceTypeItemType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "workplaceTypeItemType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    workplaceTypeId: {
      name: "workplaceTypeId",
      objectTypeName: "workplaceTypeItemType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "workplaceTypeId",
        targetModelName: "workplaceType",
        propertyTypeName: "workplaceType",
        options: {
          readOnly: !1
        }
      }
    },
    workplaceType: {
      name: "workplaceType",
      objectTypeName: "workplaceTypeItemType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceTypeId",
        targetModelName: "workplaceType",
        propertyTypeName: "workplaceType",
        options: {
          readOnly: !1
        }
      }
    },
    itemTypeId: {
      name: "itemTypeId",
      objectTypeName: "workplaceTypeItemType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemType",
        propertyTypeName: "itemType",
        options: {
          readOnly: !1
        }
      }
    },
    itemType: {
      name: "itemType",
      objectTypeName: "workplaceTypeItemType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemType",
        propertyTypeName: "itemType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "workplaceTypeItemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "workplaceTypeItemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "workplaceTypeItemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "workplaceTypeItemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "workplaceTypeItemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "workplaceTypeItemType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "workplaceTypeItemTypes",
  camelized: {
    singular: "workplaceTypeItemType",
    plural: "workplaceTypeItemTypes",
    id: "workplaceTypeItemTypeId"
  },
  capitalized: {
    singular: "WorkplaceTypeItemType",
    plural: "WorkplaceTypeItemTypes",
    id: "WorkplaceTypeItemTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, _p = {
  name: "workplace",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "workplace",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    position: {
      name: "position",
      objectTypeName: "workplace",
      type: "point3d",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1,
        defaultValue: {
          x: 0,
          y: 0,
          z: 0
        }
      }
    },
    rotation: {
      name: "rotation",
      objectTypeName: "workplace",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    isFlex: {
      name: "isFlex",
      objectTypeName: "workplace",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    isTransit: {
      name: "isTransit",
      objectTypeName: "workplace",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    isShared: {
      name: "isShared",
      objectTypeName: "workplace",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    textAnchor: {
      name: "textAnchor",
      objectTypeName: "workplace",
      type: "textAnchor",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    name: {
      name: "name",
      objectTypeName: "workplace",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    workplaceAffectationsCalculatedRateSum: {
      name: "workplaceAffectationsCalculatedRateSum",
      objectTypeName: "workplace",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplaceAffectationsCount: {
      name: "workplaceAffectationsCount",
      objectTypeName: "workplace",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    comment: {
      name: "comment",
      objectTypeName: "workplace",
      type: "text",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    isBookable: {
      name: "isBookable",
      objectTypeName: "workplace",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "workplace",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "workplace",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "workplace",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    workplaceTypeId: {
      name: "workplaceTypeId",
      objectTypeName: "workplace",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "workplaceTypeId",
        targetModelName: "workplaceType",
        propertyTypeName: "workplaceType",
        options: {
          readOnly: !1
        }
      }
    },
    workplaceType: {
      name: "workplaceType",
      objectTypeName: "workplace",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceTypeId",
        targetModelName: "workplaceType",
        propertyTypeName: "workplaceType",
        options: {
          readOnly: !1
        }
      }
    },
    roomId: {
      name: "roomId",
      objectTypeName: "workplace",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    room: {
      name: "room",
      objectTypeName: "workplace",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    organizationId: {
      name: "organizationId",
      objectTypeName: "workplace",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    organization: {
      name: "organization",
      objectTypeName: "workplace",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    costCenterId: {
      name: "costCenterId",
      objectTypeName: "workplace",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    costCenter: {
      name: "costCenter",
      objectTypeName: "workplace",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "costCenterId",
        targetModelName: "costCenter",
        propertyTypeName: "costCenter",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "workplace",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "workplace",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "workplace",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "workplace",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    items: {
      name: "items",
      objectTypeName: "workplace",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "item",
        propertyTypeName: "items",
        options: {
          readOnly: !1
        }
      }
    },
    workplaceAffectations: {
      name: "workplaceAffectations",
      objectTypeName: "workplace",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "workplaceAffectation",
        propertyTypeName: "workplaceAffectations",
        options: {
          readOnly: !1
        }
      }
    },
    personToWorkplaceBookings: {
      name: "personToWorkplaceBookings",
      objectTypeName: "workplace",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "personToWorkplaceBooking",
        propertyTypeName: "personToWorkplaceBookings",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "workplace",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "workplace",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "workplaces",
  camelized: {
    singular: "workplace",
    plural: "workplaces",
    id: "workplaceId"
  },
  capitalized: {
    singular: "Workplace",
    plural: "Workplaces",
    id: "WorkplaceId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "item",
      "workplaceAffectation",
      "personToWorkplaceBooking"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Vp = {
  name: "item",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "item",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    code: {
      name: "code",
      objectTypeName: "item",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    reference: {
      name: "reference",
      objectTypeName: "item",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    purchaseDate: {
      name: "purchaseDate",
      objectTypeName: "item",
      type: "date",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    position: {
      name: "position",
      objectTypeName: "item",
      type: "point3d",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    rotation: {
      name: "rotation",
      objectTypeName: "item",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    textAnchor: {
      name: "textAnchor",
      objectTypeName: "item",
      type: "textAnchor",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !1
      }
    },
    price: {
      name: "price",
      objectTypeName: "item",
      type: "currency",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    itemAffectationsCount: {
      name: "itemAffectationsCount",
      objectTypeName: "item",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "item",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "item",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "item",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    itemTypeId: {
      name: "itemTypeId",
      objectTypeName: "item",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemType",
        propertyTypeName: "itemType",
        options: {
          readOnly: !1
        }
      }
    },
    itemType: {
      name: "itemType",
      objectTypeName: "item",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemType",
        propertyTypeName: "itemType",
        options: {
          readOnly: !1
        }
      }
    },
    roomId: {
      name: "roomId",
      objectTypeName: "item",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    room: {
      name: "room",
      objectTypeName: "item",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    workplaceId: {
      name: "workplaceId",
      objectTypeName: "item",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "workplace",
        propertyTypeName: "workplace",
        options: {
          readOnly: !1
        }
      }
    },
    workplace: {
      name: "workplace",
      objectTypeName: "item",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "workplace",
        propertyTypeName: "workplace",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "item",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "item",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "item",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "item",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    itemToPeople: {
      name: "itemToPeople",
      objectTypeName: "item",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "itemToPerson",
        propertyTypeName: "itemToPeople",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyToItems: {
      name: "personCompanyToItems",
      objectTypeName: "item",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "personCompanyToItem",
        propertyTypeName: "personCompanyToItems",
        options: {
          readOnly: !1
        }
      }
    },
    itemFacts: {
      name: "itemFacts",
      objectTypeName: "item",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "itemFact",
        propertyTypeName: "itemFacts",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "item",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "item",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "items",
  camelized: {
    singular: "item",
    plural: "items",
    id: "itemId"
  },
  capitalized: {
    singular: "Item",
    plural: "Items",
    id: "ItemId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "itemToPerson",
      "personCompanyToItem",
      "itemFact"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Gp = {
  name: "workplaceAffectation",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "workplaceAffectation",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    rate: {
      name: "rate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 1
      }
    },
    calculatedRate: {
      name: "calculatedRate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 1
      }
    },
    mondayRate: {
      name: "mondayRate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 1
      }
    },
    tuesdayRate: {
      name: "tuesdayRate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 1
      }
    },
    wednesdayRate: {
      name: "wednesdayRate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 1
      }
    },
    thursdayRate: {
      name: "thursdayRate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 1
      }
    },
    fridayRate: {
      name: "fridayRate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 1
      }
    },
    saturdayRate: {
      name: "saturdayRate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    sundayRate: {
      name: "sundayRate",
      objectTypeName: "workplaceAffectation",
      type: "percentage0-1",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "workplaceAffectation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "workplaceAffectation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "workplaceAffectation",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "workplaceAffectation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "workplaceAffectation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    workplaceId: {
      name: "workplaceId",
      objectTypeName: "workplaceAffectation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "workplace",
        propertyTypeName: "workplace",
        options: {
          readOnly: !1
        }
      }
    },
    workplace: {
      name: "workplace",
      objectTypeName: "workplaceAffectation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "workplace",
        propertyTypeName: "workplace",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "workplaceAffectation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "workplaceAffectation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "workplaceAffectation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "workplaceAffectation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "workplaceAffectation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "workplaceAffectation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "workplaceAffectations",
  camelized: {
    singular: "workplaceAffectation",
    plural: "workplaceAffectations",
    id: "workplaceAffectationId"
  },
  capitalized: {
    singular: "WorkplaceAffectation",
    plural: "WorkplaceAffectations",
    id: "WorkplaceAffectationId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Wp = {
  name: "organizationFloor",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "organizationFloor",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "organizationFloor",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "organizationFloor",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "organizationFloor",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "organizationFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "organizationFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "organizationFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "organizationFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "organizationFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "organizationFloor",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "organizationFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "organizationFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "organizationFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "organizationFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "organizationFloor",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    organizationId: {
      name: "organizationId",
      objectTypeName: "organizationFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    organization: {
      name: "organization",
      objectTypeName: "organizationFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "organizationFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "organizationFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "organizationFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "organizationFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "organizationFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "organizationFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "organizationFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "organizationFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "organizationFloors",
  camelized: {
    singular: "organizationFloor",
    plural: "organizationFloors",
    id: "organizationFloorId"
  },
  capitalized: {
    singular: "OrganizationFloor",
    plural: "OrganizationFloors",
    id: "OrganizationFloorId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Ep = {
  name: "organizationBuilding",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "organizationBuilding",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "organizationBuilding",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "organizationBuilding",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "organizationBuilding",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "organizationBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "organizationBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "organizationBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "organizationBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "organizationBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "organizationBuilding",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "organizationBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "organizationBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "organizationBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "organizationBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "organizationBuilding",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    organizationId: {
      name: "organizationId",
      objectTypeName: "organizationBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    organization: {
      name: "organization",
      objectTypeName: "organizationBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "organizationId",
        targetModelName: "organization",
        propertyTypeName: "organization",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "organizationBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "organizationBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "organizationBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "organizationBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "organizationBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "organizationBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "organizationBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "organizationBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "organizationBuildings",
  camelized: {
    singular: "organizationBuilding",
    plural: "organizationBuildings",
    id: "organizationBuildingId"
  },
  capitalized: {
    singular: "OrganizationBuilding",
    plural: "OrganizationBuildings",
    id: "OrganizationBuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, qp = {
  name: "roomTypeFloor",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomTypeFloor",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "roomTypeFloor",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "roomTypeFloor",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "roomTypeFloor",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "roomTypeFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "roomTypeFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "roomTypeFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "roomTypeFloor",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "roomTypeFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "roomTypeFloor",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "roomTypeFloor",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "roomTypeFloor",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomTypeFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomTypeFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomTypeFloor",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomTypeId: {
      name: "roomTypeId",
      objectTypeName: "roomTypeFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    roomType: {
      name: "roomType",
      objectTypeName: "roomTypeFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "roomTypeFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "roomTypeFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomTypeFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomTypeFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomTypeFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomTypeFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomTypeFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomTypeFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomTypeFloors",
  camelized: {
    singular: "roomTypeFloor",
    plural: "roomTypeFloors",
    id: "roomTypeFloorId"
  },
  capitalized: {
    singular: "RoomTypeFloor",
    plural: "RoomTypeFloors",
    id: "RoomTypeFloorId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Sp = {
  name: "roomTypeBuilding",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !0,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "roomTypeBuilding",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomsArea: {
      name: "roomsArea",
      objectTypeName: "roomTypeBuilding",
      type: "surface",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    roomsCount: {
      name: "roomsCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesCount: {
      name: "workplacesCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    workplacesRatio: {
      name: "workplacesRatio",
      objectTypeName: "roomTypeBuilding",
      type: "surface-by-workplace",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleCount: {
      name: "peopleCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsCount: {
      name: "seatsCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    peopleRatio: {
      name: "peopleRatio",
      objectTypeName: "roomTypeBuilding",
      type: "surface-by-people",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    occupancyRate: {
      name: "occupancyRate",
      objectTypeName: "roomTypeBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    expansionRatio: {
      name: "expansionRatio",
      objectTypeName: "roomTypeBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    freeWorkplacesCount: {
      name: "freeWorkplacesCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexWorkplacesCount: {
      name: "flexWorkplacesCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesCount: {
      name: "sharedWorkplacesCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    sharedWorkplacesRatio: {
      name: "sharedWorkplacesRatio",
      objectTypeName: "roomTypeBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    transitWorkplacesCount: {
      name: "transitWorkplacesCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    flexRatio: {
      name: "flexRatio",
      objectTypeName: "roomTypeBuilding",
      type: "percentage",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    seatsPeopleRatio: {
      name: "seatsPeopleRatio",
      objectTypeName: "roomTypeBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalPeopleCount: {
      name: "totalPeopleCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    carbonFootprint: {
      name: "carbonFootprint",
      objectTypeName: "roomTypeBuilding",
      type: "weight",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        unit: {
          type: "weight",
          value: "kilogram"
        },
        defaultValue: 0
      }
    },
    totalCapacityCount: {
      name: "totalCapacityCount",
      objectTypeName: "roomTypeBuilding",
      type: "integer-count",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    totalCapacityWorkplaceCountRatio: {
      name: "totalCapacityWorkplaceCountRatio",
      objectTypeName: "roomTypeBuilding",
      type: "percentage0-1",
      options: {
        mandatory: !0,
        readOnly: !0,
        calculated: !0,
        technical: !1,
        defaultValue: 0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "roomTypeBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "roomTypeBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "roomTypeBuilding",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    roomTypeId: {
      name: "roomTypeId",
      objectTypeName: "roomTypeBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    roomType: {
      name: "roomType",
      objectTypeName: "roomTypeBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "roomTypeBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "roomTypeBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "roomTypeBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "roomTypeBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "roomTypeBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "roomTypeBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "roomTypeBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "roomTypeBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "roomTypeBuildings",
  camelized: {
    singular: "roomTypeBuilding",
    plural: "roomTypeBuildings",
    id: "roomTypeBuildingId"
  },
  capitalized: {
    singular: "RoomTypeBuilding",
    plural: "RoomTypeBuildings",
    id: "RoomTypeBuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Lp = {
  name: "itemToPerson",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "itemToPerson",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "itemToPerson",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "itemToPerson",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "itemToPerson",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "itemToPerson",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "itemToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    itemId: {
      name: "itemId",
      objectTypeName: "itemToPerson",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "item",
        propertyTypeName: "item",
        options: {
          readOnly: !1
        }
      }
    },
    item: {
      name: "item",
      objectTypeName: "itemToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "item",
        propertyTypeName: "item",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "itemToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "itemToPerson",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "itemToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "itemToPerson",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "itemToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "itemToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "itemToPeople",
  camelized: {
    singular: "itemToPerson",
    plural: "itemToPeople",
    id: "itemToPersonId"
  },
  capitalized: {
    singular: "ItemToPerson",
    plural: "ItemToPeople",
    id: "ItemToPersonId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Hp = {
  name: "personToBuilding",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personToBuilding",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    addToPeopleCount: {
      name: "addToPeopleCount",
      objectTypeName: "personToBuilding",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personToBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personToBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personToBuilding",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "personToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "personToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "personToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "personToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personToBuildings",
  camelized: {
    singular: "personToBuilding",
    plural: "personToBuildings",
    id: "personToBuildingId"
  },
  capitalized: {
    singular: "PersonToBuilding",
    plural: "PersonToBuildings",
    id: "PersonToBuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Jp = {
  name: "dimensionToPerson",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "dimensionToPerson",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "dimensionToPerson",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "dimensionToPerson",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "dimensionToPerson",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    dimensionId: {
      name: "dimensionId",
      objectTypeName: "dimensionToPerson",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    dimension: {
      name: "dimension",
      objectTypeName: "dimensionToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "dimensionToPerson",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "dimensionToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "dimensionToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "dimensionToPerson",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "dimensionToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "dimensionToPerson",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "dimensionToPerson",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "dimensionToPerson",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "dimensionToPeople",
  camelized: {
    singular: "dimensionToPerson",
    plural: "dimensionToPeople",
    id: "dimensionToPersonId"
  },
  capitalized: {
    singular: "DimensionToPerson",
    plural: "DimensionToPeople",
    id: "DimensionToPersonId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, $p = {
  name: "dimensionTypeToBuilding",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "dimensionTypeToBuilding",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "dimensionTypeToBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "dimensionTypeToBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "dimensionTypeToBuilding",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    dimensionTypeId: {
      name: "dimensionTypeId",
      objectTypeName: "dimensionTypeToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionType: {
      name: "dimensionType",
      objectTypeName: "dimensionTypeToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionTypeId",
        targetModelName: "dimensionType",
        propertyTypeName: "dimensionType",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "dimensionTypeToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "dimensionTypeToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "dimensionTypeToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "dimensionTypeToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "dimensionTypeToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "dimensionTypeToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "dimensionTypeToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "dimensionTypeToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "dimensionTypeToBuildings",
  camelized: {
    singular: "dimensionTypeToBuilding",
    plural: "dimensionTypeToBuildings",
    id: "dimensionTypeToBuildingId"
  },
  capitalized: {
    singular: "DimensionTypeToBuilding",
    plural: "DimensionTypeToBuildings",
    id: "DimensionTypeToBuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Xp = {
  name: "workingLocation",
  type: "table",
  scope: "public",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "workingLocation",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "workingLocation",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "workingLocation",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "workingLocation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "workingLocation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "workingLocation",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personWorkingLocations: {
      name: "personWorkingLocations",
      objectTypeName: "workingLocation",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workingLocationId",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocations",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "workingLocations",
  camelized: {
    singular: "workingLocation",
    plural: "workingLocations",
    id: "workingLocationId"
  },
  capitalized: {
    singular: "WorkingLocation",
    plural: "WorkingLocations",
    id: "WorkingLocationId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "personWorkingLocation"
    ],
    belongsTo: []
  }
}, Yp = {
  name: "personWorkingLocation",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personWorkingLocation",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    date: {
      name: "date",
      objectTypeName: "personWorkingLocation",
      type: "date",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    daySlotType: {
      name: "daySlotType",
      objectTypeName: "personWorkingLocation",
      type: "day-slot",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: null
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personWorkingLocation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personWorkingLocation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personWorkingLocation",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "personWorkingLocation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "personWorkingLocation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    workingLocationId: {
      name: "workingLocationId",
      objectTypeName: "personWorkingLocation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "workingLocationId",
        targetModelName: "workingLocation",
        propertyTypeName: "workingLocation",
        options: {
          readOnly: !1
        }
      }
    },
    workingLocation: {
      name: "workingLocation",
      objectTypeName: "personWorkingLocation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workingLocationId",
        targetModelName: "workingLocation",
        propertyTypeName: "workingLocation",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personWorkingLocation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personWorkingLocation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personWorkingLocation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personWorkingLocation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    personToWorkplaceBookings: {
      name: "personToWorkplaceBookings",
      objectTypeName: "personWorkingLocation",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personToWorkplaceBooking",
        propertyTypeName: "personToWorkplaceBookings",
        options: {
          readOnly: !1
        }
      }
    },
    personToRoomBookings: {
      name: "personToRoomBookings",
      objectTypeName: "personWorkingLocation",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personToRoomBooking",
        propertyTypeName: "personToRoomBookings",
        options: {
          readOnly: !1
        }
      }
    },
    personToDimensionBookings: {
      name: "personToDimensionBookings",
      objectTypeName: "personWorkingLocation",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personToDimensionBooking",
        propertyTypeName: "personToDimensionBookings",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personWorkingLocation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personWorkingLocation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personWorkingLocations",
  camelized: {
    singular: "personWorkingLocation",
    plural: "personWorkingLocations",
    id: "personWorkingLocationId"
  },
  capitalized: {
    singular: "PersonWorkingLocation",
    plural: "PersonWorkingLocations",
    id: "PersonWorkingLocationId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "personToWorkplaceBooking",
      "personToRoomBooking",
      "personToDimensionBooking"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Zp = {
  name: "personToWorkplaceBooking",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personToWorkplaceBooking",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    startDatetime: {
      name: "startDatetime",
      objectTypeName: "personToWorkplaceBooking",
      type: "datetime",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    endDatetime: {
      name: "endDatetime",
      objectTypeName: "personToWorkplaceBooking",
      type: "datetime",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personToWorkplaceBooking",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personToWorkplaceBooking",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personToWorkplaceBooking",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "personToWorkplaceBooking",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "personToWorkplaceBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    workplaceId: {
      name: "workplaceId",
      objectTypeName: "personToWorkplaceBooking",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "workplace",
        propertyTypeName: "workplace",
        options: {
          readOnly: !1
        }
      }
    },
    workplace: {
      name: "workplace",
      objectTypeName: "personToWorkplaceBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "workplaceId",
        targetModelName: "workplace",
        propertyTypeName: "workplace",
        options: {
          readOnly: !1
        }
      }
    },
    personWorkingLocationId: {
      name: "personWorkingLocationId",
      objectTypeName: "personToWorkplaceBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocation",
        options: {
          readOnly: !1
        }
      }
    },
    personWorkingLocation: {
      name: "personWorkingLocation",
      objectTypeName: "personToWorkplaceBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocation",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personToWorkplaceBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personToWorkplaceBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personToWorkplaceBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personToWorkplaceBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personToWorkplaceBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personToWorkplaceBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personToWorkplaceBookings",
  camelized: {
    singular: "personToWorkplaceBooking",
    plural: "personToWorkplaceBookings",
    id: "personToWorkplaceBookingId"
  },
  capitalized: {
    singular: "PersonToWorkplaceBooking",
    plural: "PersonToWorkplaceBookings",
    id: "PersonToWorkplaceBookingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Qp = {
  name: "personToRoomBooking",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personToRoomBooking",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    startDatetime: {
      name: "startDatetime",
      objectTypeName: "personToRoomBooking",
      type: "datetime",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    endDatetime: {
      name: "endDatetime",
      objectTypeName: "personToRoomBooking",
      type: "datetime",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personToRoomBooking",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personToRoomBooking",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personToRoomBooking",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "personToRoomBooking",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "personToRoomBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    roomId: {
      name: "roomId",
      objectTypeName: "personToRoomBooking",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    room: {
      name: "room",
      objectTypeName: "personToRoomBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomId",
        targetModelName: "room",
        propertyTypeName: "room",
        options: {
          readOnly: !1
        }
      }
    },
    personWorkingLocationId: {
      name: "personWorkingLocationId",
      objectTypeName: "personToRoomBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocation",
        options: {
          readOnly: !1
        }
      }
    },
    personWorkingLocation: {
      name: "personWorkingLocation",
      objectTypeName: "personToRoomBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocation",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personToRoomBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personToRoomBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personToRoomBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personToRoomBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personToRoomBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personToRoomBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personToRoomBookings",
  camelized: {
    singular: "personToRoomBooking",
    plural: "personToRoomBookings",
    id: "personToRoomBookingId"
  },
  capitalized: {
    singular: "PersonToRoomBooking",
    plural: "PersonToRoomBookings",
    id: "PersonToRoomBookingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, es = {
  name: "personToDimensionBooking",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personToDimensionBooking",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    startDatetime: {
      name: "startDatetime",
      objectTypeName: "personToDimensionBooking",
      type: "datetime",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    endDatetime: {
      name: "endDatetime",
      objectTypeName: "personToDimensionBooking",
      type: "datetime",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personToDimensionBooking",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personToDimensionBooking",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personToDimensionBooking",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personId: {
      name: "personId",
      objectTypeName: "personToDimensionBooking",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    person: {
      name: "person",
      objectTypeName: "personToDimensionBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personId",
        targetModelName: "person",
        propertyTypeName: "person",
        options: {
          readOnly: !1
        }
      }
    },
    dimensionId: {
      name: "dimensionId",
      objectTypeName: "personToDimensionBooking",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    dimension: {
      name: "dimension",
      objectTypeName: "personToDimensionBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "dimensionId",
        targetModelName: "dimension",
        propertyTypeName: "dimension",
        options: {
          readOnly: !1
        }
      }
    },
    personWorkingLocationId: {
      name: "personWorkingLocationId",
      objectTypeName: "personToDimensionBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocation",
        options: {
          readOnly: !1
        }
      }
    },
    personWorkingLocation: {
      name: "personWorkingLocation",
      objectTypeName: "personToDimensionBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personWorkingLocationId",
        targetModelName: "personWorkingLocation",
        propertyTypeName: "personWorkingLocation",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personToDimensionBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personToDimensionBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personToDimensionBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personToDimensionBooking",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personToDimensionBooking",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personToDimensionBooking",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personToDimensionBookings",
  camelized: {
    singular: "personToDimensionBooking",
    plural: "personToDimensionBookings",
    id: "personToDimensionBookingId"
  },
  capitalized: {
    singular: "PersonToDimensionBooking",
    plural: "PersonToDimensionBookings",
    id: "PersonToDimensionBookingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, as = {
  name: "personCompanyMission",
  type: "table",
  scope: "public",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personCompanyMission",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "personCompanyMission",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personCompanyMission",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personCompanyMission",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personCompanyMission",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personCompanyToItemTypes: {
      name: "personCompanyToItemTypes",
      objectTypeName: "personCompanyMission",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyMissionId",
        targetModelName: "personCompanyToItemType",
        propertyTypeName: "personCompanyToItemTypes",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyToRoomTypes: {
      name: "personCompanyToRoomTypes",
      objectTypeName: "personCompanyMission",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyMissionId",
        targetModelName: "personCompanyToRoomType",
        propertyTypeName: "personCompanyToRoomTypes",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "personCompanyMissions",
  camelized: {
    singular: "personCompanyMission",
    plural: "personCompanyMissions",
    id: "personCompanyMissionId"
  },
  capitalized: {
    singular: "PersonCompanyMission",
    plural: "PersonCompanyMissions",
    id: "PersonCompanyMissionId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "personCompanyToItemType",
      "personCompanyToRoomType"
    ],
    belongsTo: []
  }
}, ts = {
  name: "personCompanyToItemType",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personCompanyToItemType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personCompanyToItemType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personCompanyToItemType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personCompanyToItemType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personCompanyId: {
      name: "personCompanyId",
      objectTypeName: "personCompanyToItemType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompany",
        propertyTypeName: "personCompany",
        options: {
          readOnly: !1
        }
      }
    },
    personCompany: {
      name: "personCompany",
      objectTypeName: "personCompanyToItemType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompany",
        propertyTypeName: "personCompany",
        options: {
          readOnly: !1
        }
      }
    },
    itemTypeId: {
      name: "itemTypeId",
      objectTypeName: "personCompanyToItemType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemType",
        propertyTypeName: "itemType",
        options: {
          readOnly: !1
        }
      }
    },
    itemType: {
      name: "itemType",
      objectTypeName: "personCompanyToItemType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemTypeId",
        targetModelName: "itemType",
        propertyTypeName: "itemType",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyMissionId: {
      name: "personCompanyMissionId",
      objectTypeName: "personCompanyToItemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personCompanyMissionId",
        targetModelName: "personCompanyMission",
        propertyTypeName: "personCompanyMission",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyMission: {
      name: "personCompanyMission",
      objectTypeName: "personCompanyToItemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyMissionId",
        targetModelName: "personCompanyMission",
        propertyTypeName: "personCompanyMission",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personCompanyToItemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personCompanyToItemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personCompanyToItemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personCompanyToItemType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personCompanyToItemType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personCompanyToItemType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personCompanyToItemTypes",
  camelized: {
    singular: "personCompanyToItemType",
    plural: "personCompanyToItemTypes",
    id: "personCompanyToItemTypeId"
  },
  capitalized: {
    singular: "PersonCompanyToItemType",
    plural: "PersonCompanyToItemTypes",
    id: "PersonCompanyToItemTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, os = {
  name: "personCompanyToRoomType",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personCompanyToRoomType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personCompanyToRoomType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personCompanyToRoomType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personCompanyToRoomType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personCompanyId: {
      name: "personCompanyId",
      objectTypeName: "personCompanyToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompany",
        propertyTypeName: "personCompany",
        options: {
          readOnly: !1
        }
      }
    },
    personCompany: {
      name: "personCompany",
      objectTypeName: "personCompanyToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompany",
        propertyTypeName: "personCompany",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeId: {
      name: "roomTypeId",
      objectTypeName: "personCompanyToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    roomType: {
      name: "roomType",
      objectTypeName: "personCompanyToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyMissionId: {
      name: "personCompanyMissionId",
      objectTypeName: "personCompanyToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personCompanyMissionId",
        targetModelName: "personCompanyMission",
        propertyTypeName: "personCompanyMission",
        options: {
          readOnly: !1
        }
      }
    },
    personCompanyMission: {
      name: "personCompanyMission",
      objectTypeName: "personCompanyToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyMissionId",
        targetModelName: "personCompanyMission",
        propertyTypeName: "personCompanyMission",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personCompanyToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personCompanyToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personCompanyToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personCompanyToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personCompanyToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personCompanyToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personCompanyToRoomTypes",
  camelized: {
    singular: "personCompanyToRoomType",
    plural: "personCompanyToRoomTypes",
    id: "personCompanyToRoomTypeId"
  },
  capitalized: {
    singular: "PersonCompanyToRoomType",
    plural: "PersonCompanyToRoomTypes",
    id: "PersonCompanyToRoomTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, ns = {
  name: "personCompanyToItem",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "personCompanyToItem",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    datetime: {
      name: "datetime",
      objectTypeName: "personCompanyToItem",
      type: "datetime",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    comment: {
      name: "comment",
      objectTypeName: "personCompanyToItem",
      type: "text",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "personCompanyToItem",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "personCompanyToItem",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "personCompanyToItem",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    personCompanyId: {
      name: "personCompanyId",
      objectTypeName: "personCompanyToItem",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompany",
        propertyTypeName: "personCompany",
        options: {
          readOnly: !1
        }
      }
    },
    personCompany: {
      name: "personCompany",
      objectTypeName: "personCompanyToItem",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "personCompanyId",
        targetModelName: "personCompany",
        propertyTypeName: "personCompany",
        options: {
          readOnly: !1
        }
      }
    },
    itemId: {
      name: "itemId",
      objectTypeName: "personCompanyToItem",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "item",
        propertyTypeName: "item",
        options: {
          readOnly: !1
        }
      }
    },
    item: {
      name: "item",
      objectTypeName: "personCompanyToItem",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "item",
        propertyTypeName: "item",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "personCompanyToItem",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "personCompanyToItem",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "personCompanyToItem",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "personCompanyToItem",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "personCompanyToItem",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "personCompanyToItem",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "personCompanyToItems",
  camelized: {
    singular: "personCompanyToItem",
    plural: "personCompanyToItems",
    id: "personCompanyToItemId"
  },
  capitalized: {
    singular: "PersonCompanyToItem",
    plural: "PersonCompanyToItems",
    id: "PersonCompanyToItemId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, rs = {
  name: "legend",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "legend",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "legend",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    configuration: {
      name: "configuration",
      objectTypeName: "legend",
      type: "legend-configuration",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "legend",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "legend",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "legend",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "legend",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "legend",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "legend",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "legend",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "legend",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "legend",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "legends",
  camelized: {
    singular: "legend",
    plural: "legends",
    id: "legendId"
  },
  capitalized: {
    singular: "Legend",
    plural: "Legends",
    id: "LegendId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, ls = {
  name: "openerPostMessageHost",
  type: "table",
  scope: "private",
  isMasterData: !0,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "openerPostMessageHost",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    host: {
      name: "host",
      objectTypeName: "openerPostMessageHost",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    description: {
      name: "description",
      objectTypeName: "openerPostMessageHost",
      type: "text",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "openerPostMessageHost",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "openerPostMessageHost",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "openerPostMessageHost",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "openerPostMessageHost",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "openerPostMessageHost",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "openerPostMessageHost",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "openerPostMessageHost",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "openerPostMessageHost",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "openerPostMessageHost",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "openerPostMessageHosts",
  camelized: {
    singular: "openerPostMessageHost",
    plural: "openerPostMessageHosts",
    id: "openerPostMessageHostId"
  },
  capitalized: {
    singular: "OpenerPostMessageHost",
    plural: "OpenerPostMessageHosts",
    id: "OpenerPostMessageHostId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, ps = {
  name: "jupObjectType",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupObjectType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "jupObjectType",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupObjectType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupObjectType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupObjectType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupUiViews: {
      name: "jupUiViews",
      objectTypeName: "jupObjectType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupObjectTypeId",
        targetModelName: "jupUiView",
        propertyTypeName: "jupUiViews",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleToJupObjectTypes: {
      name: "jupRoleToJupObjectTypes",
      objectTypeName: "jupObjectType",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupObjectTypeId",
        targetModelName: "jupRoleToJupObjectType",
        propertyTypeName: "jupRoleToJupObjectTypes",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupObjectTypes",
  camelized: {
    singular: "jupObjectType",
    plural: "jupObjectTypes",
    id: "jupObjectTypeId"
  },
  capitalized: {
    singular: "JupObjectType",
    plural: "JupObjectTypes",
    id: "JupObjectTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "jupUiView",
      "jupRoleToJupObjectType"
    ],
    belongsTo: []
  }
}, ss = {
  name: "jupUiView",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupUiView",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "jupUiView",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    isDefaultView: {
      name: "isDefaultView",
      objectTypeName: "jupUiView",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: "false"
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupUiView",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupUiView",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupUiView",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupObjectTypeId: {
      name: "jupObjectTypeId",
      objectTypeName: "jupUiView",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupObjectTypeId",
        targetModelName: "jupObjectType",
        propertyTypeName: "jupObjectType",
        options: {
          readOnly: !1
        }
      }
    },
    jupObjectType: {
      name: "jupObjectType",
      objectTypeName: "jupUiView",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupObjectTypeId",
        targetModelName: "jupObjectType",
        propertyTypeName: "jupObjectType",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleToJupUiViews: {
      name: "jupRoleToJupUiViews",
      objectTypeName: "jupUiView",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiViewId",
        targetModelName: "jupRoleToJupUiView",
        propertyTypeName: "jupRoleToJupUiViews",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupUiViews",
  camelized: {
    singular: "jupUiView",
    plural: "jupUiViews",
    id: "jupUiViewId"
  },
  capitalized: {
    singular: "JupUiView",
    plural: "JupUiViews",
    id: "JupUiViewId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "jupRoleToJupUiView"
    ],
    belongsTo: []
  }
}, ys = {
  name: "jupRole",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupRole",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    code: {
      name: "code",
      objectTypeName: "jupRole",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    name: {
      name: "name",
      objectTypeName: "jupRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupUserCompanyToJupRoles: {
      name: "jupUserCompanyToJupRoles",
      objectTypeName: "jupRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupUserCompanyToJupRole",
        propertyTypeName: "jupUserCompanyToJupRoles",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleToJupUiViews: {
      name: "jupRoleToJupUiViews",
      objectTypeName: "jupRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRoleToJupUiView",
        propertyTypeName: "jupRoleToJupUiViews",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleToJupObjectTypes: {
      name: "jupRoleToJupObjectTypes",
      objectTypeName: "jupRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRoleToJupObjectType",
        propertyTypeName: "jupRoleToJupObjectTypes",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleToJupUiOptions: {
      name: "jupRoleToJupUiOptions",
      objectTypeName: "jupRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRoleToJupUiOption",
        propertyTypeName: "jupRoleToJupUiOptions",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleToJupUiOperations: {
      name: "jupRoleToJupUiOperations",
      objectTypeName: "jupRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRoleToJupUiOperation",
        propertyTypeName: "jupRoleToJupUiOperations",
        options: {
          readOnly: !1
        }
      }
    },
    apiUserToJupRoles: {
      name: "apiUserToJupRoles",
      objectTypeName: "jupRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "apiUserToJupRole",
        propertyTypeName: "apiUserToJupRoles",
        options: {
          readOnly: !1
        }
      }
    },
    userRegistrationTenantRuleToJupRoles: {
      name: "userRegistrationTenantRuleToJupRoles",
      objectTypeName: "jupRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "userRegistrationTenantRuleToJupRole",
        propertyTypeName: "userRegistrationTenantRuleToJupRoles",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleToJupUiLayouts: {
      name: "jupRoleToJupUiLayouts",
      objectTypeName: "jupRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRoleToJupUiLayout",
        propertyTypeName: "jupRoleToJupUiLayouts",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupRoles",
  camelized: {
    singular: "jupRole",
    plural: "jupRoles",
    id: "jupRoleId"
  },
  capitalized: {
    singular: "JupRole",
    plural: "JupRoles",
    id: "JupRoleId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "jupUserCompanyToJupRole",
      "jupRoleToJupUiView",
      "jupRoleToJupObjectType",
      "jupRoleToJupUiOption",
      "jupRoleToJupUiOperation",
      "apiUserToJupRole",
      "userRegistrationTenantRuleToJupRole",
      "jupRoleToJupUiLayout"
    ],
    belongsTo: []
  }
}, is = {
  name: "jupUiOption",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupUiOption",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "jupUiOption",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    scope: {
      name: "scope",
      objectTypeName: "jupUiOption",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupUiOption",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupUiOption",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupUiOption",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupRoleToJupUiOptions: {
      name: "jupRoleToJupUiOptions",
      objectTypeName: "jupUiOption",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiOptionId",
        targetModelName: "jupRoleToJupUiOption",
        propertyTypeName: "jupRoleToJupUiOptions",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupUiOptions",
  camelized: {
    singular: "jupUiOption",
    plural: "jupUiOptions",
    id: "jupUiOptionId"
  },
  capitalized: {
    singular: "JupUiOption",
    plural: "JupUiOptions",
    id: "JupUiOptionId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "jupRoleToJupUiOption"
    ],
    belongsTo: []
  }
}, ds = {
  name: "jupUiOperation",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupUiOperation",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "jupUiOperation",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupUiOperation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupUiOperation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupUiOperation",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupRoleToJupUiOperations: {
      name: "jupRoleToJupUiOperations",
      objectTypeName: "jupUiOperation",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiOperationId",
        targetModelName: "jupRoleToJupUiOperation",
        propertyTypeName: "jupRoleToJupUiOperations",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupUiOperations",
  camelized: {
    singular: "jupUiOperation",
    plural: "jupUiOperations",
    id: "jupUiOperationId"
  },
  capitalized: {
    singular: "JupUiOperation",
    plural: "JupUiOperations",
    id: "JupUiOperationId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "jupRoleToJupUiOperation"
    ],
    belongsTo: []
  }
}, cs = {
  name: "contentRole",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "contentRole",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "contentRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "contentRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "contentRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "contentRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "contentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "contentRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "contentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "contentRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToBuildings: {
      name: "contentRoleToBuildings",
      objectTypeName: "contentRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRoleToBuilding",
        propertyTypeName: "contentRoleToBuildings",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleToUserCompanies: {
      name: "contentRoleToUserCompanies",
      objectTypeName: "contentRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRoleToUserCompany",
        propertyTypeName: "contentRoleToUserCompanies",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleToFloors: {
      name: "contentRoleToFloors",
      objectTypeName: "contentRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRoleToFloor",
        propertyTypeName: "contentRoleToFloors",
        options: {
          readOnly: !1
        }
      }
    },
    apiUserToContentRoles: {
      name: "apiUserToContentRoles",
      objectTypeName: "contentRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "apiUserToContentRole",
        propertyTypeName: "apiUserToContentRoles",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleToJupUiTenantOperations: {
      name: "contentRoleToJupUiTenantOperations",
      objectTypeName: "contentRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRoleToJupUiTenantOperation",
        propertyTypeName: "contentRoleToJupUiTenantOperations",
        options: {
          readOnly: !1
        }
      }
    },
    userRegistrationTenantRuleToContentRoles: {
      name: "userRegistrationTenantRuleToContentRoles",
      objectTypeName: "contentRole",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "userRegistrationTenantRuleToContentRole",
        propertyTypeName: "userRegistrationTenantRuleToContentRoles",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "contentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "contentRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "contentRoles",
  camelized: {
    singular: "contentRole",
    plural: "contentRoles",
    id: "contentRoleId"
  },
  capitalized: {
    singular: "ContentRole",
    plural: "ContentRoles",
    id: "ContentRoleId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "contentRoleToBuilding",
      "contentRoleToUserCompany",
      "contentRoleToFloor",
      "apiUserToContentRole",
      "contentRoleToJupUiTenantOperation",
      "userRegistrationTenantRuleToContentRole"
    ],
    belongsTo: [
      "company"
    ]
  }
}, ms = {
  name: "jupUserCompanyToJupRole",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyId: {
      name: "userCompanyId",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompany",
        options: {
          readOnly: !1
        }
      }
    },
    userCompany: {
      name: "userCompany",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompany",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleId: {
      name: "jupRoleId",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    jupRole: {
      name: "jupRole",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "jupUserCompanyToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "jupUserCompanyToJupRoles",
  camelized: {
    singular: "jupUserCompanyToJupRole",
    plural: "jupUserCompanyToJupRoles",
    id: "jupUserCompanyToJupRoleId"
  },
  capitalized: {
    singular: "JupUserCompanyToJupRole",
    plural: "JupUserCompanyToJupRoles",
    id: "JupUserCompanyToJupRoleId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, us = {
  name: "jupRoleToJupUiView",
  type: "many-to-many",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupRoleToJupUiView",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    canSee: {
      name: "canSee",
      objectTypeName: "jupRoleToJupUiView",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupRoleToJupUiView",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupRoleToJupUiView",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupRoleToJupUiView",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupUiViewId: {
      name: "jupUiViewId",
      objectTypeName: "jupRoleToJupUiView",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupUiViewId",
        targetModelName: "jupUiView",
        propertyTypeName: "jupUiView",
        options: {
          readOnly: !1
        }
      }
    },
    jupUiView: {
      name: "jupUiView",
      objectTypeName: "jupRoleToJupUiView",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiViewId",
        targetModelName: "jupUiView",
        propertyTypeName: "jupUiView",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleId: {
      name: "jupRoleId",
      objectTypeName: "jupRoleToJupUiView",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    jupRole: {
      name: "jupRole",
      objectTypeName: "jupRoleToJupUiView",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupRoleToJupUiViews",
  camelized: {
    singular: "jupRoleToJupUiView",
    plural: "jupRoleToJupUiViews",
    id: "jupRoleToJupUiViewId"
  },
  capitalized: {
    singular: "JupRoleToJupUiView",
    plural: "JupRoleToJupUiViews",
    id: "JupRoleToJupUiViewId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: []
  }
}, fs = {
  name: "jupRoleToJupObjectType",
  type: "many-to-many",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupRoleToJupObjectType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    arCreate: {
      name: "arCreate",
      objectTypeName: "jupRoleToJupObjectType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    arRead: {
      name: "arRead",
      objectTypeName: "jupRoleToJupObjectType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    arUpdate: {
      name: "arUpdate",
      objectTypeName: "jupRoleToJupObjectType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    arDelete: {
      name: "arDelete",
      objectTypeName: "jupRoleToJupObjectType",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupRoleToJupObjectType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupRoleToJupObjectType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupRoleToJupObjectType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupObjectTypeId: {
      name: "jupObjectTypeId",
      objectTypeName: "jupRoleToJupObjectType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupObjectTypeId",
        targetModelName: "jupObjectType",
        propertyTypeName: "jupObjectType",
        options: {
          readOnly: !1
        }
      }
    },
    jupObjectType: {
      name: "jupObjectType",
      objectTypeName: "jupRoleToJupObjectType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupObjectTypeId",
        targetModelName: "jupObjectType",
        propertyTypeName: "jupObjectType",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleId: {
      name: "jupRoleId",
      objectTypeName: "jupRoleToJupObjectType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    jupRole: {
      name: "jupRole",
      objectTypeName: "jupRoleToJupObjectType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupRoleToJupObjectTypes",
  camelized: {
    singular: "jupRoleToJupObjectType",
    plural: "jupRoleToJupObjectTypes",
    id: "jupRoleToJupObjectTypeId"
  },
  capitalized: {
    singular: "JupRoleToJupObjectType",
    plural: "JupRoleToJupObjectTypes",
    id: "JupRoleToJupObjectTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: []
  }
}, Ts = {
  name: "jupRoleToJupUiOption",
  type: "many-to-many",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupRoleToJupUiOption",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    canSee: {
      name: "canSee",
      objectTypeName: "jupRoleToJupUiOption",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupRoleToJupUiOption",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupRoleToJupUiOption",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupRoleToJupUiOption",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupUiOptionId: {
      name: "jupUiOptionId",
      objectTypeName: "jupRoleToJupUiOption",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupUiOptionId",
        targetModelName: "jupUiOption",
        propertyTypeName: "jupUiOption",
        options: {
          readOnly: !1
        }
      }
    },
    jupUiOption: {
      name: "jupUiOption",
      objectTypeName: "jupRoleToJupUiOption",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiOptionId",
        targetModelName: "jupUiOption",
        propertyTypeName: "jupUiOption",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleId: {
      name: "jupRoleId",
      objectTypeName: "jupRoleToJupUiOption",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    jupRole: {
      name: "jupRole",
      objectTypeName: "jupRoleToJupUiOption",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupRoleToJupUiOptions",
  camelized: {
    singular: "jupRoleToJupUiOption",
    plural: "jupRoleToJupUiOptions",
    id: "jupRoleToJupUiOptionId"
  },
  capitalized: {
    singular: "JupRoleToJupUiOption",
    plural: "JupRoleToJupUiOptions",
    id: "JupRoleToJupUiOptionId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: []
  }
}, gs = {
  name: "jupRoleToJupUiOperation",
  type: "many-to-many",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    canSee: {
      name: "canSee",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupUiOperationId: {
      name: "jupUiOperationId",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupUiOperationId",
        targetModelName: "jupUiOperation",
        propertyTypeName: "jupUiOperation",
        options: {
          readOnly: !1
        }
      }
    },
    jupUiOperation: {
      name: "jupUiOperation",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiOperationId",
        targetModelName: "jupUiOperation",
        propertyTypeName: "jupUiOperation",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleId: {
      name: "jupRoleId",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    jupRole: {
      name: "jupRole",
      objectTypeName: "jupRoleToJupUiOperation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupRoleToJupUiOperations",
  camelized: {
    singular: "jupRoleToJupUiOperation",
    plural: "jupRoleToJupUiOperations",
    id: "jupRoleToJupUiOperationId"
  },
  capitalized: {
    singular: "JupRoleToJupUiOperation",
    plural: "JupRoleToJupUiOperations",
    id: "JupRoleToJupUiOperationId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: []
  }
}, Cs = {
  name: "contentRoleToBuilding",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "contentRoleToBuilding",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "contentRoleToBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "contentRoleToBuilding",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "contentRoleToBuilding",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    contentRoleId: {
      name: "contentRoleId",
      objectTypeName: "contentRoleToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    contentRole: {
      name: "contentRole",
      objectTypeName: "contentRoleToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    buildingId: {
      name: "buildingId",
      objectTypeName: "contentRoleToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    building: {
      name: "building",
      objectTypeName: "contentRoleToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "buildingId",
        targetModelName: "building",
        propertyTypeName: "building",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "contentRoleToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "contentRoleToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "contentRoleToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "contentRoleToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "contentRoleToBuilding",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "contentRoleToBuilding",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "contentRoleToBuildings",
  camelized: {
    singular: "contentRoleToBuilding",
    plural: "contentRoleToBuildings",
    id: "contentRoleToBuildingId"
  },
  capitalized: {
    singular: "ContentRoleToBuilding",
    plural: "ContentRoleToBuildings",
    id: "ContentRoleToBuildingId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Ns = {
  name: "contentRoleToUserCompany",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "contentRoleToUserCompany",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "contentRoleToUserCompany",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "contentRoleToUserCompany",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "contentRoleToUserCompany",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyId: {
      name: "userCompanyId",
      objectTypeName: "contentRoleToUserCompany",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompany",
        options: {
          readOnly: !1
        }
      }
    },
    userCompany: {
      name: "userCompany",
      objectTypeName: "contentRoleToUserCompany",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userCompanyId",
        targetModelName: "userCompany",
        propertyTypeName: "userCompany",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleId: {
      name: "contentRoleId",
      objectTypeName: "contentRoleToUserCompany",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    contentRole: {
      name: "contentRole",
      objectTypeName: "contentRoleToUserCompany",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "contentRoleToUserCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "contentRoleToUserCompany",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "contentRoleToUserCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "contentRoleToUserCompany",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "contentRoleToUserCompany",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "contentRoleToUserCompany",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "contentRoleToUserCompanies",
  camelized: {
    singular: "contentRoleToUserCompany",
    plural: "contentRoleToUserCompanies",
    id: "contentRoleToUserCompanyId"
  },
  capitalized: {
    singular: "ContentRoleToUserCompany",
    plural: "ContentRoleToUserCompanies",
    id: "ContentRoleToUserCompanyId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Os = {
  name: "contentRoleToFloor",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "contentRoleToFloor",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "contentRoleToFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "contentRoleToFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "contentRoleToFloor",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    contentRoleId: {
      name: "contentRoleId",
      objectTypeName: "contentRoleToFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    contentRole: {
      name: "contentRole",
      objectTypeName: "contentRoleToFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "contentRoleToFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "contentRoleToFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "contentRoleToFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "contentRoleToFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "contentRoleToFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "contentRoleToFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "contentRoleToFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "contentRoleToFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "contentRoleToFloors",
  camelized: {
    singular: "contentRoleToFloor",
    plural: "contentRoleToFloors",
    id: "contentRoleToFloorId"
  },
  capitalized: {
    singular: "ContentRoleToFloor",
    plural: "ContentRoleToFloors",
    id: "ContentRoleToFloorId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, bs = {
  name: "partnerApiCredential",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "partnerApiCredential",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    label: {
      name: "label",
      objectTypeName: "partnerApiCredential",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    code: {
      name: "code",
      objectTypeName: "partnerApiCredential",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    host: {
      name: "host",
      objectTypeName: "partnerApiCredential",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    clientId: {
      name: "clientId",
      objectTypeName: "partnerApiCredential",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    clientSecret: {
      name: "clientSecret",
      objectTypeName: "partnerApiCredential",
      type: "password",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    enable: {
      name: "enable",
      objectTypeName: "partnerApiCredential",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "partnerApiCredential",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "partnerApiCredential",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "partnerApiCredential",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "partnerApiCredential",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "partnerApiCredential",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "partnerApiCredential",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "partnerApiCredential",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "partnerApiCredential",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "partnerApiCredential",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "partnerApiCredentials",
  camelized: {
    singular: "partnerApiCredential",
    plural: "partnerApiCredentials",
    id: "partnerApiCredentialId"
  },
  capitalized: {
    singular: "PartnerApiCredential",
    plural: "PartnerApiCredentials",
    id: "PartnerApiCredentialId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, hs = {
  name: "apiUser",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "apiUser",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    clientSecret: {
      name: "clientSecret",
      objectTypeName: "apiUser",
      type: "password",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    name: {
      name: "name",
      objectTypeName: "apiUser",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "apiUser",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "apiUser",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "apiUser",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "apiUser",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "apiUser",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "apiUser",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "apiUser",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    apiUserToJupRoles: {
      name: "apiUserToJupRoles",
      objectTypeName: "apiUser",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "apiUserId",
        targetModelName: "apiUserToJupRole",
        propertyTypeName: "apiUserToJupRoles",
        options: {
          readOnly: !1
        }
      }
    },
    apiUserToContentRoles: {
      name: "apiUserToContentRoles",
      objectTypeName: "apiUser",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "apiUserId",
        targetModelName: "apiUserToContentRole",
        propertyTypeName: "apiUserToContentRoles",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "apiUser",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "apiUser",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "apiUsers",
  camelized: {
    singular: "apiUser",
    plural: "apiUsers",
    id: "apiUserId"
  },
  capitalized: {
    singular: "ApiUser",
    plural: "ApiUsers",
    id: "ApiUserId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "apiUserToJupRole",
      "apiUserToContentRole"
    ],
    belongsTo: [
      "company"
    ]
  }
}, js = {
  name: "apiUserToJupRole",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "apiUserToJupRole",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "apiUserToJupRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "apiUserToJupRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "apiUserToJupRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    apiUserId: {
      name: "apiUserId",
      objectTypeName: "apiUserToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "apiUserId",
        targetModelName: "apiUser",
        propertyTypeName: "apiUser",
        options: {
          readOnly: !1
        }
      }
    },
    apiUser: {
      name: "apiUser",
      objectTypeName: "apiUserToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "apiUserId",
        targetModelName: "apiUser",
        propertyTypeName: "apiUser",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleId: {
      name: "jupRoleId",
      objectTypeName: "apiUserToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    jupRole: {
      name: "jupRole",
      objectTypeName: "apiUserToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "apiUserToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "apiUserToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "apiUserToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "apiUserToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "apiUserToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "apiUserToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "apiUserToJupRoles",
  camelized: {
    singular: "apiUserToJupRole",
    plural: "apiUserToJupRoles",
    id: "apiUserToJupRoleId"
  },
  capitalized: {
    singular: "ApiUserToJupRole",
    plural: "ApiUserToJupRoles",
    id: "ApiUserToJupRoleId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Bs = {
  name: "apiUserToContentRole",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "apiUserToContentRole",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "apiUserToContentRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "apiUserToContentRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "apiUserToContentRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    apiUserId: {
      name: "apiUserId",
      objectTypeName: "apiUserToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "apiUserId",
        targetModelName: "apiUser",
        propertyTypeName: "apiUser",
        options: {
          readOnly: !1
        }
      }
    },
    apiUser: {
      name: "apiUser",
      objectTypeName: "apiUserToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "apiUserId",
        targetModelName: "apiUser",
        propertyTypeName: "apiUser",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleId: {
      name: "contentRoleId",
      objectTypeName: "apiUserToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    contentRole: {
      name: "contentRole",
      objectTypeName: "apiUserToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "apiUserToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "apiUserToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "apiUserToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "apiUserToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "apiUserToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "apiUserToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "apiUserToContentRoles",
  camelized: {
    singular: "apiUserToContentRole",
    plural: "apiUserToContentRoles",
    id: "apiUserToContentRoleId"
  },
  capitalized: {
    singular: "ApiUserToContentRole",
    plural: "ApiUserToContentRoles",
    id: "ApiUserToContentRoleId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Is = {
  name: "jupUiTenantOperation",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupUiTenantOperation",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "jupUiTenantOperation",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupUiTenantOperation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupUiTenantOperation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupUiTenantOperation",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "jupUiTenantOperation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "jupUiTenantOperation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "jupUiTenantOperation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "jupUiTenantOperation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    contentRoleToJupUiTenantOperations: {
      name: "contentRoleToJupUiTenantOperations",
      objectTypeName: "jupUiTenantOperation",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiTenantOperationId",
        targetModelName: "contentRoleToJupUiTenantOperation",
        propertyTypeName: "contentRoleToJupUiTenantOperations",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "jupUiTenantOperation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "jupUiTenantOperation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "jupUiTenantOperations",
  camelized: {
    singular: "jupUiTenantOperation",
    plural: "jupUiTenantOperations",
    id: "jupUiTenantOperationId"
  },
  capitalized: {
    singular: "JupUiTenantOperation",
    plural: "JupUiTenantOperations",
    id: "JupUiTenantOperationId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "contentRoleToJupUiTenantOperation"
    ],
    belongsTo: [
      "company"
    ]
  }
}, Rs = {
  name: "contentRoleToJupUiTenantOperation",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    canSee: {
      name: "canSee",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupUiTenantOperationId: {
      name: "jupUiTenantOperationId",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupUiTenantOperationId",
        targetModelName: "jupUiTenantOperation",
        propertyTypeName: "jupUiTenantOperation",
        options: {
          readOnly: !1
        }
      }
    },
    jupUiTenantOperation: {
      name: "jupUiTenantOperation",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiTenantOperationId",
        targetModelName: "jupUiTenantOperation",
        propertyTypeName: "jupUiTenantOperation",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleId: {
      name: "contentRoleId",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    contentRole: {
      name: "contentRole",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "contentRoleToJupUiTenantOperation",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "contentRoleToJupUiTenantOperations",
  camelized: {
    singular: "contentRoleToJupUiTenantOperation",
    plural: "contentRoleToJupUiTenantOperations",
    id: "contentRoleToJupUiTenantOperationId"
  },
  capitalized: {
    singular: "ContentRoleToJupUiTenantOperation",
    plural: "ContentRoleToJupUiTenantOperations",
    id: "ContentRoleToJupUiTenantOperationId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Ms = {
  name: "authentificationConnection",
  type: "table",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "authentificationConnection",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "authentificationConnection",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "authentificationConnection",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "authentificationConnection",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "authentificationConnection",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userRegistrationTenantRules: {
      name: "userRegistrationTenantRules",
      objectTypeName: "authentificationConnection",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "authentificationConnectionId",
        targetModelName: "userRegistrationTenantRule",
        propertyTypeName: "userRegistrationTenantRules",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "authentificationConnections",
  camelized: {
    singular: "authentificationConnection",
    plural: "authentificationConnections",
    id: "authentificationConnectionId"
  },
  capitalized: {
    singular: "AuthentificationConnection",
    plural: "AuthentificationConnections",
    id: "AuthentificationConnectionId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "userRegistrationTenantRule"
    ],
    belongsTo: []
  }
}, Us = {
  name: "userRegistrationTenantRule",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "userRegistrationTenantRule",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "userRegistrationTenantRule",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    domains: {
      name: "domains",
      objectTypeName: "userRegistrationTenantRule",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    automaticUserToRoleMapping: {
      name: "automaticUserToRoleMapping",
      objectTypeName: "userRegistrationTenantRule",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "userRegistrationTenantRule",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "userRegistrationTenantRule",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "userRegistrationTenantRule",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    authentificationConnectionId: {
      name: "authentificationConnectionId",
      objectTypeName: "userRegistrationTenantRule",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "authentificationConnectionId",
        targetModelName: "authentificationConnection",
        propertyTypeName: "authentificationConnection",
        options: {
          readOnly: !1
        }
      }
    },
    authentificationConnection: {
      name: "authentificationConnection",
      objectTypeName: "userRegistrationTenantRule",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "authentificationConnectionId",
        targetModelName: "authentificationConnection",
        propertyTypeName: "authentificationConnection",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "userRegistrationTenantRule",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "userRegistrationTenantRule",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "userRegistrationTenantRule",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "userRegistrationTenantRule",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userRegistrationTenantRuleToJupRoles: {
      name: "userRegistrationTenantRuleToJupRoles",
      objectTypeName: "userRegistrationTenantRule",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userRegistrationTenantRuleId",
        targetModelName: "userRegistrationTenantRuleToJupRole",
        propertyTypeName: "userRegistrationTenantRuleToJupRoles",
        options: {
          readOnly: !1
        }
      }
    },
    userRegistrationTenantRuleToContentRoles: {
      name: "userRegistrationTenantRuleToContentRoles",
      objectTypeName: "userRegistrationTenantRule",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userRegistrationTenantRuleId",
        targetModelName: "userRegistrationTenantRuleToContentRole",
        propertyTypeName: "userRegistrationTenantRuleToContentRoles",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "userRegistrationTenantRule",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "userRegistrationTenantRule",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "userRegistrationTenantRules",
  camelized: {
    singular: "userRegistrationTenantRule",
    plural: "userRegistrationTenantRules",
    id: "userRegistrationTenantRuleId"
  },
  capitalized: {
    singular: "UserRegistrationTenantRule",
    plural: "UserRegistrationTenantRules",
    id: "UserRegistrationTenantRuleId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "userRegistrationTenantRuleToJupRole",
      "userRegistrationTenantRuleToContentRole"
    ],
    belongsTo: [
      "company"
    ]
  }
}, ks = {
  name: "userRegistrationTenantRuleToJupRole",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userRegistrationTenantRuleId: {
      name: "userRegistrationTenantRuleId",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userRegistrationTenantRuleId",
        targetModelName: "userRegistrationTenantRule",
        propertyTypeName: "userRegistrationTenantRule",
        options: {
          readOnly: !1
        }
      }
    },
    userRegistrationTenantRule: {
      name: "userRegistrationTenantRule",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userRegistrationTenantRuleId",
        targetModelName: "userRegistrationTenantRule",
        propertyTypeName: "userRegistrationTenantRule",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleId: {
      name: "jupRoleId",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    jupRole: {
      name: "jupRole",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "userRegistrationTenantRuleToJupRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "userRegistrationTenantRuleToJupRoles",
  camelized: {
    singular: "userRegistrationTenantRuleToJupRole",
    plural: "userRegistrationTenantRuleToJupRoles",
    id: "userRegistrationTenantRuleToJupRoleId"
  },
  capitalized: {
    singular: "UserRegistrationTenantRuleToJupRole",
    plural: "UserRegistrationTenantRuleToJupRoles",
    id: "UserRegistrationTenantRuleToJupRoleId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Ks = {
  name: "userRegistrationTenantRuleToContentRole",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userRegistrationTenantRuleId: {
      name: "userRegistrationTenantRuleId",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userRegistrationTenantRuleId",
        targetModelName: "userRegistrationTenantRule",
        propertyTypeName: "userRegistrationTenantRule",
        options: {
          readOnly: !1
        }
      }
    },
    userRegistrationTenantRule: {
      name: "userRegistrationTenantRule",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "userRegistrationTenantRuleId",
        targetModelName: "userRegistrationTenantRule",
        propertyTypeName: "userRegistrationTenantRule",
        options: {
          readOnly: !1
        }
      }
    },
    contentRoleId: {
      name: "contentRoleId",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    contentRole: {
      name: "contentRole",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "contentRoleId",
        targetModelName: "contentRole",
        propertyTypeName: "contentRole",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "userRegistrationTenantRuleToContentRole",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "userRegistrationTenantRuleToContentRoles",
  camelized: {
    singular: "userRegistrationTenantRuleToContentRole",
    plural: "userRegistrationTenantRuleToContentRoles",
    id: "userRegistrationTenantRuleToContentRoleId"
  },
  capitalized: {
    singular: "UserRegistrationTenantRuleToContentRole",
    plural: "UserRegistrationTenantRuleToContentRoles",
    id: "UserRegistrationTenantRuleToContentRoleId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Ps = {
  name: "partnerExportMappingConfiguration",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    code: {
      name: "code",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappings: {
      name: "partnerExportMappings",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "partnerExportMappingConfigurationId",
        targetModelName: "partnerExportMapping",
        propertyTypeName: "partnerExportMappings",
        options: {
          readOnly: !1
        }
      }
    },
    partnerExportMappingConfigurationToFloors: {
      name: "partnerExportMappingConfigurationToFloors",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "partnerExportMappingConfigurationId",
        targetModelName: "partnerExportMappingConfigurationToFloor",
        propertyTypeName: "partnerExportMappingConfigurationToFloors",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "partnerExportMappingConfiguration",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "partnerExportMappingConfigurations",
  camelized: {
    singular: "partnerExportMappingConfiguration",
    plural: "partnerExportMappingConfigurations",
    id: "partnerExportMappingConfigurationId"
  },
  capitalized: {
    singular: "PartnerExportMappingConfiguration",
    plural: "PartnerExportMappingConfigurations",
    id: "PartnerExportMappingConfigurationId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "partnerExportMapping",
      "partnerExportMappingConfigurationToFloor"
    ],
    belongsTo: [
      "company"
    ]
  }
}, As = {
  name: "partnerExportMapping",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "partnerExportMapping",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    partnerCode: {
      name: "partnerCode",
      objectTypeName: "partnerExportMapping",
      type: "string",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    label: {
      name: "label",
      objectTypeName: "partnerExportMapping",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "partnerExportMapping",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "partnerExportMapping",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "partnerExportMapping",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    partnerExportMappingConfigurationId: {
      name: "partnerExportMappingConfigurationId",
      objectTypeName: "partnerExportMapping",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "partnerExportMappingConfigurationId",
        targetModelName: "partnerExportMappingConfiguration",
        propertyTypeName: "partnerExportMappingConfiguration",
        options: {
          readOnly: !1
        }
      }
    },
    partnerExportMappingConfiguration: {
      name: "partnerExportMappingConfiguration",
      objectTypeName: "partnerExportMapping",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "partnerExportMappingConfigurationId",
        targetModelName: "partnerExportMappingConfiguration",
        propertyTypeName: "partnerExportMappingConfiguration",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "partnerExportMapping",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "partnerExportMapping",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "partnerExportMapping",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "partnerExportMapping",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    partnerExportMappingToRoomTypes: {
      name: "partnerExportMappingToRoomTypes",
      objectTypeName: "partnerExportMapping",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "partnerExportMappingId",
        targetModelName: "partnerExportMappingToRoomType",
        propertyTypeName: "partnerExportMappingToRoomTypes",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "partnerExportMapping",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "partnerExportMapping",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "partnerExportMappings",
  camelized: {
    singular: "partnerExportMapping",
    plural: "partnerExportMappings",
    id: "partnerExportMappingId"
  },
  capitalized: {
    singular: "PartnerExportMapping",
    plural: "PartnerExportMappings",
    id: "PartnerExportMappingId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "partnerExportMappingToRoomType"
    ],
    belongsTo: [
      "company"
    ]
  }
}, xs = {
  name: "partnerExportMappingToRoomType",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    partnerExportMappingId: {
      name: "partnerExportMappingId",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "partnerExportMappingId",
        targetModelName: "partnerExportMapping",
        propertyTypeName: "partnerExportMapping",
        options: {
          readOnly: !1
        }
      }
    },
    partnerExportMapping: {
      name: "partnerExportMapping",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "partnerExportMappingId",
        targetModelName: "partnerExportMapping",
        propertyTypeName: "partnerExportMapping",
        options: {
          readOnly: !1
        }
      }
    },
    roomTypeId: {
      name: "roomTypeId",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    roomType: {
      name: "roomType",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "roomTypeId",
        targetModelName: "roomType",
        propertyTypeName: "roomType",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "partnerExportMappingToRoomType",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "partnerExportMappingToRoomTypes",
  camelized: {
    singular: "partnerExportMappingToRoomType",
    plural: "partnerExportMappingToRoomTypes",
    id: "partnerExportMappingToRoomTypeId"
  },
  capitalized: {
    singular: "PartnerExportMappingToRoomType",
    plural: "PartnerExportMappingToRoomTypes",
    id: "PartnerExportMappingToRoomTypeId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Fs = {
  name: "partnerExportMappingConfigurationToFloor",
  type: "many-to-many",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    partnerExportMappingConfigurationId: {
      name: "partnerExportMappingConfigurationId",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "partnerExportMappingConfigurationId",
        targetModelName: "partnerExportMappingConfiguration",
        propertyTypeName: "partnerExportMappingConfiguration",
        options: {
          readOnly: !1
        }
      }
    },
    partnerExportMappingConfiguration: {
      name: "partnerExportMappingConfiguration",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "partnerExportMappingConfigurationId",
        targetModelName: "partnerExportMappingConfiguration",
        propertyTypeName: "partnerExportMappingConfiguration",
        options: {
          readOnly: !1
        }
      }
    },
    floorId: {
      name: "floorId",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    floor: {
      name: "floor",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "floorId",
        targetModelName: "floor",
        propertyTypeName: "floor",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "partnerExportMappingConfigurationToFloor",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "partnerExportMappingConfigurationToFloors",
  camelized: {
    singular: "partnerExportMappingConfigurationToFloor",
    plural: "partnerExportMappingConfigurationToFloors",
    id: "partnerExportMappingConfigurationToFloorId"
  },
  capitalized: {
    singular: "PartnerExportMappingConfigurationToFloor",
    plural: "PartnerExportMappingConfigurationToFloors",
    id: "PartnerExportMappingConfigurationToFloorId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, Ds = {
  name: "jupRoleToJupUiLayout",
  type: "many-to-many",
  scope: "public",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !0,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    canSee: {
      name: "canSee",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "boolean",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1,
        defaultValue: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    jupUiLayoutId: {
      name: "jupUiLayoutId",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupUiLayoutId",
        targetModelName: "jupUiLayout",
        propertyTypeName: "jupUiLayout",
        options: {
          readOnly: !1
        }
      }
    },
    jupUiLayout: {
      name: "jupUiLayout",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupUiLayoutId",
        targetModelName: "jupUiLayout",
        propertyTypeName: "jupUiLayout",
        options: {
          readOnly: !1
        }
      }
    },
    jupRoleId: {
      name: "jupRoleId",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    },
    jupRole: {
      name: "jupRole",
      objectTypeName: "jupRoleToJupUiLayout",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "jupRoleId",
        targetModelName: "jupRole",
        propertyTypeName: "jupRole",
        options: {
          readOnly: !1
        }
      }
    }
  },
  plural: "jupRoleToJupUiLayouts",
  camelized: {
    singular: "jupRoleToJupUiLayout",
    plural: "jupRoleToJupUiLayouts",
    id: "jupRoleToJupUiLayoutId"
  },
  capitalized: {
    singular: "JupRoleToJupUiLayout",
    plural: "JupRoleToJupUiLayouts",
    id: "JupRoleToJupUiLayoutId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: []
  }
}, vs = {
  name: "itemFact",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "itemFact",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    measure: {
      name: "measure",
      objectTypeName: "itemFact",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    value: {
      name: "value",
      objectTypeName: "itemFact",
      type: "float",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    voltage: {
      name: "voltage",
      objectTypeName: "itemFact",
      type: "float",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    time: {
      name: "time",
      objectTypeName: "itemFact",
      type: "datetime",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "itemFact",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "itemFact",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "itemFact",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    itemId: {
      name: "itemId",
      objectTypeName: "itemFact",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "item",
        propertyTypeName: "item",
        options: {
          readOnly: !1
        }
      }
    },
    item: {
      name: "item",
      objectTypeName: "itemFact",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "itemId",
        targetModelName: "item",
        propertyTypeName: "item",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "itemFact",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "itemFact",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "itemFact",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "itemFact",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "itemFact",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "itemFact",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "itemFacts",
  camelized: {
    singular: "itemFact",
    plural: "itemFacts",
    id: "itemFactId"
  },
  capitalized: {
    singular: "ItemFact",
    plural: "ItemFacts",
    id: "ItemFactId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
}, ws = {
  name: "featureFamily",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "featureFamily",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "featureFamily",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "featureFamily",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "featureFamily",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "featureFamily",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "featureFamily",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "featureFamily",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "featureFamily",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "featureFamily",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    featureGroups: {
      name: "featureGroups",
      objectTypeName: "featureFamily",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "featureFamilyId",
        targetModelName: "featureGroup",
        propertyTypeName: "featureGroups",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "featureFamily",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "featureFamily",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "featureFamilies",
  camelized: {
    singular: "featureFamily",
    plural: "featureFamilies",
    id: "featureFamilyId"
  },
  capitalized: {
    singular: "FeatureFamily",
    plural: "FeatureFamilies",
    id: "FeatureFamilyId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "featureGroup"
    ],
    belongsTo: [
      "company"
    ]
  }
}, zs = {
  name: "featureGroup",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "featureGroup",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "featureGroup",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    sortOrder: {
      name: "sortOrder",
      objectTypeName: "featureGroup",
      type: "integer",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "featureGroup",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "featureGroup",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "featureGroup",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    featureFamilyId: {
      name: "featureFamilyId",
      objectTypeName: "featureGroup",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "featureFamilyId",
        targetModelName: "featureFamily",
        propertyTypeName: "featureFamily",
        options: {
          readOnly: !1
        }
      }
    },
    featureFamily: {
      name: "featureFamily",
      objectTypeName: "featureGroup",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "featureFamilyId",
        targetModelName: "featureFamily",
        propertyTypeName: "featureFamily",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "featureGroup",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "featureGroup",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "featureGroup",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "featureGroup",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    features: {
      name: "features",
      objectTypeName: "featureGroup",
      type: "has-many-paginated",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "featureGroupId",
        targetModelName: "feature",
        propertyTypeName: "features",
        options: {
          readOnly: !1
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "featureGroup",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "featureGroup",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "featureGroups",
  camelized: {
    singular: "featureGroup",
    plural: "featureGroups",
    id: "featureGroupId"
  },
  capitalized: {
    singular: "FeatureGroup",
    plural: "FeatureGroups",
    id: "FeatureGroupId"
  },
  hidden: !1,
  context: {
    hasMany: [
      "feature"
    ],
    belongsTo: [
      "company"
    ]
  }
}, _s = {
  name: "feature",
  type: "table",
  scope: "private",
  isMasterData: !1,
  isReportingData: !1,
  isSecurityData: !1,
  propertiesByName: {
    id: {
      name: "id",
      objectTypeName: "feature",
      type: "primary-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    name: {
      name: "name",
      objectTypeName: "feature",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !1
      }
    },
    createdAt: {
      name: "createdAt",
      objectTypeName: "feature",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    updatedAt: {
      name: "updatedAt",
      objectTypeName: "feature",
      type: "timestamp",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      }
    },
    externalId: {
      name: "externalId",
      objectTypeName: "feature",
      type: "string",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      }
    },
    featureGroupId: {
      name: "featureGroupId",
      objectTypeName: "feature",
      type: "foreign-key",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "featureGroupId",
        targetModelName: "featureGroup",
        propertyTypeName: "featureGroup",
        options: {
          readOnly: !1
        }
      }
    },
    featureGroup: {
      name: "featureGroup",
      objectTypeName: "feature",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "featureGroupId",
        targetModelName: "featureGroup",
        propertyTypeName: "featureGroup",
        options: {
          readOnly: !1
        }
      }
    },
    userCompanyCreatedById: {
      name: "userCompanyCreatedById",
      objectTypeName: "feature",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyCreatedBy: {
      name: "userCompanyCreatedBy",
      objectTypeName: "feature",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyCreatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyCreatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedById: {
      name: "userCompanyUpdatedById",
      objectTypeName: "feature",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !0,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    userCompanyUpdatedBy: {
      name: "userCompanyUpdatedBy",
      objectTypeName: "feature",
      type: "belongs-to",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "userCompanyUpdatedById",
        targetModelName: "userCompany",
        propertyTypeName: "userCompanyUpdatedBy",
        options: {
          readOnly: !0
        }
      }
    },
    companyId: {
      name: "companyId",
      objectTypeName: "feature",
      type: "foreign-key",
      options: {
        mandatory: !1,
        readOnly: !1,
        calculated: !1,
        technical: !0
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    },
    company: {
      name: "company",
      objectTypeName: "feature",
      type: "belongs-to",
      options: {
        mandatory: !0,
        readOnly: !1,
        calculated: !1,
        technical: !1
      },
      association: {
        foreignKey: "companyId",
        targetModelName: "company",
        propertyTypeName: "company",
        options: {
          readOnly: !0
        }
      }
    }
  },
  plural: "features",
  camelized: {
    singular: "feature",
    plural: "features",
    id: "featureId"
  },
  capitalized: {
    singular: "Feature",
    plural: "Features",
    id: "FeatureId"
  },
  hidden: !1,
  context: {
    hasMany: [],
    belongsTo: [
      "company"
    ]
  }
};
var it;
((e) => {
  e.occupancyStatus = Vl, e.user = Gl, e.userRefreshToken = Wl, e.companyType = El, e.company = ql, e.campus = Sl, e.roomConnectorType = Ll, e.roomConnector = Hl, e.userCompany = Jl, e.personGender = $l, e.personCompany = Xl, e.jupUiLayout = Yl, e.buildingType = Zl, e.organization = Ql, e.itemTypeFamily = ep, e.manufacturer = ap, e.object3dModel = tp, e.itemType = op, e.building = np, e.mapScale = rp, e.structure = lp, e.structurePoint = pp, e.floor = sp, e.distributionCostType = yp, e.roomTypeGroup = ip, e.roomType = dp, e.roomTypeGroupToRoomType = cp, e.roomTypeGroupFloor = mp, e.roomTypeGroupBuilding = up, e.costCenter = fp, e.costCenterBuilding = Tp, e.costCenterFloor = gp, e.room = Cp, e.roomPoint = Np, e.roomPointRoom = Op, e.roomPointSegmentType = bp, e.roomPointSegment = hp, e.itemTypePoint = jp, e.dimensionType = Bp, e.dimension = Ip, e.dimensionRoom = Rp, e.dimensionFloor = Mp, e.dimensionBuilding = Up, e.factType = kp, e.fact = Kp, e.personState = Pp, e.personSecurityProfile = Ap, e.person = xp, e.personToPersonType = Fp, e.personToPerson = Dp, e.roomAffectation = vp, e.workplaceType = wp, e.workplaceTypeItemType = zp, e.workplace = _p, e.item = Vp, e.workplaceAffectation = Gp, e.organizationFloor = Wp, e.organizationBuilding = Ep, e.roomTypeFloor = qp, e.roomTypeBuilding = Sp, e.itemToPerson = Lp, e.personToBuilding = Hp, e.dimensionToPerson = Jp, e.dimensionTypeToBuilding = $p, e.workingLocation = Xp, e.personWorkingLocation = Yp, e.personToWorkplaceBooking = Zp, e.personToRoomBooking = Qp, e.personToDimensionBooking = es, e.personCompanyMission = as, e.personCompanyToItemType = ts, e.personCompanyToRoomType = os, e.personCompanyToItem = ns, e.legend = rs, e.openerPostMessageHost = ls, e.jupObjectType = ps, e.jupUiView = ss, e.jupRole = ys, e.jupUiOption = is, e.jupUiOperation = ds, e.contentRole = cs, e.jupUserCompanyToJupRole = ms, e.jupRoleToJupUiView = us, e.jupRoleToJupObjectType = fs, e.jupRoleToJupUiOption = Ts, e.jupRoleToJupUiOperation = gs, e.contentRoleToBuilding = Cs, e.contentRoleToUserCompany = Ns, e.contentRoleToFloor = Os, e.partnerApiCredential = bs, e.apiUser = hs, e.apiUserToJupRole = js, e.apiUserToContentRole = Bs, e.jupUiTenantOperation = Is, e.contentRoleToJupUiTenantOperation = Rs, e.authentificationConnection = Ms, e.userRegistrationTenantRule = Us, e.userRegistrationTenantRuleToJupRole = ks, e.userRegistrationTenantRuleToContentRole = Ks, e.partnerExportMappingConfiguration = Ps, e.partnerExportMapping = As, e.partnerExportMappingToRoomType = xs, e.partnerExportMappingConfigurationToFloor = Fs, e.jupRoleToJupUiLayout = Ds, e.itemFact = vs, e.featureFamily = ws, e.featureGroup = zs, e.feature = _s, e.objectTypes = [e.occupancyStatus, e.user, e.userRefreshToken, e.companyType, e.company, e.campus, e.roomConnectorType, e.roomConnector, e.userCompany, e.personGender, e.personCompany, e.jupUiLayout, e.buildingType, e.organization, e.itemTypeFamily, e.manufacturer, e.object3dModel, e.itemType, e.building, e.mapScale, e.structure, e.structurePoint, e.floor, e.distributionCostType, e.roomTypeGroup, e.roomType, e.roomTypeGroupToRoomType, e.roomTypeGroupFloor, e.roomTypeGroupBuilding, e.costCenter, e.costCenterBuilding, e.costCenterFloor, e.room, e.roomPoint, e.roomPointRoom, e.roomPointSegmentType, e.roomPointSegment, e.itemTypePoint, e.dimensionType, e.dimension, e.dimensionRoom, e.dimensionFloor, e.dimensionBuilding, e.factType, e.fact, e.personState, e.personSecurityProfile, e.person, e.personToPersonType, e.personToPerson, e.roomAffectation, e.workplaceType, e.workplaceTypeItemType, e.workplace, e.item, e.workplaceAffectation, e.organizationFloor, e.organizationBuilding, e.roomTypeFloor, e.roomTypeBuilding, e.itemToPerson, e.personToBuilding, e.dimensionToPerson, e.dimensionTypeToBuilding, e.workingLocation, e.personWorkingLocation, e.personToWorkplaceBooking, e.personToRoomBooking, e.personToDimensionBooking, e.personCompanyMission, e.personCompanyToItemType, e.personCompanyToRoomType, e.personCompanyToItem, e.legend, e.openerPostMessageHost, e.jupObjectType, e.jupUiView, e.jupRole, e.jupUiOption, e.jupUiOperation, e.contentRole, e.jupUserCompanyToJupRole, e.jupRoleToJupUiView, e.jupRoleToJupObjectType, e.jupRoleToJupUiOption, e.jupRoleToJupUiOperation, e.contentRoleToBuilding, e.contentRoleToUserCompany, e.contentRoleToFloor, e.partnerApiCredential, e.apiUser, e.apiUserToJupRole, e.apiUserToContentRole, e.jupUiTenantOperation, e.contentRoleToJupUiTenantOperation, e.authentificationConnection, e.userRegistrationTenantRule, e.userRegistrationTenantRuleToJupRole, e.userRegistrationTenantRuleToContentRole, e.partnerExportMappingConfiguration, e.partnerExportMapping, e.partnerExportMappingToRoomType, e.partnerExportMappingConfigurationToFloor, e.jupRoleToJupUiLayout, e.itemFact, e.featureFamily, e.featureGroup, e.feature], e.objectTypesBySingular = {
    occupancyStatus: e.occupancyStatus,
    user: e.user,
    userRefreshToken: e.userRefreshToken,
    companyType: e.companyType,
    company: e.company,
    campus: e.campus,
    roomConnectorType: e.roomConnectorType,
    roomConnector: e.roomConnector,
    userCompany: e.userCompany,
    personGender: e.personGender,
    personCompany: e.personCompany,
    jupUiLayout: e.jupUiLayout,
    buildingType: e.buildingType,
    organization: e.organization,
    itemTypeFamily: e.itemTypeFamily,
    manufacturer: e.manufacturer,
    object3dModel: e.object3dModel,
    itemType: e.itemType,
    building: e.building,
    mapScale: e.mapScale,
    structure: e.structure,
    structurePoint: e.structurePoint,
    floor: e.floor,
    distributionCostType: e.distributionCostType,
    roomTypeGroup: e.roomTypeGroup,
    roomType: e.roomType,
    roomTypeGroupToRoomType: e.roomTypeGroupToRoomType,
    roomTypeGroupFloor: e.roomTypeGroupFloor,
    roomTypeGroupBuilding: e.roomTypeGroupBuilding,
    costCenter: e.costCenter,
    costCenterBuilding: e.costCenterBuilding,
    costCenterFloor: e.costCenterFloor,
    room: e.room,
    roomPoint: e.roomPoint,
    roomPointRoom: e.roomPointRoom,
    roomPointSegmentType: e.roomPointSegmentType,
    roomPointSegment: e.roomPointSegment,
    itemTypePoint: e.itemTypePoint,
    dimensionType: e.dimensionType,
    dimension: e.dimension,
    dimensionRoom: e.dimensionRoom,
    dimensionFloor: e.dimensionFloor,
    dimensionBuilding: e.dimensionBuilding,
    factType: e.factType,
    fact: e.fact,
    personState: e.personState,
    personSecurityProfile: e.personSecurityProfile,
    person: e.person,
    personToPersonType: e.personToPersonType,
    personToPerson: e.personToPerson,
    roomAffectation: e.roomAffectation,
    workplaceType: e.workplaceType,
    workplaceTypeItemType: e.workplaceTypeItemType,
    workplace: e.workplace,
    item: e.item,
    workplaceAffectation: e.workplaceAffectation,
    organizationFloor: e.organizationFloor,
    organizationBuilding: e.organizationBuilding,
    roomTypeFloor: e.roomTypeFloor,
    roomTypeBuilding: e.roomTypeBuilding,
    itemToPerson: e.itemToPerson,
    personToBuilding: e.personToBuilding,
    dimensionToPerson: e.dimensionToPerson,
    dimensionTypeToBuilding: e.dimensionTypeToBuilding,
    workingLocation: e.workingLocation,
    personWorkingLocation: e.personWorkingLocation,
    personToWorkplaceBooking: e.personToWorkplaceBooking,
    personToRoomBooking: e.personToRoomBooking,
    personToDimensionBooking: e.personToDimensionBooking,
    personCompanyMission: e.personCompanyMission,
    personCompanyToItemType: e.personCompanyToItemType,
    personCompanyToRoomType: e.personCompanyToRoomType,
    personCompanyToItem: e.personCompanyToItem,
    legend: e.legend,
    openerPostMessageHost: e.openerPostMessageHost,
    jupObjectType: e.jupObjectType,
    jupUiView: e.jupUiView,
    jupRole: e.jupRole,
    jupUiOption: e.jupUiOption,
    jupUiOperation: e.jupUiOperation,
    contentRole: e.contentRole,
    jupUserCompanyToJupRole: e.jupUserCompanyToJupRole,
    jupRoleToJupUiView: e.jupRoleToJupUiView,
    jupRoleToJupObjectType: e.jupRoleToJupObjectType,
    jupRoleToJupUiOption: e.jupRoleToJupUiOption,
    jupRoleToJupUiOperation: e.jupRoleToJupUiOperation,
    contentRoleToBuilding: e.contentRoleToBuilding,
    contentRoleToUserCompany: e.contentRoleToUserCompany,
    contentRoleToFloor: e.contentRoleToFloor,
    partnerApiCredential: e.partnerApiCredential,
    apiUser: e.apiUser,
    apiUserToJupRole: e.apiUserToJupRole,
    apiUserToContentRole: e.apiUserToContentRole,
    jupUiTenantOperation: e.jupUiTenantOperation,
    contentRoleToJupUiTenantOperation: e.contentRoleToJupUiTenantOperation,
    authentificationConnection: e.authentificationConnection,
    userRegistrationTenantRule: e.userRegistrationTenantRule,
    userRegistrationTenantRuleToJupRole: e.userRegistrationTenantRuleToJupRole,
    userRegistrationTenantRuleToContentRole: e.userRegistrationTenantRuleToContentRole,
    partnerExportMappingConfiguration: e.partnerExportMappingConfiguration,
    partnerExportMapping: e.partnerExportMapping,
    partnerExportMappingToRoomType: e.partnerExportMappingToRoomType,
    partnerExportMappingConfigurationToFloor: e.partnerExportMappingConfigurationToFloor,
    jupRoleToJupUiLayout: e.jupRoleToJupUiLayout,
    itemFact: e.itemFact,
    featureFamily: e.featureFamily,
    featureGroup: e.featureGroup,
    feature: e.feature
  };
})(it || (it = {}));
function tr(e) {
  return it[e];
}
function Vs(e) {
  const a = tr(e);
  if (!a)
    throw new Error(`impossible to find object type with camedlized name <${e}>`);
  return a;
}
function Gs(e, a) {
  const t = tr(e), o = t.propertiesByName[a];
  if (o)
    return o;
  throw new Error(`property type name not found (${a}) for object type (${t.camelized.singular})`);
}
function Ws(e) {
  const [a, t] = e.split(":"), o = Vs(a);
  return Gs(o.name, t);
}
export {
  tr as getObjectTypeDefinitionByName,
  Ws as getPropertyTypeByCode,
  Gs as getPropertyTypeByName
};
