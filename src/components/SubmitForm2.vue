<template>
    <input type="text">
    <button id = "generate"><span id = "text1">Generate Code</span></button>
    <button id = "upload"><span id = "text2">Upload Report</span></button>
</template>

<script>
export default {
    name: "SubmitForm2"
}
</script>

<style scoped>
    input{
        position: absolute;
        width: 295px;
        height: 60px;
        left: 150px;
        top: 250px;
        font-size: 32px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: white;
    }
    #generate{
        position: absolute;
        width: 270px;
        height: 70px;
        left: 165px;
        top: 430px;
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
    #upload{
        position: absolute;
        width: 270px;
        height: 70px;
        left: 165px;
        top: 570px;
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