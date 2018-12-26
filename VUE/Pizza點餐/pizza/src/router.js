import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import About from './views/about.vue'

//about 二級路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

Vue.use(Router);

const router = new Router({
  routes: [{
      name:'homeLink',
      path: '/',
      component: Home
    },
    {
      name:'menuLink',
      path: '/menu',
      component:Menu
    },
    {
      name:'registerLink',
      path: '/register',
      component:Register
    },
    {
      name:'loginLink',
      path: '/login',
      component:Login
    },
    {
      name:'adminLink',
      path: '/admin',
      component:Admin
    },
    {
      name:'maboutLink',
      path: '/about',
      component:About,
      children:[
        //要寫全部全整的也可以 路由展示也會有差
        {path:'/about/contact',name:"contactLink",component:Contact},
        {path:'/history',name:"historyLink",component:History},
        {path:'/ordering',name:"orderingLink",component:OrderingGuide},
        {path:'/delivery',name:"deliveryLink",component:Delivery},
      ]
    },
    {
      path:'*',
      redirect:'/'
    }
  ],
  mode: "history"
});
router.beforeEach((to,from,next)=>{

if(to.path=='/login' || to.path=='/register'){
  next()
}else{
  //  alert('u need to login ');
  //  next('/login')
  next()
}
})
export default router