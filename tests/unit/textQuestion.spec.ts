import { shallowMount } from '@vue/test-utils';
import TextQuestion from '@/components/TextQuestion.vue';

const propsData = [{
  data: {
    type: 'email',
    validation: {
      required: false,
    },
  },
}];

describe('TextQuestion.vue', () => {
  it('exits', () => {
    const wrapper = shallowMount(TextQuestion, {
      propsData,
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('renders index', async () => {
    const wrapper = shallowMount(TextQuestion, {
      propsData,
    });
    await wrapper.setProps({ index: 1 });
    expect(wrapper.find('.text-question__index').text()).toBe('1.');
  });

  it('shows required', async () => {
    const wrapper = shallowMount(TextQuestion, {
      propsData,
    });
    await wrapper.setProps({ data: { validation: { required: true } } });
    expect(wrapper.find('.text-question__required').text()).toBe('(required)');
  });
});
