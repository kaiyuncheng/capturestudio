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
        path: '/customer_info',
        name: 'CustomerInfo',
        component: () => import('../views/CustomerInfo.vue'),
      },

      {
        path: '/customer_confirm/:orderId',
        name: 'CustomerConfirm',
        component: () => import('../views/CustomerConfirm.vue'),
      },

      {
        path: '/customer_complete',
        name: 'CustomerComplete',
        component: () => import('../views/CustomerComplete.vue'),
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
        path: 'storages',
        component: () => import('../views/admin/Storages.vue'),
      },
      {
        path: 'settings',
        component: () => import('../views/admin/Settings.vue'),
      },
      // 模擬訂單系統
      {
        path: 'customer_order',
        component: () => import('../views/admin/CustomerOrders.vue'),
      },
      {
        path: 'customer_checkout/:orderId',
        component: () => import('../views/admin/CustomerCheckout.vue'),
      },

    ],
  },

];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
