<template>
    <h2>Create a new Session</h2>
    <button id="create-session" @click="createSession">
        Create Session
    </button>
</template>

<script>
import store from '../store';
import urls from '../data/urls';
import axios from 'axios';
// import * as umbral from 'umbral-pre'

export default{
    async createSession(){
        // let alice_sk = umbral.SecretKey.random();
        let alice_pk = "einfdfinfdsufnu";

        const req = {
            patientID : store.state.patientID,  
            // need to generate the public key using some js library
            publicKey: alice_pk,
        }; 
        

        const SESSION_URL = urls.API_BASE_URL + '/generate_qr_string'
        console.log(req);
        await axios.post(SESSION_URL, req).then((res) => {
            console.log(res);
        });
    }
}
</script>

<style>
    #create-session{
        width: 270px;
        height: 70px;
        background: rgba(85, 219, 219, 0.2);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        font-size: x-large;
    }
</style>    