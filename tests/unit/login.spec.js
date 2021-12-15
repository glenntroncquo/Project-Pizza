import { mount } from '@vue/test-utils'
import Login from '@/components/LoginComponenet.vue'

describe('Login.vue', () => {
  it('Show error when empty field', async () => {
    const wrapper = mount(Login, {})

    await wrapper.find('#email').setValue('')
    expect(wrapper.find('.input-error').text()).toMatch(
      'This field is required',
    )
  })

  it('Show error when both fields are not filled in', async () => {
    const wrapper = mount(Login, {})

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.error').text()).toMatch('Please fill in all fields')
  })
})
