<template>
    <div><button id="generate"><span id="text2" @click="GenerateQRcode" >Generate QR Code</span></button></div>
</template>

<script>
import store from '../store'
import API_BASE_URL from '../data/urls';
import axios from 'axios';
export default {
    name: "GenerateQRCode",
    methods:{
        async GenerateQRcode(){
            
            store.dispatch("setPatientID", document.getElementById("patientID").value);

            const req = {
                patientID : store.state.patientID,  
                // need to generate the public key using some js library
                publicKey: "AmfA+94gwP1OF8al3dIXjt9GoCjEsxfv/ECWDmacwARk" 
            };
            const FILE_UPLOAD_URL = API_BASE_URL + '/generate_qr_string'
            let res = await axios.post(FILE_UPLOAD_URL, req);
            const final_string = JSON.stringify(res)
            if(res.status == 200){
                store.dispatch("setQRstring", final_string);
            }else {
                alert("Could not generate the qr code");
            }

        }
    }
}
 
</script>

<style scoped>
#generate{
        position: absolute;
        width: 270px;
        height: 70px;
        left: 165px;
        top: 600px;
        background: rgba(85, 219, 219, 0.2);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
    }
#text2{
        position: absolute;
        width: 330px;
        height: 49px;
        left: -30px;
        top: 10px;
        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 49px;
        color: #000000;
    }

</style>