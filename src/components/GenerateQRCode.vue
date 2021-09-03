<template>
    <h2 style="color: red">HOSPITAL A</h2>
    <div class="container">
        <button id="generate" @click="GenerateQRcode">
            Generate QR Code
        </button>
        
        <div v-if="qrString.length > 0">
            <h2>QR Code</h2>
            <qrcode-vue  :value="qrString" :size="300" level="H" />
        </div>
    </div>        
</template>

<script>
import store from '../store'
import urls from '../data/urls';
import axios from 'axios';
import router from '../router/index';

import QrcodeVue from "qrcode.vue";

export default {
    name: "GenerateQRCode",

    components: {
        QrcodeVue,
    },

    methods:{
        async GenerateQRcode(){
            const req = {
                patientId : 1,  
                employeeId: 1,
            };
            const FILE_UPLOAD_URL = urls.API_BASE_URL + '/generate_qr_string'
            let res = await axios.post(FILE_UPLOAD_URL, req);
            if(res.status == 200){
                console.log(res);

                const final_string = JSON.stringify(res.data);
                store.dispatch("setQRstring", final_string);

                const hospital_from_visit_id = res.data.visit_id;
                console.log(hospital_from_visit_id);
                store.dispatch("setHospitalFromVisitId", hospital_from_visit_id);

                setTimeout(() => {
                    router.push("create_session");
                }, 5000);
            }else {
                alert("Could not generate the qr code");
            }
        }
    },

    computed: {
        qrString() {
            return store.state.qr_string;
        },
    },
}
 
</script>

<style scoped>
#generate{
    width: 270px;
    height: 70px;
    left: 45vw;
    font-size: x-large;
    background: rgba(85, 219, 219, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    margin-bottom: 50px;
}

.container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
}
</style>