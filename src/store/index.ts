/* eslint-disable max-len */
import Vue from 'vue';
import Vuex from 'vuex';
import { IAnsweredQuestion } from '@/models/Question';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: Array<IAnsweredQuestion>(),
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
  },
  actions: {
    addQuestion(context, payload: IAnsweredQuestion) {
      context.commit('addQuestion', payload);
    },
  },
});
