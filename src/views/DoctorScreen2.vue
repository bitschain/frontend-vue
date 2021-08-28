<template>
    <FormBox formTitle = "Enter Patient ID"/>
    <PatientDetails />
</template>

<script>
    import FormBox from "../components/FormBox.vue"
    import PatientDetails from "../components/PatientDetails.vue"

export default {
    name: "DoctorScreen2",
    components:{
        FormBox,
        PatientDetails, 
    }
}
</script>