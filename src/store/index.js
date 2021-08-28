import { createStore } from "vuex";

// Vue.use(Vuex);

export default createStore({
    state: {
        visitID: '',
        reportIDs: [],
        patientID: ''
    },
    mutations: {
        SET_VISITID(state, payload){
            state.visitID = payload;
        },
        SET_REPORTIDS(state, payload){
            state.reportIDs = payload;
        },
        SET_PATIENTID(state, payload){
            state.patientID = payload;
        }
    },
    actions: {
        setVisitID(context, payload){
            context.commit('SET_VISITID', payload);
        },
        setReportIDS(context, payload){
            context.commit('SET_REPORTIDS', payload);
        },
        setPatientID(context, payload){
            context.commit('SET_PATIENTID', payload)
        }
    },
})