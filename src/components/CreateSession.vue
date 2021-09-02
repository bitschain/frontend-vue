<template>
    <!--<input id="patientID" type="text">-->
    
    <button id="create-session"><span id="text1" @click="createSession">Create Session</span></button>
</template>

<script>
import store from '../store';
import urls from '../data/urls';
import axios from 'axios';
//import * as umbral from 'umbral-pre';


export default {
    name: "CreateSession",
    methods: {
        async createSession(){
            //store.dispatch("setPatientID", document.getElementById("patientID").value);            

            // let aliceSK = umbral.SecretKey.random();
            // let alicePK = aliceSK.publicKey();

            const aliceSK = "bruh";
            const alicePK = "moment";
            
            store.dispatch("setPrivateKey", aliceSK);
            store.dispatch("setPublicKey", alicePK);
            
            const req = {
                patientId : 1,  
                publicKey: alicePK,
                employeeId: 1,
            };   

            const SESSION_URL = urls.API_BASE_URL + '/generate_qr_string'
            console.log(req);
            await axios.post(SESSION_URL, req).then((res) => {
                console.log(res);
            });
        }
    }

    
}
</script>

<style>
    #patientID{
        position: absolute;
        width: 295px;
        height: 60px;
        left: 152px;
        top: 250px;
        font-size: 32px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: white;
    }
    #create-session{
        position: absolute;
        width: 270px;
        height: 70px;
        left: 165px;
        top: 400px;
        background: rgba(85, 219, 219, 0.2);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
    }
    #text1{
        position: absolute;
        width: 330px;
        height: 55px;
        left: -30px;
        top: 9px;
        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 49px;
        color: #000000;
    }
</style>