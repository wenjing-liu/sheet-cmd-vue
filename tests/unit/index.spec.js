import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SimpleSpreadsheet from '@/components/simpleSpreadsheet/index.vue'

describe('SimpleSpreadsheet.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(SimpleSpreadsheet, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
