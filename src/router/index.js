import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout/layout'
import appa from '@/components/app/a'
import appb from '@/components/app/b'
import msga from '@/components/msg/a'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/app',
            component: layout,
            children: [{
                    path: '/',
                    component: appa
                },
                {
                    path: 'appa',
                    component: appa
                },
                {
                    path: 'appb',
                    component: appb
                }
            ]
        },
        {
            path: '/msg',
            component: layout,
            children: [{
                    path: '/',
                    component: msga
                },
                {
                    path: 'msga',
                    component: msga
                }
            ]
        }
    ]
})