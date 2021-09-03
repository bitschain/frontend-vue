<template>
    <div class="p-p-2 p-w-50">
        <FileUpload :customUpload="true" :multiple="true" @uploader="submitForm"></FileUpload>
        <div id="fileBuffer" style="opacity: 0"></div>
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
            let fr = new FileReader();
            fr.readAsBinaryString(file);
            fr.onload = function() {
                document.getElementById("fileBuffer").textContent = fr.result;
            }
        },

        async submitForm(event) {
            this.files = event.files;
            let documents = [];
            this.files.forEach((file) => {
                this.encodeFile(file);
                
                setTimeout(async ()=>{
                    let text = document.getElementById("fileBuffer").textContent;
                    documents.push({
                        "document": text,
                        "documentType": 1, // FIXME: abhi ke liye 1
                    })
                    
                    const req = {
                        employeeId: 1,
                        visitId: 1,
                        documents: documents,   
                    };
                    console.log(req);
                    const FILE_UPLOAD_URL = urls.API_BASE_URL + '/upload_documents'
                    let res = await axios.post(FILE_UPLOAD_URL, req);

                    if (res.status === 200) {
                        console.log(res);
                        store.dispatch("setReportIDS", res.data.reportIds);
                    } else {
                        alert("Could not upload documents!");
                    }

                }, 1000);
            });
        },  
    }
}
</script>

<style scoped>
    div{
        width: 500px;
    }
</style>