import { createStore } from "vuex";

// Vue.use(Vuex);

export default createStore({
    state: {
        visitID: '',
        reportIDs: [],
        patientID: '',
        employeeID: '',
        qr_string: ""
    },
    mutations: {
        SET_VISITID(state, payload){
            state.visitID = payload;
        },
        SET_REPORTIDS(state, payload){
            state.reportIDs = payload;
        },
        SET_EMPLOYEEID(state, payload){
            state.employeeID = payload;
        },
        SET_PATIENTID(state, payload){
            state.patientID = payload;
        },
        SET_QRSTRING(state,payload){
            state.qr_string = payload;
        }
    },
    actions: {
        setVisitID(context, payload){
            context.commit('SET_VISITID', payload);
        },
        setReportIDS(context, payload){
            context.commit('SET_REPORTIDS', payload);
        },
        setEmployeeID(context, payload){
            context.commit('SET_EMPLOYEEID', payload);
        },
        setPatientID(context, payload){
            context.commit('SET_PATIENTID', payload)
        },
        setQRstring(context, payload){
            context.commit('SET_QRSTRING', payload)
        }
    },

})