<template>
    <h2 style="color: red">PATIENT</h2>
    <div>
        <h2>Download Reports</h2>
        <div class="option-container">
            <input type="checkbox" value="Prescription from Dr. S" />
            <label class="options" for="vehicle1"> Prescription from Dr. S</label><br>
            <input type="checkbox" value="CT Scan on 01 Sept" />
            <label class="options" for="vehicle1"> CT Scan on 01 Sept</label><br>
            <input type="checkbox" value="Report on 02 Sept" />
            <label class="options" for="vehicle1"> Report on 02 Sept</label><br>
        </div>

        <button id="submit" @click="downloadDocument">Download</button>

        <a id="downloadLink" href="#" style="opacity: 0">Report</a>
    </div>
</template>

<script>
import store from "../store/index";
import axios from "axios";
import urls from "../data/urls";
import router from "../router/index";

export default {
    methods: {
        async downloadDocument(){
            const visitId = store.state.hospital_from_visit_id

            const URL =  urls.API_BASE_URL + '/get_documents?visit_id='+ visitId +'&report_ids=29';

            const res = await axios.get(URL);
            if(res.status === 200){
                console.log(res);

                const href = "data:application/octet-stream;charset=utf-16le;base64,//" + res.encrypted_document;
                document.getElementById("downloadLink").setAttribute('href', href);
                document.getElementById("downloadLink").click();

                setTimeout(() => {
                    router.push("transfer_documents");
                }, 10000);
            }else{
                alert("Couldn't fetch documents");
            }
        },
    },
}
</script>

<style scoped>
   #input1 {
        height: 30px;
        width: 500px;
        display: block;
        margin: 20px auto;
        font-size: large;
    }

    #input1.focus {
        outline: none;
        box-shadow: none;
    }

    #submit {
        width: 175px;
        height: 50px;
        background: rgba(85, 219, 219, 0.2);
        border-radius: 50px;
        font-size: large;
        margin-top: 20px;
    }

    .options {
        font-size: large;
        color: black;
    }

    .option-container {
        margin-left: 43%;
        text-align: left;
    }
</style>