import Vue from "vue";
import VueRouter from "vue-router";
import showkey from '../components/baseShowKey'
import showname from '../components/baseShowName'
import home from '../components/baseHome'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/showkey', component: showkey
        },
        {
            path: '/showname', component: showname
        },
        {
            path: '/home', component: home
        }
    ]
})
export default router