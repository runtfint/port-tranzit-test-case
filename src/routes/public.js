let routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginPage.vue'),
        meta: {
            title: 'Вход'
        }
    },
    // {
    //     path: '/:catchAll(.*)',
    //     redirect: '/'
    // },
]


routes = routes.map(route => {
    return { ...route, meta: { ...route['meta'], public: true } }
})

export default routes
