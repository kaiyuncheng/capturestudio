(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-2d2086b7'], {
  a55b(t, s, e) {
    e.r(s); const a = function () {
      const t = this; const s = t.$createElement; const e = t._self._c || s; return e('div', { staticClass: 'login container' }, [e('form', { staticClass: 'form-sign-in text-center', on: { submit(s) { return s.preventDefault(), t.signin(s); } } }, [e('h2', { staticClass: 'h5 mb-3 font-weight-light' }, [t._v(' Sign in with Email ')]), e('div', { staticClass: 'form-input mb-3' }, [e('label', { staticClass: 'sr-only', attrs: { for: 'inputEmail' } }, [t._v('Email address')]), e('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.user.email, expression: 'user.email',
        }],
        staticClass: 'form-control shadow-none',
        attrs: {
          type: 'email', id: 'inputEmail', placeholder: 'Email address', required: '', autofocus: '',
        },
        domProps: { value: t.user.email },
        on: { input(s) { s.target.composing || t.$set(t.user, 'email', s.target.value); } },
      }), e('label', { staticClass: 'sr-only', attrs: { for: 'inputPassword' } }, [t._v('Password')]), e('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.user.password, expression: 'user.password',
        }],
        staticClass: 'form-control shadow-none',
        attrs: {
          type: 'password', id: 'inputPassword', placeholder: 'Password', required: '',
        },
        domProps: { value: t.user.password },
        on: { input(s) { s.target.composing || t.$set(t.user, 'password', s.target.value); } },
      })]), e('button', { staticClass: 'btn btn-primary btn-block', attrs: { type: 'submit' } }, [t._v(' Sign in ')])])]);
    }; const n = []; const o = (e('99af'), { name: 'Login', data() { return { user: { email: '', password: '' }, token: '' }; }, methods: { signin() { const t = this; const s = ''.concat('https://course-ec-api.hexschool.io/api/', 'auth/login'); this.$http.post(s, this.user).then(((s) => { const e = s.data.token.token; const a = s.data.expired.expired; document.cookie = 'token='.concat(e, ';expires=').concat(new Date(1e3 * a), ';'), t.$router.push('/admin/products'); })).catch(((t) => { console.log(t); })); } } }); const i = o; const r = e('2877'); const l = Object(r.a)(i, a, n, !1, null, null, null); s.default = l.exports;
  },
}]);
// # sourceMappingURL=chunk-2d2086b7.bdc6e29b.js.map
