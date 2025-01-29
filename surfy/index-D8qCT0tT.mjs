const b = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], Z = 1, T = 8;
class v {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(t) {
    if (!(t instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [s, e] = new Uint8Array(t, 0, 2);
    if (s !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const o = e >> 4;
    if (o !== Z)
      throw new Error(`Got v${o} data when expected v${Z}.`);
    const i = b[e & 15];
    if (!i)
      throw new Error("Unrecognized array type.");
    const [r] = new Uint16Array(t, 2, 1), [c] = new Uint32Array(t, 4, 1);
    return new v(c, r, i, t);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(t, s = 64, e = Float64Array, o) {
    if (isNaN(t) || t < 0) throw new Error(`Unpexpected numItems value: ${t}.`);
    this.numItems = +t, this.nodeSize = Math.min(Math.max(+s, 2), 65535), this.ArrayType = e, this.IndexArrayType = t < 65536 ? Uint16Array : Uint32Array;
    const i = b.indexOf(this.ArrayType), r = t * 2 * this.ArrayType.BYTES_PER_ELEMENT, c = t * this.IndexArrayType.BYTES_PER_ELEMENT, n = (8 - c % 8) % 8;
    if (i < 0)
      throw new Error(`Unexpected typed array class: ${e}.`);
    o && o instanceof ArrayBuffer ? (this.data = o, this.ids = new this.IndexArrayType(this.data, T, t), this.coords = new this.ArrayType(this.data, T + c + n, t * 2), this._pos = t * 2, this._finished = !0) : (this.data = new ArrayBuffer(T + r + c + n), this.ids = new this.IndexArrayType(this.data, T, t), this.coords = new this.ArrayType(this.data, T + c + n, t * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (Z << 4) + i]), new Uint16Array(this.data, 2, 1)[0] = s, new Uint32Array(this.data, 4, 1)[0] = t);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(t, s) {
    const e = this._pos >> 1;
    return this.ids[e] = e, this.coords[this._pos++] = t, this.coords[this._pos++] = s, e;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const t = this._pos >> 1;
    if (t !== this.numItems)
      throw new Error(`Added ${t} items when expected ${this.numItems}.`);
    return L(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(t, s, e, o) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    const { ids: i, coords: r, nodeSize: c } = this, n = [0, i.length - 1, 0], p = [];
    for (; n.length; ) {
      const u = n.pop() || 0, h = n.pop() || 0, l = n.pop() || 0;
      if (h - l <= c) {
        for (let d = l; d <= h; d++) {
          const w = r[2 * d], _ = r[2 * d + 1];
          w >= t && w <= e && _ >= s && _ <= o && p.push(i[d]);
        }
        continue;
      }
      const f = l + h >> 1, g = r[2 * f], y = r[2 * f + 1];
      g >= t && g <= e && y >= s && y <= o && p.push(i[f]), (u === 0 ? t <= g : s <= y) && (n.push(l), n.push(f - 1), n.push(1 - u)), (u === 0 ? e >= g : o >= y) && (n.push(f + 1), n.push(h), n.push(1 - u));
    }
    return p;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(t, s, e) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    const { ids: o, coords: i, nodeSize: r } = this, c = [0, o.length - 1, 0], n = [], p = e * e;
    for (; c.length; ) {
      const u = c.pop() || 0, h = c.pop() || 0, l = c.pop() || 0;
      if (h - l <= r) {
        for (let d = l; d <= h; d++)
          B(i[2 * d], i[2 * d + 1], t, s) <= p && n.push(o[d]);
        continue;
      }
      const f = l + h >> 1, g = i[2 * f], y = i[2 * f + 1];
      B(g, y, t, s) <= p && n.push(o[f]), (u === 0 ? t - e <= g : s - e <= y) && (c.push(l), c.push(f - 1), c.push(1 - u)), (u === 0 ? t + e >= g : s + e >= y) && (c.push(f + 1), c.push(h), c.push(1 - u));
    }
    return n;
  }
}
function L(a, t, s, e, o, i) {
  if (o - e <= s) return;
  const r = e + o >> 1;
  $(a, t, r, e, o, i), L(a, t, s, e, r - 1, 1 - i), L(a, t, s, r + 1, o, 1 - i);
}
function $(a, t, s, e, o, i) {
  for (; o > e; ) {
    if (o - e > 600) {
      const p = o - e + 1, u = s - e + 1, h = Math.log(p), l = 0.5 * Math.exp(2 * h / 3), f = 0.5 * Math.sqrt(h * l * (p - l) / p) * (u - p / 2 < 0 ? -1 : 1), g = Math.max(e, Math.floor(s - u * l / p + f)), y = Math.min(o, Math.floor(s + (p - u) * l / p + f));
      $(a, t, s, g, y, i);
    }
    const r = t[2 * s + i];
    let c = e, n = o;
    for (P(a, t, e, s), t[2 * o + i] > r && P(a, t, e, o); c < n; ) {
      for (P(a, t, c, n), c++, n--; t[2 * c + i] < r; ) c++;
      for (; t[2 * n + i] > r; ) n--;
    }
    t[2 * e + i] === r ? P(a, t, e, n) : (n++, P(a, t, n, o)), n <= s && (e = n + 1), s <= n && (o = n - 1);
  }
}
function P(a, t, s, e) {
  S(a, s, e), S(t, 2 * s, 2 * e), S(t, 2 * s + 1, 2 * e + 1);
}
function S(a, t, s) {
  const e = a[t];
  a[t] = a[s], a[s] = e;
}
function B(a, t, s, e) {
  const o = a - s, i = t - e;
  return o * o + i * i;
}
const J = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: !1,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: !1,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (a) => a
  // props => ({sum: props.my_value})
}, N = Math.fround || /* @__PURE__ */ ((a) => (t) => (a[0] = +t, a[0]))(new Float32Array(1)), x = 2, M = 3, U = 4, A = 5, j = 6;
class Y {
  constructor(t) {
    this.options = Object.assign(Object.create(J), t), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(t) {
    const { log: s, minZoom: e, maxZoom: o } = this.options;
    s && console.time("total time");
    const i = `prepare ${t.length} points`;
    s && console.time(i), this.points = t;
    const r = [];
    for (let n = 0; n < t.length; n++) {
      const p = t[n];
      if (!p.geometry) continue;
      const [u, h] = p.geometry.coordinates, l = N(O(u)), f = N(I(h));
      r.push(
        l,
        f,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        n,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && r.push(0);
    }
    let c = this.trees[o + 1] = this._createTree(r);
    s && console.timeEnd(i);
    for (let n = o; n >= e; n--) {
      const p = +Date.now();
      c = this.trees[n] = this._createTree(this._cluster(c, n)), s && console.log("z%d: %d clusters in %dms", n, c.numItems, +Date.now() - p);
    }
    return s && console.timeEnd("total time"), this;
  }
  getClusters(t, s) {
    let e = ((t[0] + 180) % 360 + 360) % 360 - 180;
    const o = Math.max(-90, Math.min(90, t[1]));
    let i = t[2] === 180 ? 180 : ((t[2] + 180) % 360 + 360) % 360 - 180;
    const r = Math.max(-90, Math.min(90, t[3]));
    if (t[2] - t[0] >= 360)
      e = -180, i = 180;
    else if (e > i) {
      const h = this.getClusters([e, o, 180, r], s), l = this.getClusters([-180, o, i, r], s);
      return h.concat(l);
    }
    const c = this.trees[this._limitZoom(s)], n = c.range(O(e), I(r), O(i), I(o)), p = c.data, u = [];
    for (const h of n) {
      const l = this.stride * h;
      u.push(p[l + A] > 1 ? R(p, l, this.clusterProps) : this.points[p[l + M]]);
    }
    return u;
  }
  getChildren(t) {
    const s = this._getOriginId(t), e = this._getOriginZoom(t), o = "No cluster with the specified id.", i = this.trees[e];
    if (!i) throw new Error(o);
    const r = i.data;
    if (s * this.stride >= r.length) throw new Error(o);
    const c = this.options.radius / (this.options.extent * Math.pow(2, e - 1)), n = r[s * this.stride], p = r[s * this.stride + 1], u = i.within(n, p, c), h = [];
    for (const l of u) {
      const f = l * this.stride;
      r[f + U] === t && h.push(r[f + A] > 1 ? R(r, f, this.clusterProps) : this.points[r[f + M]]);
    }
    if (h.length === 0) throw new Error(o);
    return h;
  }
  getLeaves(t, s, e) {
    s = s || 10, e = e || 0;
    const o = [];
    return this._appendLeaves(o, t, s, e, 0), o;
  }
  getTile(t, s, e) {
    const o = this.trees[this._limitZoom(t)], i = Math.pow(2, t), { extent: r, radius: c } = this.options, n = c / r, p = (e - n) / i, u = (e + 1 + n) / i, h = {
      features: []
    };
    return this._addTileFeatures(
      o.range((s - n) / i, p, (s + 1 + n) / i, u),
      o.data,
      s,
      e,
      i,
      h
    ), s === 0 && this._addTileFeatures(
      o.range(1 - n / i, p, 1, u),
      o.data,
      i,
      e,
      i,
      h
    ), s === i - 1 && this._addTileFeatures(
      o.range(0, p, n / i, u),
      o.data,
      -1,
      e,
      i,
      h
    ), h.features.length ? h : null;
  }
  getClusterExpansionZoom(t) {
    let s = this._getOriginZoom(t) - 1;
    for (; s <= this.options.maxZoom; ) {
      const e = this.getChildren(t);
      if (s++, e.length !== 1) break;
      t = e[0].properties.cluster_id;
    }
    return s;
  }
  _appendLeaves(t, s, e, o, i) {
    const r = this.getChildren(s);
    for (const c of r) {
      const n = c.properties;
      if (n && n.cluster ? i + n.point_count <= o ? i += n.point_count : i = this._appendLeaves(t, n.cluster_id, e, o, i) : i < o ? i++ : t.push(c), t.length === e) break;
    }
    return i;
  }
  _createTree(t) {
    const s = new v(t.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let e = 0; e < t.length; e += this.stride) s.add(t[e], t[e + 1]);
    return s.finish(), s.data = t, s;
  }
  _addTileFeatures(t, s, e, o, i, r) {
    for (const c of t) {
      const n = c * this.stride, p = s[n + A] > 1;
      let u, h, l;
      if (p)
        u = H(s, n, this.clusterProps), h = s[n], l = s[n + 1];
      else {
        const y = this.points[s[n + M]];
        u = y.properties;
        const [d, w] = y.geometry.coordinates;
        h = O(d), l = I(w);
      }
      const f = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (h * i - e)),
          Math.round(this.options.extent * (l * i - o))
        ]],
        tags: u
      };
      let g;
      p || this.options.generateId ? g = s[n + M] : g = this.points[s[n + M]].id, g !== void 0 && (f.id = g), r.features.push(f);
    }
  }
  _limitZoom(t) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+t), this.options.maxZoom + 1));
  }
  _cluster(t, s) {
    const { radius: e, extent: o, reduce: i, minPoints: r } = this.options, c = e / (o * Math.pow(2, s)), n = t.data, p = [], u = this.stride;
    for (let h = 0; h < n.length; h += u) {
      if (n[h + x] <= s) continue;
      n[h + x] = s;
      const l = n[h], f = n[h + 1], g = t.within(n[h], n[h + 1], c), y = n[h + A];
      let d = y;
      for (const w of g) {
        const _ = w * u;
        n[_ + x] > s && (d += n[_ + A]);
      }
      if (d > y && d >= r) {
        let w = l * y, _ = f * y, m, C = -1;
        const F = ((h / u | 0) << 5) + (s + 1) + this.points.length;
        for (const G of g) {
          const E = G * u;
          if (n[E + x] <= s) continue;
          n[E + x] = s;
          const D = n[E + A];
          w += n[E] * D, _ += n[E + 1] * D, n[E + U] = F, i && (m || (m = this._map(n, h, !0), C = this.clusterProps.length, this.clusterProps.push(m)), i(m, this._map(n, E)));
        }
        n[h + U] = F, p.push(w / d, _ / d, 1 / 0, F, -1, d), i && p.push(C);
      } else {
        for (let w = 0; w < u; w++) p.push(n[h + w]);
        if (d > 1)
          for (const w of g) {
            const _ = w * u;
            if (!(n[_ + x] <= s)) {
              n[_ + x] = s;
              for (let m = 0; m < u; m++) p.push(n[_ + m]);
            }
          }
      }
    }
    return p;
  }
  // get index of the point from which the cluster originated
  _getOriginId(t) {
    return t - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(t) {
    return (t - this.points.length) % 32;
  }
  _map(t, s, e) {
    if (t[s + A] > 1) {
      const r = this.clusterProps[t[s + j]];
      return e ? Object.assign({}, r) : r;
    }
    const o = this.points[t[s + M]].properties, i = this.options.map(o);
    return e && i === o ? Object.assign({}, i) : i;
  }
}
function R(a, t, s) {
  return {
    type: "Feature",
    id: a[t + M],
    properties: H(a, t, s),
    geometry: {
      type: "Point",
      coordinates: [K(a[t]), V(a[t + 1])]
    }
  };
}
function H(a, t, s) {
  const e = a[t + A], o = e >= 1e4 ? `${Math.round(e / 1e3)}k` : e >= 1e3 ? `${Math.round(e / 100) / 10}k` : e, i = a[t + j], r = i === -1 ? {} : Object.assign({}, s[i]);
  return Object.assign(r, {
    cluster: !0,
    cluster_id: a[t + M],
    point_count: e,
    point_count_abbreviated: o
  });
}
function O(a) {
  return a / 360 + 0.5;
}
function I(a) {
  const t = Math.sin(a * Math.PI / 180), s = 0.5 - 0.25 * Math.log((1 + t) / (1 - t)) / Math.PI;
  return s < 0 ? 0 : s > 1 ? 1 : s;
}
function K(a) {
  return (a - 0.5) * 360;
}
function V(a) {
  const t = (180 - a * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(t)) / Math.PI - 90;
}
export {
  Y as default
};
