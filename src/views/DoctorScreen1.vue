<template>
    <div>
        <FormBox formTitle = "Doctor details" />
        <SubmitForm />
        <img src="../assets/images/doctor_image.jpg" alt="Image of a doctor vaccinating a patient">
    </div>
</template>



<script>
    import FormBox from "../components/FormBox.vue"
    import SubmitForm from "../components/SubmitForm.vue"

    export default {
        name: "DoctorScreen1",
        components: {
            FormBox, 
            SubmitForm
        }
    }

</script>

<style>
    img{
        position: absolute;
        width: 818px;
        height: 750px;
        left: 617px;
        top: 65px;
    }
</style>