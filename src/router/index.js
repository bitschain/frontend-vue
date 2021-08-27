import {createRouter, createWebHistory} from 'vue-router'
import DoctorScreen1 from  '../views/DoctorScreen1.vue'
import DoctorScreen2 from '../views/DoctorScreen2.vue'

const routes = [
    {
        path: '/', 
        name: 'Login', 
        component: DoctorScreen1
    },
    {
        path: '/Patient',
        name: 'Patient',
        component: DoctorScreen2        
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
