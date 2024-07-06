export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      {
        path: 'question-packet-management',
        component: () => import('@/pages/question-packet-management.vue'),
      },
      {
        path: 'subtopic-management',
        component: () => import('@/pages/subtopic-management.vue'),
      },
      {
        path: 'media-management',
        component: () => import('@/pages/media-management.vue'),
      },
      {
        path: 'question-management',
        component: () => import('@/pages/question-management.vue'),
      },
      {
        path: 'question/detail',
        component: () => import('@/pages/question-detail.vue'),
      },
      {
        path: 'question-packet/detail',
        component: () => import('@/pages/question-packet-detail.vue'),
      },
      {
        path: 'profile/:tab',
        component: () => import('@/pages/account-settings.vue'),
      },
      {
        path: 'otp',
        component: () => import('@/pages/otp.vue'),
      }
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
