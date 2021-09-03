<template>
    <h2 style="color: red">PATIENT</h2>
    <h2>Create a new Session</h2>
    <button id="create-session" @click="createSession">
        Create Session
    </button>

    <div class="options" v-if="showOptions">
        <button class="option" @click="redirect(0)">Upload Documents</button>
        <button class="option" @click="redirect(1)">Transfer Documents</button>
        <!--<button class="option">Transfer Documents</button>-->
    </div>
</template>

<script>
import store from '../store/index';
import router from '../router/index';
import urls from '../data/urls';
import axios from 'axios';
// import * as umbral from 'umbral-pre'

export default{
    data(){
        return {
            showOptions: false,
        };
    },

    methods: {
        redirect(option){
            if(option == 0){
                router.push("upload_documents");
            }else{
                router.push("transfer_documents");
            }
        },

        async createSession(){
            // let alice_sk = umbral.SecretKey.random();
            let alice_pk = "A3Mw38dz/ZtZVTDy73OkPT3ckTMvfP2HhEzdWE0E4Eav";

            const req = {
                visitId : store.state.hospital_from_visit_id,  
                // need to generate the public key using some js library
                sessionPublicKey: alice_pk,
            }; 
            console.log(req);

            const SESSION_URL = urls.API_BASE_URL + '/create_session'
            await axios.post(SESSION_URL, req).then((res) => {
                if(res.status === 200){
                    console.log(res);
                    //this.showOptions = true;
                    alert("Created a new session!");
                    router.push("upload_documents");
                }else{
                    console.log(res.data);
                }
            });
        },
    },
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

    .option{
        width: 270px;
        height: 70px;
        background: rgba(85, 219, 219, 0.2);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        font-size: x-large;
        margin-right: 20px;
    }

    .options {
        margin-top: 45px;
    }
</style>    