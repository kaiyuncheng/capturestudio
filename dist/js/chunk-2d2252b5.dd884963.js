(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-2d2252b5'], {
  e2f8(t, c, e) {
    e.r(c); const n = function () { const t = this; const c = t.$createElement; const e = t._self._c || c; return e('div', { staticClass: 'service container' }, [e('h2', [t._v(t._s(t.product.title))]), t._v(` ${t._s(t.product.description)} `)]); }; const a = []; const o = (e('99af'), { name: 'Service', data() { return { product: {} }; }, created() { const t = this; const c = this.$route.params.id; const e = ''.concat('https://course-ec-api.hexschool.io/api/').concat('9dbf2f88-0be6-48e9-9ccc-4a55fdfe8806', '/ec/product/').concat(c); this.$http.get(e).then(((c) => { t.product = c.data.data; })); } }); const i = o; const r = e('2877'); const s = Object(r.a)(i, n, a, !1, null, null, null); c.default = s.exports;
  },
}]);
// # sourceMappingURL=chunk-2d2252b5.dd884963.js.map
