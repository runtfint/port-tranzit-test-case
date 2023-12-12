let routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
        meta: {
            title: 'Главная'
        }
    },
]

routes = routes.map(route => {
    return { ...route, meta: { ...route['meta'], public: false } }
})

export default routes
