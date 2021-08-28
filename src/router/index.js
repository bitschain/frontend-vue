import {createRouter, createWebHistory} from 'vue-router'
import DoctorScreen1 from  '../views/DoctorScreen1.vue'
import DoctorScreen2 from '../views/DoctorScreen2.vue'
import UploadDocuments from '../components/UploadDocuments.vue'

const routes = [
    {
        path: '/', 
        name: 'Login', 
        component: DoctorScreen1
    },
    {
        path: '/patient',
        name: 'Patient',
        component: DoctorScreen2        
    },
    {
        path: '/upload_documents',
        name: 'UploadDocuments',
        component: UploadDocuments,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
