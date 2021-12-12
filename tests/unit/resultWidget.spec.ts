import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ResultWidget from '@/components/ResultWidget.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    questions: [
      {
        id: 1,
        label: 'How do you feel today?',
        answer: '2',
      },
    ],
  },
});

describe('ResultWidget.vue', () => {
  it('renders question', () => {
    const wrapper = shallowMount(ResultWidget, {
      store,
      localVue,
    });

    expect(wrapper.find('p').text()).toBe(store.state.questions[0].label);
  });

  it('renders answer', () => {
    const wrapper = shallowMount(ResultWidget, {
      store,
      localVue,
    });

    expect(wrapper.find('.result-widget__question-wrapper__answer').text()).toBe(store.state.questions[0].answer);
  });
});
