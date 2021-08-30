<template>
    <input id="patientID" type="text">
    <button id="create-session"><span id="text1" @click="createSession">Create Session</span></button>
</template>

<script>
import store from '../store';
import API_BASE_URL from '../data/urls';
import axios from 'axios';

export default {
    name: "CreateSession",
    methods: {
        async createSession(){
            
            store.dispatch("setPatientID", document.getElementById("patientID").value);

            const req = {
                patientID : store.state.patientID,  
                // need to generate the public key using some js library
                publicKey: "AmfA+94gwP1OF8al3dIXjt9GoCjEsxfv/ECWDmacwARk"
            };   

            const SESSION_URL = API_BASE_URL + '/create_session'
            let res = await axios.post(SESSION_URL, req);

            if(res.status == 200){
                store.dispatch("setVisitID",res.data.visitId);
            }else {
                alert("Could not create the session");
            }
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