import { shallowMount } from '@vue/test-utils';
import Success from '@/components/Success.vue';

describe('Success.vue', () => {
  it('renders success message', () => {
    const msg = 'You have successfully submitted the form!';
    const wrapper = shallowMount(Success);
    expect(wrapper.find('.success').text()).toMatch(msg);
  });
});
