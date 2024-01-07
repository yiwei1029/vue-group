import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../components/LoginView.vue'
import HomeView from '../components/HomeView.vue'
import WelcomeView from '../components/WelcomeView.vue'
import ProdView from '../components/user/ProdView.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/', redirect: "/home" },
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView, redirect: '/welcome',
    children: [{
      path: '/welcome', component: WelcomeView
    },{
      path:'/products',component: ProdView
    }]
  }
]
})

export default router
