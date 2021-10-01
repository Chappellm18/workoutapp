import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import hub from '../views/hub.vue'
import settings from '../views/settings.vue'
import stats from '../views/stats.vue'
import workout from '../views/workout.vue'
import exercises from '../views/exercises.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import profile from '../views/profile.vue'
import contact from '../views/contact.vue'


const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/hub', name: 'hub', component: hub },
  { path: '/settings', name: 'settings', component: settings },
  { path: '/stats', name: 'stats', component: stats },
  { path: '/workout', name: 'workout', component: workout },
  { path: '/exercises', name: 'exercises', component: exercises },
  { path: '/profile', name: 'profile', component: profile },
  { path: '/login', name: 'login', component: login },
  { path: '/signup', name: 'signup', component: signup },
  { path: '/contact', name: 'contact', component: contact },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'is-active'
})

export default router
