/* eslint-disable max-len */
import Vue from 'vue';
import Vuex from 'vuex';
import { IAnsweredQuestion } from '@/models/Question';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: Array<IAnsweredQuestion>(),
    isEmailValid: false,
    isPasswordValid: false,
    isFormSubmitted: false,
  },
  mutations: {
    addQuestion(state, payload: IAnsweredQuestion) {
      const index = state.questions.map((q: IAnsweredQuestion) => q.id).indexOf(payload.id);

      if (index !== -1) {
        if (payload.answer.length) {
          state.questions.splice(index, 1, payload);
        } else {
          state.questions.splice(index, 1);
        }
      } else {
        state.questions.push(payload);
      }
    },
    setEmailValid(state, payload: boolean) {
      state.isEmailValid = payload;
    },
    setPasswordValid(state, payload: boolean) {
      state.isPasswordValid = payload;
    },
    submitForm(state, payload: boolean) {
      state.isFormSubmitted = payload;
    },
  },
  actions: {
    addQuestion(context, payload: IAnsweredQuestion) {
      context.commit('addQuestion', payload);
    },
    setEmailValid(context, payload: boolean) {
      context.commit('setEmailValid', payload);
    },
    setPasswordValid(context, payload: boolean) {
      context.commit('setPasswordValid', payload);
    },
    submitForm(context, payload: boolean) {
      context.commit('submitForm', payload);
    },
  },
});
