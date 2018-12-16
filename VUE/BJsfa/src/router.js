import Vue from "vue";
//第一步引入router
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import User from './views/User.vue';
import AddUser from './views/User/userAdd.vue';
import EditUser from './views/User/EditUser.vue';
import Left from './views/Home/Left.vue';
import Right from './views/Home/Right.vue';
import Footer from './views/Home/Footer.vue';
//第二步使用 use註冊外掛
Vue.use(Router);

//第三步創建路由對象  ==>到main引入
export default new Router({
  routes: [
    {
      //如果是哈希 path就是在#後面的
      path: "/",
      name: "home",
      component: Home,
      redirect:'/kk',
      children:[
        {
          path:'kk',
          components:{
            default:Left,
            right:Right,//前面的right是認Home裡面的router-view 的name屬性
            footer:Footer
          }
        }
      ]
    },
    {
      // 可以接受參數
      path:"/login/:id",
      name:"login",
      component:Login
    },
    {
      // 可以接受參數 用props讓子組件接受數據
      path:"/product/:id",
      name:"product",
      props:true,//這樣可以 路由參數 作為屬性傳到參數裡面
      component:()=>
        import("./views/product.vue")
      
    }
    ,
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //下面是一個延遲加載的方式
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    // 子路由
    {
      // 可以接受參數
      path:"/user/:id",
      name:"user",
      component:User,
      redirect:to=>{//直接跳轉到 add畫面
        return `user/${to.params.id}/add`
      },
      children:[
        {
          path:"add",
          component:AddUser
        },
        {
          path:"edit",
          component:EditUser
        }
      ]
    }
  ]
});
