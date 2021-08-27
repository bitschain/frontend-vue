<template>
    <form @submit.prevent ="handleSubmit">
        <label id = "input-title1">Name</label>
        <input id = "input1" type="text" v-model="name"/>
        <label id = "input-title2">Hospital</label>
        <input id = "input2" type="text" v-model="hospital"/>
        <button id = "submit">
            <span id = "submit-text">Submit</span>
        </button>
    </form>
</template>

<script>

import router from '../router'

export default {
    name: "SubmitForm", 
    data(){
        return {
            name: "",
            hospital: ""
        }
    },
    methods: {
        handleSubmit(){
            // this.$router.go({name: 'Patient'})
            router.push("Patient")
            // console.log("Button has been clicked")
        }
    }
}
</script>

<style scoped>
    #input-title1{
        position: absolute;
        width: 119px;
        height: 49px;
        left: 115px;
        top: 230px;
        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 49px;
        color: #000000;
    }   
    #input-title2{
        position: absolute;
        width: 160px;
        height: 49px;
        left: 115px;
        top: 425px;
        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 49px;
        color: #000000;
    }
    #input1{
        position: absolute;
        width: 295px;
        height: 60px;
        left: 150px;
        top: 315px;
        font-size: 25px;
        background: #FFFBFB;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    #input2{
        position: absolute;
        width: 295px;
        height: 60px;
        left: 150px;
        top: 510px;
        font-size: 25px;
        background: #FFFDFD;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    #submit{
        position: absolute;
        width: 175px;
        height: 70px;
        left: 215px;
        top: 615px;
        background: rgba(85, 219, 219, 0.2);
        border-radius: 50px;
    }
    #submit-text{
        position: absolute;
        width: 158px;
        height: 49px;
        left: 8px;
        top: 9px;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 49px;
        color: #000000;
    }
</style>