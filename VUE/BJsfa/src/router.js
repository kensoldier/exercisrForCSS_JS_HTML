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
const router= new Router({
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
      ],
    },
    {
      path:'*',
      redirect:'/'
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
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      beforeEnter:(to,from,next)=>{
        console.log('about-beforeEnter')//組件內也可以寫beforeEnter  
       
        next();
        },
      
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
  ],
  mode:"history"//轉換模式 非哈希
});


router.beforeEach((to,from,next)=>{
console.log('全局路由守衛beforeEach')
//可以做前端權限較驗

  next();//不調用後續其他鉤子不會繼續執行
})

router.beforeResolve((to,from,next)=>{
  console.log('全局路由守衛beforeResolve')
    next();//也可以給路近 會跳轉過去 但要進行判斷 to.path!=....
  })

  router.afterEach((to,from)=>{
    console.log('全局路由守衛afterEach')
      // next();沒有next 因為已經結束了
    })  

export default router