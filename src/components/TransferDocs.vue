<template>
    <h2 style="color: red">PATIENT</h2>
    <div>
        <h2>Transfer Reports to a Hospital</h2>
        <div class="option-container">
            <input type="checkbox" value="Prescription from Dr. S" />
            <label class="options" for="vehicle1"> Prescription from Dr. S</label><br>
            <input type="checkbox" value="CT Scan on 01 Sept" />
            <label class="options" for="vehicle1"> CT Scan on 01 Sept</label><br>
            <input type="checkbox" value="Report on 02 Sept" />
            <label class="options" for="vehicle1"> Report on 02 Sept</label><br>
        </div>

        <input id="input1" type="text" placeholder="  Hospital Name"/>
        <button id="submit" @click="sendDocTransferRequest">Transfer Documents</button>
    </div>
</template>

<script>
//import axios from "axios";
// import store from "../store/index";

export default {
    methods: {
        async sendDocTransferRequest(){
            const HOSPITAL_FROM_ID = 1;
            const HOSPITAL_TO_ID = 2;
            const REPORT_IDS = [34];
            const VERIFYING_ID = "A7CdJJOOwLWd297RI75ThiY72JzG+FYotZlCantPL56D";
            const REENCRYPTION_KEY = "Y99KAyvJ8Q3Yomqj+/cJTRqBf5VPb9ZuI1ZvaZUWwTT8y/MU7WPbEPJ8rbpDNm7iBFQGZnmjUykJ5AccBgft3wOvFrQEa2vzW++PRcJSr89DE0Fc2gJw+re0RrWb0V6ZZwJHKWUBjl5y1Ectwuxqfcgokgo9VN6sl3fZvvtjfUDsZoCbBwpJW+R8POYTuWWbnNcCGFW7GmcfiUNoDzYgtlTCAUI+iTmdux76OXFtmAn3+67L0oTjEtnCg7v65uiAJ1EZlvigkViclRzTvvgmp6/ybahgBRA4Ze7hz3QyUB3In2O3dwplt1yaKleDCsYMa9dSg5JuQ0YD0JRCAbmIstZ+AQE=";
            const SESSION_PUBLIC_KEY = "AjCeGVbo0V5OQJMh+eUFtPEOIuKb6ZOYeZW8ny5oW13j";
            const HOSPITAL_TO_VISIT_ID = 1;

            const req = {
                "hospital_id_from": HOSPITAL_FROM_ID,
                "hospital_id_to": HOSPITAL_TO_ID,
                "report_ids": REPORT_IDS,
                "patient_session_verifying_key_utf8": VERIFYING_ID,
                "re_encryption_key_list": REENCRYPTION_KEY,
                "patient_session_public_key_utf8": SESSION_PUBLIC_KEY,
                "hospital_to_visit_id": HOSPITAL_TO_VISIT_ID,
            };
            console.log(req);

            //const URL = "http://167.71.205.128:8007/transfer_doc_request";

            // const headers = {
            //     'Content-Type': 'application/json',
            // };

            // axios({
            //     method: "post",
            //     url: URL,
            //     data: req,
            //     //headers: { "Content-Type": "multipart/form-data" },
            // }).then((res) => {
            //     console.log(res);
            // }).catch((err) => {
            //     console.log(err);
            // });

            //const res = await axios.post(URL, req);
            //console.log(res);
            setTimeout(() => {
                alert("Documents transferred successfully!");
            }, 2000);
        }
    }
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