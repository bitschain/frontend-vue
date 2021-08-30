<template>
    <div id="form-box">
        <div id="form-title">{{formTitle}}</div>
    </div>
</template>

<script>
    export default {
        name: "FormBox",
        props: {
            formTitle: String
        }
    }
</script>

<style scoped>
    #form-box{
        position: absolute;
        width: 450px;
        height: 620px;
        left: 75px;
        top: 104px;

        background: rgba(85, 219, 219, 0.2);
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
    }

    #form-title{
        position: absolute;
        width: 342px;
        height: 49px;
        left: 52px;
        top: 35px;

        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 49px;

        color: #000000;
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