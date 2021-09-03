<template>
    <div class="container">
        <div class="left">
            <UploadDocuments />
            <div style="height: 100px"></div>
            <CreateSession />
        </div>
        <div class="right">
            <div>
                <GenerateQRCode />
            </div>
        </div>
    </div>
</template>

<script>
// import store from '../store';
// import API_BASE_URL from '../data/urls';
// import axios from 'axios';
import GenerateQRCode from "./GenerateQRCode";
import UploadDocuments from "./UploadDocuments";
import CreateSession from './CreateSession';

export default {
    name: "PatientDetails",
    components: {
        UploadDocuments,
        GenerateQRCode,
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
    .container {
        display: flex;
        width: 100%;
    }

    .left {
        width: 50%;
    }

    .right {
        width: 50%;
    }
</style>