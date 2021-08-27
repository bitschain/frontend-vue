<template>
    <FormBox formTitle = "Enter Patient ID"/>
    <SubmitForm2 />
</template>

<script>
    import FormBox from "../components/FormBox.vue"
    import SubmitForm2 from "../components/SubmitForm2.vue"

export default {
    name: "DoctorScreen2",
    components:{
        FormBox,
        SubmitForm2, 
    }
}
</script>