import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/MainPage.vue')
        },
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: () => import('../pages/LeaderboardPage.vue')
        },
        {
            path: '/game',
            name: 'game',
            component: () => import('../pages/GamePage.vue')
        }
    ]
    })

export default router