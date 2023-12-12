import VueRouter from "vue-router";
import privateRoutes from "@/routes/private";
import publicRoutes from "@/routes/public";

const routes = [].concat(publicRoutes).concat(privateRoutes)

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    const authenticated = localStorage.getItem('user_permission')

    const isPublic = to.matched.some(record => record.meta.public)
    if(!isPublic && !authenticated) {
        // Если этот путь только для авторизованных, но пользователь не авторизован
        // Тогда отправляем на страницу авторизации
        return next('/login');
    }

    if(isPublic && authenticated) {
        // Если этот путь только для НЕавторизованных (Страница "Логин"), но пользователь авторизован
        // Тогда отправляем на страницу авторизации
        return next('/');
    }
    next();
})

export default router
