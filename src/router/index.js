import { createRouter,createWebHashHistory } from 'vue-router'



export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/admin'
        },
        {
            name:'admin',
            path:'/admin',
            component: ()  => import("@/layouts/Admin.vue"),
            children:[
                {
                    name:'goodsList',
                    path:'/goods/list',
                    component: () => import("@/views/goods/GoodsList.vue")
                },
                {
                    name:'goodsCategory',
                    path:'/category/list',
                    component:() => import("@/views/goods/CategoryList.vue")
                },
                {
                    name:'goodsSkusList',
                    path:'/skus/list',
                    component:() => import("@/views/goods/SkusList.vue")
                }
            ]
        },
        {
            name:'login',
            path:'/login',
            component: () => import("@/pages/Login.vue")
        },
        {
            name:'not-found',
            path:'/:pathMatch(.*)',
            component: () => import("@/pages/NotFound.vue")
        }

    ]
})