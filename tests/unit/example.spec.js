import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.child when passed', () => {
    const child = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { child }
    })
    expect(wrapper.text()).toMatch(child)
  })
})
