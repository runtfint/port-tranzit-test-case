let routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginPage.vue'),
        meta: {
            title: 'Вход'
        }
    },
    {
        path: '*',
        redirect: '/'
    },
]


routes = routes.map(route => {
    return { ...route, meta: { ...route['meta'], public: true } }
})

export default routes
