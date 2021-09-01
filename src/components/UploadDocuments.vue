<template>
    <div class="p-p-2 p-w-50">
        <FileUpload :customUpload="true" :multiple="true" @uploader="submitForm"></FileUpload>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';
import urls from '../data/urls';

export default {
    data() {
        return {
            files: [],
        };
    },

    methods: {
        encodeFile(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            return reader.result;
        },

        async submitForm(event) {
            this.files = event.files;
            let documents = [];
            this.files.forEach((file) => {
                documents.push({
                    "document": this.encodeFile(file),
                    "documentType": 1, // FIXME: determine how to set document type
                })
            });

            const req = {
                employeeID: store.state.employeeID,
                // visitID: store.state.visitID,
                visitID: 1,
                documents: documents,   
            };
            
            const FILE_UPLOAD_URL = urls.API_BASE_URL + '/upload_documents'
            console.log(FILE_UPLOAD_URL)
            let res = await axios.post(FILE_UPLOAD_URL, req);

            if (res.status === 200) {
                store.dispatch("setReportIDS", res.data.reportIds);
            } else {
                alert("Could not upload documents!");
            }
        },  
    }
}
</script>

<style scoped>
    div{
        width: 500px;
    }
</style>