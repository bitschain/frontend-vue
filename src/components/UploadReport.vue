<template>
    <button id = "upload"><span id = "text">Upload report</span></button>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
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

    #text{
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