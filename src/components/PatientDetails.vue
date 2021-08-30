<template>
    <CreateSession />
    <GenerateQRCode />
    <UploadDocuments />
    <QRcode />

</template>

<script>
// import store from '../store';
// import API_BASE_URL from '../data/urls';
// import axios from 'axios';
import GenerateQRCode from "./GenerateQRCode";
import UploadDocuments from "./UploadDocuments";
import QRcode from '@/components/QRcode';
import CreateSession from './CreateSession';

export default {
    name: "PatientDetails",
    components: {
        UploadDocuments,
        GenerateQRCode,
        QRcode,
        CreateSession
    },
    data(){
        return {
            dummy: "",
        };
    }
         
}
</script>

<style scoped>
    
</style>