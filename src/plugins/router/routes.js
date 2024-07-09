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
      },{
        path: 'topic-management',
        component: () => import('@/pages/topic-management.vue'),
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
        path: 'topic/detail',
        component: () => import('@/pages/topic-detail.vue'),
      },
      {
        path: 'subtopic/detail',
        component: () => import('@/pages/subtopic-detail.vue'),
      },
      {
        path: 'question-packet/detail',
        component: () => import('@/pages/question-packet-detail.vue'),
      },
      {
        path: 'admin-management',
        component: () => import('@/pages/admin-management.vue'),
      },
      {
        path: 'student-management',
        component: () => import('@/pages/student-management.vue'),
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
