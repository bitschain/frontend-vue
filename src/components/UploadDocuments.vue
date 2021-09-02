<template>
    <div class="p-p-2 p-w-50">
        <FileUpload :customUpload="true" :multiple="true" @uploader="submitForm"></FileUpload>
    </div>
</template>

<script>
//import axios from 'axios';
//import store from '../store/index';
//import urls from '../data/urls';

export default {
    data() {
        return {
            files: [],
        };
    },

    methods: {
        async encodeFile(file) {
            // let reader = new FileReader();
            // reader.readAsText(file, "UTF-8");
            // let result;
            // reader.onload = (event) => {
            //     return event.target.result;
            // };
            // console.log(reader.onload.result);
            // return result;

            let text = await file.text();
            console.log(text);
            return text;
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
                employeeId: 1,
                visitId: 1,
                documents: documents,
            };

            console.log(req);

            //console.log(urls.API_BASE_URL);
            // const FILE_UPLOAD_URL = urls.API_BASE_URL + '/upload_documents'
            // let res = await axios.post(FILE_UPLOAD_URL, req);
            // console.log(res);
            // if (res.status === 200) {
            //     store.dispatch("setReportIDS", res.data.reportIds);
            // } else {
            //     alert("Could not upload documents!");
            // }
        },  
    }
}
</script>

<style scoped>
    div{
        width: 500px;
    }
</style>