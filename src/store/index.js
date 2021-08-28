import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from "vuex";

Vue.use(Vuex);

export default createStore({
    state: {
        visitID: '',
        reportIDs: [],
    },
    mutations: {
        SET_VISITID(state, payload){
            state.visitID = payload;
        },
        SET_REPORTIDS(state, payload){
            state.reportIDs = payload;
        }
    },
    actions: {
        setVisitID(context, payload){
            context.commit('SET_VISITID', payload);
        },
        setReportIDS(context, payload){
            context.commit('SET_REPORTIDS', payload);
        }
    },
})