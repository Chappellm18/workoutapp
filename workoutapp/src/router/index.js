import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import hub from '../views/hub.vue'
import workout from '../views/workout.vue'
import exercises from '../views/exercises.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import profile from '../views/profile.vue'
import contact from '../views/contact.vue'
import social from '../views/social.vue'

import Session from '../services/session'

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/hub', name: 'hub', component: hub },
  { path: '/social', name: 'social', component: social, meta: { requiresLogin: true } },
  { path: '/workout', name: 'workout', component: workout },
  { path: '/exercises', name: 'exercises', component: exercises },
  { path: '/profile', name: 'profile', component: profile, meta: { requiresLogin: true } },
  { path: '/login', name: 'login', component: login },
  { path: '/signup', name: 'signup', component: signup },
  { path: '/contact', name: 'contact', component: contact },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'is-active'
})

router.beforeEach((to,from,next) => {
  if(to.meta.requiresLogin && !Session.user){
    Session.toRoute = to;
    next('/login');
  }
  else {
    next();
  }
})


export default router
