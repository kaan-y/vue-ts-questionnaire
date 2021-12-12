import { shallowMount } from '@vue/test-utils';
import Textfield from '@/components/inputs/Textfield.vue';

describe('Textfield.vue', () => {
  it('exits', () => {
    const wrapper = shallowMount(Textfield);
    expect(wrapper.exists()).toBe(true);
  });

  it('has a label', () => {
    const wrapper = shallowMount(Textfield, {
      propsData: {
        label: 'test',
      },
    });
    expect(wrapper.find('label').text()).toBe('test');
  });

  it('shows error message', async () => {
    const wrapper = shallowMount(Textfield);
    await wrapper.setData({ showError: true });
    expect(wrapper.find('.error-message').exists()).toBe(true);
  });
});
