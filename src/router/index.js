import Vue from 'vue';
import VueRouter from 'vue-router';
import Menus from '../views/Menus.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Menus,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue'),
      },

      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },

      {
        path: '/services',
        name: 'Services',
        component: () => import('../views/Services.vue'),
      },

      {
        path: '/service/:id',
        component: () => import('../views/Service.vue'),
      },

      {
        path: '/special',
        name: 'Special',
        component: () => import('../views/Special.vue'),
      },

      {
        path: '/galleries',
        name: 'Galleries',
        component: () => import('../views/Galleries.vue'),
      },

      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
      },

      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
      },

      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
      },

    ],
  },

  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue'),
      },
      {
        path: 'images',
        component: () => import('../views/admin/Images.vue'),
      },
      {
        path: 'settings',
        component: () => import('../views/admin/Settings.vue'),
      },

    ],
  },

];

const router = new VueRouter({
  routes,
});

export default router;
