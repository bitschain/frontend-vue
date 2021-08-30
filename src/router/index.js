import {createRouter, createWebHistory} from 'vue-router';
import DoctorScreen1 from  '../views/DoctorScreen1.vue';
import DoctorScreen2 from '../views/DoctorScreen2.vue';
import UploadDocuments from '../components/UploadDocuments.vue';
import CreateSession from '../components/CreateSession.vue';
import GenerateQRCode from '../components/GenerateQRCode.vue';

const routes = [
    {
        path: '/', 
        name: 'Login', 
        component: DoctorScreen1,
    },
    {
        path: '/patient',
        name: 'Patient',
        component: DoctorScreen2,        
    },
    {
        path: '/upload_documents',
        name: 'UploadDocuments',
        component: UploadDocuments,
    },
    {
        path: '/create_session',
        name: 'CreateSession',
        component: CreateSession,
    },
    {
        path: '/generate_qr_string',
        name: 'GenerateQRCode',
        component: GenerateQRCode,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
