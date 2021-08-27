<template>
    <FormBox formTitle = "Enter Patient ID"/>
    <EnterPatientID />
    <GenerateCode />
    <UploadReport />
</template>

<script>
    import FormBox from "./FormBox.vue"
    import GenerateCode from "./GenerateCode.vue"
    import UploadReport from "./UploadReport.vue"
    import EnterPatientID from "./EnterPatientID.vue"

export default {
    name: "DoctorScreen2",
    components:{
        FormBox,
        EnterPatientID,
        GenerateCode,
        UploadReport,
    }
}
</script>